// Mentorships

var Mentorships = new Meteor.Collection("mentorships");

// List Mentorships
Template.mentorship_list.mentorships = function () {
    return Mentorships.find();
};

// Create Mentorship
Template.mentorship_form.events({
    'click #show_form': function (e, tmpl) {
        e.preventDefault();
        $('#form_mentorship').show();
    },
    'click #submit_mentorship': function (e, tmpl) {
        e.preventDefault();
        var obj = utils.getFormValues('form_mentorship'),
            form = $('#form_mentorship');
        if (obj.id == '') {
            Mentorships.insert({
               name: obj.name,
               description: obj.description,
               category: obj.category
            });
        } else {
            Mentorships.update({
                _id: obj.id
            }, {
                $set: {
                    name: obj.name,
                    description: obj.description,
                    category: obj.category
                }
            });
        }
        form[0].reset();
        form.hide();
    },
    'click #cancel_mentorship': function (e, tmpl) {
        e.preventDefault();
        var form = $('#form_mentorship');
        form[0].reset();
        form.hide();
    }
});

//Edit Mentorship
Template.mentorship_list.events({
    'click #edit_mentorship': function (e, tmpl) {
        var form = $('#form_mentorship');
        Session.set("current_mentorship", this);
        form.show();
    }
});

Template.mentorship_form.helpers({
    mentorship: function (argument) {
        var current_mentorship = Session.get("current_mentorship")
        return current_mentorship;
    }
});
