import { CacheInterface } from "./../cacheInterface";
export declare class InMemoryCache implements CacheInterface {
    private storage;
    constructor();
    getOrSetEntry(key: string, valueSetter: (key: string) => any): string;
    setEntry(key: string, valueSetter: (key: string) => any): void;
}
