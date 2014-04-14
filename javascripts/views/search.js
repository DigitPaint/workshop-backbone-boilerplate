(function(){

  App.SearchView = Backbone.View.extend({
    template: _.template($("#search-view").html()),
    
    initialize: function(){
      this.results = new App.SearchCollection();

      // Collection event
      this.results.on("sync", this.renderResults, this);
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
    },

    renderResults: function(collection){
      var resultsTable = this.$el.find("table tbody");

      // Clean old results first
      resultsTable.html("");

      collection.each(function(result){
        var resultView = new App.SearchResultView({model: result}).render();
        resultsTable.append(resultView.$el);
      });
    }
  });

  App.SearchResultView = Backbone.View.extend({
    template: _.template($("#search-result-view").html()),
    tagName: "tr",
    events: {
      "click .play" : "play"
    },
    render: function(){
      this.$el.html(this.template(this.model.attributes));
      return this;
    },
    play: function(){
      alert("Add to playlist and play!");
      return event.preventDefault();
    }
  });

})();