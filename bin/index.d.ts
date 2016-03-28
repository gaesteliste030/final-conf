export declare class Config {
    private cacheInstance;
    private configResolver;
    constructor();
    getValue<T>(key: string, defaultValue?: T): T;
    getString(key: string, defaultValue?: string): string;
    getBool(key: string, defaultValue?: boolean): boolean;
    getNumber(key: string, defaultValue?: number): number;
    setValue(key: string, value: any): void;
}
declare const singleton: Config;
export default singleton;
