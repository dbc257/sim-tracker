// import { Injectable, OnInit } from '@angular/core';
import { Country, Sim } from './country';
// import { CRUDService } from './services/crud.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class SimsComponent implements OnInit {
//   SIMS?: Sim[];
//   // currentTutorial: Tutorial = {};
//   // currentIndex = -1;
//   // title = '';

//   constructor(private crudService: CRUDService) {}

//   ngOnInit(): void {
//     this.retrieveTutorials();
//   }

//   retrieveTutorials(): void {
//     this.crudService.getAll().subscribe({
//       next: (data) => {
//         // const SIMS = data;
//         this.SIMS = data;
//         console.log(data);
//       },
//       error: (e) => console.error(e),
//     });
//   }
// }

// export const SIMS: Sim[] = this.crudService.getAll().subscribe({
//   next: (data) => {
//     // const SIMS = data;
//     this.SIMS = data;
//     console.log(data);
//   },
//   error: (e) => console.error(e),
// });

export const SIMS: Sim[] = [
  {
    id: 1,
    iccid: '89520400007800343331',
    imsi: '334140000000229',
    isActive: true,
    batchId: 1,
  },
  {
    id: 2,
    iccid: '89520400007800343342',
    imsi: '334140000000230',
    isActive: true,
    batchId: 1,
  },
  {
    id: 3,
    iccid: '89520400007800343353',
    imsi: '334140000000231',
    isActive: true,
    batchId: 1,
  },
  {
    id: 4,
    iccid: '89520400007800343364',
    imsi: '334140000000232',
    isActive: true,
    batchId: 1,
  },
  {
    id: 5,
    iccid: '89520400007800343375',
    imsi: '334140000000233',
    isActive: true,
    batchId: 1,
  },
  {
    id: 6,
    iccid: '89520400007800343386',
    imsi: '334140000000234',
    isActive: true,
    batchId: 1,
  },
  {
    id: 7,
    iccid: '89520400007800343397',
    imsi: '334140000000235',
    isActive: true,
    batchId: 1,
  },
  {
    id: 8,
    iccid: '89520400007800343400',
    imsi: '334140000000236',
    isActive: true,
    batchId: 1,
  },
  {
    id: 9,
    iccid: '89520400007800343411',
    imsi: '334140000000237',
    isActive: true,
    batchId: 1,
  },
  {
    id: 10,
    iccid: '89520400007800343422',
    imsi: '334140000000238',
    isActive: true,
    batchId: 1,
  },
  {
    id: 11,
    iccid: '89520400007800343423',
    imsi: '334140000000239',
    isActive: true,
    batchId: 2,
  },
];

export const COUNTRIES: Country[] = [
  {
    id: 1,
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
  },
  {
    id: 2,
    name: 'France',
    flag: 'c/c3/Flag_of_France.svg',
    area: 640679,
    population: 64979548,
  },
  {
    id: 3,
    name: 'Germany',
    flag: 'b/ba/Flag_of_Germany.svg',
    area: 357114,
    population: 82114224,
  },
  {
    id: 4,
    name: 'Portugal',
    flag: '5/5c/Flag_of_Portugal.svg',
    area: 92090,
    population: 10329506,
  },
  {
    id: 5,
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199,
  },
  {
    id: 6,
    name: 'Vietnam',
    flag: '2/21/Flag_of_Vietnam.svg',
    area: 331212,
    population: 95540800,
  },
  {
    id: 7,
    name: 'Brazil',
    flag: '0/05/Flag_of_Brazil.svg',
    area: 8515767,
    population: 209288278,
  },
  {
    id: 8,
    name: 'Mexico',
    flag: 'f/fc/Flag_of_Mexico.svg',
    area: 1964375,
    population: 129163276,
  },
  {
    id: 9,
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463,
  },
  {
    id: 10,
    name: 'India',
    flag: '4/41/Flag_of_India.svg',
    area: 3287263,
    population: 1324171354,
  },
  {
    id: 11,
    name: 'Indonesia',
    flag: '9/9f/Flag_of_Indonesia.svg',
    area: 1910931,
    population: 263991379,
  },
  {
    id: 12,
    name: 'Tuvalu',
    flag: '3/38/Flag_of_Tuvalu.svg',
    area: 26,
    population: 11097,
  },
  {
    id: 13,
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397,
  },
];

// [
//   {
//     id: 1,
//     name: 'Batch 1',
//     iccid: 12345678901234567890,
//     imsi: 123456789012345,
//     count: 25,
//     active: true,
//   },
//   {
//     id: 2,
//     name: 'Batch 2',
//     iccid: 12345678901234567891,
//     imsi: 123456789012346,
//     count: 25,
//     active: false,
//   },
// ];
