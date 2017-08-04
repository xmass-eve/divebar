

function showPage(page) {
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





