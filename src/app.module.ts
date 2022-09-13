import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/library'),
    BookModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
