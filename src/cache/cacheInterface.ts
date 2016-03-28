export interface CacheInterface
{
    getOrSetEntry(key:string, valueSetter:(key:string) => any):string;

    setEntry(key:string, valueSetter:(key:string) => any):void;
}