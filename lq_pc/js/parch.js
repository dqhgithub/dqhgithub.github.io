$(document).ready(function(){
    //���ź�ɻ��л�
    $(".parch_lf_nec").on("click",function(){
       var $this = this;
        var i =  $(this).index();
       // console.log(i);
        i-=1;
        $($this).css("border","1px solid #1276C5");
        //$($(".parch_lf_nec")[i]).css("border","1px solid #1276C5");
        $(".parch_lf_nec:not(:eq(" + i + "))").css("border","1px solid #E0E0E0");
    });
    //��ɻ���Ӧ��ť�ĵ���¼�
    //��¼������±�
    var x="";
    $(".parch_rg_bigimg").on("click","ul li",function(e){
        //��ֹ�¼���ת  ��ȡ��ǰdom����   ��ǰ�±�
        e.preventDefault();
        var $this = this;
        var i =  $(this).index();
        var list =$(".parch_rg_botm ul li");
        //�ж��±���x��ֵ
        if(x===i){//���x��i��� ���x��ֵ
            x="";
            $(".pchn_li1_img").css("display","block");
            $(".pchn_lidiv").css("display","none");
            toggleBackColor(list);
        }else{//���x��i����� ��ֵx
            x=i;
            $($this).children(".pchn_li1_img").css("display","none");
            $($this).children(".pchn_lidiv").css("display","block");
            $(".pchn_li1_img:not(:eq(" + i + "))").css("display","block");
            $(".pchn_lidiv:not(:eq(" + i + "))").css("display","none");
            toggleBackColor(list);
            $(list[i]).css("background","#B0E0F0");
        }
    });
    //�����л�����¼��ı�����ɫ
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
    //����ú�ɻ���Ӧ��ť��ʾ
    $(".parch_rg_botm").on("click","ul li",function(){
        //  ��ȡ��ǰdom����   ��ǰ�±�  ��ֵx
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
    //ģʽ�л�
    $(".parch_nec_top").on("click","ul li",function(){
        var $this = this;
        var i =  $(this).index();
        $($this).css({"color":"#1276c4","border-bottom":"2px solid #1276c4"});
        $(".parch_nec_top ul li:not(:eq(" + i + "))").css({"color":"#8c8c8c","border":"none"});
    });
        //��Ʒ����ɫ�л��л�
    $(".parch_rg_nec").on("click",".parch_nec_cp",function(){
        var $this = this;
        var i =  $(this).index();
        i-=1;
        $($this).css("background","#E1F1FE");
        $(".parch_rg_nec .parch_nec_cp:not(:eq(" + i + "))").css("background","#EEEEEE");
    });
});