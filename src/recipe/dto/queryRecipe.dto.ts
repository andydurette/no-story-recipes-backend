import { IsOptional } from 'class-validator';
import { cuisineEnum } from './createRecipe.dto';

export class QueryRecipeDto {
  @IsOptional()
  cuisineQuery: cuisineEnum;
  @IsOptional()
  recipeQueryString: string;
}
