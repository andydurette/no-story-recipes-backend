import { IsOptional } from 'class-validator';
import { Cuisine, Recipe } from '@prisma/client';

export class QueryRecipesDto {
  @IsOptional()
  cuisineQuery: Cuisine;
  @IsOptional()
  recipeQueryString: string;
  @IsOptional()
  recipeQuerySkip: number;
  // @IsOptional()
  // recipeQueryTake: number;
}

export class QueriedRecipesDto {
  recipes: Recipe[];
  count: number;
}
