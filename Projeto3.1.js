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
let tempo;
let decisoes;
let perguntas = [
  {
    pergpop: function () {
      let;
    },
  },
];
let jogo = 1;
let anosgov = 0;
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

while (jogo == 1) {}
