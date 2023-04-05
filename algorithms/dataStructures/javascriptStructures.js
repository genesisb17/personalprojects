/**
 * Creating my own data structures in JS practicing for interviews/life/etc
 */



/**
A stack is a last-in-first-out (LIFO) data structure. It has three primitive operations:

Push: Add an element to the stack
Pop: Remove an element from the stack
Peek: Get the topmost element of the stack
 */
class CStack{

    constructor(){
        this.data = [];
    }

    push(element){
        this.data[this.data.length] = element;
    }

    pop(){}

    peek(){
        return this.data[this.data.length - 1]
    }


}


class cSet{

}

class CQueue{

}

/**
 * A priority queue is a special type of queue in which each element is associated 
 * with a priority value. And, elements are served on the basis of their priority. 
 * That is, higher priority elements are served first. However, if elements with 
 * the same priority occur, they are served according to their order in the queue.
 * 
 * 
 * Difference between Priority Queue and Normal Queue
    In a queue, the first-in-first-out rule is implemented whereas, in a priority 
    queue, the values are removed on the basis of priority. The element with the 
    highest priority is removed first.

    Priority queue can be implemented using an array, a linked list, a heap data 
    structure, or a binary search tree. Among these data structures, heap data 
    structure provides an efficient implementation of priority queues.
 */
class CPriorityQueue{

    constructor(){}

    insert(element){}

    delete(element){}

}




