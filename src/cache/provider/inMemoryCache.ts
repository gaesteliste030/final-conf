import {CacheInterface} from "./../cacheInterface";

export class InMemoryCache implements CacheInterface
{
    private storage:Array<any>;

    constructor()
    {
        this.storage = [];
    }

    getOrSetEntry(key:string, valueSetter:(key:string)=>any):string
    {
        if (this.storage[key] != undefined)
        {
            return this.storage[key];
        }
        else
        {
            let value = valueSetter(key);

            if (value !== null)
            {
                this.storage[key] = value;
            }

            return value;
        }
    }

    setEntry(key:string, valueSetter:(key:string)=>any):void
    {
        let value = valueSetter(key);
        this.storage[key] = value;
    }
}