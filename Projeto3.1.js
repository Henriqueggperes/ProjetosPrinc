console.clear();
const prompt = require("prompt-sync")();

let atributos = {
  populacao: 10,
  exercito: 10,
  dinheiro: 10,
  religiao: 10,
  verifica: function (x) {
    while (x != 1 && x != 2) {
      console.log("Po digita um valor valido ai. [1] ou [2].");
      x = +prompt(":");
    }
    return x;
  },
  guerra: function (condicionalguerra, aumenta) {
    console.log(
      "Você esta em guerra. Sua população decaira conforme o tempo passa."
    );
    console.log("");
    this.populacao = this.populacao - aumenta;
    return aumenta++;
  },
};

let defesa = 0;
let aumenta = 1;
let auxguer = 0;
let decisoes; // Variável que conterá da decisão do jogador (1 ou 2)
let perguntas = [
  function perguntapop(decisao) {
    //Perguntas que afetarão a população
    let pergspop = [
      `Conselheira- Majestade, O povo está com fome! A igreja se banqueteia todos os dias e disperdiça muita comida! Sugiro que cortemos uma parcela dos alimentos da igreja e distribuamos a populaçao.\n[1] Que comam os ratos na sarjeta!\n[2] Divida com a população `,
      `Conselheira- Meu senhor, o povo exige a diminuição dos impostos.\n[1] Que absurdo! Não de ouvidos para eles.\n[2] Diminua os impostos.`,
      `Conselheira- Majestade! o reino do norte deseja uma guerra conosco. Nós certamente venceriamos, mas a custo das vidas de boa parte de nossos aldeoes.\n[1] Esqueça as consequências, estamos em guerra\n[2] Apenas vamos apenas nos defender.`,
    ];
    let ale = Math.trunc(Math.random() * 3);
    console.log(pergspop[ale]);
    decisao = +prompt(":");
    decisao = atributos.verifica(decisao);

    if (ale == 0) {
      //Primeira pergunta

      if (decisao == 1) {
        atributos.populacao = atributos.populacao - 4;
        atributos.religiao = atributos.religiao + 3;
      } else if (decisao == 2) {
        atributos.religiao = atributos.religiao - 3;
        atributos.populacao = atributos.populacao + 3;
      }
    }
    if (ale == 1) {
      //Segunda pergunta

      if (decisao == 1) {
        atributos.populacao = atributos.populacao - 3;
        atributos.dinheiro = atributos.dinheiro + 2;
      } else if (decisao == 2) {
        atributos.dinheiro = atributos.dinheiro - 3;

        atributos.populacao = atributos.populacao + 2;
      }
    }
    if (ale == 2) {
      //Terceira pergunta

      if (decisao == 1) {
        auxguer = 4;
        atributos.populacao = atributos.populacao - 1;
        atributos.dinheiro = atributos.dinheiro + 4;
      } else if (decisao == 2) {
        atributos.dinheiro = atributos.dinheiro - 4;
        atributos.populacao = atributos.populacao + 1;
      }
    }
  },
  function pergsexe(decisao) {
    //Perguntas que afetarão o exercito
    let pergsexe = [
      `General- Vossa alteza, precisamos reforçar as fronteiras para evitar um futuro ataque.\n[1] Reforçaremos nossas defesas.\n[2] Não acredito que seja necessário.`,
      `General- Senhor, nossos soldados estão começando a questionar seu governo e acreditam que sua majestade não os valoriza, vamos dar mais poder a eles.\n[1] Dê mais liberdade a eles.\n[2] Reclamam de barriga cheia!`,
      `General- Meu senhor, o reino do sul mandou uma ameaça para nossas defesas! Vamos devolver na mesma moeda.\n[1] Envie nossas tropas.\n[2] Temos outros problemas para nos preocupar.`,
    ];
    let ale = Math.trunc(Math.random() * 3);
    console.log(pergsexe[ale]);
    decisao = +prompt(":");
    decisao = atributos.verifica(decisao);

    if (ale == 0) {
      //Primeira pergunta

      if (decisao == 1) {
        atributos.exercito = atributos.exercito + 1;
        atributos.dinheiro = atributos.dinheiro - 2;
      } else if (decisao == 2) {
        defesa = defesa + 1;
        atributos.dinheiro = atributos.dinheiro + 2;
        atributos.exercito = atributos.exercito - 1;
      }
    }
    if (ale == 1) {
      //Segunda pergunta

      if (decisao == 1) {
        atributos.exercito = atributos.exercito + 2;
        atributos.populacao = atributos.populacao - 3;
      } else if (decisao == 2) {
        atributos.exercito = atributos.exercito - 2;
        atributos.populacao = atributos.populacao + 3;
      }
    }
    if (ale == 2) {
      //Terceira pergunta
      if (decisao == 1) {
        atributos.populacao = atributos.populacao + 2;
        atributos.exercito = atributos.exercito - 3;
      } else if (decisao == 2) {
        atributos.populacao = atributos.populacao - 4;
      }
    }
  },
  function perguntarelig(decisao) {
    //Perguntas que afetarão a população
    let pergsrelig = [
      `Pontífice- A população continua a cometer sacrilégios pela cidade! Vamos reassegurar as vontades de Deus para eles.\n[1] Faça o que deve ser feito.\n[2] Deixe-os fazerem o que querem. `,
      `Pontífice- Majestade! Ouvi boatos de que existe bruxaria dentro de alguns escalões do exercito! Sugiro que acabemos com esta praga de magia negra.\n[1] Loucura! Não existe coisa como tal.\n[2] Purifique meu exercito.`,
      `Pontífice- Vossa alteza, nossa vertente esta perdendo influência no reino, peço que nos auxilie monetariamente para a construção de mais igrejas. \n[1] Não há necessidade.\n[2] Lhe concedo minha ajuda.`,
    ];
    let ale = Math.trunc(Math.random() * 1);
    console.log(pergsrelig[ale]);
    decisao = +prompt(":");
    decisao = atributos.verifica(decisao);

    if (ale == 0) {
      //Primeira pergunta

      if (decisao == 1) {
        atributos.populacao = atributos.populacao - 4;
        atributos.religiao = atributos.religiao + 3;
      } else if (decisao == 2) {
        atributos.religiao = atributos.religiao - 3;
        atributos.populacao = atributos.populacao + 3;
      }
    }
    if (ale == 1) {
      //Segunda pergunta

      if (decisao == 1) {
        atributos.religiao = atributos.religiao - 3;
        atributos.exercito = atributos.exercito + 2;
      } else if (decisao == 2) {
        atributos.religiao = atributos.religiao + 2;

        atributos.exercito = atributos.exercito - 2;
      }
    }
    if (ale == 2) {
      //Terceira pergunta

      if (decisao == 1) {
        atributos.religiao = atributos.religiao - 2;
        atributos.dinheiro = atributos.dinheiro + 2;
      } else if (decisao == 2) {
        atributos.religiao = atributos.religiao + 2;
        atributos.dinheiro = atributos.dinheiro - 2;
      }
    }
  },
  function perguntadin(decisao) {
    //Perguntas que afetarão a população
    let pergsdin = [
      `Banqueiro- Meu senhor,prevejo que nossas reservas de ouro se enfraquecerão com nossas leis atuais, devemos aplicar mais rígidez a respeito dos impostos para todos.\n[1] Enrijeça as leis.\n[2] Temos dinheiro o suficiente. `,
      `Banqueiro- Majestade, os bancos não possuem força o suficiente. E nosso povo retém muito dinheiro. \n[1] Aumentaremos todas as taxas.\n[2] Não faremos nada no momento.`,
      `Banqueiro- Vossa alteza, o exército possui um contingente muito grande, boa parte dos soldados não fazem nada o dia todo e recebem por isso. Vamos reduzir a verba deles.\n[1] Concordo.\n[2] Deixe-os com o que tem.`,
    ];
    let ale = Math.trunc(Math.random() * 3);
    console.log(pergsdin[ale]);
    decisao = +prompt(":");
    decisao = atributos.verifica(decisao);

    if (ale == 0) {
      //Primeira pergunta

      if (decisao == 1) {
        atributos.dinheiro = atributos.dinheiro + 4;
        atributos.religiao = atributos.religiao - 3;
        atributos.populacao = atributos.populacao - 3;
        atributos.exercito = atributos.exercito - 3;
      } else if (decisao == 2) {
        atributos.dinheiro = atributos.dinheiro - 5;
      }
    }
    if (ale == 1) {
      //Segunda pergunta

      if (decisao == 1) {
        atributos.dinheiro = atributos.dinheiro + 3;
        atributos.populacao = atributos.populacao - 2;
      } else if (decisao == 2) {
        atributos.dinheiro = atributos.dinheiro - 4;

        atributos.populacao = atributos.populacao + 2;
      }
    }
    if (ale == 2) {
      //Terceira pergunta

      if (decisao == 1) {
        atributos.exercito = atributos.exercito - 3;
        atributos.dinheiro = atributos.dinheiro + 2;
      } else if (decisao == 2) {
        atributos.exercito = atributos.exercito + 3;
        atributos.dinheiro = atributos.dinheiro - 2;
      }
    }
  },
];

