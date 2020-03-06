$("document").ready(function() {

    var url = "https://api.flickr.com/services/feeds/photos_public.gne?" + "api=c871b6d5f50dac5519eb964f66717199&id=148076070@N06&format=json&jsoncallback=?&tags=animals";
    $.getJSON(url, function(data) {

        $.each(data.items, function(key, value) {

            $("#animals").append(
                "<a href="+value.media.m+" + data-title='"+value.title+"' + data-lightbox=pictures ><img src="+value.media.m+"></a>");
        });
    });

    var url = "https://api.flickr.com/services/feeds/photos_public.gne?" + "api=c871b6d5f50dac5519eb964f66717199&id=148076070@N06&format=json&jsoncallback=?&tags=characters";
    $.getJSON(url, function(data) {

        $.each(data.items, function(key, value) {

            $("#characters").append(
                "<a href="+value.media.m+" + data-title='"+value.title+"' + data-lightbox=pictures ><img src="+value.media.m+"></a>");
        });
    });

    var url = "https://api.flickr.com/services/feeds/photos_public.gne?" + "api=c871b6d5f50dac5519eb964f66717199&id=148076070@N06&format=json&jsoncallback=?&tags=events";
    $.getJSON(url, function(data) {

        $.each(data.items, function(key, value) {

            $("#events").append(
                "<a href="+value.media.m+" + data-title='"+value.title+"' + data-lightbox=pictures ><img src="+value.media.m+"></a>");
        });
    });

    var url = "https://api.flickr.com/services/feeds/photos_public.gne?" + "api=c871b6d5f50dac5519eb964f66717199&id=148076070@N06&format=json&jsoncallback=?&tags=holidays";
    $.getJSON(url, function(data) {

        $.each(data.items, function(key, value) {

            $("#holidays").append(
                "<a href="+value.media.m+" + data-title='"+value.title+"' + data-lightbox=pictures ><img src="+value.media.m+"></a>");
        });
    });

    $.ajax({
        type: "get",
        url: "faq.json",
        beforeSend: function() {
            $("#faq").html("");
        },
        timeout: 10000,
        error: function(json, status, error) {
            alert("Error: " + json.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#faq").append("<h2>" +
                        value.ask + "</h2>" +
                        value.answer + "<br>" + "<br>" + "<br>"
                    );
                });
            });
        }
    });

    $("#uploadImage").change(function () {
        $('#form').submit();
    });

    $('.gallery').fotorama({
        width:'90%',
        ratio: 3/2,
        allowFullScreen: true,
        fit: 'cover',
        loop: true, 
        keyboard: true,
    });


});


