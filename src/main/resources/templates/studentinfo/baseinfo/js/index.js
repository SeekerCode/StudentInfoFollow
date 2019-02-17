
$(document).ready(function() {
	//初始化宽度、高度    
	$("#main-container").height($(window).height() - 100);
	$("#iframe").height($(window).height() - 180);

	$(".sidebar").height($(window).height() - 100);
	var thisHeight = $("#nav_list").height($(window).outerHeight() - 173);
	$(".submenu").height();
	$("#nav_list").children(".submenu").css("height", thisHeight);

	//当文档窗口发生改变时 触发  
	$(window).resize(function() {
		$("#main-container").height($(window).height() - 100);
		$("#iframe").height($(window).height() - 180);
		$(".sidebar").height($(window).height() - 100);

		var thisHeight = $("#nav_list").height($(window).outerHeight() - 173);
		$(".submenu").height();
		$("#nav_list").children(".submenu").css("height", thisHeight);
	});

});
function hyperlink(obj){
	var cid = $(obj).attr("name");
	var cname = $(obj).attr("title");
	$("#iframe").attr("src", cid).ready();
	$("#Bcrumbs").attr("href", cid).ready();
	$(".Current_page a").attr('href', cid).ready();
	$(".Current_page").attr('name', cid);
	$(".Current_page").html(cname).css({
		"color": "#60a2e8",
		"cursor": "default"
	}).ready();
	$("#parentIframe").html('<span class="parentIframe iframeurl"> </span>').css("display", "none").ready();
	$("#parentIfour").html('').css("display", "none").ready();
};

/*********************点击事件*********************/
$(document).ready(function() {
	$('#nav_list').find('nav_list').click(function() {
		$('#nav_list').find('li.home').removeClass('active');
		$(this).addClass('active');
	});


	$('#Exit_system').on('click', function() {
		layer.confirm('是否确定退出系统？', {
			btn: ['是', '否'], //按钮
			icon: 2,
		},
		function() {
			location.href = "goLogOut";

		});
	});
});
window.onload = function(){
	var cid = $('#nav_list> li .submenu');
	cid.each(function(i) {
		$(this).attr('id', "Sort_link_" + i);
	})
	$.ajax({
		url:"queryMenu",
		type:"post",
		data:{},
		success: function(result){
			//标题图标
			//["icon-home","icon-book","icon-file-alt","icon-bar-chart","icon-group","icon-user","icon-comment","icon-inbox","icon-cog"];
			var classNames=[];
			if(result[0].roleid=="4")	classNames=["icon-home","icon-book","icon-file-alt","icon-bar-chart","icon-group","icon-user","icon-comment","icon-inbox","icon-cog"];
		    if(result[0].roleid=="3")	classNames=["icon-home","icon-book","icon-file-alt","icon-bar-chart","icon-user","icon-comment","icon-inbox","icon-cog"];
		    if(result[0].roleid=="2")	classNames=["icon-home","icon-book","icon-file-alt","icon-bar-chart","icon-user","icon-comment","icon-inbox","icon-cog"];
		    if(result[0].roleid=="1")	classNames=["icon-home","icon-file-alt","icon-bar-chart","icon-user","icon-comment","icon-inbox","icon-cog"];
		    if(result[0].roleid=="0")	classNames=["icon-home","icon-file-alt","icon-bar-chart","icon-user","icon-comment","icon-inbox","icon-cog"];
			if(result != null){				
				var li = '';
				var $ul = $("#nav_list");
				var strInnerHTML = '';
				var subcount = 0;
				var equalscount = 0;
				var levelcount = 0;
				var objParant = {};

				for(var i=0;i<result.length;i++){		   
					var menuId = result[i].privilegeid;
					var menuName = result[i].privilegename;
					var menuTree = result[i].privilegetreelevel;
					var menuUrl = result[i].privilegeurl;
					var menuTig = result[i].privilegetipflag;	

					if(menuTig == 0)
					{
						var str = '';

						if(strInnerHTML != '')
						{
							if(menuTree.length == 3)
							{
								if(subcount > 0)
								{
									if(levelcount > 0)
									{
										str = '</ul></li></ul></li>';
									}
									else
									{
										str = '</ul></li>';
									}
								}
								else
								{
									if(levelcount > 0)
									{
										str = '</ul></li></li>';
									}
									else
									{
										str = '</li>';
									}
								}							
								levelcount = 0;							
							}
							else
							{  	
								if(levelcount > 0 && equalscount==0)
								{
									str = '</ul></li>';
								}
								else
								{
									str = '';
								}
								levelcount++;	

							}	
						}

						if(menuTree.indexOf(objParant.privilegetreelevel) != -1 && subcount == 0)
						{
							strInnerHTML += '<ul class="submenu">';	
						}

						strInnerHTML += (str + '<li><a href="#" class="dropdown-toggle"><i class="icon-book"></i><span class="menu-text">'+menuName+'</span><b class="arrow icon-angle-down"></b></a>');						
						subcount = 0;
						equalscount=0;
						objParant = result[i];

					}
					else
					{	

						if(menuTree.indexOf(objParant.privilegetreelevel) != -1 && subcount == 0)
						{
							equalscount=0;
							strInnerHTML += '<ul class="submenu">';	
						}			
						if(menuTree == '001'){
							strInnerHTML += '<li id="'+menuId+'" class="home"><a href="javascript:void(0)" name="'+menuUrl+'" title="'+menuName+'" onclick="hyperlink(this)" class="iframeurl"><i class="icon-home home-icon"></i>'+menuName+'</a></li>';
						}else if(menuTree.indexOf(objParant.privilegetreelevel) != -1){
							subcount++;
							strInnerHTML += '<li id="'+menuId+'" class="home"><a href="javascript:void(0)" name="'+menuUrl+'" title="'+menuName+'" onclick="hyperlink(this)" class="iframeurl"><i class="icon-double-angle-right"></i>'+menuName+'</a></li>';
						}else if(menuTree.indexOf(objParant.privilegetreelevel) == -1 && menuTree.length == objParant.privilegetreelevel.length && equalscount == 0)
						{
							//主要是为了兼容类似与  003001  003001001  003001002  003002
							//其中 003001 为二级菜单但是非末级  003002 也是二级菜单但是时 末级菜单的情况
							strInnerHTML += '</ul><li id="'+menuId+'" class="home"><a href="javascript:void(0)" name="'+menuUrl+'" title="'+menuName+'" onclick="hyperlink(this)" class="iframeurl"><i class="icon-double-angle-right"></i>'+menuName+'</a></li>';
							equalscount++;
						}else{
							strInnerHTML += '<li id="'+menuId+'" class="home"><a href="javascript:void(0)" name="'+menuUrl+'" title="'+menuName+'" onclick="hyperlink(this)" class="iframeurl"><i class="icon-double-angle-right"></i>'+menuName+'</a></li>';
						}	

					}
				} 

				
				$ul.append($(strInnerHTML));
				//更换一级目录图标 如果后台新增目录或改变目录顺讯请调整/添加classNames 图标参考网址http://www.bootcss.com/p/font-awesome/#icons-new
				//var classNames=["icon-home","icon-book","icon-file-alt","icon-bar-chart","icon-group","icon-user","icon-comment","icon-inbox","icon-cog"];
				$("#nav_list>li>a>i").each(function(i){
					$("#nav_list>li>a>i").eq(i).removeClass().addClass(classNames[i]);
				});

			} 
		},
		error:function(){

		}
	});   
};