const { loadVolunteers, loadTasks } = require("./util");
const { Volunteer } = require("./volunteer");
const { Task } = require("./task");

class AssignmentServer {
    constructor() { 
        /** @private {!Map<Volunteer, Set<Task>>} A map of Volunteers to assigned Tasks. */
        this.assignments = new Map();
        
        /** @private {!Map<number, Task>} A map of task ids to Tasks. */
        this.tasks = new Map();

        /** @private {!Array<Volunteer>} The list of all volunteers. */
        this.volunteers = [];
    }

    async importTasksFromCSV(csvFileName) {
        this.tasks = await loadTasks(csvFileName);
    }

    async importVolunteersFromCSV(csvFileName) {
        this.volunteers.push(...(await loadVolunteers(csvFileName, this.tasks)));
    }

    /**
     * Returns an Array of the volunteers who have indicated interest in the 
	 * given task.
     * @param {Task} task the task to find interested Volunteers for
     *
     * @return {!Array<Volunteer>} the volunteers
     */
    getInterestedVolunteers(task) {
        let volunteers = []
        // loop through all volunteers, if they are interested in task, add to list of volunteers
        for(let v of this.volunteers){
            if(v.isInterested(task)){
                volunteers.push(v);
            }
        }
        return volunteers;
    }

    /**
     * Returns a List of Tasks sorted by desirability.
     * 
     * @return {!Array<Task>} the tasks
     */
    getTasksByDesirability() {
        let out = [];
        // sum of desirability for all volunteers interested in this task
        let peopleFacingScores = new Map();
        let otherScores = new Map();
        //get scores for each task and add to map
        for(let [id,task] of this.tasks){
            const interested = this.getInterestedVolunteers(task);
           
            let points = 0;
            for(let v of interested){
                points += v.getTaskDesirabilityScore(task);
            }
            if(task.peopleFacing){
                peopleFacingScores.set(task, points);
            }else{
                otherScores.set(task, points);
            }
        
        }

        //sort in arrays descending order (highest score first). 
        //add people facing tasks to array first, then add non people facing

        let sortedPeople = new Map([...peopleFacingScores.entries()].sort((a, b)=> b[1] - a[1]));
        let sortedOther = new Map([...otherScores.entries()].sort((a, b)=>  b[1] - a[1]));
       
        for(let [k, v] of sortedPeople){
            out.push(k);
        }
        for(let [k, v] of sortedOther){
            out.push(k);
        }
        return out;
        
    }

    /**
     * Assigns Tasks to Volunteers by inserting them into the assignment map,
     * in order of desirability. Tasks are assigned to the first Volunteer with
     * interest. If there are no interested Volunteers, they are assigned to the
     * first available Volunteer.
     */
    assignTasks() {
        for (const task of this.getTasksByDesirability()) {
            const interestedVolunteers = this.getInterestedVolunteers(task);
            if (interestedVolunteers.length > 0) {
                this.assignTask(task, interestedVolunteers[0]);
            } else if (this.volunteers.length > 0) {
                this.assignTask(task, this.volunteers[0]);
            }
        }
    }

    /**
     * Assigns Tasks to Volunteers based on their interests.
     * 
     * 
     * 
     * GOAL: 
     * loop through tasks by desirability and assign volunteers up to the 
     * determined cap of volunteers as to not overload the super desirable tasks 
     * with volunteers unnecessarily, 
     * then we loop through the assignments and look for any volunteer without 
     * enough tasks, and give them the more desirable tasks
     * this greatly improves the satisfaction score
     * 
     * 
     * 
     */
    assignTasksImproved() {
   
        const avg = this.tasks.size / this.volunteers.length;
        for(const task of this.getTasksByDesirability()){
            let interestedVolunteers = this.getInterestedVolunteers(task);
            for(let i = 0; i < avg; i++){
                if(interestedVolunteers.length == 0){ break; }
                this.assignTask(task, interestedVolunteers[0]);
                interestedVolunteers.shift();
            }
        }

        for(let [v, tasks] of this.assignments){
            let t = this.getTasksByDesirability();
            while(tasks.size < avg){
                this.assignTask(t, v);
                t.shift();
            }
        }
    }

    /**
     * Adds the given Task to the specified Volunteer's Set of assigned Tasks.
     *
     * @param {Task} task the task to assign
     * @param {Volunteer} volunteer the volunteer to assign the Task to
     */
    assignTask(task, volunteer) {
        if (!(this.assignments.has(volunteer))) {
            this.assignments.set(volunteer, new Set());
        }
        this.assignments.get(volunteer).add(task);
    }
}

module.exports = { AssignmentServer };


/// volunteer
const { Task } = require("./task");

class Volunteer {
    /**
     * @param {string} name
     */
    constructor(name) {
        this.name = name;

        /** @private {!Array<Task>} The Tasks this Volunteer is interested in. */
        this.interestedTasks = [];
    }

    getName() {
        return this.name;
    }

    /**
     * Adds a Task to this Volunteer's interestedTasks array.
     * @param {Task} task
     */
    addInterestedTask(task) {
        this.interestedTasks.push(task);
    }

    /**
     * Removes a Task from this Volunteer's interestedTasks array.
     * @param {Task} task
     */
    removeInterestedTask(task) {
        this.interestedTasks = this.interestedTasks.filter(item => item != task);
    }

    /**
     * Returns whether this Volunteer is interested in the given Task.
     * @param {Task} task
     */
    isInterested(task) {
        return this.interestedTasks.includes(task);
    }

    /**
     * Returns a float representing how desirable the given task is to this
     * volunteer.
     * @param {Task} task
     */
    getTaskDesirabilityScore(task) {
         //If the Task does not appear in the Volunteer's interestedTasks list, the method should return 0.
        if(!this.isInterested(task)){
            return 0;
        } else{
            // a task's desirability score for a given volunteer is calculated by the 
            // function 1 / (x + 1), where x is the index of the task in the volunteer's interestedTasks list.
            for(let i = 0; i < this.interestedTasks.length; i++){
                if(this.interestedTasks[i].id == task.id){
                    return 1/(i+1);
                }
            }
        }
    }

    toString() {
        return this.name;
    }
}

module.exports = { Volunteer };