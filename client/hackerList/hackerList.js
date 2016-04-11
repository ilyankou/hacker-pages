Template.hackerList.helpers({
    Hackers: function() {
        Meteor.subscribe('allHackers');
        return Hackers.find();
    }
});
