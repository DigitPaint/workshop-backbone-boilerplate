(function(){

  App.SearchCollection = Backbone.Collection.extend({
    model: App.SearchResult,
    url: "https://api.soundcloud.com/tracks?client_id=9bea58b0147d26f467e8919ee83839d1"
  });

})();