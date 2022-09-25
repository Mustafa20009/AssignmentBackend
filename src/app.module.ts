import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './Product/Product.module';

@Module({
  imports: [
   ProductModule,
   MongooseModule.forRoot("mongodb+srv://mustafa:12345@cluster0.mkepy.mongodb.net/assign?retryWrites=true&w=majority")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
