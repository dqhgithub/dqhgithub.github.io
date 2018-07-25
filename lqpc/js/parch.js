$(document).ready(function(){
    //几号烘干机切换
    $(".parch_lf_nec").on("click",function(){
       var $this = this;
        var i =  $(this).index();
       // console.log(i);
        i-=1;
        $($this).css("border","1px solid #1276C5");
        //$($(".parch_lf_nec")[i]).css("border","1px solid #1276C5");
        $(".parch_lf_nec:not(:eq(" + i + "))").css("border","1px solid #E0E0E0");
    });
    //烘干机对应按钮的点击事件
    //记录点击的下标
    var x="";
    $(".parch_rg_bigimg").on("click","ul li",function(e){
        //阻止事件跳转  获取当前dom对象   当前下标
        e.preventDefault();
        var $this = this;
        var i =  $(this).index();
        var list =$(".parch_rg_botm ul li");
        //判断下标与x的值
        if(x===i){//如果x与i相等 清空x的值
            x="";
            $(".pchn_li1_img").css("display","block");
            $(".pchn_lidiv").css("display","none");
            toggleBackColor(list);
        }else{//如果x与i不相等 赋值x
            x=i;
            $($this).children(".pchn_li1_img").css("display","none");
            $($this).children(".pchn_lidiv").css("display","block");
            $(".pchn_li1_img:not(:eq(" + i + "))").css("display","block");
            $(".pchn_lidiv:not(:eq(" + i + "))").css("display","none");
            toggleBackColor(list);
            $(list[i]).css("background","#B0E0F0");
        }
    });
    //用于切换点击事件的背景颜色
    function toggleBackColor(list){
        for(var k=0;k<list.length;k++){
            if(k<2){
                $(list[k]).css("background","#EEEEEE");
            }else if(2<=k && k<4){
                $(list[k]).css("background","#fcf6e8");
            }else if(4<= k && k<6){
                $(list[k]).css("background","#EEEEEE");
            }else{
                $(list[k]).css("background","#fcf6e8");
            }
        }
    }
    //点击让烘干机对应按钮显示
    $(".parch_rg_botm").on("click","ul li",function(){
        //  获取当前dom对象   当前下标  赋值x
        var $this = this;
        var i =  $(this).index();
        x=i;
        var list =$(".parch_rg_botm ul li");
        $($(".pchn_li1_img")[i]).css("display","none");
        $($(".pchn_lidiv")[i]).css("display","block");
        $(".pchn_li1_img:not(:eq(" + i + "))").css("display","block");
        $(".pchn_lidiv:not(:eq(" + i + "))").css("display","none");
        toggleBackColor(list);
        $(list[i]).css("background","#B0E0F0");
    });
    //模式切换
    $(".parch_nec_top").on("click","ul li",function(){
        var $this = this;
        var i =  $(this).index();
        $($this).css({"color":"#1276c4","border-bottom":"2px solid #1276c4"});
        $(".parch_nec_top ul li:not(:eq(" + i + "))").css({"color":"#8c8c8c","border":"none"});
    });
        //产品背景色切换切换
    $(".parch_rg_nec").on("click",".parch_nec_cp",function(){
        var $this = this;
        var i =  $(this).index();
        i-=1;
        $($this).css("background","#E1F1FE");
        $(".parch_rg_nec .parch_nec_cp:not(:eq(" + i + "))").css("background","#EEEEEE");
    });
});