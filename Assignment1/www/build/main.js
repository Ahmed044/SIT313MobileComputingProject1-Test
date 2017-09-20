webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_network_network__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//

//custom network provider

//loader

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, networkProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.networkProvider = networkProvider;
        this.loadingCtrl = loadingCtrl;
        this.input = { "username": "", "password": "" };
    }
    //Page life cycle method
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    //Custom Navigation Methods
    LoginPage.prototype.navigateToSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    //login custom method
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.input.username.length < 1) {
            this.presentAlert('oops', 'username is empty');
            return;
        }
        else if (this.input.username.length > 0 && this.input.username.length < 6) {
            this.presentAlert('oops', 'username should not be less than 6 characters.');
            return;
        }
        else if (this.input.password.length < 1) {
            this.presentAlert('oops', 'password is empty');
            return;
        }
        else if (this.input.password.length > 0 && this.input.password.length < 6) {
            this.presentAlert('oops', 'password should not be less than 6 characters.');
            return;
        }
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.networkProvider.callUserLoginApi(this.input).then(function (data) {
            loading.dismiss();
            console.log('success');
            console.log('Login Data:');
            console.log(data);
            _this.navigateToHome();
        }, function (error) {
            console.log('error');
            loading.dismiss();
            _this.presentAlert('oops', 'user not found');
            // this.presentToast(error);//error is string,
        }), function () {
            loading.dismiss();
            _this.presentAlert('oops', 'user not found');
            console.log('error');
            console.log('failure');
        };
    };
    //home navigation
    LoginPage.prototype.navigateToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    //present alert
    LoginPage.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="background">\n	<ion-card>\n		<ion-card-header>\n			Login Form\n		</ion-card-header>\n		\n		<ion-card-content>\n			<ion-list no-lines>\n				<ion-item>\n					<ion-input type= "text" placeholder="username" [(ngModel)]="input.username"></ion-input>\n				</ion-item>\n				\n				<ion-item>\n					<ion-input type="password" placeholder="password" [(ngModel)]="input.password"></ion-input>\n				</ion-item>\n			</ion-list>\n		\n			<button ion-button block (click)="login()">Login</button>\n		</ion-card-content>\n\n	</ion-card>\n	\n	<button ion-button clear full color="light" (click)="navigateToSignUp()">Don\'t have an account? Signup</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_network_network__["a" /* NetworkProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_User_model__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//storage service

//user model

