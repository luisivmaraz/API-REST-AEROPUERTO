import { Schema,model } from "mongoose";

const boletoSchema = new Schema({
    folio:{
        type:String,
        unique:true,
        required:true
    },
    nombre:String,
    apellidos:String,
    aerolinea:String,
    equipaje_permitido:Number,
    origen:String,
    destino:String,
    costo:Number
},{
    timestamps:true,
    versionKey:false
}

)

export default model('boleto', boletoSchema);




