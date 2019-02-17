package com.example.controller;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.service.StudentInfoService;

@Controller
public class StudentInfoController {
	
	@Resource
	private StudentInfoService service;

	@RequestMapping("getuserInfo")
	@ResponseBody
	public Map<String,Object> getuserInfo(HttpServletRequest req){
		Map<String,Object> info = service.getuserInfo(req);
		return info;
	}
}
