package com.ers.servlets;

import com.ers.pojos.User;
import com.ers.service.UserService;

public class UserServlet {
	
	//login
	public void doPost(){
		String email = "";
		String password ="";
		UserService service = new UserService();
		User u = service.login(email, password);
		
		if(u == null){
			// functionality to say email does not exist
		}
		else if(u.getPassword() == null){
			// functionality for existing user but invalid pass
		}
		
		else{
			// assign user to post response
		}
	}

}
