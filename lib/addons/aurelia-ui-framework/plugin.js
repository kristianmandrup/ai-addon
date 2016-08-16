module.exports = function (config) {
   // AppKey for local/session storage key prefix
   config.App.Key = 'App';
   // Application Title
   config.App.Title = 'Aurelia UI Framework';
   // Application Version
   config.App.Version = '1.00';

   // HTTPClient Base API URL
   config.Http.BaseUrl = './';
   // HTTPClient Extra Headers
   config.Http.Headers = {
       'X-API-VERSION': '1'
   };
   // HTTPClient Send Basic Authorization Header
   config.Http.AuthorizationHeader = false;

   // Enable AmCharts
   config.UseCharts = true;
});