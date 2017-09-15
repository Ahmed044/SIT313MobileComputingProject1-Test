import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//Security
import {Md5} from 'ts-md5/dist/md5';

/*
  Generated class for the SecurityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SecurityProvider {

  constructor(public http: Http) {
    console.log('Hello SecurityProvider Provider');
  }

  //MD5 Hashing
  gethasString(input){

    return Md5.hashStr(input)

  }

}
