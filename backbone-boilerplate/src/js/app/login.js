define(
  [
    'backbone',
    './modules/example/login.view'
  ],
  function(Backbone, LoginView) {

    var LoginRouter = Backbone.Router.extend({

      routes: {
        '*path': 'handleDefaultRoute'
      },

      initialize: function() {
        Backbone.history.start();
      },

      handleDefaultRoute: function(path) {
        console.log(path);
        var loginView = new LoginView();
      }

    });

    return LoginRouter;
  }
);
