// $(document).ready(function(){
//     showBlog('#indocontent');
// });

// var blogContents = ["#indocontent", "#gilicontent", "#lembongancontent", "#balicontent", "#lombokcontent", "#komodocontent", "#rajacontent", "#lembehcontent", "#bunakencontent", "#othercontent"];
// function showBlog(blog)
// {
//     for (var i = 0;i < blogContents.length;i++)
//     {
//         $(blogContents[i]).css("display", "none");
//     }

//     $(blog).css("display", "block");
// }

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





