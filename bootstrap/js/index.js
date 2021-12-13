$(document).ready(function(){
	
	//$("#intro").html("11111111111");
	
	statInfo();
})

function statInfo(){
	$.ajax({
		type:'GET',
		url:'http://localhost:8080/data/statInfo',
		success: function(data){
			var articleNumber = data.artileNumber;
			var sentenceNumber = data.sentenceNumber;
			$('#article-number').text(articleNumber);
			$('#sentence-number').text(sentenceNumber);
			var entityStatInfo = data.entityStatInfo;
			var html = '';
			$.each(entityStatInfo,function(i,item){
				html += item.key+":"+item.text+"</br>";
			})
			$('#entity-statinfo').html(html);
		}
	})
}