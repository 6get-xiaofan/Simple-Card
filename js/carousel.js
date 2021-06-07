//封装实现
	var lbimg = function(id, imgs, hrefs,time) {
		//参数初始化
		if (hrefs == undefined) {
			hrefs = new Array();
			for (var i = 0; i < imgs.length; i++) {
				hrefs.push("#跳转" + parseInt(i + 1));
			}
		}
		//dom初始化
		var hs = "";
		var hs2="<div class='points'>"
		for (var i = 0; i < imgs.length; i++) {
			hs = hs + "<img src='" + imgs[i] + "' data-href='" + hrefs[i] + "'>";
			hs2 = hs2+"<div class='point' data-page='"+i+"'></div>"
		}
		hs2= hs2+"</div>"
		var hs3 = "<div class='leftcheck'>〈</div>";
		var hs4 = "<div class='rightcheck'>〉</div>";
		$(hs).appendTo("#" + id);
		$(hs2).appendTo("#" + id);
		$(hs3).appendTo("#" + id);
		$(hs4).appendTo("#" + id);
		
		//添加初始化样式
		var cv = $("#" + id).css("width");
		var cv2  =$("#"+id).css("height");
		$("#" + id).css({
			"overflow": "hidden",
			"display": "flex",
			"position": "relative"
		})
		$("#"+id+" .leftcheck,#"+id+" .rightcheck").css({
			"z-index": "99",
			"color": "white",
			"font-weight": "bold",
			"position": "absolute",
			"background-color": "rgb(0,0,0,0.2)",
			"height": cv2,
			"width": "20px",
			"display": "flex",
			"justify-content": "flex-start",
			"align-items": "center",
			"cursor": "pointer"
		})
		$("#"+id+" .rightcheck").css({
			"margin-left": (parseInt(cv.replace("px",""))-20)+"px",
			"justify-content": "flex-end"
		})
		$("#" + id + " img").css({
			"width": "100%",
			"height": "100%"
		})
		$("#"+id+" .points").css({
			"color": "white",
			"position": "absolute",
			"width": cv,
			"bottom": "0",
			"height": "30px",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center"
		})
		$("#"+id+" .point").css({
			"background-color": "black",
			"width": "10px",
			"height": "10px",
			"border-radius": "50%",
			"margin": "5px",
			"cursor": "pointer"
		})
		
		//选项按钮初始化
		$(".point[data-page='0']").css("background-color","white")
		$(".point[data-page='0']").addClass('active');
		//赋予图片点击跳转事件
		$(document).on('click', '#' + id + ' img', function() {
			var href = $(this).attr('data-href');
			window.location.href = href;
		})
		//赋予左右按钮出现事件，这里定义的是悬浮之后左右的按钮悬浮出来然后在收缩回去
		$("#"+id+" .leftcheck").css({
			"margin-left":"-20px"
		})
		$("#"+id+" .rightcheck").css({
			"margin-left":cv
		})
		var flag = lrflag=true;
		$("#"+id).mousemove(function(){
			if(lrflag){
				lrflag=false;
				$("#"+id+" .leftcheck").stop().animate({
					"margin-left":"0px"
				},500)
				$("#"+id+" .rightcheck").stop().animate({
					"margin-left": (parseInt(cv.replace("px",""))-20)+"px"
				},500)
			}
		})
		$("#"+id).mouseleave(function(){
			lrflag=true;
			$("#"+id+" .leftcheck").stop().animate({
				"margin-left":"-20px"
			},500)
			$("#"+id+" .rightcheck").stop().animate({
				"margin-left": cv
			},500)
		})
		
		//返回操作对象
		return {
			id: id,
			time: time==undefined?2000:time,
			dir: 'left',
			timer: null,
			length: imgs.length,
			count: 1,
			imgchange:function(){
				var that = this;
				var cv = $("#" + id).css("width");
				clearInterval(that.timer)
				that.timer = setInterval(function() {
					that.imgFlag = false;
					$("#"+that.id+" .point").css("background-color","black")
					$("#"+that.id+" .point[data-page='"+that.count+"']").css("background-color","white")
					$("#"+that.id+" .point").removeClass('active')
					$("#"+that.id+" .point[data-page='"+that.count+"']").addClass("active")
					var img = $("#" + that.id + " img").first();
					var temp = parseInt(cv) * that.count;
					img.stop().animate({
						'margin-left': '-' + temp + 'px'
					}, 500)
					that.count = (that.count + 1) % that.length
				
				}, that.time)
			},
			start: function(dir) {
				//功能实现
				var that = this;
				that.imgchange();
				//点击小点点可以直接切换到对应图片的事件
				$('#'+id+' .point').click(function(){
					var page =  $(this).attr('data-page')
					that.count = page;
					var img = $("#" + that.id + " img").first();
					$("#"+that.id+" .point").css("background-color","black")
					$("#"+that.id+" .point[data-page='"+that.count+"']").css("background-color","white")
					$("#"+that.id+" .point").removeClass('active')
					$("#"+that.id+" .point[data-page='"+that.count+"']").addClass("active")
					var temp = parseInt(cv) * that.count;
					img.stop().animate({
						'margin-left': '-' + temp + 'px'
					}, 500)
					that.imgchange();
				})
				//点击左右按钮切换
				$("#"+that.id+" .leftcheck").click(function(){
					var temp = parseInt($("#"+that.id+" .points .active").attr("data-page"));
					that.count=temp<that.count?temp:that.count,
					that.count = that.count-1;
					that.count=that.count<0?parseInt(that.length)-1:that.count;
					var img = $("#" + that.id + " img").first();
					$("#"+that.id+" .point").css("background-color","black")
					$("#"+that.id+" .point[data-page='"+that.count+"']").css("background-color","white")
					$("#"+that.id+" .point").removeClass('active')
					$("#"+that.id+" .point[data-page='"+that.count+"']").addClass("active")
					var temp = parseInt(cv) * that.count;
					img.stop().animate({
						'margin-left': '-' + temp + 'px'
					}, 500)
					that.imgchange();
				})
				$("#"+that.id+" .rightcheck").click(function(){
					var temp = parseInt($("#"+that.id+" .points .active").attr("data-page"));
					if(that.count!=0){
						that.count=temp<that.count?temp:that.count;
					}else{
						that.count=temp;
					}
					that.count = that.count+1;
					that.count = that.count%parseInt(that.length);
					var img = $("#" + that.id + " img").first();
					$("#"+that.id+" .point").css("background-color","black")
					$("#"+that.id+" .point[data-page='"+that.count+"']").css("background-color","white")
					$("#"+that.id+" .point").removeClass('active')
					$("#"+that.id+" .point[data-page='"+that.count+"']").addClass("active")
					var temp = parseInt(cv) * that.count;
					img.stop().animate({
						'margin-left': '-' + temp + 'px'
					}, 500)
					that.imgchange();
				})
				//鼠标悬浮在这个页面上的时候停止轮播
				$("#"+that.id).mouseleave(function(){
					that.imgchange();
				})
				$("#"+that.id).mouseenter(function(){
					clearInterval(that.timer);
					setTimeout(function(){
						that.imgchange();
					},2*that.time)
				})
				//鼠标挪走继续轮播
			}
		}
	}