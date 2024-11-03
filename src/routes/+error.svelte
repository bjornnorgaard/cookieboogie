<script>
    import { picsumHost } from "$lib/constants/picsum";
</script>

<div class="flex flex-col gap-4">
    <img class="rounded-lg drop-shadow-lg"
         src={`${picsumHost}/id/404//1400/600`} alt="havet der støder mod store klipper"
         height="300" width="700">

    <h2 class="text-center font-bold h2">Du er vist faret vild</h2>

    <div class="flex flex-col items-center gap-4 text-center">
        <p>Jeg har naturligvis forudset, at du ville gå ud hvor du ikke kunne bunde.
           Har endda lavet en lille knap til dig. Så kan du komme tilbage i sikkerhed.</p>

        <a href="/" class="font-bold btn variant-filled-primary">Gå til Forsiden</a>
    </div>
</div>