/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var NetworkProvider = (function () {
    function NetworkProvider(http, storageProvider) {
        this.http = http;
        this.storageProvider = storageProvider;
        this.networkBaseURL = 'http://introtoapps.com/datastore.php?';
        this.user_id = '212084899';
        this.user_prefix = 'user-';
        this.forums_list_id = 'forumlist';
        console.log('Hello NetworkProvider Provider');
    }
    NetworkProvider.prototype.callUserLoginApi = function (input) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            var url = _this.networkBaseURL + "action=load&appid=" + _this.user_id + '&objectid=' + _this.user_prefix + input.username;
            console.log(url);
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log('Data is :');
                console.log(data);
                //Sign In Successfull
                var dataDictionary = data;
                console.log('dataDictionary');
                console.log(dataDictionary);
                _this.storageProvider.saveUser(new __WEBPACK_IMPORTED_MODULE_4__Model_User_model__["a" /* User */](dataDictionary));
                resolve(dataDictionary);
            }, function (error) {
                //error login
                console.log('user not found');
                reject('login failed, user not found');
            });
        });
    };
    //user signup
    NetworkProvider.prototype.callUserSignupApi = function (input) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            var url = _this.networkBaseURL + "action=save&appid=" + _this.user_id + '&objectid=' + _this.user_prefix + input.username + '&data=' + JSON.stringify(input);
            console.log(url);
            _this.http.get(url)
                .subscribe(function (data) {
                console.log('Data is :');
                console.log(data);
                if (data.ok) {
                    //SignUp Successfull
                    console.log('signup success');
                    _this.storageProvider.saveUser(new __WEBPACK_IMPORTED_MODULE_4__Model_User_model__["a" /* User */](input));
                }
                else {
                    reject('signup failed, user not found');
                }
            }, function (error) {
                //error login
                reject('signup failed');
            });
        });
    };
    //get forums list
    NetworkProvider.prototype.callForumslistApi = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            var url = _this.networkBaseURL + "action=load&appid=" + _this.user_id + '&objectid=' + _this.forums_list_id;
            console.log(url);
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log('Data is :');
                console.log(data);
                var forumslist = data;
                console.log('forumslist');
                resolve(forumslist);
            }, function (error) {
                reject('failed');
            });
        });
    };
    return NetworkProvider;
}());
NetworkProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__storage_storage__["a" /* StorageProvider */]])
], NetworkProvider);

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//storage

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var StorageProvider = (function () {
    function StorageProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.USER_KEY = "user";
        console.log('Hello StorageProvider Provider');
    }
    StorageProvider.prototype.saveUser = function (user) {
        this.storage.set(JSON.stringify(user), this.USER_KEY);
    };
    //custom method for getting saved user
    StorageProvider.prototype.getCurrentUser = function () {
        var _this = this;
        if (this.user) {
            console.log("Without storage user found");
            return new Promise(function (resolve) {
                resolve(_this.user);
            });
        }
        else {
            console.log("With storage user found");
            return this.storage.get(this.USER_KEY);
        }
    };
    //Delete user
    StorageProvider.prototype.deleteCurrentUser = function () {
        this.storage.remove(this.USER_KEY);
    };
    return StorageProvider;
}());
StorageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], StorageProvider);

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavouritePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FavouritePage = (function () {
    function FavouritePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.properties = [{
                'title': 'property title',
                'city': 'abc',
                'state': 'las angles',
                'price': '4400000',
            },
            {
                'title': 'property title',
                'city': 'abc',
                'state': 'las angles',
                'price': '4400000',
            },
            {
                'title': 'property title',
                'city': 'abc',
                'state': 'las angles',
                'price': '4400000',
            },
            {
                'title': 'property title',
                'city': 'abc',
                'state': 'las angles',
                'price': '4400000',
            },
            {
                'title': 'property title',
                'city': 'abc',
                'state': 'las angles',
                'price': '4400000',
            },
        ];
    }
    FavouritePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavouritePage');
    };
    return FavouritePage;
}());
FavouritePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favourite',template:/*ion-inline-start:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/favourite/favourite.html"*/'<!--\n  Generated template for the FavouritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>favourite</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n        <ion-item *ngFor="let properties of properties">\n            <button ion-item>\n                <ion-thumbnail item-left>\n                    <img src="assets/prop1.jpg"/>\n                </ion-thumbnail>\n                <h2>{{properties.title}}</h2>\n                <p>{{properties.city}}, {{properties.state}} ∙ {{properties.price}}</p>\n            </button>\n            <ion-item-options>\n                <button danger (click)="deleteItem($event, property)">Delete</button>\n            </ion-item-options>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/favourite/favourite.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], FavouritePage);

//# sourceMappingURL=favourite.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_network_network__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//

//custom network provider

