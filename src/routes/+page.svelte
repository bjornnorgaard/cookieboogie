<script lang="ts">
    import Head from "$lib/components/Head.svelte";

    let { data } = $props();
</script>

<Head/>

<h1 class="text-4xl font-bold">Seneste opskrifter</h1>

<div class="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
    {#each data.recipes as r}
        <a href={r.slug} class="overflow-clip shadow variant-filled-surface card group">
            <img class="m-0 object-cover duration-500 group-hover:scale-105" title={r.title} loading="eager" src={`${r.image}/700/300`} alt={r.title} height="300" width="700"/>
            <div class="p-4">
                <p class="text-xl font-bold">{r.title}</p>
                <p class="-">{r.shortDesc}</p>
            </div>
        </a>
    {/each}
</div>
