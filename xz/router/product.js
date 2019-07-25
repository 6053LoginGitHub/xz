const express=require('express');
const pool=require('../pool.js');

var router=express.Router();
//商品列表分页路由
router.get('/list',function(req,res){
	var objList=req.query;
	//如果输入值为空，设置默认值
	if(!objList.page){
		objList.page=1;
	}
	if(!objList.size){
		objList.size=9;
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
	var limitSql='select lid,title,price from xz_laptop limit ?,?';
	pool.query(limitSql,[start,objList.size],function(err,result){
		if(err) throw err;
		if(result.length>0){
			//res.send({code:200,message:'update success'});
			res.send(result);
			return;
		}
		res.send({code:301,msg:'select default'});

	});
});

//添加商品列表
router.get('/add',function(req,res){
	var objAdd=req.query;
	//验证输入数据是否为空
	var i=400;
	for(var key in objAdd){
		i++;
		if(!objAdd[key]){
			res.send({code:i,message:key+' required'});
			return;
		}
	}
	//将数据插入xz_laptop表
	var addSql='insert into xz_laptop set ?';
	pool.query(addSql,[objAdd],function(err,result){
		if(result.affectedRows>0){
			res.send({code:200,message:'insert success'});
			return;
		}
		res.send({code:301,message:'insert default'});
	});
});

//根据id查询商品详情

//根据id删除商品

//根据id修改商品  
module.exports=router;






