(()=>{var Jh="170";var Om=0,Df=1,Bm=2;var Ao=1,rc=2,Si=3,si=0,tn=1,Ot=2,ii=0,lr=1,Un=2,Uf=3,Nf=4,zm=5,bs=100,km=101,Hm=102,Vm=103,Gm=104,Wm=200,Xm=201,qm=202,Ym=203,Cl=204,Il=205,Km=206,Zm=207,$m=208,Jm=209,jm=210,Qm=211,eg=212,tg=213,ng=214,Pl=0,Ll=1,Dl=2,dr=3,Ul=4,Nl=5,Fl=6,Ol=7,ip=0,ig=1,sg=2,Yi=0,jh=1,Qh=2,eu=3,Ro=4,rg=5,tu=6,nu=7,Ff="attached",og="detached",sp=300,pr=301,mr=302,Bl=303,zl=304,oc=306,Ci=1e3,Ti=1001,Es=1002,nn=1003,iu=1004;var or=1005;var _n=1006,co=1007;var ni=1008;var Nn=1009,rp=1010,op=1011,mo=1012,su=1013,Ts=1014,Zn=1015,En=1016,ru=1017,ou=1018,gr=1020,ap=35902,cp=1021,lp=1022,Ln=1023,hp=1024,up=1025,hr=1026,xr=1027,au=1028,cu=1029,fp=1030,lu=1031;var hu=1033,Sa=33776,Ea=33777,Ta=33778,Aa=33779,kl=35840,Hl=35841,Vl=35842,Gl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37808,Kl=37809,Zl=37810,$l=37811,Jl=37812,jl=37813,Ql=37814,eh=37815,th=37816,nh=37817,ih=37818,sh=37819,rh=37820,oh=37821,Ra=36492,ah=36494,ch=36495,dp=36283,lh=36284,hh=36285,uh=36286;var _r=2300,vr=2301,Kc=2302,Of=2400,Bf=2401,zf=2402,ag=2500;var pp=0,ac=1,Co=2,cg=3200,lg=3201;var mp=0,hg=1,Xi="",St="srgb",rn="srgb-linear",cc="linear",xt="srgb";var Xs=7680;var kf=519,ug=512,fg=513,dg=514,gp=515,pg=516,mg=517,gg=518,xg=519,fh=35044;var Hf="300 es",Ai=2e3,Ca=2001,Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vf=1234567,lo=Math.PI/180,yr=180/Math.PI;function Dn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function uu(i,e){return(i%e+e)%e}function _g(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vg(i,e,t){return i!==e?(t-i)/(e-i):0}function ho(i,e,t){return(1-t)*i+t*e}function yg(i,e,t,n){return ho(i,e,1-Math.exp(-t*n))}function Mg(i,e=1){return e-Math.abs(uu(i,e*2)-e)}function bg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Eg(i,e){return i+Math.random()*(e-i)}function Tg(i){return i*(.5-Math.random())}function Ag(i){i!==void 0&&(Vf=i);let e=Vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rg(i){return i*lo}function Cg(i){return i*yr}function Ig(i){return(i&i-1)===0&&i!==0}function Pg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Io={DEG2RAD:lo,RAD2DEG:yr,generateUUID:Dn,clamp:en,euclideanModulo:uu,mapLinear:_g,inverseLerp:vg,lerp:ho,damp:yg,pingpong:Mg,smoothstep:bg,smootherstep:wg,randInt:Sg,randFloat:Eg,randFloatSpread:Tg,seededRandom:Ag,degToRad:Rg,radToDeg:Cg,isPowerOfTwo:Ig,ceilPowerOfTwo:Pg,floorPowerOfTwo:Lg,setQuaternionFromProperEuler:Dg,normalize:yt,denormalize:Kn},se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],_=s[0],p=s[3],m=s[6],v=s[1],M=s[4],g=s[7],w=s[2],E=s[5],S=s[8];return r[0]=o*_+a*v+c*w,r[3]=o*p+a*M+c*E,r[6]=o*m+a*g+c*S,r[1]=l*_+h*v+u*w,r[4]=l*p+h*M+u*E,r[7]=l*m+h*g+u*S,r[2]=f*_+d*v+x*w,r[5]=f*p+d*M+x*E,r[8]=f*m+d*g+x*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,x=t*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new $e;function xp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ug(){let i=go("canvas");return i.style.display="block",i}var Gf={};function oo(i){i in Gf||(Gf[i]=!0,console.warn(i))}function Ng(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Fg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Og(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Qe={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(i.r=ur(i.r),i.g=ur(i.g),i.b=ur(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xi?cc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wf=[.64,.33,.3,.6,.15,.06],Xf=[.2126,.7152,.0722],qf=[.3127,.329],Yf=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kf=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[rn]:{primaries:Wf,whitePoint:qf,transfer:cc,toXYZ:Yf,fromXYZ:Kf,luminanceCoefficients:Xf,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:Wf,whitePoint:qf,transfer:xt,toXYZ:Yf,fromXYZ:Kf,luminanceCoefficients:Xf,outputColorSpaceConfig:{drawingBufferColorSpace:St}}});var qs,dh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=go("canvas")),qs.width=e.width,qs.height=e.height;let n=qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=go("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bg=0,Ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($c(s[o].image)):r.push($c(s[o]))}else r=$c(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function $c(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?dh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zg=0,Zt=class i extends Zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ti,s=Ti,r=_n,o=ni,a=Ln,c=Nn,l=i.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Dn(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=sp;Zt.DEFAULT_ANISOTROPY=1;var ut=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],x=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,g=(d+1)/2,w=(m+1)/2,E=(h+f)/4,S=(u+_)/4,A=(x+p)/4;return M>g&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=S/n):g>w?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=E/s,r=A/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=S/r,s=A/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-x)*(p-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ph=class extends Zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends ph{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pa=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mh=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var an=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],x=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==x){let p=1-a,m=c*f+l*d+h*x+u*_,v=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let w=Math.sqrt(M),E=Math.atan2(w,m*v);p=Math.sin(p*E)/w,a=Math.sin(a*E)/w}let g=a*v;if(c=c*p+f*g,l=l*p+d*g,h=h*p+x*g,u=u*p+_*g,p===1-a){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+h*u+c*d-l*f,e[t+1]=c*x+h*f+l*u-a*d,e[t+2]=l*x+h*d+a*f-c*u,e[t+3]=h*x-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"YZX":this._x=f*h*u+l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u-f*d*x;break;case"XZY":this._x=f*h*u-l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jc=new P,Zf=new an,un=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Zo.subVectors(this.max,jr),Ys.subVectors(e.a,jr),Ks.subVectors(e.b,jr),Zs.subVectors(e.c,jr),zi.subVectors(Ks,Ys),ki.subVectors(Zs,Ks),ms.subVectors(Ys,Zs);let t=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-ms.z,ms.y,zi.z,0,-zi.x,ki.z,0,-ki.x,ms.z,0,-ms.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-ms.y,ms.x,0];return!jc(t,Ys,Ks,Zs,Zo)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,Ys,Ks,Zs,Zo))?!1:($o.crossVectors(zi,ki),t=[$o.x,$o.y,$o.z],jc(t,Ys,Ks,Zs,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_i=[new P,new P,new P,new P,new P,new P,new P,new P],Xn=new P,Ko=new un,Ys=new P,Ks=new P,Zs=new P,zi=new P,ki=new P,ms=new P,jr=new P,Zo=new P,$o=new P,gs=new P;function jc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gs.fromArray(i,r);let a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),h=n.dot(gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var kg=new un,Qr=new P,Qc=new P,bn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(Qc)),this.expandByPoint(Qr.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new P,el=new P,Jo=new P,Hi=new P,tl=new P,jo=new P,nl=new P,Mr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){el.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(el);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Jo),a=Hi.dot(this.direction),c=-Hi.dot(Jo),l=Hi.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*c-a,f=o*a-c,x=r*h,u>=0)if(f>=-x)if(f<=x){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(el).addScaledVector(Jo,f),d}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,s,r){tl.subVectors(t,e),jo.subVectors(n,e),nl.crossVectors(tl,jo);let o=this.direction.dot(nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);let c=a*this.direction.dot(jo.crossVectors(Hi,jo));if(c<0)return null;let l=a*this.direction.dot(tl.cross(Hi));if(l<0||c+l>o)return null;let h=-a*Hi.dot(nl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,x,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,x,_,p)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,x,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=x,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,x=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+x*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=x+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,x=l*h,_=l*u;t[0]=f+_*a,t[4]=x*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-x,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,x=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,x=a*h,_=a*u;t[0]=c*h,t[4]=x*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,x=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=x*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+x,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*c,d=o*l,x=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Vg)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Vi.crossVectors(n,yn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Vi.crossVectors(n,yn)),Vi.normalize(),Qo.crossVectors(yn,Vi),s[0]=Vi.x,s[4]=Qo.x,s[8]=yn.x,s[1]=Vi.y,s[5]=Qo.y,s[9]=yn.y,s[2]=Vi.z,s[6]=Qo.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],_=n[6],p=n[10],m=n[14],v=n[3],M=n[7],g=n[11],w=n[15],E=s[0],S=s[4],A=s[8],b=s[12],y=s[1],R=s[5],D=s[9],U=s[13],N=s[2],V=s[6],B=s[10],Z=s[14],O=s[3],W=s[7],J=s[11],ie=s[15];return r[0]=o*E+a*y+c*N+l*O,r[4]=o*S+a*R+c*V+l*W,r[8]=o*A+a*D+c*B+l*J,r[12]=o*b+a*U+c*Z+l*ie,r[1]=h*E+u*y+f*N+d*O,r[5]=h*S+u*R+f*V+d*W,r[9]=h*A+u*D+f*B+d*J,r[13]=h*b+u*U+f*Z+d*ie,r[2]=x*E+_*y+p*N+m*O,r[6]=x*S+_*R+p*V+m*W,r[10]=x*A+_*D+p*B+m*J,r[14]=x*b+_*U+p*Z+m*ie,r[3]=v*E+M*y+g*N+w*O,r[7]=v*S+M*R+g*V+w*W,r[11]=v*A+M*D+g*B+w*J,r[15]=v*b+M*U+g*Z+w*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],_=e[7],p=e[11],m=e[15];return x*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+p*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],_=e[13],p=e[14],m=e[15],v=u*p*l-_*f*l+_*c*d-a*p*d-u*c*m+a*f*m,M=x*f*l-h*p*l-x*c*d+o*p*d+h*c*m-o*f*m,g=h*_*l-x*u*l+x*a*d-o*_*d-h*a*m+o*u*m,w=x*u*c-h*_*c-x*a*f+o*_*f+h*a*p-o*u*p,E=t*v+n*M+s*g+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/E;return e[0]=v*S,e[1]=(_*f*r-u*p*r-_*s*d+n*p*d+u*s*m-n*f*m)*S,e[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*m+n*c*m)*S,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*S,e[4]=M*S,e[5]=(h*p*r-x*f*r+x*s*d-t*p*d-h*s*m+t*f*m)*S,e[6]=(x*c*r-o*p*r-x*s*l+t*p*l+o*s*m-t*c*m)*S,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*S,e[8]=g*S,e[9]=(x*u*r-h*_*r-x*n*d+t*_*d+h*n*m-t*u*m)*S,e[10]=(o*_*r-x*a*r+x*n*l-t*_*l-o*n*m+t*a*m)*S,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*S,e[12]=w*S,e[13]=(h*_*s-x*u*s+x*n*f-t*_*f-h*n*p+t*u*p)*S,e[14]=(x*a*s-o*_*s-x*n*c+t*_*c+o*n*p-t*a*p)*S,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*S,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,x=r*u,_=o*h,p=o*u,m=a*u,v=c*l,M=c*h,g=c*u,w=n.x,E=n.y,S=n.z;return s[0]=(1-(_+m))*w,s[1]=(d+g)*w,s[2]=(x-M)*w,s[3]=0,s[4]=(d-g)*E,s[5]=(1-(f+m))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(x+M)*S,s[9]=(p-v)*S,s[10]=(1-(f+_))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);let l=1/r,h=1/o,u=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ai){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,x;if(a===Ai)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ca)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ai){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,d=(n+s)*h,x,_;if(a===Ai)x=(o+r)*u,_=-2*u;else if(a===Ca)x=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},$s=new P,qn=new We,Hg=new P(0,0,0),Vg=new P(1,1,1),Vi=new P,Qo=new P,yn=new P,$f=new We,Jf=new an,fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $f.makeRotationFromQuaternion(e),this.setFromRotationMatrix($f,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jf.setFromEuler(this),this.setFromQuaternion(Jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gg=0,jf=new P,Js=new an,yi=new We,ea=new P,eo=new P,Wg=new P,Xg=new an,Qf=new P(1,0,0),ed=new P(0,1,0),td=new P(0,0,1),nd={type:"added"},qg={type:"removed"},js={type:"childadded",child:null},il={type:"childremoved",child:null},Ut=class i extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new fn,n=new an,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new $e}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Qf,e)}rotateY(e){return this.rotateOnAxis(ed,e)}rotateZ(e){return this.rotateOnAxis(td,e)}translateOnAxis(e,t){return jf.copy(e).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qf,e)}translateY(e){return this.translateOnAxis(ed,e)}translateZ(e){return this.translateOnAxis(td,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(eo,ea,this.up):yi.lookAt(ea,eo,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(yi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nd),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qg),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nd),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,Wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,Xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new P(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new P,Mi=new P,sl=new P,bi=new P,Qs=new P,er=new P,id=new P,rl=new P,ol=new P,al=new P,cl=new ut,ll=new ut,hl=new ut,ws=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yn.subVectors(e,t),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yn.subVectors(s,t),Mi.subVectors(n,t),sl.subVectors(e,t);let o=Yn.dot(Yn),a=Yn.dot(Mi),c=Yn.dot(sl),l=Mi.dot(Mi),h=Mi.dot(sl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bi.x),c.addScaledVector(o,bi.y),c.addScaledVector(a,bi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return cl.setScalar(0),ll.setScalar(0),hl.setScalar(0),cl.fromBufferAttribute(e,t),ll.fromBufferAttribute(e,n),hl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(ll,r.y),o.addScaledVector(hl,r.z),o}static isFrontFacing(e,t,n,s){return Yn.subVectors(n,t),Mi.subVectors(e,t),Yn.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Yn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Qs.subVectors(s,n),er.subVectors(r,n),rl.subVectors(e,n);let c=Qs.dot(rl),l=er.dot(rl);if(c<=0&&l<=0)return t.copy(n);ol.subVectors(e,s);let h=Qs.dot(ol),u=er.dot(ol);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Qs,o);al.subVectors(e,r);let d=Qs.dot(al),x=er.dot(al);if(x>=0&&d<=x)return t.copy(r);let _=d*l-c*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(er,a);let p=h*x-d*u;if(p<=0&&u-h>=0&&d-x>=0)return id.subVectors(r,s),a=(u-h)/(u-h+(d-x)),t.copy(s).addScaledVector(id,a);let m=1/(p+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(Qs,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function ul(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=uu(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ul(o,r,e+1/3),this.g=ul(o,r,e),this.b=ul(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=_p[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Qe.fromWorkingColorSpace(hn.copy(this),e),Math.round(en(hn.r*255,0,255))*65536+Math.round(en(hn.g*255,0,255))*256+Math.round(en(hn.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=St){Qe.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(ta);let n=ho(Gi.h,ta.h,t),s=ho(Gi.s,ta.s,t),r=ho(Gi.l,ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Ee;Ee.NAMES=_p;var Yg=0,wn=class extends Zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Dn(),this.name="",this.blending=lr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Il,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cl&&(n.blendSrc=this.blendSrc),this.blendDst!==Il&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},kt=class extends wn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new P,na=new se,He=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}};var Da=class extends He{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ua=class extends He{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends He{constructor(e,t,n){super(new Float32Array(e),t,n)}},Kg=0,Pn=new We,fl=new Ut,tr=new P,Mn=new un,to=new un,Qt=new P,tt=class i extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xp(e)?Ua:Da)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Mn.min,to.min),Mn.expandByPoint(Qt),Qt.addVectors(Mn.max,to.max),Mn.expandByPoint(Qt)):(Mn.expandByPoint(to.min),Mn.expandByPoint(to.max))}Mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Qt.fromBufferAttribute(a,l),c&&(tr.fromBufferAttribute(e,l),Qt.add(tr)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new P,c[A]=new P;let l=new P,h=new P,u=new P,f=new se,d=new se,x=new se,_=new P,p=new P;function m(A,b,y){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),x.sub(f);let R=1/(d.x*x.y-x.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(R),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(R),a[A].add(_),a[b].add(_),a[y].add(_),c[A].add(p),c[b].add(p),c[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,b=v.length;A<b;++A){let y=v[A],R=y.start,D=y.count;for(let U=R,N=R+D;U<N;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let M=new P,g=new P,w=new P,E=new P;function S(A){w.fromBufferAttribute(s,A),E.copy(w);let b=a[A];M.copy(b),M.sub(w.multiplyScalar(w.dot(b))).normalize(),g.crossVectors(E,b);let R=g.dot(c[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,R)}for(let A=0,b=v.length;A<b;++A){let y=v[A],R=y.start,D=y.count;for(let U=R,N=R+D;U<N;U+=3)S(e.getX(U+0)),S(e.getX(U+1)),S(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){let x=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,x=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[x++]=l[d++]}return new He(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sd=new We,xs=new Mr,ia=new bn,rd=new P,sa=new P,ra=new P,oa=new P,dl=new P,aa=new P,od=new P,ca=new P,de=class extends Ut{constructor(e=new tt,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){aa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(dl.fromBufferAttribute(u,e),o?aa.addScaledVector(dl,h):aa.addScaledVector(dl.sub(t),h))}t.add(aa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(ia.containsPoint(xs.origin)===!1&&(xs.intersectSphere(ia,rd)===null||xs.origin.distanceToSquared(rd)>(e.far-e.near)**2))&&(sd.copy(r).invert(),xs.copy(e.ray).applyMatrix4(sd),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let p=f[x],m=o[p.materialIndex],v=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let g=v,w=M;g<w;g+=3){let E=a.getX(g),S=a.getX(g+1),A=a.getX(g+2);s=la(this,m,e,n,l,h,u,E,S,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=x,m=_;p<m;p+=3){let v=a.getX(p),M=a.getX(p+1),g=a.getX(p+2);s=la(this,o,e,n,l,h,u,v,M,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let p=f[x],m=o[p.materialIndex],v=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let g=v,w=M;g<w;g+=3){let E=g,S=g+1,A=g+2;s=la(this,m,e,n,l,h,u,E,S,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=x,m=_;p<m;p+=3){let v=p,M=p+1,g=p+2;s=la(this,o,e,n,l,h,u,v,M,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Zg(i,e,t,n,s,r,o,a){let c;if(e.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===si,a),c===null)return null;ca.copy(a),ca.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ca);return l<t.near||l>t.far?null:{distance:l,point:ca.clone(),object:i}}function la(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,sa),i.getVertexPosition(c,ra),i.getVertexPosition(l,oa);let h=Zg(i,e,t,n,sa,ra,oa,od);if(h){let u=new P;ws.getBarycoord(od,sa,ra,oa,u),s&&(h.uv=ws.getInterpolatedAttribute(s,a,c,l,u,new se)),r&&(h.uv1=ws.getInterpolatedAttribute(r,a,c,l,u,new se)),o&&(h.normal=ws.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new P,materialIndex:0};ws.getNormal(sa,ra,oa,f.normal),h.face=f,h.barycoord=u}return h}var rt=class i extends tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function x(_,p,m,v,M,g,w,E,S,A,b){let y=g/S,R=w/A,D=g/2,U=w/2,N=E/2,V=S+1,B=A+1,Z=0,O=0,W=new P;for(let J=0;J<B;J++){let ie=J*R-U;for(let ve=0;ve<V;ve++){let Ue=ve*y-D;W[_]=Ue*v,W[p]=ie*M,W[m]=N,l.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[m]=E>0?1:-1,h.push(W.x,W.y,W.z),u.push(ve/S),u.push(1-J/A),Z+=1}}for(let J=0;J<A;J++)for(let ie=0;ie<S;ie++){let ve=f+ie+V*J,Ue=f+ie+V*(J+1),q=f+(ie+1)+V*(J+1),ne=f+(ie+1)+V*J;c.push(ve,Ue,ne),c.push(Ue,q,ne),O+=6}a.addGroup(d,O,b),d+=O,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function br(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=br(i[t]);for(let s in n)e[s]=n[s]}return e}function $g(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var ai={clone:br,merge:mn},Jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nt=class extends wn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=$g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Na=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new P,ad=new se,cd=new se,Kt=class extends Na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,ad,cd),t.subVectors(cd,ad)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},nr=-90,ir=1,gh=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(nr,ir,e,t);s.layers=this.layers,this.add(s);let r=new Kt(nr,ir,e,t);r.layers=this.layers,this.add(r);let o=new Kt(nr,ir,e,t);o.layers=this.layers,this.add(o);let a=new Kt(nr,ir,e,t);a.layers=this.layers,this.add(a);let c=new Kt(nr,ir,e,t);c.layers=this.layers,this.add(c);let l=new Kt(nr,ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Fa=class extends Zt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xh=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rt(5,5,5),r=new Nt({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ii});r.uniforms.tEquirect.value=t;let o=new de(s,r),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=_n),new gh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},pl=new P,Qg=new P,e0=new $e,Ei=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=pl.subVectors(n,t).cross(Qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(pl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||e0.getNormalMatrix(e),s=this.coplanarPoint(pl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_s=new bn,ha=new P,xo=class{constructor(e=new Ei,t=new Ei,n=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],x=s[9],_=s[10],p=s[11],m=s[12],v=s[13],M=s[14],g=s[15];if(n[0].setComponents(c-r,f-l,p-d,g-m).normalize(),n[1].setComponents(c+r,f+l,p+d,g+m).normalize(),n[2].setComponents(c+o,f+h,p+x,g+v).normalize(),n[3].setComponents(c-o,f-h,p-x,g-v).normalize(),n[4].setComponents(c-a,f-u,p-_,g-M).normalize(),t===Ai)n[5].setComponents(c+a,f+u,p+_,g+M).normalize();else if(t===Ca)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function t0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],_=u[d];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var sn=class i extends tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],x=[],_=[],p=[];for(let m=0;m<h;m++){let v=m*f-o;for(let M=0;M<l;M++){let g=M*u-r;x.push(g,-v,0),_.push(0,0,1),p.push(M/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let M=v+l*m,g=v+l*(m+1),w=v+1+l*(m+1),E=v+1+l*m;d.push(M,g,E),d.push(g,w,E)}this.setIndex(d),this.setAttribute("position",new ct(x,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,u0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,m0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,g0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,E0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ex=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ix=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$x=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,l_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,h_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,__=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,D_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:c0,aomap_pars_fragment:l0,batching_pars_vertex:h0,batching_vertex:u0,begin_vertex:f0,beginnormal_vertex:d0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:y0,color_fragment:M0,color_pars_fragment:b0,color_pars_vertex:w0,color_vertex:S0,common:E0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:I0,emissivemap_pars_fragment:P0,colorspace_fragment:L0,colorspace_pars_fragment:D0,envmap_fragment:U0,envmap_common_pars_fragment:N0,envmap_pars_fragment:F0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:K0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:k0,fog_fragment:H0,fog_pars_fragment:V0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:Y0,lights_toon_fragment:Z0,lights_toon_pars_fragment:$0,lights_phong_fragment:J0,lights_phong_pars_fragment:j0,lights_physical_fragment:Q0,lights_physical_pars_fragment:ex,lights_fragment_begin:tx,lights_fragment_maps:nx,lights_fragment_end:ix,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:ox,logdepthbuf_vertex:ax,map_fragment:cx,map_pars_fragment:lx,map_particle_fragment:hx,map_particle_pars_fragment:ux,metalnessmap_fragment:fx,metalnessmap_pars_fragment:dx,morphinstance_vertex:px,morphcolor_vertex:mx,morphnormal_vertex:gx,morphtarget_pars_vertex:xx,morphtarget_vertex:_x,normal_fragment_begin:vx,normal_fragment_maps:yx,normal_pars_fragment:Mx,normal_pars_vertex:bx,normal_vertex:wx,normalmap_pars_fragment:Sx,clearcoat_normal_fragment_begin:Ex,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:Ax,iridescence_pars_fragment:Rx,opaque_fragment:Cx,packing:Ix,premultiplied_alpha_fragment:Px,project_vertex:Lx,dithering_fragment:Dx,dithering_pars_fragment:Ux,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Fx,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Bx,shadowmap_vertex:zx,shadowmask_pars_fragment:kx,skinbase_vertex:Hx,skinning_pars_vertex:Vx,skinning_vertex:Gx,skinnormal_vertex:Wx,specularmap_fragment:Xx,specularmap_pars_fragment:qx,tonemapping_fragment:Yx,tonemapping_pars_fragment:Kx,transmission_fragment:Zx,transmission_pars_fragment:$x,uv_pars_fragment:Jx,uv_pars_vertex:jx,uv_vertex:Qx,worldpos_vertex:e_,background_vert:t_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:s_,cube_vert:r_,cube_frag:o_,depth_vert:a_,depth_frag:c_,distanceRGBA_vert:l_,distanceRGBA_frag:h_,equirect_vert:u_,equirect_frag:f_,linedashed_vert:d_,linedashed_frag:p_,meshbasic_vert:m_,meshbasic_frag:g_,meshlambert_vert:x_,meshlambert_frag:__,meshmatcap_vert:v_,meshmatcap_frag:y_,meshnormal_vert:M_,meshnormal_frag:b_,meshphong_vert:w_,meshphong_frag:S_,meshphysical_vert:E_,meshphysical_frag:T_,meshtoon_vert:A_,meshtoon_frag:R_,points_vert:C_,points_frag:I_,shadow_vert:P_,shadow_frag:L_,sprite_vert:D_,sprite_frag:U_},Me={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ti={basic:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ee(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:mn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:mn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:mn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ee(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:mn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:mn([Me.points,Me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:mn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:mn([Me.common,Me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:mn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:mn([Me.sprite,Me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:mn([Me.common,Me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:mn([Me.lights,Me.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ti.physical={uniforms:mn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var ua={r:0,b:0,g:0},vs=new fn,N_=new We;function F_(i,e,t,n,s,r,o){let a=new Ee(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function x(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M)),M}function _(v){let M=!1,g=x(v);g===null?m(a,c):g&&g.isColor&&(m(g,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,M){let g=x(M);g&&(g.isCubeTexture||g.mapping===oc)?(h===void 0&&(h=new de(new rt(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:br(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vs.copy(M.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(N_.makeRotationFromEuler(vs)),h.material.toneMapped=Qe.getTransfer(g.colorSpace)!==xt,(u!==g||f!==g.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,f=g.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new de(new sn(2,2),new Nt({name:"BackgroundMaterial",uniforms:br(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(g.colorSpace)!==xt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=g,f=g.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(ua,vp(i)),n.buffers.color.setClear(ua.r,ua.g,ua.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:_,addToRenderList:p}}function O_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,R,D,U,N){let V=!1,B=u(U,D,R);r!==B&&(r=B,l(r.object)),V=d(y,U,D,N),V&&x(y,U,D,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,g(y,R,D,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,R,D){let U=D.wireframe===!0,N=n[y.id];N===void 0&&(N={},n[y.id]=N);let V=N[R.id];V===void 0&&(V={},N[R.id]=V);let B=V[U];return B===void 0&&(B=f(c()),V[U]=B),B}function f(y){let R=[],D=[],U=[];for(let N=0;N<t;N++)R[N]=0,D[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:U,object:y,attributes:{},index:null}}function d(y,R,D,U){let N=r.attributes,V=R.attributes,B=0,Z=D.getAttributes();for(let O in Z)if(Z[O].location>=0){let J=N[O],ie=V[O];if(ie===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),J===void 0||J.attribute!==ie||ie&&J.data!==ie.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function x(y,R,D,U){let N={},V=R.attributes,B=0,Z=D.getAttributes();for(let O in Z)if(Z[O].location>=0){let J=V[O];J===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));let ie={};ie.attribute=J,J&&J.data&&(ie.data=J.data),N[O]=ie,B++}r.attributes=N,r.attributesNum=B,r.index=U}function _(){let y=r.newAttributes;for(let R=0,D=y.length;R<D;R++)y[R]=0}function p(y){m(y,0)}function m(y,R){let D=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;D[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),N[y]!==R&&(i.vertexAttribDivisor(y,R),N[y]=R)}function v(){let y=r.newAttributes,R=r.enabledAttributes;for(let D=0,U=R.length;D<U;D++)R[D]!==y[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function M(y,R,D,U,N,V,B){B===!0?i.vertexAttribIPointer(y,R,D,N,V):i.vertexAttribPointer(y,R,D,U,N,V)}function g(y,R,D,U){_();let N=U.attributes,V=D.getAttributes(),B=R.defaultAttributeValues;for(let Z in V){let O=V[Z];if(O.location>=0){let W=N[Z];if(W===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){let J=W.normalized,ie=W.itemSize,ve=e.get(W);if(ve===void 0)continue;let Ue=ve.buffer,q=ve.type,ne=ve.bytesPerElement,we=q===i.INT||q===i.UNSIGNED_INT||W.gpuType===su;if(W.isInterleavedBufferAttribute){let ue=W.data,Ie=ue.stride,Ve=W.offset;if(ue.isInstancedInterleavedBuffer){for(let Ne=0;Ne<O.locationSize;Ne++)m(O.location+Ne,ue.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ne=0;Ne<O.locationSize;Ne++)p(O.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let Ne=0;Ne<O.locationSize;Ne++)M(O.location+Ne,ie/O.locationSize,q,J,Ie*ne,(Ve+ie/O.locationSize*Ne)*ne,we)}else{if(W.isInstancedBufferAttribute){for(let ue=0;ue<O.locationSize;ue++)m(O.location+ue,W.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ue=0;ue<O.locationSize;ue++)p(O.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let ue=0;ue<O.locationSize;ue++)M(O.location+ue,ie/O.locationSize,q,J,ie*ne,ie/O.locationSize*ue*ne,we)}}else if(B!==void 0){let J=B[Z];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(O.location,J);break;case 3:i.vertexAttrib3fv(O.location,J);break;case 4:i.vertexAttrib4fv(O.location,J);break;default:i.vertexAttrib1fv(O.location,J)}}}}v()}function w(){A();for(let y in n){let R=n[y];for(let D in R){let U=R[D];for(let N in U)h(U[N].object),delete U[N];delete R[D]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let D in R){let U=R[D];for(let N in U)h(U[N].object),delete U[N];delete R[D]}delete n[y.id]}function S(y){for(let R in n){let D=n[R];if(D[y.id]===void 0)continue;let U=D[y.id];for(let N in U)h(U[N].object),delete U[N];delete D[y.id]}}function A(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function B_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*f[_];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function z_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==Ln&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let A=S===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Nn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Zn&&!A)}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:g,vertexTextures:w,maxSamples:E}}function k_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ei,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||x===null||x.length===0||r&&!p)r?h(null):l();else{let v=r?0:n,M=v*4,g=m.clippingState||null;c.value=g,g=h(x,f,M,d);for(let w=0;w!==M;++w)g[w]=t[w];m.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=c.value,x!==!0||p===null){let m=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,g=d;M!==_;++M,g+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(p,g),p[g+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function H_(i){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=pr:a===zl&&(o.mapping=mr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Bl||a===zl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new xh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var $i=class extends Na{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ar=4,ld=[.125,.215,.35,.446,.526,.582],Ss=20,ml=new $i,hd=new Ee,gl=null,xl=0,_l=0,vl=!1,Ms=(1+Math.sqrt(5))/2,sr=1/Ms,ud=[new P(-Ms,sr,0),new P(Ms,sr,0),new P(-sr,0,Ms),new P(sr,0,Ms),new P(0,Ms,-sr),new P(0,Ms,sr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){gl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gl,xl,_l),this._renderer.xr.enabled=vl,e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:En,format:Ln,colorSpace:rn,depthBuffer:!1},s=fd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V_(r)),this._blurMaterial=G_(r,e,t)}return s}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,ml)}_sceneToCubeUV(e,t,n,s){let a=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(hd),h.toneMapping=Yi,h.autoClear=!1;let d=new kt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new de(new rt,d),_=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(hd),_=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let M=this._cubeSize;fa(s,v*M,m>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pr||e.mapping===mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;fa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ml)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ud[(s-r-1)%ud.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ss-1),_=r/x,p=isFinite(r)?1+Math.floor(h*_):Ss;p>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ss}`);let m=[],v=0;for(let S=0;S<Ss;++S){let A=S/_,b=Math.exp(-A*A/2);m.push(b),S===0?v+=b:S<p&&(v+=2*b)}for(let S=0;S<m.length;S++)m[S]=m[S]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-n;let g=this._sizeLods[s],w=3*g*(s>M-ar?s-M+ar:0),E=4*(this._cubeSize-g);fa(t,w,E,3*g,2*g),c.setRenderTarget(t),c.render(u,ml)}};function V_(i){let e=[],t=[],n=[],s=i,r=i-ar+1+ld.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ar?c=ld[o-i+ar-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,_=3,p=2,m=1,v=new Float32Array(_*x*d),M=new Float32Array(p*x*d),g=new Float32Array(m*x*d);for(let E=0;E<d;E++){let S=E%3*2/3-1,A=E>2?0:-1,b=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];v.set(b,_*x*E),M.set(f,p*x*E);let y=[E,E,E,E,E,E];g.set(y,m*x*E)}let w=new tt;w.setAttribute("position",new He(v,_)),w.setAttribute("uv",new He(M,p)),w.setAttribute("faceIndex",new He(g,m)),e.push(w),s>ar&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fd(i,e,t){let n=new on(i,e,t);return n.texture.mapping=oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function G_(i,e,t){let n=new Float32Array(Ss),s=new P(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function dd(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function pd(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function W_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Bl||c===zl,h=c===pr||c===mr;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new wr(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new wr(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function X_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&oo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function q_(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let _=f.morphAttributes[x];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let x in f)e.update(f[x],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let _=d[x];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,x=u.attributes.position,_=0;if(d!==null){let v=d.array;_=d.version;for(let M=0,g=v.length;M<g;M+=3){let w=v[M+0],E=v[M+1],S=v[M+2];f.push(w,E,E,S,S,w)}}else if(x!==void 0){let v=x.array;_=x.version;for(let M=0,g=v.length/3-1;M<g;M+=3){let w=M+0,E=M+1,S=M+2;f.push(w,E,E,S,S,w)}}else return;let p=new(xp(f)?Ua:Da)(f,1);p.version=_;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Y_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,f*o,x),t.update(d,n,x))}function h(f,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let p=0;for(let m=0;m<x;m++)p+=d[m];t.update(p,n,1)}function u(f,d,x,_){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,x);let m=0;for(let v=0;v<x;v++)m+=d[v]*_[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function K_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Z_(i,e,t){let n=new WeakMap,s=new ut;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;d===!0&&(M=1),x===!0&&(M=2),_===!0&&(M=3);let g=a.attributes.position.count*M,w=1;g>e.maxTextureSize&&(w=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let E=new Float32Array(g*w*4*u),S=new Pa(E,g,w,u);S.type=Zn,S.needsUpdate=!0;let A=M*4;for(let y=0;y<u;y++){let R=p[y],D=m[y],U=v[y],N=g*w*4*y;for(let V=0;V<R.count;V++){let B=V*A;d===!0&&(s.fromBufferAttribute(R,V),E[N+B+0]=s.x,E[N+B+1]=s.y,E[N+B+2]=s.z,E[N+B+3]=0),x===!0&&(s.fromBufferAttribute(D,V),E[N+B+4]=s.x,E[N+B+5]=s.y,E[N+B+6]=s.z,E[N+B+7]=0),_===!0&&(s.fromBufferAttribute(U,V),E[N+B+8]=s.x,E[N+B+9]=s.y,E[N+B+10]=s.z,E[N+B+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:S,size:new se(g,w)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function $_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Oa=class extends Zt{constructor(e,t,n,s,r,o,a,c,l,h=hr){if(h!==hr&&h!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hr&&(n=Ts),n===void 0&&h===xr&&(n=gr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mp=new Zt,md=new Oa(1,1),bp=new Pa,wp=new mh,Sp=new Fa,gd=[],xd=[],_d=new Float32Array(16),vd=new Float32Array(9),yd=new Float32Array(4);function Dr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gd[s];if(r===void 0&&(r=new Float32Array(s),gd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lc(i,e){let t=xd[e];t===void 0&&(t=new Int32Array(e),xd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function J_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),Jt(t,n)}}function nv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;vd.set(n),i.uniformMatrix3fv(this.addr,!1,vd),Jt(t,n)}}function iv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;_d.set(n),i.uniformMatrix4fv(this.addr,!1,_d),Jt(t,n)}}function sv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function cv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(md.compareFunction=gp,r=md):r=Mp,t.setTexture2D(e||r,s)}function dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wp,s)}function pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Sp,s)}function mv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bp,s)}function gv(i){switch(i){case 5126:return J_;case 35664:return j_;case 35665:return Q_;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return sv;case 35667:case 35671:return rv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return cv;case 36294:return lv;case 36295:return hv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return dv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}function xv(i,e){i.uniform1fv(this.addr,e)}function _v(i,e){let t=Dr(e,this.size,2);i.uniform2fv(this.addr,t)}function vv(i,e){let t=Dr(e,this.size,3);i.uniform3fv(this.addr,t)}function yv(i,e){let t=Dr(e,this.size,4);i.uniform4fv(this.addr,t)}function Mv(i,e){let t=Dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bv(i,e){let t=Dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wv(i,e){let t=Dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sv(i,e){i.uniform1iv(this.addr,e)}function Ev(i,e){i.uniform2iv(this.addr,e)}function Tv(i,e){i.uniform3iv(this.addr,e)}function Av(i,e){i.uniform4iv(this.addr,e)}function Rv(i,e){i.uniform1uiv(this.addr,e)}function Cv(i,e){i.uniform2uiv(this.addr,e)}function Iv(i,e){i.uniform3uiv(this.addr,e)}function Pv(i,e){i.uniform4uiv(this.addr,e)}function Lv(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mp,r[o])}function Dv(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wp,r[o])}function Uv(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Sp,r[o])}function Nv(i,e,t){let n=this.cache,s=e.length,r=lc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bp,r[o])}function Fv(i){switch(i){case 5126:return xv;case 35664:return _v;case 35665:return vv;case 35666:return yv;case 35674:return Mv;case 35675:return bv;case 35676:return wv;case 5124:case 35670:return Sv;case 35667:case 35671:return Ev;case 35668:case 35672:return Tv;case 35669:case 35673:return Av;case 5125:return Rv;case 36294:return Cv;case 36295:return Iv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Nv}}var _h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gv(t.type)}},vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fv(t.type)}},yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function Md(i,e){i.seq.push(e),i.map[e.id]=e}function Ov(i,e,t){let n=i.name,s=n.length;for(yl.lastIndex=0;;){let r=yl.exec(n),o=yl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Md(t,l===void 0?new _h(a,i,e):new vh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new yh(a),Md(t,u)),t=u}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ov(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function bd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Bv=37297,zv=0;function kv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var wd=new $e;function Hv(i){Qe._getMatrix(wd,Qe.workingColorSpace,i);let e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case cc:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+kv(i.getShaderSource(e),o)}else return s}function Vv(i,e){let t=Hv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gv(i,e){let t;switch(e){case jh:t="Linear";break;case Qh:t="Reinhard";break;case eu:t="Cineon";break;case Ro:t="ACESFilmic";break;case tu:t="AgX";break;case nu:t="Neutral";break;case rg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var da=new P;function Wv(){Qe.getLuminanceCoefficients(da);let i=da.x.toFixed(4),e=da.y.toFixed(4),t=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function qv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ao(i){return i!==""}function Ed(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Td(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(Kv,$v)}var Zv=new Map;function $v(i,e){let t=je[e];if(t===void 0){let n=Zv.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mh(t)}var Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(i){return i.replace(Jv,jv)}function jv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ao?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function ey(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ty(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function ny(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ip:e="ENVMAP_BLENDING_MULTIPLY";break;case ig:e="ENVMAP_BLENDING_MIX";break;case sg:e="ENVMAP_BLENDING_ADD";break}return e}function iy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Qv(t),l=ey(t),h=ty(t),u=ny(t),f=iy(t),d=Xv(t),x=qv(r),_=s.createProgram(),p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ao).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ao).join(`
`),m.length>0&&(m+=`
`)):(p=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),m=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?je.tonemapping_pars_fragment:"",t.toneMapping!==Yi?Gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Vv("linearToOutputTexel",t.outputColorSpace),Wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),o=Mh(o),o=Ed(o,t),o=Td(o,t),a=Mh(a),a=Ed(a,t),a=Td(a,t),o=Ad(o),a=Ad(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=v+p+o,g=v+m+a,w=bd(s,s.VERTEX_SHADER,M),E=bd(s,s.FRAGMENT_SHADER,g);s.attachShader(_,w),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function S(R){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(w).trim(),N=s.getShaderInfoLog(E).trim(),V=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,E);else{let Z=Sd(s,w,"vertex"),O=Sd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+Z+`
`+O)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||N==="")&&(B=!1);B&&(R.diagnostics={runnable:V,programLog:D,vertexShader:{log:U,prefix:p},fragmentShader:{log:N,prefix:m}})}s.deleteShader(w),s.deleteShader(E),A=new fr(s,_),b=Yv(s,_)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Bv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}var ry=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wh(e),t.set(e,n)),n}},wh=class{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}};function oy(i,e,t,n,s,r,o){let a=new La,c=new bh,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,y,R,D,U){let N=D.fog,V=U.geometry,B=b.isMeshStandardMaterial?D.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||B),O=Z&&Z.mapping===oc?Z.image.height:null,W=x[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let J=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ie=J!==void 0?J.length:0,ve=0;V.morphAttributes.position!==void 0&&(ve=1),V.morphAttributes.normal!==void 0&&(ve=2),V.morphAttributes.color!==void 0&&(ve=3);let Ue,q,ne,we;if(W){let vt=ti[W];Ue=vt.vertexShader,q=vt.fragmentShader}else Ue=b.vertexShader,q=b.fragmentShader,c.update(b),ne=c.getVertexShaderID(b),we=c.getFragmentShaderID(b);let ue=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Ve=U.isInstancedMesh===!0,Ne=U.isBatchedMesh===!0,Xe=!!b.map,te=!!b.matcap,pe=!!Z,L=!!b.aoMap,De=!!b.lightMap,he=!!b.bumpMap,ye=!!b.normalMap,$=!!b.displacementMap,re=!!b.emissiveMap,oe=!!b.metalnessMap,I=!!b.roughnessMap,T=b.anisotropy>0,H=b.clearcoat>0,X=b.dispersion>0,Q=b.iridescence>0,j=b.sheen>0,be=b.transmission>0,ge=T&&!!b.anisotropyMap,xe=H&&!!b.clearcoatMap,it=H&&!!b.clearcoatNormalMap,fe=H&&!!b.clearcoatRoughnessMap,Pe=Q&&!!b.iridescenceMap,Ge=Q&&!!b.iridescenceThicknessMap,qe=j&&!!b.sheenColorMap,Le=j&&!!b.sheenRoughnessMap,ht=!!b.specularMap,Je=!!b.specularColorMap,Rt=!!b.specularIntensityMap,F=be&&!!b.transmissionMap,Se=be&&!!b.thicknessMap,ee=!!b.gradientMap,ae=!!b.alphaMap,Ce=b.alphaTest>0,Te=!!b.alphaHash,Ke=!!b.extensions,Wt=Yi;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let cn={shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:Ue,fragmentShader:q,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&U._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&U.instanceColor!==null,instancingMorph:Ve&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:rn,alphaToCoverage:!!b.alphaToCoverage,map:Xe,matcap:te,envMap:pe,envMapMode:pe&&Z.mapping,envMapCubeUVHeight:O,aoMap:L,lightMap:De,bumpMap:he,normalMap:ye,displacementMap:f&&$,emissiveMap:re,normalMapObjectSpace:ye&&b.normalMapType===hg,normalMapTangentSpace:ye&&b.normalMapType===mp,metalnessMap:oe,roughnessMap:I,anisotropy:T,anisotropyMap:ge,clearcoat:H,clearcoatMap:xe,clearcoatNormalMap:it,clearcoatRoughnessMap:fe,dispersion:X,iridescence:Q,iridescenceMap:Pe,iridescenceThicknessMap:Ge,sheen:j,sheenColorMap:qe,sheenRoughnessMap:Le,specularMap:ht,specularColorMap:Je,specularIntensityMap:Rt,transmission:be,transmissionMap:F,thicknessMap:Se,gradientMap:ee,opaque:b.transparent===!1&&b.blending===lr&&b.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ce,alphaHash:Te,combine:b.combine,mapUv:Xe&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:De&&_(b.lightMap.channel),bumpMapUv:he&&_(b.bumpMap.channel),normalMapUv:ye&&_(b.normalMap.channel),displacementMapUv:$&&_(b.displacementMap.channel),emissiveMapUv:re&&_(b.emissiveMap.channel),metalnessMapUv:oe&&_(b.metalnessMap.channel),roughnessMapUv:I&&_(b.roughnessMap.channel),anisotropyMapUv:ge&&_(b.anisotropyMap.channel),clearcoatMapUv:xe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(b.sheenRoughnessMap.channel),specularMapUv:ht&&_(b.specularMap.channel),specularColorMapUv:Je&&_(b.specularColorMap.channel),specularIntensityMapUv:Rt&&_(b.specularIntensityMap.channel),transmissionMapUv:F&&_(b.transmissionMap.channel),thicknessMapUv:Se&&_(b.thicknessMap.channel),alphaMapUv:ae&&_(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ye||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(Xe||ae),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:U.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Xe&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===xt,decodeVideoTextureEmissive:re&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ot,flipSided:b.side===tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ke&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&b.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return cn.vertexUv1s=l.has(1),cn.vertexUv2s=l.has(2),cn.vertexUv3s=l.has(3),l.clear(),cn}function m(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)y.push(R),y.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(v(y,b),M(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function v(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function g(b){let y=x[b.type],R;if(y){let D=ti[y];R=ai.clone(D.uniforms)}else R=b.uniforms;return R}function w(b,y){let R;for(let D=0,U=h.length;D<U;D++){let N=h[D];if(N.cacheKey===y){R=N,++R.usedTimes;break}}return R===void 0&&(R=new sy(i,y,b,r),h.push(R)),R}function E(b){if(--b.usedTimes===0){let y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function S(b){c.remove(b)}function A(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:g,acquireProgram:w,releaseProgram:E,releaseShaderCache:S,programs:h,dispose:A}}function ay(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Id(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,x,_,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:_,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=x,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function a(u,f,d,x,_,p){let m=o(u,f,d,x,_,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function c(u,f,d,x,_,p){let m=o(u,f,d,x,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||cy),n.length>1&&n.sort(f||Cd),s.length>1&&s.sort(f||Cd)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ly(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Id,i.set(n,[o])):s>=r.length?(o=new Id,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ee};break;case"SpotLight":t={position:new P,direction:new P,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function uy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var fy=0;function dy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function py(i){let e=new hy,t=uy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new We,o=new We;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,x=0,_=0,p=0,m=0,v=0,M=0,g=0,w=0,E=0,S=0;l.sort(dy);for(let b=0,y=l.length;b<y;b++){let R=l[b],D=R.color,U=R.intensity,N=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=D.r*U,u+=D.g*U,f+=D.b*U;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],U);S++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,O=t.get(R);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=R.shadow.matrix,v++}n.directional[d]=B,d++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(D).multiplyScalar(U),B.distance=N,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[_]=B;let Z=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,Z.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=Z.matrix,R.castShadow){let O=t.get(R);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=V,g++}_++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(D).multiplyScalar(U),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=B,p++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let Z=R.shadow,O=t.get(R);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,O.shadowCameraNear=Z.camera.near,O.shadowCameraFar=Z.camera.far,n.pointShadow[x]=O,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=R.shadow.matrix,M++}n.point[x]=B,x++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(U),B.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[m]=B,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let A=n.hash;(A.directionalLength!==d||A.pointLength!==x||A.spotLength!==_||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==v||A.numPointShadows!==M||A.numSpotShadows!==g||A.numSpotMaps!==w||A.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=g+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,A.directionalLength=d,A.pointLength=x,A.spotLength=_,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=v,A.numPointShadows=M,A.numSpotShadows=g,A.numSpotMaps=w,A.numLightProbes=S,n.version=fy++)}function c(l,h){let u=0,f=0,d=0,x=0,_=0,p=h.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){let M=l[m];if(M.isDirectionalLight){let g=n.directional[u];g.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),u++}else if(M.isSpotLight){let g=n.spot[d];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),d++}else if(M.isRectAreaLight){let g=n.rectArea[x];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),g.halfWidth.set(M.width*.5,0,0),g.halfHeight.set(0,M.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let g=n.point[f];g.position.setFromMatrixPosition(M.matrixWorld),g.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let g=n.hemi[_];g.direction.setFromMatrixPosition(M.matrixWorld),g.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Pd(i){let e=new py(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function my(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Pd(i),e.set(s,[a])):r>=o.length?(a=new Pd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Sh=class extends wn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eh=class extends wn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _y(i,e,t){let n=new xo,s=new se,r=new se,o=new ut,a=new Sh({depthPacking:lg}),c=new Eh,l={},h=t.maxTextureSize,u={[si]:tn,[tn]:si,[Ot]:Ot},f=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:gy,fragmentShader:xy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new tt;x.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new de(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let m=this.type;this.render=function(E,S,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ii),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=m!==Si&&this.type===Si,N=m===Si&&this.type!==Si;for(let V=0,B=E.length;V<B;V++){let Z=E[V],O=Z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let W=O.getFrameExtents();if(s.multiply(W),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,O.mapSize.y=r.y)),O.map===null||U===!0||N===!0){let ie=this.type!==Si?{minFilter:nn,magFilter:nn}:{};O.map!==null&&O.map.dispose(),O.map=new on(s.x,s.y,ie),O.map.texture.name=Z.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let J=O.getViewportCount();for(let ie=0;ie<J;ie++){let ve=O.getViewport(ie);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),D.viewport(o),O.updateMatrices(Z,ie),n=O.getFrustum(),g(S,A,O.camera,Z,this.type)}O.isPointLightShadow!==!0&&this.type===Si&&v(O,A),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,y,R)};function v(E,S){let A=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new on(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,A,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,A,d,_,null)}function M(E,S,A,b){let y=null,R=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)y=R;else if(y=A.isPointLight===!0?c:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let D=y.uuid,U=S.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let V=N[U];V===void 0&&(V=y.clone(),N[U]=V,S.addEventListener("dispose",w)),y=V}if(y.visible=S.visible,y.wireframe=S.wireframe,b===Si?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:u[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=i.properties.get(y);D.light=A}return y}function g(E,S,A,b,y){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Si)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);let U=e.update(E),N=E.material;if(Array.isArray(N)){let V=U.groups;for(let B=0,Z=V.length;B<Z;B++){let O=V[B],W=N[O.materialIndex];if(W&&W.visible){let J=M(E,W,b,y);E.onBeforeShadow(i,E,S,A,U,J,O),i.renderBufferDirect(A,null,U,J,E,O),E.onAfterShadow(i,E,S,A,U,J,O)}}}else if(N.visible){let V=M(E,N,b,y);E.onBeforeShadow(i,E,S,A,U,V,null),i.renderBufferDirect(A,null,U,V,E,null),E.onAfterShadow(i,E,S,A,U,V,null)}}let D=E.children;for(let U=0,N=D.length;U<N;U++)g(D[U],S,A,b,y)}function w(E){E.target.removeEventListener("dispose",w);for(let A in l){let b=l[A],y=E.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var vy={[Pl]:Ll,[Dl]:Fl,[Ul]:Ol,[dr]:Nl,[Ll]:Pl,[Fl]:Dl,[Ol]:Ul,[Nl]:dr};function yy(i,e){function t(){let F=!1,Se=new ut,ee=null,ae=new ut(0,0,0,0);return{setMask:function(Ce){ee!==Ce&&!F&&(i.colorMask(Ce,Ce,Ce,Ce),ee=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,Te,Ke,Wt,cn){cn===!0&&(Ce*=Wt,Te*=Wt,Ke*=Wt),Se.set(Ce,Te,Ke,Wt),ae.equals(Se)===!1&&(i.clearColor(Ce,Te,Ke,Wt),ae.copy(Se))},reset:function(){F=!1,ee=null,ae.set(-1,0,0,0)}}}function n(){let F=!1,Se=!1,ee=null,ae=null,Ce=null;return{setReversed:function(Te){if(Se!==Te){let Ke=e.get("EXT_clip_control");Se?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);let Wt=Ce;Ce=null,this.setClear(Wt)}Se=Te},getReversed:function(){return Se},setTest:function(Te){Te?ue(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(Te){ee!==Te&&!F&&(i.depthMask(Te),ee=Te)},setFunc:function(Te){if(Se&&(Te=vy[Te]),ae!==Te){switch(Te){case Pl:i.depthFunc(i.NEVER);break;case Ll:i.depthFunc(i.ALWAYS);break;case Dl:i.depthFunc(i.LESS);break;case dr:i.depthFunc(i.LEQUAL);break;case Ul:i.depthFunc(i.EQUAL);break;case Nl:i.depthFunc(i.GEQUAL);break;case Fl:i.depthFunc(i.GREATER);break;case Ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Te}},setLocked:function(Te){F=Te},setClear:function(Te){Ce!==Te&&(Se&&(Te=1-Te),i.clearDepth(Te),Ce=Te)},reset:function(){F=!1,ee=null,ae=null,Ce=null,Se=!1}}}function s(){let F=!1,Se=null,ee=null,ae=null,Ce=null,Te=null,Ke=null,Wt=null,cn=null;return{setTest:function(vt){F||(vt?ue(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(vt){Se!==vt&&!F&&(i.stencilMask(vt),Se=vt)},setFunc:function(vt,Gn,gi){(ee!==vt||ae!==Gn||Ce!==gi)&&(i.stencilFunc(vt,Gn,gi),ee=vt,ae=Gn,Ce=gi)},setOp:function(vt,Gn,gi){(Te!==vt||Ke!==Gn||Wt!==gi)&&(i.stencilOp(vt,Gn,gi),Te=vt,Ke=Gn,Wt=gi)},setLocked:function(vt){F=vt},setClear:function(vt){cn!==vt&&(i.clearStencil(vt),cn=vt)},reset:function(){F=!1,Se=null,ee=null,ae=null,Ce=null,Te=null,Ke=null,Wt=null,cn=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,_=!1,p=null,m=null,v=null,M=null,g=null,w=null,E=null,S=new Ee(0,0,0),A=0,b=!1,y=null,R=null,D=null,U=null,N=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=Z>=1):O.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=Z>=2);let W=null,J={},ie=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Ue=new ut().fromArray(ie),q=new ut().fromArray(ve);function ne(F,Se,ee,ae){let Ce=new Uint8Array(4),Te=i.createTexture();i.bindTexture(F,Te),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<ee;Ke++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Se+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return Te}let we={};we[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(i.DEPTH_TEST),o.setFunc(dr),he(!1),ye(Df),ue(i.CULL_FACE),L(ii);function ue(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Ie(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ve(F,Se){return u[F]!==Se?(i.bindFramebuffer(F,Se),u[F]=Se,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Se),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ne(F,Se){let ee=d,ae=!1;if(F){ee=f.get(Se),ee===void 0&&(ee=[],f.set(Se,ee));let Ce=F.textures;if(ee.length!==Ce.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Ke=Ce.length;Te<Ke;Te++)ee[Te]=i.COLOR_ATTACHMENT0+Te;ee.length=Ce.length,ae=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ae=!0);ae&&i.drawBuffers(ee)}function Xe(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let te={[bs]:i.FUNC_ADD,[km]:i.FUNC_SUBTRACT,[Hm]:i.FUNC_REVERSE_SUBTRACT};te[Vm]=i.MIN,te[Gm]=i.MAX;let pe={[Wm]:i.ZERO,[Xm]:i.ONE,[qm]:i.SRC_COLOR,[Cl]:i.SRC_ALPHA,[jm]:i.SRC_ALPHA_SATURATE,[$m]:i.DST_COLOR,[Km]:i.DST_ALPHA,[Ym]:i.ONE_MINUS_SRC_COLOR,[Il]:i.ONE_MINUS_SRC_ALPHA,[Jm]:i.ONE_MINUS_DST_COLOR,[Zm]:i.ONE_MINUS_DST_ALPHA,[Qm]:i.CONSTANT_COLOR,[eg]:i.ONE_MINUS_CONSTANT_COLOR,[tg]:i.CONSTANT_ALPHA,[ng]:i.ONE_MINUS_CONSTANT_ALPHA};function L(F,Se,ee,ae,Ce,Te,Ke,Wt,cn,vt){if(F===ii){_===!0&&(Ie(i.BLEND),_=!1);return}if(_===!1&&(ue(i.BLEND),_=!0),F!==zm){if(F!==p||vt!==b){if((m!==bs||g!==bs)&&(i.blendEquation(i.FUNC_ADD),m=bs,g=bs),vt)switch(F){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.ONE,i.ONE);break;case Uf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,M=null,w=null,E=null,S.set(0,0,0),A=0,p=F,b=vt}return}Ce=Ce||Se,Te=Te||ee,Ke=Ke||ae,(Se!==m||Ce!==g)&&(i.blendEquationSeparate(te[Se],te[Ce]),m=Se,g=Ce),(ee!==v||ae!==M||Te!==w||Ke!==E)&&(i.blendFuncSeparate(pe[ee],pe[ae],pe[Te],pe[Ke]),v=ee,M=ae,w=Te,E=Ke),(Wt.equals(S)===!1||cn!==A)&&(i.blendColor(Wt.r,Wt.g,Wt.b,cn),S.copy(Wt),A=cn),p=F,b=!1}function De(F,Se){F.side===Ot?Ie(i.CULL_FACE):ue(i.CULL_FACE);let ee=F.side===tn;Se&&(ee=!ee),he(ee),F.blending===lr&&F.transparent===!1?L(ii):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let ae=F.stencilWrite;a.setTest(ae),ae&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),re(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function ye(F){F!==Om?(ue(i.CULL_FACE),F!==R&&(F===Df?i.cullFace(i.BACK):F===Bm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),R=F}function $(F){F!==D&&(B&&i.lineWidth(F),D=F)}function re(F,Se,ee){F?(ue(i.POLYGON_OFFSET_FILL),(U!==Se||N!==ee)&&(i.polygonOffset(Se,ee),U=Se,N=ee)):Ie(i.POLYGON_OFFSET_FILL)}function oe(F){F?ue(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function I(F){F===void 0&&(F=i.TEXTURE0+V-1),W!==F&&(i.activeTexture(F),W=F)}function T(F,Se,ee){ee===void 0&&(W===null?ee=i.TEXTURE0+V-1:ee=W);let ae=J[ee];ae===void 0&&(ae={type:void 0,texture:void 0},J[ee]=ae),(ae.type!==F||ae.texture!==Se)&&(W!==ee&&(i.activeTexture(ee),W=ee),i.bindTexture(F,Se||we[F]),ae.type=F,ae.texture=Se)}function H(){let F=J[W];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(F){Ue.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ue.copy(F))}function Le(F){q.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function ht(F,Se){let ee=l.get(Se);ee===void 0&&(ee=new WeakMap,l.set(Se,ee));let ae=ee.get(F);ae===void 0&&(ae=i.getUniformBlockIndex(Se,F.name),ee.set(F,ae))}function Je(F,Se){let ae=l.get(Se).get(F);c.get(Se)!==ae&&(i.uniformBlockBinding(Se,ae,F.__bindingPointIndex),c.set(Se,ae))}function Rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,J={},u={},f=new WeakMap,d=[],x=null,_=!1,p=null,m=null,v=null,M=null,g=null,w=null,E=null,S=new Ee(0,0,0),A=0,b=!1,y=null,R=null,D=null,U=null,N=null,Ue.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Ie,bindFramebuffer:Ve,drawBuffers:Ne,useProgram:Xe,setBlending:L,setMaterial:De,setFlipSided:he,setCullFace:ye,setLineWidth:$,setPolygonOffset:re,setScissorTest:oe,activeTexture:I,bindTexture:T,unbindTexture:H,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:Pe,texImage3D:Ge,updateUBOMapping:ht,uniformBlockBinding:Je,texStorage2D:it,texStorage3D:fe,texSubImage2D:j,texSubImage3D:be,compressedTexSubImage2D:ge,compressedTexSubImage3D:xe,scissor:qe,viewport:Le,reset:Rt}}function Ld(i,e,t,n){let s=My(n);switch(t){case cp:return i*e;case hp:return i*e;case up:return i*e*2;case au:return i*e/s.components*s.byteLength;case cu:return i*e/s.components*s.byteLength;case fp:return i*e*2/s.components*s.byteLength;case lu:return i*e*2/s.components*s.byteLength;case lp:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case hu:return i*e*4/s.components*s.byteLength;case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Gl:return Math.max(i,16)*Math.max(e,8)/4;case kl:case Vl:return Math.max(i,8)*Math.max(e,8)/2;case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case eh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case th:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ih:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ra:case ah:case ch:return Math.ceil(i/4)*Math.ceil(e/4)*16;case dp:case lh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case hh:case uh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function My(i){switch(i){case Nn:case rp:return{byteLength:1,components:1};case mo:case op:case En:return{byteLength:2,components:1};case ru:case ou:return{byteLength:2,components:4};case Ts:case su:case Zn:return{byteLength:4,components:1};case ap:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function by(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function x(I,T){return d?new OffscreenCanvas(I,T):go("canvas")}function _(I,T,H){let X=1,Q=oe(I);if((Q.width>H||Q.height>H)&&(X=H/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let j=Math.floor(X*Q.width),be=Math.floor(X*Q.height);u===void 0&&(u=x(j,be));let ge=T?x(j,be):u;return ge.width=j,ge.height=be,ge.getContext("2d").drawImage(I,0,0,j,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+be+")."),ge}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function p(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,T,H,X,Q=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let j=T;if(T===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8)),T===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),T===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8)),T===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),T===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),T===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),T===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),T===i.RGBA){let be=Q?cc:Qe.getTransfer(X);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=be===xt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function g(I,T){let H;return I?T===null||T===Ts||T===gr?H=i.DEPTH24_STENCIL8:T===Zn?H=i.DEPTH32F_STENCIL8:T===mo&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ts||T===gr?H=i.DEPTH_COMPONENT24:T===Zn?H=i.DEPTH_COMPONENT32F:T===mo&&(H=i.DEPTH_COMPONENT16),H}function w(I,T){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==nn&&I.minFilter!==_n?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function E(I){let T=I.target;T.removeEventListener("dispose",E),A(T),T.isVideoTexture&&h.delete(T)}function S(I){let T=I.target;T.removeEventListener("dispose",S),y(T)}function A(I){let T=n.get(I);if(T.__webglInit===void 0)return;let H=I.source,X=f.get(H);if(X){let Q=X[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(I),Object.keys(X).length===0&&f.delete(H)}n.remove(I)}function b(I){let T=n.get(I);i.deleteTexture(T.__webglTexture);let H=I.source,X=f.get(H);delete X[T.__cacheKey],o.memory.textures--}function y(I){let T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(T.__webglFramebuffer[X]))for(let Q=0;Q<T.__webglFramebuffer[X].length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[X][Q]);else i.deleteFramebuffer(T.__webglFramebuffer[X]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[X])}else{if(Array.isArray(T.__webglFramebuffer))for(let X=0;X<T.__webglFramebuffer.length;X++)i.deleteFramebuffer(T.__webglFramebuffer[X]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let X=0;X<T.__webglColorRenderbuffer.length;X++)T.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[X]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let H=I.textures;for(let X=0,Q=H.length;X<Q;X++){let j=n.get(H[X]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(H[X])}n.remove(I)}let R=0;function D(){R=0}function U(){let I=R;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),R+=1,I}function N(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function V(I,T){let H=n.get(I);if(I.isVideoTexture&&$(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){let X=I.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,I,T);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+T)}function B(I,T){let H=n.get(I);if(I.version>0&&H.__version!==I.version){q(H,I,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+T)}function Z(I,T){let H=n.get(I);if(I.version>0&&H.__version!==I.version){q(H,I,T);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+T)}function O(I,T){let H=n.get(I);if(I.version>0&&H.__version!==I.version){ne(H,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+T)}let W={[Ci]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Es]:i.MIRRORED_REPEAT},J={[nn]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},ie={[ug]:i.NEVER,[xg]:i.ALWAYS,[fg]:i.LESS,[gp]:i.LEQUAL,[dg]:i.EQUAL,[gg]:i.GEQUAL,[pg]:i.GREATER,[mg]:i.NOTEQUAL};function ve(I,T){if(T.type===Zn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_n||T.magFilter===co||T.magFilter===or||T.magFilter===ni||T.minFilter===_n||T.minFilter===co||T.minFilter===or||T.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,W[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,W[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,W[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,J[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,J[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ie[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===nn||T.minFilter!==or&&T.minFilter!==ni||T.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ue(I,T){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",E));let X=T.source,Q=f.get(X);Q===void 0&&(Q={},f.set(X,Q));let j=N(T);if(j!==I.__cacheKey){Q[j]===void 0&&(Q[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[j].usedTimes++;let be=Q[I.__cacheKey];be!==void 0&&(Q[I.__cacheKey].usedTimes--,be.usedTimes===0&&b(T)),I.__cacheKey=j,I.__webglTexture=Q[j].texture}return H}function q(I,T,H){let X=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(X=i.TEXTURE_3D);let Q=Ue(I,T),j=T.source;t.bindTexture(X,I.__webglTexture,i.TEXTURE0+H);let be=n.get(j);if(j.version!==be.__version||Q===!0){t.activeTexture(i.TEXTURE0+H);let ge=Qe.getPrimaries(Qe.workingColorSpace),xe=T.colorSpace===Xi?null:Qe.getPrimaries(T.colorSpace),it=T.colorSpace===Xi||ge===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let fe=_(T.image,!1,s.maxTextureSize);fe=re(T,fe);let Pe=r.convert(T.format,T.colorSpace),Ge=r.convert(T.type),qe=M(T.internalFormat,Pe,Ge,T.colorSpace,T.isVideoTexture);ve(X,T);let Le,ht=T.mipmaps,Je=T.isVideoTexture!==!0,Rt=be.__version===void 0||Q===!0,F=j.dataReady,Se=w(T,fe);if(T.isDepthTexture)qe=g(T.format===xr,T.type),Rt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,qe,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,qe,fe.width,fe.height,0,Pe,Ge,null));else if(T.isDataTexture)if(ht.length>0){Je&&Rt&&t.texStorage2D(i.TEXTURE_2D,Se,qe,ht[0].width,ht[0].height);for(let ee=0,ae=ht.length;ee<ae;ee++)Le=ht[ee],Je?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Le.width,Le.height,Pe,Ge,Le.data):t.texImage2D(i.TEXTURE_2D,ee,qe,Le.width,Le.height,0,Pe,Ge,Le.data);T.generateMipmaps=!1}else Je?(Rt&&t.texStorage2D(i.TEXTURE_2D,Se,qe,fe.width,fe.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Pe,Ge,fe.data)):t.texImage2D(i.TEXTURE_2D,0,qe,fe.width,fe.height,0,Pe,Ge,fe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Je&&Rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,qe,ht[0].width,ht[0].height,fe.depth);for(let ee=0,ae=ht.length;ee<ae;ee++)if(Le=ht[ee],T.format!==Ln)if(Pe!==null)if(Je){if(F)if(T.layerUpdates.size>0){let Ce=Ld(Le.width,Le.height,T.format,T.type);for(let Te of T.layerUpdates){let Ke=Le.data.subarray(Te*Ce/Le.data.BYTES_PER_ELEMENT,(Te+1)*Ce/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Te,Le.width,Le.height,1,Pe,Ke)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Le.width,Le.height,fe.depth,Pe,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,qe,Le.width,Le.height,fe.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Le.width,Le.height,fe.depth,Pe,Ge,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,qe,Le.width,Le.height,fe.depth,0,Pe,Ge,Le.data)}else{Je&&Rt&&t.texStorage2D(i.TEXTURE_2D,Se,qe,ht[0].width,ht[0].height);for(let ee=0,ae=ht.length;ee<ae;ee++)Le=ht[ee],T.format!==Ln?Pe!==null?Je?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,Le.width,Le.height,Pe,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,qe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Le.width,Le.height,Pe,Ge,Le.data):t.texImage2D(i.TEXTURE_2D,ee,qe,Le.width,Le.height,0,Pe,Ge,Le.data)}else if(T.isDataArrayTexture)if(Je){if(Rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,qe,fe.width,fe.height,fe.depth),F)if(T.layerUpdates.size>0){let ee=Ld(fe.width,fe.height,T.format,T.type);for(let ae of T.layerUpdates){let Ce=fe.data.subarray(ae*ee/fe.data.BYTES_PER_ELEMENT,(ae+1)*ee/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,fe.width,fe.height,1,Pe,Ge,Ce)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Pe,Ge,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,fe.width,fe.height,fe.depth,0,Pe,Ge,fe.data);else if(T.isData3DTexture)Je?(Rt&&t.texStorage3D(i.TEXTURE_3D,Se,qe,fe.width,fe.height,fe.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Pe,Ge,fe.data)):t.texImage3D(i.TEXTURE_3D,0,qe,fe.width,fe.height,fe.depth,0,Pe,Ge,fe.data);else if(T.isFramebufferTexture){if(Rt)if(Je)t.texStorage2D(i.TEXTURE_2D,Se,qe,fe.width,fe.height);else{let ee=fe.width,ae=fe.height;for(let Ce=0;Ce<Se;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,qe,ee,ae,0,Pe,Ge,null),ee>>=1,ae>>=1}}else if(ht.length>0){if(Je&&Rt){let ee=oe(ht[0]);t.texStorage2D(i.TEXTURE_2D,Se,qe,ee.width,ee.height)}for(let ee=0,ae=ht.length;ee<ae;ee++)Le=ht[ee],Je?F&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Pe,Ge,Le):t.texImage2D(i.TEXTURE_2D,ee,qe,Pe,Ge,Le);T.generateMipmaps=!1}else if(Je){if(Rt){let ee=oe(fe);t.texStorage2D(i.TEXTURE_2D,Se,qe,ee.width,ee.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,Ge,fe)}else t.texImage2D(i.TEXTURE_2D,0,qe,Pe,Ge,fe);p(T)&&m(X),be.__version=j.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ne(I,T,H){if(T.image.length!==6)return;let X=Ue(I,T),Q=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let j=n.get(Q);if(Q.version!==j.__version||X===!0){t.activeTexture(i.TEXTURE0+H);let be=Qe.getPrimaries(Qe.workingColorSpace),ge=T.colorSpace===Xi?null:Qe.getPrimaries(T.colorSpace),xe=T.colorSpace===Xi||be===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let it=T.isCompressedTexture||T.image[0].isCompressedTexture,fe=T.image[0]&&T.image[0].isDataTexture,Pe=[];for(let ae=0;ae<6;ae++)!it&&!fe?Pe[ae]=_(T.image[ae],!0,s.maxCubemapSize):Pe[ae]=fe?T.image[ae].image:T.image[ae],Pe[ae]=re(T,Pe[ae]);let Ge=Pe[0],qe=r.convert(T.format,T.colorSpace),Le=r.convert(T.type),ht=M(T.internalFormat,qe,Le,T.colorSpace),Je=T.isVideoTexture!==!0,Rt=j.__version===void 0||X===!0,F=Q.dataReady,Se=w(T,Ge);ve(i.TEXTURE_CUBE_MAP,T);let ee;if(it){Je&&Rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,ht,Ge.width,Ge.height);for(let ae=0;ae<6;ae++){ee=Pe[ae].mipmaps;for(let Ce=0;Ce<ee.length;Ce++){let Te=ee[Ce];T.format!==Ln?qe!==null?Je?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,0,0,Te.width,Te.height,qe,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,ht,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,0,0,Te.width,Te.height,qe,Le,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,ht,Te.width,Te.height,0,qe,Le,Te.data)}}}else{if(ee=T.mipmaps,Je&&Rt){ee.length>0&&Se++;let ae=oe(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,ht,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(fe){Je?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Pe[ae].width,Pe[ae].height,qe,Le,Pe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ht,Pe[ae].width,Pe[ae].height,0,qe,Le,Pe[ae].data);for(let Ce=0;Ce<ee.length;Ce++){let Ke=ee[Ce].image[ae].image;Je?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,0,0,Ke.width,Ke.height,qe,Le,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,ht,Ke.width,Ke.height,0,qe,Le,Ke.data)}}else{Je?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,qe,Le,Pe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ht,qe,Le,Pe[ae]);for(let Ce=0;Ce<ee.length;Ce++){let Te=ee[Ce];Je?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,0,0,qe,Le,Te.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,ht,qe,Le,Te.image[ae])}}}p(T)&&m(i.TEXTURE_CUBE_MAP),j.__version=Q.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function we(I,T,H,X,Q,j){let be=r.convert(H.format,H.colorSpace),ge=r.convert(H.type),xe=M(H.internalFormat,be,ge,H.colorSpace),it=n.get(T),fe=n.get(H);if(fe.__renderTarget=T,!it.__hasExternalTextures){let Pe=Math.max(1,T.width>>j),Ge=Math.max(1,T.height>>j);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,xe,Pe,Ge,T.depth,0,be,ge,null):t.texImage2D(Q,j,xe,Pe,Ge,0,be,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ye(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Q,fe.__webglTexture,0,he(T)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Q,fe.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(I,T,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){let X=T.depthTexture,Q=X&&X.isDepthTexture?X.type:null,j=g(T.stencilBuffer,Q),be=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=he(T);ye(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,j,T.width,T.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,j,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,I)}else{let X=T.textures;for(let Q=0;Q<X.length;Q++){let j=X[Q],be=r.convert(j.format,j.colorSpace),ge=r.convert(j.type),xe=M(j.internalFormat,be,ge,j.colorSpace),it=he(T);H&&ye(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,xe,T.width,T.height):ye(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,xe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,xe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(T.depthTexture);X.__renderTarget=T,(!X.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);let Q=X.__webglTexture,j=he(T);if(T.depthTexture.format===hr)ye(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(T.depthTexture.format===xr)ye(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ve(I){let T=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),X){let Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=X}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ie(T.__webglFramebuffer,I)}else if(H){T.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[X]),T.__webglDepthbuffer[X]===void 0)T.__webglDepthbuffer[X]=i.createRenderbuffer(),ue(T.__webglDepthbuffer[X],I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ue(T.__webglDepthbuffer,I,!1);else{let X=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(I,T,H){let X=n.get(I);T!==void 0&&we(X.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ve(I)}function Xe(I){let T=I.texture,H=n.get(I),X=n.get(T);I.addEventListener("dispose",S);let Q=I.textures,j=I.isWebGLCubeRenderTarget===!0,be=Q.length>1;if(be||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=T.version,o.memory.textures++),j){H.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[ge]=[];for(let xe=0;xe<T.mipmaps.length;xe++)H.__webglFramebuffer[ge][xe]=i.createFramebuffer()}else H.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)H.__webglFramebuffer[ge]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(be)for(let ge=0,xe=Q.length;ge<xe;ge++){let it=n.get(Q[ge]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ye(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ge=0;ge<Q.length;ge++){let xe=Q[ge];H.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ge]);let it=r.convert(xe.format,xe.colorSpace),fe=r.convert(xe.type),Pe=M(xe.internalFormat,it,fe,xe.colorSpace,I.isXRRenderTarget===!0),Ge=he(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Pe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,H.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ve(i.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)we(H.__webglFramebuffer[ge][xe],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else we(H.__webglFramebuffer[ge],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(T)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ge=0,xe=Q.length;ge<xe;ge++){let it=Q[ge],fe=n.get(it);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),ve(i.TEXTURE_2D,it),we(H.__webglFramebuffer,I,it,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),p(it)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,X.__webglTexture),ve(ge,T),T.mipmaps&&T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)we(H.__webglFramebuffer[xe],I,T,i.COLOR_ATTACHMENT0,ge,xe);else we(H.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,ge,0);p(T)&&m(ge),t.unbindTexture()}I.depthBuffer&&Ve(I)}function te(I){let T=I.textures;for(let H=0,X=T.length;H<X;H++){let Q=T[H];if(p(Q)){let j=v(I),be=n.get(Q).__webglTexture;t.bindTexture(j,be),m(j),t.unbindTexture()}}}let pe=[],L=[];function De(I){if(I.samples>0){if(ye(I)===!1){let T=I.textures,H=I.width,X=I.height,Q=i.COLOR_BUFFER_BIT,j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(I),ge=T.length>1;if(ge)for(let xe=0;xe<T.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let xe=0;xe<T.length;xe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);let it=n.get(T[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,H,X,0,0,H,X,Q,i.NEAREST),c===!0&&(pe.length=0,L.length=0,pe.push(i.COLOR_ATTACHMENT0+xe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(pe.push(j),L.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let xe=0;xe<T.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);let it=n.get(T[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function he(I){return Math.min(s.maxSamples,I.samples)}function ye(I){let T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $(I){let T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function re(I,T){let H=I.colorSpace,X=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==rn&&H!==Xi&&(Qe.getTransfer(H)===xt?(X!==Ln||Q!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function oe(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=O,this.rebindTextures=Ne,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ye}function wy(i,e){function t(n,s=Xi){let r,o=Qe.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===ru)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ou)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ap)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rp)return i.BYTE;if(n===op)return i.SHORT;if(n===mo)return i.UNSIGNED_SHORT;if(n===su)return i.INT;if(n===Ts)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===cp)return i.ALPHA;if(n===lp)return i.RGB;if(n===Ln)return i.RGBA;if(n===hp)return i.LUMINANCE;if(n===up)return i.LUMINANCE_ALPHA;if(n===hr)return i.DEPTH_COMPONENT;if(n===xr)return i.DEPTH_STENCIL;if(n===au)return i.RED;if(n===cu)return i.RED_INTEGER;if(n===fp)return i.RG;if(n===lu)return i.RG_INTEGER;if(n===hu)return i.RGBA_INTEGER;if(n===Sa||n===Ea||n===Ta||n===Aa)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Hl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===Xl)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ql)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yl||n===Kl||n===Zl||n===$l||n===Jl||n===jl||n===Ql||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===oh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===th)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ih)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oh)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===ah||n===ch)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ra)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ch)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dp||n===lh||n===hh||n===uh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Th=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},pt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sy={type:"move"},uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ty=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nt({vertexShader:Ey,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends Zi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,x=null,_=new Ah,p=t.getContextAttributes(),m=null,v=null,M=[],g=[],w=new se,E=null,S=new Kt;S.viewport=new ut;let A=new Kt;A.viewport=new ut;let b=[S,A],y=new Th,R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=M[q];return ne===void 0&&(ne=new uo,M[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=M[q];return ne===void 0&&(ne=new uo,M[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=M[q];return ne===void 0&&(ne=new uo,M[q]=ne),ne.getHandSpace()};function U(q){let ne=g.indexOf(q.inputSource);if(ne===-1)return;let we=M[ne];we!==void 0&&(we.update(q.inputSource,q.frame,l||o),we.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",V);for(let q=0;q<M.length;q++){let ne=g[q];ne!==null&&(g[q]=null,M[q].disconnect(ne))}R=null,D=null,_.reset(),e.setRenderTarget(m),d=null,f=null,u=null,s=null,v=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",N),s.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0){let ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new on(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,we=null,ue=null;p.depth&&(ue=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?xr:hr,we=p.stencil?gr:Ts);let Ie={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new on(f.textureWidth,f.textureHeight,{format:Ln,type:Nn,depthTexture:new Oa(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(q){for(let ne=0;ne<q.removed.length;ne++){let we=q.removed[ne],ue=g.indexOf(we);ue>=0&&(g[ue]=null,M[ue].disconnect(we))}for(let ne=0;ne<q.added.length;ne++){let we=q.added[ne],ue=g.indexOf(we);if(ue===-1){for(let Ve=0;Ve<M.length;Ve++)if(Ve>=g.length){g.push(we),ue=Ve;break}else if(g[Ve]===null){g[Ve]=we,ue=Ve;break}if(ue===-1)break}let Ie=M[ue];Ie&&Ie.connect(we)}}let B=new P,Z=new P;function O(q,ne,we){B.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(we.matrixWorld);let ue=B.distanceTo(Z),Ie=ne.projectionMatrix.elements,Ve=we.projectionMatrix.elements,Ne=Ie[14]/(Ie[10]-1),Xe=Ie[14]/(Ie[10]+1),te=(Ie[9]+1)/Ie[5],pe=(Ie[9]-1)/Ie[5],L=(Ie[8]-1)/Ie[0],De=(Ve[8]+1)/Ve[0],he=Ne*L,ye=Ne*De,$=ue/(-L+De),re=$*-L;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ($),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let oe=Ne+$,I=Xe+$,T=he-re,H=ye+(ue-re),X=te*Xe/I*oe,Q=pe*Xe/I*oe;q.projectionMatrix.makePerspective(T,H,X,Q,oe,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function W(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ne=q.near,we=q.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(we=_.depthFar)),y.near=A.near=S.near=ne,y.far=A.far=S.far=we,(R!==y.near||D!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,D=y.far),S.layers.mask=q.layers.mask|2,A.layers.mask=q.layers.mask|4,y.layers.mask=S.layers.mask|A.layers.mask;let ue=q.parent,Ie=y.cameras;W(y,ue);for(let Ve=0;Ve<Ie.length;Ve++)W(Ie[Ve],ue);Ie.length===2?O(y,S,A):y.projectionMatrix.copy(S.projectionMatrix),J(q,y,ue)};function J(q,ne,we){we===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(we.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=yr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ie=null;function ve(q,ne){if(h=ne.getViewerPose(l||o),x=ne,h!==null){let we=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ue=!1;we.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let Ve=0;Ve<we.length;Ve++){let Ne=we[Ve],Xe=null;if(d!==null)Xe=d.getViewport(Ne);else{let pe=u.getViewSubImage(f,Ne);Xe=pe.viewport,Ve===0&&(e.setRenderTargetTextures(v,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(v))}let te=b[Ve];te===void 0&&(te=new Kt,te.layers.enable(Ve),te.viewport=new ut,b[Ve]=te),te.matrix.fromArray(Ne.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Ne.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ve===0&&(y.matrix.copy(te.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(te)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Ve=u.getDepthInformation(we[0]);Ve&&Ve.isValid&&Ve.texture&&_.init(e,Ve,s.renderState)}}for(let we=0;we<M.length;we++){let ue=g[we],Ie=M[we];ue!==null&&Ie!==void 0&&Ie.update(ue,ne,l||o)}ie&&ie(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),x=null}let Ue=new yp;Ue.setAnimationLoop(ve),this.setAnimationLoop=function(q){ie=q},this.dispose=function(){}}},ys=new fn,Ay=new We;function Ry(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,vp(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,M,g){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,g)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===tn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===tn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),M=v.envMap,g=v.envMapRotation;M&&(p.envMap.value=M,ys.copy(g),ys.x*=-1,ys.y*=-1,ys.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),p.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(ys)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===tn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){let g=M.program;n.uniformBlockBinding(v,g)}function l(v,M){let g=s[v.id];g===void 0&&(x(v),g=h(v),s[v.id]=g,v.addEventListener("dispose",p));let w=M.program;n.updateUBOMapping(v,w);let E=e.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function h(v){let M=u();v.__bindingPointIndex=M;let g=i.createBuffer(),w=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,g),g}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=s[v.id],g=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,S=g.length;E<S;E++){let A=Array.isArray(g[E])?g[E]:[g[E]];for(let b=0,y=A.length;b<y;b++){let R=A[b];if(d(R,E,b,w)===!0){let D=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],N=0;for(let V=0;V<U.length;V++){let B=U[V],Z=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,D+N,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,g,w){let E=v.value,S=M+"_"+g;if(w[S]===void 0)return typeof E=="number"||typeof E=="boolean"?w[S]=E:w[S]=E.clone(),!0;{let A=w[S];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return w[S]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function x(v){let M=v.uniforms,g=0,w=16;for(let S=0,A=M.length;S<A;S++){let b=Array.isArray(M[S])?M[S]:[M[S]];for(let y=0,R=b.length;y<R;y++){let D=b[y],U=Array.isArray(D.value)?D.value:[D.value];for(let N=0,V=U.length;N<V;N++){let B=U[N],Z=_(B),O=g%w,W=O%Z.boundary,J=O+W;g+=W,J!==0&&w-J<Z.storage&&(g+=w-J),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=g,g+=Z.storage}}}let E=g%w;return E>0&&(g+=w-E),v.__size=g,v.__cache={},this}function _(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function p(v){let M=v.target;M.removeEventListener("dispose",p);let g=o.indexOf(M.__bindingPointIndex);o.splice(g,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Ba=class{constructor(e={}){let{canvas:t=Ug(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let x=new Uint32Array(4),_=new Int32Array(4),p=null,m=null,v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=Yi,this.toneMappingExposure=1;let g=this,w=!1,E=0,S=0,A=null,b=-1,y=null,R=new ut,D=new ut,U=null,N=new Ee(0),V=0,B=t.width,Z=t.height,O=1,W=null,J=null,ie=new ut(0,0,B,Z),ve=new ut(0,0,B,Z),Ue=!1,q=new xo,ne=!1,we=!1,ue=new We,Ie=new We,Ve=new P,Ne=new ut,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function pe(){return A===null?O:1}let L=n;function De(C,z){return t.getContext(C,z)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jh}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Te,!1),L===null){let z="webgl2";if(L=De(z,C),L===null)throw De(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let he,ye,$,re,oe,I,T,H,X,Q,j,be,ge,xe,it,fe,Pe,Ge,qe,Le,ht,Je,Rt,F;function Se(){he=new X_(L),he.init(),Je=new wy(L,he),ye=new z_(L,he,e,Je),$=new yy(L,he),ye.reverseDepthBuffer&&f&&$.buffers.depth.setReversed(!0),re=new K_(L),oe=new ay,I=new by(L,he,$,oe,ye,Je,re),T=new H_(g),H=new W_(g),X=new t0(L),Rt=new O_(L,X),Q=new q_(L,X,re,Rt),j=new $_(L,Q,X,re),qe=new Z_(L,ye,I),fe=new k_(oe),be=new oy(g,T,H,he,ye,Rt,fe),ge=new Ry(g,oe),xe=new ly,it=new my(he),Ge=new F_(g,T,H,$,j,d,c),Pe=new _y(g,j,ye),F=new Cy(L,re,ye,$),Le=new B_(L,he,re),ht=new Y_(L,he,re),re.programs=be.programs,g.capabilities=ye,g.extensions=he,g.properties=oe,g.renderLists=xe,g.shadowMap=Pe,g.state=$,g.info=re}Se();let ee=new Rh(g,L);this.xr=ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let C=he.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=he.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(B,Z,!1))},this.getSize=function(C){return C.set(B,Z)},this.setSize=function(C,z,Y=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,Z=z,t.width=Math.floor(C*O),t.height=Math.floor(z*O),Y===!0&&(t.style.width=C+"px",t.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(B*O,Z*O).floor()},this.setDrawingBufferSize=function(C,z,Y){B=C,Z=z,O=Y,t.width=Math.floor(C*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,z,Y,K){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,z,Y,K),$.viewport(R.copy(ie).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(ve)},this.setScissor=function(C,z,Y,K){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,z,Y,K),$.scissor(D.copy(ve).multiplyScalar(O).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(C){$.setScissorTest(Ue=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(C=!0,z=!0,Y=!0){let K=0;if(C){let k=!1;if(A!==null){let me=A.texture.format;k=me===hu||me===lu||me===cu}if(k){let me=A.texture.type,Ae=me===Nn||me===Ts||me===mo||me===gr||me===ru||me===ou,Fe=Ge.getClearColor(),Oe=Ge.getClearAlpha(),Ye=Fe.r,Ze=Fe.g,Be=Fe.b;Ae?(x[0]=Ye,x[1]=Ze,x[2]=Be,x[3]=Oe,L.clearBufferuiv(L.COLOR,0,x)):(_[0]=Ye,_[1]=Ze,_[2]=Be,_[3]=Oe,L.clearBufferiv(L.COLOR,0,_))}else K|=L.COLOR_BUFFER_BIT}z&&(K|=L.DEPTH_BUFFER_BIT),Y&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),xe.dispose(),it.dispose(),oe.dispose(),T.dispose(),H.dispose(),j.dispose(),Rt.dispose(),F.dispose(),be.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Ef),ee.removeEventListener("sessionend",Tf),ps.stop()};function ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let C=re.autoReset,z=Pe.enabled,Y=Pe.autoUpdate,K=Pe.needsUpdate,k=Pe.type;Se(),re.autoReset=C,Pe.enabled=z,Pe.autoUpdate=Y,Pe.needsUpdate=K,Pe.type=k}function Te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ke(C){let z=C.target;z.removeEventListener("dispose",Ke),Wt(z)}function Wt(C){cn(C),oe.remove(C)}function cn(C){let z=oe.get(C).programs;z!==void 0&&(z.forEach(function(Y){be.releaseProgram(Y)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,Y,K,k,me){z===null&&(z=Xe);let Ae=k.isMesh&&k.matrixWorld.determinant()<0,Fe=Um(C,z,Y,K,k);$.setMaterial(K,Ae);let Oe=Y.index,Ye=1;if(K.wireframe===!0){if(Oe=Q.getWireframeAttribute(Y),Oe===void 0)return;Ye=2}let Ze=Y.drawRange,Be=Y.attributes.position,ft=Ze.start*Ye,Ct=(Ze.start+Ze.count)*Ye;me!==null&&(ft=Math.max(ft,me.start*Ye),Ct=Math.min(Ct,(me.start+me.count)*Ye)),Oe!==null?(ft=Math.max(ft,0),Ct=Math.min(Ct,Oe.count)):Be!=null&&(ft=Math.max(ft,0),Ct=Math.min(Ct,Be.count));let Lt=Ct-ft;if(Lt<0||Lt===1/0)return;Rt.setup(k,K,Fe,Y,Oe);let xn,mt=Le;if(Oe!==null&&(xn=X.get(Oe),mt=ht,mt.setIndex(xn)),k.isMesh)K.wireframe===!0?($.setLineWidth(K.wireframeLinewidth*pe()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(k.isLine){let ze=K.linewidth;ze===void 0&&(ze=1),$.setLineWidth(ze*pe()),k.isLineSegments?mt.setMode(L.LINES):k.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else k.isPoints?mt.setMode(L.POINTS):k.isSprite&&mt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)mt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))mt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let ze=k._multiDrawStarts,xi=k._multiDrawCounts,gt=k._multiDrawCount,Wn=Oe?X.get(Oe).bytesPerElement:1,Ws=oe.get(K).currentProgram.getUniforms();for(let vn=0;vn<gt;vn++)Ws.setValue(L,"_gl_DrawID",vn),mt.render(ze[vn]/Wn,xi[vn])}else if(k.isInstancedMesh)mt.renderInstances(ft,Lt,k.count);else if(Y.isInstancedBufferGeometry){let ze=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xi=Math.min(Y.instanceCount,ze);mt.renderInstances(ft,Lt,xi)}else mt.render(ft,Lt)};function vt(C,z,Y){C.transparent===!0&&C.side===Ot&&C.forceSinglePass===!1?(C.side=tn,C.needsUpdate=!0,Yo(C,z,Y),C.side=si,C.needsUpdate=!0,Yo(C,z,Y),C.side=Ot):Yo(C,z,Y)}this.compile=function(C,z,Y=null){Y===null&&(Y=C),m=it.get(Y),m.init(z),M.push(m),Y.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),C!==Y&&C.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();let K=new Set;return C.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let me=k.material;if(me)if(Array.isArray(me))for(let Ae=0;Ae<me.length;Ae++){let Fe=me[Ae];vt(Fe,Y,k),K.add(Fe)}else vt(me,Y,k),K.add(me)}),M.pop(),m=null,K},this.compileAsync=function(C,z,Y=null){let K=this.compile(C,z,Y);return new Promise(k=>{function me(){if(K.forEach(function(Ae){oe.get(Ae).currentProgram.isReady()&&K.delete(Ae)}),K.size===0){k(C);return}setTimeout(me,10)}he.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Gn=null;function gi(C){Gn&&Gn(C)}function Ef(){ps.stop()}function Tf(){ps.start()}let ps=new yp;ps.setAnimationLoop(gi),typeof self!="undefined"&&ps.setContext(self),this.setAnimationLoop=function(C){Gn=C,ee.setAnimationLoop(C),C===null?ps.stop():ps.start()},ee.addEventListener("sessionstart",Ef),ee.addEventListener("sessionend",Tf),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(z),z=ee.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,z,A),m=it.get(C,M.length),m.init(z),M.push(m),Ie.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(Ie),we=this.localClippingEnabled,ne=fe.init(this.clippingPlanes,we),p=xe.get(C,v.length),p.init(),v.push(p),ee.enabled===!0&&ee.isPresenting===!0){let me=g.xr.getDepthSensingMesh();me!==null&&Yc(me,z,-1/0,g.sortObjects)}Yc(C,z,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(W,J),te=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,te&&Ge.addToRenderList(p,C),this.info.render.frame++,ne===!0&&fe.beginShadows();let Y=m.state.shadowsArray;Pe.render(Y,C,z),ne===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=p.opaque,k=p.transmissive;if(m.setupLights(),z.isArrayCamera){let me=z.cameras;if(k.length>0)for(let Ae=0,Fe=me.length;Ae<Fe;Ae++){let Oe=me[Ae];Rf(K,k,C,Oe)}te&&Ge.render(C);for(let Ae=0,Fe=me.length;Ae<Fe;Ae++){let Oe=me[Ae];Af(p,C,Oe,Oe.viewport)}}else k.length>0&&Rf(K,k,C,z),te&&Ge.render(C),Af(p,C,z);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(g,C,z),Rt.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(m=M[M.length-1],ne===!0&&fe.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Yc(C,z,Y,K){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){K&&Ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ie);let Ae=j.update(C),Fe=C.material;Fe.visible&&p.push(C,Ae,Fe,Y,Ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){let Ae=j.update(C),Fe=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ne.copy(C.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ne.copy(Ae.boundingSphere.center)),Ne.applyMatrix4(C.matrixWorld).applyMatrix4(Ie)),Array.isArray(Fe)){let Oe=Ae.groups;for(let Ye=0,Ze=Oe.length;Ye<Ze;Ye++){let Be=Oe[Ye],ft=Fe[Be.materialIndex];ft&&ft.visible&&p.push(C,Ae,ft,Y,Ne.z,Be)}}else Fe.visible&&p.push(C,Ae,Fe,Y,Ne.z,null)}}let me=C.children;for(let Ae=0,Fe=me.length;Ae<Fe;Ae++)Yc(me[Ae],z,Y,K)}function Af(C,z,Y,K){let k=C.opaque,me=C.transmissive,Ae=C.transparent;m.setupLightsView(Y),ne===!0&&fe.setGlobalState(g.clippingPlanes,Y),K&&$.viewport(R.copy(K)),k.length>0&&qo(k,z,Y),me.length>0&&qo(me,z,Y),Ae.length>0&&qo(Ae,z,Y),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Rf(C,z,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new on(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?En:Nn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let me=m.state.transmissionRenderTarget[K.id],Ae=K.viewport||R;me.setSize(Ae.z,Ae.w);let Fe=g.getRenderTarget();g.setRenderTarget(me),g.getClearColor(N),V=g.getClearAlpha(),V<1&&g.setClearColor(16777215,.5),g.clear(),te&&Ge.render(Y);let Oe=g.toneMapping;g.toneMapping=Yi;let Ye=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),ne===!0&&fe.setGlobalState(g.clippingPlanes,K),qo(C,Y,K),I.updateMultisampleRenderTarget(me),I.updateRenderTargetMipmap(me),he.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Be=0,ft=z.length;Be<ft;Be++){let Ct=z[Be],Lt=Ct.object,xn=Ct.geometry,mt=Ct.material,ze=Ct.group;if(mt.side===Ot&&Lt.layers.test(K.layers)){let xi=mt.side;mt.side=tn,mt.needsUpdate=!0,Cf(Lt,Y,K,xn,mt,ze),mt.side=xi,mt.needsUpdate=!0,Ze=!0}}Ze===!0&&(I.updateMultisampleRenderTarget(me),I.updateRenderTargetMipmap(me))}g.setRenderTarget(Fe),g.setClearColor(N,V),Ye!==void 0&&(K.viewport=Ye),g.toneMapping=Oe}function qo(C,z,Y){let K=z.isScene===!0?z.overrideMaterial:null;for(let k=0,me=C.length;k<me;k++){let Ae=C[k],Fe=Ae.object,Oe=Ae.geometry,Ye=K===null?Ae.material:K,Ze=Ae.group;Fe.layers.test(Y.layers)&&Cf(Fe,z,Y,Oe,Ye,Ze)}}function Cf(C,z,Y,K,k,me){C.onBeforeRender(g,z,Y,K,k,me),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(g,z,Y,K,C,me),k.transparent===!0&&k.side===Ot&&k.forceSinglePass===!1?(k.side=tn,k.needsUpdate=!0,g.renderBufferDirect(Y,z,K,k,C,me),k.side=si,k.needsUpdate=!0,g.renderBufferDirect(Y,z,K,k,C,me),k.side=Ot):g.renderBufferDirect(Y,z,K,k,C,me),C.onAfterRender(g,z,Y,K,k,me)}function Yo(C,z,Y){z.isScene!==!0&&(z=Xe);let K=oe.get(C),k=m.state.lights,me=m.state.shadowsArray,Ae=k.state.version,Fe=be.getParameters(C,k.state,me,z,Y),Oe=be.getProgramCacheKey(Fe),Ye=K.programs;K.environment=C.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(C.isMeshStandardMaterial?H:T).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",Ke),Ye=new Map,K.programs=Ye);let Ze=Ye.get(Oe);if(Ze!==void 0){if(K.currentProgram===Ze&&K.lightsStateVersion===Ae)return Pf(C,Fe),Ze}else Fe.uniforms=be.getUniforms(C),C.onBeforeCompile(Fe,g),Ze=be.acquireProgram(Fe,Oe),Ye.set(Oe,Ze),K.uniforms=Fe.uniforms;let Be=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=fe.uniform),Pf(C,Fe),K.needsLights=Fm(C),K.lightsStateVersion=Ae,K.needsLights&&(Be.ambientLightColor.value=k.state.ambient,Be.lightProbe.value=k.state.probe,Be.directionalLights.value=k.state.directional,Be.directionalLightShadows.value=k.state.directionalShadow,Be.spotLights.value=k.state.spot,Be.spotLightShadows.value=k.state.spotShadow,Be.rectAreaLights.value=k.state.rectArea,Be.ltc_1.value=k.state.rectAreaLTC1,Be.ltc_2.value=k.state.rectAreaLTC2,Be.pointLights.value=k.state.point,Be.pointLightShadows.value=k.state.pointShadow,Be.hemisphereLights.value=k.state.hemi,Be.directionalShadowMap.value=k.state.directionalShadowMap,Be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Be.spotShadowMap.value=k.state.spotShadowMap,Be.spotLightMatrix.value=k.state.spotLightMatrix,Be.spotLightMap.value=k.state.spotLightMap,Be.pointShadowMap.value=k.state.pointShadowMap,Be.pointShadowMatrix.value=k.state.pointShadowMatrix),K.currentProgram=Ze,K.uniformsList=null,Ze}function If(C){if(C.uniformsList===null){let z=C.currentProgram.getUniforms();C.uniformsList=fr.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function Pf(C,z){let Y=oe.get(C);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Um(C,z,Y,K,k){z.isScene!==!0&&(z=Xe),I.resetTextureUnits();let me=z.fog,Ae=K.isMeshStandardMaterial?z.environment:null,Fe=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:rn,Oe=(K.isMeshStandardMaterial?H:T).get(K.envMap||Ae),Ye=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ze=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!Y.morphAttributes.position,ft=!!Y.morphAttributes.normal,Ct=!!Y.morphAttributes.color,Lt=Yi;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Lt=g.toneMapping);let xn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=xn!==void 0?xn.length:0,ze=oe.get(K),xi=m.state.lights;if(ne===!0&&(we===!0||C!==y)){let In=C===y&&K.id===b;fe.setState(K,C,In)}let gt=!1;K.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==xi.state.version||ze.outputColorSpace!==Fe||k.isBatchedMesh&&ze.batching===!1||!k.isBatchedMesh&&ze.batching===!0||k.isBatchedMesh&&ze.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ze.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ze.instancing===!1||!k.isInstancedMesh&&ze.instancing===!0||k.isSkinnedMesh&&ze.skinning===!1||!k.isSkinnedMesh&&ze.skinning===!0||k.isInstancedMesh&&ze.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ze.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ze.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ze.instancingMorph===!1&&k.morphTexture!==null||ze.envMap!==Oe||K.fog===!0&&ze.fog!==me||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==fe.numPlanes||ze.numIntersection!==fe.numIntersection)||ze.vertexAlphas!==Ye||ze.vertexTangents!==Ze||ze.morphTargets!==Be||ze.morphNormals!==ft||ze.morphColors!==Ct||ze.toneMapping!==Lt||ze.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,ze.__version=K.version);let Wn=ze.currentProgram;gt===!0&&(Wn=Yo(K,z,k));let Ws=!1,vn=!1,$r=!1,Dt=Wn.getUniforms(),ei=ze.uniforms;if($.useProgram(Wn.program)&&(Ws=!0,vn=!0,$r=!0),K.id!==b&&(b=K.id,vn=!0),Ws||y!==C){$.buffers.depth.getReversed()?(ue.copy(C.projectionMatrix),Fg(ue),Og(ue),Dt.setValue(L,"projectionMatrix",ue)):Dt.setValue(L,"projectionMatrix",C.projectionMatrix),Dt.setValue(L,"viewMatrix",C.matrixWorldInverse);let Oi=Dt.map.cameraPosition;Oi!==void 0&&Oi.setValue(L,Ve.setFromMatrixPosition(C.matrixWorld)),ye.logarithmicDepthBuffer&&Dt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Dt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,vn=!0,$r=!0)}if(k.isSkinnedMesh){Dt.setOptional(L,k,"bindMatrix"),Dt.setOptional(L,k,"bindMatrixInverse");let In=k.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Dt.setValue(L,"boneTexture",In.boneTexture,I))}k.isBatchedMesh&&(Dt.setOptional(L,k,"batchingTexture"),Dt.setValue(L,"batchingTexture",k._matricesTexture,I),Dt.setOptional(L,k,"batchingIdTexture"),Dt.setValue(L,"batchingIdTexture",k._indirectTexture,I),Dt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Dt.setValue(L,"batchingColorTexture",k._colorsTexture,I));let Jr=Y.morphAttributes;if((Jr.position!==void 0||Jr.normal!==void 0||Jr.color!==void 0)&&qe.update(k,Y,Wn),(vn||ze.receiveShadow!==k.receiveShadow)&&(ze.receiveShadow=k.receiveShadow,Dt.setValue(L,"receiveShadow",k.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ei.envMap.value=Oe,ei.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(ei.envMapIntensity.value=z.environmentIntensity),vn&&(Dt.setValue(L,"toneMappingExposure",g.toneMappingExposure),ze.needsLights&&Nm(ei,$r),me&&K.fog===!0&&ge.refreshFogUniforms(ei,me),ge.refreshMaterialUniforms(ei,K,O,Z,m.state.transmissionRenderTarget[C.id]),fr.upload(L,If(ze),ei,I)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(fr.upload(L,If(ze),ei,I),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Dt.setValue(L,"center",k.center),Dt.setValue(L,"modelViewMatrix",k.modelViewMatrix),Dt.setValue(L,"normalMatrix",k.normalMatrix),Dt.setValue(L,"modelMatrix",k.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let In=K.uniformsGroups;for(let Oi=0,Bi=In.length;Oi<Bi;Oi++){let Lf=In[Oi];F.update(Lf,Wn),F.bind(Lf,Wn)}}return Wn}function Nm(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Fm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,z,Y){oe.get(C.texture).__webglTexture=z,oe.get(C.depthTexture).__webglTexture=Y;let K=oe.get(C);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,z){let Y=oe.get(C);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,Y=0){A=C,E=z,S=Y;let K=!0,k=null,me=!1,Ae=!1;if(C){let Oe=oe.get(C);if(Oe.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(L.FRAMEBUFFER,null),K=!1;else if(Oe.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Oe.__hasExternalTextures)I.rebindTextures(C,oe.get(C.texture).__webglTexture,oe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Be=C.depthTexture;if(Oe.__boundDepthTexture!==Be){if(Be!==null&&oe.has(Be)&&(C.width!==Be.image.width||C.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}let Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ae=!0);let Ze=oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[z])?k=Ze[z][Y]:k=Ze[z],me=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?k=oe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?k=Ze[Y]:k=Ze,R.copy(C.viewport),D.copy(C.scissor),U=C.scissorTest}else R.copy(ie).multiplyScalar(O).floor(),D.copy(ve).multiplyScalar(O).floor(),U=Ue;if($.bindFramebuffer(L.FRAMEBUFFER,k)&&K&&$.drawBuffers(C,k),$.viewport(R),$.scissor(D),$.setScissorTest(U),me){let Oe=oe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Oe.__webglTexture,Y)}else if(Ae){let Oe=oe.get(C.texture),Ye=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Oe.__webglTexture,Y||0,Ye)}b=-1},this.readRenderTargetPixels=function(C,z,Y,K,k,me,Ae){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe){$.bindFramebuffer(L.FRAMEBUFFER,Fe);try{let Oe=C.texture,Ye=Oe.format,Ze=Oe.type;if(!ye.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-K&&Y>=0&&Y<=C.height-k&&L.readPixels(z,Y,K,k,Je.convert(Ye),Je.convert(Ze),me)}finally{let Oe=A!==null?oe.get(A).__webglFramebuffer:null;$.bindFramebuffer(L.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(C,z,Y,K,k,me,Ae){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe){let Oe=C.texture,Ye=Oe.format,Ze=Oe.type;if(!ye.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=C.width-K&&Y>=0&&Y<=C.height-k){$.bindFramebuffer(L.FRAMEBUFFER,Fe);let Be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),L.readPixels(z,Y,K,k,Je.convert(Ye),Je.convert(Ze),0);let ft=A!==null?oe.get(A).__webglFramebuffer:null;$.bindFramebuffer(L.FRAMEBUFFER,ft);let Ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ng(L,Ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.deleteBuffer(Be),L.deleteSync(Ct),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,z=null,Y=0){C.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,C=arguments[1]);let K=Math.pow(2,-Y),k=Math.floor(C.image.width*K),me=Math.floor(C.image.height*K),Ae=z!==null?z.x:0,Fe=z!==null?z.y:0;I.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Ae,Fe,k,me),$.unbindTexture()},this.copyTextureToTexture=function(C,z,Y=null,K=null,k=0){C.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1],z=arguments[2],k=arguments[3]||0,Y=null);let me,Ae,Fe,Oe,Ye,Ze,Be,ft,Ct,Lt=C.isCompressedTexture?C.mipmaps[k]:C.image;Y!==null?(me=Y.max.x-Y.min.x,Ae=Y.max.y-Y.min.y,Fe=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,Ye=Y.min.y,Ze=Y.isBox3?Y.min.z:0):(me=Lt.width,Ae=Lt.height,Fe=Lt.depth||1,Oe=0,Ye=0,Ze=0),K!==null?(Be=K.x,ft=K.y,Ct=K.z):(Be=0,ft=0,Ct=0);let xn=Je.convert(z.format),mt=Je.convert(z.type),ze;z.isData3DTexture?(I.setTexture3D(z,0),ze=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(I.setTexture2DArray(z,0),ze=L.TEXTURE_2D_ARRAY):(I.setTexture2D(z,0),ze=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);let xi=L.getParameter(L.UNPACK_ROW_LENGTH),gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Wn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ws=L.getParameter(L.UNPACK_SKIP_ROWS),vn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Oe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ze);let $r=C.isDataArrayTexture||C.isData3DTexture,Dt=z.isDataArrayTexture||z.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let ei=oe.get(C),Jr=oe.get(z),In=oe.get(ei.__renderTarget),Oi=oe.get(Jr.__renderTarget);$.bindFramebuffer(L.READ_FRAMEBUFFER,In.__webglFramebuffer),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Bi=0;Bi<Fe;Bi++)$r&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,oe.get(C).__webglTexture,k,Ze+Bi),C.isDepthTexture?(Dt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,oe.get(z).__webglTexture,k,Ct+Bi),L.blitFramebuffer(Oe,Ye,me,Ae,Be,ft,me,Ae,L.DEPTH_BUFFER_BIT,L.NEAREST)):Dt?L.copyTexSubImage3D(ze,k,Be,ft,Ct+Bi,Oe,Ye,me,Ae):L.copyTexSubImage2D(ze,k,Be,ft,Ct+Bi,Oe,Ye,me,Ae);$.bindFramebuffer(L.READ_FRAMEBUFFER,null),$.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Dt?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(ze,k,Be,ft,Ct,me,Ae,Fe,xn,mt,Lt.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(ze,k,Be,ft,Ct,me,Ae,Fe,xn,Lt.data):L.texSubImage3D(ze,k,Be,ft,Ct,me,Ae,Fe,xn,mt,Lt):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,k,Be,ft,me,Ae,xn,mt,Lt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,k,Be,ft,Lt.width,Lt.height,xn,Lt.data):L.texSubImage2D(L.TEXTURE_2D,k,Be,ft,me,Ae,xn,mt,Lt);L.pixelStorei(L.UNPACK_ROW_LENGTH,xi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ws),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vn),k===0&&z.generateMipmaps&&L.generateMipmap(ze),$.unbindTexture()},this.copyTextureToTexture3D=function(C,z,Y=null,K=null,k=0){return C.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,C=arguments[2],z=arguments[3],k=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,z,Y,K,k)},this.initRenderTarget=function(C){oe.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){E=0,S=0,A=null,$.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var za=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},As=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new P,Ji=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new He(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Dd=new P,Ud=new ut,Nd=new ut,Iy=new P,Fd=new We,pa=new P,Ml=new bn,Od=new We,bl=new Mr,ka=class extends de{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ff,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ml.copy(this.boundingSphere),Ml.applyMatrix4(s),e.ray.intersectsSphere(Ml)!==!1&&(Od.copy(s).invert(),bl.copy(e.ray).applyMatrix4(Od),!(this.boundingBox!==null&&bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ff?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===og?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ud.fromBufferAttribute(s.attributes.skinIndex,e),Nd.fromBufferAttribute(s.attributes.skinWeight,e),Dd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Nd.getComponent(r);if(o!==0){let a=Ud.getComponent(r);Fd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Iy.copy(Dd).applyMatrix4(Fd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},_o=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ha=class extends Zt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=nn,h=nn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bd=new We,Py=new We,Va=class i{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Py;Bd.multiplyMatrices(a,t[r]),Bd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ha(t,e,e,Ln,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new _o),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Rs=class extends He{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new We,zd=new We,ma=[],kd=new un,Ly=new We,no=new de,io=new bn,ot=class extends de{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ly)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),kd.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(kd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),io.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(n),e.ray.intersectsSphere(io)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),zd.multiplyMatrices(n,rr),no.matrixWorld=zd,no.raycast(e,ma);for(let o=0,a=ma.length;o<a;o++){let c=ma[o];c.instanceId=r,c.object=this,t.push(c)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ha(new Float32Array(s*this.count),s,this.count,au,Zn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Cs=class extends wn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ga=new P,Wa=new P,Hd=new We,so=new Mr,ga=new bn,wl=new P,Vd=new P,Er=class extends Ut{constructor(e=new tt,t=new Cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ga.fromBufferAttribute(t,s-1),Wa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ga.distanceTo(Wa);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;Hd.copy(s).invert(),so.copy(e.ray).applyMatrix4(Hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let _=d,p=x-1;_<p;_+=l){let m=h.getX(_),v=h.getX(_+1),M=xa(this,e,so,c,m,v);M&&t.push(M)}if(this.isLineLoop){let _=h.getX(x-1),p=h.getX(d),m=xa(this,e,so,c,_,p);m&&t.push(m)}}else{let d=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=d,p=x-1;_<p;_+=l){let m=xa(this,e,so,c,_,_+1);m&&t.push(m)}if(this.isLineLoop){let _=xa(this,e,so,c,x-1,d);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xa(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Ga.fromBufferAttribute(o,s),Wa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ga,Wa,wl,Vd)>n)return;wl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wl);if(!(c<e.near||c>e.far))return{distance:c,point:Vd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Gd=new P,Wd=new P,Tr=class extends Er{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Gd.fromBufferAttribute(t,s),Wd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gd.distanceTo(Wd);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xa=class extends Er{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},vo=class extends wn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xd=new We,Ch=new Mr,_a=new bn,va=new P,Ar=class extends Ut{constructor(e=new tt,t=new vo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;Xd.copy(s).invert(),Ch.copy(e.ray).applyMatrix4(Xd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=f,_=d;x<_;x++){let p=l.getX(x);va.fromBufferAttribute(u,p),qd(va,p,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,_=d;x<_;x++)va.fromBufferAttribute(u,x),qd(va,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qd(i,e,t,n,s,r,o){let a=Ch.distanceSqToPoint(i);if(a<t){let c=new P;Ch.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yo=class extends Zt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=nn,this.minFilter=nn,this.generateMipmaps=!1,this.needsUpdate=!0}};var ri=class extends Zt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new se:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],o=[],a=new P,c=new We;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(en(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(en(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Mo=class extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ih=class extends Mo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function du(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ya=new P,Sl=new du,El=new du,Tl=new du,Ph=class extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ya.subVectors(s[0],s[1]).add(s[0]),l=ya);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ya),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),x<1e-4&&(x=_),p<1e-4&&(p=_),Sl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,x,_,p),El.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,x,_,p),Tl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,x,_,p)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),El.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Tl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Sl.calc(c),El.calc(c),Tl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Dy(i,e){let t=1-i;return t*t*e}function Uy(i,e){return 2*(1-i)*i*e}function Ny(i,e){return i*i*e}function fo(i,e,t,n){return Dy(i,e)+Uy(i,t)+Ny(i,n)}function Fy(i,e){let t=1-i;return t*t*t*e}function Oy(i,e){let t=1-i;return 3*t*t*i*e}function By(i,e){return 3*(1-i)*i*i*e}function zy(i,e){return i*i*i*e}function po(i,e,t,n,s){return Fy(i,e)+Oy(i,t)+By(i,n)+zy(i,s)}var qa=class extends Fn{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lh=class extends Fn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y),po(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ya=class extends Fn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dh=class extends Fn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends Fn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(e,s.x,r.x,o.x),fo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uh=class extends Fn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(e,s.x,r.x,o.x),fo(e,s.y,r.y,o.y),fo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Yd(a,c.x,l.x,h.x,u.x),Yd(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},Nh=Object.freeze({__proto__:null,ArcCurve:Ih,CatmullRomCurve3:Ph,CubicBezierCurve:qa,CubicBezierCurve3:Lh,EllipseCurve:Mo,LineCurve:Ya,LineCurve3:Dh,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:Uh,SplineCurve:Za}),Fh=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Nh[s.type]().fromJSON(s))}return this}},$a=class extends Fh{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ya(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ka(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new qa(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Za(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Mo(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Is=class i extends tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new P,h=new se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ht=class i extends tt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,_=[],p=n/2,m=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function v(){let g=new P,w=new P,E=0,S=(t-e)/n;for(let A=0;A<=r;A++){let b=[],y=A/r,R=y*(t-e)+e;for(let D=0;D<=s;D++){let U=D/s,N=U*c+a,V=Math.sin(N),B=Math.cos(N);w.x=R*V,w.y=-y*n+p,w.z=R*B,u.push(w.x,w.y,w.z),g.set(V,S,B).normalize(),f.push(g.x,g.y,g.z),d.push(U,1-y),b.push(x++)}_.push(b)}for(let A=0;A<s;A++)for(let b=0;b<r;b++){let y=_[b][A],R=_[b+1][A],D=_[b+1][A+1],U=_[b][A+1];(e>0||b!==0)&&(h.push(y,R,U),E+=3),(t>0||b!==r-1)&&(h.push(R,D,U),E+=3)}l.addGroup(m,E,0),m+=E}function M(g){let w=x,E=new se,S=new P,A=0,b=g===!0?e:t,y=g===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,p*y,0),f.push(0,y,0),d.push(.5,.5),x++;let R=x;for(let D=0;D<=s;D++){let N=D/s*c+a,V=Math.cos(N),B=Math.sin(N);S.x=b*B,S.y=p*y,S.z=b*V,u.push(S.x,S.y,S.z),f.push(0,y,0),E.x=V*.5+.5,E.y=B*.5*y+.5,d.push(E.x,E.y),x++}for(let D=0;D<s;D++){let U=w+D,N=R+D;g===!0?h.push(N,N+1,U):h.push(N+1,N,U),A+=3}l.addGroup(m,A,g===!0?1:2),m+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bo=class i extends Ht{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oh=class i extends tt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new P,g=new P,w=new P;for(let E=0;E<t.length;E+=3)d(t[E+0],M),d(t[E+1],g),d(t[E+2],w),c(M,g,w,v)}function c(v,M,g,w){let E=w+1,S=[];for(let A=0;A<=E;A++){S[A]=[];let b=v.clone().lerp(g,A/E),y=M.clone().lerp(g,A/E),R=E-A;for(let D=0;D<=R;D++)D===0&&A===E?S[A][D]=b:S[A][D]=b.clone().lerp(y,D/R)}for(let A=0;A<E;A++)for(let b=0;b<2*(E-A)-1;b++){let y=Math.floor(b/2);b%2===0?(f(S[A][y+1]),f(S[A+1][y]),f(S[A][y])):(f(S[A][y+1]),f(S[A+1][y+1]),f(S[A+1][y]))}}function l(v){let M=new P;for(let g=0;g<r.length;g+=3)M.x=r[g+0],M.y=r[g+1],M.z=r[g+2],M.normalize().multiplyScalar(v),r[g+0]=M.x,r[g+1]=M.y,r[g+2]=M.z}function h(){let v=new P;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let g=p(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;o.push(g,1-w)}x(),u()}function u(){for(let v=0;v<o.length;v+=6){let M=o[v+0],g=o[v+2],w=o[v+4],E=Math.max(M,g,w),S=Math.min(M,g,w);E>.9&&S<.1&&(M<.2&&(o[v+0]+=1),g<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,M){let g=v*3;M.x=e[g+0],M.y=e[g+1],M.z=e[g+2]}function x(){let v=new P,M=new P,g=new P,w=new P,E=new se,S=new se,A=new se;for(let b=0,y=0;b<r.length;b+=9,y+=6){v.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),g.set(r[b+6],r[b+7],r[b+8]),E.set(o[y+0],o[y+1]),S.set(o[y+2],o[y+3]),A.set(o[y+4],o[y+5]),w.copy(v).add(M).add(g).divideScalar(3);let R=p(w);_(E,y+0,v,R),_(S,y+2,M,R),_(A,y+4,g,R)}}function _(v,M,g,w){w<0&&v.x===1&&(o[M]=v.x-1),g.x===0&&g.z===0&&(o[M]=w/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Ja=class i extends Oh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var oi=class extends $a{constructor(e){super(e),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new $a().fromJSON(s))}return this}},ky={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ep(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=Xy(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let x=t;x<s;x+=t)u=i[x],f=i[x+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return wo(r,o,t,a,c,d,0),o}};function Ep(i,e,t,n,s){let r,o;if(s===nM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Kd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Kd(r,i[r],i[r+1],o);return o&&hc(o,o.next)&&(Eo(o),o=o.next),o}function Ps(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(hc(t,t.next)||zt(t.prev,t,t.next)===0)){if(Eo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&$y(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Vy(i,n,s,r):Hy(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Eo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Gy(Ps(i),e,t),wo(i,e,t,n,s,r,2)):o===2&&Wy(i,e,t,n,s,r):wo(Ps(i),e,t,n,s,r,1);break}}}function Hy(i){let e=i.prev,t=i,n=i.next;if(zt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&cr(s,a,r,c,o,l,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Vy(i,e,t,n){let s=i.prev,r=i,o=i.next;if(zt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,x=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,m=Bh(d,x,e,t,n),v=Bh(_,p,e,t,n),M=i.prevZ,g=i.nextZ;for(;M&&M.z>=m&&g&&g.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=x&&M.y<=p&&M!==s&&M!==o&&cr(a,h,c,u,l,f,M.x,M.y)&&zt(M.prev,M,M.next)>=0||(M=M.prevZ,g.x>=d&&g.x<=_&&g.y>=x&&g.y<=p&&g!==s&&g!==o&&cr(a,h,c,u,l,f,g.x,g.y)&&zt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=_&&M.y>=x&&M.y<=p&&M!==s&&M!==o&&cr(a,h,c,u,l,f,M.x,M.y)&&zt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;g&&g.z<=v;){if(g.x>=d&&g.x<=_&&g.y>=x&&g.y<=p&&g!==s&&g!==o&&cr(a,h,c,u,l,f,g.x,g.y)&&zt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Gy(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!hc(s,r)&&Tp(s,n,n.next,r)&&So(s,r)&&So(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Eo(n),Eo(n.next),n=i=r),n=n.next}while(n!==i);return Ps(n)}function Wy(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Qy(o,a)){let c=Ap(o,a);o=Ps(o,o.next),c=Ps(c,c.next),wo(o,e,t,n,s,r,0),wo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Xy(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Ep(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(jy(l));for(s.sort(qy),r=0;r<s.length;r++)t=Yy(s[r],t);return t}function qy(i,e){return i.x-e.x}function Yy(i,e){let t=Ky(i,e);if(!t)return e;let n=Ap(t,i);return Ps(n,n.next),Ps(t,t.next)}function Ky(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&cr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),So(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Zy(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Zy(i,e){return zt(i.prev,i,e.prev)<0&&zt(e.next,i,i.next)<0}function $y(i,e,t,n){let s=i;do s.z===0&&(s.z=Bh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Jy(s)}function Jy(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Bh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function jy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function cr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Qy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!eM(i,e)&&(So(i,e)&&So(e,i)&&tM(i,e)&&(zt(i.prev,i,e.prev)||zt(i,e.prev,e))||hc(i,e)&&zt(i.prev,i,i.next)>0&&zt(e.prev,e,e.next)>0)}function zt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function hc(i,e){return i.x===e.x&&i.y===e.y}function Tp(i,e,t,n){let s=ba(zt(i,e,t)),r=ba(zt(i,e,n)),o=ba(zt(t,n,i)),a=ba(zt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ma(i,t,e)||r===0&&Ma(i,n,e)||o===0&&Ma(t,i,n)||a===0&&Ma(t,e,n))}function Ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ba(i){return i>0?1:i<0?-1:0}function eM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Tp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function So(i,e){return zt(i.prev,i,i.next)<0?zt(i,e,i.next)>=0&&zt(i,i.prev,e)>=0:zt(i,e,i.prev)<0||zt(i,i.next,e)<0}function tM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ap(i,e){let t=new zh(i.i,i.x,i.y),n=new zh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Kd(i,e,t,n){let s=new zh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Eo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ki=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Zd(e),$d(n,e);let o=e.length;t.forEach(Zd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,$d(n,t[c]);let a=ky.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Zd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $d(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ls=class i extends tt{constructor(e=new oi([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:iM,M,g=!1,w,E,S,A;m&&(M=m.getSpacedPoints(h),g=!0,f=!1,w=m.computeFrenetFrames(h,!1),E=new P,S=new P,A=new P),f||(p=0,d=0,x=0,_=0);let b=a.extractPoints(l),y=b.shape,R=b.holes;if(!Ki.isClockWise(y)){y=y.reverse();for(let te=0,pe=R.length;te<pe;te++){let L=R[te];Ki.isClockWise(L)&&(R[te]=L.reverse())}}let U=Ki.triangulateShape(y,R),N=y;for(let te=0,pe=R.length;te<pe;te++){let L=R[te];y=y.concat(L)}function V(te,pe,L){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(pe,L)}let B=y.length,Z=U.length;function O(te,pe,L){let De,he,ye,$=te.x-pe.x,re=te.y-pe.y,oe=L.x-te.x,I=L.y-te.y,T=$*$+re*re,H=$*I-re*oe;if(Math.abs(H)>Number.EPSILON){let X=Math.sqrt(T),Q=Math.sqrt(oe*oe+I*I),j=pe.x-re/X,be=pe.y+$/X,ge=L.x-I/Q,xe=L.y+oe/Q,it=((ge-j)*I-(xe-be)*oe)/($*I-re*oe);De=j+$*it-te.x,he=be+re*it-te.y;let fe=De*De+he*he;if(fe<=2)return new se(De,he);ye=Math.sqrt(fe/2)}else{let X=!1;$>Number.EPSILON?oe>Number.EPSILON&&(X=!0):$<-Number.EPSILON?oe<-Number.EPSILON&&(X=!0):Math.sign(re)===Math.sign(I)&&(X=!0),X?(De=-re,he=$,ye=Math.sqrt(T)):(De=$,he=re,ye=Math.sqrt(T/2))}return new se(De/ye,he/ye)}let W=[];for(let te=0,pe=N.length,L=pe-1,De=te+1;te<pe;te++,L++,De++)L===pe&&(L=0),De===pe&&(De=0),W[te]=O(N[te],N[L],N[De]);let J=[],ie,ve=W.concat();for(let te=0,pe=R.length;te<pe;te++){let L=R[te];ie=[];for(let De=0,he=L.length,ye=he-1,$=De+1;De<he;De++,ye++,$++)ye===he&&(ye=0),$===he&&($=0),ie[De]=O(L[De],L[ye],L[$]);J.push(ie),ve=ve.concat(ie)}for(let te=0;te<p;te++){let pe=te/p,L=d*Math.cos(pe*Math.PI/2),De=x*Math.sin(pe*Math.PI/2)+_;for(let he=0,ye=N.length;he<ye;he++){let $=V(N[he],W[he],De);ue($.x,$.y,-L)}for(let he=0,ye=R.length;he<ye;he++){let $=R[he];ie=J[he];for(let re=0,oe=$.length;re<oe;re++){let I=V($[re],ie[re],De);ue(I.x,I.y,-L)}}}let Ue=x+_;for(let te=0;te<B;te++){let pe=f?V(y[te],ve[te],Ue):y[te];g?(S.copy(w.normals[0]).multiplyScalar(pe.x),E.copy(w.binormals[0]).multiplyScalar(pe.y),A.copy(M[0]).add(S).add(E),ue(A.x,A.y,A.z)):ue(pe.x,pe.y,0)}for(let te=1;te<=h;te++)for(let pe=0;pe<B;pe++){let L=f?V(y[pe],ve[pe],Ue):y[pe];g?(S.copy(w.normals[te]).multiplyScalar(L.x),E.copy(w.binormals[te]).multiplyScalar(L.y),A.copy(M[te]).add(S).add(E),ue(A.x,A.y,A.z)):ue(L.x,L.y,u/h*te)}for(let te=p-1;te>=0;te--){let pe=te/p,L=d*Math.cos(pe*Math.PI/2),De=x*Math.sin(pe*Math.PI/2)+_;for(let he=0,ye=N.length;he<ye;he++){let $=V(N[he],W[he],De);ue($.x,$.y,u+L)}for(let he=0,ye=R.length;he<ye;he++){let $=R[he];ie=J[he];for(let re=0,oe=$.length;re<oe;re++){let I=V($[re],ie[re],De);g?ue(I.x,I.y+M[h-1].y,M[h-1].x+L):ue(I.x,I.y,u+L)}}}q(),ne();function q(){let te=s.length/3;if(f){let pe=0,L=B*pe;for(let De=0;De<Z;De++){let he=U[De];Ie(he[2]+L,he[1]+L,he[0]+L)}pe=h+p*2,L=B*pe;for(let De=0;De<Z;De++){let he=U[De];Ie(he[0]+L,he[1]+L,he[2]+L)}}else{for(let pe=0;pe<Z;pe++){let L=U[pe];Ie(L[2],L[1],L[0])}for(let pe=0;pe<Z;pe++){let L=U[pe];Ie(L[0]+B*h,L[1]+B*h,L[2]+B*h)}}n.addGroup(te,s.length/3-te,0)}function ne(){let te=s.length/3,pe=0;we(N,pe),pe+=N.length;for(let L=0,De=R.length;L<De;L++){let he=R[L];we(he,pe),pe+=he.length}n.addGroup(te,s.length/3-te,1)}function we(te,pe){let L=te.length;for(;--L>=0;){let De=L,he=L-1;he<0&&(he=te.length-1);for(let ye=0,$=h+p*2;ye<$;ye++){let re=B*ye,oe=B*(ye+1),I=pe+De+re,T=pe+he+re,H=pe+he+oe,X=pe+De+oe;Ve(I,T,H,X)}}}function ue(te,pe,L){c.push(te),c.push(pe),c.push(L)}function Ie(te,pe,L){Ne(te),Ne(pe),Ne(L);let De=s.length/3,he=v.generateTopUV(n,s,De-3,De-2,De-1);Xe(he[0]),Xe(he[1]),Xe(he[2])}function Ve(te,pe,L,De){Ne(te),Ne(pe),Ne(De),Ne(pe),Ne(L),Ne(De);let he=s.length/3,ye=v.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);Xe(ye[0]),Xe(ye[1]),Xe(ye[3]),Xe(ye[1]),Xe(ye[2]),Xe(ye[3])}function Ne(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function Xe(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return sM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Nh[s.type]().fromJSON(s)),new i(n,e.options)}},iM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new se(r,o),new se(a,c),new se(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],x=e[s*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new se(o,1-c),new se(l,1-u),new se(f,1-x),new se(_,1-m)]:[new se(a,1-c),new se(h,1-u),new se(d,1-x),new se(p,1-m)]}};function sM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ja=class i extends tt{constructor(e=new oi([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(r,3)),this.setAttribute("uv",new ct(o,2));function l(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,x=f.holes;Ki.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=x.length;p<m;p++){let v=x[p];Ki.isClockWise(v)===!0&&(x[p]=v.reverse())}let _=Ki.triangulateShape(d,x);for(let p=0,m=x.length;p<m;p++){let v=x[p];d=d.concat(v)}for(let p=0,m=d.length;p<m;p++){let v=d[p];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,m=_.length;p<m;p++){let v=_[p],M=v[0]+u,g=v[1]+u,w=v[2]+u;n.push(M,g,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function rM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var $n=class i extends tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,f=new P,d=[],x=[],_=[],p=[];for(let m=0;m<=n;m++){let v=[],M=m/n,g=0;m===0&&o===0?g=.5/t:m===n&&c===Math.PI&&(g=-.5/t);for(let w=0;w<=t;w++){let E=w/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+M*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(E+g,1-M),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let M=h[m][v+1],g=h[m][v],w=h[m+1][v],E=h[m+1][v+1];(m!==0||o>0)&&d.push(M,g,E),(m!==n-1||c<Math.PI)&&d.push(g,w,E)}this.setIndex(d),this.setAttribute("position",new ct(x,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ji=class i extends tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let _=x/s*r,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(x/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let _=(s+1)*d+x-1,p=(s+1)*(d-1)+x-1,m=(s+1)*(d-1)+x,v=(s+1)*d+x;o.push(_,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Qi=class extends Nt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},At=class extends wn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends At{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function wa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function oM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function aM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Jd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Rp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var es=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kh=class extends es{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Of,endingEnd:Of}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bf:r=e,a=2*t-n;break;case zf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bf:o=e,c=2*n-t;break;case zf:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),_=x*x,p=_*x,m=-f*p+2*f*_-f*x,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*x+1,M=(-1-d)*p+(1.5+d)*_+.5*x,g=d*p-d*_;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+v*o[l+w]+M*o[c+w]+g*o[u+w];return r}},Hh=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Vh=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _r:t=this.InterpolantFactoryMethodDiscrete;break;case vr:t=this.InterpolantFactoryMethodLinear;break;case Kc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _r;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&oM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let _=t[u+x];if(_!==t[f+x]||_!==t[d+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=vr;var ts=class extends On{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=_r;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends On{};Qa.prototype.ValueTypeName="color";var Ii=class extends On{};Ii.prototype.ValueTypeName="number";var Gh=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}},Pi=class extends On{InterpolantFactoryMethodLinear(e){return new Gh(this.times,this.values,this.getValueSize(),e)}};Pi.prototype.ValueTypeName="quaternion";Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends On{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=_r;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends On{};Li.prototype.ValueTypeName="vector";var ec=class{constructor(e="",t=-1,n=[],s=ag){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(lM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=aM(c);c=Jd(c,1,h),l=Jd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ii(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,x,_){if(d.length!==0){let p=[],m=[];Rp(d,p,m,x),p.length!==0&&_.push(new u(f,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)d[f[x].morphTargets[_]]=-1;for(let _ in d){let p=[],m=[];for(let v=0;v!==f[x].morphTargets.length;++v){let M=f[x];p.push(M.time),m.push(M.morphTarget===_?1:0)}s.push(new Ii(".morphTargetInfluence["+_+"]",p,m))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(Li,d+".position",f,"pos",s),n(Pi,d+".quaternion",f,"rot",s),n(Li,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function cM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ii;case"vector":case"vector2":case"vector3":case"vector4":return Li;case"color":return Qa;case"quaternion":return Pi;case"bool":case"boolean":return ts;case"string":return ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function lM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=cM(i.type);if(i.times===void 0){let t=[],n=[];Rp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var qi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Wh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],x=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},hM=new Wh,Jn=class{constructor(e){this.manager=e!==void 0?e:hM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Jn.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},Xh=class extends Error{constructor(e,t){super(e),this.response=t}},is=class extends Jn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=wi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,x=d!==0,_=0,p=new ReadableStream({start(m){v();function v(){u.read().then(({done:M,value:g})=>{if(M)m.close();else{_+=g.byteLength;let w=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:d});for(let E=0,S=h.length;E<S;E++){let A=h[E];A.onProgress&&A.onProgress(w)}m.enqueue(g),v()}},M=>{m.error(M)})}}});return new Response(p)}else throw new Xh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(x=>d.decode(x))}}}).then(l=>{qi.add(e,l);let h=wi[e];delete wi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=wi[e];if(h===void 0)throw this.manager.itemError(e),l;delete wi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var qh=class extends Jn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=qi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=go("img");function c(){h(),qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Rr=class extends Jn{constructor(e){super(e)}load(e,t,n,s){let r=new Zt,o=new qh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Cr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},tc=class extends Cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Al=new We,jd=new P,Qd=new P,To=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(jd),Qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qd),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yh=class extends To{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=yr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ir=class extends Cr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Yh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ep=new We,ro=new P,Rl=new P,Kh=class extends To{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),n.position.copy(ro),Rl.copy(n.position),Rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rl),n.updateMatrixWorld(),s.makeTranslation(-ro.x,-ro.y,-ro.z),ep.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ep)}},nc=class extends Cr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Zh=class extends To{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pr=class extends Cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Zh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ss=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ic=class extends Jn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=qi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return qi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),qi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});qi.add(e,c),r.manager.itemStart(e)}};var Lr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=tp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function tp(){return performance.now()}var pu="\\[\\]\\.:\\/",uM=new RegExp("["+pu+"]","g"),mu="[^"+pu+"]",fM="[^"+pu.replace("\\.","")+"]",dM=/((?:WC+[\/:])*)/.source.replace("WC",mu),pM=/(WCOD+)?/.source.replace("WCOD",fM),mM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mu),gM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mu),xM=new RegExp("^"+dM+pM+mM+gM+"$"),_M=["material","materials","bones","map"],$h=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uM,"")}static parseTrackName(e){let t=xM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_M.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=$h;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pb=new Float32Array(1);var np=new se,sc=class{constructor(e=new se(1/0,1/0),t=new se(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=np.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,np).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jh);function gu(i,e){if(e===pp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Co||e===ac){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Co)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var uc=class extends Jn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Ou(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ss.extractUrlBase(e);o=ss.resolveURL(l,this.path)}else o=ss.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new is(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Dp){try{o[at.KHR_BINARY_GLTF]=new Bu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Xu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case at.KHR_MATERIALS_UNLIT:o[u]=new Mu;break;case at.KHR_DRACO_MESH_COMPRESSION:o[u]=new zu(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[u]=new ku;break;case at.KHR_MESH_QUANTIZATION:o[u]=new Hu;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function vM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},yu=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ee(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],rn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Pr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new nc(h),l.distance=u;break;case"spot":l=new Ir(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Mu=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return kt}extendParams(e,t,n){let s=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(s)}},bu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},wu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Eu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Tu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(a[0],a[1],a[2],rn),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(a[0],a[1],a[2],rn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Uu=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Nu=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Fu=class{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Ou=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Bn.TRIANGLES&&l.mode!==Bn.TRIANGLE_STRIP&&l.mode!==Bn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let x of u){let _=new We,p=new P,m=new an,v=new P(1,1,1),M=new ot(x.geometry,x.material,f);for(let g=0;g<f;g++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,g),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,g),c.SCALE&&v.fromBufferAttribute(c.SCALE,g),M.setMatrixAt(g,_.compose(p,m,v));for(let g in c)if(g==="_COLOR_0"){let w=c[g];M.instanceColor=new Rs(w.array,w.itemSize,w.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&x.geometry.setAttribute(g,c[g]);Ut.prototype.copy.call(M,x),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Dp="glTF",Po=12,Cp={JSON:1313821514,BIN:5130562},Bu=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Po),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Po,r=new DataView(e,Po),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Cp.JSON){let l=new Uint8Array(e,Po+o,a);this.content=n.decode(l)}else if(c===Cp.BIN){let l=Po+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},zu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Gu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Gu[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Ur[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let x in d.attributes){let _=d.attributes[x],p=c[x];p!==void 0&&(_.normalized=p)}u(d)},a,l,rn,f)})})}},ku=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Hu=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},fc=class extends es{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,x=e*l,_=x-l,p=-2*d+3*f,m=d-f,v=1-p,M=m-f+u;for(let g=0;g!==a;g++){let w=o[_+g+a],E=o[_+g+c]*h,S=o[x+g+a],A=o[x+g]*h;r[g]=v*w+M*E+p*S+m*A}return r}},yM=new an,Vu=class extends fc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return yM.fromArray(r).normalize().toArray(r),r}},Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ip={9728:nn,9729:_n,9984:iu,9985:co,9986:or,9987:ni},Pp={33071:Ti,33648:Es,10497:Ci},xu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},MM={CUBICSPLINE:void 0,LINEAR:vr,STEP:_r},_u={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new At({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),i.DefaultMaterial}function Us(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Di(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function SM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function EM(i){let e,t=i.extensions&&i.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vu(t.attributes):e=i.indices+":"+vu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+vu(i.targets[n]);return e}function vu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Wu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var AM=new We,Xu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&o<98?this.textureLoader=new Rr(this.options.manager):this.textureLoader=new ic(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new is(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Us(r,a,s),Di(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ss.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=xu[s.type],a=Ur[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new He(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=xu[s.type],l=Ur[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,_,p;if(d&&d!==u){let m=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,M=t.cache.get(v);M||(_=new l(a,m*d,s.count*d/h),M=new As(_,d/h),t.cache.add(v,M)),p=new Ji(M,c,f%d/h,x)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),p=new He(_,c,x);if(s.sparse!==void 0){let m=xu.SCALAR,v=Ur[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,g=s.sparse.values.byteOffset||0,w=new v(o[1],M,s.sparse.count*m),E=new l(o[2],g,s.sparse.count*c);a!==null&&(p=new He(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let S=0,A=w.length;S<A;S++){let b=w[S];if(p.setX(b,E[S*c]),c>=2&&p.setY(b,E[S*c+1]),c>=3&&p.setZ(b,E[S*c+2]),c>=4&&p.setW(b,E[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=x}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ip[f.magFilter]||_n,h.minFilter=Ip[f.minFilter]||ni,h.wrapS=Pp[f.wrapS]||Ci,h.wrapT=Pp[f.wrapT]||Ci,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==_n,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let x=f;t.isImageBitmapLoader===!0&&(x=function(_){let p=new Zt(_);p.needsUpdate=!0,f(p)}),t.load(ss.resolveURL(u,r.path),x,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Di(u,o),u.userData.mimeType=o.mimeType||TM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new vo,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Cs,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return At}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[at.KHR_MATERIALS_UNLIT]){let u=s[at.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],rn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,St)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ot);let h=r.alphaMode||_u.OPAQUE;if(h===_u.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_u.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==kt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==kt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==kt){let u=r.emissiveFactor;a.emissive=new Ee().setRGB(u[0],u[1],u[2],rn)}return r.emissiveTexture!==void 0&&o!==kt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Di(u,r),t.associations.set(u,{materials:e}),r.extensions&&Us(s,u,r),u})}createUniqueName(e){let t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Lp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=EM(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[at.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Lp(new tt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?bM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,x=h.length;d<x;d++){let _=h[d],p=o[d],m,v=l[d];if(p.mode===Bn.TRIANGLES||p.mode===Bn.TRIANGLE_STRIP||p.mode===Bn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new ka(_,v):new de(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Bn.TRIANGLE_STRIP?m.geometry=gu(m.geometry,ac):p.mode===Bn.TRIANGLE_FAN&&(m.geometry=gu(m.geometry,Co));else if(p.mode===Bn.LINES)m=new Tr(_,v);else if(p.mode===Bn.LINE_STRIP)m=new Er(_,v);else if(p.mode===Bn.LINE_LOOP)m=new Xa(_,v);else if(p.mode===Bn.POINTS)m=new Ar(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&SM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Di(m,r),p.extensions&&Us(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,x=u.length;d<x;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Us(s,u[0],r),u[0];let f=new pt;r.extensions&&Us(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,x=u.length;d<x;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(Io.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new $i(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Di(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new We;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Va(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],x=s.samplers[d.sampler],_=d.target,p=_.node,m=s.parameters!==void 0?s.parameters[x.input]:x.input,v=s.parameters!==void 0?s.parameters[x.output]:x.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(x),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],x=u[2],_=u[3],p=u[4],m=[];for(let v=0,M=f.length;v<M;v++){let g=f[v],w=d[v],E=x[v],S=_[v],A=p[v];if(g===void 0)continue;g.updateMatrix&&g.updateMatrix();let b=n._createAnimationTracks(g,w,E,S,A);if(b)for(let y=0;y<b.length;y++)m.push(b[y])}return new ec(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,AM)});for(let d=0,x=u.length;d<x;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new _o:l.length>1?h=new pt:l.length===1?h=l[0]:h=new Ut,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Di(h,r),r.extensions&&Us(n,h,r),r.matrix!==void 0){let u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new pt;n.name&&(r.name=s.createUniqueName(n.name)),Di(r,n),n.extensions&&Us(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof wn||f instanceof Zt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];rs[r.path]===rs.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(rs[r.path]){case rs.weights:l=Ii;break;case rs.rotation:l=Pi;break;case rs.position:case rs.scale:l=Li;break;default:switch(n.itemSize){case 1:l=Ii;break;case 2:case 3:default:l=Li;break}break}let h=s.interpolation!==void 0?MM[s.interpolation]:vr,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let x=new l(c[f]+"."+rs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Wu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Pi?Vu:fc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function RM(i,e,t){let n=e.attributes,s=new un;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){let h=Wu(Ur[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,x=f.max;if(d!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),f.normalized){let _=Wu(Ur[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new bn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Lp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Gu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Di(i,e),RM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?wM(i,e.targets,t):i})}var qu=new WeakMap,dc=class extends Jn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new is(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,St,n).catch(n)}decodeDracoFile(e,t,n,s,r=rn,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(qu.has(e)){let c=qu.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),qu.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new tt;e.index&&t.setIndex(new He(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,c=new He(o,a);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==St)return;let n=new Ee;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),Qe.toWorkingColorSpace(n,St),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new is(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=CM.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function CM(){let i,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(h=>{let u=h.draco,f=new u.Decoder;try{let d=t(u,f,new Int8Array(c),l),x=d.attributes.map(_=>_.array.buffer);d.index&&x.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},x)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{u.destroy(f)}});break}};function t(o,a,c,l){let h=l.attributeIDs,u=l.attributeTypes,f,d,x=a.GetEncodedGeometryType(c);if(x===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(c,c.byteLength,f);else if(x===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(c,c.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let _={index:null,attributes:[]};for(let p in h){let m=self[u[p]],v,M;if(l.useUniqueIDs)M=h[p],v=a.GetAttributeByUniqueId(f,M);else{if(M=a.GetAttributeId(f,o[h[p]]),M===-1)continue;v=a.GetAttribute(f,M)}let g=s(o,a,f,p,m,v);p==="color"&&(g.vertexColorSpace=l.vertexColorSpace),_.attributes.push(g)}return x===o.TRIANGULAR_MESH&&(_.index=n(o,a,f)),o.destroy(f),_}function n(o,a,c){let h=c.num_faces()*3,u=h*4,f=o._malloc(u);a.GetTrianglesUInt32Array(c,u,f);let d=new Uint32Array(o.HEAPF32.buffer,f,h).slice();return o._free(f),{array:d,itemSize:1}}function s(o,a,c,l,h,u){let f=u.num_components(),x=c.num_points()*f,_=x*h.BYTES_PER_ELEMENT,p=r(o,h),m=o._malloc(_);a.GetAttributeDataArrayForAllPoints(c,u,p,_,m);let v=new h(o.HEAPF32.buffer,m,x).slice();return o._free(m),{name:l,array:v,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var Vt=[{id:"ferrari458",name:"Ferrari 458",w:2.26,len:4.53,maxKmh:300,accel:13,handling:10},{id:"aventador",name:"Lamborghini Aventador",w:2.27,len:4.78,maxKmh:320,accel:14,handling:9.5},{id:"valhalla",name:"Aston Martin Valhalla",w:2.2,len:4.7,maxKmh:330,accel:15,handling:10.5},{id:"porsche911",name:"Porsche 911 Turbo",w:2.14,len:4.29,maxKmh:250,accel:11,handling:10},{id:"tesla3",name:"Tesla Model 3",w:2.18,len:4.69,maxKmh:240,accel:12,handling:9},{id:"urus",name:"Lamborghini Urus",w:2.26,len:5.11,maxKmh:280,accel:11,handling:8.5},{id:"peugeot3008",name:"Peugeot 3008",w:2.1,len:4.45,maxKmh:190,accel:8,handling:8}],Up=new dc;Up.setDecoderPath("draco/");var Np=new uc;Np.setDRACOLoader(Up);var jn={},Nr={};function IM(i,e){let t=i.scene,n=[],s=[];return t.traverse(r=>{if(!r.isMesh)return;r.castShadow=!0,r.receiveShadow=!1,r.frustumCulled=!1;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o){if(!a)continue;a.transparent&&a.opacity<.99&&(a.depthWrite=!1);let c=(a.name||"").toLowerCase();/tail|brake|rear.?light|back.?light|lights_?glass_?back|stop/.test(c)&&!/front/.test(c)?s.push(a):(/head|front.?light|light.*front|lights?front|led|lamp|phare|lights_red|lichter|projector/.test(c)||/^light/.test(c))&&n.push(a),a.envMapIntensity===void 0&&(a.envMapIntensity=1)}}),{scene:t,headMats:n,tailMats:s}}function Lo(i,e,t){let n=i+(e?"_lo":"");return jn[n]?Promise.resolve(jn[n]):(Nr[n]||(Nr[n]=new Promise((s,r)=>{Np.load(`models/${n}.glb`,o=>{jn[n]=IM(o,!e),delete Nr[n],s(jn[n])},t,o=>{delete Nr[n],r(o)})})),Nr[n])}var Ns=(i,e)=>!!jn[i+(e?"_lo":"")],pc=null;function PM(){if(pc)return pc;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,10,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.3)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),pc=new ri(i),pc}function Fr(i,e,t){let n=jn[i+(e?"_lo":"")]||jn[i+"_lo"],s=Vt.find(u=>u.id===i),r=n.scene.clone(!0),o=new Map;r.traverse(u=>{if(!u.isMesh)return;let f=d=>{if(d&&/^BODY_PAINT/.test(d.name)){if(!o.has(d)){let x=d.clone();x.color.setHex(t),x.metalness=Math.max(x.metalness,.5),x.roughness=Math.min(x.roughness,.35),x.envMapIntensity=1.2,o.set(d,x)}return o.get(d)}return d};u.material=Array.isArray(u.material)?u.material.map(f):f(u.material)});let a=[],c=[];r.traverse(u=>{/^wheel_(FL|FR|RL|RR)$/.test(u.name)&&c.push(u)});for(let u of c){let f=new pt;f.position.copy(u.position),u.position.set(0,0,0),r.add(f),f.add(u);let d=new un().setFromObject(u);f.userData.spin=u,f.userData.front=/F/.test(u.name),f.userData.radius=Math.max(.25,(d.max.y-d.min.y)/2),a.push(f)}let l=new de(new sn(s.w+.9,s.len+.9),new kt({map:PM(),transparent:!0,depthWrite:!1,opacity:.9}));l.rotation.x=-Math.PI/2,l.position.y=.06,l.renderOrder=1,l.userData.own=!0,r.add(l);let h=new de(new $n(.3,10,8),new kt({color:5609983,transparent:!0,opacity:0,depthWrite:!1,blending:Un}));return h.position.set(0,.38,s.len/2+.35),h.scale.set(1.6,.45,2.2),h.userData.own=!0,r.add(h),r.userData={spec:s,wheels:a,glow:h,paint:[...o.values()],proto:n},r}function Fp(i){for(let e in jn){let t=jn[e];for(let n of t.headMats)n.emissive=n.emissive||new Ee,n.emissive.setHex(16773840),n.emissiveIntensity=i?4:0;for(let n of t.tailMats)n.emissive=n.emissive||new Ee,n.emissive.setHex(16722458),n.emissiveIntensity=i?2.5:0}}function Op(i){for(let e in jn)jn[e].scene.traverse(t=>{if(t.isMesh){let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n)s&&(s.envMapIntensity=i)}})}function Or(i){if(i){for(let e of i.userData.paint||[])e.dispose();i.traverse(e=>{e.isMesh&&e.userData.own&&(e.geometry.dispose(),e.material&&e.material.dispose&&e.material.dispose())})}}var Do=class i extends de{constructor(){let e=i.SkyShader,t=new Nt({name:e.name,uniforms:ai.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:tn,depthWrite:!1});super(new rt(1,1,1),t),this.isSky=!0}};Do.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Yu=i=>i[Math.floor(Math.random()*i.length)],Vp="kidcars-progress-v1",ke={stars:0,missions:0,deliveries:0,km:0,bestKmh:0,boosts:0,horns:0,worlds:{},cars:{},nightKm:0,photos:0,stickers:{}};try{Object.assign(ke,JSON.parse(localStorage.getItem(Vp)||"{}"))}catch(i){}function Os(){try{localStorage.setItem(Vp,JSON.stringify(ke))}catch(i){}}var gc=[{id:"star1",e:"\u2B50",n:"First Star",ok:()=>ke.stars>=1},{id:"star50",e:"\u{1F31F}",n:"Star Collector",ok:()=>ke.stars>=50},{id:"star200",e:"\u2728",n:"Star Hunter",ok:()=>ke.stars>=200},{id:"star500",e:"\u{1F4AB}",n:"Star Master",ok:()=>ke.stars>=500},{id:"star1000",e:"\u{1F320}",n:"Star Legend",ok:()=>ke.stars>=1e3},{id:"m1",e:"\u{1F3AF}",n:"First Mission",ok:()=>ke.missions>=1},{id:"m5",e:"\u{1F3C5}",n:"Five Missions",ok:()=>ke.missions>=5},{id:"m20",e:"\u{1F3C6}",n:"Mission Champ",ok:()=>ke.missions>=20},{id:"km5",e:"\u{1F6E3}\uFE0F",n:"5 km Driven",ok:()=>ke.km>=5},{id:"km25",e:"\u{1F5FA}\uFE0F",n:"25 km Driven",ok:()=>ke.km>=25},{id:"km100",e:"\u{1F30D}",n:"100 km Driven",ok:()=>ke.km>=100},{id:"sp100",e:"\u{1F4A8}",n:"100 km/h",ok:()=>ke.bestKmh>=100},{id:"sp200",e:"\u{1F680}",n:"200 km/h",ok:()=>ke.bestKmh>=200},{id:"sp300",e:"\u26A1",n:"300 km/h",ok:()=>ke.bestKmh>=300},{id:"wc",e:"\u{1F333}",n:"Country Driver",ok:()=>(ke.worlds.country||0)>=1},{id:"wd",e:"\u{1F335}",n:"Desert Driver",ok:()=>(ke.worlds.desert||0)>=1},{id:"wci",e:"\u{1F3D9}\uFE0F",n:"City Driver",ok:()=>(ke.worlds.city||0)>=1},{id:"ws",e:"\u26C4",n:"Snow Driver",ok:()=>(ke.worlds.snow||0)>=1},{id:"wl",e:"\u{1F3D8}\uFE0F",n:"Lenasia Driver",ok:()=>(ke.worlds.lenasia||0)>=1},{id:"night",e:"\u{1F319}",n:"Night Owl",ok:()=>ke.nightKm>=1},{id:"d1",e:"\u{1F6CB}\uFE0F",n:"Recliner Delivered",ok:()=>ke.deliveries>=1},{id:"d10",e:"\u{1F69A}",n:"Delivery Pro",ok:()=>ke.deliveries>=10},{id:"cars",e:"\u{1F697}",n:"Drove Every Car",ok:()=>Object.keys(ke.cars).length>=7},{id:"horn",e:"\u{1F4E3}",n:"Beep Beep",ok:()=>ke.horns>=20},{id:"photo",e:"\u{1F4F8}",n:"Photographer",ok:()=>ke.photos>=1}];function Uo(){let i=[];for(let e of gc)!ke.stickers[e.id]&&e.ok()&&(ke.stickers[e.id]=1,i.push(e));return i.length&&Os(),i}var Gp=400,Qn=null,Fs=[],Bp=new We,zp=new P,kp=new an,LM=new P(1,1,1),Hp=new fn;function Wp(i){let e=new oi;for(let s=0;s<10;s++){let r=s%2?.3:.7,o=s/10*Math.PI*2-Math.PI/2,a=Math.cos(o)*r,c=Math.sin(o)*r;s?e.lineTo(a,c):e.moveTo(a,c)}e.closePath();let t=new Ls(e,{depth:.16,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2});t.center();let n=new At({color:16762940,emissive:16751104,emissiveIntensity:.8,roughness:.3,metalness:.4});return Qn=new ot(t,n,Gp),Qn.frustumCulled=!1,Qn.count=0,i.add(Qn),Qn}function Br(i,e,t){Fs.length>=Gp||Fs.push({x:i,z:e,g:t,alive:!0,ph:Math.random()*6.28})}function xc(i){for(let e=Fs.length-1;e>=0;e--)Fs[e].g===i&&Fs.splice(e,1)}function Xp(){Fs.length=0,Qn&&(Qn.count=0)}var Ku=0;function qp(i,e,t){if(!Qn)return 0;Ku+=i*2.2;let n=0,s=0;for(let r of Fs){if(!r.alive)continue;let o=!1;for(let[a,c]of e){let l=r.x-a,h=r.z-c;if(l*l+h*h<2.3*2.3){o=!0;break}}if(o){r.alive=!1,s++,t&&t(r.x,r.z);continue}zp.set(r.x,1.05+Math.sin(Ku*1.4+r.ph)*.14,r.z),Hp.set(0,Ku+r.ph,0),kp.setFromEuler(Hp),Bp.compose(zp,kp,LM),Qn.setMatrixAt(n++,Bp)}return Qn.count=n,Qn.instanceMatrix.needsUpdate=!0,s}function Yp(i){let e=new pt,t=new kt({color:16766282,transparent:!0,opacity:.32,depthWrite:!1,blending:Un,side:Ot,fog:!1}),n=new de(new Ht(1.6,2.2,60,16,1,!0),t);n.position.y=30,e.add(n);let s=new de(new ji(3.2,.25,8,32),new At({color:16766282,emissive:16756736,emissiveIntensity:1.2,roughness:.3}));return s.rotation.x=Math.PI/2,s.position.y=.4,e.add(s),e.visible=!1,i.add(e),e.userData.tick=(r,o)=>{s.position.y=.5+Math.sin(o*2.5)*.3,s.rotation.z+=r,t.opacity=.26+Math.sin(o*3)*.08},e}function Kp(){let i=new pt,e=new At({color:5913382,roughness:.55,metalness:.05}),t=new At({color:2825492,roughness:.7}),n=new At({color:13677676,roughness:.35,metalness:.7}),s=(r,o,a,c,l,h,u,f=0)=>{let d=new de(new rt(r,o,a),c);return d.position.set(l,h,u),d.rotation.x=f,d.castShadow=!0,i.add(d),d};return s(.95,.12,.9,t,0,.06,0),s(.8,.3,.8,e,0,.3,.05),s(.8,.85,.28,e,0,.78,-.42,-.22),s(.2,.42,.85,e,-.45,.42,0),s(.2,.42,.85,e,.45,.42,0),s(.7,.14,.42,e,0,.36,.62,.35),s(.5,.06,.06,n,0,1.18,-.5),i.scale.setScalar(.85),i}var DM=i=>{let e=(i.name||"").toLowerCase(),t=i.k;return/masjid|mosque|islam|sufi|jumma/.test(e)||t==="mosque"?"\u{1F54C}":/temple|koil|mandir|sai centre|hindu/.test(e)?"\u{1F6D5}":/church|catholic|chapel|kingdom hall/.test(e)||t==="place_of_worship"?"\u26EA":{mall:"\u{1F6CD}\uFE0F",school:"\u{1F3EB}",park:"\u{1F333}",supermarket:"\u{1F6D2}",hospital:"\u{1F3E5}",clinic:"\u{1F3E5}",library:"\u{1F4DA}",police:"\u{1F693}",fuel:"\u26FD",sports_centre:"\u26BD",community_centre:"\u{1F3DB}\uFE0F",childcare:"\u{1F9F8}",retail:"\u{1F3EA}",commercial:"\u{1F3EA}",chemist:"\u{1F48A}",butcher:"\u{1F969}",stationery:"\u270F\uFE0F"}[t]||"\u{1F4CD}"},UM=/cemetery|parking|residential/,mc=class{constructor(){this.cur=null,this.seq=0,this.ownStars=0}next(e){let t=this.seq++,n=[()=>({kind:"stars",icon:"\u2B50",text:`Collect ${10+5*(t%3)} stars`,need:10+5*(t%3),have:0,reward:20}),()=>({kind:"km",icon:"\u{1F6E3}\uFE0F",text:`Drive ${t>6?2:1} km`,need:(t>6?2:1)*1e3,have:0,reward:20,unit:"km"}),()=>{let r=Math.round(e.maxKmh*(.5+Math.min(.3,t*.03))/10)*10;return{kind:"speed",icon:"\u{1F4A8}",text:`Reach ${r} km/h`,need:r,have:0,reward:20,unit:"kmh"}},()=>({kind:"clean",icon:"\u{1F6E1}\uFE0F",text:"Drive 600 m with no bumps",need:600,have:0,reward:25,unit:"m"}),()=>({kind:"boost",icon:"\u26A1",text:"Use boost 3 times",need:3,have:0,reward:15}),()=>({kind:"horn",icon:"\u{1F4E3}",text:"Honk the horn 5 times",need:5,have:0,reward:10})];e.traffic&&!e.isMap&&n.push(()=>({kind:"pass",icon:"\u{1F697}",text:`Pass ${3+t%2*2} cars`,need:3+t%2*2,have:0,reward:25}));let s=null;if(e.isMap){let r=t%3;r===0?s=this.gotoMission(e):r===1&&(s=this.deliverMission(e)),s||(s=Yu(n)())}else s=n[t%n.length]();return s.phase=0,this.cur=s,this.ownStars=0,s}snap(e,t,n){let s=e.nearest(t,n,{skipMinor:!0});return!s||s.d>1e8||s.d>90?null:[s.px,s.pz,s.name]}gotoMission(e){let n=e.road.data.pois.filter(s=>s.name&&!UM.test(s.k)&&s.name.length<34).map(s=>({p:s,d:Math.hypot(s.c[0]-e.x,s.c[1]-e.z)})).filter(s=>s.d>250&&s.d<950);for(let s=0;s<12&&n.length;s++){let r=Yu(n),o=this.snap(e.road,r.p.c[0],r.p.c[1]);if(o)return{kind:"goto",icon:DM(r.p),text:`Drive to ${r.p.name}`,target:[o[0],o[1]],poi:r.p.c,need:1,have:0,reward:25}}return null}deliverMission(e){if(!e.showroomAt)return null;let t=this.snap(e.road,e.showroomAt[0],e.showroomAt[1]);if(!t)return null;let n=e.road.nodes,s=[];for(let a of e.road.roads){if(!a.name||!/residential|living_street|unclassified/.test(a.t)||a.len<80)continue;let c=n[a.n[Math.floor(a.n.length/2)]],l=Math.hypot(c[0]-t[0],c[1]-t[1]);l<300||l>900||s.push({r:a,p:c})}if(!s.length)return null;let{r,p:o}=Yu(s);return{kind:"deliver",icon:"\u{1F6CB}\uFE0F",text:"Pick up a recliner at Glyde-X",text2:`Deliver it to a house on ${r.name}`,target:[t[0],t[1]],target2:[o[0],o[1]],need:2,have:0,reward:40}}event(e,t){let n=this.cur;if(!n||n.done)return!1;switch(n.kind){case"stars":e==="star"&&n.have++;break;case"km":e==="dist"&&(n.have+=t);break;case"speed":e==="speed"&&(n.have=Math.max(n.have,t));break;case"clean":e==="dist"&&(n.have+=t),e==="hit"&&(n.have=0);break;case"boost":e==="boost"&&n.have++;break;case"horn":e==="horn"&&n.have++;break;case"pass":e==="pass"&&n.have++;break;case"goto":e==="pos"&&(Math.hypot(t[0]-n.target[0],t[1]-n.target[1])<22||Math.hypot(t[0]-n.poi[0],t[1]-n.poi[1])<45)&&(n.have=1);break;case"deliver":if(e==="pos"){let s=n.phase===0?n.target:n.target2;if(Math.hypot(t[0]-s[0],t[1]-s[1])<22){if(n.phase===0)return n.phase=1,n.have=1,"pickup";n.have=2}}break}return n.have>=n.need?(n.done=!0,"done"):!1}target(){let e=this.cur;return!e||e.done?null:e.kind==="goto"?e.target:e.kind==="deliver"?e.phase===0?e.target:e.target2:null}label(){let e=this.cur;if(!e)return{icon:"",text:"",prog:""};let t=e.kind==="deliver"&&e.phase===1?e.text2:e.text,n="";return e.unit==="km"?n=`${(Math.min(e.have,e.need)/1e3).toFixed(1)} / ${(e.need/1e3).toFixed(0)} km`:e.unit==="m"?n=`${Math.min(e.have,e.need).toFixed(0)} / ${e.need} m`:e.unit==="kmh"?n=`${Math.round(e.have)} / ${e.need}`:e.kind==="goto"||e.kind==="deliver"?n="":n=`${e.have} / ${e.need}`,{icon:e.icon,text:t,prog:n}}};var ci=4,Bs=64,qt=13.5,Ui=[-4.3,0,4.3],zr=qt/2+3.3,st=(i,e)=>i+Math.random()*(e-i);var li=new an,hi=new P,ui=new P(1,1,1),fi=new We,zn=new fn;function os(i,e,t,n,s,r,o){hi.set(t,n,s),zn.set(0,r,0),li.setFromEuler(zn),ui.set(o,o,o),fi.compose(hi,li,ui),i.setMatrixAt(e,fi)}function Zp(i,e){let t=new ot(i.trunk.geometry,i.trunk.material,e.length),n=new ot(i.cards.geometry,i.cards.material,e.length*i.cards.n),s=0;return e.forEach((r,o)=>{let{x:a,z:c,scale:l}=r;hi.set(a,0,c),zn.set(0,r.rot||0,0),li.setFromEuler(zn),ui.set(l,i.trunk.h*l,l),fi.compose(hi,li,ui),t.setMatrixAt(o,fi);let h=i.cards;for(let u=0;u<h.n;u++){let f=st(0,6.28),d=st(-1,1),x=Math.sqrt(1-d*d)*st(.35,1),_=h.yc+d*h.ry,p=h.rx;if(h.cone){let v=(u+.5)/h.n;_=h.yc-h.ry+v*h.ry*2,p=h.rx*(1.15-v)}hi.set(a+Math.cos(f)*x*p*l,_*l,c+Math.sin(f)*x*p*l),h.flat?zn.set(Math.PI/2-st(.15,.45),st(0,6.28),0,"YXZ"):zn.set(st(-h.tilt,h.tilt),st(0,6.28),st(-.3,.3),"YXZ"),li.setFromEuler(zn);let m=l*st(.8,1.15);ui.set(m,m,m),fi.compose(hi,li,ui),n.setMatrixAt(s++,fi)}}),t.castShadow=!0,n.castShadow=!0,t.frustumCulled=!1,n.frustumCulled=!1,[t,n]}var _c=class{constructor(e,t){this.scene=e,this.style=t,this.group=new pt,e.add(this.group),this.samples=[],this.chunks=new Map,this.gen={x:0,z:0,h:0,s:0,k:0,kTarget:0,left:0,rampLen:40},this.piece=null,this.piece={type:"straight",left:200},this.extend(1500)}nextPiece(){if(Math.random()<.35)return{type:"straight",left:st(80,260)};let t=st(140,480),n=st(12,65)*Math.PI/180;return{type:"curve",k:(Math.random()<.5?-1:1)/t,left:t*n,ramp:40}}extend(e){let t=this.gen;for(;t.s<e;){(!this.piece||this.piece.left<=0)&&(this.piece=this.nextPiece());let n=this.piece,s=n.type==="curve"?n.k:0;t.k+=(s-t.k)*Math.min(1,ci/35),t.h+=t.k*ci,t.x+=-Math.sin(t.h)*ci,t.z+=-Math.cos(t.h)*ci,t.s+=ci,n.left-=ci,this.samples.push({x:t.x,z:t.z,h:t.h,s:t.s,k:t.k})}}pointAt(e){let t=e/ci,n=Math.floor(t),s=t-n;n<0&&(n=0),n>=this.samples.length-1&&(n=this.samples.length-2);let r=this.samples[n],o=this.samples[n+1],a=o.h-r.h;a>Math.PI&&(a-=Math.PI*2),a<-Math.PI&&(a+=Math.PI*2);let c=r.h+a*s;return{x:r.x+(o.x-r.x)*s,z:r.z+(o.z-r.z)*s,h:c,rx:Math.cos(c),rz:-Math.sin(c),fx:-Math.sin(c),fz:-Math.cos(c)}}nearest(e,t,n){let s=this.samples.length,r=-1,o=1/0,a=Math.max(0,n-40),c=Math.min(s-1,n+40);for(let p=a;p<=c;p++){let m=this.samples[p],v=(m.x-e)**2+(m.z-t)**2;v<o&&(o=v,r=p)}let l=this.samples[r],h=Math.cos(l.h),u=-Math.sin(l.h),f=-Math.sin(l.h),d=-Math.cos(l.h),x=e-l.x,_=t-l.z;return{i:r,d:x*h+_*u,along:x*f+_*d,s:l.s+(x*f+_*d),h:l.h,fx:f,fz:d,rx:h,rz:u,k:l.k}}ensure(e){let t=Math.max(0,Math.floor((e-70)/Bs)),n=Math.floor((e+330)/Bs);this.extend((n+2)*Bs*ci);for(let[s,r]of this.chunks)(s<t||s>n+1)&&(this.disposeChunk(r),this.chunks.delete(s));for(let s=t;s<=n;s++)this.chunks.has(s)||this.chunks.set(s,this.buildChunk(s))}disposeChunk(e){this.group.remove(e.group),xc("c"+e.ci),e.group.traverse(t=>{if(t.isInstancedMesh){t.dispose();return}t.isMesh&&!t.userData.shared&&t.geometry.dispose()})}obstaclesNear(e){let t=[],n=Math.floor((e-20)/Bs),s=Math.floor((e+20)/Bs);for(let r=n;r<=s;r++){let o=this.chunks.get(r);if(o)for(let a of o.obstacles)t.push(a)}return t}ribbon(e,t,n,s,r,o,a=!1){let c=t-e+1,l=new Float32Array(c*2*3),h=new Float32Array(c*2*2),u=[];for(let d=0;d<c;d++){let x=this.samples[e+d],_=Math.cos(x.h),p=-Math.sin(x.h);l.set([x.x+_*n,r,x.z+p*n,x.x+_*s,r,x.z+p*s],d*6);let m=x.s*o;if(h.set([0,m,1,m],d*4),d<c-1){let v=d*2;s>n?u.push(v,v+1,v+2,v+1,v+3,v+2):u.push(v,v+2,v+1,v+1,v+2,v+3)}}let f=new tt;return f.setAttribute("position",new He(l,3)),f.setAttribute("uv",new He(h,2)),f.setIndex(u),f.computeVertexNormals(),f}shortRibbon(e,t,n,s,r){let a=new Float32Array(12),c=new Float32Array(8);[e,t].forEach((h,u)=>{let f=this.pointAt(h);a.set([f.x+f.rx*n,r,f.z+f.rz*n,f.x+f.rx*s,r,f.z+f.rz*s],u*6),c.set([0,u,1,u],u*4)});let l=new tt;return l.setAttribute("position",new He(a,3)),l.setAttribute("uv",new He(c,2)),l.setIndex(s>n?[0,1,2,1,3,2]:[0,2,1,1,2,3]),l.computeVertexNormals(),l}buildChunk(e){let t=this.style,n=t.mats,s=e*Bs,r=Math.min(this.samples.length-1,(e+1)*Bs),o=new pt,a=[],c=this.samples[s].s,l=this.samples[r].s,h=new de(this.ribbon(s,r,-qt/2,qt/2,.05,1/7),n.road);h.receiveShadow=!0,o.add(h);for(let f of[-1,1]){let d=new de(this.ribbon(s,r,f*qt/2,f*(qt/2+3.2),.035,.14285714285714285),n.shoulder);d.receiveShadow=!0,o.add(d),o.add(new de(this.ribbon(s,r,f*(qt/2-.45),f*(qt/2-.27),.07,1),n.line))}let u=[];for(let f=Math.ceil(c/9)*9;f<l;f+=9)for(let d of[-2.15,2.15])u.push(this.shortRibbon(f,f+3.2,d-.08,d+.08,.07));if(u.length){let f=NM(u);o.add(new de(f,n.line))}if(t.guardrail){let f=(r-s+1)*2,d=new ot(n.railGeo,n.rail,f),x=new ot(n.postGeo,n.rail,f),_=0;for(let p=s;p<=r;p++)for(let m of[-1,1]){let v=this.samples[p],M=Math.cos(v.h),g=-Math.sin(v.h);os(d,_,v.x+M*m*zr,.7,v.z+g*m*zr,v.h,1),os(x,_,v.x+M*m*(zr+.05),.38,v.z+g*m*(zr+.05),v.h,1),_++}d.frustumCulled=!1,x.frustumCulled=!1,o.add(d,x)}if(t.poles){let f=Math.floor((l-c)/10)*2,d=new ot(n.poleGeo,n.pole,f),x=0;for(let _=c;_<l-1&&x<f;_+=10)for(let p of[-1,1]){let m=this.pointAt(_);os(d,x++,m.x+m.rx*p*(qt/2+.9),.7,m.z+m.rz*p*(qt/2+.9),m.h,1)}d.count=x,o.add(d)}for(let f of t.scatter){if(f.tree){let _=f.tree,p=f.perChunk,m=new ot(_.trunk.geometry,_.trunk.material,p),v=new ot(_.cards.geometry,_.cards.material,p*_.cards.n),M=0;for(let g=0;g<p;g++){let w=st(c,l),S=(Math.random()<.5?-1:1)*st(f.lat[0],f.lat[1]),A=this.pointAt(w),b=st(f.scale[0],f.scale[1]),y=A.x+A.rx*S,R=A.z+A.rz*S;hi.set(y,0,R),zn.set(0,st(0,6.28),0),li.setFromEuler(zn),ui.set(b,_.trunk.h*b,b),fi.compose(hi,li,ui),m.setMatrixAt(g,fi);let D=_.cards;for(let U=0;U<D.n;U++){let N=st(0,6.28),V=st(-1,1),B=Math.sqrt(1-V*V)*st(.35,1),Z=D.yc+V*D.ry,O=D.rx;if(D.cone){let ve=(U+.5)/D.n;Z=D.yc-D.ry+ve*D.ry*2,O=D.rx*(1.15-ve)}let W=y+Math.cos(N)*B*O*b,J=R+Math.sin(N)*B*O*b;hi.set(W,Z*b,J),D.flat?zn.set(Math.PI/2-st(.15,.45),st(0,6.28),0,"YXZ"):zn.set(st(-D.tilt,D.tilt),st(0,6.28),st(-.3,.3),"YXZ"),li.setFromEuler(zn);let ie=b*st(.8,1.15);ui.set(ie,ie,ie),fi.compose(hi,li,ui),v.setMatrixAt(M++,fi)}Math.abs(S)<45&&a.push({type:"circle",x:y,z:R,r:_.obstacle*b})}m.castShadow=!0,v.castShadow=!0,m.frustumCulled=!1,v.frustumCulled=!1,o.add(m,v);continue}if(f.grass){let _=f.perChunk,p=new ot(f.grass.geometry,f.grass.material,_);for(let m=0;m<_;m++){let v=st(c,l),g=(Math.random()<.5?-1:1)*st(f.lat[0],f.lat[1]),w=this.pointAt(v),E=st(f.scale[0],f.scale[1]);os(p,m,w.x+w.rx*g,0,w.z+w.rz*g,st(0,6.28),E)}p.frustumCulled=!1,o.add(p);continue}let d=f.perChunk,x=f.parts.map(_=>new ot(_.geometry,_.material,d));for(let _=0;_<d;_++){let p=st(c,l),v=(Math.random()<.5?-1:1)*st(f.lat[0],f.lat[1]),M=this.pointAt(p),g=st(f.scale[0],f.scale[1]),w=f.billboard?(Math.random()<.5?0:.5)+M.h:st(0,6.28),E=M.x+M.rx*v,S=M.z+M.rz*v;x.forEach((A,b)=>{let y=f.parts[b];os(A,_,E,(y.y||0)*g,S,w+(y.rotY||0),g*(y.scale||1))}),f.obstacle&&Math.abs(v)<45&&a.push({type:"circle",x:E,z:S,r:f.obstacle*g})}x.forEach((_,p)=>{_.frustumCulled=!1,_.castShadow=!!f.parts[p].shadow,o.add(_)})}if(e>0)for(let f=0;f<3;f++){let d=st(c+12,l-30),x=Ui[Math.floor(st(0,3))];for(let _=0;_<5;_++){let p=this.pointAt(d+_*5);Br(p.x+p.rx*x,p.z+p.rz*x,"c"+e)}}{let f=st(c+20,l-20),d=e%2===0?-1:1,x=this.pointAt(f),_=new pt,p=n.billboards[e%n.billboards.length],m=new de(n.bbPanelGeo,[n.rail,n.rail,n.rail,n.rail,p,n.rail]);m.position.set(0,7.5,0),m.userData.shared=!0,_.add(m);for(let g of[-3.5,3.5]){let w=new de(n.bbPostGeo,n.rail);w.position.set(g,2.25,0),w.userData.shared=!0,_.add(w)}_.position.set(x.x+x.rx*d*19,0,x.z+x.rz*d*19),_.rotation.y=x.h-d*.55,o.add(_);let v=Math.cos(_.rotation.y),M=Math.sin(_.rotation.y);for(let g of[-3.5,3.5])a.push({type:"circle",x:_.position.x+g*v,z:_.position.z-g*M,r:.3});if(e%3===1){let g=(c+l)/2,w=this.pointAt(g),E=new pt;for(let b of[-1,1]){let y=new de(n.gantryPostGeo,n.rail);y.position.set(b*(qt/2+1.2),3.75,0),y.userData.shared=!0,E.add(y),a.push({type:"circle",x:w.x+w.rx*b*(qt/2+1.2),z:w.z+w.rz*b*(qt/2+1.2),r:.4})}let S=new de(n.gantryBeamGeo,n.rail);S.position.set(0,7.5,0),S.userData.shared=!0,E.add(S);let A=new de(n.gantrySignGeo,[n.rail,n.rail,n.rail,n.rail,n.sign,n.rail]);A.position.set(0,6,.2),A.userData.shared=!0,E.add(A),E.position.set(w.x,0,w.z),E.rotation.y=w.h,o.add(E)}}if(t.buildings){let f=c+st(0,10),d=0;for(;f<l-8;){for(let M of[-1,1]){let g=(Math.floor(f/37)+M)%6===0,w=t.makeBuilding(g),E=this.pointAt(f+w.d/2),S=M*(qt/2+4.5+w.w/2+w.gap);w.group.position.set(E.x+E.rx*S,0,E.z+E.rz*S),w.group.rotation.y=E.h+(g?M===-1?-Math.PI/2:Math.PI/2:0),o.add(w.group);let A=g?w.d/2:w.w/2,b=g?w.w/2:w.d/2;a.push({type:"box",x:w.group.position.x,z:w.group.position.z,hw:A,hl:b,h:w.group.rotation.y}),d++}f+=st(14,24)}let x=Math.floor((l-c)/26)*2,_=new ot(n.lampGeo,n.lamp,x),p=new ot(n.lampGlowGeo,n.lampGlow,x),m=new ot(n.poolGeo,n.pool,x),v=0;for(let M=c+5;M<l-5&&v<x;M+=26)for(let g of[-1,1]){let w=this.pointAt(M),E=w.x+w.rx*g*(qt/2+1),S=w.z+w.rz*g*(qt/2+1);os(_,v,E,0,S,w.h+(g===1?Math.PI:0),1),os(p,v,E,0,S,w.h+(g===1?Math.PI:0),1),os(m,v,E,0,S,w.h+(g===1?Math.PI:0),1),v++,a.push({type:"circle",x:E,z:S,r:.2})}_.count=v,p.count=v,m.count=v,m.renderOrder=2,o.add(_,p,m)}return this.group.add(o),{ci:e,i0:s,i1:r,group:o,obstacles:a}}dispose(){for(let e of this.chunks.values())this.disposeChunk(e);this.chunks.clear(),this.scene.remove(this.group)}};function NM(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e*3),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),s.set(h.attributes.uv.array,a*2),r.set(h.attributes.normal.array,a*3);let u=h.index.array;for(let f=0;f<u.length;f++)o[c+f]=u[f]+a;a+=h.attributes.position.count,c+=u.length,h.dispose()}let l=new tt;return l.setAttribute("position",new He(n,3)),l.setAttribute("uv",new He(s,2)),l.setAttribute("normal",new He(r,3)),l.setIndex(new He(o,1)),l}var et=400,$p=(i,e)=>i+Math.random()*(e-i),FM=(i,e,t)=>Math.max(e,Math.min(t,i)),Mt=new an,_t=new P,bt=new P(1,1,1),dt=new We,Et=new fn;function nt(i,e,t=0){let n=i*374761393+e*668265263+t*2147483647|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}var Jp={motorway:.09,trunk:.09,primary:.085,secondary:.08,tertiary:.075,residential:.07,unclassified:.07,living_street:.065,service:.06,track:.055},jp={motorway:30,trunk:26,primary:20,secondary:17,tertiary:15,residential:11,unclassified:12,living_street:7,service:7,track:6},wc=class{constructor(e,t,n){this.scene=e,this.style=t,this.data=n,this.M=t.mats,this.group=new pt,e.add(this.group),this.nodes=n.nodes,this.roads=n.roads,this.suburbs=n.suburbs||[],this.signs=n.signs||[],this.tlHeads=[],this.hasRails=!1,this.isMap=!0,this.tiles=new Map,this.roadMeshes=new Map,this.areaMeshes=new Map,this.signCache=new Map,this.signMats=[],this.buildIndex(),this.makeMaterials()}buildIndex(){let e=this.nodes;this.cell=60,this.hash=new Map,this.nodeRoads=new Map,this.roadTiles=new Map,this.tileRoads=new Map,this.tileBuildings=new Map,this.tileAreas=new Map,this.tileTrees=new Map,this.tilePois=new Map;let t=(s,r)=>s*100003+r;this.roads.forEach((s,r)=>{s.len=0,s.seg=[];for(let u=0;u<s.n.length-1;u++){let f=e[s.n[u]],d=e[s.n[u+1]],x=Math.hypot(d[0]-f[0],d[1]-f[1]);s.seg.push(x),s.len+=x;let _=Math.min(f[0],d[0]),p=Math.max(f[0],d[0]),m=Math.min(f[1],d[1]),v=Math.max(f[1],d[1]);for(let M=Math.floor(_/this.cell);M<=Math.floor(p/this.cell);M++)for(let g=Math.floor(m/this.cell);g<=Math.floor(v/this.cell);g++){let w=t(M,g),E=this.hash.get(w);E||(E=[],this.hash.set(w,E)),E.push(r*4096+u)}}s.n.forEach((u,f)=>{let d=this.nodeRoads.get(u);d||(d=[],this.nodeRoads.set(u,d)),d.push([r,f])});let o=1/0,a=-1/0,c=1/0,l=-1/0;for(let u of s.n){let f=e[u];o=Math.min(o,f[0]),a=Math.max(a,f[0]),c=Math.min(c,f[1]),l=Math.max(l,f[1])}let h=[];for(let u=Math.floor(o/et);u<=Math.floor(a/et);u++)for(let f=Math.floor(c/et);f<=Math.floor(l/et);f++){let d=t(u,f);h.push(d);let x=this.tileRoads.get(d);x||(x=[],this.tileRoads.set(d,x)),x.push(r)}this.roadTiles.set(r,h)});let n=(s,r,o,a)=>{let c=t(Math.floor(r/et),Math.floor(o/et)),l=s.get(c);l||(l=[],s.set(c,l)),l.push(a)};this.data.buildings.forEach((s,r)=>{let o=yc(s.p);s.c=o,n(this.tileBuildings,o[0],o[1],r)}),this.data.areas.forEach((s,r)=>{let o=1/0,a=-1/0,c=1/0,l=-1/0;for(let h of s.p)o=Math.min(o,h[0]),a=Math.max(a,h[0]),c=Math.min(c,h[1]),l=Math.max(l,h[1]);if(!((a-o)*(l-c)>4e6))for(let h=Math.floor(o/et);h<=Math.floor(a/et);h++)for(let u=Math.floor(c/et);u<=Math.floor(l/et);u++){let f=t(h,u),d=this.tileAreas.get(f);d||(d=[],this.tileAreas.set(f,d)),d.push(r)}}),this.data.trees.forEach(s=>n(this.tileTrees,s[0],s[1],s));for(let s of this.data.treeRows)for(let r=0;r<s.length-1;r++){let o=s[r],a=s[r+1],c=Math.hypot(a[0]-o[0],a[1]-o[1]);for(let l=0;l<c;l+=9){let h=l/c;n(this.tileTrees,o[0]+(a[0]-o[0])*h,o[1]+(a[1]-o[1])*h,[o[0]+(a[0]-o[0])*h,o[1]+(a[1]-o[1])*h])}}this.data.pois.forEach(s=>n(this.tilePois,s.c[0],s.c[1],s)),this.tileSigns=new Map,this.signs.forEach(s=>n(this.tileSigns,s[0],s[1],s)),this.tileGB=new Map,this.gb=this.data.gb&&this.data.gb.b||[],this.gb.forEach((s,r)=>{s.c=yc(s.p),n(this.tileGB,s.c[0],s.c[1],r)}),this.key=t}nearest(e,t,n){let s=this.nodes,r=null,o=1/0,a=n&&n.skipMinor,c=n&&n.exclude,l=Math.floor(e/this.cell),h=Math.floor(t/this.cell);for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++){let x=this.hash.get(this.key(l+f,h+d));if(x)for(let _ of x){let p=Math.floor(_/4096),m=_%4096,v=this.roads[p];if(a&&(v.t==="service"||v.t==="track")||c===p)continue;let M=s[v.n[m]],g=s[v.n[m+1]],w=g[0]-M[0],E=g[1]-M[1],S=w*w+E*E||1,A=((e-M[0])*w+(t-M[1])*E)/S;A=FM(A,0,1);let b=M[0]+w*A,y=M[1]+E*A,R=Math.hypot(e-b,t-y),D=R-v.w/2;D<o&&(o=D,r={d:R,w:v.w,r:p,i:m,t:A,ex:w,ez:E,px:b,pz:y})}}if(!r)return{d:1e9,w:0,onRoad:!1,h:0,name:"",type:""};let u=this.roads[r.r];return r.h=Math.atan2(-r.ex,-r.ez),r.onRoad=r.d<=u.w/2+.9,r.name=u.name,r.type=u.t,r}stopMaterial(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.fillStyle="#c8102e",t.beginPath();for(let s=0;s<8;s++){let r=Math.PI/8+s*Math.PI/4;t.lineTo(64+Math.cos(r)*62,64+Math.sin(r)*62)}t.closePath(),t.fill(),t.strokeStyle="#fff",t.lineWidth=5,t.stroke(),t.fillStyle="#fff",t.font="900 40px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("STOP",64,66);let n=new ri(e);return n.colorSpace=St,new At({map:n,transparent:!0,alphaTest:.5,side:Ot,roughness:.5})}streetSignMaterial(e){let t="st:"+e;if(this.signCache.has(t))return this.signCache.get(t);let n=document.createElement("canvas");n.width=512,n.height=96;let s=n.getContext("2d");s.fillStyle="#1f6b3a",s.fillRect(0,0,512,96),s.strokeStyle="#fff",s.lineWidth=4,s.strokeRect(6,6,500,84),s.fillStyle="#fff",s.textAlign="center",s.textBaseline="middle";let r=44;for(s.font=`800 ${r}px Arial`;s.measureText(e.toUpperCase()).width>470&&r>20;)r-=3,s.font=`800 ${r}px Arial`;s.fillText(e.toUpperCase(),256,50);let o=new ri(n);o.colorSpace=St;let a=new At({map:o,roughness:.5,side:Ot});return this.signCache.set(t,a),a}suburbAt(e,t){for(let n of this.suburbs)if(Mc(e,t,n.p))return n.name;return""}buildFurniture(e,t,n,s,r){let o=this.nodes,a=e*et,c=t*et,l=[],h=[],u=[],f=[],d=[],x=[],_=[];for(let v of this.tileSigns.get(n)||[]){let[M,g,w]=v,E=this.nearest(M,g);if(E.d>1e8)continue;let S=E.h,A=-Math.sin(S),b=-Math.cos(S),y=Math.cos(S),R=-Math.sin(S),D=E.w;if(w==="tl"){let U=[];for(let V=-1;V<=1;V++)for(let B=-1;B<=1;B++){let Z=this.hash.get(this.key(Math.floor(M/this.cell)+V,Math.floor(g/this.cell)+B));if(Z)for(let O of Z){let W=Math.floor(O/4096),J=O%4096,ie=this.roads[W];if(!(ie.t==="service"||ie.t==="track"))for(let[ve,Ue]of[[ie.n[J],ie.n[J+1]],[ie.n[J+1],ie.n[J]]]){let q=o[ve],ne=o[Ue];if(Math.hypot(q[0]-M,q[1]-g)>1.5)continue;let we=ne[0]-q[0],ue=ne[1]-q[1],Ie=Math.hypot(we,ue)||1;U.push({ux:we/Ie,uz:ue/Ie,w:ie.w})}}}let N=[];for(let V of U){if(N.some(J=>J.ux*V.ux+J.uz*V.uz>.9))continue;N.push(V);let B=M+V.ux*(V.w/2+3)-V.uz*(V.w/2+1.2),Z=g+V.uz*(V.w/2+3)+V.ux*(V.w/2+1.2),O=Math.atan2(-V.ux,-V.uz),W=Math.abs(Math.atan2(V.uz,V.ux))%Math.PI<Math.PI/4||Math.abs(Math.atan2(V.uz,V.ux))%Math.PI>3*Math.PI/4?0:1;l.push({x:B,z:Z,h:4.2}),h.push({x:B,z:Z,yaw:O,axis:W,node:M*7+g*13}),r.push({type:"circle",x:B,z:Z,r:.15})}}else if(w==="stop"){let U=M-y*(D/2+.9),N=g-R*(D/2+.9);l.push({x:U,z:N,h:2.4}),f.push({x:U,z:N,yaw:S}),r.push({type:"circle",x:U,z:N,r:.12})}else if(w==="hump")d.push({x:E.px,z:E.pz,yaw:S,w:D});else if(w==="xing")for(let U=-2;U<=2;U++){let N=U*(D/6);x.push({x:E.px+y*N,z:E.pz+R*N,yaw:S,len:D/6*.55})}}let p=new Set,m=0;for(let v of this.tileRoads.get(n)||[]){let M=this.roads[v];if(!(!M.name||m>28))for(let g of M.n){if(p.has(g))continue;let w=o[g];if(w[0]<a||w[0]>=a+et||w[1]<c||w[1]>=c+et)continue;let E=(this.nodeRoads.get(g)||[]).map(([ie])=>this.roads[ie]).filter(ie=>ie.name&&ie.name!==M.name&&!/service|track/.test(ie.t));if(!E.length)continue;p.add(g);let S=E[0],A=o[M.n[Math.max(0,M.n.indexOf(g)-1)]],b=o[M.n[Math.min(M.n.length-1,M.n.indexOf(g)+1)]],y=b[0]-A[0],R=b[1]-A[1],D=Math.hypot(y,R)||1;y/=D,R/=D;let U=S.n.indexOf(g),N=o[S.n[Math.max(0,U-1)]],V=o[S.n[Math.min(S.n.length-1,U+1)]],B=V[0]-N[0],Z=V[1]-N[1],O=Math.hypot(B,Z)||1;B/=O,Z/=O;let W=w[0]+-R*(S.w/2+1.6)+-Z*(M.w/2+1.6),J=w[1]+y*(S.w/2+1.6)+B*(M.w/2+1.6);this.nearest(W,J).d<3.5||(l.push({x:W,z:J,h:2.6}),_.push({x:W,z:J,yaw:Math.atan2(-R,y),name:M.name,y:2.45}),_.push({x:W,z:J,yaw:Math.atan2(-Z,B),name:S.name,y:2.15}),r.push({type:"circle",x:W,z:J,r:.1}),m++)}}if(l.length){let v=new ot(this.poleGeo,this.mat.pole,l.length);l.forEach((M,g)=>{_t.set(M.x,0,M.z),Et.set(0,0,0),Mt.setFromEuler(Et),bt.set(1,M.h,1),dt.compose(_t,Mt,bt),v.setMatrixAt(g,dt)}),v.castShadow=!0,v.userData.shared=!0,s.add(v)}if(h.length){let v=new ot(this.tlHeadGeo,this.mat.tlHead,h.length),M=new ot(this.tlBulbGeo,this.mat.bulb,h.length*3);h.forEach((g,w)=>{_t.set(g.x,3.6,g.z),Et.set(0,g.yaw,0),Mt.setFromEuler(Et),bt.set(1,1,1),dt.compose(_t,Mt,bt),v.setMatrixAt(w,dt);let E=-Math.sin(g.yaw),S=-Math.cos(g.yaw);[.36,0,-.36].forEach((A,b)=>{_t.set(g.x+E*.16,3.6+A,g.z+S*.16),dt.compose(_t,Mt,bt),M.setMatrixAt(w*3+b,dt),M.setColorAt(w*3+b,new Ee(2236962))})}),v.userData.shared=!0,M.userData.shared=!0,s.add(v,M),this.tlHeads.push({tile:n,mesh:M,heads:h})}if(f.length){let v=new sn(.75,.75),M=new ot(v,this.mat.stop,f.length);f.forEach((g,w)=>{_t.set(g.x,2.1,g.z),Et.set(0,g.yaw,0),Mt.setFromEuler(Et),bt.set(1,1,1),dt.compose(_t,Mt,bt),M.setMatrixAt(w,dt)}),s.add(M)}if(d.length){let v=new ot(this.humpGeo,this.mat.hump,d.length);d.forEach((M,g)=>{_t.set(M.x,.02,M.z),Et.set(0,M.yaw,0),Mt.setFromEuler(Et),bt.set(M.w-.6,.24,.9),dt.compose(_t,Mt,bt),v.setMatrixAt(g,dt)}),v.userData.shared=!0,s.add(v),this.humpList=this.humpList||[]}if(x.length){let v=new sn(1,1);v.rotateX(-Math.PI/2);let M=new ot(v,this.mat.stripe,x.length);x.forEach((g,w)=>{_t.set(g.x,.1,g.z),Et.set(0,g.yaw,0),Mt.setFromEuler(Et),bt.set(g.len,1,2.2),dt.compose(_t,Mt,bt),M.setMatrixAt(w,dt)}),M.userData.shared=!0,s.add(M)}for(let v of _){let M=new de(new sn(1.3,.25),this.streetSignMaterial(v.name));M.position.set(v.x,v.y,v.z),M.rotation.y=v.yaw,s.add(M)}return{humps:d}}tickLights(e,t,n){let s=e%24,r=new Ee;for(let o of this.tlHeads){if(!o.mesh.parent)continue;let a=o.heads[0];Math.abs(a.x-t)>300||Math.abs(a.z-n)>300||(o.heads.forEach((c,l)=>{let h=(s+c.node%7)%24,u=c.axis===0?h:(h+12)%24,f=u<8?"g":u<10?"a":"r";o.mesh.setColorAt(l*3,r.setHex(f==="r"?16719904:3344392)),o.mesh.setColorAt(l*3+1,r.setHex(f==="a"?16756768:3350536)),o.mesh.setColorAt(l*3+2,r.setHex(f==="g"?2162528:537368))}),o.mesh.instanceColor.needsUpdate=!0)}}makeMaterials(){let e=this.style,t=this.M,n=a=>new At(a);this.mat={road:t.road,roadDirt:n({map:e.tex("sand"),color:10127978,roughness:1}),line:t.line,rail:t.rail,house:e.fMatsHouse,wall:e.wallMat,roof:e.roofTileMat,roofFlat:n({color:5922406,roughness:1}),park:n({map:e.tex("grass"),color:9420650,roughness:1}),pitch:n({map:e.tex("grass"),color:7320666,roughness:1}),water:n({color:4161456,roughness:.1,metalness:.3,envMapIntensity:1.5}),farm:n({map:e.tex("sand"),color:12099696,roughness:1}),lot:n({map:e.tex("pavement"),color:11184810,roughness:1}),scrub:n({map:e.tex("grass"),color:10525802,roughness:1}),railbed:n({color:5591114,roughness:1}),railsteel:n({color:9080208,roughness:.4,metalness:.8}),pavement:n({map:e.tex("pavement"),color:12170925,roughness:1}),kerb:n({color:10131600,roughness:.9,side:Ot}),lineYellow:n({color:15254586,roughness:.7}),white:n({color:15921126,roughness:.8}),dome:n({color:4169082,roughness:.35,metalness:.2}),gold:n({color:13677676,roughness:.3,metalness:.7}),navy:n({color:1517628,roughness:.6})};for(let a of[this.mat.park,this.mat.pitch,this.mat.farm,this.mat.lot,this.mat.scrub])a.map=a.map.clone(),a.map.repeat.set(1/8,1/8),a.map.needsUpdate=!0;this.mat.pavement.map=this.mat.pavement.map.clone(),this.mat.pavement.map.repeat.set(1,1),this.mat.pavement.map.needsUpdate=!0,this.houseGeo=new rt(1,1,1),this.houseGeo.translate(0,.5,0);let s=this.houseGeo.attributes.uv;for(let a=0;a<s.count;a++)s.setXY(a,s.getX(a)*2.6,s.getY(a)*1);this.roofGeo=new bo(1,1,4),this.roofGeo.rotateY(Math.PI/4),this.roofGeo.translate(0,.5,0),this.wallGeo=new rt(1,1,1),this.wallGeo.translate(0,.5,0);let r=this.wallGeo.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)*3,r.getY(a)*.5);let o=this.houseGeo.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,o.getX(a),o.getY(a));this.fenceGeo=new sn(1,1),this.fenceGeo.rotateY(Math.PI/2),this.fenceGeo.translate(0,.5,0);{let a=this.fenceGeo.attributes.uv;for(let c=0;c<a.count;c++)a.setXY(c,a.getX(c)*2,a.getY(c))}this.humpGeo=new Ht(.5,.5,1,10),this.humpGeo.rotateZ(Math.PI/2),this.poleGeo=new Ht(.07,.09,1,7),this.poleGeo.translate(0,.5,0),this.tlHeadGeo=new rt(.42,1.15,.3),this.tlBulbGeo=new $n(.13,8,6),this.mat.tlHead=new At({color:1711394,roughness:.6}),this.mat.pole=new At({color:9080208,roughness:.5,metalness:.7}),this.mat.bulb=new At({color:16777215,emissive:16777215,emissiveIntensity:1,roughness:.4}),this.mat.stop=this.stopMaterial(),this.mat.hump=new At({color:6974058,roughness:1}),this.mat.stripe=new At({color:16053492,roughness:.7})}ensure(e,t){let n=Math.floor(e/et),s=Math.floor(t/et),r=2;for(let[a,c]of this.tiles)(Math.abs(c.tx-n)>r+1||Math.abs(c.tz-s)>r+1)&&(this.disposeTile(c),this.tiles.delete(a));let o=0;for(let a=-r;a<=r;a++)for(let c=-r;c<=r;c++){if(o>=1&&(Math.abs(a)>1||Math.abs(c)>1))continue;let l=this.key(n+a,s+c);this.tiles.has(l)||(this.tiles.set(l,this.buildTile(n+a,s+c,l)),o++)}}obstaclesNear(e,t){let n=[],s=Math.floor(e/et),r=Math.floor(t/et);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){let c=this.tiles.get(this.key(s+o,r+a));if(c)for(let l of c.obstacles)Math.abs(l.x-e)<60&&Math.abs(l.z-t)<60&&n.push(l)}return n}disposeTile(e){this.group.remove(e.group),xc("t"+e.tx+"_"+e.tz),this.tlHeads=this.tlHeads.filter(t=>t.tile!==this.key(e.tx,e.tz));for(let t of e.parked||[])Or(t);e.group.traverse(t=>{if(t.isInstancedMesh){t.dispose();return}t.geometry&&!t.userData.shared&&t.geometry.dispose()});for(let t of e.roads){let n=this.roadMeshes.get(t);n&&--n.refs<=0&&(this.group.remove(n.mesh),n.mesh.traverse(s=>{s.geometry&&s.geometry.dispose()}),this.roadMeshes.delete(t))}for(let t of e.areas){let n=this.areaMeshes.get(t);n&&--n.refs<=0&&(this.group.remove(n.mesh),n.mesh.geometry.dispose(),this.areaMeshes.delete(t))}}buildTile(e,t,n){let s=new pt,r=[],o=this.nodes,a=e*et,c=t*et,l=this.tileRoads.get(n)||[];for(let g of l){let w=this.roadMeshes.get(g);w||(w={refs:0,mesh:this.buildRoad(g)},this.roadMeshes.set(g,w),this.group.add(w.mesh)),w.refs++}let h=[];for(let g of l){let w=this.roads[g];for(let E of w.n){let S=o[E];if(S[0]<a||S[0]>=a+et||S[1]<c||S[1]>=c+et)continue;let A=this.nodeRoads.get(E);if(!A||A.length<2)continue;let b=0,y=0;for(let[R]of A)b=Math.max(b,this.roads[R].w),y=Math.max(y,Jp[this.roads[R].t]||.06);h.find(R=>R[0]===E)||h.push([E,S,b,y])}}if(h.length){let g=h.map(([,E,S,A])=>{let b=new Is(S/2,14);b.rotateX(-Math.PI/2),b.translate(E[0],A+.002,E[1]);let y=b.attributes.uv;for(let R=0;R<y.count;R++)y.setXY(R,y.getX(R)*S/7,y.getY(R)*S/7);return b}),w=new de(vc(g),this.mat.road);w.receiveShadow=!0,s.add(w)}for(let g of this.tileAreas.get(n)||[]){let w=this.areaMeshes.get(g);if(!w){let E=this.buildArea(g);if(!E)continue;w={refs:0,mesh:E},this.areaMeshes.set(g,w),this.group.add(E)}w.refs++}let u=[];for(let g of this.tileAreas.get(n)||[]){let w=this.data.areas[g];if(w.k!=="park_lot")continue;let E=yc(w.p);if(E[0]<a||E[0]>=a+et||E[1]<c||E[1]>=c+et)continue;let S=bc(w.p);if(S.hw<8||S.hl<6)continue;let A=S.hw>=S.hl,b=Math.cos(S.h)*(A?1:0)+-Math.sin(S.h)*(A?0:1),y=-Math.sin(S.h)*(A?1:0)+-Math.cos(S.h)*(A?0:1),R=-y,D=b,U=A?S.hw:S.hl,N=A?S.hl:S.hw,V=Math.max(1,Math.min(4,Math.floor(N*2/16))),B=[],Z=0;for(let O=0;O<V;O++){let W=-N+8+O*16-(V>1?0:N-8);for(let J=-U+3;J<U-3;J+=2.6){let ie=S.x+b*J+R*W,ve=S.z+y*J+D*W;if(!(!Mc(ie,ve,w.p)||this.nearest(ie,ve).d<4)){for(let Ue of[-1,1]){let q=new sn(.12,5);q.rotateX(-Math.PI/2),q.rotateY(Math.atan2(R,D)),q.translate(ie+R*Ue*2.6,.03,ve+D*Ue*2.6),B.push(q)}if(Z<6&&nt(ie|0,ve|0,8)<.22){let Ue=nt(ie|0,ve|0,9)<.5?-1:1,q=Vt[Math.floor(nt(ie|0,ve|0,10)*Vt.length)];if(Ns(q.id,!0)){let ne=Fr(q.id,!0,[13832735,1525449,15921906,1381914,10133670,7153881][Math.floor(nt(ie|0,ve|0,11)*6)]);ne.position.set(ie+R*Ue*2.6,0,ve+D*Ue*2.6),ne.rotation.y=Math.atan2(-R*Ue,-D*Ue),ne.traverse(we=>{we.userData.shared=!0}),s.add(ne),u.push(ne),Z++,r.push({type:"box",x:ne.position.x,z:ne.position.z,hw:q.w/2,hl:q.len/2,h:ne.rotation.y})}}}}}if(B.length){let O=new de(vc(B),this.mat.stripe);s.add(O)}}for(let g of this.tilePois.get(n)||[])g.k==="fuel"&&!this.nearBuilding(g.c[0],g.c[1],6)&&this.buildFuel(g,s,r);for(let g of this.tileBuildings.get(n)||[]){let w=this.data.buildings[g],E=this.buildBuilding(w);if(!E)continue;s.add(E);let S=bc(w.p);r.push({type:"box",...S})}let f=[],d=[],x=[],_=[],p=this.tileGB.get(n)||[],m=p.length>0;m&&this.buildGB(p,s,r,f);for(let g of l){let w=this.roads[g];if(!/residential|unclassified|living_street/.test(w.t))continue;let E=21,S=10,A=0;for(let b=0;b<w.n.length-1;b++){let y=o[w.n[b]],R=o[w.n[b+1]],D=w.seg[b],U=(R[0]-y[0])/D,N=(R[1]-y[1])/D,V=-N,B=U;for(;S<D;S+=E){A++;let Z=y[0]+U*S,O=y[1]+N*S;if(!(Z<a||Z>=a+et||O<c||O>=c+et))for(let W of[-1,1]){if(nt(g,A,W+2)<.18)continue;if(m){let ye=Z+V*W*(w.w/2+10),$=O+B*W*(w.w/2+10);if(!this.gbNear(ye,$,14))continue;let re=w.w/2+2.2,oe=Z+V*W*re,I=O+B*W*re,T=(nt(g,A,23)-.5)*8,H=nt(g,A,47)<.45;for(let X of[T-5.5,T+5.5]){let Q=oe+U*X,j=I+N*X,be=!0;for(let ge of[-3.75,0,3.75]){let xe=this.nearest(Q+U*ge,j+N*ge,{exclude:g});if(xe.d<xe.w/2+2.5){be=!1;break}}be&&(f.push({wall:!0,palisade:H,x:Q,z:j,yaw:Math.atan2(-U,-N)+(W===1?Math.PI:0),len:7.5}),r.push({type:"box",x:Q,z:j,hw:.15,hl:3.75,h:Math.atan2(-U,-N)+(W===1?Math.PI:0)}))}if(nt(g,A,29)<.35){let X=Z+V*W*(w.w/2+1.1)+U*6,Q=O+B*W*(w.w/2+1.1)+N*6;this.nearest(X,Q,{exclude:g}).d>3&&((nt(g,A,53)<.5?x:d).push({x:X,z:Q,scale:.6+nt(g,A,31)*.5,rot:nt(g,A,37)*6.28}),r.push({type:"circle",x:X,z:Q,r:.4}))}continue}let ie=w.w/2+8.5+nt(g,A,W+7)*3,ve=Z+V*W*ie,Ue=O+B*W*ie,q=this.nearest(ve,Ue,{exclude:g});if(q.d<q.w/2+7||this.nearest(ve+U*6,Ue+N*6,{exclude:g}).d<6||this.nearest(ve-U*6,Ue-N*6,{exclude:g}).d<6||this.nearBuilding(ve,Ue,14))continue;let ne=Math.atan2(-U,-N)+(W===1?Math.PI:0),we=nt(g,A,41),ue=we<.38?"arch":we<.72?"brick":"modern",Ie=ue!=="arch"?nt(g,A,43)<.75:nt(g,A,43)<.12,Ve=5.5+nt(g,A,11)*1.8,Ne=4.5+nt(g,A,13)*1.4,Xe=(Ie?6.3:3.3)+nt(g,A,17)*.4;f.push({x:ve,z:Ue,yaw:ne,hw:Ve,hd:Ne,hh:Xe,style:ue,flat:ue==="modern"}),r.push({type:"box",x:ve,z:Ue,hw:Ne,hl:Ve,h:ne});let te=w.w/2+2.2,pe=Z+V*W*te,L=O+B*W*te,De=(nt(g,A,23)-.5)*8,he=nt(g,A,47)<.45;for(let ye of[De-5.5,De+5.5]){let $=pe+U*ye,re=L+N*ye,oe=!0;for(let I of[-3.75,0,3.75]){let T=this.nearest($+U*I,re+N*I,{exclude:g});if(T.d<T.w/2+2.5){oe=!1;break}}oe&&(f.push({wall:!0,palisade:he,x:$,z:re,yaw:ne,len:7.5}),r.push({type:"box",x:$,z:re,hw:.15,hl:3.75,h:ne}))}if(nt(g,A,29)<.35){let ye=Z+V*W*(w.w/2+1.1)+U*6,$=O+B*W*(w.w/2+1.1)+N*6;(nt(g,A,53)<.5?x:d).push({x:ye,z:$,scale:.6+nt(g,A,31)*.5,rot:nt(g,A,37)*6.28}),r.push({type:"circle",x:ye,z:$,r:.4})}}}S-=D}}let v=f.filter(g=>g.wall);for(let g of["arch","brick","modern"]){let w=f.filter(R=>!R.wall&&R.style===g);if(!w.length)continue;let E=new ot(this.houseGeo,this.style.lenMats[g],w.length),S=w.filter(R=>!R.flat),A=w.filter(R=>R.flat),b=S.length?new ot(this.roofGeo,this.mat.roof,S.length):null,y=A.length?new ot(this.wallGeo,this.mat.roofFlat,A.length):null;w.forEach((R,D)=>{_t.set(R.x,0,R.z),Et.set(0,R.yaw,0),Mt.setFromEuler(Et),bt.set(R.hd*2,R.hh,R.hw*2),dt.compose(_t,Mt,bt),E.setMatrixAt(D,dt)}),S.forEach((R,D)=>{_t.set(R.x,R.hh,R.z),Et.set(0,R.yaw,0),Mt.setFromEuler(Et),bt.set((R.hd+.6)*2*Math.SQRT1_2,2+R.hd*.12,(R.hw+.6)*2*Math.SQRT1_2),dt.compose(_t,Mt,bt),b.setMatrixAt(D,dt)}),A.forEach((R,D)=>{_t.set(R.x,R.hh,R.z),Et.set(0,R.yaw,0),Mt.setFromEuler(Et),bt.set(R.hd*2+.3,.35,R.hw*2+.3),dt.compose(_t,Mt,bt),y.setMatrixAt(D,dt)}),E.castShadow=!0,E.receiveShadow=!0,E.userData.shared=!0,s.add(E),b&&(b.castShadow=!0,b.userData.shared=!0,s.add(b)),y&&(y.userData.shared=!0,s.add(y))}for(let g of[!1,!0]){let w=v.filter(S=>!!S.palisade===g);if(!w.length)continue;let E=new ot(g?this.fenceGeo:this.wallGeo,g?this.style.palisadeMat:this.mat.wall,w.length);w.forEach((S,A)=>{_t.set(S.x,0,S.z),Et.set(0,S.yaw,0),Mt.setFromEuler(Et),bt.set(g?1:.25,1.8,S.len),dt.compose(_t,Mt,bt),E.setMatrixAt(A,dt)}),E.castShadow=!g,E.userData.shared=!0,s.add(E)}{let g=0,w=[];for(let E of l){let S=this.roads[E];if(!/primary|secondary|tertiary|trunk/.test(S.t)||/link/.test(S.t))continue;let A=12+nt(E,3)*20,b=0;for(let y=0;y<S.n.length-1;y++){let R=o[S.n[y]],D=o[S.n[y+1]],U=S.seg[y],N=(D[0]-R[0])/U,V=(D[1]-R[1])/U,B=-V,Z=N;for(;A<U-4;A+=34){b++;let O=R[0]+N*A,W=R[1]+V*A;if(O<a||O>=a+et||W<c||W>=c+et)continue;let J=b%2?-1:1,ie=J*(S.w/2+1),ve=O+B*ie,Ue=W+Z*ie;if(!(this.nearest(ve,Ue,{exclude:E}).d<4)&&(w.push({x:ve,z:Ue,h:Math.atan2(-N,-V)+(J===1?Math.PI/2:-Math.PI/2)}),g++,r.push({type:"circle",x:ve,z:Ue,r:.2}),b%3===0)){let q=O+B*-J*(S.w/2+1.4),ne=W+Z*-J*(S.w/2+1.4);this.nearest(q,ne,{exclude:E}).d>4&&!this.nearBuilding(q,ne,9)&&((nt(E,b,61)<.5?_:x).push({x:q,z:ne,scale:.9+nt(E,b,63)*.4,rot:nt(E,b,67)*6.28}),r.push({type:"circle",x:q,z:ne,r:.45}))}}A-=U}}if(g){let E=this.M,S=new ot(E.lampGeo,E.lamp,g),A=new ot(E.lampGlowGeo,E.lampGlow,g),b=new ot(E.poolGeo,E.pool,g);w.forEach((y,R)=>{_t.set(y.x,0,y.z),Et.set(0,y.h,0),Mt.setFromEuler(Et),bt.set(1,1,1),dt.compose(_t,Mt,bt),S.setMatrixAt(R,dt),A.setMatrixAt(R,dt),b.setMatrixAt(R,dt)}),S.castShadow=!0,b.renderOrder=2;for(let y of[S,A,b])y.userData.shared=!0,y.frustumCulled=!1,s.add(y)}}let M=this.buildFurniture(e,t,n,s,r);for(let g of this.tileTrees.get(n)||[])d.push({x:g[0],z:g[1],scale:.8+nt(g[0]|0,g[1]|0)*.5,rot:0}),r.push({type:"circle",x:g[0],z:g[1],r:.5});for(let g of this.tileAreas.get(n)||[]){let w=this.data.areas[g];if(w.k!=="park"&&w.k!=="grass")continue;let E=yc(w.p);if(E[0]<a||E[0]>=a+et||E[1]<c||E[1]>=c+et)continue;let S=Qp(w.p),A=Math.min(14,Math.floor((S[2]-S[0])*(S[3]-S[1])/2500));for(let b=0;b<A;b++){let y=S[0]+nt(g,b,1)*(S[2]-S[0]),R=S[1]+nt(g,b,2)*(S[3]-S[1]);Mc(y,R,w.p)&&(this.nearest(y,R).d<8||(d.push({x:y,z:R,scale:.9+nt(g,b,3)*.5,rot:0}),r.push({type:"circle",x:y,z:R,r:.5})))}}if(d.length){let[g,w]=Zp(this.style.treeStyles.oakTree,d);g.userData.shared=!0,w.userData.shared=!0,s.add(g,w)}for(let[g,w]of[[x,this.style.jacaranda],[_,this.style.palm]])if(!(!g.length||!w))for(let E of w){let S=new ot(E.geometry,E.material,g.length);g.forEach((A,b)=>{_t.set(A.x,0,A.z),Et.set(0,A.rot,0),Mt.setFromEuler(Et),bt.set(A.scale,A.scale,A.scale),dt.compose(_t,Mt,bt),S.setMatrixAt(b,dt)}),S.castShadow=!0,S.userData.shared=!0,S.frustumCulled=!1,s.add(S)}{let g=0;for(let w of l){let E=this.roads[w];if(E.t==="service"||E.t==="track"||E.len<60)continue;let S=30+nt(w,1)*40,A=0;for(let b=0;b<E.n.length-1&&g<30;b++){let y=o[E.n[b]],R=o[E.n[b+1]],D=E.seg[b],U=(R[0]-y[0])/D,N=(R[1]-y[1])/D,V=-N,B=U;for(;S+12<D&&g<30;S+=90){A++;let Z=y[0]+U*S,O=y[1]+N*S;if(Z<a||Z>=a+et||O<c||O>=c+et)continue;let J=(nt(w,A,5)<.5?-1:1)*E.w/4;for(let ie=0;ie<3;ie++)Br(Z+U*ie*5+V*J,O+N*ie*5+B*J,"t"+e+"_"+t);g+=3}S-=D}}}if(this.style.showroomAt&&Math.floor(this.style.showroomAt[0]/et)===e&&Math.floor(this.style.showroomAt[1]/et)===t){let g=this.style.makeBuilding(!0),[w,E,S]=this.style.showroomAt;g.group.position.set(w,0,E),g.group.rotation.y=S,s.add(g.group),r.push({type:"box",x:w,z:E,hw:g.w/2,hl:g.d/2,h:S})}return this.group.add(s),{tx:e,tz:t,group:s,obstacles:r,roads:l,areas:this.tileAreas.get(n)||[],humps:M.humps,parked:u}}gbNear(e,t,n){let s=Math.floor(e/et),r=Math.floor(t/et);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)for(let c of this.tileGB.get(this.key(s+o,r+a))||[]){let l=this.gb[c].c;if(Math.hypot(l[0]-e,l[1]-t)<n)return!0}return!1}buildGB(e,t,n,s){let r=this.style.lenMats,o={arch:[],brick:[],modern:[],flats:[]},a=[],c=[];for(let l of e){let h=this.gb[l],u=h.c;if(this.nearBuilding(u[0],u[1],9))continue;let f=this.nearest(u[0],u[1]);if(f.d<f.w/2+2.5)continue;let d=bc(h.p),x=h.a,_=nt(u[0]|0,u[1]|0,3),p,m,v=!1;if(x>450?(p="flats",m=x>1200?8:6.6,v=!0):x<70?(p=_<.6?"arch":"modern",m=3.2,v=_>.6):(p=_<.35?"arch":_<.72?"brick":"modern",m=(x>150?nt(u[0]|0,u[1]|0,4)<.6:nt(u[0]|0,u[1]|0,4)<.25)?6.3:3.4,v=p==="modern"),x>450&&h.p.length>4){let M=new oi(h.p.map(S=>new se(S[0],-S[1]))),g=new Ls(M,{depth:m,bevelEnabled:!1});g.rotateX(-Math.PI/2);let w=g.attributes.uv;for(let S=0;S<w.count;S++)w.setXY(S,w.getX(S)/9,w.getY(S)/(m>7?m/2:m));let E=new de(g,[this.mat.roofFlat,r.flats]);E.castShadow=!0,E.receiveShadow=!0,t.add(E),n.push({type:"box",...d});continue}o[p].push({x:d.x,z:d.z,yaw:d.h,hw:d.hw,hl:d.hl,h:m}),v?c.push({x:d.x,z:d.z,yaw:d.h,hw:d.hw,hl:d.hl,h:m}):a.push({x:d.x,z:d.z,yaw:d.h,hw:d.hw,hl:d.hl,h:m}),n.push({type:"box",...d})}for(let l in o){let h=o[l];if(!h.length)continue;let u=new ot(this.houseGeo,r[l],h.length);h.forEach((f,d)=>{_t.set(f.x,0,f.z),Et.set(0,f.yaw,0),Mt.setFromEuler(Et),bt.set(f.hw*2,f.h,f.hl*2),dt.compose(_t,Mt,bt),u.setMatrixAt(d,dt)}),u.castShadow=!0,u.receiveShadow=!0,u.userData.shared=!0,t.add(u)}if(a.length){let l=new ot(this.roofGeo,this.mat.roof,a.length);a.forEach((h,u)=>{_t.set(h.x,h.h,h.z),Et.set(0,h.yaw,0),Mt.setFromEuler(Et),bt.set((h.hw+.5)*2*Math.SQRT1_2,1.6+Math.min(h.hw,h.hl)*.2,(h.hl+.5)*2*Math.SQRT1_2),dt.compose(_t,Mt,bt),l.setMatrixAt(u,dt)}),l.castShadow=!0,l.userData.shared=!0,t.add(l)}if(c.length){let l=new ot(this.wallGeo,this.mat.roofFlat,c.length);c.forEach((h,u)=>{_t.set(h.x,h.h,h.z),Et.set(0,h.yaw,0),Mt.setFromEuler(Et),bt.set(h.hw*2+.3,.35,h.hl*2+.3),dt.compose(_t,Mt,bt),l.setMatrixAt(u,dt)}),l.userData.shared=!0,t.add(l)}}humpAt(e,t){let n=this.tiles.get(this.key(Math.floor(e/et),Math.floor(t/et)));if(!n||!n.humps)return null;for(let s of n.humps){let r=e-s.x,o=t-s.z;if(r*r+o*o>s.w*s.w)continue;let a=-Math.sin(s.yaw),c=-Math.cos(s.yaw),l=r*a+o*c;if(Math.abs(l)<.6)return s}return null}nearBuilding(e,t,n){let s=Math.floor(e/et),r=Math.floor(t/et);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)for(let c of this.tileBuildings.get(this.key(s+o,r+a))||[]){let l=this.data.buildings[c].c;if(Math.hypot(l[0]-e,l[1]-t)<n)return!0}return!1}buildRoad(e){let t=this.roads[e],n=this.nodes,s=t.n.map(u=>n[u]),r=t.w,o=Jp[t.t]||.06,a=new pt,c=t.t==="track"?this.mat.roadDirt:this.mat.road,l=new de(No(s,-r/2,r/2,o,1/7),c);l.receiveShadow=!0,a.add(l);let h=[s[0],s[s.length-1]].map(u=>{let f=new Is(r/2,12);return f.rotateX(-Math.PI/2),f.translate(u[0],o,u[1]),f});if(a.add(new de(vc(h),c)),/residential|tertiary|secondary|primary|unclassified|living_street/.test(t.t)&&!/link/.test(t.t))for(let u of[-1,1]){let f=new de(No(s,u*(r/2-.05),u*(r/2+1.9),o+.12,.25),this.mat.pavement);f.receiveShadow=!0,a.add(f),a.add(new de(No(s,u*(r/2-.08),u*(r/2-.05),o,1,o+.12),this.mat.kerb))}if(r>=8.4){for(let p of[-1,1])a.add(new de(No(s,p*(r/2-.45),p*(r/2-.3),o+.01,1),this.mat.lineYellow));let u=t.one?Math.max(2,t.lanes||Math.round(r/3.6)):2,f=[],d=[];if(t.one)for(let p=1;p<u;p++)d.push(-r/2+r/u*p);else d.push(0);let x=0,_=t.len;for(let p=0;p<s.length-1;p++){let m=s[p],v=s[p+1],M=t.seg[p],g=(v[0]-m[0])/M,w=(v[1]-m[1])/M,E=-w,S=g;for(let A=(9-x%9)%9;A+3<M;A+=9)for(let b of d){let y=[m[0]+g*A+E*b,m[1]+w*A+S*b],R=[m[0]+g*(A+3)+E*b,m[1]+w*(A+3)+S*b];f.push(No([y,R],-.08,.08,o+.01,1))}x+=M}f.length&&a.add(new de(vc(f),this.mat.line))}return a}buildArea(e){let t=this.data.areas[e];if(t.p.length<3)return null;let n={park:this.mat.park,grass:this.mat.park,pitch:this.mat.pitch,water:this.mat.water,wet:this.mat.water,farm:this.mat.farm,ind:this.mat.lot,com:this.mat.lot,park_lot:this.mat.lot,scrub:this.mat.scrub,school:this.mat.park,quarry:this.mat.farm}[t.k];if(!n)return null;let s=new oi(t.p.map(c=>new se(c[0],-c[1]))),r=new ja(s);r.rotateX(-Math.PI/2);let o={water:.03,wet:.025,park:.02,grass:.02,pitch:.022,farm:.015,scrub:.015,ind:.018,com:.018,park_lot:.019,school:.02,quarry:.015}[t.k]||.02;r.translate(0,o,0);let a=new de(r,n);return a.receiveShadow=!0,a}buildBuilding(e){if(e.p.length<3)return null;let n=this.style.lenMats,s=e.k+" "+(e.am||"")+" "+(e.shop||"")+" "+(e.name||""),r=e.rel==="muslim"||/masjid|mosque|islam|jumma|sufi|musallah/i.test(s)||e.k==="mosque",o=e.rel==="hindu"||/temple|koil|mandir|sai centre|hindu/i.test(s),a=e.rel==="christian"||/church|chapel|catholic|kingdom hall/i.test(s),c=/mall|supermarket|plaza|shopping|centre|center|hyper|spar|pick n pay|checkers|shoprite/i.test(s)&&!/school|clinic|community|civic|sports|recreation|health/i.test(s),l=!c&&/retail|commercial|shop|kfc|mcdonald|hardware|station|store|pharmacy|chemist|butcher|cafe|restaurant|takeaway/i.test(s),h=/school|college|madressa|madrasah|academy/i.test(s),u=/hospital|clinic|police|library|court|civic|municipal|community|hall|post office|bank/i.test(s),f=/apartments|flats|residential;?apartments/i.test(e.k),d=Qp(e.p),x=Math.min(d[2]-d[0],d[3]-d[1]),_=OM(e.p),p=e.lv?e.lv*3.3:e.h;e.lv||(r?p=Math.max(p,7.5):c?p=Math.max(p,_>2500?9:7):h||u?p=Math.max(p,6.6):f?p=Math.max(p,9.6):l?p=Math.max(p,5.5):(e.k==="house"||e.k==="residential"||e.k==="yes")&&(p=Math.max(p,nt(e.c[0]|0,e.c[1]|0,5)<.45&&_>110?6.3:3.5)));let m=new oi(e.p.map(b=>new se(b[0],-b[1]))),v=new Ls(m,{depth:p,bevelEnabled:!1});v.rotateX(-Math.PI/2);{let b=v.attributes.uv,y=v.attributes.position,R=v.groups[1]?v.groups[1].start:0;for(let D=0;D<b.count;D++)b.setXY(D,b.getX(D)/9,b.getY(D)/(p>7?p/2:p))}let M=nt(e.c[0]|0,e.c[1]|0,9),g=M<.4?n.arch:M<.75?n.brick:n.modern,w=r?n.mosque:o||a?this.mat.white:c?n.mall:l?n.shops:h||u||f||p>7.5?n.flats:g,E=new de(v,[this.mat.roofFlat,w]);E.castShadow=!0,E.receiveShadow=!0;let S=new pt;S.add(E);let A=e.c;if(!r&&!o&&!a&&!c&&!l&&!h&&!u&&!f&&p<=7&&e.p.length<=6&&x>5){let b=bc(e.p),y=new de(this.roofGeo,this.mat.roof);y.position.set(b.x,p,b.z),y.rotation.y=b.h,y.scale.set((b.hw+.5)*2*Math.SQRT1_2,1.8+b.hw*.15,(b.hl+.5)*2*Math.SQRT1_2),y.castShadow=!0,y.userData.shared=!0,S.add(y)}if(r){let b=Math.min(7,Math.max(2.5,x*.26)),y=new de(new $n(b,24,14,0,Math.PI*2,0,Math.PI/2),this.mat.dome);y.position.set(A[0],p,A[1]),y.castShadow=!0,S.add(y);let R=new de(new Ht(b,b,1.2,24),this.mat.white);R.position.set(A[0],p+.6,A[1]),S.add(R),y.position.y=p+1.2;let D=new de(new ji(.55,.09,6,18,Math.PI*1.5),this.mat.gold);D.position.set(A[0],p+1.2+b+.8,A[1]),D.rotation.z=Math.PI*.25,S.add(D);let U=new de(new Ht(.06,.06,1,6),this.mat.gold);U.position.set(A[0],p+1.2+b+.4,A[1]),S.add(U);let N=[[d[0]+2.2,d[1]+2.2],[d[2]-2.2,d[1]+2.2],[d[0]+2.2,d[3]-2.2],[d[2]-2.2,d[3]-2.2]].filter(([W,J])=>Mc(W,J,e.p));for(let[W,J]of N){let ie=new de(new $n(1.2,14,8,0,Math.PI*2,0,Math.PI/2),this.mat.dome);ie.position.set(W,p,J),S.add(ie)}let V=p+8+Math.min(10,x*.45),B=x>18?[[d[0]+1.6,d[1]+1.6],[d[2]-1.6,d[1]+1.6]]:[[d[0]+1.6,d[1]+1.6]];for(let[W,J]of B){let ie=new de(new Ht(.85,1.05,V,12),this.mat.white);ie.position.set(W,V/2,J),ie.castShadow=!0,S.add(ie);for(let q of[.55,.8]){let ne=new de(new Ht(1.35,1.1,.5,12),this.mat.dome);ne.position.set(W,V*q,J),S.add(ne)}let ve=new de(new $n(1.2,12,8,0,Math.PI*2,0,Math.PI/2),this.mat.dome);ve.position.set(W,V,J),S.add(ve);let Ue=new de(new Ht(.05,.05,1.2,6),this.mat.gold);Ue.position.set(W,V+1.6,J),S.add(Ue)}let Z=this.nearest(A[0],A[1]),O=this.roadEdge(e,Z);if(O){let W=Math.min(10,O.L*.6),J=new de(new rt(W,Math.min(p,5.5),2.4),[n.mosque,n.mosque,this.mat.roofFlat,this.mat.roofFlat,n.mosque,n.mosque]);J.position.set(O.mx+O.nx*1.3,Math.min(p,5.5)/2,O.mz+O.nz*1.3),J.rotation.y=Math.atan2(O.nx,O.nz),J.castShadow=!0,S.add(J)}}else if(o)for(let b=0;b<3;b++){let y=new de(new Ht(Math.max(.6,2.6-b*.8),Math.max(1,3.4-b*.8),2.2,4),b===2?this.mat.gold:this.mat.white);y.position.set(A[0],p+1.1+b*2.2,A[1]),y.rotation.y=Math.PI/4,y.castShadow=!0,S.add(y)}else if(a){let b=new de(new rt(3.2,p+5,3.2),this.mat.white);b.position.set(d[0]+2,(p+5)/2,d[1]+2),b.castShadow=!0,S.add(b);let y=new de(new bo(2.3,4.5,4),this.mat.roofFlat);y.position.set(d[0]+2,p+7.2,d[1]+2),y.rotation.y=Math.PI/4,S.add(y)}else if(c){let b=this.nearest(A[0],A[1]),y=this.roadEdge(e,b);if(y){let D=new de(new rt(Math.min(16,y.L*.5),.5,5),this.mat.navy);D.position.set(y.mx+y.nx*2.5,4.2,y.mz+y.nz*2.5),D.rotation.y=Math.atan2(y.nx,y.nz),D.castShadow=!0,S.add(D);for(let U of[-1,1]){let N=new de(new Ht(.15,.15,4,8),this.mat.pole),V=y.mx+y.nx*4.6+-y.nz*U*Math.min(7,y.L*.22),B=y.mz+y.nz*4.6+y.nx*U*Math.min(7,y.L*.22);N.position.set(V,2,B),S.add(N)}}let R=new de(new rt(Math.max(4,x*.25),2,Math.max(4,x*.25)),this.mat.roofFlat);R.position.set(A[0],p+1,A[1]),S.add(R)}if(e.name&&!/^(yes|house|residential)$/i.test(e.name)){let b=this.nearest(A[0],A[1]),y=this.roadEdge(e,b);if(y){let R=Math.min(c?22:16,Math.max(6,y.L*.8)),D=R*(c?.14:.16),U=this.nameTexture(e.name,r?"\u{1F54C}":o?"\u{1F6D5}":a?"\u26EA":h?"\u{1F3EB}":c?"\u{1F6CD}\uFE0F":u?"\u{1F3DB}\uFE0F":""),N=new de(new rt(R,D,.25),[this.mat.navy,this.mat.navy,this.mat.navy,this.mat.navy,U,U]);N.position.set(y.mx+y.nx*.3,p+D/2+.4,y.mz+y.nz*.3),N.rotation.y=Math.atan2(y.nx,y.nz),S.add(N)}}return S}roadEdge(e,t){let n=e.c,s=null,r=1/0;for(let u=0;u<e.p.length;u++){let f=e.p[u],d=e.p[(u+1)%e.p.length],x=(f[0]+d[0])/2,_=(f[1]+d[1])/2,p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<4)continue;let m=t.px!=null?Math.hypot(x-t.px,_-t.pz):0;m<r&&(r=m,s={a:f,q:d,mx:x,mz:_,L:p})}if(!s)return null;let o=s.q[0]-s.a[0],c=-(s.q[1]-s.a[1]),l=o,h=Math.hypot(c,l)||1;return c/=h,l/=h,(s.mx-n[0])*c+(s.mz-n[1])*l<0&&(c=-c,l=-l),s.nx=c,s.nz=l,s}nameTexture(e,t){let n=t+e;if(this.signCache.has(n))return this.signCache.get(n);let s=document.createElement("canvas");s.width=1024,s.height=160;let r=s.getContext("2d");r.fillStyle="#17283C",r.fillRect(0,0,1024,160),r.fillStyle="#D0B46C",r.fillRect(0,146,1024,14),r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle";let o=84;r.font=`900 ${o}px Poppins, "Segoe UI", Arial, sans-serif`;let a=(t?t+"  ":"")+e.toUpperCase();for(;r.measureText(a).width>960&&o>34;)o-=4,r.font=`900 ${o}px Poppins, "Segoe UI", Arial, sans-serif`;r.fillText(a,512,78);let c=new ri(s);c.colorSpace=St,c.anisotropy=4;let l=new At({map:c,emissiveMap:c,emissive:16777215,emissiveIntensity:this.style.nightNow?.8:0,roughness:.6});return this.signCache.set(n,l),this.signMats.push(l),l}buildFuel(e,t,n){let s=this.nearest(e.c[0],e.c[1]);if(s.d>1e8)return;let r=s.h,o=new pt;o.position.set(e.c[0],0,e.c[1]),o.rotation.y=r;let a=(u,f)=>[e.c[0]+u*Math.cos(r)+f*Math.sin(r),e.c[1]-u*Math.sin(r)+f*Math.cos(r)],c=new de(new rt(14,.6,9),this.mat.white);c.position.y=4.8,c.castShadow=!0,o.add(c);let l=new de(new rt(14.2,.9,9.2),this.mat.navy);l.position.y=4.1,o.add(l);for(let[u,f]of[[-5,-3],[5,-3],[-5,3],[5,3]]){let d=new de(new Ht(.2,.2,4,8),this.mat.white);d.position.set(u,2,f),o.add(d);let[x,_]=a(u,f);n.push({type:"circle",x,z:_,r:.25})}for(let u of[-2.5,2.5]){let f=new de(new rt(.9,1.7,.5),this.mat.gold);f.position.set(u,.85,0),o.add(f);let[d,x]=a(u,0);n.push({type:"box",x:d,z:x,hw:.5,hl:.3,h:r})}let h=new de(new rt(3,1,.2),[this.mat.navy,this.mat.navy,this.mat.navy,this.mat.navy,this.nameTexture(e.name||"Petrol","\u26FD"),this.mat.navy]);h.position.set(0,5.9,0),o.add(h),t.add(o)}spawnAgent(e,t,n){for(let s=0;s<30;s++){let r=Math.floor(Math.random()*this.roads.length),o=this.roads[r];if(o.t==="service"||o.t==="track"||o.len<40)continue;let a=Math.floor(Math.random()*(o.n.length-1)),c=this.nodes[o.n[a]],l=Math.hypot(c[0]-t,c[1]-n);if(!(l<60||l>350))return e.r=r,e.i=a,e.t=Math.random(),e.dir=o.one||Math.random()<.5?1:-1,e.speed=(jp[o.t]||10)*$p(.8,1),!0}return!1}advanceAgent(e,t){let n=this.roads[e.r],s=this.nodes,r=e.speed*t;for(;r>0;){let p=n.seg[e.i],m=e.t*p,v=e.dir>0?p-m:m;if(r<v){e.t+=e.dir*r/p,r=0;break}r-=v;let M=e.dir>0?e.i+1:e.i,g=n.n[M],w=[];for(let[R,D]of this.nodeRoads.get(g)||[]){let U=this.roads[R];U.t==="service"||U.t==="track"||(D<U.n.length-1&&!(R===e.r&&U.one===0&&D===e.i&&e.dir<0)&&w.push([R,D,1]),D>0&&!U.one&&!(R===e.r&&D-1===e.i&&e.dir>0)&&w.push([R,D-1,-1]))}let E=w.filter(([R])=>R===e.r),S=Math.random()<.7&&E.length?E:w;if(!S.length){e.dir=-e.dir;break}let[A,b,y]=S[Math.floor(Math.random()*S.length)];return e.r=A,e.i=b,e.dir=y,e.t=y>0?0:1,e.speed=(jp[A===e.r?n.t:this.roads[A].t]||10)*$p(.8,1),this.advanceAgent(e,r/e.speed)}let o=this.roads[e.r],a=s[o.n[e.i]],c=s[o.n[e.i+1]],l=(c[0]-a[0])/o.seg[e.i],h=(c[1]-a[1])/o.seg[e.i],u=l*e.dir,f=h*e.dir,d=f,x=-u,_=o.one?o.w/4*(Math.random()<.5?1:-1)*0+o.w/4:o.w/4;e.x=a[0]+l*e.t*o.seg[e.i]+d*_,e.z=a[1]+h*e.t*o.seg[e.i]+x*_,e.h=Math.atan2(-u,-f)}startPose(){let[e,t]=this.style.start,n=null;for(let o=0;o<400&&!(n&&n.d<1e8);o+=40)for(let a=0;a<6.3&&!(n&&n.d<1e8);a+=.8){let c=this.nearest(e+Math.cos(a)*o,t+Math.sin(a)*o,{skipMinor:!0});c.d<1e8&&(n=c)}n||(n=this.nearest(e,t));let s=-Math.cos(n.h)*0+Math.cos(n.h),r=-Math.sin(n.h);return{x:n.px-s*n.w/4,z:n.pz-r*n.w/4,h:n.h}}dispose(){for(let e of this.tiles.values())this.disposeTile(e);this.tiles.clear(),this.scene.remove(this.group)}};function No(i,e,t,n,s,r=n){let o=i.length,a=new Float32Array(o*6),c=new Float32Array(o*4),l=[],h=0;for(let d=0;d<o;d++){let x=i[d],_=i[Math.max(0,d-1)],p=i[Math.min(o-1,d+1)],m=x[0]-_[0],v=x[1]-_[1],M=p[0]-x[0],g=p[1]-x[1],w=Math.hypot(m,v)||1,E=Math.hypot(M,g)||1;m/=w,v/=w,M/=E,g/=E,d===0&&(m=M,v=g),d===o-1&&(M=m,g=v);let S=-(v+g),A=m+M,b=Math.hypot(S,A)||1;S/=b,A/=b;let R=1/Math.max(.5,S*-g+A*M);if(a.set([x[0]+S*e*R,n,x[1]+A*e*R,x[0]+S*t*R,r,x[1]+A*t*R],d*6),d>0&&(h+=Math.hypot(x[0]-_[0],x[1]-_[1])),c.set([0,h*s,1,h*s],d*4),d<o-1){let D=d*2;l.push(D,D+1,D+2,D+1,D+3,D+2)}}let u=new tt;if(u.setAttribute("position",new He(a,3)),u.setAttribute("uv",new He(c,2)),u.setIndex(l),u.computeVertexNormals(),u.attributes.normal.getY(0)<0){let d=u.index.array;for(let x=0;x<d.length;x+=3){let _=d[x+1];d[x+1]=d[x+2],d[x+2]=_}u.computeVertexNormals()}return u}function vc(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e*3),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),h.attributes.uv&&s.set(h.attributes.uv.array,a*2),r.set(h.attributes.normal.array,a*3);let u=h.index.array;for(let f=0;f<u.length;f++)o[c+f]=u[f]+a;a+=h.attributes.position.count,c+=u.length,h.dispose()}let l=new tt;return l.setAttribute("position",new He(n,3)),l.setAttribute("uv",new He(s,2)),l.setAttribute("normal",new He(r,3)),l.setIndex(new He(o,1)),l}function OM(i){let e=0;for(let t=0,n=i.length-1;t<i.length;n=t++)e+=(i[n][0]+i[t][0])*(i[n][1]-i[t][1]);return Math.abs(e/2)}function yc(i){let e=0,t=0;for(let n of i)e+=n[0],t+=n[1];return[e/i.length,t/i.length]}function Qp(i){let e=1/0,t=-1/0,n=1/0,s=-1/0;for(let r of i)e=Math.min(e,r[0]),t=Math.max(t,r[0]),n=Math.min(n,r[1]),s=Math.max(s,r[1]);return[e,n,t,s]}function Mc(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s],a=t[r];o[1]>e!=a[1]>e&&i<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function bc(i){let e=0,t=-1;for(let d=0;d<i.length;d++){let x=i[d],_=i[(d+1)%i.length],p=Math.hypot(_[0]-x[0],_[1]-x[1]);p>t&&(t=p,e=Math.atan2(_[1]-x[1],_[0]-x[0]))}let n=Math.cos(-e),s=Math.sin(-e),r=1/0,o=-1/0,a=1/0,c=-1/0;for(let d of i){let x=d[0]*n-d[1]*s,_=d[0]*s+d[1]*n;r=Math.min(r,x),o=Math.max(o,x),a=Math.min(a,_),c=Math.max(c,_)}let l=(r+o)/2,h=(a+c)/2,u=l*Math.cos(e)-h*Math.sin(e),f=l*Math.sin(e)+h*Math.cos(e);return{x:u,z:f,hw:(o-r)/2,hl:(c-a)/2,h:-e}}var Fo=class i extends de{constructor(){super(i.Geometry,new kt({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new P,t=new P,n=new yo(16,16),s=new yo(16,16),r=Nn,o=i.Geometry,a=new Qi({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),c=new Qi({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new de(o,a),h=[],u=di.Shader,f=new Qi({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new Ee(16777215)},scale:{value:new se},screenPosition:{value:new P}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Un,transparent:!0,depthWrite:!1}),d=new de(o,f);this.addElement=function(v){h.push(v)};let x=new se,_=new se,p=new sc,m=new ut;this.onBeforeRender=function(v,M,g){v.getCurrentViewport(m);let w=v.getRenderTarget(),E=w!==null?w.texture.type:Nn;r!==E&&(n.dispose(),s.dispose(),n.type=s.type=E,r=E);let S=m.w/m.z,A=m.z/2,b=m.w/2,y=16/m.w;if(x.set(y*S,y),p.min.set(m.x,m.y),p.max.set(m.x+(m.z-16),m.y+(m.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(g.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(g.projectionMatrix),_.x=m.x+e.x*A+A-8,_.y=m.y+e.y*b+b-8,p.containsPoint(_))){v.copyFramebufferToTexture(n,_);let R=a.uniforms;R.scale.value=x,R.screenPosition.value=e,v.renderBufferDirect(g,null,o,a,l,null),v.copyFramebufferToTexture(s,_),R=c.uniforms,R.scale.value=x,R.screenPosition.value=e,v.renderBufferDirect(g,null,o,c,l,null);let D=-e.x*2,U=-e.y*2;for(let N=0,V=h.length;N<V;N++){let B=h[N],Z=f.uniforms;Z.color.value.copy(B.color),Z.map.value=B.texture,Z.screenPosition.value.x=e.x+D*B.distance,Z.screenPosition.value.y=e.y+U*B.distance,y=B.size/m.w;let O=m.w/m.z;Z.scale.value.set(y*O,y),f.uniformsNeedUpdate=!0,v.renderBufferDirect(g,null,o,f,d,null)}}},this.dispose=function(){a.dispose(),c.dispose(),f.dispose(),n.dispose(),s.dispose();for(let v=0,M=h.length;v<M;v++)h[v].texture.dispose()}}},di=class{constructor(e,t=1,n=0,s=new Ee(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=s}};di.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};Fo.Geometry=function(){let i=new tt,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new As(e,5);return i.setIndex([0,1,2,0,2,3]),i.setAttribute("position",new Ji(t,3,0,!1)),i.setAttribute("uv",new Ji(t,2,3,!1)),i}();var Sc=(i,e)=>i+Math.random()*(e-i),BM=new Rr,Zu={};function Gt(i,{mirror:e=!0,srgb:t=!0}={}){if(Zu[i])return Zu[i];let n=BM.load(`tex/${i}.webp`);return n.wrapS=n.wrapT=e?Es:Ci,t&&(n.colorSpace=St),n.anisotropy=8,Zu[i]=n,n}var Bt=i=>new At(i);function kr(i,e,t,n={}){let s=Gt(i,{mirror:!1}),r=e*t,o=new sn(r,e);o.translate(0,e/2-(n.sink||0),0);let a=Bt({map:s,alphaTest:.45,side:Ot,roughness:1,metalness:0}),c=new sn(r,e);return c.translate(0,e/2-(n.sink||0),0),c.rotateY(Math.PI/2),[{geometry:o,material:a},{geometry:c,material:a}]}function $u(i,e,t,n){let s=i.attributes.uv,r=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}s.needsUpdate=!0}function em(i,e){let t={scene:i,worlds:{},current:null,road:null},n=new Do;n.scale.setScalar(2e4),i.add(n);let s=new Pr(16777215,2.2);s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-22,s.shadow.camera.right=22,s.shadow.camera.top=30,s.shadow.camera.bottom=-30,s.shadow.camera.near=1,s.shadow.camera.far=160,s.shadow.bias=-8e-4,s.shadow.normalBias=.02,i.add(s),i.add(s.target);let r=new tc(12574719,4876842,.5);i.add(r);let o=new wr(e);t.sky=n,t.sun=s,t.hemi=r;let a=Bt({roughness:1,metalness:0}),c=new de(new sn(1600,1600),a);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,i.add(c);let l=new kt({transparent:!0,alphaTest:.2,side:tn,fog:!1,depthWrite:!1}),h=new de(new Ht(560,560,150,48,1,!0),l);h.renderOrder=-1,i.add(h);let u=Gt("asphalt");u.repeat.set(2,1);let f=Gt("asphalt_n",{srgb:!1});f.repeat.set(2,1);let d=Gt("asphalt_r",{srgb:!1});d.repeat.set(2,1);let x=[Gt("billboard1",{mirror:!1}),Gt("billboard2",{mirror:!1})],_=Gt("shopsign",{mirror:!1}),p={road:Bt({map:u,normalMap:f,normalScale:new se(.45,.45),roughnessMap:d,roughness:1,metalness:0,envMapIntensity:.6}),shoulder:Bt({roughness:1}),line:Bt({color:16053492,roughness:.7}),rail:Bt({color:12106946,roughness:.45,metalness:.8}),railGeo:new rt(.08,.32,4.1),postGeo:new rt(.1,.75,.1),pole:Bt({color:16734774,roughness:.7}),poleGeo:new rt(.12,1.4,.12),billboards:x.map($=>Bt({map:$,emissiveMap:$,emissive:16777215,emissiveIntensity:0,roughness:.6})),bbPanelGeo:new rt(12,6,.25),bbPostGeo:new Ht(.18,.22,4.5,8),sign:Bt({map:_,emissiveMap:_,emissive:16777215,emissiveIntensity:0,roughness:.5}),gantryPostGeo:new rt(.5,7.5,.5),gantryBeamGeo:new rt(qt+3,.5,.5),gantrySignGeo:new rt(12,3,.2),lamp:Bt({color:10133670,roughness:.4,metalness:.8}),lampGlow:Bt({color:16773824,emissive:16769184,emissiveIntensity:0}),pool:new kt({color:16766346,transparent:!0,opacity:0,blending:Un,depthWrite:!1,fog:!1})};p.poolGeo=new Is(5.5,20),p.poolGeo.rotateX(-Math.PI/2),p.poolGeo.translate(2,.06,0);{let $=document.createElement("canvas");$.width=$.height=128;let re=$.getContext("2d"),oe=re.createRadialGradient(64,64,0,64,64,64);oe.addColorStop(0,"rgba(255,255,255,1)"),oe.addColorStop(1,"rgba(255,255,255,0)"),re.fillStyle=oe,re.fillRect(0,0,128,128),p.pool.map=new ri($),p.pool.alphaMap=p.pool.map}{let $=new Ht(.08,.12,7,6);$.translate(0,3.5,0);let re=new rt(2,.1,.1);re.translate(1,6.95,0),p.lampGeo=zM([$,re]),p.lampGlowGeo=new rt(.6,.15,.3),p.lampGlowGeo.translate(1.8,6.9,0)}t.M=p;let v=["facade_glass","facade_brick","facade_shops"].map($=>Gt($,{mirror:!1})).map($=>Bt({map:$,emissiveMap:$,emissive:16777215,emissiveIntensity:0,roughness:.5,metalness:.1})),M=Bt({color:4869717,roughness:1});function g($){let re=$?18:Sc(10,18),oe=$?9:Sc(9,42),I=$?12:Sc(10,16),T=new pt;if($){let H=new de(new rt(re,5,I),[v[2],v[2],M,M,v[2],v[2]]);$u(H.geometry,re/9,5/9,I/9),H.position.y=2.5,T.add(H);let X=new de(new rt(re,1.3,I+.2),[M,M,M,M,p.sign,M]);X.position.y=5.65,T.add(X);let Q=new de(new rt(re,2.7,I),[v[1],v[1],M,M,v[1],v[1]]);$u(Q.geometry,re/12,2.7/12,I/12),Q.position.y=7.65,T.add(Q)}else{let H=v[Math.random()<.5?0:1],X=H===v[0]?10:12,Q=new de(new rt(re,oe,I),[H,H,M,M,H,H]);if($u(Q.geometry,re/X,oe/X,I/X),Q.position.y=oe/2,T.add(Q),oe>20){let j=new de(new rt(re*.5,2,I*.5),M);j.position.y=oe+1,T.add(j)}}return{group:T,w:re,h:oe,d:I,gap:Sc(0,4)}}let w=Gt("clouds",{mirror:!0});w.repeat.set(3,3);let E=new kt({map:w,transparent:!0,depthWrite:!1,fog:!1,opacity:.95,side:Ot}),S=new de(new sn(3600,3600),E);S.rotation.x=-Math.PI/2,S.position.y=330,S.renderOrder=-2,i.add(S),t.clouds=S;let A=new Fo,b=Gt("lensflare0",{mirror:!1}),y=Gt("lensflare3",{mirror:!1});A.addElement(new di(b,420,0,new Ee(16773840))),A.addElement(new di(y,60,.6)),A.addElement(new di(y,70,.7)),A.addElement(new di(y,120,.9)),A.addElement(new di(y,70,1));let R=new Ut;R.add(A),i.add(R),t.flare=R;let D=Bt({color:5915440,roughness:1}),U=$=>Bt({map:Gt($,{mirror:!1}),alphaTest:.5,side:Ot,roughness:.9,metalness:0}),N=($,re)=>new sn($,re),V=new Ht(.22,.42,1,7);V.translate(0,.5,0);let B={trunk:{geometry:V,material:D,h:3.4},cards:{geometry:N(5.6,3.65),material:U("leaf_oak"),n:9,rx:3.6,ry:2.4,yc:5.6,tilt:.55,flat:!1},obstacle:.5},Z={trunk:{geometry:V,material:D,h:6},cards:{geometry:N(4.2,2.8),material:U("leaf_pine"),n:11,rx:2.6,ry:4.6,yc:7.6,tilt:.35,flat:!0,cone:!0},obstacle:.45},O=N(1.1,.75);O.translate(0,.33,0);let W=Bt({map:Gt("grass_tuft",{mirror:!1}),alphaTest:.5,side:Ot,roughness:1,metalness:0}),J=Bt({map:Gt("grass_tuft",{mirror:!1}),alphaTest:.5,side:Ot,roughness:1,metalness:0,color:13217914});t.treeStyles={oakTree:B,pineTree:Z};let ie=kr("tree_oak",11,768/670,{sink:.2}),ve=kr("tree_pine",14,476/1045),Ue=kr("cactus",6,362/1059),q=kr("tree_snowpine",12,599/1084),ne={geometry:new Ja(1.2,0),material:Bt({color:11043420,roughness:1}),y:.5,shadow:!0},we={geometry:new $n(1.5,8,6),material:Bt({color:15791615,roughness:1}),y:.2};t.worlds={country:{ground:"grass",tile:7,shoulder:"sand",shoulderTint:9075290,backdrop:"hills_green",backdropH:70,guardrail:!0,scatter:[{tree:B,perChunk:12,lat:[12,60],scale:[.8,1.35]},{tree:Z,perChunk:10,lat:[13,75],scale:[.8,1.3]},{parts:ie,perChunk:10,lat:[60,140],scale:[.9,1.4],billboard:!0},{parts:ve,perChunk:10,lat:[60,160],scale:[.9,1.4],billboard:!0},{grass:{geometry:O,material:W},perChunk:220,lat:[10.2,26],scale:[.6,1.2]}],fog:{day:13229292,sunset:15316106,night:659230},fogFar:430,offroadGrip:.6},desert:{ground:"sand",tile:8,shoulder:"sand",shoulderTint:16777215,backdrop:"mesas_desert",backdropH:46,guardrail:!0,scatter:[{parts:Ue,perChunk:12,lat:[11,70],scale:[.8,1.6],billboard:!0,obstacle:.4},{parts:[ne],perChunk:16,lat:[9,90],scale:[.5,2.4],obstacle:1},{grass:{geometry:O,material:J},perChunk:90,lat:[10.2,30],scale:[.5,1]}],fog:{day:15128253,sunset:15771242,night:1183522},fogFar:470,offroadGrip:.5},snow:{ground:"snow",tile:6,shoulder:"snow",shoulderTint:16777215,backdrop:"mountains_snow",backdropH:110,poles:!0,scatter:[{parts:q,perChunk:18,lat:[11,80],scale:[.7,1.5],billboard:!0,obstacle:.5},{parts:[we],perChunk:12,lat:[8,30],scale:[.6,1.8]},{tree:Z,perChunk:6,lat:[12,50],scale:[.8,1.2]}],fog:{day:14411506,sunset:15776144,night:857128},fogFar:340,offroadGrip:.35},city:{ground:"pavement",tile:4,shoulder:"pavement",shoulderTint:16777215,backdrop:"skyline_city",backdropH:90,buildings:!0,makeBuilding:g,scatter:[],fog:{day:13622248,sunset:15247480,night:724506},fogFar:400,offroadGrip:.9,fMats:v}};let ue=Gt("house_front",{mirror:!0}),Ie=Gt("precast_wall",{mirror:!0}),Ve=Gt("roof_tiles",{mirror:!0}),Ne=Bt({map:ue,roughness:.9,metalness:0}),Xe=($,re=.85)=>{let oe=Gt($,{mirror:!0});return Bt({map:oe,emissiveMap:oe,emissive:16777215,emissiveIntensity:0,roughness:re,metalness:0})},te={brick:Xe("house_brick"),arch:Xe("house_arch"),modern:Xe("house_modern",.6),flats:Xe("flats_block"),shops:Xe("shops_row"),mall:Xe("mall_facade",.6),mosque:Xe("mosque_wall")},pe=Bt({map:Gt("palisade",{mirror:!0}),alphaTest:.5,side:Ot,roughness:.6,metalness:.6}),L=kr("tree_jacaranda",9,768/544,{sink:.1}),De=kr("tree_palm",11,364/991),he=Bt({map:Ie,roughness:1,metalness:0}),ye=Bt({map:Ve,roughness:.9,metalness:0});Ve.repeat.set(2,2),t.worlds.lenasia={ground:"grass",tile:7,groundTint:12037496,shoulder:"sand",shoulderTint:16777215,backdrop:"hills_green",backdropH:38,map:"lenasia.json",fog:{day:14081510,sunset:15316106,night:659230},fogFar:520,offroadGrip:.55,scatter:[],tex:Gt,fMats:v,fMatsHouse:Ne,wallMat:he,roofTileMat:ye,makeBuilding:g,treeStyles:null,start:[-743,-2581],showroomAt:null,lenMats:te,palisadeMat:pe,jacaranda:L,palm:De};for(let $ in t.worlds)t.worlds[$].mats=p;return t.worlds.lenasia.treeStyles={oakTree:B,pineTree:Z},t.mapData={},t.setWorld=$=>{let re=t.worlds[$];t.current=re,t.currentName=$;let oe=Gt(re.ground);oe.repeat.set(1600/re.tile,1600/re.tile),a.map=oe,a.needsUpdate=!0;let I=Gt(re.shoulder);p.shoulder.map=I,p.shoulder.color.setHex(re.shoulderTint),p.shoulder.needsUpdate=!0;let T=Gt(re.backdrop,{mirror:!0});if(T.repeat.set(4,1),l.map=T,l.needsUpdate=!0,h.scale.y=re.backdropH/150,h.position.y=re.backdropH/2-2,a.color.setHex(re.groundTint||16777215),t.road&&t.road.dispose(),t.road=null,re.map){t.loading=!0;let H=X=>{let Q=new wc(i,re,X),j=Q.startPose(),be=Q.nearest(j.x,j.z,{skipMinor:!0}),ge=-Math.sin(be.h),xe=-Math.cos(be.h),it=xe,fe=-ge;re.showroomAt=[be.px+ge*70+it*(be.w/2+12),be.pz+xe*70+fe*(be.w/2+12),be.h+Math.PI/2],t.road=Q,t.loading=!1};t.mapData[re.map]?H(t.mapData[re.map]):Promise.all([fetch(re.map).then(X=>X.json()),fetch(re.map.replace(".json","-bld.json")).then(X=>X.ok?X.json():null).catch(()=>null)]).then(([X,Q])=>{Q&&(X.gb=Q),t.mapData[re.map]=X,t.current===re&&H(X)})}else t.road=new _c(i,re)},t.setTime=$=>{let re=t.current,oe=$==="night",I=$==="rain",T=n.material.uniforms,H,X;$==="day"?(H=48,X=160,T.turbidity.value=2.2,T.rayleigh.value=1,T.mieCoefficient.value=.004,T.mieDirectionalG.value=.8):I?(H=35,X=160,T.turbidity.value=20,T.rayleigh.value=.2,T.mieCoefficient.value=.1,T.mieDirectionalG.value=.999):$==="sunset"?(H=4,X=235,T.turbidity.value=10,T.rayleigh.value=3,T.mieCoefficient.value=.006,T.mieDirectionalG.value=.85):(H=-4,X=180,T.turbidity.value=2,T.rayleigh.value=.3,T.mieCoefficient.value=.002,T.mieDirectionalG.value=.7);let Q=Io.degToRad(90-H),j=Io.degToRad(X),be=new P().setFromSphericalCoords(1,Q,j);T.sunPosition.value.copy(be),t.envRT&&t.envRT.dispose();let ge=new Sr;ge.add(n),t.envRT=o.fromScene(ge,0,.1,200),i.add(n),i.environment=t.envRT.texture,i.background=null,$==="day"?(s.color.setHex(16774368),s.intensity=4.2,r.color.setHex(12572927),r.groundColor.setHex(7041116),r.intensity=1,i.environmentIntensity=1):I?(s.color.setHex(13620960),s.intensity=1.1,r.color.setHex(10135224),r.groundColor.setHex(3817284),r.intensity=1.6,i.environmentIntensity=.9):$==="sunset"?(s.color.setHex(16754784),s.intensity=3.2,r.color.setHex(15906186),r.groundColor.setHex(4865846),r.intensity=.8,i.environmentIntensity=1):(s.color.setHex(9412824),s.intensity=1.3,r.color.setHex(3952256),r.groundColor.setHex(1315864),r.intensity=1.5,i.environmentIntensity=.7),t.sunDir=be.clone().normalize(),oe&&t.sunDir.set(.3,.8,-.2).normalize(),i.fog=new za(I?9345190:re.fog[$],I?20:40,re.fogFar*(oe?.7:I?.55:1)),l.color.setHex(oe?2765648:$==="sunset"?16765096:I?8226708:16777215),p.road.roughness=I?.3:1,p.road.envMapIntensity=I?1.6:.6,p.road.color.setHex(I?9079434:16777215),p.pool.opacity=oe?.5:0,t.rain=I;for(let xe of p.billboards)xe.emissiveIntensity=oe?.9:0;if(p.sign.emissiveIntensity=oe?.9:0,v.forEach(xe=>{xe.emissiveIntensity=oe?.55:0,xe.emissive.setHex(oe?16769968:16777215)}),p.lampGlow.emissiveIntensity=oe?5:0,re.nightNow=oe,t.road&&t.road.signMats)for(let xe of t.road.signMats)xe.emissiveIntensity=oe?.8:0;for(let xe in te)te[xe].emissiveIntensity=oe?.45:0;E.color.setHex(oe?3818080:$==="sunset"?16763296:I?7305092:16777215),E.opacity=oe?.6:I?1:.95,R.visible=!oe&&!I,t.night=oe},t.follow=($,re,oe,I)=>{let T=t.current;c.position.set($,0,re),a.map&&a.map.offset.set($/T.tile%2,-re/T.tile%2),h.position.x=$,h.position.z=re,S.position.x=$,S.position.z=re,w.offset.set($/1200%2+performance.now()*4e-6,-re/1200%2),R.position.set($+t.sunDir.x*900,t.sunDir.y*900,re+t.sunDir.z*900),s.target.position.set($+oe*8,0,re+I*8),s.position.copy(t.sunDir).multiplyScalar(80).add(s.target.position)},t}function zM(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),s.set(h.attributes.normal.array,a*3),r.set(h.attributes.uv.array,a*2);let u=h.index.array;for(let f=0;f<u.length;f++)o[c+f]=u[f]+a;a+=h.attributes.position.count,c+=u.length}let l=new tt;return l.setAttribute("position",new He(n,3)),l.setAttribute("normal",new He(s,3)),l.setAttribute("uv",new He(r,2)),l.setIndex(new He(o,1)),l}var Oo=(i,e,t)=>Math.max(e,Math.min(t,i)),zs=class{constructor(e){this.spec=e,this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.yawRate=0,this.throttle=0,this.brake=0,this.steer=0,this.offRoad=!1,this.surfaceGrip=1,this.steerAngle=0,this.vf=0,this.vl=0,this.halfW=e.w/2,this.halfL=e.len/2,this.mass=e.len>5?2.2:1.6}fwd(){return[-Math.sin(this.h),-Math.cos(this.h)]}right(){return[Math.cos(this.h),-Math.sin(this.h)]}speed(){return Math.hypot(this.vx,this.vz)}circles(){let[e,t]=this.fwd(),n=this.halfL*.55,s=this.halfW+.08;return[[this.x+e*n,this.z+t*n,s],[this.x-e*n,this.z-t*n,s]]}update(e,t,n,s,r){let[o,a]=this.fwd(),[c,l]=this.right(),h=this.vx*o+this.vz*a,u=this.vx*c+this.vz*l,f=t*(r?1.3:1)*(this.offRoad?.25:1);this.throttle>0&&(h+=this.throttle*n*(r?2:1)*Math.max(.12,1-.7*Oo(h/f,0,1))*e),this.brake>0&&(h>.5?h-=this.brake*16*e:h=Math.max(h-this.brake*4*e,-4)),h-=h*(this.offRoad?1.4:.12)*e,h-=.0018*h*Math.abs(h)*e,h>f&&(h+=(f-h)*Math.min(1,2*e)),Math.abs(h)<.05&&this.throttle===0&&this.brake===0&&(h=0);let d=Math.abs(h),x=s*.09,_=-this.steer*x*Oo(d/6,0,1)*(1/(1+d/28))*Math.sign(h||1);this.yawRate+=(_-this.yawRate)*Math.min(1,8*e),this.h+=this.yawRate*e,this.steerAngle+=(this.steer*.42-this.steerAngle)*Math.min(1,10*e);let p=(this.offRoad?2.2:7.5)*this.surfaceGrip;u-=u*Math.min(1,p*e);let m=this.yawRate*d*.08*(this.offRoad?2.5:1);u+=m*e,u=Oo(u,-12,12);let[v,M]=this.fwd(),[g,w]=this.right();this.vx=v*h+g*u,this.vz=M*h+w*u,this.x+=this.vx*e,this.z+=this.vz*e,this.vf=h,this.vl=u}};function Ec(i,e,t=.35){let n=0,s=i.circles(),r=e.circles();for(let[o,a,c]of s)for(let[l,h,u]of r){let f=l-o,d=h-a,x=Math.hypot(f,d),_=c+u;if(x>=_||x<1e-4)continue;let p=f/x,m=d/x,v=_-x,M=i.mass,g=e.mass,w=M+g;i.x-=p*v*(g/w),i.z-=m*v*(g/w),e.x+=p*v*(M/w),e.z+=m*v*(M/w);let E=e.vx-i.vx,S=e.vz-i.vz,A=E*p+S*m;if(A<0){let b=-(1+t)*A/(1/M+1/g);i.vx-=b*p/M,i.vz-=b*m/M,e.vx+=b*p/g,e.vz+=b*m/g;let[y,R]=i.right(),D=p*y+m*R;i.yawRate+=D*Math.min(2,-A*.08),e.yawRate-=D*Math.min(2,-A*.08),n=Math.max(n,-A)}}return n}function tm(i,e,t,n,s=.25){let r=0;for(let[o,a,c]of i.circles()){let l=o-e,h=a-t,u=Math.hypot(l,h),f=c+n;if(u>=f||u<1e-4)continue;let d=l/u,x=h/u,_=f-u;i.x+=d*_,i.z+=x*_;let p=i.vx*d+i.vz*x;p<0&&(i.vx-=(1+s)*p*d,i.vz-=(1+s)*p*x,r=Math.max(r,-p),i.yawRate+=(Math.random()-.5)*Math.min(3,-p*.15))}return r}function nm(i,e,t,n,s,r,o=.2){let a=0,c=Math.cos(r),l=Math.sin(r);for(let[h,u,f]of i.circles()){let d=h-e,x=u-t,_=d*c-x*l,p=-d*l-x*c,m=Oo(_,-n,n),v=Oo(p,-s,s),M=_-m,g=p-v,w=Math.hypot(M,g),E,S,A;if(w>1e-4){if(w>=f)continue;E=M/w,S=g/w,A=f-w}else{let D=n-Math.abs(_),U=s-Math.abs(p);D<U?(E=Math.sign(_)||1,S=0,A=D+f):(E=0,S=Math.sign(p)||1,A=U+f)}let b=E*c-S*l,y=-E*l-S*c;i.x+=b*A,i.z+=y*A;let R=i.vx*b+i.vz*y;R<0&&(i.vx-=(1+o)*R*b,i.vz-=(1+o)*R*y,a=Math.max(a,-R))}return a}var Bo=(i,e,t)=>Math.max(e,Math.min(t,i)),lt={ctx:null,on:!0,engine:null,wind:null,gear:0,shiftT:0,rpm:.2,rain:!1,init(){if(this.ctx)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let e=this.ctx=new i,t=this.master=e.createGain();t.gain.value=0,t.connect(e.destination);let n=e.createGain();n.gain.value=0;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=500,s.Q.value=2.5;let r=e.createOscillator();r.type="sawtooth",r.frequency.value=60;let o=e.createOscillator();o.type="sawtooth",o.frequency.value=61;let a=e.createGain();a.gain.value=.5;let c=e.createOscillator();c.type="square",c.frequency.value=30;let l=e.createGain();l.gain.value=.3;let h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=180,h.Q.value=1.2;let u=e.createGain();u.gain.value=.5,r.connect(s),o.connect(a),a.connect(s),c.connect(l),l.connect(s),s.connect(n),r.connect(h),h.connect(u),u.connect(n),n.connect(t),r.start(),c.start(),o.start(),this.engine={o1:r,o2:c,o3:o,lp:s,eg:n,ex:h};let f=e.createBuffer(1,e.sampleRate*2,e.sampleRate),d=f.getChannelData(0);for(let _=0;_<d.length;_++)d[_]=Math.random()*2-1;let x=(_,p,m)=>{let v=e.createBufferSource();v.buffer=f,v.loop=!0;let M=e.createBiquadFilter();M.type=_,M.frequency.value=p,m&&(M.Q.value=m);let g=e.createGain();return g.gain.value=0,v.connect(M),M.connect(g),g.connect(t),v.start(),{g,f:M}};this.wind={...x("lowpass",600),buf:f},this.squeal=x("bandpass",1900,6),this.gravel=x("lowpass",900),this.rainN=x("highpass",2600),this.setOn(this.on)},setOn(i){this.on=i,this.master&&(this.master.gain.value=i?.8:0)},resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()},update(i,e,t,n,s=0,r=!1,o=.016){if(!this.engine)return;let a=6,c=e/a,l=Math.min(a-1,Math.floor(i/c));l!==this.gear&&(this.shiftT=.14,this.gear=l),this.shiftT=Math.max(0,this.shiftT-o);let h=Bo((i-l*c)/c,0,1),u=i<.5?t?.45:.15:.25+h*.7+(t?.05:0);this.rpm+=(u-this.rpm)*Math.min(1,(t?6:3)*o);let f=this.shiftT>0,d=f?this.rpm*.75:this.rpm,x=42+d*125+l*8+(n?35:0),_=(v,M,g)=>{v.value+=(M-v.value)*g};_(this.engine.o1.frequency,x,.3),_(this.engine.o3.frequency,x*1.012,.3),_(this.engine.o2.frequency,x/2,.3),_(this.engine.ex.frequency,120+d*500,.2),_(this.engine.lp.frequency,260+d*1500+(t?350:0),.15),_(this.engine.eg.gain,(t?.17:.07+d*.04)*(f?.55:1),.15);let p=Math.pow(Bo(i/60,0,1),2);_(this.wind.g.gain,p*.12,.08);let m=r?0:Bo((Math.abs(s)-2.2)/5,0,1)*Bo(i/12,0,1);_(this.squeal.g.gain,m*.16,.2),_(this.squeal.f.frequency,1700+m*500,.1),_(this.gravel.g.gain,r?Bo(i/15,0,1)*.2:0,.15),_(this.rainN.g.gain,this.rain?.045:0,.05)},horn(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime;for(let e of[420,525]){let t=this.ctx.createOscillator();t.type="square",t.frequency.value=e;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=1200;let s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(.18,i+.03),s.gain.setValueAtTime(.18,i+.45),s.gain.exponentialRampToValueAtTime(1e-4,i+.6),t.connect(n),n.connect(s),s.connect(this.master),t.start(i),t.stop(i+.65)}},bump(i){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.wind.buf;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=250+i*400;let s=this.ctx.createGain();if(s.gain.setValueAtTime(.55*i,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.22+i*.2),t.connect(n),n.connect(s),s.connect(this.master),t.start(e),t.stop(e+.5),i>.4){let r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(900,e),r.frequency.exponentialRampToValueAtTime(220,e+.15);let o=this.ctx.createGain();o.gain.setValueAtTime(.25*i,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.2),r.connect(o),o.connect(this.master),r.start(e),r.stop(e+.22)}},ping(i=0){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=880*Math.pow(2,Math.min(12,i)/12),n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(t,e),n.frequency.exponentialRampToValueAtTime(t*1.5,e+.08);let s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.22,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(this.master),n.start(e),n.stop(e+.25)},fanfare(i=!1){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=i?[523,659,784,1047]:[659,784,1047];t.forEach((n,s)=>{let r=this.ctx.createOscillator();r.type="triangle",r.frequency.value=n;let o=this.ctx.createGain(),a=e+s*.11;o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.25,a+.02),o.gain.exponentialRampToValueAtTime(1e-4,a+(s===t.length-1?.6:.25)),r.connect(o),o.connect(this.master),r.start(a),r.stop(a+.7)})},click(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.wind.buf;let t=this.ctx.createBiquadFilter();t.type="highpass",t.frequency.value=2500;let n=this.ctx.createGain();n.gain.setValueAtTime(.3,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.05),e.connect(t),t.connect(n),n.connect(this.master),e.start(i),e.stop(i+.06)},whoosh(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.wind.buf;let t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(3e3,i+.6),t.Q.value=1.5;let n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,i),n.gain.exponentialRampToValueAtTime(.3,i+.15),n.gain.exponentialRampToValueAtTime(1e-4,i+.9),e.connect(t),t.connect(n),n.connect(this.master),e.start(i),e.stop(i+1)}};var Tc=class{constructor(e,t=1400){this.n=t,this.box={w:60,h:30,d:60};let n=new Float32Array(t*3*2);this.off=new Float32Array(t*3);for(let r=0;r<t;r++)this.off[r*3]=Math.random()*this.box.w-this.box.w/2,this.off[r*3+1]=Math.random()*this.box.h,this.off[r*3+2]=Math.random()*this.box.d-this.box.d/2;this.geo=new tt,this.geo.setAttribute("position",new He(n,3));let s=new Cs({color:13623536,transparent:!0,opacity:.35,fog:!0});this.mesh=new Tr(this.geo,s),this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh),this.t=0}set(e){this.mesh.visible=e}update(e,t,n,s,r){if(!this.mesh.visible)return;this.t+=e;let o=this.geo.attributes.position.array,{w:a,h:c,d:l}=this.box,h=28,u=-s*.05,f=-r*.05;for(let d=0;d<this.n;d++){let x=this.off[d*3],_=this.off[d*3+2],p=((this.off[d*3+1]-this.t*h)%c+c)%c,m=t+x,v=n+_;o[d*6]=m,o[d*6+1]=p,o[d*6+2]=v,o[d*6+3]=m+u,o[d*6+4]=p+1.1,o[d*6+5]=v+f}this.geo.attributes.position.needsUpdate=!0}},Ac=class{constructor(e,t=320){this.max=t,this.head=0;let n=new Float32Array(t*4*3),s=new Float32Array(t*4),r=new Uint16Array(t*6);for(let a=0;a<t;a++){let c=a*4;r.set([c,c+1,c+2,c,c+2,c+3],a*6)}this.geo=new tt,this.geo.setAttribute("position",new He(n,3)),this.geo.setAttribute("aA",new He(s,1)),this.geo.setIndex(new He(r,1));let o=new Nt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{},vertexShader:"attribute float aA; varying float vA; void main(){ vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.05, 0.05, 0.05, vA * 0.55); }"});this.mesh=new de(this.geo,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,e.add(this.mesh),this.last=[null,null]}clear(){this.geo.attributes.aA.array.fill(0),this.geo.attributes.aA.needsUpdate=!0,this.last=[null,null]}update(e,t,n,s,r=.1){for(let o=0;o<2;o++){let a=t[o];if(e<=0){this.last[o]=null;continue}let c=this.last[o];if(!(c&&Math.hypot(a[0]-c[0],a[1]-c[1])<.35)){if(c){let l=this.head;this.head=(this.head+1)%this.max;let h=this.geo.attributes.position.array,u=this.geo.attributes.aA.array,f=.13;h.set([c[0]-n*f,r,c[1]-s*f,c[0]+n*f,r,c[1]+s*f,a[0]+n*f,r,a[1]+s*f,a[0]-n*f,r,a[1]-s*f],l*12),u.fill(e,l*4,l*4+4),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aA.needsUpdate=!0}this.last[o]=[a[0],a[1]]}}}};var Rc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kM=new $i(-1,1,1,-1,0,1),Ju=class extends tt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},HM=new Ju,as=class{constructor(e){this._mesh=new de(HM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Hr=class extends Tn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ai.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new as(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zo=class extends Tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Cc=class extends Tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ic=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hr(Rc),this.copyPass.material.blending=ii,this.clock=new Lr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zo!==void 0&&(o instanceof zo?n=!0:o instanceof Cc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pc=class extends Tn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ee}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var im={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Vr=class i extends Tn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new Ee(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new on(r,o,{type:En});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new on(r,o,{type:En});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=im;this.highPassUniforms=ai.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Rc;this.copyUniforms=ai.clone(h.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Un,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ee,this.oldClearAlpha=1,this.basic=new kt,this.fsQuad=new as(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Vr.BlurDirectionX=new se(1,0);Vr.BlurDirectionY=new se(0,1);var sm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Lc=class extends Tn{constructor(){super();let e=sm;this.uniforms=ai.clone(e.uniforms),this.material=new Qi({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new as(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ro?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var le=i=>document.getElementById(i),pi=(i,e,t)=>Math.max(e,Math.min(t,i)),ju=(i,e,t)=>i+(e-i)*t,Hn=(i,e)=>i+Math.random()*(e-i),VM=(i,e)=>Math.floor(Hn(i,e+1)),Ho=i=>i[Math.floor(Math.random()*i.length)],um="kidcars-v3",Re={car:0,color:0,world:"country",time:"day",traffic:!0,sound:!0,tilt:!1,cam:0,controls:"wheel",eco:!0};try{Object.assign(Re,JSON.parse(localStorage.getItem(um)||"{}"))}catch(i){}Vt[Re.car]||(Re.car=0);function Cn(){try{localStorage.setItem(um,JSON.stringify(Re))}catch(i){}}var fm=le("c"),qr=/[?&]test/.test(location.search),dn=new Ba({canvas:fm,antialias:!qr,powerPreference:"high-performance"});dn.setPixelRatio(qr?.35:Math.min(window.devicePixelRatio||1,Re.eco?1:1.5));dn.shadowMap.enabled=!qr;dn.shadowMap.type=Re.eco?Ao:rc;dn.toneMapping=Ro;dn.toneMappingExposure=.5;var gn=new Sr,Ft=new Kt(60,1,.3,1400);function Xc(){let i=window.innerWidth,e=window.innerHeight;dn.setSize(i,e,!1),Ft.aspect=i/e,Ft.updateProjectionMatrix(),mi&&(mi.setPixelRatio(dn.getPixelRatio()),mi.setSize(i,e))}window.addEventListener("resize",Xc);var _e=em(gn,dn);Wp(gn);var Wr=Yp(gn),rf=new Tc(gn),dm=new Ac(gn),ls=new pt;{let i=new de(new Ht(4.6,4.9,.14,56),new At({color:1778736,roughness:.25,metalness:.6,envMapIntensity:1.2}));i.position.y=.07,i.receiveShadow=!0,ls.add(i);let e=new de(new ji(4.75,.07,8,64),new At({color:13677676,roughness:.3,metalness:.8}));e.rotation.x=Math.PI/2,e.position.y=.14,ls.add(e),ls.visible=!1,gn.add(ls)}var Rn=new mc,hs=null,GM={uniforms:{tDiffuse:{value:null},uVig:{value:.35},uSat:{value:1.12}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVig; uniform float uSat; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.299,0.587,0.114)); c.rgb = mix(vec3(l), c.rgb, uSat);
      vec2 d = vUv - 0.5; float v = 1.0 - uVig * smoothstep(0.25, 0.75, dot(d, d) * 2.0); c.rgb *= v; gl_FragColor = c; }`},mi=null,rm=null,uf=!qr&&!Re.eco;function WM(){let i=new on(1,1,{type:En,samples:2});mi=new Ic(dn,i),mi.addPass(new Pc(gn,Ft)),rm=new Vr(new se(256,128),.18,.4,1.6),mi.addPass(rm),mi.addPass(new Hr(GM)),mi.addPass(new Lc)}WM();Xc();var of=0;function pm(){let i=!!Re.eco;qr||(dn.setPixelRatio(Math.min(window.devicePixelRatio||1,i?1:1.5)),uf=!i&&ko>1),of=i&&!qr?1e3/30:0;let e=i?1024:2048;_e.sun.shadow.mapSize.x!==e&&(_e.sun.shadow.mapSize.set(e,e),_e.sun.shadow.map&&(_e.sun.shadow.map.dispose(),_e.sun.shadow.map=null)),dn.shadowMap.type=i?Ao:rc,dn.shadowMap.needsUpdate=!0,le("optEco").textContent=i?"\u{1F50B}":"\u2728",le("optEco").classList.toggle("off",!i),Xc()}var Wo=[13832735,1525449,16106776,1414215,15921906,1381914,16738835,7153881,2078920],XM=le("loading"),qM=le("loadfill"),ff=le("loadtxt"),om=0,mm=0;function am(i){om++,qM.style.width=Math.round(om/mm*100)+"%",i&&(ff.textContent=i)}async function YM(){let i=Vt[Re.car].id;mm=Vt.length+1,await Lo(i,!1),am("Polishing the "+Vt[Re.car].name+"\u2026");for(let e of Vt)await Lo(e.id,!0),am("Loading traffic\u2026");ff.textContent="Ready!",setTimeout(()=>XM.classList.add("hidden"),350),(async()=>{for(let e of Vt)if(!Ns(e.id,!1)){try{await Lo(e.id,!1)}catch(t){console.warn(t)}Pt==="menu"&&Vt[Re.car].id===e.id&&Vo()}})()}var Gs=60,Fi=new tt,Fc=new Float32Array(Gs*3),gm=new Float32Array(Gs),xm=new Float32Array(Gs),Oc=new Float32Array(Gs*3);Fi.setAttribute("position",new He(Fc,3));Fi.setAttribute("aSize",new He(gm,1));Fi.setAttribute("aAlpha",new He(xm,1));Fi.setAttribute("aCol",new He(Oc,3));var KM=new Nt({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ee(7829367)}},vertexShader:"attribute float aSize; attribute float aAlpha; attribute vec3 aCol; varying float vA; varying vec3 vC; void main(){ vA = aAlpha; vC = aCol; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = aSize * 300.0 / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard; float a = smoothstep(0.5, 0.1, d) * vA; gl_FragColor = vec4(vC, a); }"}),_m=new Ar(Fi,KM);_m.frustumCulled=!1;gn.add(_m);var df=[];for(let i=0;i<Gs;i++)df.push({x:0,y:-10,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,r:.5,g:.5,b:.5});var Qu=0;function Bc(i,e,t,n,s){let r=df[Qu];Qu=(Qu+1)%Gs,s?(r.r=s[0],r.g=s[1],r.b=s[2]):r.r=r.g=r.b=.45,r.x=i+Hn(-.3,.3),r.y=e,r.z=t+Hn(-.3,.3),r.vx=Hn(-.4,.4),r.vy=Hn(.8,1.6)*n,r.vz=Hn(-.4,.4),r.life=0,r.max=Hn(.9,1.8),r.size=Hn(.5,1)*n}function ZM(i){for(let e=0;e<Gs;e++){let t=df[e];t.life<t.max&&(t.life+=i,t.x+=t.vx*i,t.y+=t.vy*i,t.z+=t.vz*i,t.vy*=.98);let n=t.life/t.max,s=t.life<t.max;Fc[e*3]=t.x,Fc[e*3+1]=t.y,Fc[e*3+2]=t.z,gm[e]=s?t.size*(.6+n*2.2):0,xm[e]=s?(1-n)*.55:0,Oc[e*3]=t.r,Oc[e*3+1]=t.g,Oc[e*3+2]=t.b}Fi.attributes.position.needsUpdate=!0,Fi.attributes.aSize.needsUpdate=!0,Fi.attributes.aAlpha.needsUpdate=!0,Fi.attributes.aCol.needsUpdate=!0}var Tt=null,Vn=Vt[0],G=null,zc=null,ce={s:0,idx:0,damage:0,totaled:!1,boostFuel:1,boosting:!1,shake:0,dist:0,menuAngle:.7,lastHitT:0,spin:0,combo:0,lastStarT:-9,saveT:0,missionT:0};function Vo(){Tt&&(gn.remove(Tt),Or(Tt)),Vn=Vt[Re.car],Tt=Fr(Vn.id,!Ns(Vn.id,!1),Wo[Re.color]),gn.add(Tt),zc=new pt;for(let i of[-1,1]){let e=new Ir(16774358,0,90,.55,.5,1);e.position.set(i*.65,.7,-Vn.len/2+.1),e.target.position.set(i*1.8,0,-45),zc.add(e,e.target)}Tt.add(zc),G=new zs(Vn),pf(),Xo()}var kn=[];for(let i=0;i<6;i++)kn.push({mesh:null,spec:Vt[0],body:null,lane:0,s:0,target:20,active:!1,idx:0});function vm(i,e){let t=VM(0,2),n=e?ce.s+Hn(120,420):ce.s-Hn(60,90);for(let r=0;r<10;r++){let o=!0;for(let a of kn)a!==i&&a.active&&a.lane===t&&Math.abs(a.s-n)<50&&(o=!1);if(o)break;n+=40}i.mesh&&(gn.remove(i.mesh),Or(i.mesh)),i.spec=Ho(Vt),i.mesh=Fr(i.spec.id,!0,Ho(Wo)),gn.add(i.mesh),i.body=new zs(i.spec),i.lane=t,i.s=n,i.target=e?Hn(14,27):Hn(30,40);let s=_e.road.pointAt(n);i.body.x=s.x+s.rx*Ui[t],i.body.z=s.z+s.rz*Ui[t],i.body.h=s.h,i.body.vx=s.fx*i.target,i.body.vz=s.fz*i.target,i.idx=Math.floor(n/ci),i.active=!0,i.mesh.visible=!0,i.ahead=n>ce.s}function cm(i){i.mesh.position.set(i.body.x,0,i.body.z),i.mesh.rotation.y=i.body.h}function pf(){_e.setTime(Re.time),Fp(_e.night||_e.rain),Op(_e.night?.5:1),rf.set(!!_e.rain),lt.rain=!!_e.rain,Tt&&(Tt.userData.paint.forEach(i=>i.envMapIntensity=_e.night?.6:1.25),zc.children.forEach(i=>{i.isSpotLight&&(i.intensity=_e.night?400:0)}))}var wt={left:!1,right:!1,gas:!1,brake:!1,boost:!1,tilt:0,wheel:0},kc=["btnLeft","btnRight","btnGas","btnBrake","btnBoost"],Hc={btnLeft:"left",btnRight:"right",btnGas:"gas",btnBrake:"brake",btnBoost:"boost"},Vs=le("wheel"),ym=le("wheelimg"),Ni=0,Xt=null,af=120,An=new Map,Yr=new Map;function mf(i,e){let t=Vs.getBoundingClientRect();return Math.atan2(e-(t.top+t.height/2),i-(t.left+t.width/2))*180/Math.PI}function Mm(i,e){let t=mf(i,e),n=t-Xt.last;for(;n>180;)n-=360;for(;n<-180;)n+=360;Xt.last=t,!(Math.abs(n)>120)&&(Ni=pi(Ni+n,-af,af),ym.style.transform=`rotate(${Ni}deg)`)}function Hs(i,e,t){let n=i.getBoundingClientRect();return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}function Kr(){let i={};for(let e of kc)i[Hc[e]]=!1;for(let e of An.values())if(!e.wheel)for(let t of kc)Hs(le(t),e.x,e.y)&&(i[Hc[t]]=!0);for(let e of kc){let t=Hc[e],n=i[t]||Yr.has(t);wt[t]=n,le(e).classList.toggle("pressed",n)}}function $M(i){i.cancelable&&i.preventDefault(),i.type==="touchstart"&&(lt.init(),lt.resume());let e=new Set(Array.from(i.touches).map(t=>t.identifier));for(let t of Array.from(An.keys()))if(!e.has(t)&&!Array.from(i.changedTouches).some(n=>n.identifier===t)){let n=An.get(t);An.delete(t),n&&n.wheel&&Xt&&Xt.id===t&&(Xt=null),n&&n.lock&&Zr("reconcile "+i.type)}for(let t of Array.from(i.changedTouches)){let n=t.identifier;if(i.type==="touchstart"){let s=Re.controls==="wheel"&&Pt==="drive"&&Hs(Vs,t.clientX,t.clientY)&&!Xt;An.set(n,{x:t.clientX,y:t.clientY,wheel:s,lock:Pt==="menu"&&Hs(le("btnLock"),t.clientX,t.clientY)}),An.get(n).lock&&Im("touch"),s&&(Xt={id:n,last:mf(t.clientX,t.clientY)}),Pt==="drive"&&Hs(le("btnHorn"),t.clientX,t.clientY)&&(gf(),le("btnHorn").classList.add("pressed"),setTimeout(()=>le("btnHorn").classList.remove("pressed"),200))}else if(i.type==="touchmove"){let s=An.get(n);if(!s)continue;s.x=t.clientX,s.y=t.clientY,s.wheel&&Xt&&Xt.id===n&&Mm(t.clientX,t.clientY)}else{let s=An.get(n);An.delete(n),s&&s.wheel&&Xt&&Xt.id===n&&(Xt=null),s&&s.lock&&Zr("touchend "+i.type)}}Kr()}for(let i of["touchstart","touchmove","touchend","touchcancel"])document.addEventListener(i,$M,{passive:!1});function JM(i,e){let t=le(i);t.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&(s.preventDefault(),Yr.set(e,!0),Kr(),lt.init(),lt.resume())});let n=s=>{s&&s.pointerType==="touch"||(Yr.delete(e),Kr())};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("pointerleave",n)}kc.forEach(i=>JM(i,Hc[i]));window.addEventListener("blur",()=>{An.clear(),Yr.clear(),Xt=null,Zr("blur"),Kr()});Vs.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(i.preventDefault(),Vs.setPointerCapture(i.pointerId),Xt={id:"mouse",last:mf(i.clientX,i.clientY)})});Vs.addEventListener("pointermove",i=>{i.pointerType==="touch"||!Xt||Xt.id!=="mouse"||Mm(i.clientX,i.clientY)});var bm=i=>{i.pointerType!=="touch"&&Xt&&Xt.id==="mouse"&&(Xt=null)};Vs.addEventListener("pointerup",bm);Vs.addEventListener("pointercancel",bm);function gf(){lt.horn(),ke.horns++,cs("horn")}le("btnHorn").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(i.preventDefault(),lt.init(),lt.resume(),gf())});le("btnCam").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(Re.cam=(Re.cam+1)%3,Cn())});le("btnFix").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&Sf()});document.addEventListener("touchend",i=>{if(Pt==="drive")for(let e of Array.from(i.changedTouches))Hs(le("btnCam"),e.clientX,e.clientY)&&(Re.cam=(Re.cam+1)%3,Cn()),Hs(le("btnPhoto"),e.clientX,e.clientY)&&yf(),!le("totaled").classList.contains("hidden")&&Hs(le("btnFix"),e.clientX,e.clientY)&&Sf()},{passive:!1});function jM(i){Xt||(Ni+=(0-Ni)*Math.min(1,9*i),Math.abs(Ni)<.3&&(Ni=0),ym.style.transform=`rotate(${Ni}deg)`),wt.wheel=Ni/af}function wm(){let i=Re.controls==="wheel";le("leftpad").classList.toggle("hidden",i),le("wheel").classList.toggle("hidden",!i),le("rightpad").classList.toggle("pedals",i),le("optCtl").textContent=i?"\u{1F3A1}":"\u{1F579}\uFE0F"}window.addEventListener("keydown",i=>{(i.code==="ArrowLeft"||i.code==="KeyA")&&(wt.left=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(wt.right=!0),(i.code==="ArrowUp"||i.code==="KeyW")&&(wt.gas=!0),(i.code==="ArrowDown"||i.code==="KeyS")&&(wt.brake=!0),(i.code==="ShiftLeft"||i.code==="Space")&&(wt.boost=!0),i.code==="KeyH"&&gf(),i.code==="KeyC"&&(Re.cam=(Re.cam+1)%3,Cn()),i.code==="KeyF"&&Sf(),i.code==="KeyP"&&yf(),i.code==="Escape"&&(Pt==="drive"?qc():Pt==="pause"&&Rm())});window.addEventListener("keyup",i=>{(i.code==="ArrowLeft"||i.code==="KeyA")&&(wt.left=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(wt.right=!1),(i.code==="ArrowUp"||i.code==="KeyW")&&(wt.gas=!1),(i.code==="ArrowDown"||i.code==="KeyS")&&(wt.brake=!1),(i.code==="ShiftLeft"||i.code==="Space")&&(wt.boost=!1)});window.addEventListener("deviceorientation",i=>{if(i.beta==null)return;let e=i.beta/22,t=screen.orientation&&screen.orientation.angle||window.orientation||0;(t===270||t===-90)&&(e=-e),wt.tilt=pi(e,-1,1)});var Sm=le("menu"),Em=le("hud"),Pt="menu";function ds(){le("carname").textContent=Vt[Re.car].name,document.querySelectorAll("#worldRow .opt").forEach(i=>i.classList.toggle("on",i.dataset.world===Re.world)),document.querySelectorAll("#timeRow .opt").forEach(i=>i.classList.toggle("on",i.dataset.time===Re.time)),le("optTraffic").classList.toggle("off",!Re.traffic),le("optSound").classList.toggle("off",!Re.sound),le("optSound").textContent=Re.sound?"\u{1F50A}":"\u{1F507}",le("optTilt").classList.toggle("off",!Re.tilt),document.querySelectorAll(".swatch").forEach((i,e)=>i.classList.toggle("on",e===Re.color))}var QM=le("colors");Wo.forEach((i,e)=>{let t=document.createElement("button");t.className="swatch",t.style.background="#"+i.toString(16).padStart(6,"0"),t.addEventListener("pointerdown",()=>{Re.color=e,Cn(),Vo(),ds()}),QM.appendChild(t)});function Tm(i){Re.car=(Re.car+i+Vt.length)%Vt.length,Cn(),Vo(),ds(),ce.menuAngle=.7,Ns(Vt[Re.car].id,!1)||Lo(Vt[Re.car].id,!1).then(()=>{Pt==="menu"&&Vt[Re.car].id===Vn.id&&Vo()})}le("prevCar").addEventListener("pointerdown",i=>{i.preventDefault(),Tm(-1)});le("nextCar").addEventListener("pointerdown",i=>{i.preventDefault(),Tm(1)});document.querySelectorAll("#worldRow .opt").forEach(i=>i.addEventListener("pointerdown",()=>{Re.world=i.dataset.world,Cn(),_e.setWorld(Re.world),Xp(),pf(),ds()}));function xf(){le("bookstars").textContent="\u2B50 "+ke.stars,le("starnum").textContent=ke.stars;let i=Object.keys(ke.stickers).length;le("bookstats").textContent=`${i} / ${gc.length} stickers \xB7 ${ke.km.toFixed(1)} km driven \xB7 ${ke.missions} missions \xB7 ${ke.deliveries} recliners delivered`;let e=le("bookgrid");e.innerHTML="";for(let t of gc){let n=document.createElement("div");n.className="sticker"+(ke.stickers[t.id]?"":" locked"),n.innerHTML=`<span class="e">${t.e}</span><span class="n">${t.n}</span>`,e.appendChild(n)}}le("btnBook").addEventListener("pointerdown",i=>{i.preventDefault(),xf(),le("book").classList.remove("hidden")});le("btnBookClose").addEventListener("pointerdown",i=>{i.preventDefault(),le("book").classList.add("hidden")});var cf=[],Vc=!1;function fs(i,e,t){if(cf.push({big:i,txt:e,confetti:t}),Vc)return;let n=()=>{let s=cf.shift();if(!s){Vc=!1;return}Vc=!0;let r=le("toast");if(r.classList.remove("hidden"),le("toastbig").textContent=s.big,le("toasttxt").textContent=s.txt,r.style.animation="none",r.offsetWidth,r.style.animation="",s.confetti){let o=le("confetti"),a=["#D0B46C","#ef4444","#3b82f6","#22c55e","#f59e0b","#ffffff"];for(let c=0;c<36;c++){let l=document.createElement("i");l.style.left=Math.random()*100+"%",l.style.background=Ho(a),l.style.animationDelay=Math.random()*.6+"s",l.style.animationDuration=1.8+Math.random()*1.2+"s",o.appendChild(l),setTimeout(()=>l.remove(),3200)}}setTimeout(()=>{r.classList.add("hidden"),setTimeout(n,150)},2300)};n()}function cs(i,e){if(Pt!=="drive")return;let t=Rn.event(i,e);t==="pickup"?(tb(),fs("GOT IT! \u{1F6CB}\uFE0F",Rn.label().text),lt.fanfare(),_f()):t==="done"&&eb()}function eb(){let i=Rn.cur;ke.stars+=i.reward,ke.missions++,i.kind==="deliver"&&(ke.deliveries++,vf()),fs("GREAT JOB!",`+${i.reward} \u2B50`,!0),lt.fanfare(!0),le("starnum").textContent=ke.stars,Os();for(let e of Uo())fs("NEW STICKER!",`${e.e} ${e.n}`);ce.missionT=3.5}function Am(){Rn.next({isMap:!!_e.road.isMap,road:_e.road,x:G.x,z:G.z,maxKmh:Vn.maxKmh,traffic:Re.traffic,showroomAt:_e.current.showroomAt}),_f(),fs(Rn.cur.icon+" "+Rn.cur.text,"New mission!")}var lm="";function _f(){let i=Rn.label(),e=i.icon+i.text+i.prog;e!==lm&&(lm=e,le("micon").textContent=i.icon,le("mtext").textContent=i.text,Rn.target()||(le("mprog").textContent=i.prog))}function tb(){hs||(hs=Kp());let i=new un().setFromObject(Tt);hs.position.set(0,i.max.y-.05,-.1),Tt.add(hs)}function vf(){hs&&hs.parent&&hs.parent.remove(hs)}document.querySelectorAll("#timeRow .opt").forEach(i=>i.addEventListener("pointerdown",()=>{Re.time=i.dataset.time,Cn(),pf(),ds()}));le("optTraffic").addEventListener("pointerdown",()=>{Re.traffic=!Re.traffic,Cn(),ds()});le("optSound").addEventListener("pointerdown",()=>{Re.sound=!Re.sound,Cn(),lt.init(),lt.setOn(Re.sound),ds()});le("optCtl").addEventListener("pointerdown",()=>{Re.controls=Re.controls==="wheel"?"buttons":"wheel",Cn(),wm()});le("optEco").addEventListener("pointerdown",()=>{Re.eco=!Re.eco,Cn(),pm()});le("optTilt").addEventListener("pointerdown",()=>{Re.tilt=!Re.tilt,Cn(),ds(),Re.tilt&&typeof DeviceOrientationEvent!="undefined"&&DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission().catch(()=>{})});le("btnPlay").addEventListener("pointerdown",i=>{i.preventDefault(),_e.road&&(lt.init(),lt.resume(),lt.setOn(Re.sound),sb())});le("btnPause").addEventListener("pointerdown",i=>{i.preventDefault(),qc()});le("btnResume").addEventListener("pointerdown",i=>{i.preventDefault(),Rm()});le("btnGarage").addEventListener("pointerdown",i=>{i.preventDefault(),wf()});function qc(){if(Pt==="drive"){Pt="pause",le("pauseov").classList.remove("hidden");for(let i in wt)i!=="tilt"&&(wt[i]=!1);An.clear(),Yr.clear(),Xt=null,Kr(),lt.engine&&lt.update(0,1,!1,!1)}}function Rm(){Pt==="pause"&&(Pt="drive",le("pauseov").classList.add("hidden"),Go.getDelta(),lt.resume())}var Wc=!1;function yf(){Pt!=="drive"||Wc||(Wc=!0)}function nb(){Wc=!1;try{let i=fm.toDataURL("image/jpeg",.9);le("polaimg").src=i,le("polaroid").classList.remove("hidden"),setTimeout(()=>le("polaroid").classList.add("hidden"),2600);let e=le("flash");e.classList.remove("go"),e.offsetWidth,e.classList.add("go"),lt.click(),Xr(20),ke.photos++,Os(),window.Android&&window.Android.savePhoto&&window.Android.savePhoto(i.split(",")[1]);for(let t of Uo())fs("NEW STICKER!",`${t.e} ${t.n}`)}catch(i){console.warn("photo failed",i)}}le("btnPhoto").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&yf()});var us=!1,Mf=0;function Cm(){Re.lock=!1,le("options").classList.toggle("locked",!!Re.lock),le("btnLock").querySelector("span").textContent=Re.lock?"\u{1F512}":"\u{1F513}"}var lf=0,Gc=[],bf=i=>{Gc.push(Math.round(performance.now())+" "+i),Gc.length>40&&Gc.shift()};function Im(i){bf("start "+i+(us?" (ignored: held)":performance.now()<lf?" (ignored: cool)":"")),!(us||performance.now()<lf)&&(us=!0,Mf=performance.now(),le("btnLock").classList.add("holding"))}function Zr(i){us&&bf("end "+i),us=!1,le("btnLock").classList.remove("holding")}function ib(){us&&performance.now()-Mf>=2e3&&(Zr("tick"),bf("toggle -> "+!Re.lock),lf=performance.now()+1500,Re.lock=!Re.lock,Cn(),Cm(),Xr(40),lt.ping(4))}le("btnLock").addEventListener("pointerdown",i=>{i.preventDefault();try{le("btnLock").setPointerCapture(i.pointerId)}catch(e){}Im("pointer "+i.pointerType)});for(let i of["pointerup","pointercancel","lostpointercapture"])le("btnLock").addEventListener(i,()=>Zr("pointer "+i));document.addEventListener("contextmenu",i=>i.preventDefault());le("options").addEventListener("pointerdown",()=>{Re.lock&&(le("lockhint").classList.remove("hidden"),setTimeout(()=>le("lockhint").classList.add("hidden"),1800))});function sb(){Pt="drive",Sm.classList.add("hidden"),Em.classList.remove("hidden"),ls.visible=!1,le("mapbox").classList.toggle("hidden",!_e.road.isMap),hf.textContent="",ce.s=40,ce.idx=10,ce.dist=0,ce.boostFuel=1,ce.damage=0,ce.totaled=!1,ce.spin=0;let i=_e.road.isMap?_e.road.startPose():_e.road.pointAt(ce.s);G=new zs(Vn),G.x=i.x,G.z=i.z,G.h=i.h,Xo(),le("totaled").classList.add("hidden"),kn.forEach(e=>{Re.traffic?_e.road.isMap?Pm(e):vm(e,!0):(e.active=!1,e.mesh&&(e.mesh.visible=!1))}),ke.cars[Vn.id]=1,le("starnum").textContent=ke.stars,ce.combo=0,ce.missionT=0,vf(),dm.clear();for(let e of["roll","pitch","heave"])jt[e].x=0,jt[e].v=0;jt.prevVf=0,jt.wasOff=!1,_e.road.ensure(_e.road.isMap?G.x:ce.idx,G.z),Am()}function Pm(i){if(i.mesh&&(gn.remove(i.mesh),Or(i.mesh)),i.spec=Ho(Vt),i.mesh=Fr(i.spec.id,!0,Ho(Wo)),gn.add(i.mesh),i.body=new zs(i.spec),i.body.mass=60,i.agent={},!_e.road.spawnAgent(i.agent,G.x,G.z)){i.active=!1,i.mesh.visible=!1;return}_e.road.advanceAgent(i.agent,0),i.body.x=i.agent.x,i.body.z=i.agent.z,i.body.h=i.agent.h,i.active=!0,i.mesh.visible=!0}function wf(){Pt="menu",Em.classList.add("hidden"),Sm.classList.remove("hidden"),le("totaled").classList.add("hidden"),le("pauseov").classList.add("hidden"),le("polaroid").classList.add("hidden");for(let i in wt)i!=="tilt"&&(wt[i]=!1);An.clear(),Yr.clear(),Xt=null,Zr("menu"),Kr(),kn.forEach(i=>{i.active=!1,i.mesh&&(i.mesh.visible=!1)}),Tt.position.set(0,0,0),Tt.rotation.set(0,0,0),ce.menuAngle=.7,ce.damage=0,ce.totaled=!1,Xo(),lt.engine&&lt.update(0,1,!1,!1),vf(),Wr.visible=!1,le("toast").classList.add("hidden"),cf.length=0,Vc=!1,Os(),xf()}function Sf(){if(Pt!=="drive")return;ce.damage=0,ce.totaled=!1,ce.spin=0,le("totaled").classList.add("hidden");let i=_e.road.nearest(G.x,G.z,ce.idx);if(_e.road.isMap)G.x=i.px,G.z=i.pz,G.h=i.h;else{let e=_e.road.pointAt(i.s+2);G.x=e.x+e.rx*Ui[1],G.z=e.z+e.rz*Ui[1],G.h=e.h}G.vx=G.vz=0,G.yawRate=0,Xo(),lt.whoosh()}function Xo(){if(!Tt)return;let i=ce.damage/100;Tt.userData.paint.forEach(e=>{e.color.setHex(Wo[Re.color]).lerp(new Ee(3158064),i*.45),e.roughness=.32+i*.5}),le("dmgfill").style.width=(100-ce.damage).toFixed(0)+"%",le("dmgfill").style.background=ce.damage<40?"#22c55e":ce.damage<75?"#f59e0b":"#ef4444"}function Dc(i){if(i<1.5)return;let e=(i-1.5)*4.2;ce.damage=Math.min(100,ce.damage+e),ce.shake=Math.max(ce.shake,Math.min(1.2,i*.08)),lt.bump(Math.min(1,i/12)),Xr(Math.min(220,30+i*12)),jt.heave.v-=Math.min(1.5,i*.08),jt.pitch.v-=Math.min(.8,i*.05);for(let t=0;t<Math.min(12,i);t++)Bc(G.x,.9,G.z,.6);Xo(),cs("hit"),ce.damage>=100&&!ce.totaled&&(ce.totaled=!0,ce.spin=(Math.random()<.5?-1:1)*2.5,le("totaled").classList.remove("hidden"))}var Go=new Lr,Gr=new P,Uc=new P,rb=le("speedval"),ob=le("dist"),ab=le("boostfill"),cb=le("btnBoost"),hf=le("street"),Lm=le("minimap"),lb=Lm.getContext("2d"),hb=0;function ub(){if(++hb%3)return;let i=Lm.width/2,e=i/210,t=lb,n=_e.road,s=n.nodes;t.clearRect(0,0,i*2,i*2),t.save(),t.beginPath(),t.arc(i,i,i-2,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,28,40,0.78)",t.fillRect(0,0,i*2,i*2),t.translate(i,i),t.rotate(G.h),t.scale(e,e),t.translate(-G.x,-G.z);let r=Math.floor(G.x/n.cell),o=Math.floor(G.z/n.cell),a=new Set;t.lineCap="round";for(let u=-4;u<=4;u++)for(let f=-4;f<=4;f++){let d=n.hash.get(n.key(r+u,o+f));if(d)for(let x of d){if(a.has(x))continue;a.add(x);let _=Math.floor(x/4096),p=x%4096,m=n.roads[_],v=s[m.n[p]],M=s[m.n[p+1]];t.strokeStyle=m.w>9?"#ffd58a":m.t==="service"||m.t==="track"?"#8a93a3":"#e8edf5",t.lineWidth=m.w*.9,t.beginPath(),t.moveTo(v[0],v[1]),t.lineTo(M[0],M[1]),t.stroke()}}let c=Math.floor(G.x/400),l=Math.floor(G.z/400);for(let u=-1;u<=1;u++)for(let f=-1;f<=1;f++)for(let d of n.tilePois.get(n.key(c+u,l+f))||[])t.fillStyle=/school/i.test(d.k)?"#60a5fa":/worship|mosque/i.test(d.k)?"#34d399":/fuel/i.test(d.k)?"#f97316":"#f472b6",t.beginPath(),t.arc(d.c[0],d.c[1],7,0,Math.PI*2),t.fill();_e.current.showroomAt&&(t.fillStyle="#D0B46C",t.beginPath(),t.arc(_e.current.showroomAt[0],_e.current.showroomAt[1],9,0,Math.PI*2),t.fill());let h=Rn.target();if(h){let u=(9+Math.sin(ks*5)*3)/e;t.strokeStyle="#ffd54a",t.lineWidth=3/e,t.beginPath(),t.arc(h[0],h[1],u,0,Math.PI*2),t.stroke(),t.fillStyle="#ffd54a",t.beginPath(),t.arc(h[0],h[1],4/e,0,Math.PI*2),t.fill()}t.restore(),t.save(),t.translate(i,i),t.fillStyle="#ef4444",t.beginPath(),t.moveTo(0,-9),t.lineTo(6,7),t.lineTo(-6,7),t.closePath(),t.fill(),t.restore()}var ef=0,tf=0,jt={roll:{x:0,v:0},pitch:{x:0,v:0},heave:{x:0,v:0},prevVf:0,wasOff:!1};function nf(i,e,t,n=90,s=11){i.v+=((e-i.x)*n-i.v*s)*t,i.x+=i.v*t}function Xr(i){if(!(Re.haptics===!1||!navigator.vibrate))try{navigator.vibrate(i)}catch(e){}}function fb(i){let e=Vn,t=e.maxKmh/3.6;if(Pt==="drive"){let n=wt.boost&&ce.boostFuel>.05&&!ce.totaled;n&&!ce.boosting&&(lt.whoosh(),ke.boosts++,cs("boost")),ce.boosting=n,ce.boostFuel=ce.boosting?Math.max(0,ce.boostFuel-i/3):Math.min(1,ce.boostFuel+i/9),ab.style.width=(ce.boostFuel*100).toFixed(0)+"%",cb.classList.toggle("cooling",ce.boostFuel<.05);let s=(wt.right?1:0)-(wt.left?1:0);Re.controls==="wheel"&&(jM(i),s===0&&(s=Math.sign(wt.wheel)*Math.pow(Math.abs(wt.wheel),1.25))),Re.tilt&&s===0&&(s=wt.tilt),ce.totaled?(G.throttle=0,G.brake=.4,G.steer=0,G.yawRate=ce.spin,ce.spin*=Math.pow(.4,i)):(G.throttle=wt.gas?1:0,G.brake=wt.brake?1:0,G.steer=s);let r=!!_e.road.isMap,o=_e.road.nearest(G.x,G.z,ce.idx);r||(ce.idx=o.i,ce.s=o.s);let a=Math.abs(o.d);if(G.offRoad=r?!o.onRoad:a>qt/2+.6,G.surfaceGrip=(G.offRoad?_e.current.offroadGrip:1)*(_e.rain?.7:1),r){(ce.frameN=(ce.frameN||0)+1)%20===0&&(ce.suburb=_e.road.suburbAt(G.x,G.z));let g=o.onRoad&&o.name?o.name:"",w=g+(ce.suburb?(g?" \xB7 ":"")+ce.suburb:"");w!==hf.textContent&&(hf.textContent=w)}if(r){let g=_e.road.humpAt(G.x,G.z);if(g&&g!==ce.lastHump){ce.lastHump=g;let w=Math.abs(G.vf);w>4&&(jt.heave.v+=Math.min(1.6,w*.09),jt.pitch.v-=Math.min(.5,w*.02),lt.bump(Math.min(.6,w/30)),Xr(Math.min(60,w*2)),w>12&&(G.vx*=.93,G.vz*=.93))}else g||(ce.lastHump=null)}let c=ce.damage/100;if(c>.5&&!ce.totaled&&(G.steer+=Math.sin(Go.elapsedTime*7)*(c-.5)*.5),G.update(i,t*(1-c*.45),e.accel*(1-c*.5),e.handling,ce.boosting),ce.dist+=Math.max(0,G.vf)*i,!r&&(_e.current.guardrail||_e.current.poles)){let g=(_e.current.guardrail?zr:qt/2+.75)-.15,w=_e.road.nearest(G.x,G.z,ce.idx);if(Math.abs(w.d)+G.halfW>g){let E=Math.sign(w.d),S=Math.abs(w.d)+G.halfW-g;G.x-=w.rx*E*S,G.z-=w.rz*E*S;let A=G.vx*w.rx*E+G.vz*w.rz*E;A>0&&(G.vx-=A*w.rx*E*1.3,G.vz-=A*w.rz*E*1.3,Dc(A),G.yawRate-=E*Math.min(1.5,A*.1)),G.vx*=1-.6*i,G.vz*=1-.6*i}}for(let g of r?_e.road.obstaclesNear(G.x,G.z):_e.road.obstaclesNear(ce.idx)){if(Math.abs(g.x-G.x)>40||Math.abs(g.z-G.z)>40)continue;let w=g.type==="circle"?tm(G,g.x,g.z,g.r):nm(G,g.x,g.z,g.hw,g.hl,g.h);w>0&&Dc(w)}for(let g of kn){if(!g.active)continue;if(r){let W=g.agent,J=g.body,ie=G.x-J.x,ve=G.z-J.z,[Ue,q]=J.fwd(),ne=ie*Ue+ve*q,we=Math.abs(ie*q-ve*Ue),Ie=ne>0&&ne<16&&we<3?Math.max(0,Math.abs(G.vf)-1):W.speed,Ve=W.speed;W.speed=Ie,_e.road.advanceAgent(W,i),W.speed=Ve,J.x+=(W.x-J.x)*Math.min(1,10*i),J.z+=(W.z-J.z)*Math.min(1,10*i);let Ne=W.h-J.h;for(;Ne>Math.PI;)Ne-=Math.PI*2;for(;Ne<-Math.PI;)Ne+=Math.PI*2;if(J.h+=Ne*Math.min(1,10*i),J.vx=Ue*Ie,J.vz=q*Ie,J.vf=Ie,Math.hypot(ie,ve)>420){Pm(g);continue}cm(g);for(let te of g.mesh.userData.wheels)te.userData.spin.rotation.x-=Ie*i/te.userData.radius;g.mesh.traverse(te=>{te.isMesh&&(te.castShadow=Math.hypot(ie,ve)<70)});let Xe=Ec(G,J);Xe>0&&Dc(Xe);continue}let w=g.body,E=_e.road.nearest(w.x,w.z,g.idx);if(g.idx=E.i,g.s=E.s,g.s<ce.s-120||g.s>ce.s+520){vm(g,g.s<ce.s);continue}let S=g.s>ce.s;g.ahead&&!S&&G.vf>2&&cs("pass"),g.ahead=S;let A=_e.road.pointAt(g.s+14+w.vf*.6),b=A.x+A.rx*Ui[g.lane],y=A.z+A.rz*Ui[g.lane],R=b-w.x,D=y-w.z,N=Math.atan2(-R,-D)-w.h;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;w.steer=pi(-N*2.2,-1,1);let V=1e9,B=Math.abs(o.d-Ui[g.lane])<2.4?ce.s-g.s:1e9;B>0&&B<V&&(V=B);for(let W of kn)if(W!==g&&W.active&&W.lane===g.lane){let J=W.s-g.s;J>0&&J<V&&(V=J)}let Z=V<12?0:V<30?Math.min(g.target,V*.6):g.target;w.throttle=w.vf<Z?.7:0,w.brake=w.vf>Z+2?.6:0,w.offRoad=Math.abs(E.d)>qt/2+.6,w.surfaceGrip=w.offRoad?.6:1,w.update(i,45,7,6,!1),cm(g);for(let W of g.mesh.userData.wheels)W.userData.spin.rotation.x-=w.vf*i/W.userData.radius,W.userData.front&&(W.rotation.y=-w.steerAngle);g.mesh.traverse(W=>{W.isMesh&&(W.castShadow=Math.abs(g.s-ce.s)<70)});let O=Ec(G,w);O>0&&Dc(O)}if(!r)for(let g=0;g<kn.length;g++)for(let w=g+1;w<kn.length;w++)kn[g].active&&kn[w].active&&Ec(kn[g].body,kn[w].body);let l=(G.vf-jt.prevVf)/Math.max(i,.001);jt.prevVf=G.vf;let h=G.yawRate*G.vf;if(nf(jt.roll,pi(-h*.011,-.11,.11)-G.vl*.006,i),nf(jt.pitch,pi(l*.0055,-.05,.05),i),nf(jt.heave,0,i),G.offRoad!==jt.wasOff&&(jt.wasOff=G.offRoad,Math.abs(G.vf)>3&&(jt.heave.v+=.5,ce.shake=Math.max(ce.shake,.2),lt.bump(.25),Xr(25))),Tt.position.set(G.x,Math.max(-.02,jt.heave.x),G.z),Tt.rotation.y=G.h,Tt.rotation.z=jt.roll.x,Tt.rotation.x=jt.pitch.x,G.offRoad){Tt.position.y+=Math.abs(G.vf)>2?Math.sin(Go.elapsedTime*31)*.03:0,ce.shake=Math.max(ce.shake,pi(Math.abs(G.vf)/20,0,.35)),tf+=i*pi(Math.abs(G.vf)/3,0,10);let g=_e.currentName==="snow"?[.95,.97,1]:_e.currentName==="desert"?[.78,.66,.45]:[.55,.47,.32];for(;tf>=1;){tf-=1;let[w,E]=G.fwd();Bc(G.x-w*(e.len/2-.5),.3,G.z-E*(e.len/2-.5),.9,g)}}for(let g of Tt.userData.wheels)g.userData.spin.rotation.x-=G.vf*i/g.userData.radius,g.userData.front&&(g.rotation.y=-G.steerAngle);Tt.userData.glow.material.opacity=ce.boosting?.8:0,ef+=i*(ce.totaled?14:ce.damage>40?(ce.damage-40)/60*8:0);let[u,f]=G.fwd();for(;ef>=1;)ef-=1,Bc(G.x+u*(e.len/2-.6),.9,G.z+f*(e.len/2-.6),ce.totaled?1.4:.8);{let g=Math.abs(G.vf),w=G.offRoad?0:Math.max(pi((Math.abs(G.vl)-2.2)/5,0,1),G.brake&&g>14&&!_e.rain?.45:0,ce.totaled&&g>3?.6:0),[E,S]=G.right(),A=G.halfL*.62,b=G.halfW-.28;dm.update(w,[[G.x-u*A-E*b,G.z-f*A-S*b],[G.x-u*A+E*b,G.z-f*A+S*b]],E,S)}rf.update(i,Ft.position.x,Ft.position.z,G.vx,G.vz);let d=qp(i,[[G.x,G.z],[G.x+u*1.7,G.z+f*1.7]],(g,w)=>{for(let E=0;E<5;E++)Bc(g,1,w,.5,[1,.85,.3])});if(d){ce.combo=ks-ce.lastStarT<1.6?ce.combo+d:0,ce.lastStarT=ks,ke.stars+=d,lt.ping(ce.combo),Xr(12),le("starnum").textContent=ke.stars;let g=le("starcount");g.classList.remove("pop"),g.offsetWidth,g.classList.add("pop");for(let w=0;w<d;w++)cs("star");for(let w of Uo())fs("NEW STICKER!",`${w.e} ${w.n}`),lt.fanfare()}let x=Math.max(0,G.vf)*i,_=Math.abs(G.vf)*3.6;if(ke.km+=x/1e3,ke.worlds[_e.currentName]=(ke.worlds[_e.currentName]||0)+x/1e3,_e.night&&(ke.nightKm+=x/1e3),_>ke.bestKmh&&(ke.bestKmh=_),cs("dist",x),cs("speed",_),cs("pos",[G.x,G.z]),ce.missionT>0&&(ce.missionT-=i,ce.missionT<=0&&Am()),Rn.cur&&!Rn.cur.done){_f();let g=Rn.target();if(g){Wr.visible=!0,Wr.position.set(g[0],0,g[1]),Wr.userData.tick(i,ks);let w=g[0]-G.x,E=g[1]-G.z,S=Math.hypot(w,E),A=Math.atan2(-w,-E)-G.h;for(;A>Math.PI;)A-=Math.PI*2;for(;A<-Math.PI;)A+=Math.PI*2;le("marrow").classList.remove("off"),le("marrow").style.transform=`rotate(${-90-A*180/Math.PI}deg)`,le("mprog").textContent=S<1e3?Math.round(S/10)*10+" m":(S/1e3).toFixed(1)+" km"}else Wr.visible=!1,le("marrow").classList.add("off")}else Wr.visible=!1,le("marrow").classList.add("off");if(ce.saveT+=i,ce.saveT>10){ce.saveT=0,Os();for(let g of Uo())fs("NEW STICKER!",`${g.e} ${g.n}`),lt.fanfare()}r?(_e.road.ensure(G.x,G.z),ub(),_e.road.tickLights&&ce.frameN%10===0&&_e.road.tickLights(ks,G.x,G.z)):_e.road.ensure(ce.idx),_e.follow(G.x,G.z,u,f),rb.textContent=Math.round(Math.abs(G.vf)*3.6),ob.textContent=(ce.dist/1e3).toFixed(1)+" km";let p=pi(Math.abs(G.vf)/t,0,1),[m,v]=G.right();if(Re.cam===0){let g=7.2+p*1.8+e.len*.2;Gr.set(G.x-u*g+m*G.vl*.08,2.7+p*.5,G.z-f*g+v*G.vl*.08),Uc.set(G.x+u*10,1,G.z+f*10),Ft.position.lerp(Gr,Math.min(1,6*i))}else if(Re.cam===1){let g=4.8+p*.8+e.len*.15;Gr.set(G.x-u*g,1.8+p*.2,G.z-f*g),Uc.set(G.x+u*10,.9,G.z+f*10),Ft.position.lerp(Gr,Math.min(1,8*i))}else Gr.set(G.x+u*(e.len/2-.9),1.15,G.z+f*(e.len/2-.9)),Uc.set(G.x+u*40,.9,G.z+f*40),Ft.position.copy(Gr);Ft.fov=ju(Ft.fov,60+p*14+(ce.boosting?8:0),Math.min(1,4*i)),Ft.updateProjectionMatrix(),ce.shake=Math.max(0,ce.shake-i*1.8);let M=ce.shake*.12+p*p*.01+(ce.boosting?.02:0);Ft.position.x+=(Math.random()-.5)*M,Ft.position.y+=(Math.random()-.5)*M,Ft.lookAt(Uc),Ft.rotation.z+=-G.yawRate*.04*pi(Math.abs(G.vf)/20,0,1),lt.update(Math.abs(G.vf),t,!!G.throttle,ce.boosting,G.vl,G.offRoad,i)}else{if(ce.menuAngle+=i*.3,!_e.road)return;let n=_e.road.isMap?_e.road.startPose():_e.road.pointAt(40);_e.road.isMap&&(n.fx=-Math.sin(n.h),n.fz=-Math.cos(n.h)),Tt.position.set(n.x,.14,n.z),Tt.rotation.y=n.h+ce.menuAngle,Tt.rotation.x=Tt.rotation.z=0,ls.visible=!0,ls.position.set(n.x,0,n.z),ls.rotation.y=n.h+ce.menuAngle;let s=4.2+Vn.len*.5;Ft.position.set(n.x+Math.sin(.8)*s,1.7+Vn.len*.08,n.z+Math.cos(.8)*s),Ft.lookAt(n.x,.7,n.z),Ft.fov=ju(Ft.fov,42,Math.min(1,4*i)),Ft.updateProjectionMatrix();for(let r of Tt.userData.wheels)r.userData.front&&(r.rotation.y=ju(r.rotation.y,0,i*3));Tt.userData.glow.material.opacity=0,_e.road.isMap?_e.road.ensure(n.x,n.z):_e.road.ensure(10),_e.follow(n.x,n.z,n.fx,n.fz),lt.engine&&lt.update(0,t,!1,!1),rf.update(i,Ft.position.x,Ft.position.z,0,0)}ZM(i)}var Nc=0,sf=0,ko=3;function db(i){if(Pt!=="drive"||(Nc+=i,sf++,Nc<4))return;let e=sf/Nc;Nc=0,sf=0,e<26&&ko>0&&(ko--,ko===2?uf=!1:ko===1?(dn.setPixelRatio(Math.min(window.devicePixelRatio||1,1)),_e.sun.shadow.mapSize.set(1024,1024),_e.sun.shadow.map&&(_e.sun.shadow.map.dispose(),_e.sun.shadow.map=null)):(dn.setPixelRatio(.8),dn.shadowMap.enabled=!1),Xc())}var ks=0,hm=0;function Dm(i){if(requestAnimationFrame(Dm),of&&i-hm<of-1)return;hm=i;let e=Math.min(.05,Go.getDelta());Pt!=="pause"&&(ks+=e),ib(),Tt&&(_e.road||Pt==="menu")&&(Pt!=="pause"&&(fb(e),db(e)),uf&&mi?mi.render():dn.render(gn,Ft),Wc&&nb())}_e.setWorld(Re.world);wm();pm();YM().then(()=>{Vo(),ds(),wf(),xf()}).catch(i=>{ff.textContent="Something went wrong: "+i,console.error(i)});Ft.position.set(6,3,7);Dm(0);document.addEventListener("visibilitychange",()=>{document.hidden?(wt.gas=wt.brake=wt.boost=!1,qc(),Os()):(lt.resume(),Go.getDelta())});Cm();window.__kidcars={G:ce,P:ke,settings:Re,missions:Rn,state:()=>Pt,hasCar:Ns,body:()=>G,simTime:()=>ks,roadReady:()=>!!_e.road,inputs:()=>({...wt}),world:()=>_e,toast:fs,addStarAhead:i=>{let[e,t]=G.fwd();for(let n=0;n<i;n++)Br(G.x+e*(8+n*4),G.z+t*(8+n*4),"test")},teleport:(i,e)=>{G.x=i,G.z=e,G.vx=G.vz=0,Ft.position.set(i+Math.sin(G.h)*8,2.7,e+Math.cos(G.h)*8)},lockDbg:()=>({held:us,heldFor:us?Math.round(performance.now()-Mf):0,state:Pt,lock:Re.lock,touches:Array.from(An.values()),log:Gc.slice()}),back:()=>Pt==="drive"?(qc(),"handled"):Pt==="pause"?(wf(),"handled"):le("book").classList.contains("hidden")?"exit":(le("book").classList.add("hidden"),"handled")};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
