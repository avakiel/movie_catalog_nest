// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv")



import { Module } from '@nestjs/common';
import { MovieModule } from './movies/movie.module';
import { FutureModule } from './future/future.module';
import { WatchedModule } from './watched/watched.module';
import { FavouriteModule } from './favourite/favourite.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

dotenv.config();

@Module({
  imports: 
  [
    MovieModule,
    FutureModule,
    WatchedModule,
    FavouriteModule,
    MongooseModule.forRoot(process.env.DB_MONGO_URI),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
