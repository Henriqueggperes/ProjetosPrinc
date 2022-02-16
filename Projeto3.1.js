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
let maior = 0;
let finais = [0, 0, 0, 0, 0, 0, 0, 0];
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
      `Conselheira- Vossa alteza, tenho projetos para a mudança de distribuição de geral de ouro e alimentos, mas o General não permite que eu faça minhas pesquisas. Peço para que conceda-me uma autorização para que eu desenvolva os projetos. \n[1]Tem minha autorização.\n[2] O General sabe o que faz.  `,
    ];
    let ale = Math.floor(Math.random() * pergspop.length);
    console.log(pergspop[ale]);
    decisao = +prompt(":");
    decisao = atributos.verifica(decisao);

    if (ale == 0) {
      //Primeira pergunta

      if (decisao == 1) {
        atributos.populacao = atributos.populacao - 4;
        atributos.religiao = atributos.religiao + 3;
      } else if (decisao == 2) {
        atributos.dinheiro = atributos.dinheiro - 3;
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
    if (ale == 3) {
      //QUARTA PERGUNTA

      if (decisao == 1) {
        atributos.populacao = atributos.populacao + 3;
        atributos.dinheiro = atributos.dinheiro - 3;
        atributos.exercito = atributos.exercito - 3;
      } else if (decisao == 2) {
        atributos.dinheiro = atributos.dinheiro + 2;
        atributos.populacao = atributos.populacao - 2;
        atributos.exercito = atributos.exercito + 2;
      }
    }
  },
  function pergsexe(decisao) {
    //Perguntas que afetarão o exercito
    let pergsexe = [
      `General- Vossa alteza, precisamos reforçar as fronteiras para evitar um futuro ataque.\n[1] Reforçaremos nossas defesas.\n[2] Não acredito que seja necessário.`,
      `General- Senhor, nossos soldados estão começando a questionar seu governo e acreditam que sua majestade não os valoriza, vamos dar mais poder a eles.\n[1] Dê mais liberdade a eles.\n[2] Reclamam de barriga cheia!`,
      `General- Meu senhor, o reino do sul mandou uma ameaça para nossas defesas! Vamos devolver na mesma moeda.\n[1] Envie nossas tropas.\n[2] Temos outros problemas para nos preocupar.`,
      `General- Majestade, precisamos passar mais imponência para os reinos vizinhos, sugiro que efetue uma militarização de nossa população.\n[1] Que ultraje! Somos poderosos até de mais!\n[2] Militarize nossos aldeões.`,
    ];
    let ale = Math.floor(Math.random() * pergsexe.length);
    console.log(pergsexe[ale]);
    decisao = +prompt(":");
    decisao = atributos.verifica(decisao);

    if (ale == 0) {
      //Primeira pergunta

      if (decisao == 1) {
        atributos.exercito = atributos.exercito + 1;
        atributos.dinheiro = atributos.dinheiro - 3;
      } else if (decisao == 2) {
        defesa = defesa + 1;
        atributos.dinheiro = atributos.dinheiro + 2;
        atributos.exercito = atributos.exercito - 4;
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
    if (ale == 3) {
      //Quarta pergunta
      if (decisao == 1) {
        atributos.populacao = atributos.populacao - 3;
        atributos.exercito = atributos.exercito + 4;
        atributos.dinheiro = atributos.dinheiro + 2;
      } else if (decisao == 2) {
        atributos.populacao = atributos.populacao - 4;
        atributos.exercito = atributos.exercito + 3;
        atributos.dinheiro = atributos.dinheiro - 2;
      }
    }
  },
  function perguntarelig(decisao) {
    //Perguntas que afetarão a religiao
    let pergsrelig = [
      `Pontífice- A população continua a cometer sacrilégios pela cidade! Vamos reassegurar as vontades de Deus para eles.\n[1] Faça o que deve ser feito.\n[2] Deixe-os fazerem o que querem. `,
      `Pontífice- Majestade! Ouvi boatos de que existe bruxaria dentro dos altos escalões do exercito! Sei que pagam uma boa quantia de moedas mas sugiro que acabemos com esta praga de magia negra.\n[1] Loucura! Não existe coisa como tal.\n[2] Purifique meu exercito.`,
      `Pontífice- Vossa alteza, nossa vertente esta perdendo influência no reino, peço que nos auxilie monetariamente para a construção de mais igrejas. \n[1] Não há necessidade.\n[2] Lhe concedo minha ajuda.`,
      `Pontífice- Meu senhor, vamos mudar a cara de nosso reino! Sinto que não valorizamos Deus o suficiente. O que acha ?\n[1] Deus é valorizado o suficiente.\n[2] Vamos preparar as mudanças.`,
    ];
    let ale = Math.floor(Math.random() * pergsrelig.length);
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
        atributos.dinheiro = atributos.dinheiro - 3;
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
    if (ale == 3) {
      //Quarta pergunta

      if (decisao == 1) {
        atributos.exercito = atributos.exercito + 3;
        atributos.religiao = atributos.religiao - 3;
        atributos.dinheiro = atributos.dinheiro + 2;
      } else if (decisao == 2) {
        atributos.religiao = atributos.religiao + 5;
        atributos.dinheiro = atributos.dinheiro - 3;
        atributos.exercito = atributos.exercito - 3;
      }
    }
  },
  function perguntadin(decisao) {
    //Perguntas que afetarão o dinheiro
    let pergsdin = [
      `Banqueiro- Meu senhor,prevejo que nossas reservas de ouro se enfraquecerão com nossas leis atuais, devemos aplicar mais rígidez a respeito dos impostos para todos.\n[1] Enrijeça as leis.\n[2] Temos dinheiro o suficiente. `,
      `Banqueiro- Majestade, os bancos não possuem força o suficiente. E nosso povo retém muito dinheiro. \n[1] Aumentaremos todas as taxas.\n[2] Não faremos nada no momento.`,
      `Banqueiro- Vossa alteza, o exército possui um contingente muito grande, boa parte dos soldados não fazem nada o dia todo e recebem por isso. Vamos reduzir a verba deles.\n[1] Concordo.\n[2] Deixe-os com o que tem.`,
      `Banqueiro- Majestade, o exército está reprimindo de mais a igreja, e como sabe a igreja paga tributos muito valiosos para nós, peço que pare essas ações.\n [1] Falarei com o General.\n[2] Não precisamos desses tributos.`,
    ];
    let ale = Math.floor(Math.random() * pergsdin.length);
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
        atributos.populacao = atributos.populacao + 3;
        atributos.exercito = atributos.exercito - 3;
        atributos.dinheiro = atributos.dinheiro + 2;
      } else if (decisao == 2) {
        atributos.populacao = atributos.populacao - 2;
        atributos.exercito = atributos.exercito + 3;
        atributos.dinheiro = atributos.dinheiro - 2;
      }
    }
    if (ale == 3) {
      //Quarta pergunta

      if (decisao == 1) {
        atributos.religiao = atributos.religiao - 3;
        atributos.exercito = atributos.exercito + 4;
        atributos.dinheiro = atributos.dinheiro + 3;
      } else if (decisao == 2) {
        atributos.religiao = atributos.religiao + 2;
        atributos.exercito = atributos.exercito - 3;
        atributos.dinheiro = atributos.dinheiro - 4;
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
  'Você acorda. Depois de acordado, e de um sonho tão estranho e vivido, um pingo de duvida a respeito de sua sanidade se instala em sua mente. Algo está diferente, o quarto onde acordou não é o seu! O ambiente é todo iluminado com janelas exageradamente grandes, as paredes são de blocos de pedra como as de um forte antigo e sua cama é tão grande que provavelmente caberia um cavalo. Logo em seguida de suas indagações de como raios você foi parar em um lugar tão estranho, a porta é aberta por uma senhorita, que caminha  em sua direção calmamente e diz: "Bom dia, majestade, os assuntos do reino o aguardam". '
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
let a;
jogo: while (jogo == 1) {
  if (tempo == 10) {
    console.log('Alma penada- "Finalmente chegou em, credo."');
    console.log(
      "[1] Ah você de novo não\n[2]Nem te conto como que foi pra chegar tão longe."
    );
    +prompt(":");
    console.log(
      'Alma penada- "Bom, esse é seu destino final. Sua jornada foi longa, eu sei, mas tudo isso foi para que você levasse para o mundo real a arma mais poderosa que existe: O auto conhecimento. Suas todas suas decisões foram observadas por mim e com isso eu lhe dou o presente do auto conhecimento."'
    );
    for (let i = 0; i < finais.length; i++) {
      if (finais[i + 1] > maior) {
        maior = finais[i + 1];
      }
    }
    console.log(
      "[1] Autoconhecimento... Me diga mais.\n [2] Namoral que foi pra isso?"
    );
    prompt(":");
    if (
      maior == finais[0] &&
      maior == finais[1] &&
      maior == finais[2] &&
      maior == finais[3] &&
      maior == finais[4] &&
      maior == finais[5] &&
      maior == finais[6] &&
      maior == finais[7]
    ) {
      console.log(
        '"Você tem o equilibrio perfeito."\nTítulo - O(a) Ascendido(a)' 
      );
      break jogo;
    }
  
    if (maior == finais[0]) {
      console.log(
        '"Lhe falta empatia, antes de querer receber é necessário oferecer". Você morreu mais vezes por desvalorizar demais a população.\nTítulo - O(A) Mesquinho(a).'
      );
    }
    if (maior == finais[1]) {
      console.log(
        '"Sua bondade é enorme! Porém você se rebaixa muito querendo o melhor para os outros". Você morreu mais vezes por valorizar demais a população. Título -\nBom samaritano.'
      );
    }
    if (maior == finais[2]) {
      console.log(
        '"É de fato admirável o seu desapego a bens materiais, mas em um mundo onde o dinheiro movimenta a vida, sua pureza deve se esvair um pouco". Você morreu mais vezes por desvalorizar demais o dinheiro.\nTítulo - O(a) Puro(a)'
      );
    }
    if (maior == finais[3]) {
      console.log(
        '"Sua sede infinita por bens materiais chega a ser repugnante, com certeza é um traço a ser tratado". Você morreu mais vezes por valorizar de mais o dinheiro.\nTítulo - O(A) Ganâncioso(a)'
      );
    }
    if (maior == finais[4]) {
      console.log(
        '"Você tende a se sabotar e deixa suas defesas abertas quase sempre, valorize-se mais.". Você morreu mais vezes por desvalorizar demais o exército.\nTítulo - O(A) Autodestrutivo(a)'
      );
    }
    if (maior == finais[5]) {
      console.log(
        '"Sua confiança e orgulho em excesso lhe cegam e te atrasam, desempine um pouco seu nariz e verá quando os seus tapetes estão sendo puxados". Você morreu mais vezes por valorizar demais o exército.\nTítulo - O(a) Tirano'
      );
    }
    if (maior == finais[6]) {
      console.log(
        '"Você possui pouquissima confiança e sua falta de fé em si lhe assombra. Olhe para cima e veja seu futuro brilhante.". Você morreu mais vezes por desvalorizar demais a religião.\nTítulo - O(a) Herege'
      );
    }
    if (maior == finais[7]) {
      console.log(
        '"Sua fé extrema lhe aliena ao mundo exterior e isso faz com que você perca oportunidades de ouro, preste mais atenção ao seu redor e o mundo mudará rapidamente". Você morreu mais vezes por valorizar demais o a religião.\nTítulo - O(a) Convicto(a)'
      );
    }

    break jogo;

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
    console.log(
      "Conselheira- Majestade! Os aldeões estão invadindo o castelo!"
    );
    finais[0]++;
  }
  if (atributos.populacao > 15) {
    console.log("Conselheira- Majestade! O povo tomou conta do reino.");
    finais[1]++;
  }
  if (atributos.dinheiro < 1) {
    console.log(
      "Banqueiro- Majestade, estamos sem dinheiro! Estamos condenados."
    );
    finais[2]++;
  }
  if (atributos.dinheiro > 15) {
    console.log(
      "Banqueiro- Meu senhor! O reino está enfurecido por retermos tanta fortuna! Estão todos marchando em direção ao castelo."
    );
    finais[3]++;
  }
  if (atributos.exercito < 1) {
    console.log(
      "General- Majestade! Os reinos vizinhos estão nos invadindo, nosso exercito foi subjulgado."
    );
    finais[4]++;
    if (atributos.exercito > 15) {
      console.log(
        "Conselheira- Meu senhor! O general lançou um batalhão para o castelo! Nos trairam vossa alteza!"
      );
      finais[5]++;
    }
  }
  if (atributos.religiao < 1) {
    console.log(
      "Pontífice- Majestade, os fiéis da igreja se rebelaram contra nós!"
    );
    finais[6]++;
  }
  if (atributos.religiao > 15) {
    console.log(
      "Conselheira- Meu senhor! A igreja exacerbou sua influência no povo. Perdemos nosso poder."
    );
    finais[7]++;
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
    if (atributos.populacao < 1) {
      console.log(
        "Sua cabeça é cortada publicamente em uma praça, e seu nome é considerado um insulto por muito tempo."
      );
    }
    if (atributos.populacao > 15) {
      console.log(
        "O povo o destitui de seu poder, ninguém o toca, e você é exilado amado e respeitado por todos.Você morre por causas naturais futuramente."
      );
    }
    if (atributos.dinheiro < 1) {
      console.log(
        "Suas posses se reduziram muito, o suficiente para que nobres do reino tomassem conta de seu lugar. Você foi exilado e morreu por causas naturais futuramente."
      );
    }
    if (atributos.dinheiro > 15) {
      console.log(
        "Suas posses foram tão grandes que se tornou difícil controlar toda a fortuna, "
      );
    }
    if (atributos.exercito < 1) {
      console.log(
        "Seus soldados caem um por um e você em uma batalha árdua, é morto por um golpe covarde dos inimigos."
      );
      if (atributos.exercito > 15) {
        console.log(
          "O General senta-se em seu trono calmamete enquanto sua carne é dilacerada por cães fora do castelo. Seu reino se torna uma potência militar com sede de dominação."
        );
      }
    }
    if (atributos.religiao < 1) {
      console.log(
        "Seus atos pecaminosos levaram aos fiéis muita ira, e sua cabeça rola até os primeiros degraus de seu castelo."
      );
    }
    if (atributos.religiao > 15) {
      console.log(
        "Seu trono é usurpado pelo Pontífice e sua morte foi um símbolo de poder da igreja."
      );
    }
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
    console.log("Você desistiu da sua jornada. Que decepção.");
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
