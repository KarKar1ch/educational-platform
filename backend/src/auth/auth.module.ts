import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { AtStrategy } from './common/strategy/AtStrategy.strategy';
import { RtStrategy } from './common/strategy/RtStrategy.strategy';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards/at.guard';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AuthService,JwtService,AtStrategy,RtStrategy,
    {
      provide:APP_GUARD,
      useClass: AtGuard
    }
  ],
})
export class AuthModule {}
