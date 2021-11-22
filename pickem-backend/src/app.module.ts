import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './schedule/event.module';

@Module({
  imports: [
    EventModule,
    MongooseModule.forRoot('mongodb+srv://admin:allanIsALoser42@cluster0.g9xn7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
