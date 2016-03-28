import { CacheInterface } from "../cache/cacheInterface";
export interface ConfigResolver {
    resolveKey(key: string, cache: CacheInterface): string;
}
