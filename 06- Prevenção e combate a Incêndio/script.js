const flashcards = [
    {
        question: "Quais são os componentes necessários para a formação do fogo?",
        answer: "Combustível<br><br>Oxigênio (Comburente)<br><br>Calor<br><br>Reação em cadeia."
    },
    {
        question: "Como se extingue o fogo segundo a teoria da extinção?",
        answer: "Retirando-se um dos elementos do triângulo do fogo ou impedindo a reação química."
    },
    {
        question: "O que caracteriza um incêndio de Classe A?",
        answer: "Incêndio em materiais sólidos que deixam resíduos."
    },
    {
        question: "Quais são as características de um incêndio de Classe B?",
        answer: "Incêndio em líquidos, pastosos e gases inflamáveis, que não deixam resíduos."
    },
    {
        question: "O que caracteriza um incêndio de Classe D e como deve ser combatido?",
        answer: "Incêndio em metais pirofóricos (liga de magnésio, selênio etc.), é combatido com extintor de Pó Químico (Cloreto de Sódio - NaCl)."
    },
    {
        question: "Qual agente extintor deve ser usado em incêndios de Classe K?",
        answer: "Acetato de Potássio (CH3COOK)."
    },
    {
        question: "Que tipo de agente extintor é recomendado para incêndios em aparelhos elétricos energizados?",
        answer: "CO2 (Dióxido de Carbono) ou Pó Químico (Bicarbonato de Sódio)."
    },
    {
        question: "O que caracteriza a prevenção?",
        answer: "Prevenção é o somatório de medidas que visam:<br><br>1- Impedir o aparecimento de um princípio de incêndio;<br><br>2- Dificultar sua propagação;<br><br>3- Detectá-lo o mais rapidamente possível<br><br>4- Facilitar o seu combate, ainda na fase inicial."
    },
    {
        question: "Quais são os dois tipos de prevenção contra incêndios?",
        answer: "Prevenção Construtural e Prevenção Operacional."
    },
    {
        question: "O que é Prevenção Construtural?",
        answer: "É relacionada com a aplicação da legislação e das medidas preventivas na CONSTRUÇAO.<br><br> Ex: planejamento da disposição dos meios fixos de prevenção, área, altura, ocupação e saídas de emergência."
    
    },
    {
        question: "O que é Prevenção Operacional?",
        answer: " relacionada com a aplicação das legislações, normas e instruções relacionadas ao assunto.<br><br>Ex: É a disposição correta de equipamentos e elementos humanos para prevenir a ocorrência de incêndio."
    },
    {
        question: "Por que os incêndios normalmente ocorrem?",
        answer: "Devido a falhas na prevenção e/ou descuido humano"
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

