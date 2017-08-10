package com.ers.pojos;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name ="REIMBURSEMENT")
public class Reimbursement {

	@Id
	@Column
	@SequenceGenerator(name="R_SEQ", sequenceName="R_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="R_SEQ")
	private int id;
	
	@Column (nullable=false)
	private double amount;

	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date submitted;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date resolved;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="AUTHOR")
	private User author;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="RESOLVER")
	private User resolver;
	
	@Column
	private String description;

	@Column (nullable=false)
	private char status;
	//private File receipt;
	
	
	
}
