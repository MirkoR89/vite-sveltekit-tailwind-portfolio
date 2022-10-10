<script>
    let test = 0;

    const plusOne = () => {
        test += 1;
    };
</script>

<div
    class="h-screen flex flex-col justify-center items-center gap-y-3 text-3xl font-mono bg-polarNight0 text-snowStorm0 dark:bg-snowStorm0 dark:text-polarNight0"
>
    <h1>Home</h1>
    <span>{test}</span>
    <button
        class="bg-auroraGreen text-snowStorm0 px-2 py-1 w-fit rounded-xl"
        on:click={plusOne}
    >
        Aggiungi 1
    </button>
</div>
