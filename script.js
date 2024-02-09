const perguntas = [
  {
    pergunta: "Qual artista internacional é conhecido como 'The King of Gospel'?",
    resposta: [
      "Kirk Franklin",
      "CeCe Winans",
      "Mahalia Jackson",
    ],
    correta: 2
  },
  {
    pergunta: "Qual música de Whitney Houston é considerada uma poderosa canção gospel?",
    resposta: [
      "'I Will Always Love You'",
      "'Greatest Love of All'",
      "'My Love Is Your Love'",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é conhecido por hits como 'Stomp' e 'Revolution'?",
    resposta: [
      "Fred Hammond",
      "Donnie McClurkin",
      "Kirk Franklin",
    ],
    correta: 2
  },
  {
    pergunta: "Qual grupo gospel internacional é famoso pela música 'Oceans (Where Feet May Fail)'?",
    resposta: [
      "Hillsong United",
      "Casting Crowns",
      "Chris Tomlin",
    ],
    correta: 0
  },
  {
    pergunta: "Qual artista lançou o álbum 'Hiding Place' em 2018, vencedor do Grammy de Melhor Álbum Gospel?",
    resposta: [
      "Tasha Cobbs Leonard",
      "Lauren Daigle",
      "Tamela Mann",
    ],
    correta: 1
  },
  {
    pergunta: "Qual cantor gospel internacional é conhecido por canções como 'I Smile' e 'Melodies From Heaven'?",
    resposta: [
      "Kirk Franklin",
      "Don Moen",
      "Fred Hammond",
    ],
    correta: 0
  },
  {
    pergunta: "Qual grupo gospel internacional é famoso por músicas como 'Shackles (Praise You)' e 'Yesterday'?",
    resposta: [
      "The Clark Sisters",
      "Mary Mary",
      "Destiny's Child",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é conhecido por músicas como 'How Great is Our God' e 'Amazing Grace (My Chains Are Gone)'?",
    resposta: [
      "Chris Tomlin",
      "Hillsong Worship",
      "Matt Redman",
    ],
    correta: 0
  },
  {
    pergunta: "Qual artista gospel internacional é famoso por músicas como 'Break Every Chain' e 'Your Spirit'?",
    resposta: [
      "Tasha Cobbs Leonard",
      "William McDowell",
      "Israel Houghton",
    ],
    correta: 0
  },
  {
    pergunta: "Qual cantora gospel lançou álbuns como 'Alabaster Box' e 'A Piece of My Passion'?",
    resposta: [
      "CeCe Winans",
      "Yolanda Adams",
      "Kim Burrell",
    ],
    correta: 2
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
  