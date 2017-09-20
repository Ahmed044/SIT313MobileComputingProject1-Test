import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//storage service
import { StorageProvider } from '../storage/storage';
//securoty provider to encrypt password
import { SecurityProvider } from '../security/security';

//user model
import { User } from '../../Model/User.model';

/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NetworkProvider {

  networkBaseURL = 'http://introtoapps.com/datastore.php?'
  user_id = '212084899'
  user_prefix = 'user-'
  forums_list_id = 'forumlist'

  constructor(public http: Http, public storageProvider : StorageProvider, public securityProvider : SecurityProvider) {
    console.log('Hello NetworkProvider Provider');
  }

  callUserLoginApi(input){

    return new Promise( (resolve, reject) => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      let url = this.networkBaseURL + "action=load&appid=" + this.user_id + '&objectid=' + this.user_prefix + input.username
      console.log(url)
  
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
  
          console.log('Data is :');
          console.log(data);
              //Sign In Successfull
              let dataDictionary : {string : any} = data;
              console.log('dataDictionary');
              console.log(dataDictionary);
              this.storageProvider.saveUser(new User(dataDictionary))
              resolve(dataDictionary)

        },(error) => {
          //error login
          console.log('user not found');
          reject('login failed, user not found');
        });

    });


  }

  //user signup
  callUserSignupApi(input){

    //Encrypt user password befor api call
    input.password = this.securityProvider.gethasString(input.password)

        return new Promise( (resolve, reject) => {
          // We're using Angular HTTP provider to request the data,
          // then on the response, it'll map the JSON data to a parsed JS object.
          // Next, we process the data and resolve the promise with the new data.
          let url = this.networkBaseURL + "action=save&appid=" + this.user_id + '&objectid=' + this.user_prefix + input.username + '&data=' + JSON.stringify(input)
          console.log(url)
      
          this.http.get(url)
            .subscribe(data => {
      
              console.log('Data is :');
              console.log(data);
      
              if (data.ok){
                  //SignUp Successfull
                  
                  console.log('signup success');
                  this.storageProvider.saveUser(new User(input))
                  resolve('ok')
                }else{
                  reject('signup failed, user not found');
                }
      
            },(error) => {
              //error login
              
              reject('signup failed');
            });
    
        });
    
    
      }

    //get forums list
    callForumslistApi(){
      
          return new Promise( (resolve, reject) => {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            let url = this.networkBaseURL + "action=load&appid=" + this.user_id + '&objectid=' + this.forums_list_id
            console.log(url)
        
            this.http.get(url)
            .map(res => res.json())
              .subscribe(data => {
        
                console.log('Data is :');
                console.log(data);
        
                let forumslist : {string : any} = data;    
                console.log('forumslist');
                resolve(forumslist)    
        
              },(error) => {
                
                reject('failed');
              });
      
          });
      
      
        }

}
