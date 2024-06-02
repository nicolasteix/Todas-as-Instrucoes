const flashcards = [
    {
        question: "Quais são os principais objetivos do uso das Cores Dinâmicas no ambiente de trabalho?",
        answer: "Aumentar a frequência ao trabalho <br><br> Manter a boa produção <br><br> Aperfeiçoar o funcionamento <br><br> Diminuir os acidentes"
    },
    {
        question: "Como as cores dinâmicas podem ajudar a manter a boa produção no ambiente de trabalho?",
        answer: "Promovendo tranquilidade e reduzindo o cansaço."
    },
    {
        question: "Qual norma da ABNT regulamenta o uso de cores para a segurança no ambiente de trabalho?",
        answer: "NBR 7195"
    },
    {
        question: "Qual é a cor utilizada para identificar equipamentos de proteção e combate a incêndio?",
        answer: "Vermelho"
    },
    {
        question: "Para que a cor Laranja é utilizada nas normas de segurança?",
        answer: "<strong>Indicar perigo</strong>.<br><br> Exemplos:<br><br> Partes móveis e perigosas de máquinas e        equipamentos;<br><br>Faces e proteções internas de caixas de dispositivos elétricos que possam ser abertas;<br><br> Faces externas de polias e engrenagens;<br><br>Equipamentos de salvamento aquático;<br><br>Objetos móveis que circulam pelas faixas de tráfego."
    },
    {
        question: "Para que a cor Amarelo é utilizada nas normas de segurança?",
        answer: "<strong>Indicar Cuidado</strong> <br><br>  utilizada, por exemplo, em:<br><br>Escadas portáteis, exceto as de madeira, nas quaisa pintura fica restrita à face externa até a altura do 3º degrau, para não ocultar eventuais defeitos;<br><br>Corrimãos, parapeitos, pisos e partes inferiores de escadas que apresentem riscos;<br><br>Meios-fios ou diferenças de nível onde haja necessidade de chamar atenção"
    },
    {
        question: "Para que serve a cor verde no contexto das cores dinâmicas?",
        answer: "Caracterizar segurança, como em equipamentos de primeiros socorros."
    },
    {
        question: "O que a cor azul indica em ambientes de trabalho?",
        answer: "Ação obrigatória, como o uso de EPI."
    },
    {
        question: "Qual é a cor empregada para sinalizar riscos de radiação eletromagnética e partículas nucleares?",
        answer: "Púrpura"
    },
    {
        question: "Onde é aplicada a cor branca segundo as normas de segurança?",
        answer: "Na demarcação de passadiços, passarelas e corredores."
    },
    {
        question: "Onde é aplicada a cor Preto segundo as normas de segurança?",
        answer: "Em coletores de resíduos, exceto os de origem de serviços de saúde."
    },
    {
        question: "Qual é a finalidade da NBR 6493?",
        answer: "Emprego de cores para identificação de tubulações."
    },
    {
        question: "Para que é utilizada a cor preta nas normas de identificação de tubulações?",
        answer: "Para indicar combústiveis de alta viscosidade (Óleo BPF, Asfalto...)"
    },
    {
        question: "O que a cor amarela indica em tubulações?",
        answer: "Gases Não Liquefeitos"
    },
    {
        question: "Qual é a cor usada para identificar ar comprimido em tubulações?",
        answer: "Azul"
    },
    {
        question: "Qual é a cor empregada para sinalizar produtos químicos não gasosos?",
        answer: "Laranja"
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

