$(document).ready(function(){
    $(".bt_register").on("click",function(e){
        e.preventDefault();
        location.href="index.html";
        var uname = $("#uname").val();
        var upwd = $("#upwd").val();
       console.log(uname,upwd);
        $.ajax({
            type:"post",
            url:"",
            data:{uname:uname,upwd:upwd},
            success:function(data){
                    //localStorage.setItem("uid", data.uid);
                    //localStorage.setItem("uname", data.uname);
                },
            error:function(){
                alert('ÍøÂç´íÎó£¡');
            }
            });
    });

    $(".seeImg").on("click",function(){
        var upwdInput = document.getElementById("upwd");
        if(upwdInput.type=="text"){
            upwdInput.type="password";
            $(".seeImg").attr("src","img/login/loginPswLookIcon.png");
        }else{
            upwdInput.type="text";
            $(".seeImg").attr("src","img/login/loginPswLook.png");
        }
    });
});