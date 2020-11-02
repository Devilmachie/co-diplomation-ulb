(function($) {
  $(".field--name-field-cheminement .field-label").click(function() {
    $(this).next(".field-items").fadeToggle();
    $(this).toggleClass("active");
  });
  $(".paragraphs-item-groupe .field-titre-groupe").click(function() {
    $(this).next(".field--name-field-contenu-groupe").fadeToggle();
    $(this).toggleClass("active");
  });
  $(".paragraphs-item-sous-groupe .field-titre-sous-groupe").click(function() {
    $(this).next(".field--name-field-contenu-sous-groupe").fadeToggle();
    $(this).toggleClass("active");
  });
  $("td.sigle").click(function() {
    $(this).parent().next("tr.contenu").fadeToggle();
    $(this).find(".toggle").toggleClass("active");
  });

  /**
   * Go to anchor tag.
   */
  function goToHash(hash) {
    if (hash != "") {
      if ($(hash).hasClass("field-titre-groupe") && !$(hash).hasClass("active")) {
        $(hash).toggleClass("active").next(".field--name-field-contenu-groupe").fadeToggle();
      }
      else if ($(hash).hasClass("field-titre-sous-groupe") && !$(hash).hasClass("active")) {
        var $groupe = $(hash).closest(".paragraphs-item-groupe").find(".field-titre-groupe");
        if (!$groupe.hasClass("active")) {
          $groupe.toggleClass("active").next(".field--name-field-contenu-groupe").fadeToggle();
        }
        $(hash).toggleClass("active").next(".field--name-field-contenu-sous-groupe").fadeToggle();
      }
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