let jogo = 1; //Verificação caso o jogador queira continuar jogando após uma morte ou reiniciar o jogo do zero
let anosgov = 0; // Variavel que contem os anos governados pelo jogador antes de sua morte.
let tempo = 0; // Variavel que conterá os anos totais governados pelo jogador

console.log(
  'Alma penada: -"Olá meu jovem, então é você quem será o novo governante desta terra?"'
);
console.log("[1] O que??? Não!!\n[2] Uuum... Sim??");

decisoes = +prompt(":");
atributos.verifica(decisoes);

while (decisoes == 1) {
  console.log('Alma penada- "Haha, sim você é. Essa é sua maldição."');
  console.log(
    "[1] Sai fora! Ja falei que não!\n[2] TA BOM EU SOU, QUE CARA CHATO."
  );
  decisoes = +prompt(":");
  atributos.verifica(decisoes);
}

console.clear();

console.log(
  '"Alma  penada- Perfeito! Boas vindas novo governador(a)! A partir de agora deixo em suas mãos para que cuide de meu reino. Não deixe nenhum dos atributos do reino cairem muito e nem os valorize demais, a chave é o equilibrio. Reine por 50 anos totais e então lhe concederei minha permissão para sair desta maldição. Ah, uma dica, não se preocupe em não morrer viu, porquê vai acontecer." .O espirito então, desaparece lentamente.'
);
console.log("[1] ESPERA! COMO ASSIM????\n[2] Moio");
decisoes = +prompt(":");
atributos.verifica(decisoes);
console.log(
  'Você acorda. Depois de acordado, e de um sonho tão estranho e vivido, um pingo de duvida a respeito de sua sanidade se instala em sua mente. Algo está diferente, o quarto onde acordou é não é o seu! O ambiente é todo iluminado com janelas exageradamente grandes, as paredes são de blocos de pedra como as de um forte antigo e sua cama é tão grande que provavelmente caberia um cavalo. Logo em seguida de suas indagações de como raios você foi parar em um lugar tão estranho, a porta é aberta e uma senhorita caminha  em sua direção calmamente e diz: "Bom dia, majestade, os assuntos do reino o aguardam". '
);
console.log(
  "[1] O que esta acontecendo?? Quem é você??\n[2] Onde eu estou?? E por que cê ta me chamando de majestade??"
);

