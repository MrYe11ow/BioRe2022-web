$(document).ready(function(){
	var e1 = getQueryParam("e1");
	var e2 = getQueryParam("e2");
	console.log(e1+','+e2);
	var html = '';
	$.ajax({
		type:'GET',
		url:'http://localhost:8080/data/contained/'+e1+'/'+e2,
		success: function(data){
			/* $.each(data,function(i,item){
				marked = item.text.replace(e1,'<span class="bg-warning text-dark">'+e1+'</span>');
				marked = marked.replace(e2,'<span class="bg-success text-white">'+e2+'</span>');
				html+= '<p> <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-link-45deg"></i></a> ... '+marked+' ... </p><hr/>';
			}) */
			$.each(data,function(i,item){
				marked = item.text.replace(e1,'<span style="color:red">'+e1+'</span>');
				marked = marked.replace(e2,'<span style="color:blue">'+e2+'</span>');
				html+= '<p> <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-link-45deg"></i></a> ... '+marked+' ... </p>';
			})
			$('#bio-sentences').html(html);
		}
	})
		
})

function getQueryParam(value){
	var reg = new RegExp("(^|&)" + value + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) 
		return unescape(r[2]); 
	return null;
}