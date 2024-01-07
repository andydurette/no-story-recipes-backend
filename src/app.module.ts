import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeService } from './recipe/recipe.service';
import { PrismaService } from './prisma.service';
import { RecipeModule } from './recipe/recipe.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [RecipeModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, RecipeService, PrismaService],
})
export class AppModule {}
