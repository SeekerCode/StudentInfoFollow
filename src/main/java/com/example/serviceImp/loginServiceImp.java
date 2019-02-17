package com.example.serviceImp;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

import com.example.mapper.loginMapper;
import com.example.model.LoginRoleInfo;
import com.example.service.loginservice;

@Service
public class loginServiceImp implements loginservice{

	@Resource
	private   loginMapper mapper;
	@Override
	public List<LoginRoleInfo> queryMenu(HttpServletRequest req) {
		// TODO Auto-generated method stub
		/*HttpSession session = req.getSession();
		LoginRoleInfo objLogin = (LoginRoleInfo)session.getAttribute("loginuser");
		String strLoginUsertype = objLogin.getUsertype();*/
		List<LoginRoleInfo> usersRole = mapper.queryMenu("3");
         return  usersRole;
	}

}
