$(document).ready(function(){

  $("#new_post_link").on("click", function(event){
    event.preventDefault();
    $.ajax({
      method: "get",
      url: "/posts/new",
    })
    .done(function(formInfo){
      $('#new_post_link').toggle();
      $("#sidebar").append(formInfo);
    });
  });

  $(document).on("submit","#post_form", function(event){
    event.preventDefault();
    $.ajax({
      method: "post",
      url: "/posts",
      data: $(this).serialize()
    })
    .done(function(newPost){
      $('#new_post_link').toggle();
      $('#sidebar #post_form').remove();
      $("#posts").append(newPost);
    });

  });






});
