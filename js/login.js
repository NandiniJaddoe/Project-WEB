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
