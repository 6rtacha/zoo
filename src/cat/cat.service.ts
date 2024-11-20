import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'myeow';
  }

  public intoduce(): string {
    return 'Hi my name is Tom';
  }
}
