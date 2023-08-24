import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'body-parser';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';

async function bootstrap() {
  const cors = require('cors');
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('zuret tourism example')
    .setDescription('a list of zuret tourism api')
    .setVersion('1.0')
    .addTag('tourism app')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cors({ origin: 'http://localhost:3000' }));
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));

  await app.listen(3000);
}
bootstrap();
