(function($) {
  // Toggle the accordions when clicking on the titles.
  $(".accordeon").find(".titre").on("click.accordeon", function(event) {
    var line = $(event.currentTarget).parent();
    line.toggleClass("active");
    line.children(".contenu").slideToggle();
    line.children(".accordeon").slideToggle();
  });

  /**
   * Go to anchor tag.
   */
  function goToHash(hash) {
    if (hash != "") {
      // The line with the anchor.
      var hash_line = $(hash).hasClass("titre") ? $(hash).parent(".ligne") : $(hash).closest(".ligne");
      // The content with the anchor.
      var hash_content = $(hash).hasClass("titre") ? $(hash).next(".contenu") : $(hash).closest(".contenu");
      // The accordion with the anchor.
      var hash_accordion = hash_line.parent(".accordeon");
      // The parent line.
      var parent_line = hash_accordion.parent(".ligne");

      // If there's a parent line, toggle it.
      if (parent_line.length) {
        parent_line.addClass("active");
        hash_accordion.show().prev(".contenu").show();
      }

      // If there's no content, toggle the accordeon.
      if (hash_content.length == 0) {
        hash_line.find(".accordeon").show();
      }

      // Toggle the line with the hash.
      hash_line.addClass("active");
      hash_content.show().next(".accordeon").show();
    }
  }

  // Get the hash from the URL.
  var hash = window.location.hash;
  goToHash(hash);

  // Go to anchor on the same page.
  $("a").on("click", function(event) {
    hash = $(this).prop("hash");
    goToHash(hash);
  });
})(jQuery);
;
