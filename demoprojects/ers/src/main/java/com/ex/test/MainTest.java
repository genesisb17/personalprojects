package com.ex.test;

import com.ers.pojos.User;
import com.ers.service.UserService;

public class MainTest {
	
	
	public static void main(String[] args) {
		
	
	UserService serv = new UserService();

	
	serv.createAdmin("Genesis", "Bonds", "test", "test");

	}


}
