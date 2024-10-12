import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitignoreModule } from '.gitignore/.gitignore.module';

@Module({
  imports: [GitignoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
