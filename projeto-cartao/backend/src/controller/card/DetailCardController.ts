import {Request,Response} from 'express'
import {DetailCardService} from "../../services/card/DetailcardService"

class DetailCardController {
async handle(req: Request,res:Response){
  const id_card = req.id_card;

 const detailCardService = new DetailCardService();
 const card = await detailCardService.execute(id_card);

     return res.json(card)

}

}

export {DetailCardController}