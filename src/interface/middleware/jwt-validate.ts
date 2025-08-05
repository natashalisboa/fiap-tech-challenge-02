import { FastifyReply, FastifyRequest } from "fastify";

export async function jwtValidate(request: FastifyRequest, reply: FastifyReply){
try{

    const routeFreeList = ['POST-/usuario', 'POST-/usuario/signin'];
    const validateRoute = `${request.method}-${request.routeOptions.url}`;

    if(routeFreeList.includes(validateRoute)) return;
    
    await request.jwtVerify();

} catch (error){
    reply.status(401).send({message: 'unauthorized'});
}

} 
