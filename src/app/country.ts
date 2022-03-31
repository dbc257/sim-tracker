export interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}

export interface Sim {
  id: number;
  // name: string;
  iccid: string;
  imsi: string;
  // count: string;
  isActive: boolean;
  batchId: number;
  // createdAt: string;
  // updatedAt: string;
}
