webpackJsonp([1],{"4bvI":function(t,e,a){"use strict";function n(t){a("tZOj")}var s=a("jvIw"),o=a("Knvh"),i=a("VU/8"),l=n,c=i(s.a,o.a,!1,l,"data-v-5abbbe2f",null);e.a=c.exports},"80Oc":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("left-nav"),t._v(" "),a("div",{staticClass:"main"},[a("router-view")],1)],1)},s=[],o={render:n,staticRenderFns:s};e.a=o},"8s4O":function(t,e,a){"use strict";e.a={name:"ElButton",props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean},methods:{handleClick:function(t){this.$emit("click",t)},handleInnerClick:function(t){this.disabled&&t.stopPropagation()}}}},EMXe:function(t,e,a){"use strict";var n=a("8s4O"),s=a("Gw5P"),o=a("VU/8"),i=o(n.a,s.a,!1,null,null,null);e.a=i.exports},Fcqw:function(t,e,a){"use strict";e.a={name:"ElTabPane",componentName:"ElTabPane",props:{label:String,labelContent:Function,name:String,closable:Boolean,disabled:Boolean},data:function(){return{index:null}},computed:{isClosable:function(){return this.closable||this.$parent.closable},active:function(){return this.$parent.currentName===(this.name||this.index)}},mounted:function(){this.$parent.addPanes(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.$parent.removePanes(this)},watch:{label:function(){this.$parent.$forceUpdate()}}}},Gw5P:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",t.size?"el-button--"+t.size:"",{"is-disabled":t.disabled,"is-loading":t.loading,"is-plain":t.plain}],attrs:{disabled:t.disabled,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.loading?a("i",{staticClass:"el-icon-loading",on:{click:t.handleInnerClick}}):t._e(),t._v(" "),t.icon&&!t.loading?a("i",{class:"el-icon-"+t.icon,on:{click:t.handleInnerClick}}):t._e(),t._v(" "),t.$slots.default?a("span",{on:{click:t.handleInnerClick}},[t._t("default")],2):t._e()])},s=[],o={render:n,staticRenderFns:s};e.a=o},Knvh:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pos"},[a("el-row",[a("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[a("el-tabs",[a("el-tab-pane",{attrs:{label:"Order"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"goodsName",label:"Items"}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"Qty",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"Price",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{label:"Add",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.delSingleGoods(e.row)}}},[t._v("Delete")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrderList(e.row)}}},[t._v("Add")])]}}])})],1),t._v(" "),a("div",{staticClass:"totalDiv"},[a("small",[t._v("Qty:")]),t._v("\n            "+t._s(t.totalCount)+"     \n            "),a("small",[t._v("Amount：")]),t._v("\n            "+t._s(t.totalMoney)+" $\n          ")]),t._v(" "),a("div",{staticClass:"div-btn"},[a("el-button",{attrs:{type:"danger"},on:{click:t.delAllItems}},[t._v("Delete")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:t.checkOut}},[t._v("Check")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Pending"}},[t._v("\n          Pending\n        ")]),t._v(" "),a("el-tab-pane",{attrs:{label:"Take away"}},[t._v("\n          Take away\n        ")])],1)],1),t._v(" "),a("el-col",{attrs:{span:17}},[a("div",{staticClass:"best-sellers"},[a("div",{staticClass:"item-title"},[t._v("\n          Best Sellerss\n        ")]),t._v(" "),a("div",{staticClass:"item-list"},[a("ul",t._l(t.bestSellers,function(e){return a("li",{on:{click:function(a){t.addOrderList(e)}}},[a("span",[t._v(t._s(e.goodsName))]),t._v(" "),a("span",{staticClass:"item-price"},[t._v("$"+t._s(e.price))])])}))])]),t._v(" "),a("div",{staticClass:"item-type"},[a("el-tabs",[a("el-tab-pane",{attrs:{label:"Burger"}},[a("div",[a("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(e){return a("li",{on:{click:function(a){t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("$"+t._s(e.price))])])}))])]),t._v(" "),a("el-tab-pane",{attrs:{label:"Drink"}},[a("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(e){return a("li",{on:{click:function(a){t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("$"+t._s(e.price))])])}))]),t._v(" "),a("el-tab-pane",{attrs:{label:"Snacks & Sides"}},[a("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(e){return a("li",{on:{click:function(a){t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("$"+t._s(e.price))])])}))]),t._v(" "),a("el-tab-pane",{attrs:{label:"Sweet Treats"}},[a("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(e){return a("li",{on:{click:function(a){t.addOrderList(e)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:e.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("$"+t._s(e.price))])])}))])],1)],1)])],1)],1)},s=[],o={render:n,staticRenderFns:s};e.a=o},M93x:function(t,e,a){"use strict";function n(t){a("Ppji")}var s=a("xJD8"),o=a("80Oc"),i=a("VU/8"),l=n,c=i(s.a,o.a,!1,l,null,null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("M93x"),o=a("YaEn"),i=a("zL8q"),l=a.n(i),c=a("q8zI");a.n(c);n.default.config.productionTip=!1,n.default.use(l.a),new n.default({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},Ppji:function(t,e){},UWFm:function(t,e,a){"use strict";e.a={}},WAR4:function(t,e){},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),s=a("/ocq"),o=a("4bvI");n.default.use(s.a),e.a=new s.a({routes:[{path:"/",component:o.a,name:"Pos"}]})},YcAy:function(t,e,a){"use strict";function n(t){a("WAR4")}var s=a("UWFm"),o=a("m0be"),i=a("VU/8"),l=n,c=i(s.a,o.a,!1,l,null,null);e.a=c.exports},jvIw:function(t,e,a){"use strict";var n=a("prHv"),s=a("EMXe"),o=a("mtWM"),i=a.n(o);e.a={components:{ElButton:s.a,ElTabPane:n.a},name:"pos",data:function(){return{tableData:[],bestSellers:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalMoney:0,totalCount:0}},created:function(){var t=this;i.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(e){t.bestSellers=e.data}),i.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(e){t.type0Goods=e.data[0],t.type1Goods=e.data[1],t.type2Goods=e.data[2],t.type3Goods=e.data[3]})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},methods:{addOrderList:function(t){var e=this;this.totalMoney=0,this.totalCount=0;for(var a=!1,n=0;n<this.tableData.length;n++)this.tableData[n].goodsId===t.goodsId&&(a=!0);if(a){this.tableData.filter(function(e){return e.goodsId===t.goodsId})[0].count++}else{var s={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(s)}this.getAllMoney(),this.tableData.forEach(function(t){e.totalCount+=t.count,e.totalMoney=e.totalMoney+t.price*t.count})},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(e){return e.goodsId!==t.goodsId}),this.getAllMoney()},delAllItems:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},checkOut:function(){0!==this.totalCount?(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"Thank you for your business!",type:"success"})):this.$message.error("No item in list")},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(e){t.totalCount+=e.count,t.totalMoney=t.totalMoney+e.price*e.count})}}}},m0be:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-nav"},[a("ul",[a("li",[a("i",{staticClass:"icon iconfont icon-meiyuan"}),t._v(" "),a("div",[t._v("Order")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),a("div",[t._v("Shop")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),a("div",[t._v("Products")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),a("div",[t._v("Member")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-tongji"}),t._v(" "),a("div",[t._v("Statics")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-gongnengjianyi"}),t._v(" "),a("div",[t._v("Setting")])])])])}],o={render:n,staticRenderFns:s};e.a=o},prHv:function(t,e,a){"use strict";var n=a("Fcqw"),s=a("t60O"),o=a("VU/8"),i=o(n.a,s.a,!1,null,null,null);e.a=i.exports},q8zI:function(t,e){},t60O:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"el-tab-pane"},[t._t("default")],2)},s=[],o={render:n,staticRenderFns:s};e.a=o},tZOj:function(t,e){},xJD8:function(t,e,a){"use strict";var n=a("YcAy");e.a={components:{leftNav:n.a},name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.07294f189b3e83314ec4.js.map