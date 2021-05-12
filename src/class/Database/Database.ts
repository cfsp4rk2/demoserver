import MongoDatabase from '../../lib/MongoDatabase/MongoDatabase.js';
import Token from './Token.js';
import User from './User.js';

interface DatabaseConfiguration {
    'mongoDatabase' : MongoDatabase;
};

export default class Database {
    public static mongoDatabase : MongoDatabase;

    public static User = User;
    public static Token = Token;

    private static readonly _COLLECTION_LOOKUP = ['user', 'token'];

    public static initialise(configuration : DatabaseConfiguration) {
        Database.mongoDatabase = configuration.mongoDatabase;
    };

    public static async reset() {
        Database.mongoDatabase.log.trace('Resetting database.');

        Database._COLLECTION_LOOKUP.forEach(async collection => {
            try {
                Database.mongoDatabase.log.database(Database.mongoDatabase.url, collection, 'drop');

                await Database.mongoDatabase.database.collection(collection).drop();
    
            } catch(_) {
    
                Database.mongoDatabase.log.warn(`Database collection '${collection}' does not exist.`);
            }
        });

        Database.mongoDatabase.log.trace('Finished resetting database.');
    };
};