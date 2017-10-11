(function( $ ){
  $.fn.KamusKita = function(preferences) {
    var settings = {
      theme: preferences.theme || 'light',
      hideWord: (preferences.hideWord === undefined) ? false : preferences.hideWord,
      link: (preferences.link === undefined) ? true : preferences.link,
      missingDefinition: preferences.missingDefinition || 'No entry found for this word.',
      loading: preferences.loading || 'Loading...',
      color: preferences.color || 'inherit',
    }

    var baseUrl = "https://kamuskita.my"
    var definitionUrl = function(word) {
      return baseUrl + "/api/words/" + word + "/best-definition"
    }

    $('.kamuskita-popup').remove();

    this.each(function(i, item) {
      var self = $(item);
      $(self).off('mouseenter mouseleave')

      self.word = self.text().substr(0, 50);

      $(self).css('position', 'relative');
      $(self).css('display', 'inline-block');
      $(self).css('color', settings.color);

      self.popup = $("<div>", {
        class: 'kamuskita-popup ' + settings.theme,
        html: settings.loading
      });
      self.append(self.popup);
      self.popup.hide();

      $(self).on('mouseenter', function() {
        if (self.definition === undefined) {
          $.get(definitionUrl(self.word))
            .success(function(response) {
              self.definition = response;
            })
            .fail(function() {
              self.definition = {
                original_word: self.word,
                definition: settings.missingDefinition
              }
            })
            .always(function() {
              self.popup.html(null);
              if (!settings.hideWord) {
                if (settings.link) {
                  self.popup.append(
                    $("<a>", {
                      class: 'definition-title',
                      href: baseUrl+"/"+self.definition.original_word,
                      html: self.definition.original_word
                    })
                  )
                } else {
                  self.popup.append(
                    $("<span>", {
                      class: 'definition-title',
                      html: self.definition.original_word
                    })
                  )
                }
              }
              self.popup.append(
                $("<p>", {
                  class: 'definition-details',
                  html: self.definition.definition
                })
              )
            })
        }
        self.popup.show();
      });

      $(self).on('mouseleave', function() {
        self.popup.hide();
      });
    })

    return this;
  }; 
})( jQuery );