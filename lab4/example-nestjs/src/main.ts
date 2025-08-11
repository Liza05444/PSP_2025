import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(resolve(__dirname, '..', 'public'));
  app.useStaticAssets(resolve(__dirname, '..', 'node_modules'), { prefix: '/node_modules' });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Удаляет поля, не описанные в DTO
      forbidNonWhitelisted: true, // Возвращает ошибку при наличии лишних полей
      disableErrorMessages: false, // Показывать сообщения об ошибках
    })
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
