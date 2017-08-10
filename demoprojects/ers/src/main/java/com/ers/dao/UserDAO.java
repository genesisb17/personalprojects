package com.ers.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import com.ers.pojos.User;
import com.ers.util.ConnectionUtil;

public class UserDAO {
	
	public void createUser(User u){
		
		Session session = ConnectionUtil.getSession();
		try{
			Transaction tx = session.beginTransaction();
			session.save(u);
			tx.commit();
		}
		finally{
			session.close();
		}
	}
	
	public List<User> getAllUsers(){
		Session session = ConnectionUtil.getSession();
		Criteria criteria = session.createCriteria(User.class);
		List<User> people= criteria.list();
		session.close();
		return people;
	}
	
	public List<User> getAllEmployees(){
		Session session = ConnectionUtil.getSession();
		Criteria criteria = session.createCriteria(User.class);
		List<User> people= criteria.list();
		session.close();
		return people;
	}
	
	public void update(User u){
		Session session = ConnectionUtil.getSession();
		try{
			Transaction tx = session.beginTransaction();
			session.update(u);
			tx.commit();
		}
		catch(HibernateException e){
			e.printStackTrace();
		}
		finally{
			session.close();
		}
	}
	
	public void deleteById(int id){
		Session session = ConnectionUtil.getSession();
		try{
			Transaction tx = session.beginTransaction();
			User u = new User();
			u.setId(id);
			session.delete(u);
			tx.commit();
		}
		finally{
			session.close();
		}
	}
	
	public User getUserById(int id){
		Session session = ConnectionUtil.getSession();
		User u = null;
		try{
			u = (User) session.get(User.class,id);
			System.out.println(u);
		}
		catch(HibernateException e){
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		
		return u;
	}
	
	public User getUserByEmail(String email){
		Session session = ConnectionUtil.getSession();
		User u = null;
		try{
			u = (User) session.createCriteria(User.class,"user").add(Restrictions.eq("user.email",email)).uniqueResult();
			System.out.println(u);
		}
		catch(HibernateException e){
			e.printStackTrace();
		}
		finally{
			session.close();
		}
		
		return u;
	}
	

	
	

}
