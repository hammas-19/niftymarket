(function(c){c.fn.s201_BAI=function(d){function b(){x=setTimeout(function(){q||r?b():k.find(".s201_next").trigger("click")},e.autoplay_speed)}function a(){0<e.autoplay_speed&&(clearTimeout(x),b());e.auto_slide&&(l.find(".s201_auto_slide").addClass("s201_animation_paused"),l=k.find(".s201_slide_active"),l.find(".s201_animation_paused").length?(f=l.find(".s201_auto_slide"),f.removeClass("s201_animation_paused")):h(0))}function h(a){if(!e.auto_slide||r||q||w)return!1;var b=k.find(".s201_slide_active"),
v=b.find(".s201_item_img").length,d,g=parseInt(e.slide_speed),l={},p=b.data("moveDirection");if(2>v)return e.auto_slide=!1;if(e.vertical){var t=b.find(".s201_img_holder").height();if(0==t)return setTimeout(function(){h(a)},200),!1;var m=0;0==p?(b.find(".s201_item_img").each(function(a){if(0==a)return!0;m=c(this).height();if(m==t)return!0;d=c(this);0<m&&(g=parseInt(g/t*(t-m)));return!1}),animation_name="height_100"):(c(b.find(".s201_item_img").get().reverse()).each(function(a){if(a==v-1)return!1;m=
c(this).height();if(0==m)return!0;d=c(this);m<t&&(g=parseInt(g/t*m));return!1}),animation_name="height_0");l.height=m+"px"}else{var u=b.find(".s201_img_holder").width();if(0==u)return setTimeout(function(){h(a)},200),!1;var n=0;0==p?(b.find(".s201_item_img").each(function(a){if(0==a)return!0;n=c(this).width();if(n==u)return!0;d=c(this);0<n&&(g=parseInt(g/u*(u-n)));return!1}),animation_name="width_100"):(c(b.find(".s201_item_img").get().reverse()).each(function(a){if(a==v-1)return!1;n=c(this).width();
if(0==n)return!0;d=c(this);n<u&&(g=parseInt(g/u*n));return!1}),animation_name="width_0");l.width=n+"px"}void 0!=d?(l.animation=g+"ms linear "+a+"ms forwards "+animation_name,d.css(l),d.addClass("s201_auto_slide"),f=d):(b.data("moveDirection",-1*p+1),h(a))}function g(){c(".s201_holder").each(function(){y(c(this),100)})}function y(a,b){if(1E3<b)return!1;setTimeout(function(){var d=a.parent().hasClass("s201_full_width")?a.parent().width():a.find(".s201_img_holder").width();if(2>d)y(a,b+50);else{a.find(".s201_overlay_img").removeAttr("style");
a.find(".s201_overlay_img img").css({width:d,opacity:"1"});var h=a.find(".s201_img_holder").height();a.find(".s201_overlay_img img").css("height","");a.find(".s201_overlay_img img").each(function(){c(this).height()<h&&c(this).css("height",h)})}},b)}var k=this,e=c.extend({vertical:!1,sliding_behavior:"drag",autoplay_speed:0,auto_slide:!1,slide_speed:3E3,slide_delay:2E3,useIframeWidth:!0},d||{}),f,r=0,q=0,w=0,p=0,x,z=0;e.vertical&&this.addClass("s201_vertical");this.find(".s201_holder").each(function(a,
b){(new c.S201BeforeAfterImage(c(this))).InitEvents(e)});var l=this.find(".s201_slide_active");this.find(".s201_holder").data("moveDirection",0);this.find(".s201_pager .s201_pager_item").on("click",function(b){b=c(this).index();k.find(".s201_holder").removeClass("s201_slide_active");k.find(".s201_holder:eq("+b+")").addClass("s201_slide_active");k.find(".s201_pager .s201_pager_item").removeClass("s201_pager_active");c(this).addClass("s201_pager_active");a()});this.find(".s201_prev").on("click",function(b){b=
k.find(".s201_slide_active");var c=k.find(".s201_pager_active");b.prev(".s201_holder").length?(b.prev(".s201_holder").addClass("s201_slide_active"),c.prev(".s201_pager_item").addClass("s201_pager_active")):(k.find(".s201_holder:last").addClass("s201_slide_active"),k.find(".s201_pager_item:last").addClass("s201_pager_active"));b.removeClass("s201_slide_active");c.removeClass("s201_pager_active");a()});this.find(".s201_next").on("click",function(b){var c=k.find(".s201_slide_active"),d=k.find(".s201_pager_active");
c.next(".s201_holder").length?(c.next(".s201_holder").addClass("s201_slide_active"),d.next(".s201_pager_item").addClass("s201_pager_active")):(k.find(".s201_holder:first").addClass("s201_slide_active"),k.find(".s201_pager_item:first").addClass("s201_pager_active"));c.removeClass("s201_slide_active");d.removeClass("s201_pager_active");a();b.stopPropagation()});0<e.autoplay_speed&&b();this.find(".s201_holder").on("mouseenter",function(a){if(p)return!0;r=1;e.auto_slide&&void 0!=f&&f.addClass("s201_animation_paused")});
this.find(".s201_holder").on("mouseleave",function(a){if(p)return!0;r=0;e.auto_slide&&void 0!=f?f.hasClass("s201_animation_paused")?f.removeClass("s201_animation_paused"):h(0):h(0)});this.find(".s201_holder").on("mousedown",function(a){if(p)return!0;q=1;e.auto_slide&&("drag"==e.sliding_behavior?f.hasClass("s201_auto_slide")&&f.addClass("s201_animation_paused"):f.removeClass("s201_animation_paused").css("animation",""))});this.find(".s201_holder").on("touchstart",function(a){w=q=1;e.auto_slide&&("click"==
e.sliding_behavior?f.removeClass("s201_auto_slide").css("animation",""):f.hasClass("s201_auto_slide")&&f.addClass("s201_animation_paused"))});c(document).on("mouseup",function(a){q=0;r||!e.auto_slide||void 0==f||f.hasClass("s201_auto_slide")||h(0)});c(document).on("touchend",function(a){w=r=q=0;p=1;e.auto_slide&&void 0!=f&&(f.removeClass("s201_animation_paused"),f.hasClass("s201_auto_slide")||h(0))});h(0);this.find(".s201_item_img").on("animationend webkitAnimationEnd oAnimationEnd",function(){f.removeClass("s201_auto_slide");
h(e.slide_delay)});e.useIframeWidth&&(c(".s201_holder").each(function(){0==c(this).find("iframe").length&&c(this).append('<iframe class="s201_iframe_width"></iframe>')}),this.find(".s201_iframe_width")[0].contentWindow.onresize=function(){clearTimeout(z);z=setTimeout(g,50)});g();c(window).on("resize",function(a){g()})};c.S201BeforeAfterImage=function(d){this.element=d instanceof c?d:c(d)};c.S201BeforeAfterImage.prototype={opts:{},dragStart:0,dragging:0,spaceFix:0,itemSelected:null,hasAutoSlide:0,
InitEvents:function(d){var b=this;this.opts=d;this.element.find(".s201_slider").on("touchstart mousedown",function(a){var h=a.originalEvent.touches?a.originalEvent.touches[0].pageY:a.pageY,g=a.originalEvent.touches?a.originalEvent.touches[0].pageX:a.pageX;a.preventDefault();a.stopPropagation();b.spaceFix=d.vertical?c(this).offset().top+14-h:c(this).offset().left+14-g;b.element.find(".s201_label_text").hide();b.element.find(".s201_caption_text").hide();b.dragStart=1;b.itemSelected=c(this).closest(".s201_item_img")});
c(document).on("touchend mouseup",function(a){b.element.find(".s201_label_text").show();b.element.find(".s201_caption_text").show();b.dragStart=0;b.dragging=0});"hover"==d.sliding_behavior&&(this.element.find(".s201_item_img").on("mouseenter",function(a){b.element.find(".s201_label_text").hide();b.element.find(".s201_caption_text").hide();if(b.dragStart)return!1;b.dragStart=1;var d=c(this).closest(".s201_holder").find(".s201_item_img").index(c(this));b.chooseSlideItem(a.pageX,a.pageY,c(this),d+1)}),
this.element.on("mouseleave",function(a){b.element.find(".s201_label_text").show();b.dragStart=0}));c(document).on("touchmove mousemove",function(a){b.dragStart&&(1<b.dragStart&&(2==b.dragStart&&d.auto_slide&&(b.itemSelected.css("animation","").removeClass("s201_animation_paused s201_auto_slide"),b.dragStart=3),b.updateSlider(b.itemSelected,a.originalEvent.touches?a.originalEvent.touches[0].pageX:a.pageX,a.originalEvent.touches?a.originalEvent.touches[0].pageY:a.pageY)),b.dragStart++)});this.element.find(".s201_item_img").on("touchmove",
function(a){b.dragging=1});if("click"==d.sliding_behavior)if(d.auto_slide)this.element.find(".s201_item_img").on("touchstart mousedown",function(a){a.cancelable&&a.preventDefault();var d=a.originalEvent.touches?a.originalEvent.touches[0].pageY:a.pageY;a=a.originalEvent.touches?a.originalEvent.touches[0].pageX:a.pageX;var g=c(this).closest(".s201_holder").find(".s201_item_img").index(c(this));b.chooseSlideItem(a,d,c(this),g+1);b.updateSlider(b.itemSelected,a,d);b.dragStart=1});else this.element.find(".s201_item_img").on("touchend mousedown",
function(a){a.cancelable&&a.preventDefault();if(b.dragging)return!0;var d=a.originalEvent.changedTouches?a.originalEvent.changedTouches[0].pageY:a.pageY;a=a.originalEvent.changedTouches?a.originalEvent.changedTouches[0].pageX:a.pageX;var g=c(this).closest(".s201_holder").find(".s201_item_img").index(c(this));b.chooseSlideItem(a,d,c(this),g+1);b.updateSlider(b.itemSelected,a,d);b.dragStart=1})},chooseSlideItem:function(c,b,a,h){1==h?this.itemSelected=this.element.find(".s201_item_img:eq(1)"):h<this.element.find(".s201_item_img").length?
(this.opts.vertical?(c=b-a.offset().top,b=a.next(".s201_item_img").height(),b+=(a.height()-b)/2):(c-=a.offset().left,b=a.next(".s201_item_img").width(),b+=(a.width()-b)/2),this.itemSelected=c<b?a.next(".s201_item_img"):a):this.itemSelected=a},updateSlider:function(c,b,a){if(this.opts.vertical){b=a+this.spaceFix-c.offset().top;var d=this.element.find(".s201_item_img:eq(0)").height();a=c;for(pos_percent=(b/(d/100)).toFixed(2);a.next(".s201_item_img").length;)b<a.next(".s201_item_img").height()&&(0>
b&&(pos_percent=0),a.next(".s201_item_img").css({height:pos_percent+"%"})),a=a.next(".s201_item_img");for(a=c;a.prev(".s201_item_img").find(".s201_slider").length;)b>a.prev(".s201_item_img").height()&&(b>d&&(pos_percent=100),a.prev(".s201_item_img").css({height:pos_percent+"%"})),a=a.prev(".s201_item_img");0>b&&(pos_percent=0);b>d&&(pos_percent=100);c.css({height:pos_percent+"%"})}else{b=b+this.spaceFix-c.offset().left;d=this.element.find(".s201_item_img:eq(0)").width();a=c;for(pos_percent=(b/(d/
100)).toFixed(2);a.next(".s201_item_img").length;)b<a.next(".s201_item_img").width()&&(0>b&&(pos_percent=0),a.next(".s201_item_img").css({width:pos_percent+"%"})),a=a.next(".s201_item_img");for(a=c;a.prev(".s201_item_img").find(".s201_slider").length;)b>a.prev(".s201_item_img").width()&&(b>d&&(pos_percent=100),a.prev(".s201_item_img").css({width:pos_percent+"%"})),a=a.prev(".s201_item_img");0>b&&(pos_percent=0);b>d&&(pos_percent=100);c.css({width:pos_percent+"%"})}}};c("[data-s201]").each(function(){c(this).s201_BAI(c(this).data("s201"))})})(jQuery);