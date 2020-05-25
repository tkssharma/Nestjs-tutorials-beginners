import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './core/interceptor/intercept';
import { SwaggerModule } from '@nestjs/swagger';
import { createdocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  SwaggerModule.setup('api', app, createdocument(app));
  await app.listen(3000);
}
bootstrap();
