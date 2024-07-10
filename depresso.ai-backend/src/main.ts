import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as tf from '@tensorflow/tfjs-node';

async function bootstrap() {
  await tf.setBackend('tensorflow');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
