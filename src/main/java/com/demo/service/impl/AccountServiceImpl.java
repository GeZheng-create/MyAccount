package com.demo.service.impl;

import com.demo.controller.AccountController;
import com.demo.dao.AccountDao;
import com.demo.entity.Account;
import com.demo.service.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

import javax.annotation.Resource;

@Service
public class AccountServiceImpl implements AccountService{

	@Resource
	private AccountDao accountDao;

    @Override
    public List<Account> queryAccountList(Account account){
    	return accountDao.queryAccountList(account);
    	
    }

}
