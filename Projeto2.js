const prompt = require("prompt-sync")();
console.log(`Bem vindo a uma partida amistosa de Jokenpô! Só que um pouquinho diferente.
            No caso,ao invés de Pedra, Papel e Tesoura nós temos Arma, Faca ou Porradão. As regras de o quais opções tem
            vantagem ou desvantagem sobre as outras são : Arma vence de Faca e perde para Porradão (Convenhamos se 
            o Bruce Lee trombasse com um cara armado, o cara sairia igual uma folha de papel ), Faca vence de Porradão
            (Pera la não me critíca não, poxa faca machuca, imagina se pega no olho) e perde para Arma e por fim Porradão 
            vence de Arma e perde para Faca (Ja expliquei o porquê em cima, nem vem). Essas são as regras, bom não é um jogo 
            tão amistoso assim, é melhor ganhar, caso não, bom, acho que você vai pra sua proxima encarnação. Boa sorte!!`);
console.log(`NOTA: Para escolher entre Arma,Faca e Porradão , escolha o número que representa cada uma das opções
sendo respectivamente 0, 1 e 2.`);
let escolhas = ["Arma","Faca","Porradão"];
let escolhap ;
let pontosj = 0;
let pontospc = 0;
let i; 
let aleatoriopc = Math.random()*3;
let jogo = 'sim' 
aleatoriopc = Math.trunc(aleatoriopc);

while(jogo=='sim')
{
   let rodadas = +prompt('Digite um número IMPAR de rodadas : ');
      while(rodadas%2==0)
      {
        rodadas = +prompt('Por favor, digite um número IMPAR de rodadas : '); 
      }
      for(i= 0; i<rodadas;i++)
      { escolhap = +prompt(`Escolha sua jogada:`);
         
            while(escolhap !=0 && escolhap != 1 && escolhap != 2)
            {
                  
                  escolhap = +prompt(`Digite uma escolha válida :`);
            }
         

            while (aleatoriopc==escolhap)
            {
                     console.log(`Houve um empate! Você escolheu ${escolhas[escolhap]} e o computador escolheu igual.`);
                     escolhap = +prompt('Escolha sua jogada novamente: ');
                  
                     aleatoriopc = Math.random()*2;
                     aleatoriopc = Math.trunc(aleatoriopc);
                     console.clear();
            }
            
            if(escolhap==0)
            {   
                     if(aleatoriopc==1)
                     {
                           console.log('Você venceu esta rodada!');
                           pontosj = pontosj+1;

                     } 
                     else
                     {
                        console.log('Você foi espancado');
                        pontospc = pontospc + 1;
                     }
            }
            
            
            if(escolhap==1)
            {   
                     if(aleatoriopc==2)
                     {
                           console.log('Você venceu esta rodada!');
                           pontosj = pontosj+1;
                     } 
                     else
                     {
                        console.log('Você foi furado');
                        pontospc = pontospc + 1;
                     }
            }    
            if(escolhap==2)
            {   
                     if(aleatoriopc==0)
                     {
                           console.log('Você venceu esta rodada!');
                           pontosj = pontosj+1;
                     } 
                     else
                     {
                        console.log('Voce foi esfaqueado.');
                        pontospc = pontospc + 1;
                     }
            }
            console.log(`Você escolheu ${escolhas[escolhap]} `); 

            console.log(`E o computador escolheu ${escolhas[aleatoriopc]}`);
               
      }
          if(rodadas== i && pontosj > pontospc)
          {
              console.log('Você venceu o jogo!');
          } 
          else
          {
             console.log('Você perdeu o jogo.');
          } 

    jogo = prompt('Gostaria de jogar novamente?: ');     
    jogo = jogo.toLowerCase();
    console.clear();
}     

