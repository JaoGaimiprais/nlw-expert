const perguntas = [
  {
    pergunta: "Qual é o objetivo principal do Power BI?",
    resposta: [
      "Desenvolvimento de aplicativos móveis",
      "Análise de dados e criação de visualizações interativas",
      "Programação de software",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o 'Power Query' no Power BI?",
    resposta: [
      "Uma linguagem de programação",
      "Uma ferramenta para importar, transformar e combinar dados de diversas fontes",
      "Um componente para criar gráficos",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do 'Power Pivot' no Power BI?",
    resposta: [
      "Importar dados externos",
      "Criar relatórios visuais",
      "Realizar análises avançadas e criar modelos de dados",
    ],
    correta: 2
  },
  {
    pergunta: "O que são os 'Dashboards' no Power BI?",
    resposta: [
      "Relatórios detalhados",
      "Painéis interativos que mostram visualizações importantes",
      "Ferramentas de administração",
    ],
    correta: 1
  },
  {
    pergunta: "Qual linguagem é usada para escrever fórmulas no Power BI?",
    resposta: [
      "DAX (Data Analysis Expressions)",
      "SQL (Structured Query Language)",
      "JavaScript",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o 'Power BI Service'?",
    resposta: [
      "Uma função específica no Power BI",
      "Uma versão gratuita do Power BI",
      "Uma plataforma online para publicar, compartilhar e colaborar em relatórios",
    ],
    correta: 2
  },
  {
    pergunta: "O que é o 'Power BI Desktop'?",
    resposta: [
      "Uma versão exclusiva para Mac",
      "Uma ferramenta para criar relatórios e dashboards localmente",
      "Um componente opcional do Power BI",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o formato de arquivo padrão para os relatórios do Power BI?",
    resposta: [
      ".pptx",
      ".pbix",
      ".xlsx",
    ],
    correta: 1
  },
  {
    pergunta: "O que significa 'ETL' no contexto do Power BI?",
    resposta: [
      "Extração, Transformação e Linguagem",
      "Excel, Tableau, Linguagem",
      "Extração, Transformação e Carregamento",
    ],
    correta: 2
  },
  {
    pergunta: "Qual visualização é comumente usada para representar dados geográficos no Power BI?",
    resposta: [
      "Gráfico de barras",
      "Mapa",
      "Rosca de pizza",
    ],
    correta: 1
  },
];

  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou repetição ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.resposta) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      // Assim podemos específicar qual é qual, colocando nomes diferentes em cada pergunta 
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      //Assim podemos comparar qual se a resposta está correta
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
      //Comparando a resposta da resposta correta
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item) 
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }    
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  