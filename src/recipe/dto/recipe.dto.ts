import { IsIn } from 'class-validator';
import { Cuisine } from '@prisma/client';

export class DirectionsAndIngredientListDto {
  for: string;
  ingredientList: string[];
  directionList: string[];
}

export class RecipeDto {
  displayUrl: string;
  @IsIn(Object.values(Cuisine))
  cuisine: Cuisine[];
  description: string;
  directionsAndIngredients: DirectionsAndIngredientListDto;
  name: string;
  photoURL: string;
  published: boolean;
}
