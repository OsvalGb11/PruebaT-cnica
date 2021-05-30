export interface ICountriesResponse {
  status: string;
  statuscode: number;
  version: number;
  total: number;
  limit: number;
  offset: number;
  access: string;
  data:ICountriesData[];
  }
  
  export interface ICountriesData {
    country: string;
    region: string;
  }