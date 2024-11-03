<script lang="ts">
    import type { Step } from "$lib/types/recipe";

    interface Props {
        steps: Step[];
    }

    let { steps }: Props = $props();
</script>

<h3 class="font-bold h3">Planen</h3>

<div class="flex flex-col gap-4 p-4 card variant-filled-tertiary">
    {#each steps as i}
        <div>
            <label class="flex items-center gap-4">
                <input class="checkbox variant-filled-surface" type="checkbox"/>
                <span class="font-bold">{i.title}</span>
            </label>
            <div class="ml-9">{i.desc}</div>
        </div>
    {/each}
</div>
