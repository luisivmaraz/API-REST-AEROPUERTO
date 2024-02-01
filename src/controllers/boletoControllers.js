import boletoDAO from '../dao/boletoDao.js';

const C = console.log.bind(console.log)



export const getAllBoletos=(req,res)=>{   //Extraer todos los boletos 
    boletoDAO.getAll()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>console.error(err))
};




export const getOneBoleto=(req,res)=>{    //Extraer solo un boleto por folio
    boletoDAO.getOne(req.params.folio)
    .then(result=>{ 
        if(result!=null){
        res.json(result)
        }else{
            res.json({
                status:"No existe el boleto"
            })
        }
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}


export const insertBoleto=(req,res)=>{         //Insertar boleto
    boletoDAO.insertBoleto(req.body)
    .then(result=>{
        if(result){
            res.json({
                status:"Boleto registrado"
            })
        }
    })
    .catch(err=>{
        res.json({
            status:"Server unavailable"
        })
    })  
}






export const updateBoleto = (req,res) =>{                         //actualizar boleto
    boletoDAO.updateBoleto(req.params.folio,req.body)
    .then(result=>{
        if(result){
            res.json({
                status:"Boleto Actualizado"
            })
        }
    })
    .catch(err=>{
        res.json({
            status:"Server unavailable"
        })
    })
}



export const deleteBoleto = (req,res) =>{                         //borerar boleto
    boletoDAO.deleteBoleto(req.params.folio)
    .then(result=>{
        if(result){
            res.json({
                status:"Boleto eliminado"
            })
        }
    })
    .catch(err=>{
        res.json({
            status:"Server unavailable"
        })
    })
}



export const menorAmayor = (req,res) =>{                    //ordenar boleto
    boletoDAO.getAll()
    .then(result=>{
        result.sort((a, b) => a.costo - b.costo);
      res.json(result);
    })
    .catch(err=>console.error(err))
}




export const costoTotal = (req, res) => {                       //suma total de los boletos
    boletoDAO.getAll()
        .then(result => {
            const resultado = result.reduce((total, boleto) => total + boleto.costo,0);
            res.json({ resultado });
        })
        .catch(err => console.error(err));
}