import {ConfigResolver} from "../configResolver";
import {CacheInterface} from "../../cache/cacheInterface";

export class EnvResolver implements ConfigResolver
{
    constructor()
    {
        const dotenv = require("dotenv").config({silent: true});
    }

    resolveKey(key:string, cache:CacheInterface):string
    {
        return cache.getOrSetEntry(key,
                                   function (key:string)
                                   {
                                       return process.env[key] || null;
                                   });
    }
}