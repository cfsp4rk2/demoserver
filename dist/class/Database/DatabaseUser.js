import Database from './Database.js';
;
export default class DatabaseUser {
    static async get(email) {
        try {
            Database.mongoDatabase.log.database(Database.mongoDatabase.url, 'user', 'find');
            console.log(Database.mongoDatabase);
            // const users = await Database.mongoDatabase.database.collection('user')
            //     .find({ email })
            //     .project({ '_id': 0 })
            //     .toArray();
            // if (users.length < 1) return false;
            // return users[0];
        }
        catch (error) {
            return Database.mongoDatabase.log.error(`Unable to find user by email. Error:\n ${error}`);
        }
        ;
    }
    ;
    static create() {
        console.log('CREATED!');
    }
    ;
}
;
