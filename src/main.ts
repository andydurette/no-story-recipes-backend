/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      credentials: true,
      origin: true,
      allowedHeaders: ['X-ReCaptcha-Token'],
    },
  });
  app.useGlobalPipes(
    new ValidationPipe(),
  );
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
