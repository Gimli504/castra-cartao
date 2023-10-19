import prismaClient from "../../prisma";

class DetailCardService {
 async execute(id_card:string){
      
const card = await prismaClient.cartao.findFirst({
         where:{
           id_usuario : id_card
        },
        select:{
          numero:true,
          codigo:true,
          senha:true,
          id_usuario:true,
        }
    })
     return card;
}
}

export {DetailCardService}