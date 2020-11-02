/*
*用户名不能为空,首个字符必须是字母，其后可以是字母数字下划线
*密码和确认密码不能为空，密码长度不能小于6位，最多10位，只能是字母和数字，密码和确认密码必须相同
*出生日期必须是数字，月范围1-12，日范围1-31
*电子邮件地址不能为空，必须包含符号“@”和“.”
*必须选中“我同意遵守会员协议”后，注册按钮才可以使用
*/

function check(){
	if(document.getElementById("checkbox").checked==true){
		document.getElementById("registbtn").disabled="";
	}else{
		document.getElementById("registbtn").disabled="disabled";
	}
}

function usernameBlur(){
	var username=document.getElementById("username");
	var usernameMark=document.getElementById("usernameMark");
	var reg=/^[a-zA-Z][a-zA-Z0-9_]{1,18}$/;
	if(username.value==""){
		usernameMark.innerHTML="用户名不能为空，字母数字下划线组成，首字符为字母";
		return false;
	}
	if(reg.test(username.value)==false){
		usernameMark.innerHTML="用户名不能为空，字母数字下划线组成，首字符为字母";
		return false;
	}
	usernameMark.innerHTML="";
	return true;
}

function pwdBlur(){
	var pwd=document.getElementById("pwd");
	var pwdMark=document.getElementById("pwdMark");
	var reg=/^[a-zA-Z0-9]{6,10}$/;
	if(pwd.value==""){
		pwdMark.innerHTML="密码不能为空，6到10位字母数字组成";
		return false;
	}
	if(reg.test(pwd.value)==false){
		pwdMark.innerHTML="密码不能为空，6到10位字母数字组成";
		return false;
	}
	pwdMark.innerHTML="";
	return true;
}

function pwd2Blur(){
	var pwd2=document.getElementById("pwd2");
	var pwd2Mark=document.getElementById("pwd2Mark");
	var reg=/^[a-zA-Z0-9]{6,10}$/;
	if(pwd2.value==""){
		pwd2Mark.innerHTML="不能为空，必须与密码相同";
		return false;
	}
	if(reg.test(pwd2.value)==false){
		pwd2Mark.innerHTML="不能为空，必须与密码相同";
		return false;
	}
	pwd2Mark.innerHTML="";
	return true;
}

function dateBlur(){
	var year=document.getElementById("year");
	var month=document.getElementById("month");
	var day=document.getElementById("day");
	var reg1=/^[0-9]{4}$/;
	var reg2=/^[0-9]{1,2}$/;
	var reg3=/^[0-9]{1,2}$/;
	if(year.value==""||month.value==""||day.value==""){
		dateMark.innerHTML="不能为空，必须是数字，月范围1-12，日范围1-31";
		return false;
	}
	if(!reg1.test(year.value)){
		dateMark.innerHTML="请检查输入的年份是否有误";
		return false;
	}
	if(!reg2.test(month.value)){
		dateMark.innerHTML="请检查输入的月份是否有误";
		return false;
	}
	if(!reg3.test(day.value)){
		dateMark.innerHTML="请检查输入的日期是否有误";
		return false;
	}
	if(year.value<1930||year.value>2020){
		dateMark.innerHTML="请检查输入的年份是否有误";
		return false;
	}
	if(month.value>12||month.value<1){
		dateMark.innerHTML="请检查输入的月份是否有误";
		return false;
	}
	if(day.value>31||day.value<1){
		dateMark.innerHTML="请检查输入的日期是否有误";
		return false;
	}
	if(month.value==4||month.value==6||month.value==9||month.value==11){
		if(day.value>30){
			dateMark.innerHTML="请检查输入的日期是否有误";
			return false;
		}
	}
	if(month.value==2){
		if(day.value>28){
			dateMark.innerHTML="请检查输入的日期是否有误";
			return false;
		}
		if(year.value%4==0&&day.value>29){
			dateMark.innerHTML="请检查输入的日期是否有误";////////////////////闰年2月29日判断有错
			return false;
			
		}
	}

	dateMark.innerHTML="";
	return true;
}

function mailBlur(){
	var mail=document.getElementById("mail");
	var mailMark=document.getElementById("mailMark");
	var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
	if(mail.value==""||!reg.test(mail.value)){
		mailMark.innerHTML="邮箱不能为空，且符合邮箱标准形式"
		return false;
	}
	mailMark.innerHTML="";
	return true;
}

