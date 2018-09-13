
function search(){
		console.log("搜索");
		console.log($('#searchInput').val());
		console.log($('#pageSize').val());
		console.log($('#uploadBeginTime').val());
		console.log($('#uploadEndTime').val());
		var Nsearch = {
			"group": {
				"allOf": [{
					"categoryType": { //资产模型ID
						"EQ": ["TYPE_TITLE"]
					}
				}, {
					"extraData.editStatus": { //制作状态
						"EQ": ["LIBRARY"]
					}
				}, {
					"deleteFlag": { //删除标识
						"EQ": ["Normal"]
					}
				}, {
					"createdTime":{
						"BTW":[$('#uploadBeginTime').val(),$('#uploadEndTime').val()]
					}
				}]
			},
			"orders": [{
				"createdTime": "DESC"
			}],
			"start": 0,
			"limit": $('#pageSize').val()
		}
		$.ajax({
			type: "post",
			dataType: "json",
			contentType:"application/json",
			url: 'http://localhost:48080/ns/api/ladder/library/searchLibAssets',
			data: Nsearch,
			success: function (data) {
				var data = [1,2,3];
				$("#u27").empty();
				for (var i=0;i<data.length;i++)
				{
					var div ="<div class='list-item'>" +"<div class='image'><img class='img' src='../images/u28.png'/><div class='text'><p><span></span></p></div></div>"
					+" <div class='span1'><div class='bank'></div><div class='text'><p><span>北京VS江苏报告</span></p></div></div>"
					+" <div class='span2'><img class='img' src='../images/transparent.gif'/><div class='text'><p><span>北京时间9月25日，深圳新世纪队在中山体育馆与浙江广厦队...</span></p></div></div>"
					+" <div class='span3'><img class='img' src='../images/transparent.gif'/><div class='text'><p><span>2016-09-25</span></p></div></div></div>";
					
					$('#u27').append(div);
				}
			},
			error:function(){
				console.log("添加异常");
				var data = [1,2,3];
				$("#u27").empty();
				for (var i=0;i<data.length;i++)
				{
					var div ="<div class='list-item'>" +"<div class='image'><img class='img' src='../images/u28.png'/><div class='text'><p><span></span></p></div></div>"
					+" <div class='span1'><div class='bank'></div><div class='text'><p><span>北京VS江苏报告</span></p></div></div>"
					+" <div class='span2'><img class='img' src='../images/transparent.gif'/><div class='text'><p><span>北京时间9月25日，深圳新世纪队在中山体育馆与浙江广厦队...</span></p></div></div>"
					+" <div class='span3'><img class='img' src='../images/transparent.gif'/><div class='text'><p><span>2016-09-25</span></p></div></div></div>";
					
					$('#u27').append(div);
				}
			}
			
    });
}