package com.example.serviceImp;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.example.mapper.BaseInfoSelectMapper;
import com.example.model.BaseInfo;
import com.example.service.BaseInfoSelectService;

/*
 * Service层接口方法的实现
 */

@Service
public class BaseInfoSelectServiceImp implements BaseInfoSelectService{
   
	@Resource
	private BaseInfoSelectMapper mapper;
	
	@Override
	public Map<String, Object> getMajorInfo(HttpServletRequest req) {
		Map<String, Object> map = new HashMap<>();
		List<BaseInfo> info = null;
		String majorcode = (req.getParameter("majorcode") == null ? "" : req.getParameter("majorcode").trim());
	  //System.out.println("你的学号是:" + majorcode);
		info = mapper.getMajorInfo(majorcode);
		map.put("rows", info);
		map.put("count", 1);
		return map;
	}

	@Override
	public Map<String, Object> getClassInfo(HttpServletRequest req) {
		Map<String, Object> map = new HashMap<>();
		List<BaseInfo> info = null;
		String majorcode = (req.getParameter("majorcode") == null ? "" : req.getParameter("majorcode").trim());
		String year = (req.getParameter("year") == null ? "" : req.getParameter("year").trim());
		info = mapper.getClassInfo(majorcode,year);
		map.put("rows", info);
		map.put("count", 1);
		return map;
	}

}
