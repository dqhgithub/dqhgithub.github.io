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

	//温度图表
	//仓库图表数据
	var xAxisData2 = ['9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '现在'];
	var data2 = [1000, 2000, 2000, 2500, 1000, 1000];
	var pdata2 = [18, 19, 20, 22, 18, 15, 18, 19, 20, 22, 18, 15];

	// 基于准备好的dom，初始化echarts实例
	var myChart2 = echarts.init(document.getElementById('chart'));
	// 指定图表的配置项和数据
	var bar2 = {
		legend: {
			data: ['数量', '数量占比'],
			right: 25,
		},
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
})