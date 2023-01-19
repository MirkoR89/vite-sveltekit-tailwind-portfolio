<script>
    import Icon from "@iconify/svelte";

    const contacts = [
        {
            id: 0,
            name: "phone number",
            icon: "line-md:grid-3-twotone",
            content: "+39 3492133758",
            link: "",
        },
        {
            id: 1,
            name: "email",
            icon: "line-md:email-twotone-alt",
            content: "mirko.rinelli@gmail.com",
            link: "",
        },
        {
            id: 2,
            name: "linkedin",
            icon: "line-md:linkedin",
            content: "",
            link: "https://www.linkedin.com/in/mirko-rinelli-a04695118/",
        },
        {
            id: 3,
            name: "github",
            icon: "line-md:github-loop",
            content: "",
            link: "https://github.com/MirkoR89",
        },
    ];
</script>

<div
    class="h-[calc(100vh-5rem)] flex flex-col justify-center items-center gap-y-10"
>
    <h1 class="text-3xl font-bold">Contacts</h1>
    <p class="text-center text-xl font-semibold px-32">
        Hey, you can find my contacts following here or use the form to text me
        a email!
    </p>
    <div class="flex flex-col justify-center gap-y-3 text-lg">
        {#each contacts as contact}
            <div>
                <a class="flex gap-x-2" href={contact.link}>
                    <Icon width="25" height="25" icon={contact.icon} />
                    <span class="first-letter:capitalize">{contact.name}</span>
                    <span>{contact.content}</span>
                </a>
            </div>
        {/each}
    </div>
</div>
