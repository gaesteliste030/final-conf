import {CacheInterface} from "./cache/cacheInterface";
import {InMemoryCache} from "./cache/provider/inMemoryCache";
import {ConfigResolver} from "./resolver/configResolver";
import {EnvResolver} from "./resolver/provider/envResolver";

export class Config
{
    private cacheInstance:CacheInterface;

    private configResolver:Array<ConfigResolver>;

    constructor()
    {
        // Default cache
        this.cacheInstance = new InMemoryCache();

        // Default config resolver
        this.configResolver = [];
        this.configResolver.push(new EnvResolver());
    }

    getValue<T>(key:string, defaultValue?:T):T
    {
        let value = null;

        for (let i = 0; i < this.configResolver.length; ++i)
        {
            value = this.configResolver[i].resolveKey(key, this.cacheInstance);

            if (value !== null)
            {
                return value;
            }
        }

        return value || defaultValue;
    }

    // Define helper methods for the most common data types
    getString(key:string, defaultValue?:string):string
    {
        return <string>this.getValue(key, defaultValue);
    }

    getBool(key:string, defaultValue?:boolean):boolean
    {
        let value:any = this.getValue(key, defaultValue);

        if (value !== undefined)
        {
            return value.toString().trim().toUpperCase() === "TRUE";
        }
        else
        {
            return false;
        }
    }

    getNumber(key:string, defaultValue?:number):number
    {
        let value:any = this.getValue(key, defaultValue);

        if (value)
        {
            return parseFloat(value);
        }
        else
        {
            return 0;
        }
    }

    setValue(key:string, value:any):void
    {
        this.cacheInstance.setEntry(key,
                                    function (k:string)
                                    {
                                        return value;
                                    });
    }
}