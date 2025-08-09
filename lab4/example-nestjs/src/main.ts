import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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