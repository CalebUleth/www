var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
  routes: [
    {
      path: '/',
      url: 'index.html',
    },
    {
      path: '/tutorials/',
      url: 'pages/Tutorials.html',
    },
    {
      path: '/journals/',
      url: 'pages/Journals.html',
    },
    {
      path: '/project1/',
      url: 'pages/Project1.html',
    },
    {
      path: '/project2/',
      url: 'pages/Project2.html',
    },
    {
      path: '/project3/',
      url: 'pages/Project3.html',
    },
    {
      path: '/project4/',
      url: 'pages/Project4.html',
    },
  ],

});
//config
var $$ = Dom7;
var mainView = app.views.create('.view-main')
