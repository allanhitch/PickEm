import {  Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios';
import { map } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EventService {
  @InjectModel('Event') private readonly eventModel: Model<Event>
  constructor(private httpService: HttpService) {}
  
 getAllNflEventsBySeason(seasonYear: number)  {
    const allEvents = this.httpService.get(`https://www.thesportsdb.com/api/v1/json/40130162/eventsseason.php?id=4391&s=${seasonYear}`);
    return allEvents.pipe(
      map((axiosResponse: AxiosResponse) => {
        //map all the events to the event model somehow
        return axiosResponse.data.map((data) => data);
      })
    );
  }
}
