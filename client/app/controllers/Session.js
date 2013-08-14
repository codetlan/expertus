/**
 * Created with JetBrains PhpStorm.
 * User: lumartin
 * Date: 28/06/13
 * Time: 15:41
 * To change this template use File | Settings | File Templates.
 */
Template.landing_page.events({
    "click .start-img": function (e, tmpl) {
        Meteor.loginWithGoogle(
            null,
            function (err) {
                if (err) {
                    throw err;
                } else {
                    window.location.href = "/home";
                }
            });
    }
});

Template.user_loggedIn.events({
    "click #logout": function (e, tmpl) {
        Meteor.logout(
            function (err) {
                if (err) {
                    throw err;
                } else {
                    window.location.href = "/";
                }
            })
    }
});