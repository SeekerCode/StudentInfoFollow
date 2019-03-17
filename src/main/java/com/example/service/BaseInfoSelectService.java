package com.example.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
/*
 * 接口层，只进行方法的定义
 */
public interface BaseInfoSelectService {

	Map<String, Object> getMajorInfo(HttpServletRequest req);

	Map<String, Object> getClassInfo(HttpServletRequest req);

}
