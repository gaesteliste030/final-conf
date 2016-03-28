import { ConfigResolver } from "../configResolver";
import { CacheInterface } from "../../cache/cacheInterface";
export declare class EnvResolver implements ConfigResolver {
    constructor();
    resolveKey(key: string, cache: CacheInterface): string;
}
