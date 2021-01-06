package com.demo.controller;

import com.demo.controller.AccountController;
import com.demo.service.AccountService;
import com.demo.dao.AccountDao;
import com.demo.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

import javax.annotation.Resource;
	
	@CrossOrigin
	@RestController
	public class AccountController {
    
		@Autowired
	     AccountService AccountService;

		@Autowired
	     AccountDao accountDao;
		
 		@GetMapping("/hello" )
		 public List<Account> getAll() {
	        return accountDao.findAll();        
	    }
	    	
		 @RequestMapping(value="/get/{RID}", method=RequestMethod.GET)
	     public Account getAccount(@PathVariable("RID") Integer rid){
	     return accountDao.selectId(rid);
		 }
	 
	   @CrossOrigin
	   @RequestMapping(value="/update",method=RequestMethod.PUT)
       public Account updateAccount(@RequestParam("ALIAS") String alias,@RequestParam("RID") Integer rid){
          accountDao.UpdateAcc(alias,rid);
           return accountDao.selectId(rid);
      }
	   
	   @CrossOrigin
       @RequestMapping(value="/delete/{RID}",method=RequestMethod.DELETE)
       public List<Account> deleteAccount(@PathVariable("RID") Integer rid){
          accountDao.deleteId(rid);
           return accountDao.findAll();
      }
       
      
	}
