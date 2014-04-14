(function(){

  App.RootView = Backbone.View.extend({
    template: _.template($("#root-view").html()),
    
    render: function(){
      this.$el.html(this.template({title: "Hello World!", body: "This is the root of your application"}));

      return this;
    }
  });

})();