<script>
    import HamburgerMenu from "./HamburgerMenu.svelte";

    export let isOpen = false;
</script>

<div
    class={`flex flex-col gap-x-3  h-screen bg-polarNight3 ${
        isOpen ? "w-1/6" : "w-20"
    }`}
>
    <button
        on:click={() => (isOpen = !isOpen)}
        class="flex justify-end mr-3 mt-3"
    >
        <HamburgerMenu {isOpen} />
    </button>
    <div class={`flex flex-col gap-y-3 ml-3 ${!isOpen && "hidden"}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </div>
</div>
