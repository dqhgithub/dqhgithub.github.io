$(function() {
	//关闭弹窗和遮罩层
	$(".popup_offbtn").on("click", function() {
		fnOffPopup()
	})
	//取消公告窗口
	$(".popup_notice .cancel").on("click", function() {
		fnOffPopup()
	})
	$(".index_news .index_title2").on("click", "a", function() {
		var i = $(this).parent().parent().index();
		switch(i) {
			case 0:
				fnOpenPopup(".popup_notice")
				break;
			case 1:
				fnOpenPopup(".popup_log")
				break;
			case 2:
				fnOpenPopup(".popup_sensor")
				break;
			default:
				break;
		}
	})
	$(".operate_btn").on("click", "li", function() {
		var i = $(this).index();
		var _this = $(this)
		switch(i) {
			case 0:
				break;
			case 1:
				$(".sensor_add").show()
				break;
			case 2:
				fnDeleteBtnShow(_this)
				break;
			default:
				break;
		}
	})
	//删除传感器电量列表当前列
	$(".sensor_td").on("click", "li .delete_btn", function() {
		var i = $(this).parent().index();
		$(this).parent("li").remove();
		console.log(i)

	})

	//关闭弹窗和遮罩层
	function fnOffPopup() {
		$(".popup").hide();
		$(".shade").hide();
	}

	//打开弹窗和遮罩层
	function fnOpenPopup(box) {
		$(".shade").show();
		$(box).show();
	}

	//显示隐藏删除传感器电量按钮
	function fnDeleteBtnShow(e) {
		if($(".sensor_td li .delete_btn").length < 0) {

		} else {
			if($(".sensor_td li .delete_btn").css("display") == "none") {
				$(".sensor_td li .delete_btn").show()
				e.find("span").html("完成")
			} else {
				$(".sensor_td li .delete_btn").hide()
				e.find("span").html("删除")
			}
		}
	}

	//传感器测试
	$(".sensor_list ul").on("click", "li .test_btn", function() {
		if($(this).siblings(".text_id").val() !== "") {
			$(this).siblings(".alert_txt").text("设备正常").show();
		} else {
			$(this).siblings(".alert_txt").text("没检查到设备").show();
		}
	})
	$(".confirm").on("click", function() {
		$(".sensor_add").hide()
	})

	//通讯录全选
	var FunSelects = function(box) {
		$(box).on("click", function() {
			if($(this).hasClass("active")) {
				$(this).removeClass("active")
				$(".directory_td li .d_select").removeClass("active")
			} else {
				$(this).addClass("active");
				$(".directory_td li .d_select").addClass("active");
			}
		})
	}

	FunSelects(".directory_th li.d_selects");

	//通讯录排序箭头状态
	var FunActive = function(box) {
		$(box).on("click", "li", function() {
			$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
		})
	}

	FunActive(".directory_sort");

	//通讯录单选
	var FunSelect = function(box) {
		$(box).on("click", function() {
			$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
			var a = 0;
			//计算所有选中的
			$(".directory_td li").each(function(i) {
				if($(".directory_td li").eq(i).find(".d_select").hasClass("active")) {
					++a;
				}
				return a;
			})
			//如果选中的等于列表 那么 全选也被选中 否则 去掉
			if(a == $(".directory_td li").length) {
				$(".directory_th li.d_selects").addClass("active");
			} else {
				$(".directory_th li.d_selects").removeClass("active");
			}
		})

	}
	FunSelect(".directory_td li .d_select");

	//tab切换
	var FunTabSwitch = function(box, i) {
		var TabNav = $(box).find(".tab_nav");
		var TabCon = $(box).find(".tab_con");
		//隐藏所以切换div
		$(TabCon).children().hide();
		//默认显示第几个
		if(i == undefined) {
			i = 0;
		}
		$(TabCon).children().eq(i).show();
		$(TabNav).find("li").eq(i).addClass("active");

		$(TabNav).on("click", "li", function(i) {
			var _index = $(this).index()
			$(this).addClass("active").siblings().removeClass("active");
			TabCon.children().hide().eq(_index).show()
		})
	}

	FunTabSwitch(".tab_wrap");

})