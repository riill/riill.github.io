$(function(){
	$("#window_close").click(function(){window.close();return false;});
	$("#show_select1").click(function(){$("#select1").show();return false;});
	$("#show_select2").click(function(){$("#select2").show();return false;});
	$("#show_select3").click(function(){$("#select3").show();return false;});
	$("#show_select4").click(function(){$("#select4").show();return false;});
	//index
	$(".quicknav").height(0).css({"opacity":"0","z-index":"-1"});
	$(".quickclose").click(function(){
	  $(".quicknav").animate({
		opacity: 0,
		height: 0,
	  }, 500 );
	  $(".bookmark").animate({
		opacity: 100,
		height: 24,
	  }, 500 );
	  $(".bookmark").css("z-index","100");
	  $(".quicknav").css("z-index","-1");
	});
	$(".bookmark").mouseover(function(){
	  $(".quicknav").animate({
		opacity: 100,
		height: 62,
	  }, 500 );
	  $(".bookmark").animate({
		opacity: 0,
		height: 0,
	  }, 100 );
	  $(".quicknav").css("z-index","100");
	  $(".bookmark").css("z-index","-1");
	});
	$(".quickset").click(function(){
		$(this).toggleClass('on');
	    $(".quicknav .icon_cross_s").toggle();
	});
	$(".quick").click(function(){
		$(this).toggleClass('on');
		$(".quickhistory").toggleClass("on");
		$(".quicknav_2").hide('fast');
		$(".quicknav_1").show('slow');
		});
	$(".quickhistory").click(function(){
		$(this).toggleClass('on');
		$(".quick").toggleClass("on");
		$(".quicknav_1").hide('fast');
		$(".quicknav_2").show('slow');
		});
	$(".nav a").click(function(){
		$(".nav a").removeClass("on");
		$(this).addClass("on");
		});
	//open
	$(".title").click(function(){
		$('.setting-units').find('.holder').hide('slow');
		$('.setting-units').find('.rare_holder').hide('slow');
		$('.setting-units').find('a.title_btn').hide('');
		$(this).siblings(".holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		$(this).closest('.setting-unit').find('.icon_open').toggleClass('icon_close');
		$(this).closest('.setting-unit').find('a.title_btn').toggle();
		$(this).closest('.setting-unit').find('a.rare_btn').css('right','70px');
		});
	$(".icon_open").click(function(){
		$(this).siblings(".holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		$(this).toggleClass('icon_close');
		$(this).closest('.setting-unit').find('a.title_btn').toggle();
		$(this).closest('.setting-unit').find('a.rare_btn').css('right','70px');
		});
	$(".icon_close").click(function(){
		$(this).toggleClass('icon_close');
		$(this).closest('.setting-units').find('.holder').hide('slow');
		$(this).closest('.setting-units').find('.rare_holder').hide('slow');
		});
	$(".rare_btn").click(function(){
		$('.setting-units').find('.holder').hide('slow');
		$('.setting-units').find('.rare_holder').hide('slow');
		$(this).toggleClass('on');
		$(this).siblings(".rare_holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		$(this).closest('.setting-unit').find('.icon_open').toggleClass('icon_close');
		$(this).closest('.setting-unit').find('a.title_btn').show();
		$(this).closest('.setting-unit').find('a.rare_btn').css('right','70px');
		});
	//add_holder
	$(".add_btn").click(function(){
		$(this).toggleClass('on');
		$(".add_holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		});
	$(".add_close").click(function(){
		$(".add_holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		});
	//finc
	$("#findbtn").click(function(){
		$('.setting-units').find('.holder').hide('slow');
		$(this).closest('.button').siblings(".holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		$("#find1").hide();
		$("#find2").show();
		$("#find9").show(); 
		});
	$("#findstop").click(function(){
		$("#find4").hide();
		$("#find3").show(); 
		$("#find5").show(); 
		});
	$("#findnext").click(function(){
		$('.setting-units').find('.holder').hide('slow');
		$(this).closest('.button').siblings(".holder").animate({
		height: "toggle", opacity: "toggle"
	  	}, 500 );
		$("#find6").hide();
		$("#find7").show(); 
		$("#find8").show(); 
		$("#find9").hide(); 
		});
	//usercheck & emailcheck
	$(".uc a, .ec a").click(function(){
		$(this).toggleClass('on');
		});
	//on-off
	$(".icon_on").click(function(){
		$(this).toggleClass('icon_off');
		});
	$(".icon_off").click(function(){
		$(this).toggleClass('icon_off');
		$(this).toggleClass('icon_on');
		});
	//checked-uncheck
	$(".icon_checked").click(function(){
		$(this).toggleClass('icon_checked');
		$(this).toggleClass('icon_uncheck');
		});
	$(".icon_uncheck").click(function(){
		$(this).toggleClass('icon_uncheck');
		$(this).toggleClass('icon_checked');
		});
	//sub_ul
	$(".sub_ul li a").click(function(){
		$(this).siblings("ul").toggle('liner');
		});
	//用户名框鼠标焦点移进，文字消失
	$("input.null").click(function () {
		var check1 = $(this).val();
		if (check1 == this.defaultValue) {
			$(this).val("");
		};
		$(this).addClass('null_t');
	});
	//interface
	$(".interface li a").click(function(){
		$('.interface a').removeClass('on');
		$(this).addClass('on');
	});
	//btn_s
	$(".btn_t").click(function(){
		$(".btn_t").removeClass("on");
		$(this).addClass("on");	
	});
	//sub-sidebar
	$('.sub-sidebar').hide();
	$('.sidebar li').hover(function(){
	  $(this).find('.sub-sidebar').stop(true, true).animate({
		width: "toggle"
	  }, {
		duration: 350,
	  });
	});
	//单击空白区域隐藏弹出层 
	$(document).click(function (event) {$("#select1").hide();$("#select2").hide();$("#select3").hide();$("#select4").hide();}); 
	return false;		
});

//openwindow
function openwindow(url,name,iWidth,iHeight)
 {
  var url;                             //转向网页的地址;
  var name;                           //网页名称，可为空;
  var iWidth;                          //弹出窗口的宽度;
  var iHeight;                        //弹出窗口的高度;
  var iTop = (window.screen.availHeight-30-iHeight)/2;       //获得窗口的垂直位置;
  var iLeft = (window.screen.availWidth-10-iWidth)/2;        //获得窗口的水平位置;
  window.open(url,name,'height='+iHeight+',,innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
 }
//sub-select
$(function(){
	$('#select1 li, #select2 li').hover(function(){
		$(this).children('ul').stop(true,true).show();
		$(this).find('a:eq(0)').addClass('on');
	},function(){
		$(this).children('ul').stop(true,true).hide();
		$(this).find('a').removeClass('on');
	});
});
