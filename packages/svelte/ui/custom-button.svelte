<script>
    export let title;
    export let text;
    export let onCLick;

</script>


<button on:click={onCLick} title={title}>

{text}


</button>

<style>
    button {
        border: none;
        padding: 0.5rem 2rem;
        color: #fff;
        font-size: 1.5rem;
        border-radius: 1rem;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
        background-color: rgb(105, 151, 250);
    }
</style>