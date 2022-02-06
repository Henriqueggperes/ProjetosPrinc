const prompt = require("prompt-sync")();

let atributos = {
  populacao: 10,
  exercito: 10,
  dinheiro: 10,
  religiao: 10,
  verifica: function (x) {
    while (x != 1 && x != 2) {
      console.log("Po digita um valor valido ai. 1 ou 2.");
      x = +prompt(":");
    }
  },
};
let tempo; // Variavel que conterá os anos totais governados pelo jogador
let decisoes; // Variável que conterá da deceisão do jogador (1 ou 2)
let i = 0;
let perguntas = [
  function perguntapop() {
    //Perguntas que afetarão a população
    let pergspop = [
      "Majestade! O povo está com fome! Ouvi dizer que a igreja se banqueteia todos os dias e disperdiça comida! Sugiro que cortemos uma parcela dos alimentos da igreja distribuamos a populaçao.",
      "Meu senhor, o povo exige a diminuição dos impostos",
      "Majestade, o reino do norte deseja uma guerra conosco. Nós certamente venceriamos, mas a custo das vidas de boa parte de nossos aldeoes",
    ];
    let ale = Math.trunc(Math.random() * 3);
    console.log(pergspop[ale]);
    console.log("O que faremos?");

    if (ale == 0) {
      //Primeira pergunta
      console.log("[1] Que comam os ratos na sarjeta! ");
      console.log("[2] Daremos o que temos.");

      if (decisoes == 1) {
        atributos.populacao = atributos.populacao - 2;
        atributos.dinheiro = atributos.dinheiro + 1;
      } else {
        atributos.dinheiro = atributos.dinheiro - 1;
        atributos.populacao = atributos.populacao + 2;
      }
    }
    if (ale == 1) {
      //Segunda pergunta
      console.log("[1] Que absurdo! Não de ouvidos para eles. ");
      console.log("[2] Diminua os impostos.");

      if (decisoes == 1) {
        atributos.populacao = atributos.populacao - 1;
        atributos.dinheiro = atributos.dinheiro + 2;
      } else {
        atributos.dinheiro = atributos.dinheiro - 2;

        atributos.populacao = atributos.populacao + 1;
      }
    }
    if (ale == 2) {
      //Segunda pergunta
      console.log("[1] Esqueça as consequências, estamos em guerra");// PERGUNTAS NAO FUNCIONANDO POR CAUSA DAS DECISOES ARRUMAR DEPOIS
      console.log("[2] Apenas vamos apenas nos defender.");

      if (decisoes == 1) {
        atributos.guerra = 1;
        atributos.populacao = atributos.populacao - 1;
        atributos.dinheiro = atributos.dinheiro + 2;
      } else {
        atributos.dinheiro = atributos.dinheiro - 2;
        atributos.populacao = atributos.populacao + 2;
      }
    }
  },
  function pergsexe() {
    //Perguntas que afetarão o exercito
    let pergsexe = [
      "Vossa alteza, precisamos reforçar as fronteiras para evitar um futuro ataque.",
      "Senhor, nossos soldados estão começando a questionar seu governo e acreditam que sua majestade não os valoriza, vamos dar mais poder a eles.",
      "Meu senhor, o reino do sul mandou uma ameaça para nossas defesas! Vamos devolver na mesma moeda.",
    ];
    let ale = Math.trunc(Math.random() * 3);
    console.log(pergsexe[ale]);
    console.log("O que faremos?");

    if (ale == 0) {
      //Primeira pergunta
      console.log("[1] Reforçaremos nossas defesas.");
      console.log("[2] Não acredito que seja necessário.");

      if (decisoes == 1) {
        atributos.exercito = atributos.exercito + 1;
        atributos.dinheiro = atributos.dinheiro - 2;
      } else {
        atributos.dinheiro = atributos.dinheiro + 2;
        atributos.exercito = atributos.exercito - 1;
      }
    }
    if (ale == 1) {
      //Segunda pergunta
      console.log("[1] Dê mais liberdade a eles.");
      console.log("[2] Reclamam de barriga cheia!");

      if (decisoes == 1) {
        atributos.exercito = atributos.exercito + 2;
        atributos.populacao = atributos.populacao - 3;
      } else {
        atributos.exercito = atributos.exercito - 2;

        atributos.populacao = atributos.populacao + 3;
      }
    }
    if (ale == 2) {
      //Terceira pergunta
      console.log("[1] Envie nossas tropas.");
      console.log("[2] Temos outros problemas para nos preocupar.");
      if (decisoes == 1) {
        atributos.guerra = 1;
        atributos.exercito = atributos.exercito - 3;
      } else {
        atributos.populacao = atributos.populacao + 2;
      }
    }
  },
];

let jogo = 1; //Verificação caso o jogador queira continuar jogando após uma morte ou reiniciar o jogo do zero
let anosgov = 0; // Variavel que contem os anos governados pelo jogador antes de sua morte.
console.log(
  'Alma penada: -"Olá meu jovem, então é você quem será o novo governante desta terra?"'
);
console.log("[1] O que??? Não!!");
console.log("[2] Uuum... Sim??");

decisoes = +prompt(":");
atributos.verifica(decisoes);

while (decisoes == 1) {
  console.log('Alma penada: "Haha, sim você será. Essa é sua maldição."');
  console.log("[1] Sai fora! Ja falei que não!");
  console.log("[2] TA BOM SOU EU POXA QUE CHATO.");
  decisoes = +prompt(":");
  atributos.verifica(decisoes);
}

console.clear();

console.log(
  '"Alma  penada- Perfeito! Boas vindas novo governador(a)! A partir de agora deixo em suas mãos para que cuide de meu reino. A e uma dica, morrer faz parte do processo viu! Boa sorte AHHAHAHAHAAH" .O espirito então, desaparece lentamente.'
);
console.log("[1] ESPERA! COMO ASSIM????");
console.log("[2] Moio");
decisoes = +prompt(":");
atributos.verifica(decisoes);
console.log(
  'Após um sonho bizarro, você acorda. Você questiona sua sanidade após um sonho tão estranho e vivido. Você nota algo diferente, o quarto onde acordou é não é o seu! O ambiente é todo iluminado com janelas exageradamente grandes, as paredes são de blocos de pedra como as de um forte antigo e sua cama é tão grande que provavelmente caberia um cavalo. Logo em seguida de suas indagações de como raios você foi parar em um lugar tão estranho, a porta é aberta e uma senhorita caminha  em sua direção calmamente e diz: "Bom dia, majestade, os assuntos do reino o aguardam". '
);
console.log("[1] O que esta acontecendo?? Quem é você??");
console.log("[2] Onde eu estou?? E por que cê ta me chamando de majestade??");
decisoes = +prompt(":");
atributos.verifica(decisoes);

console.log(
  'Conselheira - "Majestade, você está bem? Acredito que sua noite de sono tenha te afetado de alguma forma. Mas infelizmente temos que nos apressar, existem questões a tratar.'
);
+prompt(":");
console.clear();

while (jogo == 1) {
  decisoes = null;
  aleatorio = Math.trunc(Math.random() * 2);
  perguntas[aleatorio]();
  decisoes = +prompt(":");
  atributos.verifica(decisoes);
  console.log(
    `A situação do seu reino agora é : Populacão (${atributos.populacao}), Exército (${atributos.exercito}), Religião(${atributos.religiao}), Dinheiro(${atributos.dinheiro}). `
  );
  if (atributos.exercito < 1 || atributos.exercito > 19) {
    jogo == 0;
  }
}