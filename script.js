const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      resposta: [
        "let myVar = 5;",
        "variable myVar = 5;",
        "myVar = 5;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
      resposta: [
        "15",
        "105",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      resposta: [
        "Selecionar múltiplos elementos",
        "Selecionar o primeiro elemento que corresponde a um seletor CSS",
        "Selecionar elementos pelo nome da classe",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'appendChild' faz em JavaScript?",
      resposta: [
        "Remove um nó filho",
        "Adiciona um nó filho ao final de um elemento",
        "Adiciona um nó filho ao início de um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      resposta: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      resposta: [
        "5",
        "32",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'addEventListener'?",
      resposta: [
        "Adiciona uma classe a um elemento",
        "Adiciona um evento a um elemento",
        "Remove um evento de um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave usada para definir uma função em JavaScript?",
      resposta: [
        "define",
        "function",
        "função",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '10' == 10 em JavaScript?",
      resposta: [
        "true",
        "false",
        "Erro",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'querySelectorAll' faz em JavaScript?",
      resposta: [
        "Seleciona um elemento pelo ID",
        "Seleciona múltiplos elementos",
        "Seleciona o primeiro elemento que corresponde a um seletor CSS",
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
  