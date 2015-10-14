$(document).ready(function() {

  $("#new_post_link").on("click", function(event) {
    event.preventDefault();
    $("#new_post_link").hide();

    $.ajax({
      type: "GET",
      url: '/posts/form'
    }).done(function(result){
       $("#sidebar").append(result);
      $("#post_form").on("submit", function(event){
        event.preventDefault();

        $.ajax({
          type: "POST",
          url: '/posts',
          data: $("#post_form").serialize()
        }).done(function(result){
          // $("#sidebar").hide($("#post_form_container"));
          $("#new_post_link").show();
        })
      });
    })


  })


});
