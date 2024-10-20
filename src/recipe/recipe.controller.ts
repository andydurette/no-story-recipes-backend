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
import { RecipeDto } from './dto/recipe.dto';
import { QueriedRecipesDto, QueryRecipesDto } from './dto/queryRecipes.dto';
@SerializeOptions({
  excludePrefixes: ['published'],
})
@Controller('recipes')
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
    {
      cuisineQuery,
      recipeQueryString,
      recipeQuerySkip, // recipeQueryTake,
    }: QueryRecipesDto,
  ): Promise<QueriedRecipesDto> {
    return this.recipeService.queryRecipes(
      cuisineQuery,
      recipeQueryString,
      recipeQuerySkip,
      // recipeQueryTake,
    );
  }

  @Get('/latestRecipes')
  async latestRecipes(): Promise<Recipe[]> {
    return this.recipeService.latestRecipes();
  }
}
