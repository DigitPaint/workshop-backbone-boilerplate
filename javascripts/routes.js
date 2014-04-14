(function(){

  App.Router = Backbone.Router.extend({

    routes: {
      "":                 "root",
      "help":             "help",    // #help
      "search":          "search",  // #search/kiwis
      "search/:query":    "search"  // #search/kiwis
    },

    root: function(){
      new App.RootView({el: "#app"}).render();
    },

    help: function(){
      console.log("Hellup!");
    },

    search: function(query){
      new App.SearchView();
    }

  });

})();