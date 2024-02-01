import { Router } from "express";

import { costoTotal, deleteBoleto, getAllBoletos, getOneBoleto, insertBoleto, menorAmayor, updateBoleto } from "../controllers/boletoControllers.js";
const router=Router()


router.get('/getAll',getAllBoletos)
router.get('/getOne/:folio',getOneBoleto)
router.post('/insertBoleto',insertBoleto)
router.put('/updateBoleto/:folio',updateBoleto)
router.delete('/deleteBoleto/:folio', deleteBoleto)
router.get('/menorAmayor',menorAmayor)
router.get('/costoTotal', costoTotal)




export default router