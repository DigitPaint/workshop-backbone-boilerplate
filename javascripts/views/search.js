(function(){

  App.SearchView = Backbone.View.extend({

    
    initialize: function(){
      this.results = new App.SearchCollection();

      var data = {
        q: "zimmer"
      };

      this.results.fetch({data: data});
    },
    
    render: function(){
      this.$el.html(this.template({title: "Hello World!", body: "This is the root of your application"}));

      return this;
    }
  });

})();