<script>
    import "../app.css";
    import Sidebar from "../coponents/Sidebar.svelte";
</script>

<nav
    class="flex justify-between bg-polarNight0 text-xl font-mono text-snowStorm0 dark:bg-snowStorm0 dark:text-polarNight0"
>
    <Sidebar />
    <div class="h-10 flex justify-end gap-x-3 pr-3 mt-3">
        <a href="/">Home</a>
        <a href="/about">About</a>
    </div>
</nav>

<slot />
