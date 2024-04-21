import { Injectable, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Recipe, Prisma } from '@prisma/client';
import { recipeSelection } from './entities/recipe.selection';
import { cuisineEnum } from './dto/createRecipe.dto';
import { ApiKeyGuard } from 'src/guards/apiKey.guard';
import { recipes } from '../../prisma/fixtures/recipe-fixture';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}

  async recipes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RecipeWhereUniqueInput;
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithRelationInput;
  }): Promise<Recipe[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.recipe.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async getRecipes(): Promise<Recipe[]> {
    return this.prisma.recipe.findMany({ take: 10 });
  }

  async queryRecipes(
    cuisineQuery: cuisineEnum | undefined,
    recipeQueryString: string | undefined,
  ): Promise<Recipe[]> {
    return this.prisma.recipe.findMany({
      take: 10,
      where: {
        ...(cuisineQuery
          ? {
              cuisine: {
                equals: cuisineQuery,
                mode: 'insensitive',
              },
            }
          : ''),
        ...(recipeQueryString
          ? { name: { contains: recipeQueryString, mode: 'insensitive' } }
          : ''),
      },
    });
  }

  async getRecipeById(id: number): Promise<Recipe | null> {
    return this.prisma.recipe.findUnique({
      where: {
        id,
      },
      select: recipeSelection,
    });
  }

  async getRecipeByDisplayUrl(displayUrl: string): Promise<Recipe | null> {
    return this.prisma.recipe.findUnique({
      where: {
        displayUrl,
      },
      select: recipeSelection,
    });
  }

  async createRecipe(data: Prisma.RecipeCreateInput): Promise<Recipe> {
    return this.prisma.recipe.create({
      data,
    });
  }

  async updateRecipe(params: {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.RecipeUpdateInput;
  }): Promise<Recipe> {
    const { where, data } = params;
    return this.prisma.recipe.update({
      data,
      where,
    });
  }

  async deleteRecipe(where: Prisma.RecipeWhereUniqueInput): Promise<Recipe> {
    return this.prisma.recipe.delete({
      where,
    });
  }

  @UseGuards(ApiKeyGuard)
  async resetRecipes() {
    return JSON.stringify(recipes);
  }
}
