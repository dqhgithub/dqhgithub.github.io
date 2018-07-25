$(document).ready(function() {
	function scalc() {
		var bodyWidth = $('body').width()
		var bodyHeight = $('body').height()
		var iframeHeight = $('html').height()
		var iframeWidth = $('html').width()
		var scalcWidth = iframeWidth / bodyWidth
		var scalcHeight = iframeHeight / bodyHeight
		var weiX = bodyWidth - iframeWidth
		var weiY = bodyHeight - iframeHeight
		$('body').css({
			transform: 'scale(' + scalcWidth + ',' + scalcHeight + ')'
		});
	}
	scalc()
	window.onresize = function() {
		scalc()
		var wH = window.screen.height - 80 - (window.screen.height - document.body.clientHeight);
		$(".main_con").height(wH);
	}

	var wH = window.screen.height - 80 - (window.screen.height - document.body.clientHeight);
	$(".main_con").height(wH);
});