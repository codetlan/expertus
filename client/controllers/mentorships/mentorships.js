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
    'click .edit_mentor': function (e, tmpl) {
        var form = $('#form_mentorship');
        Session.set("current_mentorship", this);
        form.show();
    },
    'click .start_mentoring': function(){
        Sessions.insert({
            user_id: Meteor.user()._id,
            vote:{
                mentor_id: 'mentor',
                user_id: 'user'
            },
            comments: 'comments',
            online_time: new Date(),
            time: new Date(),
            finish_time: new Date(),
            cost: 100,
            total_cost: 1000
        });
    }
});

Template.mentorship_form.helpers({
    mentorship: function (argument) {
        var current_mentorship = Session.get("current_mentorship");
        return current_mentorship;
    }
});
