import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Recipe } from '@prisma/client';
import { CreateRecipeDto } from './dto/createRecipe.dto';
import { RecipeService } from './recipe.service';
import { QueryRecipeDto } from './dto/queryRecipe.dto';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  async createRecipe(
    @Body()
    recipeData: CreateRecipeDto,
  ): Promise<Recipe> {
    return this.recipeService.createRecipe(recipeData);
  }

  @Get('/id/:id')
  getRecipeById(@Param('id') id): Promise<Recipe> {
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

  @Get('/queryRecipe')
  async queryRecipes(
    @Query()
    { cuisineQuery, recipeQueryString }: QueryRecipeDto,
  ): Promise<Recipe[]> {
    return this.recipeService.queryRecipes(cuisineQuery, recipeQueryString);
  }
}
