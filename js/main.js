var i = 0;
var paths = ['images/01.jpg','images/02.jpg','images/03.jpg','images/04.jpg'];
var captions = ['Getting ready to build houses in Ulaanbaatar','We built houses and made new friends!','Hangin out with this camel in the Gobi Desert','Apple picking in Massachuestts'];

$(document).ready(function(){
	// move to previous image
	$('.next').click(function(){
		if (i < paths.length - 1){
			i++;
			$('.carousel').attr('src', paths[i]);
			$('p.captext').html(captions[i]);
		}
		else {
			i = 0;
			$('.carousel').attr('src', paths[i]);
			$('p.captext').html(captions[i]);
		}
	});

	//move to next image
	$('.prev').click(function(){
		if (i > 0){
			i--;
			$('.carousel').attr('src', paths[i]);
			$('p.captext').html(captions[i]);
		}
		else {
			i = paths.length - 1;
			$('.carousel').attr('src', paths[i]);
			$('p.captext').html(captions[i]);
		}
	});
});