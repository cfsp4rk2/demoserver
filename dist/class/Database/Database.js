import Token from './Token.js';
import User from './User.js';
;
export default class Database {
    static initialise(configuration) {
        Database.mongoDatabase = configuration.mongoDatabase;
    }
    ;
    static async reset() {
        Database.mongoDatabase.log.trace('Resetting database.');
        Database._COLLECTION_LOOKUP.forEach(async (collection) => {
            try {
                Database.mongoDatabase.log.database(Database.mongoDatabase.url, collection, 'drop');
                await Database.mongoDatabase.database.collection(collection).drop();
            }
            catch (_) {
                Database.mongoDatabase.log.warn(`Database collection '${collection}' does not exist.`);
            }
        });
        Database.mongoDatabase.log.trace('Finished resetting database.');
    }
    ;
}
Database.User = User;
Database.Token = Token;
Database._COLLECTION_LOOKUP = ['user', 'token'];
;
