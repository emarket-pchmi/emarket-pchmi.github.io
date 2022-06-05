if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    document.getElementsByClassName('store-nav-link')[0].addEventListener('click', navigateToStore)
    document.getElementsByClassName('profile-nav-link')[0].addEventListener('click', navigateToProfile)
    document.getElementsByClassName('about-nav-link')[0].addEventListener('click', navigateToAbout)
    document.getElementsByClassName('sign-out-nav-link')[0].addEventListener('click', signOut)
}

function getBaseUrl() {
    return window.location.href.split("/profile/")[0].toString();
}
function navigateToStore() {
    window.location.href = getBaseUrl() + "/Store/store.html";
}

function navigateToProfile() {
    window.location.href = getBaseUrl() + "/profile/profile.html";
}

function navigateToAbout() {
    window.location.href = getBaseUrl() + "/About/about.html";
}

function signOut() {
    window.location.href = getBaseUrl() + "/login_register/html/sign-up.html";
}