

$(document).ready(function(){
    
});

var blogContents = ["#indocontent", "#gilicontent", "#lembongancontent", "#balicontent", "#lombokcontent", "#komodocontent", "#rajacontent", "#lembehcontent", "#bunakencontent", "#othercontent"];
function showBlog(blog)
{
    for (var i = 0;i < blogContents.length;i++)
    {
        $(blogContents[i]).css("display", "none");
    }

    $(blog).css("display", "block");
}

  

 
