export function ormConfig(): any {
    return {
      type: process.env.DATABASE_TYPE,
      url: process.env.MONGODB_URI,
      useNewUrlParser: true,    
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
      useUnifiedTopology: true,
      extra: {
        connectionLimit: parseInt(process.env.DATABASE_CONNECTION_LIMIT as string),
      },
      entities: [
        'dist/**/entity/*.entity.js',
      ],
      migrations: [
        'dist/database/migrations/*.js',
      ],
      subscribers: [
        'dist/observers/subscribers/*.subscriber.js',
      ],
      cli: {
        entitiesDir: 'src/components/**/entity',
        migrationsDir: 'src/database/migrations',
        subscribersDir: 'src/observers/subscribers',
      },
    };
  }