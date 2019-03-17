package com.example.controller;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.service.BaseInfoSelectService;

@Controller
@RequestMapping("BaseInfoSelectController")
public class BaseInfoSelectController {
	
	@Resource
	private BaseInfoSelectService service;
	
	@RequestMapping("/getMajorInfo")
	@ResponseBody
	public  Map<String,Object> getMajorInfo(HttpServletRequest req){
		
	  Map<String,Object> info = service.getMajorInfo(req);
	  
	  return info;
	}
	
	@RequestMapping("/getClassInfo")
	@ResponseBody
	public  Map<String,Object> getClassInfo(HttpServletRequest req){
		
	  Map<String,Object> info = service.getClassInfo(req);
	  return info;
	}

}
