<script>
    import "../app.css";
    import Icon from "@iconify/svelte";
    import Sidebar from "../coponents/Sidebar.svelte";
</script>

<nav
    class="flex justify-between bg-polarNight0 text-xl font-mono text-snowStorm0 dark:bg-snowStorm0 dark:text-polarNight0"
>
    <Sidebar />
    <div class="h-10 w-full flex justify-end gap-x-10 pr-3 mt-3">
        <button class="flex items-center gap-x-2">
            <Icon
                color="snowStorm0"
                width="25"
                height="25"
                icon="line-md:home-simple-twotone"
            />
            <a href="/">Home</a>
        </button>
        <button class="flex items-center gap-x-2">
            <Icon
                color="snowStorm0"
                width="25"
                height="25"
                icon="line-md:account"
            />
            <a href="/about">About</a>
        </button>
        <button class="flex items-center gap-x-2">
            <Icon
                color="snowStorm0"
                width="25"
                height="25"
                icon="line-md:email-twotone"
            />
            <a href="/contacts">Contacts</a>
        </button>
        <button class="flex items-center gap-x-2">
            <Icon
                color="snowStorm0"
                width="25"
                height="25"
                icon="line-md:github-twotone"
            />
            <a href="/projects">Projects</a>
        </button>
    </div>
</nav>

<slot />
