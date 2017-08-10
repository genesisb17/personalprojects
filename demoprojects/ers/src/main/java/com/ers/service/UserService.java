package com.ers.service;

import java.security.SecureRandom;
import java.util.ArrayList;

import org.apache.commons.lang3.RandomStringUtils;

import com.ers.dao.UserDAO;
import com.ers.pojos.User;

public class UserService {
	
	static UserDAO udao = new UserDAO();
	
	public void createAdmin(String fn, String ln, String email, String password){
		User u = new User();
		u.setFirstname(fn);
		u.setLastname(ln);
		u.setEmail(email);
		u.setPassword(password);
		u.setAdmin(true);
		
		udao.createUser(u);
		
	}
	
	public void createEmployee(String fn, String ln, String email){
		User u = new User();
		u.setFirstname(fn);
		u.setLastname(ln);
		u.setEmail(email);
		u.setPassword(generatePassword());
		u.setAdmin(false);
		// send email to Employee to change PW
		
		udao.createUser(u);
		
	}
	
	static String generatePassword(){
		
		char[] possibleCharacters = (new String("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-_=+[{]}\\|;:\'\",<.>/?")).toCharArray();
		String pass = RandomStringUtils.random( 10, 0, possibleCharacters.length-1, false, false, possibleCharacters, new SecureRandom() );
		
		return pass;
		
	}
	
	public ArrayList<User> getAllUsers(){
		ArrayList<User> users = (ArrayList<User>) udao.getAllUsers();
		return users;
	}
	
	public ArrayList<User> getAllEmployees(){
		ArrayList<User> users = (ArrayList<User>) udao.getAllEmployees();
		return users;
	}
	
	public static User validateUser(String email){
		User u = udao.getUserByEmail(email);
		if(email==null)return null; // if email address doesnt exist return null
		else return u; // if email address does exist return user
	}
	
	public User login(String email, String password){
		User u = validateUser(email);
		if(email==null) return null; // 
		else{
			if(password.equals(u.getPassword())){
				return u;
			}
			else{
				User falseLogin = new User();
				falseLogin.setEmail(email);
				return falseLogin;
			}
		}
	}
	
	

}
