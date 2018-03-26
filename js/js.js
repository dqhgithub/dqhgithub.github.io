
		 $(".footer-nav a").click(function(){
			$(this).addClass('cur').siblings('a').removeClass('cur');
		})	
		$(".menuf-l ul li").click(function(){
			$(this).addClass('cur').siblings('li').removeClass('cur');
		})

        $(function(){
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
        })
		
		

