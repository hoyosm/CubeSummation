$( document ).ready(function()
{
    $('.news').click(function()
    {
        $.getJSON('js/news_mock.json', function(data)
        {
            console.log(data);
            var html = "";
            $.each(data, function(key, val)
            {
                html += "<div class='panel " + (key%2===0 ? 'panel-info' : 'panel-success') +"'>";
                html += "<div class='panel-heading'>";
                html += "<h2 class='panel-title'>";
                html += "<a data-toggle='collapse' href='#collapse" + key + "' onclick='setTitle(" + key + ", \"" + val.title + "\")'><img src='" + val.image + "' class='img-circle img-header' />" + val.title + "</a>";
                html += "</h2>";
                html += "</div>";
                html += "<div id='collapse" + key + "' class='panel-collapse collapse'>";
                html += "<div class='panel-body'>";
                html += "<div class='row'>";
                html += "<div class='col-md-12'>";
                html += "<img class='img-thumbnail img-content' src='" + val.image + "' />";
                html += "<h3>" + val.title + "</h3>";
                html += "<span>" + val.content + "</span>";
                html += "</div>";
                html += "</div>";
                html += "</div>";
                html += "</div>";
                html += "</div>";
            });
            $( "div.divnews" ).html(html);
        });
    });
});
function setTitle(n, title)
{
    $( "a.title1" ).html("Noticia # " + (n+1));
    $( "a.title2" ).html(" " + title);
}
