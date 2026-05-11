
"use strict";var SondeQR=(()=>{var R=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var te=Object.getOwnPropertyNames;var ne=Object.prototype.hasOwnProperty;var ae=(t,e)=>{for(var o in e)R(t,o,{get:e[o],enumerable:!0})},le=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of te(e))!ne.call(t,n)&&n!==o&&R(t,n,{get:()=>e[n],enumerable:!(r=re(e,n))||r.enumerable});return t};var ie=t=>le(R({},"__esModule",{value:!0}),t);var Ge={};ae(Ge,{showQrModal:()=>Fe});var S="#ffffff",D="#000000",_=[S,S,S];var se="var(--sonde-syntax-keyword)",ce="var(--sonde-syntax-string)",de="var(--sonde-syntax-number)",ge="var(--sonde-syntax-comment)",fe="var(--sonde-syntax-function)",me="var(--sonde-syntax-variable)",ye="var(--sonde-syntax-constant)",he="var(--sonde-syntax-property)",ue="var(--sonde-syntax-punctuation)",pe="var(--sonde-syntax-tag)",be="var(--sonde-syntax-type)",z="var(--sonde-syntax-default)",ke=[{scope:["comment","punctuation.definition.comment","string.comment"],settings:{foreground:ge,fontStyle:"italic"}},{scope:["keyword","keyword.control","keyword.operator.new","keyword.operator.expression","keyword.operator.logical.python","keyword.other","storage","storage.type","storage.modifier"],settings:{foreground:se}},{scope:["string","string.quoted","string.template","punctuation.definition.string"],settings:{foreground:ce}},{scope:["constant.numeric","constant.numeric.integer","constant.numeric.float"],settings:{foreground:de}},{scope:["constant.language","constant.character","support.constant"],settings:{foreground:ye}},{scope:["entity.name.function","meta.function-call entity.name.function","support.function","meta.definition.function entity.name.function","variable.function"],settings:{foreground:fe}},{scope:["entity.name.type","entity.name.class","entity.name.interface","support.type","support.class","support.type.primitive","meta.type.declaration entity.name.type"],settings:{foreground:be}},{scope:["variable.other.property","variable.other.object.property","meta.object-literal.key","support.type.property-name","entity.other.attribute-name"],settings:{foreground:he}},{scope:["entity.name.tag","meta.tag entity.name.tag","punctuation.definition.tag"],settings:{foreground:pe}},{scope:["punctuation","punctuation.separator","punctuation.terminator","punctuation.section","meta.brace","keyword.operator"],settings:{foreground:ue}},{scope:["variable","variable.other","variable.parameter","meta.definition.variable variable"],settings:{foreground:me}}],xe={name:"sonde",type:"css",displayName:"Sonde",colors:{"editor.foreground":z,"editor.background":"var(--sonde-code-bg)"},bg:"var(--sonde-code-bg)",fg:z,settings:[{settings:{foreground:z,background:"var(--sonde-code-bg)"}},...ke.map(t=>({scope:t.scope,settings:{foreground:t.settings.foreground,...t.settings.fontStyle?{fontStyle:t.settings.fontStyle}:{}}}))]};var we=`
  <!-- Magnetometer boom -->
  <line x1="-32" y1="-8" x2="-160" y2="-40" stroke-width="6" stroke-linecap="round" />
  <circle cx="-160" cy="-40" r="10" />

  <!-- RTG boom -->
  <line x1="-32" y1="16" x2="-125" y2="62" stroke-width="8" stroke-linecap="round" />
  <rect x="-141" y="38" width="32" height="60" rx="4" transform="rotate(20,-125,62)" />

  <!-- Science platform -->
  <line x1="-16" y1="-40" x2="-46" y2="-92" stroke-width="7" stroke-linecap="round" />
  <rect x="-70" y="-108" width="48" height="28" rx="4" />
  <circle cx="-56" cy="-98" r="8" />
  <circle cx="-36" cy="-98" r="6" />

  <!-- High-gain antenna dish -->
  <path d="M48,-108 Q128,-78 128,0 Q128,78 48,108" stroke-width="5" stroke-linejoin="round" />
  <line x1="58" y1="-50" x2="108" y2="0" stroke-width="5" />
  <line x1="58" y1="50" x2="108" y2="0" stroke-width="5" />
  <line x1="48" y1="0" x2="108" y2="0" stroke-width="5" />
  <circle cx="110" cy="0" r="14" />

  <!-- Spacecraft bus -->
  <polygon points="-16,-40 48,-40 62,-24 62,24 48,40 -16,40 -30,24 -30,-24" />
`,ve=`
  <!-- Lunar Maria (Visible only when themed via CSS variables) -->
  <g opacity="0.7">
    <path d="M40,240 C60,110 170,40 250,90 C320,130 330,210 260,280 C200,340 50,340 40,240 Z" opacity="0.6"/>
    <path d="M290,130 C360,60 460,110 470,190 C480,270 410,350 330,320 C260,290 230,190 290,130 Z" opacity="0.7"/>
    <path d="M390,280 C470,250 510,300 480,380 C450,440 380,410 390,280 Z" opacity="0.5"/>
    <path d="M130,350 C180,290 260,350 230,430 C200,510 60,450 130,350 Z" opacity="0.5"/>
    <circle cx="230" cy="430" r="18" fill="transparent" stroke-width="4" opacity="0.8"/>
    <circle cx="170" cy="190" r="12" fill="transparent" stroke-width="3" opacity="0.7"/>
    <circle cx="90" cy="230" r="8" opacity="0.8"/>
  </g>
`;function G(t){let{size:e,idPrefix:o,sunColors:r,probeColor:n,className:a,style:l,x:i,y:s,craterColor:c="transparent"}=t;return`
    <svg ${i!==void 0?`x="${i}" `:""}${s!==void 0?`y="${s}" `:""}${a?`class="${a}" `:""}viewBox="0 0 512 512" width="${e}" height="${e}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" ${l?`style="${l}"`:""}>
      <defs>
        <radialGradient id="${o}-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${r[0]}" />
          <stop offset="60%" stop-color="${r[1]}" />
          <stop offset="100%" stop-color="${r[2]}" />
        </radialGradient>
        <clipPath id="${o}-disc"><circle cx="256" cy="256" r="240" /></clipPath>
      </defs>
      <circle cx="256" cy="256" r="240" fill="url(#${o}-sun)" />
      <g clip-path="url(#${o}-disc)">
        <g fill="${c}" stroke="${c}">
          ${ve}
        </g>
        <g transform="translate(250,240) rotate(-40)" fill="${n}" stroke="${n}">
          ${we}
        </g>
      </g>
    </svg>
  `.trim()}var v=(t=>(t[t.Border=-1]="Border",t[t.Data=0]="Data",t[t.Function=1]="Function",t[t.Position=2]="Position",t[t.Timing=3]="Timing",t[t.Alignment=4]="Alignment",t))(v||{}),Se=[0,1],K=[1,0],V=[2,3],Y=[3,2],Ee={L:Se,M:K,Q:V,H:Y},Ce=/^\d*$/,Ae=/^[A-Z0-9 $%*+./:-]*$/,N="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",$=1,L=40,U=3,De=3,P=40,Pe=10,W=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],j=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],O=class{constructor(e,o,r,n){if(this.version=e,this.ecc=o,e<$||e>L)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let a=Array.from({length:this.size}).fill(!1);for(let i=0;i<this.size;i++)this.modules.push(a.slice()),this.types.push(a.map(()=>0));this.drawFunctionPatterns();let l=this.addEccAndInterleave(r);if(this.drawCodewords(l),n===-1){let i=1e9;for(let s=0;s<8;s++){this.applyMask(s),this.drawFormatBits(s);let c=this.getPenaltyScore();c<i&&(n=s,i=c),this.applyMask(s)}}this.mask=n,this.applyMask(n),this.drawFormatBits(n)}size;mask;modules=[];types=[];getModule(e,o){return e>=0&&e<this.size&&o>=0&&o<this.size&&this.modules[o][e]}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2===0,v.Timing),this.setFunctionModule(r,6,r%2===0,v.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),o=e.length;for(let r=0;r<o;r++)for(let n=0;n<o;n++)r===0&&n===0||r===0&&n===o-1||r===o-1&&n===0||this.drawAlignmentPattern(e[r],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let o=this.ecc[1]<<3|e,r=o;for(let a=0;a<10;a++)r=r<<1^(r>>>9)*1335;let n=(o<<10|r)^21522;for(let a=0;a<=5;a++)this.setFunctionModule(8,a,u(n,a));this.setFunctionModule(8,7,u(n,6)),this.setFunctionModule(8,8,u(n,7)),this.setFunctionModule(7,8,u(n,8));for(let a=9;a<15;a++)this.setFunctionModule(14-a,8,u(n,a));for(let a=0;a<8;a++)this.setFunctionModule(this.size-1-a,8,u(n,a));for(let a=8;a<15;a++)this.setFunctionModule(8,this.size-15+a,u(n,a));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let r=0;r<12;r++)e=e<<1^(e>>>11)*7973;let o=this.version<<12|e;for(let r=0;r<18;r++){let n=u(o,r),a=this.size-11+r%3,l=Math.floor(r/3);this.setFunctionModule(a,l,n),this.setFunctionModule(l,a,n)}}drawFinderPattern(e,o){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){let a=Math.max(Math.abs(n),Math.abs(r)),l=e+n,i=o+r;l>=0&&l<this.size&&i>=0&&i<this.size&&this.setFunctionModule(l,i,a!==2&&a!==4,v.Position)}}drawAlignmentPattern(e,o){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,o+r,Math.max(Math.abs(n),Math.abs(r))!==1,v.Alignment)}setFunctionModule(e,o,r,n=v.Function){this.modules[o][e]=r,this.types[o][e]=n}addEccAndInterleave(e){let o=this.version,r=this.ecc;if(e.length!==M(o,r))throw new RangeError("Invalid argument");let n=j[r[0]][o],a=W[r[0]][o],l=Math.floor(I(o)/8),i=n-l%n,s=Math.floor(l/n),c=[],m=Be(a);for(let g=0,x=0;g<n;g++){let b=e.slice(x,x+s-a+(g<i?0:1));x+=b.length;let E=$e(b,m);g<i&&b.push(0),c.push(b.concat(E))}let d=[];for(let g=0;g<c[0].length;g++)c.forEach((x,b)=>{(g!==s-a||b>=i)&&d.push(x[g])});return d}drawCodewords(e){if(e.length!==Math.floor(I(this.version)/8))throw new RangeError("Invalid argument");let o=0;for(let r=this.size-1;r>=1;r-=2){r===6&&(r=5);for(let n=0;n<this.size;n++)for(let a=0;a<2;a++){let l=r-a,s=(r+1&2)===0?this.size-1-n:n;!this.types[s][l]&&o<e.length*8&&(this.modules[s][l]=u(e[o>>>3],7-(o&7)),o++)}}}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let o=0;o<this.size;o++)for(let r=0;r<this.size;r++){let n;switch(e){case 0:n=(r+o)%2===0;break;case 1:n=o%2===0;break;case 2:n=r%3===0;break;case 3:n=(r+o)%3===0;break;case 4:n=(Math.floor(r/3)+Math.floor(o/2))%2===0;break;case 5:n=r*o%2+r*o%3===0;break;case 6:n=(r*o%2+r*o%3)%2===0;break;case 7:n=((r+o)%2+r*o%3)%2===0;break;default:throw new Error("Unreachable")}!this.types[o][r]&&n&&(this.modules[o][r]=!this.modules[o][r])}}getPenaltyScore(){let e=0;for(let a=0;a<this.size;a++){let l=!1,i=0,s=[0,0,0,0,0,0,0];for(let c=0;c<this.size;c++)this.modules[a][c]===l?(i++,i===5?e+=U:i>5&&e++):(this.finderPenaltyAddHistory(i,s),l||(e+=this.finderPenaltyCountPatterns(s)*P),l=this.modules[a][c],i=1);e+=this.finderPenaltyTerminateAndCount(l,i,s)*P}for(let a=0;a<this.size;a++){let l=!1,i=0,s=[0,0,0,0,0,0,0];for(let c=0;c<this.size;c++)this.modules[c][a]===l?(i++,i===5?e+=U:i>5&&e++):(this.finderPenaltyAddHistory(i,s),l||(e+=this.finderPenaltyCountPatterns(s)*P),l=this.modules[c][a],i=1);e+=this.finderPenaltyTerminateAndCount(l,i,s)*P}for(let a=0;a<this.size-1;a++)for(let l=0;l<this.size-1;l++){let i=this.modules[a][l];i===this.modules[a][l+1]&&i===this.modules[a+1][l]&&i===this.modules[a+1][l+1]&&(e+=De)}let o=0;for(let a of this.modules)o=a.reduce((l,i)=>l+(i?1:0),o);let r=this.size*this.size,n=Math.ceil(Math.abs(o*20-r*10)/r)-1;return e+=n*Pe,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,o=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6];for(let n=this.size-7;r.length<e;n-=o)r.splice(1,0,n);return r}}finderPenaltyCountPatterns(e){let o=e[1],r=o>0&&e[2]===o&&e[3]===o*3&&e[4]===o&&e[5]===o;return(r&&e[0]>=o*4&&e[6]>=o?1:0)+(r&&e[6]>=o*4&&e[0]>=o?1:0)}finderPenaltyTerminateAndCount(e,o,r){return e&&(this.finderPenaltyAddHistory(o,r),o=0),o+=this.size,this.finderPenaltyAddHistory(o,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,o){o[0]===0&&(e+=this.size),o.pop(),o.unshift(e)}};function p(t,e,o){if(e<0||e>31||t>>>e)throw new RangeError("Value out of range");for(let r=e-1;r>=0;r--)o.push(t>>>r&1)}function u(t,e){return(t>>>e&1)!==0}var C=class{constructor(e,o,r){if(this.mode=e,this.numChars=o,this.bitData=r,o<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}getData(){return this.bitData.slice()}},Me=[1,10,12,14],Te=[2,9,11,13],Re=[4,8,16,16];function q(t,e){return t[Math.floor((e+7)/17)+1]}function X(t){let e=[];for(let o of t)p(o,8,e);return new C(Re,t.length,e)}function _e(t){if(!Z(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let o=0;o<t.length;){let r=Math.min(t.length-o,3);p(Number.parseInt(t.substring(o,o+r),10),r*3+1,e),o+=r}return new C(Me,t.length,e)}function ze(t){if(!Q(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e=[],o;for(o=0;o+2<=t.length;o+=2){let r=N.indexOf(t.charAt(o))*45;r+=N.indexOf(t.charAt(o+1)),p(r,11,e)}return o<t.length&&p(N.indexOf(t.charAt(o)),6,e),new C(Te,t.length,e)}function Ne(t){return t===""?[]:Z(t)?[_e(t)]:Q(t)?[ze(t)]:[X(Ie(t))]}function Z(t){return Ce.test(t)}function Q(t){return Ae.test(t)}function Oe(t,e){let o=0;for(let r of t){let n=q(r.mode,e);if(r.numChars>=1<<n)return Number.POSITIVE_INFINITY;o+=4+n+r.bitData.length}return o}function Ie(t){t=encodeURI(t);let e=[];for(let o=0;o<t.length;o++)t.charAt(o)!=="%"?e.push(t.charCodeAt(o)):(e.push(Number.parseInt(t.substring(o+1,o+3),16)),o+=2);return e}function I(t){if(t<$||t>L)throw new RangeError("Version number out of range");let e=(16*t+128)*t+64;if(t>=2){let o=Math.floor(t/7)+2;e-=(25*o-10)*o-55,t>=7&&(e-=36)}return e}function M(t,e){return Math.floor(I(t)/8)-W[e[0]][t]*j[e[0]][t]}function Be(t){if(t<1||t>255)throw new RangeError("Degree out of range");let e=[];for(let r=0;r<t-1;r++)e.push(0);e.push(1);let o=1;for(let r=0;r<t;r++){for(let n=0;n<e.length;n++)e[n]=B(e[n],o),n+1<e.length&&(e[n]^=e[n+1]);o=B(o,2)}return e}function $e(t,e){let o=e.map(r=>0);for(let r of t){let n=r^o.shift();o.push(0),e.forEach((a,l)=>o[l]^=B(a,n))}return o}function B(t,e){if(t>>>8||e>>>8)throw new RangeError("Byte out of range");let o=0;for(let r=7;r>=0;r--)o=o<<1^(o>>>7)*285,o^=(e>>>r&1)*t;return o}function Le(t,e,o=1,r=40,n=-1,a=!0){if(!($<=o&&o<=r&&r<=L)||n<-1||n>7)throw new RangeError("Invalid value");let l,i;for(l=o;;l++){let d=M(l,e)*8,g=Oe(t,l);if(g<=d){i=g;break}if(l>=r)throw new RangeError("Data too long")}for(let d of[K,V,Y])a&&i<=M(l,d)*8&&(e=d);let s=[];for(let d of t){p(d.mode[0],4,s),p(d.numChars,q(d.mode,l),s);for(let g of d.getData())s.push(g)}let c=M(l,e)*8;p(0,Math.min(4,c-s.length),s),p(0,(8-s.length%8)%8,s);for(let d=236;s.length<c;d^=253)p(d,8,s);let m=Array.from({length:Math.ceil(s.length/8)},()=>0);return s.forEach((d,g)=>m[g>>>3]|=d<<7-(g&7)),new O(l,e,m,n)}function J(t,e){let{ecc:o="L",boostEcc:r=!1,minVersion:n=1,maxVersion:a=40,maskPattern:l=-1,border:i=1}=e||{},s=typeof t=="string"?Ne(t):Array.isArray(t)?[X(t)]:void 0;if(!s)throw new Error(`uqr only supports encoding string and binary data, but got: ${typeof t}`);let c=Le(s,Ee[o],n,a,l,r),m=He({version:c.version,maskPattern:c.mask,size:c.size,data:c.modules,types:c.types},i);return e?.invert&&(m.data=m.data.map(d=>d.map(g=>!g))),e?.onEncoded?.(m),m}function He(t,e=1){if(!e)return t;let{size:o}=t,r=o+e*2;t.size=r,t.data.forEach(a=>{for(let l=0;l<e;l++)a.unshift(!1),a.push(!1)});for(let a=0;a<e;a++)t.data.unshift(Array.from({length:r},l=>!1)),t.data.push(Array.from({length:r},l=>!1));let n=v.Border;t.types.forEach(a=>{for(let l=0;l<e;l++)a.unshift(n),a.push(n)});for(let a=0;a<e;a++)t.types.unshift(Array.from({length:r},l=>n)),t.types.push(Array.from({length:r},l=>n));return t}function Fe(t){if(document.getElementById("sonde-qr-modal"))return;let e=300,o=J(t,{ecc:"H"}),r=e/o.size,n=document.createElement("div");n.id="sonde-qr-modal",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","QR Code for Link"),n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100vw",n.style.height="100vh",n.style.backgroundColor="rgba(0, 0, 0, 0.7)",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.style.zIndex="10000",n.style.backdropFilter="blur(4px)";let a=document.createElement("div");a.style.backgroundColor="#ffffff",a.style.padding="2rem",a.style.borderRadius="12px",a.style.boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="center",a.style.gap="1rem",a.style.maxWidth="90vw";let l=document.createElement("h3");l.textContent="Scan to view finding",l.style.margin="0",l.style.fontFamily="system-ui, sans-serif",l.style.fontSize="1.25rem",l.style.color="#000000";let i=document.createElement("div");i.style.position="relative",i.style.width=`${e}px`,i.style.height=`${e}px`;let s=document.createElement("canvas"),c=window.devicePixelRatio||1;s.width=e*c,s.height=e*c,s.style.width=`${e}px`,s.style.height=`${e}px`;let m=s.getContext("2d");if(m){m.scale(c,c),m.fillStyle="#ffffff",m.fillRect(0,0,e,e),m.fillStyle="#000000";for(let y=0;y<o.size;y++)for(let A=0;A<o.size;A++)if(o.data[y]?.[A]){let ee=A*r,oe=y*r,F=Math.ceil(r*100)/100;m.fillRect(ee,oe,F,F)}}let d=e*.35,g=(e-d)/2,x=G({size:d*.9,idPrefix:"qr",sunColors:_,probeColor:D,x:g+d*.05,y:g+d*.05}),b=`
    <svg style="position: absolute; top: 0; left: 0;" viewBox="0 0 ${e} ${e}" width="${e}" height="${e}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect x="${g}" y="${g}" width="${d}" height="${d}" fill="${S}" rx="${d*.1}" />
      ${x}
      <circle cx="${g+d/2}" cy="${g+d/2}" r="${d*.9/2}" fill="none" stroke="${D}" stroke-width="${d*.05}" />
    </svg>
  `;i.appendChild(s);let E=document.createElement("div");E.innerHTML=b.trim(),E.firstElementChild&&i.appendChild(E.firstElementChild);let k=document.createElement("div");k.style.display="flex",k.style.alignItems="center",k.style.justifyContent="center",k.style.gap="0.5rem",k.style.width="100%";let w=document.createElement("p");w.textContent=t,w.style.margin="0",w.style.fontFamily="monospace",w.style.fontSize="0.85rem",w.style.color="#555555",w.style.wordBreak="break-all";let f=document.createElement("button");f.textContent="Copy URL",f.style.padding="0.4rem 0.6rem",f.style.border="1px solid #cccccc",f.style.background="#ffffff",f.style.color="#333333",f.style.borderRadius="4px",f.style.cursor="pointer",f.style.fontSize="0.75rem",f.style.fontWeight="bold",f.style.flexShrink="0",f.addEventListener("click",()=>{navigator.clipboard.writeText(t).then(()=>{let y=f.textContent;f.textContent="Copied!",f.style.background="#e6ffed",f.style.borderColor="#2da44e",setTimeout(()=>{f.textContent=y,f.style.background="#ffffff",f.style.border="1px solid #cccccc"},2e3)}).catch(y=>{console.error("Failed to copy text: ",y)})}),k.appendChild(w),k.appendChild(f);let h=document.createElement("button");h.textContent="Close",h.style.marginTop="0.5rem",h.style.padding="0.5rem 1rem",h.style.border="1px solid #cccccc",h.style.background="#f5f5f5",h.style.color="#333333",h.style.borderRadius="6px",h.style.cursor="pointer",h.style.fontWeight="bold",a.appendChild(l),a.appendChild(i),a.appendChild(k),a.appendChild(h),n.appendChild(a),document.body.appendChild(n);function T(){document.body.contains(n)&&document.body.removeChild(n),document.removeEventListener("keydown",H)}function H(y){(y.key==="Escape"||y.key==="Enter")&&T()}h.addEventListener("click",T),n.addEventListener("click",y=>{y.target===n&&T()}),document.addEventListener("keydown",H),h.focus()}return ie(Ge);})();


(function () {
  // The runtime is always inlined into a browser document — no SSR
  // guard needed. The idempotent check below silently returns if the
  // helper is already attached (e.g., loaded twice via a hot reload).
  if (window.SondeSpinner) return;

  var OVERLAY_ID = 'sonde-spinner-overlay';
  // Canonical Sonde Daylight mark, generated at TS-build time from the
  // shared geometry module so it can never drift from the brand mark
  // used on the cover page or nav. The SVG content is checked-in code,
  // so JSON.stringify here is for transport correctness inside the
  // template literal — not a security boundary.
  var MARK_SVG = "<svg class=\"sonde-spinner\" viewBox=\"0 0 512 512\" width=\"96\" height=\"96\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" >\n      <defs>\n        <radialGradient id=\"sonde-spinner-mark-sun\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n          <stop offset=\"0%\" stop-color=\"var(--sonde-daylight-mark-sun-stop-0)\" />\n          <stop offset=\"60%\" stop-color=\"var(--sonde-daylight-mark-sun-stop-1)\" />\n          <stop offset=\"100%\" stop-color=\"var(--sonde-daylight-mark-sun-stop-2)\" />\n        </radialGradient>\n        <clipPath id=\"sonde-spinner-mark-disc\"><circle cx=\"256\" cy=\"256\" r=\"240\" /></clipPath>\n      </defs>\n      <circle cx=\"256\" cy=\"256\" r=\"240\" fill=\"url(#sonde-spinner-mark-sun)\" />\n      <g clip-path=\"url(#sonde-spinner-mark-disc)\">\n        <g fill=\"var(--sonde-daylight-mark-crater)\" stroke=\"var(--sonde-daylight-mark-crater)\">\n          \n  <!-- Lunar Maria (Visible only when themed via CSS variables) -->\n  <g opacity=\"0.7\">\n    <path d=\"M40,240 C60,110 170,40 250,90 C320,130 330,210 260,280 C200,340 50,340 40,240 Z\" opacity=\"0.6\"/>\n    <path d=\"M290,130 C360,60 460,110 470,190 C480,270 410,350 330,320 C260,290 230,190 290,130 Z\" opacity=\"0.7\"/>\n    <path d=\"M390,280 C470,250 510,300 480,380 C450,440 380,410 390,280 Z\" opacity=\"0.5\"/>\n    <path d=\"M130,350 C180,290 260,350 230,430 C200,510 60,450 130,350 Z\" opacity=\"0.5\"/>\n    <circle cx=\"230\" cy=\"430\" r=\"18\" fill=\"transparent\" stroke-width=\"4\" opacity=\"0.8\"/>\n    <circle cx=\"170\" cy=\"190\" r=\"12\" fill=\"transparent\" stroke-width=\"3\" opacity=\"0.7\"/>\n    <circle cx=\"90\" cy=\"230\" r=\"8\" opacity=\"0.8\"/>\n  </g>\n\n        </g>\n        <g transform=\"translate(250,240) rotate(-40)\" fill=\"var(--sonde-daylight-mark-probe)\" stroke=\"var(--sonde-daylight-mark-probe)\">\n          \n  <!-- Magnetometer boom -->\n  <line x1=\"-32\" y1=\"-8\" x2=\"-160\" y2=\"-40\" stroke-width=\"6\" stroke-linecap=\"round\" />\n  <circle cx=\"-160\" cy=\"-40\" r=\"10\" />\n\n  <!-- RTG boom -->\n  <line x1=\"-32\" y1=\"16\" x2=\"-125\" y2=\"62\" stroke-width=\"8\" stroke-linecap=\"round\" />\n  <rect x=\"-141\" y=\"38\" width=\"32\" height=\"60\" rx=\"4\" transform=\"rotate(20,-125,62)\" />\n\n  <!-- Science platform -->\n  <line x1=\"-16\" y1=\"-40\" x2=\"-46\" y2=\"-92\" stroke-width=\"7\" stroke-linecap=\"round\" />\n  <rect x=\"-70\" y=\"-108\" width=\"48\" height=\"28\" rx=\"4\" />\n  <circle cx=\"-56\" cy=\"-98\" r=\"8\" />\n  <circle cx=\"-36\" cy=\"-98\" r=\"6\" />\n\n  <!-- High-gain antenna dish -->\n  <path d=\"M48,-108 Q128,-78 128,0 Q128,78 48,108\" stroke-width=\"5\" stroke-linejoin=\"round\" />\n  <line x1=\"58\" y1=\"-50\" x2=\"108\" y2=\"0\" stroke-width=\"5\" />\n  <line x1=\"58\" y1=\"50\" x2=\"108\" y2=\"0\" stroke-width=\"5\" />\n  <line x1=\"48\" y1=\"0\" x2=\"108\" y2=\"0\" stroke-width=\"5\" />\n  <circle cx=\"110\" cy=\"0\" r=\"14\" />\n\n  <!-- Spacecraft bus -->\n  <polygon points=\"-16,-40 48,-40 62,-24 62,24 48,40 -16,40 -30,24 -30,-24\" />\n\n        </g>\n      </g>\n    </svg>";

  function parseMark() {
    var doc = new DOMParser().parseFromString(MARK_SVG, 'image/svg+xml');
    var node = doc.documentElement;
    // Browsers can return a <parsererror> root if the input is malformed.
    // The geometry source is checked-in code, so this is purely defensive;
    // fall back to an empty group so the overlay still renders.
    if (node && node.nodeName === 'parsererror') {
      var fallback = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      fallback.setAttribute('class', 'sonde-spinner');
      return fallback;
    }
    return document.importNode(node, true);
  }

  function ensureOverlay() {
    var existing = document.getElementById(OVERLAY_ID);
    if (existing) return existing;
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    overlay.className = 'sonde-spinner-overlay';
    overlay.setAttribute('role', 'status');
    overlay.setAttribute('aria-live', 'polite');
    overlay.appendChild(parseMark());
    var msg = document.createElement('div');
    msg.className = 'sonde-spinner-message';
    overlay.appendChild(msg);
    var sub = document.createElement('div');
    sub.className = 'sonde-spinner-submessage';
    overlay.appendChild(sub);
    document.body.appendChild(overlay);
    return overlay;
  }

  function show(message, submessage) {
    var overlay = ensureOverlay();
    var msg = overlay.querySelector('.sonde-spinner-message');
    var sub = overlay.querySelector('.sonde-spinner-submessage');
    if (msg) msg.textContent = message || 'Working\u2026';
    if (sub) sub.textContent = submessage || '';
    overlay.hidden = false;
  }

  function hide() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) overlay.hidden = true;
  }

  window.SondeSpinner = { show: show, hide: hide };
})();


