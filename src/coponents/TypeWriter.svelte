<script>
    let textDisplay = null;
    const phrases = ["Mirko.", "a Front End Developer.", "a traveler."];

    let i = 0;
    let j = 0;
    let currentPhase = [];
    let isDeleting = false;
    let isEnd = false;

    const loop = () => {
        isEnd = false;
        textDisplay = currentPhase.join("");
        if (i < phrases.length) {
            if (!isDeleting && j <= phrases[i].length) {
                currentPhase.push(phrases[i][j]);
                j++;
                textDisplay = currentPhase.join("");
            }

            if (isDeleting && j <= phrases[i].length) {
                currentPhase.pop(phrases[i][j]);
                j--;
                textDisplay = currentPhase.join("");
            }

            if (j === phrases[i].length) {
                isEnd = true;
                isDeleting = true;
            }

            if (isDeleting && j === 0) {
                currentPhase = [];
                isDeleting = false;
                i++;
                if (i === phrases.length) i = 0;
            }
        }
        const speedUp = Math.random() * (80 - 50) + 50;
        const normalSpeed = Math.random() * (300 - 200) + 200;
        const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
        setTimeout(loop, time);
    };

    loop();
</script>

<div class="text-5xl font-bold">
    <h1>
        <span class="text-auroraRed">I'm </span>{textDisplay}
        <span
            class="box-border inline-block w-1 h-16 -mb-4 bg-polarNight0 dark:bg-snowStorm0 animate-cursor will-change-transform"
        />
    </h1>
</div>
