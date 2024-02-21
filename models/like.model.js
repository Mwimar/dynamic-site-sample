const db = require('../data/database');

class Like{
    static getLikes() {
        return db.getDb().collection('Likes').find().sort({ date: -1 }).toArray();
    }

    save() {
        return db.getDb().collection('Likes').insertOne({ date: new Date() });
    }
}

module.exports = Like;