(function() {
  var sondeConfig = window.SondeAuditConfig || {};
  var sondeSlug = sondeConfig.slug || '';
  var sondeVertical = sondeConfig.vertical || '';
  // Print-on-demand boot (paged.js polyfill mode).
  //
  // When this page loads with print=1 in the query string — which only
  // happens inside the hidden iframe spawned by the Download PDF click
  // handler — we lazy-load paged.js and let it paginate the document
  // into proper pages (cover, page numbers, headers, footers, @page
  // margin boxes) before the browser native print dialog opens. Chrome
  // stock print engine has incomplete CSS Paged Media support; paged.js
  // is the polyfill that bridges it. The interactive page is bypassed
  // entirely — return early from this IIFE so screen-mode setup
  // does not run inside the print iframe.
  if (location.search.indexOf('print=1') !== -1) {
    // Expand every <details> so paged.js paginates the full content of
    // each finding card and section, matching the server-side bake.
    document.querySelectorAll('details').forEach(function(d) { d.open = true; });
    window.PagedConfig = {
      auto: true,
      after: function() {
        // Notify the parent window so it can dismiss the loading spinner
        // before the print dialog opens. postMessage is synchronous-ish
        // and arrives before the user sees the dialog.
        try { parent.postMessage({ source: 'sonde-paged', type: 'rendered' }, '*'); } catch (e) {}
        // Tiny delay lets the paginated DOM finish settling before print.
        setTimeout(function() { window.print(); }, 80);
      },
    };
    var pagedScript = document.createElement('script');
    pagedScript.src = '/assets/paged.polyfill.min.js';
    document.head.appendChild(pagedScript);
    return;
  }

  var i18n = sondeConfig.i18n || {};
  var first = document.querySelector('.finding-card');
  if (first) first.open = true;

  var activeSev = null;
  var activeLevel = null; // Active WCAG conformance level filter
  var activeLenses = []; // Active provenance lens filters (additive when multiple)
  var PAGE_SIZE = 15;
  var filters = document.querySelectorAll('.stat-filter');
  var provenanceFilters = document.querySelectorAll('.provenance-filter-btn');
  var levelFilters = document.querySelectorAll('.level-filter-btn');
  var findingsSection = document.querySelector('.top-findings .section-collapsible');
  var findingsContainer = document.querySelector('.finding-cards');
  var topFindingsSection = document.querySelector('.top-findings');

  // Empty-state message — placed OUTSIDE the <details> so it's visible even when collapsed
  function ensureEmptyMsg(parent, cls) {
    if (!parent) return null;
    var el = parent.querySelector('.' + cls);
    if (!el) {
      el = document.createElement('p');
      el.className = cls + ' filter-empty';
      parent.appendChild(el);
    }
    return el;
  }
  var findingsEmpty = ensureEmptyMsg(topFindingsSection, 'findings-empty');
  function updateEmptyMsg() {
    if (!findingsEmpty) return;
    var parts = [];
    if (activeSev) parts.push(activeSev);
    if (activeLevel) parts.push(i18n.levelPrefix + activeLevel);
    if (activeLenses.length > 0) parts.push(i18n.selectedDetectionSource);
    if (parts.length > 0) {
      findingsEmpty.textContent = i18n.noFindingsMatch + parts.join(' + ') + i18n.filterSuffix;
    }
  }

  // Apply severity + provenance filter + pagination in one pass
  function applyFilterAndPaginate() {
    var container = findingsContainer;
    if (!container) return;
    var items = container.querySelectorAll(':scope > .finding-card-wrap > details');
    var visible = [];
    for (var i = 0; i < items.length; i++) {
      var matchesSev = !activeSev || items[i].getAttribute('data-severity') === activeSev;
      var matchesLevel = !activeLevel || items[i].getAttribute('data-conformance-level') === activeLevel;
      var matchesLens = true;
      if (activeLenses.length > 0) {
        var detectedBy = JSON.parse(items[i].getAttribute('data-detected-by') || '[]');
        matchesLens = false;
        for (var k = 0; k < activeLenses.length; k++) {
          if (detectedBy.indexOf(activeLenses[k]) >= 0) { matchesLens = true; break; }
        }
      }
      var matchesFilter = matchesSev && matchesLevel && matchesLens;
      var wrap = items[i].closest('.finding-card-wrap') || items[i];
      if (matchesFilter) { visible.push(wrap); } else { wrap.style.display = 'none'; }
    }
    // Pagination — controls are hidden when EITHER totalPages <= 1 (single
    // page of results) OR a severity/level/lens filter is active. Both cases
    // collapse to shouldPage = false below; in either case the controls
    // are hidden via the [hidden] attribute, their inline display is
    // cleared, and the live page-info text is zeroed so a partially-
    // localized "Page  of " can never appear in the DOM (issue #1044).
    var page = parseInt(container.getAttribute('data-page') || '1', 10);
    var totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
    if (page > totalPages) page = totalPages;
    if (page < 1) page = 1;
    container.setAttribute('data-page', String(page));
    var hasActiveFilter = Boolean(activeSev || activeLevel || activeLenses.length > 0);
    var shouldPage = !hasActiveFilter && totalPages > 1;
    var start = (page - 1) * PAGE_SIZE;
    var end = start + PAGE_SIZE;
    for (var i = 0; i < visible.length; i++) {
      visible[i].style.display = (shouldPage && (i < start || i >= end)) ? 'none' : '';
    }
    // Empty-state
    updateEmptyMsg();
    if (findingsEmpty) findingsEmpty.style.display = visible.length === 0 && (activeSev || activeLevel || activeLenses.length > 0) ? 'block' : 'none';
    // Pagination controls
    var wrapper = container.closest('.section-collapsible') || container.parentElement;
    var controls = wrapper.querySelector('.pagination-controls');
    if (!shouldPage) {
      // Short-circuit when nothing changed since last render — typeahead in
      // the search input fires applyFilterAndPaginate() every 120ms and the
      // no-page branch otherwise rewrites already-cleared attributes.
      if (controls && !controls.hidden) {
        controls.hidden = true;
        controls.style.display = 'none';
        var hiddenInfo = controls.querySelector('.pg-info');
        if (hiddenInfo) {
          hiddenInfo.textContent = '';
          hiddenInfo.removeAttribute('data-msg-args');
        }
      }
      return;
    }
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'pagination-controls';
      var first = document.createElement('button');
      first.type = 'button'; first.className = 'pg-first';
      first.setAttribute('aria-label', i18n.firstPage);
      first.setAttribute('data-msg-id', 'site.js.firstShort');
      first.setAttribute('data-msg-aria-label-id', 'site.js.firstPage');
      first.textContent = i18n.firstShort;
      var prev = document.createElement('button');
      prev.type = 'button'; prev.className = 'pg-prev';
      prev.setAttribute('aria-label', i18n.previousPage);
      prev.setAttribute('data-msg-id', 'audit.js.previousShort');
      prev.setAttribute('data-msg-aria-label-id', 'audit.js.previousPage');
      prev.textContent = i18n.previousShort;
      var info = document.createElement('span'); info.className = 'pg-info';
      info.setAttribute('aria-live', 'polite');
      info.setAttribute('data-msg-id', 'audit.js.pageInfo');
      var next = document.createElement('button');
      next.type = 'button'; next.className = 'pg-next';
      next.setAttribute('aria-label', i18n.nextPage);
      next.setAttribute('data-msg-id', 'audit.js.nextShort');
      next.setAttribute('data-msg-aria-label-id', 'audit.js.nextPage');
      next.textContent = i18n.nextShort;
      var last = document.createElement('button');
      last.type = 'button'; last.className = 'pg-last';
      last.setAttribute('aria-label', i18n.lastPage);
      last.setAttribute('data-msg-id', 'site.js.lastShort');
      last.setAttribute('data-msg-aria-label-id', 'site.js.lastPage');
      last.textContent = i18n.lastShort;
      controls.appendChild(first); controls.appendChild(prev); controls.appendChild(info); controls.appendChild(next); controls.appendChild(last);
      wrapper.appendChild(controls);
      first.addEventListener('click', function() {
        var p = parseInt(container.getAttribute('data-page') || '1', 10);
        if (p > 1) { container.setAttribute('data-page', '1'); applyFilterAndPaginate(); }
      });
      prev.addEventListener('click', function() {
        var p = parseInt(container.getAttribute('data-page') || '1', 10);
        if (p > 1) { container.setAttribute('data-page', String(p - 1)); applyFilterAndPaginate(); }
      });
      next.addEventListener('click', function() {
        var p = parseInt(container.getAttribute('data-page') || '1', 10);
        var tp = parseInt(container.getAttribute('data-total-pages') || '1', 10);
        if (p < tp) { container.setAttribute('data-page', String(p + 1)); applyFilterAndPaginate(); }
      });
      last.addEventListener('click', function() {
        var p = parseInt(container.getAttribute('data-page') || '1', 10);
        var tp = parseInt(container.getAttribute('data-total-pages') || '1', 10);
        if (p < tp) { container.setAttribute('data-page', String(tp)); applyFilterAndPaginate(); }
      });
    }
    controls.hidden = false;
    controls.style.display = '';
    container.setAttribute('data-total-pages', String(totalPages));
    var pgInfo = controls.querySelector('.pg-info');
    pgInfo.setAttribute('data-msg-args', JSON.stringify({ page: page, totalPages: totalPages }));
    pgInfo.textContent = i18n.pageInfo
      .replace('{page}', String(page))
      .replace('{totalPages}', String(totalPages));
    controls.querySelector('.pg-first').disabled = page <= 1;
    controls.querySelector('.pg-prev').disabled = page <= 1;
    controls.querySelector('.pg-next').disabled = page >= totalPages;
    controls.querySelector('.pg-last').disabled = page >= totalPages;
  }

  // Severity filter click
  for (var i = 0; i < filters.length; i++) {
    filters[i].addEventListener('click', function() {
      var sev = this.getAttribute('data-filter');
      if (activeSev === sev) {
        activeSev = null;
        for (var j = 0; j < filters.length; j++) filters[j].classList.remove('stat-active');
      } else {
        activeSev = sev;
        for (var j = 0; j < filters.length; j++) {
          filters[j].classList.toggle('stat-active', filters[j].getAttribute('data-filter') === sev);
        }
        if (findingsSection) findingsSection.open = true;
      }
      // Reset to page 1 on filter change
      if (findingsContainer) findingsContainer.setAttribute('data-page', '1');
      applyFilterAndPaginate();
    });
  }

  // Level filter click (exclusive toggle — one level at a time)
  for (var i = 0; i < levelFilters.length; i++) {
    levelFilters[i].addEventListener('click', function() {
      var level = this.getAttribute('data-level-filter');
      if (activeLevel === level) {
        activeLevel = null;
        for (var j = 0; j < levelFilters.length; j++) levelFilters[j].classList.remove('level-active');
      } else {
        activeLevel = level;
        for (var j = 0; j < levelFilters.length; j++) {
          levelFilters[j].classList.toggle('level-active', levelFilters[j].getAttribute('data-level-filter') === level);
        }
        if (findingsSection) findingsSection.open = true;
      }
      if (findingsContainer) findingsContainer.setAttribute('data-page', '1');
      applyFilterAndPaginate();
    });
  }

  // Provenance filter click (additive toggle — click to add, click again to remove)
  for (var i = 0; i < provenanceFilters.length; i++) {
    provenanceFilters[i].addEventListener('click', function() {
      var lens = this.getAttribute('data-provenance-filter');
      var idx = activeLenses.indexOf(lens);
      if (idx >= 0) {
        activeLenses.splice(idx, 1);
        this.classList.remove('provenance-active');
      } else {
        activeLenses.push(lens);
        this.classList.add('provenance-active');
      }
      // Reset to page 1 on filter change
      if (findingsContainer) findingsContainer.setAttribute('data-page', '1');
      applyFilterAndPaginate();
    });
  }

  applyFilterAndPaginate();

  // ─── Deep-link: hash-scroll to a specific finding ───
  function scrollToFinding(hash) {
    if (!hash) return;
    var id = hash.replace('#', '');
    var target = document.getElementById(id);
    if (!target) return;
    // Clear any active filters so the target is not hidden
    if (activeSev) {
      activeSev = null;
      for (var j = 0; j < filters.length; j++) filters[j].classList.remove('stat-active');
    }
    if (activeLenses.length > 0) {
      activeLenses = [];
      for (var j = 0; j < provenanceFilters.length; j++) provenanceFilters[j].classList.remove('provenance-active');
    }
    // Navigate pagination to the page containing this finding
    if (findingsContainer) {
      var items = findingsContainer.querySelectorAll(':scope > .finding-card-wrap > details');
      for (var idx = 0; idx < items.length; idx++) {
        if (items[idx] === target) {
          var page = Math.floor(idx / PAGE_SIZE) + 1;
          findingsContainer.setAttribute('data-page', String(page));
          break;
        }
      }
      applyFilterAndPaginate();
    }
    // Open the finding card
    target.open = true;
    // Open the parent <details> (Top Findings section) if collapsed
    var parentDetails = target.closest('.section-collapsible');
    if (parentDetails) parentDetails.open = true;
    // Scroll into view with offset for fixed headers
    setTimeout(function() {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Highlight animation
      target.classList.add('finding-highlight');
      setTimeout(function() { target.classList.remove('finding-highlight'); }, 2400);
    }, 100);
  }
  if (location.hash && location.hash.startsWith('#finding-')) {
    scrollToFinding(location.hash);
  }
  window.addEventListener('hashchange', function() {
    if (location.hash.startsWith('#finding-')) scrollToFinding(location.hash);
  });

  // ─── Share button: copy finding URL to clipboard ───
  // Modern clipboard API only — no transient textarea fallback. Injecting a
  // temporary <textarea> caused axe-core to flag WCAG 4.1.3 status-message
  // findings because the insertion was not inside an aria-live region.
  // Reports are served over HTTPS where navigator.clipboard is universally
  // available; on unsupported contexts we fail silently.
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.finding-link-btn');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    var fid = btn.getAttribute('data-finding-id');
    var url = location.origin + location.pathname + '#' + fid;
    var originalLabel = btn.getAttribute('aria-label');
    function onCopied() {
      btn.classList.add('link-copied');
      btn.setAttribute('aria-label', i18n.linkCopied);
      setTimeout(function() {
        btn.classList.remove('link-copied');
        btn.setAttribute('aria-label', originalLabel);
      }, 1800);
      if (window.SondeQR && window.SondeQR.showQrModal) {
        window.SondeQR.showQrModal(url);
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(onCopied).catch(function() {});
    }
  });

  // ─── Megaphone: copy finding URL to clipboard before opening issue ───
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.finding-feedback-btn');
    if (!btn) return;
    e.stopPropagation();
    // The <a> tag handles opening the issue — we just also copy the finding URL
    var card = btn.closest('.finding-card');
    if (card && card.id) {
      var findingUrl = location.origin + location.pathname + '#' + card.id;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(findingUrl).catch(function() {});
      }
    }
  });

  // ─── Print on demand ────────────────────────────────────────
  //
  // "Download PDF" buttons and the OS-native print shortcut (Cmd+P /
  // Ctrl+P) both route through the browser's native window.print().
  // The cover page that lives inside every index.html flips visible
  // under @media print, screen-only chrome and interactive controls
  // disappear, and the user gets a branded paged PDF in their preferred
  // paper size — same code path Chromium uses when baking server-side
  // PDFs, just running in the user's own browser at click time.
  //
  // State management: beforeprint expands every <details>, clears active
  // filters, and disables pagination so the print snapshot includes all
  // findings. afterprint restores the interactive view so the user
  // returns to exactly where they left off.

  var _printState = null;
  function captureForPrint() {
    if (_printState) return;
    var detailsList = document.querySelectorAll('details');
    var closed = [];
    for (var i = 0; i < detailsList.length; i++) {
      if (!detailsList[i].open) {
        closed.push(detailsList[i]);
        detailsList[i].open = true;
      }
    }
    _printState = {
      closedDetails: closed,
      sev: activeSev,
      level: activeLevel,
      lenses: activeLenses.slice(),
      page: findingsContainer ? findingsContainer.getAttribute('data-page') : null,
    };
    if (activeSev) {
      activeSev = null;
      for (var i = 0; i < filters.length; i++) filters[i].classList.remove('stat-active');
    }
    if (activeLevel) {
      activeLevel = null;
      for (var i = 0; i < levelFilters.length; i++) levelFilters[i].classList.remove('level-active');
    }
    if (activeLenses.length > 0) {
      activeLenses = [];
      for (var i = 0; i < provenanceFilters.length; i++) provenanceFilters[i].classList.remove('provenance-active');
    }
    if (findingsContainer) findingsContainer.setAttribute('data-page', '1');
    applyFilterAndPaginate();
    // Force every finding card visible — pagination's inline display:none
    // would otherwise win over @media print rules.
    var wraps = document.querySelectorAll('.finding-card-wrap');
    for (var i = 0; i < wraps.length; i++) {
      wraps[i].setAttribute('data-pre-print-display', wraps[i].style.display || '');
      wraps[i].style.display = '';
    }
  }

  function restoreFromPrint() {
    if (!_printState) return;
    for (var i = 0; i < _printState.closedDetails.length; i++) {
      _printState.closedDetails[i].open = false;
    }
    activeSev = _printState.sev;
    activeLevel = _printState.level;
    activeLenses = _printState.lenses;
    if (activeSev) {
      for (var i = 0; i < filters.length; i++) {
        filters[i].classList.toggle('stat-active', filters[i].getAttribute('data-filter') === activeSev);
      }
    }
    if (activeLevel) {
      for (var i = 0; i < levelFilters.length; i++) {
        levelFilters[i].classList.toggle('level-active', levelFilters[i].getAttribute('data-level-filter') === activeLevel);
      }
    }
    if (activeLenses.length > 0) {
      for (var i = 0; i < provenanceFilters.length; i++) {
        provenanceFilters[i].classList.toggle('provenance-active', activeLenses.indexOf(provenanceFilters[i].getAttribute('data-provenance-filter')) >= 0);
      }
    }
    if (findingsContainer && _printState.page !== null) {
      findingsContainer.setAttribute('data-page', _printState.page);
    }
    var wraps = document.querySelectorAll('.finding-card-wrap[data-pre-print-display]');
    for (var i = 0; i < wraps.length; i++) {
      wraps[i].removeAttribute('data-pre-print-display');
    }
    applyFilterAndPaginate();
    _printState = null;
  }

  window.addEventListener('beforeprint', captureForPrint);
  window.addEventListener('afterprint', restoreFromPrint);

  // Download PDF — default path fetches the server-baked ./report.pdf
  // and triggers a save. window.print() runs as the no-PDF fallback if
  // the blob fetch returns 404 (e.g. local dev preview without a bake).
  //
  // The on-demand paged.js path (hidden iframe → polyfill → native
  // print dialog) is preserved behind the ?demo_print=1 URL flag so the
  // experimental client-side rendering remains demoable without being
  // the user-facing default. Chromium's window.print() engine has
  // incomplete CSS Paged Media support, which causes blank pages and
  // one-finding-per-page layouts in the generated PDF — server-baked
  // Chromium via Playwright page.pdf() does not have that limitation,
  // so the bake is what users download.
  var demoPrintEnabled = location.search.indexOf('demo_print=1') !== -1;

  if (demoPrintEnabled) {
    window.addEventListener('message', function(event) {
      var d = event.data;
      if (d && typeof d === 'object' && d.source === 'sonde-paged' && d.type === 'rendered') {
        window.SondeSpinner && window.SondeSpinner.hide();
      }
    });
  }

  // Spinner / iframe lifecycle for the demo print path. The 30s spinner
  // hide and 60s iframe removal are last-resort cleanup if paged.js
  // never posts back its 'rendered' message — they should never fire on
  // a healthy render.
  var DEMO_PRINT_SPINNER_TIMEOUT_MS = 30000;
  var DEMO_PRINT_IFRAME_REMOVE_MS = 60000;
  // Object URL revoke happens after the click event has had time to
  // start the download — 1s is well past the browser's blob handoff.
  var DOWNLOAD_REVOKE_DELAY_MS = 1000;

  document.querySelectorAll('[data-action="print"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (demoPrintEnabled) {
        e.preventDefault();
        if (window.SondeSpinner) {
          window.SondeSpinner.show(
            'Preparing your PDF\u2026',
            'Sonde is paginating your audit. The print dialog will open automatically.',
          );
        }
        var iframe = document.createElement('iframe');
        iframe.style.cssText = 'position:fixed;left:-9999px;top:0;width:8.5in;height:11in;border:0;visibility:hidden';
        iframe.setAttribute('aria-hidden', 'true');
        var u = new URL(location.href);
        u.searchParams.set('print', '1');
        iframe.src = u.toString();
        document.body.appendChild(iframe);
        setTimeout(function() { window.SondeSpinner && window.SondeSpinner.hide(); }, DEMO_PRINT_SPINNER_TIMEOUT_MS);
        setTimeout(function() { iframe.remove(); }, DEMO_PRINT_IFRAME_REMOVE_MS);
        return;
      }

      // Default: fetch the pre-baked ./report.pdf and save as a blob.
      // The downloaded filename combines the site slug and the page's
      // active locale so multiple downloads stay distinguishable in the
      // user's Downloads folder. A 4xx/5xx response (missing bake — e.g.
      // local dev preview, or a locale outside the configured fan-out)
      // falls back to window.print(); a network error surfaces an alert
      // so the user knows something actually went wrong.
      var href = link.getAttribute('href') || './report.pdf';
      var pageLocale = (document.documentElement.lang || 'en-US').trim() || 'en-US';
      var downloadName = (sondeSlug ? sondeSlug + '-audit-' + pageLocale : 'sonde-audit-' + pageLocale) + '.pdf';
      e.preventDefault();
      if (window.SondeSpinner) {
        window.SondeSpinner.show('Downloading your PDF\u2026', '');
      }
      fetch(href).then(function(res) {
        if (!res.ok) {
          // Server returned but the bake is missing — fall back to client print.
          var err = new Error('pdf-missing');
          err.code = 'pdf-missing';
          throw err;
        }
        return res.blob();
      }).then(function(blob) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = downloadName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function() { URL.revokeObjectURL(url); }, DOWNLOAD_REVOKE_DELAY_MS);
        if (window.SondeSpinner) window.SondeSpinner.hide();
      }).catch(function(err) {
        if (window.SondeSpinner) window.SondeSpinner.hide();
        if (err && err.code === 'pdf-missing') {
          window.print();
        } else {
          // Network error / CORS / abort — print fallback would silently
          // mask a real problem. Tell the user instead.
          alert('Could not download the PDF. Please check your connection and try again.');
        }
      });
    });
  });

  // OSCAL on-demand download. Lazy-loads assets/oscal-bundle.js (which
  // exposes window.SondeOscal.generate) and emits an OSCAL Assessment
  // Results JSON file from the page's findings. Same emitter Scribe
  // uses server-side for paying-customer compliance reports — bundled
  // for the browser via build-oscal-bundle.ts.
  var oscalBundleLoading = null;
  function loadOscalBundle() {
    if (window.SondeOscal && window.SondeOscal.generate) {
      return Promise.resolve();
    }
    if (oscalBundleLoading) return oscalBundleLoading;
    oscalBundleLoading = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = '../assets/oscal-bundle.js';
      s.onload = function () {
        if (window.SondeOscal && window.SondeOscal.generate) resolve();
        else reject(new Error('oscal-bundle loaded but window.SondeOscal.generate is missing'));
      };
      s.onerror = function () { reject(new Error('failed to load oscal-bundle.js')); };
      document.head.appendChild(s);
    });
    return oscalBundleLoading;
  }

  document.querySelectorAll('[data-action="oscal-download"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (window.SondeSpinner) {
        window.SondeSpinner.show('Generating OSCAL\u2026', 'Sonde is building your OSCAL Assessment Results document.');
      }
      var downloadName = (sondeSlug ? sondeSlug + '-oscal' : 'sonde-oscal') + '.json';
      Promise.all([loadOscalBundle(), fetch('./findings.json').then(function (res) {
        if (!res.ok) throw new Error('findings.json fetch failed: ' + res.status);
        return res.json();
      })]).then(function (results) {
        var data = results[1];
        var findings = (data && data.findings) || [];
        var oscal = window.SondeOscal.generate(findings, {
          url: data.url || '',
          entityName: data.entityName || data.url || '',
          scanDate: data.scanDate || new Date().toISOString(),
          vertical: sondeVertical,
          slug: sondeSlug,
        });
        var blob = new Blob([JSON.stringify(oscal)], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = downloadName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, DOWNLOAD_REVOKE_DELAY_MS);
        if (window.SondeSpinner) window.SondeSpinner.hide();
      }).catch(function (err) {
        if (window.SondeSpinner) window.SondeSpinner.hide();
        alert('Could not generate OSCAL: ' + (err && err.message ? err.message : 'unknown error'));
      });
    });
  });
})();
