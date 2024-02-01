import { Router } from "express";

import { getAllBoletos, getOneBoleto, insertBoleto, updateBoleto } from "../controllers/boletoControllers.js";
const router=Router()


router.get('/getAll',getAllBoletos)
router.get('/getOne/:folio',getOneBoleto)
router.post('/insertBoleto',insertBoleto)
router.put('/updateBoleto/:folio',updateBoleto)




export default router