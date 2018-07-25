(function ($) {
    jQuery.fn.imageView = function (settings) {
        // Find Elements
        var $container = this;
        if ($container.length == 0) return false;
        var container = $container[0];
        var $img = $('.navck');
        var img = $('.navck .navImg_bj')[0];

        if (img.complete) {
            setTimeout(function () {
                loaded();
            }, 100);
        }
        else {
            $(img).one('load', function () {
                loaded();
            });
        }

        function loaded() {
            settings['imgwidth'] = $img.width();
            settings['imgheight'] = $img.height();
            $img.css('left', settings['width'] / 2 - $img.width() / 2);
            $img.css('top', settings['height'] / 2 - $img.height() / 2);
            $img.bind('mousedown.imgview', function (event) {
                $img.data('mousedown', true);
                $img.data('cannot_minimize', false);
                settings['pageX'] = event.pageX;
                settings['pageY'] = event.pageY;
                return false;
            });

            $(document).bind('mouseup.imgview', function (event) {
                $img.data('mousedown', false);
                return false;
            });

            $(document).bind('mousemove.imgview', function (event) {
                if ($img.data('mousedown')) {
                    var dx = event.pageX - settings['pageX'];
                    var dy = event.pageY - settings['pageY'];
                    if ((dx == 0) && (dy == 0)) {
                        return false;
                    }
                    var newX = parseInt($img.css('left')) + dx;
                    var newY = parseInt($img.css('top')) + dy;
                    if(newX>195){newX=195;}
                    if(newX<-310){newX=-310}
                    if(newY>0){newY=0}
                    if(newY<-365){newY=-365}
                    $img.css('left', newX + 'px');
                    $img.css('top', newY + 'px');
                    settings['pageX'] = event.pageX;
                    settings['pageY'] = event.pageY;

                }
                return false;
            });
            function cursor() {
                    if ($img.data('state') == 0) {
                            $container.css('cursor', 'pointer');
                    }
                    else {
                        $container.css('cursor', 'move');
                    }
            }
            cursor();
        }
    };
})(jQuery);