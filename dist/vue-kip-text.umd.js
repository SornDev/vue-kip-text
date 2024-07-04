(function(i,s){typeof exports=="object"&&typeof module<"u"?module.exports=s(require("vue")):typeof define=="function"&&define.amd?define(["vue"],s):(i=typeof globalThis<"u"?globalThis:i||self,i["vue-kip-text"]=s(i.Vue))})(this,function(i){"use strict";const s=(t,l)=>{const n=t.__vccOpts||t;for(const[o,r]of l)n[o]=r;return n},a={name:"kip-text",props:{number:{type:Number,required:!0}},data(){return{}},methods:{KipText(t){let u="";if(u=t.toString().split(".")[1],t===0)return"ສູນ";let e=t<0?"- ":"",p=Math.abs(t-Math.floor(t));if((t<0||p!==0)&&(t=Math.abs(Math.floor(t))),t>=1e12&&(e+=this.TextDigitGroup(Math.floor(t/1e12))+"ພັນຕື້",t-=Math.floor(t/1e12)*1e12),t>=1e9&&(e+=this.TextDigitGroup(Math.floor(t/1e9))+"ຕື້",t-=Math.floor(t/1e9)*1e9),t>=1e6&&(e+=this.TextDigitGroup(Math.floor(t/1e6))+"ລ້ານ",t%=1e6),t>=1e5&&(e+=this.TextDigitGroup(Math.floor(t/1e5))+"ແສນ",t%=1e5),t>=1e3&&(e+=this.TextDigitGroup(Math.floor(t/1e3))+"ພັນ",t%=1e3),t>=1&&(e+=this.TextDigitGroup(t)),u){let T=u[0]==0?"ສູນ":"";return e+"ຈ້ຳ"+T+this.TextDigitGroup(u)+"ອັດ"}else return e+"ກີບຖ້ວນ"},TextDigitGroup(t){const l=["","ໜຶ່ງ","ສອງ","ສາມ","ສີ່","ຫ້າ","ຫົກ","ເຈັດ","ແປດ","ເກົ້າ"],n=["","ສິບ","ຊາວ","ສາມສິບ","ສີ່ສິບ","ຫ້າສິບ","ຫົກສິບ","ເຈັດສິບ","ແປດສິບ","ເກົ້າສິບ"];let o="",r=!1;return Math.floor(t/100)!==0&&(o=l[Math.floor(t/100)]+"ຮ້ອຍ",r=!0),t%=100,Math.floor(t/10)!==0&&(o+=n[Math.floor(t/10)],r=!0),t%=10,(t!==0||!r)&&(o+=l[t]),o}}};function h(t,l,n,o,r,f){return i.openBlock(),i.createElementBlock("span",null,i.toDisplayString(f.KipText(n.number)),1)}return s(a,[["render",h]])});
