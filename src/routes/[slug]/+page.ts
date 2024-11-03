import type { Recipe } from "$lib/types/recipe";
import { recipes } from "$lib/data/recipes";
import { error } from "@sveltejs/kit";

export function load({params}) {
    const maybeRecipe: Recipe | undefined = recipes.find((recipe) => recipe.slug === params.slug);
    if (!maybeRecipe) {
        error(404, "Recipe not found");
    }

    const recipe: Recipe = maybeRecipe as Recipe;

    return {
        recipe: recipe,
    }
}
