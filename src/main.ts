import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 4458;
  // console.log(process.env.POSTGRES_HOST);
  // console.log(process.env.POSTGRES_PORT);
  // console.log(process.env.POSTGRES_USERNAME);
  // console.log(process.env.POSTGRES_PASSWORD);
  // console.log(process.env.POSTGRES_NAME);
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS CRUD API')
    .setDescription('Documentation for the NestJS CRUD API')
    .setVersion('1.0.0')
    .addTag('CRUD')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

start();
