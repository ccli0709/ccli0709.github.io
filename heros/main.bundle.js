webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());

//# sourceMappingURL=hero.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEROES; });
var HEROES = [
    { id: 1, name: '蜘蛛人', hp: 500, mp: 100, str: 400, vit: 200, dex: 500 },
    { id: 2, name: '鋼鐵人', hp: 300, mp: 200, str: 100, vit: 100, dex: 200 },
    { id: 3, name: '綠巨人', hp: 600, mp: 300, str: 500, vit: 200, dex: 100 },
    { id: 4, name: '雷神索爾', hp: 700, mp: 200, str: 100, vit: 500, dex: 100 },
    { id: 5, name: '鷹眼', hp: 100, mp: 100, str: 200, vit: 200, dex: 300 },
    { id: 6, name: '黑寡婦', hp: 200, mp: 200, str: 100, vit: 300, dex: 500 },
    { id: 7, name: '美國隊長', hp: 900, mp: 200, str: 500, vit: 200, dex: 400 },
    { id: 8, name: '緋紅女巫', hp: 600, mp: 400, str: 300, vit: 400, dex: 400 },
    { id: 9, name: '白銀', hp: 500, mp: 100, str: 200, vit: 100, dex: 200 },
];
//# sourceMappingURL=mock-heroes.js.map

/***/ }),

/***/ 102:
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

/***/ 157:
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
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <a class=\"btn btn-primary\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\r\n  <a class=\"btn btn-info\" routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\r\n</nav>\r\n<div class=\"panel panel-info\" style='margin-top:1em'>\r\n  <div class=\"panel-heading\">{{title}}</div>\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.active]=\"hero === selectedHero\" style='cursor:pointer'>\n    {{hero.name}}&nbsp;&nbsp;\n    <span class=\"label label-success\">HP&nbsp;&nbsp;<span class=\"badge\">{{hero.hp}}</span></span>&nbsp;\n    <span class=\"label label-info\">MP&nbsp;&nbsp;<span class=\"badge\">{{hero.mp}}</span></span>&nbsp;\n    <span class=\"label label-danger\">STR&nbsp;&nbsp;<span class=\"badge\">{{hero.str}}</span></span>&nbsp;\n    <span class=\"label label-warning\">VIT&nbsp;&nbsp;<span class=\"badge\">{{hero.vit}}</span></span>&nbsp;\n    <span class=\"label label-primary\">DEX&nbsp;&nbsp;<span class=\"badge\">{{hero.dex}}</span></span>&nbsp;\n    <a [routerLink]=\"['/detail',hero.id]\">編輯</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\" class=\"container\">\r\n\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-sm-12\">\r\n    <button (click)=\"goBack()\" class=\"btn btn-default\">返回</button>\r\n    <button class=\"btn btn-primary\" [disabled]='true'>新增</button>\r\n    <button class=\"btn btn-warning\" [disabled]='true'>修改</button>\r\n    <button class=\"btn btn-danger\" [disabled]='true'>刪除</button>\r\n  </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label col-form-label-lg\">編號</label>\r\n    <div class=\"col-sm-10\">\r\n      <input class=\"form-control\" [(ngModel)]=\"hero.id\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label col-form-label-lg\">名稱</label>\r\n    <div class=\"col-sm-10\">\r\n      <input class=\"form-control\" [(ngModel)]=\"hero.id\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label col-form-label-lg\">HP</label>\r\n    <div class=\"col-sm-10\">\r\n      <input class=\"form-control\" [(ngModel)]=\"hero.hp\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label col-form-label-lg\">MP</label>\r\n    <div class=\"col-sm-10\">\r\n      <input class=\"form-control\" [(ngModel)]=\"hero.mp\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label col-form-label-lg\">STR</label>\r\n    <div class=\"col-sm-10\">\r\n      <input class=\"form-control\" [(ngModel)]=\"hero.str\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label col-form-label-lg\">VIT</label>\r\n    <div class=\"col-sm-10\">\r\n      <input class=\"form-control\" [(ngModel)]=\"hero.vit\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label col-form-label-lg\">DEX</label>\r\n    <div class=\"col-sm-10\">\r\n      <input class=\"form-control\" [(ngModel)]=\"hero.dex\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\r\n  <li class=\"list-group-item\" *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.active]=\"hero === selectedHero\" style='cursor:pointer'>\r\n    {{hero.name}}&nbsp;&nbsp;\r\n    <span class=\"label label-success\">HP&nbsp;&nbsp;<span class=\"badge\">{{hero.hp}}</span></span>&nbsp;\r\n    <span class=\"label label-info\">MP&nbsp;&nbsp;<span class=\"badge\">{{hero.mp}}</span></span>&nbsp;\r\n    <span class=\"label label-danger\">STR&nbsp;&nbsp;<span class=\"badge\">{{hero.str}}</span></span>&nbsp;\r\n    <span class=\"label label-warning\">VIT&nbsp;&nbsp;<span class=\"badge\">{{hero.vit}}</span></span>&nbsp;\r\n    <span class=\"label label-primary\">DEX&nbsp;&nbsp;<span class=\"badge\">{{hero.dex}}</span></span>&nbsp;\r\n    <button class=\"btn btn-link\" (click)=\"gotoDetail(hero.id)\">編輯</button>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_heroes__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_heroes__["a" /* HEROES */]);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
        });
    };
    return HeroService;
}());
HeroService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], HeroService);

//# sourceMappingURL=hero.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__(27);
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
    function DashboardComponent(heroService) {
        this.heroService = heroService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'my-dashboard',
        template: __webpack_require__(162),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hero_service__ = __webpack_require__(27);
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
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__hero__["a" /* Hero */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__hero__["a" /* Hero */]) === "function" && _a || Object)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Component */])({
        selector: 'my-hero-detail',
        template: __webpack_require__(163),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__hero_service__["a" /* HeroService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */]) === "function" && _d || Object])
], HeroDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=hero-detail.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_service__ = __webpack_require__(27);
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



var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/detail', id]);
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'my-heroes',
        template: __webpack_require__(164),
        styles: [__webpack_require__(159)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */]) === "function" && _b || Object])
], HeroesComponent);

var _a, _b;
//# sourceMappingURL=heroes.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 90;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(102);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heroes_heroes_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */] },
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_3__heroes_heroes_component__["a" /* HeroesComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__heroes_heroes_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(97);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_5__heroes_heroes_component__["a" /* HeroesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__hero_service__["a" /* HeroService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = '英雄聯萌';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(161),
        styles: [__webpack_require__(156)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.bundle.js.map