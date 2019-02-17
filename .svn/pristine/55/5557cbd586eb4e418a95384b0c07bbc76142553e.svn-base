package com.example.serviceImp;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import com.example.mapper.StudentInfoMapper;
import com.example.model.StudentInfo;
import com.example.service.StudentInfoService;
@Service
public class StudentInfoServiceImp implements StudentInfoService{

	@Resource
	private StudentInfoMapper mapper;
	@Override
	public Map<String, Object> getuserInfo(HttpServletRequest req) {
		// TODO Auto-generated method stub
		Map<String, Object> map = new HashMap<>();
		List<StudentInfo> into = mapper.getuserInfo();
		map.put("rows", into);
		map.put("total", 1);
		return map;
	}

}
