import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'wow-wow';
  }

  public intoduce(): string {
    return 'Hi my name is Rex';
  }
}
