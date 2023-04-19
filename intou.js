const creatBtn = document.querySelector('.creat-btn');
const creatWeb = document.querySelector('.creat-web');
const dscri = document.querySelector('.what');
const send = document.querySelector('.send-web');
const closeBtn = document.querySelector('.icon-close');
const scu = document.querySelector('.secu-word');
const sendBtn = document.querySelector('.send-btn');
const storeBtn = document.querySelector('.store-btn');
const storeClose = document.querySelector('.store-close');
const storeIn = document.querySelector('.store-in');
const storeSite = document.querySelector('.store-site');
const dowBtn = document.querySelector('.dow-btn');

creatBtn.addEventListener('click', () => {
    creatWeb.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    creatWeb.classList.remove('active');
});
creatBtn.addEventListener('click', () => {
    storeBtn.classList.add('passive');
});
closeBtn.addEventListener('click', () => {
    storeBtn.classList.remove('passive');
});
storeBtn.addEventListener('click', () => {
    storeIn.classList.add('active');
});

storeBtn.addEventListener('click', () => {
    storeSite.classList.add('active');
});
storeClose.addEventListener('click', () => {
    storeSite.classList.remove('active');
});

storeBtn.addEventListener('click', () => {
    creatWeb.classList.add('passive');
});
storeClose.addEventListener('click', () => {
    creatWeb.classList.remove('passive');
});
storeClose.addEventListener('click', () => {
    storeIn.classList.remove('active');
});
storeBtn.addEventListener('click', () => {
    scu.classList.add('active');
});
storeClose.addEventListener('click', () => {
    scu.classList.remove('active');
});
creatBtn.addEventListener('click', () => {
    dscri.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    dscri.classList.remove('active');
});
creatBtn.addEventListener('click', () => {
    send.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    send.classList.remove('active');
});
creatBtn.addEventListener('click', () => {
    scu.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    scu.classList.remove('active');
});



sendBtn.addEventListener('click', function () {

    var nameInputElement = document.getElementById('name-box');
    var NameinputValue = nameInputElement.value;

    var colorInputElement = document.getElementById('color-box');
    var ColorinputValue = colorInputElement.value;

    var keyInputElement = document.getElementById('key-box');
    var KeyinputValue = keyInputElement.value;

    var whatInputElement = document.getElementById('about-box');
    var WhatinputValue = whatInputElement.value;

    var headerInputElement = document.getElementById('header-box');
    var HeaderinputValue = headerInputElement.value;

    var usernameInputElement = document.getElementById('username-box');
    var UsernameinputValue = usernameInputElement.value;

    var mailtoLink = 'mailto:chamsddineofficial@gmail.com?subject=Input%20Box%20Content&body=' + 
    "<-name of webSite-> " + NameinputValue+" <-Colors-> " + ColorinputValue+
    "<-Key words-> "+KeyinputValue+" <-What is about-> "+WhatinputValue
    +"<-Header-> "+HeaderinputValue + "<-My name-> "+UsernameinputValue;
    window.location.href = mailtoLink; 

});

dowBtn.addEventListener('click' ,()=> {
    var downloadInputElement = document.getElementById('dow-box');
    var DownloadinputValue = downloadInputElement.value;
    window.open("https://drive.google.com/uc?export=download&id="+DownloadinputValue, "_blank");
});



