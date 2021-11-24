import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { DbCacheableModel } from './mongoDbLongTermCaching.types';

@Injectable()
export class MongoDbLongTermCachingService {
  //this will be used probably for the complex 90% cache checking shit
}
