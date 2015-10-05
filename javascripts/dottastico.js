$(document).ready(function(){
	set_dots();
	navigate_between_sections();
	change_active_section(set_offset_sections());
});

function set_dots(){
	var dottastico_height = 0;
	$('.dottable_section').each(function(index){
		var offsetted_index = index + 1;
		var shape = $('.dottastico').data("shape") || "triangle";
		var position = $('.dottastico').data("position") || "left";
		$('.dottastico').addClass("dottastico-"+position);
		$('.dottastico').append("<a href='javascript:void(0)' class='dot-link'><div class='dot "+shape+"' data-index="+offsetted_index+"></div></a>");
		dottastico_height = dottastico_height + (parseInt($('.dottastico').data("size").substring(0, $('.dottastico').data("size").length - 2))) + 15;
	});
	$('.dottastico').css({
		'margin-top' : -dottastico_height/2
	});
	$('.dot').css({
		"width" : $('.dottastico').data('size'),
		"height" : $('.dottastico').data('size'),
		"background-color":$('.dottastico').data('color')
	});
}

function navigate_between_sections(){
	$('.dot').click(function(){
		var index = $(this).data("index");
		$('body').animate({scrollTop: $(".dottable_section[data-dottable-index='" + index +"']").offset().top}, $('.dottastico').data("time"));
	});
}

function change_active_section(sections){
	$(window).scroll(function(){
		change_active_section_class($(".dot[data-index='" + get_current_section($(window).scrollTop(),sections) +"']"));
	});
	change_active_section_class($(".dot[data-index='" + get_current_section($(window).scrollTop(),sections) +"']"));
}

function change_active_section_class(section){
	$('.dot').each(function(){
		$(this).removeClass("active-dot");
	});
	$(section).addClass("active-dot");
}

function get_current_section(current_pos, sections){
	for(i = 0 ; i< sections.length ; i++){
		if( sections[i+1]!= undefined ){
			if( current_pos >= (sections[i] - sections[i]/5) && current_pos < (sections[i+1] - sections[i+1]/5) ) return i+1;
		} else{
			return i+1;
		}
	}
}

function set_offset_sections(){
	var sections = [];
	$('.dottable_section').each(function(index){
		sections.push($(this).offset().top);
	});
	return sections;
}