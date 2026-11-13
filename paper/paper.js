/* 안드레99 모의투자 탭 묶음 */
/*!
 * @license
 * TradingView Lightweight Charts™ v5.2.1
 * Copyright (c) 2026 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!function(){"use strict";const t={title:"",visible:!0,hitTestTolerance:3,lastValueVisible:!0,priceLineVisible:!0,priceLineSource:0,priceLineWidth:1,priceLineColor:"",priceLineStyle:2,baseLineVisible:!0,baseLineWidth:1,baseLineColor:"#B2B5BE",baseLineStyle:0,priceFormat:{type:"price",precision:2,minMove:.01}};var i,n;function s(t,i){const n=function(t,i){switch(t){case 0:default:return[];case 1:return[i,i];case 2:return[2*i,2*i];case 3:return[6*i,6*i];case 4:return[i,4*i]}}(i,t.lineWidth);return t.setLineDash(n),n}function e(t,i,n,s){t.beginPath();const e=t.lineWidth%2?.5:0;t.moveTo(n,i+e),t.lineTo(s,i+e),t.stroke()}function r(t,i){if(!t)throw new Error("Assertion failed"+(i?": "+i:""))}function h(t){if(void 0===t)throw new Error("Value is undefined");return t}function a(t){if(null===t)throw new Error("Value is null");return t}function l(t){return a(h(t))}!function(t){t[t.Simple=0]="Simple",t[t.WithSteps=1]="WithSteps",t[t.Curved=2]="Curved"}(i||(i={})),function(t){t[t.Solid=0]="Solid",t[t.Dotted=1]="Dotted",t[t.Dashed=2]="Dashed",t[t.LargeDashed=3]="LargeDashed",t[t.SparseDotted=4]="SparseDotted"}(n||(n={}));class o{constructor(){this.t=[]}i(t,i,n){const s={h:t,l:i,o:!0===n};this.t.push(s)}_(t){const i=this.t.findIndex((i=>t===i.h));i>-1&&this.t.splice(i,1)}u(t){this.t=this.t.filter((i=>i.l!==t))}p(t,i,n){const s=[...this.t];this.t=this.t.filter((t=>!t.o)),s.forEach((s=>s.h(t,i,n)))}v(){return this.t.length>0}m(){this.t=[]}}function _(t,...i){for(const n of i)for(const i in n)void 0!==n[i]&&Object.prototype.hasOwnProperty.call(n,i)&&!["__proto__","constructor","prototype"].includes(i)&&("object"!=typeof n[i]||void 0===t[i]||Array.isArray(n[i])?t[i]=n[i]:_(t[i],n[i]));return t}function u(t){return"number"==typeof t&&isFinite(t)}function c(t){return"number"==typeof t&&t%1==0}function d(t){return"string"==typeof t}function f(t){return"boolean"==typeof t}function p(t){const i=t;if(!i||"object"!=typeof i)return i;let n,s,e;for(s in n=Array.isArray(i)?[]:{},i)i.hasOwnProperty(s)&&(e=i[s],n[s]=e&&"object"==typeof e?p(e):e);return n}function v(t){return null!==t}function m(t){return null===t?void 0:t}const w="-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";function g(t,i,n){return void 0===i&&(i=w),`${n=void 0!==n?`${n} `:""}${t}px ${i}`}class M{constructor(t){this.M={S:1,C:5,P:NaN,k:"",T:"",R:"",D:"",I:0,V:0,B:0,A:0,L:0},this.O=t}N(){const t=this.M,i=this.F(),n=this.W();return t.P===i&&t.T===n||(t.P=i,t.T=n,t.k=g(i,n),t.A=2.5/12*i,t.I=t.A,t.V=i/12*t.C,t.B=i/12*t.C,t.L=0),t.R=this.H(),t.D=this.U(),this.M}H(){return this.O.N().layout.textColor}U(){return this.O.$()}F(){return this.O.N().layout.fontSize}W(){return this.O.N().layout.fontFamily}}function b(t){return t<0?0:t>255?255:Math.round(t)||0}function S(t){return.199*t[0]+.687*t[1]+.114*t[2]}class x{constructor(t,i){this.j=new Map,this.q=t,i&&(this.j=i)}Y(t,i){if("transparent"===t)return t;const n=this.K(t),s=n[3];return`rgba(${n[0]}, ${n[1]}, ${n[2]}, ${i*s})`}G(t){const i=this.K(t);return{Z:`rgb(${i[0]}, ${i[1]}, ${i[2]})`,X:S(i)>160?"black":"white"}}J(t){return S(this.K(t))}tt(t,i,n){const[s,e,r,h]=this.K(t),[a,l,o,_]=this.K(i),u=[b(s+n*(a-s)),b(e+n*(l-e)),b(r+n*(o-r)),(c=h+n*(_-h),c<=0||c>1?Math.min(Math.max(c,0),1):Math.round(1e4*c)/1e4)];var c;return`rgba(${u[0]}, ${u[1]}, ${u[2]}, ${u[3]})`}K(t){const i=this.j.get(t);if(i)return i;const n=function(t){const i=document.createElement("div");i.style.display="none",document.body.appendChild(i),i.style.color=t;const n=window.getComputedStyle(i).color;return document.body.removeChild(i),n}(t),s=n.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);if(!s){if(this.q.length)for(const i of this.q){const n=i(t);if(n)return this.j.set(t,n),n}throw new Error(`Failed to parse color: ${t}`)}const e=[parseInt(s[1],10),parseInt(s[2],10),parseInt(s[3],10),s[4]?parseFloat(s[4]):1];return this.j.set(t,e),e}}class C{constructor(){this.it=[]}nt(t){this.it=t}st(t,i,n){this.it.forEach((s=>{s.st(t,i,n)}))}}class y{st(t,i,n){t.useBitmapCoordinateSpace((t=>this.et(t,i,n)))}}class P extends y{constructor(){super(...arguments),this.rt=null}ht(t){this.rt=t}et({context:t,horizontalPixelRatio:i,verticalPixelRatio:n}){if(null===this.rt||null===this.rt.lt)return;const s=this.rt.lt,e=this.rt,r=Math.max(1,Math.floor(i))%2/2,h=h=>{t.beginPath();for(let a=s.to-1;a>=s.from;--a){const s=e.ot[a],l=Math.round(s._t*i)+r,o=s.ut*n,_=h*n+r;t.moveTo(l,o),t.arc(l,o,_,0,2*Math.PI)}t.fill()};e.ct>0&&(t.fillStyle=e.dt,h(e.ft+e.ct)),t.fillStyle=e.vt,h(e.ft)}}function k(){return{ot:[{_t:0,ut:0,wt:0,gt:0}],vt:"",dt:"",ft:0,ct:0,lt:null}}const T={from:0,to:1};class R{constructor(t,i,n){this.Mt=new C,this.bt=[],this.St=[],this.xt=!0,this.O=t,this.Ct=i,this.yt=n,this.Mt.nt(this.bt)}Pt(t){this.kt(),this.xt=!0}Tt(){return this.xt&&(this.Rt(),this.xt=!1),this.Mt}kt(){const t=this.yt.Dt();t.length!==this.bt.length&&(this.St=t.map(k),this.bt=this.St.map((t=>{const i=new P;return i.ht(t),i})),this.Mt.nt(this.bt))}Rt(){const t=2===this.Ct.N().mode||!this.Ct.It(),i=this.yt.Vt(),n=this.Ct.Et(),s=this.O.Bt();this.kt(),i.forEach(((i,e)=>{const r=this.St[e],h=i.At(n),a=i.zt();!t&&null!==h&&i.It()&&null!==a?(r.vt=h.Lt,r.ft=h.ft,r.ct=h.Ot,r.ot[0].gt=h.gt,r.ot[0].ut=i.Ft().Nt(h.gt,a.Wt),r.dt=h.Ht??this.O.Ut(r.ot[0].ut/i.Ft().$t()),r.ot[0].wt=n,r.ot[0]._t=s.jt(n),r.lt=T):r.lt=null}))}}class D extends y{constructor(t){super(),this.qt=t}et({context:t,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:r}){if(null===this.qt)return;const h=this.qt.Yt.It,a=this.qt.Kt.It;if(!h&&!a)return;const l=Math.round(this.qt._t*n),o=Math.round(this.qt.ut*r);t.lineCap="butt",h&&l>=0&&(t.lineWidth=Math.floor(this.qt.Yt.ct*n),t.strokeStyle=this.qt.Yt.R,t.fillStyle=this.qt.Yt.R,s(t,this.qt.Yt.Gt),function(t,i,n,s){t.beginPath();const e=t.lineWidth%2?.5:0;t.moveTo(i+e,n),t.lineTo(i+e,s),t.stroke()}(t,l,0,i.height)),a&&o>=0&&(t.lineWidth=Math.floor(this.qt.Kt.ct*r),t.strokeStyle=this.qt.Kt.R,t.fillStyle=this.qt.Kt.R,s(t,this.qt.Kt.Gt),e(t,o,0,i.width))}}class I{constructor(t,i){this.xt=!0,this.Zt={Yt:{ct:1,Gt:0,R:"",It:!1},Kt:{ct:1,Gt:0,R:"",It:!1},_t:0,ut:0},this.Xt=new D(this.Zt),this.Jt=t,this.yt=i}Pt(){this.xt=!0}Tt(t){return this.xt&&(this.Rt(),this.xt=!1),this.Xt}Rt(){const t=this.Jt.It(),i=this.yt.Qt().N().crosshair,n=this.Zt;if(2===i.mode)return n.Kt.It=!1,void(n.Yt.It=!1);n.Kt.It=t&&this.Jt.ti(this.yt),n.Yt.It=t&&this.Jt.ii(),n.Kt.ct=i.horzLine.width,n.Kt.Gt=i.horzLine.style,n.Kt.R=i.horzLine.color,n.Yt.ct=i.vertLine.width,n.Yt.Gt=i.vertLine.style,n.Yt.R=i.vertLine.color,n._t=this.Jt.ni(),n.ut=this.Jt.si()}}function V(t,i,n,s,e,r){t.fillRect(i+r,n,s-2*r,r),t.fillRect(i+r,n+e-r,s-2*r,r),t.fillRect(i,n,r,e),t.fillRect(i+s-r,n,r,e)}function E(t,i,n,s,e,r){t.save(),t.globalCompositeOperation="copy",t.fillStyle=r,t.fillRect(i,n,s,e),t.restore()}function B(t,i,n,s,e,r){t.beginPath(),t.roundRect?t.roundRect(i,n,s,e,r):(t.lineTo(i+s-r[1],n),0!==r[1]&&t.arcTo(i+s,n,i+s,n+r[1],r[1]),t.lineTo(i+s,n+e-r[2]),0!==r[2]&&t.arcTo(i+s,n+e,i+s-r[2],n+e,r[2]),t.lineTo(i+r[3],n+e),0!==r[3]&&t.arcTo(i,n+e,i,n+e-r[3],r[3]),t.lineTo(i,n+r[0]),0!==r[0]&&t.arcTo(i,n,i+r[0],n,r[0]))}function A(t,i,n,s,e,r,h=0,a=[0,0,0,0],l=""){if(t.save(),!h||!l||l===r)return B(t,i,n,s,e,a),t.fillStyle=r,t.fill(),void t.restore();const o=h/2;var _;B(t,i+o,n+o,s-h,e-h,(_=-o,a.map((t=>0===t?t:t+_)))),"transparent"!==r&&(t.fillStyle=r,t.fill()),"transparent"!==l&&(t.lineWidth=h,t.strokeStyle=l,t.closePath(),t.stroke()),t.restore()}function z(t,i,n,s,e,r,h){t.save(),t.globalCompositeOperation="copy";const a=t.createLinearGradient(0,0,0,e);a.addColorStop(0,r),a.addColorStop(1,h),t.fillStyle=a,t.fillRect(i,n,s,e),t.restore()}class L{constructor(t,i){this.ht(t,i)}ht(t,i){this.qt=t,this.ei=i}$t(t,i){return this.qt.It?t.P+t.A+t.I:0}st(t,i,n,s){if(!this.qt.It||0===this.qt.ri.length)return;const e=this.qt.R,r=this.ei.Z,h=t.useBitmapCoordinateSpace((t=>{const h=t.context;h.font=i.k;const a=this.hi(t,i,n,s),l=a.ai;return a.li?A(h,l.oi,l._i,l.ui,l.ci,r,l.di,[l.ft,0,0,l.ft],r):A(h,l.fi,l._i,l.ui,l.ci,r,l.di,[0,l.ft,l.ft,0],r),this.qt.pi&&(h.fillStyle=e,h.fillRect(l.fi,l.mi,l.wi-l.fi,l.gi)),this.qt.Mi&&(h.fillStyle=i.D,h.fillRect(a.li?l.bi-l.di:0,l._i,l.di,l.Si-l._i)),a}));t.useMediaCoordinateSpace((({context:t})=>{const n=h.xi;t.font=i.k,t.textAlign=h.li?"right":"left",t.textBaseline="middle",t.fillStyle=e,t.fillText(this.qt.ri,n.Ci,(n._i+n.Si)/2+n.yi)}))}hi(t,i,n,s){const{context:e,bitmapSize:r,mediaSize:h,horizontalPixelRatio:a,verticalPixelRatio:l}=t,o=this.qt.pi||!this.qt.Pi?i.C:0,_=this.qt.ki?i.S:0,u=i.A+this.ei.Ti,c=i.I+this.ei.Ri,d=i.V,f=i.B,p=this.qt.ri,v=i.P,m=n.Di(e,p),w=Math.ceil(n.Ii(e,p)),g=v+u+c,M=i.S+d+f+w+o,b=Math.max(1,Math.floor(l));let S=Math.round(g*l);S%2!=b%2&&(S+=1);const x=_>0?Math.max(1,Math.floor(_*a)):0,C=Math.round(M*a),y=Math.round(o*a),P=this.ei.Vi??this.ei.Ei??this.ei.Bi,k=Math.round(P*l)-Math.floor(.5*l),T=Math.floor(k+b/2-S/2),R=T+S,D="right"===s,I=D?h.width-_:_,V=D?r.width-x:x;let E,B,A;return D?(E=V-C,B=V-y,A=I-o-d-_):(E=V+C,B=V+y,A=I+o+d),{li:D,ai:{_i:T,mi:k,Si:R,ui:C,ci:S,ft:2*a,di:x,oi:E,fi:V,wi:B,gi:b,bi:r.width},xi:{_i:T/l,Si:R/l,Ci:A,yi:m}}}}class O{constructor(t){this.Ai={Bi:0,Z:"#000",Ri:0,Ti:0},this.zi={ri:"",It:!1,pi:!0,Pi:!1,Ht:"",R:"#FFF",Mi:!1,ki:!1},this.Li={ri:"",It:!1,pi:!1,Pi:!0,Ht:"",R:"#FFF",Mi:!0,ki:!0},this.xt=!0,this.Oi=new(t||L)(this.zi,this.Ai),this.Ni=new(t||L)(this.Li,this.Ai)}ri(){return this.Fi(),this.zi.ri}Bi(){return this.Fi(),this.Ai.Bi}Pt(){this.xt=!0}$t(t,i=!1){return Math.max(this.Oi.$t(t,i),this.Ni.$t(t,i))}Wi(){return this.Ai.Vi??null}Hi(){return this.Ai.Vi??this.Ai.Ei??this.Bi()}Ui(t){this.Ai.Ei=t??void 0}$i(){return this.Fi(),this.zi.It||this.Li.It}ji(){return this.Fi(),this.zi.It}Tt(t){return this.Fi(),this.zi.pi=this.zi.pi&&t.N().ticksVisible,this.Li.pi=this.Li.pi&&t.N().ticksVisible,this.Oi.ht(this.zi,this.Ai),this.Ni.ht(this.Li,this.Ai),this.Oi}qi(){return this.Fi(),this.Oi.ht(this.zi,this.Ai),this.Ni.ht(this.Li,this.Ai),this.Ni}Fi(){this.xt&&(this.zi.pi=!0,this.Li.pi=!1,this.Yi(this.zi,this.Li,this.Ai))}}class N extends O{constructor(t,i,n){super(),this.Jt=t,this.Ki=i,this.Gi=n}Yi(t,i,n){if(t.It=!1,2===this.Jt.N().mode)return;const s=this.Jt.N().horzLine;if(!s.labelVisible)return;const e=this.Ki.zt();if(!this.Jt.It()||this.Ki.Zi()||null===e)return;const r=this.Ki.Xi().G(s.labelBackgroundColor);n.Z=r.Z,t.R=r.X;const h=2/12*this.Ki.P();n.Ti=h,n.Ri=h;const a=this.Gi(this.Ki);n.Bi=a.Bi,t.ri=this.Ki.Ji(a.gt,e),t.It=!0}}const F=/[1-9]/g;class W{constructor(){this.qt=null}ht(t){this.qt=t}st(t,i){if(null===this.qt||!1===this.qt.It||0===this.qt.ri.length)return;const n=t.useMediaCoordinateSpace((({context:t})=>(t.font=i.k,Math.round(i.Qi.Ii(t,a(this.qt).ri,F)))));if(n<=0)return;const s=i.tn,e=n+2*s,r=e/2,h=this.qt.nn;let l=this.qt.Bi,o=Math.floor(l-r)+.5;o<0?(l+=Math.abs(0-o),o=Math.floor(l-r)+.5):o+e>h&&(l-=Math.abs(h-(o+e)),o=Math.floor(l-r)+.5);const _=o+e,u=Math.ceil(0+i.S+i.C+i.A+i.P+i.I);t.useBitmapCoordinateSpace((({context:t,horizontalPixelRatio:n,verticalPixelRatio:s})=>{const e=a(this.qt);t.fillStyle=e.Z;const r=Math.round(o*n),h=Math.round(0*s),l=Math.round(_*n),c=Math.round(u*s),d=Math.round(2*n);if(t.beginPath(),t.moveTo(r,h),t.lineTo(r,c-d),t.arcTo(r,c,r+d,c,d),t.lineTo(l-d,c),t.arcTo(l,c,l,c-d,d),t.lineTo(l,h),t.fill(),e.pi){const r=Math.round(e.Bi*n),a=h,l=Math.round((a+i.C)*s);t.fillStyle=e.R;const o=Math.max(1,Math.floor(n)),_=Math.floor(.5*n);t.fillRect(r-_,a,o,l-a)}})),t.useMediaCoordinateSpace((({context:t})=>{const n=a(this.qt),e=0+i.S+i.C+i.A+i.P/2;t.font=i.k,t.textAlign="left",t.textBaseline="middle",t.fillStyle=n.R;const r=i.Qi.Di(t,"Apr0");t.translate(o+s,e+r),t.fillText(n.ri,0,0)}))}}class H{constructor(t,i,n){this.xt=!0,this.Xt=new W,this.Zt={It:!1,Z:"#4c525e",R:"white",ri:"",nn:0,Bi:NaN,pi:!0},this.Ct=t,this.sn=i,this.Gi=n}Pt(){this.xt=!0}Tt(){return this.xt&&(this.Rt(),this.xt=!1),this.Xt.ht(this.Zt),this.Xt}Rt(){const t=this.Zt;if(t.It=!1,2===this.Ct.N().mode)return;const i=this.Ct.N().vertLine;if(!i.labelVisible)return;const n=this.sn.Bt();if(n.Zi())return;t.nn=n.nn();const s=this.Gi();if(null===s)return;t.Bi=s.Bi;const e=n.en(this.Ct.Et());t.ri=n.rn(a(e)),t.It=!0;const r=this.sn.Xi().G(i.labelBackgroundColor);t.Z=r.Z,t.R=r.X,t.pi=n.N().ticksVisible}}class U{constructor(){this.hn=null,this.an=0}ln(){return this.an}_n(t){this.an=t}Ft(){return this.hn}un(t){this.hn=t}cn(t){return[]}dn(){return[]}It(){return!0}}var $;!function(t){t[t.Normal=0]="Normal",t[t.Magnet=1]="Magnet",t[t.Hidden=2]="Hidden",t[t.MagnetOHLC=3]="MagnetOHLC"}($||($={}));class j extends U{constructor(t,i){super(),this.yt=null,this.fn=NaN,this.pn=0,this.vn=!1,this.mn=new Map,this.wn=!1,this.gn=new WeakMap,this.Mn=new WeakMap,this.bn=NaN,this.Sn=NaN,this.xn=NaN,this.Cn=NaN,this.sn=t,this.yn=i;this.Pn=((t,i)=>n=>{const s=i(),e=t();if(n===a(this.yt).kn())return{gt:e,Bi:s};{const t=a(n.zt());return{gt:n.Tn(s,t),Bi:s}}})((()=>this.fn),(()=>this.Sn));const n=((t,i)=>()=>{const n=this.sn.Bt().Rn(t()),s=i();return n&&Number.isFinite(s)?{wt:n,Bi:s}:null})((()=>this.pn),(()=>this.ni()));this.Dn=new H(this,t,n)}N(){return this.yn}In(t,i){this.xn=t,this.Cn=i}Vn(){this.xn=NaN,this.Cn=NaN}En(){return this.xn}Bn(){return this.Cn}An(t,i,n){this.wn||(this.wn=!0),this.vn=!0,this.zn(t,i,n)}Et(){return this.pn}ni(){return this.bn}si(){return this.Sn}It(){return this.vn}Ln(){this.vn=!1,this.On(),this.fn=NaN,this.bn=NaN,this.Sn=NaN,this.yt=null,this.Vn(),this.Nn()}Fn(t){if(!this.yn.doNotSnapToHiddenSeriesIndices)return t;const i=this.sn,n=i.Bt();let s=null,e=null;for(const n of i.Wn()){const i=n.Un().Hn(t,-1);if(i){if(i.$n===t)return t;(null===s||i.$n>s)&&(s=i.$n)}const r=n.Un().Hn(t,1);if(r){if(r.$n===t)return t;(null===e||r.$n<e)&&(e=r.$n)}}const r=[s,e].filter(v);if(0===r.length)return t;const h=n.jt(t),a=r.map((t=>Math.abs(h-n.jt(t))));return r[a.indexOf(Math.min(...a))]}jn(t){let i=this.gn.get(t);i||(i=new I(this,t),this.gn.set(t,i));let n=this.Mn.get(t);return n||(n=new R(this.sn,this,t),this.Mn.set(t,n)),[i,n]}ti(t){return t===this.yt&&this.yn.horzLine.visible}ii(){return this.yn.vertLine.visible}qn(t,i){this.vn&&this.yt===t||this.mn.clear();const n=[];return this.yt===t&&n.push(this.Yn(this.mn,i,this.Pn)),n}dn(){return this.vn?[this.Dn]:[]}Kn(){return this.yt}Nn(){this.sn.Gn().forEach((t=>{this.gn.get(t)?.Pt(),this.Mn.get(t)?.Pt()})),this.mn.forEach((t=>t.Pt())),this.Dn.Pt()}Zn(t){return t&&!t.kn().Zi()?t.kn():null}zn(t,i,n){this.Xn(t,i,n)&&this.Nn()}Xn(t,i,n){const s=this.bn,e=this.Sn,r=this.fn,h=this.pn,a=this.yt,l=this.Zn(n);this.pn=t,this.bn=isNaN(t)?NaN:this.sn.Bt().jt(t),this.yt=n;const o=null!==l?l.zt():null;return null!==l&&null!==o?(this.fn=i,this.Sn=l.Nt(i,o)):(this.fn=NaN,this.Sn=NaN),s!==this.bn||e!==this.Sn||h!==this.pn||r!==this.fn||a!==this.yt}On(){const t=this.sn.Jn().map((t=>t.Un().Qn())).filter(v),i=0===t.length?null:Math.max(...t);this.pn=null!==i?i:NaN}Yn(t,i,n){let s=t.get(i);return void 0===s&&(s=new N(this,i,n),t.set(i,s)),s}}function q(t){return"left"===t||"right"===t}class Y{constructor(t){this.ts=new Map,this.ns=[],this.ss=t}es(t,i){const n=function(t,i){return void 0===t?i:{rs:Math.max(t.rs,i.rs),hs:t.hs||i.hs}}(this.ts.get(t),i);this.ts.set(t,n)}ls(){return this.ss}_s(t){const i=this.ts.get(t);return void 0===i?{rs:this.ss}:{rs:Math.max(this.ss,i.rs),hs:i.hs}}us(){this.cs(),this.ns=[{ds:0}]}fs(t){this.cs(),this.ns=[{ds:1,Wt:t}]}ps(t){this.vs(),this.ns.push({ds:5,Wt:t})}cs(){this.vs(),this.ns.push({ds:6})}ws(){this.cs(),this.ns=[{ds:4}]}gs(t){this.cs(),this.ns.push({ds:2,Wt:t})}Ms(t){this.cs(),this.ns.push({ds:3,Wt:t})}bs(){return this.ns}Ss(t){for(const i of t.ns)this.xs(i);this.ss=Math.max(this.ss,t.ss),t.ts.forEach(((t,i)=>{this.es(i,t)}))}static Cs(){return new Y(2)}static ys(){return new Y(3)}xs(t){switch(t.ds){case 0:this.us();break;case 1:this.fs(t.Wt);break;case 2:this.gs(t.Wt);break;case 3:this.Ms(t.Wt);break;case 4:this.ws();break;case 5:this.ps(t.Wt);break;case 6:this.vs()}}vs(){const t=this.ns.findIndex((t=>5===t.ds));-1!==t&&this.ns.splice(t,1)}}class K{formatTickmarks(t){return t.map((t=>this.format(t)))}}const G=".";function Z(t,i){if(!u(t))return"n/a";if(!c(i))throw new TypeError("invalid length");if(i<0||i>16)throw new TypeError("invalid length");if(0===i)return t.toString();return("0000000000000000"+t.toString()).slice(-i)}class X extends K{constructor(t,i){if(super(),i||(i=1),u(t)&&c(t)||(t=100),t<0)throw new TypeError("invalid base");this.Ki=t,this.Ps=i,this.ks()}format(t){const i=t<0?"−":"";return t=Math.abs(t),i+this.Ts(t)}ks(){if(this.Rs=0,this.Ki>0&&this.Ps>0){let t=this.Ki;for(;t>1;)t/=10,this.Rs++}}Ts(t){const i=this.Ki/this.Ps;let n=Math.floor(t),s="";const e=void 0!==this.Rs?this.Rs:NaN;if(i>1){let r=+(Math.round(t*i)-n*i).toFixed(this.Rs);r>=i&&(r-=i,n+=1),s=G+Z(+r.toFixed(this.Rs)*this.Ps,e)}else n=Math.round(n*i)/i,e>0&&(s=G+Z(0,e));return n.toFixed(0)+s}}class J extends X{constructor(t=100){super(t)}format(t){return`${super.format(t)}%`}}class Q extends K{constructor(t){super(),this.Ds=t}format(t){let i="";return t<0&&(i="-",t=-t),t<995?i+this.Is(t):t<999995?i+this.Is(t/1e3)+"K":t<999999995?(t=1e3*Math.round(t/1e3),i+this.Is(t/1e6)+"M"):(t=1e6*Math.round(t/1e6),i+this.Is(t/1e9)+"B")}Is(t){let i;const n=Math.pow(10,this.Ds);return i=(t=Math.round(t*n)/n)>=1e-15&&t<1?t.toFixed(this.Ds).replace(/\.?0+$/,""):String(t),i.replace(/(\.[1-9]*)0+$/,((t,i)=>i))}}const tt=/[2-9]/g;class it{constructor(t=50){this.Vs=0,this.Es=1,this.Bs=1,this.As={},this.zs=new Map,this.Ls=t}Os(){this.Vs=0,this.zs.clear(),this.Es=1,this.Bs=1,this.As={}}Ii(t,i,n){return this.Ns(t,i,n).width}Di(t,i,n){const s=this.Ns(t,i,n);return((s.actualBoundingBoxAscent||0)-(s.actualBoundingBoxDescent||0))/2}Ns(t,i,n){const s=n||tt,e=String(i).replace(s,"0");if(this.zs.has(e))return h(this.zs.get(e)).Fs;if(this.Vs===this.Ls){const t=this.As[this.Bs];delete this.As[this.Bs],this.zs.delete(t),this.Bs++,this.Vs--}t.save(),t.textBaseline="middle";const r=t.measureText(e);return t.restore(),0===r.width&&i.length||(this.zs.set(e,{Fs:r,Ws:this.Es}),this.As[this.Es]=e,this.Vs++,this.Es++),r}}class nt{constructor(t){this.Hs=null,this.M=null,this.Us="right",this.$s=t}js(t,i,n){this.Hs=t,this.M=i,this.Us=n}st(t){null!==this.M&&null!==this.Hs&&this.Hs.st(t,this.M,this.$s,this.Us)}}class st{constructor(t,i,n){this.qs=t,this.$s=new it(50),this.Ys=i,this.O=n,this.F=-1,this.Xt=new nt(this.$s)}Tt(){const t=this.O.Ks(this.Ys);if(null===t)return null;const i=t.Gs(this.Ys)?t.Zs():this.Ys.Ft();if(null===i)return null;const n=t.Xs(i);if("overlay"===n)return null;const s=this.O.Js();return s.P!==this.F&&(this.F=s.P,this.$s.Os()),this.Xt.js(this.qs.qi(),s,n),this.Xt}}class et extends y{constructor(){super(...arguments),this.qt=null}ht(t){this.qt=t}Qs(t,i){if(!this.qt?.It)return null;const{ut:n,ct:s,te:e}=this.qt;return i>=n-s-7&&i<=n+s+7?{ie:this.qt,ne:Math.abs(i-n),se:2,ee:"price-line",te:e}:null}et({context:t,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:r}){if(null===this.qt)return;if(!1===this.qt.It)return;const h=Math.round(this.qt.ut*r);h<0||h>i.height||(t.lineCap="butt",t.strokeStyle=this.qt.R,t.lineWidth=Math.floor(this.qt.ct*n),s(t,this.qt.Gt),e(t,h,0,i.width))}}class rt{constructor(t){this.re={ut:0,R:"rgba(0, 0, 0, 0)",ct:1,Gt:0,It:!1},this.he=new et,this.xt=!0,this.ae=t,this.le=t.Qt(),this.he.ht(this.re)}Pt(){this.xt=!0}Tt(){return this.ae.It()?(this.xt&&(this.oe(),this.xt=!1),this.he):null}}class ht extends rt{constructor(t){super(t)}oe(){this.re.It=!1;const t=this.ae.Ft(),i=t._e()._e;if(2!==i&&3!==i)return;const n=this.ae.N();if(!n.baseLineVisible||!this.ae.It())return;const s=this.ae.zt();null!==s&&(this.re.It=!0,this.re.ut=t.Nt(s.Wt,s.Wt),this.re.R=n.baseLineColor,this.re.ct=n.baseLineWidth,this.re.Gt=n.baseLineStyle)}}class at extends y{constructor(){super(...arguments),this.qt=null}ht(t){this.qt=t}ue(){return this.qt}et({context:t,horizontalPixelRatio:i,verticalPixelRatio:n}){const s=this.qt;if(null===s)return;const e=Math.max(1,Math.floor(i)),r=e%2/2,h=Math.round(s.ce.x*i)+r,a=s.ce.y*n;t.fillStyle=s.de,t.beginPath();const l=Math.max(2,1.5*s.fe)*i;t.arc(h,a,l,0,2*Math.PI,!1),t.fill(),t.fillStyle=s.pe,t.beginPath(),t.arc(h,a,s.ft*i,0,2*Math.PI,!1),t.fill(),t.lineWidth=e,t.strokeStyle=s.ve,t.beginPath(),t.arc(h,a,s.ft*i+e/2,0,2*Math.PI,!1),t.stroke()}}const lt=[{me:0,we:.25,ge:4,Me:10,be:.25,Se:0,xe:.4,Ce:.8},{me:.25,we:.525,ge:10,Me:14,be:0,Se:0,xe:.8,Ce:0},{me:.525,we:1,ge:14,Me:14,be:0,Se:0,xe:0,Ce:0}];class ot{constructor(t){this.Xt=new at,this.xt=!0,this.ye=!0,this.Pe=performance.now(),this.ke=this.Pe-1,this.Te=t}Re(){this.ke=this.Pe-1,this.Pt()}De(){if(this.Pt(),2===this.Te.N().lastPriceAnimation){const t=performance.now(),i=this.ke-t;if(i>0)return void(i<650&&(this.ke+=2600));this.Pe=t,this.ke=t+2600}}Pt(){this.xt=!0}Ie(){this.ye=!0}It(){return 0!==this.Te.N().lastPriceAnimation}Ve(){switch(this.Te.N().lastPriceAnimation){case 0:return!1;case 1:return!0;case 2:return performance.now()<=this.ke}}Tt(){return this.xt?(this.Rt(),this.xt=!1,this.ye=!1):this.ye&&(this.Ee(),this.ye=!1),this.Xt}Rt(){this.Xt.ht(null);const t=this.Te.Qt().Bt(),i=t.Be(),n=this.Te.zt();if(null===i||null===n)return;const s=this.Te.Ae(!0);if(s.ze||!i.Le(s.$n))return;const e={x:t.jt(s.$n),y:this.Te.Ft().Nt(s.gt,n.Wt)},r=s.R,h=this.Te.N().lineWidth,a=this.Oe(this.Ne(),r);this.Xt.ht({de:r,fe:h,pe:a.pe,ve:a.ve,ft:a.ft,ce:e})}Ee(){const t=this.Xt.ue();if(null!==t){const i=this.Oe(this.Ne(),t.de);t.pe=i.pe,t.ve=i.ve,t.ft=i.ft}}Ne(){return this.Ve()?performance.now()-this.Pe:2599}Fe(t,i,n,s){const e=n+(s-n)*i;return this.Te.Qt().Xi().Y(t,e)}Oe(t,i){const n=t%2600/2600;let s;for(const t of lt)if(n>=t.me&&n<=t.we){s=t;break}r(void 0!==s,"Last price animation internal logic error");const e=(n-s.me)/(s.we-s.me);return{pe:this.Fe(i,e,s.be,s.Se),ve:this.Fe(i,e,s.xe,s.Ce),ft:(h=e,a=s.ge,l=s.Me,a+(l-a)*h)};var h,a,l}}class _t extends rt{constructor(t){super(t)}oe(){const t=this.re;t.It=!1;const i=this.ae.N();if(!i.priceLineVisible||!this.ae.It())return;const n=this.ae.Ae(0===i.priceLineSource);n.ze||(t.It=!0,t.ut=n.Bi,t.R=this.ae.We(n.R),t.ct=i.priceLineWidth,t.Gt=i.priceLineStyle)}}class ut extends O{constructor(t){super(),this.Jt=t}Yi(t,i,n){t.It=!1,i.It=!1;const s=this.Jt;if(!s.It())return;const e=s.N(),r=e.lastValueVisible,h=""!==s.He(),a=0===e.seriesLastValueMode,l=s.Ae(!1);if(l.ze)return;r&&(t.ri=this.Ue(l,r,a),t.It=0!==t.ri.length),(h||a)&&(i.ri=this.$e(l,r,h,a),i.It=i.ri.length>0);const o=s.We(l.R),_=this.Jt.Qt().Xi().G(o);n.Z=_.Z,n.Bi=l.Bi,i.Ht=s.Qt().Ut(l.Bi/s.Ft().$t()),t.Ht=o,t.R=_.X,i.R=_.X}$e(t,i,n,s){let e="";const r=this.Jt.He();return n&&0!==r.length&&(e+=`${r} `),i&&s&&(e+=this.Jt.Ft().je()?t.qe:t.Ye),e.trim()}Ue(t,i,n){return i?n?this.Jt.Ft().je()?t.Ye:t.qe:t.ri:""}}function ct(t,i,n,s){const e=Number.isFinite(i),r=Number.isFinite(n);return e&&r?t(i,n):e||r?e?i:n:s}class dt{constructor(t,i){this.Ke=t,this.Ge=i}Ze(t){return null!==t&&(this.Ke===t.Ke&&this.Ge===t.Ge)}Xe(){return new dt(this.Ke,this.Ge)}Je(){return this.Ke}Qe(){return this.Ge}tr(){return this.Ge-this.Ke}Zi(){return this.Ge===this.Ke||Number.isNaN(this.Ge)||Number.isNaN(this.Ke)}Ss(t){return null===t?this:new dt(ct(Math.min,this.Je(),t.Je(),-1/0),ct(Math.max,this.Qe(),t.Qe(),1/0))}ir(t){if(!u(t))return;if(0===this.Ge-this.Ke)return;const i=.5*(this.Ge+this.Ke);let n=this.Ge-i,s=this.Ke-i;n*=t,s*=t,this.Ge=i+n,this.Ke=i+s}nr(t){u(t)&&(this.Ge+=t,this.Ke+=t)}sr(){return{minValue:this.Ke,maxValue:this.Ge}}static er(t){return null===t?null:new dt(t.minValue,t.maxValue)}}class ft{constructor(t,i){this.rr=t,this.hr=i||null}ar(){return this.rr}lr(){return this.hr}sr(){return{priceRange:null===this.rr?null:this.rr.sr(),margins:this.hr||void 0}}static er(t){return null===t?null:new ft(dt.er(t.priceRange),t.margins)}}const pt=[2,4,8,16,32,64,128,256,512],vt="Custom series with conflation reducer must have a priceValueBuilder method";class mt extends rt{constructor(t,i){super(t),this._r=i}oe(){const t=this.re;t.It=!1;const i=this._r.N();if(!this.ae.It()||!i.lineVisible)return;const n=this._r.ur();null!==n&&(t.It=!0,t.ut=n,t.R=i.color,t.ct=i.lineWidth,t.Gt=i.lineStyle,t.te=this._r.N().id)}}class wt extends O{constructor(t,i){super(),this.Te=t,this._r=i}Yi(t,i,n){t.It=!1,i.It=!1;const s=this._r.N(),e=s.axisLabelVisible,r=""!==s.title,h=this.Te;if(!e||!h.It())return;const a=this._r.ur();if(null===a)return;r&&(i.ri=s.title,i.It=!0),i.Ht=h.Qt().Ut(a/h.Ft().$t()),t.ri=this.cr(s.price),t.It=!0;const l=this.Te.Qt().Xi().G(s.axisLabelColor||s.color);n.Z=l.Z;const o=s.axisLabelTextColor||l.X;t.R=o,i.R=o,n.Bi=a}cr(t){const i=this.Te.zt();return null===i?"":this.Te.Ft().Ji(t,i.Wt)}}class gt{constructor(t,i){this.Te=t,this.yn=i,this.dr=new mt(t,this),this.qs=new wt(t,this),this.pr=new st(this.qs,t,t.Qt())}vr(t){_(this.yn,t),this.Pt(),this.Te.Qt().mr()}N(){return this.yn}wr(){return this.dr}gr(){return this.pr}Mr(){return this.qs}Pt(){this.dr.Pt(),this.qs.Pt()}ur(){const t=this.Te,i=t.Ft();if(t.Qt().Bt().Zi()||i.Zi())return null;const n=t.zt();return null===n?null:i.Nt(this.yn.price,n.Wt)}}class Mt{constructor(){this.br=new WeakMap}Sr(t,i,n){const s=1/i*n;if(t>=s)return 1;const e=s/t,r=Math.pow(2,Math.floor(Math.log2(e)));return Math.min(r,512)}Cr(t,i,n,s=!1,e){if(0===t.length||i<=1)return t;const r=this.yr(i);if(r<=1)return t;const h=this.Pr(t);let a=h.kr.get(r);return void 0!==a||(a=this.Tr(t,r,n,s,e,h.kr),h.kr.set(r,a)),a}Rr(t,i,n,s,e=!1,r){if(n<1||0===t.length)return t;const h=this.Pr(t),a=h.kr.get(n);if(!a)return this.Cr(t,n,s,e,r);const l=this.Dr(t,i,n,a,e,s,r);return h.kr.set(n,l),l}yr(t){if(t<=2)return 2;for(const i of pt)if(t<=i)return i;return 512}Ir(t){if(0===t.length)return 0;const i=t[0],n=t[t.length-1];return 31*t.length+17*i.$n+13*n.$n}Tr(t,i,n,s=!1,e,r=new Map){if(2===i)return this.Vr(t,2,n,s,e);const h=i/2;let a=r.get(h);return a||(a=this.Tr(t,h,n,s,e,r),r.set(h,a)),this.Er(a,n,s,e)}Vr(t,i,n,s=!1,e){const r=this.Br(t,i,n,s,e);return this.Ar(r,s)}Er(t,i,n=!1,s){const e=this.Br(t,2,i,n,s);return this.Ar(e,n)}Br(t,i,n,s=!1,e){const r=[];for(let h=0;h<t.length;h+=i){if(t.length-h>=i){const i=this.zr(t[h],t[h+1],n,s,e);i.Lr=!1,r.push(i)}else if(0===r.length)r.push(this.Or(t[h],!0));else{const i=r[r.length-1];r[r.length-1]=this.Nr(i,t[h],n,s,e)}}return r}Fr(t,i){return(t??1)+(i??1)}zr(t,i,n,s=!1,e){if(!s||!n||!e){const n=t.Wt[1]>i.Wt[1]?t.Wt[1]:i.Wt[1],s=t.Wt[2]<i.Wt[2]?t.Wt[2]:i.Wt[2];return{Wr:t.$n,Hr:i.$n,Ur:t.wt,$r:i.wt,jr:t.Wt[0],qr:n,Yr:s,Kr:i.Wt[3],Gr:this.Fr(t.Gr,i.Gr),Zr:void 0,Lr:!1}}const r=n(this.Xr(t,e),this.Xr(i,e)),h=e(r),a=h.length?h[h.length-1]:0;return{Wr:t.$n,Hr:i.$n,Ur:t.wt,$r:i.wt,jr:t.Wt[0],qr:Math.max(t.Wt[1],a),Yr:Math.min(t.Wt[2],a),Kr:a,Gr:this.Fr(t.Gr,i.Gr),Zr:r,Lr:!1}}Nr(t,i,n,s=!1,e){if(!s||!n||!e)return{Wr:t.Wr,Hr:i.$n,Ur:t.Ur,$r:i.wt,jr:t.jr,qr:t.qr>i.Wt[1]?t.qr:i.Wt[1],Yr:t.Yr<i.Wt[2]?t.Yr:i.Wt[2],Kr:i.Wt[3],Gr:t.Gr+(i.Gr??1),Zr:t.Zr,Lr:!1};const r=t.Zr,h=this.Xr(i,e),a=r?{data:r,index:t.Wr,originalTime:t.Ur,time:t.Ur,priceValues:e(r)}:null,l=a?n(a,h):h.data,o=a?e(l):h.priceValues,_=o.length?o[o.length-1]:0;return{Wr:t.Wr,Hr:i.$n,Ur:t.Ur,$r:i.wt,jr:t.jr,qr:Math.max(t.qr,_),Yr:Math.min(t.Yr,_),Kr:_,Gr:t.Gr+(i.Gr??1),Zr:l,Lr:!1}}Jr(t,i,n,s,e,r,h=!1,a){const l=i===s?e:t[i];if(n-i==1)return this.Or(l,!0);const o=i+1===s?e:t[i+1];let _=this.zr(l,o,r,h,a);for(let l=i+2;l<n;l++){const i=l===s?e:t[l];_=this.Nr(_,i,r,h,a)}return _}Xr(t,i){const n=t.ue??{};return{data:t.ue,index:t.$n,originalTime:t.Qr,time:t.wt,priceValues:i(n)}}th(t,i=!1){const n=!0===i,s=!!t.Zr;return{...{$n:t.Wr,wt:t.Ur,Qr:t.Ur,Wt:[n?t.Kr:t.jr,t.qr,t.Yr,t.Kr],Gr:t.Gr},ue:n?s?t.Zr:{wt:t.Ur}:void 0}}Ar(t,i=!1){return t.map((t=>this.th(t,i)))}Dr(t,i,n,s,e=!1,r,h){if(0===s.length)return s;const a=t.length-1,l=Math.floor(a/n)*n;if(Math.min(l+n,t.length)-l<n&&t.length>n){const s=t.slice();return s[s.length-1]=i,this.Cr(s,n,r,e,h)}if(Math.floor((a-1)/n)===Math.floor(a/n)||1===s.length){const o=Math.min(l+n,t.length),_=o-l;if(_<=0)return s;const u=1===_?this.Or(l===a?i:t[l],!0):this.Jr(t,l,o,a,i,r,e,h);return s[s.length-1]=this.th(u,e),s}{const s=t.slice();return s[s.length-1]=i,this.Cr(s,n,r,e,h)}}Or(t,i=!1){return{Wr:t.$n,Hr:t.$n,Ur:t.wt,$r:t.wt,jr:t.Wt[0],qr:t.Wt[1],Yr:t.Wt[2],Kr:t.Wt[3],Gr:t.Gr??1,Zr:t.ue,Lr:i}}Pr(t){const i=this.ih(t),n=this.Ir(t);return i.nh!==n&&(i.kr.clear(),i.nh=n),i}ih(t){let i=this.br.get(t);return void 0===i&&(i={nh:this.Ir(t),kr:new Map},this.br.set(t,i)),i}}class bt extends U{constructor(t){super(),this.sn=t}Qt(){return this.sn}}const St={Bar:(t,i,n,s)=>{const e=i.upColor,r=i.downColor,h=a(t(n,s)),o=l(h.Wt[0])<=l(h.Wt[3]);return{sh:h.R??(o?e:r)}},Candlestick:(t,i,n,s)=>{const e=i.upColor,r=i.downColor,h=i.borderUpColor,o=i.borderDownColor,_=i.wickUpColor,u=i.wickDownColor,c=a(t(n,s)),d=l(c.Wt[0])<=l(c.Wt[3]);return{sh:c.R??(d?e:r),eh:c.Ht??(d?h:o),rh:c.hh??(d?_:u)}},Custom:(t,i,n,s)=>({sh:a(t(n,s)).R??i.color}),Area:(t,i,n,s)=>{const e=a(t(n,s));return{sh:e.vt??i.lineColor,vt:e.vt??i.lineColor,ah:e.ah??i.topColor,oh:e.oh??i.bottomColor}},Baseline:(t,i,n,s)=>{const e=a(t(n,s));return{sh:e.Wt[3]>=i.baseValue.price?i.topLineColor:i.bottomLineColor,_h:e._h??i.topLineColor,uh:e.uh??i.bottomLineColor,dh:e.dh??i.topFillColor1,fh:e.fh??i.topFillColor2,ph:e.ph??i.bottomFillColor1,mh:e.mh??i.bottomFillColor2}},Line:(t,i,n,s)=>{const e=a(t(n,s));return{sh:e.R??i.color,vt:e.R??i.color}},Histogram:(t,i,n,s)=>({sh:a(t(n,s)).R??i.color})};class xt{constructor(t){this.wh=(t,i)=>void 0!==i?i.Wt:this.Te.Un().gh(t),this.Te=t,this.Mh=St[t.bh()]}Sh(t,i){return this.Mh(this.wh,this.Te.N(),t,i)}}function Ct(t,i,n,s,e=0,r=i.length){let h=r-e;for(;0<h;){const r=h>>1,a=e+r;s(i[a],n)===t?(e=a+1,h-=r+1):h=r}return e}const yt=Ct.bind(null,!0),Pt=Ct.bind(null,!1);var kt;!function(t){t[t.NearestLeft=-1]="NearestLeft",t[t.None=0]="None",t[t.NearestRight=1]="NearestRight"}(kt||(kt={}));const Tt=30;class Rt{constructor(){this.xh=[],this.Ch=new Map,this.yh=new Map,this.Ph=[]}kh(){return this.Th()>0?this.xh[this.xh.length-1]:null}Rh(){return this.Th()>0?this.Dh(0):null}Qn(){return this.Th()>0?this.Dh(this.xh.length-1):null}Th(){return this.xh.length}Zi(){return 0===this.Th()}Le(t){return null!==this.Ih(t,0)}gh(t){return this.Hn(t)}Hn(t,i=0){const n=this.Ih(t,i);return null===n?null:{...this.Vh(n),$n:this.Dh(n)}}Eh(){return this.xh}Bh(t,i,n){if(this.Zi())return null;let s=null;for(const e of n){s=Dt(s,this.Ah(t,i,e))}return s}ht(t){this.yh.clear(),this.Ch.clear(),this.xh=t,this.Ph=t.map((t=>t.$n))}zh(){return this.Ph}Dh(t){return this.xh[t].$n}Vh(t){return this.xh[t]}Ih(t,i){const n=this.Lh(t);if(null===n&&0!==i)switch(i){case-1:return this.Oh(t);case 1:return this.Nh(t);default:throw new TypeError("Unknown search mode")}return n}Oh(t){let i=this.Fh(t);return i>0&&(i-=1),i!==this.xh.length&&this.Dh(i)<t?i:null}Nh(t){const i=this.Wh(t);return i!==this.xh.length&&t<this.Dh(i)?i:null}Lh(t){const i=this.Fh(t);return i===this.xh.length||t<this.xh[i].$n?null:i}Fh(t){return yt(this.xh,t,((t,i)=>t.$n<i))}Wh(t){return Pt(this.xh,t,((t,i)=>t.$n>i))}Hh(t,i,n){let s=null;for(let e=t;e<i;e++){const t=this.xh[e].Wt[n];Number.isNaN(t)||(null===s?s={Uh:t,$h:t}:(t<s.Uh&&(s.Uh=t),t>s.$h&&(s.$h=t)))}return s}Ah(t,i,n){if(this.Zi())return null;let s=null;const e=a(this.Rh()),r=a(this.Qn()),h=Math.max(t,e),l=Math.min(i,r),o=Math.ceil(h/Tt)*Tt,_=Math.max(o,Math.floor(l/Tt)*Tt);{const t=this.Fh(h),e=this.Wh(Math.min(l,o,i));s=Dt(s,this.Hh(t,e,n))}let u=this.Ch.get(n);void 0===u&&(u=new Map,this.Ch.set(n,u));for(let t=Math.max(o+1,h);t<_;t+=Tt){const i=Math.floor(t/Tt);let e=u.get(i);if(void 0===e){const t=this.Fh(i*Tt),s=this.Wh((i+1)*Tt-1);e=this.Hh(t,s,n),u.set(i,e)}s=Dt(s,e)}{const t=this.Fh(_),i=this.Wh(l);s=Dt(s,this.Hh(t,i,n))}return s}}function Dt(t,i){if(null===t)return i;if(null===i)return t;return{Uh:Math.min(t.Uh,i.Uh),$h:Math.max(t.$h,i.$h)}}function It(){return new Rt}const Vt={setLineStyle:s};class Et{constructor(t){this.jh=t}st(t,i,n){this.jh.draw(t,Vt)}qh(t,i,n){this.jh.drawBackground?.(t,Vt)}}class Bt{constructor(t){this.zs=null,this.Yh=t}Tt(){const t=this.Yh.renderer();if(null===t)return null;if(this.zs?.Kh===t)return this.zs.Gh;const i=new Et(t);return this.zs={Kh:t,Gh:i},i}Zh(){return this.Yh.zOrder?.()??"normal"}}class At{constructor(t){this.Xh=null,this.Jh=t}Qh(){return this.Jh}Nn(){this.Jh.updateAllViews?.()}jn(){const t=this.Jh.paneViews?.()??[];if(this.Xh?.Kh===t)return this.Xh.Gh;const i=t.map((t=>new Bt(t)));return this.Xh={Kh:t,Gh:i},i}Qs(t,i){return this.Jh.hitTest?.(t,i)??null}}let zt=class extends At{cn(){return[]}};class Lt{constructor(t){this.jh=t}st(t,i,n){this.jh.draw(t,Vt)}qh(t,i,n){this.jh.drawBackground?.(t,Vt)}}class Ot{constructor(t){this.zs=null,this.Yh=t}Tt(){const t=this.Yh.renderer();if(null===t)return null;if(this.zs?.Kh===t)return this.zs.Gh;const i=new Lt(t);return this.zs={Kh:t,Gh:i},i}Zh(){return this.Yh.zOrder?.()??"normal"}}function Nt(t){return{ri:t.text(),Bi:t.coordinate(),Vi:t.fixedCoordinate?.(),R:t.textColor(),Z:t.backColor(),It:t.visible?.()??!0,pi:t.tickVisible?.()??!0}}class Ft{constructor(t,i){this.Xt=new W,this.ta=t,this.ia=i}Tt(){return this.Xt.ht({nn:this.ia.nn(),...Nt(this.ta)}),this.Xt}}class Wt extends O{constructor(t,i){super(),this.ta=t,this.Ki=i}Yi(t,i,n){const s=Nt(this.ta);n.Z=s.Z,t.R=s.R;const e=2/12*this.Ki.P();n.Ti=e,n.Ri=e,n.Bi=s.Bi,n.Vi=s.Vi,t.ri=s.ri,t.It=s.It,t.pi=s.pi}}class Ht extends At{constructor(t,i){super(t),this.na=null,this.sa=null,this.ea=null,this.ra=null,this.Te=i}dn(){const t=this.Jh.timeAxisViews?.()??[];if(this.na?.Kh===t)return this.na.Gh;const i=this.Te.Qt().Bt(),n=t.map((t=>new Ft(t,i)));return this.na={Kh:t,Gh:n},n}qn(){const t=this.Jh.priceAxisViews?.()??[];if(this.sa?.Kh===t)return this.sa.Gh;const i=this.Te.Ft(),n=t.map((t=>new Wt(t,i)));return this.sa={Kh:t,Gh:n},n}ha(){const t=this.Jh.priceAxisPaneViews?.()??[];if(this.ea?.Kh===t)return this.ea.Gh;const i=t.map((t=>new Ot(t)));return this.ea={Kh:t,Gh:i},i}aa(){const t=this.Jh.timeAxisPaneViews?.()??[];if(this.ra?.Kh===t)return this.ra.Gh;const i=t.map((t=>new Ot(t)));return this.ra={Kh:t,Gh:i},i}la(t,i){return this.Jh.autoscaleInfo?.(t,i)??null}}function Ut(t,i,n,s){t.forEach((t=>{i(t).forEach((t=>{t.Zh()===n&&s.push(t)}))}))}function $t(t){return t.jn()}function jt(t){return t.ha()}function qt(t){return t.aa()}const Yt=["Area","Line","Baseline"];class Kt extends bt{constructor(t,i,n,s,e){super(t),this.qt=It(),this.dr=new _t(this),this.oa=[],this._a=new ht(this),this.ua=null,this.ca=null,this.da=null,this.fa=[],this.pa=new Mt,this.va=new Map,this.ma=null,this.yn=n,this.wa=i;const r=new ut(this);if(this.mn=[r],this.pr=new st(r,this,t),Yt.includes(this.wa)&&(this.ua=new ot(this)),this.ga(),this.Yh=s(this,this.Qt(),e),"Custom"===this.wa){const t=this.Yh;t.Ma&&this.ba(t.Ma)}}m(){null!==this.da&&clearTimeout(this.da)}We(t){return this.yn.priceLineColor||t}Ae(t){const i={ze:!0},n=this.Ft();if(this.Qt().Bt().Zi()||n.Zi()||this.qt.Zi())return i;const s=this.Qt().Bt().Be(),e=this.zt();if(null===s||null===e)return i;let r,h;if(t){const t=this.qt.kh();if(null===t)return i;r=t,h=t.$n}else{const t=this.qt.Hn(s.bi(),-1);if(null===t)return i;if(r=this.qt.gh(t.$n),null===r)return i;h=t.$n}const a=r.Wt[3],l=this.Sa().Sh(h,{Wt:r}),o=n.Nt(a,e.Wt);return{ze:!1,gt:a,ri:n.Ji(a,e.Wt),qe:n.xa(a),Ye:n.Ca(a,e.Wt),R:l.sh,Bi:o,$n:h}}Sa(){return null!==this.ca||(this.ca=new xt(this)),this.ca}N(){return this.yn}vr(t){const i=this.Qt(),{priceScaleId:n,visible:s,priceFormat:e}=t;void 0!==n&&n!==this.yn.priceScaleId&&i.ya(this,n),void 0!==s&&s!==this.yn.visible&&i.Pa();const r=void 0!==t.conflationThresholdFactor;_(this.yn,t),Object.prototype.hasOwnProperty.call(t,"autoscaleInfoProvider")&&void 0===t.autoscaleInfoProvider&&(this.yn.autoscaleInfoProvider=void 0),r&&(this.va.clear(),this.Qt().mr()),void 0!==e&&(this.ga(),i.ka()),i.Ta(this),i.Ra(),this.Yh.Pt("options")}ht(t,i){this.qt.ht(t),this.va.clear();const n=this.Qt().Bt().N();n.enableConflation&&n.precomputeConflationOnInit&&this.Da(n.precomputeConflationPriority),this.Ia(),null!==this.ua&&(i&&i.Va?this.ua.De():0===t.length&&this.ua.Re());const s=this.Qt().Ks(this);this.Qt().Ea(s),this.Qt().Ta(this),this.Qt().Ra(),this.Qt().mr()}Ia(){this.Yh.Pt("data")}Ba(t){const i=new gt(this,t);return this.oa.push(i),this.Qt().Ta(this),i}Aa(t){const i=this.oa.indexOf(t);-1!==i&&this.oa.splice(i,1),this.Qt().Ta(this)}za(){return this.oa}bh(){return this.wa}zt(){const t=this.La();return null===t?null:{Wt:t.Wt[3],Oa:t.wt}}La(){const t=this.Qt().Bt().Be();if(null===t)return null;const i=t.Na();return this.qt.Hn(i,1)}Un(){return this.qt}ba(t){this.ma=t,this.va.clear()}Fa(){return!!this.Qt().Bt().N().enableConflation&&this.Wa()>1}Rr(t){if(!this.Fa())return;const i=this.Wa();if(!this.va.has(i))return;const n="Custom"===this.wa,s=n&&this.ma||void 0,e=n&&this.Yh.Ha?t=>{const i=t,n=this.Yh.Ha(i);return Array.isArray(n)?n:["number"==typeof n?n:0]}:void 0,r=this.pa.Rr(this.qt.Eh(),t,i,s,n,e),h=It();h.ht(r),this.va.set(i,h)}Ua(){const t=this.Qt().Bt().N().enableConflation;if("Custom"===this.wa&&null===this.ma)return this.qt;if(!t)return this.qt;const i=this.Wa(),n=this.va.get(i);if(n)return n;this.$a(i);return this.va.get(i)??this.qt}ja(t){const i=this.qt.gh(t);return null===i?null:"Bar"===this.wa||"Candlestick"===this.wa||"Custom"===this.wa?{jr:i.Wt[0],qr:i.Wt[1],Yr:i.Wt[2],Kr:i.Wt[3]}:i.Wt[3]}qa(t){const i=[];Ut(this.fa,$t,"top",i);const n=this.ua;return null!==n&&n.It()?(null===this.da&&n.Ve()&&(this.da=setTimeout((()=>{this.da=null,this.Qt().Ya()}),0)),n.Ie(),i.unshift(n),i):i}jn(){const t=[];this.Ka()||t.push(this._a),t.push(this.Yh,this.dr);const i=this.oa.map((t=>t.wr()));return t.push(...i),Ut(this.fa,$t,"normal",t),t}Ga(){const t=this.Yh.Ga?.()??null;if(null===t)return null;const i=[];this.Ka()||i.push(this._a),i.push(...t.Za),Ut(this.fa,$t,"normal",i);const n=[];n.push(...t.qa,this.dr);const s=this.oa.map((t=>t.wr()));return n.push(...s),{Za:i,qa:n}}Xa(){return this.Ja($t,"bottom")}Qa(t){return this.Ja(jt,t)}tl(t){return this.Ja(qt,t)}il(t,i){return this.fa.map((n=>n.Qs(t,i))).filter((t=>null!==t))}cn(){return[this.pr,...this.oa.map((t=>t.gr()))]}qn(t,i){if(i!==this.hn&&!this.Ka())return[];const n=[...this.mn];for(const t of this.oa)n.push(t.Mr());return this.fa.forEach((t=>{n.push(...t.qn())})),n}dn(){const t=[];return this.fa.forEach((i=>{t.push(...i.dn())})),t}la(t,i){if(void 0!==this.yn.autoscaleInfoProvider){const n=this.yn.autoscaleInfoProvider((()=>{const n=this.nl(t,i);return null===n?null:n.sr()}));return ft.er(n)}return this.nl(t,i)}Kh(){const t=this.yn.priceFormat;return t.base??1/t.minMove}sl(){return this.el}Nn(){this.Yh.Pt();for(const t of this.mn)t.Pt();for(const t of this.oa)t.Pt();this.dr.Pt(),this._a.Pt(),this.ua?.Pt(),this.fa.forEach((t=>t.Nn()))}Ft(){return a(super.Ft())}At(t){if(!(("Line"===this.wa||"Area"===this.wa||"Baseline"===this.wa)&&this.yn.crosshairMarkerVisible))return null;const i=this.qt.gh(t);if(null===i)return null;return{gt:i.Wt[3],ft:this.rl(),Ht:this.hl(),Ot:this.al(),Lt:this.ll(t)}}He(){return this.yn.title}It(){return this.yn.visible}ol(t){this.fa.push(new Ht(t,this))}_l(t){this.fa=this.fa.filter((i=>i.Qh()!==t))}ul(){if("Custom"===this.wa)return t=>this.Yh.Ha(t)}cl(){if("Custom"===this.wa)return t=>this.Yh.dl(t)}fl(){return this.qt.zh()}Ka(){return!q(this.Ft().pl())}nl(t,i){if(!c(t)||!c(i)||this.qt.Zi())return null;const n="Line"===this.wa||"Area"===this.wa||"Baseline"===this.wa||"Histogram"===this.wa?[3]:[2,1],s=this.qt.Bh(t,i,n);let e=null!==s?new dt(s.Uh,s.$h):null,r=null;if("Histogram"===this.bh()){const t=this.yn.base,i=new dt(t,t);e=null!==e?e.Ss(i):i}return this.fa.forEach((n=>{const s=n.la(t,i);if(s?.priceRange){const t=new dt(s.priceRange.minValue,s.priceRange.maxValue);e=null!==e?e.Ss(t):t}s?.margins&&(r=s.margins)})),new ft(e,r)}rl(){switch(this.wa){case"Line":case"Area":case"Baseline":return this.yn.crosshairMarkerRadius}return 0}hl(){switch(this.wa){case"Line":case"Area":case"Baseline":{const t=this.yn.crosshairMarkerBorderColor;if(0!==t.length)return t}}return null}al(){switch(this.wa){case"Line":case"Area":case"Baseline":return this.yn.crosshairMarkerBorderWidth}return 0}ll(t){switch(this.wa){case"Line":case"Area":case"Baseline":{const t=this.yn.crosshairMarkerBackgroundColor;if(0!==t.length)return t}}return this.Sa().Sh(t).sh}ga(){switch(this.yn.priceFormat.type){case"custom":{const t=this.yn.priceFormat.formatter;this.el={format:t,formatTickmarks:this.yn.priceFormat.tickmarksFormatter??(i=>i.map(t))};break}case"volume":this.el=new Q(this.yn.priceFormat.precision);break;case"percent":this.el=new J(this.yn.priceFormat.precision);break;default:{const t=Math.pow(10,this.yn.priceFormat.precision);this.el=new X(t,this.yn.priceFormat.minMove*t)}}null!==this.hn&&this.hn.vl()}Ja(t,i){const n=[];return Ut(this.fa,t,i,n),n}Wa(){const{ml:t,wl:i,gl:n}=this.Ml();return this.pa.Sr(t,i,n)}Ml(){const t=this.Qt().Bt(),i=t.ml(),n=window.devicePixelRatio||1,s=t.N().conflationThresholdFactor;return{ml:i,wl:n,gl:this.yn.conflationThresholdFactor??s??1}}bl(t){const i=this.qt.Eh();let n;if("Custom"===this.wa&&null!==this.ma){const s=this.ul();if(!s)throw new Error(vt);n=this.pa.Cr(i,t,this.ma,!0,(t=>s(t)))}else n=this.pa.Cr(i,t);const s=It();return s.ht(n),s}$a(t){const i=this.bl(t);this.va.set(t,i)}Da(t){if("Custom"===this.wa&&(null===this.ma||!this.ul()))return;this.va.clear();const i=this.Qt().Bt().Sl();for(const n of i){const i=()=>{this.xl(n)},s="object"==typeof window&&window||"object"==typeof self&&self;s?.yl?.Cl?s.yl.Cl((()=>{i()}),{se:t}):Promise.resolve().then((()=>i()))}}xl(t){if(this.va.has(t))return;if(0===this.qt.Eh().length)return;const i=this.bl(t);this.va.set(t,i)}}const Gt=[3],Zt=[0,1,2,3];class Xt{constructor(t){this.yn=t}Pl(t,i,n){let s=t;if(0===this.yn.mode)return s;const e=n.kn(),r=e.zt();if(null===r)return s;const h=e.Nt(t,r),a=n.kl().filter((t=>t instanceof Kt)).reduce(((t,s)=>{if(n.Gs(s)||!s.It())return t;const e=s.Ft(),r=s.Un();if(e.Zi()||!r.Le(i))return t;const h=r.gh(i);if(null===h)return t;const a=l(s.zt()),o=3===this.yn.mode?Zt:Gt;return t.concat(o.map((t=>e.Nt(h.Wt[t],a.Wt))))}),[]);if(0===a.length)return s;a.sort(((t,i)=>Math.abs(t-h)-Math.abs(i-h)));const o=a[0];return s=e.Tn(o,r),s}}function Jt(t,i,n){return Math.min(Math.max(t,i),n)}function Qt(t,i,n){return i-t<=n}function ti(t){const i=Math.ceil(t);return i%2==0?i-1:i}class ii extends y{constructor(){super(...arguments),this.qt=null}ht(t){this.qt=t}et({context:t,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:e}){if(null===this.qt)return;const r=Math.max(1,Math.floor(n));t.lineWidth=r,function(t,i){t.save(),t.lineWidth%2&&t.translate(.5,.5),i(),t.restore()}(t,(()=>{const h=a(this.qt);if(h.Tl){t.strokeStyle=h.Rl,s(t,h.Dl),t.beginPath();for(const s of h.Il){const e=Math.round(s.Vl*n);t.moveTo(e,-r),t.lineTo(e,i.height+r)}t.stroke()}if(h.El){t.strokeStyle=h.Bl,s(t,h.Al),t.beginPath();for(const n of h.zl){const s=Math.round(n.Vl*e);t.moveTo(-r,s),t.lineTo(i.width+r,s)}t.stroke()}}))}}class ni{constructor(t){this.Xt=new ii,this.xt=!0,this.yt=t}Pt(){this.xt=!0}Tt(){if(this.xt){const t=this.yt.Qt().N().grid,i={El:t.horzLines.visible,Tl:t.vertLines.visible,Bl:t.horzLines.color,Rl:t.vertLines.color,Al:t.horzLines.style,Dl:t.vertLines.style,zl:this.yt.kn().Ll(),Il:(this.yt.Qt().Bt().Ll()||[]).map((t=>({Vl:t.coord})))};this.Xt.ht(i),this.xt=!1}return this.Xt}}class si{constructor(t){this.Yh=new ni(t)}wr(){return this.Yh}}const ei={Ol:4,Nl:1e-4};function ri(t,i){const n=100*(t-i)/i;return i<0?-n:n}function hi(t,i){const n=ri(t.Je(),i),s=ri(t.Qe(),i);return new dt(n,s)}function ai(t,i){const n=100*(t-i)/i+100;return i<0?-n:n}function li(t,i){const n=ai(t.Je(),i),s=ai(t.Qe(),i);return new dt(n,s)}function oi(t,i){const n=Math.abs(t);if(n<1e-15)return 0;const s=Math.log10(n+i.Nl)+i.Ol;return t<0?-s:s}function _i(t,i){const n=Math.abs(t);if(n<1e-15)return 0;const s=Math.pow(10,n-i.Ol)-i.Nl;return t<0?-s:s}function ui(t,i){if(null===t)return null;const n=oi(t.Je(),i),s=oi(t.Qe(),i);return new dt(n,s)}function ci(t,i){if(null===t)return null;const n=_i(t.Je(),i),s=_i(t.Qe(),i);return new dt(n,s)}function di(t){if(null===t)return ei;const i=Math.abs(t.Qe()-t.Je());if(i>=1||i<1e-15)return ei;const n=Math.ceil(Math.abs(Math.log10(i))),s=ei.Ol+n;return{Ol:s,Nl:1/Math.pow(10,s)}}class fi{constructor(t,i){if(this.Fl=t,this.Wl=i,function(t){if(t<0)return!1;if(t>1e18)return!0;for(let i=t;i>1;i/=10)if(i%10!=0)return!1;return!0}(this.Fl))this.Hl=[2,2.5,2];else{this.Hl=[];for(let t=this.Fl;1!==t;){if(t%2==0)this.Hl.push(2),t/=2;else{if(t%5!=0)throw new Error("unexpected base");this.Hl.push(2,2.5),t/=5}if(this.Hl.length>100)throw new Error("something wrong with base")}}}Ul(t,i,n){const s=0===this.Fl?0:1/this.Fl;let e=Math.pow(10,Math.max(0,Math.ceil(Math.log10(t-i)))),r=0,h=this.Wl[0];for(;;){const t=Qt(e,s,1e-14)&&e>s+1e-14,i=Qt(e,n*h,1e-14),a=Qt(e,1,1e-14);if(!(t&&i&&a))break;e/=h,h=this.Wl[++r%this.Wl.length]}if(e<=s+1e-14&&(e=s),e=Math.max(1,e),this.Hl.length>0&&(a=e,l=1,o=1e-14,Math.abs(a-l)<o))for(r=0,h=this.Hl[0];Qt(e,n*h,1e-14)&&e>s+1e-14;)e/=h,h=this.Hl[++r%this.Hl.length];var a,l,o;return e}}class pi{constructor(t,i,n,s){this.$l=[],this.Ki=t,this.Fl=i,this.jl=n,this.ql=s}Ul(t,i){if(t<i)throw new Error("high < low");const n=this.Ki.$t(),s=(t-i)*this.Yl()/n,e=new fi(this.Fl,[2,2.5,2]),r=new fi(this.Fl,[2,2,2.5]),h=new fi(this.Fl,[2.5,2,2]),a=[];return a.push(e.Ul(t,i,s),r.Ul(t,i,s),h.Ul(t,i,s)),function(t){if(t.length<1)throw Error("array is empty");let i=t[0];for(let n=1;n<t.length;++n)t[n]<i&&(i=t[n]);return i}(a)}Kl(){const t=this.Ki,i=t.zt();if(null===i)return void(this.$l=[]);const n=t.$t(),s=this.jl(n-1,i),e=this.jl(0,i),r=this.Ki.N().entireTextOnly?this.Gl()/2:0,h=r,a=n-1-r,l=Math.max(s,e),o=Math.min(s,e);if(l===o)return void(this.$l=[]);const _=this.Ul(l,o);if(this.Zl(i,_,l,o,h,a),t.Xl()&&this.Jl(_,o,l)){const t=this.Ki.Ql();this.io(i,_,h,a,t,2*t)}const u=this.$l.map((t=>t.no)),c=this.Ki.so(u);for(let t=0;t<this.$l.length;t++)this.$l[t].eo=c[t]}Ll(){return this.$l}Gl(){return this.Ki.P()}Yl(){return Math.ceil(this.Gl()*this.Ki.N().tickMarkDensity)}Zl(t,i,n,s,e,r){const h=this.$l,a=this.Ki;let l=n%i;l+=l<0?i:0;const o=n>=s?1:-1;let _=null,u=0;for(let c=n-l;c>s;c-=i){const n=this.ql(c,t,!0);null!==_&&Math.abs(n-_)<this.Yl()||(n<e||n>r||(u<h.length?(h[u].Vl=n,h[u].eo=a.ro(c),h[u].no=c):h.push({Vl:n,eo:a.ro(c),no:c}),u++,_=n,a.ho()&&(i=this.Ul(c*o,s))))}h.length=u}io(t,i,n,s,e,r){const h=this.$l,a=this.ao(t,n,e,r),l=this.ao(t,s,-r,-e),o=this.ql(0,t,!0)-this.ql(i,t,!0);h.length>0&&h[0].Vl-a.Vl<o/2&&h.shift(),h.length>0&&l.Vl-h[h.length-1].Vl<o/2&&h.pop(),h.unshift(a),h.push(l)}ao(t,i,n,s){const e=(n+s)/2,r=this.jl(i+n,t),h=this.jl(i+s,t),a=Math.min(r,h),l=Math.max(r,h),o=Math.max(.1,this.Ul(l,a)),_=this.jl(i+e,t),u=_-_%o,c=this.ql(u,t,!0);return{eo:this.Ki.ro(u),Vl:c,no:u}}Jl(t,i,n){let s=l(this.Ki.ar());return this.Ki.ho()&&(s=ci(s,this.Ki.lo())),s.Je()-i<t&&n-s.Qe()<t}}function vi(t){return t.slice().sort(((t,i)=>a(t.ln())-a(i.ln())))}var mi;!function(t){t[t.Normal=0]="Normal",t[t.Logarithmic=1]="Logarithmic",t[t.Percentage=2]="Percentage",t[t.IndexedTo100=3]="IndexedTo100"}(mi||(mi={}));const wi=new J,gi=new X(100,1);class Mi{constructor(t,i,n,s,e){this.oo=0,this._o=null,this.rr=null,this.uo=null,this.co={do:!1,fo:null},this.po=!1,this.vo=0,this.mo=0,this.wo=new o,this.Mo=new o,this.bo=[],this.So=null,this.xo=null,this.Co=null,this.yo=null,this.Po=null,this.el=gi,this.ko=di(null),this.To=t,this.yn=i,this.Ro=n,this.Do=s,this.Io=e,this.Vo=new pi(this,100,this.Eo.bind(this),this.Bo.bind(this))}pl(){return this.To}N(){return this.yn}vr(t){if(_(this.yn,t),this.vl(),void 0!==t.mode&&this.Ao({_e:t.mode}),void 0!==t.scaleMargins){const i=h(t.scaleMargins.top),n=h(t.scaleMargins.bottom);if(i<0||i>1)throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);if(n<0||n>1)throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);if(i+n>1)throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i+n}`);this.zo(),this.Co=null}}Lo(){return this.yn.autoScale}Oo(){return this.po}ho(){return 1===this.yn.mode}je(){return 2===this.yn.mode}No(){return 3===this.yn.mode}lo(){return this.ko}_e(){return{hs:this.yn.autoScale,Fo:this.yn.invertScale,_e:this.yn.mode}}Ao(t){const i=this._e();let n=null;void 0!==t.hs&&(this.yn.autoScale=t.hs),void 0!==t._e&&(this.yn.mode=t._e,2!==t._e&&3!==t._e||(this.yn.autoScale=!0),this.co.do=!1),1===i._e&&t._e!==i._e&&(!function(t,i){if(null===t)return!1;const n=_i(t.Je(),i),s=_i(t.Qe(),i);return isFinite(n)&&isFinite(s)}(this.rr,this.ko)?this.yn.autoScale=!0:(n=ci(this.rr,this.ko),null!==n&&this.Wo(n))),1===t._e&&t._e!==i._e&&(n=ui(this.rr,this.ko),null!==n&&this.Wo(n));const s=i._e!==this.yn.mode;s&&(2===i._e||this.je())&&this.vl(),s&&(3===i._e||this.No())&&this.vl(),void 0!==t.Fo&&i.Fo!==t.Fo&&(this.yn.invertScale=t.Fo,this.Ho()),this.Mo.p(i,this._e())}Uo(){return this.Mo}P(){return this.Ro.fontSize}$t(){return this.oo}$o(t){this.oo!==t&&(this.oo=t,this.zo(),this.Co=null)}jo(){if(this._o)return this._o;const t=this.$t()-this.qo()-this.Yo();return this._o=t,t}ar(){return this.Ko(),this.rr}Wo(t,i){const n=this.rr;(i||null===n&&null!==t||null!==n&&!n.Ze(t))&&(this.Co=null,this.rr=t)}Go(t){this.Wo(t),this.Zo(null!==t)}Zi(){return this.Ko(),0===this.oo||!this.rr||this.rr.Zi()}Xo(t){return this.Fo()?t:this.$t()-1-t}Nt(t,i){return this.je()?t=ri(t,i):this.No()&&(t=ai(t,i)),this.Bo(t,i)}Jo(t,i,n){this.Ko();const s=this.Yo(),e=a(this.ar()),r=e.Je(),h=e.Qe(),l=this.jo()-1,o=this.Fo(),_=l/(h-r),u=void 0===n?0:n.from,c=void 0===n?t.length:n.to,d=this.Qo();for(let n=u;n<c;n++){const e=t[n],h=e.gt;if(isNaN(h))continue;let a=h;null!==d&&(a=d(e.gt,i));const l=s+_*(a-r),u=o?l:this.oo-1-l;e.ut=u}}t_(t,i,n){this.Ko();const s=this.Yo(),e=a(this.ar()),r=e.Je(),h=e.Qe(),l=this.jo()-1,o=this.Fo(),_=l/(h-r),u=void 0===n?0:n.from,c=void 0===n?t.length:n.to,d=this.Qo();for(let n=u;n<c;n++){const e=t[n];let h=e.jr,a=e.qr,l=e.Yr,u=e.Kr;null!==d&&(h=d(e.jr,i),a=d(e.qr,i),l=d(e.Yr,i),u=d(e.Kr,i));let c=s+_*(h-r),f=o?c:this.oo-1-c;e.i_=f,c=s+_*(a-r),f=o?c:this.oo-1-c,e.n_=f,c=s+_*(l-r),f=o?c:this.oo-1-c,e.s_=f,c=s+_*(u-r),f=o?c:this.oo-1-c,e.e_=f}}Tn(t,i){const n=this.Eo(t,i);return this.r_(n,i)}r_(t,i){let n=t;return this.je()?n=function(t,i){return i<0&&(t=-t),t/100*i+i}(n,i):this.No()&&(n=function(t,i){return t-=100,i<0&&(t=-t),t/100*i+i}(n,i)),n}kl(){return this.bo}Dt(){return this.xo||(this.xo=vi(this.bo)),this.xo}h_(t){-1===this.bo.indexOf(t)&&(this.bo.push(t),this.vl(),this.a_())}l_(t){const i=this.bo.indexOf(t);if(-1===i)throw new Error("source is not attached to scale");this.bo.splice(i,1),0===this.bo.length&&(this.Ao({hs:!0}),this.Wo(null)),this.vl(),this.a_()}zt(){let t=null;for(const i of this.bo){const n=i.zt();null!==n&&((null===t||n.Oa<t.Oa)&&(t=n))}return null===t?null:t.Wt}Fo(){return this.yn.invertScale}Ll(){const t=null===this.zt();if(null!==this.Co&&(t||this.Co.o_===t))return this.Co.Ll;this.Vo.Kl();const i=this.Vo.Ll();return this.Co={Ll:i,o_:t},this.wo.p(),i}__(){return this.wo}u_(t){this.je()||this.No()||null===this.yo&&null===this.uo&&(this.Zi()||(this.yo=this.oo-t,this.uo=a(this.ar()).Xe()))}c_(t){if(this.je()||this.No())return;if(null===this.yo)return;this.Ao({hs:!1}),(t=this.oo-t)<0&&(t=0);let i=(this.yo+.2*(this.oo-1))/(t+.2*(this.oo-1));const n=a(this.uo).Xe();i=Math.max(i,.1),n.ir(i),this.Wo(n)}d_(){this.je()||this.No()||(this.yo=null,this.uo=null)}f_(t){this.Lo()||null===this.Po&&null===this.uo&&(this.Zi()||(this.Po=t,this.uo=a(this.ar()).Xe()))}p_(t){if(this.Lo())return;if(null===this.Po)return;const i=a(this.ar()).tr()/(this.jo()-1);let n=t-this.Po;this.Fo()&&(n*=-1);const s=n*i,e=a(this.uo).Xe();e.nr(s),this.Wo(e,!0),this.Co=null}v_(){this.Lo()||null!==this.Po&&(this.Po=null,this.uo=null)}sl(){return this.el||this.vl(),this.el}Ji(t,i){switch(this.yn.mode){case 2:return this.m_(ri(t,i));case 3:return this.sl().format(ai(t,i));default:return this.cr(t)}}ro(t){switch(this.yn.mode){case 2:return this.m_(t);case 3:return this.sl().format(t);default:return this.cr(t)}}so(t){switch(this.yn.mode){case 2:return this.w_(t);case 3:return this.sl().formatTickmarks(t);default:return this.g_(t)}}xa(t){return this.cr(t,a(this.So).sl())}Ca(t,i){return t=ri(t,i),this.m_(t,wi)}M_(){return this.bo}b_(t){this.co={fo:t,do:!1}}Nn(){this.bo.forEach((t=>t.Nn()))}Xl(){return this.yn.ensureEdgeTickMarksVisible&&this.Lo()}Ql(){return this.P()/2}vl(){this.Co=null;let t=1/0;this.So=null;for(const i of this.bo)i.ln()<t&&(t=i.ln(),this.So=i);let i=100;null!==this.So&&(i=Math.round(this.So.Kh())),this.el=gi,this.je()?(this.el=wi,i=100):this.No()?(this.el=new X(100,1),i=100):null!==this.So&&(this.el=this.So.sl()),this.Vo=new pi(this,i,this.Eo.bind(this),this.Bo.bind(this)),this.Vo.Kl()}a_(){this.xo=null}S_(){return null===this.So||this.je()||this.No()?1:1/this.So.Kh()}Xi(){return this.Io}Zo(t){this.po=t}qo(){return this.Fo()?this.yn.scaleMargins.bottom*this.$t()+this.mo:this.yn.scaleMargins.top*this.$t()+this.vo}Yo(){return this.Fo()?this.yn.scaleMargins.top*this.$t()+this.vo:this.yn.scaleMargins.bottom*this.$t()+this.mo}Ko(){this.co.do||(this.co.do=!0,this.x_())}zo(){this._o=null}Bo(t,i){if(this.Ko(),this.Zi())return 0;t=this.ho()&&t?oi(t,this.ko):t;const n=a(this.ar()),s=this.Yo()+(this.jo()-1)*(t-n.Je())/n.tr();return this.Xo(s)}Eo(t,i){if(this.Ko(),this.Zi())return 0;const n=this.Xo(t),s=a(this.ar()),e=s.Je()+s.tr()*((n-this.Yo())/(this.jo()-1));return this.ho()?_i(e,this.ko):e}Ho(){this.Co=null,this.Vo.Kl()}x_(){if(this.Oo()&&!this.Lo())return;const t=this.co.fo;if(null===t)return;let i=null;const n=this.M_();let s=0,e=0;for(const r of n){if(!r.It())continue;const n=r.zt();if(null===n)continue;const h=r.la(t.Na(),t.bi());let l=h&&h.ar();if(null!==l){switch(this.yn.mode){case 1:l=ui(l,this.ko);break;case 2:l=hi(l,n.Wt);break;case 3:l=li(l,n.Wt)}if(i=null===i?l:i.Ss(a(l)),null!==h){const t=h.lr();null!==t&&(s=Math.max(s,t.above),e=Math.max(e,t.below))}}}if(this.Xl()&&(s=Math.max(s,this.Ql()),e=Math.max(e,this.Ql())),s===this.vo&&e===this.mo||(this.vo=s,this.mo=e,this.Co=null,this.zo()),null!==i){if(i.Je()===i.Qe()){const t=5*this.S_();this.ho()&&(i=ci(i,this.ko)),i=new dt(i.Je()-t,i.Qe()+t),this.ho()&&(i=ui(i,this.ko))}if(this.ho()){const t=ci(i,this.ko),n=di(t);if(r=n,h=this.ko,r.Ol!==h.Ol||r.Nl!==h.Nl){const s=null!==this.uo?ci(this.uo,this.ko):null;this.ko=n,i=ui(t,n),null!==s&&(this.uo=ui(s,n))}}this.Wo(i)}else null===this.rr&&(this.Wo(new dt(-.5,.5)),this.ko=di(null));var r,h}Qo(){return this.je()?ri:this.No()?ai:this.ho()?t=>oi(t,this.ko):null}C_(t,i,n){return void 0===i?(void 0===n&&(n=this.sl()),n.format(t)):i(t)}y_(t,i,n){return void 0===i?(void 0===n&&(n=this.sl()),n.formatTickmarks(t)):i(t)}cr(t,i){return this.C_(t,this.Do.priceFormatter,i)}g_(t,i){const n=this.Do.priceFormatter;return this.y_(t,this.Do.tickmarksPriceFormatter??(n?t=>t.map(n):void 0),i)}m_(t,i){return this.C_(t,this.Do.percentageFormatter,i)}w_(t,i){const n=this.Do.percentageFormatter;return this.y_(t,this.Do.tickmarksPercentageFormatter??(n?t=>t.map(n):void 0),i)}}function bi(t){return t instanceof Kt}class Si{constructor(t,i){this.bo=[],this.P_=new Map,this.oo=0,this.k_=0,this.T_=1,this.xo=null,this.R_=null,this.D_=!1,this.I_=new o,this.fa=[],this.ia=t,this.sn=i,this.V_=new si(this);const n=i.N();this.E_=this.B_("left",n.leftPriceScale),this.A_=this.B_("right",n.rightPriceScale),this.E_.Uo().i(this.z_.bind(this,this.E_),this),this.A_.Uo().i(this.z_.bind(this,this.A_),this),this.L_(n)}L_(t){if(t.leftPriceScale&&this.E_.vr(t.leftPriceScale),t.rightPriceScale&&this.A_.vr(t.rightPriceScale),t.localization&&(this.E_.vl(),this.A_.vl()),t.overlayPriceScales){const i=Array.from(this.P_.values());for(const n of i){const i=a(n[0].Ft());i.vr(t.overlayPriceScales),t.localization&&i.vl()}}}O_(t){switch(t){case"left":return this.E_;case"right":return this.A_}return this.P_.has(t)?h(this.P_.get(t))[0].Ft():null}m(){this.Qt().N_().u(this),this.E_.Uo().u(this),this.A_.Uo().u(this),this.bo.forEach((t=>{t.m&&t.m()})),this.fa=this.fa.filter((t=>{const i=t.Qh();return i.detached&&i.detached(),!1})),this.I_.p()}F_(){return this.T_}W_(t){this.T_=t}Qt(){return this.sn}nn(){return this.k_}$t(){return this.oo}H_(t){this.k_=t,this.U_()}$o(t){this.oo=t,this.E_.$o(t),this.A_.$o(t),this.bo.forEach((i=>{if(this.Gs(i)){const n=i.Ft();null!==n&&n.$o(t)}})),this.U_()}j_(t){this.D_=t}q_(){return this.D_}Y_(){return this.bo.filter(bi)}kl(){return this.bo}Gs(t){const i=t.Ft();return null===i||this.E_!==i&&this.A_!==i}h_(t,i,n){this.K_(t,i,n?t.ln():this.bo.length)}l_(t,i){const n=this.bo.indexOf(t);r(-1!==n,"removeDataSource: invalid data source"),this.bo.splice(n,1),i||this.bo.forEach(((t,i)=>t._n(i)));const s=a(t.Ft()).pl();if(this.P_.has(s)){const i=h(this.P_.get(s)),n=i.indexOf(t);-1!==n&&(i.splice(n,1),0===i.length&&this.P_.delete(s))}const e=t.Ft();e&&e.kl().indexOf(t)>=0&&(e.l_(t),this.G_(e)),this.Z_()}Xs(t){return t===this.E_?"left":t===this.A_?"right":"overlay"}X_(){return this.E_}J_(){return this.A_}Q_(t,i){t.u_(i)}tu(t,i){t.c_(i),this.U_()}iu(t){t.d_()}nu(t,i){t.f_(i)}su(t,i){t.p_(i),this.U_()}eu(t){t.v_()}U_(){this.bo.forEach((t=>{t.Nn()}))}kn(){const[t,i]=this.ru();let n=null;return t.N().visible&&0!==t.kl().length?n=t:i.N().visible&&0!==i.kl().length?n=i:0!==this.bo.length&&(n=this.bo[0].Ft()),null===n&&(n=this.Zs()??t),n}Zs(){const[t,i]=this.ru();return t.N().visible?t:i.N().visible?i:null}G_(t){null!==t&&t.Lo()&&this.hu(t)}au(t){const i=this.ia.Be();t.Ao({hs:!0}),null!==i&&t.b_(i),this.U_()}lu(){this.hu(this.E_),this.hu(this.A_)}ou(){this.G_(this.E_),this.G_(this.A_),this.bo.forEach((t=>{this.Gs(t)&&this.G_(t.Ft())})),this.U_(),this.sn.mr()}Dt(){return null===this.xo&&(this.xo=vi(this.bo)),this.xo}_u(){const t=this.Dt(),i=this.sn.cu()?.uu,n=this.sn.N().hoveredSeriesOnTop,s=this.R_;if(null!==s&&s.Kh===t&&s.du===i&&s.fu===n)return s.pu;const e=function(t,i,n){if(!n)return t;const s=t.indexOf(i);if(-1===s||s===t.length-1)return t;const e=[];for(let i=0;i<t.length;i++)i!==s&&e.push(t[i]);return e.push(t[s]),e}(t,i,n);return this.R_={Kh:t,du:i,fu:n,pu:e},e}vu(t,i){i=Jt(i,0,this.bo.length-1);const n=this.bo.indexOf(t);r(-1!==n,"setSeriesOrder: invalid data source"),this.bo.splice(n,1),this.bo.splice(i,0,t),this.bo.forEach(((t,i)=>t._n(i))),this.Z_();for(const t of[this.E_,this.A_])t.a_(),t.vl();this.sn.mr()}Vt(){return this.Dt().filter(bi)}mu(){return this.I_}wu(){return this.V_}ol(t){this.fa.push(new zt(t))}_l(t){this.fa=this.fa.filter((i=>i.Qh()!==t)),t.detached&&t.detached(),this.sn.mr()}gu(){return this.fa}il(t,i){return this.fa.map((n=>n.Qs(t,i))).filter((t=>null!==t))}hu(t){const i=t.M_();if(i&&i.length>0&&!this.ia.Zi()){const i=this.ia.Be();null!==i&&t.b_(i)}t.Nn()}K_(t,i,n){let s=this.O_(i);if(null===s&&(s=this.B_(i,this.sn.N().overlayPriceScales)),this.bo.splice(n,0,t),!q(i)){const n=this.P_.get(i)||[];n.push(t),this.P_.set(i,n)}t._n(n),s.h_(t),t.un(s),this.G_(s),this.Z_()}Z_(){this.xo=null,this.R_=null}ru(){return"left"===this.sn.N().defaultVisiblePriceScaleId?[this.E_,this.A_]:[this.A_,this.E_]}z_(t,i,n){i._e!==n._e&&this.hu(t)}B_(t,i){const n={visible:!0,autoScale:!0,...p(i)},s=new Mi(t,n,this.sn.N().layout,this.sn.N().localization,this.sn.Xi());return s.$o(this.$t()),s}}function xi(t,i){return null===i||(2===t.se&&2!==i.se||(2!==i.se||2===t.se)&&(t.ne!==i.ne&&t.ne<i.ne))}function Ci(t){return{te:t.te,ie:t.ie}}function yi(t){return{ne:t.distance??0,se:t.hitTestPriority??("marker"===t.itemType?2:0),ee:t.itemType??"primitive",Mu:t.cursorStyle,te:t.externalId}}function Pi(t){return{uu:t.uu,bu:Ci(t.Su),Mu:t.Su.Mu,ee:t.Su.ee??"primitive"}}function ki(t,i,n,s){let e=null;for(const r of t){let t=r.Qs?.(i,n,s)??null;if(null===t){const e=r.Tt(s);t=null!==e&&e.Qs?e.Qs(i,n):null}if(null!==t){const i={xu:r,Su:t};(null===e||xi(i.Su,e.Su))&&(e=i)}}return e}function Ti(t){return void 0!==t.jn}function Ri(t,i,n){const s=[t,...t.Dt()].reverse(),e=function(t,i,n){let s,e,r;for(const l of t){const t=l.il?.(i,n)??[];for(const i of t){const t=yi(i);h=i.zOrder,a=s?.zOrder,(!a||"top"===h&&"top"!==a||"normal"===h&&"bottom"===a||i.zOrder===s?.zOrder&&void 0!==e&&xi(t,e)||i.zOrder===s?.zOrder&&void 0===e)&&(s=i,e=t,r=l)}}var h,a;return s&&r&&e?{Su:e,Cu:s,uu:r}:null}(s,i,n);if("top"===e?.Cu.zOrder)return Pi(e);let r=null,h=null;for(const a of s){if(e&&e.uu===a&&"bottom"!==e.Cu.zOrder&&!e.Cu.isBackground)return r??Pi(e);if(Ti(a)){const s=ki(a.jn(t),i,n,t);if(null!==s){const t={uu:a,xu:s.xu,bu:Ci(s.Su),Mu:s.Su.Mu,ee:s.Su.ee??"primitive"};(null===r||xi(s.Su,h))&&(r=t,h=s.Su)}}if(e&&e.uu===a&&"bottom"!==e.Cu.zOrder&&e.Cu.isBackground)return r??Pi(e)}return null!==r?r:e?.Cu?Pi(e):null}class Di{constructor(t,i,n=50){this.Vs=0,this.Es=1,this.Bs=1,this.zs=new Map,this.As=new Map,this.yu=t,this.Pu=i,this.Ls=n}ku(t){const i=t.time,n=this.Pu.cacheKey(i),s=this.zs.get(n);if(void 0!==s)return s.Tu;if(this.Vs===this.Ls){const t=this.As.get(this.Bs);this.As.delete(this.Bs),this.zs.delete(h(t)),this.Bs++,this.Vs--}const e=this.yu(t);return this.zs.set(n,{Tu:e,Ws:this.Es}),this.As.set(this.Es,n),this.Vs++,this.Es++,e}}class Ii{constructor(t,i){r(t<=i,"right should be >= left"),this.Ru=t,this.Du=i}Na(){return this.Ru}bi(){return this.Du}Iu(){return this.Du-this.Ru+1}Le(t){return this.Ru<=t&&t<=this.Du}Ze(t){return this.Ru===t.Na()&&this.Du===t.bi()}}function Vi(t,i){return null===t||null===i?t===i:t.Ze(i)}class Ei{constructor(){this.Vu=new Map,this.zs=null,this.Eu=!1}Bu(t){this.Eu=t,this.zs=null}Au(t,i){this.zu(i),this.zs=null;for(let n=i;n<t.length;++n){const i=t[n];let s=this.Vu.get(i.timeWeight);void 0===s&&(s=[],this.Vu.set(i.timeWeight,s)),s.push({index:n,time:i.time,weight:i.timeWeight,originalTime:i.originalTime})}}Lu(t,i,n,s,e){const r=Math.ceil(i/t);return null!==this.zs&&this.zs.Ou===r&&e===this.zs.Nu&&n===this.zs.Fu||(this.zs={Nu:e,Fu:n,Ll:this.Wu(r,n,s),Ou:r}),this.zs.Ll}zu(t){if(0===t)return void this.Vu.clear();const i=[];this.Vu.forEach(((n,s)=>{t<=n[0].index?i.push(s):n.splice(yt(n,t,(i=>i.index<t)),1/0)}));for(const t of i)this.Vu.delete(t)}Wu(t,i,n){let s=[];const e=t=>!i||n.has(t.index);for(const i of Array.from(this.Vu.keys()).sort(((t,i)=>i-t))){if(!this.Vu.get(i))continue;const n=s;s=[];const r=n.length;let a=0;const l=h(this.Vu.get(i)),o=l.length;let _=1/0,u=-1/0;for(let i=0;i<o;i++){const h=l[i],o=h.index;for(;a<r;){const t=n[a],i=t.index;if(!(i<o&&e(t))){_=i;break}a++,s.push(t),u=i,_=1/0}if(_-o>=t&&o-u>=t&&e(h))s.push(h),u=o;else if(this.Eu)return n}for(;a<r;a++)e(n[a])&&s.push(n[a])}return s}}class Bi{constructor(t){this.Hu=t}Uu(){return null===this.Hu?null:new Ii(Math.floor(this.Hu.Na()),Math.ceil(this.Hu.bi()))}$u(){return this.Hu}static ju(){return new Bi(null)}}function Ai(t,i){return t.weight>i.weight?t:i}class zi{constructor(t,i,n,s){this.k_=0,this.qu=null,this.Yu=[],this.Po=null,this.yo=null,this.Ku=new Ei,this.Gu=new Map,this.Zu=Bi.ju(),this.Xu=!0,this.Ju=new o,this.Qu=new o,this.tc=new o,this.nc=null,this.sc=null,this.ec=new Map,this.rc=-1,this.hc=[],this.ac=1,this.yn=i,this.Do=n,this.lc=i.rightOffset,this.oc=i.barSpacing,this.sn=t,this._c(i),this.Pu=s,this.uc(),this.Ku.Bu(i.uniformDistribution),this.cc(),this.dc()}N(){return this.yn}fc(t){_(this.Do,t),this.vc(),this.uc()}vr(t,i){_(this.yn,t),this.yn.fixLeftEdge&&this.mc(),this.yn.fixRightEdge&&this.wc(),void 0!==t.barSpacing&&this.sn.gs(t.barSpacing),void 0!==t.rightOffset&&this.sn.Ms(t.rightOffset),this._c(t),void 0===t.minBarSpacing&&void 0===t.maxBarSpacing||this.sn.gs(t.barSpacing??this.oc),void 0!==t.ignoreWhitespaceIndices&&t.ignoreWhitespaceIndices!==this.yn.ignoreWhitespaceIndices&&this.dc(),this.vc(),this.uc(),void 0===t.enableConflation&&void 0===t.conflationThresholdFactor||this.cc(),this.tc.p()}Rn(t){return this.Yu[t]?.time??null}en(t){return this.Yu[t]??null}gc(t,i){if(this.Yu.length<1)return null;if(this.Pu.key(t)>this.Pu.key(this.Yu[this.Yu.length-1].time))return i?this.Yu.length-1:null;const n=yt(this.Yu,this.Pu.key(t),((t,i)=>this.Pu.key(t.time)<i));return this.Pu.key(t)<this.Pu.key(this.Yu[n].time)?i?n:null:n}Zi(){return 0===this.k_||0===this.Yu.length||null===this.qu}Mc(){return this.Yu.length>0}Be(){return this.bc(),this.Zu.Uu()}Sc(){return this.bc(),this.Zu.$u()}xc(){const t=this.Be();if(null===t)return null;const i={from:t.Na(),to:t.bi()};return this.Cc(i)}Cc(t){const i=Math.round(t.from),n=Math.round(t.to),s=a(this.yc()),e=a(this.Pc());return{from:a(this.en(Math.max(s,i))),to:a(this.en(Math.min(e,n)))}}kc(t){return{from:a(this.gc(t.from,!0)),to:a(this.gc(t.to,!0))}}nn(){return this.k_}H_(t){if(!isFinite(t)||t<=0)return;if(this.k_===t)return;const i=this.Sc(),n=this.k_;if(this.k_=t,this.Xu=!0,this.yn.lockVisibleTimeRangeOnResize&&0!==n){const i=this.oc*t/n;this.oc=i}if(this.yn.fixLeftEdge&&null!==i&&i.Na()<=0){const i=n-t;this.lc-=Math.round(i/this.oc)+1,this.Xu=!0}this.Tc(),this.Rc()}jt(t){if(this.Zi()||!c(t))return 0;const i=this.Dc()+this.lc-t;return this.k_-(i+.5)*this.oc-1}Ic(t,i){const n=this.Dc(),s=void 0===i?0:i.from,e=void 0===i?t.length:i.to;for(let i=s;i<e;i++){const s=t[i].wt,e=n+this.lc-s,r=this.k_-(e+.5)*this.oc-1;t[i]._t=r}}Vc(t,i){const n=Math.ceil(this.Ec(t));return i&&this.yn.ignoreWhitespaceIndices&&!this.Bc(n)?this.Ac(n):n}Ms(t){this.Xu=!0,this.lc=t,this.Rc(),this.sn.zc(),this.sn.mr()}ml(){return this.oc}gs(t){const i=this.oc;if(this.Lc(t),void 0!==this.yn.rightOffsetPixels&&0!==i){const t=this.lc*i/this.oc;this.lc=t}this.Rc(),this.sn.zc(),this.sn.mr()}Oc(){return this.lc}Ll(){if(this.Zi())return null;if(null!==this.sc)return this.sc;const t=this.oc,i=5*(this.sn.N().layout.fontSize+4)/8*(this.yn.tickMarkMaxCharacterLength||8),n=Math.round(i/t),s=a(this.Be()),e=Math.max(s.Na(),s.Na()-n),r=Math.max(s.bi(),s.bi()-n),h=this.Ku.Lu(t,i,this.yn.ignoreWhitespaceIndices,this.ec,this.rc),l=this.yc()+n,o=this.Pc()-n,_=this.Nc(),u=this.yn.fixLeftEdge||_,c=this.yn.fixRightEdge||_;let d=0;for(const t of h){if(!(e<=t.index&&t.index<=r))continue;let n;d<this.hc.length?(n=this.hc[d],n.coord=this.jt(t.index),n.label=this.Fc(t),n.weight=t.weight):(n={needAlignCoordinate:!1,coord:this.jt(t.index),label:this.Fc(t),weight:t.weight},this.hc.push(n)),this.oc>i/2&&!_?n.needAlignCoordinate=!1:n.needAlignCoordinate=u&&t.index<=l||c&&t.index>=o,d++}return this.hc.length=d,this.sc=this.hc,this.hc}Wc(){let t;this.Xu=!0,this.gs(this.yn.barSpacing),t=void 0!==this.yn.rightOffsetPixels?this.yn.rightOffsetPixels/this.ml():this.yn.rightOffset,this.Ms(t)}Hc(t){this.Xu=!0,this.qu=t,this.Rc(),this.mc()}Uc(t,i){const n=this.Ec(t),s=this.ml(),e=s+i*(s/10);this.gs(e),this.yn.rightBarStaysOnScroll||this.Ms(this.Oc()+(n-this.Ec(t)))}u_(t){this.Po&&this.v_(),null===this.yo&&null===this.nc&&(this.Zi()||(this.yo=t,this.$c()))}c_(t){if(null===this.nc)return;const i=Jt(this.k_-t,0,this.k_),n=Jt(this.k_-a(this.yo),0,this.k_);0!==i&&0!==n&&this.gs(this.nc.ml*i/n)}d_(){null!==this.yo&&(this.yo=null,this.jc())}f_(t){null===this.Po&&null===this.nc&&(this.Zi()||(this.Po=t,this.$c()))}p_(t){if(null===this.Po)return;const i=(this.Po-t)/this.ml();this.lc=a(this.nc).Oc+i,this.Xu=!0,this.Rc()}v_(){null!==this.Po&&(this.Po=null,this.jc())}qc(){this.Yc(this.yn.rightOffset)}Yc(t,i=400){if(!isFinite(t))throw new RangeError("offset is required and must be finite number");if(!isFinite(i)||i<=0)throw new RangeError("animationDuration (optional) must be finite positive number");const n=this.lc,s=performance.now();this.sn.ps({Kc:t=>(t-s)/i>=1,Gc:e=>{const r=(e-s)/i;return r>=1?t:n+(t-n)*r}})}Pt(t,i){this.Xu=!0,this.Yu=t,this.Ku.Au(t,i),this.Rc()}Zc(){return this.Ju}Xc(){return this.Qu}Jc(){return this.tc}Dc(){return this.qu||0}Qc(t,i){const n=t.Iu(),s=i&&this.yn.rightOffsetPixels||0;this.Lc((this.k_-s)/n),this.lc=t.bi()-this.Dc(),i&&(this.lc=s?s/this.ml():this.yn.rightOffset),this.Rc(),this.Xu=!0,this.sn.zc(),this.sn.mr()}td(){const t=this.yc(),i=this.Pc();if(null===t||null===i)return;const n=!this.yn.rightOffsetPixels&&this.yn.rightOffset||0;this.Qc(new Ii(t,i+n),!0)}nd(t){const i=new Ii(t.from,t.to);this.Qc(i)}rn(t){return void 0!==this.Do.timeFormatter?this.Do.timeFormatter(t.originalTime):this.Pu.formatHorzItem(t.time)}dc(){if(!this.yn.ignoreWhitespaceIndices)return;this.ec.clear();const t=this.sn.Jn();for(const i of t)for(const t of i.fl())this.ec.set(t,!0);this.rc++}sd(){return this.ac}Sl(){const t=1/(window.devicePixelRatio||1),i=this.yn.minBarSpacing;if(i>=t)return[1];const n=[1];let s=2;for(;s<=512;){i<t/s&&n.push(s),s*=2}return n}Nc(){const t=this.sn.N().handleScroll,i=this.sn.N().handleScale;return!(t.horzTouchDrag||t.mouseWheel||t.pressedMouseMove||t.vertTouchDrag||i.axisDoubleClickReset.time||i.axisPressedMouseMove.time||i.mouseWheel||i.pinch)}yc(){return 0===this.Yu.length?null:0}Pc(){return 0===this.Yu.length?null:this.Yu.length-1}ed(t){return(this.k_-1-t)/this.oc}Ec(t){const i=this.ed(t),n=this.Dc()+this.lc-i;return Math.round(1e6*n)/1e6}Lc(t){const i=this.oc;this.oc=t,this.Tc(),i!==this.oc&&(this.Xu=!0,this.rd(),this.cc())}bc(){if(!this.Xu)return;if(this.Xu=!1,this.Zi())return void this.hd(Bi.ju());const t=this.Dc(),i=this.k_/this.oc,n=this.lc+t,s=new Ii(n-i+1,n);this.hd(new Bi(s))}Tc(){const t=Jt(this.oc,this.ad(),this.ld());this.oc!==t&&(this.oc=t,this.Xu=!0)}ld(){return this.yn.maxBarSpacing>0?this.yn.maxBarSpacing:.5*this.k_}ad(){return this.yn.fixLeftEdge&&this.yn.fixRightEdge&&0!==this.Yu.length?this.k_/this.Yu.length:this.yn.minBarSpacing}cc(){if(!this.yn.enableConflation)return void(this.ac=1);const t=1/(window.devicePixelRatio||1)*(this.yn.conflationThresholdFactor??1);if(this.oc>=t)return void(this.ac=1);const i=t/this.oc,n=Math.pow(2,Math.floor(Math.log2(i)));this.ac=Math.min(n,512)}Rc(){const t=this.od();null!==t&&this.lc<t&&(this.lc=t,this.Xu=!0);const i=this._d();this.lc>i&&(this.lc=i,this.Xu=!0)}od(){const t=this.yc(),i=this.qu;if(null===t||null===i)return null;return t-i-1+(this.yn.fixLeftEdge?this.k_/this.oc:Math.min(2,this.Yu.length))}_d(){return this.yn.fixRightEdge?0:this.k_/this.oc-Math.min(2,this.Yu.length)}$c(){this.nc={ml:this.ml(),Oc:this.Oc()}}jc(){this.nc=null}Fc(t){let i=this.Gu.get(t.weight);return void 0===i&&(i=new Di((t=>this.ud(t)),this.Pu),this.Gu.set(t.weight,i)),i.ku(t)}ud(t){return this.Pu.formatTickmark(t,this.Do)}hd(t){const i=this.Zu;this.Zu=t,Vi(i.Uu(),this.Zu.Uu())||this.Ju.p(),Vi(i.$u(),this.Zu.$u())||this.Qu.p(),this.rd()}rd(){this.sc=null}vc(){this.rd(),this.Gu.clear()}uc(){this.Pu.updateFormatter(this.Do)}mc(){if(!this.yn.fixLeftEdge)return;const t=this.yc();if(null===t)return;const i=this.Be();if(null===i)return;const n=i.Na()-t;if(n<0){const t=this.lc-n-1;this.Ms(t)}this.Tc()}wc(){this.Rc(),this.Tc()}Bc(t){return!this.yn.ignoreWhitespaceIndices||(this.ec.get(t)||!1)}Ac(t){const i=function*(t){const i=Math.round(t),n=i<t;let s=1;for(;;)n?(yield i+s,yield i-s):(yield i-s,yield i+s),s++}(t),n=this.Pc();for(;n;){const t=i.next().value;if(this.ec.get(t))return t;if(t<0||t>n)break}return t}_c(t){if(void 0!==t.rightOffsetPixels){const i=t.rightOffsetPixels/(t.barSpacing||this.oc);this.sn.Ms(i)}}}var Li,Oi,Ni,Fi,Wi;!function(t){t[t.OnTouchEnd=0]="OnTouchEnd",t[t.OnNextTap=1]="OnNextTap"}(Li||(Li={}));class Hi{constructor(t,i,n){this.dd=[],this.fd=[],this.pd=null,this.k_=0,this.vd=null,this.md=new o,this.wd=new o,this.gd=null,this.Md=t,this.yn=i,this.Pu=n,this.Io=new x(this.yn.layout.colorParsers),this.bd=new M(this),this.ia=new zi(this,i.timeScale,this.yn.localization,n),this.Ct=new j(this,i.crosshair),this.Sd=new Xt(i.crosshair),i.addDefaultPane&&(this.xd(0),this.dd[0].W_(2)),this.Cd=this.yd(0),this.Pd=this.yd(1)}ka(){this.kd(Y.ys())}mr(){this.kd(Y.Cs())}Ya(){this.kd(new Y(1))}Ta(t){const i=this.Td(t);this.kd(i)}cu(){return this.vd}Rd(t){if(this.vd?.uu===t?.uu&&this.vd?.bu?.te===t?.bu?.te&&this.vd?.bu?.ie===t?.bu?.ie&&this.vd?.Mu===t?.Mu&&this.vd?.ee===t?.ee)return;const i=this.vd;this.vd=t,null!==i&&this.Ta(i.uu),null!==t&&t.uu!==i?.uu&&this.Ta(t.uu)}N(){return this.yn}vr(t){_(this.yn,t),this.dd.forEach((i=>i.L_(t))),void 0!==t.timeScale&&this.ia.vr(t.timeScale),void 0!==t.localization&&this.ia.fc(t.localization),(t.leftPriceScale||t.rightPriceScale)&&this.md.p(),this.Cd=this.yd(0),this.Pd=this.yd(1),this.ka()}Dd(t,i,n=0){const s=this.dd[n];if(void 0===s)return;if("left"===t)return _(this.yn,{leftPriceScale:i}),s.L_({leftPriceScale:i}),this.md.p(),void this.ka();if("right"===t)return _(this.yn,{rightPriceScale:i}),s.L_({rightPriceScale:i}),this.md.p(),void this.ka();const e=this.Id(t,n);null!==e&&(e.Ft.vr(i),this.md.p())}Id(t,i){const n=this.dd[i];if(void 0===n)return null;const s=n.O_(t);return null!==s?{Kn:n,Ft:s}:null}Bt(){return this.ia}Gn(){return this.dd}Vd(){return this.Ct}Ed(){return this.wd}Bd(t,i){t.$o(i),this.zc()}H_(t){this.k_=t,this.ia.H_(this.k_),this.dd.forEach((i=>i.H_(t))),this.zc()}Ad(t){1!==this.dd.length&&(r(t>=0&&t<this.dd.length,"Invalid pane index"),this.dd.splice(t,1),this.ka())}zd(t,i){if(this.dd.length<2)return;r(t>=0&&t<this.dd.length,"Invalid pane index");const n=this.dd[t],s=this.dd.reduce(((t,i)=>t+i.F_()),0),e=this.dd.reduce(((t,i)=>t+i.$t()),0),h=e-30*(this.dd.length-1);i=Math.min(h,Math.max(30,i));const a=s/e,l=n.$t();n.W_(i*a);let o=i-l,_=this.dd.length-1;for(const t of this.dd)if(t!==n){const i=Math.min(h,Math.max(30,t.$t()-o/_));o-=t.$t()-i,_-=1;const n=i*a;t.W_(n)}this.ka()}Ld(t,i){r(t>=0&&t<this.dd.length&&i>=0&&i<this.dd.length,"Invalid pane index");const n=this.dd[t],s=this.dd[i];this.dd[t]=s,this.dd[i]=n,this.ka()}Od(t,i){if(r(t>=0&&t<this.dd.length&&i>=0&&i<this.dd.length,"Invalid pane index"),t===i)return;const[n]=this.dd.splice(t,1);this.dd.splice(i,0,n),this.ka()}Q_(t,i,n){t.Q_(i,n)}tu(t,i,n){t.tu(i,n),this.Ra(),this.kd(this.Nd(t,2))}iu(t,i){t.iu(i),this.kd(this.Nd(t,2))}nu(t,i,n){i.Lo()||t.nu(i,n)}su(t,i,n){i.Lo()||(t.su(i,n),this.Ra(),this.kd(this.Nd(t,2)))}eu(t,i){i.Lo()||(t.eu(i),this.kd(this.Nd(t,2)))}au(t,i){t.au(i),this.kd(this.Nd(t,2))}Fd(t){this.ia.u_(t)}Wd(t,i){const n=this.Bt();if(n.Zi()||0===i)return;const s=n.nn();t=Math.max(1,Math.min(t,s)),n.Uc(t,i),this.zc()}Hd(t){this.Ud(0),this.$d(t),this.jd()}qd(t){this.ia.c_(t),this.zc()}Yd(){this.ia.d_(),this.mr()}Ud(t){this.ia.f_(t)}$d(t){this.ia.p_(t),this.zc()}jd(){this.ia.v_(),this.mr()}Jn(){return this.fd}Wn(){return null===this.pd&&(this.pd=this.fd.filter((t=>t.It()))),this.pd}Pa(){this.pd=null}Kd(t,i,n,s,e){this.Ct.In(t,i);let r=NaN,h=this.ia.Vc(t,!0);const a=this.ia.Be();null!==a&&(h=Math.min(Math.max(a.Na(),h),a.bi())),h=this.Ct.Fn(h);const l=s.kn(),o=l.zt();if(null!==o&&(r=l.Tn(i,o)),r=this.Sd.Pl(r,h,s),this.Ct.An(h,r,s),this.Ya(),!e){const e=Ri(s,t,i);this.Rd(e&&{uu:e.uu,bu:e.bu,Mu:e.Mu||null,ee:e.ee}),this.wd.p(this.Ct.Et(),{x:t,y:i},n)}}Gd(t,i,n){const s=n.kn(),e=s.zt(),r=s.Nt(t,a(e)),h=this.ia.gc(i,!0),l=this.ia.jt(a(h));this.Kd(l,r,null,n,!0)}Zd(t){this.Vd().Ln(),this.Ya(),t||this.wd.p(null,null,null)}Ra(){const t=this.Ct.Kn();if(null!==t){const i=this.Ct.En(),n=this.Ct.Bn();this.Kd(i,n,null,t)}this.Ct.Nn()}Xd(t,i,n){const s=this.ia.Rn(0);void 0!==i&&void 0!==n&&this.ia.Pt(i,n);const e=this.ia.Rn(0),r=this.ia.Dc(),h=this.ia.Be();if(null!==h&&null!==s&&null!==e){const i=h.Le(r),a=this.Pu.key(s)>this.Pu.key(e),l=null!==t&&t>r&&!a,o=this.ia.N().allowShiftVisibleRangeOnWhitespaceReplacement,_=i&&(!(void 0===n)||o)&&this.ia.N().shiftVisibleRangeOnNewBar;if(l&&!_){const i=t-r;this.ia.Ms(this.ia.Oc()-i)}}this.ia.Hc(t)}Ea(t){null!==t&&t.ou()}Ks(t){if(function(t){return t instanceof Si}(t))return t;const i=this.dd.find((i=>i.Dt().includes(t)));return void 0===i?null:i}zc(){this.dd.forEach((t=>t.ou())),this.Ra()}m(){this.dd.forEach((t=>t.m())),this.dd.length=0,this.yn.localization.priceFormatter=void 0,this.yn.localization.percentageFormatter=void 0,this.yn.localization.timeFormatter=void 0}Jd(){return this.bd}Js(){return this.bd.N()}N_(){return this.md}Qd(t,i){const n=this.xd(i);this.tf(t,n),this.fd.push(t),this.Pa(),1===this.fd.length?this.ka():this.mr()}if(t){const i=this.Ks(t),n=this.fd.indexOf(t);r(-1!==n,"Series not found");const s=a(i);this.fd.splice(n,1),s.l_(t),t.m&&t.m(),this.Pa(),this.ia.dc(),this.nf(s)}ya(t,i){const n=a(this.Ks(t));n.l_(t,!0),n.h_(t,i,!0)}td(){const t=Y.Cs();t.us(),this.kd(t)}sf(t){const i=Y.Cs();i.fs(t),this.kd(i)}ws(){const t=Y.Cs();t.ws(),this.kd(t)}gs(t){const i=Y.Cs();i.gs(t),this.kd(i)}Ms(t){const i=Y.Cs();i.Ms(t),this.kd(i)}ps(t){const i=Y.Cs();i.ps(t),this.kd(i)}cs(){const t=Y.Cs();t.cs(),this.kd(t)}ef(){const t=this.yn.defaultVisiblePriceScaleId,i=this.yn.leftPriceScale.visible;return i!==this.yn.rightPriceScale.visible?i?"left":"right":t}rf(t,i){r(i>=0,"Index should be greater or equal to 0");if(i===this.hf(t))return;const n=a(this.Ks(t));n.l_(t);const s=this.xd(i);this.tf(t,s);let e=!1;0===n.kl().length&&(e=this.nf(n)),e||this.ka()}af(){return this.Pd}$(){return this.Cd}Ut(t){const i=this.Pd,n=this.Cd;if(i===n)return i;if(t=Math.max(0,Math.min(100,Math.round(100*t))),null===this.gd||this.gd.ah!==n||this.gd.oh!==i)this.gd={ah:n,oh:i,lf:new Map};else{const i=this.gd.lf.get(t);if(void 0!==i)return i}const s=this.Io.tt(n,i,t/100);return this.gd.lf.set(t,s),s}_f(t){return this.dd.indexOf(t)}Xi(){return this.Io}uf(){return this.cf()}cf(t){const i=new Si(this.ia,this);this.dd.push(i);const n=t??this.dd.length-1,s=Y.ys();return s.es(n,{rs:0,hs:!0}),this.kd(s),i}xd(t){return r(t>=0,"Index should be greater or equal to 0"),(t=Math.min(this.dd.length,t))<this.dd.length?this.dd[t]:this.cf(t)}hf(t){return this.dd.findIndex((i=>i.Y_().includes(t)))}Nd(t,i){const n=new Y(i);if(null!==t){const s=this.dd.indexOf(t);n.es(s,{rs:i})}return n}Td(t,i){return void 0===i&&(i=2),this.Nd(this.Ks(t),i)}kd(t){this.Md&&this.Md(t),this.dd.forEach((t=>t.wu().wr().Pt()))}tf(t,i){const n=t.N().priceScaleId,s=void 0!==n?n:this.ef();i.h_(t,s),q(s)||t.vr(t.N())}yd(t){const i=this.yn.layout;return"gradient"===i.background.type?0===t?i.background.topColor:i.background.bottomColor:i.background.color}nf(t){return!t.q_()&&0===t.kl().length&&this.dd.length>1&&(this.dd.splice(this._f(t),1),this.ka(),!0)}}function Ui(t){if(t>=1)return 0;let i=0;for(;i<8;i++){const n=Math.round(t);if(Math.abs(n-t)<1e-8)return i;t*=10}return i}function $i(t){return!u(t)&&!d(t)}function ji(t){return u(t)}!function(t){t[t.Disabled=0]="Disabled",t[t.Continuous=1]="Continuous",t[t.OnDataUpdate=2]="OnDataUpdate"}(Oi||(Oi={})),function(t){t[t.LastBar=0]="LastBar",t[t.LastVisible=1]="LastVisible"}(Ni||(Ni={})),function(t){t.Solid="solid",t.VerticalGradient="gradient"}(Fi||(Fi={})),function(t){t[t.Year=0]="Year",t[t.Month=1]="Month",t[t.DayOfMonth=2]="DayOfMonth",t[t.Time=3]="Time",t[t.TimeWithSeconds=4]="TimeWithSeconds"}(Wi||(Wi={}));const qi=t=>t.getUTCFullYear();function Yi(t,i,n){return i.replace(/yyyy/g,(t=>Z(qi(t),4))(t)).replace(/yy/g,(t=>Z(qi(t)%100,2))(t)).replace(/MMMM/g,((t,i)=>new Date(t.getUTCFullYear(),t.getUTCMonth(),1).toLocaleString(i,{month:"long"}))(t,n)).replace(/MMM/g,((t,i)=>new Date(t.getUTCFullYear(),t.getUTCMonth(),1).toLocaleString(i,{month:"short"}))(t,n)).replace(/MM/g,(t=>Z((t=>t.getUTCMonth()+1)(t),2))(t)).replace(/dd/g,(t=>Z((t=>t.getUTCDate())(t),2))(t))}class Ki{constructor(t="yyyy-MM-dd",i="default"){this.df=t,this.ff=i}ku(t){return Yi(t,this.df,this.ff)}}class Gi{constructor(t){this.pf=t||"%h:%m:%s"}ku(t){return this.pf.replace("%h",Z(t.getUTCHours(),2)).replace("%m",Z(t.getUTCMinutes(),2)).replace("%s",Z(t.getUTCSeconds(),2))}}const Zi={vf:"yyyy-MM-dd",mf:"%h:%m:%s",wf:" ",gf:"default"};class Xi{constructor(t={}){const i={...Zi,...t};this.Mf=new Ki(i.vf,i.gf),this.bf=new Gi(i.mf),this.Sf=i.wf}ku(t){return`${this.Mf.ku(t)}${this.Sf}${this.bf.ku(t)}`}}function Ji(t){return 60*t*60*1e3}function Qi(t){return 60*t*1e3}const tn=[{xf:(nn=1,1e3*nn),Cf:10},{xf:Qi(1),Cf:20},{xf:Qi(5),Cf:21},{xf:Qi(30),Cf:22},{xf:Ji(1),Cf:30},{xf:Ji(3),Cf:31},{xf:Ji(6),Cf:32},{xf:Ji(12),Cf:33}];var nn;function sn(t,i){if(t.getUTCFullYear()!==i.getUTCFullYear())return 70;if(t.getUTCMonth()!==i.getUTCMonth())return 60;if(t.getUTCDate()!==i.getUTCDate())return 50;for(let n=tn.length-1;n>=0;--n)if(Math.floor(i.getTime()/tn[n].xf)!==Math.floor(t.getTime()/tn[n].xf))return tn[n].Cf;return 0}function en(t){let i=t;if(d(t)&&(i=hn(t)),!$i(i))throw new Error("time must be of type BusinessDay");const n=new Date(Date.UTC(i.year,i.month-1,i.day,0,0,0,0));return{yf:Math.round(n.getTime()/1e3),Pf:i}}function rn(t){if(!ji(t))throw new Error("time must be of type isUTCTimestamp");return{yf:t}}function hn(t){const i=new Date(t);if(isNaN(i.getTime()))throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);return{day:i.getUTCDate(),month:i.getUTCMonth()+1,year:i.getUTCFullYear()}}function an(t){d(t.time)&&(t.time=hn(t.time))}class ln{options(){return this.yn}setOptions(t){this.yn=t,this.updateFormatter(t.localization)}preprocessData(t){Array.isArray(t)?function(t){t.forEach(an)}(t):an(t)}createConverterToInternalObj(t){return a(function(t){return 0===t.length?null:$i(t[0].time)||d(t[0].time)?en:rn}(t))}key(t){return"object"==typeof t&&"yf"in t?t.yf:this.key(this.convertHorzItemToInternal(t))}cacheKey(t){const i=t;return void 0===i.Pf?new Date(1e3*i.yf).getTime():new Date(Date.UTC(i.Pf.year,i.Pf.month-1,i.Pf.day)).getTime()}convertHorzItemToInternal(t){return ji(i=t)?rn(i):$i(i)?en(i):en(hn(i));var i}updateFormatter(t){if(!this.yn)return;const i=t.dateFormat;this.yn.timeScale.timeVisible?this.kf=new Xi({vf:i,mf:this.yn.timeScale.secondsVisible?"%h:%m:%s":"%h:%m",wf:"   ",gf:t.locale}):this.kf=new Ki(i,t.locale)}formatHorzItem(t){const i=t;return this.kf.ku(new Date(1e3*i.yf))}formatTickmark(t,i){const n=function(t,i,n){switch(t){case 0:case 10:return i?n?4:3:2;case 20:case 21:case 22:case 30:case 31:case 32:case 33:return i?3:2;case 50:return 2;case 60:return 1;case 70:return 0}}(t.weight,this.yn.timeScale.timeVisible,this.yn.timeScale.secondsVisible),s=this.yn.timeScale;if(void 0!==s.tickMarkFormatter){const e=s.tickMarkFormatter(t.originalTime,n,i.locale);if(null!==e)return e}return function(t,i,n){const s={};switch(i){case 0:s.year="numeric";break;case 1:s.month="short";break;case 2:s.day="numeric";break;case 3:s.hour12=!1,s.hour="2-digit",s.minute="2-digit";break;case 4:s.hour12=!1,s.hour="2-digit",s.minute="2-digit",s.second="2-digit"}const e=void 0===t.Pf?new Date(1e3*t.yf):new Date(Date.UTC(t.Pf.year,t.Pf.month-1,t.Pf.day));return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()).toLocaleString(n,s)}(t.time,n,i.locale)}maxTickMarkWeight(t){let i=t.reduce(Ai,t[0]).weight;return i>30&&i<50&&(i=30),i}fillWeightsForPoints(t,i){!function(t,i=0){if(0===t.length)return;let n=0===i?null:t[i-1].time.yf,s=null!==n?new Date(1e3*n):null,e=0;for(let r=i;r<t.length;++r){const i=t[r],h=new Date(1e3*i.time.yf);null!==s&&(i.timeWeight=sn(h,s)),e+=i.time.yf-(n||i.time.yf),n=i.time.yf,s=h}if(0===i&&t.length>1){const i=Math.ceil(e/(t.length-1)),n=new Date(1e3*(t[0].time.yf-i));t[0].timeWeight=sn(new Date(1e3*t[0].time.yf),n)}}(t,i)}static Tf(t){return _({localization:{dateFormat:"dd MMM 'yy"}},t??{})}}function on(t){var i=t.width,n=t.height;if(i<0)throw new Error("Negative width is not allowed for Size");if(n<0)throw new Error("Negative height is not allowed for Size");return{width:i,height:n}}function _n(t,i){return t.width===i.width&&t.height===i.height}var un=function(){function t(t){var i=this;this._resolutionListener=function(){return i._onResolutionChanged()},this._resolutionMediaQueryList=null,this._observers=[],this._window=t,this._installResolutionListener()}return t.prototype.dispose=function(){this._uninstallResolutionListener(),this._window=null},Object.defineProperty(t.prototype,"value",{get:function(){return this._window.devicePixelRatio},enumerable:!1,configurable:!0}),t.prototype.subscribe=function(t){var i=this,n={next:t};return this._observers.push(n),{unsubscribe:function(){i._observers=i._observers.filter((function(t){return t!==n}))}}},t.prototype._installResolutionListener=function(){if(null!==this._resolutionMediaQueryList)throw new Error("Resolution listener is already installed");var t=this._window.devicePixelRatio;this._resolutionMediaQueryList=this._window.matchMedia("all and (resolution: ".concat(t,"dppx)")),this._resolutionMediaQueryList.addListener(this._resolutionListener)},t.prototype._uninstallResolutionListener=function(){null!==this._resolutionMediaQueryList&&(this._resolutionMediaQueryList.removeListener(this._resolutionListener),this._resolutionMediaQueryList=null)},t.prototype._reinstallResolutionListener=function(){this._uninstallResolutionListener(),this._installResolutionListener()},t.prototype._onResolutionChanged=function(){var t=this;this._observers.forEach((function(i){return i.next(t._window.devicePixelRatio)})),this._reinstallResolutionListener()},t}();var cn=function(){function t(t,i,n){var s;this._canvasElement=null,this._bitmapSizeChangedListeners=[],this._suggestedBitmapSize=null,this._suggestedBitmapSizeChangedListeners=[],this._devicePixelRatioObservable=null,this._canvasElementResizeObserver=null,this._canvasElement=t,this._canvasElementClientSize=on({width:this._canvasElement.clientWidth,height:this._canvasElement.clientHeight}),this._transformBitmapSize=null!=i?i:function(t){return t},this._allowResizeObserver=null===(s=null==n?void 0:n.allowResizeObserver)||void 0===s||s,this._chooseAndInitObserver()}return t.prototype.dispose=function(){var t,i;if(null===this._canvasElement)throw new Error("Object is disposed");null===(t=this._canvasElementResizeObserver)||void 0===t||t.disconnect(),this._canvasElementResizeObserver=null,null===(i=this._devicePixelRatioObservable)||void 0===i||i.dispose(),this._devicePixelRatioObservable=null,this._suggestedBitmapSizeChangedListeners.length=0,this._bitmapSizeChangedListeners.length=0,this._canvasElement=null},Object.defineProperty(t.prototype,"canvasElement",{get:function(){if(null===this._canvasElement)throw new Error("Object is disposed");return this._canvasElement},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canvasElementClientSize",{get:function(){return this._canvasElementClientSize},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bitmapSize",{get:function(){return on({width:this.canvasElement.width,height:this.canvasElement.height})},enumerable:!1,configurable:!0}),t.prototype.resizeCanvasElement=function(t){this._canvasElementClientSize=on(t),this.canvasElement.style.width="".concat(this._canvasElementClientSize.width,"px"),this.canvasElement.style.height="".concat(this._canvasElementClientSize.height,"px"),this._invalidateBitmapSize()},t.prototype.subscribeBitmapSizeChanged=function(t){this._bitmapSizeChangedListeners.push(t)},t.prototype.unsubscribeBitmapSizeChanged=function(t){this._bitmapSizeChangedListeners=this._bitmapSizeChangedListeners.filter((function(i){return i!==t}))},Object.defineProperty(t.prototype,"suggestedBitmapSize",{get:function(){return this._suggestedBitmapSize},enumerable:!1,configurable:!0}),t.prototype.subscribeSuggestedBitmapSizeChanged=function(t){this._suggestedBitmapSizeChangedListeners.push(t)},t.prototype.unsubscribeSuggestedBitmapSizeChanged=function(t){this._suggestedBitmapSizeChangedListeners=this._suggestedBitmapSizeChangedListeners.filter((function(i){return i!==t}))},t.prototype.applySuggestedBitmapSize=function(){if(null!==this._suggestedBitmapSize){var t=this._suggestedBitmapSize;this._suggestedBitmapSize=null,this._resizeBitmap(t),this._emitSuggestedBitmapSizeChanged(t,this._suggestedBitmapSize)}},t.prototype._resizeBitmap=function(t){var i=this.bitmapSize;_n(i,t)||(this.canvasElement.width=t.width,this.canvasElement.height=t.height,this._emitBitmapSizeChanged(i,t))},t.prototype._emitBitmapSizeChanged=function(t,i){var n=this;this._bitmapSizeChangedListeners.forEach((function(s){return s.call(n,t,i)}))},t.prototype._suggestNewBitmapSize=function(t){var i=this._suggestedBitmapSize,n=on(this._transformBitmapSize(t,this._canvasElementClientSize)),s=_n(this.bitmapSize,n)?null:n;null===i&&null===s||null!==i&&null!==s&&_n(i,s)||(this._suggestedBitmapSize=s,this._emitSuggestedBitmapSizeChanged(i,s))},t.prototype._emitSuggestedBitmapSizeChanged=function(t,i){var n=this;this._suggestedBitmapSizeChangedListeners.forEach((function(s){return s.call(n,t,i)}))},t.prototype._chooseAndInitObserver=function(){var t=this;this._allowResizeObserver?new Promise((function(t){var i=new ResizeObserver((function(n){t(n.every((function(t){return"devicePixelContentBoxSize"in t}))),i.disconnect()}));i.observe(document.body,{box:"device-pixel-content-box"})})).catch((function(){return!1})).then((function(i){return i?t._initResizeObserver():t._initDevicePixelRatioObservable()})):this._initDevicePixelRatioObservable()},t.prototype._initDevicePixelRatioObservable=function(){var t=this;if(null!==this._canvasElement){var i=dn(this._canvasElement);if(null===i)throw new Error("No window is associated with the canvas");this._devicePixelRatioObservable=function(t){return new un(t)}(i),this._devicePixelRatioObservable.subscribe((function(){return t._invalidateBitmapSize()})),this._invalidateBitmapSize()}},t.prototype._invalidateBitmapSize=function(){var t,i;if(null!==this._canvasElement){var n=dn(this._canvasElement);if(null!==n){var s=null!==(i=null===(t=this._devicePixelRatioObservable)||void 0===t?void 0:t.value)&&void 0!==i?i:n.devicePixelRatio,e=this._canvasElement.getClientRects(),r=void 0!==e[0]?function(t,i){return on({width:Math.round(t.left*i+t.width*i)-Math.round(t.left*i),height:Math.round(t.top*i+t.height*i)-Math.round(t.top*i)})}(e[0],s):on({width:this._canvasElementClientSize.width*s,height:this._canvasElementClientSize.height*s});this._suggestNewBitmapSize(r)}}},t.prototype._initResizeObserver=function(){var t=this;null!==this._canvasElement&&(this._canvasElementResizeObserver=new ResizeObserver((function(i){var n=i.find((function(i){return i.target===t._canvasElement}));if(n&&n.devicePixelContentBoxSize&&n.devicePixelContentBoxSize[0]){var s=n.devicePixelContentBoxSize[0],e=on({width:s.inlineSize,height:s.blockSize});t._suggestNewBitmapSize(e)}})),this._canvasElementResizeObserver.observe(this._canvasElement,{box:"device-pixel-content-box"}))},t}();function dn(t){return t.ownerDocument.defaultView}var fn=function(){function t(t,i,n){if(0===i.width||0===i.height)throw new TypeError("Rendering target could only be created on a media with positive width and height");if(this._mediaSize=i,0===n.width||0===n.height)throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");this._bitmapSize=n,this._context=t}return t.prototype.useMediaCoordinateSpace=function(t){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),this._context.scale(this._horizontalPixelRatio,this._verticalPixelRatio),t({context:this._context,mediaSize:this._mediaSize})}finally{this._context.restore()}},t.prototype.useBitmapCoordinateSpace=function(t){try{return this._context.save(),this._context.setTransform(1,0,0,1,0,0),t({context:this._context,mediaSize:this._mediaSize,bitmapSize:this._bitmapSize,horizontalPixelRatio:this._horizontalPixelRatio,verticalPixelRatio:this._verticalPixelRatio})}finally{this._context.restore()}},Object.defineProperty(t.prototype,"_horizontalPixelRatio",{get:function(){return this._bitmapSize.width/this._mediaSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_verticalPixelRatio",{get:function(){return this._bitmapSize.height/this._mediaSize.height},enumerable:!1,configurable:!0}),t}();function pn(t,i){var n=t.canvasElementClientSize;if(0===n.width||0===n.height)return null;var s=t.bitmapSize;if(0===s.width||0===s.height)return null;var e=t.canvasElement.getContext("2d",i);return null===e?null:new fn(e,n,s)}const vn="undefined"!=typeof window;function mn(){return!!vn&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1}function wn(){return!!vn&&/iPhone|iPad|iPod/.test(window.navigator.platform)}function gn(t,i){switch(t){case"custom":return void 0!==i?"custom-object":"series";case"price-line":return"custom-price-line";case"marker":return"series-marker";case"primitive":return"primitive";default:return"series"}}function Mn(t){return t+t%2}function bn(t){vn&&void 0!==window.chrome&&t.addEventListener("mousedown",(t=>{if(1===t.button)return t.preventDefault(),!1}))}class Sn{constructor(t,i,n){this.Rf=0,this.Df=null,this.If={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY},this.Vf=0,this.Ef=null,this.Bf={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY},this.Af=null,this.zf=!1,this.Lf=null,this.Of=null,this.Nf=!1,this.Ff=!1,this.Wf=!1,this.Hf=null,this.Uf=null,this.$f=null,this.jf=null,this.qf=null,this.Yf=null,this.Kf=null,this.Gf=0,this.Zf=!1,this.Xf=!1,this.Jf=!1,this.Qf=0,this.tp=null,this.ip=!wn(),this.np=t=>{this.sp(t)},this.ep=t=>{if(this.rp(t)){const i=this.hp(t);if(++this.Vf,this.Ef&&this.Vf>1){const{ap:n}=this.lp(yn(t),this.Bf);n<30&&!this.Wf&&this.op(i,this.up._p),this.cp()}}else{const i=this.hp(t);if(++this.Rf,this.Df&&this.Rf>1){const{ap:n}=this.lp(yn(t),this.If);n<5&&!this.Ff&&this.dp(i,this.up.fp),this.pp()}}},this.vp=t,this.up=i,this.yn=n,this.mp()}m(){null!==this.Hf&&(this.Hf(),this.Hf=null),null!==this.Uf&&(this.Uf(),this.Uf=null),null!==this.jf&&(this.jf(),this.jf=null),null!==this.qf&&(this.qf(),this.qf=null),null!==this.Yf&&(this.Yf(),this.Yf=null),null!==this.$f&&(this.$f(),this.$f=null),this.wp(),this.pp()}gp(t){this.jf&&this.jf();const i=this.Mp.bind(this);if(this.jf=()=>{this.vp.removeEventListener("mousemove",i)},this.vp.addEventListener("mousemove",i),this.rp(t))return;const n=this.hp(t);this.dp(n,this.up.bp),this.ip=!0}pp(){null!==this.Df&&clearTimeout(this.Df),this.Rf=0,this.Df=null,this.If={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY}}cp(){null!==this.Ef&&clearTimeout(this.Ef),this.Vf=0,this.Ef=null,this.Bf={_t:Number.NEGATIVE_INFINITY,ut:Number.POSITIVE_INFINITY}}Mp(t){if(this.Jf||null!==this.Of)return;if(this.rp(t))return;const i=this.hp(t);this.dp(i,this.up.Sp),this.ip=!0}xp(t){const i=kn(t.changedTouches,a(this.tp));if(null===i)return;if(this.Qf=Pn(t),null!==this.Kf)return;if(this.Xf)return;this.Zf=!0;const n=this.lp(yn(i),a(this.Of)),{Cp:s,yp:e,ap:r}=n;if(this.Nf||!(r<5)){if(!this.Nf){const t=.5*s,i=e>=t&&!this.yn.Pp(),n=t>e&&!this.yn.kp();i||n||(this.Xf=!0),this.Nf=!0,this.Wf=!0,this.wp(),this.cp()}if(!this.Xf){const n=this.hp(t,i);this.op(n,this.up.Tp),Cn(t)}}}Rp(t){if(0!==t.button)return;const i=this.lp(yn(t),a(this.Lf)),{ap:n}=i;if(n>=5&&(this.Ff=!0,this.pp()),this.Ff){const i=this.hp(t);this.dp(i,this.up.Dp)}}lp(t,i){const n=Math.abs(i._t-t._t),s=Math.abs(i.ut-t.ut);return{Cp:n,yp:s,ap:n+s}}Ip(t){let i=kn(t.changedTouches,a(this.tp));if(null===i&&0===t.touches.length&&(i=t.changedTouches[0]),null===i)return;this.tp=null,this.Qf=Pn(t),this.wp(),this.Of=null,this.Yf&&(this.Yf(),this.Yf=null);const n=this.hp(t,i);if(this.op(n,this.up.Vp),++this.Vf,this.Ef&&this.Vf>1){const{ap:t}=this.lp(yn(i),this.Bf);t<30&&!this.Wf&&this.op(n,this.up._p),this.cp()}else this.Wf||(this.op(n,this.up.Ep),this.up.Ep&&Cn(t));0===this.Vf&&Cn(t),0===t.touches.length&&this.zf&&(this.zf=!1,Cn(t))}sp(t){if(0!==t.button)return;const i=this.hp(t);if(this.Lf=null,this.Jf=!1,this.qf&&(this.qf(),this.qf=null),mn()){this.vp.ownerDocument.documentElement.removeEventListener("mouseleave",this.np)}if(!this.rp(t))if(this.dp(i,this.up.Bp),++this.Rf,this.Df&&this.Rf>1){const{ap:n}=this.lp(yn(t),this.If);n<5&&!this.Ff&&this.dp(i,this.up.fp),this.pp()}else this.Ff||this.dp(i,this.up.Ap)}wp(){null!==this.Af&&(clearTimeout(this.Af),this.Af=null)}zp(t){if(null!==this.tp)return;const i=t.changedTouches[0];this.tp=i.identifier,this.Qf=Pn(t);const n=this.vp.ownerDocument.documentElement;this.Wf=!1,this.Nf=!1,this.Xf=!1,this.Of=yn(i),this.Yf&&(this.Yf(),this.Yf=null);{const i=this.xp.bind(this),s=this.Ip.bind(this);this.Yf=()=>{n.removeEventListener("touchmove",i),n.removeEventListener("touchend",s)},n.addEventListener("touchmove",i,{passive:!1}),n.addEventListener("touchend",s,{passive:!1}),this.wp(),this.Af=setTimeout(this.Lp.bind(this,t),240)}const s=this.hp(t,i);this.op(s,this.up.Op),this.Ef||(this.Vf=0,this.Ef=setTimeout(this.cp.bind(this),500),this.Bf=yn(i))}Np(t){if(0!==t.button)return;const i=this.vp.ownerDocument.documentElement;mn()&&i.addEventListener("mouseleave",this.np),this.Ff=!1,this.Lf=yn(t),this.qf&&(this.qf(),this.qf=null);{const t=this.Rp.bind(this),n=this.sp.bind(this);this.qf=()=>{i.removeEventListener("mousemove",t),i.removeEventListener("mouseup",n)},i.addEventListener("mousemove",t),i.addEventListener("mouseup",n)}if(this.Jf=!0,this.rp(t))return;const n=this.hp(t);this.dp(n,this.up.Fp),this.Df||(this.Rf=0,this.Df=setTimeout(this.pp.bind(this),500),this.If=yn(t))}mp(){this.vp.addEventListener("mouseenter",this.gp.bind(this)),this.vp.addEventListener("touchcancel",this.wp.bind(this));{const t=this.vp.ownerDocument,i=t=>{this.up.Wp&&(t.composed&&this.vp.contains(t.composedPath()[0])||t.target&&this.vp.contains(t.target)||this.up.Wp())};this.Uf=()=>{t.removeEventListener("touchstart",i)},this.Hf=()=>{t.removeEventListener("mousedown",i)},t.addEventListener("mousedown",i),t.addEventListener("touchstart",i,{passive:!0})}wn()&&(this.$f=()=>{this.vp.removeEventListener("dblclick",this.ep)},this.vp.addEventListener("dblclick",this.ep)),this.vp.addEventListener("mouseleave",this.Hp.bind(this)),this.vp.addEventListener("touchstart",this.zp.bind(this),{passive:!0}),bn(this.vp),this.vp.addEventListener("mousedown",this.Np.bind(this)),this.Up(),this.vp.addEventListener("touchmove",(()=>{}),{passive:!1})}Up(){void 0===this.up.$p&&void 0===this.up.jp&&void 0===this.up.qp||(this.vp.addEventListener("touchstart",(t=>this.Yp(t.touches)),{passive:!0}),this.vp.addEventListener("touchmove",(t=>{if(2===t.touches.length&&null!==this.Kf&&void 0!==this.up.jp){const i=xn(t.touches[0],t.touches[1])/this.Gf;this.up.jp(this.Kf,i),Cn(t)}}),{passive:!1}),this.vp.addEventListener("touchend",(t=>{this.Yp(t.touches)})))}Yp(t){1===t.length&&(this.Zf=!1),2!==t.length||this.Zf||this.zf?this.Kp():this.Gp(t)}Gp(t){const i=this.vp.getBoundingClientRect()||{left:0,top:0};this.Kf={_t:(t[0].clientX-i.left+(t[1].clientX-i.left))/2,ut:(t[0].clientY-i.top+(t[1].clientY-i.top))/2},this.Gf=xn(t[0],t[1]),void 0!==this.up.$p&&this.up.$p(),this.wp()}Kp(){null!==this.Kf&&(this.Kf=null,void 0!==this.up.qp&&this.up.qp())}Hp(t){if(this.jf&&this.jf(),this.rp(t))return;if(!this.ip)return;const i=this.hp(t);this.dp(i,this.up.Zp),this.ip=!wn()}Lp(t){const i=kn(t.touches,a(this.tp));if(null===i)return;const n=this.hp(t,i);this.op(n,this.up.Xp),this.Wf=!0,this.zf=!0}rp(t){return t.sourceCapabilities&&void 0!==t.sourceCapabilities.firesTouchEvents?t.sourceCapabilities.firesTouchEvents:Pn(t)<this.Qf+500}op(t,i){i&&i.call(this.up,t)}dp(t,i){i&&i.call(this.up,t)}hp(t,i){const n=i||t,s=this.vp.getBoundingClientRect()||{left:0,top:0};return{clientX:n.clientX,clientY:n.clientY,pageX:n.pageX,pageY:n.pageY,screenX:n.screenX,screenY:n.screenY,localX:n.clientX-s.left,localY:n.clientY-s.top,ctrlKey:t.ctrlKey,altKey:t.altKey,shiftKey:t.shiftKey,metaKey:t.metaKey,Jp:!t.type.startsWith("mouse")&&"contextmenu"!==t.type&&"click"!==t.type,Qp:t.type,tv:n.target,xu:t.view,iv:()=>{"touchstart"!==t.type&&Cn(t)}}}}function xn(t,i){const n=t.clientX-i.clientX,s=t.clientY-i.clientY;return Math.sqrt(n*n+s*s)}function Cn(t){t.cancelable&&t.preventDefault()}function yn(t){return{_t:t.pageX,ut:t.pageY}}function Pn(t){return t.timeStamp||performance.now()}function kn(t,i){for(let n=0;n<t.length;++n)if(t[n].identifier===i)return t[n];return null}class Tn{constructor(t,i,n){this.nv=null,this.sv=null,this.ev=!0,this.rv=null,this.hv=t,this.av=t.lv()[i],this.ov=t.lv()[n],this._v=document.createElement("tr"),this._v.style.height="1px",this.uv=document.createElement("td"),this.uv.style.position="relative",this.uv.style.padding="0",this.uv.style.margin="0",this.uv.setAttribute("colspan","3"),this.cv(),this._v.appendChild(this.uv),this.ev=this.hv.N().layout.panes.enableResize,this.ev?this.dv():(this.nv=null,this.sv=null)}m(){null!==this.sv&&this.sv.m()}fv(){return this._v}pv(){return on({width:this.av.pv().width,height:1})}vv(){return on({width:this.av.vv().width,height:1*window.devicePixelRatio})}mv(t,i,n){const s=this.vv();t.fillStyle=this.hv.N().layout.panes.separatorColor,t.fillRect(i,n,s.width,s.height)}Pt(){this.cv(),this.hv.N().layout.panes.enableResize!==this.ev&&(this.ev=this.hv.N().layout.panes.enableResize,this.ev?this.dv():(null!==this.nv&&(this.uv.removeChild(this.nv.wv),this.uv.removeChild(this.nv.gv),this.nv=null),null!==this.sv&&(this.sv.m(),this.sv=null)))}dv(){const t=document.createElement("div"),i=t.style;i.position="fixed",i.display="none",i.zIndex="49",i.top="0",i.left="0",i.width="100%",i.height="100%",i.cursor="row-resize",this.uv.appendChild(t);const n=document.createElement("div"),s=n.style;s.position="absolute",s.zIndex="50",s.top="-4px",s.height="9px",s.width="100%",s.backgroundColor="",s.cursor="row-resize",this.uv.appendChild(n);const e={bp:this.Mv.bind(this),Zp:this.bv.bind(this),Fp:this.Sv.bind(this),Op:this.Sv.bind(this),Dp:this.xv.bind(this),Tp:this.xv.bind(this),Bp:this.Cv.bind(this),Vp:this.Cv.bind(this)};this.sv=new Sn(n,e,{Pp:()=>!1,kp:()=>!0}),this.nv={gv:n,wv:t}}cv(){this.uv.style.background=this.hv.N().layout.panes.separatorColor}Mv(t){null!==this.nv&&(this.nv.gv.style.backgroundColor=this.hv.N().layout.panes.separatorHoverColor)}bv(t){null!==this.nv&&null===this.rv&&(this.nv.gv.style.backgroundColor="")}Sv(t){if(null===this.nv)return;const i=this.av.yv().F_()+this.ov.yv().F_(),n=i/(this.av.pv().height+this.ov.pv().height),s=30*n;i<=2*s||(this.rv={Pv:t.pageY,kv:this.av.yv().F_(),Tv:i-s,Rv:i,Dv:n,Iv:s},this.nv.wv.style.display="block")}xv(t){const i=this.rv;if(null===i)return;const n=(t.pageY-i.Pv)*i.Dv,s=Jt(i.kv+n,i.Iv,i.Tv);this.av.yv().W_(s),this.ov.yv().W_(i.Rv-s),this.hv.Qt().ka()}Cv(t){null!==this.rv&&null!==this.nv&&(this.rv=null,this.nv.wv.style.display="none")}}function Rn(t,i){return t.Vv-i.Vv}function Dn(t,i,n){const s=(t.Vv-i.Vv)/(t.wt-i.wt);return Math.sign(s)*Math.min(Math.abs(s),n)}class In{constructor(t,i,n,s){this.Ev=null,this.Bv=null,this.Av=null,this.zv=null,this.Lv=null,this.Ov=0,this.Nv=0,this.Fv=t,this.Wv=i,this.Hv=n,this.Ps=s}Uv(t,i){if(null!==this.Ev){if(this.Ev.wt===i)return void(this.Ev.Vv=t);if(Math.abs(this.Ev.Vv-t)<this.Ps)return}this.zv=this.Av,this.Av=this.Bv,this.Bv=this.Ev,this.Ev={wt:i,Vv:t}}me(t,i){if(null===this.Ev||null===this.Bv)return;if(i-this.Ev.wt>50)return;let n=0;const s=Dn(this.Ev,this.Bv,this.Wv),e=Rn(this.Ev,this.Bv),r=[s],h=[e];if(n+=e,null!==this.Av){const t=Dn(this.Bv,this.Av,this.Wv);if(Math.sign(t)===Math.sign(s)){const i=Rn(this.Bv,this.Av);if(r.push(t),h.push(i),n+=i,null!==this.zv){const t=Dn(this.Av,this.zv,this.Wv);if(Math.sign(t)===Math.sign(s)){const i=Rn(this.Av,this.zv);r.push(t),h.push(i),n+=i}}}}let a=0;for(let t=0;t<r.length;++t)a+=h[t]/n*r[t];Math.abs(a)<this.Fv||(this.Lv={Vv:t,wt:i},this.Nv=a,this.Ov=function(t,i){const n=Math.log(i);return Math.log(1*n/-t)/n}(Math.abs(a),this.Hv))}Gc(t){const i=a(this.Lv),n=t-i.wt;return i.Vv+this.Nv*(Math.pow(this.Hv,n)-1)/Math.log(this.Hv)}Kc(t){return null===this.Lv||this.$v(t)===this.Ov}$v(t){const i=t-a(this.Lv).wt;return Math.min(i,this.Ov)}}class Vn{constructor(t,i){this.jv=void 0,this.qv=void 0,this.Yv=void 0,this.vn=!1,this.Kv=t,this.Gv=i,this.Zv()}Pt(){this.Zv()}Xv(){this.jv&&this.Kv.removeChild(this.jv),this.qv&&this.Kv.removeChild(this.qv),this.jv=void 0,this.qv=void 0}Jv(){return this.vn!==this.Qv()||this.Yv!==this.tm()}tm(){return this.Gv.Qt().Xi().J(this.Gv.N().layout.textColor)>160?"dark":"light"}Qv(){return this.Gv.N().layout.attributionLogo}im(){const t=new URL(location.href);return t.hostname?"&utm_source="+t.hostname+t.pathname:""}Zv(){this.Jv()&&(this.Xv(),this.vn=this.Qv(),this.vn&&(this.Yv=this.tm(),this.qv=document.createElement("style"),this.qv.innerText="a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}",this.jv=document.createElement("a"),this.jv.href=`https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.im()}`,this.jv.title="Charting by TradingView",this.jv.id="tv-attr-logo",this.jv.target="_blank",this.jv.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>',this.jv.toggleAttribute("data-dark","dark"===this.Yv),this.Kv.appendChild(this.qv),this.Kv.appendChild(this.jv)))}}function En(t,i){const n=a(t.ownerDocument).createElement("canvas");t.appendChild(n);const s=new cn(n,(e={options:{allowResizeObserver:!0},transform:(t,i)=>({width:Math.max(t.width,i.width),height:Math.max(t.height,i.height)})}).transform,e.options);var e;return s.resizeCanvasElement(i),s}function Bn(t){t.width=1,t.height=1,t.getContext("2d")?.clearRect(0,0,1,1)}function An(t,i,n,s){t.qh&&t.qh(i,n,s)}function zn(t,i,n,s){t.st(i,n,s)}function Ln(t,i,n,s){On(t(n,s),i,s)}function On(t,i,n){for(const s of t){const t=s.Tt(n);null!==t&&i(t)}}function Nn(t,i){return n=>{if(!function(t){return void 0!==t.Ft}(n))return[];return(n.Ft()?.pl()??"")!==i?[]:n.Qa?.(t)??[]}}function Fn(t,i,n,s){if(!t.length)return;let e=0;const r=t[0].$t(s,!0);let h=1===i?n/2-(t[0].Hi()-r/2):t[0].Hi()-r/2-n/2;h=Math.max(0,h);for(let r=1;r<t.length;r++){const a=t[r],l=t[r-1],o=l.$t(s,!1),_=a.Hi(),u=l.Hi();if(1===i?_>u-o:_<u+o){const s=u-o*i;a.Ui(s);const r=s-i*o/2;if((1===i?r<0:r>n)&&h>0){const s=1===i?-1-r:r-n,a=Math.min(s,h);for(let n=e;n<t.length;n++)t[n].Ui(t[n].Hi()+i*a);h-=a}}else e=r,h=1===i?u-o-_:_-(u+o)}}class Wn{constructor(t,i,n,s){this.Ki=null,this.nm=null,this.sm=!1,this.rm=new it(200),this.hm=null,this.am=0,this.lm=!1,this.om=()=>{this.lm||this.yt._m().Qt().mr()},this.um=()=>{this.lm||this.yt._m().Qt().mr()},this.yt=t,this.yn=i,this.Ro=i.layout,this.bd=n,this.dm="left"===s,this.fm=Nn("normal",s),this.pm=Nn("top",s),this.vm=Nn("bottom",s),this.uv=document.createElement("div"),this.uv.style.height="100%",this.uv.style.overflow="hidden",this.uv.style.width="25px",this.uv.style.left="0",this.uv.style.position="relative",this.wm=En(this.uv,on({width:16,height:16})),this.wm.subscribeSuggestedBitmapSizeChanged(this.om);const e=this.wm.canvasElement;e.style.position="absolute",e.style.zIndex="1",e.style.left="0",e.style.top="0",this.gm=En(this.uv,on({width:16,height:16})),this.gm.subscribeSuggestedBitmapSizeChanged(this.um);const r=this.gm.canvasElement;r.style.position="absolute",r.style.zIndex="2",r.style.left="0",r.style.top="0";const h={Fp:this.Sv.bind(this),Op:this.Sv.bind(this),Dp:this.xv.bind(this),Tp:this.xv.bind(this),Wp:this.Mm.bind(this),Bp:this.Cv.bind(this),Vp:this.Cv.bind(this),fp:this.bm.bind(this),_p:this.bm.bind(this),bp:this.Sm.bind(this),Zp:this.bv.bind(this)};this.sv=new Sn(this.gm.canvasElement,h,{Pp:()=>!this.yn.handleScroll.vertTouchDrag,kp:()=>!0})}m(){this.sv.m(),this.gm.unsubscribeSuggestedBitmapSizeChanged(this.um),Bn(this.gm.canvasElement),this.gm.dispose(),this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om),Bn(this.wm.canvasElement),this.wm.dispose(),null!==this.Ki&&this.Ki.__().u(this),this.Ki=null}fv(){return this.uv}P(){return this.Ro.fontSize}xm(){const t=this.bd.N();return this.hm!==t.k&&(this.rm.Os(),this.hm=t.k),t}Cm(){if(null===this.Ki)return 0;let t=0;const i=this.xm(),n=a(this.wm.canvasElement.getContext("2d",{colorSpace:this.yt._m().N().layout.colorSpace}));n.save();const s=this.Ki.Ll();n.font=this.ym(),s.length>0&&(t=Math.max(this.rm.Ii(n,s[0].eo),this.rm.Ii(n,s[s.length-1].eo)));const e=this.Pm();for(let i=e.length;i--;){const s=this.rm.Ii(n,e[i].ri());s>t&&(t=s)}const r=this.Ki.zt();if(null!==r&&null!==this.nm&&(2!==(h=this.yn.crosshair).mode&&h.horzLine.visible&&h.horzLine.labelVisible)){const i=this.Ki.Tn(1,r),s=this.Ki.Tn(this.nm.height-2,r);t=Math.max(t,this.rm.Ii(n,this.Ki.Ji(Math.floor(Math.min(i,s))+.11111111111111,r)),this.rm.Ii(n,this.Ki.Ji(Math.ceil(Math.max(i,s))-.11111111111111,r)))}var h;n.restore();const l=t||34;return Mn(Math.ceil(i.S+i.C+i.V+i.B+5+l))}km(t){null!==this.nm&&_n(this.nm,t)||(this.nm=t,this.lm=!0,this.wm.resizeCanvasElement(t),this.gm.resizeCanvasElement(t),this.lm=!1,this.uv.style.width=`${t.width}px`,this.uv.style.height=`${t.height}px`)}Tm(){return a(this.nm).width}un(t){this.Ki!==t&&(null!==this.Ki&&this.Ki.__().u(this),this.Ki=t,t.__().i(this.wo.bind(this),this))}Ft(){return this.Ki}Os(){const t=this.yt.yv();this.yt._m().Qt().au(t,a(this.Ft()))}Rm(t){if(null===this.nm)return;const i={colorSpace:this.yt._m().N().layout.colorSpace};if(1!==t){this.Dm(),this.wm.applySuggestedBitmapSize();const t=pn(this.wm,i);null!==t&&(t.useBitmapCoordinateSpace((t=>{this.Im(t),this.Vm(t)})),this.yt.Em(t,this.vm),this.Bm(t),this.yt.Em(t,this.fm),this.Am(t))}this.gm.applySuggestedBitmapSize();const n=pn(this.gm,i);null!==n&&(n.useBitmapCoordinateSpace((({context:t,bitmapSize:i})=>{t.clearRect(0,0,i.width,i.height)})),this.zm(n),this.yt.Em(n,this.pm))}vv(){return this.wm.bitmapSize}mv(t,i,n,s){const e=this.vv();if(e.width>0&&e.height>0&&(t.drawImage(this.wm.canvasElement,i,n),s)){const s=this.gm.canvasElement;t.drawImage(s,i,n)}}Pt(){this.Ki?.Ll()}Sv(t){if(null===this.Ki||this.Ki.Zi()||!this.yn.handleScale.axisPressedMouseMove.price)return;const i=this.yt._m().Qt(),n=this.yt.yv();this.sm=!0,i.Q_(n,this.Ki,t.localY)}xv(t){if(null===this.Ki||!this.yn.handleScale.axisPressedMouseMove.price)return;const i=this.yt._m().Qt(),n=this.yt.yv(),s=this.Ki;i.tu(n,s,t.localY)}Mm(){if(null===this.Ki||!this.yn.handleScale.axisPressedMouseMove.price)return;const t=this.yt._m().Qt(),i=this.yt.yv(),n=this.Ki;this.sm&&(this.sm=!1,t.iu(i,n))}Cv(t){if(null===this.Ki||!this.yn.handleScale.axisPressedMouseMove.price)return;const i=this.yt._m().Qt(),n=this.yt.yv();this.sm=!1,i.iu(n,this.Ki)}bm(t){this.yn.handleScale.axisDoubleClickReset.price&&this.Os()}Sm(t){if(null===this.Ki)return;!this.yt._m().Qt().N().handleScale.axisPressedMouseMove.price||this.Ki.je()||this.Ki.No()||this.Lm(1)}bv(t){this.Lm(0)}Pm(){const t=[],i=null===this.Ki?void 0:this.Ki;return(n=>{for(let s=0;s<n.length;++s){const e=n[s].qn(this.yt.yv(),i);for(let i=0;i<e.length;i++)t.push(e[i])}})(this.yt.yv().Dt()),t}Im({context:t,bitmapSize:i}){const{width:n,height:s}=i,e=this.yt.yv().Qt(),r=e.$(),h=e.af();r===h?E(t,0,0,n,s,r):z(t,0,0,n,s,r,h)}Vm({context:t,bitmapSize:i,horizontalPixelRatio:n}){if(null===this.nm||null===this.Ki||!this.Ki.N().borderVisible)return;t.fillStyle=this.Ki.N().borderColor;const s=Math.max(1,Math.floor(this.xm().S*n));let e;e=this.dm?i.width-s:0,t.fillRect(e,0,s,i.height)}Bm(t){if(null===this.nm||null===this.Ki)return;const i=this.Ki.Ll(),n=this.Ki.N(),s=this.xm(),e=this.dm?this.nm.width-s.C:0;n.borderVisible&&n.ticksVisible&&t.useBitmapCoordinateSpace((({context:t,horizontalPixelRatio:r,verticalPixelRatio:h})=>{t.fillStyle=n.borderColor;const a=Math.max(1,Math.floor(h)),l=Math.floor(.5*h),o=Math.round(s.C*r);t.beginPath();for(const n of i)t.rect(Math.floor(e*r),Math.round(n.Vl*h)-l,o,a);t.fill()})),t.useMediaCoordinateSpace((({context:t})=>{t.font=this.ym(),t.fillStyle=n.textColor??this.Ro.textColor,t.textAlign=this.dm?"right":"left",t.textBaseline="middle";const r=this.dm?Math.round(e-s.V):Math.round(e+s.C+s.V),h=i.map((i=>this.rm.Di(t,i.eo)));for(let n=i.length;n--;){const s=i[n];t.fillText(s.eo,r,s.Vl+h[n])}}))}Dm(){if(null===this.nm||null===this.Ki)return;let t=this.nm.height/2;const i=[],n=this.Ki.Dt().slice(),s=this.yt.yv(),e=this.xm();this.Ki===s.Zs()&&this.yt.yv().Dt().forEach((t=>{s.Gs(t)&&n.push(t)}));const r=this.Ki.kl()[0],h=this.Ki;n.forEach((n=>{const e=n.qn(s,h);e.forEach((t=>{t.$i()&&null===t.Wi()&&(t.Ui(null),i.push(t))})),r===n&&e.length>0&&(t=e[0].Bi())}));this.Ki.N().alignLabels&&this.Om(i,e,t)}Om(t,i,n){if(null===this.nm)return;const s=t.filter((t=>t.Bi()<=n)),e=t.filter((t=>t.Bi()>n));s.sort(((t,i)=>i.Bi()-t.Bi())),s.length&&e.length&&e.push(s[0]),e.sort(((t,i)=>t.Bi()-i.Bi()));for(const n of t){const t=Math.floor(n.$t(i)/2),s=n.Bi();s>-t&&s<t&&n.Ui(t),s>this.nm.height-t&&s<this.nm.height+t&&n.Ui(this.nm.height-t)}Fn(s,1,this.nm.height,i),Fn(e,-1,this.nm.height,i)}Am(t){if(null===this.nm)return;const i=this.Pm(),n=this.xm(),s=this.dm?"right":"left";i.forEach((i=>{if(i.ji()){i.Tt(a(this.Ki)).st(t,n,this.rm,s)}}))}zm(t){if(null===this.nm||null===this.Ki)return;const i=this.yt._m().Qt(),n=[],s=this.yt.yv(),e=i.Vd().qn(s,this.Ki);e.length&&n.push(e);const r=this.xm(),h=this.dm?"right":"left";n.forEach((i=>{i.forEach((i=>{i.Tt(a(this.Ki)).st(t,r,this.rm,h)}))}))}Lm(t){this.uv.style.cursor=1===t?"ns-resize":"default"}wo(){const t=this.Cm();this.am<t&&this.yt._m().Qt().ka(),this.am=t}ym(){return g(this.Ro.fontSize,this.Ro.fontFamily)}}function Hn(t,i){return t.Xa?.(i)??[]}function Un(t,i){return t.jn?.(i)??[]}function $n(t,i){return t.cn?.(i)??[]}function jn(t,i){return t.qa?.(i)??[]}class qn{constructor(t,i){this.nm=on({width:0,height:0}),this.Nm=null,this.Fm=null,this.Wm=null,this.Hm=null,this.Um=!1,this.$m=new o,this.jm=new o,this.qm=0,this.Ym=!1,this.Km=null,this.Gm=!1,this.Zm=null,this.Xm=null,this.lm=!1,this.om=()=>{this.lm||null===this.Jm||this.sn().mr()},this.um=()=>{this.lm||null===this.Jm||this.sn().mr()},this.Gv=t,this.Jm=i,this.Jm.mu().i(this.Qm.bind(this),this,!0),this.tw=document.createElement("td"),this.tw.style.padding="0",this.tw.style.position="relative";const n=document.createElement("div");n.style.width="100%",n.style.height="100%",n.style.position="relative",n.style.overflow="hidden",this.iw=document.createElement("td"),this.iw.style.padding="0",this.nw=document.createElement("td"),this.nw.style.padding="0",this.tw.appendChild(n),this.wm=En(n,on({width:16,height:16})),this.wm.subscribeSuggestedBitmapSizeChanged(this.om);const s=this.wm.canvasElement;s.style.position="absolute",s.style.zIndex="1",s.style.left="0",s.style.top="0",this.gm=En(n,on({width:16,height:16})),this.gm.subscribeSuggestedBitmapSizeChanged(this.um);const e=this.gm.canvasElement;e.style.position="absolute",e.style.zIndex="2",e.style.left="0",e.style.top="0",this._v=document.createElement("tr"),this._v.appendChild(this.iw),this._v.appendChild(this.tw),this._v.appendChild(this.nw),this.sw(),this.sv=new Sn(this.gm.canvasElement,this,{Pp:()=>null===this.Km&&!this.Gv.N().handleScroll.vertTouchDrag,kp:()=>null===this.Km&&!this.Gv.N().handleScroll.horzTouchDrag})}m(){null!==this.Nm&&this.Nm.m(),null!==this.Fm&&this.Fm.m(),this.Wm=null,this.gm.unsubscribeSuggestedBitmapSizeChanged(this.um),Bn(this.gm.canvasElement),this.gm.dispose(),this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om),Bn(this.wm.canvasElement),this.wm.dispose(),null!==this.Jm&&(this.Jm.mu().u(this),this.Jm.m()),this.sv.m()}yv(){return a(this.Jm)}ew(t){null!==this.Jm&&this.Jm.mu().u(this),this.Jm=t,null!==this.Jm&&this.Jm.mu().i(qn.prototype.Qm.bind(this),this,!0),this.sw(),this.Gv.lv().indexOf(this)===this.Gv.lv().length-1?(this.Wm=this.Wm??new Vn(this.tw,this.Gv),this.Wm.Pt()):(this.Wm?.Xv(),this.Wm=null)}_m(){return this.Gv}fv(){return this._v}sw(){if(null!==this.Jm&&(this.rw(),0!==this.sn().Jn().length)){if(null!==this.Nm){const t=this.Jm.X_();this.Nm.un(a(t))}if(null!==this.Fm){const t=this.Jm.J_();this.Fm.un(a(t))}}}hw(){null!==this.Nm&&this.Nm.Pt(),null!==this.Fm&&this.Fm.Pt()}F_(){return null!==this.Jm?this.Jm.F_():0}W_(t){this.Jm&&this.Jm.W_(t)}bp(t){if(!this.Jm)return;this.aw();const i=t.localX,n=t.localY;this.lw(i,n,t)}Fp(t){this.aw(),this.ow(),this.lw(t.localX,t.localY,t)}Sp(t){if(!this.Jm)return;this.aw();const i=t.localX,n=t.localY;this.lw(i,n,t)}Ap(t){null!==this.Jm&&(this.aw(),this.lw(t.localX,t.localY,t),this._w(t))}fp(t){null!==this.Jm&&this.uw(this.jm,t)}_p(t){this.fp(t)}Dp(t){this.aw(),this.cw(t),this.lw(t.localX,t.localY,t)}Bp(t){null!==this.Jm&&(this.aw(),this.Ym=!1,this.dw(t))}Ep(t){null!==this.Jm&&this._w(t)}Xp(t){if(this.Ym=!0,null===this.Km){const i={x:t.localX,y:t.localY};this.fw(i,i,t)}}Zp(t){null!==this.Jm&&(this.aw(),this.Jm.Qt().Rd(null),this.pw())}mw(){return this.$m}ww(){return this.jm}$p(){this.qm=1,this.sn().cs()}jp(t,i){if(!this.Gv.N().handleScale.pinch)return;const n=5*(i-this.qm);this.qm=i,this.sn().Wd(t._t,n)}Op(t){this.Ym=!1,this.Gm=null!==this.Km,this.ow();const i=this.sn().Vd();null!==this.Km&&i.It()&&(this.Zm={x:i.ni(),y:i.si()},this.Km={x:t.localX,y:t.localY})}Tp(t){if(null===this.Jm)return;const i=t.localX,n=t.localY;if(null===this.Km)this.cw(t);else{this.Gm=!1;const s=a(this.Zm),e=s.x+(i-this.Km.x),r=s.y+(n-this.Km.y);this.lw(e,r,t)}}Vp(t){0===this._m().N().trackingMode.exitMode&&(this.Gm=!0),this.gw(),this.dw(t)}Qs(t,i){const n=this.Jm;return null===n?null:Ri(n,t,i)}Mw(t,i){a("left"===i?this.Nm:this.Fm).km(on({width:t,height:this.nm.height}))}pv(){return this.nm}km(t){_n(this.nm,t)||(this.nm=t,this.lm=!0,this.wm.resizeCanvasElement(t),this.gm.resizeCanvasElement(t),this.lm=!1,this.tw.style.width=t.width+"px",this.tw.style.height=t.height+"px")}bw(){const t=a(this.Jm);t.G_(t.X_()),t.G_(t.J_());for(const i of t.kl())if(t.Gs(i)){const n=i.Ft();null!==n&&t.G_(n),i.Nn()}for(const i of t.gu())i.Nn()}vv(){return this.wm.bitmapSize}mv(t,i,n,s){const e=this.vv();if(e.width>0&&e.height>0&&(t.drawImage(this.wm.canvasElement,i,n),s)){const s=this.gm.canvasElement;null!==t&&t.drawImage(s,i,n)}}Rm(t){if(0===t)return;if(null===this.Jm)return;t>1&&this.bw(),null!==this.Nm&&this.Nm.Rm(t),null!==this.Fm&&this.Fm.Rm(t);const i={colorSpace:this.Gv.N().layout.colorSpace};if(1!==t){this.wm.applySuggestedBitmapSize();const t=pn(this.wm,i);null!==t&&(t.useBitmapCoordinateSpace((t=>{this.Im(t)})),this.Jm&&(this.Sw(t,Hn),this.xw(t),this.Sw(t,Un),this.Sw(t,$n)))}this.gm.applySuggestedBitmapSize();const n=pn(this.gm,i);null!==n&&(n.useBitmapCoordinateSpace((({context:t,bitmapSize:i})=>{t.clearRect(0,0,i.width,i.height)})),this.Cw(n),this.Sw(n,jn),this.Sw(n,$n))}yw(){return this.Nm}Pw(){return this.Fm}Em(t,i){this.Sw(t,i)}Qm(){null!==this.Jm&&this.Jm.mu().u(this),this.Jm=null}_w(t){this.uw(this.$m,t)}uw(t,i){const n=i.localX,s=i.localY;t.v()&&t.p(this.sn().Bt().Vc(n),{x:n,y:s},i)}Im({context:t,bitmapSize:i}){const{width:n,height:s}=i,e=this.sn(),r=e.$(),h=e.af();r===h?E(t,0,0,n,s,h):z(t,0,0,n,s,r,h)}xw(t){const i=a(this.Jm),n=i.wu().wr().Tt(i);null!==n&&n.st(t,!1)}Cw(t){this.kw(t,Un,zn,this.sn().Vd())}Sw(t,i){const n=a(this.Jm),s=i===Un?this.Tw():null,e=null===s?null:this.Rw(s,n),r=n.gu();if(null===e||null===s){const s=n._u();return this.Dw(t,i,An,r,s),void this.Dw(t,i,zn,r,s)}const h=n.Dt(),l=t=>t===s?e.Za:void 0;this.Dw(t,i,An,r,h,l),this.Dw(t,i,zn,r,h,l),this.kw(t,i,An,s,e.qa),this.kw(t,i,zn,s,e.qa)}Dw(t,i,n,s,e,r){for(const e of s)this.kw(t,i,n,e);if(void 0!==r)for(const s of e)this.kw(t,i,n,s,r(s));else for(const s of e)this.kw(t,i,n,s)}Tw(){const t=a(this.Jm),i=t.Qt().cu()?.uu;if(!t.Qt().N().hoveredSeriesOnTop||void 0===i)return null;for(const n of t.Dt())if(n===i)return n;return null}Rw(t,i){const n=t.Ga?.(i)??null;return null===n||0===n.qa.length?null:n}kw(t,i,n,s,e){const r=a(this.Jm),h=r.Qt().cu(),l=null!==h&&h.uu===s,o=null!==h&&l&&void 0!==h.bu?h.bu.ie:void 0,_=i=>n(i,t,l,o);void 0===e?Ln(i,_,s,r):On(e,_,r)}rw(){if(null===this.Jm)return;const t=this.Gv,i=this.Jm.X_().N().visible,n=this.Jm.J_().N().visible;i||null===this.Nm||(this.iw.removeChild(this.Nm.fv()),this.Nm.m(),this.Nm=null),n||null===this.Fm||(this.nw.removeChild(this.Fm.fv()),this.Fm.m(),this.Fm=null);const s=t.Qt().Jd();i&&null===this.Nm&&(this.Nm=new Wn(this,t.N(),s,"left"),this.iw.appendChild(this.Nm.fv())),n&&null===this.Fm&&(this.Fm=new Wn(this,t.N(),s,"right"),this.nw.appendChild(this.Fm.fv()))}Iw(t){return t.Jp&&this.Ym||null!==this.Km}lw(t,i,n){t=Math.max(0,Math.min(t,this.nm.width-1)),i=Math.max(0,Math.min(i,this.nm.height-1)),this.sn().Kd(t,i,n,a(this.Jm))}pw(){this.sn().Zd()}gw(){this.Gm&&(this.Km=null,this.pw())}fw(t,i,n){this.Km=t,this.Gm=!1,this.lw(i.x,i.y,n);const s=this.sn().Vd();this.Zm={x:s.ni(),y:s.si()}}sn(){return this.Gv.Qt()}dw(t){if(!this.Um)return;const i=this.sn(),n=this.yv();if(i.eu(n,n.kn()),this.Hm=null,this.Um=!1,i.jd(),null!==this.Xm){const t=performance.now(),n=i.Bt();this.Xm.me(n.Oc(),t),this.Xm.Kc(t)||i.ps(this.Xm)}}aw(){this.Km=null}ow(){if(!this.Jm)return;if(this.sn().cs(),document.activeElement!==document.body&&document.activeElement!==document.documentElement)a(document.activeElement).blur();else{const t=document.getSelection();null!==t&&t.removeAllRanges()}!this.Jm.kn().Zi()&&this.sn().Bt().Zi()}cw(t){if(null===this.Jm)return;const i=this.sn(),n=i.Bt();if(n.Zi())return;const s=this.Gv.N(),e=s.handleScroll,r=s.kineticScroll;if((!e.pressedMouseMove||t.Jp)&&(!e.horzTouchDrag&&!e.vertTouchDrag||!t.Jp))return;const h=this.Jm.kn(),a=performance.now();if(null!==this.Hm||this.Iw(t)||(this.Hm={x:t.clientX,y:t.clientY,yf:a,Vw:t.localX,Ew:t.localY}),null!==this.Hm&&!this.Um&&(this.Hm.x!==t.clientX||this.Hm.y!==t.clientY)){if(t.Jp&&r.touch||!t.Jp&&r.mouse){const t=n.ml();this.Xm=new In(.2/t,7/t,.997,15/t),this.Xm.Uv(n.Oc(),this.Hm.yf)}else this.Xm=null;h.Zi()||i.nu(this.Jm,h,t.localY),i.Ud(t.localX),this.Um=!0}this.Um&&(h.Zi()||i.su(this.Jm,h,t.localY),i.$d(t.localX),null!==this.Xm&&this.Xm.Uv(n.Oc(),a))}}class Yn{constructor(t,i,n,s,e){this.xt=!0,this.nm=on({width:0,height:0}),this.om=()=>this.Rm(3),this.dm="left"===t,this.bd=n.Jd,this.yn=i,this.Bw=s,this.Aw=e,this.uv=document.createElement("div"),this.uv.style.width="25px",this.uv.style.height="100%",this.uv.style.overflow="hidden",this.wm=En(this.uv,on({width:16,height:16})),this.wm.subscribeSuggestedBitmapSizeChanged(this.om)}m(){this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om),Bn(this.wm.canvasElement),this.wm.dispose()}fv(){return this.uv}pv(){return this.nm}km(t){_n(this.nm,t)||(this.nm=t,this.wm.resizeCanvasElement(t),this.uv.style.width=`${t.width}px`,this.uv.style.height=`${t.height}px`,this.xt=!0)}Rm(t){if(t<3&&!this.xt)return;if(0===this.nm.width||0===this.nm.height)return;this.xt=!1,this.wm.applySuggestedBitmapSize();const i=pn(this.wm,{colorSpace:this.yn.layout.colorSpace});null!==i&&i.useBitmapCoordinateSpace((t=>{this.Im(t),this.Vm(t)}))}vv(){return this.wm.bitmapSize}mv(t,i,n){const s=this.vv();s.width>0&&s.height>0&&t.drawImage(this.wm.canvasElement,i,n)}Vm({context:t,bitmapSize:i,horizontalPixelRatio:n,verticalPixelRatio:s}){if(!this.Bw())return;t.fillStyle=this.yn.timeScale.borderColor;const e=Math.floor(this.bd.N().S*n),r=Math.floor(this.bd.N().S*s),h=this.dm?i.width-e:0;t.fillRect(h,0,e,r)}Im({context:t,bitmapSize:i}){E(t,0,0,i.width,i.height,this.Aw())}}function Kn(t){return i=>i.tl?.(t)??[]}const Gn=Kn("normal"),Zn=Kn("top"),Xn=Kn("bottom");class Jn{constructor(t,i){this.zw=null,this.Lw=null,this.M=null,this.Ow=!1,this.nm=on({width:0,height:0}),this.Nw=new o,this.rm=new it(5),this.lm=!1,this.om=()=>{this.lm||this.Gv.Qt().mr()},this.um=()=>{this.lm||this.Gv.Qt().mr()},this.Gv=t,this.Pu=i,this.yn=t.N().layout,this.jv=document.createElement("tr"),this.Fw=document.createElement("td"),this.Fw.style.padding="0",this.Ww=document.createElement("td"),this.Ww.style.padding="0",this.uv=document.createElement("td"),this.uv.style.height="25px",this.uv.style.padding="0",this.Hw=document.createElement("div"),this.Hw.style.width="100%",this.Hw.style.height="100%",this.Hw.style.position="relative",this.Hw.style.overflow="hidden",this.uv.appendChild(this.Hw),this.wm=En(this.Hw,on({width:16,height:16})),this.wm.subscribeSuggestedBitmapSizeChanged(this.om);const n=this.wm.canvasElement;n.style.position="absolute",n.style.zIndex="1",n.style.left="0",n.style.top="0",this.gm=En(this.Hw,on({width:16,height:16})),this.gm.subscribeSuggestedBitmapSizeChanged(this.um);const s=this.gm.canvasElement;s.style.position="absolute",s.style.zIndex="2",s.style.left="0",s.style.top="0",this.jv.appendChild(this.Fw),this.jv.appendChild(this.uv),this.jv.appendChild(this.Ww),this.Uw(),this.Gv.Qt().N_().i(this.Uw.bind(this),this),this.sv=new Sn(this.gm.canvasElement,this,{Pp:()=>!0,kp:()=>!this.Gv.N().handleScroll.horzTouchDrag})}m(){this.sv.m(),null!==this.zw&&this.zw.m(),null!==this.Lw&&this.Lw.m(),this.gm.unsubscribeSuggestedBitmapSizeChanged(this.um),Bn(this.gm.canvasElement),this.gm.dispose(),this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om),Bn(this.wm.canvasElement),this.wm.dispose()}fv(){return this.jv}$w(){return this.zw}jw(){return this.Lw}Fp(t){if(this.Ow)return;this.Ow=!0;const i=this.Gv.Qt();!i.Bt().Zi()&&this.Gv.N().handleScale.axisPressedMouseMove.time&&i.Fd(t.localX)}Op(t){this.Fp(t)}Wp(){const t=this.Gv.Qt();!t.Bt().Zi()&&this.Ow&&(this.Ow=!1,this.Gv.N().handleScale.axisPressedMouseMove.time&&t.Yd())}Dp(t){const i=this.Gv.Qt();!i.Bt().Zi()&&this.Gv.N().handleScale.axisPressedMouseMove.time&&i.qd(t.localX)}Tp(t){this.Dp(t)}Bp(){this.Ow=!1;const t=this.Gv.Qt();t.Bt().Zi()&&!this.Gv.N().handleScale.axisPressedMouseMove.time||t.Yd()}Vp(){this.Bp()}fp(){this.Gv.N().handleScale.axisDoubleClickReset.time&&this.Gv.Qt().ws()}_p(){this.fp()}bp(){this.Gv.Qt().N().handleScale.axisPressedMouseMove.time&&this.Lm(1)}Zp(){this.Lm(0)}pv(){return this.nm}qw(){return this.Nw}Yw(t,i,n){_n(this.nm,t)||(this.nm=t,this.lm=!0,this.wm.resizeCanvasElement(t),this.gm.resizeCanvasElement(t),this.lm=!1,this.uv.style.width=`${t.width}px`,this.uv.style.height=`${t.height}px`,this.Nw.p(t)),null!==this.zw&&this.zw.km(on({width:i,height:t.height})),null!==this.Lw&&this.Lw.km(on({width:n,height:t.height}))}Kw(){const t=this.Gw();return Math.ceil(t.S+t.C+t.P+t.A+t.I+t.Zw)}Pt(){this.Gv.Qt().Bt().Ll()}vv(){return this.wm.bitmapSize}mv(t,i,n,s){const e=this.vv();if(e.width>0&&e.height>0&&(t.drawImage(this.wm.canvasElement,i,n),s)){const s=this.gm.canvasElement;t.drawImage(s,i,n)}}Rm(t){if(0===t)return;const i={colorSpace:this.yn.colorSpace};if(1!==t){this.wm.applySuggestedBitmapSize();const n=pn(this.wm,i);null!==n&&(n.useBitmapCoordinateSpace((t=>{this.Im(t),this.Vm(t),this.Xw(n,Xn)})),this.Bm(n),this.Xw(n,Gn)),null!==this.zw&&this.zw.Rm(t),null!==this.Lw&&this.Lw.Rm(t)}this.gm.applySuggestedBitmapSize();const n=pn(this.gm,i);null!==n&&(n.useBitmapCoordinateSpace((({context:t,bitmapSize:i})=>{t.clearRect(0,0,i.width,i.height)})),this.Jw([...this.Gv.Qt().Jn(),this.Gv.Qt().Vd()],n),this.Xw(n,Zn))}Xw(t,i){const n=this.Gv.Qt().Jn();for(const s of n)Ln(i,(i=>An(i,t,!1,void 0)),s,void 0);for(const s of n)Ln(i,(i=>zn(i,t,!1,void 0)),s,void 0)}Im({context:t,bitmapSize:i}){E(t,0,0,i.width,i.height,this.Gv.Qt().af())}Vm({context:t,bitmapSize:i,verticalPixelRatio:n}){if(this.Gv.N().timeScale.borderVisible){t.fillStyle=this.Qw();const s=Math.max(1,Math.floor(this.Gw().S*n));t.fillRect(0,0,i.width,s)}}Bm(t){const i=this.Gv.Qt().Bt(),n=i.Ll();if(!n||0===n.length)return;const s=this.Pu.maxTickMarkWeight(n),e=this.Gw(),r=i.N();r.borderVisible&&r.ticksVisible&&t.useBitmapCoordinateSpace((({context:t,horizontalPixelRatio:i,verticalPixelRatio:s})=>{t.strokeStyle=this.Qw(),t.fillStyle=this.Qw();const r=Math.max(1,Math.floor(i)),h=Math.floor(.5*i);t.beginPath();const a=Math.round(e.C*s);for(let s=n.length;s--;){const e=Math.round(n[s].coord*i);t.rect(e-h,0,r,a)}t.fill()})),t.useMediaCoordinateSpace((({context:t})=>{const i=e.S+e.C+e.A+e.P/2;t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.H(),t.font=this.ym();for(const e of n)if(e.weight<s){const n=e.needAlignCoordinate?this.tg(t,e.coord,e.label):e.coord;t.fillText(e.label,n,i)}this.Gv.N().timeScale.allowBoldLabels&&(t.font=this.ig());for(const e of n)if(e.weight>=s){const n=e.needAlignCoordinate?this.tg(t,e.coord,e.label):e.coord;t.fillText(e.label,n,i)}}))}tg(t,i,n){const s=this.rm.Ii(t,n),e=s/2,r=Math.floor(i-e)+.5;return r<0?i+=Math.abs(0-r):r+s>this.nm.width&&(i-=Math.abs(this.nm.width-(r+s))),i}Jw(t,i){const n=this.Gw();for(const s of t)for(const t of s.dn())t.Tt().st(i,n)}Qw(){return this.Gv.N().timeScale.borderColor}H(){return this.yn.textColor}F(){return this.yn.fontSize}ym(){return g(this.F(),this.yn.fontFamily)}ig(){return g(this.F(),this.yn.fontFamily,"bold")}Gw(){null===this.M&&(this.M={S:1,L:NaN,A:NaN,I:NaN,tn:NaN,C:5,P:NaN,k:"",Qi:new it,Zw:0});const t=this.M,i=this.ym();if(t.k!==i){const n=this.F();t.P=n,t.k=i,t.A=3*n/12,t.I=3*n/12,t.tn=9*n/12,t.L=0,t.Zw=4*n/12,t.Qi.Os()}return this.M}Lm(t){this.uv.style.cursor=1===t?"ew-resize":"default"}Uw(){const t=this.Gv.Qt(),i=t.N();i.leftPriceScale.visible||null===this.zw||(this.Fw.removeChild(this.zw.fv()),this.zw.m(),this.zw=null),i.rightPriceScale.visible||null===this.Lw||(this.Ww.removeChild(this.Lw.fv()),this.Lw.m(),this.Lw=null);const n={Jd:this.Gv.Qt().Jd()},s=()=>i.leftPriceScale.borderVisible&&t.Bt().N().borderVisible,e=()=>t.af();i.leftPriceScale.visible&&null===this.zw&&(this.zw=new Yn("left",i,n,s,e),this.Fw.appendChild(this.zw.fv())),i.rightPriceScale.visible&&null===this.Lw&&(this.Lw=new Yn("right",i,n,s,e),this.Ww.appendChild(this.Lw.fv()))}}const Qn=!!vn&&!!navigator.userAgentData&&navigator.userAgentData.brands.some((t=>t.brand.includes("Chromium")))&&!!vn&&(navigator?.userAgentData?.platform?"Windows"===navigator.userAgentData.platform:navigator.userAgent.toLowerCase().indexOf("win")>=0);class ts{constructor(t,i,n){var s;this.ng=[],this.sg=[],this.eg=0,this.oo=0,this.k_=0,this.rg=0,this.hg=0,this.ag=null,this.lg=!1,this.$m=new o,this.jm=new o,this.wd=new o,this.og=null,this._g=null,this.Kv=t,this.yn=i,this.Pu=n,this.jv=document.createElement("div"),this.jv.classList.add("tv-lightweight-charts"),this.jv.style.overflow="hidden",this.jv.style.direction="ltr",this.jv.style.width="100%",this.jv.style.height="100%",(s=this.jv).style.userSelect="none",s.style.webkitUserSelect="none",s.style.msUserSelect="none",s.style.MozUserSelect="none",s.style.webkitTapHighlightColor="transparent",this.ug=document.createElement("table"),this.ug.setAttribute("cellspacing","0"),this.jv.appendChild(this.ug),this.cg=this.dg.bind(this),is(this.yn)&&this.fg(!0),this.sn=new Hi(this.Md.bind(this),this.yn,n),this.Qt().Ed().i(this.pg.bind(this),this),this.vg=new Jn(this,this.Pu),this.ug.appendChild(this.vg.fv());const e=i.autoSize&&this.mg();let r=this.yn.width,h=this.yn.height;if(e||0===r||0===h){const i=t.getBoundingClientRect();r=r||i.width,h=h||i.height}this.wg(r,h),this.gg(),t.appendChild(this.jv),this.Mg(),this.sn.Bt().Jc().i(this.sn.ka.bind(this.sn),this),this.sn.N_().i(this.sn.ka.bind(this.sn),this)}Qt(){return this.sn}N(){return this.yn}lv(){return this.ng}bg(){return this.vg}m(){this.fg(!1),0!==this.eg&&window.cancelAnimationFrame(this.eg),this.sn.Ed().u(this),this.sn.Bt().Jc().u(this),this.sn.N_().u(this),this.sn.m();for(const t of this.ng)this.ug.removeChild(t.fv()),t.mw().u(this),t.ww().u(this),t.m();this.ng=[];for(const t of this.sg)this.Sg(t);this.sg=[],a(this.vg).m(),null!==this.jv.parentElement&&this.jv.parentElement.removeChild(this.jv),this.wd.m(),this.$m.m(),this.jm.m(),this.xg()}wg(t,i,n=!1){if(this.oo===i&&this.k_===t)return;const s=function(t){const i=Math.floor(t.width),n=Math.floor(t.height);return on({width:i-i%2,height:n-n%2})}(on({width:t,height:i}));this.oo=s.height,this.k_=s.width;const e=this.oo+"px",r=this.k_+"px";if(this.Cg()||(a(this.jv).style.height=e,a(this.jv).style.width=r),this.ug.style.height=e,this.ug.style.width=r,n){0!==this.eg&&(window.cancelAnimationFrame(this.eg),this.eg=0),this.lg=!1;const t=Y.ys();null!==this.ag&&(t.Ss(this.ag),this.ag=null),this.yg(t,performance.now())}else this.sn.ka()}Rm(t){void 0===t&&(t=Y.ys());for(let i=0;i<this.ng.length;i++)this.ng[i].Rm(t._s(i).rs);this.yn.timeScale.visible&&this.vg.Rm(t.ls())}vr(t){const i=is(this.yn);this.sn.vr(t);const n=is(this.yn);n!==i&&this.fg(n),t.layout?.panes&&this.Pg(),this.Mg(),this.kg(t)}mw(){return this.$m}ww(){return this.jm}Ed(){return this.wd}Tg(t=!1){null!==this.ag&&(this.yg(this.ag,performance.now()),this.ag=null);const i=this.Rg(null),n=document.createElement("canvas");n.width=i.width,n.height=i.height;const s=a(n.getContext("2d"));return this.Rg(s,t),n}Dg(t){if("left"===t&&!this.Ig())return 0;if("right"===t&&!this.Vg())return 0;if(0===this.ng.length)return 0;return a("left"===t?this.ng[0].yw():this.ng[0].Pw()).Tm()}Cg(){return this.yn.autoSize&&null!==this.og}gv(){return this.jv}Eg(t){this._g=t,this._g?this.gv().style.setProperty("cursor",t):this.gv().style.removeProperty("cursor")}Bg(){return this._g}Ag(t){return h(this.ng[t]).pv()}Pg(){this.sg.forEach((t=>{t.Pt()}))}kg(t){(void 0!==t.autoSize||!this.og||void 0===t.width&&void 0===t.height)&&(t.autoSize&&!this.og&&this.mg(),!1===t.autoSize&&null!==this.og&&this.xg(),t.autoSize||void 0===t.width&&void 0===t.height||this.wg(t.width||this.k_,t.height||this.oo))}Rg(t,i){let n=0,s=0;const e=this.ng[0],r=(n,s)=>{let e=0;for(let r=0;r<this.ng.length;r++){const h=this.ng[r],l=a("left"===n?h.yw():h.Pw()),o=l.vv();if(null!==t&&l.mv(t,s,e,i),e+=o.height,r<this.ng.length-1){const i=this.sg[r],n=i.vv();null!==t&&i.mv(t,s,e),e+=n.height}}};if(this.Ig()){r("left",0);n+=a(e.yw()).vv().width}for(let e=0;e<this.ng.length;e++){const r=this.ng[e],h=r.vv();if(null!==t&&r.mv(t,n,s,i),s+=h.height,e<this.ng.length-1){const i=this.sg[e],r=i.vv();null!==t&&i.mv(t,n,s),s+=r.height}}if(n+=e.vv().width,this.Vg()){r("right",n);n+=a(e.Pw()).vv().width}const h=(i,n,s)=>{a("left"===i?this.vg.$w():this.vg.jw()).mv(a(t),n,s)};if(this.yn.timeScale.visible){const n=this.vg.vv();if(null!==t){let r=0;this.Ig()&&(h("left",r,s),r=a(e.yw()).vv().width),this.vg.mv(t,r,s,i),r+=n.width,this.Vg()&&h("right",r,s)}s+=n.height}return on({width:n,height:s})}zg(){let t=0,i=0,n=0;for(const s of this.ng)this.Ig()&&(i=Math.max(i,a(s.yw()).Cm(),this.yn.leftPriceScale.minimumWidth)),this.Vg()&&(n=Math.max(n,a(s.Pw()).Cm(),this.yn.rightPriceScale.minimumWidth)),t+=s.F_();i=Mn(i),n=Mn(n);const s=this.k_,e=this.oo,r=Math.max(s-i-n,0),h=1*this.sg.length,l=this.yn.timeScale.visible;let o=l?Math.max(this.vg.Kw(),this.yn.timeScale.minimumHeight):0;var _;o=(_=o)+_%2;const u=h+o,c=e<u?0:e-u,d=c/t;let f=0;const p=window.devicePixelRatio||1;for(let t=0;t<this.ng.length;++t){const s=this.ng[t];s.ew(this.sn.Gn()[t]);let e=0,h=0;h=t===this.ng.length-1?Math.ceil((c-f)*p)/p:Math.round(s.F_()*d*p)/p,e=Math.max(h,2),f+=e,s.km(on({width:r,height:e})),this.Ig()&&s.Mw(i,"left"),this.Vg()&&s.Mw(n,"right"),s.yv()&&this.sn.Bd(s.yv(),e)}this.vg.Yw(on({width:l?r:0,height:o}),l?i:0,l?n:0),this.sn.H_(r),this.rg!==i&&(this.rg=i),this.hg!==n&&(this.hg=n)}fg(t){t?this.jv.addEventListener("wheel",this.cg,{passive:!1}):this.jv.removeEventListener("wheel",this.cg)}Lg(t){switch(t.deltaMode){case t.DOM_DELTA_PAGE:return 120;case t.DOM_DELTA_LINE:return 32}return Qn?1/window.devicePixelRatio:1}dg(t){if(!(0!==t.deltaX&&this.yn.handleScroll.mouseWheel||0!==t.deltaY&&this.yn.handleScale.mouseWheel))return;const i=this.Lg(t),n=i*t.deltaX/100,s=-i*t.deltaY/100;if(t.cancelable&&t.preventDefault(),0!==s&&this.yn.handleScale.mouseWheel){const i=Math.sign(s)*Math.min(1,Math.abs(s)),n=t.clientX-this.jv.getBoundingClientRect().left;this.Qt().Wd(n,i)}0!==n&&this.yn.handleScroll.mouseWheel&&this.Qt().Hd(-80*n)}yg(t,i){const n=t.ls();3===n&&this.Og(),3!==n&&2!==n||(this.Ng(t),this.Fg(t,i),this.vg.Pt(),this.ng.forEach((t=>{t.hw()})),3===this.ag?.ls()&&(this.ag.Ss(t),this.Og(),this.Ng(this.ag),this.Fg(this.ag,i),t=this.ag,this.ag=null)),this.Rm(t)}Fg(t,i){for(const n of t.bs())this.xs(n,i)}Ng(t){const i=this.sn.Gn();for(let n=0;n<i.length;n++)t._s(n).hs&&i[n].lu()}xs(t,i){const n=this.sn.Bt();switch(t.ds){case 0:n.td();break;case 1:n.nd(t.Wt);break;case 2:n.gs(t.Wt);break;case 3:n.Ms(t.Wt);break;case 4:n.Wc();break;case 5:t.Wt.Kc(i)||n.Ms(t.Wt.Gc(i))}}Md(t){null!==this.ag?this.ag.Ss(t):this.ag=t,this.lg||(this.lg=!0,this.eg=window.requestAnimationFrame((t=>{if(this.lg=!1,this.eg=0,null!==this.ag){const i=this.ag;this.ag=null,this.yg(i,t);for(const n of i.bs())if(5===n.ds&&!n.Wt.Kc(t)){this.Qt().ps(n.Wt);break}}})))}Og(){this.gg()}Sg(t){this.ug.removeChild(t.fv()),t.m()}gg(){const t=this.sn.Gn(),i=t.length,n=this.ng.length;for(let t=i;t<n;t++){const t=h(this.ng.pop());this.ug.removeChild(t.fv()),t.mw().u(this),t.ww().u(this),t.m();const i=this.sg.pop();void 0!==i&&this.Sg(i)}for(let s=n;s<i;s++){const i=new qn(this,t[s]);if(i.mw().i(this.Wg.bind(this,i),this),i.ww().i(this.Hg.bind(this,i),this),this.ng.push(i),s>0){const t=new Tn(this,s-1,s);this.sg.push(t),this.ug.insertBefore(t.fv(),this.vg.fv())}this.ug.insertBefore(i.fv(),this.vg.fv())}for(let n=0;n<i;n++){const i=t[n],s=this.ng[n];s.yv()!==i?s.ew(i):s.sw()}this.Mg(),this.zg()}Ug(t,i,n,s){const e=new Map;if(null!==t){this.sn.Jn().forEach((i=>{const n=i.Un().Hn(t);null!==n&&e.set(i,n)}))}let r;if(null!==t){const i=this.sn.Bt().en(t)?.originalTime;void 0!==i&&(r=i)}const h=this.Qt().cu(),a=this.$g(s),l=function(t,i){const n=null!==t&&t.uu instanceof Kt?t.uu:void 0,s=t?.bu?.te,e=void 0!==i&&-1!==i?i:void 0;return null===t||void 0===t.ee?{jg:n,qg:s}:{jg:n,qg:s,Yg:{ds:t.ee,Kg:(r=t.uu,h=t.ee,r instanceof Si?"pane-primitive":"marker"===h||"primitive"===h?"series-primitive":"series"),Gg:gn(t.ee,s),Y_:n,Zg:s,Xg:e}};var r,h}(h,a);return{Qr:r,$n:t??void 0,Jg:i??void 0,Xg:-1!==a?a:void 0,jg:l.jg,Qg:e,qg:l.qg,Yg:l.Yg,tM:n??void 0}}$g(t){let i=-1;if(t)i=this.ng.indexOf(t);else{const t=this.Qt().Vd().Kn();null!==t&&(i=this.Qt().Gn().indexOf(t))}return i}Wg(t,i,n,s){this.$m.p((()=>this.Ug(i,n,s,t)))}Hg(t,i,n,s){this.jm.p((()=>this.Ug(i,n,s,t)))}pg(t,i,n){this.Eg(this.Qt().cu()?.Mu??null),this.wd.p((()=>this.Ug(t,i,n)))}Mg(){const t=this.yn.timeScale.visible?"":"none";this.vg.fv().style.display=t}Ig(){return this.ng[0].yv().X_().N().visible}Vg(){return this.ng[0].yv().J_().N().visible}mg(){return"ResizeObserver"in window&&(this.og=new ResizeObserver((t=>{const i=t[t.length-1];if(!i)return;const n=i.contentRect.width,s=i.contentRect.height;this.wg(n,s,!0)})),this.og.observe(this.Kv,{box:"border-box"}),!0)}xg(){null!==this.og&&this.og.disconnect(),this.og=null}}function is(t){return Boolean(t.handleScroll.mouseWheel||t.handleScale.mouseWheel)}function ns(t){return void 0===t.open&&void 0===t.value}function ss(t){return function(t){return void 0!==t.open}(t)||function(t){return void 0!==t.value}(t)}function es(t,i,n,s){const e=n.value,r={$n:i,wt:t,Wt:[e,e,e,e],Qr:s};return void 0!==n.color&&(r.R=n.color),r}function rs(t,i,n,s){const e=n.value,r={$n:i,wt:t,Wt:[e,e,e,e],Qr:s};return void 0!==n.lineColor&&(r.vt=n.lineColor),void 0!==n.topColor&&(r.ah=n.topColor),void 0!==n.bottomColor&&(r.oh=n.bottomColor),r}function hs(t,i,n,s){const e=n.value,r={$n:i,wt:t,Wt:[e,e,e,e],Qr:s};return void 0!==n.topLineColor&&(r._h=n.topLineColor),void 0!==n.bottomLineColor&&(r.uh=n.bottomLineColor),void 0!==n.topFillColor1&&(r.dh=n.topFillColor1),void 0!==n.topFillColor2&&(r.fh=n.topFillColor2),void 0!==n.bottomFillColor1&&(r.ph=n.bottomFillColor1),void 0!==n.bottomFillColor2&&(r.mh=n.bottomFillColor2),r}function as(t,i,n,s){const e={$n:i,wt:t,Wt:[n.open,n.high,n.low,n.close],Qr:s};return void 0!==n.color&&(e.R=n.color),e}function ls(t,i,n,s){const e={$n:i,wt:t,Wt:[n.open,n.high,n.low,n.close],Qr:s};return void 0!==n.color&&(e.R=n.color),void 0!==n.borderColor&&(e.Ht=n.borderColor),void 0!==n.wickColor&&(e.hh=n.wickColor),e}function os(t,i,n,s,e){const r=h(e)(n),a=Math.max(...r),l=Math.min(...r),o=r[r.length-1],_=[o,a,l,o],{time:u,color:c,...d}=n;return{$n:i,wt:t,Wt:_,Qr:s,ue:d,R:c}}function _s(t){return void 0!==t.Wt}function us(t,i){return void 0!==i.customValues&&(t.iM=i.customValues),t}function cs(t){return(i,n,s,e,r,h)=>function(t,i){return i?i(t):ns(t)}(s,h)?us({wt:i,$n:n,Qr:e},s):us(t(i,n,s,e,r),s)}function ds(t){return{Candlestick:cs(ls),Bar:cs(as),Area:cs(rs),Baseline:cs(hs),Histogram:cs(es),Line:cs(es),Custom:cs(os)}[t]}function fs(t){return{$n:0,nM:new Map,Oa:t}}function ps(t,i){if(void 0!==t&&0!==t.length)return{sM:i.key(t[0].wt),eM:i.key(t[t.length-1].wt)}}function vs(t){let i;return t.forEach((t=>{void 0===i&&(i=t.Qr)})),h(i)}class ms{constructor(t){this.rM=new Map,this.hM=new Map,this.aM=new Map,this.lM=[],this.Pu=t}m(){this.rM.clear(),this.hM.clear(),this.aM.clear(),this.lM=[]}oM(t,i){let n=0!==this.rM.size,s=!1;const e=this.hM.get(t);if(void 0!==e)if(1===this.hM.size)n=!1,s=!0,this.rM.clear();else for(const i of this.lM)i.pointData.nM.delete(t)&&(s=!0);let r=[];if(0!==i.length){const n=i.map((t=>t.time)),e=this.Pu.createConverterToInternalObj(i),h=ds(t.bh()),a=t.ul(),l=t.cl();r=i.map(((i,r)=>{const o=e(i.time),_=this.Pu.key(o);let u=this.rM.get(_);void 0===u&&(u=fs(o),this.rM.set(_,u),s=!0);const c=h(o,u.$n,i,n[r],a,l);return u.nM.set(t,c),c}))}n&&this._M(),this.uM(t,r);let h=-1;if(s){const t=[];this.rM.forEach((i=>{t.push({timeWeight:0,time:i.Oa,pointData:i,originalTime:vs(i.nM)})})),t.sort(((t,i)=>this.Pu.key(t.time)-this.Pu.key(i.time))),h=this.cM(t)}return this.dM(t,h,function(t,i,n){const s=ps(t,n),e=ps(i,n);if(void 0!==s&&void 0!==e)return{fM:!1,Va:s.eM>=e.eM&&s.sM>=e.sM}}(this.hM.get(t),e,this.Pu))}if(t){return this.oM(t,[])}pM(t,i,n){if(n&&t.Fa())throw new Error("Historical updates are not supported when conflation is enabled. Conflation requires data to be processed in order.");const s=i;!function(t){void 0===t.Qr&&(t.Qr=t.time)}(s),this.Pu.preprocessData(i);const e=this.Pu.createConverterToInternalObj([i])(i.time),r=this.aM.get(t);if(!n&&void 0!==r&&this.Pu.key(e)<this.Pu.key(r))throw new Error(`Cannot update oldest data, last time=${r}, new time=${e}`);let h=this.rM.get(this.Pu.key(e));if(n&&void 0===h)throw new Error("Cannot update non-existing data point when historicalUpdate is true");const a=void 0===h;void 0===h&&(h=fs(e),this.rM.set(this.Pu.key(e),h));const l=ds(t.bh()),o=t.ul(),_=t.cl(),u=l(e,h.$n,i,s.Qr,o,_),c=!n&&!a&&void 0!==r&&this.Pu.key(e)===this.Pu.key(r);h.nM.set(t,u),n?this.vM(t,u,h.$n):c&&t.Fa()&&_s(u)?(t.Rr(u),this.mM(t,u)):this.mM(t,u);const d={Va:_s(u),fM:n};if(!a)return this.dM(t,-1,d);const f={timeWeight:0,time:h.Oa,pointData:h,originalTime:vs(h.nM)},p=yt(this.lM,this.Pu.key(f.time),((t,i)=>this.Pu.key(t.time)<i));this.lM.splice(p,0,f);for(let t=p;t<this.lM.length;++t)ws(this.lM[t].pointData,t);return this.Pu.fillWeightsForPoints(this.lM,p),this.dM(t,p,d)}wM(t,i){const n=this.hM.get(t);if(void 0===n||i<=0)return[[],this.gM()];i=Math.min(i,n.length);const s=n.splice(-i).reverse();0===n.length?this.aM.delete(t):this.aM.set(t,n[n.length-1].wt);for(const i of s){const n=this.rM.get(this.Pu.key(i.wt));if(n&&(n.nM.delete(t),0===n.nM.size)){this.rM.delete(this.Pu.key(n.Oa)),this.lM.splice(n.$n,1);for(let t=n.$n;t<this.lM.length;++t)ws(this.lM[t].pointData,t)}}return[s,this.dM(t,this.lM.length-1,{fM:!1,Va:!1})]}mM(t,i){let n=this.hM.get(t);void 0===n&&(n=[],this.hM.set(t,n));const s=0!==n.length?n[n.length-1]:null;null===s||this.Pu.key(i.wt)>this.Pu.key(s.wt)?_s(i)&&n.push(i):_s(i)?n[n.length-1]=i:n.splice(-1,1),this.aM.set(t,i.wt)}vM(t,i,n){const s=this.hM.get(t);if(void 0===s)return;const e=yt(s,n,((t,i)=>t.$n<i));_s(i)?s[e]=i:s.splice(e,1)}uM(t,i){0!==i.length?(this.hM.set(t,i.filter(_s)),this.aM.set(t,i[i.length-1].wt)):(this.hM.delete(t),this.aM.delete(t))}_M(){for(const t of this.lM)0===t.pointData.nM.size&&this.rM.delete(this.Pu.key(t.time))}cM(t){let i=-1;for(let n=0;n<this.lM.length&&n<t.length;++n){const s=this.lM[n],e=t[n];if(this.Pu.key(s.time)!==this.Pu.key(e.time)){i=n;break}e.timeWeight=s.timeWeight,ws(e.pointData,n)}if(-1===i&&this.lM.length!==t.length&&(i=Math.min(this.lM.length,t.length)),-1===i)return-1;for(let n=i;n<t.length;++n)ws(t[n].pointData,n);return this.Pu.fillWeightsForPoints(t,i),this.lM=t,i}MM(){if(0===this.hM.size)return null;let t=0;return this.hM.forEach((i=>{0!==i.length&&(t=Math.max(t,i[i.length-1].$n))})),t}dM(t,i,n){const s=this.gM();if(-1!==i)this.hM.forEach(((i,e)=>{s.Y_.set(e,{ue:i,bM:e===t?n:void 0})})),this.hM.has(t)||s.Y_.set(t,{ue:[],bM:n}),s.Bt.SM=this.lM,s.Bt.xM=i;else{const i=this.hM.get(t);s.Y_.set(t,{ue:i||[],bM:n})}return s}gM(){return{Y_:new Map,Bt:{Dc:this.MM()}}}}function ws(t,i){t.$n=i,t.nM.forEach((t=>{t.$n=i}))}function gs(t,i){return t._t<i}function Ms(t,i){return i<t._t}function bs(t,i,n,s){return yt(t,i,gs,n,s)}function Ss(t,i,n,s){return Pt(t,i,Ms,n,s)}function xs(t,i,n){return{ne:t,se:i,ee:n}}function Cs(t,i,n,s){return t>=i-s&&t<=n+s}function ys(t,i,n,s,e,r){const h=e-n,a=r-s;if(0===h&&0===a)return Math.hypot(t-n,i-s);const l=((t-n)*h+(i-s)*a)/(h*h+a*a),o=Math.max(0,Math.min(1,l)),_=n+h*o,u=s+a*o;return Math.hypot(t-_,i-u)}const Ps=[0,0];function ks(t,i,n){return void 0===i||i.wt!==t.wt-1?t._t-n/2:(i._t+t._t)/2}function Ts(t,i,n){return void 0===i||i.wt!==t.wt+1?t._t+n/2:(t._t+i._t)/2}function Rs(t,i,n,s,e,r,h){if(null===i||i.from>=i.to||0===t.length)return null;const a=e/2+r,l=bs(t,n-a,i.from,i.to),o=Ss(t,n+a,l,i.to);if(l>=o)return null;let _=Number.POSITIVE_INFINITY;for(let a=l;a<o;a++){const l=t[a],o=a>i.from?t[a-1]:void 0,u=a<i.to-1?t[a+1]:void 0,c=ks(l,o,e)-r,d=Ts(l,u,e)+r;if(n<c||n>d)continue;h(l,Ps);const f=Ps[0],p=Ps[1],v=Math.min(f,p),m=Math.max(f,p),w=v-r,g=m+r;if(s>=v&&s<=m)_=Math.min(_,0);else if(s>=w&&s<=g){const t=Math.min(Math.abs(s-v),Math.abs(m-s));_=Math.min(_,t)}}return Number.isFinite(_)?xs(_,0,"series-range"):null}function Ds(t,i){return t.wt<i}function Is(t,i){return i<t.wt}function Vs(t,i,n){const s=i.Na(),e=i.bi(),r=yt(t,s,Ds),h=Pt(t,e,Is);if(!n)return{from:r,to:h};let a=r,l=h;return r>0&&r<t.length&&t[r].wt>=s&&(a=r-1),h>0&&h<t.length&&t[h-1].wt<=e&&(l=h+1),{from:a,to:l}}class Es{constructor(t,i,n){this.CM=!0,this.yM=!0,this.PM=!0,this.kM=[],this.TM=null,this.RM=-1,this.ae=t,this.le=i,this.DM=n}Pt(t){this.CM=!0,"data"===t&&(this.yM=!0),"options"===t&&(this.PM=!0)}Tt(){return this.ae.It()?(this.IM(),null===this.TM?null:this.VM):null}Qs(t,i){return this.ae.It()?(this.IM(),null===this.TM?null:this.EM(t,i)):null}EM(t,i){return null}BM(){this.kM=this.kM.map((t=>({...t,...this.ae.Sa().Sh(t.wt)})))}AM(){this.TM=null}IM(){const t=this.le.Bt(),i=t.N().enableConflation?t.sd():0;i!==this.RM&&(this.yM=!0,this.RM=i),this.yM&&(this.zM(),this.yM=!1),this.PM&&(this.BM(),this.PM=!1),this.CM&&(this.LM(),this.CM=!1)}LM(){const t=this.ae.Ft(),i=this.le.Bt();if(this.AM(),i.Zi()||t.Zi())return;const n=i.Be();if(null===n)return;if(0===this.ae.Un().Th())return;const s=this.ae.zt();null!==s&&(this.TM=Vs(this.kM,n,this.DM),this.OM(t,i,s.Wt),this.NM())}}class Bs{constructor(t,i){this.FM=t,this.Ki=i}st(t,i,n){this.FM.draw(t,this.Ki,i,n)}}function As(t){switch(t){case"point":return 2;case"range":return 0;default:return 1}}class zs extends Es{constructor(t,i,n){super(t,i,!1),this.Yh=n,this.FM=this.Yh.renderer(),this.VM=new Bs(this.FM,(t=>this.WM(t)))}get Ma(){return this.Yh.conflationReducer}Ha(t){return this.Yh.priceValueBuilder(t)}dl(t){return this.Yh.isWhitespace(t)}EM(t,i){const n=this.FM.hitTest?.(t,i,(t=>this.WM(t)));if(null!=n)return{ne:(s=n).distance,se:As(s.type),ee:"custom",Mu:s.cursorStyle,te:s.objectId,ie:s.hitTestData};var s;const e=Rs(this.kM,this.TM,t,i,this.le.Bt().ml(),this.ae.N().hitTestTolerance,((t,i)=>{const n=t.HM;let s=NaN,e=NaN;if(void 0!==n&&!this.Yh.isWhitespace(n))for(const t of this.Yh.priceValueBuilder(n)){const i=this.WM(t);null!==i&&(s=Number.isNaN(s)?i:Math.min(s,i),e=Number.isNaN(e)?i:Math.max(e,i))}i[0]=s,i[1]=e}));return null===e?null:{...e,ee:"custom"}}zM(){const t=this.ae.Sa();this.kM=this.ae.Ua().Eh().map((i=>({wt:i.$n,_t:NaN,...t.Sh(i.$n),HM:i.ue})))}OM(t,i){i.Ic(this.kM,m(this.TM))}NM(){this.Yh.update({bars:this.kM.map(Ls),barSpacing:this.le.Bt().ml(),visibleRange:this.TM,conflationFactor:this.le.Bt().sd()},this.ae.N())}WM(t){const i=this.ae.zt();return null===i?null:this.ae.Ft().Nt(t,i.Wt)}}function Ls(t){return{x:t._t,time:t.wt,originalData:t.HM,barColor:t.sh}}const Os={color:"#2196f3"},Ns=(t,i,n)=>{const s=l(n);return new zs(t,i,s)};function Fs(t){const i={value:t.Wt[3],time:t.Qr};return void 0!==t.iM&&(i.customValues=t.iM),i}function Ws(t){const i=Fs(t);return void 0!==t.R&&(i.color=t.R),i}function Hs(t){const i=Fs(t);return void 0!==t.vt&&(i.lineColor=t.vt),void 0!==t.ah&&(i.topColor=t.ah),void 0!==t.oh&&(i.bottomColor=t.oh),i}function Us(t){const i=Fs(t);return void 0!==t._h&&(i.topLineColor=t._h),void 0!==t.uh&&(i.bottomLineColor=t.uh),void 0!==t.dh&&(i.topFillColor1=t.dh),void 0!==t.fh&&(i.topFillColor2=t.fh),void 0!==t.ph&&(i.bottomFillColor1=t.ph),void 0!==t.mh&&(i.bottomFillColor2=t.mh),i}function $s(t){const i={open:t.Wt[0],high:t.Wt[1],low:t.Wt[2],close:t.Wt[3],time:t.Qr};return void 0!==t.iM&&(i.customValues=t.iM),i}function js(t){const i=$s(t);return void 0!==t.R&&(i.color=t.R),i}function qs(t){const i=$s(t),{R:n,Ht:s,hh:e}=t;return void 0!==n&&(i.color=n),void 0!==s&&(i.borderColor=s),void 0!==e&&(i.wickColor=e),i}function Ys(t){return{Area:Hs,Line:Ws,Baseline:Us,Histogram:Ws,Bar:js,Candlestick:qs,Custom:Ks}[t]}function Ks(t){const i=t.Qr;return{...t.ue,time:i}}const Gs={vertLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},horzLine:{color:"#9598A1",width:1,style:3,visible:!0,labelVisible:!0,labelBackgroundColor:"#131722"},mode:1,doNotSnapToHiddenSeriesIndices:!1},Zs={vertLines:{color:"#D6DCDE",style:0,visible:!0},horzLines:{color:"#D6DCDE",style:0,visible:!0}},Xs={background:{type:"solid",color:"#FFFFFF"},textColor:"#191919",fontSize:12,fontFamily:w,panes:{enableResize:!0,separatorColor:"#E0E3EB",separatorHoverColor:"rgba(178, 181, 189, 0.2)"},attributionLogo:!0,colorSpace:"srgb",colorParsers:[]},Js={autoScale:!0,mode:0,invertScale:!1,alignLabels:!0,borderVisible:!0,borderColor:"#2B2B43",entireTextOnly:!1,visible:!1,ticksVisible:!1,scaleMargins:{bottom:.1,top:.2},minimumWidth:0,ensureEdgeTickMarksVisible:!1,tickMarkDensity:2.5},Qs={rightOffset:0,barSpacing:6,minBarSpacing:.5,maxBarSpacing:0,fixLeftEdge:!1,fixRightEdge:!1,lockVisibleTimeRangeOnResize:!1,rightBarStaysOnScroll:!1,borderVisible:!0,borderColor:"#2B2B43",visible:!0,timeVisible:!1,secondsVisible:!0,shiftVisibleRangeOnNewBar:!0,allowShiftVisibleRangeOnWhitespaceReplacement:!1,ticksVisible:!1,uniformDistribution:!1,minimumHeight:0,allowBoldLabels:!0,ignoreWhitespaceIndices:!1,enableConflation:!1,conflationThresholdFactor:1,precomputeConflationOnInit:!1,precomputeConflationPriority:"background"};function te(){return{addDefaultPane:!0,hoveredSeriesOnTop:!0,width:0,height:0,autoSize:!1,layout:Xs,crosshair:Gs,grid:Zs,overlayPriceScales:{...Js},leftPriceScale:{...Js,visible:!1},rightPriceScale:{...Js,visible:!0},defaultVisiblePriceScaleId:"right",timeScale:Qs,localization:{locale:vn?navigator.language:"",dateFormat:"dd MMM 'yy"},handleScroll:{mouseWheel:!0,pressedMouseMove:!0,horzTouchDrag:!0,vertTouchDrag:!0},handleScale:{axisPressedMouseMove:{time:!0,price:!0},axisDoubleClickReset:{time:!0,price:!0},mouseWheel:!0,pinch:!0},kineticScroll:{mouse:!1,touch:!0},trackingMode:{exitMode:1}}}class ie{constructor(t,i,n){this.hv=t,this.UM=i,this.$M=n??0}applyOptions(t){this.hv.Qt().Dd(this.UM,t,this.$M)}options(){return this.Ki().N()}width(){return q(this.UM)?this.hv.Dg(this.UM):0}setVisibleRange(t){this.setAutoScale(!1),this.Ki().Go(new dt(t.from,t.to))}getVisibleRange(){let t,i,n=this.Ki().ar();if(null===n)return null;if(this.Ki().ho()){const s=this.Ki().S_(),e=Ui(s);n=ci(n,this.Ki().lo()),t=Number((Math.round(n.Je()/s)*s).toFixed(e)),i=Number((Math.round(n.Qe()/s)*s).toFixed(e))}else t=n.Je(),i=n.Qe();return{from:t,to:i}}setAutoScale(t){this.applyOptions({autoScale:t})}Ki(){return a(this.hv.Qt().Id(this.UM,this.$M)).Ft}}class ne{constructor(t,i,n,s){this.hv=t,this.yt=n,this.jM=i,this.qM=s}getHeight(){return this.yt.$t()}setHeight(t){const i=this.hv.Qt(),n=i._f(this.yt);i.zd(n,t)}getStretchFactor(){return this.yt.F_()}setStretchFactor(t){this.yt.W_(t),this.hv.Qt().ka()}paneIndex(){return this.hv.Qt()._f(this.yt)}moveTo(t){const i=this.paneIndex();i!==t&&(r(t>=0&&t<this.hv.lv().length,"Invalid pane index"),this.hv.Qt().Od(i,t))}getSeries(){return this.yt.Y_().map((t=>this.jM(t)))??[]}getHTMLElement(){const t=this.hv.lv();return t&&0!==t.length&&t[this.paneIndex()]?t[this.paneIndex()].fv():null}attachPrimitive(t){this.yt.ol(t),t.attached&&t.attached({chart:this.qM,requestUpdate:()=>this.yt.Qt().ka()})}detachPrimitive(t){this.yt._l(t)}priceScale(t){if(null===this.yt.O_(t))throw new Error(`Cannot find price scale with id: ${t}`);return new ie(this.hv,t,this.paneIndex())}setPreserveEmptyPane(t){this.yt.j_(t)}preserveEmptyPane(){return this.yt.q_()}addCustomSeries(t,i={},n=0){return this.qM.addCustomSeries(t,i,n)}addSeries(t,i={}){return this.qM.addSeries(t,i,this.paneIndex())}}const se={color:"#FF0000",price:0,lineStyle:2,lineWidth:1,lineVisible:!0,axisLabelVisible:!0,title:"",axisLabelColor:"",axisLabelTextColor:""};class ee{constructor(t){this._r=t}applyOptions(t){this._r.vr(t)}options(){return this._r.N()}YM(){return this._r}}class re{constructor(t,i,n,s,e,r){this.KM=new o,this.ae=t,this.GM=i,this.ZM=n,this.Pu=e,this.qM=s,this.XM=r}m(){this.KM.m()}priceFormatter(){return this.ae.sl()}priceToCoordinate(t){const i=this.ae.zt();return null===i?null:this.ae.Ft().Nt(t,i.Wt)}coordinateToPrice(t){const i=this.ae.zt();return null===i?null:this.ae.Ft().Tn(t,i.Wt)}barsInLogicalRange(t){if(null===t)return null;const i=new Bi(new Ii(t.from,t.to)).Uu(),n=this.ae.Un();if(n.Zi())return null;const s=n.Hn(i.Na(),1),e=n.Hn(i.bi(),-1),r=a(n.Rh()),h=a(n.Qn());if(null!==s&&null!==e&&s.$n>e.$n)return{barsBefore:t.from-r,barsAfter:h-t.to};const l={barsBefore:null===s||s.$n===r?t.from-r:s.$n-r,barsAfter:null===e||e.$n===h?h-t.to:h-e.$n};return null!==s&&null!==e&&(l.from=s.Qr,l.to=e.Qr),l}setData(t){this.Pu,this.ae.bh(),this.GM.JM(this.ae,t),this.QM("full")}update(t,i=!1){this.ae.bh(),this.GM.tb(this.ae,t,i),this.QM("update")}pop(t=1){const i=this.GM.ib(this.ae,t);0!==i.length&&this.QM("update");const n=Ys(this.seriesType());return i.map((t=>n(t)))}dataByIndex(t,i){const n=this.ae.Un().Hn(t,i);if(null===n)return null;return Ys(this.seriesType())(n)}data(){const t=Ys(this.seriesType());return this.ae.Un().Eh().map((i=>t(i)))}subscribeDataChanged(t){this.KM.i(t)}unsubscribeDataChanged(t){this.KM._(t)}applyOptions(t){this.ae.vr(t)}options(){return p(this.ae.N())}priceScale(){return this.ZM.priceScale(this.ae.Ft().pl(),this.getPane().paneIndex())}createPriceLine(t){const i=_(p(se),t),n=this.ae.Ba(i);return new ee(n)}removePriceLine(t){this.ae.Aa(t.YM())}priceLines(){return this.ae.za().map((t=>new ee(t)))}seriesType(){return this.ae.bh()}lastValueData(t){const i=this.ae.Ae(t);return i.ze?{noData:!0}:{noData:!1,price:i.gt,color:i.R}}attachPrimitive(t){this.ae.ol(t),t.attached&&t.attached({chart:this.qM,series:this,requestUpdate:()=>this.ae.Qt().ka(),horzScaleBehavior:this.Pu})}detachPrimitive(t){this.ae._l(t),t.detached&&t.detached(),this.ae.Qt().ka()}getPane(){const t=this.ae,i=a(this.ae.Qt().Ks(t));return this.XM(i)}moveToPane(t){this.ae.Qt().rf(this.ae,t)}seriesOrder(){const t=this.ae.Qt().Ks(this.ae);return null===t?-1:t.Y_().indexOf(this.ae)}setSeriesOrder(t){const i=this.ae.Qt().Ks(this.ae);null!==i&&i.vu(this.ae,t)}QM(t){this.KM.v()&&this.KM.p(t)}}class he{constructor(t,i,n){this.nb=new o,this.Qu=new o,this.Nw=new o,this.sn=t,this.ia=t.Bt(),this.vg=i,this.ia.Zc().i(this.sb.bind(this)),this.ia.Xc().i(this.eb.bind(this)),this.vg.qw().i(this.rb.bind(this)),this.Pu=n}m(){this.ia.Zc().u(this),this.ia.Xc().u(this),this.vg.qw().u(this),this.nb.m(),this.Qu.m(),this.Nw.m()}scrollPosition(){return this.ia.Oc()}scrollToPosition(t,i){i?this.ia.Yc(t,1e3):this.sn.Ms(t)}scrollToRealTime(){this.ia.qc()}getVisibleRange(){const t=this.ia.xc();return null===t?null:{from:t.from.originalTime,to:t.to.originalTime}}setVisibleRange(t){const i={from:this.Pu.convertHorzItemToInternal(t.from),to:this.Pu.convertHorzItemToInternal(t.to)},n=this.ia.kc(i);this.sn.sf(n)}getVisibleLogicalRange(){const t=this.ia.Sc();return null===t?null:{from:t.Na(),to:t.bi()}}setVisibleLogicalRange(t){r(t.from<=t.to,"The from index cannot be after the to index."),this.sn.sf(t)}resetTimeScale(){this.sn.ws()}fitContent(){this.sn.td()}logicalToCoordinate(t){const i=this.sn.Bt();return i.Zi()?null:i.jt(t)}coordinateToLogical(t){return this.ia.Zi()?null:this.ia.Vc(t)}timeToIndex(t,i){const n=this.Pu.convertHorzItemToInternal(t);return this.ia.gc(n,i)}timeToCoordinate(t){const i=this.timeToIndex(t,!1);return null===i?null:this.ia.jt(i)}coordinateToTime(t){const i=this.sn.Bt(),n=i.Vc(t),s=i.en(n);return null===s?null:s.originalTime}width(){return this.vg.pv().width}height(){return this.vg.pv().height}subscribeVisibleTimeRangeChange(t){this.nb.i(t)}unsubscribeVisibleTimeRangeChange(t){this.nb._(t)}subscribeVisibleLogicalRangeChange(t){this.Qu.i(t)}unsubscribeVisibleLogicalRangeChange(t){this.Qu._(t)}subscribeSizeChange(t){this.Nw.i(t)}unsubscribeSizeChange(t){this.Nw._(t)}applyOptions(t){this.ia.vr(t)}options(){return{...p(this.ia.N()),barSpacing:this.ia.ml()}}sb(){this.nb.v()&&this.nb.p(this.getVisibleRange())}eb(){this.Qu.v()&&this.Qu.p(this.getVisibleLogicalRange())}rb(t){this.Nw.p(t.width,t.height)}}function ae(t){return function(t){if(f(t.handleScale)){const i=t.handleScale;t.handleScale={axisDoubleClickReset:{time:i,price:i},axisPressedMouseMove:{time:i,price:i},mouseWheel:i,pinch:i}}else if(void 0!==t.handleScale){const{axisPressedMouseMove:i,axisDoubleClickReset:n}=t.handleScale;f(i)&&(t.handleScale.axisPressedMouseMove={time:i,price:i}),f(n)&&(t.handleScale.axisDoubleClickReset={time:n,price:n})}const i=t.handleScroll;f(i)&&(t.handleScroll={horzTouchDrag:i,vertTouchDrag:i,mouseWheel:i,pressedMouseMove:i})}(t),t}class le{constructor(t,i,n){this.hb=new Map,this.ab=new Map,this.lb=new o,this.ob=new o,this._b=new o,this.dd=new WeakMap,this.ub=new ms(i);const s=void 0===n?p(te()):_(p(te()),ae(n));this.cb=i,this.hv=new ts(t,s,i),this.hv.mw().i((t=>{this.lb.v()&&this.lb.p(this.fb(t()))}),this),this.hv.ww().i((t=>{this.ob.v()&&this.ob.p(this.fb(t()))}),this),this.hv.Ed().i((t=>{this._b.v()&&this._b.p(this.fb(t()))}),this);const e=this.hv.Qt();this.pb=new he(e,this.hv.bg(),this.cb)}remove(){this.hv.mw().u(this),this.hv.ww().u(this),this.hv.Ed().u(this),this.pb.m(),this.hv.m(),this.hb.clear(),this.ab.clear(),this.lb.m(),this.ob.m(),this._b.m(),this.ub.m()}resize(t,i,n){this.autoSizeActive()||this.hv.wg(t,i,n)}addCustomSeries(t,i={},n=0){const s=(t=>({type:"Custom",isBuiltIn:!1,defaultOptions:{...Os,...t.defaultOptions()},mb:Ns,wb:t}))(l(t));return this.gb(s,i,n)}addSeries(t,i={},n=0){return this.gb(t,i,n)}removeSeries(t){const i=h(this.hb.get(t)),n=this.ub.if(i);this.hv.Qt().if(i),this.Mb(n),this.hb.delete(t),this.ab.delete(i)}JM(t,i){this.Mb(this.ub.oM(t,i))}tb(t,i,n){this.Mb(this.ub.pM(t,i,n))}ib(t,i){const[n,s]=this.ub.wM(t,i);return 0!==n.length&&this.Mb(s),n}subscribeClick(t){this.lb.i(t)}unsubscribeClick(t){this.lb._(t)}subscribeCrosshairMove(t){this._b.i(t)}unsubscribeCrosshairMove(t){this._b._(t)}subscribeDblClick(t){this.ob.i(t)}unsubscribeDblClick(t){this.ob._(t)}priceScale(t,i=0){return new ie(this.hv,t,i)}timeScale(){return this.pb}applyOptions(t){this.hv.vr(ae(t))}options(){return this.hv.N()}takeScreenshot(t=!1,i=!1){let n,s;try{i||(n=this.hv.Qt().N().crosshair.mode,this.hv.vr({crosshair:{mode:2}})),s=this.hv.Tg(t)}finally{i||void 0===n||this.hv.Qt().vr({crosshair:{mode:n}})}return s}addPane(t=!1){const i=this.hv.Qt().uf();return i.j_(t),this.bb(i)}removePane(t){this.hv.Qt().Ad(t)}swapPanes(t,i){this.hv.Qt().Ld(t,i)}autoSizeActive(){return this.hv.Cg()}chartElement(){return this.hv.gv()}panes(){return this.hv.Qt().Gn().map((t=>this.bb(t)))}paneSize(t=0){const i=this.hv.Ag(t);return{height:i.height,width:i.width}}setCrosshairPosition(t,i,n){const s=this.hb.get(n);if(void 0===s)return;const e=this.hv.Qt().Ks(s);null!==e&&this.hv.Qt().Gd(t,i,e)}clearCrosshairPosition(){this.hv.Qt().Zd(!0)}horzBehaviour(){return this.cb}gb(i,n={},s=0){r(void 0!==i.mb),function(t){if(void 0===t||"custom"===t.type)return;const i=t;void 0!==i.minMove&&void 0===i.precision&&(i.precision=Ui(i.minMove))}(n.priceFormat),"Candlestick"===i.type&&function(t){void 0!==t.borderColor&&(t.borderUpColor=t.borderColor,t.borderDownColor=t.borderColor),void 0!==t.wickColor&&(t.wickUpColor=t.wickColor,t.wickDownColor=t.wickColor)}(n);const e=_(p(t),p(i.defaultOptions),n),h=i.mb,a=new Kt(this.hv.Qt(),i.type,e,h,i.wb);this.hv.Qt().Qd(a,s);const l=new re(a,this,this,this,this.cb,(t=>this.bb(t)));return this.hb.set(l,a),this.ab.set(a,l),l}Mb(t){const i=this.hv.Qt();for(const i of t.Y_.keys())i.Ia();i.Xd(t.Bt.Dc,t.Bt.SM,t.Bt.xM),t.Y_.forEach(((t,i)=>i.ht(t.ue,t.bM))),i.Bt().dc(),i.zc()}Sb(t){return h(this.ab.get(t))}xb(t){return void 0!==t&&this.ab.has(t)?this.Sb(t):void 0}fb(t){const i=new Map;t.Qg.forEach(((t,n)=>{const s=n.bh(),e=Ys(s)(t);if("Custom"!==s)r(ss(e));else{const t=n.cl();r(!t||!1===t(e))}i.set(this.Sb(n),e)}));const n=this.xb(t.jg),s=void 0===t.Yg?void 0:{type:t.Yg.ds,sourceKind:t.Yg.Kg,objectKind:t.Yg.Gg,series:this.xb(t.Yg.Y_),objectId:t.Yg.Zg,paneIndex:t.Yg.Xg};return{time:t.Qr,logical:t.$n,point:t.Jg,paneIndex:t.Xg,hoveredInfo:s,hoveredSeries:n,hoveredObjectId:t.qg,seriesData:i,sourceEvent:t.tM}}bb(t){let i=this.dd.get(t);return i||(i=new ne(this.hv,(t=>this.Sb(t)),t,this),this.dd.set(t,i)),i}}function oe(t){if(d(t)){const i=document.getElementById(t);return r(null!==i,`Cannot find element in DOM with id=${t}`),i}return t}function _e(t,i,n){const s=oe(t),e=new le(s,i,n);return i.setOptions(e.options()),e}function ue(t,i,n,s){return Math.hypot(n-t,s-i)}function ce(t,i,n,s,e,r,h,a=0){if(0===i.length||s.from>=i.length||s.to<=0)return;const{context:l,horizontalPixelRatio:o,verticalPixelRatio:_}=t,u=i[s.from];let c=r(t,u),d=u;if(s.to-s.from<2){const i=e/2;l.beginPath();const n={_t:u._t-i,ut:u.ut},s={_t:u._t+i,ut:u.ut};l.moveTo(n._t*o,n.ut*_),l.lineTo(s._t*o,s.ut*_),h(t,c,n,s)}else{const e=a>0;let f=0;const p=(i,n)=>{if(h(t,c,d,n),l.beginPath(),c=i,d=n,e){const t=f%a;l.lineDashOffset=t,f=t}};let v=d;l.beginPath(),l.moveTo(u._t*o,u.ut*_);for(let h=s.from+1;h<s.to;++h){v=i[h];const s=v._t*o,a=v.ut*_,u=r(t,v);switch(n){case 0:if(l.lineTo(s,a),e){const t=i[h-1],n=t._t*o,e=t.ut*_;f+=ue(n,e,s,a)}break;case 1:{const t=i[h-1],n=t.ut*_;l.lineTo(s,n),e&&(f+=Math.abs(v._t-t._t)*o),u!==c&&(p(u,v),l.lineTo(s,n)),l.lineTo(s,a),e&&(f+=Math.abs(v.ut-t.ut)*_);break}case 2:{const[t,n]=ve(i,h-1,h),r=t._t*o,u=t.ut*_,c=n._t*o,d=n.ut*_;if(l.bezierCurveTo(r,u,c,d,s,a),e){const t=i[h-1],n=t._t*o,e=t.ut*_,l=ue(n,e,s,a),p=ue(n,e,r,u)+ue(r,u,c,d)+ue(c,d,s,a);f+=(l+p)/2}break}}1!==n&&u!==c&&(p(u,v),l.moveTo(s,a))}(d!==v||d===v&&1===n)&&h(t,c,d,v),e&&(l.lineDashOffset=0)}}const de=6;function fe(t,i){return{_t:t._t-i._t,ut:t.ut-i.ut}}function pe(t,i){return{_t:t._t/i,ut:t.ut/i}}function ve(t,i,n){const s=Math.max(0,i-1),e=Math.min(t.length-1,n+1);var r,h;return[(r=t[i],h=pe(fe(t[n],t[s]),de),{_t:r._t+h._t,ut:r.ut+h.ut}),fe(t[n],pe(fe(t[e],t[i]),de))]}function me(t,i){const n=t.context;n.strokeStyle=i,n.stroke()}class we extends y{constructor(){super(...arguments),this.rt=null}ht(t){this.rt=t}et(t){if(null===this.rt)return;const{ot:i,lt:n,Cb:e,yb:r,ct:h,Gt:a,Pb:l}=this.rt;if(null===n)return;const o=t.context;o.lineCap="butt",o.lineWidth=h*t.verticalPixelRatio;const _=s(o,a);o.lineJoin="round";const u=this.kb.bind(this),c=function(t){return t.reduce(((t,i)=>t+i),0)}(_);void 0!==r&&ce(t,i,r,n,e,u,me,c),l&&function(t,i,n,s,e){if(s.to-s.from<=0)return;const{horizontalPixelRatio:r,verticalPixelRatio:h,context:a}=t;let l=null;const o=Math.max(1,Math.floor(r))%2/2,_=n*h+o;for(let n=s.to-1;n>=s.from;--n){const s=i[n];if(s){const i=e(t,s);i!==l&&(null!==l&&a.fill(),a.beginPath(),a.fillStyle=i,l=i);const n=Math.round(s._t*r)+o,u=s.ut*h;a.moveTo(n,u),a.arc(n,u,_,0,2*Math.PI)}}a.fill()}(t,i,l,n,u)}}class ge extends we{kb(t,i){return i.vt}}function Me(t,i,n,s,e){const r=1-e;return r*r*r*t+3*r*r*e*i+3*r*e*e*n+e*e*e*s}function be(t,i,n,s,e){if(2===n){const[n,r]=ve(s,e-1,e);return[Math.min(t._t,i._t,n._t,r._t),Math.max(t._t,i._t,n._t,r._t)]}return[Math.min(t._t,i._t),Math.max(t._t,i._t)]}function Se(t,i,n,s,e,r,h,a){switch(e){case 1:{const e=ys(t,i,n._t,n.ut,s._t,n.ut),r=ys(t,i,s._t,n.ut,s._t,s.ut),h=Math.min(e,r);return h<=a?h:null}case 2:{const[e,l]=ve(r,h-1,h),o=function(t,i,n){let s=Number.POSITIVE_INFINITY,e=n[0];for(let r=1;r<=12;r++){const h=r/12,a={_t:Me(n[0]._t,n[1]._t,n[2]._t,n[3]._t,h),ut:Me(n[0].ut,n[1].ut,n[2].ut,n[3].ut,h)};s=Math.min(s,ys(t,i,e._t,e.ut,a._t,a.ut)),e=a}return s}(t,i,[n,e,l,s]);return o<=a?o:null}default:{const e=ys(t,i,n._t,n.ut,s._t,s.ut);return e<=a?e:null}}}class xe extends Es{constructor(t,i){super(t,i,!0)}OM(t,i,n){i.Ic(this.kM,m(this.TM)),t.Jo(this.kM,n,m(this.TM))}Tb(t,i){return{wt:t,gt:i,_t:NaN,ut:NaN}}zM(){const t=this.ae.Sa();this.kM=this.ae.Ua().Eh().map((i=>{let n;if((i.Gr??1)>1){const t=i.Wt[1],s=i.Wt[2],e=i.Wt[3];n=Math.abs(t-e)>Math.abs(s-e)?t:s}else n=i.Wt[3];return this.Rb(i.$n,n,t)}))}}class Ce extends xe{EM(t,i){const n=this.ae.N();return function(t,i,n,s,e,r,h,a=0,l=0){if(null===i||i.from>=i.to||0===t.length)return null;const o=Math.max(r/2,h??0)+l;let _=Number.POSITIVE_INFINITY;if(void 0!==h){const e=h+l,r=bs(t,n-e,i.from,i.to),a=Ss(t,n+e,r,i.to);for(let i=r;i<a;i++){const e=t[i];if(!Cs(n,e._t,e._t,h+l))continue;const r=Math.hypot(n-e._t,s-e.ut);r<=h+l&&(_=Math.min(_,r))}}if(i.to-i.from<2){const e=t[i.from],r=Math.max(a/2,o),h=ys(n,s,e._t-r,e.ut,e._t+r,e.ut);return h<=o&&(_=Math.min(_,h)),Number.isFinite(_)?xs(_,2,"series-point"):null}let u=Number.POSITIVE_INFINITY;const c=bs(t,n-o,i.from,i.to),d=Ss(t,n+o,c,i.to),f=Math.max(i.from+1,c),p=Math.min(i.to,d+1);for(let i=f;i<p;i++){const r=t[i-1],h=t[i],[a,l]=be(r,h,e,t,i);if(!Cs(n,a,l,o))continue;const _=Se(n,s,r,h,e,t,i,o);null!==_&&(u=Math.min(u,_))}return Number.isFinite(_)?xs(_,2,"series-point"):Number.isFinite(u)?xs(u,1,"series-line"):null}(this.kM,this.TM,t,i,n.lineType,n.lineVisible?n.lineWidth:1,n.pointMarkersVisible?n.pointMarkersRadius||n.lineWidth/2+2:void 0,this.le.Bt().ml(),n.hitTestTolerance)}}class ye extends Ce{constructor(){super(...arguments),this.VM=new ge}Rb(t,i,n){return{...this.Tb(t,i),...n.Sh(t)}}NM(){const t=this.ae.N(),i={ot:this.kM,Gt:t.lineStyle,yb:t.lineVisible?t.lineType:void 0,ct:t.lineWidth,Pb:t.pointMarkersVisible?t.pointMarkersRadius||t.lineWidth/2+2:void 0,lt:this.TM,Cb:this.le.Bt().ml()};this.VM.ht(i)}}const Pe={type:"Line",isBuiltIn:!0,defaultOptions:{color:"#2196f3",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},mb:(t,i)=>new ye(t,i)};function ke(t,i){return t.weight>i.weight?t:i}class Te{constructor(){this.Db=new o,this.Ib=function(t){let i=!1;return function(...n){i||(i=!0,queueMicrotask((()=>{t(...n),i=!1})))}}((()=>this.Db.p(this.Vb))),this.Vb=0}Eb(){return this.Db}m(){this.Db.m()}options(){return this.yn}setOptions(t){this.yn=t}preprocessData(t){}updateFormatter(t){this.yn&&(this.yn.localization=t)}createConverterToInternalObj(t){return this.Ib(),t=>(t>this.Vb&&(this.Vb=t),t)}key(t){return t}cacheKey(t){return t}convertHorzItemToInternal(t){return t}formatHorzItem(t){return this.Bb(t)}formatTickmark(t){return this.Bb(t.time)}maxTickMarkWeight(t){return t.reduce(ke,t[0]).weight}fillWeightsForPoints(t,i){for(let s=i;s<t.length;++s)t[s].timeWeight=(n=t[s].time)%120==0?10:n%60==0?9:n%36==0?8:n%12==0?7:n%6==0?6:n%3==0?5:n%1==0?4:0;var n;this.Vb=t[t.length-1].time,this.Ib()}Bb(t){if(this.yn.localization?.timeFormatter)return this.yn.localization.timeFormatter(t);if(t<12)return`${t}M`;const i=Math.floor(t/12),n=t%12;return 0===n?`${i}Y`:`${i}Y${n}M`}}const Re={yieldCurve:{baseResolution:1,minimumTimeRange:120,startTimeRange:0},timeScale:{ignoreWhitespaceIndices:!0},leftPriceScale:{visible:!0},rightPriceScale:{visible:!1},localization:{priceFormatter:t=>t.toFixed(3)+"%"}},De={lastValueVisible:!1,priceLineVisible:!1};class Ie extends le{constructor(t,i){const n=_(Re,i||{}),s=new Te;super(t,s,n),s.setOptions(this.options()),this._initWhitespaceSeries()}addSeries(t,i={},n=0){if(t.isBuiltIn&&!1===["Area","Line"].includes(t.type))throw new Error("Yield curve only support Area and Line series");const s={...De,...i};return super.addSeries(t,s,n)}_initWhitespaceSeries(){const t=this.horzBehaviour(),i=this.addSeries(Pe);let n;function s(s){const e=function(t,i){return{me:Math.max(0,t.startTimeRange),we:Math.max(0,t.minimumTimeRange,i||0),Ab:Math.max(1,t.baseResolution)}}(t.options().yieldCurve,s),r=(({me:t,we:i,Ab:n})=>`${t}~${i}~${n}`)(e);r!==n&&(n=r,i.setData(function({me:t,we:i,Ab:n}){return Array.from({length:Math.floor((i-t)/n)+1},((i,s)=>({time:t+s*n})))}(e)))}s(0),t.Eb().i(s)}}function Ve(t,i){return t.weight>i.weight?t:i}class Ee{options(){return this.yn}setOptions(t){this.yn=t}preprocessData(t){}updateFormatter(t){this.yn&&(this.yn.localization=t)}createConverterToInternalObj(t){return t=>t}key(t){return t}cacheKey(t){return t}convertHorzItemToInternal(t){return t}formatHorzItem(t){return t.toFixed(this.Ds())}formatTickmark(t,i){return t.time.toFixed(this.Ds())}maxTickMarkWeight(t){return t.reduce(Ve,t[0]).weight}fillWeightsForPoints(t,i){for(let s=i;s<t.length;++s)t[s].timeWeight=(n=t[s].time)===100*Math.ceil(n/100)?8:n===50*Math.ceil(n/50)?7:n===25*Math.ceil(n/25)?6:n===10*Math.ceil(n/10)?5:n===5*Math.ceil(n/5)?4:n===Math.ceil(n)?3:2*n===Math.ceil(2*n)?1:0;var n}Ds(){return this.yn.localization.precision}}function Be(t,i,n,s,e){const{context:r,horizontalPixelRatio:h,verticalPixelRatio:a}=i;r.lineTo(e._t*h,t*a),r.lineTo(s._t*h,t*a),r.closePath(),r.fillStyle=n,r.fill()}class Ae extends y{constructor(){super(...arguments),this.rt=null}ht(t){this.rt=t}et(t){if(null===this.rt)return;const{ot:i,lt:n,Cb:e,ct:r,Gt:h,yb:a}=this.rt,l=this.rt.zb??(this.rt.Lb?0:t.mediaSize.height);if(null===n)return;const o=t.context;o.lineCap="butt",o.lineJoin="round",o.lineWidth=r,s(o,h),o.lineWidth=1,ce(t,i,a,n,e,this.Ob.bind(this),Be.bind(null,l))}}class ze{Nb(t,i){const n=this.Fb,{Wb:s,Hb:e,Ub:r,$b:h,zb:a,jb:l,qb:o}=i;if(void 0===this.Yb||void 0===n||n.Wb!==s||n.Hb!==e||n.Ub!==r||n.$b!==h||n.zb!==a||n.jb!==l||n.qb!==o){const{verticalPixelRatio:n}=t,_=a||l>0?n:1,u=l*_,c=o===t.bitmapSize.height?o:o*_,d=(a??0)*_,f=t.context.createLinearGradient(0,u,0,c);if(f.addColorStop(0,s),null!=a){const t=Jt((d-u)/(c-u),0,1);f.addColorStop(t,e),f.addColorStop(t,r)}f.addColorStop(1,h),this.Yb=f,this.Fb=i}return this.Yb}}class Le extends Ae{constructor(){super(...arguments),this.Kb=new ze}Ob(t,i){const n=this.rt;return this.Kb.Nb(t,{Wb:i.dh,Hb:i.fh,Ub:i.ph,$b:i.mh,zb:n.zb,jb:n.jb??0,qb:n.qb??t.bitmapSize.height})}}class Oe extends we{constructor(){super(...arguments),this.Gb=new ze}kb(t,i){const n=this.rt;return this.Gb.Nb(t,{Wb:i._h,Hb:i._h,Ub:i.uh,$b:i.uh,zb:n.zb,jb:n.jb??0,qb:n.qb??t.bitmapSize.height})}}class Ne{constructor(t,i,n,s){this.Zb=t,this.Xb=i,this.Jb=n,this.Qb=s}st(t,i,n){this.Zb.st(t,i,n),!this.Jb()||i&&this.Qb()||this.Xb.st(t,i,n)}}class Fe{constructor(t,i){this.Xb=t,this.tS=i}Tt(){return this.tS()?this.Xb:null}}class We extends Ce{constructor(t,i){super(t,i),this.iS=new Le,this.nS=new Oe,this.sS=new Fe(this.nS,(()=>this.Jb())),this.eS=[this],this.rS=[this.sS],this.hS={Za:this.eS,qa:this.rS},this.VM=new Ne(this.iS,this.nS,(()=>this.Jb()),(()=>this.le.N().hoveredSeriesOnTop))}Ga(){return this.hS}Rb(t,i,n){return{...this.Tb(t,i),...n.Sh(t)}}NM(){const t=this.ae.zt();if(null===t)return;const i=this.ae.N(),n=this.ae.Ft().Nt(i.baseValue.price,t.Wt),s=this.le.Bt().ml();if(null===this.TM||0===this.kM.length)return;let e,r;if(i.relativeGradient){e=this.kM[this.TM.from].ut,r=this.kM[this.TM.from].ut;for(let t=this.TM.from;t<this.TM.to;t++){const i=this.kM[t];i.ut<e&&(e=i.ut),i.ut>r&&(r=i.ut)}}this.iS.ht({ot:this.kM,ct:i.lineWidth,Gt:i.lineStyle,yb:i.lineType,zb:n,jb:e,qb:r,Lb:!1,lt:this.TM,Cb:s}),this.nS.ht({ot:this.kM,ct:i.lineWidth,Gt:i.lineStyle,yb:i.lineVisible?i.lineType:void 0,Pb:i.pointMarkersVisible?i.pointMarkersRadius||i.lineWidth/2+2:void 0,zb:n,jb:e,qb:r,lt:this.TM,Cb:s})}Jb(){return this.ae.It()&&null!==this.TM&&this.aS()}aS(){const t=this.ae.N();return t.lineVisible||t.pointMarkersVisible}}const He={type:"Baseline",isBuiltIn:!0,defaultOptions:{baseValue:{type:"price",price:0},relativeGradient:!1,topFillColor1:"rgba(38, 166, 154, 0.28)",topFillColor2:"rgba(38, 166, 154, 0.05)",topLineColor:"rgba(38, 166, 154, 1)",bottomFillColor1:"rgba(239, 83, 80, 0.05)",bottomFillColor2:"rgba(239, 83, 80, 0.28)",bottomLineColor:"rgba(239, 83, 80, 1)",lineWidth:3,lineStyle:0,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},mb:(t,i)=>new We(t,i)};class Ue extends Ae{constructor(){super(...arguments),this.Kb=new ze}Ob(t,i){return this.Kb.Nb(t,{Wb:i.ah,Hb:"",Ub:"",$b:i.oh,jb:this.rt?.jb??0,qb:t.bitmapSize.height})}}class $e extends Ce{constructor(t,i){super(t,i),this.lS=new Ue,this.Xb=new ge,this.sS=new Fe(this.Xb,(()=>this.Jb())),this.eS=[this],this.rS=[this.sS],this.hS={Za:this.eS,qa:this.rS},this.VM=new Ne(this.lS,this.Xb,(()=>this.Jb()),(()=>this.le.N().hoveredSeriesOnTop))}Ga(){return this.hS}Rb(t,i,n){return{...this.Tb(t,i),...n.Sh(t)}}NM(){const t=this.ae.N();if(null===this.TM||0===this.kM.length)return;let i;if(t.relativeGradient){i=this.kM[this.TM.from].ut;for(let t=this.TM.from;t<this.TM.to;t++){const n=this.kM[t];n.ut<i&&(i=n.ut)}}this.lS.ht({yb:t.lineType,ot:this.kM,Gt:t.lineStyle,ct:t.lineWidth,zb:null,jb:i,Lb:t.invertFilledArea,lt:this.TM,Cb:this.le.Bt().ml()}),this.Xb.ht({yb:t.lineVisible?t.lineType:void 0,ot:this.kM,Gt:t.lineStyle,ct:t.lineWidth,lt:this.TM,Cb:this.le.Bt().ml(),Pb:t.pointMarkersVisible?t.pointMarkersRadius||t.lineWidth/2+2:void 0})}Jb(){return this.ae.It()&&null!==this.TM&&this.aS()}aS(){const t=this.ae.N();return t.lineVisible||t.pointMarkersVisible}}const je={type:"Area",isBuiltIn:!0,defaultOptions:{topColor:"rgba( 46, 220, 135, 0.4)",bottomColor:"rgba( 40, 221, 100, 0)",invertFilledArea:!1,relativeGradient:!1,lineColor:"#33D778",lineStyle:0,lineWidth:3,lineType:0,lineVisible:!0,crosshairMarkerVisible:!0,crosshairMarkerRadius:4,crosshairMarkerBorderColor:"",crosshairMarkerBorderWidth:2,crosshairMarkerBackgroundColor:"",lastPriceAnimation:0,pointMarkersVisible:!1},mb:(t,i)=>new $e(t,i)};class qe extends y{constructor(){super(...arguments),this.qt=null,this.oS=0,this._S=0}ht(t){this.qt=t}et({context:t,horizontalPixelRatio:i,verticalPixelRatio:n}){if(null===this.qt||0===this.qt.Un.length||null===this.qt.lt)return;if(this.oS=this.uS(i),this.oS>=2){Math.max(1,Math.floor(i))%2!=this.oS%2&&this.oS--}this._S=this.qt.cS?Math.min(this.oS,Math.floor(i)):this.oS;let s=null;const e=this._S<=this.oS&&this.qt.ml>=Math.floor(1.5*i);for(let r=this.qt.lt.from;r<this.qt.lt.to;++r){const h=this.qt.Un[r];s!==h.sh&&(t.fillStyle=h.sh,s=h.sh);const a=Math.floor(.5*this._S),l=Math.round(h._t*i),o=l-a,_=this._S,u=o+_-1,c=Math.min(h.n_,h.s_),d=Math.max(h.n_,h.s_),f=Math.round(c*n)-a,p=Math.round(d*n)+a,v=Math.max(p-f,this._S);t.fillRect(o,f,_,v);const m=Math.ceil(1.5*this.oS);if(e){if(this.qt.dS){const i=l-m;let s=Math.max(f,Math.round(h.i_*n)-a),e=s+_-1;e>f+v-1&&(e=f+v-1,s=e-_+1),t.fillRect(i,s,o-i,e-s+1)}const i=l+m;let s=Math.max(f,Math.round(h.e_*n)-a),e=s+_-1;e>f+v-1&&(e=f+v-1,s=e-_+1),t.fillRect(u+1,s,i-u,e-s+1)}}}uS(t){const i=Math.floor(t);return Math.max(i,Math.floor(function(t,i){return Math.floor(.3*t*i)}(a(this.qt).ml,t)))}}class Ye extends Es{constructor(t,i){super(t,i,!1)}EM(t,i){return Rs(this.kM,this.TM,t,i,this.le.Bt().ml(),this.ae.N().hitTestTolerance,((t,i)=>{i[0]=t.n_,i[1]=t.s_}))}OM(t,i,n){i.Ic(this.kM,m(this.TM)),t.t_(this.kM,n,m(this.TM))}fS(t,i,n){return{wt:t,jr:i.Wt[0],qr:i.Wt[1],Yr:i.Wt[2],Kr:i.Wt[3],_t:NaN,i_:NaN,n_:NaN,s_:NaN,e_:NaN}}zM(){const t=this.ae.Sa();this.kM=this.ae.Ua().Eh().map((i=>this.Rb(i.$n,i,t)))}}class Ke extends Ye{constructor(){super(...arguments),this.VM=new qe}Rb(t,i,n){return{...this.fS(t,i,n),...n.Sh(t)}}NM(){const t=this.ae.N();this.VM.ht({Un:this.kM,ml:this.le.Bt().ml(),dS:t.openVisible,cS:t.thinBars,lt:this.TM})}}const Ge={type:"Bar",isBuiltIn:!0,defaultOptions:{upColor:"#26a69a",downColor:"#ef5350",openVisible:!0,thinBars:!0},mb:(t,i)=>new Ke(t,i)};class Ze extends y{constructor(){super(...arguments),this.qt=null,this.oS=0}ht(t){this.qt=t}et(t){if(null===this.qt||0===this.qt.Un.length||null===this.qt.lt)return;const{horizontalPixelRatio:i}=t;if(this.oS=function(t,i){if(t>=2.5&&t<=4)return Math.floor(3*i);const n=1-.2*Math.atan(Math.max(4,t)-4)/(.5*Math.PI),s=Math.floor(t*n*i),e=Math.floor(t*i),r=Math.min(s,e);return Math.max(Math.floor(i),r)}(this.qt.ml,i),this.oS>=2){Math.floor(i)%2!=this.oS%2&&this.oS--}const n=this.qt.Un;this.qt.pS&&this.vS(t,n,this.qt.lt),this.qt.Mi&&this.Vm(t,n,this.qt.lt);const s=this.mS(i);(!this.qt.Mi||this.oS>2*s)&&this.wS(t,n,this.qt.lt)}vS(t,i,n){if(null===this.qt)return;const{context:s,horizontalPixelRatio:e,verticalPixelRatio:r}=t;let h="",a=Math.min(Math.floor(e),Math.floor(this.qt.ml*e));a=Math.max(Math.floor(e),Math.min(a,this.oS));const l=Math.floor(.5*a);let o=null;for(let t=n.from;t<n.to;t++){const n=i[t];n.rh!==h&&(s.fillStyle=n.rh,h=n.rh);const _=Math.round(Math.min(n.i_,n.e_)*r),u=Math.round(Math.max(n.i_,n.e_)*r),c=Math.round(n.n_*r),d=Math.round(n.s_*r);let f=Math.round(e*n._t)-l;const p=f+a-1;null!==o&&(f=Math.max(o+1,f),f=Math.min(f,p));const v=p-f+1;s.fillRect(f,c,v,_-c),s.fillRect(f,u+1,v,d-u),o=p}}mS(t){let i=Math.floor(1*t);this.oS<=2*i&&(i=Math.floor(.5*(this.oS-1)));const n=Math.max(Math.floor(t),i);return this.oS<=2*n?Math.max(Math.floor(t),Math.floor(1*t)):n}Vm(t,i,n){if(null===this.qt)return;const{context:s,horizontalPixelRatio:e,verticalPixelRatio:r}=t;let h="";const a=this.mS(e);let l=null;for(let t=n.from;t<n.to;t++){const n=i[t];n.eh!==h&&(s.fillStyle=n.eh,h=n.eh);let o=Math.round(n._t*e)-Math.floor(.5*this.oS);const _=o+this.oS-1,u=Math.round(Math.min(n.i_,n.e_)*r),c=Math.round(Math.max(n.i_,n.e_)*r);if(null!==l&&(o=Math.max(l+1,o),o=Math.min(o,_)),this.qt.ml*e>2*a)V(s,o,u,_-o+1,c-u+1,a);else{const t=_-o+1;s.fillRect(o,u,t,c-u+1)}l=_}}wS(t,i,n){if(null===this.qt)return;const{context:s,horizontalPixelRatio:e,verticalPixelRatio:r}=t;let h="";const a=this.mS(e);for(let t=n.from;t<n.to;t++){const n=i[t];let l=Math.round(Math.min(n.i_,n.e_)*r),o=Math.round(Math.max(n.i_,n.e_)*r),_=Math.round(n._t*e)-Math.floor(.5*this.oS),u=_+this.oS-1;if(n.sh!==h){const t=n.sh;s.fillStyle=t,h=t}this.qt.Mi&&(_+=a,l+=a,u-=a,o-=a),l>o||s.fillRect(_,l,u-_+1,o-l+1)}}}class Xe extends Ye{constructor(){super(...arguments),this.VM=new Ze}Rb(t,i,n){return{...this.fS(t,i,n),...n.Sh(t)}}NM(){const t=this.ae.N();this.VM.ht({Un:this.kM,ml:this.le.Bt().ml(),pS:t.wickVisible,Mi:t.borderVisible,lt:this.TM})}}const Je={type:"Candlestick",isBuiltIn:!0,defaultOptions:{upColor:"#26a69a",downColor:"#ef5350",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350"},mb:(t,i)=>new Xe(t,i)};class Qe extends y{constructor(){super(...arguments),this.qt=null,this.gS=[]}ht(t){this.qt=t,this.gS=[]}et({context:t,horizontalPixelRatio:i,verticalPixelRatio:n}){if(null===this.qt||0===this.qt.ot.length||null===this.qt.lt)return;this.gS.length||this.MS(i);const s=Math.max(1,Math.floor(n)),e=Math.round(this.qt.bS*n)-Math.floor(s/2),r=e+s;for(let i=this.qt.lt.from;i<this.qt.lt.to;i++){const h=this.qt.ot[i],a=this.gS[i-this.qt.lt.from],l=Math.round(h.ut*n);let o,_;t.fillStyle=h.sh,l<=e?(o=l,_=r):(o=e,_=l-Math.floor(s/2)+s),t.fillRect(a.Na,o,a.bi-a.Na+1,_-o)}}MS(t){if(null===this.qt||0===this.qt.ot.length||null===this.qt.lt)return void(this.gS=[]);const i=Math.ceil(this.qt.ml*t)<=1?0:Math.max(1,Math.floor(t)),n=Math.round(this.qt.ml*t)-i;this.gS=new Array(this.qt.lt.to-this.qt.lt.from);for(let i=this.qt.lt.from;i<this.qt.lt.to;i++){const s=this.qt.ot[i],e=Math.round(s._t*t);let r,h;if(n%2){const t=(n-1)/2;r=e-t,h=e+t}else{const t=n/2;r=e-t,h=e+t-1}this.gS[i-this.qt.lt.from]={Na:r,bi:h,SS:e,ce:s._t*t,wt:s.wt}}for(let t=this.qt.lt.from+1;t<this.qt.lt.to;t++){const n=this.gS[t-this.qt.lt.from],s=this.gS[t-this.qt.lt.from-1];n.wt===s.wt+1&&(n.Na-s.bi!==i+1&&(s.SS>s.ce?s.bi=n.Na-i-1:n.Na=s.bi+i+1))}let s=Math.ceil(this.qt.ml*t);for(let t=this.qt.lt.from;t<this.qt.lt.to;t++){const i=this.gS[t-this.qt.lt.from];i.bi<i.Na&&(i.bi=i.Na);const n=i.bi-i.Na+1;s=Math.min(n,s)}if(i>0&&s<4)for(let t=this.qt.lt.from;t<this.qt.lt.to;t++){const i=this.gS[t-this.qt.lt.from];i.bi-i.Na+1>s&&(i.SS>i.ce?i.bi-=1:i.Na+=1)}}}class tr extends xe{constructor(){super(...arguments),this.VM=new Qe}EM(t,i){const n=this.ae.Ft().Nt(this.ae.N().base,a(this.ae.zt()).Wt);return null===n?null:Rs(this.kM,this.TM,t,i,this.le.Bt().ml(),this.ae.N().hitTestTolerance,((t,i)=>{i[0]=t.ut,i[1]=n}))}Rb(t,i,n){return{...this.Tb(t,i),...n.Sh(t)}}NM(){const t={ot:this.kM,ml:this.le.Bt().ml(),lt:this.TM,bS:this.ae.Ft().Nt(this.ae.N().base,a(this.ae.zt()).Wt)};this.VM.ht(t)}}const ir={type:"Histogram",isBuiltIn:!0,defaultOptions:{color:"#26a69a",base:0},mb:(t,i)=>new tr(t,i)};class nr{constructor(t,i){this.yt=t,this.xS=i,this.CS()}detach(){this.yt.detachPrimitive(this.xS)}getPane(){return this.yt}applyOptions(t){this.xS.vr?.(t)}CS(){this.yt.attachPrimitive(this.xS)}}const sr={visible:!0,horzAlign:"center",vertAlign:"center",lines:[]},er={color:"rgba(0, 0, 0, 0.5)",fontSize:48,fontFamily:w,fontStyle:"",text:""};class rr{constructor(t){this.yS=new Map,this.qt=t}draw(t){t.useMediaCoordinateSpace((t=>{if(!this.qt.visible)return;const{context:i,mediaSize:n}=t;let s=0;for(const t of this.qt.lines){if(0===t.text.length)continue;i.font=t.k;const e=this.PS(i,t.text);e>n.width?t.Uc=n.width/e:t.Uc=1,s+=t.lineHeight*t.Uc}let e=0;switch(this.qt.vertAlign){case"top":e=0;break;case"center":e=Math.max((n.height-s)/2,0);break;case"bottom":e=Math.max(n.height-s,0)}for(const t of this.qt.lines){i.save(),i.fillStyle=t.color;let s=0;switch(this.qt.horzAlign){case"left":i.textAlign="left",s=t.lineHeight/2;break;case"center":i.textAlign="center",s=n.width/2;break;case"right":i.textAlign="right",s=n.width-1-t.lineHeight/2}i.translate(s,e),i.textBaseline="top",i.font=t.k,i.scale(t.Uc,t.Uc),i.fillText(t.text,0,t.kS),i.restore(),e+=t.lineHeight*t.Uc}}))}PS(t,i){const n=this.TS(t.font);let s=n.get(i);return void 0===s&&(s=t.measureText(i).width,n.set(i,s)),s}TS(t){let i=this.yS.get(t);return void 0===i&&(i=new Map,this.yS.set(t,i)),i}}class hr{constructor(t){this.yn=lr(t)}Pt(t){this.yn=lr(t)}renderer(){return new rr(this.yn)}}function ar(t){return{...t,k:g(t.fontSize,t.fontFamily,t.fontStyle),lineHeight:t.lineHeight||1.2*t.fontSize,kS:0,Uc:0}}function lr(t){return{...t,lines:t.lines.map(ar)}}function or(t){return{...er,...t}}function _r(t){return{...sr,...t,lines:t.lines?.map(or)??[]}}class ur{constructor(t){this.yn=_r(t),this.RS=[new hr(this.yn)]}updateAllViews(){this.RS.forEach((t=>t.Pt(this.yn)))}paneViews(){return this.RS}attached({requestUpdate:t}){this.DS=t}detached(){this.DS=void 0}vr(t){this.yn=_r({...this.yn,...t}),this.DS&&this.DS()}}const cr={alpha:1,padding:0};class dr{constructor(t){this.qt=t}draw(t){t.useMediaCoordinateSpace((t=>{const i=t.context,n=this.IS(this.qt,t.mediaSize);n&&this.qt.VS&&(i.globalAlpha=this.qt.alpha??1,i.drawImage(this.qt.VS,n._t,n.ut,n.nn,n.$t))}))}IS(t,i){const{maxHeight:n,maxWidth:s,ES:e,BS:r,padding:h}=t,a=Math.round(i.width/2),l=Math.round(i.height/2),o=h??0;let _=i.width-2*o,u=i.height-2*o;n&&(u=Math.min(u,n)),s&&(_=Math.min(_,s));const c=_/r,d=u/e,f=Math.min(c,d),p=r*f,v=e*f;return{_t:a-.5*p,ut:l-.5*v,$t:v,nn:p}}}class fr{constructor(t){this.AS=null,this.zS=0,this.LS=0,this.yn=t,this.M=pr(this.yn,this.AS,this.zS,this.LS)}OS(t){void 0!==t.NS&&(this.zS=t.NS),void 0!==t.FS&&(this.LS=t.FS),void 0!==t.WS&&(this.AS=t.WS),this.Pt()}HS(t){this.yn=t,this.Pt()}zOrder(){return"bottom"}Pt(){this.M=pr(this.yn,this.AS,this.zS,this.LS)}renderer(){return new dr(this.M)}}function pr(t,i,n,s){return{...t,VS:i,BS:n,ES:s}}function vr(t){return{...cr,...t}}class mr{constructor(t,i){this.US=null,this.$S=t,this.yn=vr(i),this.RS=[new fr(this.yn)]}updateAllViews(){this.RS.forEach((t=>t.Pt()))}paneViews(){return this.RS}attached(t){const{requestUpdate:i}=t;this.jS=i,this.US=new Image,this.US.onload=()=>{const t=this.US?.naturalHeight??1,i=this.US?.naturalWidth??1;this.RS.forEach((n=>n.OS({FS:t,NS:i,WS:this.US}))),this.jS&&this.jS()},this.US.src=this.$S}detached(){this.jS=void 0,this.US=null}vr(t){this.yn=vr({...this.yn,...t}),this.qS(),this.DS&&this.DS()}DS(){this.jS&&this.jS()}qS(){this.RS.forEach((t=>t.HS(this.yn)))}}class wr{constructor(t,i){this.ae=t,this.Jh=i,this.CS()}detach(){this.ae.detachPrimitive(this.Jh)}getSeries(){return this.ae}applyOptions(t){this.Jh&&this.Jh.vr&&this.Jh.vr(t)}CS(){this.ae.attachPrimitive(this.Jh)}}const gr={autoScale:!0,zOrder:"normal"};function Mr(t,i){return ti(Math.min(Math.max(t,12),30)*i)}function br(t,i){const n="circle"===t?.8:"square"===t?.7:1;return ti(Math.max(i,12)*n)}function Sr(t){return function(t){const i=Math.ceil(t);return i%2!=0?i-1:i}(Mr(t,1))}function xr(t){return Math.max(Mr(t,.1),3)}function Cr(t,i,n){return i?t:n?Math.ceil(t/2):0}function yr(t,i,n,s){const e=(br("arrowUp",s)-1)/2*n.YS,r=(ti(s/2)-1)/2*n.YS;i.beginPath(),t?(i.moveTo(n._t-e,n.ut),i.lineTo(n._t,n.ut-e),i.lineTo(n._t+e,n.ut),i.lineTo(n._t+r,n.ut),i.lineTo(n._t+r,n.ut+e),i.lineTo(n._t-r,n.ut+e),i.lineTo(n._t-r,n.ut)):(i.moveTo(n._t-e,n.ut),i.lineTo(n._t,n.ut+e),i.lineTo(n._t+e,n.ut),i.lineTo(n._t+r,n.ut),i.lineTo(n._t+r,n.ut-e),i.lineTo(n._t-r,n.ut-e),i.lineTo(n._t-r,n.ut)),i.fill()}function Pr(t,i,n,s,e,r){const h=(br("arrowUp",s)-1)/2,a=(ti(s/2)-1)/2;if(e>=i-a-2&&e<=i+a+2&&r>=(t?n:n-h)-2&&r<=(t?n+h:n)+2)return!0;return(()=>{if(e<i-h-3||e>i+h+3||r<(t?n-h-3:n)||r>(t?n:n+h+3))return!1;const s=Math.abs(e-i);return Math.abs(r-n)+3>=s/2})()}class kr{constructor(){this.qt=null,this.$s=new it,this.F=-1,this.W="",this.hm="",this.KS="normal"}ht(t){this.qt=t}js(t,i,n){this.F===t&&this.W===i||(this.F=t,this.W=i,this.hm=g(t,i),this.$s.Os()),this.KS=n}Qs(t,i){if(null===this.qt||null===this.qt.lt)return null;for(let n=this.qt.lt.from;n<this.qt.lt.to;n++){const s=this.qt.ot[n];if(s&&Rr(s,t,i))return{zOrder:"normal",externalId:s.te??"",itemType:"marker"}}return null}draw(t){"aboveSeries"!==this.KS&&t.useBitmapCoordinateSpace((t=>{this.et(t)}))}drawBackground(t){"aboveSeries"===this.KS&&t.useBitmapCoordinateSpace((t=>{this.et(t)}))}et({context:t,horizontalPixelRatio:i,verticalPixelRatio:n}){if(null!==this.qt&&null!==this.qt.lt){t.textBaseline="middle",t.font=this.hm;for(let s=this.qt.lt.from;s<this.qt.lt.to;s++){const e=this.qt.ot[s];void 0!==e.ri&&(e.ri.nn=this.$s.Ii(t,e.ri.GS),e.ri.$t=this.F,e.ri._t=e._t-e.ri.nn/2),Tr(e,t,i,n)}}}}function Tr(t,i,n,s){i.fillStyle=t.R,void 0!==t.ri&&function(t,i,n,s,e,r){t.save(),t.scale(e,r),t.fillText(i,n,s),t.restore()}(i,t.ri.GS,t.ri._t,t.ri.ut,n,s),function(t,i,n){if(0===t.Th)return;switch(t.ZS){case"arrowDown":return void yr(!1,i,n,t.Th);case"arrowUp":return void yr(!0,i,n,t.Th);case"circle":return void function(t,i,n){const s=(br("circle",n)-1)/2;t.beginPath(),t.arc(i._t,i.ut,s*i.YS,0,2*Math.PI,!1),t.fill()}(i,n,t.Th);case"square":return void function(t,i,n){const s=br("square",n),e=(s-1)*i.YS/2,r=i._t-e,h=i.ut-e;t.fillRect(r,h,s*i.YS,s*i.YS)}(i,n,t.Th)}t.ZS}(t,i,function(t,i,n){const s=Math.max(1,Math.floor(i))%2/2;return{_t:Math.round(t._t*i)+s,ut:t.ut*n,YS:i}}(t,n,s))}function Rr(t,i,n){return!(void 0===t.ri||!function(t,i,n,s,e,r){const h=s/2;return e>=t&&e<=t+n&&r>=i-h&&r<=i+h}(t.ri._t,t.ri.ut,t.ri.nn,t.ri.$t,i,n))||function(t,i,n){if(0===t.Th)return!1;switch(t.ZS){case"arrowDown":return Pr(!0,t._t,t.ut,t.Th,i,n);case"arrowUp":return Pr(!1,t._t,t.ut,t.Th,i,n);case"circle":return function(t,i,n,s,e){const r=2+br("circle",n)/2,h=t-s,a=i-e;return Math.sqrt(h*h+a*a)<=r}(t._t,t.ut,t.Th,i,n);case"square":return function(t,i,n,s,e){const r=br("square",n),h=(r-1)/2,a=t-h,l=i-h;return s>=a&&s<=a+r&&e>=l&&e<=l+r}(t._t,t.ut,t.Th,i,n)}}(t,i,n)}function Dr(t){return"atPriceTop"===t||"atPriceBottom"===t||"atPriceMiddle"===t}function Ir(t,i,n,s,e,r,h,l){const o=function(t,i,n){if(Dr(i.position)&&void 0!==i.price)return i.price;if("value"in(s=t)&&"number"==typeof s.value)return t.value;var s;if(function(t){return"open"in t&&"high"in t&&"low"in t&&"close"in t}(t)){if("inBar"===i.position)return t.close;if("aboveBar"===i.position)return n?t.low:t.high;if("belowBar"===i.position)return n?t.high:t.low}}(n,i,h.priceScale().options().invertScale);if(void 0===o)return;const _=Dr(i.position),c=l.timeScale(),d=u(i.size)?Math.max(i.size,0):1,f=Sr(c.options().barSpacing)*d,p=f/2;t.Th=f;switch(i.position){case"inBar":case"atPriceMiddle":return t.ut=a(h.priceToCoordinate(o)),void(void 0!==t.ri&&(t.ri.ut=t.ut+p+r+.6*e));case"aboveBar":case"atPriceTop":{const i=_?0:s.XS;return t.ut=a(h.priceToCoordinate(o))-p-i,void 0!==t.ri&&(t.ri.ut=t.ut-p-.6*e,s.XS+=1.2*e),void(_||(s.XS+=f+r))}case"belowBar":case"atPriceBottom":{const i=_?0:s.JS;return t.ut=a(h.priceToCoordinate(o))+p+i,void 0!==t.ri&&(t.ri.ut=t.ut+p+r+.6*e,s.JS+=1.2*e),void(_||(s.JS+=f+r))}}}class Vr{constructor(t,i,n){this.QS=[],this.xt=!0,this.tx=!0,this.Xt=new kr,this.Te=t,this.Gv=i,this.qt={ot:[],lt:null},this.yn=n}renderer(){if(!this.Te.options().visible)return null;this.xt&&this.IM();const t=this.Gv.options().layout;return this.Xt.js(t.fontSize,t.fontFamily,this.yn.zOrder),this.Xt.ht(this.qt),this.Xt}ix(t){this.QS=t,this.Pt("data")}Pt(t){this.xt=!0,"data"===t&&(this.tx=!0)}nx(t){this.xt=!0,this.yn=t}zOrder(){return"aboveSeries"===this.yn.zOrder?"top":this.yn.zOrder}IM(){const t=this.Gv.timeScale(),i=this.QS;this.tx&&(this.qt.ot=i.map((t=>({wt:t.time,_t:0,ut:0,Th:0,ZS:t.shape,R:t.color,te:t.id,sx:t.sx,ri:void 0}))),this.tx=!1);const n=this.Gv.options().layout;this.qt.lt=null;const s=t.getVisibleLogicalRange();if(null===s)return;const e=new Ii(Math.floor(s.from),Math.ceil(s.to));if(null===this.Te.dataByIndex(0,1))return;if(0===this.qt.ot.length)return;let r=NaN;const h=xr(t.options().barSpacing),l={XS:h,JS:h};this.qt.lt=Vs(this.qt.ot,e,!0);for(let s=this.qt.lt.from;s<this.qt.lt.to;s++){const e=i[s];e.time!==r&&(l.XS=h,l.JS=h,r=e.time);const o=this.qt.ot[s];o._t=a(t.logicalToCoordinate(e.time)),void 0!==e.text&&e.text.length>0&&(o.ri={GS:e.text,_t:0,ut:0,nn:0,$t:0});const _=this.Te.dataByIndex(e.time,0);null!==_&&Ir(o,e,_,l,n.fontSize,h,this.Te,this.Gv)}this.xt=!1}}function Er(t){return{...gr,...t}}class Br{constructor(t){this.Yh=null,this.QS=[],this.hx=[],this.lx=null,this.Te=null,this.Gv=null,this.ox=!0,this._x=null,this.ux=null,this.vx=null,this.mx=!0,this.yn=Er(t)}attached(t){this.wx(),this.Gv=t.chart,this.Te=t.series,this.Yh=new Vr(this.Te,a(this.Gv),this.yn),this.jS=t.requestUpdate,this.Te.subscribeDataChanged((t=>this.QM(t))),this.mx=!0,this.DS()}DS(){this.jS&&this.jS()}detached(){this.Te&&this.lx&&this.Te.unsubscribeDataChanged(this.lx),this.Gv=null,this.Te=null,this.Yh=null,this.lx=null}ix(t){this.mx=!0,this.QS=t,this.wx(),this.ox=!0,this.ux=null,this.DS()}gx(){return this.QS}paneViews(){return this.Yh?[this.Yh]:[]}updateAllViews(){this.Mx()}hitTest(t,i){return this.Yh?this.Yh.renderer()?.Qs(t,i)??null:null}autoscaleInfo(t,i){if(this.yn.autoScale&&this.Yh){const t=this.bx();if(t)return{priceRange:null,margins:t}}return null}vr(t){this.yn=Er({...this.yn,...t}),this.DS&&this.DS()}bx(){const t=a(this.Gv).timeScale().options().barSpacing;if(this.ox||t!==this.vx){if(this.vx=t,this.QS.length>0){const i=xr(t),n=1.5*Sr(t)+2*i,s=this.Sx();this._x={above:Cr(n,s.aboveBar,s.inBar),below:Cr(n,s.belowBar,s.inBar)}}else this._x=null;this.ox=!1}return this._x}Sx(){return null===this.ux&&(this.ux=this.QS.reduce(((t,i)=>(t[i.position]||(t[i.position]=!0),t)),{inBar:!1,aboveBar:!1,belowBar:!1,atPriceTop:!1,atPriceBottom:!1,atPriceMiddle:!1})),this.ux}wx(){if(!this.mx||!this.Gv||!this.Te)return;const t=this.Gv.timeScale(),i=this.Te?.data();if(null==t.getVisibleLogicalRange()||!this.Te||0===i.length)return void(this.hx=[]);const n=t.timeToIndex(a(i[0].time),!0);this.hx=this.QS.map(((i,s)=>{const e=t.timeToIndex(i.time,!0),r=e<n?1:-1,h=a(this.Te).dataByIndex(e,r),l={time:t.timeToIndex(a(h).time,!1),position:i.position,shape:i.shape,color:i.color,id:i.id,sx:s,text:i.text,size:i.size,price:i.price,Qr:i.time};if("atPriceTop"===i.position||"atPriceBottom"===i.position||"atPriceMiddle"===i.position){if(void 0===i.price)throw new Error(`Price is required for position ${i.position}`);return{...l,position:i.position,price:i.price}}return{...l,position:i.position,price:i.price}})),this.mx=!1}Mx(t){this.Yh&&(this.wx(),this.Yh.ix(this.hx),this.Yh.nx(this.yn),this.Yh.Pt(t))}QM(t){this.mx=!0,this.DS()}}class Ar extends wr{constructor(t,i,n){super(t,i),n&&this.setMarkers(n)}setMarkers(t){this.Jh.ix(t)}markers(){return this.Jh.gx()}}class zr{constructor(t){this.QS=new Map,this.xx=t}Cx(t,i,n){if(this.yx(i),void 0!==n){const s=window.setTimeout((()=>{this.QS.delete(i),this.Px()}),n),e={...t,kx:s,Tx:Date.now()+n};this.QS.set(i,e)}else this.QS.set(i,{...t,kx:void 0,Tx:void 0});this.Px()}yx(t){const i=this.QS.get(t);i&&void 0!==i.kx&&window.clearTimeout(i.kx),this.QS.delete(t),this.Px()}Rx(){for(const[t]of this.QS)this.yx(t)}Dx(){const t=Date.now(),i=[];for(const[n,s]of this.QS)!s.Tx||s.Tx>t?i.push({time:s.time,sign:s.sign,value:s.value}):this.yx(n);return i}Ix(t){this.xx=t}Px(){this.xx&&this.xx()}}const Lr={positiveColor:"#22AB94",negativeColor:"#F7525F",updateVisibilityDuration:5e3};class Or{constructor(t,i,n,s){this.qt=t,this.Vx=i,this.Ex=n,this.Bx=s}draw(t){t.useBitmapCoordinateSpace((t=>{const i=t.context,n=Math.max(1,Math.floor(t.horizontalPixelRatio))%2/2,s=4*t.verticalPixelRatio+n;this.qt.forEach((e=>{const r=Math.round(e._t*t.horizontalPixelRatio)+n;i.beginPath();const h=this.Ax(e.zx);i.fillStyle=h,i.arc(r,e.ut*t.verticalPixelRatio,s,0,2*Math.PI,!1),i.fill(),e.zx&&(i.strokeStyle=h,i.lineWidth=Math.floor(2*t.horizontalPixelRatio),i.beginPath(),i.moveTo((e._t-4.7)*t.horizontalPixelRatio+n,(e.ut-7*e.zx)*t.verticalPixelRatio),i.lineTo(e._t*t.horizontalPixelRatio+n,(e.ut-7*e.zx-7*e.zx*.5)*t.verticalPixelRatio),i.lineTo((e._t+4.7)*t.horizontalPixelRatio+n,(e.ut-7*e.zx)*t.verticalPixelRatio),i.stroke())}))}))}Ax(t){return 0===t?this.Vx:t>0?this.Bx:this.Ex}}class Nr{constructor(t,i,n){this.qt=[],this.Te=t,this.ia=i,this.yn=n}Pt(t){this.qt=t.map((t=>{const i=this.Te.priceToCoordinate(t.value);if(null===i)return null;return{_t:a(this.ia.timeToCoordinate(t.time)),ut:i,zx:t.sign}})).filter(v)}renderer(){const t=function(t,i){return function(t,i){return"Area"===i}(0,i)?t.lineColor:t.color}(this.Te.options(),this.Te.seriesType());return new Or(this.qt,t,this.yn.negativeColor,this.yn.positiveColor)}}function Fr(t,i){return"Line"===i||"Area"===i}class Wr{constructor(t){this.Gv=void 0,this.Te=void 0,this.RS=[],this.Pu=null,this.Lx=new Map,this.Ox=new zr((()=>this.DS())),this.yn={...Lr,...t}}vr(t){this.yn={...this.yn,...t},this.DS()}ix(t){this.Ox.Rx();const i=this.Pu;i&&t.forEach((t=>{this.Ox.Cx(t,i.key(t.time))}))}gx(){return this.Ox.Dx()}DS(){this.jS?.()}attached(t){const{chart:i,series:n,requestUpdate:s,horzScaleBehavior:e}=t;this.Gv=i,this.Te=n,this.Pu=e;const r=this.Te.seriesType();if("Area"!==r&&"Line"!==r)throw new Error("UpDownMarkersPrimitive is only supported for Area and Line series types");this.RS=[new Nr(this.Te,this.Gv.timeScale(),this.yn)],this.jS=s,this.DS()}detached(){this.Gv=void 0,this.Te=void 0,this.jS=void 0}_m(){return h(this.Gv)}Y_(){return h(this.Te)}updateAllViews(){this.RS.forEach((t=>t.Pt(this.gx())))}paneViews(){return this.RS}ht(t){if(!this.Te)throw new Error("Primitive not attached to series");const i=this.Te.seriesType();this.Lx.clear();const n=this.Pu;n&&t.forEach((t=>{ss(t)&&Fr(0,i)&&this.Lx.set(n.key(t.time),t.value)})),h(this.Te).setData(t)}Pt(t,i){if(!this.Te||!this.Pu)throw new Error("Primitive not attached to series");const n=this.Te.seriesType(),s=this.Pu.key(t.time);if(ns(t)&&this.Lx.delete(s),ss(t)&&Fr(0,n)){const i=this.Lx.get(s);i&&this.Ox.Cx({time:t.time,value:t.value,sign:Hr(t.value,i)},s,this.yn.updateVisibilityDuration)}h(this.Te).update(t,i)}Nx(){this.Ox.Rx()}}function Hr(t,i){return t===i?0:t-i>0?1:-1}class Ur extends wr{setData(t){return this.Jh.ht(t)}update(t,i){return this.Jh.Pt(t,i)}markers(){return this.Jh.gx()}setMarkers(t){return this.Jh.ix(t)}clearMarkers(){return this.Jh.Nx()}}const $r={...t,color:"#2196f3"};var jr=Object.freeze({__proto__:null,AreaSeries:je,BarSeries:Ge,BaselineSeries:He,CandlestickSeries:Je,get ColorType(){return Fi},get CrosshairMode(){return $},HistogramSeries:ir,get LastPriceAnimationMode(){return Oi},LineSeries:Pe,get LineStyle(){return n},get LineType(){return i},get MismatchDirection(){return kt},get PriceLineSource(){return Ni},get PriceScaleMode(){return mi},get TickMarkType(){return Wi},get TrackingModeExitMode(){return Li},createChart:function(t,i){return _e(t,new ln,ln.Tf(i))},createChartEx:_e,createImageWatermark:function(t,i,n){return new nr(t,new mr(i,n))},createOptionsChart:function(t,i){return _e(t,new Ee,i)},createSeriesMarkers:function(t,i,n){const s=new Ar(t,new Br(n??{}));return i&&s.setMarkers(i),s},createTextWatermark:function(t,i){return new nr(t,new ur(i))},createUpDownMarkers:function(t,i={}){return new Ur(t,new Wr(i))},createYieldCurveChart:function(t,i){const n=oe(t);return new Ie(n,i)},customSeriesDefaultOptions:$r,defaultHorzScaleBehavior:function(){return ln},isBusinessDay:$i,isUTCTimestamp:ji,version:function(){return"5.2.1"}});window.LightweightCharts=jr}();

;
/* 안드레99 모의선물 계산 엔진 — 서버(워커)와 화면이 같은 파일을 쓴다.
   비트겟 테더 무기한 규칙 기준 · 2단계: 단방향/양방향(헷지) · 격리/교차 · 조건부 · 트레일링 · 감소 전용 · 메이커 전용
   상태 st = { bal, mode: 'one'|'hedge', pos: { 키: 포지션 }, ord: [주문], fills: [이번에 생긴 체결], trades, liqs, ev: [알림] }
   포지션 키: 단방향이면 종목, 양방향이면 종목|L · 종목|S. 포지션마다 sym · side · mm('isolated'|'cross') */
var A99E = (function () {
  'use strict';
  var MIN = 60000;
  var EPS = 1e-9;

  /* ── 계약 규칙 ── */
  /* s = { pp, vp, min, minQ, max, fi, taker, maker, bandBuy, bandSell, maxMkt, maxQty, tiers: [[상한, 최대레버리지, 유지증거금률], …] } */
  function prep(s) {
    var lo = 0, pm = 0, off = 0;
    s.T = (s.tiers || []).map(function (r, i) {
      if (i > 0) off = lo * (r[2] - pm) + off;
      var t = { lo: lo, hi: r[0], lev: r[1], mmr: r[2], off: off };
      lo = r[0]; pm = r[2];
      return t;
    });
    if (!s.T.length) s.T = [{ lo: 0, hi: 1e12, lev: s.max || 20, mmr: 0.01, off: 0 }];
    s.step = +(Math.pow(10, -s.vp)).toFixed(s.vp);
    s.tick = +(Math.pow(10, -s.pp)).toFixed(s.pp);
    if (!(s.taker >= 0)) s.taker = 0.0006;
    if (!(s.maker >= 0)) s.maker = 0.0002;
    if (!(s.minQ > 0)) s.minQ = 5;
    return s;
  }
  function tierOf(s, n) { var T = s.T; for (var i = 0; i < T.length; i++) if (n <= T[i].hi) return T[i]; return T[T.length - 1]; }
  function maxNotional(s, lev) { var T = s.T, m = 0; for (var i = 0; i < T.length; i++) if (T[i].lev >= lev) m = T[i].hi; return m; }
  /* 격리 청산가 (비트겟 공식): [증거금 + 단계 공제 − 수량×진입가×방향] ÷ [수량×(유지증거금률 + 시장가 수수료율 − 방향)] */
  function liqPrice(s, side, qty, entry, margin) {
    if (!(qty > 0)) return 0;
    var t = tierOf(s, qty * entry);
    var lp = (margin + t.off - qty * entry * side) / (qty * (t.mmr + s.taker - side));
    return lp > 0 && isFinite(lp) ? lp : 0;
  }
  function posLiq(s, p) { return liqPrice(s, p.side, p.qty, p.entry, p.margin); }
  /* 유지증거금(청산 수수료 포함) */
  function mmOf(s, p, mk) { var n = p.qty * mk, t = tierOf(s, n); return Math.max(0, n * (t.mmr + s.taker) - t.off); }
  /* 소수 자릿수로 한 번 더 맞춰 0.009999… 같은 값이 남지 않게 */
  function roundQty(s, q) { return +(Math.floor(q / s.step + 1e-9) * s.step).toFixed(s.vp); }
  function roundPx(s, p) { return +(Math.round(p / s.tick) * s.tick).toFixed(s.pp); }
  function cleanQ(s, q) { return +q.toFixed(s.vp); }
  function fix(v, d) { return Math.round(v * Math.pow(10, d)) / Math.pow(10, d); }

  /* ── 호가 따라 체결 ── */
  /* 보이는 단계를 넘는 수량은 보이는 기울기대로 더 나빠지는 값으로 */
  function walk(levels, qty, side, tick) {
    if (!levels || !levels.length) return 0;
    var rem = qty, cost = 0, got = 0, first = levels[0][0], last = first;
    for (var i = 0; i < levels.length && rem > 1e-12; i++) { var take = Math.min(rem, levels[i][1]); cost += take * levels[i][0]; rem -= take; got += take; last = levels[i][0]; }
    if (rem > 1e-12) {
      var span = Math.max(Math.abs(last - first), tick * levels.length);
      var slope = span / Math.max(got, 1e-9);
      cost += rem * (last + side * slope * rem / 2);
    }
    return cost / qty;
  }
  function walkLimit(levels, qty, side, limit) {
    var rem = qty, cost = 0, got = 0;
    for (var i = 0; levels && i < levels.length && rem > 1e-12; i++) {
      var p = levels[i][0];
      if (side === 1 ? p > limit + EPS : p < limit - EPS) break;
      var take = Math.min(rem, levels[i][1]); cost += take * p; rem -= take; got += take;
    }
    return { q: got, px: got > 0 ? cost / got : 0 };
  }

  /* ── 상태 ── */
  function newState(bal, mode) { return { bal: bal, mode: mode === 'hedge' ? 'hedge' : 'one', pos: {}, ord: [], fills: [], trades: 0, liqs: 0, ev: [] }; }
  function addFill(st, f) { st.fills.push(f); }
  function hedge(st) { return st.mode === 'hedge'; }
  function pkey(st, sym, side) { return hedge(st) ? sym + (side === 1 ? '|L' : '|S') : sym; }
  function psym(st, k) { var p = st.pos[k]; return (p && p.sym) || String(k).split('|')[0]; }
  function keysOf(st, sym) { var out = []; for (var k in st.pos) if (psym(st, k) === sym) out.push(k); return out; }
  /* 이 방향(side)으로 사고팔 때 같은 방향으로 늘어나는 포지션 */
  function samePos(st, sym, side) { if (hedge(st)) return st.pos[pkey(st, sym, side)] || null; var p = st.pos[sym]; return p && p.side === side ? p : null; }
  /* 2026.10.31-A 상한(연습용 · 서버 부담): 포지션 5개 · 대기 주문 10개.
     포지션 자리 = 지금 열린 포지션 + 체결되면 새로 열릴 대기 주문(감소 전용 제외)의 자리. 자리가 5개 찼으면 새 자리를 만드는 주문은 막는다 */
  var MAX_POS = 5, MAX_ORD = 10;
  function posSlots(st) { var s = {}; Object.keys(st.pos).forEach(function (k) { s[k] = 1; }); st.ord.forEach(function (o) { if (!o.ro) s[pkey(st, o.sym, o.side)] = 1; }); return s; }
  function opensNew(st, sym, side) { var s = posSlots(st); if (s[pkey(st, sym, side)]) return false; return Object.keys(s).length >= MAX_POS; }
  /* 이 방향으로 사고팔 때 줄어드는 포지션 */
  function oppPos(st, sym, side) { if (hedge(st)) return st.pos[pkey(st, sym, -side)] || null; var p = st.pos[sym]; return p && p.side === -side ? p : null; }
  function closable(st, sym, side) { var p = oppPos(st, sym, side); return p ? p.qty : 0; }
  function openPart(st, sym, side, qty, ro) {
    if (ro) return 0;
    if (hedge(st)) return qty;
    var p = st.pos[sym]; return (!p || p.side === side) ? qty : Math.max(0, qty - p.qty);
  }
  function kindOf(o) { return o.k || 'limit'; }
  function sameSideResting(st, sym, side) { var q = 0; st.ord.forEach(function (o) { if (o.sym === sym && o.side === side && !o.ro && kindOf(o) === 'limit') q += o.qty; }); return q; }
  function exposed(st, sym) { if (keysOf(st, sym).length) return true; for (var i = 0; i < st.ord.length; i++) if (st.ord[i].sym === sym) return true; return false; }
  /* 그 종목에 이미 정해진 증거금 방식(포지션 기준) */
  function symMM(st, sym) { var ks = keysOf(st, sym); return ks.length ? (st.pos[ks[0]].mm || 'isolated') : null; }
  function frozenSum(st) { var f = 0; for (var i = 0; i < st.ord.length; i++) f += st.ord[i].frozen || 0; return f; }
  function markOf(marks, p) { return (marks && marks[p.sym]) || p.entry; }

  /* 포지션 열기 · 늘리기 */
  function openFill(st, SP, sym, side, qty, price, feeRate, lev, mm, ts) {
    var s = SP[sym], k = pkey(st, sym, side), p = st.pos[k];
    var margin = qty * price / lev, fee = qty * price * feeRate;
    st.bal -= margin + fee;
    if (!p) p = st.pos[k] = { sym: sym, side: side, mm: mm === 'cross' ? 'cross' : 'isolated', qty: 0, entry: 0, lev: lev, margin: 0, fee: 0, tp: null, sl: null, tpslAt: 0, ts: ts, fundAt: ts };
    p.entry = (p.entry * p.qty + price * qty) / (p.qty + qty);
    p.qty = cleanQ(s, p.qty + qty); p.margin += margin; p.fee += fee;
    addFill(st, { ts: ts, sym: sym, side: side, qty: qty, price: price, fee: fee, pnl: 0, kind: 'open' });
  }
  /* 포지션 줄이기 · 닫기. 격리는 증거금 이상 잃지 않고, 교차는 모자란 만큼 잔고에서 */
  function closeFill(st, SP, k, qty, price, feeRate, kind, ts) {
    var p = st.pos[k]; if (!p) return 0;
    var s = SP[p.sym];
    var cq = Math.min(qty, p.qty);
    var pnl = (price - p.entry) * cq * p.side;
    var feeC = cq * price * feeRate;
    var rel = p.margin * cq / p.qty;
    var back = rel + pnl - feeC;
    if (p.mm !== 'cross' && back < 0) { pnl = -rel + feeC; back = 0; }
    st.bal += back;
    var keep = (p.qty - cq) / p.qty;
    p.margin -= rel; p.fee *= keep; p.qty = cleanQ(s, p.qty - cq);
    addFill(st, { ts: ts, sym: p.sym, side: -p.side, qty: cq, price: price, fee: feeC, pnl: pnl, kind: kind && kind !== 'open' ? kind : 'close' });
    if (p.qty <= s.step / 2) dropPos(st, k, ts);
    return cq;
  }
  /* 포지션이 사라지면 더 줄일 게 없어진 감소 전용 주문은 같이 취소 */
  function dropPos(st, k, ts) {
    var sym = psym(st, k);
    delete st.pos[k];
    for (var i = st.ord.length - 1; i >= 0; i--) {
      var o = st.ord[i];
      if (o.sym === sym && o.ro && closable(st, sym, o.side) <= 0) {
        st.bal += o.frozen || 0; st.ord.splice(i, 1);
        st.ev.push({ k: 'ocancel', why: 'nopos', sym: sym, id: o.id, ts: ts });
      }
    }
  }
  /* 체결 하나 반영. o = { ro: 감소 전용, mm: 새로 열 때 증거금 방식 }
     단방향: 같은 방향이면 늘리고, 반대면 줄이거나 (감소 전용이 아니면) 뒤집는다.
     양방향: 감소 전용이면 반대쪽 포지션을 닫고, 아니면 이쪽 포지션을 연다. */
  function applyFill(st, SP, sym, side, qty, price, feeRate, lev, kind, ts, o) {
    o = o || {};
    var s = SP[sym], done = 0;
    if (hedge(st)) {
      if (o.ro) { var ck = pkey(st, sym, -side); if (st.pos[ck]) { done = closeFill(st, SP, ck, qty, price, feeRate, kind, ts); st.trades++; } }
      else { openFill(st, SP, sym, side, qty, price, feeRate, lev, o.mm || symMM(st, sym), ts); done = qty; st.trades++; }
      return done;
    }
    var p = st.pos[sym];
    if (p && p.side !== side) {
      var mm = p.mm;
      done = closeFill(st, SP, sym, qty, price, feeRate, kind, ts); st.trades++;
      var rest = cleanQ(s, qty - done);
      if (rest > s.step / 2 && !o.ro) { openFill(st, SP, sym, side, rest, price, feeRate, lev, mm, ts); done = qty; st.trades++; }
    } else if (!o.ro) {
      openFill(st, SP, sym, side, qty, price, feeRate, lev, p ? p.mm : o.mm, ts); done = qty; st.trades++;
    }
    return done;
  }
  /* 격리 청산: 그 포지션 증거금만 잃는다 */
  function liquidate(st, SP, k, price, ts) {
    var p = st.pos[k]; if (!p) return;
    addFill(st, { ts: ts, sym: p.sym, side: -p.side, qty: p.qty, price: price, fee: 0, pnl: -p.margin, kind: 'liq' });
    st.ev.push({ k: 'liq', sym: p.sym, side: p.side, lev: p.lev, margin: p.margin, price: price, ts: ts });
    dropPos(st, k, ts);
    st.liqs++; st.trades++;
  }
  /* 교차: 잔고 + 걸어 둔 주문 + 교차 포지션(증거금 + 미실현) 이 교차 유지증거금 합 이하가 되면 교차 전체 청산 */
  function crossKeys(st) { var out = []; for (var k in st.pos) if (st.pos[k].mm === 'cross') out.push(k); return out; }
  function crossState(st, SP, marks) {
    var eq = st.bal + frozenSum(st), mm = 0, n = 0;
    crossKeys(st).forEach(function (k) { var p = st.pos[k], mk = markOf(marks, p); eq += p.margin + (mk - p.entry) * p.qty * p.side; mm += mmOf(SP[p.sym], p, mk); n++; });
    return { eq: eq, mm: mm, n: n };
  }
  function liqCross(st, SP, marks, ts, hitKey, hitPx) {
    var lost = crossState(st, SP, marks).eq;
    st.ord.slice().forEach(function (o) { st.bal += o.frozen || 0; st.ev.push({ k: 'ocancel', why: 'liq', sym: o.sym, id: o.id, ts: ts }); });
    st.ord = [];
    crossKeys(st).forEach(function (k) {
      var p = st.pos[k], px = k === hitKey && hitPx ? hitPx : markOf(marks, p);
      addFill(st, { ts: ts, sym: p.sym, side: -p.side, qty: p.qty, price: px, fee: 0, pnl: -p.margin, kind: 'liq' });
      st.ev.push({ k: 'liq', cross: 1, sym: p.sym, side: p.side, lev: p.lev, margin: p.margin, price: px, lost: Math.max(0, lost), ts: ts });
      delete st.pos[k];
      st.liqs++; st.trades++;
    });
    st.bal = 0;
  }
  function crossCheck(st, SP, marks, ts) {
    var c = crossState(st, SP, marks);
    if (c.n && c.eq <= c.mm + EPS) { liqCross(st, SP, marks, ts); return true; }
    return false;
  }
  /* 포지션 하나의 청산가 — 교차면 다른 교차 포지션은 지금 가격 그대로라고 보고 계산 */
  function liqOf(st, SP, k, marks) {
    var p = st.pos[k]; if (!p) return 0;
    var s = SP[p.sym]; if (!s) return 0;
    if (p.mm !== 'cross') return posLiq(s, p);
    var extra = st.bal + frozenSum(st);
    crossKeys(st).forEach(function (j) { if (j === k) return; var q = st.pos[j], mk = markOf(marks, q); extra += q.margin + (mk - q.entry) * q.qty * q.side - mmOf(SP[q.sym], q, mk); });
    return liqPrice(s, p.side, p.qty, p.entry, p.margin + extra);
  }
  function closeAt(st, SP, k, px, kind, ts) {
    var p = st.pos[k]; if (!p) return null;
    var side = p.side, sym = p.sym;
    closeFill(st, SP, k, p.qty, px, SP[sym].taker, kind, ts); st.trades++;
    var f = st.fills[st.fills.length - 1];
    st.ev.push({ k: kind, sym: sym, side: side, price: px, net: f.pnl - f.fee, ts: ts });
    return f;
  }
  function placeLimit(st, SP, sym, side, qty, px, lev, tp, sl, ts, id, x) {
    x = x || {};
    var oq = openPart(st, sym, side, qty, x.ro);
    var frozen = oq * px / lev + oq * px * SP[sym].taker;
    st.bal -= frozen;
    var o = { id: id, sym: sym, side: side, qty: qty, px: px, lev: lev, frozen: frozen, tp: tp, sl: sl, ts: ts };
    if (x.ro) o.ro = 1;
    if (x.po) o.po = 1;
    if (x.mm) o.mm = x.mm;
    st.ord.push(o);
    return o;
  }
  function cancelOrder(st, id) {
    for (var i = 0; i < st.ord.length; i++) if (st.ord[i].id === id) { st.bal += st.ord[i].frozen || 0; st.ord.splice(i, 1); return true; }
    return false;
  }
  function cancelAll(st, sym) {
    var n = 0;
    for (var i = st.ord.length - 1; i >= 0; i--) if (!sym || st.ord[i].sym === sym) { st.bal += st.ord[i].frozen || 0; st.ord.splice(i, 1); n++; }
    return n;
  }
  /* 사용 가능 금액: 교차 미실현 손실은 빼고, 이익은 쓰지 않는다 */
  function avail(st, marks) {
    var u = 0;
    for (var k in st.pos) { var p = st.pos[k]; if (p.mm === 'cross') u += (markOf(marks, p) - p.entry) * p.qty * p.side; }
    return st.bal + Math.min(0, u);
  }
  /* 체결 직전 확인: 감소 전용 수량 · 한도 · 잔고 → { q, lev } 또는 { why } */
  function preFill(st, SP, o, px, fee) {
    var s = SP[o.sym], q = o.qty;
    if (o.ro) { var c = closable(st, o.sym, o.side); if (c <= 0) return { why: 'nopos' }; q = roundQty(s, Math.min(q, c)); if (q < s.step / 2) return { why: 'nopos' }; }
    var p = samePos(st, o.sym, o.side), lev = p ? p.lev : o.lev;
    var oq = openPart(st, o.sym, o.side, q, o.ro);
    if (oq > 0) {
      var newQty = (p ? p.qty : 0) + oq;
      if (newQty * px > maxNotional(s, lev) + 1e-6) return { why: 'cap' };
      if (oq * px / lev + oq * px * fee > avail(st) + EPS) return { why: 'funds' };
    }
    return { q: q, lev: lev, oq: oq };
  }
  function takeOrd(st, o) { var i = st.ord.indexOf(o); if (i < 0) return false; st.ord.splice(i, 1); st.bal += o.frozen || 0; return true; }
  function attachTpsl(st, o, ts) {
    var q = samePos(st, o.sym, o.side);
    if (q && (o.tp != null || o.sl != null)) { if (o.tp != null) q.tp = o.tp; if (o.sl != null) q.sl = o.sl; q.tpslAt = ts; }
  }
  function fillLimit(st, SP, o, px, ts) {
    if (!takeOrd(st, o)) return;
    var s = SP[o.sym], c = preFill(st, SP, o, px, s.maker);
    if (c.why) { st.ev.push({ k: 'lcancel', why: c.why, sym: o.sym, id: o.id, ts: ts }); return; }
    applyFill(st, SP, o.sym, o.side, c.q, px, s.maker, c.lev, null, ts, { ro: o.ro, mm: o.mm });
    if (c.oq > 0) attachTpsl(st, o, ts);
    st.ev.push({ k: 'lfill', sym: o.sym, side: o.side, qty: c.q, price: px, id: o.id, ts: ts });
  }
  /* 조건부 · 트레일링이 걸렸을 때: 시장가로 그 가격에 */
  function execTrig(st, SP, o, px, ts, kind) {
    if (!takeOrd(st, o)) return;
    var s = SP[o.sym]; px = roundPx(s, px);
    var c = preFill(st, SP, o, px, s.taker);
    if (c.why) { st.ev.push({ k: 'tcancel', why: c.why, kind: kind, sym: o.sym, id: o.id, ts: ts }); return; }
    applyFill(st, SP, o.sym, o.side, c.q, px, s.taker, c.lev, kind, ts, { ro: o.ro, mm: o.mm });
    if (c.oq > 0) attachTpsl(st, o, ts);
    st.ev.push({ k: 'tfill', kind: kind, sym: o.sym, side: o.side, qty: c.q, price: px, id: o.id, ts: ts });
  }
  /* 조건부 지정가: 걸리면 지정가 주문으로 바뀐다(유리한 쪽이면 바로 체결) */
  function trigStop(st, SP, o, ts) {
    if (!(o.px > 0)) return execTrig(st, SP, o, o.trig, ts, 'stop');
    if (o.side === 1 ? o.px >= o.trig : o.px <= o.trig) return execTrig(st, SP, o, o.trig, ts, 'stop');
    if (!takeOrd(st, o)) return;
    var s = SP[o.sym], oq = openPart(st, o.sym, o.side, o.qty, o.ro);
    var p = samePos(st, o.sym, o.side), lev = p ? p.lev : o.lev;
    if (o.ro && closable(st, o.sym, o.side) <= 0) { st.ev.push({ k: 'tcancel', why: 'nopos', kind: 'stop', sym: o.sym, id: o.id, ts: ts }); return; }
    var need = oq * o.px / lev + oq * o.px * s.taker;
    if (need > avail(st) + EPS) { st.ev.push({ k: 'tcancel', why: 'funds', kind: 'stop', sym: o.sym, id: o.id, ts: ts }); return; }
    var n = placeLimit(st, SP, o.sym, o.side, o.qty, o.px, lev, o.tp, o.sl, ts + 1, o.id, { ro: o.ro, mm: o.mm });
    st.ev.push({ k: 'trig', sym: o.sym, side: o.side, px: n.px, trig: o.trig, id: o.id, ts: ts });
  }
  /* 트레일링: 팔기(롱 보호)는 최고가에서 cb만큼 내려오면, 사기(숏 보호)는 최저가에서 cb만큼 올라오면 */
  function trailStep(st, SP, o, ts, h, l) {
    var sell = o.side === -1;
    if (!o.armed) {
      if (o.act == null || (sell ? h >= o.act : l <= o.act)) { o.armed = 1; o.peak = sell ? h : l; }
      return;
    }
    var stop = sell ? o.peak * (1 - o.cb) : o.peak * (1 + o.cb);
    if (sell ? l <= stop : h >= stop) return execTrig(st, SP, o, stop, ts, 'trail');
    if (sell ? h > o.peak : l < o.peak) o.peak = sell ? h : l;
  }
  function trailStop(o) { return o.armed && o.peak > 0 ? (o.side === -1 ? o.peak * (1 - o.cb) : o.peak * (1 + o.cb)) : 0; }
  /* 주문 하나를 가격 범위(봉의 고가 h ~ 저가 l, 체결 한 건이면 h = l)에 비춰 보기.
     트레일링은 기준 가격을 고를 수 있다: 최근 체결가(기본) 또는 Mark 가격(o.pt = 'mark') */
  /* 조건부 · 트레일링은 기준 가격을 고를 수 있다: 최근 체결가(기본) 또는 Mark 가격(o.pt = 'mark') */
  function isMarkBased(o) { var k = kindOf(o); return (k === 'trail' || k === 'stop') && o.pt === 'mark'; }
  function ordStep(st, SP, o, ts, h, l) {
    var k = kindOf(o);
    if (k === 'limit') { if (o.side === 1 ? l <= o.px : h >= o.px) fillLimit(st, SP, o, o.px, ts); }
    else if (k === 'stop') { if (o.dir === 1 ? h >= o.trig : l <= o.trig) trigStop(st, SP, o, ts); }
    else if (k === 'trail') trailStep(st, SP, o, ts, h, l);
  }
  /* mh · ml 을 주면 Mark 기준 트레일링은 그 범위로, 안 주면(체결 한 건) Mark 기준 트레일링은 건너뛴다 */
  function ordersStep(st, SP, sym, ts, h, l, mh, ml) {
    st.ord.slice().forEach(function (o) {
      if (o.sym !== sym || ts < o.ts || st.ord.indexOf(o) < 0) return;
      if (isMarkBased(o)) { if (mh != null && ml != null && isFinite(mh) && isFinite(ml)) ordStep(st, SP, o, ts, mh, ml); return; }
      ordStep(st, SP, o, ts, h, l);
    });
  }
  /* 펀딩비: 격리는 낼 돈을 사용 가능 금액에서, 모자라면 포지션 증거금에서 · 교차는 잔고에서 */
  function payFunding(st, k, mk, fr, ts) {
    var p = st.pos[k]; if (!p) return;
    var pay = p.qty * mk * fr * p.side;
    if (p.mm === 'cross') st.bal -= pay;
    else if (pay > 0) { var fromBal = Math.min(pay, Math.max(0, st.bal)); st.bal -= fromBal; p.margin -= pay - fromBal; }
    else st.bal -= pay;
    addFill(st, { ts: ts, sym: p.sym, side: p.side, qty: p.qty, price: mk, fee: 0, pnl: -pay, kind: 'fund' });
    p.fundAt = ts;
  }
  /* 펀딩 시각: 세계 표준시 0시 기준 fi시간마다 */
  function fundTimes(fiH, after, upto) {
    var step = fiH * 3600e3, out = [];
    for (var t = Math.floor(after / step) * step + step; t <= upto; t += step) out.push(t);
    return out;
  }

  /* ── 판정 ── */
  function liqHit(s, p, mark) { var lp = posLiq(s, p); return lp > 0 && mark > 0 && (p.side === 1 ? mark <= lp : mark >= lp) ? lp : 0; }
  function tpslStep(st, SP, k, ts, h, l) {
    var p = st.pos[k]; if (!p || ts < (p.tpslAt || 0)) return;
    if (p.sl != null && (p.side === 1 ? l <= p.sl : h >= p.sl)) closeAt(st, SP, k, p.sl, 'sl', ts);
    else if (p.tp != null && (p.side === 1 ? h >= p.tp : l <= p.tp)) closeAt(st, SP, k, p.tp, 'tp', ts);
  }
  /* 1분봉 하나: 청산(표시가격) → 손절 → 익절 → 주문.
     그 봉이 시작된 뒤에 연 포지션 · 건 주문 · 바꾼 익절손절은 그 봉에 쓰지 않는다
     (봉 안에서 언제 움직였는지 모르므로 억울한 청산을 막는다. 그 분 안의 일은 실제 체결 증거로 따로 확인)
     marks = 다른 종목의 지금 표시가격(교차 계산용) */
  function replayBar(st, SP, sym, t, h, l, mh, ml, marks) {
    keysOf(st, sym).forEach(function (k) {
      var p = st.pos[k]; if (!p || t < p.ts) return;
      var lp = liqOf(st, SP, k, marks);
      if (lp > 0 && (p.side === 1 ? ml <= lp : mh >= lp)) {
        if (p.mm === 'cross') liqCross(st, SP, marks, t, k, lp); else liquidate(st, SP, k, lp, t);
        return;
      }
      tpslStep(st, SP, k, t, h, l);
    });
    ordersStep(st, SP, sym, t, h, l, mh, ml);
  }
  /* 실제 체결 한 건(증거): 그 시각 이후에 건 것만 */
  function onTrade(st, SP, sym, ts, px) {
    keysOf(st, sym).forEach(function (k) { var p = st.pos[k]; if (p && ts >= (p.ts || 0)) tpslStep(st, SP, k, ts, px, px); });
    ordersStep(st, SP, sym, ts, px, px);
  }
  /* 표시가격: 격리는 그 포지션만, marks(전 종목 표시가격)를 주면 교차 계좌 전체도 확인 */
  function onMark(st, SP, sym, ts, mark, marks) {
    keysOf(st, sym).forEach(function (k) {
      var p = st.pos[k]; if (!p || ts < p.ts || p.mm === 'cross') return;
      var lp = liqHit(SP[sym], p, mark);
      if (lp) liquidate(st, SP, k, lp, ts);
    });
    if (mark > 0) st.ord.slice().forEach(function (o) {
      if (o.sym === sym && isMarkBased(o) && ts >= o.ts && st.ord.indexOf(o) >= 0) ordStep(st, SP, o, ts, mark, mark);
    });
    if (marks) { marks[sym] = mark; crossCheck(st, SP, marks, ts); }
  }
  /* 여러 종목의 1분봉 + 펀딩을 시간 순서대로 한 번에.
     data = { 종목: [{ t, h, l, c, mh, ml, mc }] } · rateAt(종목, 시각) → 그 시각에 정산된 펀딩비율(모르면 null)
     marks0 = 시작할 때의 전 종목 표시가격(교차 계산용) */
  function sweepBars(st, SP, data, rateAt, upto, marks0) {
    var ev = [];
    Object.keys(data).forEach(function (sym) {
      var bars = data[sym] || [];
      bars.forEach(function (b) { ev.push({ t: b.t, sym: sym, b: b }); });
      var s = SP[sym];
      if (s && bars.length) {
        var from = bars[0].t, end = Math.min(upto || Infinity, bars[bars.length - 1].t + MIN);
        keysOf(st, sym).forEach(function (k) { from = Math.min(from, st.pos[k].fundAt || from); });
        fundTimes(s.fi || 8, from - 1, end).forEach(function (T) { ev.push({ t: T, sym: sym, fund: 1 }); });
      }
    });
    ev.sort(function (a, b) { return a.t - b.t || (b.fund ? 1 : 0) - (a.fund ? 1 : 0); });
    var lastMark = {};
    if (marks0) for (var m in marks0) lastMark[m] = marks0[m];
    ev.forEach(function (e) {
      if (e.fund) {
        keysOf(st, e.sym).forEach(function (k) {
          var p = st.pos[k];
          if (p && p.ts < e.t && (p.fundAt || 0) < e.t) {
            var fr = rateAt ? rateAt(e.sym, e.t) : null;
            if (fr != null && isFinite(fr)) payFunding(st, k, lastMark[e.sym] || p.entry, fr, e.t);
          }
        });
        return;
      }
      var b = e.b;
      replayBar(st, SP, e.sym, b.t, b.h, b.l, b.mh, b.ml, lastMark);
      if (b.mc > 0) lastMark[e.sym] = b.mc;
    });
    return lastMark;
  }

  /* ── 평가 ── */
  function upnl(st, marks) { var u = 0; for (var k in st.pos) { var p = st.pos[k]; u += (markOf(marks, p) - p.entry) * p.qty * p.side; } return u; }
  function equity(st, marks) {
    var e = st.bal + frozenSum(st);
    for (var k in st.pos) { var p = st.pos[k]; e += p.margin + (markOf(marks, p) - p.entry) * p.qty * p.side; }
    return e;
  }

  /* ── 주문 ──
     req = { sym, side, type: 'market'|'limit'|'stop'|'trail', qty, px, lev, tp, sl,
             ro: 감소 전용(양방향에선 '닫기'), po: 메이커 전용, mm: 새 포지션 증거금 방식,
             trig: 조건 가격, cb: 트레일링 되돌림 비율(0.001~0.1), act: 트레일링 시작 가격, pt: 조건부 · 트레일링 기준 가격('mark' | 없으면 최근 체결가), last: 지금 체결가 }
     book = { asks: [[가격, 수량]], bids } · mark = 표시가격 · marks = 전 종목 표시가격(교차 사용 가능 금액) · 결과 { ok, err, … } */
  function order(st, SP, req, book, mark, now, newId, marks) {
    var sym = req.sym, s = SP[sym];
    if (!s || s.off) return { err: 'sym' };
    var side = req.side === 1 ? 1 : req.side === -1 ? -1 : 0;
    if (!side) return { err: 'side' };
    var type = req.type === 'limit' || req.type === 'stop' || req.type === 'trail' ? req.type : 'market';
    var ro = !!req.ro || type === 'trail', po = !!req.po && type === 'limit';
    var qty = roundQty(s, +req.qty);
    if (ro) {
      var c = closable(st, sym, side);
      if (!(c > 0)) return { err: 'ro_none' };
      qty = roundQty(s, Math.min(qty, c));
    }
    if (!(qty >= s.min - 1e-12)) return { err: 'min', min: s.min };
    if (type !== 'market' && st.ord.length >= MAX_ORD) return { err: 'ord_cap', max: MAX_ORD };
    if (!ro && opensNew(st, sym, side)) return { err: 'pos_cap', max: MAX_POS };
    var mm = symMM(st, sym) || (req.mm === 'cross' ? 'cross' : 'isolated');
    var sp0 = samePos(st, sym, side), any = st.pos[pkey(st, sym, side)];
    var lev = sp0 ? sp0.lev : (!hedge(st) && any ? any.lev : Math.max(1, Math.min(Math.floor(+req.lev) || 10, s.max)));
    var asks = book && book.asks, bids = book && book.bids;
    var last = +req.last > 0 ? +req.last : mark;
    var px, marketable = false;
    if (type === 'trail') {
      var cb = +req.cb;
      if (!(cb >= 0.001 - 1e-12 && cb <= 0.1 + 1e-12)) return { err: 'cb' };
      var pt = req.pt === 'mark' ? 'mark' : null, ref0 = pt ? mark : last;
      if (!(ref0 > 0)) return { err: 'book' };
      var act = req.act == null || req.act === '' ? null : roundPx(s, +req.act);
      if (act != null && !(act > 0)) return { err: 'act_num' };
      if (act != null && (side === -1 ? act <= ref0 : act >= ref0)) return { err: 'act_side' };
      if (qty * ref0 < s.minQ - EPS) return { err: 'min_q', min: s.minQ };
      var t = { id: newId(), sym: sym, side: side, qty: qty, px: 0, lev: lev, frozen: 0, tp: null, sl: null, ts: now, k: 'trail', cb: fix(cb, 6), act: act, ro: 1, armed: act == null ? 1 : 0, peak: act == null ? ref0 : null };
      if (pt) t.pt = pt;
      st.ord.push(t);
      return { ok: true, rested: qty, filled: 0, px: ref0, trail: true };
    }
    if (type === 'stop') {
      var trig = roundPx(s, +req.trig), ptS = req.pt === 'mark' ? 'mark' : null, refS = ptS ? mark : last;
      if (!(trig > 0)) return { err: 'trig_num' };
      if (!(refS > 0)) return { err: 'book' };
      if (Math.abs(trig - refS) < s.tick / 2) return { err: 'trig_now' };
      var lpx = req.px == null || req.px === '' || !(+req.px > 0) ? 0 : roundPx(s, +req.px);
      var ref = lpx || trig;
      if (qty * ref < s.minQ - EPS) return { err: 'min_q', min: s.minQ };
      var oqS = openPart(st, sym, side, qty, ro);
      if (oqS > 0) {
        var capS = maxNotional(s, lev), nqS = (sp0 ? sp0.qty : 0) + sameSideResting(st, sym, side) + oqS;
        if (nqS * ref > capS + 1e-6) return { err: 'cap', cap: capS, lev: lev };
      }
      var tpS = req.tp == null || req.tp === '' || oqS <= 0 ? null : roundPx(s, +req.tp);
      var slS = req.sl == null || req.sl === '' || oqS <= 0 ? null : roundPx(s, +req.sl);
      if ((tpS != null && !(tpS > 0)) || (slS != null && !(slS > 0))) return { err: 'tpsl_num' };
      if (tpS != null && (side === 1 ? tpS <= ref : tpS >= ref)) return { err: 'tp_side' };
      if (slS != null && (side === 1 ? slS >= ref : slS <= ref)) return { err: 'sl_side' };
      var so = { id: newId(), sym: sym, side: side, qty: qty, px: lpx, lev: lev, frozen: 0, tp: tpS, sl: slS, ts: now, k: 'stop', trig: trig, dir: trig > refS ? 1 : -1 };
      if (ptS) so.pt = ptS;
      if (ro) so.ro = 1;
      if (mm === 'cross') so.mm = 'cross';
      st.ord.push(so);
      return { ok: true, rested: qty, filled: 0, px: trig, stop: true };
    }
    var isLimit = type === 'limit';
    if (isLimit) {
      px = roundPx(s, +req.px);
      if (!(px > 0)) return { err: 'px' };
      if (s.maxQty && qty > s.maxQty + 1e-12) return { err: 'max_qty', max: s.maxQty };
      if (mark > 0 && s.bandBuy > 0 && side === 1 && px > mark * (1 + s.bandBuy) + EPS) return { err: 'band_hi', lim: mark * (1 + s.bandBuy) };
      if (mark > 0 && s.bandSell > 0 && side === -1 && px < mark * (1 - s.bandSell) - EPS) return { err: 'band_lo', lim: mark * (1 - s.bandSell) };
      marketable = side === 1 ? !!(asks && asks.length && px >= asks[0][0]) : !!(bids && bids.length && px <= bids[0][0]);
      if (po && marketable) return { err: 'post_only' };
    } else {
      if (s.maxMkt && qty > s.maxMkt + 1e-12) return { err: 'max_mkt', max: s.maxMkt };
      var lv = side === 1 ? asks : bids;
      if (!lv || !lv.length) return { err: 'book' };
      px = walk(lv, qty, side, s.tick);
      if (!(px > 0)) return { err: 'book' };
    }
    if (qty * px < s.minQ - EPS) return { err: 'min_q', min: s.minQ };
    var oq = openPart(st, sym, side, qty, ro);
    var newQty = (sp0 ? sp0.qty : 0) + sameSideResting(st, sym, side) + oq;
    var cap = maxNotional(s, lev);
    if (oq > 0 && newQty * px > cap + 1e-6) return { err: 'cap', cap: cap, lev: lev };
    var need = oq * px / lev + oq * px * s.taker, av = avail(st, marks);
    if (need > av + EPS) return { err: 'funds', need: need, bal: av };
    var tp = req.tp == null || req.tp === '' ? null : roundPx(s, +req.tp);
    var sl = req.sl == null || req.sl === '' ? null : roundPx(s, +req.sl);
    if (oq <= 0) { tp = null; sl = null; }
    if ((tp != null && !(tp > 0)) || (sl != null && !(sl > 0))) return { err: 'tpsl_num' };
    if (tp != null && (side === 1 ? tp <= px : tp >= px)) return { err: 'tp_side' };
    if (sl != null && (side === 1 ? sl >= px : sl <= px)) return { err: 'sl_side' };
    var x = { ro: ro, mm: mm, po: po };
    function setTs() { var q = samePos(st, sym, side); if (q && (tp != null || sl != null)) { if (tp != null) q.tp = tp; if (sl != null) q.sl = sl; q.tpslAt = now; } }
    if (isLimit && !marketable) {
      placeLimit(st, SP, sym, side, qty, px, lev, tp, sl, now, newId(), x);
      return { ok: true, rested: qty, filled: 0, px: px };
    }
    if (isLimit) {
      var w = walkLimit(side === 1 ? asks : bids, qty, side, px);
      var fq0 = roundQty(s, w.q), filled = 0;
      if (fq0 >= s.min - 1e-12) { applyFill(st, SP, sym, side, fq0, w.px, s.taker, lev, null, now, x); setTs(); filled = fq0; }
      var restQ = roundQty(s, qty - filled);
      if (ro) restQ = roundQty(s, Math.min(restQ, closable(st, sym, side)));
      var q2 = samePos(st, sym, side);
      if (restQ >= s.min - 1e-12) placeLimit(st, SP, sym, side, restQ, px, q2 ? q2.lev : lev, tp, sl, now, newId(), x);
      return { ok: true, filled: filled, rested: restQ >= s.min - 1e-12 ? restQ : 0, px: filled ? w.px : px };
    }
    applyFill(st, SP, sym, side, qty, px, s.taker, lev, null, now, x);
    setTs();
    return { ok: true, filled: qty, rested: 0, px: px };
  }
  function closeMarket(st, SP, k, book, now) {
    var p = st.pos[k]; if (!p) return { err: 'no_pos' };
    var s = SP[p.sym], lv = p.side === 1 ? book && book.bids : book && book.asks;
    if (!lv || !lv.length) return { err: 'book' };
    var px = walk(lv, p.qty, -p.side, s.tick);
    if (!(px > 0)) return { err: 'book' };
    var f = closeAt(st, SP, k, px, 'close', now);
    return { ok: true, px: px, net: f ? f.pnl - f.fee : 0 };
  }
  /* 전부 닫기: books = { 종목: 호가 } — 호가가 없는 종목은 남긴다 */
  function closeAll(st, SP, books, now) {
    var n = 0, left = 0, net = 0;
    Object.keys(st.pos).forEach(function (k) {
      var p = st.pos[k]; if (!p) return;
      var r = closeMarket(st, SP, k, books && books[p.sym], now);
      if (r.ok) { n++; net += r.net; } else left++;
    });
    if (!n && left) return { err: 'book' };
    if (!n) return { err: 'no_pos' };
    return { ok: true, n: n, left: left, net: net };
  }
  /* 반대로 뒤집기: 시장가로 닫고 같은 수량 · 같은 레버리지로 반대 방향 열기. 열 수 없으면 아무것도 안 한다 */
  function reverse(st, SP, k, book, now, marks) {
    var p = st.pos[k]; if (!p) return { err: 'no_pos' };
    var c = JSON.parse(JSON.stringify(st));
    var r1 = closeMarket(c, SP, k, book, now);
    if (r1.err) return r1;
    var r2 = order(c, SP, { sym: p.sym, side: -p.side, type: 'market', qty: p.qty, lev: p.lev, mm: p.mm }, book, 0, now, function () { return 'rv'; }, marks);
    if (r2.err) return r2;
    for (var x in c) st[x] = c[x];
    return { ok: true, px: r2.px, net: r1.net };
  }
  function setTpsl(st, SP, k, tp, sl, ref, now) {
    var p = st.pos[k]; if (!p) return { err: 'no_pos' };
    var s = SP[p.sym];
    tp = tp == null || tp === '' ? null : roundPx(s, +tp);
    sl = sl == null || sl === '' ? null : roundPx(s, +sl);
    if ((tp != null && !(tp > 0)) || (sl != null && !(sl > 0))) return { err: 'tpsl_num' };
    if (ref > 0 && tp != null && (p.side === 1 ? tp <= ref : tp >= ref)) return { err: 'tp_now' };
    if (ref > 0 && sl != null && (p.side === 1 ? sl >= ref : sl <= ref)) return { err: 'sl_now' };
    p.tp = tp; p.sl = sl; p.tpslAt = now;
    return { ok: true };
  }
  /* 포지션 모드 바꾸기 — 포지션 · 주문이 하나도 없을 때만 */
  function setMode(st, mode) {
    if (Object.keys(st.pos).length || st.ord.length) return { err: 'mode_busy' };
    st.mode = mode === 'hedge' ? 'hedge' : 'one';
    return { ok: true };
  }

  /* 오류 문구 — 서버와 화면이 같이 쓴다 */
  function errText(r, unit, Q) {
    var f = function (v, d) { return Number(v).toLocaleString('en-US', { maximumFractionDigits: d == null ? 2 : d }); };
    switch (r && r.err) {
      case 'sym': return '거래할 수 없는 종목이에요.';
      case 'min': return '최소 수량은 ' + f(r.min, 8) + ' ' + (unit || '') + '이에요.';
      case 'px': return '지정가를 넣어 주세요.';
      case 'max_qty': return '한 번에 걸 수 있는 수량은 최대 ' + f(r.max, 8) + ' ' + (unit || '') + '이에요.';
      case 'max_mkt': return '시장가는 한 번에 최대 ' + f(r.max, 8) + ' ' + (unit || '') + '까지예요. 나눠서 주문해 주세요.';
      case 'band_hi': return '롱 지정가는 Mark 가격보다 너무 높을 수 없어요. 최대 ' + f(r.lim) + '이에요.';
      case 'band_lo': return '숏 지정가는 Mark 가격보다 너무 낮을 수 없어요. 최소 ' + f(r.lim) + '이에요.';
      case 'book': return '호가를 받지 못했어요. 잠시 뒤 다시 해 주세요.';
      case 'min_q': return '주문 금액은 최소 ' + f(r.min) + ' ' + (Q || '') + '예요.';
      case 'cap': return r.lev + 'x에서는 포지션(걸어 둔 주문 포함)을 최대 ' + f(r.cap) + ' ' + (Q || '') + '어치까지 열 수 있어요. 수량이나 레버리지를 낮춰 주세요.';
      case 'funds': return '가용 잔고가 모자라요. 필요 ' + f(r.need) + ' · 가용 ' + f(r.bal) + ' ' + (Q || '');
      case 'tpsl_num': return 'TP·SL 가격은 숫자로 넣어 주세요.';
      case 'tp_side': return 'TP는 롱이면 진입가보다 높게, 숏이면 낮게 넣어 주세요.';
      case 'sl_side': return 'SL은 롱이면 진입가보다 낮게, 숏이면 높게 넣어 주세요.';
      case 'tp_now': return 'TP 가격이 이미 지금 가격을 지났어요.';
      case 'sl_now': return 'SL 가격이 이미 지금 가격을 지났어요.';
      case 'no_pos': return '열린 포지션이 없어요.';
      case 'side': return '방향을 골라 주세요.';
      case 'ro_none': return '줄일 포지션이 없어요. 감소 전용(닫기) 주문은 반대 방향 포지션이 있을 때만 걸 수 있어요.';
      case 'post_only': return '메이커 전용 주문이 바로 체결될 가격이라 취소했어요. 가격을 호가 안쪽으로 옮겨 주세요.';
      case 'trig_num': return '조건 가격(Trigger)을 넣어 주세요.';
      case 'trig_now': return '조건 가격이 지금 가격과 같아요. 조금 위나 아래로 넣어 주세요.';
      case 'cb': return '되돌림 비율은 0.1% ~ 10% 사이로 넣어 주세요.';
      case 'act_num': return '시작 가격은 숫자로 넣어 주세요.';
      case 'act_side': return '시작 가격은 롱 보호(팔기)면 지금 기준 가격보다 높게, 숏 보호(사기)면 낮게 넣어 주세요.';
      case 'mode_busy': return '포지션과 주문이 모두 없을 때만 바꿀 수 있어요.';
      case 'mm_busy': return '이 종목에 포지션이나 주문이 있으면 증거금 방식을 바꿀 수 없어요.';
      case 'has_pos': return '포지션이 있을 때는 레버리지를 바꿀 수 없어요.';
      case 'pos_cap': return '포지션은 최대 ' + (r.max || MAX_POS) + '개까지 열 수 있어요(걸어 둔 주문으로 새로 열릴 포지션도 함께 세요). 하나를 닫거나 주문을 취소한 뒤 다시 해 주세요.';
      case 'ord_cap': return '대기 주문은 최대 ' + (r.max || MAX_ORD) + '개까지 걸 수 있어요. 안 쓰는 주문을 취소한 뒤 다시 해 주세요.';
      default: return '처리하지 못했어요. 잠시 뒤 다시 해 주세요.';
    }
  }

  return {
    MIN: MIN, MAX_POS: MAX_POS, MAX_ORD: MAX_ORD, posSlots: posSlots, prep: prep, tierOf: tierOf, maxNotional: maxNotional, liqPrice: liqPrice, posLiq: posLiq, mmOf: mmOf,
    roundQty: roundQty, roundPx: roundPx, fix: fix, walk: walk, walkLimit: walkLimit,
    newState: newState, pkey: pkey, keysOf: keysOf, samePos: samePos, oppPos: oppPos, closable: closable, symMM: symMM,
    openPart: openPart, sameSideResting: sameSideResting, exposed: exposed, avail: avail,
    applyFill: applyFill, liquidate: liquidate, closeAt: closeAt, placeLimit: placeLimit, cancelOrder: cancelOrder, cancelAll: cancelAll,
    fillLimit: fillLimit, payFunding: payFunding, fundTimes: fundTimes, liqHit: liqHit, liqOf: liqOf,
    crossState: crossState, crossCheck: crossCheck, trailStop: trailStop,
    replayBar: replayBar, onTrade: onTrade, onMark: onMark, sweepBars: sweepBars,
    upnl: upnl, equity: equity, order: order, closeMarket: closeMarket, closeAll: closeAll, reverse: reverse,
    setTpsl: setTpsl, setMode: setMode, errText: errText
  };
})();
window.A99E = A99E;

;
/* 안드레99 — 모의투자 탭 (앱 안 6번째 탭)  v2026.10.11-C
   앱이 이 파일을 「모의투자」 탭을 처음 누를 때만 불러온다(paper/paper.js = 차트 라이브러리 + 공용 엔진 + 이 파일).
   window.A99Paper.mount(host) → show() / hide()
   화면 순서(거래소 모바일 관례): 종목 머리 → 주문 | 호가 → 내 거래. 차트는 머리의 차트 단추(전체 화면) 또는 아래 「차트」 줄(작은 창).
   계산·체결은 서버가 한다. 이 화면은 서버가 준 계좌를 보여 주고, 실시간 시세로 평가·「걸렸다」 신호만 보낸다. */
(function () {
'use strict';
if (window.A99Paper) return;

var VER = '2026.11.12-A';
var Q = 'US' + 'DT';                              // 모의 계좌 단위 표기 (가상 · 실제 돈 아님). 가격은 하이퍼리퀴드 달러 시세
var WSURL = 'wss://api.hyperliquid.xyz/ws';      // 실시간 시세: 하이퍼리퀴드 공개 자료
var HLI = 'https://api.hyperliquid.xyz/info';
var DSP = { GOLD: 'XAU', SILVER: 'XAG', PLATINUM: 'XPT', PALLADIUM: 'XPD' };
function bare(k) { var i = String(k).indexOf(':'); return i >= 0 ? k.slice(i + 1) : k; }
function BS(k) { var b = bare(k); if (b !== k) return DSP[b] || b; return /^k[A-Z]/.test(k) ? '1000' + k.slice(1) : k; }   // 화면 표기: 금 = XAU · 은 = XAG · k로 시작 = 1000단위 · xyz: 접두어는 숨김   // 화면 표기: 금 = XAU · k로 시작 = 1000단위
function NM(k) { return BS(k) + Q; }
function NMH(k) { return esc(BS(k)) + '<span class="pp-q">' + Q + '</span>'; }   // <i>는 종목 고르기에서 장 마감 점으로 쓰여서 span   // 2026.10.21-A 화면 표기: 종목은 크게 · 단위는 작게 → 한 줄
var API = window.A99P_API || 'https://andre99-paper.jhw5282435.workers.dev';
var H9 = 9 * 3600e3;
var FRESH = 30000;
var LS_TOK = 'a99p.tok2', LS_UI = 'a99p.ui2';
var E = window.A99E;

/* ── 화면 모양 — 색 · 서체는 맨 위 변수만 바꾸면 전체가 바뀐다 ── */
/* 시험 테마「프로 트레이딩」(2026.10.12 운영자 확정) — 모의투자 탭에 있을 때만 앱 전체(위쪽 바·하단 탭 포함)에 씌운다.
   숫자 · 영문 = A99 Sans — IBM Plex Sans 를 필요한 글자만 잘라 이름을 바꾼 것(2026.11.01-A · OFL 예약 이름 "Plex" 때문에 이름 변경) · 한글 = 프리텐다드 · 순검정 바탕 · 각진 모서리
   색 = 세계 거래소 표준(초록 = 롱 · 상승, 빨강 = 숏 · 하락). 「용어 · 설정」에서 한국식(빨강 = 상승)으로 바꿀 수 있다(이 기기 저장). */
/* ── 글꼴 고지 (2026.11.01-A) ──────────────────────────────────────────────
   A99 Sans = IBM Plex Sans 의 수정본(필요한 글자만 잘라 냄 · 이름 변경).
   Copyright © 2017 IBM Corp. with Reserved Font Name "Plex".
   This Font Software is licensed under the SIL Open Font License, Version 1.1.
   This license is copied below, and is also available with a FAQ at: https://openfontlicense.org

   SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
   PREAMBLE
   The goals of the Open Font License (OFL) are to stimulate worldwide development of collaborative font projects, to support the font
   creation efforts of academic and linguistic communities, and to provide a free and open framework in which fonts may be shared and
   improved in partnership with others.
   The OFL allows the licensed fonts to be used, studied, modified and redistributed freely as long as they are not sold by themselves.
   The fonts, including any derivative works, can be bundled, embedded, redistributed and/or sold with any software provided that any
   reserved names are not used by derivative works. The fonts and derivatives, however, cannot be released under any other type of license.
   The requirement for fonts to remain under this license does not apply to any document created using the fonts or their derivatives.
   DEFINITIONS
   "Font Software" refers to the set of files released by the Copyright Holder(s) under this license and clearly marked as such. This may
   include source files, build scripts and documentation.
   "Reserved Font Name" refers to any names specified as such after the copyright statement(s).
   "Original Version" refers to the collection of Font Software components as distributed by the Copyright Holder(s).
   "Modified Version" refers to any derivative made by adding to, deleting, or substituting -- in part or in whole -- any of the components
   of the Original Version, by changing formats or by porting the Font Software to a new environment.
   "Author" refers to any designer, engineer, programmer, technical writer or other person who contributed to the Font Software.
   PERMISSION & CONDITIONS
   Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed,
   modify, redistribute, and sell modified and unmodified copies of the Font Software, subject to the following conditions:
   1) Neither the Font Software nor any of its individual components, in Original or Modified Versions, may be sold by itself.
   2) Original or Modified Versions of the Font Software may be bundled, redistributed and/or sold with any software, provided that each
   copy contains the above copyright notice and this license. These can be included either as stand-alone text files, human-readable
   headers or in the appropriate machine-readable metadata fields within text or binary files as long as those fields can be easily
   viewed by the user.
   3) No Modified Version of the Font Software may use the Reserved Font Name(s) unless explicit written permission is granted by the
   corresponding Copyright Holder. This restriction only applies to the primary font name as presented to the users.
   4) The name(s) of the Copyright Holder(s) and the Author(s) of the Font Software shall not be used to promote, endorse or advertise any
   Modified Version, except to acknowledge the contribution(s) of the Copyright Holder(s) and the Author(s) or with their explicit written
   permission.
   5) The Font Software, modified or unmodified, in part or in whole, must be distributed entirely under this license, and must not be
   distributed under any other license. The requirement for fonts to remain under this license does not apply to any document created
   using the Font Software.
   TERMINATION
   This license becomes null and void if any of the above conditions are not met.
   DISCLAIMER
   THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL
   THE COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR
   CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT
   SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.
   ──────────────────────────────────────────────────────────────────────── */
var FONT = '"A99 Sans","Pretendard Variable",Pretendard,-apple-system,system-ui,sans-serif';
var UR = 'unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
function face(w, b64) { return '@font-face{font-family:"A99 Sans";font-style:normal;font-weight:' + w + ';font-display:swap;src:url(data:font/woff2;base64,' + b64 + ') format("woff2");' + UR + '}'; }
var CSS = [
face('100 450', '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'),
face('451 650', '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'),
face('651 950', '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'),
'html.pp-theme{--bg:#000;--s1:#0E0E10;--s2:#17171A;--s3:#212125;--line:#1C1C20;--tx:#FAFAFA;--tx2:#9A9AA2;--tx3:#63636B;--up:#22C083;--dn:#F0475A;--mono:' + FONT + '}',
'html.pp-theme.pp-cr{--up:#FF5B5B;--dn:#4D8DFF}',
'html.pp-theme body,html.pp-theme .pp-sh .pn{font-family:' + FONT + ';font-feature-settings:"tnum"}',
'.pp{--pf:' + FONT + ';--pn:var(--pf);--pc1:var(--s1);--pc2:var(--s2);--pc3:var(--s3);--pl:var(--line);--pt1:var(--tx);--pt2:var(--tx2);--pt3:var(--tx3);--pup:var(--up);--pdn:var(--dn);--pbuy:#179E69;--psell:#DE3F51;--pwarn:#F5A524;--pr:8px;font-family:var(--pf);font-feature-settings:"tnum";padding:0 16px 8px}',
'html.pp-cr .pp{--pbuy:#F0484E;--psell:#3A7BF2}',
'.pp-t{text-decoration:underline dotted;text-decoration-color:var(--pt3);text-underline-offset:3px;cursor:help}',
'.pp-gl{margin:0;display:grid;gap:0}',
'.pp-gl div{padding:10px 0;border-bottom:1px solid var(--line)}',
'.pp-gl dt{font-size:14px;font-weight:700}',
'.pp-gl dt small{font-size:12px;color:var(--tx2);font-weight:500;margin-left:6px}',
'.pp-gl dd{margin:3px 0 0;font-size:12.5px;color:var(--tx2);line-height:1.6}',
'.pp-cseg{display:grid;grid-template-columns:1fr 1fr;gap:6px}',
'.pp-cseg button{min-height:46px;border-radius:8px;background:var(--s2);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:6px}',
'.pp-cseg button.on{box-shadow:inset 0 0 0 1.5px var(--tx)}',
'.pp-cseg i{display:inline-block;width:10px;height:10px;border-radius:2px}',
'.pp [hidden]{display:none!important}',
'.pp .up{color:var(--pup)} .pp .dn{color:var(--pdn)}',
'.pp-n{font-family:var(--pn);font-variant-numeric:tabular-nums}',
/* 머리 */
'.pp-hd{display:flex;align-items:center;gap:8px;padding:6px 0 8px}',
'.pp-pick{display:flex;flex-direction:column;align-items:flex-start;gap:1px;min-width:0;text-align:left}',
'.pp-pick b{display:flex;align-items:center;gap:6px;font-size:18px;font-weight:800;letter-spacing:-.02em;color:var(--pt1)}',
'.pp-pick b small{font-size:11px;font-weight:600;color:var(--pt2);border:1px solid var(--pl);border-radius:6px;padding:1px 6px;letter-spacing:0;white-space:nowrap;flex:none}',
'.pp-pick{flex:0 1 auto} .pp-pick b{white-space:nowrap;min-width:0;max-width:100%} .pp-pick b>span{overflow:hidden;text-overflow:ellipsis}',
'#pp-hname.lg{font-size:15px}',
'span.pp-q{display:inline!important;width:auto!important;height:auto!important;background:none!important;border-radius:0!important;margin:0 0 0 1px!important;font-style:normal;font-size:.62em;font-weight:600;color:var(--pt2);margin-left:1px;letter-spacing:0;white-space:nowrap;vertical-align:baseline}',
'.pp-pick .l2{display:flex;align-items:center;gap:6px;white-space:nowrap}',
'.pp-pick .l2 .pp-mc{margin:0}',
'.pp-vw{display:flex;gap:22px;margin:0 0 6px;border-bottom:1px solid var(--pl)}',
'.pp-vw button{min-height:42px;padding:0 2px;background:none;font-size:17px;font-weight:800;letter-spacing:-.01em;color:var(--pt3);border-bottom:2px solid transparent;margin-bottom:-1px}',
'.pp-vw button.on{color:var(--pt1);border-bottom-color:var(--pt1)}',
'.pp-rkv{padding-top:6px;min-height:60vh}',
'.pp-pick b svg{width:12px;height:12px;fill:var(--pt2)}',
'.pp-pick>span{font-size:12px;font-family:var(--pn);font-weight:600}',
'.pp-hd .sp{flex:1}',
'.pp-ib{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:var(--pr);color:var(--pt1)}',
'.pp-ib:active{background:var(--pc2)}',
'.pp-ib svg{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:1.8}',
'.pp-me{min-height:34px;max-width:120px;padding:0 10px;border-radius:var(--pr);background:var(--pc2);color:var(--pt1);font-size:12.5px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
'.pp-me.cta{background:var(--pt1);color:var(--bg)}',
/* 계좌 한 줄 */
'.pp-ac{display:flex;align-items:center;gap:10px;width:100%;padding:9px 12px;margin:0 0 10px;border-radius:var(--pr);background:var(--pc1);text-align:left;font-size:12px;color:var(--pt3)}',
'.pp-ac b{color:var(--pt1);font-size:14px;font-family:var(--pn);font-weight:700}',
'.pp-ac em{font-style:normal;font-family:var(--pn);font-weight:600}',
'.pp-ac .r{margin-left:auto;color:var(--pt2)}',
'.pp-ac .r b{font-size:12.5px}',
'.pp-gst{padding:12px;margin:0 0 10px;border-radius:var(--pr);background:var(--pc1)}',
'.pp-gst p{margin:0 0 10px;font-size:13px;color:var(--pt2);line-height:1.55}',
'.pp-gst p b{color:var(--pt1)}',
'.pp-row2{display:flex;gap:8px}',
'.pp-row2>*{flex:1}',
'.pp-ban{display:flex;gap:10px;align-items:center;margin:0 0 10px;padding:10px 12px;border-radius:var(--pr);border:1px solid var(--pwarn);font-size:12.5px;line-height:1.5}',
'.pp-ban p{margin:0;flex:1}',
'.pp-ban button{flex:none;min-height:32px;padding:0 10px;border-radius:8px;background:var(--pt1);color:var(--bg);font-size:12px;font-weight:700}',
'.pp-ban button.x{background:transparent;color:var(--pt3);padding:0 4px}',
/* 주문 | 호가 */
'.pp-tr{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.78fr);gap:10px}',
'.pp-of{display:flex;flex-direction:column;gap:8px;min-width:0}',
'.pp-ot{display:grid;grid-template-columns:1fr 1fr;gap:6px}',
'.pp-ot>*{min-height:34px;border-radius:8px;background:var(--pc2);font-size:12.5px;font-weight:700;color:var(--pt1);display:flex;align-items:center;justify-content:center;gap:4px}',
'.pp-seg{display:grid;grid-template-columns:1fr 1fr;background:var(--pc2);border-radius:var(--pr);padding:3px}',
'.pp-seg button{min-height:32px;border-radius:8px;font-size:13px;color:var(--pt2);font-weight:600}',
'.pp-seg button.on{background:var(--pc3);color:var(--pt1);font-weight:700}',
'.pp-fld{display:flex;align-items:center;gap:6px;min-height:46px;padding:0 4px 0 10px;border-radius:var(--pr);background:var(--pc2)}',
'.pp-fld:focus-within{box-shadow:inset 0 0 0 1px var(--pt3)}',
'.pp-fld .k{display:flex;flex-direction:column;min-width:0;flex:1}',
'.pp-fld .k span{font-size:10.5px;color:var(--pt3);line-height:1.2}',
'.pp-fld input{width:100%;min-width:0;background:none;border:0;outline:0;font-size:14.5px;letter-spacing:-.02em;font-weight:700;font-family:var(--pn);color:var(--pt1);padding:0}',
'.pp-fld input::placeholder{color:var(--pt3);font-weight:500;font-family:var(--pf)}',
'.pp-fld em{font-style:normal;font-size:11.5px;color:var(--pt2);flex:none;padding-right:6px;font-weight:600}',
'.pp-fld .st{flex:none;width:26px;height:34px;border-radius:8px;color:var(--pt1);font-size:18px;line-height:1}',
'.pp-fld .st:active{background:var(--pc3)}',
'.pp-fld .bb{flex:none;min-height:30px;padding:0 6px;border-radius:7px;background:var(--pc3);color:var(--pt1);font-size:11.5px;font-weight:700}',
'.pp-sl{padding:2px 4px 0}',
'.pp-sl input{width:100%;margin:0;accent-color:var(--pt1)}',
'.pp-sl .tk{display:flex;justify-content:space-between;font-size:10.5px;color:var(--pt3);font-family:var(--pn)}',
'.pp-chk{display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--pt2);min-height:30px}',
'.pp-chk input{width:17px;height:17px;accent-color:var(--pt1)}',
'.pp-kv2{display:flex;justify-content:space-between;gap:6px;font-size:11.5px;color:var(--pt3)}',
'.pp-kv2 b{color:var(--pt1);font-weight:600;font-family:var(--pn)}',
'.pp-b{min-height:44px;border-radius:var(--pr);font-size:14px;font-weight:700;background:var(--pt1);color:var(--bg);width:100%}',
'.pp-b.gh{background:var(--pc2);color:var(--pt1)}',
'.pp-b.ln{background:transparent;box-shadow:inset 0 0 0 1px var(--pl);color:var(--pt1)}',
'.pp-ob{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:50px;border-radius:var(--pr);color:#fff;width:100%;line-height:1.25}',
'.pp-ob b{font-size:15px;font-weight:800}',
'.pp-ob b small{font-size:11px;font-weight:600;opacity:.85;margin-left:1px}',
'.pp-tag small{font-size:9.5px;opacity:.8;margin-left:1px}',
'.pp-or .l small small,.pp-or .l span small{display:inline;font-size:10px;margin:0}',
'.pp-ob span{font-size:11px;opacity:.8;font-family:var(--pn)}',
'.pp-ob.buy{background:var(--pbuy)} .pp-ob.sell{background:var(--psell)}',
'.pp-b:disabled,.pp-ob:disabled{opacity:.45}',
'.pp-liq{font-size:11px;color:var(--pt3);text-align:right;margin-top:-4px}',
'.pp-liq b{color:var(--pwarn);font-weight:600;font-family:var(--pn)}',
'.pp-err{margin:0;font-size:12px;color:var(--pwarn);line-height:1.5}',
'.pp-tpr{display:grid;gap:6px}',
'.pp-bk{min-width:0;font-family:var(--pn);font-size:11px;font-variant-numeric:tabular-nums}',
'.pp-bk .fd{font-family:var(--pf);font-size:10.5px;color:var(--pt3);text-align:right;line-height:1.35;margin-bottom:4px}',
'.pp-bk .fd b{color:var(--pt1);font-family:var(--pn);font-weight:600}',
'.pp-bk .hd{display:flex;justify-content:space-between;align-items:center;color:var(--pt3);font-size:10.5px;padding:0 2px 3px;font-family:var(--pf)}',
'.pp-bkt{font-family:var(--pn);font-size:10.5px;color:var(--pt2);background:var(--pc1);padding:2px 7px;min-height:22px;border-radius:2px}',
'.pp-bk .lr{position:relative;display:flex;justify-content:space-between;align-items:center;height:22px;padding:0 2px;width:100%;text-align:left}',
'.pp-bk .lr::before{content:"";position:absolute;top:1px;bottom:1px;right:0;width:var(--w,0%);opacity:.18;pointer-events:none}',
'.pp-bk .a .lr::before{background:var(--pdn)} .pp-bk .b .lr::before{background:var(--pup)}',
'.pp-bk .a .p{color:var(--pdn)} .pp-bk .b .p{color:var(--pup)}',
'.pp-bk .s{color:var(--pt2)}',
'.pp-bk .mid{padding:6px 2px}',
'.pp-bk .mid b{display:block;font-size:17px;font-weight:800;letter-spacing:-.02em}',
'.pp-bk .mid span{font-size:10.5px;color:var(--pt3)}',
'.pp-bk .ratio{display:flex;align-items:center;gap:4px;margin-top:6px;font-size:10.5px}',
'.pp-bk .ratio i{flex:1;height:4px;border-radius:2px;background:var(--pdn);overflow:hidden;display:flex}',
'.pp-bk .ratio i u{display:block;height:100%;background:var(--pup)}',
'.pp-bk .em{color:var(--pt3);font-size:11.5px;padding:12px 0;font-family:var(--pf)}',
/* 내 거래 */
'.pp-tabs{display:flex;gap:14px;margin:22px 0 4px;border-bottom:1px solid var(--pl);overflow-x:auto;scrollbar-width:none}',
'.pp-tabs::-webkit-scrollbar{display:none}',
'.pp-tabs button{flex:none;min-height:42px;font-size:14px;font-weight:700;color:var(--pt3);border-bottom:2px solid transparent;margin-bottom:-1px}',
'.pp-tabs button.on{color:var(--pt1);border-bottom-color:var(--pt1)}',
'.pp-tabs button span{font-family:var(--pn);font-weight:600;margin-left:2px}',
'.pp-list{min-height:120px}',
'.pp-empty{margin:0;padding:22px 0;font-size:13px;color:var(--pt3);line-height:1.6;text-align:center}',
'.pp-pc{padding:14px 0;border-bottom:1px solid var(--pl)}',
'.pp-pc .t{display:flex;align-items:center;gap:6px;flex-wrap:wrap}',
'.pp-pc .t b{font-size:15px;font-weight:800}',
'.pp-tag{font-size:11px;padding:1px 6px;border-radius:5px;box-shadow:inset 0 0 0 1px var(--pl);color:var(--pt2);font-weight:600}',
'.pp-tag.up{color:var(--pup);box-shadow:inset 0 0 0 1px var(--pup)} .pp-tag.dn{color:var(--pdn);box-shadow:inset 0 0 0 1px var(--pdn)}',
'.pp-pc .pl{display:flex;justify-content:space-between;align-items:flex-end;margin-top:10px}',
'.pp-pc .pl span{display:block;font-size:11.5px;color:var(--pt3)}',
'.pp-pc .pl b{font-size:20px;font-weight:800;font-family:var(--pn);letter-spacing:-.02em}',
'.pp-pc .pl .r{text-align:right}',
'.pp-pc .pl .r b{font-size:16px}',
'.pp-pg{margin:10px 0 0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px 10px}',
'.pp-pg div{min-width:0} .pp-pg div:nth-child(3n){text-align:right}',
'.pp-pg dt{font-size:11px;color:var(--pt3)} .pp-pg dd{margin:1px 0 0;font-size:13.5px;font-family:var(--pn);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
'.pp-pg .w{color:var(--pwarn)}',
'.pp-pc .tp{display:flex;justify-content:space-between;margin-top:10px;padding:8px 10px;border-radius:8px;background:var(--pc1);font-size:12px;color:var(--pt3)}',
'.pp-pc .tp b{color:var(--pt1);font-family:var(--pn);font-weight:600}',
'.pp-pc .bt{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}',
'.pp-pc .bt button{min-height:40px;border-radius:var(--pr);background:var(--pc2);color:var(--pt1);font-size:13px;font-weight:700}',
'.pp-pc .bt button.arm{background:var(--pwarn);color:#111}',
'.pp-pc .bt button:disabled{opacity:.45}',
'.pp-or{display:flex;align-items:center;gap:8px;padding:12px 0;border-bottom:1px solid var(--pl);font-size:13px}',
'.pp-or .l{flex:1;min-width:0}',
'.pp-or small{display:block;color:var(--pt3);font-size:12px;font-family:var(--pn);margin-top:2px}',
'.pp-sb{min-height:34px;padding:0 12px;border-radius:8px;background:var(--pc2);font-size:12px;font-weight:700;color:var(--pt1)}',
'.pp-sb:disabled{opacity:.45}',
'.pp-fr{display:grid;grid-template-columns:auto 1fr auto;gap:2px 10px;padding:10px 0;border-bottom:1px solid var(--pl);font-size:13px;align-items:baseline}',
'.pp-fr .tm{font-size:11.5px;color:var(--pt3);font-family:var(--pn)}',
'.pp-fr .k{font-weight:700}',
'.pp-fr .k.w{color:var(--pwarn)}',
'.pp-fr .v{text-align:right;font-weight:700;font-family:var(--pn)}',
'.pp-fr .d{grid-column:2/4;font-size:11.5px;color:var(--pt3);font-family:var(--pn)}',
'.pp-rk-me{padding:10px 12px;border-radius:var(--pr);background:var(--pc1);font-size:13px;margin:8px 0 4px}',
'.pp-rk{list-style:none;margin:0;padding:0}',
'.pp-rk li{display:grid;grid-template-columns:26px minmax(0,1fr) auto 70px;gap:8px;align-items:center;min-height:42px;border-bottom:1px solid var(--pl);font-size:13px}',
'.pp-rk li.me{background:var(--pc1)}',
'.pp-rk-off li{opacity:.72}',
'.pp-rk .r{color:var(--pt3);text-align:right;font-weight:700;font-family:var(--pn)}',
'.pp-rk .nk{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600}',
'.pp-rk .nk small{color:var(--pt3);font-size:11px;margin-left:4px;font-weight:500}',
'.pp-off{display:inline-block;margin-left:6px;padding:1px 5px;border:1px solid currentColor;font-style:normal;font-size:9.5px;font-weight:700;letter-spacing:.06em;color:#F5A524;vertical-align:2px}',
'.pp-rk .e,.pp-rk .p{text-align:right;font-family:var(--pn)}',
'.pp-rk li[data-pnick]{cursor:pointer}',
'.pp-t5,.pp-pub{display:inline-block;margin-left:6px;padding:1px 5px;font-style:normal;font-size:9.5px;font-weight:700;letter-spacing:.04em;vertical-align:2px;border:1px solid currentColor}',
'.pp-t5{color:var(--pup,#22C083)} .pp-pub{color:var(--pt2,#A0A0A5)}',
'.pp-per{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:0 0 6px}',
'.pp-per button{min-height:34px;border-radius:8px;background:var(--pc2);color:var(--pt2);font-size:13px;font-weight:600}',
'.pp-per button.on{background:var(--pc3);color:var(--pt1)}',
'.pp-pfg{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}',
'.pp-pfg div{border-radius:10px;background:var(--s2);padding:9px 11px;min-width:0}',
'.pp-pfg span{display:block;font-size:11.5px;color:var(--tx3)}',
'.pp-pfg b{display:block;font-size:16px;font-family:var(--mono);margin-top:2px}',
'.pp-pfg small{display:block;font-size:11px;color:var(--tx3);margin-top:1px}',
'.pp-cv{width:100%;height:64px;display:block}',
'.pp-pl{display:grid;gap:0}',
'.pp-pl div{display:flex;justify-content:space-between;gap:8px;padding:8px 0;border-bottom:1px solid var(--line);font-size:12.5px}',
'.pp-pl div small{display:block;color:var(--tx3);font-size:11px;margin-top:1px}',
'.pp-pl .r{text-align:right;font-family:var(--mono)}',
'.pp-rk .p{font-size:12.5px;font-weight:600}',
'.pp-mo{display:flex;gap:6px;overflow-x:auto;padding:12px 0 2px;scrollbar-width:none}',
'.pp-mo::-webkit-scrollbar{display:none}',
'.pp-mo button{flex:none;min-height:32px;padding:0 12px;border-radius:8px;background:var(--pc2);font-size:12px;color:var(--pt2);font-weight:600}',
'.pp-mo button.on{background:var(--pt1);color:var(--bg)}',
'.pp-note{margin:8px 0 0;font-size:11.5px;color:var(--pt3);line-height:1.6}',
'.pp-foot{margin:22px 0 56px;font-size:11.5px;color:var(--pt3);line-height:1.7}',
'.pp-foot p{margin:0 0 4px}',
/* 아래 「차트」 줄 · 차트 창 */
'.pp-cbar{position:fixed;left:0;right:0;bottom:calc(var(--nav-h,60px) + env(safe-area-inset-bottom));z-index:39;display:flex;align-items:center;gap:8px;height:44px;padding:0 16px;background:var(--bg);border-top:1px solid var(--pl);font-size:13.5px;font-weight:700;color:var(--pt1);width:100%;text-align:left}',
'.pp-cbar span{font-family:var(--pn);font-weight:600;font-size:12.5px;color:var(--pt2)}',
'.pp-cbar svg{margin-left:auto;width:16px;height:16px;stroke:var(--pt2);fill:none;stroke-width:2}',
'.pp-cw{position:fixed;left:0;right:0;bottom:0;z-index:94;display:flex;flex-direction:column;background:var(--bg);border-top:1px solid var(--pl);border-radius:12px 12px 0 0;height:min(74vh,640px);padding-bottom:env(safe-area-inset-bottom);box-shadow:0 -12px 32px rgba(0,0,0,.5)}',
'.pp-cw.full{top:0;height:auto;border-radius:0;border-top:0;padding-top:env(safe-area-inset-top);z-index:2000}',
'.pp-cw .gr{width:36px;height:4px;border-radius:2px;background:var(--pl);margin:6px auto 0;flex:none}',
'.pp-cw.full .gr{display:none}',
'.pp-cw .bar{flex:none;display:flex;align-items:center;gap:8px;padding:4px 8px 4px 16px}',
'.pp-cw .bar b{font-size:14px;font-weight:800}',
'.pp-cw .bar .px{font-family:var(--pn);font-size:13px;font-weight:700}',
'.pp-cw .bar .pc-ch{font-family:var(--pn);font-size:12px;font-weight:600}',
'.pp-cw .bar .sp{flex:1}',
'.pp-cw .pc-ob{flex:none;display:flex;gap:12px;padding:0 16px 6px;font-size:11.5px;color:var(--pt3);font-family:var(--pn);white-space:nowrap;overflow:hidden}',
'.pp-cw .pc-ob b{font-weight:600;margin-left:3px}',
'.pp-cw .pc-ob .pc-bid b{color:var(--pup)} .pp-cw .pc-ob .pc-ask b{color:var(--pdn)} .pp-cw .pc-ob .pc-mk b{color:var(--pt2)}',
'.pp-cw .tf{flex:none;display:flex;align-items:center;gap:2px;padding:0 10px 6px 12px}',
'.pp-cw .tf button{min-height:32px;padding:0 9px;border-radius:8px;font-size:12.5px;color:var(--pt2);font-weight:600}',
'.pp-cw .tf button.on{background:var(--pc2);color:var(--pt1)}',
'.pp-cw .tf .pc-cd{margin-left:auto;font-size:11.5px;color:var(--pt3);white-space:nowrap;font-family:var(--pn)}',
'.pp-cw .pc-ind{flex:none;display:flex;align-items:center;gap:6px;padding:0 12px 8px}',
'.pp-cw .pc-ibt{flex:none;display:inline-flex;align-items:center;gap:5px;min-height:32px;padding:0 11px 0 9px;border-radius:9px;background:var(--pc2);font-size:12.5px;font-weight:700;color:var(--pt1)}',
'.pp-cw .pc-ibt svg{width:15px;height:15px;stroke:var(--pt2);fill:none;stroke-width:2;stroke-linecap:round}',
'.pp-cw .pc-ibt .pc-cnt{min-width:17px;height:17px;padding:0 4px;border-radius:9px;background:var(--pt1);color:var(--bg);font-size:10.5px;line-height:17px;text-align:center}',
'.pp-cw .pc-chips{flex:1;min-width:0;display:flex;gap:6px;overflow-x:auto;scrollbar-width:none}',
'.pp-cw .pc-chips::-webkit-scrollbar{display:none}',
'.pp-cw .pc-chips .pc-none{font-size:11.5px;color:var(--pt3);white-space:nowrap;align-self:center}',
'.pp-cw .pc-chip{flex:none;display:inline-flex;align-items:center;gap:5px;min-height:30px;padding:0 6px 0 10px;border-radius:999px;border:1px solid var(--pl);font-size:12px;font-weight:600;color:var(--pt1);white-space:nowrap}',
'.pp-cw .pc-chip i,.pp-cw .pc-row .pc-sw i{display:inline-block;width:8px;height:2px;border-radius:1px}',
'.pp-cw .pc-chip .pc-x{width:18px;height:18px;display:grid;place-items:center;color:var(--pt3);font-size:13px}',
'.pp-cw .pc-chip.off{color:var(--pt3)}',
'.pp-cw .cv{position:relative;flex:1;min-height:0;border-top:1px solid var(--pl)}',
'.pp-cw .cv>#pp-chart{position:absolute;inset:0;z-index:0}',
'.pp-cw .cv>p{position:absolute;inset:0;margin:0;display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--pt3);text-align:center;padding:0 24px;pointer-events:none;z-index:2}',
'.pp-cw .pc-lg{position:absolute;left:10px;top:6px;z-index:3;pointer-events:none;font-size:11px;color:var(--pt2);display:flex;flex-wrap:wrap;gap:2px 8px;max-width:calc(100% - 80px);font-family:var(--pn)}',
'.pp-cw .pc-lg b{font-weight:600;color:var(--pt1)}',
'.pp-cw .pc-lg .pc-br{flex-basis:100%;height:0}',
'.pp-cw .pc-lg .pc-li i{display:inline-block;width:7px;height:2px;border-radius:1px;margin-right:4px;vertical-align:middle}',
'.pp-cw .pc-pl{position:absolute;left:6px;z-index:5;display:inline-flex;align-items:center;gap:6px;min-height:24px;padding:0 6px;border-radius:6px;font-size:10.5px;color:var(--pt3);white-space:nowrap;background:rgba(0,0,0,.6);font-family:var(--pn)}',
'.pp-cw .pc-pl b{font-weight:600}',
'.pp-cw .pc-pl svg{width:12px;height:12px;stroke:var(--pt2);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
'.pp-cw .pc-pl[aria-pressed="true"]{color:var(--pt1);background:var(--pc2)}',
'.pp-cw .pc-grip{position:absolute;z-index:6;width:48px;height:30px;margin-top:-15px;display:grid;place-items:center;touch-action:none;cursor:row-resize;border-radius:8px}',
'.pp-cw .pc-grip i{display:block;width:30px;height:5px;border-radius:3px;background:#3A3A3F;box-shadow:0 0 0 3px var(--bg)}',
'.pp-cw .pc-grip:hover i,.pp-cw .pc-grip.on i,.pp-cw .pc-grip:focus-visible i{background:var(--pt2)}',
'.pp-cw .pc-grip:focus-visible{outline:2px solid var(--pt2);outline-offset:-2px}',
'.pp-cw .pc-edges div{position:absolute;right:0;z-index:4;pointer-events:none;white-space:nowrap;text-align:right;border-radius:3px 0 0 3px;font-family:var(--pn)}',
'.pp-cw .pc-edges .pc-lq{background:var(--pwarn);color:#0B0B0C;font-size:10.5px;font-weight:800;line-height:19px;padding:0 6px;box-shadow:0 0 0 1px rgba(0,0,0,.35)}',
'.pp-cw .pc-edges .pc-em{background:var(--pc2);color:var(--pt1);font-size:10px;font-weight:700;line-height:17px;padding:0 6px;box-shadow:inset 0 0 0 1px #3A3A3F}',
'.pp-cw .pc-cpos{flex:none;display:grid;gap:6px;padding:8px 14px 10px;border-top:1px solid var(--pl);font-size:11px;color:var(--pt3)}',
'.pp-cw .pc-cpos .pc-pr{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px}',
'.pp-cw .pc-cpos .pc-pr div{min-width:0}',
'.pp-cw .pc-cpos b{display:block;font-family:var(--pn);font-size:12.5px;color:var(--pt1);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
'.pp-cw .pc-cpos small{display:block;font-family:var(--pn);font-size:11px;font-weight:600}',
'.pp-cw .pc-cpos .pc-lq{color:var(--pwarn)}',
'.pp-cw .pc-iscrim{position:absolute;inset:0;z-index:9;background:rgba(0,0,0,.5)}',
'.pp-cw .pc-isheet{position:absolute;left:0;right:0;bottom:0;z-index:10;max-height:84%;display:flex;flex-direction:column;background:var(--pc1);border-top:1px solid var(--pl);border-radius:14px 14px 0 0;padding-bottom:env(safe-area-inset-bottom)}',
'.pp-cw .pc-ishh{flex:none;display:flex;align-items:center;gap:6px;padding:12px 10px 8px 16px}',
'.pp-cw .pc-ishh b{font-size:15px;font-weight:800}',
'.pp-cw .pc-ishh .sp{flex:1}',
'.pp-cw .pc-ishh button{min-height:34px;padding:0 10px;border-radius:8px;font-size:12.5px;font-weight:700;color:var(--pt2)}',
'.pp-cw .pc-ishh .pc-done{background:var(--pt1);color:var(--bg)}',
'.pp-cw .pc-ishb{flex:1;min-height:0;overflow-y:auto;padding:0 8px 4px}',
'.pp-cw .pc-ishb h3{display:flex;align-items:baseline;gap:6px;margin:10px 8px 4px;font-size:11.5px;font-weight:700;color:var(--pt3);letter-spacing:.02em}',
'.pp-cw .pc-ishb h3 span{font-weight:600}',
'.pp-cw .pc-ishb h3 span.pc-flash{color:var(--pwarn)}',
'.pp-cw .pc-row{width:100%;display:flex;align-items:center;gap:10px;min-height:56px;padding:8px;border-radius:10px;text-align:left}',
'.pp-cw .pc-row:hover{background:var(--pc2)}',
'.pp-cw .pc-row .pc-sw{flex:none;width:18px;display:flex;flex-direction:column;gap:3px;align-items:center}',
'.pp-cw .pc-row .pc-sw i{width:14px}',
'.pp-cw .pc-row .pc-tx{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}',
'.pp-cw .pc-row .pc-tx b{font-size:13.5px;font-weight:700;color:var(--pt1)}',
'.pp-cw .pc-row .pc-tx b em{font-style:normal;font-weight:500;color:var(--pt3);font-size:12px;margin-left:4px}',
'.pp-cw .pc-row .pc-tx small{font-size:11.5px;color:var(--pt2);line-height:1.4}',
'.pp-cw .pc-row .pc-tx small.pc-hint{color:var(--pwarn)}',
'.pp-cw .pc-row .pc-tg{flex:none;position:relative;width:38px;height:22px;border-radius:11px;background:var(--pl);transition:background .15s}',
'.pp-cw .pc-row .pc-tg::after{content:"";position:absolute;left:3px;top:3px;width:16px;height:16px;border-radius:50%;background:var(--pt2);transition:transform .15s}',
'.pp-cw .pc-row[aria-checked="true"] .pc-tg{background:var(--pt1)}',
'.pp-cw .pc-row[aria-checked="true"] .pc-tg::after{transform:translateX(16px);background:var(--bg)}',
'.pp-cw .pc-row[aria-disabled="true"]{opacity:.45}',
'@media (prefers-reduced-motion:reduce){.pp-cw .pc-row .pc-tg,.pp-cw .pc-row .pc-tg::after{transition:none}}',
'.pp-cw .pc-ishf{flex:none;margin:0;padding:8px 16px 12px;font-size:11px;color:var(--pt3);border-top:1px solid var(--pl)}',
'.pp-cbd{position:fixed;inset:0;z-index:93;background:rgba(0,0,0,.35)}',
'html.pp-lock,html.pp-lock body{overflow:hidden}',
/* 시트 */
'.pp-sh{position:fixed;inset:0;z-index:2010}',
'.pp-sh[hidden]{display:none!important}',
'.pp-sh .bd{position:absolute;inset:0;background:rgba(0,0,0,.5)}',
'.pp-sh .pn{position:absolute;left:0;right:0;bottom:0;max-height:88vh;overflow-y:auto;max-width:560px;margin:0 auto;background:var(--bg);border-radius:12px 12px 0 0;padding:6px 16px calc(18px + env(safe-area-inset-bottom,0px));display:grid;gap:10px;font-family:"Pretendard Variable",Pretendard,system-ui,sans-serif;border-top:1px solid var(--line)}',
'.pp-sh .gr{width:36px;height:4px;border-radius:2px;background:var(--line);margin:4px auto 0}',
'.pp-sh .hd{display:flex;align-items:center;justify-content:space-between;min-height:40px}',
'.pp-sh .hd b{font-size:16px;font-weight:800}',
'.pp-sh .x{width:40px;height:40px;background:transparent;color:var(--tx2);font-size:16px}',
'.pp-sh form{display:grid;gap:8px}',
'.pp-sh .hint{margin:0;font-size:12px;color:var(--tx3);line-height:1.6}',
'.pp-sh .hint b{color:var(--tx2)}',
'.pp-sh .pp-fld{background:var(--s2);border-radius:10px;padding:0 10px}',
'.pp-sh .pp-fld>span{font-size:12px;color:var(--tx3);flex:none}',
'.pp-sh .pp-fld input{text-align:right;font-family:var(--mono);font-size:16px;font-weight:700;color:var(--tx);background:none;border:0;outline:0;flex:1;min-width:0}',
'.pp-sh .pp-fld.l input{text-align:left;font-family:inherit}',
'.pp-sh .pp-b{background:var(--tx);color:var(--bg);min-height:48px;border-radius:10px;font-size:14.5px;font-weight:800}',
'.pp-sh .pp-b.gh{background:var(--s2);color:var(--tx)}',
'.pp-sh .pp-err{color:#E8A317;font-size:12.5px;margin:0}',
'.pp-kv{margin:0;display:grid;grid-template-columns:auto 1fr;gap:6px 12px;font-size:13.5px}',
'.pp-kv dt{color:var(--tx3)} .pp-kv dd{margin:0;text-align:right;font-weight:700;font-family:var(--mono)}',
'.pp-box{border-radius:12px;background:var(--s1);padding:12px;display:grid;gap:8px}',
'.pp-box>b{font-size:14px}',
'.pp-lv{display:flex;align-items:center;justify-content:center;gap:16px}',
'.pp-lv button{width:44px;height:44px;border-radius:10px;background:var(--s2);font-size:20px}',
'.pp-lv output{font-size:28px;font-weight:800;min-width:96px;text-align:center;font-family:var(--mono)}',
'.pp-lvr{width:100%;accent-color:var(--tx)}',
'.pp-lvq{display:flex;gap:6px;flex-wrap:wrap}',
'.pp-lvq button{min-height:34px;min-width:46px;border-radius:8px;background:var(--s2);font-size:12.5px;font-family:var(--mono);font-weight:600}',
'.pp-pk{display:flex;flex-direction:column}',
'.pp-pk input:focus{outline:none;box-shadow:inset 0 0 0 1px var(--tx3)}',
'.pp-pk input{min-height:44px;padding:0 12px;border-radius:10px;border:0;background:var(--s2);color:var(--tx);font-size:16px;margin-bottom:6px}',
'.pp-pk button{width:100%;display:grid;grid-template-columns:minmax(0,1fr) auto 72px;gap:8px;align-items:center;min-height:48px;padding:0 2px;border-bottom:1px solid var(--line);text-align:left}',
'.pp-pk button b{font-size:14px;font-weight:800}',
'.pp-pk button b small{font-size:11.5px;color:var(--tx3);font-weight:500;margin-left:6px}',
'.pp-pk button .v{font-family:var(--mono);font-size:13px;text-align:right}',
'.pp-pk button .c{font-family:var(--mono);font-size:12.5px;text-align:right;font-weight:600}',
'.pp-pk button.on{background:var(--s1)}',
'.pp-pk .pp-pkc{display:flex;gap:6px;overflow-x:auto;padding:2px 0 8px;scrollbar-width:none}',
'.pp-pk .pp-pkc button{display:inline-flex;width:auto;min-height:32px;padding:0 12px;border:1px solid var(--line);border-bottom:1px solid var(--line);border-radius:2px;font-size:12.5px;font-weight:600;color:var(--tx2);white-space:nowrap}',
'.pp-pk .pp-pkc button.on{color:var(--tx);border-color:var(--tx);background:transparent}',
'.pp-mc{display:inline-block;margin-left:6px;padding:1px 5px;font-style:normal;font-size:10px;font-weight:600;color:var(--tx3);border:1px solid var(--line);vertical-align:2px;letter-spacing:0}',
'.pp-cseg.s4{grid-template-columns:repeat(4,minmax(0,1fr))}',
'.pp-pk button i{display:inline-block;width:6px;height:6px;border-radius:50%;background:#E8A317;margin-left:6px;vertical-align:2px}',
'.pp-toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(var(--nav-h,60px) + 56px + env(safe-area-inset-bottom));z-index:2020;display:flex;flex-direction:column;gap:6px;width:min(92vw,420px);pointer-events:none}',
'.pp-toast div{background:#2A2A2E;border-radius:10px;padding:10px 14px;font-size:13px;line-height:1.45;box-shadow:0 6px 20px rgba(0,0,0,.4);transition:opacity .25s}',
'.pp-toast div.bad{box-shadow:inset 3px 0 0 #E8A317,0 6px 20px rgba(0,0,0,.4)}',
'.pp-toast div.out{opacity:0}',
'.pp-seg.s4{grid-template-columns:repeat(4,minmax(0,1fr))}',
'.pp-seg.s4 button{font-size:11.5px;white-space:nowrap;padding:0 1px;letter-spacing:-.03em}',
'.pp-opts{display:flex;flex-wrap:wrap;gap:0 14px}',
'.pp-cbq{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}',
'.pp-cbq button{min-height:28px;border-radius:7px;background:var(--pc2);font-size:11.5px;font-weight:700;color:var(--pt2)}',
'.pp-cbq button.on{background:var(--pc3);color:var(--pt1)}',
'.pp-pc .bt.b3{grid-template-columns:repeat(3,minmax(0,1fr))}',
'.pp-lh{display:flex;justify-content:flex-end;gap:8px;padding:10px 0 2px}',
'.pp-lh .pp-sb.arm{background:var(--pwarn);color:#111}',
'.pp-mmo{display:grid;gap:8px}',
'.pp-mmo button{text-align:left;padding:12px;border-radius:10px;background:var(--s2);display:grid;gap:4px;color:var(--tx)}',
'.pp-mmo button b{font-size:14px}',
'.pp-mmo button span{font-size:12.5px;color:var(--tx2);line-height:1.5}',
'.pp-mmo button.on{box-shadow:inset 0 0 0 1.5px var(--tx)}',
'.pp-mmo button:disabled{opacity:.5}',
'.pp-box b small{font-size:11px;font-weight:600;color:var(--tx3);margin-left:6px}',
'.pp-trpt{margin:0;font-size:11px;color:var(--pt3)} .pp-trpt b{color:var(--pt2);font-weight:600}',
'.pp-ct{display:flex;align-items:center;justify-content:center;min-height:44px;border-radius:10px;background:var(--s2);color:var(--tx);font-weight:700;font-size:14px;text-decoration:none}',
'@media(min-width:900px){.pp-tr{grid-template-columns:minmax(0,1fr) 260px}}'
].join('\n');
/* ── 도우미 ── */
var R = null;                                    // 탭 뿌리
function $(id) { return document.getElementById('pp-' + id); }
function $$(sel) { return Array.prototype.slice.call((R || document).querySelectorAll(sel)); }
var NF = {};
function fmt(v, d) { if (v == null || !isFinite(v)) return '—'; if (!NF[d]) NF[d] = new Intl.NumberFormat('en-US', { minimumFractionDigits: d, maximumFractionDigits: d }); return NF[d].format(v); }
function fp(id, v) { return fmt(v, SP[id] ? SP[id].pp : 2); }
function fq(id, v) { return fmt(v, SP[id] ? SP[id].vp : 4); }
function fu(v) { return fmt(v, 2); }
function sg(v, d) { var s = fmt(v, d == null ? 2 : d); return v > 0 ? '+' + s : s; }
function pct(v) { return v == null || !isFinite(v) ? '—' : (v > 0 ? '+' : '') + fmt(v * 100, 2) + '%'; }
function cls(v) { return v > 0 ? 'up' : v < 0 ? 'dn' : ''; }
function num(v) {
  var s = String(v == null ? '' : v).trim();
  if (s.indexOf('.') >= 0) s = s.replace(/,/g, '');
  else if ((s.match(/,/g) || []).length === 1) s = s.replace(',', '.');
  else s = s.replace(/,/g, '');
  var x = parseFloat(s); return isFinite(x) ? x : NaN;
}
function monthKST(t) { return new Date((t == null ? Date.now() : t) + H9).toISOString().slice(0, 7); }
function hhmmss(ms) { ms = Math.max(0, ms); var s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ':' + (x < 10 ? '0' : '') + x; }
function kstWhen(t) { var d = new Date(t + H9), now = new Date(Date.now() + H9); var hm = ('0' + d.getUTCHours()).slice(-2) + ':' + ('0' + d.getUTCMinutes()).slice(-2); return d.toISOString().slice(0, 10) === now.toISOString().slice(0, 10) ? hm : (d.getUTCMonth() + 1) + '/' + d.getUTCDate() + ' ' + hm; }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function lsGet(k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
function lsSet(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function postJSON(url, body, ms) {
  var ac = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var t = setTimeout(function () { if (ac) ac.abort(); }, ms || 6000);
  var o = { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }; if (ac) o.signal = ac.signal;
  return fetch(url, o).then(function (r) { clearTimeout(t); if (!r.ok) throw new Error('http ' + r.status); return r.json(); }, function (e) { clearTimeout(t); throw e; });
}
function getJSON(url, ms) {
  var ac = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var t = setTimeout(function () { if (ac) ac.abort(); }, ms || 6000);
  return fetch(url, ac ? { signal: ac.signal } : {}).then(function (r) { clearTimeout(t); if (!r.ok) throw new Error('http ' + r.status); return r.json(); }, function (e) { clearTimeout(t); throw e; });
}

/* ── 종목 규칙 ── */
var SP = {}, IDS = [], INFO = { contact: '', signup: true, start: 1000, resetBelow: 500, metric: 'ret' };
function chip(id) { return (SP[id] && SP[id].ko) || BS(id); }
function setSpecs(j) {
  var sp = {};
  (j.list || []).forEach(function (k) { if (j.map[k]) sp[k] = E.prep(Object.assign({}, j.map[k])); });
  SP = sp; IDS = (j.list || []).filter(function (k) { return SP[k]; });
  if (j.info) INFO = Object.assign(INFO, j.info);
  IDS.forEach(function (k) { if (!M[k]) M[k] = { last: null, mark: null, bid: null, ask: null, chg: null, fr: null, nft: null, dir: 0, book: null, trades: [], rx: 0 }; });
}

/* 주식 · 지수: 실제 증시가 닫힌 시간이면 「장 마감」 (공휴일은 모름) */
var KRX = ['KR200', 'SMSN', 'SKHX', 'SKHY'];
function mktState(k) {
  var s = SP[k]; if (!s || (s.cat !== 'stock' && s.cat !== 'index')) return '';
  var b = bare(k), z = KRX.indexOf(b) >= 0 ? ['Asia/Seoul', 540, 930] : b === 'JP225' ? ['Asia/Tokyo', 540, 930] : ['America/New_York', 570, 960];
  try {
    var o = {}; new Intl.DateTimeFormat('en-US', { timeZone: z[0], weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date()).forEach(function (x) { o[x.type] = x.value; });
    var mins = (+o.hour % 24) * 60 + +o.minute;
    return o.weekday === 'Sat' || o.weekday === 'Sun' || mins < z[1] || mins >= z[2] ? 'closed' : 'open';
  } catch (e) { return ''; }
}

/* ── 상태 ── */
var UIS = lsGet(LS_UI) || {};
var OTS = ['limit', 'market', 'stop', 'trail'];
var U = { bk: UIS.bk >= 0 && UIS.bk <= 3 ? UIS.bk : 2, sym: UIS.sym || 'BTC', tf: ['1m', '5m', '15m', '1H', '4H', '1D'].indexOf(UIS.tf) >= 0 ? UIS.tf : '15m', ot: OTS.indexOf(UIS.ot) >= 0 ? UIS.ot : 'market', oc: 'open', lev: UIS.lev || {}, tab: 'pos', view: 'trade', month: null };
var TOK = lsGet(LS_TOK);
var ME = null, st = E.newState(0), FILLS = [], lastFillTs = 0, busy = false;
var ACTIVE = false, MOUNTED = false;
function saveUI() { lsSet(LS_UI, { sym: U.sym, tf: U.tf, ot: U.ot, lev: U.lev, bk: U.bk }); }
function posOfSym(id) { var ks = E.keysOf(st, id); return ks.length ? st.pos[ks[0]] : null; }
function hedgeOn() { return st.mode === 'hedge'; }
/* 그 종목 증거금 방식: 포지션이 있으면 그것, 없으면 계좌에 저장한 선택(기본 격리) */
function mmOf(id) { var p = posOfSym(id); if (p) return p.mm === 'cross' ? 'cross' : 'isolated'; return ME && ME.acct && ME.acct.mm && ME.acct.mm[id] === 'cross' ? 'cross' : 'isolated'; }
function levOf(id) { var p = posOfSym(id); if (p) return p.lev; var l = (ME && ME.acct.lev && ME.acct.lev[id]) || U.lev[id] || 10; return Math.min(Math.max(1, l), SP[id] ? SP[id].max : 125); }
function exposed(id) { return E.exposed(st, id); }
function anyExposed() { return Object.keys(st.pos).length > 0 || st.ord.length > 0; }

/* ── 시세 ── */
var M = {}, wsOpen = false;
function marks() { var o = {}; IDS.forEach(function (k) { if (M[k] && M[k].mark) o[k] = M[k].mark; }); return o; }
function equity() { return E.equity(st, marks()); }
function availNow() { return E.avail(st, marks()); }
function baseEq() { return ME ? ME.acct.mStart + ME.acct.mGrants : INFO.start; }
/* 2026.10.31-B 수익률 기준: 운영자 지급 · 빌려주기 · 반납은 그 순간 비율로 반영(서버가 계산) → 돈이 오가도 내 수익률 그대로 */
function retBase() { return ME && ME.acct && ME.acct.mRb > 0 ? ME.acct.mRb : baseEq(); }

/* ── 서버 ── */
function api(path, body) {
  var h = { 'content-type': 'application/json' };
  if (TOK) h.authorization = 'Bearer ' + TOK;
  if (window.A99_DUELACCT && /^\/p\/(me|order|close|cancel|tpsl|reverse|closeall|cancelall|pmode|lev|sweep)$/.test(path)) h['x-a99-duel'] = window.A99_DUELACCT;   /* 2026.11.09-B 대결 지갑 */
  var ac = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var t = setTimeout(function () { if (ac) ac.abort(); }, 12000);
  return fetch(API + path, { method: body ? 'POST' : 'GET', headers: h, body: body ? JSON.stringify(body) : undefined, signal: ac ? ac.signal : undefined })
    .then(function (r) { clearTimeout(t); return r.json().then(function (j) { return { s: r.status, j: j || {} }; }, function () { return { s: r.status, j: {} }; }); },
      function () { clearTimeout(t); return { s: 0, j: { err: 'net' } }; })
    .then(function (x) { if (x.s === 401 && TOK && path !== '/p/login' && path !== '/p/signup') logout(true); if (x.j && (x.j.err === 'duel_over' || x.j.err === 'no_duel') && window.A99Duel && window.A99Duel.kick) window.A99Duel.kick(); return x; });
}
var ERR = {
  duel_coin: '대결은 암호화폐만 거래할 수 있어요. 위의 종목 이름을 눌러 코인으로 바꿔 주세요.',
  duel_over: '대결이 끝났어요. 모의투자 계좌로 돌아가요.',
  duel_prep: '30초 준비가 끝나면 매매할 수 있어요.',
  no_duel: '대결을 찾지 못했어요.',
  net: '서버에 연결하지 못했어요. 인터넷 연결을 확인해 주세요.',
  busy: '잠시 뒤 다시 해 주세요(같은 계좌를 처리하는 중).',
  slow_down: '너무 빨라요. 잠깐 뒤 다시 해 주세요.',
  book: '거래소 호가를 받지 못했어요. 잠시 뒤 다시 해 주세요.',
  stale: '거래소 호가가 늦게 와요. 잠시 뒤 다시 해 주세요.',
  sym: '거래할 수 없는 종목이에요.',
  no_order: '이미 체결됐거나 취소된 주문이에요.',
  has_pos: '열린 포지션이나 주문이 있으면 할 수 없어요.',
  not_low: '순자산이 5,000 아래일 때만 초기화할 수 있어요.',
  no_coupon: '초기화 쿠폰이 없어요. 운영자에게 문의해 주세요.',
  blocked: '이 계정은 초기화가 막혀 있어요. 운영자에게 문의해 주세요.',
  suspended: '이용이 정지된 계정이에요. 운영자에게 문의해 주세요.',
  auth: '다시 로그인해 주세요.',
  server: '서버에서 문제가 생겼어요. 잠시 뒤 다시 해 주세요.'
};
function errMsg(x) { var j = x.j || {}; if (j.info && j.info.err) return E.errText(j.info, BS(U.sym), Q); return ERR[j.err] || E.errText(j, BS(U.sym), Q); }
/* 2026.10.31-B 운영자 지급 · 빌려주기 · 자동 반납 알림 — 이 기기에서 아직 못 본 것만 한 번(처음 쓰는 기기는 하루 안 것만) */
function giftText(x) {
  var a = fu(Math.abs(x.a));
  if (x.k === 'gift') return '운영자가 연습금 ' + a + '을 넣어 줬어요 · ' + x.n;
  if (x.k === 'loan') return '운영자가 연습금 ' + a + '을 빌려줬어요 · ' + x.n + ' · 수익이 충분해지면 자동으로 반납돼요';
  if (x.k === 'repay') return '빌린 연습금 ' + a + '을 자동으로 반납했어요(수익이 충분해서)';
  return x.n || '';
}
function giftsCheck(g) {
  if (!g || !g.length) return;
  var raw = lsGet('a99p.gts'), seen = raw ? +raw : Date.now() - 864e5;
  g.slice().reverse().forEach(function (x) { if (x.ts > seen) toast(giftText(x)); });
  lsSet('a99p.gts', Math.max(seen, g[0].ts));
}
function applyServer(j) {
  if (!j.acct) return [];
  ME = ME || {};
  ME.acct = j.acct;
  if ('duel' in j) ME.duel = j.duel ? j.duel.duel : null;   /* 2026.11.09-B 지금 보고 있는 계좌가 대결 지갑인지 */
  giftsCheck(j.acct.gifts);
  if (j.nick) ME.nick = j.nick;
  if (j.policy) ME.policy = j.policy;
  if (j.rules) ME.rules = j.rules;
  if ('pending' in j) ME.pending = j.pending;
  if ('pub' in j) ME.pub = !!j.pub;
  st = E.newState(j.acct.bal, j.acct.pmode);
  st.trades = j.acct.trades; st.liqs = j.acct.liqs;
  (j.pos || []).forEach(function (p) { st.pos[p.key || E.pkey(st, p.sym, p.side)] = p; });
  st.ord = j.ord || [];
  if (!j.fills) return [];
  var fresh = lastFillTs ? j.fills.filter(function (f) { return f.ts > lastFillTs; }) : [];
  FILLS = j.fills;
  if (j.fills.length) lastFillTs = Math.max(lastFillTs, j.fills[0].ts);
  return fresh;
}
var KIND = { open: 'Open', close: 'Close', tp: 'TP filled', sl: 'SL filled', stop: 'Trigger filled', trail: 'Trailing filled', liq: 'Liquidated', fund: 'Funding' };
/* 체결음: 소리 파일 없이 기기에서 바로 만든다 (Web Audio) · 처음 누를 때 소리가 켜진다(브라우저 규칙)
   종류: 틱(짧고 또렷한 클릭) · 마림바(맑은 나무 소리) · 벨(은은한 종소리) · 끄기 */
/* 조건부 · 트레일링 기준 가격: last = 최근 체결가(기본) · mark = 표시 가격. ⚙에서 고르고 이 기기에 저장 */
var TPT = lsGet('a99p.tpt') === 'mark' ? 'mark' : 'last';
function tptName() { return TPT === 'mark' ? 'Mark' : 'Last'; }
var AC = null, lastBeep = 0, SND = lsGet('a99p.snd');
if (SND === 0 || SND === '0') SND = 'off'; else if (['off', 'tick', 'mar', 'bell'].indexOf(SND) < 0) SND = 'tick';
var SNDS = {
  tick: { p: [], w: 'square', g: .045, n: { fill: [[2093, 0, .035], [2637, .045, .05]], close: [[2637, 0, .035], [1760, .045, .06]], place: [[2349, 0, .03]], liq: [[330, 0, .12], [220, .13, .22]] } },
  mar: { p: [[4, .22]], w: 'sine', g: .17, n: { fill: [[1047, 0, .3], [1568, .08, .34]], close: [[1568, 0, .3], [1047, .08, .34]], place: [[1319, 0, .24]], liq: [[262, 0, .45], [196, .16, .55]] } },
  bell: { p: [[2.76, .3], [5.4, .12]], w: 'sine', g: .13, n: { fill: [[1319, 0, .75], [1976, .1, .85]], close: [[1976, 0, .75], [1319, .1, .85]], place: [[1568, 0, .65]], liq: [[330, 0, .95], [247, .22, 1.05]] } }
};
function audioUnlock() {
  if (SND === 'off') return;
  try { if (!AC) { var C = window.AudioContext || window.webkitAudioContext; if (C) AC = new C(); } if (AC && AC.state === 'suspended') AC.resume(); } catch (e) {}
}
function voice(f, t0, dur, w, g) {
  var o = AC.createOscillator(), v = AC.createGain();
  o.type = w; o.frequency.value = f;
  v.gain.setValueAtTime(0.0001, t0); v.gain.exponentialRampToValueAtTime(g, t0 + 0.008); v.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(v); v.connect(AC.destination); o.start(t0); o.stop(t0 + dur + 0.03);
}
function beep(kind, force) {
  var S = SNDS[SND]; if (!S || !AC || AC.state !== 'running') return;
  var now = Date.now(); if (!force && now - lastBeep < 250) return; lastBeep = now;
  try {
    var t = AC.currentTime, w = kind === 'liq' && SND === 'tick' ? 'sawtooth' : S.w;
    (S.n[kind] || S.n.fill).forEach(function (n) {
      voice(n[0], t + n[1], n[2], w, S.g);
      S.p.forEach(function (h) { voice(n[0] * h[0], t + n[1], n[2] * .6, 'sine', S.g * h[1]); });
    });
  } catch (e) {}
}
function toastEvents(ev) {
  (ev || []).forEach(function (e) { if (e.k === 'liq') beep('liq'); else if (e.k === 'sl' || e.k === 'tp') beep('close'); else if (e.k === 'lfill' || e.k === 'tfill') beep('fill'); });
  var crossShown = false;
  (ev || []).forEach(function (e) {
    var nm = NM(e.sym), sd = e.side === 1 ? 'Long' : 'Short';
    if (e.k === 'liq' && e.cross) { if (!crossShown) { crossShown = true; toast('Cross 강제 청산 · 교차 포지션이 모두 닫히고 교차 잔고 ' + fu(e.lost || 0) + '을 잃었어요', true); } }
    else if (e.k === 'liq') toast(nm + ' ' + sd + ' ' + e.lev + 'x Liquidated · −' + fu(e.margin) + ' (강제 청산)', true);
    else if (e.k === 'tfill') toast(nm + ' ' + (e.kind === 'trail' ? 'Trailing' : 'Trigger') + ' ' + (e.side === 1 ? 'Buy' : 'Sell') + ' filled · ' + fq(e.sym, e.qty) + ' @ ' + fp(e.sym, e.price));
    else if (e.k === 'trig') toast(nm + ' Trigger 도달 · 지정가 ' + fp(e.sym, e.px) + ' 주문으로 걸었어요');
    else if (e.k === 'tcancel') toast(nm + ' ' + (e.kind === 'trail' ? '트레일링' : '조건부') + ' 주문을 ' + (e.why === 'nopos' ? '줄일 포지션이 없어' : e.why === 'cap' ? '레버리지 한도를 넘어' : '증거금이 모자라') + ' 취소했어요', true);
    else if (e.k === 'ocancel' && e.why === 'nopos') toast(nm + ' 포지션이 닫혀서 감소 전용 주문도 취소했어요');
    else if (e.k === 'sl' || e.k === 'tp') toast(nm + ' ' + sd + ' ' + (e.k === 'tp' ? 'TP filled' : 'SL filled') + ' · ' + fp(e.sym, e.price) + ' · ' + sg(e.net), e.net < 0);
    else if (e.k === 'lfill') toast(nm + ' Limit ' + (e.side === 1 ? 'Long' : 'Short') + ' filled · ' + fq(e.sym, e.qty) + ' @ ' + fp(e.sym, e.price));
    else if (e.k === 'lcancel') toast(nm + ' 지정가 주문을 ' + (e.why === 'cap' ? '레버리지 한도를 넘어' : e.why === 'nopos' ? '줄일 포지션이 없어' : '증거금이 모자라') + ' 취소했어요', true);
  });
}
function toastFills(list) {
  var auto = { tp: 1, sl: 1, stop: 1, trail: 1 };
  if (list.some(function (f) { return f.kind === 'liq'; })) beep('liq'); else if (list.some(function (f) { return auto[f.kind]; })) beep('close');
  list.slice(0, 4).reverse().forEach(function (f) {
    if (f.kind === 'liq') toast(chip(f.sym) + ' 강제 청산됐어요 · ' + kstWhen(f.ts) + ' · ' + sg(f.pnl), true);
    else if (auto[f.kind]) toast(chip(f.sym) + ' ' + KIND[f.kind] + ' · ' + kstWhen(f.ts) + ' · ' + sg(f.pnl - f.fee), f.pnl - f.fee < 0);
    else if (f.kind === 'fund') toast(chip(f.sym) + ' 펀딩비 ' + sg(f.pnl, 4));
  });
}
function loadMe(quiet) {
  if (!TOK) return Promise.resolve();
  return api('/p/me').then(function (x) {
    if (x.s !== 200) { if (!quiet && x.j.err === 'net') banner(ERR.net, 'net'); return; }
    if (BAN === 'net') banner(null);
    var first = !ME;
    var fresh = applyServer(x.j);
    sysCheck(x.j.sys);
    if (ME && ME.nick && window.A99Auth && window.A99Auth.setNick) window.A99Auth.setNick(ME.nick);
    if (!first) toastFills(fresh.filter(function (f) { return f.kind !== 'open' && f.kind !== 'close'; }));
    changed(true);
    lowCheck();
  });
}
/* 2026.10.31-A 서버 감시(1분마다 청산 · 익절 · 손절 · 지정가를 처리)가 5분 넘게 멈췄으면 알린다 — 포지션이나 주문이 있을 때만 */
function sysCheck(sys) {
  if (!sys || !sys.now || !sys.cronAt) return;
  var lag = sys.now - sys.cronAt;
  if (lag > 5 * 60000 && anyExposed()) statusBanner('cron', '서버 감시가 ' + Math.floor(lag / 60000) + '분째 멈춰 있어요. 청산 · 익절 · 손절 · 지정가 체결이 늦게 처리될 수 있어요. 열린 포지션을 직접 확인해 주세요.');
  else statusBanner('cron', null);
}
function logout(expired) {
  TOK = null; ME = null; lsSet(LS_TOK, null); lsSet('a99_acct', null);
  st = E.newState(0); FILLS = []; lastFillTs = 0;
  changed(true);
  if (window.A99Auth && window.A99Auth.refresh) window.A99Auth.refresh();   /* 오른쪽 위 버튼 · 회원 전용 화면도 바로 */
  if (expired) toast('로그인이 풀렸어요. 다시 로그인해 주세요.', true);
}

/* ── 실시간으로 걸렸는지 보고 서버에 확인 요청 ── */
var sw = {};
function triggerOf(id, px, mark) {
  var s = SP[id]; if (!s) return '';
  var now = Date.now(), ks = E.keysOf(st, id), mk = marks();
  if (mark > 0) mk[id] = mark;
  for (var i = 0; i < ks.length; i++) {
    var p = st.pos[ks[i]];
    if (mark > 0) { var lp = E.liqOf(st, SP, ks[i], mk); if (lp > 0 && (p.side === 1 ? mark <= lp : mark >= lp)) return 'liq'; }
    if (px > 0 && p.sl != null && now >= (p.tpslAt || 0) && (p.side === 1 ? px <= p.sl : px >= p.sl)) return 'sl';
    if (px > 0 && p.tp != null && now >= (p.tpslAt || 0) && (p.side === 1 ? px >= p.tp : px <= p.tp)) return 'tp';
  }
  for (var j = 0; j < st.ord.length; j++) {
    var o = st.ord[j]; if (o.sym !== id) continue;
    var k = o.k || 'limit';
    var v = o.pt === 'mark' ? mark : px;              // Mark 기준 조건부 · 트레일링은 Mark 가격으로만 본다
    if (k === 'stop') { if (v > 0 && (o.dir === 1 ? v >= o.trig : v <= o.trig)) return 'stop'; continue; }
    if (k === 'trail') {
      if (!(v > 0)) continue;
      if (!o.armed) { if (o.act != null && (o.side === -1 ? v >= o.act : v <= o.act)) return 'trail'; }
      else { var tl = E.trailStop(o); if (tl > 0 && (o.side === -1 ? v <= tl : v >= tl)) return 'trail'; }
      continue;
    }
    if (!(px > 0)) continue;
    if (k === 'limit' && (o.side === 1 ? px <= o.px : px >= o.px)) return 'lim';
  }
  return '';
}
function sweep(id, evd) {
  if (!ME || !TOK) return;
  var w = sw[id] || (sw[id] = { busy: false, at: 0, miss: 0 });
  var now = Date.now();
  if (w.busy || now - w.at < (w.miss ? 2500 * w.miss : 900)) return;
  if (w.miss >= 4 && now - w.at < 60000) return;
  w.busy = true; w.at = now;
  api('/p/sweep', evd ? { sym: id, px: evd.px, ts: evd.ts } : { sym: id }).then(function (x) {
    w.busy = false;
    if (x.s !== 200) return;
    var sig = function () { return JSON.stringify([E.keysOf(st, id).map(function (k) { return st.pos[k]; }), st.ord.filter(function (o) { return o.sym === id; })]); };
    var had = sig();
    applyServer(x.j); toastEvents(x.j.ev);
    w.miss = had === sig() ? w.miss + 1 : 0;
    changed();
  });
}

/* ── 실시간 연결 (탭을 떠나 있으면 포지션 종목만 · 아무것도 없으면 끊는다) ── */
var ws = null, subs = {}, lastRx = 0, backoff = 1000, pingT = 0, retryT = 0, firstFail = 0;
function HIV(tf) { return hlIv(tf); }
/* 호가 묶음: 0 = 1틱 · 1 = 5틱 · 2 = 10틱 · 3 = 100틱 (하이퍼리퀴드 유효숫자 묶음 기능) */
var BKS = [{ nSigFigs: 5 }, { nSigFigs: 5, mantissa: 5 }, { nSigFigs: 4 }, { nSigFigs: 3 }], BKM = [1, 5, 10, 100];
function bkTick(id) { var m = M[id], px = m && (m.last || m.mark); if (!(px > 0)) return null; var t = Math.pow(10, Math.floor(Math.log10(px)) - 4) * BKM[U.bk]; var sp = SP[id]; return sp && t < sp.tick ? sp.tick : t; }
function bkLabel(id) { var t = bkTick(id); if (t == null) return '—'; return t >= 1 ? fmt(t, 0) : String(+t.toPrecision(2)); }
function sub(k) { var a = k.split('|'), o = { type: a[0], coin: a[1] }; if (a[0] === 'candle') o.interval = HIV(a[2]); if (a[0] === 'l2Book') { var g = BKS[+a[2]] || BKS[0]; o.nSigFigs = g.nSigFigs; if (g.mantissa) o.mantissa = g.mantissa; } return o; }
function wanted() {
  var w = {};
  if (ACTIVE) {
    IDS.forEach(function (k) { w['activeAssetCtx|' + k] = 1; });
    if (SP[U.sym]) { if (CHART) w['candle|' + U.sym + '|' + U.tf] = 1; w['l2Book|' + U.sym + '|' + U.bk] = 1; w['trades|' + U.sym] = 1; }
  }
  IDS.forEach(function (k) { if (ME && exposed(k)) { w['activeAssetCtx|' + k] = 1; w['trades|' + k] = 1; } });
  return w;
}
function needWS() { return ACTIVE || (ME && anyExposed()); }
function wsSend(o) { try { if (ws && ws.readyState === 1) ws.send(typeof o === 'string' ? o : JSON.stringify(o)); } catch (e) {} }
function syncSubs() {
  if (!needWS()) { if (ws) { var w0 = ws; ws = null; wsOpen = false; clearInterval(pingT); clearTimeout(retryT); try { w0.onclose = null; w0.close(); } catch (e) {} } return; }
  if (!ws) { connect(); return; }
  if (!wsOpen) return;
  var w = wanted();
  Object.keys(subs).forEach(function (k) { if (!w[k]) wsSend({ method: 'unsubscribe', subscription: sub(k) }); });
  Object.keys(w).forEach(function (k) { if (!subs[k]) wsSend({ method: 'subscribe', subscription: sub(k) }); });
  subs = w;
}
function connect() {
  clearTimeout(retryT);
  if (!needWS()) return;
  try { ws = new WebSocket(WSURL); } catch (e) { ws = null; scheduleRetry(); return; }
  var me = ws;
  me.onopen = function () {
    if (ws !== me) return;
    wsOpen = true; backoff = 1000; firstFail = 0; subs = {}; lastRx = Date.now();
    syncSubs();
    clearInterval(pingT);
    pingT = setInterval(function () { if (Date.now() - lastRx > 45000) { try { me.close(); } catch (e) {} return; } wsSend({ method: 'ping' }); }, 20000);
    dirty.quote = true; kick();
  };
  me.onmessage = function (ev) { lastRx = Date.now(); onMsg(ev.data); };
  me.onclose = function () { if (ws !== me) return; ws = null; wsOpen = false; clearInterval(pingT); dirty.quote = true; kick(); scheduleRetry(); };
  me.onerror = function () {};
}
function scheduleRetry() {
  if (!needWS()) return;
  if (!firstFail) firstFail = Date.now();
  if (Date.now() - firstFail > 30000 && !histOK) chartMsg('실시간 시세에 연결하지 못했어요. 다시 시도하는 중…');
  clearTimeout(retryT);
  retryT = setTimeout(connect, backoff);
  backoff = Math.min(backoff * 2, 15000);
}
/* 2026.10.31-A 실시간 연결이 10초 넘게 안 되면: 3초마다 거래소에 직접 가격을 묻고(allMids — 가벼운 요청),
   그것도 두 번 연속 안 되면 서버가 1분마다 남긴 표시가격(/p/marks)으로. 서버 대비 중에도 30초마다 거래소를 다시 시도. 다시 연결되면 저절로 돌아온다 */
var FB = { mode: '', down: 0, fail: 0, n: 0, mkAt: 0 };
function fbIds() { var o = {}; if (SP[U.sym]) o[U.sym] = 1; IDS.forEach(function (k) { if (ME && exposed(k)) o[k] = 1; }); return Object.keys(o); }
function fbApply(id, px, mark) {
  var m = M[id]; if (!m || !(px > 0)) return;
  if (mark > 0) m.mark = mark;
  setLast(m, px); m.rx = Date.now();
  if (id === U.sym && CHART) updBarPx(px);
  if (ME && exposed(id) && triggerOf(id, px, m.mark)) sweep(id, null);
}
function fbDirty() { dirty.quote = dirty.acct = dirty.pos = dirty.est = true; kick(); }
function fbMarks() { return getJSON(API + '/p/marks', 6000).then(function (j) { if (j && j.marks) { FB.mkAt = Date.now(); return j; } return null; }, function () { return null; }); }
function fbServer(ids) {
  fbMarks().then(function (j) {
    if (!j || wsOpen) return;
    FB.mode = 'srv';
    ids.forEach(function (k) { var v = j.marks[k]; if (v > 0) fbApply(k, v, v); });
    statusBanner('feed', '거래소에 연결하지 못해 서버가 1분마다 남긴 가격으로 보여 줘요. 주문은 서버가 실제 호가로 처리해요.');
    fbDirty();
  });
}
function fbTick() {
  var now = Date.now();
  if (!needWS() || wsOpen) { FB.down = 0; FB.fail = 0; FB.n = 0; if (FB.mode) { FB.mode = ''; statusBanner('feed', null); fbDirty(); } return; }
  if (!FB.down) FB.down = now;
  if (now - FB.down < 10000) return;
  FB.n++;
  var ids = fbIds(); if (!ids.length) return;
  if (FB.mode === 'srv' && FB.n % 10) { if (FB.n % 5 === 0) fbServer(ids); return; }   /* 서버 값은 1분마다 바뀌므로 15초에 한 번 */
  var dex = {}; ids.forEach(function (k) { var i = k.indexOf(':'); dex[i > 0 ? k.slice(0, i) : ''] = 1; });
  Promise.all(Object.keys(dex).map(function (d) {
    return postJSON(HLI, d ? { type: 'allMids', dex: d } : { type: 'allMids' }, 2500).then(function (r) { return [d, r]; }, function () { return [d, null]; });
  })).then(function (rs) {
    if (wsOpen) return;
    var got = 0;
    rs.forEach(function (x) {
      var d = x[0], r = x[1]; if (!r) return;
      ids.forEach(function (k) {
        if (d ? k.indexOf(d + ':') !== 0 : k.indexOf(':') >= 0) return;
        var v = +(r[k] != null ? r[k] : r[d ? k.slice(d.length + 1) : k]);
        if (v > 0) { fbApply(k, v); got++; }
      });
    });
    if (!got) { FB.fail++; if (FB.fail >= 2 || FB.mode === 'srv') fbServer(ids); return; }
    FB.fail = 0; FB.mode = 'hl';
    statusBanner('feed', '실시간 연결이 끊겨 3초마다 가격을 받아오고 있어요. 다시 연결되면 저절로 돌아와요.');
    if (now - FB.mkAt > 30000) fbMarks().then(function (j) { if (j) ids.forEach(function (k) { if (j.marks[k] > 0 && M[k]) M[k].mark = j.marks[k]; }); });   /* 표시가격은 30초마다 서버 값으로 */
    fbDirty();
  });
}
function onMsg(raw) {
  var m; try { m = JSON.parse(raw); } catch (e) { return; }
  var ch = m.channel, d = m.data;
  if (!d || ch === 'pong' || ch === 'subscriptionResponse') return;
  if (ch === 'activeAssetCtx') { if (d.ctx && SP[d.coin]) onCtx(d.coin, d.ctx); }
  else if (ch === 'l2Book') { if (SP[d.coin]) onBook(d.coin, d); }
  else if (ch === 'trades') { if (d.length && SP[d[0].coin]) onTrades(d[0].coin, d); }
  else if (ch === 'candle') { if (SP[d.s]) onCandles(d.s, { '1h': '1H', '4h': '4H', '1d': '1D' }[d.i] || d.i, [[+d.t, +d.o, +d.h, +d.l, +d.c, +d.v]]); }
}
function setLast(m, px) { m.dir = m.last == null ? 0 : (px > m.last ? 1 : px < m.last ? -1 : m.dir); m.last = px; if (m.prev > 0) m.chg = px / m.prev - 1; }
/* 종목 상태: 표시가격 · 중간가 · 펀딩(1시간마다) · 전일 가격 */
function onCtx(id, c) {
  var m = M[id], mark = +c.markPx, mid = +c.midPx;
  if (!(mark > 0)) return;
  m.mark = mark; m.prev = +c.prevDayPx || m.prev;
  if (!(m.tradeAt && Date.now() - m.tradeAt < 15000)) setLast(m, mid > 0 ? mid : mark);
  else if (m.prev > 0) m.chg = m.last / m.prev - 1;
  m.fr = c.funding != null && c.funding !== '' ? +c.funding : null;
  m.nft = Math.floor(Date.now() / 3600e3) * 3600e3 + 3600e3;
  m.rx = Date.now();
  if (ME && exposed(id)) { var tg = triggerOf(id, 0, m.mark); if (tg === 'liq' || tg === 'trail' || tg === 'stop') sweep(id, null); }
  dirty.quote = dirty.acct = dirty.pos = dirty.est = true;
  if (id === U.sym) dirty.mid = true;
  kick();
}
function onBook(id, d) {
  var L = d.levels || [[], []], f = function (x) { return [+x.px, +x.sz]; };
  var b = M[id].book = { bids: (L[0] || []).map(f), asks: (L[1] || []).map(f), rx: Date.now() };
  M[id].bid = b.bids.length ? b.bids[0][0] : null; M[id].ask = b.asks.length ? b.asks[0][0] : null;
  if (id === U.sym) { dirty.book = true; kick(); }
}
function onTrades(id, data) {
  var m = M[id], now = Date.now();
  var list = data.map(function (t) { return { ts: +t.time, px: +t.px, sz: +t.sz, side: t.side }; }).filter(function (t) { return t.px > 0 && t.ts > now - 10000; }).sort(function (a, b) { return a.ts - b.ts; });
  if (!list.length) return;
  setLast(m, list[list.length - 1].px); m.tradeAt = now;
  if (ME && exposed(id)) {
    for (var i = list.length - 1; i >= 0; i--) if (triggerOf(id, list[i].px, m.mark)) { sweep(id, { px: list[i].px, ts: list[i].ts }); break; }
  }
  dirty.quote = dirty.acct = dirty.pos = dirty.est = true;
  if (id === U.sym) dirty.mid = true;
  kick();
}


/* ── 차트 (창을 열 때만 만들고 봉을 받는다) ──
   2026.10.31-A 업그레이드(시안 확정판): 봉 간격 6가지 · 봉 마감까지 남은 시간 · 호가 줄 · 봉 정보 · 지표 7가지(처음엔 아무것도 안 켬, 「지표」 목록에서) ·
   일목 구름 · 칸(페인) 크기 조절 · 체결 화살표 · 진입 선에 지금 손익 · 화면 밖 청산 · 익절 · 손절 표시 · 아래 포지션 줄.
   시세 출처는 그대로 하이퍼리퀴드 하나(차트 · 호가 · 청산 계산이 같은 자료). 지표는 지난 가격으로 계산한 참고용 선 */
var LC = window.LightweightCharts, chart = null, cs = null, vs = null, plines = [], chartKey = '', histOK = false, lastBarT = 0, firstSnap = true;
var CW = null, CHART = '';                       // CHART = '' 닫힘 · 'sheet' 작은 창 · 'full' 전체 화면
var TFS = ['1m', '5m', '15m', '1H', '4H', '1D'], TFMS = { '1m': 6e4, '5m': 3e5, '15m': 9e5, '1H': 36e5, '4H': 144e5, '1D': 864e5 };
var KN = 400;                                    // 처음 받는 봉 개수 (일목 구름이 왼쪽 끝까지 차도록)
var BARS = [];                                   // 지금 차트의 봉 { time(한국 시각 초), open, high, low, close, v }
function sec(ms) { return Math.floor((ms + H9) / 1000); }
function toBar(r) { return { time: sec(+r[0]), open: +r[1], high: +r[2], low: +r[3], close: +r[4], v: +r[5] || 0 }; }
function chartMsg(t) { var e = $('cmsg'); if (!e) return; e.hidden = !t; e.textContent = t || ''; }
function cssv(n, d) { try { var v = getComputedStyle(R).getPropertyValue(n).trim(); return v || d; } catch (e) { return d; } }
function hexA(h, a) { h = String(h).replace('#', ''); if (h.length === 3) h = h.replace(/(.)/g, '$1$1'); var n = parseInt(h, 16); return 'rgba(' + (n >> 16 & 255) + ',' + (n >> 8 & 255) + ',' + (n & 255) + ',' + a + ')'; }
var CUP = '#FF5B5B', CDN = '#4D8DFF', CLIQ = '#F5A524';

/* ── 지표 계산 (봉 배열 하나로 · 값이 없는 앞부분은 null) ── */
function iSma(c, n) { var o = [], s = 0; for (var i = 0; i < c.length; i++) { s += c[i]; if (i >= n) s -= c[i - n]; o.push(i >= n - 1 ? s / n : null); } return o; }
function iEma(c, n) { var o = [], k = 2 / (n + 1), e = null; for (var i = 0; i < c.length; i++) { e = e == null ? c[i] : c[i] * k + e * (1 - k); o.push(i >= n - 1 ? e : null); } return o; }
function iBb(c, n) { var m = iSma(c, n), up = [], dn = []; for (var i = 0; i < c.length; i++) { if (m[i] == null) { up.push(null); dn.push(null); continue; } var s = 0; for (var j = i - n + 1; j <= i; j++) s += (c[j] - m[i]) * (c[j] - m[i]); var sd = Math.sqrt(s / n); up.push(m[i] + 2 * sd); dn.push(m[i] - 2 * sd); } return { m: m, up: up, dn: dn }; }
function iRsi(c, n) { var o = [null], g = 0, l = 0; for (var i = 1; i < c.length; i++) { var d = c[i] - c[i - 1], up = Math.max(d, 0), dn = Math.max(-d, 0); if (i <= n) { g += up / n; l += dn / n; o.push(i === n ? 100 - 100 / (1 + g / (l || 1e-9)) : null); } else { g = (g * (n - 1) + up) / n; l = (l * (n - 1) + dn) / n; o.push(100 - 100 / (1 + g / (l || 1e-9))); } } return o; }
function iMacd(c) { var a = iEma(c, 12), b = iEma(c, 26), m = c.map(function (_, i) { return a[i] != null && b[i] != null ? a[i] - b[i] : null; }); var s = [], e = null, k = 2 / 10, n = 0; for (var i = 0; i < m.length; i++) { if (m[i] == null) { s.push(null); continue; } n++; e = e == null ? m[i] : m[i] * k + e * (1 - k); s.push(n >= 9 ? e : null); } return { m: m, s: s, h: m.map(function (v, i) { return v != null && s[i] != null ? v - s[i] : null; }) }; }
/* VWAP: 하루(UTC 00:00 = 한국 09:00)마다 새로. 1D 간격에서는 봉 하나가 하루라 그리지 않는다 */
function iVwap(bs) { var o = [], key = null, pv = 0, vv = 0; for (var i = 0; i < bs.length; i++) { var b = bs[i], k = Math.floor((b.time * 1000 - H9) / 864e5); if (k !== key) { key = k; pv = 0; vv = 0; } pv += (b.high + b.low + b.close) / 3 * b.v; vv += b.v; o.push(vv ? pv / vv : null); } return o; }
function iAtr(bs, n) { var o = [], a = null, s = 0; for (var i = 0; i < bs.length; i++) { var b = bs[i], tr = i ? Math.max(b.high - b.low, Math.abs(b.high - bs[i - 1].close), Math.abs(b.low - bs[i - 1].close)) : b.high - b.low; if (i < n) { s += tr; if (i === n - 1) a = s / n; o.push(i === n - 1 ? a : null); } else { a = (a * (n - 1) + tr) / n; o.push(a); } } return o; }
/* 일목: 9 · 26 · 52. 선행스팬은 오늘 포함 26번째 봉(25칸 앞)까지 미리, 후행스팬은 25칸 뒤에 */
function hl2(bs, i, n) { if (i < n - 1) return null; var hh = -Infinity, ll = Infinity; for (var j = i - n + 1; j <= i; j++) { if (bs[j].high > hh) hh = bs[j].high; if (bs[j].low < ll) ll = bs[j].low; } return (hh + ll) / 2; }
function iIchi(bs) {
  var n = bs.length, D = 25, t = [], k = [], A = [], B = [], ch = [];
  for (var i = 0; i < n; i++) { t.push(hl2(bs, i, 9)); k.push(hl2(bs, i, 26)); ch.push(i + D < n ? bs[i + D].close : null); }
  for (var q = 0; q < n + D; q++) { var s = q - D; A.push(s >= 0 && t[s] != null && k[s] != null ? (t[s] + k[s]) / 2 : null); B.push(s >= 0 ? hl2(bs, s, 52) : null); }
  return { t: t, k: k, A: A, B: B, ch: ch };
}
/* 구름: 차트 부품에 띠 채우기가 없어 직접 그린다(봉 뒤에). 앞으로 밀린 칸은 봉 번호로 자리를 계산 */
function Cloud(get) {
  var ts = null, ser = null, req = null;
  function quad(ctx, x1, a1, b1, x2, a2, b2, up) { ctx.beginPath(); ctx.moveTo(x1, a1); ctx.lineTo(x2, a2); ctx.lineTo(x2, b2); ctx.lineTo(x1, b1); ctx.closePath(); ctx.fillStyle = hexA(up ? CUP : CDN, .13); ctx.fill(); }
  function stroke(ctx, pts, k, c) { ctx.beginPath(); pts.forEach(function (p, i) { if (i) ctx.lineTo(p[0], p[k]); else ctx.moveTo(p[0], p[k]); }); ctx.strokeStyle = c; ctx.lineWidth = 1; ctx.stroke(); }
  var renderer = { draw: function (target) {
    var I = get(); if (!ts || !ser || !I) return;
    target.useMediaCoordinateSpace(function (sc) {
      var ctx = sc.context, vr = ts.getVisibleLogicalRange(); if (!vr) return;
      var pts = [], from = Math.max(0, Math.floor(vr.from) - 1), to = Math.min(I.A.length - 1, Math.ceil(vr.to) + 1);
      for (var q = from; q <= to; q++) {
        if (I.A[q] == null || I.B[q] == null) continue;
        var x = ts.logicalToCoordinate(q), ya = ser.priceToCoordinate(I.A[q]), yb = ser.priceToCoordinate(I.B[q]);
        if (x != null && ya != null && yb != null) pts.push([x, ya, yb, I.A[q] >= I.B[q]]);
      }
      for (var i = 0; i + 1 < pts.length; i++) {
        var a = pts[i], b = pts[i + 1];
        if (a[3] === b[3]) { quad(ctx, a[0], a[1], a[2], b[0], b[1], b[2], a[3]); continue; }
        var da = a[1] - a[2], db = b[1] - b[2], f = da === db ? 0.5 : da / (da - db), xm = a[0] + (b[0] - a[0]) * f, ym = a[1] + (b[1] - a[1]) * f;
        quad(ctx, a[0], a[1], a[2], xm, ym, ym, a[3]); quad(ctx, xm, ym, ym, b[0], b[1], b[2], b[3]);
      }
      stroke(ctx, pts, 1, hexA(CUP, .7)); stroke(ctx, pts, 2, hexA(CDN, .7));
    });
  } };
  var view = { zOrder: function () { return 'bottom'; }, renderer: function () { return renderer; } };
  this.attached = function (p) { ts = p.chart.timeScale(); ser = p.series; req = p.requestUpdate; };
  this.detached = function () { ts = ser = req = null; };
  this.updateAllViews = function () {};
  this.paneViews = function () { return [view]; };
  this.redraw = function () { if (req) req(); };
  /* 화면에 보이는 구간의 구름도 세로 범위에 넣는다 */
  this.autoscaleInfo = function (s, e) {
    var I = get(); if (!I) return null;
    var mn = Infinity, mx = -Infinity;
    for (var q = Math.max(0, Math.floor(s)); q <= Math.min(I.A.length - 1, Math.ceil(e)); q++) [I.A[q], I.B[q]].forEach(function (v) { if (v != null) { if (v < mn) mn = v; if (v > mx) mx = v; } });
    return mx > mn ? { priceRange: { minValue: mn, maxValue: mx } } : null;
  };
}

/* ── 지표 목록: 봉 위(top) 4가지 · 봉 아래 보조 칸(low) 3가지. 기간 숫자는 고정 ── */
var IDEF = [
  { k: 'ma', g: 'top', name: '이동평균', p: '20 · 60', chip: 'MA 20·60', c: ['#E8C46A', '#A98B3E'], d: '정해진 기간 종가의 평균. 흐름이 오르는지 내리는지 보기' },
  { k: 'bb', g: 'top', name: '볼린저 밴드', p: '20 · 2', chip: '볼린저', c: ['#8F7BD8'], d: '평균 위아래로 흔들림 폭을 띠로. 띠가 좁으면 조용한 구간' },
  { k: 'ichi', g: 'top', name: '일목균형표', p: '9 · 26 · 52', chip: '일목', c: ['#F7A8C4', '#E6E6EA', '#9DBF7A'], d: '전환선 · 기준선 · 후행스팬과 구름. 구름은 앞으로 26번째 봉까지 미리 그려요' },
  { k: 'vwap', g: 'top', name: 'VWAP', p: '하루 · 09:00 새로', chip: 'VWAP', c: ['#6FD0F0'], d: '거래량까지 따진 오늘의 평균 가격. 매일 오전 9시에 새로 계산' },
  { k: 'rsi', g: 'low', name: 'RSI', p: '14', chip: 'RSI', c: ['#5FC3B4'], d: '최근 오른 힘과 내린 힘의 비율(0~100). 70 · 30에 기준선' },
  { k: 'macd', g: 'low', name: 'MACD', p: '12 · 26 · 9', chip: 'MACD', c: ['#E07FB0', '#8A8A90'], d: '빠른 평균과 느린 평균의 간격. 막대는 그 간격이 벌어지는지 좁아지는지' },
  { k: 'atr', g: 'low', name: 'ATR', p: '14', chip: 'ATR', c: ['#A6B0FF'], d: '봉 하나가 평균 얼마씩 움직이는지. 출렁임의 크기' }
];
var LOWMAX = 2, IND = {};
function idef(k) { for (var i = 0; i < IDEF.length; i++) if (IDEF[i].k === k) return IDEF[i]; }
IDEF.forEach(function (d) { IND[d.k] = false; });   /* 처음엔 아무것도 안 켬 */
(function () { var low = 0; (lsGet('a99p.ind') || []).forEach(function (k) { var d = idef(k); if (!d) return; if (d.g === 'low') { if (low >= LOWMAX) return; low++; } IND[k] = true; }); })();   /* 고른 지표는 이 기기에 기억 */
function saveInd() { lsSet('a99p.ind', IDEF.filter(function (d) { return IND[d.k]; }).map(function (d) { return d.k; })); }
function lowOn() { return IDEF.filter(function (d) { return d.g === 'low' && IND[d.k]; }).length; }
function vwapOff() { return U.tf === '1D'; }

/* 차트에 올린 지표 선: { s: 선, f: 봉 → 값 배열, h: 막대 색 매기기 } — 봉이 바뀌면 마지막 점만 고친다 */
var ISER = [], TOPV = [], LOWV = [], ICH = null, CLOUD = null, FMK = null, ENTRY = {};
function rightPad() { return IND.ichi ? 14 : 4; }
function chartOpts() {
  return {
    autoSize: true,
    layout: { background: { type: 'solid', color: 'rgba(0,0,0,0)' }, textColor: '#8A8A93', fontSize: 10.5, fontFamily: FONT, attributionLogo: true,
      panes: { separatorColor: '#242427', separatorHoverColor: '#3A3A3F', enableResize: false } },   /* 칸 크기는 우리 손잡이로만(크기 기억 · 최소 높이) */
    grid: { vertLines: { color: '#0F0F12' }, horzLines: { color: '#141418' } },
    crosshair: { mode: LC.CrosshairMode.Normal, vertLine: { color: '#8A8A90', labelBackgroundColor: '#3A3A3F' }, horzLine: { color: '#8A8A90', labelBackgroundColor: '#3A3A3F' } },
    rightPriceScale: { borderColor: '#242427', scaleMargins: { top: 0.1, bottom: 0.18 } },
    timeScale: { borderColor: '#242427', rightOffset: rightPad(), timeVisible: true, secondsVisible: false,
      tickMarkFormatter: function (t, type) { var d = new Date(t * 1000); if (type <= 2) return (d.getUTCMonth() + 1) + '/' + d.getUTCDate(); return ('0' + d.getUTCHours()).slice(-2) + ':' + ('0' + d.getUTCMinutes()).slice(-2); } },
    localization: { locale: 'ko-KR', priceFormatter: function (p) { return fp(U.sym, p); },
      timeFormatter: function (t) { var d = new Date(t * 1000); return (d.getUTCMonth() + 1) + '/' + d.getUTCDate() + ' ' + ('0' + d.getUTCHours()).slice(-2) + ':' + ('0' + d.getUTCMinutes()).slice(-2); } },
    handleScale: { pinch: true, mouseWheel: true, axisPressedMouseMove: true },
    handleScroll: { horzTouchDrag: true, vertTouchDrag: false, mouseWheel: true, pressedMouseMove: true }
  };
}
function lineData(vals) { var o = []; for (var i = 0; i < BARS.length && i < vals.length; i++) if (vals[i] != null && isFinite(vals[i])) o.push({ time: BARS[i].time, value: vals[i] }); return o; }
function volPt(b) { return { time: b.time, value: b.v, color: hexA(b.close >= b.open ? CUP : CDN, .3) }; }
/* 지표 선을 만든다(차트를 새로 만들 때만). 값은 indCalc 가 채운다 */
function indBuild() {
  ISER = []; TOPV = []; LOWV = []; ICH = null; CLOUD = null;
  var thin = { lineWidth: 1, priceLineVisible: false, lastValueVisible: false, crosshairMarkerVisible: false };
  var ln = function (color, pane, extra) { return chart.addSeries(LC.LineSeries, Object.assign({ color: color }, thin, extra || {}), pane || 0); };
  var guide = function (s, v) { s.createPriceLine({ price: v, color: '#3A3A3F', lineWidth: 1, lineStyle: LC.LineStyle.Dashed, axisLabelVisible: false }); };
  var C = function () { return BARS.map(function (b) { return b.close; }); };
  var memo = {};
  var once = function (k, fn) { return function () { if (!memo[k] || memo[k].n !== BARS.length || memo[k].v !== BARS[BARS.length - 1]) memo[k] = { n: BARS.length, v: BARS[BARS.length - 1], r: fn() }; return memo[k].r; }; };
  if (IND.ma) {
    var m20 = once('m20', function () { return iSma(C(), 20); }), m60 = once('m60', function () { return iSma(C(), 60); });
    ISER.push({ s: ln('#E8C46A'), f: m20 }, { s: ln('#A98B3E'), f: m60 }); TOPV.push(['MA20', m20, '#E8C46A'], ['MA60', m60, '#A98B3E']);
  }
  if (IND.bb) {
    var B = once('bb', function () { return iBb(C(), 20); });
    ISER.push({ s: ln('rgba(143,123,216,.8)'), f: function () { return B().up; } }, { s: ln('rgba(143,123,216,.8)'), f: function () { return B().dn; } }, { s: ln('rgba(143,123,216,.45)', 0, { lineStyle: LC.LineStyle.Dotted }), f: function () { return B().m; } });
    TOPV.push(['BB 위', function () { return B().up; }, '#8F7BD8'], ['BB 아래', function () { return B().dn; }, '#8F7BD8']);
  }
  if (IND.ichi) {
    var I = once('ichi', function () { return iIchi(BARS); });
    ICH = I;
    ISER.push({ s: ln('#F7A8C4'), f: function () { return I().t; } }, { s: ln('#E6E6EA'), f: function () { return I().k; } }, { s: ln('#9DBF7A'), f: function () { return I().ch; } });
    CLOUD = new Cloud(function () { return BARS.length ? I() : null; }); cs.attachPrimitive(CLOUD);
    TOPV.push(['전환', function () { return I().t; }, '#F7A8C4'], ['기준', function () { return I().k; }, '#E6E6EA'], ['선행1', function () { return I().A; }, hexA(CUP, .9)], ['선행2', function () { return I().B; }, hexA(CDN, .9)]);
  }
  if (IND.vwap && !vwapOff()) { var W = once('vwap', function () { return iVwap(BARS); }); ISER.push({ s: ln('#6FD0F0'), f: W }); TOPV.push(['VWAP', W, '#6FD0F0']); }
  var pane = 1;
  if (IND.rsi) {
    var Rr = once('rsi', function () { return iRsi(C(), 14); }), rs = ln('#5FC3B4', pane, { lastValueVisible: true, crosshairMarkerVisible: true });
    guide(rs, 70); guide(rs, 30); ISER.push({ s: rs, f: Rr }); LOWV.push({ t: 'RSI 14', v: [[Rr, '#5FC3B4']] }); pane++;
  }
  if (IND.macd) {
    var Mm = once('macd', function () { return iMacd(C()); });
    var mh = chart.addSeries(LC.HistogramSeries, { priceLineVisible: false, lastValueVisible: false }, pane);
    ISER.push({ s: mh, f: function () { return Mm().h; }, h: 1 }, { s: ln('#E07FB0', pane), f: function () { return Mm().m; } }, { s: ln('#8A8A90', pane), f: function () { return Mm().s; } });
    LOWV.push({ t: 'MACD 12·26·9', v: [[function () { return Mm().m; }, '#E07FB0'], [function () { return Mm().s; }, '#8A8A90']] }); pane++;
  }
  if (IND.atr) { var At = once('atr', function () { return iAtr(BARS, 14); }); ISER.push({ s: ln('#A6B0FF', pane, { lastValueVisible: true }), f: At }); LOWV.push({ t: 'ATR 14', v: [[At, '#A6B0FF']] }); pane++; }
}
function ptOf(x, v, i) { var p = { time: BARS[i].time, value: v }; if (x.h) p.color = hexA(v >= 0 ? CUP : CDN, .45); return p; }
/* full = 봉을 새로 받았을 때(전부 다시) · 아니면 마지막 점만 */
function indCalc(full) {
  if (!chart) return;
  ISER.forEach(function (x) {
    var a = x.f();
    if (full) { x.s.setData(a.map(function (v, i) { return v != null && isFinite(v) && i < BARS.length ? ptOf(x, v, i) : null; }).filter(Boolean)); return; }
    for (var i = Math.min(a.length, BARS.length) - 1; i >= 0; i--) { if (a[i] != null && isFinite(a[i])) { try { x.s.update(ptOf(x, a[i], i)); } catch (e) {} break; } }
  });
  if (CLOUD) CLOUD.redraw();
}
var indT = 0;
function indSoon() { if (indT) return; indT = setTimeout(function () { indT = 0; indCalc(false); legend(null); overlays(); }, 600); }   /* 실시간 봉이 바뀌면 0.6초에 한 번만 */

/* 차트를 (다시) 만든다: 처음 열 때 · 지표를 켜고 끌 때 · 색을 바꿀 때. keep = 보던 자리 · 확대 그대로 */
function buildChart(keep) {
  if (!LC) { chartMsg('차트를 그리지 못했어요.'); return; }
  CUP = cssv('--pup', CUP); CDN = cssv('--pdn', CDN);
  var vr = keep && chart ? chart.timeScale().getVisibleLogicalRange() : null;
  if (chart) { try { chart.remove(); } catch (e) {} chart = null; }
  plines = []; ENTRY = {}; FMK = null;
  chart = LC.createChart($('chart'), chartOpts());
  cs = chart.addSeries(LC.CandlestickSeries, { upColor: CUP, downColor: CDN, borderVisible: false, wickUpColor: CUP, wickDownColor: CDN, priceLineColor: '#8A8A90' });
  vs = chart.addSeries(LC.HistogramSeries, { priceScaleId: '', priceFormat: { type: 'volume' }, lastValueVisible: false, priceLineVisible: false });
  vs.priceScale().applyOptions({ scaleMargins: { top: 0.86, bottom: 0 } });
  var sp = SP[U.sym]; if (sp) cs.applyOptions({ priceFormat: { type: 'price', precision: sp.pp, minMove: sp.tick } });
  indBuild(); builtTf = U.tf;
  if (BARS.length) { cs.setData(BARS); vs.setData(BARS.map(volPt)); indCalc(true); }
  FMK = LC.createSeriesMarkers(cs, []);
  applySizes();
  chart.subscribeCrosshairMove(function (prm) { CROSS = prm && prm.seriesData ? prm.seriesData.get(cs) || null : null; legend(CROSS); });
  if (vr && vr.to >= BARS.length - 2) { var w = vr.to - vr.from; vr = { from: BARS.length - 1 + rightPad() - w, to: BARS.length - 1 + rightPad() }; }
  if (vr) chart.timeScale().setVisibleLogicalRange(vr); else chart.timeScale().scrollToRealTime();
  chart.timeScale().subscribeVisibleLogicalRangeChange(overlays);
  chart.timeScale().subscribeSizeChange(overlays);
  $('pls').innerHTML = LOWV.map(function (x, i) { return '<button type="button" class="pc-pl" id="pp-pl' + i + '" data-pmax="' + (i + 1) + '"></button>'; }).join('');
  var nm = ['봉 칸'].concat(LOWV.map(function (x) { return x.t.split(' ')[0] + ' 칸'; }));
  $('grips').innerHTML = LOWV.map(function (x, i) { return '<div class="pc-grip" role="separator" tabindex="0" aria-orientation="horizontal" data-pgrip="' + (i + 1) + '" aria-label="' + nm[i] + '과 ' + nm[i + 1] + ' 사이. 위아래로 끌거나 화살표 키로 크기 조절"><i></i></div>'; }).join('');
  if (MAXP >= LOWV.length + 1) MAXP = 0;
  if (MAXP) requestAnimationFrame(function () { requestAnimationFrame(function () { if (MAXP && chart) setSizes(maxSizes(MAXP)); }); });
  drawLines(); fillMarks(); legend(null); overlays();
}
var CROSS = null, builtTf = '';
function initChart() { if (!chart) buildChart(false); }
function setBars(rows) {
  rows = rows.filter(function (r) { return r && +r[0] > 0; }).sort(function (a, b) { return +a[0] - +b[0]; });
  var seen = {}; BARS = [];
  rows.forEach(function (r) { var b = toBar(r); if (seen[b.time]) return; seen[b.time] = 1; BARS.push(b); });
  cs.setData(BARS); vs.setData(BARS.map(volPt));
  lastBarT = BARS.length ? BARS[BARS.length - 1].time : 0;
  indCalc(true); fillMarks(); legend(null); overlays();
  if (BARS.length) chartMsg('');
}
function updBar(r) {
  var b = toBar(r); if (b.time < lastBarT) return;
  var n = BARS.length;
  if (n && BARS[n - 1].time === b.time) BARS[n - 1] = b; else BARS.push(b);
  cs.update(b); vs.update(volPt(b)); lastBarT = b.time; chartMsg('');
  indSoon();
}
/* 실시간이 끊겼을 때(대체 시세) 마지막 봉만 가격으로 고친다 */
function updBarPx(px) {
  if (!chart || !BARS.length || !(px > 0)) return;
  var last = BARS[BARS.length - 1], ms = TFMS[U.tf], t0 = Math.floor(Date.now() / ms) * ms;
  if (sec(t0) > last.time) { updBar([t0, px, px, px, px, 0]); return; }
  updBar([(last.time * 1000) - H9, last.open, Math.max(last.high, px), Math.min(last.low, px), px, last.v]);
}
function loadChart() {
  if (!CHART || !chart || !SP[U.sym]) return;
  var key = U.sym + '|' + U.tf;
  if (key === chartKey && histOK) { drawLines(); return; }
  var vwapFlip = IND.vwap && builtTf && (builtTf === '1D') !== (U.tf === '1D');
  chartKey = key; histOK = false; lastBarT = 0; firstSnap = true; BARS = [];
  var sp = SP[U.sym];
  if (vwapFlip) buildChart(false);                 /* 1D ↔ 다른 간격: VWAP 선이 생기거나 빠진다 */
  else { cs.applyOptions({ priceFormat: { type: 'price', precision: sp.pp, minMove: sp.tick } }); cs.setData([]); vs.setData([]); indCalc(true); }
  chartMsg('차트 불러오는 중…');
  candles(U.sym, U.tf, KN).then(function (rows) {
    if (chartKey !== key) return;
    if (!rows || !rows.length) { chartMsg(KMSG || '차트를 받지 못했어요. 잠시 뒤 다시 열어 주세요.'); return; }
    setBars(rows); histOK = true; chart.timeScale().scrollToRealTime();
  });
  drawLines();
}
function onCandles(id, tf, data, action) {
  if (!CHART || id !== U.sym || tf !== U.tf || !cs) return;
  if (action === 'snapshot' && firstSnap) { firstSnap = false; if (!histOK) { setBars(data); return; } }
  data.slice().sort(function (a, b) { return +a[0] - +b[0]; }).forEach(updBar);
}
/* 내 포지션 · 주문 선. 진입 선 이름에 지금 손익을 붙인다(1초에 한 번 고침) */
function pnlOf(p) { var mk = M[p.sym] && M[p.sym].mark; if (!(mk > 0)) return null; var u = (mk - p.entry) * p.qty * p.side; return { u: u, roe: p.margin > 0 ? u / p.margin * 100 : 0 }; }
function entryTitle(k) { var p = st.pos[k]; if (!p) return 'Entry'; var g = hedgeOn() ? (p.side === 1 ? 'L ' : 'S ') : '', r = pnlOf(p); return g + 'Entry' + (r ? ' ' + sg(r.u, 2) + ' (' + sg(r.roe, 1) + '%)' : ''); }
function drawLines() {
  if (!cs || !SP[U.sym] || !CHART) return;
  plines.forEach(function (l) { try { cs.removePriceLine(l); } catch (e) {} }); plines = []; ENTRY = {};
  var id = U.sym, mk = marks();
  function add(price, color, title, style) { var l = cs.createPriceLine({ price: price, color: color, lineWidth: 1, lineStyle: style, axisLabelVisible: true, title: title, axisLabelColor: color, axisLabelTextColor: '#0B0B0C' }); plines.push(l); return l; }
  E.keysOf(st, id).forEach(function (k) {
    var p = st.pos[k], g = hedgeOn() ? (p.side === 1 ? 'L ' : 'S ') : '';
    ENTRY[k] = add(p.entry, '#A0A0A5', entryTitle(k), LC.LineStyle.Dashed);
    var lp = E.liqOf(st, SP, k, mk); if (lp) add(lp, CLIQ, g + 'Liq.', LC.LineStyle.Dashed);
    if (p.tp != null) add(p.tp, '#F3F3F4', g + 'TP', LC.LineStyle.Dotted);
    if (p.sl != null) add(p.sl, '#8A8A90', g + 'SL', LC.LineStyle.Dotted);
  });
  st.ord.forEach(function (o) {
    if (o.sym !== id) return;
    var k = o.k || 'limit', c = o.side === 1 ? CUP : CDN;
    if (k === 'limit') add(o.px, c, 'Limit', LC.LineStyle.Dotted);
    else if (k === 'stop') add(o.trig, c, 'Trigger', LC.LineStyle.Dotted);
    else { var tl = E.trailStop(o); if (tl) add(tl, c, 'Trail', LC.LineStyle.Dotted); else if (o.act) add(o.act, c, 'Trail start', LC.LineStyle.Dotted); }
  });
  fillMarks(); posStrip(); overlays();
}
var entryAt = 0;
function entryTick() { if (Date.now() - entryAt < 1000) return; entryAt = Date.now(); Object.keys(ENTRY).forEach(function (k) { try { ENTRY[k].applyOptions({ title: entryTitle(k) }); } catch (e) {} }); }
/* 체결 화살표: 그 시각이 든 봉에(받아 둔 최근 체결 60개 안에서) */
function fillMarks() {
  if (!FMK || !BARS.length) { if (FMK) FMK.setMarkers([]); return; }
  var t0 = BARS[0].time, out = [];
  (FILLS || []).forEach(function (f) {
    if (f.sym !== U.sym || f.kind === 'fund') return;
    var s = sec(f.ts); if (s < t0) return;
    var lo = 0, hi = BARS.length - 1;                    /* 그 시각보다 늦지 않은 마지막 봉 */
    while (lo < hi) { var mid = (lo + hi + 1) >> 1; if (BARS[mid].time <= s) lo = mid; else hi = mid - 1; }
    var buy = f.kind === 'open' ? f.side === 1 : f.side === -1;
    out.push({ time: BARS[lo].time, position: buy ? 'belowBar' : 'aboveBar', color: buy ? CUP : CDN, shape: buy ? 'arrowUp' : 'arrowDown', text: (buy ? '매수 ' : '매도 ') + fq(f.sym, f.qty), size: 1 });
  });
  out.sort(function (a, b) { return a.time - b.time; });
  try { FMK.setMarkers(out.slice(-40)); } catch (e) {}
}
/* 봉 정보(누른 봉, 없으면 마지막 봉) + 켠 지표 값 · 보조 칸 이름표 */
function legend(d) {
  var el = $('lg'); if (!el) return;
  if (!BARS.length) { el.innerHTML = ''; return; }
  var b = d || BARS[BARS.length - 1], i = -1;
  for (var k = BARS.length - 1; k >= 0; k--) if (BARS[k].time === b.time) { i = k; break; }
  var full = i >= 0 ? BARS[i] : null, prev = i > 0 ? BARS[i - 1].close : b.open, chg = (b.close / prev - 1) * 100, c = chg >= 0 ? 'up' : 'dn', id = U.sym;
  var val = function (f) { var a = f(); return i >= 0 && a[i] != null ? fp(id, a[i]) : '—'; };
  el.innerHTML = '<span>시 <b>' + fp(id, b.open) + '</b></span><span>고 <b>' + fp(id, b.high) + '</b></span><span>저 <b>' + fp(id, b.low) + '</b></span><span>종 <b class="' + c + '">' + fp(id, b.close) + '</b></span>' +
    '<span class="' + c + '">' + sg(chg, 2) + '%</span>' + (full ? '<span>거래량 <b>' + fsz(full.v) + '</b></span>' : '') +
    (TOPV.length ? '<span class="pc-br"></span>' + TOPV.map(function (x) { return '<span class="pc-li"><i style="background:' + x[2] + '"></i>' + x[0] + ' <b>' + val(x[1]) + '</b></span>'; }).join('') : '');
  LOWV.forEach(function (x, k) {
    var e = $('pl' + k); if (!e) return;
    var on = MAXP === k + 1;
    e.setAttribute('aria-pressed', on); e.setAttribute('aria-label', x.t + ' 칸 ' + (on ? '원래 크기로' : '크게 보기'));
    e.innerHTML = '<span>' + x.t + '</span>' + x.v.map(function (v) { var a = v[0](); return '<b style="color:' + v[1] + '">' + (i >= 0 && a[i] != null ? fmt(a[i], Math.abs(a[i]) >= 100 ? 1 : 2) : '—') + '</b>'; }).join('') +
      '<svg viewBox="0 0 24 24" aria-hidden="true">' + (on ? '<path d="M9 4v5H4M15 20v-5h5"/>' : '<path d="M14 4h6v6M10 20H4v-6"/>') + '</svg>';
  });
}

/* ── 칸(페인) 크기: 칸 사이 손잡이를 끌거나, 보조 칸 이름표를 눌러 그 칸만 크게. 비율로 이 기기에 기억 ── */
var PR = lsGet('a99p.pane') || {}, MAXP = 0;
function minH(k) { return k ? 32 : 80; }   /* 봉 칸 80px, 보조 칸 32px 아래로는 안 줄어듦 */
function hsum(a) { return a.reduce(function (s, x) { return s + x; }, 0); }
function heights() { return chart.panes().map(function (p) { return p.getHeight(); }); }
function setSizes(a) { chart.panes().forEach(function (p, k) { p.setStretchFactor(Math.max(1, a[k])); }); overlays(); }
function applySizes() {
  var n = chart.panes().length; if (n < 2) return;
  var a = PR[n] && PR[n].length === n ? PR[n].slice() : [100].concat(Array(n - 1).fill(n > 2 ? 30 : 36));
  var tot = hsum(a); for (var k = 1; k < n; k++) a[k] = Math.max(a[k], tot * 0.12);   /* 저장된 비율이 너무 작아도 보이게 */
  setSizes(a);
}
function saveSizes(a) { PR[a.length] = a.map(Math.round); lsSet('a99p.pane', PR); }
function maxSizes(k) {
  /* 고른 칸을 전체의 55%까지. 봉 칸은 40% 아래로 안 줄인다 */
  var hs = heights(), H = hsum(hs), other = 36 * (hs.length - 2), big = Math.round(H * 0.55), mainMin = Math.max(minH(0), Math.round(H * 0.4));
  if (H - big - other < mainMin) big = H - other - mainMin;
  return hs.map(function (_, j) { return j === 0 ? H - big - other : (j === k ? big : 36); });
}
function toggleMax(k) { if (MAXP === k) { MAXP = 0; applySizes(); } else { MAXP = k; setSizes(maxSizes(k)); } legend(CROSS); }
function resizeBy(d, dy) {
  var k = d.k, a = d.hs.slice(), pair = a[k - 1] + a[k];
  a[k - 1] = Math.max(minH(k - 1), Math.min(pair - minH(k), a[k - 1] + dy)); a[k] = pair - a[k - 1];
  d.last = a; if (MAXP) { MAXP = 0; legend(CROSS); } setSizes(a);
}

/* ── 차트 위에 얹는 것: 보조 칸 이름표 · 손잡이 · 화면 밖 청산 · 익절 · 손절 표시 ── */
var ovReq = 0;
function overlays() {
  if (ovReq || !CHART) return;
  ovReq = requestAnimationFrame(function () { requestAnimationFrame(function () { ovReq = 0; placeOverlays(); }); });   /* 다시 그려진 다음 프레임에 잰다 */
}
function placeOverlays() {
  if (!chart || !CHART) return;
  var ps = chart.panes(), top = 0, aw = chart.priceScale('right').width(), plotW = $('chart').clientWidth - aw;
  for (var k = 0; k < ps.length; k++) {
    var el = k > 0 ? $('pl' + (k - 1)) : null, g = k > 0 ? CW.querySelector('[data-pgrip="' + k + '"]') : null;
    if (el) { el.style.top = (top + 3) + 'px'; el.style.left = k === ps.length - 1 && ps[k].getHeight() < 56 ? '48px' : ''; }   /* 낮은 맨 아래 칸이면 차트 부품 표시(로고)를 피해서 */
    if (g) { g.style.top = (top - 1) + 'px'; g.style.left = Math.round(plotW / 2 - 24) + 'px'; }
    top += ps[k].getHeight() + 1;
  }
  /* 화면 밖 가격: 청산가는 크게(주황), 익절 · 손절은 작게. 화면 안이면 선이 보이니 숨김 */
  var box = $('edges'), lg = $('lg'); if (!box) return;
  lg.style.maxWidth = '';
  var h = ps[0].getHeight(), up = [], dn = [], mk = marks(), hg = hedgeOn();
  E.keysOf(st, U.sym).forEach(function (k) {
    var p = st.pos[k], pre = hg ? (p.side === 1 ? 'L ' : 'S ') : '', lp = E.liqOf(st, SP, k, mk);
    [[lp, '청산가', 'pc-lq'], [p.tp, '익절', 'pc-em'], [p.sl, '손절', 'pc-em']].forEach(function (x) {
      if (!(x[0] > 0)) return;
      var y = cs.priceToCoordinate(x[0]); if (y == null || (y >= 2 && y <= h - 2)) return;
      (y > h - 2 ? dn : up).push({ y: y, p: x[0], lab: pre + x[1], c: x[2] });
    });
  });
  dn.sort(function (a, b) { return b.y - a.y; }); up.sort(function (a, b) { return a.y - b.y; });   /* 가장 먼 가격이 가장자리 쪽 */
  box.innerHTML = up.concat(dn).map(function (m) { var d = dn.indexOf(m) >= 0; return '<div class="' + m.c + '" aria-label="' + esc(m.lab) + ' ' + fp(U.sym, m.p) + ', 지금 화면보다 ' + (d ? '아래' : '위') + '">' + esc(m.lab) + (d ? ' ↓ ' : ' ↑ ') + fp(U.sym, m.p) + '</div>'; }).join('');
  var els = box.children, offU = 3, offD = 3, tw = 0;
  for (var i = 0; i < els.length; i++) {
    var e = els[i], m = i < up.length ? up[i] : dn[i - up.length], hh = e.offsetHeight;
    e.style.minWidth = aw + 'px';
    if (i < up.length) { e.style.top = offU + 'px'; offU += hh + 2; tw = Math.max(tw, e.offsetWidth); }
    else { e.style.top = (h - offD - hh) + 'px'; offD += hh + 2; }
  }
  if (tw) lg.style.maxWidth = 'calc(100% - ' + (tw + 12) + 'px)';   /* 위쪽 표시가 있으면 봉 정보 글자가 그 밑으로 들어가지 않게 */
}

/* ── 차트 창 ── */
function tfBtns() { return TFS.map(function (t) { return '<button type="button" role="tab" data-ptf="' + t + '">' + t + '</button>'; }).join(''); }
function openChart(mode) {
  CHART = mode;
  if (!CW) {
    CW = document.createElement('div'); CW.id = 'pp-cwrap';
    CW.innerHTML = '<div class="pp-cbd" data-pchart="close"></div><div class="pp-cw" id="pp-cw" role="dialog" aria-modal="true" aria-label="차트"><div class="gr"></div>' +
      '<div class="bar"><b id="pp-cwsym">—</b><span class="px" id="pp-cwpx">—</span><span class="pc-ch" id="pp-cwch"></span><span class="sp"></span>' +
      '<button type="button" class="pp-ib" data-pchart="toggle" aria-label="크게 · 작게"><svg viewBox="0 0 24 24" id="pp-cwic"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg></button>' +
      '<button type="button" class="pp-ib" data-pchart="close" aria-label="차트 닫기"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
      '<div class="pc-ob" id="pp-ob"></div>' +
      '<div class="tf" role="tablist" aria-label="봉 간격">' + tfBtns() + '<span class="pc-cd" id="pp-cd"></span></div>' +
      '<div class="pc-ind"><button type="button" class="pc-ibt" id="pp-indb" data-pind="open" aria-haspopup="dialog" aria-expanded="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>지표<span class="pc-cnt" id="pp-indcnt" hidden></span></button><div class="pc-chips" id="pp-chips" aria-label="켜진 지표"></div></div>' +
      '<div class="cv"><div id="pp-chart"></div><div class="pc-lg" id="pp-lg"></div><div id="pp-pls"></div><div id="pp-grips"></div><div class="pc-edges" id="pp-edges"></div><p id="pp-cmsg">차트 불러오는 중…</p></div>' +
      '<div class="pc-cpos" id="pp-cpos2" hidden></div>' +
      '<div class="pc-iscrim" id="pp-iscrim" data-pind="close" hidden></div>' +
      '<div class="pc-isheet" id="pp-isheet" role="dialog" aria-modal="true" aria-labelledby="pp-ishT" hidden><div class="pc-ishh"><b id="pp-ishT">지표</b><span class="sp"></span><button type="button" data-pind="off">모두 끄기</button><button type="button" class="pc-done" data-pind="close">완료</button></div>' +
      '<div class="pc-ishb" id="pp-ilist"></div><p class="pc-ishf">모두 지난 가격으로 계산한 참고용 선이에요. 사고팔라는 신호가 아니에요.</p></div></div>';
    R.appendChild(CW);                             // 누르기는 R 이 받는다(안에 있으므로)
    chartEvents();
    if (window.ResizeObserver) new ResizeObserver(overlays).observe($('chart'));
  }
  CW.hidden = false;
  var w = $('cw');
  w.className = 'pp-cw' + (mode === 'full' ? ' full' : '');
  CW.querySelector('.pp-cbd').hidden = mode === 'full';
  document.documentElement.classList.toggle('pp-lock', mode === 'full');
  $('cwic').innerHTML = mode === 'full' ? '<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/>' : '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>';
  $$('[data-ptf]').forEach(function (b) { b.classList.toggle('on', b.dataset.ptf === U.tf); b.setAttribute('aria-selected', b.dataset.ptf === U.tf); });
  initChart();
  drawChips();
  syncSubs();
  loadChart();
  renderCwHead(); countdown(); overlays();
}
function closeChart() {
  CHART = '';
  closeInd();
  if (CW) CW.hidden = true;
  document.documentElement.classList.remove('pp-lock');
  syncSubs();
}
/* 머리 · 호가 줄 · 아래 포지션 줄 · 진입 선 손익 (시세가 바뀔 때마다, 그리기 묶음 안에서) */
function renderCwHead() {
  if (!CHART) return;
  var id = U.sym, m = M[id]; $('cwsym').textContent = NM(id) + ' Perp';
  var p = $('cwpx'); p.textContent = m && m.last ? fp(id, m.last) : '—'; p.className = 'px ' + cls(m && m.chg || 0);
  var c = $('cwch'); c.textContent = m && m.chg != null ? pct(m.chg) : ''; c.className = 'pc-ch ' + cls(m && m.chg || 0);
  $('ob').innerHTML = '<span class="pc-bid">매수 1호가<b>' + (m && m.bid ? fp(id, m.bid) : '—') + '</b></span><span class="pc-ask">매도 1호가<b>' + (m && m.ask ? fp(id, m.ask) : '—') + '</b></span><span class="pc-mk">표시가격<b>' + (m && m.mark ? fp(id, m.mark) : '—') + '</b></span>';
  posStrip(); entryTick(); overlays();
}
function posStrip() {
  var box = $('cpos2'); if (!box) return;
  var ks = ME ? E.keysOf(st, U.sym).slice(0, 2) : [];
  box.hidden = !ks.length; if (!ks.length) { box.innerHTML = ''; return; }
  var mk = marks();
  box.innerHTML = ks.map(function (k) {
    var p = st.pos[k], r = pnlOf(p), lp = E.liqOf(st, SP, k, mk), c = r ? cls(r.u) : '';
    return '<div class="pc-pr"><div>방향<b class="' + (p.side === 1 ? 'up' : 'dn') + '">' + (p.side === 1 ? '롱' : '숏') + ' · ' + p.lev + '배</b></div><div>진입가<b>' + fp(p.sym, p.entry) + '</b></div>' +
      '<div>지금 손익<b class="' + c + '">' + (r ? sg(r.u, 2) : '—') + '</b><small class="' + c + '">' + (r ? sg(r.roe, 1) + '%' : '') + '</small></div><div>청산가<b class="pc-lq">' + (lp ? fp(p.sym, lp) : '—') + '</b></div></div>';
  }).join('');
}
/* 봉 마감까지 남은 시간 (거래소 봉은 세계 표준시 기준으로 끊긴다) */
function countdown() {
  var e = $('cd'); if (!e || !CHART) return;
  var k = TFMS[U.tf], left = k - (Date.now() % k), s = Math.floor(left / 1000);
  var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60;
  e.textContent = '봉 마감 ' + (h ? h + ':' + ('0' + m).slice(-2) : m) + ':' + ('0' + x).slice(-2);
}
/* 지표 칩 · 목록 */
function drawChips() {
  var on = IDEF.filter(function (d) { return IND[d.k]; }), cnt = $('indcnt');
  if (!cnt) return;
  cnt.hidden = !on.length; cnt.textContent = on.length;
  $('chips').innerHTML = on.length ? on.map(function (d) {
    var off = d.k === 'vwap' && vwapOff();
    return '<button type="button" class="pc-chip' + (off ? ' off' : '') + '" data-pindoff="' + d.k + '" aria-label="' + d.name + ' 끄기">' +
      d.c.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('') + d.chip + (off ? ' · 1D 제외' : '') + '<span class="pc-x" aria-hidden="true">×</span></button>';
  }).join('') : '<span class="pc-none">봉 · 거래량만 보는 중</span>';
}
function drawIList() {
  var row = function (d) {
    return '<button type="button" class="pc-row" role="switch" data-pindk="' + d.k + '" aria-checked="false">' +
      '<span class="pc-sw" aria-hidden="true">' + d.c.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('') + '</span>' +
      '<span class="pc-tx"><b>' + d.name + '<em>' + d.p + '</em></b><small>' + d.d + '</small></span><span class="pc-tg" aria-hidden="true"></span></button>';
  };
  $('ilist').innerHTML = '<h3>봉 위에 겹쳐 그리기</h3>' + IDEF.filter(function (d) { return d.g === 'top'; }).map(row).join('') +
    '<h3>봉 아래 보조 칸에 그리기 <span id="pp-lownote"></span></h3>' + IDEF.filter(function (d) { return d.g === 'low'; }).map(row).join('');
  syncIList();
}
function syncIList() {
  var note = $('lownote'); if (!note) return;
  var full = lowOn() >= LOWMAX;
  note.textContent = '· ' + LOWMAX + '칸까지 (지금 ' + lowOn() + '칸)';
  Array.prototype.forEach.call($('ilist').querySelectorAll('.pc-row'), function (r) {
    var d = idef(r.dataset.pindk), blocked = (!IND[d.k] && d.g === 'low' && full) || (d.k === 'vwap' && vwapOff());
    r.setAttribute('aria-checked', IND[d.k]); r.setAttribute('aria-disabled', blocked);
    var sm = r.querySelector('small');
    sm.className = blocked ? 'pc-hint' : '';
    sm.textContent = d.k === 'vwap' && vwapOff() ? '1D 간격에서는 봉 하나가 하루라 꺼져요' : (blocked ? '보조 칸이 다 찼어요. 하나를 끄면 켤 수 있어요' : d.d);
  });
}
function indChanged() { saveInd(); syncIList(); drawChips(); buildChart(true); }
function toggleInd(k) {
  var d = idef(k); if (!d) return;
  if (!IND[k] && ((d.g === 'low' && lowOn() >= LOWMAX) || (k === 'vwap' && vwapOff()))) {
    var n = $('lownote'); if (n && d.g === 'low') { n.classList.add('pc-flash'); setTimeout(function () { n.classList.remove('pc-flash'); }, 900); }
    return;
  }
  IND[k] = !IND[k]; indChanged();
}
var indFocus = null;
function openInd() {
  indFocus = document.activeElement;
  drawIList(); $('iscrim').hidden = false; $('isheet').hidden = false; $('indb').setAttribute('aria-expanded', 'true');
  var f = $('ilist').querySelector('.pc-row'); if (f) f.focus();
}
function closeInd() {
  var s = $('isheet'); if (!s || s.hidden) return;
  $('iscrim').hidden = true; s.hidden = true; $('indb').setAttribute('aria-expanded', 'false');
  (indFocus && document.contains(indFocus) ? indFocus : $('indb')).focus();
}
/* 차트 창 안의 누르기 · 끌기 · 키 (창을 처음 만들 때 한 번) */
var gdrag = null;
function chartEvents() {
  CW.addEventListener('click', function (e) {
    var t = e.target, c;
    if ((c = t.closest('[data-pind]'))) { var a = c.dataset.pind; if (a === 'open') openInd(); else if (a === 'close') closeInd(); else if (a === 'off') { IDEF.forEach(function (d) { IND[d.k] = false; }); indChanged(); } return; }
    if ((c = t.closest('[data-pindk]'))) { toggleInd(c.dataset.pindk); return; }
    if ((c = t.closest('[data-pindoff]'))) { IND[c.dataset.pindoff] = false; indChanged(); return; }
    if ((c = t.closest('[data-pmax]'))) { toggleMax(+c.dataset.pmax); return; }
  });
  var gr = $('grips');
  gr.addEventListener('pointerdown', function (e) {
    var g = e.target.closest('.pc-grip'); if (!g || !chart) return;
    e.preventDefault(); try { g.setPointerCapture(e.pointerId); } catch (x) {}
    gdrag = { k: +g.dataset.pgrip, y: e.clientY, hs: heights(), el: g }; g.classList.add('on');
  });
  gr.addEventListener('pointermove', function (e) { if (gdrag) resizeBy(gdrag, e.clientY - gdrag.y); });
  ['pointerup', 'pointercancel'].forEach(function (ev) { gr.addEventListener(ev, function () { if (!gdrag) return; gdrag.el.classList.remove('on'); if (gdrag.last) saveSizes(gdrag.last); gdrag = null; }); });
  gr.addEventListener('keydown', function (e) {
    var g = e.target.closest('.pc-grip'); if (!g || (e.key !== 'ArrowUp' && e.key !== 'ArrowDown')) return;
    e.preventDefault(); var d = { k: +g.dataset.pgrip, hs: heights() }; resizeBy(d, e.key === 'ArrowUp' ? -12 : 12); saveSizes(d.last);
  });
  $('isheet').addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); closeInd(); return; }
    if (e.key !== 'Tab') return;   /* 목록이 열려 있는 동안 포커스는 목록 안에서만 */
    var f = $('isheet').querySelectorAll('button'), a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  });
  /* 가격축을 끌어 늘리거나 휠로 확대할 때도 표시 위치를 다시 잰다 */
  ['pointerup', 'pointermove', 'wheel', 'touchend'].forEach(function (ev) { $('chart').addEventListener(ev, function (e) { if (ev !== 'pointermove' || e.buttons) overlays(); }, { passive: true }); });
}
/* 색 설정을 바꾸면 차트를 새 색으로 다시 */
function chartRecolor() { if (chart) { buildChart(true); renderCwHead(); } }

/* 봉 받기: 휴대폰이 거래소에 직접 → 안 되면 우리 서버 중계(/p/k, 로그인 필요 · 1분에 6번). 직접이 실패하면 2분 동안은 중계로 */
var directFailAt = 0, KMSG = '';
function hlIv(g) { return { '1H': '1h', '4H': '4h', '1D': '1d' }[g] || g; }
function candles(id, g, n) {
  KMSG = '';
  var viaProxy = function () {
    return api('/p/k?s=' + encodeURIComponent(id) + '&g=' + g + '&n=' + n).then(function (x) {
      if (x.s === 200 && x.j && x.j.code === '00000') return x.j.data;
      KMSG = x.s === 429 ? '차트를 너무 자주 바꿨어요. 1분 뒤 다시 열어 주세요.' : x.s === 401 ? '로그인하면 차트를 볼 수 있어요.' : '차트를 받지 못했어요. 잠시 뒤 다시 열어 주세요.';
      return null;
    });
  };
  if (directFailAt && Date.now() - directFailAt < 120000) return viaProxy();
  var now = Date.now();
  return postJSON(HLI, { type: 'candleSnapshot', req: { coin: id, interval: hlIv(g), startTime: now - n * TFMS[g], endTime: now } }, 6000).then(function (d) {
    if (!Array.isArray(d)) throw new Error('bad');
    directFailAt = 0;
    return d.map(function (x) { return [+x.t, +x.o, +x.h, +x.l, +x.c, +x.v]; });
  }).catch(function () { directFailAt = Date.now(); return viaProxy(); });
}
/* ── 순위 ── */
var board = {};
/* 2026.10.21-A 운영(OFFICIAL) 계정은 순위에서 뺀다 — 번호는 나머지로 다시 매기고, 운영 계정은 아래에 따로 */
function offSplit(j) {
  if (!j || !j.rows || j.offSplit) return j;
  var off = [], rest = [];
  j.rows.forEach(function (r) { (r.off ? off : rest).push(r); });
  rest.forEach(function (r, i) { r.rank = i + 1; if (r.t5 && r.rank > 5) r.t5 = false; });
  j.rows = rest; j.offRows = off; j.offSplit = 1;
  if (j.n != null) j.n = Math.max(0, j.n - off.length);
  return j;
}
function loadBoard(m) { var q = m === 'w' ? 'period=week' : m === 'wp' ? 'period=lastweek' : 'month=' + m; return getJSON(API + '/p/board?' + q, 8000).then(function (j) { board[m] = offSplit(j); }, function () { board[m] = { err: 1 }; }); }
function isOffMe(j) { if (!ME || !j || !j.offRows) return false; for (var i = 0; i < j.offRows.length; i++) if (j.offRows[i].nick === ME.nick) return true; return false; }
function rkKey() { return U.rk === 'w' ? (U.wk || 'w') : (U.month || monthKST()); }
function metricOf(j) { return (j && j.metric) || INFO.metric || 'ret'; }
function myRow(j) { if (!ME || !j || !j.rows) return null; for (var i = 0; i < j.rows.length; i++) if (j.rows[i].nick === ME.nick) return j.rows[i]; return null; }
function monthsList() { var out = [], d = new Date(Date.now() + H9); for (var i = 0; i < 6; i++) out.push(new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() - i, 1)).toISOString().slice(0, 7)); return out; }
document.addEventListener('change', function (e) {   /* 2026.11.12-A 랭킹 드롭다운 */
  var t = e.target; if (!t || !t.matches || !t.matches('select[data-dzrk]')) return;
  var k = t.dataset.dzrk, v = t.value;
  if (k === 'prk') U.rk = v === 'w' ? 'w' : 'm';
  else if (k === 'pmonth') U.month = v === monthKST() ? null : v;
  else if (k === 'pwk') U.wk = v === 'wp' ? 'wp' : 'w';
  else if (k === 'ptier') U.rkTier = +v < 0 ? null : +v;
  renderList(); refreshRank();
});
var DZT = [['개미', 0], ['불개미', 0.05], ['슈퍼개미', 0.15], ['프로 트레이더', 0.30], ['탑 트레이더', 0.60], ['레전드 트레이더', null]];
function dzTierOf(r, live) { if (live && r.rank && r.rank <= 3 && r.ret > 0) return 5; var t = 0; for (var i = 1; i < 5; i++) if ((r.ret || 0) >= DZT[i][1] - 1e-9) t = i; return t; }   /* 대결 티어와 같은 규칙(서버 duTier) */
function dzTier(t) { return '<span class="dl-tier t' + t + '">' + DZT[t][0].replace(' 트레이더', '') + '</span>'; }
function dzSel(k, opts, v, lab) { return '<label class="dz-sel"><select data-dzrk="' + k + '" aria-label="' + lab + '">' + opts.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (String(o[0]) === String(v) ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('') + '</select></label>'; }
function dzPct(v) { v = (+v || 0) * 100; if (Math.abs(v) < 0.05) return '0.0%'; return (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toFixed(1) + '%'; }
function rankHTML() {
  var cur = monthKST(), wkv = U.rk === 'w', m = wkv ? null : (U.month || cur), j = board[rkKey()], met = metricOf(j), live = wkv ? (U.wk || 'w') === 'w' : m === cur, tf = U.rkTier == null ? -1 : U.rkTier;
  var h = '<div class="dz-rkbar">' + dzSel('prk', [['m', '월간 순위'], ['w', '주간 순위']], wkv ? 'w' : 'm', '순위 기간') +
    (wkv ? dzSel('pwk', [['w', '이번 주'], ['wp', '지난주']], U.wk || 'w', '주') : dzSel('pmonth', monthsList().map(function (x) { return [x, x === cur ? '이번 달' : (+x.slice(5)) + '월 (' + x.slice(0, 4) + ')']; }), m, '달')) +
    dzSel('ptier', [[-1, '모든 티어']].concat(DZT.map(function (x, i) { return [i, x[0].replace(' 트레이더', '')]; })), tf, '티어별 보기') + '</div>';
  var lbl = wkv ? ((U.wk || 'w') === 'w' ? '이번 주(월요일 0시부터)' : '지난주' + (j && j.week ? ' · ' + j.week.slice(5).replace('-', '/') + ' 시작' : '')) : (m === cur ? '이번 달' : (+m.slice(5)) + '월');
  h += '<p class="pp-note" style="margin:0 0 4px">' + lbl + ' · ' + (j && j.n != null ? '참가 ' + j.n + '명 · ' : '') + (met === 'gain' ? '자산 증가액 순' : '수익률 순') + (live ? ' · 5분마다 갱신' : ' · 마감') + '</p>';
  if (!j) h += '<p class="pp-empty">순위를 불러오는 중…</p>';
  else if (j.err) h += '<p class="pp-empty">순위를 불러오지 못했어요. 잠시 뒤 다시 열어 주세요.</p>';
  else {
    var me = myRow(j), rows = (j.rows || []).slice(0, 100);
    if (me) h += '<div class="pp-rk-me">내 순위 <b>' + me.rank + '위</b> · ' + (met === 'gain' ? '<span class="' + cls(me.gain) + '">' + sg(me.gain) + '</span>' : '<span class="' + cls(me.ret) + '">' + pct(me.ret) + '</span>') + ' · 순자산 ' + fu(me.eq) + '</div>';
    else if (isOffMe(j)) h += '<div class="pp-rk-me">운영 계정은 순위에서 빠져요. 기록은 아래 「운영 계정」에 따로 보여요.</div>';
    else if (!ME) h += '<div class="pp-rk-me">로그인하면 내 순위가 보여요.</div>';
    if (live && !wkv && rows.length < 10) {   /* 참가자가 적을 때 = 티어 사다리(승급선) — 지어낸 리그 없이 실제 티어 규칙만 */
      var myT = me ? dzTierOf(me, true) : 0;
      h += '<div class="dz-league"><div class="hd"><b>티어 사다리 · 이번 달</b><span>참가 ' + rows.length + '명</span></div><ol class="dz-steps">' + DZT.map(function (x, i) { return '<li class="' + (i < myT ? 'done' : i === myT ? 'cur' : '') + '"><i>' + (i < myT ? '✓' : i + 1) + '</i>' + x[0].replace(' 트레이더', '') + '</li>'; }).join('') + '</ol>' +
        '<div class="promo"><span>승급선 · ' + (myT < 4 ? '이번 달 +' + Math.round(DZT[myT + 1][1] * 100) + '%면 ' + DZT[myT + 1][0].replace(' 트레이더', '') : '그달 1~3위면 레전드') + '</span></div>' +
        '<p>' + (rows.length ? '아직 참가자가 적어요. 거래를 시작하면 바로 순위에 올라요.' : '이번 달 1위 자리가 비어 있어요. 첫 거래를 하면 바로 순위에 올라요.') + '</p></div>';
    }
    if (!rows.length) h += '<p class="pp-empty">아직 순위에 오른 참가자가 없어요. 첫 거래를 하면 바로 순위에 올라요.</p>';
    else {
      var fr = tf < 0 ? rows : rows.filter(function (r) { return dzTierOf(r, live) === tf; }), pod = tf < 0 && fr.length >= 3;
      var val = function (r) { var v = met === 'gain' ? r.gain : r.ret; return '<b class="' + cls(v) + '">' + (met === 'gain' ? sg(v) : pct(v)) + '</b>'; };
      if (pod) h += '<div class="dz-pod">' + [fr[1], fr[0], fr[2]].map(function (r, i) { return '<button type="button" data-pnick="' + esc(r.nick) + '"><span class="nk">' + esc(r.nick) + '</span>' + dzTier(dzTierOf(r, live)) + val(r) + '<i class="h' + i + '">' + [2, 1, 3][i] + '</i></button>'; }).join('') + '</div>';
      if (!fr.length) h += '<p class="pp-empty">이 티어에 든 참가자가 아직 없어요.</p>';
      h += '<ol class="pp-rk dz-rk">' + (pod ? fr.slice(3) : fr).map(function (r) {
        var isMe = ME && r.nick === ME.nick, v = met === 'gain' ? r.gain : r.ret, sub = [];
        if (r.mdd != null) sub.push('<span class="' + (r.mdd <= -0.25 ? 'hi' : '') + '">최대 낙폭 ' + dzPct(r.mdd) + '</span>');
        if (r.liqs) sub.push('청산 ' + r.liqs + '번');
        if (!sub.length && r.trades != null) sub.push('거래 ' + r.trades + '번');
        return '<li data-pnick="' + esc(r.nick) + '"' + (isMe ? ' class="me"' : '') + '><span class="r">' + r.rank + '</span><span class="nk">' + esc(r.nick) + dzTier(dzTierOf(r, live)) + (r.off ? '<em class="pp-off">OFFICIAL</em>' : '') + (r.t5 ? '<em class="pp-t5">TOP 5</em>' : r.pub ? '<em class="pp-pub">공개</em>' : '') + '<small class="dz-sub">' + sub.join(' · ') + '</small></span><span class="e">' + fu(r.eq) + '</span><span class="p ' + cls(v) + '">' + (met === 'gain' ? sg(v) : pct(v)) + '</span></li>';
      }).join('') + '</ol>';
    }
  }
  if (j && j.offRows && j.offRows.length) {
    h += '<p class="pp-note" style="margin:14px 0 4px">운영 계정 · 순위 제외</p><ol class="pp-rk pp-rk-off">' + j.offRows.map(function (r) {
      var v = met === 'gain' ? r.gain : r.ret;
      return '<li data-pnick="' + esc(r.nick) + '"><span class="r">–</span><span class="nk">' + esc(r.nick) + '<em class="pp-off">OFFICIAL</em></span><span class="e">' + fu(r.eq) + '</span><span class="p ' + cls(v) + '">' + (met === 'gain' ? sg(v) : pct(v)) + '</span></li>';
    }).join('') + '</ol>';
  }
  h += '<details class="dz-acc"><summary>순위는 어떻게 매기나요?</summary>' +
    '<p class="pp-note">닉네임을 누르면 그 트레이더의 기록이 나와요. <b>TOP 5</b> = 이번 달 월간 순위 상위 5명으로, 열린 포지션 · 거래 기록이 수량 · 금액까지 자동 공개돼요. <b>공개</b> = 본인이 공개를 켠 트레이더예요.</p>' +
    '<p class="pp-note">수익률 = 순자산 ÷ (기간 시작 순자산 + 그 기간 초기화로 받은 금액) − 1. 초기화해도 순위가 유리해지지 않아요.</p>' +
    '<p class="pp-note">최대 낙폭 = 이번 달 순자산이 고점에서 가장 깊게 내려간 비율이에요. 순위를 다시 셀 때(약 15분)마다 재서, 그 사이의 짧은 출렁임은 빠질 수 있어요. 티어는 이번 달 수익률로 매겨요(1~3위면 레전드).</p>' +
    '<p class="pp-note">탈퇴한 회원과 6개월 넘게 접속하지 않은 휴면 회원은 순위에서 빠져요. 휴면 회원은 다시 로그인하면 돌아와요.</p></details>';
  return h;
}
/* 트레이더 프로필 */
function profileSheet(nick) {
  openSheet(nick, '<p class="hint">기록을 불러오는 중…</p>');
  getJSON(API + '/p/trader?nick=' + encodeURIComponent(nick), 8000).then(function (j) {
    if (!SH || SH.hidden || $('shT').textContent !== nick) return;
    if (!j || j.err) { $('shB').innerHTML = '<p class="hint">기록을 불러오지 못했어요.</p>'; return; }
    $('shB').innerHTML = profileHTML(j);
  }, function () { if ($('shB')) $('shB').innerHTML = '<p class="hint">기록을 불러오지 못했어요. 잠시 뒤 다시 열어 주세요.</p>'; });
}
function curveSVG(c) {
  if (!c || c.length < 2) return '';
  var vs = c.map(function (x) { return x[1]; }), mn = Math.min.apply(null, vs.concat([0])), mx = Math.max.apply(null, vs.concat([0])), sp = mx - mn || 1, W = 300, H = 60;
  var pts = c.map(function (x, i) { return (i / (c.length - 1) * W).toFixed(1) + ',' + (H - (x[1] - mn) / sp * H).toFixed(1); }).join(' ');
  var z = (H - (0 - mn) / sp * H).toFixed(1), last = vs[vs.length - 1];
  return '<svg class="pp-cv" viewBox="0 0 300 60" preserveAspectRatio="none" role="img" aria-label="실현 손익 흐름"><line x1="0" y1="' + z + '" x2="300" y2="' + z + '" stroke="var(--line)" stroke-width="1"/><polyline fill="none" stroke="' + (last >= 0 ? 'var(--pup,#22C083)' : 'var(--pdn,#FF5B5B)') + '" stroke-width="1.6" points="' + pts + '" vector-effect="non-scaling-stroke"/></svg>';
}
function profileHTML(j) {
  var S = j.stats || {}, mo = j.month, wk = j.week, mine = ME && ME.nick === j.nick;
  var badge = (j.off ? '<em class="pp-off">OFFICIAL</em>' : '') + (j.t5 ? '<em class="pp-t5">TOP 5</em>' : j.pub ? '<em class="pp-pub">공개</em>' : '');
  function cell(k, v, sub, c) { return '<div><span>' + k + '</span><b class="' + (c || '') + '">' + v + '</b>' + (sub ? '<small>' + sub + '</small>' : '') + '</div>'; }
  var h = badge ? '<p class="hint" style="margin:0">' + badge + '</p>' : '';
  h += '<div class="pp-pfg">' +
    cell('이번 달', mo ? pct(mo.ret) : '—', mo ? mo.rank + '위 / ' + mo.n + '명 · 순자산 ' + fu(mo.eq) : '순위 집계 전', mo ? cls(mo.ret) : '') +
    cell('이번 주', wk ? pct(wk.ret) : '—', wk ? wk.rank + '위 / ' + wk.n + '명' : '집계 전', wk ? cls(wk.ret) : '') +
    cell('승률', S.winRate != null ? fmt(S.winRate * 100, 1) + '%' : '—', '닫은 거래 ' + (S.closes || 0) + '번 (이익 ' + (S.wins || 0) + ' · 손실 ' + (S.losses || 0) + ')') +
    cell('손익비', S.pf != null ? fmt(S.pf, 2) : '—', '이익 합 ÷ 손실 합') +
    cell('평균 이익 · 손실', (S.avgWin != null ? '+' + fu(S.avgWin) : '—') + ' · ' + (S.avgLoss != null ? '−' + fu(S.avgLoss) : '—'), Q) +
    cell('최대 낙폭', S.mdd ? '−' + fu(S.mdd) : '0', S.mddPct ? fmt(S.mddPct * 100, 1) + '% · 실현 손익 기준' : '실현 손익 기준', S.mdd ? 'dn' : '') + '</div>';
  h += '<div class="pp-box"><b>실현 손익 흐름 <small>최근 90일 · 수수료 · 펀딩 포함</small></b>' + (curveSVG(j.curve) || '<p class="hint">' + ((j.curve || []).length ? '하루치 기록이라 흐름은 이틀째부터 그려져요.' : '아직 거래가 없어요.') + '</p>') +
    '<p class="hint" style="margin:0">누적 ' + sg(S.realized || 0) + ' ' + Q + (S.syms && S.syms.length ? ' · 주 종목 ' + S.syms.map(function (x) { return NM(x[0]); }).join(' · ') : '') + '</p></div>';
  if (j.open) {
    h += '<div class="pp-box"><b>열린 포지션 ' + (j.pos || []).length + '개</b>' + ((j.pos || []).length ? '<div class="pp-pl">' + j.pos.map(function (p) {
      return '<div><span><b>' + NMH(p.sym) + '</b> <span class="' + (p.side === 1 ? 'up' : 'dn') + '">' + (p.side === 1 ? 'Long' : 'Short') + '</span> · ' + p.lev + 'x' + (p.mm === 'cross' ? ' · Cross' : '') +
        '<small>수량 ' + fq(p.sym, p.qty) + ' · 진입 ' + fp(p.sym, p.entry) + ' · Mark ' + fp(p.sym, p.mark) + ' · 증거금 ' + fu(p.margin) + '</small></span><span class="r ' + cls(p.upnl) + '">' + sg(p.upnl) + '<small>' + pct(p.roe) + '</small></span></div>';
    }).join('') + '</div>' : '<p class="hint">지금 열린 포지션이 없어요.</p>') + '</div>';
    h += '<div class="pp-box"><b>최근 닫은 거래</b>' + ((j.recent || []).length ? '<div class="pp-pl">' + j.recent.map(function (x) {
      return '<div data-ts="' + (+x.ts || 0) + '"><span>' + NMH(x.sym) + ' <span class="' + (x.side === 1 ? 'up' : 'dn') + '">' + (x.side === 1 ? 'Long' : 'Short') + '</span> · ' + (KIND[x.kind] || 'Close') + '<small>' + kstWhen(x.ts) + ' · ' + fq(x.sym, x.qty) + ' @ ' + fp(x.sym, x.price) + '</small></span><span class="r ' + cls(x.net) + '">' + sg(x.net) + '</span></div>';
    }).join('') + '</div>' : '<p class="hint">아직 없어요.</p>') + '</div>';
  } else h += '<p class="hint">이 트레이더는 포지션을 공개하지 않았어요. 월간 순위 상위 5명이 되면 자동으로 공개돼요.</p>';
  if (mine) h += pubBox();
  return h;
}
function pubBox() {
  var on = !!(ME && ME.pub);
  return '<div class="pp-box"><b>내 포지션 공개</b><div class="pp-cseg"><button type="button" data-ppub="1" class="' + (on ? 'on' : '') + '">공개</button><button type="button" data-ppub="0" class="' + (on ? '' : 'on') + '">비공개</button></div>' +
    '<p class="hint">공개하면 순위표에서 내 닉네임을 누른 사람이 열린 포지션과 최근 거래(수량 · 금액 포함)를 볼 수 있어요. 월간 상위 5명은 이 설정과 상관없이 자동 공개돼요.</p></div>';
}
function setPub(on) {
  if (needLogin()) return;
  api('/p/pub', { on: on }).then(function (x) {
    if (x.s !== 200 || !x.j.ok) { toast(errMsg(x), true); return; }
    ME.pub = !!x.j.pub;
    Array.prototype.forEach.call(document.querySelectorAll('[data-ppub]'), function (b) { b.classList.toggle('on', (b.dataset.ppub === '1') === ME.pub); });
    toast(ME.pub ? '내 포지션을 공개했어요' : '비공개로 바꿨어요');
  });
}
/* 2026.10.21-A 모의투자 맨 위 [거래 | 랭킹] — 랭킹은 아래 탭 대신 화면 하나를 통째로 */
function setView(v) {
  U.view = ['rank', 'duel', 'prof'].indexOf(v) >= 0 ? v : 'trade';
  $$('[data-pview]').forEach(function (b) { var on = b.dataset.pview === U.view; b.classList.toggle('on', on); b.setAttribute('aria-selected', on ? 'true' : 'false'); });
  $('trade').hidden = U.view !== 'trade'; $('rkv').hidden = U.view !== 'rank'; $('dlv').hidden = U.view !== 'duel'; $('pfv').hidden = U.view !== 'prof';
  if (U.view === 'duel') { if (CHART) closeChart(); if (window.A99Duel) window.A99Duel.render(); }
  else if (U.view === 'prof') { if (CHART) closeChart(); if (window.A99Duel) window.A99Duel.profile(); }
  else if (U.view === 'rank') { if (CHART) closeChart(); renderList(); refreshRank(); }
  else { dirty.quote = dirty.book = dirty.acct = true; kick(); }
  try { window.scrollTo(0, 0); } catch (e) { }
  try { document.dispatchEvent(new CustomEvent('a99:pview', { detail: U.view })); } catch (e) { }
}
function refreshRank(force) {
  var m = rkKey();
  if (!force && board[m] && board[m].at && Date.now() - board[m].at < 60000 && (!ME || myRow(board[m]))) { renderList(); return; }
  loadBoard(m).then(function () { renderList(); dirty.acct = true; kick(); });
}


/* ── 그리기 ── */
var dirty = {}, rafOn = false, lastPaint = 0;
function kick() {
  if (rafOn || !ACTIVE) return;
  rafOn = true;
  setTimeout(function () { requestAnimationFrame(paint); }, Math.max(0, 250 - (Date.now() - lastPaint)));
}
function paint() {
  rafOn = false; lastPaint = Date.now();
  if (!ACTIVE) return;
  var d = dirty; dirty = {};
  if (d.quote) { renderHead(); renderCwHead(); renderCbar(); if (PK) renderPicker(); }
  if (d.acct) renderAcctNums();
  if (d.book || d.mid || d.quote) renderBook();
  if (d.pos) renderPosNums();
  if (d.est) renderEst();
}
function changed(all) {
  dirty.acct = dirty.est = true;
  if (!MOUNTED) return;
  renderAcct(); renderList(); drawLines(); levBtn(); syncSubs();
  if (all) dirty.quote = dirty.book = true;
  kick();
}
/* 머리: 종목 · 등락 · 차트 단추 · 내 정보 */
function renderHead() {
  var id = U.sym, m = M[id], sp = SP[id]; if (!sp || !m) return;
  $('hname').innerHTML = NMH(id); $('hname').classList.toggle('lg', BS(id).length > 5);
  var hm = $('hmk'); if (hm) hm.hidden = mktState(id) !== 'closed';
  var c = $('hchg'); c.textContent = m.chg != null ? pct(m.chg) : '—'; c.className = cls(m.chg || 0);
  var b = $('me');
  if (ME) { b.textContent = ME.nick; b.className = 'pp-me'; } else { b.textContent = 'Log In'; b.className = 'pp-me cta'; }
}
/* 계좌 한 줄 (로그인 전에는 시작 안내) */
function renderAcct() {
  var box = $('acct');
  if (!ME) {
    box.innerHTML = '<div class="pp-gst"><p><b>가상 10,000 ' + Q + '</b>로 시작하는 무기한 선물 모의투자예요. 체결은 서버가 실제 호가로 계산하고, 달마다 순위를 매겨요.</p>' +
      '<div class="pp-row2"><button type="button" class="pp-b" data-pauth="signup">초대코드로 시작</button><button type="button" class="pp-b gh" data-pauth="login">로그인</button></div></div>';
    return;
  }
  box.innerHTML = '<button type="button" class="pp-ac" id="pp-acb" aria-label="내 계좌 자세히"><span>Equity</span><b id="pp-eq">—</b><em id="pp-roi">—</em><span class="r">Rank <b id="pp-rank">—</b></span></button>';
  renderAcctNums();
}
function renderAcctNums() {
  if (!ME || !$('eq')) return;
  var eq = equity(), base = retBase();
  $('eq').textContent = fu(eq);
  var r = $('roi'); r.textContent = pct(base > 0 ? eq / base - 1 : 0); r.className = cls(eq - base);
  var j = board[monthKST()], me = myRow(j);
  $('rank').textContent = me ? '#' + me.rank : (isOffMe(j) ? '운영' : '—');
  if ($('avail')) { $('avail').textContent = fu(availNow()) + ' ' + Q; }
}
/* 호가 · 펀딩 · 매수/매도 비율 */
function renderBook() {
  var id = U.sym, m = M[id]; if (!m || !SP[id]) return;
  var ml = $('blast'); ml.textContent = m.last ? fp(id, m.last) : '—'; ml.className = cls(m.dir);
  $('bmark').textContent = m.mark ? fp(id, m.mark) : '—';
  $('fund').textContent = m.fr != null ? (m.fr > 0 ? '+' : '') + fmt(m.fr * 100, 4) + '%' : '—';
  $('fundt').textContent = m.fr != null ? hhmmss(Math.floor(Date.now() / 3600e3) * 3600e3 + 3600e3 - Date.now()) : '—';
  if (U.ot === 'limit' && m.last && !$('px').value && document.activeElement !== $('px')) { $('px').value = m.last.toFixed(SP[id].pp); dirty.est = true; }
  var bt = $('bkt'); if (bt) bt.textContent = bkLabel(id) + ' ▾';
  var b = m.book;
  if (!b) { $('asks').innerHTML = '<div class="em">호가 기다리는 중…</div>'; $('bids').innerHTML = ''; return; }
  var n = 6, asks = b.asks.slice(0, n), bids = b.bids.slice(0, n), mx = 0, sa = 0, sb = 0;
  asks.forEach(function (x) { sa += x[1]; if (x[1] > mx) mx = x[1]; });
  bids.forEach(function (x) { sb += x[1]; if (x[1] > mx) mx = x[1]; });
  function row(x) { return '<button type="button" class="lr" data-ppx="' + x[0] + '" style="--w:' + (mx ? Math.round(x[1] / mx * 100) : 0) + '%"><span class="p">' + fp(id, x[0]) + '</span><span class="s">' + fsz(x[1]) + '</span></button>'; }
  $('asks').innerHTML = asks.slice().reverse().map(row).join('');
  $('bids').innerHTML = bids.map(row).join('');
  var pb = sa + sb ? Math.round(sb / (sa + sb) * 100) : 50;
  $('ratio').innerHTML = '<span class="up">' + pb + '%</span><i><u style="width:' + pb + '%"></u></i><span class="dn">' + (100 - pb) + '%</span>';
}
function fsz(v) { return v >= 1e6 ? fmt(v / 1e6, 2) + 'M' : v >= 1e4 ? fmt(v / 1e3, 1) + 'K' : fmt(v, v >= 100 ? 0 : v >= 1 ? 2 : 3); }
/* 아래 「차트」 줄 */
function renderCbar() {
  var m = M[U.sym], b = $('cbar'); if (!b) return;
  b.hidden = !!CHART;
  $('cbtx').innerHTML = NMH(U.sym) + ' Chart';
  var p = $('cbpx'); p.textContent = m && m.last ? fp(U.sym, m.last) : ''; p.className = cls(m && m.chg || 0);
}
/* 내 거래 */
function renderList() {
  if (!MOUNTED) return;
  var np = Object.keys(st.pos).filter(function (k) { return SP[st.pos[k].sym]; }).length;
  $('cpos').textContent = ME ? '(' + np + '/' + E.MAX_POS + ')' : ''; $('cord').textContent = ME ? '(' + st.ord.length + '/' + E.MAX_ORD + ')' : '';
  $$('[data-ptab]').forEach(function (b) { b.classList.toggle('on', b.dataset.ptab === U.tab); b.setAttribute('aria-selected', b.dataset.ptab === U.tab ? 'true' : 'false'); });
  if (U.view === 'rank') { var rb = $('rkb'); if (rb) rb.innerHTML = rankHTML(); }
  var box = $('list'), t = U.tab;
  if (!ME) { box.innerHTML = '<p class="pp-empty">로그인하면 ' + (t === 'pos' ? '내 포지션' : t === 'ord' ? '미체결 주문' : '거래 내역') + '이 여기에 보여요.</p>'; return; }
  if (t === 'pos') box.innerHTML = posHTML();
  else if (t === 'ord') box.innerHTML = ordHTML();
  else box.innerHTML = fillsHTML();
  renderPosNums();
}
function posHTML() {
  var keys = Object.keys(st.pos).filter(function (k) { return SP[st.pos[k].sym]; });
  if (!keys.length) return '<p class="pp-empty">열린 포지션이 없어요.</p>';
  var head = keys.length > 1 ? '<div class="pp-lh"><button type="button" class="pp-sb" data-pact="closeall" data-lb="Close All">Close All</button></div>' : '';
  return head + keys.map(function (k) {
    var p = st.pos[k], s = p.sym, cr = p.mm === 'cross';
    return '<div class="pp-pc"><div class="t"><b>' + NMH(s) + '</b><span class="pp-tag ' + (p.side === 1 ? 'up' : 'dn') + '">' + (p.side === 1 ? 'Long <small>롱</small>' : 'Short <small>숏</small>') + '</span><span class="pp-tag">' + p.lev + 'x</span><span class="pp-tag pp-t" data-pterm="' + (cr ? 'cross' : 'iso') + '">' + (cr ? 'Cross' : 'Isolated') + '</span></div>' +
      '<div class="pl"><div><span><span class="pp-t" data-pterm="upnl">Unrealized PnL (' + Q + ')</span></span><b id="pp-pp-' + k + '">—</b></div><div class="r"><span><span class="pp-t" data-pterm="roe">ROE</span></span><b id="pp-pr-' + k + '">—</b></div></div>' +
      '<dl class="pp-pg"><div><dt>Size (' + BS(s) + ')</dt><dd>' + fq(s, p.qty) + '</dd></div><div><dt><span class="pp-t" data-pterm="margin">Margin (' + Q + ')</span></dt><dd>' + fu(p.margin) + '</dd></div><div><dt><span class="pp-t" data-pterm="mmr">' + (cr ? 'Cross MMR' : 'MMR') + '</span></dt><dd id="pp-pmm-' + k + '">—</dd></div>' +
      '<div><dt><span class="pp-t" data-pterm="entry">Entry Price</span></dt><dd>' + fp(s, p.entry) + '</dd></div><div><dt><span class="pp-t" data-pterm="mark">Mark Price</span></dt><dd id="pp-pm-' + k + '">—</dd></div><div><dt><span class="pp-t" data-pterm="liq">Est. Liq. Price</span></dt><dd class="w" id="pp-pl-' + k + '">—</dd></div></dl>' +
      '<div class="tp"><span>TP / SL</span><b>' + (p.tp != null ? fp(s, p.tp) : '—') + ' / ' + (p.sl != null ? fp(s, p.sl) : '—') + '</b></div>' +
      '<div class="bt b3"><button type="button" data-pact="tpsl" data-key="' + esc(k) + '">TP/SL</button><button type="button" data-pact="rev" data-key="' + esc(k) + '" data-lb="Reverse">Reverse</button><button type="button" data-pact="close" data-key="' + esc(k) + '" data-lb="Close">Close</button></div></div>';
  }).join('');
}
/* 포지션 카드: Mark 가격이 바뀌면 글자색만 잠깐 (배경 깜빡임 없음 · 동작 줄이기 설정이면 끔) */
var PMK = {}, PFT = {}, RMOT = false;
try { RMOT = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
function flash(el, up) { el.style.transition = 'none'; el.style.color = up ? cssv('--pup', CUP) : cssv('--pdn', CDN); void el.offsetWidth; el.style.transition = 'color .7s ease-out'; el.style.color = ''; }
function renderPosNums() {
  var mks = marks(), cst = null;
  Object.keys(st.pos).forEach(function (k) {
    var p = st.pos[k], s = p && p.sym, e = $('pp-' + k); if (!p || !e || !SP[s]) return;
    var mk = (M[s] && M[s].mark) || p.entry, net = (mk - p.entry) * p.qty * p.side;   // 거래소와 같게: 수수료는 넣지 않는다
    var pe = $('pm-' + k); pe.textContent = fp(s, mk);
    if (PMK[k] && mk !== PMK[k] && Date.now() - (PFT[k] || 0) > 350 && !RMOT) { PFT[k] = Date.now(); flash(pe, mk > PMK[k]); }
    PMK[k] = mk;
    var lp = E.liqOf(st, SP, k, mks); $('pl-' + k).textContent = lp ? fp(s, lp) : '없음';
    e.textContent = sg(net); e.className = cls(net);
    var r = $('pr-' + k); r.textContent = pct(net / p.margin); r.className = cls(net);
    /* 유지증거금률 = (유지증거금 + 닫는 수수료) ÷ (증거금 + 미실현 손익). 100%가 되면 청산.
       교차는 계좌 단위: 교차 유지증거금 합 ÷ (잔고 + 교차 증거금 + 교차 미실현 손익) */
    var mmr;
    if (p.mm === 'cross') { if (!cst) cst = E.crossState(st, SP, mks); mmr = cst.eq > 0 ? cst.mm / cst.eq : 1; }
    else { var eqp = p.margin + net; mmr = eqp > 0 ? E.mmOf(SP[s], p, mk) / eqp : 1; }
    var el = $('pmm-' + k);
    el.textContent = fmt(mmr * 100, 2) + '%'; el.className = mmr > 0.5 ? 'w' : '';
  });
}
function ordKind(o) { var k = o.k || 'limit'; return k === 'stop' ? 'Trigger' : k === 'trail' ? 'Trailing' : 'Limit'; }
function ordDesc(o) {
  var k = o.k || 'limit', s = o.sym;
  if (k === 'stop') return '<span class="pp-t" data-pterm="trigger">Trigger</span> ' + fp(s, o.trig) + ' (' + (o.pt === 'mark' ? 'Mark' : 'Last') + ') → ' + (o.px > 0 ? 'Limit ' + fp(s, o.px) : 'Market');
  if (k === 'trail') return '<span class="pp-t" data-pterm="trail">Callback</span> ' + fmt(o.cb * 100, 1) + '% · ' + (o.pt === 'mark' ? 'Mark' : 'Last') + ' 기준' + (o.armed ? ' · 기준 ' + fp(s, o.peak) + ' · 발동 ' + fp(s, E.trailStop(o)) : ' · 시작 ' + fp(s, o.act) + ' 대기');
  return '@ ' + fp(s, o.px);
}
function ordHTML() {
  if (!st.ord.length) return '<p class="pp-empty">걸어 둔 주문이 없어요.</p>';
  var head = st.ord.length > 1 ? '<div class="pp-lh"><button type="button" class="pp-sb" data-pact="cancelall">Cancel All</button></div>' : '';
  return head + st.ord.map(function (o) {
    var sd = o.ro ? (o.side === 1 ? 'Close Short' : 'Close Long') : (o.side === 1 ? 'Long <small>(롱)</small>' : 'Short <small>(숏)</small>');
    var c = (o.ro ? -o.side : o.side) === 1 ? 'up' : 'dn';
    return '<div class="pp-or"><div class="l"><b>' + NMH(o.sym) + '</b> <span class="' + c + '">' + sd + '</span> · ' + ordKind(o) + ' · ' + o.lev + 'x' +
      (o.ro && (o.k || 'limit') !== 'trail' ? ' · <span class="pp-t" data-pterm="reduce">RO</span>' : '') + (o.po ? ' · <span class="pp-t" data-pterm="post">PO</span>' : '') +
      '<small>' + fq(o.sym, o.qty) + ' ' + BS(o.sym) + ' ' + ordDesc(o) + (o.tp != null ? ' · TP ' + fp(o.sym, o.tp) : '') + (o.sl != null ? ' · SL ' + fp(o.sym, o.sl) : '') + '</small></div>' +
      '<button type="button" class="pp-sb" data-pact="cancel" data-id="' + esc(o.id) + '">Cancel</button></div>';
  }).join('');
}
var GK = { gift: '운영자 지급', loan: '빌린 연습금', repay: '자동 반납', loanoff: '빌린 연습금 정리' };
function giftRow(x) {
  return '<div class="pp-fr"><span class="tm">' + kstWhen(x.ts) + '</span><span><b>연습금</b> <span class="k">' + (GK[x.k] || '') + '</span></span>' +
    '<span class="v ' + cls(x.a) + '">' + (x.a ? sg(x.a, 2) : '0.00') + '</span><span class="d">' + esc(x.n || '') + (x.k === 'gift' || x.k === 'loan' || x.k === 'repay' ? ' · 순위에는 영향 없음' : '') + '</span></div>';
}
function fillsHTML() {
  var G = (ME && ME.acct && ME.acct.gifts) || [];
  if (!FILLS.length && !G.length) return '<p class="pp-empty">체결이 아직 없어요.</p>';
  var lastTs = FILLS.length ? FILLS[FILLS.length - 1].ts : 0;
  var rows = FILLS.map(function (x) { return { ts: x.ts, f: x }; }).concat(G.filter(function (x) { return x.ts >= lastTs || FILLS.length < 60; }).map(function (x) { return { ts: x.ts, g: x }; }));
  rows.sort(function (a, b) { return b.ts - a.ts; });
  return rows.map(function (r) { return r.g ? giftRow(r.g) : fillRow(r.f); }).join('') + '<p class="pp-note">최근 60건까지 보여요. 기록은 180일 동안 보관돼요.</p>';
}
function fillRow(x) {
  return [x].map(function (x) {
    var net = x.kind === 'open' ? -x.fee : x.pnl - x.fee;
    /* 포지션 방향 기준: 진입은 그 방향, 종료·TP·SL·청산은 반대 방향 거래 */
    var ps = x.kind === 'open' || x.kind === 'fund' ? x.side : -x.side, sd = ps === 1 ? 'Long' : 'Short';
    var LB = { open: 'Open ' + sd, close: 'Close ' + sd, tp: 'TP · ' + sd, sl: 'SL · ' + sd, stop: 'Trigger · ' + sd, trail: 'Trailing · ' + sd, liq: 'Liquidated · ' + sd };
    var lb = x.kind === 'fund' ? 'Funding' : LB[x.kind] || 'Close ' + sd;
    return '<div class="pp-fr"><span class="tm">' + kstWhen(x.ts) + '</span><span><b>' + NMH(x.sym) + '</b> <span class="k ' + (x.kind === 'liq' ? 'w' : ps === 1 ? 'up' : 'dn') + '">' + lb + '</span></span>' +
      '<span class="v ' + cls(net) + '">' + sg(net, x.kind === 'fund' ? 4 : 2) + '</span><span class="d">' + (x.kind === 'fund' ? 'Funding fee · Mark ' + fp(x.sym, x.price) : fq(x.sym, x.qty) + ' @ ' + fp(x.sym, x.price)) + (x.fee ? ' · Fee ' + fu(x.fee) : '') + '</span></div>';
  })[0];
}
/* 주문 칸: 예상 · 최대 · 청산가 */
/* 닫기 주문인지: 트레일링 · 양방향의 Close · 단방향의 감소 전용 */
function closeMode() { if (U.ot === 'trail') return true; if (hedgeOn()) return U.oc === 'close'; var r = $('ro'); return !!(r && r.checked); }
function curPx(side) {
  var m = M[U.sym]; if (!m) return null;
  if (U.ot === 'limit') { var v = num($('px').value); return v > 0 ? v : null; }
  if (U.ot === 'stop') { var lp = num($('px').value), tg = num($('trg').value); return lp > 0 ? lp : tg > 0 ? tg : null; }
  if (U.ot === 'trail') return (TPT === 'mark' ? m.mark : m.last) || null;
  return side === 1 ? (m.ask || m.last) : (m.bid || m.last);
}
function maxQty(side) {
  var id = U.sym, sp = SP[id], lev = levOf(id), m = M[id], px = curPx(side);
  if (!sp || !(px > 0) || !ME) return 0;
  if (closeMode()) return E.closable(st, id, side);
  var budget = Math.max(0, availNow()), q = budget / (px * (1 / lev + sp.taker));
  if (U.ot === 'market' && m.book) { var lv = side === 1 ? m.book.asks : m.book.bids; if (lv && lv.length) { for (var i = 0; i < 3; i++) { px = E.walk(lv, Math.max(q, sp.step), side, sp.tick) || px; q = budget / (px * (1 / lev + sp.taker)); } q *= 0.997; } }
  var pos = E.samePos(st, id, side), opp = hedgeOn() ? null : E.oppPos(st, id, side), back = opp ? opp.qty : 0;
  var used = (pos ? pos.qty : 0) + E.sameSideResting(st, id, side);
  return E.roundQty(sp, Math.min(q, Math.max(0, E.maxNotional(sp, lev) / px - used) * 0.999) + back);
}
function setLiq(id, v) { var e = $(id); e.textContent = v; e.style.color = /\d/.test(v) ? '' : 'var(--pt3)'; }
function renderEst() {
  var id = U.sym; if (!SP[id]) return;
  var lev = levOf(id), qty = num($('qty').value), u = ' ' + BS(id), cm = closeMode();
  $('maxl').textContent = ME ? fq(id, maxQty(1)) + u : '—';
  $('maxs').textContent = ME ? fq(id, maxQty(-1)) + u : '—';
  var pxL = curPx(1), pxS = curPx(-1);
  if (!(qty > 0) || !pxL) { $('costl').textContent = $('costs').textContent = 'Cost —'; setLiq('liql', '—'); setLiq('liqs', '—'); return; }
  $('costl').textContent = 'Cost ' + fu(E.openPart(st, id, 1, qty, cm) * pxL / lev);
  $('costs').textContent = 'Cost ' + fu(E.openPart(st, id, -1, qty, cm) * pxS / lev);
  setLiq('liql', estLiq(1, qty, pxL, lev)); setLiq('liqs', estLiq(-1, qty, pxS, lev));
}
/* 예상 청산가: 지금 계좌를 복사해 이 주문이 체결됐다고 치고 엔진으로 계산 (격리 · 교차 · 양방향 모두 같은 방법) */
function estLiq(side, qty, px, lev) {
  var id = U.sym;
  if (closeMode()) return 'Reduce only';
  var c; try { c = JSON.parse(JSON.stringify(st)); } catch (e) { return '—'; }
  c.fills = []; c.ev = [];
  E.applyFill(c, SP, id, side, qty, px, SP[id].taker, lev, null, Date.now(), { mm: mmOf(id) });
  if (!E.samePos(c, id, side)) return 'Reduce only';
  var lp = E.liqOf(c, SP, E.pkey(c, id, side), marks());
  return lp ? fp(id, lp) : '없음';
}
function levBtn() { var id = U.sym; if (!SP[id] || !$('levtx')) return; $('levtx').textContent = levOf(id) + 'x'; $('mmtx').textContent = mmOf(id) === 'cross' ? 'Cross' : 'Isolated'; formOpts(); }
/* 주문 칸 모양: 양방향이면 Open/Close, 주문 종류에 맞는 칸만, 단추 글자 */
function formOpts() {
  if (!$('ocs')) return;
  var h = hedgeOn(), ot = U.ot;
  $('ocs').hidden = !h;
  $$('[data-poc]').forEach(function (b) { b.classList.toggle('on', b.dataset.poc === U.oc); });
  $('rol').hidden = h || ot === 'trail';
  $('pol').hidden = ot !== 'limit';
  var cm = closeMode(), noTp = cm || ot === 'trail';
  $('tpl').hidden = noTp;
  $('tprow').hidden = noTp || !$('tpon').checked;
  $('buy').querySelector('b').innerHTML = cm ? 'Close Short <small>(숏 닫기)</small>' : 'Open Long <small>(롱)</small>';
  $('sell').querySelector('b').innerHTML = cm ? 'Close Long <small>(롱 닫기)</small>' : 'Open Short <small>(숏)</small>';
  $('actb').textContent = $('trgb').textContent = tptName();
  $('trpt').innerHTML = '기준 가격 <b>' + tptName() + '</b> · ⚙ 설정에서 바꿀 수 있어요';
}
function setSym(id) {
  if (!SP[id]) return;
  var same = id === U.sym;
  U.sym = id; saveUI();
  $('qtyu').textContent = BS(id);
  if (!same) { $('qty').value = ''; $('px').value = ''; $('trg').value = ''; $('act').value = ''; $('tp').value = ''; $('sl').value = ''; $('slider').value = 0; hideErr(); if (U.ot === 'limit' && M[id] && M[id].last) $('px').value = M[id].last.toFixed(SP[id].pp); }
  syncSubs();
  if (CHART) loadChart();
  levBtn();
  dirty.quote = dirty.book = dirty.est = true; kick();
}
function setTf(tf) { if (tf === U.tf || TFS.indexOf(tf) < 0) return; U.tf = tf; saveUI(); $$('[data-ptf]').forEach(function (b) { b.classList.toggle('on', b.dataset.ptf === tf); b.setAttribute('aria-selected', b.dataset.ptf === tf); }); syncSubs(); loadChart(); countdown(); drawChips(); }
function setOt(ot) {
  if (OTS.indexOf(ot) < 0) ot = 'market';
  var prev = U.ot; U.ot = ot; saveUI();
  $$('[data-pot]').forEach(function (b) { b.classList.toggle('on', b.dataset.pot === ot); });
  $('pxrow').hidden = ot !== 'limit' && ot !== 'stop';
  $('trgrow').hidden = ot !== 'stop';
  $('trrow').hidden = ot !== 'trail';
  $('pxl').textContent = (ot === 'stop' ? 'Limit' : 'Price') + ' (' + Q + ')';
  $('px').placeholder = ot === 'stop' ? 'Market' : '0';
  if (ot === 'stop' && prev !== 'stop') $('px').value = '';
  if (ot === 'limit' && !$('px').value && M[U.sym] && M[U.sym].last) $('px').value = M[U.sym].last.toFixed(SP[U.sym].pp);
  formOpts();
  dirty.est = true; kick();
}
/* 밀대: 0~100% → 매수 최대 수량 기준 */
function onSlider(v) {
  if (needLogin()) { $('slider').value = 0; return; }
  var id = U.sym, mq = Math.max(maxQty(1), maxQty(-1));
  var q = E.roundQty(SP[id], mq * v / 100);
  $('qty').value = q > 0 ? q.toFixed(SP[id].vp) : '';
  hideErr(); dirty.est = true; kick();
}
function stepPx(d) {
  var id = U.sym, sp = SP[id], v = num($('px').value);
  if (!(v > 0)) v = M[id] && M[id].last || 0;
  $('px').value = Math.max(sp.tick, E.roundPx(sp, v + d * sp.tick)).toFixed(sp.pp);
  dirty.est = true; kick();
}
/* 종목 고르기 시트 */
var PK = false, PKQ = '';
function pickerSheet() {
  PK = true; PKQ = '';
  openSheet('Symbols', '<div class="pp-pk"><input id="pp-pkq" placeholder="Search (BTC, NVDA, 금…)" autocomplete="off"><div class="pp-pkc" id="pp-pkc"></div><div id="pp-pkl"></div></div>');
  renderPicker();
}
var PKC = 'all', PKCS = [['all', '전체'], ['crypto', '크립토'], ['stock', '주식'], ['index', '지수'], ['cmd', '원자재'], ['fx', '외환']];
function catGrp(k) { var c = (SP[k] && SP[k].cat) || 'crypto'; return c === 'metal' || c === 'energy' ? 'cmd' : c; }
function renderPicker() {
  var l = $('pkl'); if (!l) { PK = false; return; }
  var q = PKQ.trim().toUpperCase(), have = {};
  IDS.forEach(function (k) { have[catGrp(k)] = 1; });
  var cb = $('pkc'); if (cb) cb.innerHTML = PKCS.filter(function (x) { return x[0] === 'all' || have[x[0]]; }).map(function (x) { return '<button type="button" data-pkc="' + x[0] + '" class="' + (PKC === x[0] ? 'on' : '') + '">' + x[1] + '</button>'; }).join('');
  l.innerHTML = IDS.filter(function (k) { return (PKC === 'all' || catGrp(k) === PKC) && (!q || NM(k).toUpperCase().indexOf(q) >= 0 || (SP[k].ko || '').indexOf(PKQ.trim()) >= 0); }).map(function (k) {
    var m = M[k] || {};
    return '<button type="button" data-psym="' + k + '" class="' + (k === U.sym ? 'on' : '') + '"><b>' + NMH(k) + '<small>' + esc(SP[k].ko || '') + '</small>' + (mktState(k) === 'closed' ? '<em class="pp-mc">장 마감</em>' : '') + (ME && exposed(k) ? '<i></i>' : '') + '</b>' +
      '<span class="v">' + (m.last ? fp(k, m.last) : '—') + '</span><span class="c ' + cls(m.chg || 0) + '">' + (m.chg != null ? pct(m.chg) : '') + '</span></button>';
  }).join('') || '<p class="hint" style="padding:12px 0">찾는 종목이 없어요.</p>';
}
/* ── 주문 (서버가 체결) ── */
function showErr(t) { var e = $('err'); e.hidden = false; e.textContent = t; }
function hideErr() { var e = $('err'); if (e) e.hidden = true; }
function optNum(id) { var v = $(id).value.trim(); if (!v) return null; var x = num(v); return x > 0 ? x : NaN; }
function setBusy(b) { busy = b; $('buy').disabled = $('sell').disabled = b; }
function needLogin() { if (ME) return false; authSheet(TOK ? 'login' : 'signup'); return true; }
function submit(side) {
  hideErr();
  if (needLogin() || busy) return;
  var id = U.sym, sp = SP[id], ot = U.ot, ro = closeMode();
  var qty = E.roundQty(sp, num($('qty').value));
  if (!(qty >= sp.min - 1e-12)) return showErr(E.errText({ err: 'min', min: sp.min }, BS(id), Q));
  var px = null, trig = null, cb = null, act = null;
  if (ot === 'limit') { px = E.roundPx(sp, num($('px').value)); if (!(px > 0)) return showErr(E.errText({ err: 'px' })); }
  if (ot === 'stop') {
    trig = E.roundPx(sp, num($('trg').value)); if (!(trig > 0)) return showErr(E.errText({ err: 'trig_num' }));
    if ($('px').value.trim()) { px = E.roundPx(sp, num($('px').value)); if (!(px > 0)) return showErr(E.errText({ err: 'px' })); }
  }
  if (ot === 'trail') {
    var cbp = num($('cb').value); if (!(cbp >= 0.1 && cbp <= 10)) return showErr(E.errText({ err: 'cb' }));
    cb = Math.round(cbp * 10) / 1000;
    if ($('act').value.trim()) { act = num($('act').value); if (!(act > 0)) return showErr(E.errText({ err: 'act_num' })); }
  }
  var tp = null, sl = null;
  if (!ro && ot !== 'trail' && $('tpon').checked) { tp = optNum('tp'); sl = optNum('sl'); if ((tp !== null && isNaN(tp)) || (sl !== null && isNaN(sl))) return showErr(E.errText({ err: 'tpsl_num' })); }
  setBusy(true);
  api('/p/order', { sym: id, side: side, type: ot, qty: qty, px: px, lev: levOf(id), tp: tp, sl: sl, ro: ro, po: ot === 'limit' && $('po').checked, trig: trig, cb: cb, act: act, pt: (ot === 'trail' || ot === 'stop') && TPT === 'mark' ? 'mark' : null }).then(function (x) {
    setBusy(false);
    if (x.j.acct) applyServer(x.j);
    toastEvents(x.j.ev);
    if (x.s !== 200 || !x.j.ok) { showErr(errMsg(x)); changed(); return; }
    var r = x.j.res || {}, f = FILLS[0], red = f && f.kind !== 'open' && f.ts >= Date.now() - 10000 && r.filled > 0, msg;
    var sd = ro ? (side === 1 ? 'Close Short' : 'Close Long') : (side === 1 ? 'Long' : 'Short');
    if (r.trail) msg = NM(id) + ' Trailing ' + sd + ' placed · ' + fq(id, r.rested) + ' · ' + fmt(cb * 100, 1) + '% · ' + tptName() + ' 기준';
    else if (r.stop) msg = NM(id) + ' Trigger ' + sd + ' placed · ' + fq(id, r.rested) + ' @ ' + fp(id, r.px) + ' · ' + tptName() + ' 기준';
    else if (r.filled > 0 && !r.rested) msg = NM(id) + ' ' + sd + ' filled · ' + fq(id, r.filled) + ' @ ' + fp(id, r.px);
    else if (r.filled > 0) msg = NM(id) + ' Limit · filled ' + fq(id, r.filled) + ' · open ' + fq(id, r.rested);
    else msg = NM(id) + ' Limit ' + sd + ' placed · ' + fq(id, r.rested) + ' @ ' + fp(id, r.px);
    toast(msg + (red ? ' · PnL ' + sg(f.pnl - f.fee) : ''), red && f.pnl - f.fee < 0);
    beep(red ? 'close' : r.filled > 0 ? 'fill' : 'place');
    $('slider').value = 0;
    if (U.tab !== 'pos' && U.tab !== 'ord') U.tab = r.rested && !r.filled ? 'ord' : 'pos';
    changed();
  });
}

function posAct(path, k, btn, done) {
  if (busy) return;
  var p = st.pos[k]; if (!p && path !== '/p/closeall') return;
  setBusy(true); if (btn) btn.disabled = true;
  api(path, p ? { sym: p.sym, key: k } : {}).then(function (x) {
    setBusy(false);
    if (x.j.acct) applyServer(x.j);
    toastEvents(x.j.ev);
    if (x.s !== 200 || !x.j.ok) { toast(errMsg(x), true); if (btn) btn.disabled = false; changed(); return; }
    if (x.j.res) done(x.j.res, p);
    changed();
  });
}
function closePos(k, btn) { posAct('/p/close', k, btn, function (r, p) { toast(NM(p.sym) + ' Closed · ' + fp(p.sym, r.px) + ' · PnL ' + sg(r.net), r.net < 0); beep('close'); }); }
function reversePos(k, btn) { posAct('/p/reverse', k, btn, function (r, p) { toast(NM(p.sym) + ' Reversed → ' + (p.side === 1 ? 'Short' : 'Long') + ' · ' + fp(p.sym, r.px) + ' · PnL ' + sg(r.net), r.net < 0); beep('fill'); }); }
function closeAllPos(btn) { posAct('/p/closeall', null, btn, function (r) { toast('Close All · ' + r.n + '개 닫음' + (r.left ? ' · ' + r.left + '개는 호가가 없어 남김' : '') + ' · PnL ' + sg(r.net), r.net < 0); beep('close'); }); }
function cancelOrd(oid, btn) {
  if (btn) btn.disabled = true;
  api('/p/cancel', { id: oid }).then(function (x) {
    if (x.j.acct) applyServer(x.j);
    toastEvents(x.j.ev);
    if (x.s !== 200 || !x.j.ok) toast(errMsg(x), true); else toast('Order cancelled');
    changed();
  });
}
function cancelAll(btn) {
  if (btn) btn.disabled = true;
  api('/p/cancelall', {}).then(function (x) {
    if (x.j.acct) applyServer(x.j);
    if (x.s !== 200 || !x.j.ok) toast(errMsg(x), true); else toast('All orders cancelled');
    changed();
  });
}
/* 두 번 눌러야 실행 (닫기 · 뒤집기 · 전부 닫기) */
function armed(c, word) {
  if (c.classList.contains('arm')) return true;
  c.classList.add('arm'); c.textContent = 'Tap again to ' + word;
  clearTimeout(armT); armT = setTimeout(function () { c.classList.remove('arm'); c.textContent = c.dataset.lb || word; }, 3000);
  return false;
}

/* ── 시트 ── */
var SH = null;
function openSheet(title, html) {
  if (!SH) {
    SH = document.createElement('div'); SH.className = 'pp-sh'; SH.id = 'pp-sheet'; SH.hidden = true;
    SH.setAttribute('role', 'dialog'); SH.setAttribute('aria-modal', 'true');
    SH.innerHTML = '<div class="bd" data-pclose></div><div class="pn"><div class="gr"></div><div class="hd"><b id="pp-shT"></b><button type="button" class="x" data-pclose aria-label="닫기">✕</button></div><div id="pp-shB" style="display:grid;gap:10px"></div></div>';
    document.body.appendChild(SH);
    SH.addEventListener('click', onClick);
    SH.addEventListener('input', function (e) { if (e.target.id === 'pp-levr') levHint(+e.target.value); else if (e.target.id === 'pp-pkq') { PKQ = e.target.value; renderPicker(); } });
    SH.addEventListener('submit', function (e) { if (e.target.id === 'pp-authf') { e.preventDefault(); doAuth(e.target); } });
  }
  $('shT').textContent = title; $('shB').innerHTML = html; SH.hidden = false;
  var f = $('shB').querySelector('input'); if (f) setTimeout(function () { try { f.focus(); } catch (e) {} }, 30);
}
function closeSheet() { PK = false; if (SH) { SH.hidden = true; $('shB').innerHTML = ''; } }
function levSheet() {
  var id = U.sym, sp = SP[id]; if (!sp) return;
  if (E.keysOf(st, id).length) { toast('포지션이 열려 있으면 레버리지를 바꿀 수 없어요. 포지션을 닫은 뒤 바꿔 주세요.'); return; }
  var cur = levOf(id);
  var quick = [1, 5, 10, 20, 50, 100, sp.max].filter(function (x, i, a) { return x <= sp.max && a.indexOf(x) === i; });
  openSheet(id + ' Leverage', '<div class="pp-lv"><button type="button" data-pd="-1" aria-label="1 낮추기">−</button><output id="pp-levo">' + cur + 'x</output><button type="button" data-pd="1" aria-label="1 올리기">+</button></div>' +
    '<input type="range" id="pp-levr" class="pp-lvr" min="1" max="' + sp.max + '" step="1" value="' + cur + '" aria-label="레버리지">' +
    '<div class="pp-lvq">' + quick.map(function (x) { return '<button type="button" data-plv="' + x + '">' + x + 'x</button>'; }).join('') + '</div>' +
    '<p class="hint" id="pp-levh"></p><p class="hint" style="color:#E8A317">레버리지가 높을수록 청산가가 진입가에 가까워져요.</p>' +
    '<button type="button" class="pp-b" id="pp-levok">Confirm</button>');
  levHint(cur);
}
function levHint(v) {
  var id = U.sym, sp = SP[id], cap = E.maxNotional(sp, v), t = E.tierOf(sp, 1), can = Math.min(cap, st.bal * v / (1 + v * sp.taker));
  $('levo').textContent = v + 'x';
  $('levh').textContent = (ME ? v + 'x면 지금 가용 잔고로 최대 약 ' + fu(can) + ' ' + Q + '어치까지 열 수 있어요. ' : '') + '이 레버리지로 열 수 있는 최대 포지션은 ' + fu(cap) + ' ' + Q + ', 첫 단계 유지증거금률은 ' + fmt(t.mmr * 100, 2) + '%예요.';
}
function saveLev(v) {
  var id = U.sym;
  U.lev[id] = v; saveUI();
  if (ME) { ME.acct.lev = ME.acct.lev || {}; ME.acct.lev[id] = v; api('/p/lev', { sym: id, lev: v }).then(function (x) { if (x.s !== 200) toast(errMsg(x), true); }); }
  closeSheet(); levBtn(); dirty.est = true; kick(); toast(id + ' Leverage ' + v + 'x');
}
function mmSheet() {
  var id = U.sym; if (!SP[id]) return;
  var cur = mmOf(id), lock = !!(ME && exposed(id));
  function opt(v, t, d) { return '<button type="button" data-pmm="' + v + '" class="' + (cur === v ? 'on' : '') + '"' + (lock ? ' disabled' : '') + '><b>' + t + '</b><span>' + d + '</span></button>'; }
  openSheet(NM(id) + ' Margin Mode', '<div class="pp-mmo">' +
    opt('isolated', 'Isolated · 격리', '포지션마다 증거금을 따로 떼어 둬요. 청산되면 그 포지션의 증거금만 잃고 나머지 잔고는 지켜져요. (기본)') +
    opt('cross', 'Cross · 교차', '가용 잔고 전체가 증거금이에요. 청산가가 멀어지지만, 닿으면 교차로 연 포지션이 모두 함께 청산되고 잔고가 0이 돼요.') + '</div>' +
    '<p class="hint">' + (lock ? '이 종목에 포지션이나 주문이 있으면 바꿀 수 없어요.' : '종목마다 따로 정하고 계좌에 저장돼요.') + '</p>');
}
function saveMM(v) {
  if (needLogin()) return;
  var id = U.sym;
  api('/p/lev', { sym: id, mm: v }).then(function (x) {
    if (x.s !== 200 || !x.j.ok) { toast(errMsg(x), true); return; }
    ME.acct.mm = ME.acct.mm || {}; if (v === 'cross') ME.acct.mm[id] = 'cross'; else delete ME.acct.mm[id];
    closeSheet(); levBtn(); dirty.est = true; kick(); toast(NM(id) + ' ' + (v === 'cross' ? 'Cross · 교차' : 'Isolated · 격리'));
  });
}
function setPmode(v) {
  if (needLogin() || v === st.mode) return;
  api('/p/pmode', { mode: v }).then(function (x) {
    if (x.s !== 200 || !x.j.ok) { toast(errMsg(x), true); return; }
    applyServer(x.j); U.oc = 'open';
    Array.prototype.forEach.call(document.querySelectorAll('[data-ppm]'), function (b) { b.classList.toggle('on', b.dataset.ppm === st.mode); });
    toast(st.mode === 'hedge' ? 'Hedge mode · 양방향' : 'One-way mode · 단방향'); changed(true);
  });
}
function tpslSheet(k) {
  var p = st.pos[k]; if (!p) return;
  var id = p.sym, lp = E.liqOf(st, SP, k, marks());
  openSheet(chip(id) + ' ' + (p.side === 1 ? 'Long' : 'Short') + ' TP/SL',
    '<label class="pp-fld"><span>TP price</span><input id="pp-stp" inputmode="decimal" value="' + (p.tp != null ? p.tp.toFixed(SP[id].pp) : '') + '" placeholder="None"></label>' +
    '<label class="pp-fld"><span>SL price</span><input id="pp-ssl" inputmode="decimal" value="' + (p.sl != null ? p.sl.toFixed(SP[id].pp) : '') + '" placeholder="None"></label>' +
    '<p class="hint">Entry ' + fp(id, p.entry) + ' · Mark ' + fp(id, M[id].mark) + ' · Liq. ' + (lp ? fp(id, lp) : '—') + '</p><p id="pp-sterr" class="pp-err" hidden></p>' +
    '<div class="pp-row2"><button type="button" class="pp-b gh" id="pp-stclr" data-key="' + esc(k) + '">Clear</button><button type="button" class="pp-b" id="pp-stok" data-key="' + esc(k) + '">Confirm</button></div>');
}
function saveTpsl(k, clear) {
  var e = $('sterr'), p = st.pos[k]; if (!p) { closeSheet(); return; }
  var tp = clear ? null : ($('stp').value.trim() ? num($('stp').value) : null);
  var sl = clear ? null : ($('ssl').value.trim() ? num($('ssl').value) : null);
  if ((tp !== null && !(tp > 0)) || (sl !== null && !(sl > 0))) { e.hidden = false; e.textContent = '숫자로 넣어 주세요.'; return; }
  $('stok').disabled = true;
  api('/p/tpsl', { sym: p.sym, key: k, tp: tp, sl: sl }).then(function (x) {
    if (x.j.acct) applyServer(x.j);
    toastEvents(x.j.ev);
    if (x.s !== 200 || !x.j.ok) { var b = $('stok'); if (b) { b.disabled = false; e.hidden = false; e.textContent = errMsg(x); } else toast(errMsg(x), true); changed(); return; }
    closeSheet(); toast(clear ? 'TP/SL cleared' : 'TP/SL saved'); changed();
  });
}
/* 문의 창구: @아이디 → 인스타그램 · 주소 → 그 주소 · 메일 → 메일 쓰기 (관리 화면 설정에서 넣는다) */
function contactHref() {
  var c = String(INFO.contact || '').trim(); if (!c) return '';
  if (/^https?:\/\/\S+$/i.test(c)) return c;
  if (/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(c)) return 'mailto:' + c;
  var h = c.replace(/^@/, ''); return /^[A-Za-z0-9._]{1,30}$/.test(h) ? 'https://instagram.com/' + h : '';
}
function contactLine() {
  var c = String(INFO.contact || '').trim();
  if (!c) return '운영자 인스타그램 DM';
  return /^@?[A-Za-z0-9._]{1,30}$/.test(c) ? '운영자 인스타그램 <b>' + esc(c) + '</b> DM' : '운영자 문의 창구(<b>' + esc(c) + '</b>)';
}
function contactBox() {
  var h = contactHref();
  return '<div class="pp-box"><b>문의하기</b>' + (h ? '<a class="pp-ct" href="' + esc(h) + '" target="_blank" rel="noopener">' + esc(INFO.contact) + ' 로 문의</a>' : '') +
    '<p class="hint">초대코드 · 비밀번호 분실 · 오류 제보는 ' + contactLine() + '으로 보내 주세요.</p></div>';
}
function authSheet(mode) {
  if (window.A99Auth) { window.A99Auth.open(mode === 'signup' ? 'signup' : 'login'); return; }   /* 앱 공용 로그인 칸 하나로 */
  var su = mode === 'signup';
  openSheet(su ? '초대코드로 시작' : '로그인',
    '<form id="pp-authf" data-mode="' + mode + '" novalidate>' +
    (su ? '<label class="pp-fld l"><span>초대코드</span><input id="pp-acode" autocomplete="off" autocapitalize="characters" maxlength="16" placeholder="8자리"></label>' : '') +
    '<label class="pp-fld l"><span>닉네임</span><input id="pp-anick" autocomplete="username" maxlength="12" placeholder="2~12자"></label>' +
    '<label class="pp-fld l"><span>비밀번호</span><input id="pp-apw" type="password" autocomplete="' + (su ? 'new-password' : 'current-password') + '" maxlength="64" placeholder="' + (su ? '8자 이상' : '') + '"></label>' +
    (su ? '<label class="pp-fld l"><span>한 번 더</span><input id="pp-apw2" type="password" autocomplete="new-password" maxlength="64"></label>' : '') +
    (su ? '<label class="pp-agree"><input type="checkbox" id="pp-aagree"> <span><b>이용약관 · 운영방침(6개월 휴면 · 1년 미접속 자동 삭제 등)에 동의하고, 만 14세 이상이에요.</b> (필수) · <a href="terms.html" target="_blank" rel="noopener">이용약관</a> · <a href="privacy.html" target="_blank" rel="noopener">처리방침</a></span></label>' : '') +
    '<p id="pp-aerr" class="pp-err" role="alert" hidden></p>' +
    '<button type="submit" class="pp-b" id="pp-ago">' + (su ? '가입하고 시작' : '로그인') + '</button>' +
    '<button type="button" class="pp-b gh" data-pauth="' + (su ? 'login' : 'signup') + '">' + (su ? '이미 계정이 있어요 · 로그인' : '처음이에요 · 초대코드로 시작') + '</button>' +
    '<p class="hint">' + (su ? '닉네임은 한글·영문·숫자·밑줄(_) 2~12자예요. 초대코드는 ' + contactLine() + '으로 받을 수 있어요. 월간 순위 상위 5명은 포지션 · 거래 기록이 순위표에 공개돼요.' : '비밀번호를 잊었다면 ' + contactLine() + '으로 닉네임을 알려 주세요.') + '</p>' +
    (su && !INFO.signup ? '<p class="pp-err">지금은 새 가입을 받지 않아요.</p>' : '') + '</form>');
}
var AUTH_ERR = { agree: '약관이 새로 바뀌었어요. 화면을 새로 고친 뒤 다시 동의해 주세요.', code: '초대코드가 맞지 않거나 이미 다 쓰였어요.', nick_rule: '닉네임은 한글·영문·숫자·밑줄(_) 2~12자예요.', nick_block: '쓸 수 없는 단어가 들어 있어요.', nick_taken: '이미 있는 닉네임이에요.', pw_rule: '비밀번호는 8자 이상이에요.', closed: '지금은 새 가입을 받지 않아요.', login: '닉네임 또는 비밀번호가 맞지 않아요.', locked: '비밀번호를 5번 틀려 15분 동안 잠겼어요.', suspended: ERR.suspended, slow_down: ERR.slow_down, net: ERR.net };
function doAuth(form) {
  var su = form.dataset.mode === 'signup', e = $('aerr');
  var nick = $('anick').value.trim(), pw = $('apw').value;
  function bad(t) { e.hidden = false; e.textContent = t; }
  if (!/^[가-힣a-zA-Z0-9_]{2,12}$/.test(nick)) return bad(AUTH_ERR.nick_rule);
  if (su) { if (!$('acode').value.trim()) return bad('초대코드를 넣어 주세요.'); if (pw.length < 8) return bad(AUTH_ERR.pw_rule); if (pw !== $('apw2').value) return bad('비밀번호 두 칸이 달라요.'); if (!$('aagree').checked) return bad('이용약관에 동의하고 만 14세 이상인지 확인해 주세요.'); }
  else if (!pw) return bad('비밀번호를 넣어 주세요.');
  e.hidden = true; $('ago').disabled = true;
  api(su ? '/p/signup' : '/p/login', su ? { nick: nick, pw: pw, code: $('acode').value.trim(), agree: (window.A99Legal && window.A99Legal.ver) || 2 } : { nick: nick, pw: pw }).then(function (x) {
    var g = $('ago'); if (g) g.disabled = false;
    if (x.s === 200 && x.j.token) {
      TOK = x.j.token; lsSet(LS_TOK, TOK); closeSheet();
      loadMe().then(function () { if (ME) toast(ME.nick + ' 님, ' + (su ? '10,000 ' + Q + '로 시작해요.' : '어서 오세요.')); refreshRank(true); });
      return;
    }
    var t = AUTH_ERR[x.j.err] || ERR.server;
    if (x.j.err === 'login' && x.j.left != null && x.j.left < 5) t += ' (남은 시도 ' + x.j.left + '번)';
    bad(t);
  });
}
function canReset() {
  if (!ME) return { ok: false };
  if (ME.duel) return { ok: false, why: '대결 지갑은 초기화할 수 없어요. 모의투자 계좌로 바꾼 뒤 해 주세요.' };
  var eq = equity(), hasAny = anyExposed(), r = ME.rules || {}, pol = ME.policy || 'default';
  var mode = pol === 'block' ? 'block' : pol === 'free' ? 'free' : (pol === 'approve' || r.approval) ? 'approve' : 'auto', why = '';
  if (mode === 'block') why = '이 계정은 초기화가 막혀 있어요.';
  else if (hasAny) why = '열린 포지션·주문을 모두 정리해야 해요.';
  else if (eq >= (r.resetBelow || 5000)) why = '순자산이 ' + fu(r.resetBelow || 5000) + ' 아래일 때 할 수 있어요. 지금 ' + fu(eq) + '.';
  else if (mode !== 'free' && ME.acct.coupons < 1) why = '이번 달 쿠폰을 다 썼어요. ' + contactLine() + '으로 문의해 주세요.';
  return { ok: !why, why: why, mode: mode };
}
function meSheet() {
  if (!ME) return authSheet('login');
  var a = ME.acct, eq = equity(), base = retBase(), cr = canReset();
  var rs = cr.mode === 'approve' ? '운영자 승인 뒤 초기화돼요(쿠폰 1장 사용).' : cr.mode === 'free' ? '쿠폰 없이 바로 초기화돼요.' : '쿠폰 1장을 쓰고 바로 초기화돼요.';
  openSheet(ME.nick + ' 님',
    '<dl class="pp-kv"><dt>순자산</dt><dd>' + fu(eq) + '</dd><dt>이번 달 수익률</dt><dd class="' + cls(eq - base) + '">' + pct(base > 0 ? eq / base - 1 : 0) + '</dd>' +
    '<dt>거래 · 강제 청산(누적)</dt><dd>' + a.trades + ' · ' + a.liqs + '</dd><dt>초기화 쿠폰</dt><dd>' + a.coupons + '장</dd><dt>초기화한 횟수</dt><dd>' + a.resets + '번</dd></dl>' +
    (a.loan > 0 ? '<div class="pp-box"><b>빌린 연습금 ' + fu(a.loan) + '</b><p class="hint">순자산이 ' + fu(a.loanAt) + ' 이상이 되고 쓸 수 있는 현금이 ' + fu(a.loan) + ' 이상이면 자동으로 반납돼요. 순위(수익률 · 수익금)에는 영향이 없고, 초기화하면 정리돼요.</p></div>' : '') +
    '<div class="pp-box"><b>10,000 ' + Q + '로 다시 시작</b><p class="hint">' + (ME.pending ? '초기화 요청을 보냈어요. 운영자가 확인하면 바로 반영돼요.' : cr.ok ? rs : esc(cr.why)) + '</p>' +
    '<button type="button" class="pp-b" id="pp-rsgo"' + (cr.ok && !ME.pending ? '' : ' disabled') + '>' + (cr.mode === 'approve' ? '초기화 요청' : '초기화') + '</button></div>' +
    '<div class="pp-box"><b>비밀번호 바꾸기</b><label class="pp-fld l"><span>지금</span><input id="pp-pwold" type="password" autocomplete="current-password" maxlength="64"></label>' +
    '<label class="pp-fld l"><span>새 비밀번호</span><input id="pp-pwnew" type="password" autocomplete="new-password" maxlength="64" placeholder="8자 이상"></label><p id="pp-pwerr" class="pp-err" hidden></p>' +
    '<button type="button" class="pp-b gh" id="pp-pwgo">바꾸기</button></div>' +
    pubBox() +
    contactBox() +
    '<button type="button" class="pp-b gh" id="pp-out">로그아웃</button>');
}
function doReset(btn) {
  btn.disabled = true;
  api('/p/reset', {}).then(function (x) {
    if (x.s !== 200) { toast(errMsg(x), true); btn.disabled = false; return; }
    if (x.j.pending) { ME.pending = { ts: Date.now() }; closeSheet(); toast('초기화 요청을 보냈어요. 운영자가 확인하면 반영돼요.'); return; }
    applyServer(x.j); closeSheet(); banner(null);
    toast('10,000 ' + Q + '로 다시 시작해요. 남은 쿠폰 ' + ME.acct.coupons + '장');
    changed(true);
  });
}
function doPw() {
  var e = $('pwerr'), o = $('pwold').value, n = $('pwnew').value;
  if (n.length < 8) { e.hidden = false; e.textContent = AUTH_ERR.pw_rule; return; }
  $('pwgo').disabled = true;
  api('/p/pw', { old: o, pw: n }).then(function (x) {
    var b = $('pwgo'); if (b) b.disabled = false;
    if (x.s === 200 && x.j.token) { TOK = x.j.token; lsSet(LS_TOK, TOK); closeSheet(); toast('비밀번호를 바꿨어요. 다른 기기는 다시 로그인해야 해요.'); return; }
    if (e) { e.hidden = false; e.textContent = x.j.err === 'login' ? '지금 비밀번호가 맞지 않아요.' : AUTH_ERR[x.j.err] || ERR.server; }
  });
}
var lowShown = false;
function lowCheck() {
  if (!ME || lowShown || ME.duel) return;
  var cr = canReset();
  if (cr.ok && !ME.pending) { lowShown = true; banner('순자산이 ' + fu(ME.rules.resetBelow || 5000) + ' 아래예요. 10,000 ' + Q + '로 다시 시작할 수 있어요(쿠폰 ' + ME.acct.coupons + '장).', 'low', '다시 시작'); }
}


/* ── 용어 설명 (점선 밑줄을 누르거나 ? 단추로 전체) ── */
var GLOSS = [
  ['long', 'Long', '롱', '가격이 오르면 이익을 보는 포지션이에요. Open Long = 롱 진입.'],
  ['short', 'Short', '숏', '가격이 내리면 이익을 보는 포지션이에요. Open Short = 숏 진입.'],
  ['perp', 'Perp · Perpetual', '무기한 선물', '만기가 없는 선물이에요. 대신 펀딩비로 현물 가격 가까이 붙어 다녀요.'],
  ['iso', 'Isolated', '격리 마진', '포지션마다 증거금을 따로 떼어 둬요. 청산되면 그 포지션의 증거금만 잃고 나머지 잔고는 지켜져요. 처음 설정이에요.'],
  ['cross', 'Cross', '교차 마진', '가용 잔고 전체를 교차 포지션들이 함께 증거금으로 써요. 청산가는 멀어지지만, 닿으면 교차로 연 포지션이 모두 청산되고 잔고가 0이 돼요. 격리 포지션은 영향을 받지 않아요. 미실현 손실은 가용 잔고에서 빠지고, 이익은 닫기 전까지 쓸 수 없어요.'],
  ['pmode', 'One-way / Hedge', '단방향 / 양방향', '단방향은 종목마다 한 방향 포지션만 있어요(반대 주문은 줄이거나 뒤집어요). 양방향은 같은 종목에 롱과 숏을 따로 들 수 있고, Open(열기)과 Close(닫기)로 나눠 주문해요. 처음 설정은 단방향이에요.'],
  ['lev', 'Leverage', '레버리지', '증거금의 몇 배 규모로 거래할지예요. 높을수록 작은 움직임에도 청산가에 빨리 닿아요.'],
  ['limit', 'Limit', '지정가', '내가 정한 가격에 닿아야 체결돼요. 호가에 걸어 두면 수수료가 싼 메이커(0.02%)예요.'],
  ['market', 'Market', '시장가', '지금 호가로 바로 체결돼요. 수수료는 테이커(0.06%)이고, 수량이 크면 더 불리한 가격까지 먹어요.'],
  ['last', 'Last', '최근 체결가', '마지막으로 거래된 가격이에요. Last 단추를 누르면 가격 칸에 이 값이 들어가요.'],
  ['mark', 'Mark Price', '표시 가격', '청산과 미실현 손익을 계산하는 기준 가격이에요. 순간적인 꼬리에 덜 흔들리게 만든 값이에요.'],
  ['avbl', 'Avbl · Available', '가용 잔고', '새 주문에 쓸 수 있는 돈이에요. 포지션 증거금과 미체결 주문에 묶인 돈은 빠져 있어요.'],
  ['max', 'Max', '최대 진입 수량', '지금 가용 잔고와 레버리지로 열 수 있는 최대 수량이에요(수수료 포함, 레버리지 한도 반영).'],
  ['cost', 'Cost', '필요 증거금', '이 주문을 열 때 묶이는 증거금이에요. 수량 × 가격 ÷ 레버리지.'],
  ['trigger', 'Trigger', '조건부 주문', '최근 체결가가 Trigger 가격에 닿으면 그때 주문이 나가요. 가격 칸을 비우면 시장가, 넣으면 그 가격의 지정가로 걸려요. 닿기 전에는 증거금이 묶이지 않아서, 닿는 순간 잔고가 모자라면 취소돼요. 닿았는지 보는 가격은 ⚙에서 Last(최근 체결가 · 기본) 또는 Mark(표시 가격)로 고를 수 있어요.'],
  ['trail', 'Trailing Stop', '트레일링 스탑', '가격이 유리하게 움직이는 동안 최고가(숏은 최저가)를 따라가다가, 정한 비율(Callback 0.1~10%)만큼 되돌아오면 자동으로 시장가로 닫아요. 한 번 걸어 두면 따로 할 일이 없어요 — 앱을 닫아도 서버가 1분마다 확인하고, 앱이 열려 있으면 실시간 체결로도 확인해요. 시작 가격(Activation)을 넣으면 그 가격에 닿은 뒤부터 따라가요. 따라가는 기준 가격은 ⚙에서 Last(최근 체결가 · 기본) 또는 Mark(표시 가격)로 고를 수 있어요. 걸어 둔 주문은 고칠 수 없으니 바꾸려면 취소하고 다시 걸어요.'],
  ['post', 'Post-only', '메이커 전용', '호가에 걸리기만 하는 지정가예요. 바로 체결될 가격이면 주문을 받지 않아요. 체결되면 항상 메이커 수수료(0.02%)예요.'],
  ['rev', 'Reverse', '반대로 뒤집기', '지금 포지션을 시장가로 닫고 같은 수량 · 같은 레버리지로 반대 방향을 열어요. 열 증거금이 모자라면 아무것도 하지 않아요.'],
  ['tpsl', 'TP / SL', '익절 / 손절', 'TP(Take Profit)는 이익을 확정하는 가격, SL(Stop Loss)은 손실을 끊는 가격이에요. 닿으면 자동으로 포지션을 닫아요.'],
  ['liq', 'Est. Liq. Price', '예상 청산가', 'Mark 가격이 여기에 닿으면 강제 청산돼요. 격리는 그 포지션의 증거금을, 교차는 교차 잔고 전체를 잃어요. 교차 청산가는 다른 교차 포지션의 지금 손익에 따라 움직여요.'],
  ['mkt', 'Market Closed', '장 마감', '주식 · 지수 종목은 실제 증시가 닫힌 시간(주말 포함)에도 거래되지만 기준 가격이 거의 멈춰 있어요. 다음 개장 때 크게 움직일 수 있어요. 공휴일은 따로 표시하지 않아요.'],
  ['fund', 'Funding / Countdown', '펀딩비 / 남은 시간', '무기한 선물 가격을 현물에 붙여 두려고 롱·숏이 매시 정각(1시간마다) 주고받는 비용이에요. 양수면 롱이 숏에게 내요. 정각에 포지션을 들고 있을 때만 정산돼요.'],
  ['upnl', 'Unrealized PnL', '미실현 손익', '아직 닫지 않은 포지션의 가격 차이 손익이에요(Mark 가격 기준). 대형 거래소처럼 수수료는 넣지 않아요. 낸 수수료는 거래 기록에서 확인할 수 있어요.'],
  ['roe', 'ROE', '증거금 대비 수익률', '미실현 손익 ÷ 증거금. 레버리지가 높으면 같은 가격 변화에도 크게 움직여요.'],
  ['margin', 'Margin', '증거금', '포지션을 유지하려고 묶어 둔 돈이에요.'],
  ['mmr', 'MMR', '유지증거금률', '(유지증거금 + 닫는 수수료) ÷ (증거금 + 미실현 손익). 100%가 되면 강제 청산돼요. 교차(Cross MMR)는 교차 포지션 전체를 잔고까지 합쳐 한 번에 계산해요.'],
  ['entry', 'Entry Price', '평균 진입가', '여러 번 나눠 들어갔다면 그 평균 가격이에요.'],
  ['reduce', 'Reduce-only', '감소 전용', '포지션을 줄이거나 닫기만 하고 새로 열거나 뒤집지 않는 주문이에요. 포지션보다 많이 넣어도 포지션만큼만 체결되고, 줄일 포지션이 없어지면 자동으로 취소돼요. 증거금이 묶이지 않아요.'],
  ['oo', 'Open Orders', '미체결 주문', '걸어 두었지만 아직 체결되지 않은 주문이에요(지정가 · 조건부 · 트레일링). 지정가로 새로 여는 주문만 그만큼의 증거금이 묶여 있어요.'],
  ['equity', 'Equity', '순자산', '가용 잔고 + 증거금 + 미실현 손익 + 미체결 주문에 묶인 돈. 순위는 이 값으로 매겨요.'],
  ['liqd', 'Liquidated', '강제 청산', '유지증거금이 바닥나 거래소(여기서는 서버)가 포지션을 강제로 닫은 것이에요.'],
  ['bs', 'B / S ratio', '매수 · 매도 호가 비율', '호가창에 보이는 매수 잔량과 매도 잔량의 비율이에요.']
];
function gloss(k) { for (var i = 0; i < GLOSS.length; i++) if (GLOSS[i][0] === k) return GLOSS[i]; return null; }
function termSheet(k) {
  var g = gloss(k); if (!g) return;
  openSheet(g[1], '<p class="hint" style="font-size:14px;color:var(--tx)"><b>' + esc(g[2]) + '</b></p><p class="hint" style="font-size:13.5px;color:var(--tx2)">' + esc(g[3]) + '</p>' +
    '<button type="button" class="pp-b gh" id="pp-gall">용어 전체 보기</button>');
}
function guideSheet() {
  openSheet('설정 · 용어집',
    '<div class="pp-box"><b>상승 · 롱 색</b><div class="pp-cseg"><button type="button" data-pcol="g" class="' + (COL === 'g' ? 'on' : '') + '"><i style="background:#22C083"></i>Green Up</button><button type="button" data-pcol="r" class="' + (COL === 'r' ? 'on' : '') + '"><i style="background:#FF5B5B"></i>Red Up</button></div>' +
    '<p class="hint">Green Up = 세계 거래소 표준(초록 = 상승 · 롱). Red Up = 한국 증권 앱 방식(빨강 = 상승 · 롱). 이 기기에 저장돼요.</p></div>' +
    '<div class="pp-box"><b>체결음</b><div class="pp-cseg s4">' + [['tick', '틱'], ['mar', '마림바'], ['bell', '벨'], ['off', '끄기']].map(function (x) { return '<button type="button" data-psnd="' + x[0] + '" class="' + (SND === x[0] ? 'on' : '') + '">' + x[1] + '</button>'; }).join('') + '</div><p class="hint">누르면 미리 들려줘요. 체결 · 익절/손절 · 청산 때 울려요. 휴대폰이 무음(진동) 모드면 안 들릴 수 있어요.</p></div>' +
    (window.A99Duel && window.A99Duel.sndBox ? window.A99Duel.sndBox() : '') +
    '<div class="pp-box"><b>조건 주문 기준 가격 <small>Trigger · Trail</small></b><div class="pp-cseg">' + [['last', 'Last · 최근 체결가'], ['mark', 'Mark · 표시 가격']].map(function (x) { return '<button type="button" data-ptpt="' + x[0] + '" class="' + (TPT === x[0] ? 'on' : '') + '">' + x[1] + '</button>'; }).join('') + '</div>' +
    '<p class="hint">Last: 실제 체결가를 따라가요. 반응이 빠르지만 순간 꼬리에도 걸릴 수 있어요(기본). Mark: 청산 기준과 같은 표시 가격을 따라가요. 순간 꼬리에 덜 흔들려요. 조건부(Trigger)와 트레일링 둘 다에 쓰여요. 새로 거는 주문부터 적용되고, 이 기기에 저장돼요.</p></div>' +
    '<div class="pp-box"><b>포지션 모드</b><div class="pp-cseg">' + [['one', 'One-way · 단방향'], ['hedge', 'Hedge · 양방향']].map(function (x) { return '<button type="button" data-ppm="' + x[0] + '" class="' + (st.mode === x[0] ? 'on' : '') + '">' + x[1] + '</button>'; }).join('') + '</div>' +
    '<p class="hint">단방향: 종목마다 롱이나 숏 하나만 (반대 주문은 줄이거나 뒤집어요). 양방향: 같은 종목에 롱과 숏을 따로 들고 Open/Close로 나눠 주문해요. 포지션 · 주문이 모두 없을 때만 바꿀 수 있어요.</p></div>' +
    contactBox() +
    '<dl class="pp-gl">' + GLOSS.map(function (g) { return '<div><dt>' + esc(g[1]) + '<small>' + esc(g[2]) + '</small></dt><dd>' + esc(g[3]) + '</dd></div>'; }).join('') + '</dl>');
}
function setCol(c) {
  COL = c === 'r' ? 'r' : 'g'; lsSet('a99p.col', COL);
  theme(ACTIVE);
  CUP = cssv('--pup', CUP); CDN = cssv('--pdn', CDN);
  chartRecolor();
  $$('[data-pcol]').forEach(function (b) { b.classList.toggle('on', b.dataset.pcol === COL); });
  var sh = document.querySelectorAll('#pp-sheet [data-pcol]'); Array.prototype.forEach.call(sh, function (b) { b.classList.toggle('on', b.dataset.pcol === COL); });
  dirty.quote = dirty.book = true; kick();
}

/* ── 알림 (최대 2개 · 2.8초 뒤 사라짐) · 배너 ── */
var TB = null;
function toast(t, bad) {
  if (!TB) { TB = document.createElement('div'); TB.className = 'pp-toast'; TB.setAttribute('role', 'status'); TB.setAttribute('aria-live', 'polite'); document.body.appendChild(TB); }
  var d = document.createElement('div'); d.textContent = t; if (bad) d.className = 'bad';
  TB.appendChild(d);
  while (TB.children.length > 2) TB.removeChild(TB.firstChild);
  setTimeout(function () { d.classList.add('out'); }, 2600);
  setTimeout(function () { if (d.parentNode) d.parentNode.removeChild(d); }, 2850);
}
var BAN = '';
/* 2026.10.31-A 상태 배너: 더 급한 것이 떠 있으면 덮지 않고, 사용자가 닫은 것은 상황이 풀릴 때까지 다시 띄우지 않는다 */
var BPRI = { specs: 5, net: 4, feed: 3, cron: 2, low: 1, tip: 0 }, BANX = {};
function statusBanner(kind, t) {
  if (!t) { BANX[kind] = 0; if (BAN === kind) banner(null); return; }
  if (BANX[kind]) return;
  if (BAN && BAN !== kind && (BPRI[BAN] || 0) > (BPRI[kind] || 0)) return;
  var b = $('ban'); if (BAN === kind && b && !b.hidden && b.textContent.indexOf(t) === 0) return;
  banner(t, kind);
}
function banner(t, kind, go) {
  var b = $('ban'); if (!b) return;
  if (!t) { b.hidden = true; BAN = ''; return; }
  BAN = kind || '';
  b.innerHTML = '<p>' + esc(t) + '</p>' + (go ? '<button type="button" data-pban="go">' + esc(go) + '</button>' : '') + '<button type="button" class="x" data-pban="x" aria-label="닫기">✕</button>';
  b.hidden = false;
}

/* ── 누르기 ── */
var armT = 0;
function onClick(e) {
  var t = e.target, c;
  audioUnlock();
  if ((c = t.closest('[data-pbk]'))) { U.bk = (U.bk + 1) % BKS.length; saveUI(); if (M[U.sym]) M[U.sym].book = null; syncSubs(); dirty.book = true; kick(); return; }
  if ((c = t.closest('[data-psnd]'))) { SND = c.dataset.psnd; lsSet('a99p.snd', SND); Array.prototype.forEach.call(document.querySelectorAll('[data-psnd]'), function (b) { b.classList.toggle('on', b.dataset.psnd === SND); }); if (SND !== 'off') { audioUnlock(); setTimeout(function () { beep('fill', true); }, 60); } return; }
  if ((c = t.closest('[data-pkc]'))) { PKC = c.dataset.pkc; renderPicker(); return; }
  if ((c = t.closest('[data-pclose]'))) { closeSheet(); return; }
  if ((c = t.closest('[data-pterm]'))) { e.preventDefault(); termSheet(c.dataset.pterm); return; }
  if ((c = t.closest('[data-pcol]'))) { setCol(c.dataset.pcol); return; }
  if ((c = t.closest('[data-pchart]'))) { var a = c.dataset.pchart; if (a === 'close') closeChart(); else if (a === 'toggle') openChart(CHART === 'full' ? 'sheet' : 'full'); else openChart(a); return; }
  if ((c = t.closest('[data-pauth]'))) { authSheet(c.dataset.pauth); return; }
  if ((c = t.closest('[data-psym]'))) { setSym(c.dataset.psym); if (PK) { PK = false; closeSheet(); } return; }
  if ((c = t.closest('[data-ptf]'))) { setTf(c.dataset.ptf); return; }
  if ((c = t.closest('[data-pot]'))) { setOt(c.dataset.pot); return; }
  if ((c = t.closest('[data-pstep]'))) { stepPx(+c.dataset.pstep); return; }
  if ((c = t.closest('[data-ptab]'))) { U.tab = c.dataset.ptab; renderList(); return; }
  if ((c = t.closest('[data-pview]'))) { setView(c.dataset.pview); return; }
  if ((c = t.closest('.pp-ac .r'))) { setView('rank'); return; }      // Equity 줄의 Rank #N → 랭킹 화면
  if ((c = t.closest('[data-pmonth]'))) { U.month = c.dataset.pmonth === monthKST() ? null : c.dataset.pmonth; renderList(); refreshRank(); return; }
  if ((c = t.closest('[data-prk]'))) { U.rk = c.dataset.prk === 'w' ? 'w' : 'm'; renderList(); refreshRank(); return; }
  if ((c = t.closest('[data-pwk]'))) { U.wk = c.dataset.pwk === 'wp' ? 'wp' : 'w'; renderList(); refreshRank(); return; }
  if ((c = t.closest('[data-pnick]'))) { profileSheet(c.dataset.pnick); return; }
  if ((c = t.closest('[data-ppub]'))) { setPub(c.dataset.ppub === '1'); return; }
  if ((c = t.closest('[data-ppx]'))) { var bv = (+c.dataset.ppx).toFixed(SP[U.sym].pp); if (U.ot === 'stop') $('trg').value = bv; else { if (U.ot !== 'limit') setOt('limit'); $('px').value = bv; } dirty.est = true; kick(); return; }
  if ((c = t.closest('[data-poc]'))) { U.oc = c.dataset.poc === 'close' ? 'close' : 'open'; formOpts(); hideErr(); renderEst(); return; }
  if ((c = t.closest('[data-pmm]'))) { saveMM(c.dataset.pmm); return; }
  if ((c = t.closest('[data-ppm]'))) { setPmode(c.dataset.ppm); return; }
  if ((c = t.closest('[data-pcb]'))) { $('cb').value = c.dataset.pcb; $$('[data-pcb]').forEach(function (b) { b.classList.toggle('on', b === c); }); hideErr(); return; }
  if ((c = t.closest('[data-pfill]'))) { var lm = M[U.sym], fv = lm && (TPT === 'mark' ? lm.mark : lm.last); if (fv) { $(c.dataset.pfill).value = fv.toFixed(SP[U.sym].pp); dirty.est = true; kick(); } return; }
  if ((c = t.closest('[data-ptpt]'))) { TPT = c.dataset.ptpt === 'mark' ? 'mark' : 'last'; lsSet('a99p.tpt', TPT); Array.prototype.forEach.call(document.querySelectorAll('[data-ptpt]'), function (b) { b.classList.toggle('on', b.dataset.ptpt === TPT); }); formOpts(); dirty.est = true; kick(); toast('조건 주문 기준 가격 · ' + tptName()); return; }
  if ((c = t.closest('[data-pban]'))) { if (c.dataset.pban === 'go' && BAN === 'low') meSheet(); else if (c.dataset.pban === 'go' && BAN === 'tip') guideSheet(); if (c.dataset.pban === 'x' && BAN) BANX[BAN] = 1; banner(null); return; }
  if ((c = t.closest('[data-pact]'))) {
    var act = c.dataset.pact, key = c.dataset.key;
    if (act === 'close') { if (armed(c, 'close')) closePos(key, c); }
    else if (act === 'rev') { if (armed(c, 'reverse')) reversePos(key, c); }
    else if (act === 'closeall') { if (armed(c, 'close all')) closeAllPos(c); }
    else if (act === 'tpsl') tpslSheet(key);
    else if (act === 'cancel') cancelOrd(c.dataset.id, c);
    else if (act === 'cancelall') cancelAll(c);
    return;
  }
  if ((c = t.closest('[data-plv]'))) { $('levr').value = c.dataset.plv; levHint(+c.dataset.plv); return; }
  if ((c = t.closest('[data-pd]'))) { var r = $('levr'); r.value = Math.min(+r.max, Math.max(1, +r.value + +c.dataset.pd)); levHint(+r.value); return; }
  var bt = t.closest('button') || t, id = bt.id;
  if (id === 'pp-buy') return submit(1);
  if (id === 'pp-sell') return submit(-1);
  if (id === 'pp-lev') return levSheet();
  if (id === 'pp-mmb') return mmSheet();
  if (id === 'pp-hsym') return pickerSheet();
  if (id === 'pp-guide' || id === 'pp-gall') return guideSheet();
  if (id === 'pp-bbo') { var m = M[U.sym]; if (m && m.last) { $('px').value = m.last.toFixed(SP[U.sym].pp); dirty.est = true; kick(); } return; }
  if (id === 'pp-me' || id === 'pp-acb') return meSheet();
  if (id === 'pp-levok') return saveLev(+$('levr').value);
  if (id === 'pp-stok') return saveTpsl(bt.dataset.key, false);
  if (id === 'pp-stclr') return saveTpsl(bt.dataset.key, true);
  if (id === 'pp-rsgo') return doReset(bt);
  if (id === 'pp-pwgo') return doPw();
  if (id === 'pp-out') { closeSheet(); logout(false); toast('로그아웃했어요'); return; }
}

/* ── 탭 뼈대 ── */
var CHEV = '<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3h8L5 8z"/></svg>';
function skeleton() {
  return '<div class="pp-vw" role="tablist" aria-label="트레이딩 화면"><button type="button" data-pview="trade" class="on" aria-selected="true">모의투자</button><button type="button" data-pview="duel" aria-selected="false">1:1 대결<b class="dl-live" id="pp-dlive"></b></button><button type="button" data-pview="rank" aria-selected="false">랭킹</button><button type="button" data-pview="prof" aria-selected="false">프로필</button></div><div id="pp-dlv" class="pp-dlv" hidden></div><div id="pp-pfv" class="pp-dlv" hidden></div>' +
    '<div id="pp-rkv" class="pp-rkv" hidden><div id="pp-rkb"></div></div><div id="pp-trade">' +
    '<div class="pp-hd"><button type="button" class="pp-pick" id="pp-hsym" aria-label="종목 바꾸기"><b><span id="pp-hname">BTC<span class="pp-q">' + Q + '</span></span><small>Perp</small>' + CHEV + '</b><span class="l2"><span id="pp-hchg">—</span><em class="pp-mc" id="pp-hmk" hidden>장 마감</em></span></button><span class="sp"></span>' +
    '<button type="button" class="pp-ib" data-pchart="full" aria-label="차트 크게 보기"><svg viewBox="0 0 24 24"><path d="M8 3v3M8 16v5M16 3v5M16 17v4"/><rect x="5.5" y="6" width="5" height="10" rx="1"/><rect x="13.5" y="8" width="5" height="9" rx="1"/></svg></button>' +
    '<button type="button" class="pp-ib" id="pp-guide" aria-label="설정 · 용어집"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg></button>' +
    '<button type="button" class="pp-me cta" id="pp-me">Log In</button></div>' +
    '<div id="pp-ban" class="pp-ban" hidden></div>' +
    '<div id="pp-acct"></div>' +
    '<div class="pp-tr"><form class="pp-of" id="pp-of" novalidate>' +
      '<div class="pp-ot"><button type="button" id="pp-mmb" aria-label="증거금 방식 바꾸기"><b id="pp-mmtx">Isolated</b></button><button type="button" id="pp-lev" aria-label="레버리지 바꾸기"><b id="pp-levtx">10x</b></button></div>' +
      '<div class="pp-seg" id="pp-ocs" role="tablist" aria-label="열기 · 닫기" hidden><button type="button" data-poc="open">Open</button><button type="button" data-poc="close">Close</button></div>' +
      '<div class="pp-seg s4" role="tablist" aria-label="주문 방식"><button type="button" data-pot="limit">Limit</button><button type="button" data-pot="market">Market</button><button type="button" data-pot="stop">Trigger</button><button type="button" data-pot="trail">Trail</button></div>' +
      '<div class="pp-fld" id="pp-trgrow" hidden><div class="k"><span><span class="pp-t" data-pterm="trigger">Trigger</span> (' + Q + ')</span><input id="pp-trg" inputmode="decimal" autocomplete="off" placeholder="0"></div><button type="button" class="bb" id="pp-trgb" data-pfill="trg">Last</button></div>' +
      '<div class="pp-fld" id="pp-pxrow" hidden><div class="k"><span id="pp-pxl">Price (' + Q + ')</span><input id="pp-px" inputmode="decimal" autocomplete="off" placeholder="0"></div>' +
        '<button type="button" class="st" data-pstep="-1" aria-label="한 칸 내리기">−</button><button type="button" class="st" data-pstep="1" aria-label="한 칸 올리기">+</button><button type="button" class="bb" id="pp-bbo">Last</button></div>' +
      '<div class="pp-fld"><div class="k"><span>Size</span><input id="pp-qty" inputmode="decimal" autocomplete="off" placeholder="0"></div><em id="pp-qtyu">—</em></div>' +
      '<div class="pp-sl"><input type="range" id="pp-slider" min="0" max="100" step="1" value="0" list="pp-slt" aria-label="사용 가능 금액 비율"><datalist id="pp-slt"><option value="0"></option><option value="25"></option><option value="50"></option><option value="75"></option><option value="100"></option></datalist>' +
        '<div class="tk"><span>0</span><span>25</span><span>50</span><span>75</span><span>100%</span></div></div>' +
      '<div id="pp-trrow" class="pp-tpr" hidden><div class="pp-fld"><div class="k"><span><span class="pp-t" data-pterm="trail">Callback</span></span><input id="pp-cb" inputmode="decimal" autocomplete="off" value="1"></div><em>%</em></div>' +
        '<div class="pp-cbq">' + ['0.5', '1', '2', '5'].map(function (v) { return '<button type="button" data-pcb="' + v + '"' + (v === '1' ? ' class="on"' : '') + '>' + v + '%</button>'; }).join('') + '</div>' +
        '<div class="pp-fld"><div class="k"><span>Activation (' + Q + ')</span><input id="pp-act" inputmode="decimal" autocomplete="off" placeholder="비우면 바로 시작"></div><button type="button" class="bb" id="pp-actb" data-pfill="act">Last</button></div>' +
        '<p class="pp-trpt" id="pp-trpt"></p></div>' +
      '<div class="pp-opts"><label class="pp-chk" id="pp-tpl"><input type="checkbox" id="pp-tpon">TP/SL</label><label class="pp-chk" id="pp-rol"><input type="checkbox" id="pp-ro"><span class="pp-t" data-pterm="reduce">Reduce-only</span></label><label class="pp-chk" id="pp-pol" hidden><input type="checkbox" id="pp-po"><span class="pp-t" data-pterm="post">Post-only</span></label></div>' +
      '<div id="pp-tprow" class="pp-tpr" hidden><div class="pp-fld"><div class="k"><span>TP trigger</span><input id="pp-tp" inputmode="decimal" autocomplete="off" placeholder="Optional"></div></div><div class="pp-fld"><div class="k"><span>SL trigger</span><input id="pp-sl" inputmode="decimal" autocomplete="off" placeholder="Optional"></div></div></div>' +
      '<div class="pp-kv2"><span class="pp-t" data-pterm="avbl">Avbl</span><b id="pp-avail">—</b></div>' +
      '<div class="pp-kv2"><span class="pp-t" data-pterm="max">Max</span><b id="pp-maxl">—</b></div>' +
      '<button type="button" class="pp-ob buy" id="pp-buy"><b>Open Long <small>(롱)</small></b><span id="pp-costl">Cost —</span></button>' +
      '<div class="pp-liq"><span class="pp-t" data-pterm="liq">Est. Liq. Price</span> <b id="pp-liql">—</b></div>' +
      '<div class="pp-kv2"><span class="pp-t" data-pterm="max">Max</span><b id="pp-maxs">—</b></div>' +
      '<button type="button" class="pp-ob sell" id="pp-sell"><b>Open Short <small>(숏)</small></b><span id="pp-costs">Cost —</span></button>' +
      '<div class="pp-liq"><span class="pp-t" data-pterm="liq">Est. Liq. Price</span> <b id="pp-liqs">—</b></div>' +
      '<p id="pp-err" class="pp-err" role="alert" hidden></p>' +
    '</form><aside class="pp-bk" aria-label="호가"><div class="fd"><span class="pp-t" data-pterm="fund">Funding / Countdown</span><br><b id="pp-fund">—</b> · <b id="pp-fundt">—</b></div>' +
      '<div class="hd"><span>Price</span><button type="button" class="pp-bkt" id="pp-bkt" data-pbk="1" aria-label="호가 묶음 단위 바꾸기">—</button><span>Size</span></div><div class="a" id="pp-asks"></div>' +
      '<div class="mid"><b id="pp-blast">—</b><span><span class="pp-t" data-pterm="mark">Mark</span> <span id="pp-bmark">—</span></span></div><div class="b" id="pp-bids"></div>' +
      '<div class="ratio" id="pp-ratio"></div></aside></div>' +
    '<div class="pp-tabs" role="tablist"><button type="button" data-ptab="pos">Positions<span id="pp-cpos"></span></button><button type="button" data-ptab="ord">Open Orders<span id="pp-cord"></span></button><button type="button" data-ptab="fills">Trade History</button></div>' +
    '<div class="pp-list" id="pp-list"></div>' +
    '<div class="pp-foot"><p>모의투자 · 가상 자금이에요. 실제 거래·수익과 무관한 연습용 시뮬레이션입니다.</p>' +
    '<p>순자산이 5,000 아래로 내려가고 열린 포지션·주문이 없으면 쿠폰으로 10,000에서 다시 시작할 수 있어요(쿠폰은 매달 새로 받아요).</p>' +
    '<p>체결은 서버가 거래소 공개 호가로 계산해요. 앱을 닫아 둔 동안의 청산·TP/SL·지정가·조건부·트레일링·펀딩은 서버가 1분마다 확인해요. 청산은 Mark 가격 기준이에요.</p>' +
    '<p>시세: Hyperliquid 공개 자료(실시간 달러 시세) · ' + Q + ' 표기는 모의투자용 가상 단위 · 금(XAU)은 PAXG 시세 · 계약 규칙: 안드레99 모의투자 규칙 · 실제 거래가 아니에요 · ' + VER + '</p></div>' +
    '<button type="button" class="pp-cbar" id="pp-cbar" data-pchart="sheet"><span id="pp-cbtx" style="color:var(--pt1);font-family:var(--pf);font-weight:700;font-size:13.5px">Chart</span><span id="pp-cbpx"></span><svg viewBox="0 0 24 24"><path d="M6 15l6-6 6 6"/></svg></button></div>';
}
function bindInputs() {
  ['qty', 'px', 'trg', 'cb', 'act'].forEach(function (k) { $(k).addEventListener('input', function () { hideErr(); dirty.est = true; kick(); }); });
  $('cb').addEventListener('input', function () { var v = this.value; $$('[data-pcb]').forEach(function (b) { b.classList.toggle('on', b.dataset.pcb === v); }); });
  $('ro').addEventListener('change', function () { formOpts(); renderEst(); });
  $('qty').addEventListener('input', function () { $('slider').value = 0; });
  $('slider').addEventListener('input', function () { onSlider(+this.value); });
  $('tpon').addEventListener('change', function () { $('tprow').hidden = !this.checked; });
  $('of').addEventListener('submit', function (e) { e.preventDefault(); });
}
function loadSpecs() {
  return getJSON(API + '/p/specs', 8000).then(function (j) {
    if (!j || !j.list || !j.list.length) throw new Error('empty');
    setSpecs(j); if (!SP[U.sym]) U.sym = IDS[0];
    if (BAN === 'specs') banner(null);
    return true;
  }, function () {
    banner('모의투자 서버에 연결하지 못했어요. 10초 뒤 다시 시도해요.', 'specs');
    return new Promise(function (res) { setTimeout(function () { res(loadSpecs()); }, 10000); });
  });
}
function mount(host) {
  if (MOUNTED) return;
  if (!document.getElementById('pp-css')) { var s = document.createElement('style'); s.id = 'pp-css'; s.textContent = CSS; document.head.appendChild(s); }
  R = document.createElement('div'); R.className = 'pp'; R.id = 'pp-root';
  R.innerHTML = skeleton();
  host.innerHTML = ''; host.appendChild(R);
  R.addEventListener('click', onClick);
  bindInputs();
  MOUNTED = true;
  renderAcct(); renderList();
  loadSpecs().then(function () {
    $('qtyu').textContent = BS(U.sym);
    setOt(U.ot); setSym(U.sym);
    changed(true);
    if (!lsGet('a99p.tip1') && !BAN) { lsSet('a99p.tip1', 1); banner('점선 밑줄 용어를 누르면 한국어 설명이 나와요. 전체 용어집 · 색 · 체결음 설정은 오른쪽 위 톱니바퀴(⚙)에 있어요.', 'tip', '용어집'); }
    loadMe();
    loadBoard(monthKST()).then(function () { dirty.acct = true; kick(); if (U.view === 'rank') renderList(); });
  });
  setInterval(function () { if (ACTIVE) { dirty.acct = dirty.book = true; kick(); } if (CHART) countdown(); }, 1000);
  setInterval(fbTick, 3000);                       /* 2026.10.31-A 실시간이 끊겼을 때의 대체 시세 */
  setInterval(function () { if (ME && !document.hidden && (ACTIVE || anyExposed())) loadMe(true); }, 60000);
  setInterval(function () { if (ACTIVE && !document.hidden) refreshRank(true); }, 5 * 60000);
  document.addEventListener('keydown', function (e) { if (e.key !== 'Escape') return; if (SH && !SH.hidden) closeSheet(); else if (CHART) closeChart(); });
  var hideAt = 0;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { hideAt = Date.now(); return; }
    if (hideAt && Date.now() - hideAt > 20000 && ME) loadMe(true);
    if (!ws && needWS()) { backoff = 1000; connect(); }
    hideAt = 0;
  });
}
var lastShow = 0;
var TC = null, COL = lsGet('a99p.col') === 'r' ? 'r' : 'g';
function theme(on) {
  document.documentElement.classList.toggle('pp-theme', on);
  document.documentElement.classList.toggle('pp-cr', on && COL === 'r');
  var m = document.querySelector('meta[name="theme-color"]');
  if (m) { if (on) { if (TC == null) TC = m.getAttribute('content'); m.setAttribute('content', '#000000'); } else if (TC != null) m.setAttribute('content', TC); }
}
function syncTok() {   /* 2026.10.26-C 앱 오른쪽 위에서 로그인 · 로그아웃했으면 따라간다 */
  var t = lsGet(LS_TOK);
  if (t === TOK) return;
  if (!t) { if (TOK) logout(); return; }
  TOK = t; ME = null; st = E.newState(0); FILLS = []; lastFillTs = 0;
  changed(true); loadMe();
}
function show() {
  syncTok();
  ACTIVE = true; theme(true);
  syncSubs();
  dirty.quote = dirty.book = dirty.acct = dirty.est = true; kick();
  if (ME && Date.now() - lastShow > 20000) loadMe(true);
  lastShow = Date.now();
}
function hide() { ACTIVE = false; theme(false); if (CHART) closeChart(); if (PK || (SH && !SH.hidden)) closeSheet(); syncSubs(); }

window.A99Paper = { mount: mount, show: show, hide: hide, ver: VER, openChart: openChart, sync: syncTok,
  _st: function () { return st; }, _ME: function () { return ME; }, _M: M, _U: U,
  /* 2026.11.09-B 1:1 트레이딩 대결 */
  _api: api, _me: function () { return ME; }, _acctDuel: function () { return ME ? ME.duel || null : null; }, _marks: function () { return marks(); },
  _switch: function () { lastFillTs = 0; FILLS = []; return loadMe(true).then(function () { changed(true); }); }, _setView: setView, _view: function () { return U.view; },
  _profileHTML: function (j) { return profileHTML(j); }, _pos: function () { return st.pos; }, _meSheet: function () { meSheet(); }, _toast: toast, _equity: function () { return equity(); }, _sym: function () { return U.sym; }, _sp: function () { return SP; }, _chart: function () { return !!CHART; } };
})();
/* ══ 2026.11.09-B 1:1 트레이딩 대결 (화면) ══ */
(function () { if (document.getElementById('dl-css')) return; var s = document.createElement('style'); s.id = 'dl-css'; s.textContent = ":root{--dla:#F5C542;--dla-rgb:245,197,66;--dlb:#8FD3FF;--dlo:#8FA3C0;--dlink:#16130A;--dlbg:#19140A}\nhtml.dlp-neon{--dla:#FF3D8B;--dla-rgb:255,61,139;--dlb:#00E5FF;--dlo:#00E5FF;--dlink:#1A0610;--dlbg:#1C0A13}\nhtml.dlp-purple{--dla:#B07CFF;--dla-rgb:176,124,255;--dlb:#C6FF3D;--dlo:#C6FF3D;--dlink:#12081F;--dlbg:#150D22}\nhtml.dlp-rb{--dla:#FF4655;--dla-rgb:255,70,85;--dlb:#3DA5FF;--dlo:#3DA5FF;--dlink:#FFFFFF;--dlbg:#1E0B0E}\nhtml.dlp-white{--dla:#E8E8EA;--dla-rgb:232,232,234;--dlb:#F5C542;--dlo:#6B6B70;--dlink:#0B0B0C;--dlbg:#141416}\n/* 대결 체험판 — 모의투자 테마 변수(--up --dn --s1…)를 그대로 쓴다. 노랑 = 대결(경기장) 강조 */\n.dl-live{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:800;color:var(--dla)}\n.dl-live i{width:7px;height:7px;border-radius:50%;background:var(--dla);box-shadow:0 0 0 4px rgba(var(--dla-rgb),.18);animation:dlbl 1.4s infinite}\n@keyframes dlbl{50%{opacity:.35}}\n.pp-vw .dl-live{display:none}\n.pp-vw b.dl-live,#pp-dlive{display:inline-block;margin-left:5px;font-size:10.5px;font-weight:800;color:var(--dlink);background:var(--dla);border-radius:7px;padding:1px 6px;vertical-align:3px;letter-spacing:0}\n#pp-dlive:empty{display:none}\n.pp-dlv{padding-bottom:calc(150px + env(safe-area-inset-bottom,0px))}\n.dl-tier{display:inline-block;font-size:10.5px;font-weight:800;border-radius:5px;padding:1px 6px;white-space:nowrap;vertical-align:1px}\n.dl-tier.t0{background:#2A2A30;color:#E8E8EA}.dl-tier.t1{background:#4A1820;color:#FF9BA3}.dl-tier.t2{background:#14304D;color:#8FD3FF}.dl-tier.t3{background:#1E3A22;color:#8BE29A}.dl-tier.t4{background:#3B2F5C;color:#C9B8FF}.dl-tier.t5{background:#4A3A10;color:#F5C542}\n.dl-num{font-family:var(--mono,ui-monospace,monospace);font-variant-numeric:tabular-nums;color:var(--dla);font-weight:800}\n.dl-board{border-radius:16px;padding:12px;background:linear-gradient(180deg,var(--dlbg),#0C0C0E);border:1.5px solid var(--dla);transition:border-color .2s}\n.dl-board.hot{animation:dlhot 1s infinite}\n@keyframes dlhot{0%,100%{border-color:var(--dla);box-shadow:none}50%{border-color:#FF4D4F;box-shadow:0 0 0 3px rgba(255,77,79,.25)}}\n.dl-bt{font-size:12.5px;font-weight:800;color:var(--dla);text-align:center}\n.dl-bt b{color:#FF6B6D}\n.dl-vs{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);gap:4px;align-items:center;text-align:center;margin-top:6px}\n.dl-vs > i{font-style:normal;font-size:15px;font-weight:900;color:var(--dla)}\n.dl-vs .nm{display:block;font-size:14px;font-weight:800;margin-top:3px;color:var(--tx,#FAFAFA);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dl-vs .rt{display:block;font-size:24px;font-weight:800;font-family:var(--mono,ui-monospace,monospace);font-variant-numeric:tabular-nums;letter-spacing:-.02em}\n.dl-vs small{display:block;font-size:11px;color:var(--tx3,#63636B);font-family:var(--mono,ui-monospace,monospace)}\n.dl-lead{margin:6px 0 0;text-align:center;font-size:12.5px;font-weight:800}\n.dl-eq{width:100%;height:64px;display:block;margin-top:6px}\n.dl-tbar,.dl-pbar{margin-top:8px;height:6px;border-radius:3px;background:var(--s3,#212125);overflow:hidden}\n.dl-tbar i{display:block;height:100%;background:var(--dla)}\n.dl-pbar{background:var(--dlo)}.dl-pbar i{display:block;height:100%;background:var(--dla)}\n.dl-meta{display:flex;justify-content:space-between;gap:8px;margin-top:7px;font-size:12px;color:var(--tx2,#9A9AA2)}\n.dl-tiny{margin:6px 0 0;font-size:11px;color:var(--tx3,#63636B);line-height:1.55}\n.dl-pick{display:flex;gap:6px;align-items:center;margin-top:8px;font-size:12.5px;color:var(--tx2,#9A9AA2)}\n.dl-pick span{flex:1;min-width:0}\n.dl-pick button{min-height:38px;padding:0 12px;border-radius:10px;border:1px solid var(--line,#1C1C20);background:var(--s2,#17171A);color:var(--tx,#FAFAFA);font-size:13px;font-weight:800}\n.dl-pick button[aria-pressed=true]{border-color:var(--dla);color:var(--dla);background:rgba(var(--dla-rgb),.1)}\n.dl-lbl{margin:16px 0 6px;font-size:12px;font-weight:800;color:var(--tx3,#63636B)}\n.dl-card{margin-top:12px;background:var(--s1,#0E0E10);border:1px solid var(--line,#1C1C20);border-radius:14px;padding:13px}\n.dl-card.pad0{padding:2px 12px}\n.dl-row{display:flex;justify-content:space-between;align-items:center;gap:8px}\n.dl-h{font-size:16px;font-weight:800;color:var(--tx,#FAFAFA)}\n.dl-info{min-height:34px;padding:0 10px;border-radius:9px;border:1px solid rgba(143,211,255,.45);background:transparent;color:var(--dlb);font-size:12.5px;font-weight:800}\n.dl-p{margin:6px 0 0;font-size:13px;line-height:1.6;color:var(--tx2,#9A9AA2)}\n.dl-p b{color:var(--tx,#FAFAFA)}\n.dl-sub{margin:14px 0 6px;font-size:12px;font-weight:800;color:var(--tx3,#63636B)}\n.dl-opts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}\n.dl-opts button{min-height:58px;border-radius:12px;border:1.5px solid var(--line,#1C1C20);background:var(--s2,#17171A);color:var(--tx,#FAFAFA);font-size:12.5px;font-weight:800;line-height:1.3;padding:6px 4px}\n.dl-opts button small{display:block;font-size:10.5px;font-weight:600;color:var(--tx3,#63636B);margin-top:2px}\n.dl-opts button[aria-pressed=true]{border-color:var(--dla);color:var(--dla);background:rgba(var(--dla-rgb),.08)}\n.dl-chips{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}\n.dl-chips button{min-height:44px;border-radius:10px;border:1px solid var(--line,#1C1C20);background:var(--s2,#17171A);color:var(--tx,#FAFAFA);font-size:14px;font-weight:800;font-family:var(--mono,ui-monospace,monospace);line-height:1.15}\n.dl-chips button small{display:block;font-size:10px;font-family:inherit;color:var(--tx3,#63636B)}\n.dl-chips button[aria-pressed=true]{border-color:var(--dla);color:var(--dla);background:rgba(var(--dla-rgb),.08)}\n.dl-chips button[disabled]{opacity:.38}\n.dl-note{margin:8px 0 0;font-size:12px;line-height:1.6;color:var(--tx2,#9A9AA2)}\n.dl-note b{color:var(--tx,#FAFAFA)}\n.dl-k{font-size:12.5px;font-weight:700;color:var(--tx2,#9A9AA2)}\n.dl-in{flex:1;min-width:0;min-height:40px;border-radius:10px;border:1px solid var(--line,#1C1C20);background:var(--s2,#17171A);color:var(--tx,#FAFAFA);padding:0 10px;font-size:14px;font-family:inherit}\n.dl-cta{display:block;width:100%;min-height:50px;margin-top:12px;border:0;border-radius:13px;background:var(--dla);color:var(--dlink);font-size:15px;font-weight:900}\n.dl-cta[disabled]{opacity:.4}\n.dl-ghost{display:block;width:100%;min-height:44px;margin-top:8px;border-radius:12px;border:1px solid var(--line,#1C1C20);background:transparent;color:var(--tx2,#9A9AA2);font-size:13.5px;font-weight:800}\n.dl-ghost.gold{color:var(--dla);border-color:rgba(var(--dla-rgb),.5)}\n.dl-two{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.dl-two .dl-ghost{margin-top:8px}\n.dl-match{margin-top:12px;padding:14px;border-radius:14px;border:1px dashed var(--dla);text-align:center;color:var(--tx,#FAFAFA);font-size:14px}\n.dl-spin{display:inline-block;width:16px;height:16px;border:2px solid var(--s3,#212125);border-top-color:var(--dla);border-radius:50%;animation:dlsp .8s linear infinite;vertical-align:-3px;margin-right:6px}\n@keyframes dlsp{to{transform:rotate(360deg)}}\n.dl-lr{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);gap:6px;align-items:center;padding:10px 0;border-bottom:1px solid var(--line,#1C1C20);font-size:12.5px;color:var(--tx,#FAFAFA)}\n.dl-lr:last-child{border-bottom:0}\n.dl-lr b{font-family:var(--mono,ui-monospace,monospace)}\n.dl-lr .c{font-size:10.5px;color:var(--tx3,#63636B);text-align:center;line-height:1.35}.dl-lr .r{text-align:right}\n.dl-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;margin-top:10px}\n.dl-stats div{background:var(--s2,#17171A);border-radius:10px;padding:8px;text-align:center;font-size:11px;color:var(--tx3,#63636B)}\n.dl-stats b{display:block;font-size:15.5px;color:var(--tx,#FAFAFA);margin-top:2px;font-family:var(--mono,ui-monospace,monospace)}\n.dl-bdgs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}\n.dl-bdg{border-radius:10px;padding:8px 4px;text-align:center;background:var(--s2,#17171A);border:1px solid var(--line,#1C1C20);font-size:12px;font-weight:800;color:var(--tx3,#63636B);opacity:.55}\n.dl-bdg small{display:block;font-size:10px;font-weight:600;margin-top:2px;line-height:1.35}\n.dl-bdg.on{opacity:1;color:var(--dla);border-color:rgba(var(--dla-rgb),.55)}\n.dl-ln{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--line,#1C1C20);font-size:12.5px;color:var(--tx,#FAFAFA)}\n.dl-ln:last-child{border-bottom:0}\n.dl-ln b{font-family:var(--mono,ui-monospace,monospace)}\n.dl-ladder .dl-ln{display:grid;grid-template-columns:auto minmax(0,1fr) auto}\n.dl-ladder .dl-ln .dl-tiny{margin:0}\n.dl-ladder .dl-ln.me{background:rgba(var(--dla-rgb),.08);border-radius:8px;padding:8px 6px}\n.dl-muted{color:var(--tx3,#63636B)}\n.dl-tag{display:inline-block;font-size:11px;font-weight:800;border-radius:5px;padding:0 6px;margin-right:5px}\n.dl-tag.u{background:rgba(34,192,131,.14);color:var(--up,#22C083)}.dl-tag.d{background:rgba(240,71,90,.14);color:var(--dn,#F0475A)}\n.dl-res{margin-top:4px;border-radius:16px;padding:16px;text-align:center}\n.dl-res.win{background:linear-gradient(180deg,rgba(var(--dla-rgb),.16),var(--s1,#0E0E10));border:1.5px solid var(--dla)}\n.dl-res.lose{background:var(--s1,#0E0E10);border:1px solid var(--line,#1C1C20)}\n.dl-res h3{margin:4px 0 0;font-size:21px;font-weight:900;color:var(--tx,#FAFAFA)}\n.dl-pp{font-size:27px;font-weight:800;margin-top:4px;font-family:var(--mono,ui-monospace,monospace)}\n.dl-newb{margin-top:8px;padding:10px 12px;border-radius:12px;background:rgba(var(--dla-rgb),.08);border:1px solid rgba(var(--dla-rgb),.45);font-size:13px;font-weight:800;color:var(--dla)}\n.dl-newb span{font-weight:600;color:var(--tx2,#9A9AA2)}\n.dl-why{margin-top:8px;padding:10px 12px;border-radius:12px;background:rgba(143,211,255,.06);border:1px solid rgba(143,211,255,.35);font-size:13px;line-height:1.6;color:#D7EEFF}\n.dl-why b{color:var(--dlb)}\n.dl-share{margin-top:12px;border-radius:16px;padding:15px;background:linear-gradient(160deg,var(--dlbg),#111113 60%,#0E1520);border:1px solid rgba(var(--dla-rgb),.4);color:var(--tx,#FAFAFA)}\n.dl-share .k{font-size:10.5px;letter-spacing:.12em;color:var(--dla);font-weight:800}\n.dl-share h4{margin:6px 0 8px;font-size:18px;font-weight:900;font-family:var(--mono,ui-monospace,monospace)}\n.dl-share .f{margin-top:10px;padding-top:8px;border-top:1px solid rgba(255,255,255,.08);display:flex;justify-content:space-between;font-size:10.5px;color:var(--tx3,#63636B)}\n.dl-spect{margin-bottom:10px;padding:10px 12px;border-radius:12px;border:1px dashed var(--dlb);font-size:12.5px;line-height:1.6;color:var(--dlb)}\n.dl-foot{margin:14px 0 0;font-size:11px;color:var(--tx3,#63636B);text-align:center;line-height:1.6}\n/* 거래 화면 */\n.dl-acc{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:6px 0}\n.dl-acc button{min-height:38px;border-radius:10px;border:1px solid var(--line,#1C1C20);background:transparent;color:var(--tx3,#63636B);font-size:12.5px;font-weight:800;font-family:var(--mono,ui-monospace,monospace);padding:0 4px}\n.dl-acc button[aria-pressed=true]{border-color:var(--dla);color:var(--dla);background:rgba(var(--dla-rgb),.08)}\n.dl-strip{display:flex;width:100%;justify-content:space-between;align-items:center;gap:6px;min-height:40px;margin:4px 0 6px;padding:0 11px;border-radius:11px;border:1.5px solid var(--dla);background:var(--dlbg);color:var(--tx,#FAFAFA);font-size:13px;font-weight:800;text-align:left}\n.dl-strip > span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dl-strip b{font-family:var(--mono,ui-monospace,monospace)}\n.dl-strip em{font-style:normal;color:var(--tx3,#63636B);font-weight:600}\n.dl-strip.hot{animation:dlhot2 1s infinite}\n@keyframes dlhot2{0%,100%{border-color:var(--dla);background:var(--dlbg)}50%{border-color:#FF4D4F;background:#2A0E10}}\n.dl-drop{margin-bottom:8px}\n#dl-st-ord .dl-strip{font-size:12px;padding:0 8px;min-height:38px}\n#dl-st-ord .dl-strip > span:first-child{white-space:normal;line-height:1.25}\n.dl-guard{margin:4px 0;font-size:11.5px;font-weight:800;color:var(--dla);text-align:center}\n.dl-guard.warn{color:#FF8A3D;text-align:left;line-height:1.4}\n.dl-float{position:fixed;left:0;right:0;bottom:calc(118px + env(safe-area-inset-bottom,0px));z-index:60;padding-left:max(12px,env(safe-area-inset-left,0px));padding-right:max(12px,env(safe-area-inset-right,0px));pointer-events:none}\n.dl-float > *{pointer-events:auto;max-width:440px;margin-left:auto;margin-right:auto}\n.dl-float .dl-strip{box-shadow:0 8px 24px rgba(0,0,0,.6);margin:0}\n.dl-float .dl-drop{margin:0 auto 6px;max-height:60vh;overflow:auto}\n.dl-float.open{display:flex;flex-direction:column-reverse}\n/* 팝업 */\n.dl-pop{position:fixed;inset:0;z-index:90;background:rgba(0,0,0,.66);display:flex;align-items:flex-end;justify-content:center;padding:16px max(12px,env(safe-area-inset-right,0px)) calc(16px + env(safe-area-inset-bottom,0px)) max(12px,env(safe-area-inset-left,0px))}\n.dl-popc{width:100%;max-width:440px;max-height:86vh;overflow:auto;background:#121214;border:1px solid #2A2A2F;border-radius:18px;padding:16px;color:#FAFAFA}\n.dl-popc ol{margin:10px 0 0;padding-left:20px;font-size:13.5px;line-height:1.65;color:#C9C9CE}\n.dl-popc li{margin-bottom:5px}.dl-popc li b{color:#FAFAFA}\n.dl-chk{display:flex;align-items:center;gap:8px;margin-top:10px;font-size:13px;color:#9A9AA2}\n/* 체험판 설정 */\n.dl-devb{writing-mode:vertical-rl;min-height:56px;width:20px;padding:6px 0;border-radius:0 9px 9px 0;border:1px solid var(--dlb);border-left:0;background:#0B1A24;color:var(--dlb);font-size:11px;font-weight:800;letter-spacing:.1em;box-shadow:0 4px 14px rgba(0,0,0,.5)}\n.dl-devm{position:fixed;left:calc(26px + env(safe-area-inset-left,0px));top:calc(64px + env(safe-area-inset-top,0px));max-height:calc(100vh - 150px);overflow:auto;width:min(290px,calc(100vw - 24px));background:#0F1418;border:1px solid #2B4656;border-radius:14px;padding:10px;box-shadow:0 12px 30px rgba(0,0,0,.6);color:#D7EEFF;font-size:12.5px}\n.dl-devm button{display:block;width:100%;text-align:left;min-height:44px;margin-top:6px;border-radius:10px;border:1px solid #23323C;background:#121A20;color:#E8F4FB;font-size:13px;font-weight:800;padding:6px 10px}\n.dl-devm button small{display:block;font-size:11px;font-weight:600;color:#8AA3B3}\n.dl-devm button[aria-pressed=true]{border-color:var(--dlb);background:#13293A}\n/* 마켓 탭 빅매치 한 줄 */\n.dl-bigline{display:flex;width:calc(100% - 32px);margin-left:16px !important;margin-right:16px !important;align-items:center;gap:8px;min-height:44px;margin:8px 0;padding:0 12px;border-radius:12px;border:1.5px solid var(--dla);background:var(--dlbg);color:#FAFAFA;font-size:12.5px;font-weight:800;text-align:left;font-family:inherit}\n.dl-bigline .k{color:var(--dla);white-space:nowrap}\n.dl-bigline .v{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dl-bigline .t{font-family:ui-monospace,monospace;color:var(--dla);white-space:nowrap}\n@media (prefers-reduced-motion:reduce){.dl-board.hot,.dl-strip.hot,.dl-live i,.dl-spin{animation:none}.dl-board.hot,.dl-strip.hot{border-color:#FF4D4F}}\n\n\nhtml.dl-duelw .pp-ac .r{visibility:hidden}\n/* v2: 매칭 수락 · VS 화면 · 프로필 · 승급 */\n.dl-pop.center{align-items:center}\n.dl-acc2{text-align:center}\n.dl-ring{position:relative;width:96px;height:96px;margin:4px auto 10px}\n.dl-ring svg{width:100%;height:100%;transform:rotate(-90deg)}\n.dl-ring circle{fill:none;stroke-width:7}.dl-ring .bg{stroke:#26262B}.dl-ring .fg{stroke:var(--dla);stroke-linecap:round;transition:stroke-dashoffset 1s linear}\n.dl-ring b{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:900;color:var(--dla);font-family:ui-monospace,monospace}\n.dl-wl{display:inline-flex;gap:3px;margin-top:6px}\n.dl-wl i{font-style:normal;width:20px;height:20px;border-radius:5px;font-size:10.5px;font-weight:800;display:inline-flex;align-items:center;justify-content:center}\n.dl-wl i.w,.dl-r10 i.w{background:rgba(var(--dla-rgb),.18);color:var(--dla)}\n.dl-wl i.l,.dl-r10 i.l{background:#1E2430;color:var(--dlo)}\n.dl-vsx{position:fixed;inset:0;z-index:95;display:flex;align-items:center;justify-content:center;background-color:#09090A;background-image:radial-gradient(circle at 50% 40%,rgba(var(--dla-rgb),.16) 0,rgba(9,9,10,0) 60%);padding:16px max(16px,env(safe-area-inset-right,0px)) 16px max(16px,env(safe-area-inset-left,0px));animation:dlfade .25s ease-out}\n@keyframes dlfade{from{opacity:0}}\n.dl-vs-in{width:100%;max-width:440px;color:#FAFAFA}\n.dl-vs-top{text-align:center;font-size:12.5px;font-weight:800;color:var(--dla);margin:0 0 14px}\n.dl-vs-row{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:center;gap:6px}\n.dl-vs-s{text-align:center;display:flex;flex-direction:column;align-items:center;gap:4px;min-width:0}\n.dl-vs-a{animation:dlinl .45s ease-out}.dl-vs-b{animation:dlinr .45s ease-out}\n@keyframes dlinl{from{transform:translateX(-40px);opacity:0}}@keyframes dlinr{from{transform:translateX(40px);opacity:0}}\n.dl-vs-n{font-size:17px;font-weight:900;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dl-vs-rec{margin:0;font-size:13px;color:#C9C9CE;font-weight:700}\n.dl-vs-s small{font-size:11px;color:#8A8A92;line-height:1.4}\n.dl-vs-x{font-size:26px;font-weight:900;color:var(--dla)}\n.dl-vs-cd{text-align:center;font-size:34px;font-weight:900;color:var(--dla);margin:18px 0 0;font-family:ui-monospace,monospace}\n.dl-emb{width:64px;height:72px;display:flex;align-items:center;justify-content:center;clip-path:polygon(50% 0,100% 22%,100% 78%,50% 100%,0 78%,0 22%);font-size:12px;font-weight:900;text-align:center;line-height:1.15;padding:0 6px;word-break:keep-all}\n.dl-emb.t0{background:linear-gradient(160deg,#5A5A62,#2A2A30);color:#F0F0F2}.dl-emb.t1{background:linear-gradient(160deg,#C2414F,#4A1820);color:#FFE3E6}.dl-emb.t2{background:linear-gradient(160deg,#3B8FD9,#14304D);color:#E3F3FF}\n.dl-emb.t3{background:linear-gradient(160deg,#3FAE5A,#1E3A22);color:#E6FFEA}.dl-emb.t4{background:linear-gradient(160deg,#8B6FE0,#3B2F5C);color:#F1ECFF}.dl-emb.t5{background:linear-gradient(160deg,#F5C542,#6B4E0E);color:#1A1405}\n.dl-emb.big{width:76px;height:86px;font-size:13.5px}.dl-emb.huge{width:120px;height:136px;font-size:20px;margin:6px auto 0;animation:dlpop .6s cubic-bezier(.2,1.4,.4,1)}\n@keyframes dlpop{from{transform:scale(.3);opacity:0}}\n.dl-pfh{display:flex;gap:14px;align-items:center;border-color:rgba(59,143,217,.55);box-shadow:inset 0 0 0 1px rgba(59,143,217,.25)}\n.dl-pfm{min-width:0;display:grid;gap:4px}.dl-pfh .dl-p{margin:2px 0 0}\n.dl-r10{display:grid;grid-template-columns:repeat(10,minmax(0,1fr));gap:4px;margin-top:8px}\n.dl-r10 i{font-style:normal;height:30px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800}\n.dl-r10 i.e{background:var(--s2,#17171A)}\n.dl-promo{position:fixed;inset:0;z-index:96;overflow:auto;background-color:#060708;background-image:radial-gradient(circle at 50% 30%,rgba(59,143,217,.35) 0,rgba(6,7,8,0) 62%);display:flex;justify-content:center;padding:calc(24px + env(safe-area-inset-top,0px)) max(16px,env(safe-area-inset-right,0px)) calc(24px + env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px));animation:dlfade .3s ease-out}\n.dl-pm-in{width:100%;max-width:440px;text-align:center;color:#FAFAFA}\n.dl-pm-k{margin:0;font-size:11px;letter-spacing:.3em;color:var(--dlb);font-weight:800}\n.dl-pm-h{margin:10px 0 4px;font-size:30px;font-weight:900}\n.dl-pm-ft{margin:0;font-size:14px}\n@media (prefers-reduced-motion:reduce){.dl-vsx,.dl-vs-s,.dl-emb.huge,.dl-promo{animation:none}}\n.dl-vs-top{background:none;padding:0}.dl-vs-cd{background:none}\n.dl-pm-ft{display:flex;gap:8px;align-items:center;justify-content:center}\n/* v3: 대기열 · 시작 예고 · 봇 · 푸시 미리보기 · 강등 */\n.dl-qcard{margin-top:12px;padding:13px;border-radius:14px;border:1.5px dashed var(--dla);background:rgba(var(--dla-rgb),.05)}\n.dl-qcard .dl-h{display:flex;align-items:center;gap:2px}\n.dl-steps{list-style:none;margin:10px 0 0;padding:0;display:grid;gap:5px}\n.dl-steps li{display:flex;justify-content:space-between;gap:8px;padding:8px 10px;border-radius:9px;background:var(--s2,#17171A);font-size:12.5px;color:var(--tx3,#63636B)}\n.dl-steps li small{font-size:11px}\n.dl-steps li.done{color:var(--tx2,#9A9AA2)}\n.dl-steps li.now{color:var(--dla);background:rgba(var(--dla-rgb),.1);box-shadow:inset 0 0 0 1px rgba(var(--dla-rgb),.5)}\n.dl-qbig{margin-top:10px;text-align:center;font-size:34px;font-weight:900;color:var(--dla);font-family:ui-monospace,monospace;font-variant-numeric:tabular-nums}\n.dl-botc{display:block;width:100%;text-align:left;min-height:52px;margin-top:8px;padding:8px 12px;border-radius:12px;border:1px solid #2A2A2F;background:#18181B;color:#FAFAFA;font-size:14px}\n.dl-botc small{display:block;margin-top:2px;font-size:11.5px;color:#9A9AA2}\n.dl-promo.down{background-image:radial-gradient(circle at 50% 30%,rgba(143,163,192,.18) 0,rgba(6,7,8,0) 62%)}\n.dl-cta.warn{background:#2A2F3A;color:#D7E6FF;border:1px solid var(--dlo);font-size:14px}\n.dl-ask{margin-top:10px;padding:12px;border-radius:12px;border:1px solid var(--dlo);background:#141820;color:#E6EEF8;font-size:13.5px}\n.dl-ask p{margin:4px 0 0;font-size:12.5px;color:#B8C4D4;line-height:1.55}\n.dl-ask p b{color:#FAFAFA}\n.dl-strip.flash,.dl-board.flash{animation:dlflash .5s 4}\n@keyframes dlflash{50%{border-color:var(--dlb);box-shadow:0 0 0 4px rgba(143,211,255,.35);background:#0F2232}}\n@media (prefers-reduced-motion:reduce){.dl-strip.flash,.dl-board.flash{animation:none;border-color:var(--dlb)}}\n/* v6: 탭 이름 · 대기 연출 · 매칭 연출 · Asset */\n.pp-vw{gap:16px !important;overflow-x:auto;scrollbar-width:none}\n.pp-vw::-webkit-scrollbar{display:none}\n.pp-vw button{font-size:16px !important;white-space:nowrap;flex:none}\n#pp-dlive{font-size:9.5px;padding:1px 5px;margin-left:4px}\n.dl-radar{position:relative;width:132px;height:132px;margin:2px auto 0;border-radius:50%;background:radial-gradient(circle,rgba(var(--dla-rgb),.10) 0,rgba(var(--dla-rgb),.02) 60%,transparent 61%),repeating-radial-gradient(circle,transparent 0 21px,rgba(var(--dla-rgb),.18) 21px 22px);border:1px solid rgba(var(--dla-rgb),.35);overflow:hidden}\n.dl-radar .sw{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,rgba(var(--dla-rgb),.55),rgba(var(--dla-rgb),0) 70deg,transparent 360deg);animation:dlsweep 2.2s linear infinite}\n@keyframes dlsweep{to{transform:rotate(360deg)}}\n.dl-radar .d{position:absolute;width:8px;height:8px;border-radius:50%;background:var(--dla);box-shadow:0 0 8px var(--dla);opacity:0;animation:dlblip 2.2s infinite}\n.dl-radar .d1{left:28%;top:24%;animation-delay:.3s}.dl-radar .d2{left:70%;top:38%;animation-delay:.9s}.dl-radar .d3{left:44%;top:74%;animation-delay:1.6s}\n@keyframes dlblip{0%{opacity:0;transform:scale(.4)}10%{opacity:1;transform:scale(1.2)}60%{opacity:0}}\n.dl-radar .me{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:34px;height:34px;border-radius:50%;background:var(--dla);color:var(--dlink);font-size:12px;font-weight:900;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 6px rgba(var(--dla-rgb),.18)}\n.dl-reel{margin:2px 0 0;font-size:12.5px;color:var(--tx3,#63636B)}\n.dl-reel b{display:inline-block;color:var(--dla);font-weight:800}\n.dl-reel b.flip{animation:dlflip .35s ease-out}\n@keyframes dlflip{from{transform:translateY(-8px);opacity:0}}\n.dl-mkt{display:flex;justify-content:space-between;margin-top:10px;font-size:12px;color:var(--tx3,#63636B)}\n.dl-mkt b{font-family:var(--mono,ui-monospace,monospace);color:var(--tx,#FAFAFA)}\n.dl-spark{display:block;width:100%;height:54px;margin-top:4px;background:linear-gradient(180deg,rgba(255,255,255,.02),transparent);border-radius:8px}\n.dl-warn{margin:8px 0 0;padding:8px 10px;border-radius:10px;background:rgba(255,138,61,.1);border:1px solid rgba(255,138,61,.45);color:#FFB27D;font-size:12.5px;font-weight:700}\n.dl-mfx{position:fixed;inset:0;z-index:97;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(6,6,7,.94);overflow:hidden;animation:dlfade .15s ease-out;transition:opacity .2s}\n.dl-mfx.out{opacity:0}\n.dl-mfx .rays{position:absolute;left:50%;top:50%;width:160vmax;height:160vmax;margin:-80vmax 0 0 -80vmax;background:repeating-conic-gradient(rgba(var(--dla-rgb),.16) 0 6deg,transparent 6deg 18deg);animation:dlsweep 6s linear infinite;mask:radial-gradient(circle,#000 0,transparent 55%);-webkit-mask:radial-gradient(circle,#000 0,transparent 55%)}\n.dl-mfx b{position:relative;font-size:34px;font-weight:900;letter-spacing:.06em;color:var(--dla);text-shadow:0 0 24px rgba(var(--dla-rgb),.6);animation:dlslam .5s cubic-bezier(.2,1.6,.4,1)}\n.dl-mfx span{position:relative;font-size:13.5px;font-weight:700;color:#E8E8EA}\n@keyframes dlslam{from{transform:scale(2.4);opacity:0}}\n.dl-vs-x{animation:dlslam .55s .35s cubic-bezier(.2,1.6,.4,1) both}\n.dl-vs-mkt{margin-top:16px;padding:8px 10px;border-radius:12px;background:rgba(255,255,255,.04)}\n.dl-vs-mkt span{font-size:12px;color:#9A9AA2}.dl-vs-mkt b{color:#FAFAFA;font-family:ui-monospace,monospace}\n.dl-vs-mkt svg{display:block;width:100%;height:46px;margin-top:4px}\n.dl-asset{border-color:rgba(59,143,217,.4)}\n.dl-assetv{display:block;margin-top:6px;font-size:28px;font-weight:800;font-family:var(--mono,ui-monospace,monospace);color:var(--tx,#FAFAFA);letter-spacing:-.02em}\n.dl-assetv small{font-size:13px;color:var(--tx3,#63636B)}\n.dl-abar{display:flex;height:10px;border-radius:5px;overflow:hidden;margin-top:10px;background:var(--s3,#212125)}\n.dl-abar i{display:block;height:100%}\n.dl-aleg{display:flex;flex-wrap:wrap;gap:6px 12px;margin-top:8px;font-size:12px;color:var(--tx2,#9A9AA2)}\n.dl-aleg i{display:inline-block;width:8px;height:8px;border-radius:2px;margin-right:4px}\n.dl-aleg b{color:var(--tx,#FAFAFA);font-family:var(--mono,ui-monospace,monospace)}\n@media (prefers-reduced-motion:reduce){.dl-radar .sw,.dl-radar .d,.dl-mfx .rays,.dl-mfx b,.dl-vs-x,.dl-reel b.flip{animation:none}.dl-radar .d{opacity:1}}\n/* v7: 대기 = 실시간 차트 흐름 · MATCH FOUND 차트 선 · 효과음 고르기 */\n.dl-qchart{position:relative;margin:2px -4px 0;padding:10px 10px 6px;border-radius:12px;background:linear-gradient(180deg,var(--dlbg),#0D0D0F);border:1px solid rgba(var(--dla-rgb),.25);overflow:hidden}\n.dl-qchart .hd{display:flex;align-items:baseline;gap:8px;font-size:12px;color:var(--tx3,#63636B)}\n.dl-qchart .hd b{font-size:18px;color:var(--tx,#FAFAFA);font-family:var(--mono,ui-monospace,monospace)}\n.dl-qchart .hd em{font-style:normal;font-size:12px;font-weight:800;margin-left:auto}\n.dl-qchart svg{display:block;width:100%;height:120px;margin-top:4px}\n.dl-qchart .dot{position:absolute;right:6px;width:10px;height:10px;margin-top:22px;border-radius:50%;background:var(--dla);box-shadow:0 0 0 0 rgba(var(--dla-rgb),.6);transform:translateY(-50%);animation:dlpulse 1.2s infinite}\n@keyframes dlpulse{70%{box-shadow:0 0 0 10px rgba(var(--dla-rgb),0)}100%{box-shadow:0 0 0 0 rgba(var(--dla-rgb),0)}}\n.dl-mfx .ln{position:absolute;inset:18% 0 30%;width:100%;height:52%;opacity:.9}\n.dl-mfx .ln polyline{stroke-dasharray:1;stroke-dashoffset:1;animation:dldraw .7s ease-out forwards;filter:drop-shadow(0 0 6px rgba(var(--dla-rgb),.7))}\n@keyframes dldraw{to{stroke-dashoffset:0}}\n@media (prefers-reduced-motion:reduce){.dl-qchart .dot,.dl-mfx .ln polyline{animation:none;stroke-dashoffset:0}}\n.dl-pals{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px}\n.dl-pals button{margin:0 !important;min-height:40px !important;font-size:12px !important;display:flex !important;align-items:center;gap:4px}\n.dl-pals i{flex:none;width:12px;height:12px;border-radius:3px}\n/* v9: 연승 불꽃 · 다음 티어 막대 · GG */\n.dl-fire{display:inline-block;margin-left:4px;padding:0 6px;border-radius:999px;background:rgba(255,120,40,.16);color:#FF9A4D;font-size:11px;font-weight:900;vertical-align:2px;animation:dlfire 1.6s infinite}\n@keyframes dlfire{50%{box-shadow:0 0 10px rgba(255,140,60,.55)}}\n.dl-next{margin-top:8px;font-size:12px;color:var(--tx2,#9A9AA2)}\n.dl-next .dl-row b{color:var(--tx,#FAFAFA);font-family:var(--mono,ui-monospace,monospace)}\n.dl-nbar{margin-top:5px;height:7px;border-radius:4px;background:var(--s3,#212125);overflow:hidden}\n.dl-nbar i{display:block;height:100%;background:linear-gradient(90deg,var(--dlo),var(--dla))}\n.dl-next small{display:block;margin-top:3px;font-size:10.5px;color:var(--tx3,#63636B);font-family:var(--mono,ui-monospace,monospace)}\n.dl-gg{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:8px;padding:10px 12px;border-radius:12px;background:var(--s1,#0E0E10);border:1px solid var(--line,#1C1C20);font-size:12.5px;color:var(--tx2,#9A9AA2)}\n.dl-gg span{flex:1;min-width:0}\n.dl-gg button{min-height:36px;padding:0 12px;border-radius:10px;border:1px solid var(--line,#1C1C20);background:var(--s2,#17171A);color:var(--tx,#FAFAFA);font-size:13px;font-weight:800}\n.dl-gg b{color:var(--dla)}\n.dl-gg em{flex-basis:100%;font-style:normal;color:var(--dlb);font-weight:700}\n.dl-stats{grid-template-columns:repeat(2,minmax(0,1fr)) !important}\n@media (prefers-reduced-motion:reduce){.dl-fire{animation:none}}\n/* v12: 30초 준비 화면 */\n.dl-rdy{margin-top:4px;font-size:11.5px;font-weight:800;color:#8A8A92;border:1px solid #2A2A2F;border-radius:999px;padding:2px 9px}\n.dl-rdy.on{color:#0B0B0C;background:var(--dla);border-color:var(--dla)}\n.dl-prep-msg{margin:14px 0 0;text-align:center;font-size:13px;font-weight:700;color:#C9C9CE}\n.dl-prep-msg.hot{color:var(--dlb);animation:dlbl 1s infinite}\n.dl-vsx .dl-cta[disabled]{opacity:.6}\n\n.dl-sel{width:100%;min-height:44px;margin-top:6px;border-radius:10px;border:1px solid var(--line,#1C1C20);background:var(--s2,#17171A);color:var(--tx,#FAFAFA);font-size:14px;padding:0 10px}\n.dl-lr{width:100%;text-align:left;background:none;border:0;border-bottom:1px solid var(--line,#1C1C20);color:inherit;font:inherit}\n.dl-mini{min-height:34px;margin-left:6px;padding:0 10px;border-radius:8px;border:1px solid var(--line,#1C1C20);background:var(--s2,#17171A);color:var(--tx,#FAFAFA);font-size:12px;font-weight:800}\n.dl-wl i.e{background:#2A2A30;color:#9A9AA2}\n.dl-inv{border-color:var(--dla)}\n.pp-dlv{max-width:720px;margin-left:auto;margin-right:auto}\n.dl-botnow small{display:block;font-size:11.5px;font-weight:600;opacity:.7;margin-top:2px}\n"; document.head.appendChild(s); })();
/* 안드레99 — 1:1 트레이딩 대결 (2026.11.09-A) · 트레이딩 [모의투자 | 1:1 대결 | 랭킹 | 프로필]
   서버(/p/d/*)가 매칭 · 판돈 · 정산을 맡고, 화면은 상태를 받아 그린다. 매매는 지금 거래 화면 그대로 — 대결 지갑을 고르면 머리글 x-a99-duel 로 보낸다.
   · 매칭 = 확정 → 30초 준비(준비 완료는 서로에게 보이는 표시) → 무조건 시작 · 대결 중 그만두기 = 기권(패배)
   · 상대 수익률은 서버의 1분 감시가 남긴 값(최대 1분 늦음), 내 수익률은 대결 지갑을 보고 있으면 실시간 */
(function () {
  'use strict';
  if (window.A99Duel) return;
  var API = window.A99P_API || 'https://andre99-paper.jhw5282435.workers.dev';
  var SITE = (function () { try { return location.origin + location.pathname; } catch (e) { return 'https://andre99kr.pages.dev/andre99_mobile_app.html'; } })();   /* 관전 · 도전장 링크 = 지금 보고 있는 앱 주소 */
  var WALLET = 10000, HOT = 600;
  var TIERS = [['개미', 0, 1000, 't0'], ['불개미', 5, 2000, 't1'], ['슈퍼개미', 15, 3000, 't2'], ['프로 트레이더', 30, 5000, 't3'], ['탑 트레이더', 60, 7000, 't4'], ['레전드 트레이더', null, 10000, 't5']];
  var BADGES = [
    ['first', '첫 출전', '첫 대결 참가'], ['win1', '첫 승', '대결에서 처음 승리'], ['upset', '하극상', '높은 티어 상대를 이김'],
    ['streak3', '무패', '3연승'], ['revenge', '복수 성공', '진 상대에게 재대결 승'], ['moon', '+50% 달성', '대결 수익률 +50% 이상'],
    ['broke', '청산 경험', '대결 중 청산 · 레버리지를 다시 점검해 보세요'], ['sl', '손절의 신', '손절을 건 채 이긴 대결'], ['calm', '존버 성공', '한 포지션으로 끝까지 버텨 승리'],
  ];
  var BOTS = [['trend', '추세봇', '1시간마다 오른 쪽으로 따라가요 · BTC 3배'], ['contra', '역추세봇', '1시간마다 반대로 가요 · BTC 3배'], ['moth', '고배율봇', 'BTC 10배 롱 · 작은 움직임에도 크게 흔들려요']];
  var ERRS = {
    stake: '1,000 단위로 골라 주세요.', stake_tier: '내 티어의 한 판 최대 판돈을 넘었어요.', stake_cap: '걸 수 있는 금액을 넘었어요(잔고의 30% · 쓸 수 있는 돈 안에서).', stake_avail: '쓸 수 있는 돈이 모자라요.',
    in_duel: '이미 진행 중인 대결이 있어요.', opp_busy: '상대가 다른 대결 중이에요.', prep: '준비 30초가 끝나야 기권할 수 있어요(매칭은 확정이에요).',
    no_invite: '도전장이 없어졌거나 기한이 지났어요.', not_found: '그 닉네임의 회원이 없어요.', no_ch: '지금 도전장을 받지 않는 상대예요.', self: '나에게는 도전장을 보낼 수 없어요.', inv_max: '보낸 도전장은 3개까지예요.',
    no_duel: '대결을 찾지 못했어요.', slow_down: '너무 빨라요. 잠깐 뒤 다시 해 주세요.', busy: '잠시 뒤 다시 해 주세요.', book: '시세를 받지 못했어요. 잠시 뒤 다시 해 주세요.', net: '서버에 연결하지 못했어요.',
  };
  var S = null, SKEW = 0, LOADING = false, NEXT = 0, FAILS = 0, PUB = null, PUBAT = 0, VIEW = null, VIEWAT = 0, VIEWID = null;
  var U = { stake: 1000, mode: 'auto', nick: '', open: false, ffAsk: false, seenFx: {}, botAsked: 0, prepOpen: null, lastDuel: null, oppIn: {}, flash: 0, hotShown: {}, picked: {}, busy: false };
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { } }
  try { U.picked = JSON.parse(lsGet('a99.duel.picks') || '{}') || {}; } catch (e) { U.picked = {}; }
  U.seenRule = lsGet('a99.duel.rule') === '1';
  U.snd = lsGet('a99.duel.snd2') || 'fan';
  document.documentElement.classList.add('dlp-white');
  (function () { try { var m = /[?&]duel=([A-Za-z0-9_-]{6,40})/.exec(location.search); if (m) VIEWID = m[1]; } catch (e) { } })();

  function P() { return window.A99Paper; }
  function E() { return window.A99E; }
  var DZ_BOTF = { trend: ['#2F7D58', '<path d="M5 17l6-6 4 4 5-6"/><path d="M15 9h5v5"/>', 'BTC 3배', '1시간마다 오른 쪽으로 따라가요'], contra: ['#2D5DA8', '<path d="M5 7l6 6 4-4 5 6"/><path d="M15 15h5v-5"/>', 'BTC 3배', '1시간마다 반대로 가요'], moth: ['#B4552D', '<path d="M12 3c2 3 5 5 5 9a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-8z"/>', 'BTC 10배 롱', '작은 움직임에도 크게 흔들려요'] };
  var DZ_SEEN = {};
  function dzSteps(L, at) { return '<ol class="dz-steps">' + L.map(function (x, i) { return '<li class="' + (i < at ? 'done' : i === at ? 'cur' : '') + '"><i>' + (i < at ? '✓' : i + 1) + '</i>' + x + '</li>'; }).join('') + '</ol>'; }
  function dzRing(p, txt) { var r = 27, c = 2 * Math.PI * r; p = Math.max(0, Math.min(1, p)); return '<svg class="dz-ring" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" fill="none" stroke="#2A2A2E" stroke-width="6"/><circle cx="32" cy="32" r="27" fill="none" style="stroke:var(--dla)" stroke-width="6" stroke-linecap="round" stroke-dasharray="' + (c * p).toFixed(1) + ' ' + c.toFixed(1) + '" transform="rotate(-90 32 32)"/><text x="32" y="36.5" text-anchor="middle" font-size="12" font-weight="800" fill="#F3F3F4">' + txt + '</text></svg>'; }
  function dzHm(s) { s = Math.max(0, Math.floor(s)); var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); return h ? h + ':' + ('0' + m).slice(-2) : m + '분'; }

  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function sp(x, d) { d = d == null ? 2 : d; return (x > 0 ? '+' : x < 0 ? '−' : '') + Math.abs(x).toFixed(d) + '%'; }
  function usd(x) { return Math.round(+x || 0).toLocaleString('en-US'); }
  function col(x) { return x > 0 ? 'var(--up,#22C083)' : x < 0 ? 'var(--dn,#F0475A)' : 'var(--tx2,#9A9AA2)'; }
  function mmss(s) { s = Math.max(0, Math.ceil(s)); return ('0' + Math.floor(s / 60)).slice(-2) + ':' + ('0' + s % 60).slice(-2); }
  function hms(s) { s = Math.max(0, Math.floor(s)); var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return h + ':' + ('0' + m).slice(-2) + ':' + ('0' + x).slice(-2); }
  function leftTxt(s) { return s > 3600 ? Math.floor(s / 3600) + '시간 ' + Math.floor(s % 3600 / 60) + '분' : mmss(s); }
  function fire(n) { return n >= 3 ? '<span class="dl-fire" title="' + n + '연승">🔥' + n + '</span>' : ''; }
  function tierTag(t) { t = TIERS[t] ? t : 0; return '<span class="dl-tier ' + TIERS[t][3] + '">' + TIERS[t][0] + '</span>'; }
  function toast(t, bad) { if (P() && P()._toast) P()._toast(t, bad); }
  function now() { return Date.now() + SKEW; }
  function logged() { return !!(P() && P()._me && P()._me()); }
  function nm(sym) { return String(sym || '').replace('xyz:', ''); }
  function wl(list) { return '<span class="dl-wl">' + (list || []).map(function (x) { return '<i class="' + (x === 1 ? 'w' : x === 0 ? 'l' : 'e') + '">' + (x === 1 ? '승' : x === 0 ? '패' : '무') + '</i>'; }).join('') + '</span>'; }

  /* ── 서버 ── */
  function call(path, body) {
    if (P() && P()._api) return P()._api(path, body);
    return Promise.resolve({ s: 0, j: { err: 'net' } });
  }
  function pub(path) {
    return fetch(API + path).then(function (r) { return r.json().then(function (j) { return { s: r.status, j: j || {} }; }); }, function () { return { s: 0, j: { err: 'net' } }; });
  }
  function load() {
    if (LOADING) return Promise.resolve();
    if (!logged()) { S = null; return loadPub(); }
    LOADING = true;
    return call('/p/d/state').then(function (x) {
      LOADING = false;
      if (x.s !== 200 || !x.j || x.j.err) { FAILS++; NEXT = Date.now() + Math.min(120000, 15000 * FAILS); return; }
      FAILS = 0;
      var prev = S; S = x.j; SKEW = S.now - Date.now();
      after(prev);
      paint();
    }, function () { LOADING = false; });
  }
  function loadPub() {
    if (Date.now() - PUBAT < 30000) return Promise.resolve();
    PUBAT = Date.now();
    return pub('/p/d/live').then(function (x) { if (x.s === 200) { PUB = x.j; SKEW = (x.j.now || Date.now()) - Date.now(); paint(); } });
  }
  function loadView() {
    if (!VIEWID || Date.now() - VIEWAT < 20000) return Promise.resolve();
    VIEWAT = Date.now();
    return pub('/p/d/view?id=' + encodeURIComponent(VIEWID)).then(function (x) { VIEW = x.s === 200 ? x.j : { err: x.j.err || 'net' }; paint(); });
  }
  function act(path, body, okMsg) {
    if (U.busy) return Promise.resolve();
    U.busy = true;
    return call(path, body).then(function (x) {
      U.busy = false;
      if (x.j && x.j.err) { toast(ERRS[x.j.err] || '처리하지 못했어요. 잠시 뒤 다시 해 주세요.', true); load(); return x; }
      if (x.s === 200 && x.j && x.j.now) { var prev = S; S = x.j; SKEW = S.now - Date.now(); after(prev); paint(); }
      if (okMsg) toast(okMsg);
      return x;
    });
  }
  /* 다음에 다시 물어볼 때: 준비 중 3초 · 대결 화면 15초 · 대기 20초 · 그 밖 60초 (화면이 꺼져 있으면 쉼) */
  function due() {
    var v = P() && P()._view ? P()._view() : '';
    if (S && S.duel && now() < S.duel.start) return 3000;
    if (v === 'duel' || v === 'prof') return 15000;
    if (S && S.q) return 20000;
    if (S && S.duel) return 30000;
    return 60000;
  }

  /* ── 상태가 바뀐 순간 ── */
  function after(prev) {
    var d = S.duel, pd = prev && prev.duel;
    // 새로 잡힌 대결(준비 중) → MATCH FOUND → 30초 준비 화면
    if (d && now() < d.start && !U.seenFx[d.id]) { U.seenFx[d.id] = 1; matchFX(d.kind === 'bot' ? '하우스 트레이더 · 명예전' : '매칭 확정 · 30초 뒤 시작', function () { prepScreen(); }); }
    else if (d && now() < d.start && !$('dl-prep') && U.seenFx[d.id]) prepScreen();
    // 자리를 비운 사이 시작됨
    if (d && d.away > 60000 && d.kind !== 'bot') awayPop(d);
    // 대결이 시작되면 대결 지갑으로(지켜보고 있던 사람만 · 처음 한 번)
    if (d && now() >= d.start && U.prepOpen === d.id) { U.prepOpen = null; useDuel(true); }
    // 상대 늦게 입장
    if (d && d.kind !== 'bot') { var was = U.oppIn[d.id]; if (was === false && d.oppIn) { U.flash = Date.now(); toast('🔔 상대 입장! 이제 진짜 시작'); } U.oppIn[d.id] = !!d.oppIn; }
    // 끝남 → 실전 계좌로 · 결과 알림
    if (pd && (!d || d.id !== pd.id)) {
      if (window.A99_DUELACCT === pd.id) useDuel(false, true);
      var L = S.last;
      if (L && L.id === pd.id && !L.void) toast(L.honor ? '명예전 종료 · ' + (L.draw ? '무승부' : L.win ? '봇을 이겼어요!' : '봇에게 졌어요') : L.draw ? '대결 종료 · 무승부 (판돈 반환)' : L.win ? '🏆 대결 승리! +' + usd(L.stake) + ' USD' : '대결 종료 · 패배 (−' + usd(L.stake) + ' USD)', !L.win && !L.draw);
      try { window.scrollTo(0, 0); } catch (e) { }
    }
    if (!d && window.A99_DUELACCT) useDuel(false, true);
    if (d && now() >= d.start && lsGet('a99.duel.acct') === d.id && window.A99_DUELACCT !== d.id) useDuel(true, true);
    // 매칭 취소(판돈 부족) 안내
    if (S.last && S.last.void && /^esc_/.test(S.last.why || '') && !U.seenFx['v' + S.last.id]) { U.seenFx['v' + S.last.id] = 1; toast(S.last.why === 'esc_' + S.last.me ? '쓸 수 있는 돈이 모자라 매칭이 취소됐어요' : '상대 판돈 문제로 매칭이 취소됐어요 · 다시 찾는 중', true); }
    // 티어 바뀜 → 승급 · 강등 (이 기기 기준)
    var t = S.me.tier, lt = lsGet('a99.duel.tier');
    if (lt != null && +lt !== t) { if (t > +lt) promo(+lt, t); else demote(+lt, t); }
    lsSet('a99.duel.tier', String(t));
    syncBadge();
  }
  function useDuel(on, quiet) {
    var d = S && S.duel;
    var id = on && d ? d.id : null;
    if (window.A99_DUELACCT === id) { syncTrade(); return; }
    window.A99_DUELACCT = id; lsSet('a99.duel.acct', id);
    if (P() && P()._switch) P()._switch().then(syncTrade);
    if (!quiet) toast(id ? '⚔ 대결 지갑으로 바꿨어요' : '실전 계좌로 바꿨어요');
    syncTrade();
  }

  /* ── 수익률 ── */
  function onWallet(d) { return d && window.A99_DUELACCT === d.id && P() && P()._acctDuel && P()._acctDuel() === d.id; }
  function myRet(d) { if (onWallet(d) && P()._equity) return (P()._equity() / WALLET - 1) * 100; return (d.myRet || 0) * 100; }
  function oppRet(d) { return (d.oppRet || 0) * 100; }
  function myEq(d) { return onWallet(d) && P()._equity ? P()._equity() : WALLET * (1 + (d.myRet || 0)); }
  function left(d) { return Math.max(0, (d.end - now()) / 1000); }

  /* ── 그림: 전광판 ── */
  function curve(d) {
    var W = 300, H = 64, pts = (d.curve || []).slice();
    pts.push([now(), myRet(d) / 100, oppRet(d) / 100]);
    var t0 = d.start, t1 = d.end, all = [];
    pts.forEach(function (p) { all.push(p[1] * 100, p[2] * 100); });
    var lo = Math.min(-1, Math.min.apply(null, all)), hi = Math.max(1, Math.max.apply(null, all));
    var y = function (v) { return 5 + (hi - v) / (hi - lo) * (H - 10); }, x = function (t) { return Math.max(0, Math.min(1, (t - t0) / (t1 - t0))) * W; };
    var pl = function (k, c) { return '<polyline points="' + [[t0, 0, 0]].concat(pts).map(function (p) { return x(p[0]).toFixed(1) + ',' + y(p[k] * 100).toFixed(1); }).join(' ') + '" fill="none" style="stroke:' + c + '" stroke-width="2" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>'; };
    return '<svg class="dl-eq" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" role="img" aria-label="두 사람의 수익률 흐름"><line x1="0" x2="' + W + '" y1="' + y(0).toFixed(1) + '" y2="' + y(0).toFixed(1) + '" stroke="#3A3A3F" stroke-dasharray="3 3" vector-effect="non-scaling-stroke"/>' + pl(2, 'var(--dlo)') + pl(1, 'var(--dla)') + '</svg>';
  }
  function mineBoard() {
    var d = S.duel, ra = myRet(d), rb = oppRet(d), diff = ra - rb, L = left(d), st = S.stats;
    var lead = Math.abs(diff) < 0.05 ? '박빙 · 거의 같아요' : (diff > 0 ? '내가 ' : esc(d.opp.nick) + ' 님이 ') + Math.abs(diff).toFixed(2) + '%p 앞서는 중';
    return '<div class="dl-board' + (L <= HOT ? ' hot' : '') + (Date.now() - U.flash < 2500 ? ' flash' : '') + '"><div class="dl-bt">' + (d.kind === 'bot' ? '명예전 · 판돈 없음' : '판돈 ' + usd(d.stake) + ' USD씩') + ' · 24시간 대결' + (L <= HOT ? ' · <b>막판!</b>' : '') + '</div>' +
      '<div class="dl-vs"><div>' + tierTag(S.me.tier) + '<b class="nm">나' + fire(st.streak) + '</b><b class="rt" data-dk="ra" style="color:' + col(ra) + '">' + sp(ra) + '</b><small>' + usd(myEq(d)) + ' USD · ' + st.w + '승 ' + st.l + '패</small></div><i>VS</i>' +
      '<div>' + tierTag(d.opp.tier) + '<b class="nm">' + esc(d.opp.nick) + fire(d.opp.streak || 0) + '</b><b class="rt" style="color:' + col(rb) + '">' + sp(rb) + '</b><small>' + usd(WALLET * (1 + rb / 100)) + ' USD · ' + (d.opp.bot ? '하우스 트레이더' : d.opp.w + '승 ' + d.opp.l + '패') + '</small></div></div>' +
      '<p class="dl-lead" style="color:' + (diff >= 0 ? 'var(--dla)' : 'var(--dlo)') + '">' + lead + '</p>' + curve(d) +
      '<div class="dz-lring">' + dzRing(L / ((d.end - d.start) / 1000), dzHm(L)) + '<div><small>남은 시간</small><b class="dl-num">' + leftTxt(L) + '</b><small>24시간 중</small></div></div>' +
      '<div class="dl-meta"><span></span><span>' + (d.kind === 'bot' ? '봇 포지션은 끝나면 공개' : !d.oppIn ? '<b style="color:var(--dlo)">상대가 아직 들어오지 않았어요</b>' : '상대 방향은 끝나면 공개') + '</span></div>' +
      '<p class="dl-tiny">상대 수익률은 1분마다 갱신돼요' + (onWallet(d) ? '' : ' · 내 수익률은 대결 지갑을 고르면 실시간') + '</p></div>';
  }
  function liveRow(x) {
    var L = Math.max(0, (x.end - now()) / 1000);
    return '<button type="button" class="dl-lr" data-dl="watch:' + esc(x.id) + '"><span>' + tierTag(x.ta) + ' ' + esc(x.na) + ' <b style="color:' + col(x.ra) + '">' + sp(x.ra * 100, 1) + '</b></span><span class="c">' + (x.stake ? usd(x.stake) + ' USD' : '명예전') + '<br>' + (L > 3600 ? Math.floor(L / 3600) + '시간' : Math.floor(L / 60) + '분') + ' 남음</span><span class="r"><b style="color:' + col(x.rb) + '">' + sp(x.rb * 100, 1) + '</b> ' + esc(x.nb) + ' ' + tierTag(x.tb) + '</span></button>';
  }
  function bigBoard(x, title) {
    var L = Math.max(0, (x.end - now()) / 1000), n = (x.pa || 0) + (x.pb || 0), pa = n ? Math.round((x.pa || 0) / n * 100) : 50;
    return '<div class="dl-board big' + (L <= HOT ? ' hot' : '') + '"><div class="dl-bt">' + (title || '🔥 오늘의 빅매치') + ' · ' + (x.stake ? '판돈 ' + usd(x.stake) + ' USD씩' : '명예전') + '</div>' +
      '<div class="dl-vs"><div>' + tierTag(x.ta) + '<b class="nm">' + esc(x.na) + '</b><b class="rt" style="color:' + col(x.ra) + '">' + sp(x.ra * 100) + '</b></div><i>VS</i><div>' + tierTag(x.tb) + '<b class="nm">' + esc(x.nb) + '</b><b class="rt" style="color:' + col(x.rb) + '">' + sp(x.rb * 100) + '</b></div></div>' +
      '<div class="dl-meta"><span>남은 시간 <b class="dl-num">' + leftTxt(L) + '</b></span><span>수익률은 1분마다 갱신</span></div>' +
      (n >= 10 ? '<div class="dl-pbar"><i style="width:' + pa + '%"></i></div><div class="dl-meta" style="margin-top:4px"><span>' + esc(x.na) + ' 승 ' + pa + '%</span><span>' + esc(x.nb) + ' 승 ' + (100 - pa) + '%</span></div>' : n ? '<p class="dl-tiny">' + n + '명이 찍었어요 · 10명부터 비율을 보여 줘요</p>' : '') + '</div>' +
      '<div class="dl-pick" role="group" aria-label="승부 찍기"><span>누가 이길까?</span>' + ['a', 'b'].map(function (k) { return '<button type="button" data-dl="pick:' + esc(x.id) + ':' + k + '" aria-pressed="' + (U.picked[x.id] === k) + '"' + (U.picked[x.id] ? ' disabled' : '') + '>' + esc(k === 'a' ? x.na : x.nb) + '</button>'; }).join('') + '</div>';
  }
  function liveList() { var L = S ? S.live : PUB ? PUB.rows : []; return L || []; }

  /* ── [1:1 대결] 화면 ── */
  function vDuel() {
    if (VIEWID) return vSpect();
    var h = '';
    if (!logged()) {
      var L0 = liveList();
      if (L0.length) h += '<div id="dl-big">' + bigBoard(L0[0]) + '</div>';
      h += '<section class="dl-card"><b class="dl-h">1:1 트레이딩 대결</b><p class="dl-p">각자 <b>10,000 USD 대결 지갑</b>으로 24시간 수익률을 겨뤄요. 판돈은 내 모의투자 계좌에서 걸고, 이긴 사람이 모두 가져가요. 대결은 <b>암호화폐만</b> 거래해요.</p><button type="button" class="dl-cta" data-dl="login">로그인하고 대결하기</button></section>';
      if (L0.length > 1) h += '<div class="dl-lbl">다른 대결 LIVE</div><div class="dl-card pad0">' + L0.slice(1).map(liveRow).join('') + '</div>';
      else if (!L0.length) h += '<p class="dl-tiny" style="text-align:center">지금 진행 중인 대결이 없어요</p>';
      return h + foot();
    }
    if (!S) return '<p class="dl-tiny" style="text-align:center;margin-top:24px">대결 정보를 불러오는 중…</p>';
    if (S.last) h += vResult();
    var L = liveList().filter(function (x) { return !S.duel || x.id !== S.duel.id; });
    if (S.duel && now() >= S.duel.start) {
      h += '<div class="dl-lbl"><span class="dl-live"><i></i>내 대결 진행 중</span></div><div id="dl-mine">' + mineBoard() + '</div>';
      h += onWallet(S.duel) ? '<button type="button" class="dl-cta" data-dl="gotrade">⚔ 거래 화면에서 매매하기 →</button>' : '<button type="button" class="dl-cta" data-dl="gotrade">⚔ 대결 지갑으로 매매하러 가기 →</button>';
      h += '<div id="dl-voidw">' + voidHTML() + '</div>';
      h += '<button type="button" class="dl-ghost" data-dl="copylink">🔗 관전 링크 복사</button>';
    } else if (S.duel) h += '<section class="dl-card"><b class="dl-h">매칭 확정 · 곧 시작</b><p class="dl-p">상대 <b>' + esc(S.duel.opp.nick) + '</b> ' + tierTag(S.duel.opp.tier) + ' · ' + (S.duel.stake ? '판돈 ' + usd(S.duel.stake) + ' USD씩' : '명예전') + '</p><div class="dl-qbig">' + mmss((S.duel.start - now()) / 1000) + '</div><button type="button" class="dl-cta" data-dl="prep">준비 화면 열기</button></section>';
    else h += vApply();
    if (L.length) { h += '<div id="dl-big">' + bigBoard(L[0]) + '</div>'; if (L.length > 1) h += '<div class="dl-lbl">다른 대결 LIVE</div><div class="dl-card pad0" id="dl-live">' + L.slice(1).map(liveRow).join('') + '</div>'; }
    return h + foot();
  }
  function foot() { return '<p class="dl-foot">가상 연습금이에요 · 사고팔거나 현금으로 바꿀 수 없어요 · 상금 · 경품 없음 · 투자 권유 아님</p>'; }
  function voidHTML() {
    var d = S.duel; if (!d) return '';
    if (U.ffAsk) return '<div class="dl-ask"><b>정말 포기할까요?</b><p>' + (d.kind === 'bot' ? '명예전 패배로 기록돼요.' : '<b>패배</b>로 기록되고 판돈 <b>' + usd(d.stake) + ' USD</b>를 잃어요.') + '</p><div class="dl-two"><button type="button" class="dl-ghost" data-dl="ffno">계속하기</button><button type="button" class="dl-cta warn" data-dl="ffyes">포기하기</button></div></div>';
    return (!d.oppIn && d.kind !== 'bot' ? '<p class="dl-note">그래도 대결은 진행 중이에요 · 자리를 비운 시간은 본인 책임</p>' : '') + '<button type="button" class="dl-ghost" data-dl="ffask">대결 포기' + (d.kind === 'bot' ? '' : ' (기권 · 판돈 잃음)') + '</button>';
  }
  function vApply() {
    var me = S.me, t = me.tier, cap = me.cap, lim = me.max;
    var head = '<section class="dl-card"><div class="dl-row"><b class="dl-h">1:1 트레이딩 대결</b><button type="button" class="dl-info" data-dl="rule" aria-label="대결 규칙 보기">ⓘ 규칙</button></div>';
    var h = '';
    // 받은 도전장
    (S.inv.inc || []).forEach(function (v) { h += '<section class="dl-card dl-inv"><b class="dl-h">⚔ ' + esc(v.nick) + ' 님의 ' + (v.rev ? '복수전' : '도전장') + '</b><p class="dl-p">' + tierTag(v.tier) + ' · 판돈 ' + usd(v.stake) + ' USD씩 (내 한도가 낮으면 낮은 쪽으로) · ' + leftTxt((v.exp - now()) / 1000) + ' 안에 수락</p><div class="dl-two"><button type="button" class="dl-ghost" data-dl="decline:' + esc(v.id) + '">거절</button><button type="button" class="dl-cta" data-dl="accept:' + esc(v.id) + '">수락 · 30초 뒤 시작</button></div></section>'; });
    if (S.q) {
      return h + head + '<div id="dl-qbox">' + qHTML() + '</div><button type="button" class="dl-ghost" data-dl="qcancel">대기 취소</button></section>';
    }
    if (U.stake > Math.max(1000, cap)) U.stake = Math.max(1000, cap);
    h += head + dzSteps(['상대', '판돈', '신청'], 1) + '<p class="dl-p dz-intro">24시간 수익률 대결 · 이긴 사람이 판돈을 가져가요 <button type="button" class="dz-ib" data-dztip="1" aria-label="대결 설명 보기" aria-expanded="false">?</button></p><div class="dz-tipb" hidden>성사되면 <b>둘 다 10,000 USD 대결 지갑</b>으로 24시간 수익률을 겨뤄요. 걸 돈은 내 <b>모의투자 계좌</b>에서 떼어 두고, 이긴 사람이 모두 가져가요. 대결은 <b>암호화폐만</b> 거래해요.</div>';
    h += '<div class="dl-sub"><span class="dz-n">1</span>상대 찾기</div><div class="dz-rl" role="radiogroup" aria-label="상대 찾기">' + [['auto', '자동 매칭', '비슷한 티어끼리'], ['nick', '닉네임 지정', '도전장 보내기'], ['link', '링크 도전장', '친구 초대']].map(function (x) { return '<button type="button" role="radio" data-dl="mode:' + x[0] + '" aria-checked="' + (U.mode === x[0]) + '"><span class="rad" aria-hidden="true"></span><span class="t">' + x[1] + '<small>' + x[2] + '</small></span></button>'; }).join('') + '</div>';
    if (U.mode === 'nick') h += '<div class="dl-row" style="margin-top:8px"><label class="dl-k" for="dl-nick">상대 닉네임</label><input id="dl-nick" class="dl-in" maxlength="12" autocomplete="off" placeholder="닉네임" value="' + esc(U.nick) + '"></div>';
    if (U.mode === 'link') h += '<p class="dl-note">링크를 받은 회원이 수락하면 30초 뒤 시작해요 · 24시간 안에 아무도 수락하지 않으면 없어져요</p>';
    h += '<div class="dl-sub"><span class="dz-n">2</span>걸 금액 (USD)</div><label class="dz-sel dz-stk"><select id="dz-stake" aria-label="걸 금액">' + [1000, 2000, 3000, 5000, 7000, 10000].map(function (v) { var off = v > lim ? '티어' : v > cap ? '30%' : ''; return '<option value="' + v + '"' + (U.stake === v ? ' selected' : '') + (off ? ' disabled' : '') + '>' + usd(v) + ' USD' + (off ? (off === '티어' ? ' · 🔒 티어 승급 필요' : ' · 잔고 30% 넘음') : '') + '</option>'; }).join('') + '</select></label>';
    h += '<p class="dl-note">' + tierTag(t) + ' 한 판 최대 <b>' + usd(lim) + ' USD</b> · 어느 티어든 잔고의 30%까지 · 지금 걸 수 있는 최대 <b>' + usd(cap) + '</b></p>';
    h += '<button type="button" class="dl-cta" data-dl="apply"' + (cap < 1000 ? ' disabled' : '') + '>' + (U.mode === 'auto' ? usd(U.stake) + ' USD 걸고 대결 신청' : '도전장 보내기 · ' + usd(U.stake) + ' USD') + '</button>';
    h += '<button type="button" class="dl-ghost dl-botnow" data-dl="botask">🤖 봇과 바로 연습 <small>기다림 없음 · 판돈 없음 · 봇전으로 따로 기록</small></button>';
    if (cap < 1000) h += '<p class="dl-warn">걸 수 있는 돈이 1,000 USD보다 적어요 · 포지션을 정리하거나 다음 달을 기다려 주세요</p>';
    (S.inv.out || []).forEach(function (v) { h += '<div class="dl-ln"><span>보낸 도전장 · ' + (v.link ? '링크' : esc(v.nick)) + ' · ' + usd(v.stake) + ' USD · ' + leftTxt((v.exp - now()) / 1000) + ' 남음</span><span>' + (v.link ? '<button type="button" class="dl-mini" data-dl="invlink:' + esc(v.id) + '">링크 복사</button>' : '') + '<button type="button" class="dl-mini" data-dl="decline:' + esc(v.id) + '">취소</button></span></div>'; });
    if (S.lostTo && !S.q) h += '<button type="button" class="dl-ghost gold" data-dl="revenge">⚔ ' + esc(S.lostTo) + ' 님에게 복수전 도전장</button>';
    return h + '</section>';
  }
  function qStage(w) { return w < 180000 ? 0 : w < 360000 ? 1 : 2; }
  function qHTML() {
    var w = now() - S.q.at, steps = ['같은 티어', '위아래 한 티어까지', '티어 상관없이'], sub = ['0~3분', '3~6분', '6분부터'];
    return '<div class="dl-qcard q" data-k="q"><div class="dl-qchart"><div class="hd"><span>BTC · 지금 시장</span><b id="dl-qpx">—</b><em id="dl-qchg"></em></div><svg id="dl-qch" viewBox="0 0 300 120" preserveAspectRatio="none" role="img" aria-label="BTC 실시간 흐름"><defs><linearGradient id="dl-qg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--dla)" stop-opacity=".35"/><stop offset="1" style="stop-color:var(--dla)" stop-opacity="0"/></linearGradient></defs><path id="dl-qa" fill="url(#dl-qg)"/><polyline id="dl-ql" fill="none" style="stroke:var(--dla)" stroke-width="2" vector-effect="non-scaling-stroke"/><circle id="dl-qc" r="3.5" style="fill:var(--dla)"/></svg></div>' +
      '<div class="dl-row" style="margin-top:10px"><b class="dl-h">상대 찾는 중</b><b class="dl-num" id="dl-qt">' + mmss(w / 1000) + '</b></div>' +
      '<p class="dl-p">지금 기다리는 사람 <b>' + (S.wait || 1) + '명</b>(1분마다 갱신) · 판돈 ' + usd(S.q.stake) + ' USD (상대와 다르면 낮은 쪽으로)</p>' +
      '<ol class="dl-steps" id="dl-qsteps">' + steps.map(function (x, k) { var s = qStage(w); return '<li data-i="' + k + '" class="' + (k < s ? 'done' : k === s ? 'now' : '') + '"><b>' + x + '</b><small>' + sub[k] + '</small></li>'; }).join('') + '</ol>' +
      '<button type="button" class="dl-ghost dl-botnow" data-dl="botask">🤖 기다리기 싫으면 봇과 바로 연습 <small>판돈 없음 · 대기는 취소돼요</small></button>' +
      '<p class="dl-tiny">앱을 꺼도 대기는 이어져요 · 잡히면 30초 뒤 무조건 시작해요(자리를 비워도)</p></div>';
  }
  function qSoft() {
    var qb = $('dl-qbox'); if (!qb || !S || !S.q) return;
    var w = now() - S.q.at, t = $('dl-qt'); if (t) t.textContent = mmss(w / 1000);
    var s = qStage(w);
    qb.querySelectorAll('#dl-qsteps li').forEach(function (li) { var k = +li.getAttribute('data-i'); li.className = k < s ? 'done' : k === s ? 'now' : ''; });
    drawQ();
  }
  /* 기다리는 동안 BTC 흐름: 거래 화면이 받는 실시간 가격을 1초마다 받아 둔다 */
  var LIVEPX = [];
  function btcNow() { try { var m = P() && P()._marks && P()._marks(); return m && m.BTC; } catch (e) { return null; } }
  function linePts(arr, W, H, pad) {
    if (arr.length < 2) return null;
    var lo = Math.min.apply(null, arr), hi = Math.max.apply(null, arr), r = hi - lo || 1;
    return arr.map(function (v, k) { return [k / (arr.length - 1) * W, pad + (hi - v) / r * (H - pad * 2)]; });
  }
  function drawQ() {
    var l = $('dl-ql'); if (!l) return;
    var Pt = linePts(LIVEPX, 300, 120, 10); if (!Pt) return;
    var pts = Pt.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    l.setAttribute('points', pts);
    var ar = $('dl-qa'); if (ar) ar.setAttribute('d', 'M0,120 L' + pts.replace(/ /g, ' L') + ' L300,120 Z');
    var last = Pt[Pt.length - 1], dot = $('dl-qc'); if (dot) { dot.setAttribute('cx', (last[0] - 2).toFixed(1)); dot.setAttribute('cy', last[1].toFixed(1)); }
    var up = LIVEPX[LIVEPX.length - 1] >= LIVEPX[0], c = up ? '#22C083' : '#F0475A';
    var px = $('dl-qpx'); if (px) px.textContent = usd(LIVEPX[LIVEPX.length - 1]);
    var ch = $('dl-qchg'); if (ch) { var dd = (LIVEPX[LIVEPX.length - 1] / LIVEPX[0] - 1) * 100; ch.textContent = (dd >= 0 ? '▲ ' : '▼ ') + Math.abs(dd).toFixed(2) + '% · ' + Math.max(1, Math.round(LIVEPX.length / 60)) + '분'; ch.style.color = c; }
  }

  /* ── 매칭 연출 · 준비 화면 ── */
  var SFX = [['coin', '💰 코인 짤랑'], ['gong', '🥁 징'], ['rise', '🚀 떡상 상승음'], ['fan', '🎺 8비트 팡파레'], ['laser', '🔫 레이저 삐융'], ['jack', '🎰 잭팟 딩딩딩'], ['heart', '💓 두근두근'], ['power', '⚡ 파워업'], ['bell', '🔔 경기 종'], ['whoosh', '💨 휘익 쿵'], ['cash', '🧾 계산대 찰칵 띵'], ['whistle', '📯 시작 호루라기'], ['drum', '🥁 드럼롤 + 심벌'], ['off', '🔇 끄기 (진동만)']];
  var ACX = null;
  function tone(f, t, d, type, g, f2) {
    var o = ACX.createOscillator(), v = ACX.createGain(); o.type = type || 'sine'; o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
    v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(g || 0.2, t + 0.01); v.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(v); v.connect(ACX.destination); o.start(t); o.stop(t + d + 0.05);
  }
  function noise(t, d, type, f1, f2, g) {
    var n = Math.floor(ACX.sampleRate * d), buf = ACX.createBuffer(1, n, ACX.sampleRate), ch = buf.getChannelData(0);
    for (var i = 0; i < n; i++) ch[i] = Math.random() * 2 - 1;
    var src = ACX.createBufferSource(), fl = ACX.createBiquadFilter(), v = ACX.createGain(); src.buffer = buf; fl.type = type; fl.frequency.setValueAtTime(f1, t); fl.frequency.exponentialRampToValueAtTime(f2, t + d);
    v.gain.setValueAtTime(g, t); v.gain.exponentialRampToValueAtTime(0.0001, t + d); src.connect(fl); fl.connect(v); v.connect(ACX.destination); src.start(t); src.stop(t + d + .02);
  }
  function sfx(k) {
    if (!k || k === 'off') return;
    try {
      ACX = ACX || new (window.AudioContext || window.webkitAudioContext)(); if (ACX.state === 'suspended') ACX.resume();
      var t = ACX.currentTime + 0.02;
      if (k === 'coin') { tone(1568, t, .12, 'square', .06); tone(2093, t + .09, .35, 'square', .06); tone(4186, t + .09, .3, 'sine', .03); }
      else if (k === 'gong') { tone(98, t, 1.6, 'sine', .35); tone(196, t, 1.1, 'sine', .12); tone(293, t, .7, 'triangle', .06); }
      else if (k === 'rise') { tone(260, t, .45, 'sawtooth', .07, 1320); tone(1320, t + .42, .35, 'sine', .14); tone(1760, t + .5, .3, 'sine', .07); }
      else if (k === 'laser') { tone(1900, t, .32, 'square', .06, 180); tone(950, t, .32, 'sawtooth', .03, 90); }
      else if (k === 'jack') { [2093, 2637, 3136, 2093, 2637, 3136].forEach(function (f, i) { tone(f, t + i * .07, .16, 'triangle', .07); }); tone(4186, t + .42, .6, 'sine', .05); }
      else if (k === 'heart') { [0, .22, .75, .97].forEach(function (d, i) { tone(i % 2 ? 62 : 78, t + d, .18, 'sine', .55, 40); }); }
      else if (k === 'power') { [392, 523, 659, 784, 1047, 1319, 1568, 2093].forEach(function (f, i) { tone(f, t + i * .045, .09, 'square', .05); }); tone(2093, t + .36, .35, 'triangle', .06); }
      else if (k === 'bell') { tone(880, t, 1.8, 'sine', .22); tone(880 * 2.76, t, 1.1, 'sine', .07); tone(880 * 5.4, t, .5, 'sine', .03); }
      else if (k === 'whoosh') { noise(t, .45, 'bandpass', 400, 3200, .35); tone(70, t + .42, .5, 'sine', .55, 35); }
      else if (k === 'cash') { noise(t, .05, 'highpass', 3000, 3000, .5); noise(t + .08, .04, 'highpass', 2500, 2500, .4); tone(2637, t + .16, .7, 'sine', .14); tone(3951, t + .16, .4, 'sine', .05); }
      else if (k === 'whistle') { var o = ACX.createOscillator(), lf = ACX.createOscillator(), lg = ACX.createGain(), v = ACX.createGain(); o.frequency.value = 2300; lf.frequency.value = 28; lg.gain.value = 90; lf.connect(lg); lg.connect(o.frequency); v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(0.12, t + .03); v.gain.setValueAtTime(0.12, t + .5); v.gain.exponentialRampToValueAtTime(0.0001, t + .62); o.connect(v); v.connect(ACX.destination); o.start(t); lf.start(t); o.stop(t + .7); lf.stop(t + .7); }
      else if (k === 'drum') { for (var i = 0; i < 9; i++) noise(t + i * .055, .05, 'bandpass', 180 + i * 20, 180 + i * 20, .5 + i * .04); tone(60, t + .5, .3, 'sine', .6, 40); noise(t + .5, 1.1, 'highpass', 5000, 7000, .28); }
      else if (k === 'fan') { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, t + i * .09, i === 3 ? .45 : .12, 'square', .07); }); }
    } catch (e) { }
  }
  function matchFX(label, cb) {
    var w = document.createElement('div'); w.className = 'dl-mfx'; w.setAttribute('role', 'status');
    var Pt = linePts(LIVEPX.length > 1 ? LIVEPX : [1, 2, 1.5, 3], 400, 240, 20), pts = Pt.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    w.innerHTML = '<svg class="ln" viewBox="0 0 400 240" preserveAspectRatio="none" aria-hidden="true"><polyline points="' + pts + '" fill="none" style="stroke:var(--dla)" stroke-width="3" vector-effect="non-scaling-stroke" pathLength="1"/></svg><b>MATCH FOUND</b><span>' + esc(label) + '</span>';
    sfx(U.snd);
    document.body.appendChild(w);
    try { if (navigator.vibrate) navigator.vibrate([30, 40, 60]); } catch (e) { }
    setTimeout(function () { w.classList.add('out'); setTimeout(function () { w.remove(); cb(); }, 220); }, 950);
  }
  function card(who, tier, rec, recent, info, k, fireN, rdy) { return '<div class="dl-vs-s dl-vs-' + k + '"><div class="dl-emb ' + TIERS[tier][3] + '">' + TIERS[tier][0].replace(' 트레이더', '') + '</div><b class="dl-vs-n">' + esc(who) + (fireN >= 3 ? ' 🔥' + fireN : '') + '</b>' + tierTag(tier) + '<span class="dl-vs-rec">' + rec + '</span>' + wl(recent) + '<small>' + info + '</small><span class="dl-rdy' + (rdy ? ' on' : '') + '" id="dl-rdy-' + k + '">' + rdy + '</span></div>'; }
  function oppInfo(o) { return o.main ? '주 종목 ' + nm(o.main) + (o.avgLev ? ' · 평균 ' + o.avgLev + '배' : '') : '첫 대결이에요'; }
  function prepScreen() {
    var d = S && S.duel; if (!d || now() >= d.start || $('dl-prep')) return;
    U.prepOpen = d.id;
    var w = document.createElement('div'); w.className = 'dl-vsx'; w.id = 'dl-prep'; w.setAttribute('role', 'dialog'); w.setAttribute('aria-label', '대결 준비');
    var st = S.stats, o = d.opp;
    var paint0 = function () {
      var dd = S.duel; if (!dd || dd.id !== d.id) return;
      w.innerHTML = '<div class="dl-vs-in">' + dzSteps(['상대 찾기', '30초 준비', '시작'], 1) + '<p class="dl-vs-top">' + (dd.kind === 'bot' ? '명예전 · 판돈 없음' : '대결 확정 · 판돈 ' + usd(dd.stake) + ' USD씩') + ' · 24시간</p><div class="dl-vs-row">' +
        card('나', S.me.tier, st.w + '승 ' + st.l + '패', (S.recent || []).slice(0, 5), '이번 달 ' + sp(S.me.ret * 100, 1), 'a', st.streak, dd.rdy.me ? '준비 완료 ✓' : '준비 중…') + '<b class="dl-vs-x">VS</b>' +
        card(o.nick, o.tier, o.bot ? '하우스 트레이더' : o.w + '승 ' + o.l + '패', o.recent || [], oppInfo(o), 'b', o.streak || 0, dd.rdy.opp ? '준비 완료 ✓' : '준비 중…') +
        '</div><p class="dl-prep-msg' + (dd.rdy.opp && !dd.rdy.me ? ' hot' : '') + '" id="dl-pmsg">' + (dd.rdy.me && dd.rdy.opp ? '둘 다 준비 완료 ✓ · 30초가 끝나면 시작해요' : dd.rdy.opp ? '상대 준비 완료 ✓ · 당신만 남았어요' : '30초 뒤 자동으로 시작해요') + '</p>' +
        '<p class="dl-vs-cd" id="dl-cd">' + Math.max(0, Math.ceil((dd.start - now()) / 1000)) + '</p><button type="button" class="dl-cta" id="dl-ready"' + (dd.rdy.me ? ' disabled' : '') + '>' + (dd.rdy.me ? '준비 완료 ✓' : '준비 완료') + '</button><p class="dl-tiny" style="text-align:center">매칭은 확정이에요 · 그만두려면 시작 뒤 기권(패배) · 둘 다 10,000 USD 대결 지갑으로 시작</p></div>';
    };
    paint0();
    document.body.appendChild(w);
    w.addEventListener('click', function (e) { if (e.target.closest('#dl-ready')) { S.duel.rdy.me = true; paint0(); act('/p/d/ready', { id: d.id }); } });
    var tt = setInterval(function () {
      var dd = S && S.duel;
      if (!dd || dd.id !== d.id) { clearInterval(tt); w.remove(); return; }
      var L = (dd.start - now()) / 1000, c = $('dl-cd');
      if (c) c.textContent = L > 0 ? Math.ceil(L) : '시작!';
      var ra = $('dl-rdy-b'); if (ra && dd.rdy.opp && ra.textContent !== '준비 완료 ✓') paint0();
      if (L <= -0.4) { clearInterval(tt); w.remove(); NEXT = 0; load().then(function () { if (S && S.duel && S.duel.id === d.id) { useDuel(true); if (P()._setView) P()._setView('trade'); toast(dd.kind === 'bot' ? '명예전 시작! 대결 지갑 10,000 USD로 매매해요' : '대결 시작! 대결 지갑 10,000 USD로 매매해요'); } }); }
    }, 250);
  }
  function awayPop(d) {
    if (document.querySelector('.dl-pop')) return;
    var w = document.createElement('div'); w.className = 'dl-pop center'; w.setAttribute('role', 'dialog'); w.setAttribute('aria-modal', 'true'); w.setAttribute('aria-label', '자리를 비운 사이 대결이 시작됐어요');
    w.innerHTML = '<div class="dl-popc" style="text-align:center"><b class="dl-h">자리를 비운 사이 대결이 시작됐어요</b><p class="dl-p">상대 <b>' + esc(d.opp.nick) + '</b> ' + tierTag(d.opp.tier) + ' · 판돈 ' + usd(d.stake) + ' USD씩<br>시작한 지 <b>' + leftTxt(d.away / 1000) + '</b> · 남은 시간 ' + leftTxt(left(d)) + '</p><p class="dl-tiny">매칭되면 30초 뒤 무조건 시작해요 · 자리를 비운 시간은 본인 책임이에요</p><button type="button" class="dl-cta">지금 매매하러 가기</button></div>';
    document.body.appendChild(w);
    w.addEventListener('click', function (e) { if (e.target.closest('.dl-cta')) { w.remove(); useDuel(true); if (P()._setView) P()._setView('trade'); } });
  }
  function botOffer() {
    var w = document.createElement('div'); w.className = 'dl-pop dz-bsheet'; w.setAttribute('role', 'dialog'); w.setAttribute('aria-modal', 'true'); w.setAttribute('aria-label', '하우스 트레이더와 연습할까요');
    var inQ = !!(S && S.q);
    w.innerHTML = '<div class="dl-popc"><b class="dl-h">하우스 트레이더(봇)와 명예전</b><p class="dl-p">실제 시세로 매매하는 연습 상대예요. <b>바로 시작</b>하고, <b>판돈은 걸리지 않아요.</b> 전적은 「봇전」으로 따로 쌓여요.' + (inQ ? ' 시작하면 사람 상대 대기는 취소돼요.' : '') + '</p>' +
      BOTS.map(function (b) { var F = DZ_BOTF[b[0]] || ['#444', '', '', b[2]]; return '<button type="button" class="dl-botc dz-botc" data-bot="' + b[0] + '"><span class="face" style="background:' + F[0] + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + F[1] + '</svg></span><span class="t"><b>' + b[1] + '</b><small>' + F[3] + '</small></span><em>' + F[2] + '</em></button>'; }).join('') +
      (inQ ? '<button type="button" class="dl-ghost" data-bot="wait">사람 상대를 계속 기다리기</button>' : '<button type="button" class="dl-ghost" data-bot="wait">닫기</button>') + '</div>';
    document.body.appendChild(w);
    w.addEventListener('click', function (e) {
      var b = e.target.closest('[data-bot]'); if (!b) return; w.remove();
      if (b.dataset.bot === 'wait') { if (inQ) toast('계속 기다려요 · 잡히면 알려 드려요'); return; }
      act('/p/d/bot', { bot: b.dataset.bot });
    });
  }

  /* ── 결과 ── */
  function whyLine(r) {
    var t = r.mine || [];
    if (r.void) return r.why === 'declined' ? '상대가 도전장을 거절했어요.' : r.why === 'expired' ? '24시간 안에 아무도 수락하지 않아 도전장이 없어졌어요.' : r.why === 'cancelled' ? '도전장을 취소했어요.' : r.why === 'esc_' + r.me ? '매칭 순간 쓸 수 있는 돈이 모자라 취소됐어요. 판돈은 그대로예요.' : '상대 판돈 문제로 매칭이 취소됐어요. 판돈은 그대로예요.';
    if (r.ff) return '기권으로 대결이 끝났어요. 기권은 패배로 기록돼요.';
    if (/^ff_/.test(r.why || '')) return esc(r.opp.nick) + ' 님이 <b>기권</b>해서 이겼어요.';
    if (r.lb && r.win) return esc(r.opp.nick) + ' 님이 <b>강제 청산</b>되어 이겼어요.';
    if (r.la) return '내 포지션이 <b>강제 청산</b>되면서 대결이 끝났어요' + (r.lev ? '. 레버리지 ' + r.lev + '배는 작은 움직임에도 끝날 수 있어요.' : '.');
    if (!t.length) return r.draw ? '둘 다 수익률이 같아 무승부예요. 판돈은 각자 돌려받았어요.' : Math.abs(r.ra) > 1e-6 ? '열어 둔 포지션을 끝까지 들고 가서 <b>' + sp(r.ra * 100) + '</b>로 끝났어요.' + (r.win ? '' : ' 상대가 더 벌었어요.') : '이번 대결은 매매하지 않았어요. 수익률 0%로 끝났어요.';
    var worst = t.slice().sort(function (a, b) { return a.pnl - b.pnl; })[0], best = t.slice().sort(function (a, b) { return b.pnl - a.pnl; })[0];
    var dir = function (x) { return nm(x.sym) + ' ' + (x.side > 0 ? '롱' : '숏'); };
    if (r.draw) return '수익률이 같아 무승부예요. 판돈은 각자 돌려받았어요.';
    if (!r.win && worst.pnl < 0 && worst.why !== 'sl') return '손절 없이 버틴 ' + dir(worst) + '에서 <b>' + sp(worst.pnl / WALLET * 100) + '</b>를 잃은 게 가장 컸어요.';
    if (!r.win && worst.pnl >= 0) return '내 매매는 이익(' + sp(best.pnl / WALLET * 100) + ')이었지만 상대가 더 벌었어요.';
    if (!r.win) return '가장 아쉬운 매매는 ' + dir(worst) + '(' + sp(worst.pnl / WALLET * 100) + ')예요. 거래 ' + t.length + '번 중 ' + t.filter(function (x) { return x.pnl > 0; }).length + '번 이익.';
    if (best.pnl <= 0) return '둘 다 잃었지만 상대가 <b>' + sp(r.rb * 100, 1) + '</b>로 더 크게 잃어서 이겼어요. 덜 잃는 것도 실력이에요.';
    return '승부를 가른 매매는 ' + dir(best) + '(' + sp(best.pnl / WALLET * 100) + ')예요.';
  }
  function vResult() {
    var r = S.last, rev = function (list) {
      if (!list || !list.length) return '<div class="dl-ln"><span class="dl-muted">닫은 매매 없음</span></div>';
      return list.map(function (t) { return '<div class="dl-ln"><span><span class="dl-tag ' + (t.side > 0 ? 'u' : 'd') + '">' + (t.side > 0 ? '롱' : '숏') + (t.lev ? ' ' + t.lev + '배' : '') + '</span>' + nm(t.sym) + (t.why === 'liq' ? ' · 청산' : t.why === 'sl' ? ' · 손절' : t.why === 'tp' ? ' · 익절' : '') + '</span><b style="color:' + col(t.pnl) + '">' + (t.pnl >= 0 ? '+' : '−') + usd(Math.abs(t.pnl)) + ' USD</b></div>'; }).join('');
    };
    if (r.void) return '<section class="dl-res lose"><div class="dl-k">' + (r.opp.nick ? 'vs ' + esc(r.opp.nick) : '도전장') + '</div><h3>' + (/^esc_/.test(r.why || '') ? '매칭 취소' : '도전장 종료') + '</h3></section><div class="dl-why"><b>안내</b> · ' + whyLine(r) + '</div><button type="button" class="dl-ghost" data-dl="ack:' + esc(r.id) + '">닫기</button>';
    var st = S.stats;
    var dzA = !DZ_SEEN[r.id]; DZ_SEEN[r.id] = 1;
    var h = '<section class="dl-res dz-st ' + (r.win ? 'win' : 'lose') + '"><div class="dz-stamp' + (dzA ? ' anim' : '') + (r.draw ? ' draw' : r.win ? '' : ' lose') + '">' + (r.draw ? 'DRAW' : r.win ? 'WIN' : 'LOSE') + '</div><div class="dl-k">대결 종료 · vs ' + esc(r.opp.nick) + '</div><h3>' + (r.draw ? '무승부' : r.win ? '🏆 승리!' : '패배') + '</h3>' +
      '<div class="dl-pp" style="color:' + (r.win ? 'var(--dla)' : r.draw ? 'var(--tx2,#9A9AA2)' : col(-1)) + '">' + (r.honor ? '명예전 · 연습' : r.draw ? '±0 USD (판돈 반환)' : (r.win ? '+' : '−') + usd(r.stake) + ' USD') + '</div>' +
      '<p class="dl-p" style="text-align:center">나 <b style="color:' + col(r.ra) + '">' + sp(r.ra * 100) + '</b> · ' + esc(r.opp.nick) + ' <b style="color:' + col(r.rb) + '">' + sp(r.rb * 100) + '</b></p>' +
      '<p class="dl-tiny" style="text-align:center">' + (r.honor ? '판돈 없는 연습 대결이에요 · 봇전 ' + st.bw + '승 ' + st.bl + '패' : !r.paid ? '정산 중이에요 · 곧 모의투자 계좌에 반영돼요' : '딴 돈 · 잃은 돈은 모의투자 계좌 잔고에 반영돼요 · 랭킹 수익률은 그대로') + '</p></section>';
    (r.nb || []).forEach(function (id) { var b = BADGES.filter(function (x) { return x[0] === id; })[0]; if (b) h += '<div class="dl-newb">🏅 새 배지 · ' + b[1] + ' <span>' + b[2] + '</span></div>'; });
    h += '<div class="dl-why"><b>' + (r.win ? '이긴 이유' : r.draw ? '결과' : '진 이유') + '</b> · ' + whyLine(r) + '</div>';
    h += '<section class="dl-card"><div class="dl-sub" style="margin-top:0">포지션 공개 · 나</div>' + rev(r.mine) + '<div class="dl-sub">포지션 공개 · ' + esc(r.opp.nick) + '</div>' + rev(r.theirs) + '</section>';
    h += '<div class="dl-share"><div class="k">ANDRE99 DUEL</div><h4>' + (r.win ? '24시간 대결 승리' : '24시간 대결 결과') + '<br>' + sp(r.ra * 100, 1) + ' vs ' + sp(r.rb * 100, 1) + '</h4><div class="dl-tiny">' + TIERS[S.me.tier][0] + ' · ' + st.w + '승 ' + st.l + '패 · 대결 손익 ' + (st.net >= 0 ? '+' : '−') + usd(Math.abs(st.net)) + ' USD</div><div class="f"><span>가상 연습금 · 투자 권유 아님</span><span>안드레99</span></div></div><p class="dl-tiny">↑ 이 카드를 화면 캡처해 공유할 수 있어요</p>';
    if (!r.honor) h += '<div class="dl-gg"><span>상대에게 한마디</span>' + (r.gg.sent ? '<b>GG 보냈어요</b>' : '<button type="button" data-dl="gg:' + esc(r.id) + '">🤝 GG 보내기</button>') + (r.gg.got ? '<em>상대가 「GG」를 보냈어요</em>' : '') + '</div>';
    if (r.honor) h += '<button type="button" class="dl-cta" data-dl="human">⚔ 이제 사람과 붙어 볼까요?</button>';
    if (!r.win && !r.draw && !r.honor && S.lostTo) h += '<button type="button" class="dl-cta" data-dl="revenge">⚔ 복수전 도전장 (같은 상대)</button>';
    h += '<button type="button" class="dl-ghost" data-dl="ack:' + esc(r.id) + '">결과 닫기</button>';
    return h;
  }
  /* ── 관전 (로그인 없이) ── */
  function vSpect() {
    var h = '<div class="dl-spect"><b>🔗 관전 중</b> · 로그인 없이 볼 수 있어요</div>';
    if (!VIEW) return h + '<p class="dl-tiny" style="text-align:center">불러오는 중…</p>';
    if (VIEW.err) h += '<p class="dl-note">대결을 찾지 못했어요. 끝난 지 오래됐거나 주소가 달라요.</p>';
    else if (VIEW.invite) {
      var v = VIEW.d;
      h += '<section class="dl-card dl-inv"><b class="dl-h">⚔ ' + esc(v.na) + ' 님의 도전장</b><p class="dl-p">' + tierTag(v.ta) + ' · 판돈 ' + usd(v.stake) + ' USD씩 · 수락하면 30초 뒤 24시간 대결이 시작돼요</p>' +
        (logged() ? '<button type="button" class="dl-cta" data-dl="accept:' + esc(v.id) + '">수락 · 30초 뒤 시작</button>' : '<button type="button" class="dl-cta" data-dl="login">로그인하고 수락하기</button>') + '</section>';
    } else if (VIEW.d) {
      var x = VIEW.d;
      if (x.done) h += '<section class="dl-res ' + (x.win ? 'win' : '') + '"><div class="dl-k">대결 종료</div><h3>' + (x.win ? esc(x.win === 'a' ? x.na : x.nb) + ' 승리' : '무승부') + '</h3><p class="dl-p" style="text-align:center">' + esc(x.na) + ' <b style="color:' + col(x.ra) + '">' + sp(x.ra * 100) + '</b> · ' + esc(x.nb) + ' <b style="color:' + col(x.rb) + '">' + sp(x.rb * 100) + '</b></p></section>';
      else h += '<div id="dl-big">' + bigBoard(x, '⚔ 관전') + '</div>';
    }
    h += logged() ? '' : '<button type="button" class="dl-cta" data-dl="login">안드레99 가입하고 나도 도전하기 →</button>';
    h += '<button type="button" class="dl-ghost" data-dl="unspect">' + (logged() ? '내 대결 화면으로' : '대결 첫 화면으로') + '</button>';
    return h + foot();
  }

  /* ── [프로필] 탭 ── */
  function assetHTML() {
    var me = S.me, lock = S.locked || 0, av = Math.max(0, me.avail), posM = Math.max(0, me.eq - av), total = me.eq + lock;
    var seg = function (v, c) { return '<i style="width:' + (total > 0 ? Math.max(0, v / total * 100) : 0).toFixed(1) + '%;background:' + c + '"></i>'; };
    return '<section class="dl-card dl-asset"><div class="dl-row"><span class="dl-sub" style="margin:0">Asset · 내 모의투자 자산 전체</span><span class="dl-tiny" style="margin:0">가상 USD</span></div>' +
      '<b class="dl-assetv">' + usd(total) + ' <small>USD</small></b><p class="dl-p" style="margin-top:2px">이번 달 실전 수익률 <b style="color:' + col(me.ret) + '">' + sp(me.ret * 100) + '</b></p>' +
      '<div class="dl-abar">' + seg(av, '#3B8FD9') + seg(posM, 'var(--dla)') + seg(lock, 'var(--dlo)') + '</div>' +
      '<div class="dl-aleg"><span><i style="background:#3B8FD9"></i>사용 가능 <b>' + usd(av) + '</b></span><span><i style="background:var(--dla)"></i>포지션 <b>' + usd(posM) + '</b></span><span><i style="background:var(--dlo)"></i>대결 묶임 <b>' + usd(lock) + '</b></span></div>' +
      '<p class="dl-tiny">대결 지갑(10,000)은 대결용이라 내 자산에 넣지 않아요</p></section>';
  }
  function nextBar(t) {
    if (t >= 4) return '<p class="dl-tiny">' + (t === 5 ? '레전드 · 그달 1~3위' : '탑 트레이더 · 다음은 그달 1~3위(레전드)') + '</p>';
    var lo = TIERS[t][1] || 0, hi = TIERS[t + 1][1], r = S.me.ret * 100, pc = Math.max(0, Math.min(100, (r - lo) / (hi - lo) * 100));
    return '<div class="dl-next"><div class="dl-row"><span>다음 티어 ' + tierTag(t + 1) + '까지</span><b>+' + Math.max(0, hi - r).toFixed(1) + '%p</b></div><div class="dl-nbar"><i style="width:' + pc.toFixed(1) + '%"></i></div><small>' + sp(r, 1) + ' / +' + hi + '%</small></div>';
  }
  function dzNext(t) {   /* 다음 티어까지 = 원형 진행률 */
    if (t >= 4) return '<p class="dl-tiny">' + (t === 5 ? '레전드 · 그달 1~3위' : '탑 트레이더 · 다음은 그달 1~3위(레전드)') + '</p>';
    var lo = TIERS[t][1] || 0, hi = TIERS[t + 1][1], r = S.me.ret * 100, pc = Math.max(0, Math.min(1, (r - lo) / (hi - lo)));
    var rr = 24, c = 2 * Math.PI * rr;
    return '<div class="dz-next"><svg width="58" height="58" viewBox="0 0 58 58" aria-hidden="true"><circle cx="29" cy="29" r="24" fill="none" stroke="#2A2A2E" stroke-width="6"/><circle cx="29" cy="29" r="24" fill="none" style="stroke:var(--dla)" stroke-width="6" stroke-linecap="round" stroke-dasharray="' + (c * pc).toFixed(1) + ' ' + c.toFixed(1) + '" transform="rotate(-90 29 29)"/><text x="29" y="33" text-anchor="middle" font-size="12" font-weight="800" fill="#F3F3F4">' + Math.round(pc * 100) + '%</text></svg><div><span>다음 티어 ' + tierTag(t + 1) + '까지</span><b>+' + Math.max(0, hi - r).toFixed(1) + '%p</b><small>' + sp(r, 1) + ' / +' + hi + '%</small></div></div>';
  }
  function dzRisk() {   /* 위험 표시 = 지금 열린 포지션의 평균 레버리지(증거금 가중) */
    var po = (P() && P()._pos && P()._pos()) || {}, m = 0, w = 0;
    Object.keys(po).forEach(function (k) { var p = po[k] || {}, mg = +p.margin || 0, lv = +p.lev || 1; m += mg * lv; w += mg; });
    var lev = w > 0 ? m / w : 0, lv = !w ? 0 : lev <= 2 ? 1 : lev <= 5 ? 2 : lev <= 10 ? 3 : 4, nm = ['', '낮음', '보통', '높음', '아주 높음'][lv];
    return '<section class="dl-card dz-risk"><div class="dl-row"><span class="dl-sub" style="margin:0">위험도 · ' + (w ? '열린 포지션 평균 레버리지 ' + (Math.round(lev * 10) / 10) + '배' : '지금 열린 포지션 없음') + '</span><b>' + (nm || '—') + '</b></div><div class="dz-strg l' + lv + '"><i></i><i></i><i></i><i></i></div><div class="dz-strl"><span>낮음</span><span>높음</span></div><p class="dl-tiny">레버리지가 높을수록 작은 움직임에도 청산될 수 있어요 · 수익률 순위에는 반영하지 않아요</p></section>';
  }
  function profile() {
    var host = $('pp-pfv'); if (!host) return;
    if (!logged()) { host.innerHTML = '<section class="dl-card"><b class="dl-h">프로필</b><p class="dl-p">로그인하면 티어 · 대결 전적 · 배지 · 매매 기록을 볼 수 있어요.</p><button type="button" class="dl-cta" data-dl="login">로그인</button></section>'; return; }
    if (!S) { host.innerHTML = '<p class="dl-tiny" style="text-align:center;margin-top:24px">불러오는 중…</p>'; load(); return; }
    var t = S.me.tier, r10 = S.recent || [], w10 = r10.filter(function (x) { return x === 1; }).length, l10 = r10.filter(function (x) { return x === 0; }).length, st = S.stats, nick = (P()._me() || {}).nick || '';
    var h = '<section class="dl-card dl-pfh dz-avh"><div class="dz-avc ' + TIERS[t][3] + '" aria-hidden="true">' + esc((nick || '나').charAt(0)) + '</div><b class="dl-h">' + esc(nick) + ' ' + fire(st.streak) + '</b><div>' + tierTag(t) + '</div><p class="dl-p">이번 달 실전 <b style="color:' + col(S.me.ret) + '">' + sp(S.me.ret * 100) + '</b></p>' + dzNext(t) + '</section>';
    h += dzRisk();
    h += assetHTML();
    h += '<section class="dl-card"><div class="dl-row"><b class="dl-sub" style="margin:0">최근 10판 · ' + w10 + '승 ' + l10 + '패</b><span class="dl-tiny" style="margin:0">왼쪽이 최근</span></div><div class="dl-r10">' +
      Array.apply(null, Array(10)).map(function (_, i) { var x = r10[i]; return '<i class="' + (x == null ? 'e' : x === 1 ? 'w' : x === 0 ? 'l' : 'e') + '">' + (x == null ? '' : x === 1 ? '승' : x === 0 ? '패' : '무') + '</i>'; }).join('') + '</div></section>';
    h += vRecord();
    h += '<div class="dl-lbl">매매 기록 · 모의투자 계좌</div><div class="dz-range" id="dz-range"><div class="ch"><button type="button" data-dzr="7">7일</button><button type="button" data-dzr="30">30일</button><button type="button" data-dzr="0" aria-pressed="true">전체</button></div><div class="dt"><label><span>시작</span><input type="date" id="dz-rf"></label><i>~</i><label><span>끝</span><input type="date" id="dz-rt"></label></div><p class="dl-tiny" id="dz-rn"></p></div><div id="dl-pftr" class="dl-card"><p class="dl-tiny">불러오는 중…</p></div>';
    h += '<div class="dl-lbl">계정</div><div class="dl-card pad0 dz-menu"><button type="button" data-dzm="pw">비밀번호 바꾸기<span>›</span></button><button type="button" data-dzm="terms">이용약관 · 운영방침<span>›</span></button><button type="button" data-dzm="quit">탈퇴 안내<span>›</span></button><button type="button" data-dzm="out" class="out">로그아웃</button></div>';
    host.innerHTML = h;
    if (nick && P()._profileHTML) pub('/p/trader?nick=' + encodeURIComponent(nick)).then(function (x) { var el = $('dl-pftr'); if (!el) return; el.innerHTML = x.s === 200 ? '<div style="display:grid;gap:10px">' + P()._profileHTML(x.j) + '</div><p class="dl-tiny">랭킹에서 닉네임을 누르면 보이는 「트레이더 프로필」과 같은 내용이에요</p>' : '<p class="dl-tiny">매매 기록을 불러오지 못했어요</p>'; });
  }
  function vRecord() {
    var t = S.me.tier, st = S.stats, n = Object.keys(st.badges || {}).length;
    var h = '<section class="dl-card"><div class="dl-row"><b class="dl-h">내 대결 기록</b>' + tierTag(t) + '</div>' +
      '<div class="dl-stats"><div>전적<b>' + st.w + '승 ' + st.l + '패' + (st.d ? ' ' + st.d + '무' : '') + '</b></div><div>받은 GG<b>🤝 ' + st.gg + '</b></div><div>대결 손익<b style="color:' + col(st.net) + '">' + (st.net >= 0 ? '+' : '−') + usd(Math.abs(st.net)) + '</b></div><div>최고 연승<b>' + st.best + '</b></div></div>' +
      (st.bw || st.bl ? '<p class="dl-tiny">봇전(명예전) ' + st.bw + '승 ' + st.bl + '패 · 전적과 따로 쌓여요</p>' : '') +
      '<div class="dl-sub dz-bh">받은 배지 ' + n + '<button type="button" class="dz-ball" data-dzb="1" aria-expanded="false">전체 ' + BADGES.length + '개 보기 ›</button></div><div class="dl-bdgs dz-got">' + (n ? BADGES.filter(function (b) { return (st.badges || {})[b[0]]; }).map(function (b) { return '<div class="dl-bdg on">' + b[1] + '<small>' + b[2] + '</small></div>'; }).join('') : '<p class="dl-tiny" style="grid-column:1/-1">아직 받은 배지가 없어요 · 첫 대결에 참가하면 「첫 출전」</p>') + '</div><div class="dl-bdgs dz-all" hidden>' + BADGES.map(function (b) { return '<div class="dl-bdg ' + ((st.badges || {})[b[0]] ? 'on' : '') + '">' + b[1] + '<small>' + b[2] + '</small></div>'; }).join('') + '</div>' +
      '<details class="dz-acc dz-tiers"><summary>티어 표 · 이번 달 실전 수익률 <b style="color:' + col(S.me.ret) + '">' + sp(S.me.ret * 100) + '</b></summary><div class="dl-ladder">' +
      TIERS.map(function (x, i) { return '<div class="dl-ln' + (i === t ? ' me' : '') + '"><span>' + tierTag(i) + '</span><span class="dl-tiny">' + (x[1] == null ? '그달 1~3위' : x[1] ? '+' + x[1] + '% 이상' : '참여') + '</span><span class="dl-tiny">판돈 최대 ' + usd(x[2]) + (i === t ? ' ← 나' : '') + '</span></div>'; }).reverse().join('') + '</div></details></section>';
    if ((S.hist || []).length) h += '<section class="dl-card"><div class="dl-sub" style="margin-top:0">최근 대결</div>' + S.hist.slice(0, 10).map(function (x) { return '<div class="dl-ln"><span>vs ' + esc(x.opp) + (x.honor ? ' · 명예전' : '') + '</span><b style="color:' + (x.draw ? 'var(--tx2)' : x.win ? 'var(--dla)' : col(-1)) + '">' + (x.draw ? '무' : x.win ? '승' : '패') + (x.honor ? '' : (x.draw ? ' ±' : x.win ? ' +' : ' −') + usd(x.stake)) + ' · ' + sp((x.ra || 0) * 100, 1) + ' vs ' + sp((x.rb || 0) * 100, 1) + '</b></div>'; }).join('') + '</section>';
    return h;
  }
  /* ── 승급 · 강등 (그림 파일 없이 CSS만) ── */
  function promo(from, to) {
    if (to <= from || document.querySelector('.dl-promo')) return;
    var w = document.createElement('div'); w.className = 'dl-promo'; w.setAttribute('role', 'dialog'); w.setAttribute('aria-modal', 'true'); w.setAttribute('aria-label', '승급');
    w.innerHTML = '<div class="dl-pm-in"><p class="dl-pm-k">PROMOTION</p><div class="dl-emb huge ' + TIERS[to][3] + '">' + TIERS[to][0].replace(' 트레이더', '') + '</div><h3 class="dl-pm-h">승급!</h3><p class="dl-pm-ft">' + tierTag(from) + ' → ' + tierTag(to) + '</p>' +
      '<p class="dl-p" style="text-align:center">' + (TIERS[to][1] ? '이번 달 실전 수익률 +' + TIERS[to][1] + '% 돌파' : '이번 달 1~3위') + ' · 한 판 최대 판돈 <b>' + usd(TIERS[from][2]) + ' → ' + usd(TIERS[to][2]) + ' USD</b></p>' +
      '<div class="dl-share" style="text-align:left"><div class="k">ANDRE99 PROMOTION</div><h4>' + TIERS[to][0] + ' 승급</h4><div class="dl-tiny">' + esc((P()._me() || {}).nick || '') + ' · 이번 달 ' + sp(S.me.ret * 100, 1) + ' · 대결 ' + S.stats.w + '승 ' + S.stats.l + '패</div><div class="f"><span>가상 연습금 · 투자 권유 아님</span><span>안드레99</span></div></div>' +
      '<div style="margin-top:10px;text-align:left">' + nextBar(to) + '</div><button type="button" class="dl-cta">확인</button></div>';
    document.body.appendChild(w);
    w.addEventListener('click', function (e) { if (e.target.closest('.dl-cta')) w.remove(); });
  }
  function demote(from, to) {
    if (to >= from || document.querySelector('.dl-promo')) return;
    var w = document.createElement('div'); w.className = 'dl-promo down'; w.setAttribute('role', 'dialog'); w.setAttribute('aria-modal', 'true'); w.setAttribute('aria-label', '강등');
    w.innerHTML = '<div class="dl-pm-in"><p class="dl-pm-k" style="color:var(--dlo)">TIER DOWN</p><div class="dl-emb big ' + TIERS[to][3] + '" style="margin:10px auto 0">' + TIERS[to][0].replace(' 트레이더', '') + '</div><h3 class="dl-pm-h" style="font-size:24px">아쉽게 강등됐어요</h3><p class="dl-pm-ft">' + tierTag(from) + ' → ' + tierTag(to) + '</p>' +
      '<p class="dl-p" style="text-align:center">' + (TIERS[from][1] ? '이번 달 실전 수익률이 +' + TIERS[from][1] + '% 아래로 내려갔어요.' : '이번 달 1~3위에서 벗어났어요.') + ' <b>다시 넘으면 바로 복귀</b>해요.<br>한 판 최대 판돈 ' + usd(TIERS[from][2]) + ' → ' + usd(TIERS[to][2]) + ' USD</p>' +
      '<p class="dl-why" style="text-align:left"><b>한 줄 점검</b> · 최근 손실이 컸던 매매를 「프로필 › 매매 기록」에서 확인해 보세요.</p><button type="button" class="dl-cta">다시 올라가기</button></div>';
    document.body.appendChild(w);
    w.addEventListener('click', function (e) { if (e.target.closest('.dl-cta')) w.remove(); });
  }

  /* ── 그리기 ── */
  function render() {
    var host = $('pp-dlv'); if (!host) return;
    var f = document.activeElement && document.activeElement.id;
    host.innerHTML = vDuel();
    if (f === 'dl-nick') { var n = $('dl-nick'); if (n) { n.focus(); n.setSelectionRange(n.value.length, n.value.length); } }
    drawQ(); syncBadge();
  }
  function paint() {
    var v = P() && P()._view ? P()._view() : '';
    if (v === 'duel') render(); else if (v === 'prof') profile();
    syncTrade();
  }
  function soft() {
    var host = $('pp-dlv'); if (!host || host.hidden) return;
    if (S && S.q) qSoft();
    var m = $('dl-mine'); if (m && S && S.duel) m.innerHTML = mineBoard();
  }
  /* ── 거래 화면: 지갑 고르기 · 위쪽 띠 ── */
  function stripHTML() {
    var d = S.duel, ra = myRet(d), rb = oppRet(d), L = left(d);
    return '<button type="button" class="dl-strip' + (L <= HOT ? ' hot' : '') + (Date.now() - U.flash < 2500 ? ' flash' : '') + '" data-dl="toggle" aria-expanded="' + U.open + '"><span>⚔ 나 <b style="color:' + col(ra) + '">' + sp(ra) + '</b> <em>vs</em> <b style="color:' + col(rb) + '">' + sp(rb) + '</b> ' + esc(d.opp.nick) + '</span><span class="dl-num">' + (L <= HOT ? '막판 ' : '') + leftTxt(L) + ' ' + (U.open ? '▴' : '▾') + '</span></button>' +
      (U.open ? '<div class="dl-drop">' + mineBoard() + '<div class="dl-two"><button type="button" class="dl-ghost" data-dl="copylink">🔗 관전 링크 복사</button><button type="button" class="dl-ghost" data-dl="goduel">대결 탭에서 크게 →</button></div></div>' : '');
  }
  function accHTML() {
    var d = S.duel, me = S.me, on = window.A99_DUELACCT === d.id;
    return '<div class="dl-acc" role="group" aria-label="지갑 고르기"><button type="button" data-dl="acct:real" aria-pressed="' + !on + '">모의투자 ' + usd(on ? me.eq : (P()._equity ? P()._equity() : me.eq)) + (S.locked ? ' · 묶임 ' + usd(S.locked) : '') + '</button><button type="button" data-dl="acct:duel" aria-pressed="' + on + '">⚔ 대결 ' + usd(myEq(d)) + '</button></div>';
  }
  function ensure(id, before) {
    var el = $(id);
    if (!el) { el = document.createElement('div'); el.id = id; }
    if (before && before.parentNode && el.nextSibling !== before) before.parentNode.insertBefore(el, before);
    return el;
  }
  function syncTrade() {
    var acct = $('pp-acct'), buy = $('pp-buy');
    if (!acct || !buy) return;
    var d = S && S.duel, on = !!(d && now() >= d.start), duelW = on && window.A99_DUELACCT === d.id;
    document.documentElement.classList.toggle('dl-duelw', duelW);
    var acc = ensure('dl-accw', acct); acc.innerHTML = on ? accHTML() : ''; acc.hidden = !on;
    var top = ensure('dl-st-top', acct);
    top.innerHTML = ''; top.hidden = true;
    var g = ensure('dl-guard', buy);
    if (duelW) {
      top.innerHTML = stripHTML(); top.hidden = false;
      var spc = P()._sp && P()._sp()[P()._sym()], stock = spc && spc.cat && spc.cat !== 'crypto';
      g.hidden = false;
      g.innerHTML = '<p class="dl-guard' + (stock ? ' warn' : '') + '">' + (stock ? '⚠ 대결은 암호화폐만 거래할 수 있어요 · 종목 이름을 눌러 코인으로 바꿔 주세요' : '⚔ 대결 지갑으로 주문해요') + '</p>';
    } else { g.hidden = true; g.innerHTML = ''; }
    syncBadge();
  }
  function syncTradeSoft() {
    var acc = $('dl-accw'); if (!acc || acc.hidden || !S || !S.duel) return;
    var bs = acc.querySelectorAll('button'), d = S.duel, on = window.A99_DUELACCT === d.id;
    if (bs.length === 2) { bs[0].textContent = '모의투자 ' + usd(on ? S.me.eq : (P()._equity ? P()._equity() : S.me.eq)) + (S.locked ? ' · 묶임 ' + usd(S.locked) : ''); bs[1].textContent = '⚔ 대결 ' + usd(myEq(d)); }
    var el = $('dl-st-top'); if (!el || el.hidden) return;
    var s = el.querySelector('.dl-strip'); if (!s) return;
    var tmp = document.createElement('div'); tmp.innerHTML = stripHTML();
    var ns = tmp.querySelector('.dl-strip'); s.className = ns.className; s.innerHTML = ns.innerHTML;
    var dr = el.querySelector('.dl-drop'), nd = tmp.querySelector('.dl-drop');
    if (dr && nd) { var b0 = dr.querySelector('.dl-board'), b1 = nd.querySelector('.dl-board'); if (b0 && b1) b0.outerHTML = b1.outerHTML; }
  }
  function syncBadge() {
    var b = $('pp-dlive'); if (!b) return;
    var d = S && S.duel;
    b.textContent = d ? (now() < d.start ? '곧 시작' : '내 대결') : S && S.inv && S.inv.inc.length ? '도전장 ' + S.inv.inc.length : S && S.q ? '찾는 중' : (S ? S.nLive : PUB ? PUB.n : 0) ? 'LIVE ' + (S ? S.nLive : PUB.n) : '';
  }
  /* ── 규칙 팝업 ── */
  function rulePop(go) {
    var t = S ? S.me.tier : 0;
    var w = document.createElement('div'); w.className = 'dl-pop'; w.setAttribute('role', 'dialog'); w.setAttribute('aria-modal', 'true'); w.setAttribute('aria-label', '대결 · 티어 규칙');
    w.innerHTML = '<div class="dl-popc"><b class="dl-h">대결 · 티어 규칙</b><ol>' +
      '<li><b>티어</b>는 이번 달 <b>모의투자 계좌 수익률</b>로만 정해져요. 레전드는 그달 1~3위(이번 달 수익이 있을 때).</li>' +
      '<li><b>대결</b>은 따로 받는 <b>10,000 USD 대결 지갑</b>으로 24시간 해요. 대결 수익률은 티어에 들어가지 않아요.</li>' +
      '<li><b>판돈</b>은 매칭되는 순간 모의투자 계좌에서 떼어 두고(묶임), <b>이긴 사람이 모두</b> 가져가요. 무승부면 각자 돌려받아요.</li>' +
      '<li>딴 돈은 잔고에 들어오지만 <b>랭킹 수익률에는 안 들어가요.</b> 부계정 몰아주기를 막기 위해서예요.</li>' +
      '<li><b>티어가 높을수록 큰 판</b>에 들어가요(개미 1,000 ~ 레전드 10,000). 어느 티어든 잔고의 30%까지만 걸 수 있어요. 지금 나: ' + TIERS[t][0] + ' · 최대 ' + usd(TIERS[t][2]) + '</li>' +
      '<li>매칭되면 확정이고 <b>30초 뒤 무조건 시작</b>해요(자리를 비워도). <b>청산되거나 기권하면 패배</b>예요. 대결은 <b>암호화폐만</b> 거래해요.</li>' +
      '<li>가상 연습금이에요. 사고팔거나 현금으로 바꿀 수 없고, 상금 · 경품도 없어요.</li></ol>' +
      (go ? '<label class="dl-chk"><input type="checkbox" id="dl-norule"> 다시 보지 않기</label><button type="button" class="dl-cta" data-pop="go">확인하고 계속</button><button type="button" class="dl-ghost" data-pop="x">취소</button>' : '<button type="button" class="dl-cta" data-pop="x">확인</button>') + '</div>';
    document.body.appendChild(w);
    w.addEventListener('click', function (e) {
      var b = e.target.closest('[data-pop]'); if (!b && e.target !== w) return;
      if (b && b.dataset.pop === 'go') { var c = $('dl-norule'); if (c && c.checked) { U.seenRule = true; lsSet('a99.duel.rule', '1'); } w.remove(); go(); return; }
      w.remove();
    });
  }
  function apply() {
    var run = function () {
      if (U.mode === 'auto') return act('/p/d/join', { stake: U.stake }).then(function (x) { if (x && x.j && x.j.q) toast('상대를 찾고 있어요 · 앱을 꺼도 이어져요'); });
      if (U.mode === 'nick' && !U.nick.trim()) { toast('상대 닉네임을 적어 주세요', true); return; }
      return act('/p/d/challenge', U.mode === 'nick' ? { nick: U.nick.trim(), stake: U.stake } : { stake: U.stake }).then(function (x) {
        if (!x || !x.j || !x.j.made) return;
        if (x.j.made.link) copy(SITE + '?duel=' + x.j.made.id, '도전장 링크를 복사했어요 · 친구에게 보내 주세요');
        else toast('도전장을 보냈어요 · 상대가 수락하면 30초 뒤 시작해요');
      });
    };
    if (!U.seenRule) rulePop(run); else run();
  }
  function copy(t, msg) {
    var done = function () { toast(msg + ' · ' + t); };
    try { navigator.clipboard.writeText(t).then(done, function () { toast('링크: ' + t); }); } catch (e) { toast('링크: ' + t); }
  }
  /* ── 누르기 ── */
  function onAct(k) {
    var a = k.split(':'), v = a[1];
    if (a[0] === 'mode') { U.mode = v; render(); return; }
    if (a[0] === 'stake') { U.stake = +v; render(); return; }
    if (a[0] === 'acct') { useDuel(v === 'duel'); return; }
    if (a[0] === 'accept') { act('/p/d/accept', { id: v }).then(function (x) { if (x && x.j && x.j.note === 'lowered') toast('내 한도에 맞춰 판돈을 낮췄어요'); if (VIEWID === v) { VIEWID = null; VIEW = null; } }); return; }
    if (a[0] === 'decline') { act('/p/d/decline', { id: v }); return; }
    if (a[0] === 'ack') { act('/p/d/ack', { id: v }); return; }
    if (a[0] === 'gg') { act('/p/d/gg', { id: v }, 'GG를 보냈어요'); return; }
    if (a[0] === 'watch') { VIEWID = v; VIEW = null; VIEWAT = 0; loadView(); render(); try { window.scrollTo(0, 0); } catch (e) { } return; }
    if (a[0] === 'invlink') { copy(SITE + '?duel=' + v, '도전장 링크를 복사했어요'); return; }
    if (a[0] === 'pick') {
      var id = v, side = a[2]; if (U.picked[id]) return;
      U.picked[id] = side; lsSet('a99.duel.picks', JSON.stringify(U.picked));
      fetch(API + '/p/d/pick', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ id: id, side: side }) }).catch(function () { });
      toast('찍었어요 · 결과는 대결이 끝나면 확인할 수 있어요'); render(); return;
    }
    if (k === 'apply') { if (S && (S.q || S.duel)) return; apply(); return; }
    if (k === 'rule') { rulePop(null); return; }
    if (k === 'revenge') { if (!S || !S.lostTo) return; U.mode = 'nick'; U.nick = S.lostTo; render(); try { $('pp-dlv').scrollIntoView(); } catch (e) { } toast('금액을 고르고 「도전장 보내기」를 눌러 주세요'); return; }
    if (k === 'qcancel') { act('/p/d/leave', {}, '대기를 취소했어요'); return; }
    if (k === 'botask') { botOffer(); return; }
    if (k === 'prep') { prepScreen(); return; }
    if (k === 'gotrade') { useDuel(true, true); if (P()._setView) P()._setView('trade'); syncTrade(); return; }
    if (k === 'goduel') { U.open = false; if (P()._setView) P()._setView('duel'); syncTrade(); return; }
    if (k === 'toggle') { U.open = !U.open; syncTrade(); return; }
    if (k === 'copylink') { if (S && S.duel) copy(SITE + '?duel=' + S.duel.id, '관전 링크를 복사했어요'); return; }
    if (k === 'ffask') { U.ffAsk = true; var w0 = $('dl-voidw'); if (w0) w0.innerHTML = voidHTML(); return; }
    if (k === 'ffno') { U.ffAsk = false; var w1 = $('dl-voidw'); if (w1) w1.innerHTML = voidHTML(); return; }
    if (k === 'ffyes') { U.ffAsk = false; if (S && S.duel) act('/p/d/forfeit', { id: S.duel.id }); return; }
    if (k === 'human') { if (S && S.last) act('/p/d/ack', { id: S.last.id }); U.mode = 'auto'; return; }
    if (k === 'goprof') { if (P()._setView) P()._setView('prof'); return; }
    if (k === 'login') { var b = document.querySelector('[data-pauth="login"]') || $('pp-me'); if (b) b.click(); else if (P()._setView) P()._setView('trade'); return; }
    if (k === 'unspect') { VIEWID = null; VIEW = null; try { history.replaceState(null, '', location.pathname); } catch (e) { } render(); return; }
  }
  document.addEventListener('click', function (e) { var b = e.target.closest('[data-dl]'); if (!b || b.disabled) return; onAct(b.dataset.dl); });
  document.addEventListener('change', function (e) { var t = e.target; if (t && t.id === 'dz-stake') onAct('stake:' + t.value); });   /* 11.12-A 판돈 드롭다운 */
  document.addEventListener('input', function (e) { if (e.target.id === 'dl-nick') U.nick = e.target.value; });
  document.addEventListener('change', function (e) { if (e.target.id === 'dl-snd') { U.snd = e.target.value; lsSet('a99.duel.snd2', U.snd); sfx(U.snd); } });
  /* ⚙ 설정 · 체결음 옆: 매칭 효과음 */
  function sndBox() {
    return '<div class="pp-box"><b>대결 매칭 효과음</b><select id="dl-snd" class="dl-sel" aria-label="대결 매칭 효과음">' + SFX.map(function (x) { return '<option value="' + x[0] + '"' + (U.snd === x[0] ? ' selected' : '') + '>' + x[1] + '</option>'; }).join('') + '</select><p class="hint">상대가 잡히는 순간(MATCH FOUND) 울려요. 고르면 미리 들려줘요. 이 기기에 저장돼요.</p></div>';
  }

  /* ── 1초 시계 ── */
  setInterval(function () {
    var b = btcNow(); if (b > 0) { LIVEPX.push(b); if (LIVEPX.length > 240) LIVEPX.shift(); }
    if (!P() || !$('pp-dlv')) return;
    if (!document.hidden && Date.now() >= NEXT) { NEXT = Date.now() + due(); load(); if (VIEWID) loadView(); }
    if (!S) { syncBadge(); return; }
    var d = S.duel;
    if (d && now() >= d.start && now() < d.end) {
      var L = left(d);
      if (L <= HOT && !U.hotShown[d.id]) { U.hotShown[d.id] = 1; toast('🔥 막판 10분! 대결 종료까지 10분 남았어요'); }
      if (now() >= d.end && !U.hotShown['e' + d.id]) { U.hotShown['e' + d.id] = 1; NEXT = Date.now() + 20000; }
    }
    soft();
    if (d) syncTradeSoft();
    if (d && now() >= d.end && $('dl-mine')) { var m = $('dl-mine'); if (m && !m.getAttribute('data-end')) { m.setAttribute('data-end', '1'); m.insertAdjacentHTML('afterend', '<p class="dl-note">시간이 끝났어요 · 1분 안에 정산돼요</p>'); } }
  }, 1000);
  /* 거래 화면이 다시 그려지거나 보기 · 종목이 바뀌면 띠를 다시 붙인다 */
  var lastKey = '';
  setInterval(function () {
    if (!P() || !P()._view) return;
    var key = P()._view() + '|' + window.A99_DUELACCT + '|' + P()._sym() + '|' + !!(S && S.duel) + '|' + document.documentElement.classList.contains('pp-theme') + '|' + !!$('dl-accw') + '|' + (S && S.duel && now() >= S.duel.start);
    if (key !== lastKey) { lastKey = key; syncTrade(); }
  }, 400);

  window.A99Duel = { render: function () { if (VIEWID) loadView(); render(); }, profile: profile, sync: syncTrade, sndBox: sndBox, kick: function () { NEXT = 0; }, spect: function () { return VIEWID; } };
})();

/* ══ 2026.11.12-A 고른 부품 층 · 트레이딩(대결 · 랭킹 · 프로필) — 주문 화면은 손대지 않는다 ══ */
(function () {
  'use strict';
  if (document.getElementById('pz-css')) return;
  var css = [
    /* 트레이딩 위 탭 = 종목 탭과 같은 밑줄 · 프로필 탭은 오른쪽 위 ⋮ 메뉴로 */
    '.pp-vw{gap:0 !important;padding:0 2px}',
    '.pp-vw button{font-size:15px !important;font-weight:700 !important;padding:0 13px !important;min-height:44px}',
    '.pp-vw button[data-pview="prof"]{display:none !important}',
    /* 단계 표시 */
    '.dz-steps{display:flex;list-style:none;margin:12px 0 4px;padding:0}',
    '.dz-steps li{flex:1;text-align:center;font-size:11.5px;color:var(--tx3,#6B6B70);position:relative}',
    '.dz-steps li i{display:grid;place-items:center;width:22px;height:22px;margin:0 auto 4px;border-radius:50%;background:#26262A;font-style:normal;font-size:11px;font-weight:800;position:relative;z-index:1;color:#C9C9CE}',
    '.dz-steps li.done i{background:var(--dla,#F5C542);color:#16130A}',
    '.dz-steps li.cur i{background:#0B0B0C;box-shadow:inset 0 0 0 2px var(--dla,#F5C542);color:var(--dla,#F5C542)}',
    '.dz-steps li.cur{color:#FAFAFA;font-weight:700}',
    '.dz-steps li::before{content:"";position:absolute;top:11px;left:-50%;width:100%;height:2px;background:#26262A}',
    '.dz-steps li:first-child::before{display:none}',
    '.dz-steps li.done::before,.dz-steps li.cur::before{background:var(--dla,#F5C542)}',
    '.dz-n{display:inline-grid;place-items:center;width:18px;height:18px;margin-right:6px;border-radius:50%;background:#26262A;color:#FAFAFA;font-size:10.5px;vertical-align:1px}',
    /* 설명 = 한 줄 + 툴팁 */
    '.dz-intro{display:flex;align-items:center;gap:6px}',
    '.dz-ib{flex:none;display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;border:1px solid #4A4A50;background:none;color:#C9C9CE;font-size:12px;font-weight:800}',
    '.dz-ib[aria-expanded="true"]{background:#FAFAFA;color:#0B0B0C;border-color:#FAFAFA}',
    '.dz-tipb{margin:8px 0 0;padding:10px 12px;border-radius:12px;background:#1F1F23;border:1px solid #33333A;font-size:12.5px;line-height:1.6;color:#C9C9CE;position:relative}',
    '.dz-tipb::before{content:"";position:absolute;top:-6px;left:calc(100% - 40px);width:10px;height:10px;background:#1F1F23;border-left:1px solid #33333A;border-top:1px solid #33333A;transform:rotate(45deg)}',
    '.dz-tipb b{color:#FAFAFA}',
    /* 상대 찾기 = 라디오 목록 */
    '.dz-rl{display:grid;border:1px solid #2A2A2F;border-radius:12px;overflow:hidden}',
    '.dz-rl button{display:flex;align-items:center;gap:10px;min-height:50px;padding:8px 12px;background:transparent;border:0;border-top:1px solid #2A2A2F;color:#FAFAFA;text-align:left;font-size:14px;font-weight:700}',
    '.dz-rl button:first-child{border-top:0}',
    '.dz-rl .rad{flex:none;width:20px;height:20px;border-radius:50%;border:2px solid #5A5A60;display:grid;place-items:center}',
    '.dz-rl button[aria-checked="true"] .rad{border-color:var(--dla,#F5C542)}',
    '.dz-rl button[aria-checked="true"] .rad::after{content:"";width:10px;height:10px;border-radius:50%;background:var(--dla,#F5C542)}',
    '.dz-rl .t small{display:block;font-size:11.5px;font-weight:500;color:#9A9AA2}',
    '.dz-rl button[aria-checked="true"]{background:rgba(var(--dla-rgb,245,197,66),.06)}',
    /* 판돈 = 드롭다운 (드롭다운 모양은 앱 공통 .dz-sel) */
    '.dz-stk{display:block}',
    '.dz-stk select{min-height:48px !important;font-size:15px !important}',
    /* 진행 중인 대결 = 원형 남은 시간 */
    '.dz-lring{display:flex;align-items:center;gap:12px;margin-top:10px}',
    '.dz-lring small{display:block;font-size:11px;color:#9A9AA2}',
    '.dz-lring b{display:block;font-size:17px}',
    /* 봇 고르기 = 바텀시트 · 캐릭터 카드 */
    '.dl-pop.dz-bsheet{padding:0;align-items:flex-end}',
    '.dl-pop.dz-bsheet .dl-popc{max-width:none;border-radius:20px 20px 0 0;border-bottom:0;padding:22px 16px calc(18px + env(safe-area-inset-bottom,0px));animation:dzUp .22s ease-out;position:relative}',
    '.dl-pop.dz-bsheet .dl-popc::before{content:"";position:absolute;left:50%;top:8px;width:36px;height:4px;margin-left:-18px;border-radius:2px;background:#3A3A40}',
    '@keyframes dzUp{from{transform:translateY(40%);opacity:.4}}',
    '.dz-botc{display:flex !important;align-items:center;gap:12px;min-height:64px !important}',
    '.dz-botc .face{flex:none;width:44px;height:44px;border-radius:14px;display:grid;place-items:center}',
    '.dz-botc .face svg{width:24px;height:24px;fill:none;stroke:#fff;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}',
    '.dz-botc .t{flex:1;min-width:0}',
    '.dz-botc .t b{display:block;font-size:15px}',
    '.dz-botc em{flex:none;font-style:normal;font-size:11.5px;font-weight:800;padding:3px 8px;border-radius:999px;background:#26262A;color:#FAFAFA}',
    /* 대결 끝 = 완료 화면 + 도장 */
    '.dl-res.dz-st{position:relative;overflow:hidden}',
    '.dz-stamp{position:absolute;right:14px;top:12px;padding:2px 10px;border:3px solid var(--dla,#F5C542);border-radius:8px;color:var(--dla,#F5C542);font-size:20px;font-weight:900;letter-spacing:.08em;transform:rotate(-12deg);opacity:.92}',
    '.dz-stamp.lose{border-color:#8FA3C0;color:#8FA3C0}.dz-stamp.draw{border-color:#9A9AA2;color:#9A9AA2}',
    '.dz-stamp.anim{animation:dzStamp .45s cubic-bezier(.2,1.6,.4,1) both}',
    '@keyframes dzStamp{from{transform:rotate(-12deg) scale(2.6);opacity:0}to{transform:rotate(-12deg) scale(1);opacity:.92}}',
    /* 안내 문구 = 회색 띠 */
    '.dl-foot{margin:16px 0 0 !important;padding:10px 12px;border-radius:10px;background:#141416;text-align:left !important;color:#9A9AA2 !important}',
    /* 랭킹: 드롭다운 줄 · 시상대 · 티어 · 최대 낙폭 · 리그 · 설명 접기 */
    '.dz-rkbar{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin:0 0 8px}',
    '.dz-rkbar .dz-sel select{min-height:38px;padding:0 26px 0 10px;font-size:13px}',
    '.dz-rkbar .dz-sel::after{right:9px}',
    '.dz-pod{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;align-items:end;margin:10px 0 6px}',
    '.dz-pod button{display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:0;color:inherit;min-width:0;padding:0}',
    '.dz-pod .nk{max-width:100%;font-size:13px;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    '.dz-pod b{font-size:12.5px}',
    '.dz-pod i{display:grid;place-items:center;align-self:stretch;margin-top:4px;font-style:normal;font-size:22px;font-weight:900;border-radius:10px 10px 0 0;background:var(--pc2,#1B1B1D)}',
    '.dz-pod i.h0{height:68px}.dz-pod i.h1{height:92px;background:rgba(var(--dla-rgb,245,197,66),.18);color:var(--dla,#F5C542)}.dz-pod i.h2{height:54px}',
    '.dz-rk .dl-tier{margin-left:5px;vertical-align:1px}',
    '.dz-rk li{min-height:52px}',
    '.dz-rk .nk small.dz-sub{display:block;margin:2px 0 0;font-weight:500}',
    '.dz-rk .nk small.dz-sub .hi{color:#F5A524}',
    '.dz-league{margin:10px 0;padding:14px;border-radius:14px;background:var(--pc1,#151516);border:1px solid var(--pl,#242427)}',
    '.dz-league .hd{display:flex;justify-content:space-between;font-size:12.5px;color:var(--pt3,#6B6B70)}',
    '.dz-league .hd b{color:var(--pt1,#F3F3F4)}',
    '.dz-league .promo{margin:14px 0 8px;border-top:1px dashed #2F7D58;position:relative}',
    '.dz-league .promo span{position:absolute;top:-9px;left:50%;transform:translateX(-50%);background:var(--pc1,#151516);padding:0 8px;font-size:11.5px;color:#7FD1A8;font-weight:700;white-space:nowrap}',
    '.dz-league p{margin:14px 0 0;font-size:12.5px;color:var(--pt2,#A0A0A5)}',
    '.dz-acc{margin-top:12px;border:1px solid var(--pl,#242427);border-radius:12px;padding:0 12px}',
    '.dz-acc>summary{min-height:44px;display:flex;align-items:center;justify-content:space-between;gap:8px;cursor:pointer;font-size:13px;font-weight:700;color:var(--pt2,#A0A0A5);list-style:none}',
    '.dz-acc>summary::-webkit-details-marker{display:none}',
    '.dz-acc>summary::after{content:"펼치기 ›";font-size:12px;font-weight:500;color:var(--pt3,#6B6B70)}',
    '.dz-acc[open]>summary::after{content:"접기 ‹"}',
    '.dz-acc[open]{padding-bottom:10px}',
    /* 프로필: 아바타 가운데 · 다음 티어 원 · 위험 칸 · 배지 · 기간 · 계정 메뉴 */
    '.dz-avh{display:flex !important;flex-direction:column;align-items:center;text-align:center;gap:4px}',
    '.dz-avc{width:76px;height:76px;border-radius:50%;display:grid;place-items:center;font-size:32px;font-weight:900;background:#26262A;color:#FAFAFA;box-shadow:0 0 0 3px #0B0B0C,0 0 0 5px var(--dla,#F5C542);margin-bottom:6px}',
    '.dz-next{display:flex;align-items:center;gap:12px;margin-top:10px;text-align:left}',
    '.dz-next>div>span{display:block;font-size:12px;color:#9A9AA2}',
    '.dz-next .dl-tier{display:inline-block;margin:0 2px}',
    '.dz-next b{display:block;font-size:17px}',
    '.dz-next small{display:block;font-size:11px;color:#9A9AA2}',
    '.dz-risk .dl-row b{font-size:13px}',
    '.dz-strg{display:flex;gap:4px;margin-top:10px}.dz-strg i{flex:1;height:7px;border-radius:4px;background:#26262A}',
    '.dz-strg.l1 i:nth-child(-n+1){background:#2F7D58}.dz-strg.l2 i:nth-child(-n+2){background:#C8A23A}.dz-strg.l3 i:nth-child(-n+3){background:#D2723A}.dz-strg.l4 i{background:#FF4D4F}',
    '.dz-strl{display:flex;justify-content:space-between;font-size:11px;color:#9A9AA2;margin-top:5px}',
    '.dz-bh{display:flex;align-items:center;justify-content:space-between}',
    '.dz-ball{background:none;border:0;color:#9A9AA2;font-size:12px;font-weight:700;min-height:32px}',
    '.dz-range{margin:0 0 8px}',
    '.dz-range .ch{display:flex;gap:6px}',
    '.dz-range .ch button{min-height:34px;padding:0 13px;border-radius:999px;border:1px solid #333338;background:transparent;color:#A0A0A5;font-size:13px;font-weight:700}',
    '.dz-range .ch button[aria-pressed="true"]{background:#FAFAFA;color:#0B0B0C;border-color:#FAFAFA}',
    '.dz-range .dt{display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:end;margin-top:8px}',
    '.dz-range .dt i{font-style:normal;color:#6B6B70;padding-bottom:12px}',
    '.dz-range label span{display:block;font-size:11px;color:#9A9AA2;margin-bottom:3px}',
    '.dz-range input{width:100%;min-height:42px;padding:0 10px;border-radius:12px;border:1px solid #333338;background:#141416;color:#FAFAFA;font:inherit;font-size:13.5px;color-scheme:dark}',
    '.dz-menu button{display:flex;width:100%;justify-content:space-between;align-items:center;min-height:50px;padding:0 14px;background:none;border:0;border-top:1px solid #222226;color:#FAFAFA;font-size:14px;text-align:left}',
    '.dz-menu button:first-child{border-top:0}',
    '.dz-menu button span{color:#6B6B70}',
    '.dz-menu button.out{color:#FF6B6B}',
    /* 배지를 딴 순간 = 튀어나옴 */
    '.dz-bpop{position:fixed;inset:0;z-index:2400;display:grid;place-items:center;background:rgba(0,0,0,.6)}',
    '.dz-bpop .in{width:min(300px,86vw);padding:22px 18px 16px;border-radius:20px;background:#141416;border:1px solid #2A2A2F;text-align:center}',
    '.dz-bpop .k{font-size:12px;font-weight:800;letter-spacing:.12em;color:var(--dla,#F5C542)}',
    '.dz-bpop .bd{margin:14px auto 12px;width:120px;padding:14px 8px;border-radius:16px;border:1.5px solid var(--dla,#F5C542);background:rgba(var(--dla-rgb,245,197,66),.1);animation:dzUnlock .6s cubic-bezier(.2,1.5,.4,1) both}',
    '.dz-bpop .bd b{display:block;font-size:16px}.dz-bpop .bd small{display:block;font-size:11px;color:#9A9AA2;margin-top:4px}',
    '.dz-bpop button{width:100%;min-height:46px;border-radius:12px;background:#FAFAFA;color:#0B0B0C;font-weight:800;border:0}',
    '@keyframes dzUnlock{0%{transform:scale(.2) rotate(-20deg);opacity:0}70%{transform:scale(1.12) rotate(4deg);opacity:1}100%{transform:scale(1) rotate(0)}}',
    '@media(prefers-reduced-motion:reduce){.dz-stamp.anim,.dz-bpop .bd{animation:none}}'
  ].join('\n');
  var st = document.createElement('style'); st.id = 'pz-css'; st.textContent = css; document.head.appendChild(st);

  function $(id) { return document.getElementById(id); }
  function P() { return window.A99Paper; }
  function toast(t) { if (window.A99Toast) window.A99Toast(t); }

  document.addEventListener('click', function (e) {
    var t = e.target, b;
    // 설명 툴팁
    if ((b = t.closest && t.closest('[data-dztip]'))) { var tip = b.closest('.dl-card') && b.closest('.dl-card').querySelector('.dz-tipb'); if (tip) { tip.hidden = !tip.hidden; b.setAttribute('aria-expanded', String(!tip.hidden)); } return; }
    // 배지 전체 보기
    if ((b = t.closest && t.closest('[data-dzb]'))) { var sec = b.closest('section'), all = sec && sec.querySelector('.dz-all'), got = sec && sec.querySelector('.dz-got'); if (all) { all.hidden = !all.hidden; if (got) got.hidden = !all.hidden; b.setAttribute('aria-expanded', String(!all.hidden)); b.textContent = all.hidden ? '전체 ' + all.children.length + '개 보기 ›' : '받은 것만 보기 ‹'; } return; }
    // 매매 기록 기간 빠른 선택
    if ((b = t.closest && t.closest('[data-dzr]'))) { var d = +b.dataset.dzr, f = $('dz-rf'), to = $('dz-rt'); if (f && to) { if (d) { var now = new Date(Date.now() + 9 * 3600e3); to.value = now.toISOString().slice(0, 10); f.value = new Date(now.getTime() - (d - 1) * 864e5).toISOString().slice(0, 10); } else { f.value = ''; to.value = ''; } } [].slice.call(b.parentNode.children).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); range(); return; }
    // 계정 메뉴
    if ((b = t.closest && t.closest('[data-dzm]'))) {
      var k = b.dataset.dzm, A = window.A99Auth;
      if (k === 'out') { if (window.A99Dz && window.A99Dz.logout) window.A99Dz.logout(); return; }
      if (k === 'terms') { location.hash = '#terms'; return; }
      if (k === 'pw') { if (window.A99Dz && window.A99Dz.pwChange) window.A99Dz.pwChange(); return; }
      if (k === 'quit') { if (window.A99Dz && window.A99Dz.quitInfo) window.A99Dz.quitInfo(); return; }
    }
  });
  // 매매 기록 기간 고르기 (최근 닫은 거래 줄을 날짜로 거른다)
  function range() {
    var f = $('dz-rf'), to = $('dz-rt'), box = $('dl-pftr'), n = $('dz-rn'); if (!f || !to || !box) return;
    var a = f.value ? Date.parse(f.value + 'T00:00:00+09:00') : 0, z = to.value ? Date.parse(to.value + 'T23:59:59+09:00') : Infinity;
    var rows = [].slice.call(box.querySelectorAll('[data-ts]')), shown = 0;
    rows.forEach(function (r) { var ts = +r.dataset.ts || 0, on = ts >= a && ts <= z; r.hidden = !on; if (on) shown++; });
    if (n) n.textContent = rows.length ? (a || z !== Infinity ? '고른 기간 닫은 거래 ' + shown + '건 / 보이는 ' + rows.length + '건 중' : '최근 닫은 거래 ' + rows.length + '건') : '';
  }
  document.addEventListener('change', function (e) { if (e.target && (e.target.id === 'dz-rf' || e.target.id === 'dz-rt')) { var ch = document.querySelectorAll('#dz-range [data-dzr]'); [].forEach.call(ch, function (x) { x.setAttribute('aria-pressed', 'false'); }); range(); } });
  // 기록이 늦게 와도 기간을 다시 적용 · 새 배지는 한 번 튀어나오게
  function seenB() { try { return JSON.parse(localStorage.getItem('a99_dz_badges') || 'null'); } catch (e) { return null; } }
  function popBadge(name, desc) {
    if ($('dzBpop')) return;
    var w = document.createElement('div'); w.className = 'dz-bpop'; w.id = 'dzBpop'; w.setAttribute('role', 'dialog'); w.setAttribute('aria-modal', 'true'); w.setAttribute('aria-label', '새 배지');
    w.innerHTML = '<div class="in"><div class="k">NEW BADGE</div><div class="bd"><b>' + name + '</b><small>' + desc + '</small></div><button type="button">확인</button></div>';
    document.body.appendChild(w); w.addEventListener('click', function (e) { if (e.target === w || e.target.closest('button')) w.remove(); });
  }
  var obs = null;
  function watch() {
    var pf = $('pp-pfv'), tr = $('dl-pftr');
    if (tr && !tr.dataset.dz) { tr.dataset.dz = '1'; new MutationObserver(range).observe(tr, { childList: true, subtree: false }); }
    // 받은 배지: 지난번에 본 것과 견주어 새로 생긴 것만 (처음엔 기억만 한다)
    var got = [].slice.call(document.querySelectorAll('#pp-pfv .dz-got .dl-bdg.on')).map(function (x) { return x.firstChild ? String(x.firstChild.textContent || '').trim() : ''; }).filter(Boolean);
    if (pf && document.querySelector('#pp-pfv .dz-got')) {
      var old = seenB();
      if (old) got.forEach(function (g) { if (old.indexOf(g) < 0) { var el = [].filter.call(document.querySelectorAll('#pp-pfv .dz-got .dl-bdg.on'), function (x) { return x.firstChild && String(x.firstChild.textContent).trim() === g; })[0]; popBadge(g, el && el.querySelector('small') ? el.querySelector('small').textContent : ''); } });
      try { localStorage.setItem('a99_dz_badges', JSON.stringify(got)); } catch (e) { }
    }
  }
  var host = null, tmr = 0;
  function boot() {
    host = $('paperHost') || document.body;
    new MutationObserver(function () { clearTimeout(tmr); tmr = setTimeout(watch, 120); }).observe(host, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
