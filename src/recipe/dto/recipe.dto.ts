import { IsIn } from 'class-validator';
import { Cuisine } from '@prisma/client';

export class RecipeDto {
  displayUrl: string;
  @IsIn(Object.values(Cuisine))
  cuisine: Cuisine[];
  description: string;
  directions: string[];
  ingredients: string[];
  name: string;
  photoURL: string;
  published: boolean;
}
