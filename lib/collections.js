Hackers = new Mongo.Collection('hackers');

if (Meteor.isServer) {
    Meteor.publish('allHackers', function () {
        return Hackers.find();
    });
}
