import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLoggerService } from './utils/my-logger/my-logger.service';
import { ConfigService } from 'nestjs-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const configService = app.get(ConfigService);
  // const appConfig = configService.get('app');
  // const PORT = appConfig.port;
  await app.listen(3000, () => {
    const loggerService = app.get(MyLoggerService);
    loggerService.log(`server listen on ${3000}`, 'bootstrap');
  });
}
bootstrap();
