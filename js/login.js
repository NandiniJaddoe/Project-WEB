var formLink = document.getElementById('form-link');
var loginWrapper = document.getElementsByClassName('login-wrapper')[0];
var registerWrapper = document.getElementsByClassName('register-wrapper')[0];

formLink.addEventListener("click", function() {
    if (loginWrapper.style.height != "0px" && registerWrapper.style.height == "0px" || loginWrapper.style.height == "0px" && registerWrapper.style.height != "0px") {
        loginWrapper.style.height = 0;
        registerWrapper.style.height = 0;
    } else {
        showForm(loginWrapper);
    }
});

function showForm(wrapper) {
    var childHeight = outerHeight(wrapper.children[0]);
    var wrapperHeight = outerHeight(wrapper);
    var siblings = Array.prototype.filter.call(wrapper.parentNode.children, function(child){   return child !== wrapper; });

    if (childHeight === wrapperHeight) {
        wrapper.style.height = 0;
    } else {
        wrapper.style.height = childHeight + "px";
    }		

    siblings[0].style.height = 0;
}

function registerForm() {
    showForm(registerWrapper);
}

function loginForm() {
    showForm(loginWrapper);
}
//var $formLink = $('header .form-link');
//var $form = $('header .form');

//$(function() {
	//$formLink.on('click', showForm);
	//$('.field').each(function(){
		//$(this).on('blur', function() {
			//if($(this).val() !== '') {
				//$(this).parent().find('label, div').addClass('filled');
				//$(this).parent().removeClass('required');
			//} else {
				//$(this).parent().find('label, div').removeClass('filled');
			//}
		//})
	//})
//});

//function showForm() {
	//$form.toggleClass('active');
//}

//function registerForm() {
	//$('.ms-content').addClass('turn-register');
	//$('.field').parent().removeClass('required');
//}
//function loginForm() {
	//$('.ms-content').removeClass('turn-register');
	//$('.field').parent().removeClass('required');
//}

//function signIn() {
	//$('.ms-content .field').each(function() {
		//if($(this).val() === '' ) {
			//$(this).parent().addClass('required');
			//$('.ms-content').removeClass('signed-in');
		//} else {
			//$(this).parent().removeClass('required');
			//$('.ms-content').addClass('signed-in');
			//setTimeout(function() {
				//$form.removeClass("active");
			   //}, 1000);
		//}
	//})
//}

//function registerIn() {
	//var password = $('.password').val();
	//var cpassword = $('.cpassword').val();
	//$('.ms-register .field').each(function() {
		//if($(this).val() === '' ) {
			//$(this).parent().addClass('required');
			//$('.ms-content').removeClass('signed-in');
		//} if(password !== cpassword) {
			//$('.password, .cpassword').parent().find('div').removeClass('filled');
			//$('.password, .cpassword').parent().addClass('required');
		//} else {
			//$('.password, .cpassword').parent().find('div').addClass('filled');
			//$(this).parent().removeClass('required');
			//$('.ms-content').addClass('signed-in');
			//setTimeout(function() {
			   //$form.removeClass("active");
			   //}, 1000);
		//}
	//})
//}
