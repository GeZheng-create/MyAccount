package com.demo.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.demo.entity.Account;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.*;

import java.util.List;
@CrossOrigin

@Mapper      
public interface AccountDao {

public List<Account> queryAccountList(Account account);

 
//List<Account> queryAccountList();
//void deleteAccount(int id);
//
//List<Account> queryAccountList(int id);
//void updateAccount(Account account);
//void addAccount(Account account);
//

@Select("SELECT rid,cust_rid,cus_num,acct_num,billagt,alias FROM DG_SUBN ORDER BY RID")
List<Account> findAll();

@Select("select rid,cust_rid,cus_num,acct_num,billagt,alias from DG_SUBN where rid=#{rid}")
public Account selectId(Integer RID);

@Delete("delete from DG_SUBN where rid=#{rid}")
public int deleteId(Integer RID);

//@Insert("insert into DG_SUBN( ) values(#{RID},#{CUST_RID},#{BILLAGT})")
//public int insertAccount(Account account);

@CrossOrigin
@Update("update DG_SUBN set alias=#{alias} where rid=#{rid}")
public int UpdateAcc(String alias, Integer rid);

}


	
