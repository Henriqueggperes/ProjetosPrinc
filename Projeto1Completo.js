const prompt = require("prompt-sync")();
let resp = [5];
let start; 
let x = 0;
let a;

console.log();

 console.log(`Ho ho, ao invés de fugir você esta se aproximando? Interessante. Aproxime-se o quanto quiser.
 Olá, aqui você irá controlar o futuro dos Joestars na batalha final do arco Stone Ocean da obra JoJo Bizarre Adventures.
 Neste pequeno jogo, serão feitas perguntas de sim ou não, que decidirão a batalha contra Pucci e seu  temível "stand" Made In Heaven.
 Lembre-se! Suas escolhas mudarão o desfecho da história. Divirta-se!`);

 console.log(`

`);
start = prompt('Pronto para começar?(Sim ou Nao):');
start = start.toLowerCase();
if(start == 'sim')
{

  
            
        for (let i=0; i<=4; i++){
          
                if(i==0)//Primeira pergunta.
                  {  
                    console.clear();
                      console.log(`A batalha começou! Jolyne Kujoh juntamente de Jotaro e sua equipe, estão em grande desvantagem.
                      Pucci, o padre maldito, alcançou a centelha necessária para despertar o poder imensurável de seu stand.
                      Vendo um momento de vulnerábilidade, um dos companheiros de Jolyne parte para um ataque direto. 
                      E é aqui que você começa a escrever o destino da familia Joestar (E talvez de todo o universo) com isso vem a pergunta:
                      O ataque desferido atinge Pucci? `);
                    
                  
                      
                  }
        
               if(i==1)//Segunda pergunta.
                  { 
                    console.clear();
                    console.log(`Depois do ataque, Pucci lança uma investida para cima dos Joestars. Jotaro com a maior velocidade que podia, salta para defender sua equipe.
                                E com a rapidez estrondosa do vilão, Jotaro se esforça para aguentar a investida. Jotaro aguenta a investida?`);
                    
                        

                  }
                if(i==2)//Terceira pergunta.
                  { 
                    console.clear();
                      console.log(`Ao verem o poder imensurável de seu oponente, uma sensação de terror assola  a equipe dos Joestars, porém Jolyne não se abala.
                      Algo estava diferente, Jolyne está focada! E de qualquer maneira quer acabar com essa luta. Em poucos segundos nossa protagonista bola
                      um plano para imobilizar Pucci com sua habilidade de corda e devolver ao vilão um ataque na mesma moeda. O plano de Jolyne funcionará?`);
                              console.log('')
                      
                            
                  
                    } 
                if(i==3)// Quarta pergunta.
                    {
                     console.clear();
                      console.log(`A luta passa a ser frenética, um show de ataques e contra ataques se estendem por horas.
                      Querendo finalizar a luta, Jotaro utiliza a sua habilidade de parar o tempo, mesmo sabendo da velocidade sem igual de seu oponente.
                       Jotaro tem sucesso em parar o tempo?`);
                      
                      

                     
                      }   
                if(i==4)//Quinta pergunta.
                {
                  console.clear();
                  
                  console.log(`Analisando suas chances, Pucci se acalma e decide recuar para uma luta com maiores vantagens e aprender a usar 100% do potencial de seu stand.
                  A equipe dos Joestars conseguem parar Pucci?`);
                  
                  
                }
               
                resp[i] = prompt('Digite sua resposta (Sim ou Nao):');
                
                resp[i] = resp[i].toLowerCase();

                
                if(resp[i] == 'sim')
                      {
                      x= x+1; 
                      
                      }
                
           } 
           
              if(x==0)
              {
                console.log('A derrota foi total,Pucci alcançou seu objetivo. Todos os Joestars foram eliminados');
              }
              if(x>0 && x<=2)
              {
              console.log('A derrota foi devastadora e apenas Jolyne sai viva da batalha');
              }
              if(x==3)
              {
                console.log('Os Joestar chgaram muito perto de derrotar Pucci, mas o vilão conseguiu reverter a situação posteriormente');
              }
              if(x==4)
              {
                console.log('A batalha foi vencida! Porém Jotaro acaba morrendo durante a batalha');
              }
              if(x==5)
              {
                console.log('A batalha foi dominada pelos Joestars! Não ouve nenhuma baixa na equipe.');
              }

}


else
{
  console.log('Beleza então meu consagrado, tenha um bom dia.');
}



