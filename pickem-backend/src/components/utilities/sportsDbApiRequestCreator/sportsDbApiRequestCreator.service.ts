import { Injectable } from '@nestjs/common';
import { sportsDbBaseUrlWithApiKey } from 'src/components/sportsDbApi/config/sportsDbApiConfig';
import { SportsDbApiUrlParams } from './sportsDbApiRequestCreator.types';

@Injectable()
export class SportsDbApiRequestCreatorService {
  createSportsDbApiRequestUrl(sportsDbApiEventsPath: string, params: SportsDbApiUrlParams[] ) {
    const requestSring = `${sportsDbBaseUrlWithApiKey()}${sportsDbApiEventsPath}?${this.parseParametersToString(params)}`;
    return requestSring;
  }

  private parseParametersToString(params: SportsDbApiUrlParams[]) : string {
    let parsedParamsString: string = "";

    params.forEach(param => {
      const parsedParameter = `${param.parameterName}=${param.value}${params.indexOf(param) < params.length - 1 ? "&" : ""}`;
      parsedParamsString += parsedParameter;
    })

    return parsedParamsString;
  }
}
