webpackJsonp([1],{GiV6:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=o("7+uW"),n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"quote-list"},[o("h1",[t._v(t._s(t.title))]),t._v(" "),o("h3",[t._v(t._s(t.subtitle)+" ")]),t._v(" "),o("div",[o("ul",t._l(t.quotes,function(e){return o("li",{key:e.quote},[o("p",[t._v('\n          "'+t._s(e.quote)+'"\n        ')]),t._v("\n          - "),o("em",[t._v(" "+t._s(e.author)+" ")]),t._v(" "),o("button",{staticClass:"btn btn-rmv",on:{click:function(o){t.deleteQuote(e)}}},[t._v("X")]),t._v(" "),o("hr")])}))]),t._v(" "),o("div",{attrs:{id:"quote-input-block"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.input_val_quote,expression:"input_val_quote"}],attrs:{id:"quote-input",type:"text",placeholder:"Quote"},domProps:{value:t.input_val_quote},on:{input:function(e){e.target.composing||(t.input_val_quote=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.input_val_author,expression:"input_val_author"}],attrs:{id:"author-input",type:"text",placeholder:"Author"},domProps:{value:t.input_val_author},on:{input:function(e){e.target.composing||(t.input_val_author=e.target.value)}}}),t._v(" "),o("button",{staticClass:"btn btn-primary",on:{click:function(e){t.addQuote()}}},[t._v("Add")])])])},staticRenderFns:[]};var a=o("VU/8")({name:"to-do",data:function(){return{title:"You Better Work!",subtitle:"#wordstoliveyourlifeby",quotes:[{author:"Rupaul",quote:"If you can’t love yourself how in the hell you gonna love somebody else."},{author:"Rupaul",quote:"What other people think of you is none of your business."},{author:"Rupaul",quote:"Throwing shade takes a bit of creativity, being a bitch takes none"},{author:"Rupaul",quote:"Look at me — a big old black man under all of this makeup, and if I can look beautiful, so can you"},{author:"Rupaul",quote:"When you become the image of your own imagination, it’s the most powerful thing you could ever do."},{author:"Rupaul",quote:"Expectations lead to resentments and when you allow people to just be themselves the relationship can really grow"},{author:"Rupaul",quote:"Dont F*** it up!"}],input_val_quote:"",input_val_author:""}},methods:{addQuote:function(){this.quotes.push({author:this.input_val_author,quote:this.input_val_quote})},deleteQuote:function(t){this.quotes.pop(t)}}},n,!1,function(t){o("GiV6")},"data-v-1adec681",null).exports,i={name:"App",components:{QuoteList:a}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{id:"rupaul-header",src:o("ScgN")}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=o("VU/8")(i,r,!1,function(t){o("oLmN")},null,null).exports,s=o("/ocq");u.a.use(s.a);var p=new s.a({routes:[{path:"/",name:"QuoteList",component:a}]});u.a.config.productionTip=!1,new u.a({el:"#app",router:p,components:{App:l},template:"<App/>"})},ScgN:function(t,e,o){t.exports=o.p+"static/img/rupaul.a6323c6.jpg"},oLmN:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.70cf14208bc4696e8b6f.js.map