import { Controller, Get } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
        @Get()
        async index(){
            return "Quiz Controller";
        }
    
}
