//User Model Class
export class User{
    
    public userName : string;
    public userEmail : string;
    
      constructor(userData : {}){
        console.log('User Model data is:' + userData);
        this.userName   = userData["name"];
        this.userEmail  = userData['email'];
        
      }
    
    }
    