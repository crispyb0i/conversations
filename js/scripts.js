$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Meow</li>");
    $("ul#webpage").prepend("<li>Ruff</li>");
    $("ul#user").children('li').first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children('li').first().click(function(){
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Meeeoww Meeeowww</li>");
    $("ul#webpage").before("<img src='img/dog.jpg'>");
    $("img").click(function(){
      $(this).remove();
    });
    $("ul#user").children('li').first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children('li').first().click(function(){
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Meeeeeooowwwwww~~!!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children('li').first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children('li').first().click(function(){
      $(this).remove();
    });
  });
});
