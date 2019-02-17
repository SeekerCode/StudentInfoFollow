  $(document).ready(function () {
	  //表格控件的加载

	    $('#sample-table').bootstrapTable({
			url : '/bootstrasp',
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
						field : 'majorTeacher',
						title : '专业导师'
					},{
						field : 'greaderTeacher',
						title : '年级导师'
					},
					{
						field : 'classname',
						title : '班级名称'
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