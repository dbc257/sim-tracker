import { Component } from '@angular/core';
import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ConfigService],
  styles: ['.error { color: #b30000; }'],
})
export class ConfigComponent {
  error: any;
  headers: string[] = [];
  config: Config | undefined;
  result: any[] = [];

  constructor(private configService: ConfigService) {}

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = [];
  }

  showConfig() {
    this.configService.getConfig().subscribe({
      next: (data: Config) => (this.config = { ...data }), // success path
      // console.log('resp', this.config);
      error: (error) => (this.error = error), // error path
    });
  }

  showConfig_v1() {
    this.configService.getConfig_1().subscribe(
      (data: Config) =>
        (this.config = {
          heroesUrl: data.heroesUrl,
          textfile: data.textfile,
          date: data.date,
        })
    );
  }

  showConfig_v2() {
    this.configService
      .getConfig_2()
      // clone the data object, using its known Config shape
      // .subscribe((data: Config) => (this.config = { ...data }));
      .subscribe((result: any) => {
        const res = result[0];
        console.log('res: ', res);
        this.result = res.map((s: any) => `${s.iccid}`);
        console.log('r: ', this.result);
      });
    // .subscribe((result: any) => console.log(result[0]));

    // console.log(this.result);
  }

  // showConfig_v3() {
  //   this.configService
  //     .getConfig()
  //     // clone the data object, using its known Config shape
  //     .subscribe(
  //       (data) =>
  //         (this.config = {
  //           heroesUrl: (data as any).heroesUrl,
  //           textfile: (data as any).textfile,
  //         })
  //     );
  // }

  showConfigResponse() {
    this.configService
      .getConfigResponse()

      // resp is of type `HttpResponse<Config>`
      .subscribe((resp) => {
        // display its headers

        const keys = resp.headers.keys();
        console.log('k', keys);
        this.headers = keys.map((key) => `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ...resp.body! };
      });
  }
  makeError() {
    this.configService
      .makeIntentionalError()
      .subscribe({ error: (error) => (this.error = error.message) });
  }

  getType(val: any): string {
    return val instanceof Date
      ? 'date'
      : Array.isArray(val)
      ? 'array'
      : typeof val;
  }
}
