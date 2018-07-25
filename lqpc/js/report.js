$(function() {

	var FunBgSwitch = function(box) {
		//console.log(box)

		$(box).on("click", function(event) {
			var i = $(this).index()
			if($(this).hasClass("active")) {
				event.preventDefault();
			} else {
				$(this).addClass("active").siblings().removeClass("active")
				// 使用刚指定的配置项和数据显示图表。
				if(i == 0) {
					myChart.clear();
					myChart.setOption(pie);
				} else {
					myChart.clear();
					myChart.setOption(bar);
				}
			}
		})
	}
	//设置图表切换状态
	FunBgSwitch(".variety_tabbtn a")

	//品种图表数据
	var xAxisData = ['丝苗米', '东北大米', '茉莉香米', '东北糙米', '新米', '长粒白糯米'];
	var colorLists = ['#dd3030', '#f65e1c', '#f69c22', '#ffd00d', '#9dd93c', '#6cb525'];
	var data = [{
			value: 3000,
			name: '丝苗米',
		},
		{
			value: 3000,
			name: '东北大米',
		},
		{
			value: 3000,
			name: '茉莉香米',
		},
		{
			value: 3000,
			name: '东北糙米',
		},
		{
			value: 3000,
			name: '新米',
		},
		{
			value: 3000,
			name: '长粒白糯米',
		}
	];
	//统计
	var sun = function() {
		var val = 0;
		for(var i = 0; i < data.length; i++) {
			val += data[i].value;
		}
		return val;
	}
	var sun = sun();

	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('chart1'));

	// 指定图表的配置项和数据
	var pie = {
		legend: {
			selectedMode: false,
			bottom: 10,
			left: 'center',
			data: xAxisData
		},
		series: [{
				zlevel: 0,
				type: 'pie',
				hoverAnimation: false,
				label: {
					normal: {
						formatter: '{b|{b}：}{c}吨',
						rich: {
							b: {
								fontSize: 14,
								lineHeight: 33,
							}
						}
					}
				},
				labelLine: {
					normal: {
						length: 0,
						length2: 6,
						show: false
					}
				},

				data: data,
				itemStyle: {
					normal: {
						color: function(params) {
							// 根据需要建立一个彩色地图。
							var colorList = colorLists;
							return colorList[params.dataIndex]
						}
					}
				}
			},
			{
				zlevel: 1,
				type: 'pie',
				radius: ['0%', '35%'],
				hoverAnimation: false,
				label: {
					normal: {
						show: true,
						position: 'center',
						fontSize: 17,
						color: '#4a4a4a',
						formatter: '{b|{b}}{c|{c}}吨',
						rich: {
							c: {
								fontSize: 35,
								color: '#4a4a4a',
							}
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
					value: sun,
					name: '共',
					itemStyle: {
						normal: {
							color: 'rgba(255,255,255, .8)',
						}
					}

				}]
			},
		]
	};
	// 指定图表的配置项和数据
	var bar = {
		xAxis: [{
			data: xAxisData,
		}],
		yAxis: [{
			type: 'value'
		}],
		color: '#f65e1c',
		series: [{
			type: 'bar',
			label: {
				normal: {
					show: true,
					position: 'top',
					formatter: '{c}吨',
				}
			},

			data: data,
			itemStyle: {
				normal: {
					color: function(params) {
						// build a color map as your need.
						var colorList = colorLists
						return colorList[params.dataIndex]
					}
				}
			}
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(pie);

	//仓库图表数据
	var xAxisData2 = ['A仓库', 'B仓库', 'C仓库', 'D仓库', 'E仓库', 'F仓库'];
	var data2 = [1000, 2000, 2000, 2500, 1000, 1000];
	var pdata2 = [2000, 3000, 3000, 3500, 200, 2000];

	// 基于准备好的dom，初始化echarts实例
	var myChart2 = echarts.init(document.getElementById('chart2'));
	// 指定图表的配置项和数据
	var bar2 = {
		legend: {
			data: ['数量', '数量占比'],
			right:25,
		},
		xAxis: {
			data: xAxisData2,
			splitNumber: 6,
			nameTextStyle: {
				color: '#767676',
			},
			axisLine: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},
			axisTick: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},
			splitLine: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},
		},

		yAxis: {
			name: '(数量/吨)',
			type: 'value',
			max: 4000,
			splitNumber: 8,
			nameTextStyle: {
				color: '#767676',
			},
			axisLine: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},
			axisTick: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},
			splitLine: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},

		},
		series: [{
				name: '数量',
				type: 'bar',
				data: data2,
				itemStyle: {
					normal: {
						color: '#2196f3'
					}
				}
			},
			{
				name: '数量占比',
				type: 'line',
				data: pdata2,
				lineStyle: {
					normal: {
						color: '#f6601f',
						width: 1,
					}
				},
				itemStyle: {
					normal: {
						borderWidth: 3,
						borderColor: '#f69c22',
						color: '#f69c22'
					}
				},
			}
		]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart2.setOption(bar2);

	//供应商图表数据
	var yAxisData3 = [{
		value: 1,
		name: '东北糙米供应商'
	}, {
		value: 2,
		name: '农夫的一天供应商'
	}, {
		value: 3,
		name: '茉莉香米供应商'
	}, {
		value: 4,
		name: '东北大米供应商'
	}, {
		value: 5,
		name: '茉莉香米供应商'
	}, {
		value: 6,
		name: '农夫的一天供应商'
	}, {
		value: 7,
		name: '东北糙米供应商'
	}, {
		value: 8,
		name: '茉莉香米供应商'
	}, {
		value: 9,
		name: '东北大米供应商'
	}, {
		value: 10,
		name: '农夫的一天供应商'
	}];
	var colorLists3 = ['#e6b49c', '#d6e0e5', '#fcd83f', '#97ceff', '#97ceff', '#97ceff', '#97ceff', '#97ceff', '#97ceff', '#97ceff'];
	var data3 = [3500, 3300, 3100, 2900, 2700, 2500, 2300, 2000, 1800, 1600, ];
	// 基于准备好的dom，初始化echarts实例
	var myChart3 = echarts.init(document.getElementById('chart3'));
	// 指定图表的配置项和数据
	var bar3 = {

		xAxis: {
			type: 'value',
			max: 4000,
			name: '(数量/吨)',
			splitNumber: 8,
			nameTextStyle: {
				color: '#767676',
			},
			axisLine: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},
			axisTick: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},
			splitLine: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},
		},

		yAxis: {
			name: '(序号)',
			data: yAxisData3,
			inverse: true,
			nameLocation: 'start',
			nameTextStyle: {
				color: '#767676',
			},
			axisLine: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},
			axisTick: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},
			splitLine: {
				lineStyle: {
					color: '#d7d6d6',
				}
			},

		},
		series: [{
			type: 'bar',
			label: {
				normal: {
					show: true,
					position: 'right',
					fontSize: 14,
					color: '#767676',
					padding: [0, 0, 0, 20],
					formatter: function(params) {
						// console.log(params);
						for(var i = 0; i < yAxisData3.length; i++) {
							return yAxisData3[params.dataIndex].name;
						}
					}
				}
			},
			data: data3,
			itemStyle: {
				normal: {
					color: function(params) {
						// build a color map as your need.
						var colorList = colorLists3
						return colorList[params.dataIndex]
					}
				}
			}
		}]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart3.setOption(bar3);
	window.onresize = function() {
		myChart.resize();
		myChart3.resize();
	};
})