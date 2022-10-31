if (document.referrer.match(/^https:\/\/www\.youtube\.com/)){
    hide("overlayfull");
}else{
    show("overlayfull");
}

const node = document.getElementById("path");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        //show("loader");
        location.href = node.value;
    }
});

function goFullScreen() {
    if (document.cookie == 'noshow'){
        goFullScreenYoutube();
    } else {
        show("overlayfullscreen");
        setTimeout(() => { goFullScreenYoutube() }, 7000);
    }
}

function goFullScreenYoutube() {
    location.href='https://www.youtube.com/redirect?q=https://nimrodsun.github.io';
    setTimeout(() => { hide("overlayfullscreen") }, 7000);
}
function showLoader() {
    show("loader");
    setTimeout(() => { hide("loader") }, 5000);
}
function showOverlay() {
    show("overlay");
    node.focus();
    node.setSelectionRange(200, 200);
}
function hide(e){
    document.getElementById(e).style.display = "none";
}
function show(e){
    document.getElementById(e).style.display = "block";
}
