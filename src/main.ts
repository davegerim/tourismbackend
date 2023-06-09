import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const cors = require('cors');
  const app = await NestFactory.create(AppModule);
  app.use(
    cors({
      orgin: 'http://localhost:3000',
    }),
  );
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));
  await app.listen(3000);
}
bootstrap();
