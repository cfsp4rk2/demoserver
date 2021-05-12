import mongodb from 'mongodb';
import Log from '../Log/Log.js';

interface MongoDatabaseConfiguration {
    'log' : Log;
    'hostname' : string;
    'protocol' : string;
    'port' : number;
    'options' : any;
    'name' : string;
};

export default class MongoDatabase {
    public url : string;
    public database : mongodb.Db; 

    public log : Log;

    private _hostname : string;
    private _protocol : string;
    private _port : number;
    private _options : any;
    private _name : string;
    private _client : any

    public constructor(configuration : MongoDatabaseConfiguration) {
        this.log = configuration.log;

        this._hostname = configuration.hostname;
        this._protocol = configuration.protocol;
        this._port = configuration.port;
        this._options = configuration.options;
        this._name = configuration.name;

        this.url = `${this._protocol}://${this._hostname}:${this._port}`;
    }

    public async initialise() : Promise<MongoDatabase> {
        try {
            this._client = await mongodb.MongoClient.connect(this.url, this._options);

            this.database = this._client.db(this._name);

            this.log.trace('MongoDatabase initialised.');

        } catch(error) {
            this.log.fatal(`Unable to intitialise connection to the database.\n${error}`);
        }

        return this;
    };
};