import { Injectable, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Recipe, Prisma } from '@prisma/client';
import { recipeSelection } from './entities/recipe.selection';
import { ApiKeyGuard } from 'src/guards/apiKey.guard';
import { recipes } from '../../prisma/fixtures/recipe-fixture';
import { Cuisine } from '@prisma/client';
import { QueriedRecipesDto } from './dto/queryRecipes.dto';

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
    return this.prisma.recipe.findMany();
  }

  async queryRecipes(
    cuisineQuery?: Cuisine,
    recipeQueryString?: string,
    recipeQuerySkip?: number,
    // recipeQueryTake?: number,
  ): Promise<QueriedRecipesDto> {
    const count = await this.prisma.recipe.count({
      where: {
        ...(cuisineQuery
          ? {
              cuisine: {
                has: cuisineQuery,
              },
            }
          : ''),
        ...(recipeQueryString
          ? { name: { contains: recipeQueryString, mode: 'insensitive' } }
          : ''),
      },
    });
    const queryResults = await this.prisma.recipe.findMany({
      skip: Number(recipeQuerySkip) ? Number(recipeQuerySkip) : 0,
      take: 12,
      orderBy: [
        {
          id: 'asc',
        },
      ],
      where: {
        ...(cuisineQuery
          ? {
              cuisine: {
                has: cuisineQuery,
              },
            }
          : ''),
        ...(recipeQueryString
          ? { displayUrl: { contains: recipeQueryString, mode: 'insensitive' } }
          : ''),
      },
    });

    return {
      recipes: queryResults,
      count: count,
    };
  }

  async latestRecipes(): Promise<Recipe[]> {
    return this.prisma.recipe.findMany({
      take: 6,
      orderBy: {
        id: 'desc',
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
