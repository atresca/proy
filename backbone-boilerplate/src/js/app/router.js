define(
  [
    'backbone',
    './modules/example/joke.view'
  ],
  function(Backbone, JokeView) {

    var Router = Backbone.Router.extend({

      routes: {
        '*path': 'handleDefaultRoute'
      },

      initialize: function() {
        Backbone.history.start();
      },

      handleDefaultRoute: function(path) {
        console.log(path);
        var jokeView = new JokeView();
      }

    });

    return Router;
  }
);
