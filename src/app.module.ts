import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import mongoConfig from '../mongo.config';
import { ValidationPipe } from './common/validation/pipes/validation.pipe';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGO_URI || mongoConfig.uri,
      }),
    }),
    ProdutosModule,
  ],
})
export class AppModule {
  static configureApp(app: NestFastifyApplication): void {
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle('EnaFood API')
      .setDescription('API do EnaFood')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}