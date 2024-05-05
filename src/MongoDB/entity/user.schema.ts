import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserRole = 'admin' | 'user';

@Schema()
export class User extends Document {
    @Prop({ required: true })
    username: string;
  
    @Prop({ required: true })
    password: string;
  
    @Prop({ default: 'user' })
    role: UserRole;
  
    @Prop({ type: [Number], default: [] })
    activeTopics: number[];
  
    @Prop({ type: [Number], default: [] })
    favouriteMovies: number[];
  
    @Prop({ type: [Number], default: [] })
    watchedMovies: number[];
  
    @Prop({ type: [Number], default: [] })
    futureMovies: number[];
}

export const UserSchema = SchemaFactory.createForClass(User);