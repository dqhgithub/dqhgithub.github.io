$(function() {
	//显示隐藏温度折线图
	var FunBgSwitch1 = function(box) {
		//console.log(box)
		$(box).on("click", function() {
			if($(this).hasClass("active")) {
				$(this).removeClass("active")
				$(".showChart").css("z-index", 0);
			} else {
				$(this).addClass("active").siblings().removeClass("active")
				$(".showChart").css("z-index", 1);
			}
		})
	}
	FunBgSwitch1(".depot_chart_btn li");

	$(".js_off").on("click", function() {
		$(".showChart").css("z-index", 0);
		$(".depot_chart_btn li").removeClass("active");
	})
	$(".showChartNav .fl").on("click", "span", function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active")
		} else {
			$(this).addClass("active").siblings().removeClass("active")
		}
	})

	// 基于准备好的dom，初始化echarts实例
	if(document.getElementById('chart')) {
		var myChart2 = echarts.init(document.getElementById('chart'));
		//温度图表
		//仓库图表数据
		var xAxisData2 = ['9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '现在'];
		var data2 = [1000, 2000, 2000, 2500, 1000, 1000];
		var pdata2 = [18, 19, 20, 22, 18, 15, 18, 19, 20, 22, 18, 15];

		// 指定图表的配置项和数据
		var bar2 = {
			xAxis: {
				data: xAxisData2,
				splitNumber: 6,
				nameTextStyle: {
					color: '#333',
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: '#333',
					}
				},
				axisTick: {
					show: false,
					lineStyle: {
						color: '#333',
					}
				},
				splitLine: {
					show: false,
					lineStyle: {
						color: '#333',
					}
				},
			},

			yAxis: {
				name: '(温度/℃)',
				type: 'value',
				max: 30,
				splitNumber: 8,
				nameTextStyle: {
					color: '#333',
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: '#333',
					}
				},
				axisTick: {
					show: false,
					lineStyle: {
						color: '#333',
					}
				},
				splitLine: {
					lineStyle: {
						color: '#fff',
					}
				},
				axisLabel: {
					formatter: function(value) {
						return value + '°';
					}
				},

			},
			series: [{
				//			name: '数量占比',
				type: 'line',
				data: pdata2,
				lineStyle: {
					normal: {
						color: '#f6601f',
						width: 1,
					}
				},
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter: '{c}°',
					}
				},
				itemStyle: {
					normal: {
						borderWidth: 3,
						borderColor: '#f69c22',
						color: '#f69c22'
					}
				},
			}]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart2.setOption(bar2);

	}

	if(document.getElementById('sschart')) {
		//传感器图表
		//品种图表数据
		var xAxisData = ['3-04\n10:00', '3-04\n10:00', '3-04\n10:00', '3-04\n10:00', '3-04\n10:00', '3-04\n10:00', '3-04\n10:00'];
		var data = [{
				value: 19.9,
				name: '3-04 10:00',
			},
			{
				value: 19.7,
				name: '3-04 10:00',
			},
			{
				value: 20.2,
				name: '3-04 10:00',
			},
			{
				value: 19.7,
				name: '3-04 10:00',
			},
			{
				value: 20.1,
				name: '3-04 10:00',
			},
			{
				value: 20.2,
				name: '3-04 10:00',
			},
			{
				value: 20.7,
				name: '3-04 10:00',
			}
		];

		// 基于准备好的dom，初始化echarts实例
		var ssChart = echarts.init(document.getElementById('sschart'));
		// 指定图表的配置项和数据
		var bar = {
			xAxis: [{
				data: xAxisData,
				offset: 18,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				}
			}],
			yAxis: [{
				type: 'value',
				maxInterval: 5,
				minInterval: 1,
				min: 18,
				splitNumber: 4,
				offset: 10,
				axisLine: {
					show: false,
					label: {}
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					formatter: function(value) {
						return value + '°';
					}
				},

			}],
			series: [{
				type: 'line',
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter: '{c}°',
					}
				},
				symbol: 'circle',
				symbolSize: 10,
				color: '#850909',
				lineStyle: {
					normal: {
						color: '#850909',
						width: 1,
					}
				},
				itemStyle: {
					normal: {
						borderWidth: 3,
						borderColor: '#850909',
						color: '#d71313'
					}
				},
				data: data,

			}]
		};
		// 使用刚指定的配置项和数据显示图表。
		ssChart.setOption(bar);
		window.onresize = function() {
			ssChart.resize();
		};
	}
	//设置报警切换状态
	var FunBgSwitch = function(box) {
		//console.log(box)
		$(box).on("click", function() {
			$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
		})
	}

	FunBgSwitch(".check");
	FunBgSwitch(".check1");

	//tab切换
	var FunTabSwitch = function(box, i) {
		var TabNav = $(box).find(".tab_nav");
		var TabCon = $(box).find(".tab_con");

		//点击切换
		$(TabNav).on("click", "li", function(i) {
			var _index = $(this).index()
			$(this).addClass("active").siblings().removeClass("active");
			$(this).parents(".tab_nav").next(".tab_con").children().hide().eq(_index).show()

			//报警设置切换 ,切换按钮--5.22
			if(box == ".depot_settab") {
				if(_index == 0) {
					$(".saveset_btn").addClass("active");
					$(".addd_btn").removeClass("active");
				}
				if(_index == 1) {
					$(".addd_btn").addClass("active");
					$(".saveset_btn").removeClass("active");
				}
			}
		})

		//隐藏切换div
		$(TabCon).children().hide();
		//默认显示第几个
		if(i == undefined) {
			i = 0;
		}
		$(TabCon).children().eq(i).show();
		$(TabNav).find("li").eq(i).addClass("active").click();

	}

	//报警设置切换 --5.22
	FunTabSwitch(".depot_settab", 0);

	//传感器修改切换
	FunTabSwitch(".pset_tab", 0);

	//传感器修改

	//关闭弹窗和遮罩层
	$(".cancel").on("click", function() {
		fnOffPopup()
	})
	//关闭弹窗和遮罩层
	$(".sensor_table tr td").on("click", "a", function() {
		fnOpenPopup(".popup_setsensor")
		var txt = $(this).parents("tr").children().eq(0).html();
		$(".pset_tab .tab_nav li").eq(0).html("A" + txt)
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

	//传感器测试
	$(".pset_inp").on("click", "li .test_btn", function() {
		if($(this).siblings(".text_id").val() !== "") {
			$(this).siblings(".alert_txt").text("设备正常").show();
		} else {
			$(this).siblings(".alert_txt").text("没检查到设备").show();
		}
	})

	//**粮仓设置**
	if($(".depot_graintab").length != 0) {
		//tab切换
		var FunTabSwitch1 = function(box, i) {
			var TabNav = $(box).find(".tab_nav");
			var TabCon = $(box).find(".tab_con");
			//隐藏切换div
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
				$(this).parents(".tab_nav").next(".tab_con").children().hide().eq(_index).show()
			})
		}

		FunTabSwitch1(".depot_graintab");

		var setinp = $(".depot_graintab .tab_item li input");
		var seLi = $(".depot_graintab .tab_nav li");
		var seItem = $(".depot_graintab .tab_con .tab_item");
		var setind;
		//粮仓设置按钮
		$("#setGranin_btn").click(function() {
			funSetInd();
			if(setinp.attr("disabled")) {
				funSetEdit();
			} else {
				funSetConfirm();
			}
		})

		//粮仓设置  确定按钮
		$(".setconfirmbtn").click(function() {
			funSetInd();
			funSetConfirm();
		})
		//粮仓设置  清空按钮
		$(".setemptybtn").click(function() {
			funSetInd();
			seItem.eq(setind).find("input").val("")
		})
		//粮仓设置 编辑
		function funSetEdit() {
			setinp.removeAttr("disabled").addClass("active");
			seLi.eq(setind).addClass("isSelect").children("select").removeAttr("disabled");
			seLi.parents().off("click");
			$(".depot_operate_jl").hide();
			$(".setbbtn").show();
		}
		//粮仓设置 确认
		function funSetConfirm() {
			setinp.attr("disabled", "disabled").removeClass("active");
			seLi.removeClass("isSelect").children("select").attr("disabled", "disabled");
			FunTabSwitch1(".depot_graintab", setind);
			$(".depot_operate_jl").show();
			$(".setbbtn").hide();
		}
		//粮仓设置  获取当前修改tab index
		function funSetInd() {
			seLi.each(function(i) {
				if(seLi.eq(i).hasClass("active")) {
					setind = i;
				}
				return setind;
			})
		}
	}

	//关闭弹窗和遮罩层
	$(".popup_offbtn").on("click", function() {
		fnOffPopup()
	})
	//取消公告窗口
	$(".popup_escbtn").on("click", function() {
		fnOffPopup()
	})
	//取消公告窗口
	$(".popup_confirmbtn").on("click", function() {
		fnOffPopup()
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

});
$(document).ready(function() {
	//鼠标移至货物上切换颜色
	$('.navck').on("mouseover", ".nav_list li", function() {
		var $this = $(this);
		var cargoImg = $this.children("a").children('.cargo_img').children('img');
		//console.log(cargoImg);
		var src = cargoImg.attr("src");
		if(src === "img/home/mx/huo_red.png") {
			cargoImg.attr("src", "img/home/mx/huo_red_2.png");
		} else {
			cargoImg.attr("src", "img/home/mx/huo_gre.png");
		}
	}).on("mouseout", ".nav_list li", function() {
		var $this = $(this);
		var cargoImg = $this.children("a").children('.cargo_img').children('img');
		var src = cargoImg.attr("src");
		if(src === "img/home/mx/huo_red_2.png") {
			cargoImg.attr("src", "img/home/mx/huo_red.png");
		} else {
			cargoImg.attr("src", "img/home/mx/huo_nor.png");
		}
	});
	//更换模型
	$('.navmx_btn').on("click", function() {
		$(".navck").hide();
		$(".tan_update").show();
		$(".navmx_btn").hide();
	});
	//取消修改模型
	$('.update_qxbtn').on("click", function() {
		$(".navck").show();
		$(".tan_update").hide();
		$(".navmx_btn").show();
	});
	//模型选择
	//   根据后台的初始图  设置出事图片
	$($(".tan_upleft li")[2]).css({
		"background": "#CFDDE6",
		"color": "#1578C3"
	});
	$($(".tan_upmid li")[1]).css("color", "#1578C3");
	$(".tan_upimg").attr("src", "img/home/mx/cksz3-3.png");
	var arrx = [3];
	var arry = [3];
	$(".tan_update").on("click", ".tan_upleft li,.tan_upmid li", function() {
		var $this = this;
		var i = $(this).index();
		var x = "";
		var y = "";
		var clas = $($this).parent().parent().attr("class");
		if(clas === "tan_upleft") {
			$($(".tan_upleft li")[i]).css({
				"background": "#CFDDE6",
				"color": "#1578C3"
			});
			$(".tan_upleft li:not(:eq(" + i + "))").css({
				"background": "#A0A0A0",
				"color": "#ffffff"
			});
			arrx.push(i + 1);
		} else {
			$($(".tan_upmid li")[i]).css("color", "#1578C3");
			$(".tan_upmid li:not(:eq(" + i + "))").css("color", "#8D8C8B");
			arry.push(i + 2);
		}
		if(arrx.length == 10000) {
			arrx = [];
		}
		if(arry.length == 10000) {
			arry = [];
		}
		var n = arrx[arrx.length - 1];
		var m = arry[arry.length - 1];
		var href = "img/home/mx/cksz" + n + "-" + m + ".png";
		$(".tan_upimg").attr("src", href);
	});
	//确认修改模型
	$(".update_bcbtn").on("click", function() {
		var x = arrx[arrx.length - 1];
		var y = arry[arry.length - 1];
		arrange(x, y);
		$(".navck").show();
		$(".tan_update").hide();
		$(".navmx_btn").show();
		$(".navck").css({
			top: "-13.5px",
			left: "-8px"
		});
	});
	//拖动仓库模块
	$(function() {
		$('.navck').imageView({
			width: 1370,
			height: 800
		});
	});

	//仓库数据
	function param(num) {
		var html = "";
		for(var i = 0; i < num; i++) {
			var Imgnum = "img/home/mx/num_" + (i + 1) + ".png";
			var imgGre = "img/home/mx/huo_nor.png";
			var imgRed = "img/home/mx/huo_red.png";
			html += `
        <li>
            <a href="#">
            <div class="cargo_img"><img src="${i==2?imgRed:imgGre}" alt="" /></div>
            <div class="num_img"><img src="${Imgnum}" alt="" /></div>
            </a>
            </li>
         `;
		}
		$(".nav_list").html(html);
	}
	//仓库模型
	arrange(3, 3);

	function arrange(x, y) {
		param(x * y);
		//获取对应的背景的图片
		var href = "img/home/mx/ck" + x + "-" + y + ".png";
		$($('.navImg_bj')).attr('src', href);
		var top = 63;
		var left = 116;
		var list = $('.nav_list li');
		if(x == 1) {
			for(var i = 0; i < list.length; i++) {
				if(i < y) {
					$(list[i]).css({
						'top': top + i * top + 'px',
						'left': 380 + i * left + 'px'
					});
				}

			}
		} else if(x == 2) {
			for(var i = 0; i < list.length; i++) {
				if(i < y) {
					$(list[i]).css({
						'top': top + i * top + 'px',
						'left': 380 + i * left + 'px'
					});
				} else if(i < 2 * y) {
					$(list[i]).css({
						'top': 2 * top + (i % y) * top + 'px',
						'left': 260 + (i % y) * left + 'px'
					});
				}
			}
		} else if(x == 3) {
			for(var i = 0; i < list.length; i++) {
				if(i < y) {
					$(list[i]).css({
						'top': top + i * top + 'px',
						'left': 380 + i * left + 'px'
					});
				} else if(i < 2 * y) {
					$(list[i]).css({
						'top': 2 * top + (i % y) * top + 'px',
						'left': 260 + (i % y) * left + 'px'
					});
				} else if(i < 3 * y) {
					$(list[i]).css({
						'top': 3 * top + (i % y) * top + 'px',
						'left': 144 + (i % y) * left + 'px'
					});
				}
			}
		} else if(x == 4) {
			for(var i = 0; i < list.length; i++) {
				if(i < y) {
					$(list[i]).css({
						'top': top + i * top + 'px',
						'left': 380 + i * left + 'px'
					});
				} else if(i < 2 * y) {
					$(list[i]).css({
						'top': 2 * top + (i % y) * top + 'px',
						'left': 260 + (i % y) * left + 'px'
					});
				} else if(i < 3 * y) {
					$(list[i]).css({
						'top': 3 * top + (i % y) * top + 'px',
						'left': 144 + (i % y) * left + 'px'
					});
				} else if(i < 4 * y) {
					$(list[i]).css({
						'top': 4 * top + (i % y) * top + 'px',
						'left': 28 + (i % y) * left + 'px'
					});
				}
			}
		} else if(x == 5) {
			for(var i = 0; i < list.length; i++) {
				if(i < y) {
					$(list[i]).css({
						'top': top + i * top + 'px',
						'left': 380 + i * left + 'px'
					});
				} else if(i < 2 * y) {
					$(list[i]).css({
						'top': 2 * top + (i % y) * top + 'px',
						'left': 260 + (i % y) * left + 'px'
					});
				} else if(i < 3 * y) {
					$(list[i]).css({
						'top': 3 * top + (i % y) * top + 'px',
						'left': 144 + (i % y) * left + 'px'
					});
				} else if(i < 4 * y) {
					$(list[i]).css({
						'top': 4 * top + (i % y) * top + 'px',
						'left': 28 + (i % y) * left + 'px'
					});
				} else if(i < 5 * y) {
					$(list[i]).css({
						'top': 5 * top + (i % y) * top + 'px',
						'left': -86 + (i % y) * left + 'px'
					});
				}
			}
		}

	}
});

//打开弹窗和遮罩层
function openConfirm() {
	$(".shade").show();
	$("#confirmpup").show();
}

//关闭弹窗和遮罩层
function offConfirm() {
	$("#confirmpup").hide();
	$(".shade").hide();
}

//后期增加代码
$(function() {
	//打开增加粮仓弹窗
	$(".js_openaddgranary").click(function(){		
		$(".shade").show();
		$(".popup_addgranary").show();
	})
})
