<script>
    import "./../styles/card.css"

    export let title;
    export let body;
    console.log('idle')
</script>

<li class="link-card" on:click={() => console.log('Svelte xin chao')}>
    <a>
        <h2>
            {title}
            <span>&rarr;</span>
        </h2>
        <p>
            {body}
        </p>
    </a>
</li>

<style>

</style>