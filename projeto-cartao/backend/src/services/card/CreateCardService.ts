

import prismaClient from "../../prisma";



interface UserRequest{
    numero:string;
    codigo:string;
    senha:string;
    id_usuario: string;
    
}


class CreateCardService{
    async execute({numero,codigo,senha,id_usuario}:UserRequest){
        if(!numero){
            throw new Error("Numero do cartao nao enviado");
        }

        const UserAlreadyExist = await prismaClient.cartao.findFirst({
            where:{
                numero : numero
            }
        })

        if(UserAlreadyExist){
            throw new Error("Cartao ja cadastrado");
        }

        const id = await prismaClient.usuario.findFirst({
            where:{
                id:id_usuario
            }
        })

        if(!id){
            throw new Error("Usuario não cadastrado");
        }
        
        
        const user = await prismaClient.cartao.create({
            data:{
                numero:numero,
                codigo:codigo,
                senha:senha,
                id_usuario:id_usuario
                
                
                

            },
            select:{
                id:true,
                numero:true,
                codigo:true
            }
        })
        return user;
    }
}

export {CreateCardService}