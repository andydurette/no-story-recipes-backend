import { IsIn } from 'class-validator';

export enum cuisineEnum {
  asian = 'asian',
  mexican = 'mexican',
  american = 'american',
}

export class CreateRecipeDto {
  @IsIn(Object.values(cuisineEnum))
  displayUrl: string;
  cuisine: cuisineEnum;
  description: string;
  directions: string[];
  ingredients: string[];
  name: string;
  photoURL: string;
  published: boolean;
}
