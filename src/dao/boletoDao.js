import Boleto from '../models/boletoModels.js'

const C = console.log.bind(console.log)
const boletoDAO={}


boletoDAO.getAll = async()=>{             //Extraer todos los boletos de la bd
    const boletos=await Boleto.find()
    return boletos
}


boletoDAO.getOne = async(claveboleto)=>{                 //extraer un boleto por su folio
    const boleto=await Boleto.findOne({clave:claveboleto})
    return boleto
}


boletoDAO.insertBoleto=async(boleto)=>{                      //Insertar bolero 
       const nuevoBoleto=new Boleto(boleto)
       await nuevoBoleto.save()
       return true
}


boletoDAO.updateBoleto=async(claveboleto,boleto)=>{        // Actualizar boleto
        const boletoActualizado=await Boleto.findOneAndUpdate({clave:claveboleto}, boleto )
        if(boletoActualizado!=null){
            return true
        }else{
            return false
        }
    
}

boletoDAO.deleteBoleto=async(claveboleto)=>{                       //borra4r boleto
    const boletoBorrado=await Boleto.findOneAndDelete({clave:claveboleto})
    if(boletoBorrado!=null){
        return true
    }else{
        return false
    }
}

export default boletoDAO;
