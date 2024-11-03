<script lang="ts">
    import type { Ingredient } from "$lib/types/recipe";

    interface Props {
        ingredients: Ingredient[];
    }

    let { ingredients }: Props = $props();
</script>

<h3 class="font-bold tracking-wide h3">Indkøbslisten</h3>

<div class="mt-2 columns-2 p-4 card shadow-2xl variant-filled-secondary">
    {#each ingredients as i}
        <label class="flex items-center gap-4 p-2">
            <input class="checkbox variant-filled-surface" type="checkbox"/>
            <span class="font-bold">{i.name},</span>
            <span>{i.amount}</span>
        </label>
    {/each}
</div>
