<script>
    let test = 0;

    const plusOne = () => {
        test += 1;
    };
</script>

<div
    class="h-screen flex flex-col justify-center items-center gap-y-3 text-3xl font-mono dark:bg-polarNight0 dark:text-snowStorm0 bg-snowStorm2 text-polarNight0"
>
    <h1>Home</h1>
    <span>{test}</span>
    <button
        class="bg-auroraGreen px-3 py-3 w-fit rounded-xl"
        on:click={plusOne}
    >
        Aggiungi 1
    </button>
</div>
