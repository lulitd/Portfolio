/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});




$('div.modal').on('hidden.bs.modal', function (e) {
  var modal = this;
	var hash = modal.id;

  //var nameValue = $(modal).find('#vidHolder').find('iframe').attr('src');
  //var videoIframe= modal.getElementsByTagName("iframe")[0];

var  videoIframe = $(".vidHolder.youtubeVideo iframe",modal).attr('src');

  if (typeof videoIframe != "undefined") {
    console.log(videoIframe);
    $(".vidHolder.youtubeVideo iframe",modal).attr('src','');
    $(".vidHolder.youtubeVideo iframe",modal).attr('src',videoIframe);
      //alert($('<div><iframe src="something"></iframe></div>').find('iframe').attr('src'));
  } else {
        var vimeoDiv = modal.getElementsByClassName("vimeoVideo")[0];
        var iFrame = vimeoDiv.getElementsByTagName("iFrame")[0];

        console.log(iFrame);

        var player = new Vimeo.Player(iFrame);
        player.pause();

}

});
