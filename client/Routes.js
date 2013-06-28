Meteor.Router.add({
  '/':'landing_page',
  '/users/edit/:id': function(id) {
    console.log('we are at ' + this.canonicalPath);
    console.log("our parameters: " + this.params);
    return 'edit_user';
  },
  '/users/profile/:id': function() {
  	return 'profile';
  },

  '*': 'not_found'
});
