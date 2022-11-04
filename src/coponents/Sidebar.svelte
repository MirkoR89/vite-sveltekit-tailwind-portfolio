<script>
    import HamburgerMenu from "./HamburgerMenu.svelte";
    import Icon from "@iconify/svelte";

    let isOpen = false;
</script>

<div
    class={`fixed top-0 left-0 h-full z-10 transition-all duration-300 ease-linear dark:bg-polarNight3 bg-snowStorm0 shadow-2xl  shadow-polarNight3 dark:shadow-inherit ${
        isOpen ? "w-1/6" : "w-20"
    }`}
>
    <button on:click={() => (isOpen = !isOpen)} class="ml-4 mt-4">
        <HamburgerMenu {isOpen} />
    </button>
    <div class="flex flex-col gap-y-10 ml-5 mt-10 text-2xl">
        <a href="/" class="relative flex items-center gap-x-2">
            <Icon width="40" height="40" icon="line-md:home-simple-twotone" />
            <span
                class={`${
                    !isOpen ? "-left-28" : "left-16"
                } absolute transition-all duration-300 ease-linear`}>Home</span
            >
        </a>
        <a href="/about" class="flex items-center gap-x-2">
            <Icon width="40" height="40" icon="line-md:account" />
            <span
                class={`${
                    !isOpen ? "-left-28" : "left-20"
                } absolute transition-all duration-300 ease-linear`}
                >About me</span
            >
        </a>
        <a href="/contacts" class="flex items-center gap-x-2">
            <Icon width="40" height="40" icon="line-md:email-twotone" />
            <span
                class={`${
                    !isOpen ? "-left-28" : "left-20"
                } absolute transition-all duration-300 ease-linear`}
                >Contacts</span
            >
        </a>
        <a href="/projects" class="flex items-center gap-x-2">
            <Icon width="40" height="40" icon="line-md:github-twotone" />
            <span
                class={`${
                    !isOpen ? "-left-28" : "left-20"
                } absolute transition-all duration-300 ease-linear`}
                >Projects</span
            >
        </a>
    </div>
</div>
