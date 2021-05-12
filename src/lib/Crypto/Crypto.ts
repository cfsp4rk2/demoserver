import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

interface Dictionary<TValue> { [id : string]: TValue; };

export default class Crypto {
    public static getHash(
        content : string,
        saltOrRounds : string | number = 10
    ) : Promise<boolean | string> {
        return new Promise((resolve, reject) => {
            bcrypt.hash(content, 10, (error, hash) => {
                if (error) return resolve(false);
                
                return resolve(hash);
            });
        });
    };

    public static compareHash(content : string, hash : string) : Promise<boolean | string> {
        return new Promise((resolve, reject) => {
            bcrypt.compare(content, hash, (error, result) => {
                if (error) return resolve(false);

                return resolve(result);
            });
        });
    };

    public static jwtSign(
        payload : Dictionary<string | number>,
        secret : string,
        expiresIn = '1800s'
    ) : string {
        return jwt.sign(payload, secret, { expiresIn });
    };

    public static jwtDecode(
        accessToken : string,
        secret : string
    ) : boolean | Dictionary<string> | string {
        try {
            return jwt.verify(accessToken, secret) as string | Dictionary<string>;

        } catch(error) {
            return false;
        }
    }
};