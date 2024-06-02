const flashcards = [
  {
    question:
      "Qual é a norma regulamentadora que trata da segurança em instalações elétricas?",
    answer: "NR10",
  },
  {
    question:
      "Quais são os principais danos causados por acidentes com corrente elétrica?",
    answer: "1. Danos Materiais <br><br> 2. Danos Pessoais.",
  },
  {
    question:
      "Quais são os tipos de Danos Pessoais que podem ser causados por acidentes com a corrente elétrica?",
    answer:
      "1. Percepção <br><br> 2. Tetanização <br><br> 3. Parada Respiratória <br><br> 4. Queimadura <br><br> 5. Fibrilação Muscular. <br><br> <strong>('PT' Para Que Fi?)</strong>",
  },
  {
    question: "De modo geral, como podem ser descritos os metodos de proteção contra choques eletricos?",
    answer:
      "1. Sinalização Adequada<br><br>2. Proteção das Instalações e Tubulações<br><br>3. Proteção Contra Contatos Diretos e Indiretos<br><br>4. Cuidados com Cabos Condutores<br><br>5. Cuidados com Terminais e Ligações<br><br>6. Cuidados com Fusíveis<br><br>7. Procedimentos de Reparação do Circuito<br><br>8. Capacitação e Treinamento<br><br>9. Inspeção e Manutenção Regular das Instalações Elétricas.",
  },
  {
    question: "O que é um Contato Elétrico Direto?",
    answer:
      "É o contato com partes sob tensão de um condutor ativo ou neutro de uma instalação.",
  },
  {
    question: "Como podemos nos proteger dos Contatos Elétricos Diretos?",
    answer:
      "Afastar as partes ativas<br><br>Isolar as partes da instalação<br><br>Interpor obstáculos.",
  },
  {
    question: "O que é um Contato Elétrico Indireto?",
    answer:
      "É o contato com uma parte condutora que está Temporariamente Energizada.",
  },
  {
    question: "Como podemos nos proteger dos Contatos Elétricos Indiretos?",
    answer:
      "Ligar as massas à terra<br><br>Usar dispositivos de corte automático da corrente.",
  },
  {
    question:
      "Quais os procedimentos de Cuidados de utilização e manutenção da corrente elétrica?",
    answer:
      "cuidados com Cabos Condutores<br><br>cuidados com Terminais e Ligações<br><br>cuidados com Fúsiveis<br><br>cuidados na Reparação do Circuito",
  },
  {
    question: "Quais cuidados devem ser tomados ao utilizar cabos condutores?",
    answer:
      "Evitar quinas vivas<br><br> Manter os cabos justos<br><br>Verificar o estado dos isolamentos<br><br>Nunca deixar cabos expostos<br><br>Não puxar os cabos para desconectar das tomadas.",
  },
  {
    question:
      "O que deve ser feito para proteger os terminais e ligações de uma instalação elétrica?",
    answer:
      "Não colocar o fio direto na tomada<br><br>Verificar se as tomadas possuem polo de aterramento.",
  },
  {
    question: "Quais cuidados devem ser tomados com os fusíveis?",
    answer:
      "Colocar o fusível após a chave que liga e desliga o circuito<br><br>Verificar a causa da “queima”<br><br>Não substituir por moedas, arames, clipes de papel, etc.<br><br>Verificar a amperagem indicada.",
  },
  {
    question:
      "Quais são as etapas essenciais a serem seguidas ao realizar a reparação de um circuito elétrico?",
    answer:
      "Desligar o circuito antes da reparação<br><br>Realizar o trabalho com um profissional habilitado<br><br>trabalhar em dupla<br><br>Remover objetos condutores pessoais<br><br>Utilizar EPI adequado.",
  },
  {
    question: "O que são riscos mecânicos?",
    answer: "São aqueles que geram acidentes em função do arranjo do ambiente físico de trabalho.",
  },
  {
    question: "Quais pontos que devem ser observados pelo chefe de oficina de forma a diminuir a incidência dos riscos mecânicos?",
    answer:
      "Arranjo físico da oficina <br><br> Iluminação adequada ao ambiente de trabalho<br><br>Correta instalação dos sistemas elétricos <br><br> Armazenamento adequado nos estoques de materiais <br><br> Aquisição de ferramental adequado e eficiente <br><br> Aquisição, distribuição e fiscalização do uso de EPI.",
  },
  {
    question: "Quais aspectos devem ser observados pelos chefes de oficina para zelar pela organização do ambiente de trabalho e proteger contra riscos mecânicos?",
    answer:
      "Os chefes de oficina devem atentar para os seguintes aspectos: <br><br>Agentes químicos <br><br>Agentes físicos <br><br>Agentes biológicos<br><br> Agentes ergonômicos <br><br>Riscos de acidentes decorrentes do ambiente de trabalho",
  },
  {
    question: "Quais são os 5 tipos de riscos ocupacionais?",
    answer:
      "QUÍMICOS <BR><BR> FÍSICOS <BR><BR> BIOLÓGICOS <BR><BR> ERGONÔMICOS <BR><BR> ACIDENTAIS.",
  },
];

const flashcardsContainer = document.getElementById("flashcards");

flashcards.forEach((flashcard, index) => {
  const card = document.createElement("div");
  card.className = "flashcard";
  card.innerHTML = `
        <div class="flashcard-content" id="flashcard-${index}">
            <p>${flashcard.question}</p>
        </div>
    `;
  card.addEventListener("click", () => {
    const content = document.getElementById(`flashcard-${index}`);
    content.innerHTML = `<p>${flashcard.answer}</p>`;
  });
  card.addEventListener("mouseleave", () => {
    const content = document.getElementById(`flashcard-${index}`);
    content.innerHTML = `<p>${flashcard.question}</p>`;
  });
  flashcardsContainer.appendChild(card);
});
