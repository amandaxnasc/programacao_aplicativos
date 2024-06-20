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