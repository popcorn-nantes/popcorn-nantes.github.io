(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{172:function(t,e,o){var content=o(175);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("580ab874",content,!0,{sourceMap:!1})},174:function(t,e,o){"use strict";var n=o(172);o.n(n).a},175:function(t,e,o){(t.exports=o(42)(!1)).push([t.i,".card-image[data-v-5e3eb9e7]{position:relative}.photo-container[data-v-5e3eb9e7]{height:300px}.photo[data-v-5e3eb9e7]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.name[data-v-5e3eb9e7]{text-align:center;height:40px;padding:8px;position:absolute;bottom:0;width:100%;color:#fff}.name-overlay[data-v-5e3eb9e7]{background:#000;opacity:.6}",""])},178:function(t,e,o){"use strict";var n={props:{tags:{type:Array,required:!0}}},r=o(9),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.tags,function(e){return o("span",{key:e,staticClass:"tag is-light",staticStyle:{"margin-right":"5px"}},[t._v(t._s(e))])}),0)},[],!1,null,null,null);e.a=component.exports},179:function(t,e,o){"use strict";var n={props:{person:{type:Object,required:!0}}},r=(o(174),o(9)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card-image"},[o("div",{staticClass:"photo-container"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.person.photo,expression:"person.photo"}],staticClass:"photo"}),t._v(" "),o("div",{staticClass:"name name-overlay"})]),t._v(" "),o("p",{staticClass:"name"},[t._v(t._s(t.person.prenom)+" "+t._s(t.person.nom))])])},[],!1,null,"5e3eb9e7",null);e.a=component.exports},180:function(t,e,o){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}o.d(e,"a",function(){return n})},188:function(t,e,o){"use strict";o.r(e);var n=o(180),r=o(178),c=o(179),l={components:{Tags:r.a,PersonCardPhoto:c.a},props:{person:{type:Object,required:!0}},data:function(){return{showModal:!1}}},d=o(9),v=Object(d.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"person container section"},[o("div",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("PersonCardPhoto",{attrs:{person:t.person}})],1),t._v(" "),o("div",{staticClass:"column is-two-thirds"},[o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-two-thirds"},[o("h1",{staticClass:"title",staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(t.person.prenom)+" "+t._s(t.person.nom))]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v(t._s(t.person.titre))]),t._v(" "),o("h2",{staticClass:"subtitle"},[o("Tags",{staticClass:"domaines-metiers",attrs:{tags:t.person.domaines_metiers}})],1),t._v(" "),o("h2",{staticClass:"subtitle"},[o("Tags",{staticClass:"technologies",attrs:{tags:t.person.technologies}})],1)]),t._v(" "),o("div",{staticClass:"column"},[o("button",{staticClass:"button is-primary",on:{click:function(e){t.showModal=!0}}},[o("img",{staticStyle:{width:"20px","padding-right":"5px"},attrs:{src:"/icons/envelope.svg"}}),t._v(" "),o("span",[t._v("Proposer un projet")])])])]),t._v(" "),o("div",{staticClass:"content",domProps:{innerHTML:t._s(t.person.$html)}})])]),t._v(" "),t.showModal?o("div",{staticClass:"modal",class:{"is-active":t.showModal}},[o("div",{staticClass:"modal-background",on:{click:function(e){t.showModal=!1}}}),t._v(" "),o("div",{staticClass:"modal-content has-text-centered"},[o("div",{staticClass:"box"},[o("h1",{staticClass:"title"},[t._v("Contacter "+t._s(t.person.prenom)+" "+t._s(t.person.nom))]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v(t._s(t.person.titre))]),t._v(" "),o("p",{staticClass:"is-size-5",staticStyle:{"margin-top":"1rem"}},[t._v(t._s(t.person.mail))]),t._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:t.person.telephone,expression:"person.telephone"}],staticClass:"is-size-5",staticStyle:{"margin-top":"1rem"}},[t._v(t._s(t.person.telephone))]),t._v(" "),t._m(0),t._v(" "),o("div",{staticStyle:{"font-size":"3rem"}},[t._v("🍿")])])]),t._v(" "),o("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"fermer"},on:{click:function(e){t.showModal=!1}}})]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"margin-top":"2rem"}},[e("em",[this._v("Indiquez-lui que vous l'avez trouvé·e sur Popcorn :)")])])}],!1,null,null,null).exports,content=o(173);function m({title:title,description:t,image:image,url:e}){return[{hid:"og:site_name",name:"og:site_name",content:"Popcorn"},{hid:"og:url",property:"og:url",content:e},{hid:"og:title",property:"og:title",content:title},{hid:"og:url",property:"og:url",content:e},{hid:"og:image",property:"og:image",content:image},{hid:"og:description",property:"og:description",content:t},{hid:"twitter:card",name:"twitter:card",content:"summary"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:image}]}var h={components:{Person:v},computed:{person:function(){return Object(content.b)(this.$route.params.slug)}},head:function(){if(!this.person)return{};var title="Profil de ".concat(this.person.prenom," ").concat(this.person.nom,", freelance ").concat(this.person.technologies.join(", ")),t="Popcorn : trouvez un développeur freelance".concat(""," avec (vraiment) 0% de commission pour tout le monde"),image="".concat("https://popcorn-nantes.github.io").concat(this.person.photo),e="".concat("https://popcorn-nantes.github.io").concat(this.$route.path);return{meta:Object(n.a)(m({title:title,description:t,image:image,url:e}))}}},_=Object(d.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container section"},[this.person?e("Person",{attrs:{person:this.person}}):e("div",[this._v("Désolé, cette page n'existe pas ou a été dépubliée. 😭")])],1)},[],!1,null,null,null);e.default=_.exports}}]);