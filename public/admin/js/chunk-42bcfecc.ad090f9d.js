(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42bcfecc"],{4280:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-2fa-value"},[e.tfa_secret?n("v-notice",{staticClass:"qr-info",attrs:{icon:"info"}},[e._v("\n    Scan this code in your authenticator app\n  ")]):e._e(),e.tfa_secret?n("qr-code",{staticClass:"qr",attrs:{value:"otpauth://totp/Directus?secret="+e.tfa_secret,options:{width:200}}}):e._e(),e.value?e._e():n("v-button",{attrs:{loading:e.loading},on:{click:e.getToken}},[e._v("Enable 2FA")]),e.value?n("v-button",{on:{click:e.removeValue}},[e._v("Disable 2FA")]):e._e()],1)},l=[],i=n("8db2"),u=n.n(i),r=n("d56f"),o={name:"Interface2faValue",components:{QrCode:r["a"]},mixins:[u.a],data:function(){return{loading:!1,error:null,tfa_secret:null}},methods:{getToken:function(){var e=this;this.loading=!0,this.$api.get("/utils/2fa_secret").then(function(e){return e["2fa_secret"]}).then(function(t){e.$emit("input",t),e.tfa_secret=t}).catch(function(t){e.error=t}).finally(function(){return e.loading=!1})},removeValue:function(){this.$emit("input",null),this.tfa_secret=null}}},c=o,s=(n("b7de"),n("2877")),f=Object(s["a"])(c,a,l,!1,null,"e94a7266",null);t["default"]=f.exports},"8a63":function(e,t,n){},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},b7de:function(e,t,n){"use strict";var a=n("8a63"),l=n.n(a);l.a}}]);
//# sourceMappingURL=chunk-42bcfecc.ad090f9d.js.map