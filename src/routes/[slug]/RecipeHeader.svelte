<script lang="ts">

    interface Props {
        title: string;
        image: string;
        desc: string;
    }

    let { title, image, desc }: Props = $props();
</script>

<div class="flex flex-col gap-8">
    <h2 class="font-bold tracking-wide  h2">{title}</h2>

    <img class="rounded-lg shadow-2xl"
         title={title} loading="eager"
         src={`${image}/1260/540`} alt={title}
         height="300" width="700">

    <p class="leading-7">{desc}</p>
</div>
