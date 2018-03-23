
/*banner*/
$(function(){
				var mySwiper = new Swiper('.swiper1', {
					autoplay: 5000, //可选选项，自动滑动
					autoplayDisableOnInteraction: false,
					pagination: '.swiper-pagination',
					loop: true,
					lazyLoading:true,//设为true开启图片延迟加载
				});
				var mySwiper = new Swiper('.swiper3', {
					autoplay: 5000, //可选选项，自动滑动
					autoplayDisableOnInteraction: false,
					pagination: '.swiper-pagination',
					loop: true,
					lazyLoading: true,
				});
				var mySwiper2 = new Swiper('.swiper2', {
					autoplay: 2500, //可选选项，自动滑动
					autoplayDisableOnInteraction: false,
					loop: true,
					direction: 'vertical'
				});
				
			});
      var meun_flag = false;
		$('#meun_icon').click( function() {
			if(meun_flag) {
				return false;
			}
			var $_this = $(this);
			if($_this.hasClass('on')) {
				$_this.removeClass('on')
				$('#public_meun').removeClass('zoom_big').addClass('zoom_small');
				$('html,body').removeClass('no_scroll');
				$('div.black_block').stop().fadeOut();
				meun_flag = true;
				var tt = setTimeout(function() {
					$('#public_meun').hide();
					$('#public_meun').addClass('zoom_big').removeClass('zoom_small');
					meun_flag = false;
					clearTimeout(tt);
				}, 500)
			} else {
				$('#public_meun').show(); 
				$('div.black_block').stop().fadeIn();
				meun_flag = true;
				var tts = setTimeout(function() {
				    $('html,body').addClass('no_scroll');
					meun_flag = false;
					clearTimeout(tts);
				}, 500);
				$_this.addClass('on');
			}
		});



        //顶部分类筛选
        (function(){
            var $layer=$('.catTab .tabLayer');
            $('.catTab').on('click','li',function(){
                var index=$(this).index(),$this=$(this)
                if($this.hasClass('active')){
                    $this.removeClass('active');
                    $layer.hide(0,function(){
                        $(this).children("div").hide(0);
                    });
                }else{
                    $this.addClass('active').siblings().removeClass('active');
                    $layer.children('div').eq(index).siblings('div').hide(0).end().show(0,function(){
                        $layer.show();
                    });
                }

            });
            $layer.on('click','div a',function(){
                $(this).addClass('active').siblings('a').removeClass('active');
            })
        })();
       
       
     
     
    