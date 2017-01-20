var $formLink = $('header .form-link');
var $form = $('header .form');

$(function() {
	$formLink.on('click', showForm);
	$('.field').each(function(){
		$(this).on('blur', function() {
			if($(this).val() !== '') {
				$(this).parent().find('label, div').addClass('filled');
				$(this).parent().removeClass('required');
			} else {
				$(this).parent().find('label, div').removeClass('filled');
			}
		})
	})
});

function showForm() {
	$form.toggleClass('active');
}

function registerForm() {
	$('.ms-content').addClass('turn-register');
	$('.field').parent().removeClass('required');
}
function signINForm() {
	$('.ms-content').removeClass('turn-register');
	$('.field').parent().removeClass('required');
}

function signIn() {
	$('.ms-content .field').each(function() {
		if($(this).val() === '' ) {
			$(this).parent().addClass('required');
			$('.ms-content').removeClass('signed-in');
		} else {
			$(this).parent().removeClass('required');
			$('.ms-content').addClass('signed-in');
			setTimeout(function() {
		    	$form.removeClass("active");
		   	}, 1000);
		}
	})
}

function registerIn() {
	var password = $('.password').val();
	var cpassword = $('.cpassword').val();
	$('.ms-register .field').each(function() {
		if($(this).val() === '' ) {
			$(this).parent().addClass('required');
			$('.ms-content').removeClass('signed-in');
		} if(password !== cpassword) {
			$('.password, .cpassword').parent().find('div').removeClass('filled');
			$('.password, .cpassword').parent().addClass('required');
		} else {
			$('.password, .cpassword').parent().find('div').addClass('filled');
			$(this).parent().removeClass('required');
			$('.ms-content').addClass('signed-in');
			setTimeout(function() {
		       $form.removeClass("active");
		   	}, 1000);
		}
	})
}