decisoes = +prompt(":");
atributos.verifica(decisoes);

console.log(
  'Conselheira - "Majestade, você está bem? Acredito que sua noite de sono tenha te afetado de alguma forma. Mas infelizmente temos que nos apressar, existem questões a tratar\n[1] Calma, espera!\n[2] Mas como assim? O que eu faço??.'
);

+prompt(":");
console.clear();
let continuar; //Continuar esta feio e horroso e horrendo rever para um jeito melhor.
let x;
jogo: while (jogo == 1) {

  if(tempo == 50){
    console.log('Alma penada- "Finalmente chegou em, credo."');
    console.log('[1] Ah você de novo não\n[2]Nem te conto como que foi pra chegar tão longe.');
  }
  if (defesa > 1) {
    console.log(
      "O reino do sul lança um ataque a suas fronteiras enfraquecidas!"
    );
    console.log(" ");
    auxguer = 4;
  }
  if (auxguer > 1) {
    aumenta = atributos.guerra(auxguer, aumenta);
    auxguer = auxguer - 1;
  }

  if (atributos.populacao < 1) {
    console.log("Majestade! Os aldeões estão invadindo o castelo!");
  }
  if (atributos.populacao > 15) {
    console.log("Majestade! O povo tomou conta do reino.");
  }
  if (atributos.dinheiro < 1) {
    console.log("Majestade, nosso reino faliu! Estamos condenados.");
  }
  if (atributos.dinheiro > 15) {
    console.log(
      "Meu senhor! O povo se rebe nos invadiram e saquearam todos nossas reservas! Estamos"
    );
  }
  if (atributos.exercito < 1) {
    console.log(
      "Majestade! Os reinos vizinhos estão nos invadindo, nosso exercito foi subjulgado."
    );
    if (atributos.exercito > 15) {
      console.log(
        "Meu senhor! O general lançou um batalhão para o castelo! Nos trairam vossa alteza!"
      );
    }
  }
  if (atributos.religiao < 1) {
    console.log("Majestade, os fiéis da igreja se rebelaram contra nós!");
  }
  if (atributos.religiao > 15) {
    console.log(
      "Meu senhor! A igreja exacerbou sua influência no povo. Perdemos nosso poder."
    );
  }
  if (
    atributos.religiao < 1 ||
    atributos.religiao > 15 ||
    atributos.dinheiro < 1 ||
    atributos.dinheiro > 15 ||
    atributos.exercito < 1 ||
    atributos.exercito > 15 ||
    atributos.populacao < 1 ||
    atributos.populacao > 15
  ) {
    console.log("[1] O que???\n[2] O que???");
    prompt(":");
    console.log(" ");
    x = 1;
    console.log("Deseja continuar sua jornada?\n[1] Sim.\n[2]Não");
    continuar = +prompt(":");
  }
  if (continuar == 1 && x == 1) {
    atributos.dinheiro = 10;
    atributos.exercito = 10;
    atributos.populacao = 10;
    atributos.religiao = 10;
    continuar = 0;
    x = 0;
    anosgov = 0;
    defesa = 0;
    console.log(
      "Você revive e retorna para sua maldição, não se esqueça de seu objetivo."
    );
    

    console.log(" ");
  } else if (continuar == 2 && x == 1) {
    jogo = 0;
    break;
  }
  anosgov++;
  tempo++;
  defesa--;
  console.log(
    `A situação do seu reino agora é : Populacão (${atributos.populacao}), Exército (${atributos.exercito}), Religião(${atributos.religiao}), Dinheiro(${atributos.dinheiro}). ${anosgov} anos no poder, ${tempo} anos totais governados em todas suas encarnações.`
  );
  console.log("");
  decisoes = 0;
  aleatorio = Math.floor(Math.random() * 4);
  perguntas[aleatorio](decisoes);
  console.clear();
  console.log(" ");
}
console.log("Você desistiu da sua jornada. Que decepção.");
