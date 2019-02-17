package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.model.LoginRoleInfo;
import com.example.service.loginservice;

@Controller
@SuppressWarnings("unused")
public class loginController {

	@Resource
	private loginservice service;
	
	@RequestMapping("/index")
	public String ToIndex(){
		String aString = "";
		return "studentinfo/baseinfo/index";
	}
	
	@RequestMapping("/queryMenu")
	@ResponseBody
	public List<LoginRoleInfo> queryMenu(HttpServletRequest req){
		 List<LoginRoleInfo> meun = new ArrayList<>();
		 meun = service.queryMenu(req);
		 return meun;
	}
}
