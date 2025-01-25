export interface IMetric {
  currency: string;
  money: number;
  cars: number;
}



export interface IMetricResponse {
  data: IMetric;
  meta: {
  };
}
