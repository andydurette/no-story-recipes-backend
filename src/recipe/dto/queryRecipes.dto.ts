import { IsOptional } from 'class-validator';
import { cuisineEnum } from './recipe.dto';

export class QueryRecipesDto {
  @IsOptional()
  cuisineQuery: cuisineEnum;
  @IsOptional()
  recipeQueryString: string;
}
