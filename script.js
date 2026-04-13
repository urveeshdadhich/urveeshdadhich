document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the 'terminal-header' class
    const headers = document.querySelectorAll('.terminal-header');

    // Apply the prompt prefix to each terminal header
    headers.forEach(header => {
        // Prepend a '>' character for a CLI prompt look
        if (!header.innerHTML.startsWith('> ')) {
            header.innerHTML = `> ${header.innerHTML}`;
        }
    });

    // Optional: Log a system startup message to the console
    console.log("%c[SYSTEM INITIALIZED]", "color: #FFB000; font-weight: bold; background: #000; padding: 5px;");
    console.log("%cLoading user data for: URVEESH DADHICH...", "color: #FFB000; font-family: monospace;");
    console.log("%cStatus: ONLINE", "color: #FFB000; font-family: monospace; font-weight: bold;");
});