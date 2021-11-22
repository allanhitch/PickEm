import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoDbScheduleService {
  getHello(): string {
    return 'Hello World!';
  }
}
