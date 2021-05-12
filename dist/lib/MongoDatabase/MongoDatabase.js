import mongodb from 'mongodb';
;
export default class MongoDatabase {
    constructor(configuration) {
        this.log = configuration.log;
        this._hostname = configuration.hostname;
        this._protocol = configuration.protocol;
        this._port = configuration.port;
        this._options = configuration.options;
        this._name = configuration.name;
        this.url = `${this._protocol}://${this._hostname}:${this._port}`;
    }
    async initialise() {
        try {
            this._client = await mongodb.MongoClient.connect(this.url, this._options);
            this.database = this._client.db(this._name);
            this.log.trace('MongoDatabase initialised.');
        }
        catch (error) {
            this.log.fatal(`Unable to intitialise connection to the database.\n${error}`);
        }
        return this;
    }
    ;
}
;
