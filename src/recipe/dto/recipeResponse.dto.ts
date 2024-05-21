import { Exclude } from 'class-transformer';

export class RecipeResponseDto {
  displayUrl: string;
  cuisine: string;
  description: string;
  directions: string[];
  ingredients: string[];
  name: string;
  photoURL: string;
  @Exclude()
  published: boolean;

  constructor(partial: Partial<RecipeResponseDto>) {
    Object.assign(this, partial);
  }
}
