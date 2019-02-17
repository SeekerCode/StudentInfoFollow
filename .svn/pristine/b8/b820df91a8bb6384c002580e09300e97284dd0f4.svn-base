  $(document).ready(function () {
	  //表格控件的加载
	    $('#sample-table').bootstrapTable({
			url : '/BaseInfoSelectController/getClassInfo',
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
						field : 'majorcode',
						title : '专业编号'
					},{
						field : 'majorname',
						title : '专业名称'
					},
					{
						field : 'calsscode',
						title : '班级编号'
					},
					{
						field : 'calssname',
						title : '班级名称'
					},
					{
						field : 'count',
						title : '班级人数'
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