//loader

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, alertCtrl, networkProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.networkProvider = networkProvider;
        this.loadingCtrl = loadingCtrl;
        this.input = { "username": "", "password": "", "email": "", "phone": "", "address": "" };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    //login custom method
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (this.input.username.length < 1) {
            this.presentAlert('oops', 'username is empty');
            return;
        }
        else if (this.input.username.length > 0 && this.input.username.length < 6) {
            this.presentAlert('oops', 'username should not be less than 6 characters.');
            return;
        }
        else if (this.input.email.length < 1) {
            this.presentAlert('oops', 'email is empty');
            return;
        }
        else if (this.input.email.length < 6) {
            this.presentAlert('oops', 'email is less than 6 characters');
            return;
        }
        else if (this.input.password.length < 1) {
            this.presentAlert('oops', 'password is empty');
            return;
        }
        else if (this.input.password.length > 0 && this.input.password.length < 6) {
            this.presentAlert('oops', 'password should not be less than 6 characters.');
            return;
        }
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.networkProvider.callUserSignupApi(this.input).then(function (data) {
            loading.dismiss();
            console.log('success');
            console.log('Login Data:');
            console.log(data);
            _this.navigateToHome();
        }, function (error) {
            console.log('error');
            loading.dismiss();
            _this.presentAlert('oops', 'user not found');
            // this.presentToast(error);//error is string,
        }), function () {
            loading.dismiss();
            _this.presentAlert('oops', 'user not found');
            console.log('error');
            console.log('failure');
        };
    };
    //home navigation
    SignupPage.prototype.navigateToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    //present alert
    SignupPage.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="background">\n<ion-card>\n	<ion-card-header>\n	Signup Form\n	</ion-card-header>\n	<ion-card-content>\n	<ion-list no-lines>\n	<ion-item>\n	<ion-input required type= "text" placeholder="username" [(ngModel)]="input.username"></ion-input>\n</ion-item>\n<ion-item>\n	<ion-input required type= "email" placeholder="Email" [(ngModel)]="input.email"></ion-input>\n</ion-item>\n\n<ion-item>\n	<ion-input required type= "text" placeholder="password" [(ngModel)]="input.password"></ion-input>\n</ion-item>\n\n<ion-item>\n	<ion-input type= "number" placeholder="Phone" [(ngModel)]="input.phone"></ion-input>\n</ion-item>\n\n<ion-item>\n	<ion-input type= "text" placeholder="Address" [(ngModel)]="input.address"></ion-input>\n</ion-item>\n\n</ion-list>\n<button ion-button block (click)="signup()">Signup</button>\n<!-- <p>OR</p>\n<button ion-button block outline color="facebook">\n<ion-icon name>\n</button> -->\n</ion-card-content>\n\n</ion-card>\n<button ion-button clear full color="light" (click)="signin()">have an account? Sign In</button>\n\n</ion-content>'/*ion-inline-end:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_network_network__["a" /* NetworkProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_prop_details_prop_details__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_favourite_favourite__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forumslist_forumslist__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_storage_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_network_network__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_security_security__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//networking




//Custom pages







//local storage

//custom providers



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_prop_details_prop_details__["a" /* PropDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_favourite_favourite__["a" /* FavouritePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_forumslist_forumslist__["a" /* forumslist */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_prop_details_prop_details__["a" /* PropDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_favourite_favourite__["a" /* FavouritePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_forumslist_forumslist__["a" /* forumslist */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_security_security__["a" /* SecurityProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_favourite_favourite__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Custom Pages



//Custom Storage Provider

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storageProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storageProvider = storageProvider;
        //set app first page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        //side menu pages model list
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Favourites', component: __WEBPACK_IMPORTED_MODULE_4__pages_favourite_favourite__["a" /* FavouritePage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] }
        ];
        this.storageProvider.getCurrentUser().then(function (val) {
            if (val) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */]) === "function" && _e || Object])
], MyApp);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
//User Model Class
var User = (function () {
    function User(userData) {
        console.log('User Model data is:' + userData);
        this.userName = userData["name"];
        this.userEmail = userData['email'];
    }
    return User;
}());

//# sourceMappingURL=User.model.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PropDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PropDetailsPage = (function () {
    function PropDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //model array for Demo
        this.propertyList =
            {
                title: 'house No 1',
                desc: 'abcdef',
                img: 'assets/prop1.jpg',
                city: 'city',
                state: 'state',
                bedrooms: '4',
                bathrooms: '4',
                price: '550'
            };
    }
    PropDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropDetailsPage');
    };
    return PropDetailsPage;
}());
PropDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-prop-details',template:/*ion-inline-start:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/prop-details/prop-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Property</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <img src="assets/prop1.jpg"/>\n        <ion-card-content>\n            <h2 class="card-title">{{propertyList.title}}</h2>\n            <p>{{propertyList.desc}}, {{propertyList.city}} {{propertyList.state}}</p>\n        </ion-card-content>\n        <ion-list>\n\n            <ion-item>\n                <ion-icon item-left name="moon"></ion-icon>\n                <h3>Bedrooms</h3>\n                <ion-note item-right>{{propertyList.bedrooms}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="leaf"></ion-icon>\n                <h3>Bathrooms</h3>\n                <ion-note item-right>{{propertyList.bathrooms}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="pricetag"></ion-icon>\n                <h3>Asking Price</h3>\n                <ion-note item-right>{{propertyList.price}}</ion-note>\n            </ion-item>\n            <!-- <button ion-item (click)="openBrokerDetail(property.broker)">\n                <ion-avatar item-left>\n                    <img src="{{property.broker.picture}}"/>\n                </ion-avatar>\n                <h2>{{property.broker.name}}</h2>\n                <p>{{property.broker.title}}</p>\n            </button> -->\n        </ion-list>\n\n        <ion-item>\n            <button ion-button icon-left (click)="favorite(property)" clear item-left>\n                <ion-icon name="star"></ion-icon>\n                Favorite\n            </button>\n            <button ion-button icon-left (click)="share(property)" clear item-right>\n                <ion-icon name="share"></ion-icon>\n                Share\n            </button>\n        </ion-item>\n\n    </ion-card>\n    <!-- <button ion-button round full (click)="share(property)"  item-right>\n                \n                View Details\n            </button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/prop-details/prop-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PropDetailsPage);

