import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3333;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.set('trust proxy', 1);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder().setTitle('Women Devs').setDescription('API de controle de Women Devs').setVersion('1.1').addServer('http://localhost:3333').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors();

  await app.listen(PORT, ()=> console.log(`Rodando em ${PORT}`));
}
bootstrap();



