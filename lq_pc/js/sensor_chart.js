$(function() {
	//设置tab切换

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
})