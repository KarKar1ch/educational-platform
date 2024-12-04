import { Controller, Get } from "@nestjs/common";
import { Response } from "@nestjs/common";

@Controller('catalog')
export class CatalogController{
    @Get('teachers')
    async getTeachers(@Response() res){
        const teachers = ["Percival","Anderson","Garcia","Mark","Lewis","Cooper"];
        res.send(teachers);
    }
    @Get('topics')
    async getTopics(@Response() res){
        const topics = ["Physic","Math","C++","Chemistry","AI technology","JavaScript","Biology","Python","History"];
        res.send(topics)
    }
}