interface HostConfiguration {

};

interface Dictionary<TValue> { [id : string]: TValue; };

export default class Host {
    private _ipAddress : string;
    private _hostname : string;
    private _deviceType : string;
    private _portsTcp : Dictionary<any> = { };
    private _portsUdp : Dictionary<any> = { };

    private static readonly _DEVICE_TYPE_LOOKUP = ['multipurpose'];

    public constructor(configuration : HostConfiguration) {

    };
};