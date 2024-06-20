create database loja_parafusos;
use loja_parafusos;

create table parafusos(
id_parafuso int primary key auto_increment,
nome varchar(45)
);
-- --Inicinando o CRUD
-- --Insert é o create
insert into parafusos (nome) values
("estrela"),
("francês"),
("máquina")
;
-- select é read  
select * from parafusos;

---- update é update- 
update parafusos set nome="fenda" where id_parafuso=1;

-- delete é delete
delete from parafusos where id_parafuso=1;

SELECT * FROM parafusos;

Para entrar na pasta no TERMINAL!

cd loja_parafusos 
cd server (entrar no server)
 npx nodemon src /App.js

 links do insonmia

 
 CREAT : http://localhost:5000/parafusos TEM QUE ESTÁ NO JSON
 READ: http://localhost:5000/parafusos
 UPDATE: http://localhost:5000/parafusos/1 (OS NUMEROS SAO OS ID DO) TEM QUE ESTÁ NO JSON
 DELETE: http://localhost:5000/parafusos/3 TEM QUE ESTÁ NO JSON => O NUMERO REPRESENTA QUAL INDICE ESTÁ APAGANDO