<template>
	<div class="banner">
		<ul class="clearfix">
			<router-link to="/article/0" tag='li'>
				<img src="../assets/images/img_1.jpg" alt="" />
				<div class="text-box">
					<h2>来一次正宗“熊抱”，当战斗民族遇见世界杯</h2>
					<p>18/Jul.2018</p>
				</div>
			</router-link>
			<router-link to="/article/1" tag='li'><img src="../assets/images/img_2.jpg" alt="" />
				<div class="text-box">
					<h2>时髦大片穿搭养成记——可能是史上最适合情侣阅读的摩洛哥</h2>
					<p>20/Jul.2018</p>
				</div>
			</router-link>
			<router-link to="/article/2" tag='li'><img src="../assets/images/img_3.jpg" alt="" />
				<div class="text-box">
					<h2>英国‖ 非典型乡村英格兰文化进阶十日谈</h2>
					<p>22/Jul.2018</p>
				</div>
			</router-link>
			<router-link to="/article/3" tag='li'><img src="../assets/images/img_4.jpg" alt="" />
				<div class="text-box">
					<h2>初探北京6日 | 关于艺术与生活的朝圣</h2>
					<p>21/Jul.2018</p>
				</div>
			</router-link>
		</ul>
		<ol>
			<li class="active"></li>
			<li></li>
			<li></li>
			<li></li>
		</ol>
	</div>
</template>
<script>
	export default {
		mounted() {
			this.fnSlider();
		},
		watch: {
			// '$route':function(){
			// 	alert(1);
			// }
		},
		methods: {
			fnSlider() {
				$(function() {
					var mySwipe = new Swipe($('.banner')[0], {
						auto: 2000,
						continuous: true,
						stopPropation: true,
						callback: function(index, element) {
							$('.banner ol li').removeClass('active');
							$('.banner ol li').eq(index).addClass('active');
						}
					});
				});
			}
		}
	}
</script>