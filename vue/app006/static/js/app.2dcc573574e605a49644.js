webpackJsonp([1],{"1/oy":function(e,t){},"7NFl":function(e,t){},"9M+g":function(e,t){},EmOQ:function(e,t){},F0PK:function(e,t){},F6j4:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),r=s("1mcD"),n=s.n(r),o=s("Sazm"),i=s.n(o),u=s("e6fC"),c=(s("Jmt5"),s("9M+g"),{render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[s("b-navbar-nav",[s("b-navbar-brand",{attrs:{href:"#"}},[e._v("呷涼水")]),e._v(" "),s("b-nav-item",{attrs:{href:"/#/groups"}},[e._v("開飲料團")]),e._v(" "),s("b-nav-item",{attrs:{href:"/#/shops"}},[e._v("店家設定")])],1),e._v(" "),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item-dropdown",{attrs:{right:""}},[s("template",{slot:"button-content"},[s("b-img",{attrs:{rounded:"",width:"32",src:e.$user.photoURL}})],1),e._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[e._v("個人資料")]),e._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[e._v("登出")])],2)],1)],1)],1),e._v(" "),s("div",{staticClass:"container"},[s("router-view")],1)],1)},staticRenderFns:[]});var d=s("VU/8")({name:"App"},c,!1,function(e){s("F6j4")},null,null).exports,l=s("/ocq"),m=s("2ahc"),v=s.n(m),p={name:"login",data:function(){return{email:"",password:""}},methods:{signIn:function(){var e=this;i.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){alert("Well done! You are new connected"),e.$router.replace("hello")},function(e){alert("Oops. "+e.message)})}},mounted:function(){var e={signInSuccessUrl:"/#/groups",signInOptions:[i.a.auth.FacebookAuthProvider.PROVIDER_ID]};new v.a.auth.AuthUI(i.a.auth()).start("#firebaseui-auth-container",e)}},h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login"},[t("div",{attrs:{id:"firebaseui-auth-container"}})])}]};var f=s("VU/8")(p,h,!1,function(e){s("P0BK")},"data-v-4f4830e1",null).exports,_=s("PJh5"),b=s.n(_),y=(s("EmOQ"),i.a.initializeApp({apiKey:"AIzaSyD14yoGBKyPVIpSjLUT9W3JMSz5xZ4eVMc",authDomain:"csctw-f3-drink.firebaseapp.com",databaseURL:"https://csctw-f3-drink.firebaseio.com",projectId:"csctw-f3-drink",storageBucket:"csctw-f3-drink.appspot.com",messagingSenderId:"666840631708"}).database()),g={name:"Groups",firebase:{groups:{source:y.ref("/vue-app006/groups/")}},data:function(){return{loading:!0,deleteItemKey:"",test:b()().format("YYYY-MM-DDTHH:mm:ss")}},computed:{},methods:{create:function(){this.$firebaseRefs.groups.push({name:"[未命名的飲料團]",enabled:"N",startAt:b()().add(1,"days").format("YYYY-MM-DDTHH:mm:ss"),finishAt:b()().add(3,"days").format("YYYY-MM-DDTHH:mm:ss"),totalPeople:0,totalItems:0,totalAmount:0,createdBy:this.$user,createdAt:b()().format("YYYY-MM-DDTHH:mm:ss")})},confirmDeleteItem:function(e){this.$refs.myModalRef.show(),this.deleteItemKey=e[".key"]},deleteItem:function(){this.$firebaseRefs.groups.child(this.deleteItemKey).remove()},updateItem:function(e,t,s){this.$firebaseRefs.groups.child(e[".key"]).child(t).set(s)},formatDateTime:function(e){return b()(e).format("MM/DD HH:mm")},buttonGroupChage:function(e){console.log(e)}}},j={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"groups"},[s("b-modal",{ref:"myModalRef",attrs:{id:"modal1",title:"系統訊息"},on:{ok:e.deleteItem}},[s("p",{staticClass:"my-4"},[e._v("確認是否刪除這個飲料團?")])]),e._v(" "),s("table",{staticClass:"table"},[s("thead",[s("th"),e._v(" "),s("th"),e._v(" "),s("th",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.create}},[s("i",{staticClass:"fas fa-plus-circle"})])]),e._v(" "),s("th",[e._v("開放時間")]),e._v(" "),s("th",[e._v("總人數")]),e._v(" "),s("th",[e._v("總件數")]),e._v(" "),s("th",[e._v("總金額")]),e._v(" "),s("th",[e._v("團主")])]),e._v(" "),s("tbody",e._l(e.groups,function(t){return s("tr",[s("td",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid==t.createdBy.uid,expression:"$user.uid == item.createdBy.uid"}]},[s("b-button",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid==t.createdBy.uid,expression:"$user.uid == item.createdBy.uid"}],attrs:{variant:"danger"},on:{click:function(s){e.confirmDeleteItem(t)}}},[s("i",{staticClass:"fas fa-trash-alt"})]),e._v(" "),s("b-form-radio-group",{attrs:{"button-variant":"outline-primary",buttons:"",options:[{text:"啟用",value:"Y"},{text:"關閉",value:"N"}],name:"radiosBtnDefault"},on:{change:function(s){e.updateItem(t,"enabled",s)}},model:{value:t.enabled,callback:function(s){e.$set(t,"enabled",s)},expression:"item.enabled"}})],1)]),e._v(" "),s("td",[s("b-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:{name:"Orders",params:{groupKey:t[".key"]}},title:"訂一杯吧!"}},[s("i",{staticClass:"fas fa-beer"})])],1),e._v(" "),s("td",[s("span",{directives:[{name:"show",rawName:"v-show",value:!(e.$user.uid==t.createdBy.uid&&"N"==t.enabled),expression:'!(($user.uid == item.createdBy.uid) && (item.enabled == "N"))'}]},[e._v(e._s(t.name))]),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid==t.createdBy.uid&&"N"==t.enabled,expression:'($user.uid == item.createdBy.uid) && (item.enabled == "N")'}],staticClass:"form-control",domProps:{value:t.name},on:{change:function(s){e.updateItem(t,"name",s.target.value)}}})]),e._v(" "),s("td",[s("span",{directives:[{name:"show",rawName:"v-show",value:!(e.$user.uid==t.createdBy.uid&&"N"==t.enabled),expression:'!(($user.uid == item.createdBy.uid) && (item.enabled == "N"))'}]},[e._v(e._s(e.formatDateTime(t.startAt))+" - "+e._s(e.formatDateTime(t.finishAt)))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid==t.createdBy.uid&&"N"==t.enabled,expression:'($user.uid == item.createdBy.uid) && (item.enabled == "N")'}]},[s("b-badge",[e._v("\n              開始時間")]),e._v(" "),s("input",{staticClass:"form-control",attrs:{type:"datetime-local"},domProps:{value:t.startAt},on:{change:function(s){e.updateItem(t,"startAt",s.target.value)}}}),e._v(" "),s("b-badge",[e._v("\n              結束時間")]),e._v(" "),s("input",{staticClass:"form-control",attrs:{type:"datetime-local"},domProps:{value:t.finishAt},on:{change:function(s){e.updateItem(t,"finishAt",s.target.value)}}})],1)]),e._v(" "),s("td",[e._v(e._s(t.totalPeople))]),e._v(" "),s("td",[e._v(e._s(t.totalItems))]),e._v(" "),s("td",[e._v(e._s(t.totalAmount))]),e._v(" "),s("td",[s("b-img",{attrs:{rounded:"",width:"32",src:t.createdBy.photoURL}}),e._v(" "),s("b-badge",[e._v(e._s(t.createdBy.displayName))])],1)])}))])],1)},staticRenderFns:[]};var w=s("VU/8")(g,j,!1,function(e){s("lpB1")},"data-v-419dcfaf",null).exports,I={name:"Orders",firebase:{},data:function(){return{loading:!0,deleteItemKey:"",selectedOrderKey:""}},computed:{sortedItems:function(){return this.items.sort(function(e,t){return e.name>t.name})}},created:function(){var e=this;this.$bindAsObject("group",y.ref("/vue-app006/groups/"+this.$route.params.groupKey)),this.$bindAsArray("items",y.ref("/vue-app006/orders/").orderByChild("groupKey").equalTo(this.$route.params.groupKey));var t=this;this.$bindAsArray("selectorShops",y.ref("/vue-app006/shops/"),null,function(){t.refreshItems(e.selectorShops[0][".key"])})},watch:{},methods:{onClickOk:function(e){console.log(e),console.log(this.$refs.selectorItem.value);var t=this;y.ref("/vue-app006/items/"+this.$refs.selectorItem.value).once("value",function(e){t.$firebaseRefs.items.child(t.selectedOrderKey).child("name").set(e.val().name),t.$firebaseRefs.items.child(t.selectedOrderKey).child("price").set(e.val().price),t.$firebaseRefs.items.child(t.selectedOrderKey).child("size").set(e.val().size)})},refreshItems:function(e){this.$bindAsArray("selectorItems",y.ref("/vue-app006/items/").orderByChild("shopKey").equalTo(e))},create:function(){this.$firebaseRefs.items.push({groupKey:this.group[".key"],name:"[未命名的商品]",size:"---",price:50,note:"",createdBy:this.$user,createdAt:b()().format("YYYY-MM-DDTHH:mm:ss")}),this.$firebaseRefs.group.child("totalItems").set(this.items.length)},copy:function(e){this.$firebaseRefs.items.push({groupKey:this.group[".key"],name:e.name,size:e.size,price:e.price,note:e.note,createdBy:this.$user,createdAt:b()().format("YYYY-MM-DDTHH:mm:ss")})},selectShopItem:function(e){this.selectedOrderKey=e[".key"],console.log(this.selectedOrderKey),this.$refs.mySelectModalRef.show()},confirmDeleteItem:function(e){this.$refs.myConfirmModalRef.show(),this.deleteItemKey=e[".key"]},deleteItem:function(){this.$firebaseRefs.items.child(this.deleteItemKey).remove(),this.$firebaseRefs.group.child("totalItems").set(this.items.length)},updateItem:function(e,t,s){this.$firebaseRefs.items.child(e[".key"]).child(t).set(s)},formatDateTime:function(e){return b()(e).format("MM/DD HH:mm")},buttonGroupChage:function(e){console.log(e)}}},$={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"orders"},[s("b-modal",{ref:"myConfirmModalRef",attrs:{title:"系統訊息"},on:{ok:e.deleteItem}},[s("p",{staticClass:"my-4"},[e._v("確認是否刪除這個項目?")])]),e._v(" "),s("b-modal",{ref:"mySelectModalRef",attrs:{title:"挑選商品"},on:{ok:e.onClickOk}},[s("form",[s("div",{staticClass:"form-group"},[e.selectorShops?s("select",{staticClass:"form-control",on:{change:function(t){e.refreshItems(t.target.value)}}},e._l(e.selectorShops,function(t){return s("option",{domProps:{value:t[".key"]}},[e._v("\n            "+e._s(t.name)+"\n          ")])})):e._e()]),e._v(" "),s("div",{staticClass:"form-group"},[e.selectorItems?s("select",{ref:"selectorItem",staticClass:"form-control"},e._l(e.selectorItems,function(t){return s("option",{domProps:{value:t[".key"]}},[e._v("\n            "+e._s(t.name)+" - "+e._s(t.size)+"\n          ")])})):e._e()])])]),e._v(" "),s("h3",[e._v("訂購項目 "),s("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.group.name))])]),e._v(" "),s("table",{staticClass:"table"},[s("thead",[s("th",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.create}},[s("i",{staticClass:"fas fa-plus-square"})])]),e._v(" "),s("th",[e._v("品名")]),e._v(" "),s("th",[e._v("規格")]),e._v(" "),s("th",{staticStyle:{width:"100px"}},[e._v("價格")]),e._v(" "),s("th",[e._v("備註")]),e._v(" "),s("th")]),e._v(" "),s("tbody",e._l(e.sortedItems,function(t){return s("tr",[s("td",[s("b-button",{attrs:{variant:"success"},on:{click:function(s){e.copy(t)}}},[s("i",{staticClass:"fas fa-copy"})]),e._v(" "),s("b-button",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid==t.createdBy.uid,expression:"$user.uid == item.createdBy.uid"}],attrs:{variant:"danger"},on:{click:function(s){e.confirmDeleteItem(t)}}},[s("i",{staticClass:"fas fa-trash-alt"})])],1),e._v(" "),s("td",[s("b-input-group",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid==t.createdBy.uid,expression:"$user.uid == item.createdBy.uid"}]},[s("b-input-group-text",{attrs:{slot:"append"},slot:"append"},[s("b-button",{attrs:{variant:"info",size:"sm"},on:{click:function(s){e.selectShopItem(t)}}},[s("i",{staticClass:"fas fa-search"})])],1),e._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid==t.createdBy.uid,expression:"$user.uid == item.createdBy.uid"}],staticClass:"form-control",domProps:{value:t.name},on:{change:function(s){e.updateItem(t,"name",s.target.value)}}})],1),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid!=t.createdBy.uid,expression:"$user.uid != item.createdBy.uid"}]},[e._v(" "+e._s(t.name)+" ")])],1),e._v(" "),s("td",[s("select",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid==t.createdBy.uid,expression:"$user.uid == item.createdBy.uid"}],staticClass:"form-control",domProps:{value:t.size},on:{change:function(s){e.updateItem(t,"size",s.target.value)}}},[s("option",[e._v("---")]),e._v(" "),s("option",[e._v("小")]),e._v(" "),s("option",[e._v("中")]),e._v(" "),s("option",[e._v("大")]),e._v(" "),s("option",[e._v("瓶")])]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid!=t.createdBy.uid,expression:"$user.uid != item.createdBy.uid"}]},[e._v(" "+e._s(t.size)+" ")])]),e._v(" "),s("td",[s("input",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid==t.createdBy.uid,expression:"$user.uid == item.createdBy.uid"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.price},on:{change:function(s){e.updateItem(t,"price",s.target.value)}}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid!=t.createdBy.uid,expression:"$user.uid != item.createdBy.uid"}]},[e._v(" "+e._s(t.price)+" ")])]),e._v(" "),s("td",[s("input",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid==t.createdBy.uid,expression:"$user.uid == item.createdBy.uid"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.note},on:{change:function(s){e.updateItem(t,"note",s.target.value)}}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.$user.uid!=t.createdBy.uid,expression:"$user.uid != item.createdBy.uid"}]},[e._v(" "+e._s(t.note)+" ")])]),e._v(" "),s("td",[s("b-img",{attrs:{rounded:"",width:"32",src:t.createdBy.photoURL}}),e._v(" "),s("b-badge",[e._v(e._s(t.createdBy.displayName))])],1)])}))])],1)},staticRenderFns:[]};var k=s("VU/8")(I,$,!1,function(e){s("pJhJ")},"data-v-adde10ac",null).exports,C={name:"Shops",firebase:{shops:{source:y.ref("/vue-app006/shops/")}},data:function(){return{loading:!0,deleteItemKey:""}},computed:{},methods:{create:function(){this.$firebaseRefs.shops.push({name:"[未命名的店家]",enabled:"N",genre:"飲料",address:"",telephone:"",location:"總部",totalItems:0})},mounted:function(){console.log(this.params.shopKey)},confirmDeleteItem:function(e){var t=this;y.ref("/vue-app006/items/").orderByChild("shopKey").equalTo(e[".key"]).once("value").then(function(s){t.deleteItemKey="",0===s.numChildren()?(t.deleteItemKey=e[".key"],t.$refs.myConfirmModalRef.show()):t.$refs.myAlertModalRef.show()})},deleteItem:function(){this.$firebaseRefs.shops.child(this.deleteItemKey).remove()},updateItem:function(e,t,s){this.$firebaseRefs.shops.child(e[".key"]).child(t).set(s)},formatDateTime:function(e){return b()(e).format("MM/DD HH:mm")}}},B={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"shops"},[s("b-modal",{ref:"myConfirmModalRef",attrs:{title:"系統訊息"},on:{ok:e.deleteItem}},[s("p",{staticClass:"my-4"},[e._v("確認是否刪除這個飲料團?")])]),e._v(" "),s("b-modal",{ref:"myAlertModalRef",attrs:{"ok-only":"",title:"系統訊息"}},[s("p",{staticClass:"my-4"},[e._v("請先刪除店家裡設定的所有項目,才能刪除店家資料.")])]),e._v(" "),s("table",{staticClass:"table"},[s("thead",[s("th",[s("b-button",{attrs:{variant:"primary"},on:{click:e.create}},[s("i",{staticClass:"fas fa-plus-circle"})])],1),e._v(" "),s("th"),e._v(" "),s("th",[e._v("店家名稱")]),e._v(" "),s("th",[e._v("類型")]),e._v(" "),s("th",[e._v("地址")]),e._v(" "),s("th",[e._v("電話")]),e._v(" "),s("th",[e._v("位置")]),e._v(" "),s("th",[e._v("項目")])]),e._v(" "),s("tbody",e._l(e.shops,function(t){return s("tr",[s("td",[s("b-button",{attrs:{variant:"danger"},on:{click:function(s){e.confirmDeleteItem(t)}}},[s("i",{staticClass:"fas fa-trash-alt"})]),e._v(" "),s("b-link",{attrs:{to:{name:"Items",params:{shopKey:t[".key"]}}}},[s("i",{staticClass:"fas fa-list"})])],1),e._v(" "),s("td",[s("b-form-radio-group",{attrs:{id:"btnradios1","button-variant":"outline-primary",buttons:"",options:[{text:"啟用",value:"Y"},{text:"關閉",value:"N"}],name:"radiosBtnDefault"},on:{change:function(s){e.updateItem(t,"enabled",s)}},model:{value:t.enabled,callback:function(s){e.$set(t,"enabled",s)},expression:"item.enabled"}})],1),e._v(" "),s("td",[s("input",{staticClass:"form-control",domProps:{value:t.name},on:{change:function(s){e.updateItem(t,"name",s.target.value)}}})]),e._v(" "),s("td",[s("select",{staticClass:"form-control",domProps:{value:t.genre},on:{change:function(s){e.updateItem(t,"genre",s.target.value)}}},[s("option",[e._v("飲料")]),e._v(" "),s("option",[e._v("中餐")]),e._v(" "),s("option",[e._v("炸物")])])]),e._v(" "),s("td",[e._v(e._s(t.address))]),e._v(" "),s("td",[e._v(e._s(t.telephone))]),e._v(" "),s("td",[s("select",{staticClass:"form-control",domProps:{value:t.location},on:{change:function(s){e.updateItem(t,"location",s.target.value)}}},[s("option",[e._v("---")]),e._v(" "),s("option",[e._v("廠區")]),e._v(" "),s("option",[e._v("總部")])])]),e._v(" "),s("td",[t.totalItems>0?s("b-badge",{attrs:{variant:"success"}},[e._v(" "+e._s(t.totalItems))]):e._e(),e._v(" "),0==t.totalItems?s("b-badge",{attrs:{variant:"danger"}},[e._v(" 尚未設定 ")]):e._e()],1)])}))])],1)},staticRenderFns:[]};var R=s("VU/8")(C,B,!1,function(e){s("7NFl")},"data-v-4f38f79b",null).exports,z={name:"Items",firebase:{shops:{source:y.ref("/vue-app006/shops/")}},data:function(){return{loading:!0,deleteItemKey:""}},computed:{sortedItems:function(){return this.items.sort(function(e,t){return e.name>t.name})}},created:function(){this.$bindAsObject("shop",y.ref("/vue-app006/shops/"+this.$route.params.shopKey)),this.$bindAsArray("items",y.ref("/vue-app006/items/").orderByChild("shopKey").equalTo(this.$route.params.shopKey))},methods:{create:function(){this.$firebaseRefs.items.push({shopKey:this.shop[".key"],name:"[未命名的商品]",size:"---",price:50}),this.$firebaseRefs.shop.child("totalItems").set(this.items.length)},copy:function(e){this.$firebaseRefs.items.push({shopKey:this.shop[".key"],name:e.name,size:e.size,price:e.price})},confirmDeleteItem:function(e){this.$refs.myModalRef.show(),this.deleteItemKey=e[".key"]},deleteItem:function(){this.$firebaseRefs.items.child(this.deleteItemKey).remove(),this.$firebaseRefs.shop.child("totalItems").set(this.items.length)},updateItem:function(e,t,s){this.$firebaseRefs.items.child(e[".key"]).child(t).set(s)},formatDateTime:function(e){return b()(e).format("MM/DD HH:mm")},buttonGroupChage:function(e){console.log(e)}}},N={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"items"},[s("b-modal",{ref:"myModalRef",attrs:{id:"modal1",title:"系統訊息"},on:{ok:e.deleteItem}},[s("p",{staticClass:"my-4"},[e._v("確認是否刪除這個項目?")])]),e._v(" "),s("h3",[e._v("商品設定 "),s("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.shop.name))])]),e._v(" "),s("table",{staticClass:"table"},[s("thead",[s("th",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.create}},[s("i",{staticClass:"fas fa-plus-square"})])]),e._v(" "),s("th",[e._v("品名")]),e._v(" "),s("th",[e._v("規格")]),e._v(" "),s("th",{staticStyle:{width:"100px"}},[e._v("價格")])]),e._v(" "),s("tbody",e._l(e.sortedItems,function(t){return s("tr",[s("td",[s("div",[s("b-button",{attrs:{variant:"danger"},on:{click:function(s){e.confirmDeleteItem(t)}}},[s("i",{staticClass:"fas fa-trash-alt"})]),e._v(" "),s("b-button",{attrs:{variant:"success"},on:{click:function(s){e.copy(t)}}},[s("i",{staticClass:"fas fa-copy"})])],1)]),e._v(" "),s("td",[s("input",{staticClass:"form-control",domProps:{value:t.name},on:{change:function(s){e.updateItem(t,"name",s.target.value)}}})]),e._v(" "),s("td",[s("select",{staticClass:"form-control",domProps:{value:t.size},on:{change:function(s){e.updateItem(t,"size",s.target.value)}}},[s("option",[e._v("---")]),e._v(" "),s("option",[e._v("小")]),e._v(" "),s("option",[e._v("中")]),e._v(" "),s("option",[e._v("大")]),e._v(" "),s("option",[e._v("瓶")])])]),e._v(" "),s("td",[s("input",{staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.price},on:{change:function(s){e.updateItem(t,"price",s.target.value)}}})])])}))])],1)},staticRenderFns:[]};var x=s("VU/8")(z,N,!1,function(e){s("F0PK")},"data-v-23aeb9aa",null).exports;a.a.use(l.a);var K=new l.a({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:f},{path:"/groups",name:"Groups",component:w,meta:{requiresAuth:!0}},{path:"/orders/:groupKey",name:"Orders",component:k,meta:{requiresAuth:!0}},{path:"/shops",name:"Shops",component:R,meta:{requiresAuth:!0}},{path:"/items/:shopKey",name:"Items",component:x,meta:{requiresAuth:!0}}]});K.beforeEach(function(e,t,s){var r=i.a.auth().currentUser,n=e.matched.some(function(e){return e.meta.requiresAuth});r&&(a.a.prototype.$user.displayName=r.displayName,a.a.prototype.$user.photoURL=r.photoURL,a.a.prototype.$user.email=r.email,a.a.prototype.$user.uid=r.uid),n&&!r?s("login"):!n&&r?s("groups"):s()});var D=K;a.a.config.productionTip=!1,a.a.use(n.a),a.a.use(u.a),a.a.prototype.$user={displayName:"",photoURL:"",email:"",uid:""};var M=void 0;i.a.auth().onAuthStateChanged(function(e){M||(M=new a.a({el:"#app",router:D,components:{App:d},template:"<App/>"}))})},P0BK:function(e,t){},lpB1:function(e,t){},pJhJ:function(e,t){},uslO:function(e,t,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(e){return s(n(e))}function n(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="uslO"},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2dcc573574e605a49644.js.map