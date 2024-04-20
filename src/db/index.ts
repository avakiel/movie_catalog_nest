import { Client } from 'pg';
import { Sequelize } from 'sequelize-typescript';
import { TextEncoder } from 'util';
import { config } from './config';
import { Movie } from './entity/movie.entity';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv")

dotenv.config();

// Create a new PostgreSQL client using the provided config
const client = new Client(config);

// Connect to the PostgreSQL server
client.connect((err) => {
    if (err) {
        console.error('Error connecting to PostgreSQL database:', err);
    } else {
        console.log('Connected to PostgreSQL database');
        // Perform any additional operations here after connecting
    }
});

// Optionally, add an error handler for the PostgreSQL client
client.on('error', (err) => {
    console.error('Error with PostgreSQL client:', err);
});

// Export the PostgreSQL client for external usage
export { client };

// Set the global TextEncoder to the util version
global.TextEncoder = TextEncoder;

// Initialize Sequelize with the provided configuration
// const sequelize = new Sequelize({
//     dialect: 'postgres',
//     host: config.host,
//     port: config.port,
//     database: config.database,
//     username: config.user,
//     password: config.password,
//     dialectOptions: {
//       ssl: config.ssl
//     }
//   });

  export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: 'postgres',
          host:  config.host,
          port: config.port,
          username: config.user,
          password: config.password,
          database: config.database,
          dialectOptions: {
            ssl: config.ssl
          }
        });
        sequelize.addModels([Movie]);
        await sequelize.sync();
        return sequelize;
      },
    },
  ];