webpackJsonp([1,4],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<p>\n  hero-detail works!\n</p>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-sm-12\">\n\n    <h2>所有英雄</h2>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>編號</th>\n          <th>姓名</th>\n          <th>HP</th>\n          <th>MP</th>\n          <th>STR</th>\n          <th>INT</th>\n          <th>AGI</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\">\n          <td>{{hero.id}}</td>\n          <td>{{hero.name}}</td>\n          <td>{{hero.hp}}</td>\n          <td>{{hero.mp}}</td>\n          <td>{{hero.str}}</td>\n          <td>{{hero.int}}</td>\n          <td>{{hero.agi}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\" *ngIf=\"selectedHero\">\n      <h1>{{selectedHero.name}}&nbsp;<span class=\"label label-default\">{{selectedHero.id}}</span></h1>\n      <div class=\"form-group row\">\n        <label class=\"col-2 col-form-label\">HP</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"selectedHero.hp\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-2 col-form-label\">MP</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"selectedHero.mp\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-2 col-form-label\">STR</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"selectedHero.str\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-2 col-form-label\">INT</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"selectedHero.int\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-2 col-form-label\">AGI</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"selectedHero.agi\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar -->\n<div id=\"sidebar-wrapper\">\n  <ul class=\"sidebar-nav\">\n    <li class=\"sidebar-brand\">\n      <a href=\"#\">\n                英雄聯盟\n            </a>\n    </li>\n    <li>\n      <a routerLink=\"/dashboard\">排行榜</a>\n    </li>\n    <li>\n      <a routerLink=\"/heroes\">所有英雄</a>\n    </li>\n  </ul>\n</div>\n<!-- /#sidebar-wrapper -->\n\n<!-- Page Content -->\n<div id=\"page-content-wrapper\">\n  <div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<!-- /#page-content-wrapper -->\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(99);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_root_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__heroes_heroes_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hero_detail_hero_detail_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__root_root_component__["a" /* RootComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__heroes_heroes_component__["a" /* HeroesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                }, {
                    path: 'dashboard',
                    component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */]
                }, {
                    path: 'heroes',
                    component: __WEBPACK_IMPORTED_MODULE_7__heroes_heroes_component__["a" /* HeroesComponent */]
                }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__root_root_component__["a" /* RootComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(158),
        styles: [__webpack_require__(153)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-hero-detail',
        template: __webpack_require__(159),
        styles: [__webpack_require__(154)]
    }),
    __metadata("design:paramtypes", [])
], HeroDetailComponent);

//# sourceMappingURL=hero-detail.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HEROES = [
    { id: 1, name: 'Shawn Brown', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 2, name: 'Tracy M. Nguyen', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 3, name: 'Gilbert M. Ford', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 4, name: 'Alberto Ryan', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 5, name: 'Chris Williamson', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 6, name: 'Alma Mcgee Brewer', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 7, name: 'Eileen Marlene Griffith', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 8, name: 'Heather B. Harris', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 9, name: 'Shane Jimmie Salazar', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 10, name: 'Tornado', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 11, name: 'Mr. Nice', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 12, name: 'Narco', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 13, name: 'Bombasto', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 14, name: 'Celeritas', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 15, name: 'Magneta', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 16, name: 'RubberMan', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 17, name: 'Dynama', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 18, name: 'Dr IQ', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 19, name: 'Magma', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
    { id: 20, name: 'Tornado', hp: 20, mp: 20, str: 20, int: 20, agi: 10 },
];
var HeroesComponent = (function () {
    function HeroesComponent() {
        this.heroes = HEROES;
        this.selectedHero = null;
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        console.log(hero);
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-heroes',
        template: __webpack_require__(160),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [])
], HeroesComponent);

//# sourceMappingURL=heroes.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    return RootComponent;
}());
RootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(161),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [])
], RootComponent);

//# sourceMappingURL=root.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.bundle.js.map