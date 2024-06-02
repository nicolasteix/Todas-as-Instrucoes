const flashcards = [
    {
        question: "O que é manutenção?",
        answer: "Conjunto de ações necessárias para manter ou restaurar um equipamento em uma condição específica de operação."
    },
    {
        question: "Quais são os três tipos básicos de manutenção?",
        answer: "Manutenção corretiva, preventiva e preditiva."
    },
    {
        question: "Qual é a principal característica da manutenção corretiva emergencial?",
        answer: "Realizada após a ocorrência de uma falha inesperada, com alto custo e impacto nas operações."
    },
    {
        question: "Quais são os objetivos da manutenção preventiva?",
        answer: "Redução de custos, aumento da produtividade e vida útil dos equipamentos, redução de acidentes e impactos ambientais."
    },
    {
        question: "Qual é o primeiro passo para elaborar um plano de manutenção preventiva?",
        answer: "Relacionar os ativos da OM que estão dentro do seu período de vida útil."
    },
    {
        question: "O que é manutenção preditiva?",
        answer: "Manutenção que monitora os equipamentos em operação para prever falhas e realizar intervenções antes que ocorram."
    },
    {
        question: "Quais são os métodos de inspeção preditivos mais comuns?",
        answer: "Inspeções sensitivas, análise de vibrações, análise termográfica e análise por ultrassom."
    },
    {
        question: "O que são analisadores de vibração?",
        answer: "Equipamentos que detectam falhas mecânicas como desequilíbrios e desalinhamentos por meio de medições eletrônicas de vibrações."
    },
    {
        question: "Qual é o objetivo da Manutenção Centrada em Confiabilidade (MCC)?",
        answer: "Estimar a confiabilidade de componentes e sistemas, melhorar a segurança e otimizar os custos de manutenção."
    },
    {
        question: "Explique o que é o POP (Procedimento Operacional Padrão)",
        answer: "É um documento que descreve os passos específicos para realizar uma tarefa de maneira padronizada. Em manutenção, os POPs detalham como realizar atividades como verificações, lubrificação e ajustes para garantir o bom funcionamento e prolongar a vida útil do equipamento."
    },
    {
        question: "Quais são as etapas básicas da implantação da MCC?",
        answer: "Definição e delimitação do sistema, funções e falhas funcionais, FMEA/FMECA, diagrama de decisão e seleção, formulação e implementação de um plano de manutenção."
    
    },
    {
        question: "O que é manutenção preventiva e quais são seus principais objetivos?",
        answer: "A manutenção preventiva é um conjunto de atividades planejadas realizadas para reduzir ou evitar falhas em equipamentos, seguindo um plano previamente elaborado com base em intervalos definidos de tempo.<br><br> Seus principais objetivos são: <br>Reduzir custos em comparação com a manutenção corretiva emergencial.<br>Aumentar a qualidade do produto.<br>Aumentar a produtividade.<br>Reduzir impactos ao meio ambiente.<br>Diminuir acidentes de trabalho.<br>Aumentar a vida útil dos equipamentos."
    },
    {
        question: "Qual técnica de manutenção preditiva utiliza a medição de temperatura para formar imagens térmicas?",
        answer: "Analise Termológica"
    },
    {
        question: "Em qual geração da manutenção surgiu a Manutenção Produtiva Total (TPM)?",
        answer: "Terceira Geração."
    },
    {
        question: "Descreva os métodos de inspeção preditivos usados na manutenção preditiva.",
        answer: "Os métodos de inspeção preditivos incluem:<br><br>Inspeções sensitivas, que usam os sentidos humanos para detectar falhas.<br><br>Uso de equipamentos especializados, como análise de vibrações, análise termográfica e análise por ultrassom, para identificar falhas não perceptíveis pelos sentidos humanos."
    },
    {
        question: "Quais são os principais objetivos de um plano de manutenção preventiva?",
        answer: "Os principais objetivos de um plano de manutenção preventiva são:<br><br>Planejar processos de execução.<br><br>Prever falhas e resolvê-las.<br><br>Conferir resultados e promover a melhoria contínua de processos.<br><br>Contribuir para o entendimento de como surgem problemas e como podem ser solucionados, focando na causa, não nas consequências."
    },
    {
        question: "O que é FMEA e como ele é utilizado na MCC?",
        answer: "FMEA (Failure Modes and Effects Analysis) é um método que identifica e analisa os modos de falha potenciais de um sistema.<br><br> Na MCC, o FMEA é usado para identificar modos de falha críticos que justificam ações adicionais para evitar falhas."
    },
    {
        question: "Explique a diferença entre manutenção corretiva planejada e emergencial.",
        answer: "A manutenção corretiva planejada é realizada para corrigir desempenho menor que o esperado, com base em acompanhamento preditivo, permitindo estender a operação até o momento de ocorrência da falha, geralmente em paradas combinadas com a produção.<br> Já a manutenção corretiva emergencial é a correção de falhas que ocorrem de maneira inesperada e requerem intervenção imediata, resultando em custos mais altos e prejuízos operacionais."
    },
    {
        question: "Quais são as vantagens e desvantagens da manutenção preventiva por tempo?",
        answer: "As vantagens incluem a restauração e inspeção de componentes, garantia das funções do equipamento durante a produção, melhor ritmo de trabalho e menores chances de erros.<br> As desvantagens incluem a possibilidade de substituição de componentes ainda em condições de uso e a ocorrência de falhas entre os períodos planejados devido a falhas humanas ou de sobressalentes."
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

