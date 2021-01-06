package com.demo.service;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entity.Account;
import com.demo.dao.AccountDao;

import java.util.List;

@Service
public interface AccountService {

 
	public List<Account> queryAccountList(Account account);

}
