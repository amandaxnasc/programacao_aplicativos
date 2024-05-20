//Começando projeto novo
 git init 

//como clonar um repositorio
 git clone https://github.com/amandaxnasc/programacao_aplicativos.git

//Configurando
 git config user.email "amanda.x.nascimento@aluno.senai.br"
 git config user.name "Amanda Xavier"

 //Selecioando a brench
 git branch -M main
 git remote add origin https://github.com/amandaxnasc/programacao_aplicativos.git

//Adiconando arquivos
  git add . 
  
//Colocando comentario do commit "commitar"
  git commit -m "O que foi realizado"

//Subindo alterações
  git push -u origin main