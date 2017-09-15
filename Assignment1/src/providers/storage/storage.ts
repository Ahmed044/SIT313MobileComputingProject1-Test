import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


//Custom User Model
import { User } from '../../Model/User.model'
//storage
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StorageProvider {

  USER_KEY = "user"
  public user : User

  constructor(public http: Http, private storage: Storage) {
    console.log('Hello StorageProvider Provider');

  }

  saveUser(user : User){

    this.storage.set(JSON.stringify(user), this.USER_KEY);

  }

  //custom method for getting saved user
  getCurrentUser(){
    
    if (this.user){
      console.log("Without storage user found")
      return new Promise( (resolve) => {
    
      resolve(this.user)
    
    });
    
    }else{
      console.log("With storage user found")
        return this.storage.get(this.USER_KEY);
    }
    
    
  }

  //Delete user
  deleteCurrentUser(){
  
    this.storage.remove(this.USER_KEY);

  }

}
