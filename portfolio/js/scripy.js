// =========================
// MODO ESCURO / CLARO
// =========================

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});


// =========================
// ANO AUTOMÁTICO
// =========================

const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.textContent =
    `© ${currentYear} Seu Nome. Todos os direitos reservados.`;