//# sourceMappingURL=prop-details.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Security

/*
  Generated class for the SecurityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SecurityProvider = (function () {
    function SecurityProvider(http) {
        this.http = http;
        console.log('Hello SecurityProvider Provider');
    }
    //MD5 Hashing
    SecurityProvider.prototype.gethasString = function (input) {
        return __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(input);
    };
    return SecurityProvider;
}());
SecurityProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], SecurityProvider);

//# sourceMappingURL=security.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return forumslist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prop_details_prop_details__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_network_network__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//

//custom network provider

//loader

var forumslist = (function () {
    function forumslist(navCtrl, alertCtrl, networkProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.networkProvider = networkProvider;
        this.loadingCtrl = loadingCtrl;
        this.propertyList = [];
    }
    forumslist.prototype.propDetails = function (val) {
        // this.navCtrl.push(PropDetailsPage,{"property": val});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__prop_details_prop_details__["a" /* PropDetailsPage */]);
    };
    //
    forumslist.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad forumlist');
    };
    forumslist.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('will enter forumlist');
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.networkProvider.callForumslistApi().then(function (data) {
            _this.propertyList = data;
            loading.dismiss();
            console.log('success');
            console.log('Login Data:');
            console.log(data);
        }, function (error) {
            console.log('error');
            loading.dismiss();
            _this.presentAlert('oops', 'something went wrong');
            // this.presentToast(error);//error is string,
        }), function () {
            loading.dismiss();
            _this.presentAlert('oops', 'something went wron');
            console.log('error');
            console.log('failure');
        };
    };
    //present alert
    forumslist.prototype.presentAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return forumslist;
}());
forumslist = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forumslist',template:/*ion-inline-start:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/forumslist/forumslist.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n  <ion-item *ngFor="let x of propertyList" (click)="propDetails(x)">\n    <ion-thumbnail item-start>\n      <img src="{{x.img}}">\n    </ion-thumbnail>\n    <h2>{{x.title}}</h2>\n    <p>{{x.description}}</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/forumslist/forumslist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_network_network__["a" /* NetworkProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], forumslist);

//# sourceMappingURL=forumslist.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forumslist_forumslist__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailFirstPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // Page life cycle Methods
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailFirstPage');
    };
    HomePage.prototype.move = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forumslist_forumslist__["a" /* forumslist */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-homePage',template:/*ion-inline-start:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/home/home.html"*/'<!--\n  Generated template for the Home page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>HOME</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n\n <ion-card  (click)="move()">\n   <!-- Image Source -->\n   <!-- https://www.escati.com/wp-content/uploads/2015/12/melbourne-australia.jpg -->\n    <img src="assets/melbourne-australia.jpg"/>\n    <div class="card-title">Melbourne</div>\n    <div class="card-subtitle">72 Listings</div>\n  </ion-card>\n\n  <ion-card (click)="move()">\n    <!-- Image Source -->\n    <!-- https://media-cdn.tripadvisor.com/media/photo-s/02/26/68/dd/sydney-opera-house.jpg -->\n    <img src="assets/sydney-australia.jpg"/>\n    <div class="card-title">Sydney</div>\n    <div class="card-subtitle">28 Listings</div>\n  </ion-card>\n\n  <ion-card (click)="move()">\n\n    <!-- Image Source -->\n    <!-- http://www.australia.com/content/australia/fr_fr/places/perth/_jcr_content/hero/image.adapt.1663.medium.jpg -->\n    <img src="assets/perth-australia.jpg"/>\n    <div class="card-title">Perth</div>\n    <div class="card-subtitle">28 Listings</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/TahirIqbal/Documents/PropertyAppCloned/SIT313MobileComputingProject1-Test/Assignment1/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map