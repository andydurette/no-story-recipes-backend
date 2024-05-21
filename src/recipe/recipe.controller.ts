import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
} from '@nestjs/common';
import { Recipe } from '@prisma/client';
import { RecipeService } from './recipe.service';
import { QueryRecipesDto } from './dto/queryRecipes.dto';
import { RecipeDto } from './dto/recipe.dto';

@SerializeOptions({
  excludePrefixes: ['published'],
})
@Controller('recipe')
@UseInterceptors(ClassSerializerInterceptor)
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  async createRecipe(
    @Body()
    recipeData: RecipeDto,
  ): Promise<Recipe> {
    return this.recipeService.createRecipe(recipeData);
  }

  @Get('/id/:id')
  async getRecipeById(@Param('id') id): Promise<Recipe> {
    return this.recipeService.getRecipeById(Number(id));
  }

  @Get('/displayUrl/:displayUrl')
  getRecipeByDisplayUrl(@Param('displayUrl') displayUrl): Promise<Recipe> {
    return this.recipeService.getRecipeByDisplayUrl(displayUrl);
  }

  @Get()
  getRecipes(): Promise<Recipe[]> {
    return this.recipeService.getRecipes();
  }

  @Get('/queryRecipes')
  async queryRecipes(
    @Query()
    { cuisineQuery, recipeQueryString }: QueryRecipesDto,
  ): Promise<Recipe[]> {
    return this.recipeService.queryRecipes(cuisineQuery, recipeQueryString);
  }

  @Get('/latestRecipes')
  async latestRecipes(): Promise<Recipe[]> {
    return this.recipeService.latestRecipes();
  }
}
