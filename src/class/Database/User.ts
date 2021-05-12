import Database from './Database.js';

import { UserObject } from '../User/User.js';

export default class User {
    private static readonly _DEFAULT_USER = {
        'email': '',
        'emailTemp': '',
        'role': 1,
        'password': '',
        'timestamp': 0,
        'codeEmail': {
            'code': '',
            'iat': 0,
        },
        'codePassword': {
            'code': '',
            'iat': 0,
        },
    };

    public static async get(
        key : string,
        value : string,
    ) : Promise<boolean | UserObject> {
        try {
            Database.mongoDatabase.log.database(Database.mongoDatabase.url, 'user', 'find');

            let users = await Database.mongoDatabase.database.collection('user')
                .find({ [key]: value })
                .project({ '_id': 0 })
                .toArray();

            if (users.length < 1) return false;

            return users[0];

        } catch(error) {
            return Database.mongoDatabase.log.error(`Unable to find user by email. Error:\n ${error}`);
        };
    };

    public static async set(
        key : string,
        value : string,
        details : UserObject,
    ) : Promise<boolean> {
        try {
            Database.mongoDatabase.log.database(Database.mongoDatabase.url, 'user', 'updateOne');

            await Database.mongoDatabase.database.collection('user')
                .updateOne({ [key]: value }, { '$set': details });

            return true;
        
        } catch(error) {
            return Database.mongoDatabase.log.error(`Unable to set user. Error:\n ${error}`);
        }
    };

    public static async insert(
        details : UserObject
    ) : Promise<boolean> { 
        try {
            Database.mongoDatabase.log.database(Database.mongoDatabase.url, 'user', 'insertOne');

            details['timestamp'] = new Date().getTime();

            const user = Object.assign({ ...User._DEFAULT_USER }, details);

            await Database.mongoDatabase.database.collection('user').insertOne(user);

            return true;

        } catch(error) {
            return Database.mongoDatabase.log.error(`Unable to insert user. Error:\n ${error}`);
        }
    };

    public static async delete(
        key : string,
        value : string,
    ) : Promise<boolean> {
        try {
            if (key === 'emailTemp') {
                Database.mongoDatabase.log.database(Database.mongoDatabase.url, 'user', 'deleteMany');

                await Database.mongoDatabase.database.collection('user').deleteMany({ [key]: value });

                return true;
            }

            Database.mongoDatabase.log.database(Database.mongoDatabase.url, 'user', 'deleteOne');

            await Database.mongoDatabase.database.collection('user').deleteOne({ [key]: value });

            return true;

        } catch(error) {
            return Database.mongoDatabase.log.error(`Unable to delete user. Error:\n ${error}`);
        }
    };
};