import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app/app.module';
import { AuthGuard } from './system/authentication/guards/auth.guard';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  //app.useGlobalGuards(new AuthGuard)
  useContainer(app.select(AppModule), {fallbackOnErrors: true})
  await app.listen(3000);
})();