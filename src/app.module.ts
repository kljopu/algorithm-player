import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLoggerModule } from './utils/my-logger/my-logger.module';
import { ConfigModule } from 'nestjs-config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.resolveRootPath(__dirname).load('./config/*.config.{ts,js}', {
      modifyConfigName: (name) => name.replace('.config', ''),
      path:
        process.env.NODE_ENV === 'dev' ? path.join(__dirname, '../.env') : null,
    }),
    MyLoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
