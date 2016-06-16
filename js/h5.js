$(document).ready(function() {
	var pages = $('.page');

	
	var navTop = $('#navi').height();
	var firstPageheight = $('#first_page_bg').height();
	$(window).scroll(function() {
		//滚动条的位置
		var scrollTop = $(document).scrollTop();
		//导航条在不同页面中颜色背景的变化
		if (firstPageheight - navTop < scrollTop) {
			
			$('#navi').css({
				'background': 'white',
				'border-bottom': '1px solid lightgrey'
			}).find('a').css({
				'color': 'black'
			});

		}
		
		if (firstPageheight - navTop > scrollTop) {
			$('#navi').css({
				'background': 'rgba(255,255,255,0)',
				'border-bottom': ''
			}).find('a').css({
				'color': 'white'
			});
		}

		//第一页文字变淡
		colorChange();


		//导航条定位到相应的某一页
		
		for (var i = 0; i < pages.length; i++) {
			//注意if条件语句必须用&&
			if (i*firstPageheight < scrollTop && scrollTop < (i+1)*firstPageheight) {
				$('#navi').find('a').eq(i).css({
					'color': 'rgb(255, 162, 0)'
				});
			}
		}
		
		
		//获取第三页据视图顶端的距离
	var three_page_topheight=$('.three_page').offset().top;
	var three_page_height=$('.three_page').outerWidth();
	if(three_page_topheight-scrollTop<(three_page_height/2))
	{

	}
	
	


	});
	
	
	
	
	
	//模块功能
	//第二页
	$.fn.extend({
		SlideUpShow:SlideUpShow,
		SlideUpHide:SlideUpHide
	});
	
	//$.prototype.SlideUpShow = SlideUpShow;
	//$.prototype.SlideUpHide = SlideUpHide;
	$('.second_page .col-md-3').hover(function() {
		$(this).css({
			'position': 'relative'
		});
		$(this).find('.col').eq(0).siblings().SlideUpShow();
	}, function() {
		$(this).find('.col').eq(0).siblings().SlideUpHide();
	});
	

})


//条件position:absolute
function SlideUpShow() {
	$(this).css({
		'padding': '40px'
	}).children().show();
	$(this).removeClass('collapse').animate({
		height: '90%'
	}, 500);
}

function SlideUpHide() {
	$(this).css({
		'padding-top': '0px',
		'padding-bottom': '0px'
	}).children().css({
		'margin-top': '30px'
	}).fadeOut();
	$(this).animate({
		height: '0px'
	}, 500);
}

//文字随着滚轮动轮颜色变淡
function colorChange() {
	var initHeight = 0;
	var targetHeight = $(document).scrollTop();
	var itemHeight = 350;
	var navHeight = $('#navi').height();
	//console.log(itemHeight-targetHeight);
	var baifenbi = targetHeight * (1 / (itemHeight - navHeight)).toFixed(10);
	if (itemHeight - targetHeight > navHeight) {
		$('.carousel-content').fadeTo(10, (1 - baifenbi));
	}
}