<script>
    import "../app.css";
    import Icon from "@iconify/svelte";
    import Sidebar from "../coponents/Sidebar.svelte";

    let darkMode = false;

    const handleSwitchDarkMode = () => {
        darkMode = !darkMode;

        darkMode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    };
</script>

<nav
    class="flex justify-between bg-snowStorm0 dark:bg-polarNight2 dark:text-snowStorm0 text-polarNight0 text-xl font-bold"
>
    <Sidebar />
    <div class="h-20 w-full flex items-center justify-end gap-x-10 pr-3">
        <button class="flex items-center gap-x-2">
            <Icon width="25" height="25" icon="line-md:home-simple-twotone" />
            <a href="/">Home</a>
        </button>
        <button class="flex items-center gap-x-2">
            <Icon width="25" height="25" icon="line-md:account" />
            <a href="/about">About</a>
        </button>
        <button class="flex items-center gap-x-2">
            <Icon width="25" height="25" icon="line-md:email-twotone" />
            <a href="/contacts">Contacts</a>
        </button>
        <button class="flex items-center gap-x-2">
            <Icon width="25" height="25" icon="line-md:github-twotone" />
            <a href="/projects">Projects</a>
        </button>
        <button class="mr-4" on:click={handleSwitchDarkMode}>
            {#if !darkMode}
                <Icon
                    width="32"
                    height="32"
                    icon="line-md:sun-rising-twotone-loop"
                />
            {:else}
                <Icon
                    width="32"
                    height="32"
                    icon="line-md:sunny-outline-to-moon-alt-loop-transition"
                />
            {/if}
        </button>
    </div>
</nav>

<slot />
