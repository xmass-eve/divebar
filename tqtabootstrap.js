

function showPage(page) {
    window.location.hash = page;
    $("#pagecontent").load(page);
}

function showMenu(menu) {
    $("#pagemenu").load(menu);
}

function setBanner(url) {
    $("#banner").css("background-image", "url('" + url + "')");
}

function setHeader(header) {
    $("#bannertitle").text(header);
}

$(window).ready(function(){
    var page = window.location.hash.substr(1);
    if (page != "")
        showPage(page);
});