  $(document).ready(function () {
	  
		 
	  //表格控件的加载
	    $('#sample-table').bootstrapTable({
			url : '/getuserInfo',
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			dataType : "json",
			method : 'post',
			striped : true,
			pagination: true,
			queryParams : queryParams,
			sidePagination : "server",
			 pageNumber: 1,  
	         pageSize: 8, 
	         pageList: [8,15,30,50], 
	         paginationPreText: "上一页",
	         paginationNextText: "下一页",
		onLoadSuccess : function(data) {
			//console.log(data.rows+"data1");
				
			},
			columns : [
					{
						field : 'id',
						title : '序号',
						formatter : function(value, row,
								index) {
							return index + 1;
						}
					},{
						field : 'studentcode',
						title : '学生姓名'
					},{
						field : 'studentname',
						title : '学生姓名'
					},{
						field : 'sex',
						title : '性别'
					},
					{
						field : 'majorcode',
						title : '专业'
					},
					{
						field : 'calsscode',
						title : '班级'
					},{
		            	field:'',
		            	title:'操作',
		                formatter: function(value, row, index){
		 					    return '<a class="btn btn-primary" onclick="ShowInfo('+row.studentcode+','+1+')" class="btn btn-primary btn-sm"  >详情</a>' ;
		                }
		            }]
		});
	  //查询条件
	    function queryParams(params) {
	        return {
	            pageSize: params.pageSize,
	            pageIndex: params.pageNumber
	           
	        };
	    };
		/* html js里面方法书写格式不对，HTML页面搜索不到该函数，格式应该是：xx = function (){  执行事件  }；
                        而不是 funtion xx (){};*/
	     ShowInfo =  function(studentcode,year){layer.open({
		      type: 2,
		      title: '**详细信息',
		      shadeClose: false,
		      shade: 0.8,
		      maxmin: true, //开启最大化最小化按钮
		      area: ['883px', '550px'],
		      content: '../infosubmit/studentinfosubmit.html'
		    });}
  });