import { Schema,model } from "mongoose";

const boletoSchema = new Schema({
    clave:{
        type:String,
        unique:true,
        required:true
    },
    nombre:String,
    apellido:String,
    aerolinea:String,
    equipaje_permitido:Number,
    origen:String,
    destino:String,
    costo:Number,
    tua: Number
},{
    timestamps:true,
    versionKey:false
}

)

export default model('boleto', boletoSchema);




