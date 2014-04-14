(function(){

  App.AppView = Backbone.View.extend({
    template: _.template($("#app-view").html()),

    initialize: function(){
      this.render();
      this.content = this.$el.find("#content-view");
      
      // You'll will want to change this to a view :)
      this.playlist = this.$el.find("#playlist-view");
    },
    render: function(){
      this.$el.html(this.template());
      return this;
    }

  });

})();