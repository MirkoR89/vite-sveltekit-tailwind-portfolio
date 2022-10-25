<script>
    import HamburgerMenu from "./HamburgerMenu.svelte";

    let isOpen = false;
</script>

<div
    class={`fixed top-0 left-0 h-full z-10 transition-all duration-300 ease-linear bg-polarNight3 ${
        isOpen ? "w-1/6" : "w-20"
    }`}
>
    <button
        on:click={() => (isOpen = !isOpen)}
        class="ml-4 mt-4 transition-all"
    >
        <HamburgerMenu {isOpen} />
    </button>
    <div class={`flex flex-col gap-y-3 ml-3 mt-3 ${!isOpen && "hidden"}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </div>
</div>
