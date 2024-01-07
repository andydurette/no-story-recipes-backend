import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeService } from './recipe/recipe.service';
import { PrismaService } from './prisma.service';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [RecipeModule],
  controllers: [AppController],
  providers: [AppService, RecipeService, PrismaService],
})
export class AppModule {}
