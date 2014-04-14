(function(){

  App.AppView = Backbone.View.extend({
    


    render: function(){
      this.$el.html(this.template({title: "Hello World!", body: "This is the root of your application"}));

      return this;
    }
  });

})();