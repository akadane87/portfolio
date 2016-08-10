
$(document).ready(function() {

	// start stellar
	$(window).stellar();

	// start reveal
	// add data-sr to elements
	// https://github.com/jlmakes/scrollReveal.js/wiki/Keywords
	window.sr = new scrollReveal();

	// download resume
  $('a#resume').attr({
    target: '_blank', 
    href  : 'AKadane_2CurrentResume2014.docx'
  });

});