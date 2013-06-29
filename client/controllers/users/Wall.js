
Template.user_wall.helpers({
    comments: function () {
        var user = Wall.find();
        return user;
    }
});


Template.comments_list.comments = function () { //traemos la lista de los frameworks
    var wall, comments;
    if(Meteor.user()){
        wall = Walls.findOne({ user_id :Meteor.user()._id });
        comments = wall && wall.comments;
    }
    return comments;
};

//logica para agregar los Frameworks
  Template.add_comment.events({
    'click button' : function (e) {//cuando le damos click al boton
      var value = $('#comment-text').val(),
        comment = {
            text:value,
            likes:0,
            created_at:new Date()
        },wall;
        e.preventDefault();
      if(value){
        wall = Walls.findOne({ user_id :Meteor.user()._id });
        if(!wall){
            console.log("no existe");
            Walls.insert({ user_id :Meteor.user()._id, comments : [comment]});
        }else{
            console.log("ya existe");
            Walls.update( { _id :wall._id }, {'$push': {'comments': comment} } );
        }
      }
    }
  });