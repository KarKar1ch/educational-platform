import { Injectable } from "@nestjs/common";
import {PrismaClient} from "@prisma/client"


@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources:{
                url:process.env.DATABASE_URL
            }
        })
    }
}