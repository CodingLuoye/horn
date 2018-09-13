function login(){
		console.log("登录");
		console.log($('#u5_input').val() + $('#u6_input').val());
		var PostData = {
			principal:$('#u5_input').val(),
			password:$('#u6_input').val(),
			principalType:"UserId",
			rememberMe:false
		}
		$.ajax({
			type: "post",
			dataType: "json",
			contentType:"application/json",
			url: 'http://localhost:48080/ns/api/nsite/authc/logon',
			data: PostData,
			success: function (data) {
				if(data){
					$(window).attr("location",contextPath+"/titleDetail");
				}else{
					$(window).attr("location",contextPath+"/titleList");
				}
			},
			error:function(){
				console.log("添加异常");
			}
			
    });
}