window.onload = function () {
  $("#navbar h1").on("click",  function() {
    window.location.href="/"
  })
  $("#navlinks p").on("click", function() {
    let ival = $(this).html();
    switch (ival) {
      case "About Us":
        window.location.href="/about.html"
        break;
      case "Our Blog":
        window.location.href="/blog.html"
        break;
      case "Get a Quote":
        window.location.href="/quote.html"
        break;
    }
  
  })
}