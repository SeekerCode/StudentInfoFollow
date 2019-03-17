(function($){

	$.STUDENTINFO = function(){

		var Myobj = this;
		this.CheckFormObj = {}; 

		
		this.test=function(){
			console.log("test");
			alert("test");
		}
		//取消
		this.cancel = function()
		{
			alert("ssss");
			layer.confirm('是否清空所有信息', function(index) {
				if(Myobj.studentname == ""){
					$("#sex").val("");
					$("#nation").val("");
					$("#studentname").val("");
					$("#political").val("");
					$("#studentcode").val("");
					$("#location").val("");
					$("#majorname").val("");
					$("#classname").val("");
					$("#birthday").val("");
					$("#email").val("");
					$("#phone").val("");
					$("#dev_location").val("");
					$("#advantage").val("");
					$("#disadvantage").val("");
				}
				else{
					$("#guide").val("");
				};

				layer.close(index);		

			});  
		};

		//提交
		this.submit = function(){
			alert("pppppp");
			layer.open({
				content: '是否确认要进行此操作？',
				btn: ['确认', '取消'],
				shadeClose: false,
				yes: function()
				{
					//这里是确定的事件触发点
					//在这里发送AJax请求后台处理动作
					//如果是新增，修改删除操作防止二次提交那么可以在这里把按钮禁用掉
					//然后Ajax回调处理成功或者失败之后把按钮重新启用
					GfyShadow.open();
					Myobj.submitType = 2;
					var url = "/StudentInfoSubmitController/Insert";	
					$.ajax({
						type: "POST",
						url: url,
						async: false,
						data: {
							"studentname":$("#studentname").val(),     
							"studentcode":$("#studentcode").val(),
							"email":$("#email").val(),
							"political":$("#political").val(),
							"sex":$("#sex").val(),
							"nation":$("#nation").val(),
							"birthday":$("#birthday").val(),
							"location":$("#location").val(),
							"phone":$("#phone").val(),
							"majorcode":$("#majorcode").val(),
							"classcode":$("#classcode").val(),
//							"dev_location":$("#dev_location").val(),
//							"advantage":$("#advantage").val(),
//							"disadvantage":$("#disadvantage").val(),

						},
						success: function(data){
							GfyShadow.close();
							if(data.result == '1')
							{
								alert("操作失败");
								
							}else{
								layer.alert(data.msg,{skin: 'layui-layer-lan',closeBtn: 0,shift: 5,btn:['确定'],
									yes:function(index,layero)
									{
										
										layer.close(index);		
									}
								});
								alert("提交成功")
								$("#submit").hide();	
								$("#reprievesubmit").hide();
								$("#cancel").hide();
								Myobj.Readonly();
							}
						}	
					});

				}, 
				no: function()
				{
					//这里是取消事件不需要写任何代码 Layer.open 会自动关闭
				}
		});
		};
		
		
		
		/**
		 * 初始化表单验证
		 */
		this.InitFormVidate = function()
		{ 
			Myobj.CheckFormObj = $("#studentInfo").validate({
				rules:
				{
					studentname: {
						required: true,
					},
					sex: {
						required: true,
					},
					studentcode: {
						required :true,
					},
					nation:{
						required :true,
					},
					location:{
						required :true,
					},
					political:{
						required :true,
					},
					majorname:{
						required :true,
					},
					classname:{
						required :true,
					},
					birthday:{
						required :true,
					},
					email:{
						required :true,
					},
					phone:{
						required :true,
					},
					dev_location:{
						required :true,
					},
					advantage:{
						required :true,
					},
					disadvantage:{
						required :true,
					},
					advantage:{
						required :true,
					},
					guide:{
						required :true,
					},
					
				messages:
				{
					studentname: {
						required: "请输入姓名！"
					},
					sex: {
						required: "请输入性别！"
					},
					studentcode: {
						required :"请输入学号！"
					},
					nation:{
						required :"请输入民族！"
					},
					location:{
						required :"请输入籍贯！"
					},
					political:{
						required :"请输入政治面貌！"
					},
					majorname:{
						required :"请输入专业号！"
					},
					classname:{
						required :"请输入班级编号！"
					},
					birthday:{
						required :"请输入出生日期"
					},
					email:{
						required :"请输入邮箱！"
					},
					phone:{
						required :"请输入手机号码！",
					},
					dev_location:{
						required :"请输入社会资源！"
					},
					advantage:{
						required :"请输入专业课程！"
					},
					disadvantage:{
						required :"请输入发展方向！"
					},
					guide:{
						required :"请输入我的优势方案！"
					},
					
				}
				}
			});
		};

	};

})(jQuery);


var studentSubmit = new jQuery.STUDENTINFO();

	$(function(){
		studentSubmit.InitFormVidate();	//初始化表单验证
	});
//alert("aaa")

function outPost()
{
	var usercode = $("#studentcode").val();
	var th = document.getElementById("studentInfo");	
	 
	if(STUDENTPLAN.CheckFormObj.form()){ 
		th.submit();
	}else{
		 
	}
	 
}

function my(){
	alert("my")
}
