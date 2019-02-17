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
	         pageSize: 1, 
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
		 					    return '<a class="btn btn-primary" onclick="SCHOOL.NewPassword('+row.usercode+')" class="btn btn-primary btn-sm"  >确认</a>'+
		 					            '<a class="btn btn-primary" onclick="SCHOOL.NewPassword('+row.usercode+')" class="btn btn-primary btn-sm"  >删除</a>';
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
  });