import Database from './Database.js';
export default class Token {
    static async get(value) {
        try {
            Database.mongoDatabase.log.database(Database.mongoDatabase.url, 'token', 'find');
            let tokens = await Database.mongoDatabase.database.collection('token')
                .find({ value })
                .toArray();
            if (tokens.length < 1)
                return false;
            return tokens[0];
        }
        catch (error) {
            return Database.mongoDatabase.log.error(`Unable to find token. Error:\n ${error}`);
        }
        ;
    }
    ;
    static async insert(value) {
        try {
            Database.mongoDatabase.log.database(Database.mongoDatabase.url, 'token', 'insertOne');
            await Database.mongoDatabase.database.collection('token').insertOne({ value });
            return true;
        }
        catch (error) {
            return Database.mongoDatabase.log.error(`Unable to insert token. Error:\n ${error}`);
        }
    }
    ;
    static async delete(value) {
        try {
            Database.mongoDatabase.log.database(Database.mongoDatabase.url, 'token', 'deleteOne');
            await Database.mongoDatabase.database.collection('token').deleteOne({ value });
            return true;
        }
        catch (error) {
            return Database.mongoDatabase.log.error(`Unable to delete token. Error:\n ${error}`);
        }
    }
    ;
}
;
