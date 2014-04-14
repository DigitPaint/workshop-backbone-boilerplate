(function(){

  App.SearchView = Backbone.View.extend({
    template: _.template($("#search-view").html()),
    
    initialize: function(){
      this.results = new App.SearchCollection();
    },

    events: {
      "click .btn"  : "searchHandle",
    },
    
    render: function(){
      this.$el.html(this.template());

      return this;
    },

    // Handle function to extract form values
    searchHandle: function(event){
      this.search(this.$el.find("form").serialize());
      return event.preventDefault();
    },

    search: function(query){
      this.results.fetch({data: query});
    }
  });

})();