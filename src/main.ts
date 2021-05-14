import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Nest.js는 기본적으로 express 프레임워크 위에서 동작하며, Fastify위에서 동작하도록 전환할 수도 있다.(Fastify가 2배 빠름)
//express의 req, res 등을 사용한다면 나중에 fastify 전환을 할 수 없으니까 비추함
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  )
  await app.listen(3000);
}
bootstrap();
