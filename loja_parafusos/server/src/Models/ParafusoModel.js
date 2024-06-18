import mysql from "mysql2"
import config from "../Config.js";

class ParafusoModel {
    constructor() {
        this.conexao = mysql.createConnection(config.db);
    }
    create(nome) {
        let sql = `insert into parafusos (nome) values("${nome}");`;

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject([400, erro])
                }
                resolve([201, "Parafuso Adicionado!"])
            })
        });
    }
    read() {
        let sql = `SELECT * FROM parafusos;`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro, retorno)=>{
                if (erro){
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        });

    }
    update(id_parafuso, nome){
        let sql = `UPDATE parafusos SET nome="${nome}" WHERE id_parafuso="${id_parafuso}"`
        
        return new Promise((resolve, reject)=>{
            this.conexao.query(sql, (erro, retorno)=>{
                if (erro) {
                    reject([400, erro])
                }else if(retorno.affectedRows>0){
                resolve([200, "Parafuso Atualizado"])
                }else{
                    resolve([404,"Parafuso não encontrado!"])
                }
            })

        });
    }

    delete(id_parafuso){
        let sql = `DELETE FROM parafusos WHERE id_parafuso="${id_parafuso}"`

        return new Promise ((resolve, reject)=>{
            this.conexao.query(sql,(erro, retorno)=>{
                if(erro){
                    reject([400, erro])
                }else if (retorno.affectedRows>0){
                    resolve([200, "Parafuso deletado"])
                }else{
                    resolve([404, "Parafuso não deletado"])
                }
                
            })
        });
    }
}

export default new ParafusoModel();