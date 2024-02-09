const perguntas = [
  {
    pergunta: "Qual é o principal objetivo de uma enfermaria?",
    resposta: [
      "Realizar cirurgias",
      "Fornecer cuidados pós-operatórios",
      "Fornecer assistência e cuidados a pacientes hospitalizados",
    ],
    correta: 2
  },
  {
    pergunta: "O que é um "enfermeiro-chefe" em uma enfermaria?",
    resposta: [
      "Um enfermeiro especializado em cirurgias",
      "O enfermeiro responsável pela gestão e supervisão da equipe de enfermagem",
      "Um enfermeiro que cuida especificamente de crianças",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um "prontuário médico" em uma enfermaria?",
    resposta: [
      "Um registro das condições climáticas no hospital",
      "Um documento que contém informações médicas e de tratamento de um paciente",
      "Uma lista de medicamentos disponíveis na enfermaria",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é responsável por administrar medicamentos aos pacientes em uma enfermaria?",
    resposta: [
      "Médico",
      "Enfermeiro",
      "Assistente social",
    ],
    correta: 1
  },
  {
    pergunta: "O que é a "visita médica" em uma enfermaria?",
    resposta: [
      "Uma inspeção do hospital",
      "Uma reunião de enfermeiros",
      "Uma avaliação médica regular dos pacientes",
    ],
    correta: 2
  },
  {
    pergunta: "O que é um "tratamento ambulatorial" em relação a uma enfermaria?",
    resposta: [
      "Um tratamento realizado fora do hospital",
      "Um tratamento intensivo",
      "Um tratamento exclusivo para crianças",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função principal de um "técnico de enfermagem" em uma enfermaria?",
    resposta: [
      "Diagnosticar doenças",
      "Realizar procedimentos cirúrgicos",
      "Auxiliar enfermeiros no cuidado direto aos pacientes",
    ],
    correta: 2
  },
  {
    pergunta: "O que é a "triagem" em uma enfermaria?",
    resposta: [
      "A seleção de pacientes para cirurgias",
      "A avaliação inicial da gravidade dos casos",
      "Uma técnica de relaxamento para pacientes",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a importância da "higienização das mãos" em uma enfermaria?",
    resposta: [
      "Apenas um procedimento rotineiro",
      "Essencial para prevenir a propagação de infecções",
      "Apenas necessário em cirurgias",
    ],
    correta: 1
  },
  {
    pergunta: "O que é a "alta hospitalar" em uma enfermaria?",
    resposta: [
      "Um procedimento cirúrgico",
      "A transferência de um paciente para outra enfermaria",
      "A liberação de um paciente após o tratamento",
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
  