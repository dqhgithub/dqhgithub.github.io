$(document).ready(function(){
    getData();
    //加载数据
    function getData(){
        //获取加载数据最初显示几屏的class
    var dataset = $(".mon_bom").find("div").first().attr("class");
    var html ="";
        //$.ajax({
        //    type:"get",
        //    url:"",
        //    data:,
        //    success:function(data){},
        //    error:function(data){}
       // });
    for(var i=0;i<6;i++){
        html+=`
                <li>
                    <img class="mon_bom_img" src="img/monitor/316-12313.png" alt=""/>
                    <div class="bom_necyy">
                    <span class="bom_sxt">仓库监控-A仓库录像</span>
                    <img class="bom_qhimg" src="${dataset=='mon_bom_nec0'?'img/monitor/switch_4.png':'img/monitor/switch_3.png'}" alt="加载中..."/>
                    </div>
                </li>
              `;
    }
    $(".mon_bom_data").html(html);
    }
    //几屏显示切换
    $(".mon_tImg").on("click","img",function(){
        var $this = this;
        var i =  $(this).index();
        var list = $(".mon_tImg img");
        for(var k=0;k<list.length;k++){
            if(i===k){
                list[k].src="img/monitor/screen_ok"+k+".png";
                if(i===0){
                    $(".mon_bom").find("div").first().attr("class","mon_bom_nec0");
                }else if(i===1){
                    $(".mon_bom").find("div").first().attr("class","mon_bom_nec1");
                }else if(i===2){
                    $(".mon_bom").find("div").first().attr("class","mon_bom_nec2");
                }else if(i===3){
                    $(".mon_bom").find("div").first().attr("class","mon_bom_nec3");
                }
            }else{
                list[k].src="img/monitor/screen_err"+k+".png";
            }
        }
        getData();
    });

    //模式选择
    $(".mon_top").on("click",".mon_tgd,.mon_tlb",function(){
        var $this = this;
        var clas = $($this).attr("class");
        if(clas==="mon_tlb"){
            $($this).css({"background":"#21A6E6","color":"#ffffff"});
            $($this).children(".mon_tgdImg").attr("src","img/monitor/carousel_ok.png");
            $(".mon_tgd").css({"background":"#ffffff","color":"#b9b9b9","border":"1px solid #b9b9b9"});
            $(".mon_tgd").children(".mon_tgdImg").attr("src","img/monitor/carousel_err.png");
        }else{
            $($this).css({"background":"#21A6E6","color":"#ffffff"});
            $($this).children(".mon_tgdImg").attr("src","img/monitor/fixed_model.png");
            $(".mon_tlb").css({"background":"#ffffff","color":"#b9b9b9","border":"1px solid #b9b9b9"});
            $(".mon_tlb").children(".mon_tgdImg").attr("src","img/monitor/carousel_err.png");
        }
    });
    //全屏
    $(".mon_tbig").on("click",function(){
        $(".mon_bom").attr("class","mon_bom_big");
        $("#background_olor").show();
    });

   //弹出页面中间的监控
   $(".mon_bom").on("click",".bom_qhimg",function(){
       var $this = this;
       $("#hidden_nec").show();
       $(".mon_tk").show();
   });
    //隐藏页面中间的监控
    $(".close_jk").on("click",function(){
        $("#hidden_nec").hide();
        $(".mon_tk").hide();
    });
    getPopupData();
    function getPopupData(){
        var html ="";
        var html1  ="";
        for(var i=0;i<10;i++){
               html+=`
                     <li>A仓库</li>
               `;
        }
         $(".mon_tk_cknum").html(html);
        for(var i=0;i<15;i++){
            html1+=`
                    <li>
                        <a href="#">
                          <img class="mon_tk_img" src="img/monitor/316-12313.png" alt=""/>
                        </a>
                        <div class="mon_tk_necyy">
                            <span class="mon_tk_sxt">A仓库-1号录像</span>
                            <img class="mon_tk_qhimg" src="${i==1?'img/monitor/focus_err.png':'img/monitor/focus_ok.png'}" alt=""/>
                        </div>
                    </li>
               `;
        }
        $(".mon_tk_data").html(html1);
    };
    //仓库监控 室内监控切换
    $(".mon_tk_jk").on("click","ul li",function(){
        var $this = this;
        var i =  $(this).index();
        $($this).css({background:"#22A6E6",color:"#ffffff"});
        $(".mon_tk_jk ul li:not(:eq(" + i + "))").css({background:"#ffffff",color:"#7a7c7d"});
    });
    //子仓库切换
      $(".mon_tk_ck").on("click","ul li",function(){
          var $this = this;
          var i =  $(this).index();
          $($this).css("color","#0673a9");
          $(".mon_tk_ck ul li:not(:eq(" + i + "))").css("color","#7d7d7d");
      });

}).keyup(function(e){//退出全屏
          if(e.which=== 27){
              $(".mon_bom_big").attr("class","mon_bom");
              $("#background_olor").hide();
          }
});