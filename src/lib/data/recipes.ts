import type { Recipe } from "$lib/types/recipe";
import { brod } from "$lib/recipes/brod";
import { lasagne } from "$lib/recipes/lasagne";
import { risotto } from "$lib/recipes/risotto";
import { rasmusKlumpPandekager } from "$lib/recipes/rasmus-klump-pandekager";
import { svinemorbrad } from "$lib/recipes/spansk-svinemorbrad";
import { tomatsalat } from "$lib/recipes/tomatsalat";
import { sorensPastaret } from "$lib/recipes/sorens-pastaret";
import { ristaffel } from "$lib/recipes/ristaffel";

// Recipes will appear in the listed order.
export const recipes: Recipe[] = [
    ristaffel,
    // boller,
    // frittata,
    risotto,
    lasagne,
    sorensPastaret,
    brod,
    tomatsalat,
    svinemorbrad,
    rasmusKlumpPandekager,
];
