package com.ers.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="USERS")
public class User {
	
	
	@Id
	@Column(name="USER_ID")
	@SequenceGenerator(name="USERID_SEQ", sequenceName="USERID_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="USERID_SEQ")
	private int id;
	
	
	@Column(nullable=false)
	private String firstname;
	
	@Column(nullable=false)
	private String lastname;
	
	@Column (nullable=false)
	private boolean isAdmin;
	
	@Column(unique=true, nullable=false)
	private String email;
	
	@Column (nullable=false)
	private String password;


	

	public User(int id, String firstname, String lastname, boolean isAdmin, String email, String password) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.isAdmin = isAdmin;
		this.email = email;
		this.password = password;
	}

	public User(int id, String firstname, String lastname, boolean isAdmin, String email) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.isAdmin = isAdmin;
		this.email = email;
	}
	
	public User( String firstname, String lastname, boolean isAdmin, String email) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.isAdmin = isAdmin;
		this.email = email;
	}
	
	public User(){}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", isAdmin=" + isAdmin
				+ ", email=" + email + ", password=" + password + "]";
	}

	
	

}
