import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const GetCurrentUser = createParamDecorator(
    (data:string | undefined,context:ExecutionContext)=>{
        const request = context.switchToHttp().getRequest();
        if(!data)return request.user
        console.log('User Email: ',request.user[data])
        return request.user[data];
    }
)