package com.example.model;

public class BaseInfo {
	private String classid   	= "";
	private String classcode 	= "";
	private String classname 	= "";
	private String majorid   	= "";
	private String majorcode 	= "";
	private String majorname 	= "";
	private String year      	= "";
	private int    count     	= 0;
	private String studentcode  = "";
	private String studentname  = "";
	private String sex			= "";
	
	public String getStudentcode() {
		return studentcode;
	}
	public void setStudentcode(String studentcode) {
		this.studentcode = studentcode;
	}
	public String getStudentname() {
		return studentname;
	}
	public void setStudentname(String studentname) {
		this.studentname = studentname;
	}
	public String getClassid() {
		return classid;
	}
	public void setClassid(String classid) {
		this.classid = classid;
	}
	
	public String getClasscode() {
		return classcode;
	}
	public void setClasscode(String classcode) {
		this.classcode = classcode;
	}
	public String getClassname() {
		return classname;
	}
	public void setClassname(String classname) {
		this.classname = classname;
	}
	public String getMajorid() {
		return majorid;
	}
	public void setMajorid(String majorid) {
		this.majorid = majorid;
	}
	public String getMajorcode() {
		return majorcode;
	}
	public void setMajorcode(String majorcode) {
		this.majorcode = majorcode;
	}
	public String getMajorname() {
		return majorname;
	}
	public void setMajorname(String majorname) {
		this.majorname = majorname;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	
	
	

}
