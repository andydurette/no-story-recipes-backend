import { IsIn } from 'class-validator';

export enum cuisineEnum {
  japanese = 'japanese',
  french = 'french',
  asian = 'asian',
  mexican = 'mexican',
  american = 'american',
}

export class RecipeDto {
  displayUrl: string;
  @IsIn(Object.values(cuisineEnum))
  cuisine: string;
  description: string;
  directions: string[];
  ingredients: string[];
  name: string;
  photoURL: string;
  published: boolean;
}
