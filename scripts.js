document.addEventListener("DOMContentLoaded", function () {

    // Adds more rows to the Search TextArea as the user input grows 
    const textarea = document.getElementById('search-textarea');
    textarea.addEventListener('input', function () {
        const lineHeight = 22; 
        //Calculate number of rows
        this.rows = Math.max(1, Math.ceil((this.scrollHeight) / lineHeight));
    })

    //Implenment a Simplified version of the Lucky Button Hover 
    const luckyButton = document.getElementById("luckyButton");
    const messages = [
        "I'm Feeling Lucky",
        "I'm Feeling Curious",
        "I'm Feeling Adventurous",
        "I'm Feeling Playful",
        "I'm Feeling Hungry"
    ];

    luckyButton.addEventListener("mouseenter", () => {
        // Get a random message from the array
        const randomIndex = Math.floor(Math.random() * messages.length);
        luckyButton.textContent = messages[randomIndex];
    });

    luckyButton.addEventListener("mouseleave", () => {
        // Reset the button text to the original
        luckyButton.textContent = "I'm Feeling Lucky";
    });

})