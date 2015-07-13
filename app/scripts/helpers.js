define(["handlebars"],
function(Handlebars) {
  
  Handlebars.registerHelper("greeting", function() {
    return new Handlebars.SafeString("Hello World");
  });
  
  Handlebars.registerHelper("button", function(type, copy) {
    return new Handlebars.SafeString('<button class="' + type + '">' + copy + '</button>');
  });
  
  return this;
});