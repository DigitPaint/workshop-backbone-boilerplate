(function(){

  var appView = new App.AppView({el: "#app"});
  var searchView = new App.SearchView({el: appView.content});

  App.Router = Backbone.Router.extend({

    routes: {
      "":                 "root",
      "search":          "search",  // #search/kiwis
      "search/:query":    "search"  // #search/kiwis
    },

    root: function(){
      // Add rootView to content of appView
      new App.RootView({el: appView.content }).render();
    },

    help: function(){
      console.log("Hellup!");
    },

    search: function(query){
      searchView.render();
    }

  });

})();