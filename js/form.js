$(document).ready(function(){
	$('.showLoginPopup').on('click', function(){
		showLoginPopup();
	});

	$('.popup #close').on('click', function(){
		hideLoginPopup();
	});

	$('#submit').click(function(e){
		e.preventDefault();
		validateLoginForm();
	});

	
});

function showLoginPopup(){
	$('.popup, .shadow').css({
		display: 'block'
	});
}

function hideLoginPopup(){
	$('.popup, .shadow').css({
		display: 'none'
	});
}

