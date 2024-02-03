import boletoDAO from '../dao/boletoDao.js';
const C = console.log.bind(console.log)

export const getAllBoletos=(req,res)=>{   //Extraer todos los boletos 
    boletoDAO.getAll()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>console.error(err))
};

export const getOneBoleto=(req,res)=>{    //Extraer solo un boleto por clave
    boletoDAO.getOne(req.params.clave)
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
        console.error(err);
        res.json({
            status:"Server unavailable"
        })
    })  
}


export const updateBoleto = (req,res) =>{                         //actualizar boleto
    boletoDAO.updateBoleto(req.params.clave,req.body)
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
    boletoDAO.deleteBoleto(req.params.clave)
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







export const boletoMasCaro = (req, res) => { // Obtener el boleto más caro
    boletoDAO.getAll()
        .then(result => {
            result.sort((a, b) => b.costo - a.costo);
            const boletoMasCaro = result.slice(0, 1); 
            res.json(boletoMasCaro);
        })
        .catch(err=>{
            res.json({
                status:"Server unavailable"
            })
        })
}

export const costoTotal = (req, res) => {                       //suma total de los boletos
    boletoDAO.getAll()
        .then(result => {
            const resultado = result.reduce((total, boleto) => total + boleto.costo + boleto.tua,0);
            res.json({ resultado });
        })
        .catch(err=>{
            res.json({
                status:"Server unavailable"
            })
        })
}