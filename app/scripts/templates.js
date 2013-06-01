this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["reviews/reviews"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <p class=\"text-center\" for=\"reviewsText\">Something to say?</p>\n  <textarea class=\"input-block-level\" id=\"reviewsText\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.reviews),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n  <div class='row-fluid'>\n    <div class='span6'>\n      <button class='btn btn-large btn-block btn-success' data-hull-action=\"review\" data-hull-value=\"1\">Yes</button>\n    </div>\n    <div class='span6'>\n      <button class='btn btn-large btn-block btn-danger' data-hull-action=\"review\" data-hull-value=\"0\">No</button>\n    </div>\n  </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n  <p>Login to vote.</p>\n";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class='row-fluid text-center'>\n    <div class='span6'>\n      <span class='badge badge-success'><h1>";
  if (stack1 = helpers.yes) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.yes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1></span>\n    </div>\n    <div class='span6'>\n      <span class='badge badge-important'><h1>";
  if (stack1 = helpers.no) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.no; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1></span>\n    </div>\n  </div>\n";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n  <ul class=\"unstyled\">\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  if (stack1 = helpers.reviews) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.reviews; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.reviews) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <li class=\"hull-reviews__list__item\">\n        <strong>"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> voted\n        ";
  stack2 = helpers['if'].call(depth0, depth0.rating, {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        ";
  stack2 = helpers['if'].call(depth0, depth0.description, {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </li>\n    ";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "\n          <span class='label label-success'>Yes</span>\n        ";
  }

function program11(depth0,data) {
  
  
  return "\n          <span class='label label-error'>No</span>\n        ";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <p><em>\"";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"</em></p>\n        ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.loggedIn, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<hr/>\n";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  if (stack1 = helpers.split) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.split; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.split) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<hr/>\n\n";
  stack1 = helpers['if'].call(depth0, depth0.reviews, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div data-hull-widget=\"login_button@hull\"></div>\n";
  return buffer;
  };