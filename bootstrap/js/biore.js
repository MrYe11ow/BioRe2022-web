$(document).ready(function(){
	$('#table').bootstrapTable({
		search:false,
		pagination:true,
		pageSize:10,
		showColumns:true,
		showToggle:false,
		showRefresh:true,
	    url: 'http:localhost:9900/data',// 表格数据来源
		queryParams: function(params){
			var temp = {
				pageSize:params.pageSize,
				pageNumber:params.pageNumber,
				sortOrder:params.sortOrder,
				bioname:$("#bio-search1").val()
			};
			return temp;
		},
	    columns: [{
	        field: 'id',
	        title: 'Header',
			formatter: idformatter
	    }, {
	        field: 's1',
	        title: 'Header'
	    }, {
	        field: 's2',
	        title: 'Header'
	    },{
	        field: 's3',
	        title: 'Header'
	    },{
	        field: 's4',
	        title: 'Header' 
	    }, {
	             field:'ID',
	             title: 'Operate',
	             width: 150,
	             align: 'center',
	             valign: 'middle',
	             formatter: actionFormatter
	    }]
	});
		
	$("#bio-table-show").click(showTable);
	
	$("#bio-chart-show").click(showChart);
	
	showTable();
	
	$("#intro").html("11111111111");
})
	
function idformatter(value,row,index){
	return "<a href='sdaf'>"+value+"</a>"
}
		
function actionFormatter(value, row, index) {
	var id = value;
	var result = "";
	result += "<a href='javascript:;' class='btn btn-xs green' onclick=\"EditViewById('" + id + "', view='view')\" title='查看'><i class='bi bi-file-earmark-text'></i></span></a>";
	result += "<a href='javascript:;' class='btn btn-xs blue' onclick=\"EditViewById('" + id + "')\" title='编辑'><i class='bi bi-geo-alt'></i></span></a>";
	result += "<a href='javascript:;' class='btn btn-xs red' onclick=\"DeleteByIds('" + id + "')\" title='删除'><i class='bi bi-link-45deg'></i></span></a>"; 
	return result;
}

function showTable(){
	  $("#bio-chart-show").addClass("bio-disabled")
	  $("#bio-table-show").removeClass("bio-disabled")
	  $("#relationChart").hide();
	  $("#relationTable").show();
	}

function showChart(){
	  $("#bio-table-show").addClass("bio-disabled")
	  $("#bio-chart-show").removeClass("bio-disabled")
	  $("#relationChart").show();
	  $("#relationTable").hide();
	  
	}

function bioSearch1(){
	var name = $("#bio-search1").val();
	$.ajax({
		type:'GET',
		url:'http://localhost:9900/test',
		data:{name:name},
		success: function(data){
			console.log(data);
		}
	})
}

function bioTableRefresh(){
	$("#table").bootstrapTable('refresh')
}

