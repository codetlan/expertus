Walls = new Meteor.Collection("walls");

Meteor.methods({
  wall: function(user){
    var u = Meteor.user();
    if (!user ){
      throw new Meteor.Error('You need to login to post.');
	}
    return Walls.find(
        function() {
            return (this.user_id == user._id);
        }, {sort: {created_at: -1}}
    );
  }
});