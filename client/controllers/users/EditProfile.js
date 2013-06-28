/**
 * Created with JetBrains PhpStorm.
 * User: lumartin
 * Date: 28/06/13
 * Time: 15:39
 * To change this template use File | Settings | File Templates.
 */
Template.edit_user.helpers({
    user: function () {
        var user = Meteor.user();
        return user;
    }
});

Template.edit_user.events({
    "click #btn_cancel_edit_profile": function (e, tmpl) {
        e.preventDefault();
        $('#form_edit_profile').hide();
    },
    "click #btn_save_edit_profile": function (e, tmpl) {
        e.preventDefault();
        var obj = utils.getFormValues('form_edit_profile'),
            userProf = Meteor.user().profile;

        userProf.given_name = obj.given_name;
        userProf.family_name = obj.family_name;
        userProf.name = obj.given_name + ' ' + obj.family_name;
        userProf.title = obj.title;
        userProf.bio = obj.bio;

        Meteor.users.update({_id: Meteor.user()._id}, {
            $set: {
                profile: userProf
            }
        });

    }
});