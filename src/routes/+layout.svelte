<script>
    import "../app.css";
    import Icon from "@iconify/svelte";
    import Sidebar from "../coponents/Sidebar.svelte";

    let darkMode = false;
    const routes = [
        {
            id: 0,
            name: "home",
            link: "/",
            icon: "line-md:home-simple-twotone",
        },
        { id: 1, name: "about me", link: "/about", icon: "line-md:account" },
        {
            id: 2,
            name: "contacts",
            link: "/contacts",
            icon: "line-md:email-twotone",
        },
        {
            id: 3,
            name: "projects",
            link: "/projects",
            icon: "line-md:github-twotone",
        },
    ];

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
        {#each routes as route}
            <button class="flex items-center gap-x-2 capitalize">
                <Icon width="25" height="25" icon={route.icon} />
                <a href={route.link}>{route.name}</a>
            </button>
        {/each}
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

<div
    class="w-[calc(100%-5rem)] ml-auto px-3 dark:bg-polarNight0 dark:text-snowStorm0 bg-snowStorm2 text-polarNight0"
>
    <slot />
</div>
