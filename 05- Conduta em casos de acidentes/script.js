const flashcards = [
    {
        question: "O que é considerado um acidente de trabalho?",
        answer: "É uma ocorrência não programada que causa danos físicos, funcionais, materiais ou econômicos ao trabalhador ou empresa"
    },
    {
        question: "Quais são as primeiras ações ao prestar socorro a uma vítima de choque elétrico?",
        answer: "Cortar a corrente elétrica<br><br>Afastar a vítima do fio<br><br>Iniciar RCP se necessário (Reanimação Cardiopulmonar)"
    },
    {
        question: "Quais são os passos para tratar queimaduras?",
        answer: "Retirar a roupa<br><br>Lavar a área queimada<br><br>Hidratar a vítima<br><br>Cobrir a queimadura<br><br>Encaminhar ao médico."
    },
    {
        question: "Como deve-se proceder em caso de ferimentos nos olhos?",
        answer: "Pedir para fechar os olhos para que as lágrimas retirem o corpo estranho<br><br>Lavar com água corrente se houver poeira ou produto químico<br><br>se nada funcionar, cobrir com gaze sem comprimir e ncaminhar ao médico"
    },
    {
        question: "Qual é o procedimento correto em caso de fraturas?",
        answer: "Estancar hemorragia<br><br>Imobilizar a fratura<br><br>Evitar mover a vítima<br><br>Encaminhar ao médico."
    },
    {
        question: "Quais providências administrativas devem ser tomadas após um acidente com um militar?",
        answer: "Relatar o acidente em até 48 horas através da Parte de acidentes."
    },
    {
        question: "O que deve ser feito em caso de corte profundo?",
        answer: "Estancar a hemorragia<br><br> Aplicar torniquete em casos extremos<br><br>Encaminhar ao médico."
    },
    {
        question: "Quais são os tipos de riscos ocupacionais?",
        answer: "Riscos físicos, químicos, biológicos, ergonômicos e acidentais."
    },
    {
        question: "Quais são as providências administrativas para acidentes com servidores civis?",
        answer: "Processo semelhante ao militar, mas com inclusão da Ficha de Comunicação de Acidente de Trabalho (FCAT)."
    },
];

const flashcardsContainer = document.getElementById('flashcards');

flashcards.forEach((flashcard, index) => {
    const card = document.createElement('div');
    card.className = 'flashcard';
    card.innerHTML = `
        <div class="flashcard-content" id="flashcard-${index}">
            <p>${flashcard.question}</p>
        </div>
    `;
    card.addEventListener('click', () => {
        const content = document.getElementById(`flashcard-${index}`);
        content.innerHTML = `<p>${flashcard.answer}</p>`;
    });
    card.addEventListener('mouseleave', () => {
        const content = document.getElementById(`flashcard-${index}`);
        content.innerHTML = `<p>${flashcard.question}</p>`;
    });
    flashcardsContainer.appendChild(card);
});

