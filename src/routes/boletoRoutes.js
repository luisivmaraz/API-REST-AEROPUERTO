import { Router } from "express";

import { boletoMasCaro, costoTotal, deleteBoleto, getAllBoletos, getOneBoleto, insertBoleto, updateBoleto } from "../controllers/boletoControllers.js";
const router=Router()


router.get('/getAll',getAllBoletos)
router.get('/getOne/:clave',getOneBoleto)
router.post('/insertBoleto',insertBoleto)
router.put('/updateBoleto/:clave',updateBoleto)
router.delete('/deleteBoleto/:clave', deleteBoleto)
router.get('/boletoMasCaro',boletoMasCaro)
router.get('/costoTotal', costoTotal)




export default router