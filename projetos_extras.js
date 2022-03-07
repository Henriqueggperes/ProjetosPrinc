const prompt = require("prompt-sync")();
let pessoavoto = 'sim';
function autorizaVoto(anoNascimento) {
  let x;
  let idade = 2022 - anoNascimento;
  if (idade < 16) {
    console.log("Voto Negado");
    return 0;
  }
  if (idade > 15 && idade < 18) {
    console.log("Voto Opicional\n");
    console.log('Deseja votar?(Escolha "1" para sim e "0" para não) : ');
    x = +prompt(": ");
    if (x == 1) {
      return 1;
    } else {
      return 0;
    }
  }
  if (idade > 17) {
    console.log("Voto Obrigatório");
    return 1;
  }
}
let opcoes = {
  candidatos: [0 /*candiato1*/, 0 /*candiato2*/, 0 /*candiato3*/],
  votonulo: 0,
  votobranco: 0,
  votacao: function (autorizacao, voto) {
    if (autorizacao == 0) {
      console.log("Você não pode votar");
    }
    if (autorizacao == 1) {
      console.log(
        "Escolha sua opção de voto:\n [1] Candidato 1.\n[2] Candidato 2.\n[3] Candidato 3.\n[4] Voto nulo. \n[5] Voto em branco."
      );
      voto = +prompt(":");
      if (voto == 1) {
        this.candidatos[0]++;
      }
      if (voto == 2) {
        this.candidatos[1]++;
      }
      if (voto == 3) {
        this.candidatos[2]++;
      }
      if (voto == 4) {
        this.votonulo++;
      }
      if (voto == 5) {
        this.votobranco++;
      }
    }
  },
  exibirResultados: function () {
    let maior = 0;
    for (let i = 0; i < 3; i++) {
      console.log(`O candidato ${[i + 1]} tem  ${this.candidatos[i]} votos.`);
    }
    console.log(
      `A votação teve ${this.votonulo} votos nulos e ${this.votobranco} votos em branco.`
    );
    for (i = 0; i < 3; i++) {
      if (maior < this.candidatos[i]) {
        maior = this.candidatos[i];
      }
    }
    for (i = 0; i < 3; i++) {
      if (maior == this.candidatos[i]) {
        console.log(
          `O candidato vencedor foi o candidato ${i+1} com ${this.candidatos[i]} votos.`
        );
      }
    }
  },
};
while (pessoavoto == "sim") {
 let condicional;
 let y = autorizaVoto(+prompt("Digite o seu ano de nascimento: "));
  opcoes.votacao(y);
 condicional = prompt('Há mais alguem para votar?: ');
 if(condicional!="sim"){
   pessoavoto = 'nao';
 }
}
opcoes.exibirResultados();

