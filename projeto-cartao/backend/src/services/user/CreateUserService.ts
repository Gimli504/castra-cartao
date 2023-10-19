import prismaClient from "../../prisma";



interface UserRequest{
    nome:string;
    cpf:string;
}


class CreateUserService{
    async execute({nome,cpf}:UserRequest){
        if(!cpf){
            throw new Error("Cpf nao enviado");
        }

        const UserAlreadyExist = await prismaClient.usuario.findFirst({
            where:{
                cpf : cpf
            }
        })

        if(UserAlreadyExist){
            throw new Error("Cpf ja cadastrado");
        }

        const user = await prismaClient.usuario.create({
            data:{
                nome:nome,
                cpf:cpf
            },
            select:{
                id:true,
                nome:true,
                cpf:true
            }
        })
        return user;
    }
}

export {CreateUserService}