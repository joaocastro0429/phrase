import {Router} from 'express'
import * as  PharsesController from '../controllers/PharsesController'

const router=Router()

router.get("/frases",PharsesController.SearchPharses)
router.post("/frases",PharsesController.PhrasesCreate)
router.get("/frases/aleatoria",PharsesController.phraseRandom)
router.get("/frases/:id",PharsesController.SearchOne)
router.put("/frases/:id",PharsesController.phraseUpdate)
router.delete("/frases/:id",PharsesController.phraseDelete)






export default router


