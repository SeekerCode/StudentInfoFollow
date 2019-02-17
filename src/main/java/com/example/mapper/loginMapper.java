package com.example.mapper;

import java.util.List;

import com.example.model.LoginRoleInfo;

public interface loginMapper {

	List<LoginRoleInfo> queryMenu(String strLoginUserId);

}
