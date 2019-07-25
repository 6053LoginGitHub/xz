const express=require('express');
//引入连接池
const pool=require('../pool.js');


//创建路由器对象
var router=express.Router();

//用户注册路由

router.post('/reg',function(req,res){
	var objReg=req.body;

	if(!objReg.uname){
		res.send({code:401,message:'uname required'});
		return;
	}
	if(!objReg.upwd){
		res.send({code:402,message:'upwd required'});
		return;
	}
	 if(!objReg.email){
		res.send({code:403,message:'email required'
		});
		return;
	}
	if(!objReg.phone){
		res.send({code:404,message:'phone required'});
		return;
	}
	//插入数据到xz数据库
	var insertSql='insert into xz_user set ?';
	pool.query(insertSql,[objReg],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'register success'});
			return;
		}
		res.send({code:301,msg:'register default'});
	});
	
});

//用户登录路由
router.post('/login',function(req,res){
	var objLogin=req.body;
	if(!objLogin.uname){
		res.send({code:401,message:'uname required'});
		return;
	}
	if(!objLogin.upwd){
		res.send({code:402,message:'upwd required'});
		return;
	}
	/*
	//1、验证用户名与密码
	var selectSql='select uname,upwd from xz_user';
	pool.query(selectSql,function(err,result){
		if(err) throw err;
		//验证用户名和密码
		for(var i=0;i<result.length;i++){
			//验证成功
			if((objLogin.uname == result[i].uname)&&(objLogin.upwd == result[i].upwd)){
				res.send({code:200,message:'login success'});
				return;
			}
		}
		//验证失败
		res.send({code:301,msg:'login default'});
	});
	*/
	//2、验证用户名与密码
	var selectSql='select * from xz_user where uname=? and upwd=?';
	pool.query(selectSql,[objLogin.uname,objLogin.upwd],function(err,result){
		if(err) throw err;
		if(result!=''){
			res.send({code:200,message:'login success'});
			return;
		}
		res.send({code:301,msg:'login default'});
	});
});

//用户检索路由
router.get('/detail',function(req,res){
	//验证是否为空
	if(!req.query.uid){
		res.send({code:i,message:'uid required'});
		return;
	}
	//根据id查询用户信息
	var detailSqlById='select * from xz_user where uid=?'
	pool.query(detailSqlById,[req.query.uid],function(err,result){
		if(err) throw err;
		//判断是否查询成功
		if(result[0]){
			res.send({code:200,massage:'select success'});
			return;
		}
		res.send({code:301,massage:'select default'});
	});
});

//用户修改路由
router.get('/update',function(req,res){
	var objUpdate=req.query;
	//批量验证
	var i=400;
	for(var key in objUpdate){
		i++;
		if(!objUpdate[key]){
			res.send({code:i,message:key+'required'});
			return;
		}
	}
	//更改数据库数据
	var updateSql='update xz_user set ? where uid=?';
	pool.query(updateSql,[objUpdate,objUpdate.uid],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,message:'update success'});
			return;
		}
		res.send({code:301,msg:'update default'});

	});
});

//用户查询分页路由
router.get('/list',function(req,res){
	var objList=req.query;
	//如果输入值为空，设置默认值
	if(!objList.page){
		objList.page=1;
	}
	if(!objList.size){
		objList.size=3;
	}
	//把值转为数值型
	for(var key in objList){
		objList[key]=parseInt(objList[key]);
		
		if(isNaN(objList[key])){
			res.send({code:301,msg:key+'not a number'});
			return;
		}
		
	}
	var start=(objList.page-1)*objList.size;
	
	//分页查询
	var limitSql='select * from xz_user limit ?,?';
	pool.query(limitSql,[start,objList.size],function(err,result){
		if(err) throw err;
		if(result.length>0){
			//res.send({code:200,message:'update success'});
			res.send(result);
			return;
		}
		res.send({code:301,msg:'update default'});

	});
});
//用户删除路由
router.get('/delete',function(req,res){
	//判断是否有数据传入
	var objDelete=req.query;

	if(!objDelete.uid){
		res.send({code:401,message:'uid required'});
		return;
	}
	//从数据库中删除
	var deleteSql='delete from xz_user where uid=?';
	pool.query(deleteSql,[objDelete.uid],function(err,result){
		if(result.affectedRows>0){
			res.send({code:200,message:'delete success'});
			return;
		}
		res.send({code:301,message:'delete default'});
	});
});
//导出路由器对象
module.exports=router;


















