import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import { query, Request, Response } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }
  @Get('greet/:id')
  public intoduce(@Param() params: any, @Query() query: any): string {
    console.log('id:', params);
    console.log('query:', query);

    return this.dogService.intoduce();
  }
}
