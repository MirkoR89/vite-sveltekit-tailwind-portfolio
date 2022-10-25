<script>
    export let isOpen;
    console.log(isOpen);
</script>

<div>
    <button on:click={() => !isOpen} class="relative group">
        <div
            class={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-polarNight0 ring-0 ring-snowStorm0 hover:ring-8 ${
                isOpen && "ring-4"
            } ring-opacity-30 duration-200 shadow-md`}
        >
            <div
                class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden"
            >
                <div
                    class={`bg-snowStorm0 h-[2px] w-7 transform transition-all duration-300 origin-left ${
                        isOpen && "translate-x-10"
                    }`}
                />
                <div
                    class={`bg-snowStorm0 h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${
                        isOpen && "translate-x-10"
                    }  `}
                />
                <div
                    class={`bg-snowStorm0 h-[2px] w-7 rounded transform transition-all duration-300 delay-150 ${
                        isOpen && "translate-x-10"
                    } `}
                />

                <div
                    class={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex ${
                        isOpen ? "w-12 translate-x-0" : "w-0 -translate-x-10"
                    }`}
                >
                    <div
                        class={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                        }`}
                    />
                    <div
                        class={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                            isOpen ? "-rotate-45" : "rotate-0"
                        }`}
                    />
                </div>
            </div>
        </div>
    </button>
</div>
