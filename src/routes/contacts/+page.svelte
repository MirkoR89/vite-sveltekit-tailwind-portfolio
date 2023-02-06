<script>
    import Icon from "@iconify/svelte";
    import emailjs from "@emailjs/browser";

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

    const sendEmail = (e) => {
        emailjs
            .sendForm(
                "service_o1i5vls",
                "template_wvt49tu",
                e.target,
                "J7FQhD9jGv3MoD6uL"
            )
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };
</script>

<div
    class="h-[calc(100vh-5rem)] flex flex-col justify-center items-center gap-y-10"
>
    <h1 class="text-6xl font-bold text-auroraGreen">Contacts</h1>
    <div class="w-full flex justify-around gap-x-20 px-20">
        <form
            on:submit|preventDefault={(e) => sendEmail(e)}
            class="w-1/2 flex flex-col gap-y-3 text-lg"
        >
            <div class="flex flex-col gap-y-1">
                <label for="name">Name</label>
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Text your name"
                />
            </div>
            <div class="flex flex-col gap-y-1">
                <label for="email">Email</label>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Text your email"
                />
            </div>
            <div class="flex flex-col gap-y-1">
                <label for="message">Message</label>
                <textarea
                    required
                    name="message"
                    rows="10"
                    placeholder="Text your message"
                />
            </div>
            <button
                id="button"
                type="submit"
                class="bg-auroraGreen text-polarNight0"
                value="Send"
                >Send
            </button>
        </form>
        <div class="w-1/2 flex flex-col justify-center gap-y-6 text-lg">
            {#each contacts as contact}
                <div>
                    <a class="flex gap-x-10 text-3xl" href={contact.link}>
                        <Icon width="45" height="45" icon={contact.icon} />
                        <span
                            class={`${
                                !contact.content && "underline"
                            } first-letter:capitalize`}>{contact.name}</span
                        >
                        <span>{contact.content}</span>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</div>
