import { Exclude } from 'class-transformer';

export class DirectionsAndIngredientListDto {
  for: string;
  ingredientList: string[];
  directionList: string[];
}

export class RecipeResponseDto {
  displayUrl: string;
  cuisine: string;
  description: string;
  directionsAndIngredients: DirectionsAndIngredientListDto;
  name: string;
  photoURL: string;
  @Exclude()
  published: boolean;

  constructor(partial: Partial<RecipeResponseDto>) {
    Object.assign(this, partial);
  }
}
