
$(function() {
	$(".filter-toggle").click(function() {
		if($(this).find('i')[0].className == "glyphicon glyphicon-chevron-up") {
			$(this).find('i')[0].className = "glyphicon glyphicon-chevron-down";
			$(this).parent().find('.filters-menu').slideDown('fast');
		} else {
			$(this).find('i')[0].className = "glyphicon glyphicon-chevron-up";
			$(this).parent().find('.filters-menu').slideUp('fast');
		}
	})
})