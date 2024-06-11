import ParafusoModel from "../Models/ParafusoModel.js";

class ParafusoController{
    constructor(){
        this.parafusos = [
            {nome:"sextavado"},
            {nome:"francês"},
            {nome:"máquina"}
        ];
    }
    create(req,res){
        const nome = req.body.nome;
       ParafusoModel.create(nome);
        res.status(201).json("Parafuso Criado");
    }

    read(req,res){
        
        res.status(200).json(ParafusoModel.read());
    }
    update(req,res){
        const index = req.params.index;
        const nome = req.body.nome;

        ParafusoModel.update(index,nome);

        res.status(200).json("Parafuso Atualizado")
    }
    delete(req,res){
        const index = req.params.index;

        ParafusoModel.delete(index);

        res.status(200).json("Deletado");
    }
}
export default new ParafusoController();