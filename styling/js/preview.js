$(document).ready(function () {
        var xOffset = -20;
        var yOffset = 40;
        $('.preview').on('mouseover', function (e) {
            var img = $(this);
            img.t = img.title;
            img.title = "";
            var c = (img.t != "") ? "<br/>" + img.t : "";
            $("body").append("<p id='preview'><img src='" + img.attr('link') + "' alt='Image preview' />" + c + "</p>");
            $("#preview").css({
                "top": (e.pageY - xOffset) + "px",
                    "left": (e.pageX + yOffset) + "px",
                    'display': 'block',
            });
        });
        $('.preview').on('mouseleave', function (e) {
            $('#preview').remove();
        })
        });