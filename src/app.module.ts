import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    StudentModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
