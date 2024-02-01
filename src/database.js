import mongoose from "mongoose";

mongoose.connect(process.env.CONECTION_DB)
.then(db=>console.log('Database conected'))
.catch(err=>console.error(err))

export default mongoose