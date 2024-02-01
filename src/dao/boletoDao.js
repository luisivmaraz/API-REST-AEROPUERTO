import Boleto from '../models/boletoModels.js'  //Importa el objeto de models en "Boleto"

const C = console.log.bind(console.log)
const boletoDAO={}

//---------------------------------------------------------------------------

boletoDAO.getAll = async()=>{             //Extraer todos los boletos de la bd
    const boletos=await Boleto.find()
    return boletos
}


boletoDAO.getOne = async(folioboleto)=>{                 //extraer un boleto por su folio
    const boleto=await Boleto.findOne({folio:folioboleto})
    return boleto
}



boletoDAO.insertBoleto=async(boleto)=>{                      //Insertar bolero 
       const nuevoBoleto=new Boleto(boleto)
       await nuevoBoleto.save()
       return true
}



boletoDAO.updateBoleto=async(folioboleto,boleto)=>{        // Actualizar boleto
        const boletoActualizado=await Boleto.findOneAndUpdate({folio:folioboleto}, boleto )
        if(boletoActualizado!=null){
            return true
        }else{
            return false
        }
    
}









export default boletoDAO;
