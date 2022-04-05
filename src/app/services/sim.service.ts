import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { Sim } from '../sim';
import { SIMS } from '../sims';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';

interface SearchResult {
  sims: Sim[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
}

function matches(sim: Sim, term: string, pipe: PipeTransform) {
  return (
    sim.iccid.includes(term) ||
    pipe.transform(sim.imsi).includes(term) ||
    pipe.transform(sim.batchId).includes(term)
  );
}

@Injectable({ providedIn: 'root' })
export class SimService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _sims$ = new BehaviorSubject<Sim[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
  };

  constructor(private pipe: DecimalPipe) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => this._search()),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._sims$.next(result.sims);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get sims$() {
    return this._sims$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { pageSize, page, searchTerm } = this._state;

    let sims = SIMS;

    // 1. filter
    sims = sims.filter((sim) => matches(sim, searchTerm, this.pipe));
    const total = sims.length;

    // 2. paginate
    sims = sims.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ sims, total });
  }
}
