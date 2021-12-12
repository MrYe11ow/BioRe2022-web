$(document).ready(function(){
	$('#table').bootstrapTable({
		search:false,
		pagination:true,
		pageSize:15,
		showColumns:true,
		showToggle:false,
		showRefresh:true,
	    url: 'http://localhost:8080/data/topPair',// 表格数据来源
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
	        field: 'e1',
	        title: 'e1',
			formatter: idformatter
	    }, {
	        field: 'e1type',
	        title: 'e1type'
	    }, {
	        field: 'e2',
	        title: 'e2',
			formatter: idformatter
	    },{
	        field: 'e2type',
	        title: 'e2type'
	    },{
	        field: 'score',
	        title: 'score' 
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
	return "<a href='sdaf' style='color:black;text-decoration: none;'>"+value+"</a>"
}
		
function actionFormatter(value, row, index) {
	var id = value;
	var result = "";
	result += "<a href='javascript:;' class='btn btn-xs green' onclick=\"getSentences('" + row.e1+"','"+row.e2 + "')\" title='查看'><i class='bi bi-file-earmark-text'></i></span></a>";
	// result += "<a href='javascript:;' class='btn btn-xs blue' onclick=\"EditViewById('" + id + "')\" title='编辑'><i class='bi bi-geo-alt'></i></span></a>";
	// result += "<a href='javascript:;' class='btn btn-xs red' onclick=\"DeleteByIds('" + id + "')\" title='删除'><i class='bi bi-link-45deg'></i></span></a>"; 
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

function topSingle(){
	console.log(111);
}

function getSentences(e1, e2){
	console.log(e1+','+e2);
	// window.location.href="detail.html?e1="+e1+"&e2="+e2;
	window.open("detail.html?e1="+e1+"&e2="+e2);
}


