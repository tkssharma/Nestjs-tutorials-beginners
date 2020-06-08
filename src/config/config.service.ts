import { Injectable } from "@nestjs/common";
import { ConfigData, ConfigDBData } from "./config.interface";
import { DEFAULT_CONFIG } from "./config.default";


@Injectable()
export class ConfigService {
    private config: ConfigData;
    constructor(data: ConfigData = DEFAULT_CONFIG) {
        this.config = data;
    }

    public loadfromDotEnv() {
        this.config = this.parseConfirFromEnv(process.env);
    }
    parseConfirFromEnv(env: NodeJS.ProcessEnv): ConfigData {
        return {
            env: env.ENV || DEFAULT_CONFIG.env,
            port: env.PORT ? parseInt(env.PORT, 10) : DEFAULT_CONFIG.port,
            db: this.parseDBConfirFromEnv(env) || DEFAULT_CONFIG.db,
            logLevel: env.LOG_LEVEL || DEFAULT_CONFIG.logLevel,
        }
    }
    parseDBConfirFromEnv(env: NodeJS.ProcessEnv): ConfigDBData {
        return {
            type: env.DB_TYPE || '',
            user: env.MYSQL_USER || '',
            pass: env.MYSQL_PASSWORD || '',
            name: env.MYSQL_DB || '',
            host: env.MYSQL_DB_HOST || '',
            port: parseInt(env.MYSQL_DB_PORT || 'NaN', 10),
            dialect: env.DB_DIALECT || '',
            charset: env.DB_CHARSET || '',
            collate: env.DB_COLLATE || '',
          }; 
    }
    public get(): Readonly<ConfigData> {
        return this.config;
    }
}