import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // Documentacion
  const config = new DocumentBuilder()
  .setTitle("CRUD en Nest JS")
  .setDescription("Esta es una API para poder probar los metodos REST del aplicativo.")
  .setVersion("1.0")
  .addTag('Create message', 'Creación de mensaje.')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document, {
    swaggerOptions: {
      tags: [{ name: 'Create message', description: 'Creación de mensaje.' }]
    }
  });

  await app.listen(3000);
}
bootstrap();







