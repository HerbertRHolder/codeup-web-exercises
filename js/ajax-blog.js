
    $(document).ready(function(){
        
        var html = "";

        $.get('data/blog.json').done(function(data) {

            console.log(data);

            for (var i = 0; i <= data.length - 1; i++) {

                html += "<div>";

                html += "<h1>" + data[i].title + "</h1>";

                html += "<p>" + data[i].content + "</p>";

                html += "<p>" + data[i].categories.join(', ') + "</p>";

                html += "<p>" + data[i].date + "</p>";

                html += "</div>";

            }
            $("#posts").html(html);

        })
    })


    

