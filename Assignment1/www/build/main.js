webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        selector: 'page-favourite',template:/*ion-inline-start:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/favourite/favourite.html"*/'<!--\n  Generated template for the FavouritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>favourite</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n        <ion-item *ngFor="let properties of properties">\n            <button ion-item>\n                <ion-thumbnail item-left>\n                    <img src="assets/prop1.jpg"/>\n                </ion-thumbnail>\n                <h2>{{properties.title}}</h2>\n                <p>{{properties.city}}, {{properties.state}} ∙ {{properties.price}}</p>\n            </button>\n            <ion-item-options>\n                <button danger (click)="deleteItem($event, property)">Delete</button>\n            </ion-item-options>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/favourite/favourite.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], FavouritePage);

//# sourceMappingURL=favourite.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(98);
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
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="background">\n<ion-card>\n	<ion-card-header>\n	Signup Form\n	</ion-card-header>\n	<ion-card-content>\n	<ion-list no-lines>\n	<ion-item>\n	<ion-input type= "text" placeholder="username"></ion-input>\n</ion-item>\n<ion-item>\n	<ion-input type= "email" placeholder="Email"></ion-input>\n</ion-item>\n\n<ion-item>\n	<ion-input type= "text" placeholder="password"></ion-input>\n</ion-item>\n\n<ion-item>\n	<ion-input type= "number" placeholder="Phone"></ion-input>\n</ion-item>\n\n<ion-item>\n	<ion-input type= "text" placeholder="Address"></ion-input>\n</ion-item>\n\n</ion-list>\n<button ion-button block (click)="signin()">Signup</button>\n<!-- <p>OR</p>\n<button ion-button block outline color="facebook">\n<ion-icon name>\n</button> -->\n</ion-card-content>\n\n</ion-card>\n<button ion-button clear full color="light" (click)="signin()">have an account? Sign In</button>\n\n</ion-content>'/*ion-inline-end:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prop_details_prop_details__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.propertyList = [
            {
                title: 'house # 1',
                desc: 'description',
                img: 'assets/prop1.jpg',
                city: 'city',
                state: 'state',
                bedrooms: '4',
                bathrooms: '4',
                price: '1$'
            },
            {
                title: 'house # 2',
                desc: 'description',
                img: 'assets/prop1.jpg',
                city: 'city',
                state: 'state',
                bedrooms: '2',
                bathrooms: '3',
                price: '1$'
            },
            {
                title: 'house # 3',
                desc: 'description',
                img: 'assets/prop1.jpg',
                city: 'city',
                state: 'state',
                bedrooms: '1',
                bathrooms: '2',
                price: '1$'
            },
        ];
    }
    HomePage.prototype.propDetails = function (val) {
        // this.navCtrl.push(PropDetailsPage,{"property": val});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__prop_details_prop_details__["a" /* PropDetailsPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n  <ion-item *ngFor="let x of propertyList" (click)="propDetails(x)">\n    <ion-thumbnail item-start>\n      <img src="{{x.img}}">\n    </ion-thumbnail>\n    <h2>{{x.title}}</h2>\n    <p>{{x.desc}}</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        selector: 'page-prop-details',template:/*ion-inline-start:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/prop-details/prop-details.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Property</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <img src="assets/prop1.jpg"/>\n        <ion-card-content>\n            <h2 class="card-title">{{propertyList.title}}</h2>\n            <p>{{propertyList.desc}}, {{propertyList.city}} {{propertyList.state}}</p>\n        </ion-card-content>\n        <ion-list>\n\n            <ion-item>\n                <ion-icon item-left name="moon"></ion-icon>\n                <h3>Bedrooms</h3>\n                <ion-note item-right>{{propertyList.bedrooms}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="leaf"></ion-icon>\n                <h3>Bathrooms</h3>\n                <ion-note item-right>{{propertyList.bathrooms}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="pricetag"></ion-icon>\n                <h3>Asking Price</h3>\n                <ion-note item-right>{{propertyList.price}}</ion-note>\n            </ion-item>\n            <!-- <button ion-item (click)="openBrokerDetail(property.broker)">\n                <ion-avatar item-left>\n                    <img src="{{property.broker.picture}}"/>\n                </ion-avatar>\n                <h2>{{property.broker.name}}</h2>\n                <p>{{property.broker.title}}</p>\n            </button> -->\n        </ion-list>\n\n        <ion-item>\n            <button ion-button icon-left (click)="favorite(property)" clear item-left>\n                <ion-icon name="star"></ion-icon>\n                Favorite\n            </button>\n            <button ion-button icon-left (click)="share(property)" clear item-right>\n                <ion-icon name="share"></ion-icon>\n                Share\n            </button>\n        </ion-item>\n\n    </ion-card>\n    <!-- <button ion-button round full (click)="share(property)"  item-right>\n                \n                View Details\n            </button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/prop-details/prop-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], PropDetailsPage);

//# sourceMappingURL=prop-details.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_prop_details_prop_details__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_detail_first_detail_first__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favourite_favourite__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_prop_details_prop_details__["a" /* PropDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_detail_first_detail_first__["a" /* DetailFirstPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_favourite_favourite__["a" /* FavouritePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_prop_details_prop_details__["a" /* PropDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_detail_first_detail_first__["a" /* DetailFirstPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_favourite_favourite__["a" /* FavouritePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_favourite_favourite__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_detail_first_detail_first__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_detail_first_detail_first__["a" /* DetailFirstPage */] },
            { title: 'Favourites', component: __WEBPACK_IMPORTED_MODULE_4__pages_favourite_favourite__["a" /* FavouritePage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        selector: 'page-list',template:/*ion-inline-start:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_first_detail_first__ = __webpack_require__(99);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__detail_first_detail_first__["a" /* DetailFirstPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="background">\n<ion-card>\n	<ion-card-header>\n	Login Form\n	</ion-card-header>\n	<ion-card-content>\n	<ion-list no-lines>\n	<ion-item>\n	<ion-input type= "text" placeholder="username"></ion-input>\n</ion-item>\n<ion-item>\n	<ion-input type= "text" placeholder="password"></ion-input>\n</ion-item>\n</ion-list>\n<button ion-button block (click)="goToHome()">Login</button>\n<!-- <p>OR</p>\n<button ion-button block outline color="facebook">\n<ion-icon name>\n</button> -->\n</ion-card-content>\n\n</ion-card>\n<button ion-button clear full color="light" (click)="signup()">Don\'t have an account? Signup</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailFirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(195);
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
var DetailFirstPage = (function () {
    function DetailFirstPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailFirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailFirstPage');
    };
    DetailFirstPage.prototype.move = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return DetailFirstPage;
}());
DetailFirstPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail-first',template:/*ion-inline-start:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/detail-first/detail-first.html"*/'<!--\n  Generated template for the DetailFirstPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>detailFirst</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n<!--\n<ion-card>\n  <ion-card-header>\n    Header\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n -->\n <ion-card  (click)="move()">\n   <!-- Image Source -->\n   <!-- https://www.escati.com/wp-content/uploads/2015/12/melbourne-australia.jpg -->\n    <img src="assets/melbourne-australia.jpg"/>\n    <div class="card-title">Melbourne</div>\n    <div class="card-subtitle">72 Listings</div>\n  </ion-card>\n\n  <ion-card (click)="move()">\n    <!-- Image Source -->\n    <!-- https://media-cdn.tripadvisor.com/media/photo-s/02/26/68/dd/sydney-opera-house.jpg -->\n    <img src="assets/sydney-australia.jpg"/>\n    <div class="card-title">Sydney</div>\n    <div class="card-subtitle">28 Listings</div>\n  </ion-card>\n\n  <ion-card (click)="move()">\n\n    <!-- Image Source -->\n    <!-- http://www.australia.com/content/australia/fr_fr/places/perth/_jcr_content/hero/image.adapt.1663.medium.jpg -->\n    <img src="assets/perth-australia.jpg"/>\n    <div class="card-title">Perth</div>\n    <div class="card-subtitle">28 Listings</div>\n  </ion-card>\n\n\n<!-- </ion-content> -->\n</ion-content>\n'/*ion-inline-end:"/Users/Ahmed/Desktop/Prop APk/PropertyApp(final)/src/pages/detail-first/detail-first.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], DetailFirstPage);

//# sourceMappingURL=detail-first.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map