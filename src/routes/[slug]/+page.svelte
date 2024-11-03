<script lang="ts">
    import Head from "$lib/components/Head.svelte";
    import ShoppingList from "./ShoppingList.svelte";
    import CookingProcedure from "./CookingProcedure.svelte";
    import RecipeHeader from "./RecipeHeader.svelte";

    let { data } = $props();
</script>

<Head recipe={data.recipe}/>

<div class="flex flex-col gap-4">

    <RecipeHeader title={data.recipe.title} image={data.recipe.image} desc={data.recipe.longDesc}/>

    <br>

    <ShoppingList ingredients={data.recipe.ingredients}/>

    <br>

    <CookingProcedure steps={data.recipe.steps}/>
</div>
