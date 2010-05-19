//Usage: MrSkinner.skin({ 'width': 1000, 'href': 'google.com' });

var MrSkinner = {};

MrSkinner.skin = function(hsh){
     MrSkinner.init(hsh);
}

MrSkinner.init = function(hsh){
    MrSkinner.width = parseInt(hsh.width) || 1000;
    jQuery(document).ready(function(){
       jQuery("body").append('<div class="gutters" id="left_gutter"></div><div class="gutters" id="right_gutter"></div>');			  MrSkinner.draw_gutters();
       MrSkinner.draw_gutters();
       jQuery(window).resize(MrSkinner.draw_gutters);
       jQuery(".gutters").click(function(){
	    window.location = hsh.href;
       });
    });
}

MrSkinner.compute_gutter_width = function(){
    var x = parseInt(jQuery(window).width());
    var c = parseInt(MrSkinner.width);
    return ((x - c) / 2);
}

MrSkinner.draw_gutters = function(){
    var b = MrSkinner.compute_gutter_width();
    var left_gutter_start = 0;
    var right_gutter_start = (jQuery(window).width() - b);
    var gutter_size = String(b) + "px";
    jQuery(".gutters").removeAttr('style');
    jQuery(".gutters").css('position', 'absolute');
    jQuery(".gutters").css('height', '1000px');
    jQuery(".gutters").css('overflow-x', 'hidden');
    jQuery(".gutters").css('width', gutter_size);
    jQuery(".gutters").css('top', "0");
    jQuery(".gutters").css('cursor', "pointer");
    jQuery("#right_gutter").css('left', right_gutter_start);
    jQuery("#left_gutter").css('left', left_gutter_start);
}
