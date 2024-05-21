import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeService } from './recipe/recipe.service';
import { PrismaService } from './prisma.service';
import { RecipeModule } from './recipe/recipe.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    RecipeModule,
    // Protect again abusive usecase against server
    ThrottlerModule.forRoot([
      {
        ttl: 1000,
        limit: 100,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, RecipeService, PrismaService],
})
export class AppModule {}
