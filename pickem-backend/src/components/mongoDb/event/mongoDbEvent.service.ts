import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoDbEventService {
  getHello(): string {
    return 'Hello World!';
  }
}
