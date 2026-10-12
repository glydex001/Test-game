(()=>{var iu="170";var ig=0,Bd=1,sg=2;var Po=1,dc=2,Ai=3,ci=0,rn=1,Nt=2,ai=0,dr=1,zn=2,kd=3,Hd=4,rg=5,Ss=100,og=101,ag=102,cg=103,lg=104,hg=200,ug=201,dg=202,fg=203,Nl=204,Fl=205,pg=206,mg=207,gg=208,xg=209,_g=210,vg=211,yg=212,Mg=213,bg=214,Ol=0,zl=1,Bl=2,gr=3,kl=4,Hl=5,Gl=6,Vl=7,hp=0,wg=1,Sg=2,$i=0,su=1,ru=2,ou=3,Lo=4,Eg=5,au=6,cu=7,Gd="attached",Tg="detached",up=300,xr=301,_r=302,Wl=303,Xl=304,fc=306,Li=1e3,Ci=1001,As=1002,on=1003,lu=1004;var lr=1005;var yn=1006,fo=1007;var oi=1008;var Bn=1009,dp=1010,fp=1011,vo=1012,hu=1013,Rs=1014,jn=1015,Cn=1016,uu=1017,du=1018,vr=1020,pp=35902,mp=1021,gp=1022,Fn=1023,xp=1024,_p=1025,fr=1026,yr=1027,fu=1028,pu=1029,vp=1030,mu=1031;var gu=1033,Pa=33776,La=33777,Da=33778,Ua=33779,ql=35840,Yl=35841,Kl=35842,Zl=35843,$l=36196,Jl=37492,jl=37496,Ql=37808,eh=37809,th=37810,nh=37811,ih=37812,sh=37813,rh=37814,oh=37815,ah=37816,ch=37817,lh=37818,hh=37819,uh=37820,dh=37821,Na=36492,fh=36494,ph=36495,yp=36283,mh=36284,gh=36285,xh=36286;var Mr=2300,br=2301,el=2302,Vd=2400,Wd=2401,Xd=2402,Ag=2500;var Mp=0,pc=1,Do=2,Rg=3200,Cg=3201;var bp=0,Ig=1,Ki="",Et="srgb",cn="srgb-linear",mc="linear",yt="srgb";var Ks=7680;var qd=519,Pg=512,Lg=513,Dg=514,wp=515,Ug=516,Ng=517,Fg=518,Og=519,_h=35044;var Yd="300 es",Ii=2e3,Fa=2001,ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kd=1234567,po=Math.PI/180,wr=180/Math.PI;function On(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function sn(i,e,t){return Math.max(e,Math.min(t,i))}function xu(i,e){return(i%e+e)%e}function zg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Bg(i,e,t){return i!==e?(t-i)/(e-i):0}function mo(i,e,t){return(1-t)*i+t*e}function kg(i,e,t,n){return mo(i,e,1-Math.exp(-t*n))}function Hg(i,e=1){return e-Math.abs(xu(i,e*2)-e)}function Gg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xg(i,e){return i+Math.random()*(e-i)}function qg(i){return i*(.5-Math.random())}function Yg(i){i!==void 0&&(Kd=i);let e=Kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kg(i){return i*po}function Zg(i){return i*wr}function $g(i){return(i&i-1)===0&&i!==0}function Jg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Uo={DEG2RAD:po,RAD2DEG:wr,generateUUID:On,clamp:sn,euclideanModulo:xu,mapLinear:zg,inverseLerp:Bg,lerp:mo,damp:kg,pingpong:Hg,smoothstep:Gg,smootherstep:Vg,randInt:Wg,randFloat:Xg,randFloatSpread:qg,seededRandom:Yg,degToRad:Kg,radToDeg:Zg,isPowerOfTwo:$g,ceilPowerOfTwo:Jg,floorPowerOfTwo:jg,setQuaternionFromProperEuler:Qg,normalize:St,denormalize:Jn},ae=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],b=s[4],x=s[7],v=s[2],M=s[5],E=s[8];return r[0]=o*_+a*S+c*v,r[3]=o*m+a*b+c*M,r[6]=o*p+a*x+c*E,r[1]=l*_+h*S+u*v,r[4]=l*m+h*b+u*M,r[7]=l*p+h*x+u*E,r[2]=d*_+f*S+g*v,r[5]=d*m+f*b+g*M,r[8]=d*p+f*x+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tl=new et;function Sp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function e0(){let i=yo("canvas");return i.style.display="block",i}var Zd={};function ho(i){i in Zd||(Zd[i]=!0,console.warn(i))}function t0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function n0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function i0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var it={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(i.r=pr(i.r),i.g=pr(i.g),i.b=pr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ki?mc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $d=[.64,.33,.3,.6,.15,.06],Jd=[.2126,.7152,.0722],jd=[.3127,.329],Qd=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[cn]:{primaries:$d,whitePoint:jd,transfer:mc,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:Jd,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:$d,whitePoint:jd,transfer:yt,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:Jd,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}});var Zs,vh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=yo("canvas")),Zs.width=e.width,Zs.height=e.height;let n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},s0=0,Oa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var r0=0,Jt=class i extends ji{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ci,s=Ci,r=yn,o=oi,a=Fn,c=Bn,l=i.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=On(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case As:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case As:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=up;Jt.DEFAULT_ANISOTROPY=1;var dt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,x=(f+1)/2,v=(p+1)/2,M=(h+d)/4,E=(u+_)/4,R=(g+m)/4;return b>x&&b>v?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=M/n,r=E/n):x>v?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=R/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=E/r,s=R/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yh=class extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Oa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends yh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},za=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mh=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*_,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let v=Math.sqrt(b),M=Math.atan2(v,p*S);m=Math.sin(m*M)/v,a=Math.sin(a*M)/v}let x=a*S;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new D,tf=new jt,pn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),na.subVectors(this.max,no),$s.subVectors(e.a,no),Js.subVectors(e.b,no),js.subVectors(e.c,no),Gi.subVectors(Js,$s),Vi.subVectors(js,Js),xs.subVectors($s,js);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-xs.z,xs.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,xs.z,0,-xs.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-xs.y,xs.x,0];return!sl(t,$s,Js,js,na)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,$s,Js,js,na))?!1:(ia.crossVectors(Gi,Vi),t=[ia.x,ia.y,ia.z],sl(t,$s,Js,js,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new D,new D,new D,new D,new D,new D,new D,new D],Kn=new D,ta=new pn,$s=new D,Js=new D,js=new D,Gi=new D,Vi=new D,xs=new D,no=new D,na=new D,ia=new D,_s=new D;function sl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_s.fromArray(i,r);let a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=e.dot(_s),l=t.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var o0=new pn,io=new D,rl=new D,Tn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):o0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);let t=io.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(io,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(rl)),this.expandByPoint(io.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new D,ol=new D,sa=new D,Wi=new D,al=new D,ra=new D,cl=new D,Sr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ol.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=Wi.dot(this.direction),c=-Wi.dot(sa),l=Wi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ol).addScaledVector(sa,d),f}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,s,r){al.subVectors(t,e),ra.subVectors(n,e),cl.crossVectors(al,ra);let o=this.direction.dot(cl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);let c=a*this.direction.dot(ra.crossVectors(Wi,ra));if(c<0)return null;let l=a*this.direction.dot(al.cross(Wi));if(l<0||c+l>o)return null;let h=-a*Wi.dot(cl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),r=1/Qs.setFromMatrixColumn(e,1).length(),o=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a0,e,c0)}lookAt(e,t,n){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Xi.crossVectors(n,Sn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Xi.crossVectors(n,Sn)),Xi.normalize(),oa.crossVectors(Sn,Xi),s[0]=Xi.x,s[4]=oa.x,s[8]=Sn.x,s[1]=Xi.y,s[5]=oa.y,s[9]=Sn.y,s[2]=Xi.z,s[6]=oa.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],b=n[7],x=n[11],v=n[15],M=s[0],E=s[4],R=s[8],y=s[12],w=s[1],T=s[5],P=s[9],U=s[13],N=s[2],k=s[6],F=s[10],W=s[14],z=s[3],ee=s[7],j=s[11],te=s[15];return r[0]=o*M+a*w+c*N+l*z,r[4]=o*E+a*T+c*k+l*ee,r[8]=o*R+a*P+c*F+l*j,r[12]=o*y+a*U+c*W+l*te,r[1]=h*M+u*w+d*N+f*z,r[5]=h*E+u*T+d*k+f*ee,r[9]=h*R+u*P+d*F+f*j,r[13]=h*y+u*U+d*W+f*te,r[2]=g*M+_*w+m*N+p*z,r[6]=g*E+_*T+m*k+p*ee,r[10]=g*R+_*P+m*F+p*j,r[14]=g*y+_*U+m*W+p*te,r[3]=S*M+b*w+x*N+v*z,r[7]=S*E+b*T+x*k+v*ee,r[11]=S*R+b*P+x*F+v*j,r[15]=S*y+b*U+x*W+v*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,b=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,v=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,M=t*S+n*b+s*x+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/M;return e[0]=S*E,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*E,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*E,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*E,e[4]=b*E,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*E,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*E,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*E,e[8]=x*E,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*E,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*E,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*E,e[12]=v*E,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*E,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*E,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,S=c*l,b=c*h,x=c*u,v=n.x,M=n.y,E=n.z;return s[0]=(1-(_+p))*v,s[1]=(f+x)*v,s[2]=(g-b)*v,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+p))*M,s[6]=(m+S)*M,s[7]=0,s[8]=(g+b)*E,s[9]=(m-S)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Qs.set(s[0],s[1],s[2]).length(),o=Qs.set(s[4],s[5],s[6]).length(),a=Qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);let l=1/r,h=1/o,u=1/a;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ii){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===Ii)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Fa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ii){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h,g,_;if(a===Ii)g=(o+r)*u,_=-2*u;else if(a===Fa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qs=new D,Zn=new We,a0=new D(0,0,0),c0=new D(1,1,1),Xi=new D,oa=new D,Sn=new D,nf=new We,sf=new jt,an=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sf.setFromEuler(this),this.setFromQuaternion(sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},l0=0,rf=new D,er=new jt,wi=new We,aa=new D,so=new D,h0=new D,u0=new jt,of=new D(1,0,0),af=new D(0,1,0),cf=new D(0,0,1),lf={type:"added"},d0={type:"removed"},tr={type:"childadded",child:null},ll={type:"childremoved",child:null},Ft=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new an,n=new jt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new et}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(of,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(cf,e)}translateOnAxis(e,t){return rf.copy(e).applyQuaternion(this.quaternion),this.position.add(rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(of,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(so,aa,this.up):wi.lookAt(aa,so,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),er.setFromRotationMatrix(wi),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lf),tr.child=e,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(d0),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lf),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,h0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,u0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new D(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new D,Si=new D,hl=new D,Ei=new D,nr=new D,ir=new D,hf=new D,ul=new D,dl=new D,fl=new D,pl=new dt,ml=new dt,gl=new dt,Es=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Si.subVectors(n,t),hl.subVectors(e,t);let o=$n.dot($n),a=$n.dot(Si),c=$n.dot(hl),l=Si.dot(Si),h=Si.dot(hl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(o,Ei.y),c.addScaledVector(a,Ei.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Si.subVectors(e,t),$n.cross(Si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),$n.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;nr.subVectors(s,n),ir.subVectors(r,n),ul.subVectors(e,n);let c=nr.dot(ul),l=ir.dot(ul);if(c<=0&&l<=0)return t.copy(n);dl.subVectors(e,s);let h=nr.dot(dl),u=ir.dot(dl);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(nr,o);fl.subVectors(e,r);let f=nr.dot(fl),g=ir.dot(fl);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ir,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return hf.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(hf,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function xl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=xu(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xl(o,r,e+1/3),this.g=xl(o,r,e),this.b=xl(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=Ep[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return it.fromWorkingColorSpace(fn.copy(this),e),Math.round(sn(fn.r*255,0,255))*65536+Math.round(sn(fn.g*255,0,255))*256+Math.round(sn(fn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(fn.copy(this),t);let n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Et){it.fromWorkingColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,s=fn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(ca);let n=mo(qi.h,ca.h,t),s=mo(qi.s,ca.s,t),r=mo(qi.l,ca.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Te;Te.NAMES=Ep;var f0=0,An=class extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=On(),this.name="",this.blending=dr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Fl,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Fl&&(n.blendDst=this.blendDst),this.blendEquation!==Ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Bt=class extends An{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new D,la=new ae,Ge=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}};var ka=class extends Ge{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ha=class extends Ge{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Ge{constructor(e,t,n){super(new Float32Array(e),t,n)}},p0=0,Nn=new We,_l=new Ft,sr=new D,En=new pn,ro=new pn,nn=new D,rt=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?Ha:ka)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(En.min,ro.min),En.expandByPoint(nn),nn.addVectors(En.max,ro.max),En.expandByPoint(nn)):(En.expandByPoint(ro.min),En.expandByPoint(ro.max))}En.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)nn.fromBufferAttribute(a,l),c&&(sr.fromBufferAttribute(e,l),nn.add(sr)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new D,c[R]=new D;let l=new D,h=new D,u=new D,d=new ae,f=new ae,g=new ae,_=new D,m=new D;function p(R,y,w){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,w),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),a[R].add(_),a[y].add(_),a[w].add(_),c[R].add(m),c[y].add(m),c[w].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,y=S.length;R<y;++R){let w=S[R],T=w.start,P=w.count;for(let U=T,N=T+P;U<N;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let b=new D,x=new D,v=new D,M=new D;function E(R){v.fromBufferAttribute(s,R),M.copy(v);let y=a[R];b.copy(y),b.sub(v.multiplyScalar(v.dot(y))).normalize(),x.crossVectors(M,y);let T=x.dot(c[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,T)}for(let R=0,y=S.length;R<y;++R){let w=S[R],T=w.start,P=w.count;for(let U=T,N=T+P;U<N;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uf=new We,vs=new Sr,ha=new Tn,df=new D,ua=new D,da=new D,fa=new D,vl=new D,pa=new D,ff=new D,ma=new D,de=class extends Ft{constructor(e=new rt,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){pa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(vl.fromBufferAttribute(u,e),o?pa.addScaledVector(vl,h):pa.addScaledVector(vl.sub(t),h))}t.add(pa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(ha.containsPoint(vs.origin)===!1&&(vs.intersectSphere(ha,df)===null||vs.origin.distanceToSquared(df)>(e.far-e.near)**2))&&(uf.copy(r).invert(),vs.copy(e.ray).applyMatrix4(uf),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,v=b;x<v;x+=3){let M=a.getX(x),E=a.getX(x+1),R=a.getX(x+2);s=ga(this,p,e,n,l,h,u,M,E,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=ga(this,o,e,n,l,h,u,S,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,v=b;x<v;x+=3){let M=x,E=x+1,R=x+2;s=ga(this,p,e,n,l,h,u,M,E,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=m,b=m+1,x=m+2;s=ga(this,o,e,n,l,h,u,S,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function m0(i,e,t,n,s,r,o,a){let c;if(e.side===rn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ci,a),c===null)return null;ma.copy(a),ma.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ma);return l<t.near||l>t.far?null:{distance:l,point:ma.clone(),object:i}}function ga(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ua),i.getVertexPosition(c,da),i.getVertexPosition(l,fa);let h=m0(i,e,t,n,ua,da,fa,ff);if(h){let u=new D;Es.getBarycoord(ff,ua,da,fa,u),s&&(h.uv=Es.getInterpolatedAttribute(s,a,c,l,u,new ae)),r&&(h.uv1=Es.getInterpolatedAttribute(r,a,c,l,u,new ae)),o&&(h.normal=Es.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};Es.getNormal(ua,da,fa,d.normal),h.face=d,h.barycoord=u}return h}var at=class i extends rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(_,m,p,S,b,x,v,M,E,R,y){let w=x/E,T=v/R,P=x/2,U=v/2,N=M/2,k=E+1,F=R+1,W=0,z=0,ee=new D;for(let j=0;j<F;j++){let te=j*T-U;for(let ue=0;ue<k;ue++){let ye=ue*w-P;ee[_]=ye*S,ee[m]=te*b,ee[p]=N,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=M>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(ue/E),u.push(1-j/R),W+=1}}for(let j=0;j<R;j++)for(let te=0;te<E;te++){let ue=d+te+k*j,ye=d+te+k*(j+1),X=d+(te+1)+k*(j+1),se=d+(te+1)+k*j;c.push(ue,ye,se),c.push(ye,X,se),z+=6}a.addGroup(f,z,y),f+=z,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Er(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=Er(i[t]);for(let s in n)e[s]=n[s]}return e}function g0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var hi={clone:Er,merge:xn},x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends An{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=g0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ga=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yi=new D,pf=new ae,mf=new ae,$t=class extends Ga{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,pf,mf),t.subVectors(mf,pf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(po*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rr=-90,or=1,bh=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(rr,or,e,t);s.layers=this.layers,this.add(s);let r=new $t(rr,or,e,t);r.layers=this.layers,this.add(r);let o=new $t(rr,or,e,t);o.layers=this.layers,this.add(o);let a=new $t(rr,or,e,t);a.layers=this.layers,this.add(a);let c=new $t(rr,or,e,t);c.layers=this.layers,this.add(c);let l=new $t(rr,or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Va=class extends Jt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wh=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Va(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new at(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ai});r.uniforms.tEquirect.value=t;let o=new de(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=yn),new bh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},yl=new D,v0=new D,y0=new et,Ri=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=yl.subVectors(n,t).cross(v0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(yl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||y0.getNormalMatrix(e),s=this.coplanarPoint(yl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new Tn,xa=new D,Mo=class{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],b=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+S).normalize(),n[3].setComponents(c-o,d-h,m-g,x-S).normalize(),n[4].setComponents(c-a,d-u,m-_,x-b).normalize(),t===Ii)n[5].setComponents(c+a,d+u,m+_,x+b).normalize();else if(t===Fa)n[5].setComponents(a,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ap(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function M0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Yt=class i extends rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*d-o;for(let b=0;b<l;b++){let x=b*u-r;g.push(x,-S,0),_.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let b=S+l*p,x=S+l*(p+1),v=S+1+l*(p+1),M=S+1+l*p;f.push(b,x,M),f.push(x,v,M)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},b0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
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
#endif`,C0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
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
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N0=`#ifdef USE_IRIDESCENCE
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
#endif`,F0=`#ifdef USE_BUMPMAP
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,X0=`#define PI 3.141592653589793
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
} // validated`,q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y0=`vec3 transformedNormal = objectNormal;
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
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
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
}`,hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
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
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vx=`PhysicalMaterial material;
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
#endif`,yx=`struct PhysicalMaterial {
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
}`,Mx=`
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Px=`#if defined( USE_POINTS_UV )
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
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
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
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
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
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o_=`float getShadowMask() {
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
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c_=`#ifdef USE_SKINNING
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
#endif`,l_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,u_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m_=`#ifdef USE_TRANSMISSION
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
#endif`,g_=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b_=`uniform sampler2D t2D;
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
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
}`,R_=`#if DEPTH_PACKING == 3200
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
}`,C_=`#define DISTANCE
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
}`,I_=`#define DISTANCE
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`uniform float scale;
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
}`,U_=`uniform vec3 diffuse;
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
}`,N_=`#include <common>
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
}`,F_=`uniform vec3 diffuse;
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
}`,O_=`#define LAMBERT
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
}`,z_=`#define LAMBERT
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
}`,B_=`#define MATCAP
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
}`,k_=`#define MATCAP
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
}`,H_=`#define NORMAL
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
}`,G_=`#define NORMAL
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
}`,V_=`#define PHONG
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
}`,W_=`#define PHONG
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
}`,X_=`#define STANDARD
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
}`,q_=`#define STANDARD
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
}`,Y_=`#define TOON
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
}`,K_=`#define TOON
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
}`,Z_=`uniform float size;
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
}`,$_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,j_=`uniform vec3 color;
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
}`,Q_=`uniform float rotation;
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
}`,ev=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:b0,alphahash_pars_fragment:w0,alphamap_fragment:S0,alphamap_pars_fragment:E0,alphatest_fragment:T0,alphatest_pars_fragment:A0,aomap_fragment:R0,aomap_pars_fragment:C0,batching_pars_vertex:I0,batching_vertex:P0,begin_vertex:L0,beginnormal_vertex:D0,bsdfs:U0,iridescence_fragment:N0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:k0,color_fragment:H0,color_pars_fragment:G0,color_pars_vertex:V0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:q0,defaultnormal_vertex:Y0,displacementmap_pars_vertex:K0,displacementmap_vertex:Z0,emissivemap_fragment:$0,emissivemap_pars_fragment:J0,colorspace_fragment:j0,colorspace_pars_fragment:Q0,envmap_fragment:ex,envmap_common_pars_fragment:tx,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:px,envmap_vertex:sx,fog_vertex:rx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:cx,gradientmap_pars_fragment:lx,lightmap_pars_fragment:hx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:dx,lights_pars_begin:fx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:xx,lights_phong_pars_fragment:_x,lights_physical_fragment:vx,lights_physical_pars_fragment:yx,lights_fragment_begin:Mx,lights_fragment_maps:bx,lights_fragment_end:wx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:Rx,map_pars_fragment:Cx,map_particle_fragment:Ix,map_particle_pars_fragment:Px,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Ux,morphcolor_vertex:Nx,morphnormal_vertex:Fx,morphtarget_pars_vertex:Ox,morphtarget_vertex:zx,normal_fragment_begin:Bx,normal_fragment_maps:kx,normal_pars_fragment:Hx,normal_pars_vertex:Gx,normal_vertex:Vx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:Yx,iridescence_pars_fragment:Kx,opaque_fragment:Zx,packing:$x,premultiplied_alpha_fragment:Jx,project_vertex:jx,dithering_fragment:Qx,dithering_pars_fragment:e_,roughnessmap_fragment:t_,roughnessmap_pars_fragment:n_,shadowmap_pars_fragment:i_,shadowmap_pars_vertex:s_,shadowmap_vertex:r_,shadowmask_pars_fragment:o_,skinbase_vertex:a_,skinning_pars_vertex:c_,skinning_vertex:l_,skinnormal_vertex:h_,specularmap_fragment:u_,specularmap_pars_fragment:d_,tonemapping_fragment:f_,tonemapping_pars_fragment:p_,transmission_fragment:m_,transmission_pars_fragment:g_,uv_pars_fragment:x_,uv_pars_vertex:__,uv_vertex:v_,worldpos_vertex:y_,background_vert:M_,background_frag:b_,backgroundCube_vert:w_,backgroundCube_frag:S_,cube_vert:E_,cube_frag:T_,depth_vert:A_,depth_frag:R_,distanceRGBA_vert:C_,distanceRGBA_frag:I_,equirect_vert:P_,equirect_frag:L_,linedashed_vert:D_,linedashed_frag:U_,meshbasic_vert:N_,meshbasic_frag:F_,meshlambert_vert:O_,meshlambert_frag:z_,meshmatcap_vert:B_,meshmatcap_frag:k_,meshnormal_vert:H_,meshnormal_frag:G_,meshphong_vert:V_,meshphong_frag:W_,meshphysical_vert:X_,meshphysical_frag:q_,meshtoon_vert:Y_,meshtoon_frag:K_,points_vert:Z_,points_frag:$_,shadow_vert:J_,shadow_frag:j_,sprite_vert:Q_,sprite_frag:ev},Se={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ri={basic:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Te(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:xn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:xn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Te(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:xn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:xn([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:xn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:xn([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:xn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:xn([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:xn([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:xn([Se.lights,Se.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ri.physical={uniforms:xn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var _a={r:0,b:0,g:0},Ms=new an,tv=new We;function nv(i,e,t,n,s,r,o){let a=new Te(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?t:e).get(b)),b}function _(S){let b=!1,x=g(S);x===null?p(a,c):x&&x.isColor&&(p(x,1),b=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,b){let x=g(b);x&&(x.isCubeTexture||x.mapping===fc)?(h===void 0&&(h=new de(new at(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Er(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(v,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ms.copy(b.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tv.makeRotationFromEuler(Ms)),h.material.toneMapped=it.getTransfer(x.colorSpace)!==yt,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new de(new Yt(2,2),new Ot({name:"BackgroundMaterial",uniforms:Er(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=it.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,b){S.getRGB(_a,Tp(i)),n.buffers.color.setClear(_a.r,_a.g,_a.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:m}}function iv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(w,T,P,U,N){let k=!1,F=u(U,P,T);r!==F&&(r=F,l(r.object)),k=f(w,U,P,N),k&&g(w,U,P,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(w,T,P,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,T,P){let U=P.wireframe===!0,N=n[w.id];N===void 0&&(N={},n[w.id]=N);let k=N[T.id];k===void 0&&(k={},N[T.id]=k);let F=k[U];return F===void 0&&(F=d(c()),k[U]=F),F}function d(w){let T=[],P=[],U=[];for(let N=0;N<t;N++)T[N]=0,P[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:P,attributeDivisors:U,object:w,attributes:{},index:null}}function f(w,T,P,U){let N=r.attributes,k=T.attributes,F=0,W=P.getAttributes();for(let z in W)if(W[z].location>=0){let j=N[z],te=k[z];if(te===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(te=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(te=w.instanceColor)),j===void 0||j.attribute!==te||te&&j.data!==te.data)return!0;F++}return r.attributesNum!==F||r.index!==U}function g(w,T,P,U){let N={},k=T.attributes,F=0,W=P.getAttributes();for(let z in W)if(W[z].location>=0){let j=k[z];j===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(j=w.instanceColor));let te={};te.attribute=j,j&&j.data&&(te.data=j.data),N[z]=te,F++}r.attributes=N,r.attributesNum=F,r.index=U}function _(){let w=r.newAttributes;for(let T=0,P=w.length;T<P;T++)w[T]=0}function m(w){p(w,0)}function p(w,T){let P=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;P[w]=1,U[w]===0&&(i.enableVertexAttribArray(w),U[w]=1),N[w]!==T&&(i.vertexAttribDivisor(w,T),N[w]=T)}function S(){let w=r.newAttributes,T=r.enabledAttributes;for(let P=0,U=T.length;P<U;P++)T[P]!==w[P]&&(i.disableVertexAttribArray(P),T[P]=0)}function b(w,T,P,U,N,k,F){F===!0?i.vertexAttribIPointer(w,T,P,N,k):i.vertexAttribPointer(w,T,P,U,N,k)}function x(w,T,P,U){_();let N=U.attributes,k=P.getAttributes(),F=T.defaultAttributeValues;for(let W in k){let z=k[W];if(z.location>=0){let ee=N[W];if(ee===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor)),ee!==void 0){let j=ee.normalized,te=ee.itemSize,ue=e.get(ee);if(ue===void 0)continue;let ye=ue.buffer,X=ue.type,se=ue.bytesPerElement,ge=X===i.INT||X===i.UNSIGNED_INT||ee.gpuType===hu;if(ee.isInterleavedBufferAttribute){let he=ee.data,Ne=he.stride,Oe=ee.offset;if(he.isInstancedInterleavedBuffer){for(let Fe=0;Fe<z.locationSize;Fe++)p(z.location+Fe,he.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Fe=0;Fe<z.locationSize;Fe++)m(z.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Fe=0;Fe<z.locationSize;Fe++)b(z.location+Fe,te/z.locationSize,X,j,Ne*se,(Oe+te/z.locationSize*Fe)*se,ge)}else{if(ee.isInstancedBufferAttribute){for(let he=0;he<z.locationSize;he++)p(z.location+he,ee.meshPerAttribute);w.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let he=0;he<z.locationSize;he++)m(z.location+he);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let he=0;he<z.locationSize;he++)b(z.location+he,te/z.locationSize,X,j,te*se,te/z.locationSize*he*se,ge)}}else if(F!==void 0){let j=F[W];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(z.location,j);break;case 3:i.vertexAttrib3fv(z.location,j);break;case 4:i.vertexAttrib4fv(z.location,j);break;default:i.vertexAttrib1fv(z.location,j)}}}}S()}function v(){R();for(let w in n){let T=n[w];for(let P in T){let U=T[P];for(let N in U)h(U[N].object),delete U[N];delete T[P]}delete n[w]}}function M(w){if(n[w.id]===void 0)return;let T=n[w.id];for(let P in T){let U=T[P];for(let N in U)h(U[N].object),delete U[N];delete T[P]}delete n[w.id]}function E(w){for(let T in n){let P=n[T];if(P[w.id]===void 0)continue;let U=P[w.id];for(let N in U)h(U[N].object),delete U[N];delete P[w.id]}}function R(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function sv(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Fn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let R=E===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Bn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==jn&&!R)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:v,maxSamples:M}}function ov(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ri,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,b=S*4,x=p.clippingState||null;c.value=x,x=h(g,d,b,f);for(let v=0;v!==b;++v)x[v]=t[v];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=f;b!==_;++b,x+=4)o.copy(u[b]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function av(i){let e=new WeakMap;function t(o,a){return a===Wl?o.mapping=xr:a===Xl&&(o.mapping=_r),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wl||a===Xl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new wh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qi=class extends Ga{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hr=4,gf=[.125,.215,.35,.446,.526,.582],Ts=20,Ml=new Qi,xf=new Te,bl=null,wl=0,Sl=0,El=!1,ws=(1+Math.sqrt(5))/2,ar=1/ws,_f=[new D(-ws,ar,0),new D(ws,ar,0),new D(-ar,0,ws),new D(ar,0,ws),new D(0,ws,-ar),new D(0,ws,ar),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Tr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,wl,Sl),this._renderer.xr.enabled=El,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Cn,format:Fn,colorSpace:cn,depthBuffer:!1},s=vf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cv(r)),this._blurMaterial=lv(r,e,t)}return s}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,s){let a=new $t(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xf),h.toneMapping=$i,h.autoClear=!1;let f=new Bt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new de(new at,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(xf),_=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let b=this._cubeSize;va(s,S*b,p>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===xr||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;va(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ml)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_f[(s-r-1)%_f.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ts-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ts;m>Ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);let p=[],S=0;for(let E=0;E<Ts;++E){let R=E/_,y=Math.exp(-R*R/2);p.push(y),E===0?S+=y:E<m&&(S+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let x=this._sizeLods[s],v=3*x*(s>b-hr?s-b+hr:0),M=4*(this._cubeSize-x);va(t,v,M,3*x,2*x),c.setRenderTarget(t),c.render(u,Ml)}};function cv(i){let e=[],t=[],n=[],s=i,r=i-hr+1+gf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-hr?c=gf[o-i+hr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),b=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let M=0;M<f;M++){let E=M%3*2/3-1,R=M>2?0:-1,y=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];S.set(y,_*g*M),b.set(d,m*g*M);let w=[M,M,M,M,M,M];x.set(w,p*g*M)}let v=new rt;v.setAttribute("position",new Ge(S,_)),v.setAttribute("uv",new Ge(b,m)),v.setAttribute("faceIndex",new Ge(x,p)),e.push(v),s>hr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vf(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=fc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lv(i,e,t){let n=new Float32Array(Ts),s=new D(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_u(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function yf(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Mf(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}function hv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Wl||c===Xl,h=c===xr||c===_r;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Tr(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Tr(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function uv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ho("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dv(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let S=f.array;_=f.version;for(let b=0,x=S.length;b<x;b+=3){let v=S[b+0],M=S[b+1],E=S[b+2];d.push(v,M,M,E,E,v)}}else if(g!==void 0){let S=g.array;_=g.version;for(let b=0,x=S.length/3-1;b<x;b+=3){let v=b+0,M=b+1,E=b+2;d.push(v,M,M,E,E,v)}}else return;let m=new(Sp(d)?Ha:ka)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function fv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function pv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mv(i,e,t){let n=new WeakMap,s=new dt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,v=1;x>e.maxTextureSize&&(v=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*v*4*u),E=new za(M,x,v,u);E.type=jn,E.needsUpdate=!0;let R=b*4;for(let w=0;w<u;w++){let T=m[w],P=p[w],U=S[w],N=x*v*4*w;for(let k=0;k<T.count;k++){let F=k*R;f===!0&&(s.fromBufferAttribute(T,k),M[N+F+0]=s.x,M[N+F+1]=s.y,M[N+F+2]=s.z,M[N+F+3]=0),g===!0&&(s.fromBufferAttribute(P,k),M[N+F+4]=s.x,M[N+F+5]=s.y,M[N+F+6]=s.z,M[N+F+7]=0),_===!0&&(s.fromBufferAttribute(U,k),M[N+F+8]=s.x,M[N+F+9]=s.y,M[N+F+10]=s.z,M[N+F+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new ae(x,v)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function gv(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Wa=class extends Jt{constructor(e,t,n,s,r,o,a,c,l,h=fr){if(h!==fr&&h!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fr&&(n=Rs),n===void 0&&h===yr&&(n=vr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rp=new Jt,bf=new Wa(1,1),Cp=new za,Ip=new Mh,Pp=new Va,wf=[],Sf=[],Ef=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function Fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gc(i,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function Mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Af.set(n),i.uniformMatrix2fv(this.addr,!1,Af),en(t,n)}}function bv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Tf.set(n),i.uniformMatrix3fv(this.addr,!1,Tf),en(t,n)}}function wv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Ef.set(n),i.uniformMatrix4fv(this.addr,!1,Ef),en(t,n)}}function Sv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function Rv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function Lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bf.compareFunction=wp,r=bf):r=Rp,t.setTexture2D(e||r,s)}function Dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ip,s)}function Uv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pp,s)}function Nv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cp,s)}function Fv(i){switch(i){case 5126:return xv;case 35664:return _v;case 35665:return vv;case 35666:return yv;case 35674:return Mv;case 35675:return bv;case 35676:return wv;case 5124:case 35670:return Sv;case 35667:case 35671:return Ev;case 35668:case 35672:return Tv;case 35669:case 35673:return Av;case 5125:return Rv;case 36294:return Cv;case 36295:return Iv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Ov(i,e){i.uniform1fv(this.addr,e)}function zv(i,e){let t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Bv(i,e){let t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function kv(i,e){let t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Hv(i,e){let t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Gv(i,e){let t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vv(i,e){let t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wv(i,e){i.uniform1iv(this.addr,e)}function Xv(i,e){i.uniform2iv(this.addr,e)}function qv(i,e){i.uniform3iv(this.addr,e)}function Yv(i,e){i.uniform4iv(this.addr,e)}function Kv(i,e){i.uniform1uiv(this.addr,e)}function Zv(i,e){i.uniform2uiv(this.addr,e)}function $v(i,e){i.uniform3uiv(this.addr,e)}function Jv(i,e){i.uniform4uiv(this.addr,e)}function jv(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Rp,r[o])}function Qv(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ip,r[o])}function ey(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pp,r[o])}function ty(i,e,t){let n=this.cache,s=e.length,r=gc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cp,r[o])}function ny(i){switch(i){case 5126:return Ov;case 35664:return zv;case 35665:return Bv;case 35666:return kv;case 35674:return Hv;case 35675:return Gv;case 35676:return Vv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return Kv;case 36294:return Zv;case 36295:return $v;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}var Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fv(t.type)}},Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ny(t.type)}},Th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;function Rf(i,e){i.seq.push(e),i.map[e.id]=e}function iy(i,e,t){let n=i.name,s=n.length;for(Tl.lastIndex=0;;){let r=Tl.exec(n),o=Tl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Rf(t,l===void 0?new Sh(a,i,e):new Eh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Th(a),Rf(t,u)),t=u}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);iy(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Cf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var sy=37297,ry=0;function oy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var If=new et;function ay(i){it._getMatrix(If,it.workingColorSpace,i);let e=`mat3( ${If.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case mc:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+oy(i.getShaderSource(e),o)}else return s}function cy(i,e){let t=ay(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ly(i,e){let t;switch(e){case su:t="Linear";break;case ru:t="Reinhard";break;case ou:t="Cineon";break;case Lo:t="ACESFilmic";break;case au:t="AgX";break;case cu:t="Neutral";break;case Eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ya=new D;function hy(){it.getLuminanceCoefficients(ya);let i=ya.x.toFixed(4),e=ya.y.toFixed(4),t=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function dy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function uo(i){return i!==""}function Lf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var py=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(i){return i.replace(py,gy)}var my=new Map;function gy(i,e){let t=nt[e];if(t===void 0){let n=my.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ah(t)}var xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(i){return i.replace(xy,_y)}function _y(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function vy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Po?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function yy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case _r:e="ENVMAP_TYPE_CUBE";break;case fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function My(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function by(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hp:e="ENVMAP_BLENDING_MULTIPLY";break;case wg:e="ENVMAP_BLENDING_MIX";break;case Sg:e="ENVMAP_BLENDING_ADD";break}return e}function wy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Sy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=vy(t),l=yy(t),h=My(t),u=by(t),d=wy(t),f=uy(t),g=dy(r),_=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),p.length>0&&(p+=`
`)):(m=[Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),p=[Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?nt.tonemapping_pars_fragment:"",t.toneMapping!==$i?ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,cy("linearToOutputTexel",t.outputColorSpace),hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uo).join(`
`)),o=Ah(o),o=Lf(o,t),o=Df(o,t),a=Ah(a),a=Lf(a,t),a=Df(a,t),o=Uf(o),a=Uf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+m+o,x=S+p+a,v=Cf(s,s.VERTEX_SHADER,b),M=Cf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,v),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(T){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(v).trim(),N=s.getShaderInfoLog(M).trim(),k=!0,F=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,M);else{let W=Pf(s,v,"vertex"),z=Pf(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+P+`
`+W+`
`+z)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(U===""||N==="")&&(F=!1);F&&(T.diagnostics={runnable:k,programLog:P,vertexShader:{log:U,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(v),s.deleteShader(M),R=new mr(s,_),y=fy(s,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,sy)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ry++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=M,this}var Ey=0,Rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ch(e),t.set(e,n)),n}},Ch=class{constructor(e){this.id=Ey++,this.code=e,this.usedTimes=0}};function Ty(i,e,t,n,s,r,o){let a=new Ba,c=new Rh,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,w,T,P,U){let N=P.fog,k=U.geometry,F=y.isMeshStandardMaterial?P.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),z=W&&W.mapping===fc?W.image.height:null,ee=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=j!==void 0?j.length:0,ue=0;k.morphAttributes.position!==void 0&&(ue=1),k.morphAttributes.normal!==void 0&&(ue=2),k.morphAttributes.color!==void 0&&(ue=3);let ye,X,se,ge;if(ee){let wt=ri[ee];ye=wt.vertexShader,X=wt.fragmentShader}else ye=y.vertexShader,X=y.fragmentShader,c.update(y),se=c.getVertexShaderID(y),ge=c.getFragmentShaderID(y);let he=i.getRenderTarget(),Ne=i.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,Fe=U.isBatchedMesh===!0,Ze=!!y.map,ne=!!y.matcap,fe=!!W,L=!!y.aoMap,De=!!y.lightMap,ce=!!y.bumpMap,Me=!!y.normalMap,pe=!!y.displacementMap,re=!!y.emissiveMap,$=!!y.metalnessMap,C=!!y.roughnessMap,A=y.anisotropy>0,O=y.clearcoat>0,Y=y.dispersion>0,Q=y.iridescence>0,J=y.sheen>0,Ae=y.transmission>0,xe=A&&!!y.anisotropyMap,we=O&&!!y.clearcoatMap,qe=O&&!!y.clearcoatNormalMap,me=O&&!!y.clearcoatRoughnessMap,Ue=Q&&!!y.iridescenceMap,Ve=Q&&!!y.iridescenceThicknessMap,Xe=J&&!!y.sheenColorMap,Le=J&&!!y.sheenRoughnessMap,lt=!!y.specularMap,tt=!!y.specularColorMap,Ct=!!y.specularIntensityMap,B=Ae&&!!y.transmissionMap,Ee=Ae&&!!y.thicknessMap,ie=!!y.gradientMap,le=!!y.alphaMap,Pe=y.alphaTest>0,Re=!!y.alphaHash,je=!!y.extensions,Wt=$i;y.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Wt=i.toneMapping);let un={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:ye,fragmentShader:X,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:cn,alphaToCoverage:!!y.alphaToCoverage,map:Ze,matcap:ne,envMap:fe,envMapMode:fe&&W.mapping,envMapCubeUVHeight:z,aoMap:L,lightMap:De,bumpMap:ce,normalMap:Me,displacementMap:d&&pe,emissiveMap:re,normalMapObjectSpace:Me&&y.normalMapType===Ig,normalMapTangentSpace:Me&&y.normalMapType===bp,metalnessMap:$,roughnessMap:C,anisotropy:A,anisotropyMap:xe,clearcoat:O,clearcoatMap:we,clearcoatNormalMap:qe,clearcoatRoughnessMap:me,dispersion:Y,iridescence:Q,iridescenceMap:Ue,iridescenceThicknessMap:Ve,sheen:J,sheenColorMap:Xe,sheenRoughnessMap:Le,specularMap:lt,specularColorMap:tt,specularIntensityMap:Ct,transmission:Ae,transmissionMap:B,thicknessMap:Ee,gradientMap:ie,opaque:y.transparent===!1&&y.blending===dr&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:Pe,alphaHash:Re,combine:y.combine,mapUv:Ze&&_(y.map.channel),aoMapUv:L&&_(y.aoMap.channel),lightMapUv:De&&_(y.lightMap.channel),bumpMapUv:ce&&_(y.bumpMap.channel),normalMapUv:Me&&_(y.normalMap.channel),displacementMapUv:pe&&_(y.displacementMap.channel),emissiveMapUv:re&&_(y.emissiveMap.channel),metalnessMapUv:$&&_(y.metalnessMap.channel),roughnessMapUv:C&&_(y.roughnessMap.channel),anisotropyMapUv:xe&&_(y.anisotropyMap.channel),clearcoatMapUv:we&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(y.sheenRoughnessMap.channel),specularMapUv:lt&&_(y.specularMap.channel),specularColorMapUv:tt&&_(y.specularColorMap.channel),specularIntensityMapUv:Ct&&_(y.specularIntensityMap.channel),transmissionMapUv:B&&_(y.transmissionMap.channel),thicknessMapUv:Ee&&_(y.thicknessMap.channel),alphaMapUv:le&&_(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Me||A),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(Ze||le),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ne,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Ze&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===yt,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Nt,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:je&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&y.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return un.vertexUv1s=l.has(1),un.vertexUv2s=l.has(2),un.vertexUv3s=l.has(3),l.clear(),un}function p(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let T in y.defines)w.push(T),w.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(S(w,y),b(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function S(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function b(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let w=g[y.type],T;if(w){let P=ri[w];T=hi.clone(P.uniforms)}else T=y.uniforms;return T}function v(y,w){let T;for(let P=0,U=h.length;P<U;P++){let N=h[P];if(N.cacheKey===w){T=N,++T.usedTimes;break}}return T===void 0&&(T=new Sy(i,w,y,r),h.push(T)),T}function M(y){if(--y.usedTimes===0){let w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function E(y){c.remove(y)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:v,releaseProgram:M,releaseShaderCache:E,programs:h,dispose:R}}function Ay(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ry(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ff(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Of(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Ry),n.length>1&&n.sort(d||Ff),s.length>1&&s.sort(d||Ff)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Cy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Of,i.set(n,[o])):s>=r.length?(o=new Of,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Iy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Te};break;case"SpotLight":t={position:new D,direction:new D,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Py(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ly=0;function Dy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Uy(i){let e=new Iy,t=Py(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new We,o=new We;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,b=0,x=0,v=0,M=0,E=0;l.sort(Dy);for(let y=0,w=l.length;y<w;y++){let T=l[y],P=T.color,U=T.intensity,N=T.distance,k=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=P.r*U,u+=P.g*U,d+=P.b*U;else if(T.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(T.sh.coefficients[F],U);E++}else if(T.isDirectionalLight){let F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let W=T.shadow,z=t.get(T);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=T.shadow.matrix,S++}n.directional[f]=F,f++}else if(T.isSpotLight){let F=e.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(P).multiplyScalar(U),F.distance=N,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,n.spot[_]=F;let W=T.shadow;if(T.map&&(n.spotLightMap[v]=T.map,v++,W.updateMatrices(T),T.castShadow&&M++),n.spotLightMatrix[_]=W.matrix,T.castShadow){let z=t.get(T);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=k,x++}_++}else if(T.isRectAreaLight){let F=e.get(T);F.color.copy(P).multiplyScalar(U),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=F,m++}else if(T.isPointLight){let F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){let W=T.shadow,z=t.get(T);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=T.shadow.matrix,b++}n.point[g]=F,g++}else if(T.isHemisphereLight){let F=e.get(T);F.skyColor.copy(T.color).multiplyScalar(U),F.groundColor.copy(T.groundColor).multiplyScalar(U),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==b||R.numSpotShadows!==x||R.numSpotMaps!==v||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+v-M,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=b,R.numSpotShadows=x,R.numSpotMaps=v,R.numLightProbes=E,n.version=Ly++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let b=l[p];if(b.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(b.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function zf(i){let e=new Uy(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ny(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new zf(i),e.set(s,[a])):r>=o.length?(a=new zf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ih=class extends An{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ph=class extends An{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
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
}`;function zy(i,e,t){let n=new Mo,s=new ae,r=new ae,o=new dt,a=new Ih({depthPacking:Cg}),c=new Ph,l={},h=t.maxTextureSize,u={[ci]:rn,[rn]:ci,[Nt]:Nt},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Fy,fragmentShader:Oy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new rt;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new de(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let p=this.type;this.render=function(M,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let y=i.getRenderTarget(),w=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ai),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let U=p!==Ai&&this.type===Ai,N=p===Ai&&this.type!==Ai;for(let k=0,F=M.length;k<F;k++){let W=M[k],z=W.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ee=z.getFrameExtents();if(s.multiply(ee),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,z.mapSize.y=r.y)),z.map===null||U===!0||N===!0){let te=this.type!==Ai?{minFilter:on,magFilter:on}:{};z.map!==null&&z.map.dispose(),z.map=new hn(s.x,s.y,te),z.map.texture.name=W.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let j=z.getViewportCount();for(let te=0;te<j;te++){let ue=z.getViewport(te);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),P.viewport(o),z.updateMatrices(W,te),n=z.getFrustum(),x(E,R,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===Ai&&S(z,R),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,w,T)};function S(M,E){let R=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new hn(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,R,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,R,f,_,null)}function b(M,E,R,y){let w=null,T=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)w=T;else if(w=R.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let P=w.uuid,U=E.uuid,N=l[P];N===void 0&&(N={},l[P]=N);let k=N[U];k===void 0&&(k=w.clone(),N[U]=k,E.addEventListener("dispose",v)),w=k}if(w.visible=E.visible,w.wireframe=E.wireframe,y===Ai?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:u[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let P=i.properties.get(w);P.light=R}return w}function x(M,E,R,y,w){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===Ai)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);let U=e.update(M),N=M.material;if(Array.isArray(N)){let k=U.groups;for(let F=0,W=k.length;F<W;F++){let z=k[F],ee=N[z.materialIndex];if(ee&&ee.visible){let j=b(M,ee,y,w);M.onBeforeShadow(i,M,E,R,U,j,z),i.renderBufferDirect(R,null,U,j,M,z),M.onAfterShadow(i,M,E,R,U,j,z)}}}else if(N.visible){let k=b(M,N,y,w);M.onBeforeShadow(i,M,E,R,U,k,null),i.renderBufferDirect(R,null,U,k,M,null),M.onAfterShadow(i,M,E,R,U,k,null)}}let P=M.children;for(let U=0,N=P.length;U<N;U++)x(P[U],E,R,y,w)}function v(M){M.target.removeEventListener("dispose",v);for(let R in l){let y=l[R],w=M.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}var By={[Ol]:zl,[Bl]:Gl,[kl]:Vl,[gr]:Hl,[zl]:Ol,[Gl]:Bl,[Vl]:kl,[Hl]:gr};function ky(i,e){function t(){let B=!1,Ee=new dt,ie=null,le=new dt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!B&&(i.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){B=Pe},setClear:function(Pe,Re,je,Wt,un){un===!0&&(Pe*=Wt,Re*=Wt,je*=Wt),Ee.set(Pe,Re,je,Wt),le.equals(Ee)===!1&&(i.clearColor(Pe,Re,je,Wt),le.copy(Ee))},reset:function(){B=!1,ie=null,le.set(-1,0,0,0)}}}function n(){let B=!1,Ee=!1,ie=null,le=null,Pe=null;return{setReversed:function(Re){if(Ee!==Re){let je=e.get("EXT_clip_control");Ee?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);let Wt=Pe;Pe=null,this.setClear(Wt)}Ee=Re},getReversed:function(){return Ee},setTest:function(Re){Re?he(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(Re){ie!==Re&&!B&&(i.depthMask(Re),ie=Re)},setFunc:function(Re){if(Ee&&(Re=By[Re]),le!==Re){switch(Re){case Ol:i.depthFunc(i.NEVER);break;case zl:i.depthFunc(i.ALWAYS);break;case Bl:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case kl:i.depthFunc(i.EQUAL);break;case Hl:i.depthFunc(i.GEQUAL);break;case Gl:i.depthFunc(i.GREATER);break;case Vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Re}},setLocked:function(Re){B=Re},setClear:function(Re){Pe!==Re&&(Ee&&(Re=1-Re),i.clearDepth(Re),Pe=Re)},reset:function(){B=!1,ie=null,le=null,Pe=null,Ee=!1}}}function s(){let B=!1,Ee=null,ie=null,le=null,Pe=null,Re=null,je=null,Wt=null,un=null;return{setTest:function(wt){B||(wt?he(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(wt){Ee!==wt&&!B&&(i.stencilMask(wt),Ee=wt)},setFunc:function(wt,qn,vi){(ie!==wt||le!==qn||Pe!==vi)&&(i.stencilFunc(wt,qn,vi),ie=wt,le=qn,Pe=vi)},setOp:function(wt,qn,vi){(Re!==wt||je!==qn||Wt!==vi)&&(i.stencilOp(wt,qn,vi),Re=wt,je=qn,Wt=vi)},setLocked:function(wt){B=wt},setClear:function(wt){un!==wt&&(i.clearStencil(wt),un=wt)},reset:function(){B=!1,Ee=null,ie=null,le=null,Pe=null,Re=null,je=null,Wt=null,un=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,b=null,x=null,v=null,M=null,E=new Te(0,0,0),R=0,y=!1,w=null,T=null,P=null,U=null,N=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,W=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=W>=2);let ee=null,j={},te=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),ye=new dt().fromArray(te),X=new dt().fromArray(ue);function se(B,Ee,ie,le){let Pe=new Uint8Array(4),Re=i.createTexture();i.bindTexture(B,Re),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<ie;je++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Ee+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Re}let ge={};ge[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(i.DEPTH_TEST),o.setFunc(gr),ce(!1),Me(Bd),he(i.CULL_FACE),L(ai);function he(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Ne(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Oe(B,Ee){return u[B]!==Ee?(i.bindFramebuffer(B,Ee),u[B]=Ee,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ee),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Fe(B,Ee){let ie=f,le=!1;if(B){ie=d.get(Ee),ie===void 0&&(ie=[],d.set(Ee,ie));let Pe=B.textures;if(ie.length!==Pe.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,je=Pe.length;Re<je;Re++)ie[Re]=i.COLOR_ATTACHMENT0+Re;ie.length=Pe.length,le=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,le=!0);le&&i.drawBuffers(ie)}function Ze(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let ne={[Ss]:i.FUNC_ADD,[og]:i.FUNC_SUBTRACT,[ag]:i.FUNC_REVERSE_SUBTRACT};ne[cg]=i.MIN,ne[lg]=i.MAX;let fe={[hg]:i.ZERO,[ug]:i.ONE,[dg]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[_g]:i.SRC_ALPHA_SATURATE,[gg]:i.DST_COLOR,[pg]:i.DST_ALPHA,[fg]:i.ONE_MINUS_SRC_COLOR,[Fl]:i.ONE_MINUS_SRC_ALPHA,[xg]:i.ONE_MINUS_DST_COLOR,[mg]:i.ONE_MINUS_DST_ALPHA,[vg]:i.CONSTANT_COLOR,[yg]:i.ONE_MINUS_CONSTANT_COLOR,[Mg]:i.CONSTANT_ALPHA,[bg]:i.ONE_MINUS_CONSTANT_ALPHA};function L(B,Ee,ie,le,Pe,Re,je,Wt,un,wt){if(B===ai){_===!0&&(Ne(i.BLEND),_=!1);return}if(_===!1&&(he(i.BLEND),_=!0),B!==rg){if(B!==m||wt!==y){if((p!==Ss||x!==Ss)&&(i.blendEquation(i.FUNC_ADD),p=Ss,x=Ss),wt)switch(B){case dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.ONE,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,b=null,v=null,M=null,E.set(0,0,0),R=0,m=B,y=wt}return}Pe=Pe||Ee,Re=Re||ie,je=je||le,(Ee!==p||Pe!==x)&&(i.blendEquationSeparate(ne[Ee],ne[Pe]),p=Ee,x=Pe),(ie!==S||le!==b||Re!==v||je!==M)&&(i.blendFuncSeparate(fe[ie],fe[le],fe[Re],fe[je]),S=ie,b=le,v=Re,M=je),(Wt.equals(E)===!1||un!==R)&&(i.blendColor(Wt.r,Wt.g,Wt.b,un),E.copy(Wt),R=un),m=B,y=!1}function De(B,Ee){B.side===Nt?Ne(i.CULL_FACE):he(i.CULL_FACE);let ie=B.side===rn;Ee&&(ie=!ie),ce(ie),B.blending===dr&&B.transparent===!1?L(ai):L(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let le=B.stencilWrite;a.setTest(le),le&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),re(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(B){w!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),w=B)}function Me(B){B!==ig?(he(i.CULL_FACE),B!==T&&(B===Bd?i.cullFace(i.BACK):B===sg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),T=B}function pe(B){B!==P&&(F&&i.lineWidth(B),P=B)}function re(B,Ee,ie){B?(he(i.POLYGON_OFFSET_FILL),(U!==Ee||N!==ie)&&(i.polygonOffset(Ee,ie),U=Ee,N=ie)):Ne(i.POLYGON_OFFSET_FILL)}function $(B){B?he(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function C(B){B===void 0&&(B=i.TEXTURE0+k-1),ee!==B&&(i.activeTexture(B),ee=B)}function A(B,Ee,ie){ie===void 0&&(ee===null?ie=i.TEXTURE0+k-1:ie=ee);let le=j[ie];le===void 0&&(le={type:void 0,texture:void 0},j[ie]=le),(le.type!==B||le.texture!==Ee)&&(ee!==ie&&(i.activeTexture(ie),ee=ie),i.bindTexture(B,Ee||ge[B]),le.type=B,le.texture=Ee)}function O(){let B=j[ee];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(B){ye.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ye.copy(B))}function Le(B){X.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),X.copy(B))}function lt(B,Ee){let ie=l.get(Ee);ie===void 0&&(ie=new WeakMap,l.set(Ee,ie));let le=ie.get(B);le===void 0&&(le=i.getUniformBlockIndex(Ee,B.name),ie.set(B,le))}function tt(B,Ee){let le=l.get(Ee).get(B);c.get(Ee)!==le&&(i.uniformBlockBinding(Ee,le,B.__bindingPointIndex),c.set(Ee,le))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,j={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,b=null,x=null,v=null,M=null,E=new Te(0,0,0),R=0,y=!1,w=null,T=null,P=null,U=null,N=null,ye.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Ne,bindFramebuffer:Oe,drawBuffers:Fe,useProgram:Ze,setBlending:L,setMaterial:De,setFlipSided:ce,setCullFace:Me,setLineWidth:pe,setPolygonOffset:re,setScissorTest:$,activeTexture:C,bindTexture:A,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Ue,texImage3D:Ve,updateUBOMapping:lt,uniformBlockBinding:tt,texStorage2D:qe,texStorage3D:me,texSubImage2D:J,texSubImage3D:Ae,compressedTexSubImage2D:xe,compressedTexSubImage3D:we,scissor:Xe,viewport:Le,reset:Ct}}function Bf(i,e,t,n){let s=Hy(n);switch(t){case mp:return i*e;case xp:return i*e;case _p:return i*e*2;case fu:return i*e/s.components*s.byteLength;case pu:return i*e/s.components*s.byteLength;case vp:return i*e*2/s.components*s.byteLength;case mu:return i*e*2/s.components*s.byteLength;case gp:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case gu:return i*e*4/s.components*s.byteLength;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:case Zl:return Math.max(i,16)*Math.max(e,8)/4;case ql:case Kl:return Math.max(i,8)*Math.max(e,8)/2;case $l:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case th:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ih:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case sh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Na:case fh:case ph:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yp:case mh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gh:case xh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hy(i){switch(i){case Bn:case dp:return{byteLength:1,components:1};case vo:case fp:case Cn:return{byteLength:2,components:1};case uu:case du:return{byteLength:2,components:4};case Rs:case hu:case jn:return{byteLength:4,components:1};case pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Gy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function g(C,A){return f?new OffscreenCanvas(C,A):yo("canvas")}function _(C,A,O){let Y=1,Q=$(C);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let J=Math.floor(Y*Q.width),Ae=Math.floor(Y*Q.height);u===void 0&&(u=g(J,Ae));let xe=A?g(J,Ae):u;return xe.width=J,xe.height=Ae,xe.getContext("2d").drawImage(C,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+Ae+")."),xe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,A,O,Y,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=A;if(A===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8)),A===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),A===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8)),A===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),A===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),A===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),A===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),A===i.RGBA){let Ae=Q?mc:it.getTransfer(Y);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=Ae===yt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(C,A){let O;return C?A===null||A===Rs||A===vr?O=i.DEPTH24_STENCIL8:A===jn?O=i.DEPTH32F_STENCIL8:A===vo&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Rs||A===vr?O=i.DEPTH_COMPONENT24:A===jn?O=i.DEPTH_COMPONENT32F:A===vo&&(O=i.DEPTH_COMPONENT16),O}function v(C,A){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==yn?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function M(C){let A=C.target;A.removeEventListener("dispose",M),R(A),A.isVideoTexture&&h.delete(A)}function E(C){let A=C.target;A.removeEventListener("dispose",E),w(A)}function R(C){let A=n.get(C);if(A.__webglInit===void 0)return;let O=C.source,Y=d.get(O);if(Y){let Q=Y[A.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(C),Object.keys(Y).length===0&&d.delete(O)}n.remove(C)}function y(C){let A=n.get(C);i.deleteTexture(A.__webglTexture);let O=C.source,Y=d.get(O);delete Y[A.__cacheKey],o.memory.textures--}function w(C){let A=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(A.__webglFramebuffer[Y]))for(let Q=0;Q<A.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(A.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(A.__webglFramebuffer[Y]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Y])}else{if(Array.isArray(A.__webglFramebuffer))for(let Y=0;Y<A.__webglFramebuffer.length;Y++)i.deleteFramebuffer(A.__webglFramebuffer[Y]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Y=0;Y<A.__webglColorRenderbuffer.length;Y++)A.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Y]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let O=C.textures;for(let Y=0,Q=O.length;Y<Q;Y++){let J=n.get(O[Y]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(O[Y])}n.remove(C)}let T=0;function P(){T=0}function U(){let C=T;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),T+=1,C}function N(C){let A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function k(C,A){let O=n.get(C);if(C.isVideoTexture&&pe(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){let Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,C,A);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+A)}function F(C,A){let O=n.get(C);if(C.version>0&&O.__version!==C.version){X(O,C,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+A)}function W(C,A){let O=n.get(C);if(C.version>0&&O.__version!==C.version){X(O,C,A);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+A)}function z(C,A){let O=n.get(C);if(C.version>0&&O.__version!==C.version){se(O,C,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+A)}let ee={[Li]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[As]:i.MIRRORED_REPEAT},j={[on]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[fo]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},te={[Pg]:i.NEVER,[Og]:i.ALWAYS,[Lg]:i.LESS,[wp]:i.LEQUAL,[Dg]:i.EQUAL,[Fg]:i.GEQUAL,[Ug]:i.GREATER,[Ng]:i.NOTEQUAL};function ue(C,A){if(A.type===jn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===yn||A.magFilter===fo||A.magFilter===lr||A.magFilter===oi||A.minFilter===yn||A.minFilter===fo||A.minFilter===lr||A.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ee[A.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ee[A.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ee[A.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,j[A.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,j[A.minFilter]),A.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,te[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===on||A.minFilter!==lr&&A.minFilter!==oi||A.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ye(C,A){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",M));let Y=A.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let J=N(A);if(J!==C.__cacheKey){Q[J]===void 0&&(Q[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[J].usedTimes++;let Ae=Q[C.__cacheKey];Ae!==void 0&&(Q[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&y(A)),C.__cacheKey=J,C.__webglTexture=Q[J].texture}return O}function X(C,A,O){let Y=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=ye(C,A),J=A.source;t.bindTexture(Y,C.__webglTexture,i.TEXTURE0+O);let Ae=n.get(J);if(J.version!==Ae.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);let xe=it.getPrimaries(it.workingColorSpace),we=A.colorSpace===Ki?null:it.getPrimaries(A.colorSpace),qe=A.colorSpace===Ki||xe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let me=_(A.image,!1,s.maxTextureSize);me=re(A,me);let Ue=r.convert(A.format,A.colorSpace),Ve=r.convert(A.type),Xe=b(A.internalFormat,Ue,Ve,A.colorSpace,A.isVideoTexture);ue(Y,A);let Le,lt=A.mipmaps,tt=A.isVideoTexture!==!0,Ct=Ae.__version===void 0||Q===!0,B=J.dataReady,Ee=v(A,me);if(A.isDepthTexture)Xe=x(A.format===yr,A.type),Ct&&(tt?t.texStorage2D(i.TEXTURE_2D,1,Xe,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Xe,me.width,me.height,0,Ue,Ve,null));else if(A.isDataTexture)if(lt.length>0){tt&&Ct&&t.texStorage2D(i.TEXTURE_2D,Ee,Xe,lt[0].width,lt[0].height);for(let ie=0,le=lt.length;ie<le;ie++)Le=lt[ie],tt?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Le.width,Le.height,Ue,Ve,Le.data):t.texImage2D(i.TEXTURE_2D,ie,Xe,Le.width,Le.height,0,Ue,Ve,Le.data);A.generateMipmaps=!1}else tt?(Ct&&t.texStorage2D(i.TEXTURE_2D,Ee,Xe,me.width,me.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Ue,Ve,me.data)):t.texImage2D(i.TEXTURE_2D,0,Xe,me.width,me.height,0,Ue,Ve,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){tt&&Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Xe,lt[0].width,lt[0].height,me.depth);for(let ie=0,le=lt.length;ie<le;ie++)if(Le=lt[ie],A.format!==Fn)if(Ue!==null)if(tt){if(B)if(A.layerUpdates.size>0){let Pe=Bf(Le.width,Le.height,A.format,A.type);for(let Re of A.layerUpdates){let je=Le.data.subarray(Re*Pe/Le.data.BYTES_PER_ELEMENT,(Re+1)*Pe/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Re,Le.width,Le.height,1,Ue,je)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,me.depth,Ue,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Xe,Le.width,Le.height,me.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,me.depth,Ue,Ve,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Xe,Le.width,Le.height,me.depth,0,Ue,Ve,Le.data)}else{tt&&Ct&&t.texStorage2D(i.TEXTURE_2D,Ee,Xe,lt[0].width,lt[0].height);for(let ie=0,le=lt.length;ie<le;ie++)Le=lt[ie],A.format!==Fn?Ue!==null?tt?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Le.width,Le.height,Ue,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Xe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Le.width,Le.height,Ue,Ve,Le.data):t.texImage2D(i.TEXTURE_2D,ie,Xe,Le.width,Le.height,0,Ue,Ve,Le.data)}else if(A.isDataArrayTexture)if(tt){if(Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Xe,me.width,me.height,me.depth),B)if(A.layerUpdates.size>0){let ie=Bf(me.width,me.height,A.format,A.type);for(let le of A.layerUpdates){let Pe=me.data.subarray(le*ie/me.data.BYTES_PER_ELEMENT,(le+1)*ie/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,me.width,me.height,1,Ue,Ve,Pe)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ue,Ve,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,me.width,me.height,me.depth,0,Ue,Ve,me.data);else if(A.isData3DTexture)tt?(Ct&&t.texStorage3D(i.TEXTURE_3D,Ee,Xe,me.width,me.height,me.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ue,Ve,me.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,me.width,me.height,me.depth,0,Ue,Ve,me.data);else if(A.isFramebufferTexture){if(Ct)if(tt)t.texStorage2D(i.TEXTURE_2D,Ee,Xe,me.width,me.height);else{let ie=me.width,le=me.height;for(let Pe=0;Pe<Ee;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Xe,ie,le,0,Ue,Ve,null),ie>>=1,le>>=1}}else if(lt.length>0){if(tt&&Ct){let ie=$(lt[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Xe,ie.width,ie.height)}for(let ie=0,le=lt.length;ie<le;ie++)Le=lt[ie],tt?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ue,Ve,Le):t.texImage2D(i.TEXTURE_2D,ie,Xe,Ue,Ve,Le);A.generateMipmaps=!1}else if(tt){if(Ct){let ie=$(me);t.texStorage2D(i.TEXTURE_2D,Ee,Xe,ie.width,ie.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,Ve,me)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Ue,Ve,me);m(A)&&p(Y),Ae.__version=J.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function se(C,A,O){if(A.image.length!==6)return;let Y=ye(C,A),Q=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);let J=n.get(Q);if(Q.version!==J.__version||Y===!0){t.activeTexture(i.TEXTURE0+O);let Ae=it.getPrimaries(it.workingColorSpace),xe=A.colorSpace===Ki?null:it.getPrimaries(A.colorSpace),we=A.colorSpace===Ki||Ae===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let qe=A.isCompressedTexture||A.image[0].isCompressedTexture,me=A.image[0]&&A.image[0].isDataTexture,Ue=[];for(let le=0;le<6;le++)!qe&&!me?Ue[le]=_(A.image[le],!0,s.maxCubemapSize):Ue[le]=me?A.image[le].image:A.image[le],Ue[le]=re(A,Ue[le]);let Ve=Ue[0],Xe=r.convert(A.format,A.colorSpace),Le=r.convert(A.type),lt=b(A.internalFormat,Xe,Le,A.colorSpace),tt=A.isVideoTexture!==!0,Ct=J.__version===void 0||Y===!0,B=Q.dataReady,Ee=v(A,Ve);ue(i.TEXTURE_CUBE_MAP,A);let ie;if(qe){tt&&Ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,lt,Ve.width,Ve.height);for(let le=0;le<6;le++){ie=Ue[le].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){let Re=ie[Pe];A.format!==Fn?Xe!==null?tt?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,Re.width,Re.height,Xe,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,lt,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,Re.width,Re.height,Xe,Le,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,lt,Re.width,Re.height,0,Xe,Le,Re.data)}}}else{if(ie=A.mipmaps,tt&&Ct){ie.length>0&&Ee++;let le=$(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,lt,le.width,le.height)}for(let le=0;le<6;le++)if(me){tt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ue[le].width,Ue[le].height,Xe,Le,Ue[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,lt,Ue[le].width,Ue[le].height,0,Xe,Le,Ue[le].data);for(let Pe=0;Pe<ie.length;Pe++){let je=ie[Pe].image[le].image;tt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,je.width,je.height,Xe,Le,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,lt,je.width,je.height,0,Xe,Le,je.data)}}else{tt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Xe,Le,Ue[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,lt,Xe,Le,Ue[le]);for(let Pe=0;Pe<ie.length;Pe++){let Re=ie[Pe];tt?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,Xe,Le,Re.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,lt,Xe,Le,Re.image[le])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),J.__version=Q.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function ge(C,A,O,Y,Q,J){let Ae=r.convert(O.format,O.colorSpace),xe=r.convert(O.type),we=b(O.internalFormat,Ae,xe,O.colorSpace),qe=n.get(A),me=n.get(O);if(me.__renderTarget=A,!qe.__hasExternalTextures){let Ue=Math.max(1,A.width>>J),Ve=Math.max(1,A.height>>J);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,J,we,Ue,Ve,A.depth,0,Ae,xe,null):t.texImage2D(Q,J,we,Ue,Ve,0,Ae,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Me(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,me.__webglTexture,0,ce(A)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,me.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(C,A,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),A.depthBuffer){let Y=A.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,J=x(A.stencilBuffer,Q),Ae=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=ce(A);Me(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,J,A.width,A.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,J,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,J,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,C)}else{let Y=A.textures;for(let Q=0;Q<Y.length;Q++){let J=Y[Q],Ae=r.convert(J.format,J.colorSpace),xe=r.convert(J.type),we=b(J.internalFormat,Ae,xe,J.colorSpace),qe=ce(A);O&&Me(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,we,A.width,A.height):Me(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,we,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,we,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(A.depthTexture);Y.__renderTarget=A,(!Y.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);let Q=Y.__webglTexture,J=ce(A);if(A.depthTexture.format===fr)Me(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(A.depthTexture.format===yr)Me(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Oe(C){let A=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Y){let Q=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),A.__depthDisposeCallback=Q}A.__boundDepthTexture=Y}if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ne(A.__webglFramebuffer,C)}else if(O){A.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Y]),A.__webglDepthbuffer[Y]===void 0)A.__webglDepthbuffer[Y]=i.createRenderbuffer(),he(A.__webglDepthbuffer[Y],C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=A.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),he(A.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(C,A,O){let Y=n.get(C);A!==void 0&&ge(Y.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Oe(C)}function Ze(C){let A=C.texture,O=n.get(C),Y=n.get(A);C.addEventListener("dispose",E);let Q=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=A.version,o.memory.textures++),J){O.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(A.mipmaps&&A.mipmaps.length>0){O.__webglFramebuffer[xe]=[];for(let we=0;we<A.mipmaps.length;we++)O.__webglFramebuffer[xe][we]=i.createFramebuffer()}else O.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){O.__webglFramebuffer=[];for(let xe=0;xe<A.mipmaps.length;xe++)O.__webglFramebuffer[xe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let xe=0,we=Q.length;xe<we;xe++){let qe=n.get(Q[xe]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Me(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xe=0;xe<Q.length;xe++){let we=Q[xe];O.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[xe]);let qe=r.convert(we.format,we.colorSpace),me=r.convert(we.type),Ue=b(we.internalFormat,qe,me,we.colorSpace,C.isXRRenderTarget===!0),Ve=ce(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Ue,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,O.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),he(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ue(i.TEXTURE_CUBE_MAP,A);for(let xe=0;xe<6;xe++)if(A.mipmaps&&A.mipmaps.length>0)for(let we=0;we<A.mipmaps.length;we++)ge(O.__webglFramebuffer[xe][we],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we);else ge(O.__webglFramebuffer[xe],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let xe=0,we=Q.length;xe<we;xe++){let qe=Q[xe],me=n.get(qe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),ue(i.TEXTURE_2D,qe),ge(O.__webglFramebuffer,C,qe,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),m(qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Y.__webglTexture),ue(xe,A),A.mipmaps&&A.mipmaps.length>0)for(let we=0;we<A.mipmaps.length;we++)ge(O.__webglFramebuffer[we],C,A,i.COLOR_ATTACHMENT0,xe,we);else ge(O.__webglFramebuffer,C,A,i.COLOR_ATTACHMENT0,xe,0);m(A)&&p(xe),t.unbindTexture()}C.depthBuffer&&Oe(C)}function ne(C){let A=C.textures;for(let O=0,Y=A.length;O<Y;O++){let Q=A[O];if(m(Q)){let J=S(C),Ae=n.get(Q).__webglTexture;t.bindTexture(J,Ae),p(J),t.unbindTexture()}}}let fe=[],L=[];function De(C){if(C.samples>0){if(Me(C)===!1){let A=C.textures,O=C.width,Y=C.height,Q=i.COLOR_BUFFER_BIT,J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(C),xe=A.length>1;if(xe)for(let we=0;we<A.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<A.length;we++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let qe=n.get(A[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,i.NEAREST),c===!0&&(fe.length=0,L.length=0,fe.push(i.COLOR_ATTACHMENT0+we),C.depthBuffer&&C.resolveDepthBuffer===!1&&(fe.push(J),L.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let we=0;we<A.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let qe=n.get(A[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let A=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ce(C){return Math.min(s.maxSamples,C.samples)}function Me(C){let A=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function pe(C){let A=o.render.frame;h.get(C)!==A&&(h.set(C,A),C.update())}function re(C,A){let O=C.colorSpace,Y=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==cn&&O!==Ki&&(it.getTransfer(O)===yt?(Y!==Fn||Q!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),A}function $(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=Fe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Me}function Vy(i,e){function t(n,s=Ki){let r,o=it.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===uu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===du)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dp)return i.BYTE;if(n===fp)return i.SHORT;if(n===vo)return i.UNSIGNED_SHORT;if(n===hu)return i.INT;if(n===Rs)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===mp)return i.ALPHA;if(n===gp)return i.RGB;if(n===Fn)return i.RGBA;if(n===xp)return i.LUMINANCE;if(n===_p)return i.LUMINANCE_ALPHA;if(n===fr)return i.DEPTH_COMPONENT;if(n===yr)return i.DEPTH_STENCIL;if(n===fu)return i.RED;if(n===pu)return i.RED_INTEGER;if(n===vp)return i.RG;if(n===mu)return i.RG_INTEGER;if(n===gu)return i.RGBA_INTEGER;if(n===Pa||n===La||n===Da||n===Ua)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===Yl||n===Kl||n===Zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$l||n===Jl||n===jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$l||n===Jl)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ql||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===ch||n===lh||n===hh||n===uh||n===dh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ql)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===th)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ih)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ah)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ch)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===fh||n===ph)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Na)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ph)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yp||n===mh||n===gh||n===xh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Lh=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},pt=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wy={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Jt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ot({vertexShader:Xy,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new Yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends ji{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=new Dh,m=t.getContextAttributes(),p=null,S=null,b=[],x=[],v=new ae,M=null,E=new $t;E.viewport=new dt;let R=new $t;R.viewport=new dt;let y=[E,R],w=new Lh,T=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let se=b[X];return se===void 0&&(se=new go,b[X]=se),se.getTargetRaySpace()},this.getControllerGrip=function(X){let se=b[X];return se===void 0&&(se=new go,b[X]=se),se.getGripSpace()},this.getHand=function(X){let se=b[X];return se===void 0&&(se=new go,b[X]=se),se.getHandSpace()};function U(X){let se=x.indexOf(X.inputSource);if(se===-1)return;let ge=b[se];ge!==void 0&&(ge.update(X.inputSource,X.frame,l||o),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let X=0;X<b.length;X++){let se=x[X];se!==null&&(x[X]=null,b[X].disconnect(se))}T=null,P=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(v),s.renderState.layers===void 0){let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new hn(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,ge=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?yr:fr,ge=m.stencil?vr:Rs);let Ne={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new hn(d.textureWidth,d.textureHeight,{format:Fn,type:Bn,depthTexture:new Wa(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(X){for(let se=0;se<X.removed.length;se++){let ge=X.removed[se],he=x.indexOf(ge);he>=0&&(x[he]=null,b[he].disconnect(ge))}for(let se=0;se<X.added.length;se++){let ge=X.added[se],he=x.indexOf(ge);if(he===-1){for(let Oe=0;Oe<b.length;Oe++)if(Oe>=x.length){x.push(ge),he=Oe;break}else if(x[Oe]===null){x[Oe]=ge,he=Oe;break}if(he===-1)break}let Ne=b[he];Ne&&Ne.connect(ge)}}let F=new D,W=new D;function z(X,se,ge){F.setFromMatrixPosition(se.matrixWorld),W.setFromMatrixPosition(ge.matrixWorld);let he=F.distanceTo(W),Ne=se.projectionMatrix.elements,Oe=ge.projectionMatrix.elements,Fe=Ne[14]/(Ne[10]-1),Ze=Ne[14]/(Ne[10]+1),ne=(Ne[9]+1)/Ne[5],fe=(Ne[9]-1)/Ne[5],L=(Ne[8]-1)/Ne[0],De=(Oe[8]+1)/Oe[0],ce=Fe*L,Me=Fe*De,pe=he/(-L+De),re=pe*-L;if(se.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(re),X.translateZ(pe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ne[10]===-1)X.projectionMatrix.copy(se.projectionMatrix),X.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let $=Fe+pe,C=Ze+pe,A=ce-re,O=Me+(he-re),Y=ne*Ze/C*$,Q=fe*Ze/C*$;X.projectionMatrix.makePerspective(A,O,Y,Q,$,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ee(X,se){se===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(se.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let se=X.near,ge=X.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),w.near=R.near=E.near=se,w.far=R.far=E.far=ge,(T!==w.near||P!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,P=w.far),E.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,w.layers.mask=E.layers.mask|R.layers.mask;let he=X.parent,Ne=w.cameras;ee(w,he);for(let Oe=0;Oe<Ne.length;Oe++)ee(Ne[Oe],he);Ne.length===2?z(w,E,R):w.projectionMatrix.copy(E.projectionMatrix),j(X,w,he)};function j(X,se,ge){ge===null?X.matrix.copy(se.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(se.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(se.projectionMatrix),X.projectionMatrixInverse.copy(se.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=wr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let te=null;function ue(X,se){if(h=se.getViewerPose(l||o),g=se,h!==null){let ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let he=!1;ge.length!==w.cameras.length&&(w.cameras.length=0,he=!0);for(let Oe=0;Oe<ge.length;Oe++){let Fe=ge[Oe],Ze=null;if(f!==null)Ze=f.getViewport(Fe);else{let fe=u.getViewSubImage(d,Fe);Ze=fe.viewport,Oe===0&&(e.setRenderTargetTextures(S,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(S))}let ne=y[Oe];ne===void 0&&(ne=new $t,ne.layers.enable(Oe),ne.viewport=new dt,y[Oe]=ne),ne.matrix.fromArray(Fe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Fe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Oe===0&&(w.matrix.copy(ne.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),he===!0&&w.cameras.push(ne)}let Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){let Oe=u.getDepthInformation(ge[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,s.renderState)}}for(let ge=0;ge<b.length;ge++){let he=x[ge],Ne=b[ge];he!==null&&Ne!==void 0&&Ne.update(he,se,l||o)}te&&te(X,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let ye=new Ap;ye.setAnimationLoop(ue),this.setAnimationLoop=function(X){te=X},this.dispose=function(){}}},bs=new an,Yy=new We;function Ky(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),b=S.envMap,x=S.envMapRotation;b&&(m.envMap.value=b,bs.copy(x),bs.x*=-1,bs.y*=-1,bs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),m.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(bs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let x=b.program;n.uniformBlockBinding(S,x)}function l(S,b){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));let v=b.program;n.updateUBOMapping(S,v);let M=e.render.frame;r[S.id]!==M&&(d(S),r[S.id]=M)}function h(S){let b=u();S.__bindingPointIndex=b;let x=i.createBuffer(),v=S.__size,M=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,v,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let b=s[S.id],x=S.uniforms,v=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let M=0,E=x.length;M<E;M++){let R=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,w=R.length;y<w;y++){let T=R[y];if(f(T,M,y,v)===!0){let P=T.__offset,U=Array.isArray(T.value)?T.value:[T.value],N=0;for(let k=0;k<U.length;k++){let F=U[k],W=_(F);typeof F=="number"||typeof F=="boolean"?(T.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,P+N,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=0,T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=0,T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=0):(F.toArray(T.__data,N),N+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,b,x,v){let M=S.value,E=b+"_"+x;if(v[E]===void 0)return typeof M=="number"||typeof M=="boolean"?v[E]=M:v[E]=M.clone(),!0;{let R=v[E];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return v[E]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function g(S){let b=S.uniforms,x=0,v=16;for(let E=0,R=b.length;E<R;E++){let y=Array.isArray(b[E])?b[E]:[b[E]];for(let w=0,T=y.length;w<T;w++){let P=y[w],U=Array.isArray(P.value)?P.value:[P.value];for(let N=0,k=U.length;N<k;N++){let F=U[N],W=_(F),z=x%v,ee=z%W.boundary,j=z+ee;x+=ee,j!==0&&v-j<W.storage&&(x+=v-j),P.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=W.storage}}}let M=x%v;return M>0&&(x+=v-M),S.__size=x,S.__cache={},this}function _(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Xa=class{constructor(e={}){let{canvas:t=e0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=$i,this.toneMappingExposure=1;let x=this,v=!1,M=0,E=0,R=null,y=-1,w=null,T=new dt,P=new dt,U=null,N=new Te(0),k=0,F=t.width,W=t.height,z=1,ee=null,j=null,te=new dt(0,0,F,W),ue=new dt(0,0,F,W),ye=!1,X=new Mo,se=!1,ge=!1,he=new We,Ne=new We,Oe=new D,Fe=new dt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function fe(){return R===null?z:1}let L=n;function De(I,H){return t.getContext(I,H)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${iu}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Re,!1),L===null){let H="webgl2";if(L=De(H,I),L===null)throw De(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ce,Me,pe,re,$,C,A,O,Y,Q,J,Ae,xe,we,qe,me,Ue,Ve,Xe,Le,lt,tt,Ct,B;function Ee(){ce=new uv(L),ce.init(),tt=new Vy(L,ce),Me=new rv(L,ce,e,tt),pe=new ky(L,ce),Me.reverseDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),re=new pv(L),$=new Ay,C=new Gy(L,ce,pe,$,Me,tt,re),A=new av(x),O=new hv(x),Y=new M0(L),Ct=new iv(L,Y),Q=new dv(L,Y,re,Ct),J=new gv(L,Q,Y,re),Xe=new mv(L,Me,C),me=new ov($),Ae=new Ty(x,A,O,ce,Me,Ct,me),xe=new Ky(x,$),we=new Cy,qe=new Ny(ce),Ve=new nv(x,A,O,pe,J,f,c),Ue=new zy(x,J,Me),B=new Zy(L,re,Me,pe),Le=new sv(L,ce,re),lt=new fv(L,ce,re),re.programs=Ae.programs,x.capabilities=Me,x.extensions=ce,x.properties=$,x.renderLists=we,x.shadowMap=Ue,x.state=pe,x.info=re}Ee();let ie=new Uh(x,L);this.xr=ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let I=ce.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ce.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(I){I!==void 0&&(z=I,this.setSize(F,W,!1))},this.getSize=function(I){return I.set(F,W)},this.setSize=function(I,H,K=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=I,W=H,t.width=Math.floor(I*z),t.height=Math.floor(H*z),K===!0&&(t.style.width=I+"px",t.style.height=H+"px"),this.setViewport(0,0,I,H)},this.getDrawingBufferSize=function(I){return I.set(F*z,W*z).floor()},this.setDrawingBufferSize=function(I,H,K){F=I,W=H,z=K,t.width=Math.floor(I*K),t.height=Math.floor(H*K),this.setViewport(0,0,I,H)},this.getCurrentViewport=function(I){return I.copy(T)},this.getViewport=function(I){return I.copy(te)},this.setViewport=function(I,H,K,Z){I.isVector4?te.set(I.x,I.y,I.z,I.w):te.set(I,H,K,Z),pe.viewport(T.copy(te).multiplyScalar(z).round())},this.getScissor=function(I){return I.copy(ue)},this.setScissor=function(I,H,K,Z){I.isVector4?ue.set(I.x,I.y,I.z,I.w):ue.set(I,H,K,Z),pe.scissor(P.copy(ue).multiplyScalar(z).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(I){pe.setScissorTest(ye=I)},this.setOpaqueSort=function(I){ee=I},this.setTransparentSort=function(I){j=I},this.getClearColor=function(I){return I.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(I=!0,H=!0,K=!0){let Z=0;if(I){let G=!1;if(R!==null){let _e=R.texture.format;G=_e===gu||_e===mu||_e===pu}if(G){let _e=R.texture.type,Ce=_e===Bn||_e===Rs||_e===vo||_e===vr||_e===uu||_e===du,ze=Ve.getClearColor(),Be=Ve.getClearAlpha(),Ke=ze.r,Qe=ze.g,ke=ze.b;Ce?(g[0]=Ke,g[1]=Qe,g[2]=ke,g[3]=Be,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ke,_[1]=Qe,_[2]=ke,_[3]=Be,L.clearBufferiv(L.COLOR,0,_))}else Z|=L.COLOR_BUFFER_BIT}H&&(Z|=L.DEPTH_BUFFER_BIT),K&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),we.dispose(),qe.dispose(),$.dispose(),A.dispose(),O.dispose(),J.dispose(),Ct.dispose(),B.dispose(),Ae.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Pd),ie.removeEventListener("sessionend",Ld),gs.stop()};function le(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let I=re.autoReset,H=Ue.enabled,K=Ue.autoUpdate,Z=Ue.needsUpdate,G=Ue.type;Ee(),re.autoReset=I,Ue.enabled=H,Ue.autoUpdate=K,Ue.needsUpdate=Z,Ue.type=G}function Re(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function je(I){let H=I.target;H.removeEventListener("dispose",je),Wt(H)}function Wt(I){un(I),$.remove(I)}function un(I){let H=$.get(I).programs;H!==void 0&&(H.forEach(function(K){Ae.releaseProgram(K)}),I.isShaderMaterial&&Ae.releaseShaderCache(I))}this.renderBufferDirect=function(I,H,K,Z,G,_e){H===null&&(H=Ze);let Ce=G.isMesh&&G.matrixWorld.determinant()<0,ze=eg(I,H,K,Z,G);pe.setMaterial(Z,Ce);let Be=K.index,Ke=1;if(Z.wireframe===!0){if(Be=Q.getWireframeAttribute(K),Be===void 0)return;Ke=2}let Qe=K.drawRange,ke=K.attributes.position,ft=Qe.start*Ke,It=(Qe.start+Qe.count)*Ke;_e!==null&&(ft=Math.max(ft,_e.start*Ke),It=Math.min(It,(_e.start+_e.count)*Ke)),Be!==null?(ft=Math.max(ft,0),It=Math.min(It,Be.count)):ke!=null&&(ft=Math.max(ft,0),It=Math.min(It,ke.count));let Dt=It-ft;if(Dt<0||Dt===1/0)return;Ct.setup(G,Z,ze,K,Be);let vn,_t=Le;if(Be!==null&&(vn=Y.get(Be),_t=lt,_t.setIndex(vn)),G.isMesh)Z.wireframe===!0?(pe.setLineWidth(Z.wireframeLinewidth*fe()),_t.setMode(L.LINES)):_t.setMode(L.TRIANGLES);else if(G.isLine){let He=Z.linewidth;He===void 0&&(He=1),pe.setLineWidth(He*fe()),G.isLineSegments?_t.setMode(L.LINES):G.isLineLoop?_t.setMode(L.LINE_LOOP):_t.setMode(L.LINE_STRIP)}else G.isPoints?_t.setMode(L.POINTS):G.isSprite&&_t.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)_t.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let He=G._multiDrawStarts,yi=G._multiDrawCounts,vt=G._multiDrawCount,Yn=Be?Y.get(Be).bytesPerElement:1,Ys=$.get(Z).currentProgram.getUniforms();for(let wn=0;wn<vt;wn++)Ys.setValue(L,"_gl_DrawID",wn),_t.render(He[wn]/Yn,yi[wn])}else if(G.isInstancedMesh)_t.renderInstances(ft,Dt,G.count);else if(K.isInstancedBufferGeometry){let He=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,yi=Math.min(K.instanceCount,He);_t.renderInstances(ft,Dt,yi)}else _t.render(ft,Dt)};function wt(I,H,K){I.transparent===!0&&I.side===Nt&&I.forceSinglePass===!1?(I.side=rn,I.needsUpdate=!0,ea(I,H,K),I.side=ci,I.needsUpdate=!0,ea(I,H,K),I.side=Nt):ea(I,H,K)}this.compile=function(I,H,K=null){K===null&&(K=I),p=qe.get(K),p.init(H),b.push(p),K.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),I!==K&&I.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let Z=new Set;return I.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let _e=G.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){let ze=_e[Ce];wt(ze,K,G),Z.add(ze)}else wt(_e,K,G),Z.add(_e)}),b.pop(),p=null,Z},this.compileAsync=function(I,H,K=null){let Z=this.compile(I,H,K);return new Promise(G=>{function _e(){if(Z.forEach(function(Ce){$.get(Ce).currentProgram.isReady()&&Z.delete(Ce)}),Z.size===0){G(I);return}setTimeout(_e,10)}ce.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let qn=null;function vi(I){qn&&qn(I)}function Pd(){gs.stop()}function Ld(){gs.start()}let gs=new Ap;gs.setAnimationLoop(vi),typeof self!="undefined"&&gs.setContext(self),this.setAnimationLoop=function(I){qn=I,ie.setAnimationLoop(I),I===null?gs.stop():gs.start()},ie.addEventListener("sessionstart",Pd),ie.addEventListener("sessionend",Ld),this.render=function(I,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(H),H=ie.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,H,R),p=qe.get(I,b.length),p.init(H),b.push(p),Ne.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),X.setFromProjectionMatrix(Ne),ge=this.localClippingEnabled,se=me.init(this.clippingPlanes,ge),m=we.get(I,S.length),m.init(),S.push(m),ie.enabled===!0&&ie.isPresenting===!0){let _e=x.xr.getDepthSensingMesh();_e!==null&&Qc(_e,H,-1/0,x.sortObjects)}Qc(I,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ee,j),ne=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ne&&Ve.addToRenderList(m,I),this.info.render.frame++,se===!0&&me.beginShadows();let K=p.state.shadowsArray;Ue.render(K,I,H),se===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=m.opaque,G=m.transmissive;if(p.setupLights(),H.isArrayCamera){let _e=H.cameras;if(G.length>0)for(let Ce=0,ze=_e.length;Ce<ze;Ce++){let Be=_e[Ce];Ud(Z,G,I,Be)}ne&&Ve.render(I);for(let Ce=0,ze=_e.length;Ce<ze;Ce++){let Be=_e[Ce];Dd(m,I,Be,Be.viewport)}}else G.length>0&&Ud(Z,G,I,H),ne&&Ve.render(I),Dd(m,I,H);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),I.isScene===!0&&I.onAfterRender(x,I,H),Ct.resetDefaultState(),y=-1,w=null,b.pop(),b.length>0?(p=b[b.length-1],se===!0&&me.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Qc(I,H,K,Z){if(I.visible===!1)return;if(I.layers.test(H.layers)){if(I.isGroup)K=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(H);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||X.intersectsSprite(I)){Z&&Fe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ne);let Ce=J.update(I),ze=I.material;ze.visible&&m.push(I,Ce,ze,K,Fe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||X.intersectsObject(I))){let Ce=J.update(I),ze=I.material;if(Z&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Fe.copy(I.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Fe.copy(Ce.boundingSphere.center)),Fe.applyMatrix4(I.matrixWorld).applyMatrix4(Ne)),Array.isArray(ze)){let Be=Ce.groups;for(let Ke=0,Qe=Be.length;Ke<Qe;Ke++){let ke=Be[Ke],ft=ze[ke.materialIndex];ft&&ft.visible&&m.push(I,Ce,ft,K,Fe.z,ke)}}else ze.visible&&m.push(I,Ce,ze,K,Fe.z,null)}}let _e=I.children;for(let Ce=0,ze=_e.length;Ce<ze;Ce++)Qc(_e[Ce],H,K,Z)}function Dd(I,H,K,Z){let G=I.opaque,_e=I.transmissive,Ce=I.transparent;p.setupLightsView(K),se===!0&&me.setGlobalState(x.clippingPlanes,K),Z&&pe.viewport(T.copy(Z)),G.length>0&&Qo(G,H,K),_e.length>0&&Qo(_e,H,K),Ce.length>0&&Qo(Ce,H,K),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ud(I,H,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new hn(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Cn:Bn,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let _e=p.state.transmissionRenderTarget[Z.id],Ce=Z.viewport||T;_e.setSize(Ce.z,Ce.w);let ze=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(N),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),ne&&Ve.render(K);let Be=x.toneMapping;x.toneMapping=$i;let Ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),se===!0&&me.setGlobalState(x.clippingPlanes,Z),Qo(I,K,Z),C.updateMultisampleRenderTarget(_e),C.updateRenderTargetMipmap(_e),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ke=0,ft=H.length;ke<ft;ke++){let It=H[ke],Dt=It.object,vn=It.geometry,_t=It.material,He=It.group;if(_t.side===Nt&&Dt.layers.test(Z.layers)){let yi=_t.side;_t.side=rn,_t.needsUpdate=!0,Nd(Dt,K,Z,vn,_t,He),_t.side=yi,_t.needsUpdate=!0,Qe=!0}}Qe===!0&&(C.updateMultisampleRenderTarget(_e),C.updateRenderTargetMipmap(_e))}x.setRenderTarget(ze),x.setClearColor(N,k),Ke!==void 0&&(Z.viewport=Ke),x.toneMapping=Be}function Qo(I,H,K){let Z=H.isScene===!0?H.overrideMaterial:null;for(let G=0,_e=I.length;G<_e;G++){let Ce=I[G],ze=Ce.object,Be=Ce.geometry,Ke=Z===null?Ce.material:Z,Qe=Ce.group;ze.layers.test(K.layers)&&Nd(ze,H,K,Be,Ke,Qe)}}function Nd(I,H,K,Z,G,_e){I.onBeforeRender(x,H,K,Z,G,_e),I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),G.onBeforeRender(x,H,K,Z,I,_e),G.transparent===!0&&G.side===Nt&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,x.renderBufferDirect(K,H,Z,G,I,_e),G.side=ci,G.needsUpdate=!0,x.renderBufferDirect(K,H,Z,G,I,_e),G.side=Nt):x.renderBufferDirect(K,H,Z,G,I,_e),I.onAfterRender(x,H,K,Z,G,_e)}function ea(I,H,K){H.isScene!==!0&&(H=Ze);let Z=$.get(I),G=p.state.lights,_e=p.state.shadowsArray,Ce=G.state.version,ze=Ae.getParameters(I,G.state,_e,H,K),Be=Ae.getProgramCacheKey(ze),Ke=Z.programs;Z.environment=I.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(I.isMeshStandardMaterial?O:A).get(I.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&I.envMap===null?H.environmentRotation:I.envMapRotation,Ke===void 0&&(I.addEventListener("dispose",je),Ke=new Map,Z.programs=Ke);let Qe=Ke.get(Be);if(Qe!==void 0){if(Z.currentProgram===Qe&&Z.lightsStateVersion===Ce)return Od(I,ze),Qe}else ze.uniforms=Ae.getUniforms(I),I.onBeforeCompile(ze,x),Qe=Ae.acquireProgram(ze,Be),Ke.set(Be,Qe),Z.uniforms=ze.uniforms;let ke=Z.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ke.clippingPlanes=me.uniform),Od(I,ze),Z.needsLights=ng(I),Z.lightsStateVersion=Ce,Z.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Qe,Z.uniformsList=null,Qe}function Fd(I){if(I.uniformsList===null){let H=I.currentProgram.getUniforms();I.uniformsList=mr.seqWithValue(H.seq,I.uniforms)}return I.uniformsList}function Od(I,H){let K=$.get(I);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function eg(I,H,K,Z,G){H.isScene!==!0&&(H=Ze),C.resetTextureUnits();let _e=H.fog,Ce=Z.isMeshStandardMaterial?H.environment:null,ze=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:cn,Be=(Z.isMeshStandardMaterial?O:A).get(Z.envMap||Ce),Ke=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qe=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ke=!!K.morphAttributes.position,ft=!!K.morphAttributes.normal,It=!!K.morphAttributes.color,Dt=$i;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Dt=x.toneMapping);let vn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_t=vn!==void 0?vn.length:0,He=$.get(Z),yi=p.state.lights;if(se===!0&&(ge===!0||I!==w)){let Un=I===w&&Z.id===y;me.setState(Z,I,Un)}let vt=!1;Z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==yi.state.version||He.outputColorSpace!==ze||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isBatchedMesh&&He.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&He.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==Be||Z.fog===!0&&He.fog!==_e||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==me.numPlanes||He.numIntersection!==me.numIntersection)||He.vertexAlphas!==Ke||He.vertexTangents!==Qe||He.morphTargets!==ke||He.morphNormals!==ft||He.morphColors!==It||He.toneMapping!==Dt||He.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,He.__version=Z.version);let Yn=He.currentProgram;vt===!0&&(Yn=ea(Z,H,G));let Ys=!1,wn=!1,eo=!1,Ut=Yn.getUniforms(),si=He.uniforms;if(pe.useProgram(Yn.program)&&(Ys=!0,wn=!0,eo=!0),Z.id!==y&&(y=Z.id,wn=!0),Ys||w!==I){pe.buffers.depth.getReversed()?(he.copy(I.projectionMatrix),n0(he),i0(he),Ut.setValue(L,"projectionMatrix",he)):Ut.setValue(L,"projectionMatrix",I.projectionMatrix),Ut.setValue(L,"viewMatrix",I.matrixWorldInverse);let ki=Ut.map.cameraPosition;ki!==void 0&&ki.setValue(L,Oe.setFromMatrixPosition(I.matrixWorld)),Me.logarithmicDepthBuffer&&Ut.setValue(L,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ut.setValue(L,"isOrthographic",I.isOrthographicCamera===!0),w!==I&&(w=I,wn=!0,eo=!0)}if(G.isSkinnedMesh){Ut.setOptional(L,G,"bindMatrix"),Ut.setOptional(L,G,"bindMatrixInverse");let Un=G.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Ut.setValue(L,"boneTexture",Un.boneTexture,C))}G.isBatchedMesh&&(Ut.setOptional(L,G,"batchingTexture"),Ut.setValue(L,"batchingTexture",G._matricesTexture,C),Ut.setOptional(L,G,"batchingIdTexture"),Ut.setValue(L,"batchingIdTexture",G._indirectTexture,C),Ut.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Ut.setValue(L,"batchingColorTexture",G._colorsTexture,C));let to=K.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0)&&Xe.update(G,K,Yn),(wn||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,Ut.setValue(L,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(si.envMap.value=Be,si.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(si.envMapIntensity.value=H.environmentIntensity),wn&&(Ut.setValue(L,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&tg(si,eo),_e&&Z.fog===!0&&xe.refreshFogUniforms(si,_e),xe.refreshMaterialUniforms(si,Z,z,W,p.state.transmissionRenderTarget[I.id]),mr.upload(L,Fd(He),si,C)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(mr.upload(L,Fd(He),si,C),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ut.setValue(L,"center",G.center),Ut.setValue(L,"modelViewMatrix",G.modelViewMatrix),Ut.setValue(L,"normalMatrix",G.normalMatrix),Ut.setValue(L,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Un=Z.uniformsGroups;for(let ki=0,Hi=Un.length;ki<Hi;ki++){let zd=Un[ki];B.update(zd,Yn),B.bind(zd,Yn)}}return Yn}function tg(I,H){I.ambientLightColor.needsUpdate=H,I.lightProbe.needsUpdate=H,I.directionalLights.needsUpdate=H,I.directionalLightShadows.needsUpdate=H,I.pointLights.needsUpdate=H,I.pointLightShadows.needsUpdate=H,I.spotLights.needsUpdate=H,I.spotLightShadows.needsUpdate=H,I.rectAreaLights.needsUpdate=H,I.hemisphereLights.needsUpdate=H}function ng(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(I,H,K){$.get(I.texture).__webglTexture=H,$.get(I.depthTexture).__webglTexture=K;let Z=$.get(I);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,H){let K=$.get(I);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(I,H=0,K=0){R=I,M=H,E=K;let Z=!0,G=null,_e=!1,Ce=!1;if(I){let Be=$.get(I);if(Be.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1;else if(Be.__webglFramebuffer===void 0)C.setupRenderTarget(I);else if(Be.__hasExternalTextures)C.rebindTextures(I,$.get(I.texture).__webglTexture,$.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let ke=I.depthTexture;if(Be.__boundDepthTexture!==ke){if(ke!==null&&$.has(ke)&&(I.width!==ke.image.width||I.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(I)}}let Ke=I.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ce=!0);let Qe=$.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qe[H])?G=Qe[H][K]:G=Qe[H],_e=!0):I.samples>0&&C.useMultisampledRTT(I)===!1?G=$.get(I).__webglMultisampledFramebuffer:Array.isArray(Qe)?G=Qe[K]:G=Qe,T.copy(I.viewport),P.copy(I.scissor),U=I.scissorTest}else T.copy(te).multiplyScalar(z).floor(),P.copy(ue).multiplyScalar(z).floor(),U=ye;if(pe.bindFramebuffer(L.FRAMEBUFFER,G)&&Z&&pe.drawBuffers(I,G),pe.viewport(T),pe.scissor(P),pe.setScissorTest(U),_e){let Be=$.get(I.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Be.__webglTexture,K)}else if(Ce){let Be=$.get(I.texture),Ke=H||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.__webglTexture,K||0,Ke)}y=-1},this.readRenderTargetPixels=function(I,H,K,Z,G,_e,Ce){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=$.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(ze=ze[Ce]),ze){pe.bindFramebuffer(L.FRAMEBUFFER,ze);try{let Be=I.texture,Ke=Be.format,Qe=Be.type;if(!Me.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=I.width-Z&&K>=0&&K<=I.height-G&&L.readPixels(H,K,Z,G,tt.convert(Ke),tt.convert(Qe),_e)}finally{let Be=R!==null?$.get(R).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(I,H,K,Z,G,_e,Ce){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=$.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(ze=ze[Ce]),ze){let Be=I.texture,Ke=Be.format,Qe=Be.type;if(!Me.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=I.width-Z&&K>=0&&K<=I.height-G){pe.bindFramebuffer(L.FRAMEBUFFER,ze);let ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),L.readPixels(H,K,Z,G,tt.convert(Ke),tt.convert(Qe),0);let ft=R!==null?$.get(R).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,ft);let It=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await t0(L,It,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.deleteBuffer(ke),L.deleteSync(It),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,H=null,K=0){I.isTexture!==!0&&(ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,I=arguments[1]);let Z=Math.pow(2,-K),G=Math.floor(I.image.width*Z),_e=Math.floor(I.image.height*Z),Ce=H!==null?H.x:0,ze=H!==null?H.y:0;C.setTexture2D(I,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Ce,ze,G,_e),pe.unbindTexture()},this.copyTextureToTexture=function(I,H,K=null,Z=null,G=0){I.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,I=arguments[1],H=arguments[2],G=arguments[3]||0,K=null);let _e,Ce,ze,Be,Ke,Qe,ke,ft,It,Dt=I.isCompressedTexture?I.mipmaps[G]:I.image;K!==null?(_e=K.max.x-K.min.x,Ce=K.max.y-K.min.y,ze=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,Ke=K.min.y,Qe=K.isBox3?K.min.z:0):(_e=Dt.width,Ce=Dt.height,ze=Dt.depth||1,Be=0,Ke=0,Qe=0),Z!==null?(ke=Z.x,ft=Z.y,It=Z.z):(ke=0,ft=0,It=0);let vn=tt.convert(H.format),_t=tt.convert(H.type),He;H.isData3DTexture?(C.setTexture3D(H,0),He=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(C.setTexture2DArray(H,0),He=L.TEXTURE_2D_ARRAY):(C.setTexture2D(H,0),He=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);let yi=L.getParameter(L.UNPACK_ROW_LENGTH),vt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Yn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ys=L.getParameter(L.UNPACK_SKIP_ROWS),wn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qe);let eo=I.isDataArrayTexture||I.isData3DTexture,Ut=H.isDataArrayTexture||H.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let si=$.get(I),to=$.get(H),Un=$.get(si.__renderTarget),ki=$.get(to.__renderTarget);pe.bindFramebuffer(L.READ_FRAMEBUFFER,Un.__webglFramebuffer),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Hi=0;Hi<ze;Hi++)eo&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$.get(I).__webglTexture,G,Qe+Hi),I.isDepthTexture?(Ut&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$.get(H).__webglTexture,G,It+Hi),L.blitFramebuffer(Be,Ke,_e,Ce,ke,ft,_e,Ce,L.DEPTH_BUFFER_BIT,L.NEAREST)):Ut?L.copyTexSubImage3D(He,G,ke,ft,It+Hi,Be,Ke,_e,Ce):L.copyTexSubImage2D(He,G,ke,ft,It+Hi,Be,Ke,_e,Ce);pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ut?I.isDataTexture||I.isData3DTexture?L.texSubImage3D(He,G,ke,ft,It,_e,Ce,ze,vn,_t,Dt.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(He,G,ke,ft,It,_e,Ce,ze,vn,Dt.data):L.texSubImage3D(He,G,ke,ft,It,_e,Ce,ze,vn,_t,Dt):I.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,ke,ft,_e,Ce,vn,_t,Dt.data):I.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,ke,ft,Dt.width,Dt.height,vn,Dt.data):L.texSubImage2D(L.TEXTURE_2D,G,ke,ft,_e,Ce,vn,_t,Dt);L.pixelStorei(L.UNPACK_ROW_LENGTH,yi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ys),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wn),G===0&&H.generateMipmaps&&L.generateMipmap(He),pe.unbindTexture()},this.copyTextureToTexture3D=function(I,H,K=null,Z=null,G=0){return I.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,I=arguments[2],H=arguments[3],G=arguments[4]||0),ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,H,K,Z,G)},this.initRenderTarget=function(I){$.get(I).__webglFramebuffer===void 0&&C.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?C.setTextureCube(I,0):I.isData3DTexture?C.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?C.setTexture2DArray(I,0):C.setTexture2D(I,0),pe.unbindTexture()},this.resetState=function(){M=0,E=0,R=null,pe.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var qa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ar=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new D,es=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ge(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var kf=new D,Hf=new dt,Gf=new dt,$y=new D,Vf=new We,Ma=new D,Al=new Tn,Wf=new We,Rl=new Sr,Ya=class extends de{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gd,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(s),e.ray.intersectsSphere(Al)!==!1&&(Wf.copy(s).invert(),Rl.copy(e.ray).applyMatrix4(Wf),!(this.boundingBox!==null&&Rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Hf.fromBufferAttribute(s.attributes.skinIndex,e),Gf.fromBufferAttribute(s.attributes.skinWeight,e),kf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Gf.getComponent(r);if(o!==0){let a=Hf.getComponent(r);Vf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector($y.copy(kf).applyMatrix4(Vf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},bo=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ka=class extends Jt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=on,h=on,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xf=new We,Jy=new We,Za=class i{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Jy;Xf.multiplyMatrices(a,t[r]),Xf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ka(t,e,e,Fn,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new bo),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Is=class extends Ge{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cr=new We,qf=new We,ba=[],Yf=new pn,jy=new We,oo=new de,ao=new Tn,$e=class extends de{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Yf.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(Yf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),ao.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),qf.multiplyMatrices(n,cr),oo.matrixWorld=qf,oo.raycast(e,ba);for(let o=0,a=ba.length;o<a;o++){let c=ba[o];c.instanceId=r,c.object=this,t.push(c)}ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ka(new Float32Array(s*this.count),s,this.count,fu,jn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ps=class extends An{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$a=new D,Ja=new D,Kf=new We,co=new Sr,wa=new Tn,Cl=new D,Zf=new D,Rr=class extends Ft{constructor(e=new rt,t=new Ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$a.fromBufferAttribute(t,s-1),Ja.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$a.distanceTo(Ja);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;Kf.copy(s).invert(),co.copy(e.ray).applyMatrix4(Kf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){let p=h.getX(_),S=h.getX(_+1),b=Sa(this,e,co,c,p,S);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=Sa(this,e,co,c,_,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){let p=Sa(this,e,co,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){let _=Sa(this,e,co,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sa(i,e,t,n,s,r){let o=i.geometry.attributes.position;if($a.fromBufferAttribute(o,s),Ja.fromBufferAttribute(o,r),t.distanceSqToSegment($a,Ja,Cl,Zf)>n)return;Cl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Cl);if(!(c<e.near||c>e.far))return{distance:c,point:Zf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var $f=new D,Jf=new D,Cr=class extends Rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$f.fromBufferAttribute(t,s),Jf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$f.distanceTo(Jf);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ja=class extends Rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},wo=class extends An{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jf=new We,Nh=new Sr,Ea=new Tn,Ta=new D,Ir=class extends Ft{constructor(e=new rt,t=new wo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;jf.copy(s).invert(),Nh.copy(e.ray).applyMatrix4(jf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=l.getX(g);Ta.fromBufferAttribute(u,m),Qf(Ta,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ta.fromBufferAttribute(u,g),Qf(Ta,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qf(i,e,t,n,s,r,o){let a=Nh.distanceSqToPoint(i);if(a<t){let c=new D;Nh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var So=class extends Jt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=on,this.minFilter=on,this.generateMipmaps=!1,this.needsUpdate=!0}};var Qn=class extends Jt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ae:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,s=[],r=[],o=[],a=new D,c=new We;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(sn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(sn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Eo=class extends kn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fh=class extends Eo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Aa=new D,Il=new vu,Pl=new vu,Ll=new vu,Oh=class extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Aa.subVectors(s[0],s[1]).add(s[0]),l=Aa);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Aa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Aa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Il.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Pl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Ll.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Pl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ll.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Il.calc(c),Pl.calc(c),Ll.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ep(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Qy(i,e){let t=1-i;return t*t*e}function eM(i,e){return 2*(1-i)*i*e}function tM(i,e){return i*i*e}function xo(i,e,t,n){return Qy(i,e)+eM(i,t)+tM(i,n)}function nM(i,e){let t=1-i;return t*t*t*e}function iM(i,e){let t=1-i;return 3*t*t*i*e}function sM(i,e){return 3*(1-i)*i*i*e}function rM(i,e){return i*i*i*e}function _o(i,e,t,n,s){return nM(i,e)+iM(i,t)+sM(i,n)+rM(i,s)}var Qa=class extends kn{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_o(e,s.x,r.x,o.x,a.x),_o(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zh=class extends kn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_o(e,s.x,r.x,o.x,a.x),_o(e,s.y,r.y,o.y,a.y),_o(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends kn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bh=class extends kn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends kn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xo(e,s.x,r.x,o.x),xo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kh=class extends kn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xo(e,s.x,r.x,o.x),xo(e,s.y,r.y,o.y),xo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ep(a,c.x,l.x,h.x,u.x),ep(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},Hh=Object.freeze({__proto__:null,ArcCurve:Fh,CatmullRomCurve3:Oh,CubicBezierCurve:Qa,CubicBezierCurve3:zh,EllipseCurve:Eo,LineCurve:ec,LineCurve3:Bh,QuadraticBezierCurve:tc,QuadraticBezierCurve3:kh,SplineCurve:nc}),Gh=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Hh[s.type]().fromJSON(s))}return this}},ic=class extends Gh{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ec(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new tc(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Qa(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new nc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Eo(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Ls=class i extends rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new D,h=new ae;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gt=class i extends rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;S(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function S(){let x=new D,v=new D,M=0,E=(t-e)/n;for(let R=0;R<=r;R++){let y=[],w=R/r,T=w*(t-e)+e;for(let P=0;P<=s;P++){let U=P/s,N=U*c+a,k=Math.sin(N),F=Math.cos(N);v.x=T*k,v.y=-w*n+m,v.z=T*F,u.push(v.x,v.y,v.z),x.set(k,E,F).normalize(),d.push(x.x,x.y,x.z),f.push(U,1-w),y.push(g++)}_.push(y)}for(let R=0;R<s;R++)for(let y=0;y<r;y++){let w=_[y][R],T=_[y+1][R],P=_[y+1][R+1],U=_[y][R+1];(e>0||y!==0)&&(h.push(w,T,U),M+=3),(t>0||y!==r-1)&&(h.push(T,P,U),M+=3)}l.addGroup(p,M,0),p+=M}function b(x){let v=g,M=new ae,E=new D,R=0,y=x===!0?e:t,w=x===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let T=g;for(let P=0;P<=s;P++){let N=P/s*c+a,k=Math.cos(N),F=Math.sin(N);E.x=y*F,E.y=m*w,E.z=y*k,u.push(E.x,E.y,E.z),d.push(0,w,0),M.x=k*.5+.5,M.y=F*.5*w+.5,f.push(M.x,M.y),g++}for(let P=0;P<s;P++){let U=v+P,N=T+P;x===!0?h.push(N,N+1,U):h.push(N+1,N,U),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},To=class i extends Gt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vh=class i extends rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let b=new D,x=new D,v=new D;for(let M=0;M<t.length;M+=3)f(t[M+0],b),f(t[M+1],x),f(t[M+2],v),c(b,x,v,S)}function c(S,b,x,v){let M=v+1,E=[];for(let R=0;R<=M;R++){E[R]=[];let y=S.clone().lerp(x,R/M),w=b.clone().lerp(x,R/M),T=M-R;for(let P=0;P<=T;P++)P===0&&R===M?E[R][P]=y:E[R][P]=y.clone().lerp(w,P/T)}for(let R=0;R<M;R++)for(let y=0;y<2*(M-R)-1;y++){let w=Math.floor(y/2);y%2===0?(d(E[R][w+1]),d(E[R+1][w]),d(E[R][w])):(d(E[R][w+1]),d(E[R+1][w+1]),d(E[R+1][w]))}}function l(S){let b=new D;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(S),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){let S=new D;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];let x=m(S)/2/Math.PI+.5,v=p(S)/Math.PI+.5;o.push(x,1-v)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){let b=o[S+0],x=o[S+2],v=o[S+4],M=Math.max(b,x,v),E=Math.min(b,x,v);M>.9&&E<.1&&(b<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),v<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,b){let x=S*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){let S=new D,b=new D,x=new D,v=new D,M=new ae,E=new ae,R=new ae;for(let y=0,w=0;y<r.length;y+=9,w+=6){S.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),M.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),R.set(o[w+4],o[w+5]),v.copy(S).add(b).add(x).divideScalar(3);let T=m(v);_(M,w+0,S,T),_(E,w+2,b,T),_(R,w+4,x,T)}}function _(S,b,x,v){v<0&&S.x===1&&(o[b]=S.x-1),x.x===0&&x.z===0&&(o[b]=v/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},sc=class i extends Vh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var li=class extends ic{constructor(e){super(e),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ic().fromJSON(s))}return this}},oM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Lp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=uM(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ao(r,o,t,a,c,f,0),o}};function Lp(i,e,t,n,s){let r,o;if(s===bM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=tp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=tp(r,i[r],i[r+1],o);return o&&xc(o,o.next)&&(Co(o),o=o.next),o}function Ds(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(xc(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Co(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ao(i,e,t,n,s,r,o){if(!i)return;!o&&r&&gM(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?cM(i,n,s,r):aM(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Co(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=lM(Ds(i),e,t),Ao(i,e,t,n,s,r,2)):o===2&&hM(i,e,t,n,s,r):Ao(Ds(i),e,t,n,s,r,1);break}}}function aM(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ur(s,a,r,c,o,l,g.x,g.y)&&Ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cM(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Wh(f,g,e,t,n),S=Wh(_,m,e,t,n),b=i.prevZ,x=i.nextZ;for(;b&&b.z>=p&&x&&x.z<=S;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ur(a,h,c,u,l,d,b.x,b.y)&&Ht(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ur(a,h,c,u,l,d,x.x,x.y)&&Ht(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ur(a,h,c,u,l,d,b.x,b.y)&&Ht(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ur(a,h,c,u,l,d,x.x,x.y)&&Ht(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function lM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!xc(s,r)&&Dp(s,n,n.next,r)&&Ro(s,r)&&Ro(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Co(n),Co(n.next),n=i=r),n=n.next}while(n!==i);return Ds(n)}function hM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vM(o,a)){let c=Up(o,a);o=Ds(o,o.next),c=Ds(c,c.next),Ao(o,e,t,n,s,r,0),Ao(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function uM(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Lp(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(_M(l));for(s.sort(dM),r=0;r<s.length;r++)t=fM(s[r],t);return t}function dM(i,e){return i.x-e.x}function fM(i,e){let t=pM(i,e);if(!t)return e;let n=Up(t,i);return Ds(n,n.next),Ds(t,t.next)}function pM(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&ur(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ro(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&mM(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function mM(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function gM(i,e,t,n){let s=i;do s.z===0&&(s.z=Wh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xM(s)}function xM(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Wh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _M(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ur(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function vM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yM(i,e)&&(Ro(i,e)&&Ro(e,i)&&MM(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||xc(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function xc(i,e){return i.x===e.x&&i.y===e.y}function Dp(i,e,t,n){let s=Ca(Ht(i,e,t)),r=Ca(Ht(i,e,n)),o=Ca(Ht(t,n,i)),a=Ca(Ht(t,n,e));return!!(s!==r&&o!==a||s===0&&Ra(i,t,e)||r===0&&Ra(i,n,e)||o===0&&Ra(t,i,n)||a===0&&Ra(t,e,n))}function Ra(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ca(i){return i>0?1:i<0?-1:0}function yM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ro(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function MM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Up(i,e){let t=new Xh(i.i,i.x,i.y),n=new Xh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function tp(i,e,t,n){let s=new Xh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ji=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];np(e),ip(n,e);let o=e.length;t.forEach(np);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,ip(n,t[c]);let a=oM.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function np(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ip(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Us=class i extends rt{constructor(e=new li([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:wM,b,x=!1,v,M,E,R;p&&(b=p.getSpacedPoints(h),x=!0,d=!1,v=p.computeFrenetFrames(h,!1),M=new D,E=new D,R=new D),d||(m=0,f=0,g=0,_=0);let y=a.extractPoints(l),w=y.shape,T=y.holes;if(!Ji.isClockWise(w)){w=w.reverse();for(let ne=0,fe=T.length;ne<fe;ne++){let L=T[ne];Ji.isClockWise(L)&&(T[ne]=L.reverse())}}let U=Ji.triangulateShape(w,T),N=w;for(let ne=0,fe=T.length;ne<fe;ne++){let L=T[ne];w=w.concat(L)}function k(ne,fe,L){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(fe,L)}let F=w.length,W=U.length;function z(ne,fe,L){let De,ce,Me,pe=ne.x-fe.x,re=ne.y-fe.y,$=L.x-ne.x,C=L.y-ne.y,A=pe*pe+re*re,O=pe*C-re*$;if(Math.abs(O)>Number.EPSILON){let Y=Math.sqrt(A),Q=Math.sqrt($*$+C*C),J=fe.x-re/Y,Ae=fe.y+pe/Y,xe=L.x-C/Q,we=L.y+$/Q,qe=((xe-J)*C-(we-Ae)*$)/(pe*C-re*$);De=J+pe*qe-ne.x,ce=Ae+re*qe-ne.y;let me=De*De+ce*ce;if(me<=2)return new ae(De,ce);Me=Math.sqrt(me/2)}else{let Y=!1;pe>Number.EPSILON?$>Number.EPSILON&&(Y=!0):pe<-Number.EPSILON?$<-Number.EPSILON&&(Y=!0):Math.sign(re)===Math.sign(C)&&(Y=!0),Y?(De=-re,ce=pe,Me=Math.sqrt(A)):(De=pe,ce=re,Me=Math.sqrt(A/2))}return new ae(De/Me,ce/Me)}let ee=[];for(let ne=0,fe=N.length,L=fe-1,De=ne+1;ne<fe;ne++,L++,De++)L===fe&&(L=0),De===fe&&(De=0),ee[ne]=z(N[ne],N[L],N[De]);let j=[],te,ue=ee.concat();for(let ne=0,fe=T.length;ne<fe;ne++){let L=T[ne];te=[];for(let De=0,ce=L.length,Me=ce-1,pe=De+1;De<ce;De++,Me++,pe++)Me===ce&&(Me=0),pe===ce&&(pe=0),te[De]=z(L[De],L[Me],L[pe]);j.push(te),ue=ue.concat(te)}for(let ne=0;ne<m;ne++){let fe=ne/m,L=f*Math.cos(fe*Math.PI/2),De=g*Math.sin(fe*Math.PI/2)+_;for(let ce=0,Me=N.length;ce<Me;ce++){let pe=k(N[ce],ee[ce],De);he(pe.x,pe.y,-L)}for(let ce=0,Me=T.length;ce<Me;ce++){let pe=T[ce];te=j[ce];for(let re=0,$=pe.length;re<$;re++){let C=k(pe[re],te[re],De);he(C.x,C.y,-L)}}}let ye=g+_;for(let ne=0;ne<F;ne++){let fe=d?k(w[ne],ue[ne],ye):w[ne];x?(E.copy(v.normals[0]).multiplyScalar(fe.x),M.copy(v.binormals[0]).multiplyScalar(fe.y),R.copy(b[0]).add(E).add(M),he(R.x,R.y,R.z)):he(fe.x,fe.y,0)}for(let ne=1;ne<=h;ne++)for(let fe=0;fe<F;fe++){let L=d?k(w[fe],ue[fe],ye):w[fe];x?(E.copy(v.normals[ne]).multiplyScalar(L.x),M.copy(v.binormals[ne]).multiplyScalar(L.y),R.copy(b[ne]).add(E).add(M),he(R.x,R.y,R.z)):he(L.x,L.y,u/h*ne)}for(let ne=m-1;ne>=0;ne--){let fe=ne/m,L=f*Math.cos(fe*Math.PI/2),De=g*Math.sin(fe*Math.PI/2)+_;for(let ce=0,Me=N.length;ce<Me;ce++){let pe=k(N[ce],ee[ce],De);he(pe.x,pe.y,u+L)}for(let ce=0,Me=T.length;ce<Me;ce++){let pe=T[ce];te=j[ce];for(let re=0,$=pe.length;re<$;re++){let C=k(pe[re],te[re],De);x?he(C.x,C.y+b[h-1].y,b[h-1].x+L):he(C.x,C.y,u+L)}}}X(),se();function X(){let ne=s.length/3;if(d){let fe=0,L=F*fe;for(let De=0;De<W;De++){let ce=U[De];Ne(ce[2]+L,ce[1]+L,ce[0]+L)}fe=h+m*2,L=F*fe;for(let De=0;De<W;De++){let ce=U[De];Ne(ce[0]+L,ce[1]+L,ce[2]+L)}}else{for(let fe=0;fe<W;fe++){let L=U[fe];Ne(L[2],L[1],L[0])}for(let fe=0;fe<W;fe++){let L=U[fe];Ne(L[0]+F*h,L[1]+F*h,L[2]+F*h)}}n.addGroup(ne,s.length/3-ne,0)}function se(){let ne=s.length/3,fe=0;ge(N,fe),fe+=N.length;for(let L=0,De=T.length;L<De;L++){let ce=T[L];ge(ce,fe),fe+=ce.length}n.addGroup(ne,s.length/3-ne,1)}function ge(ne,fe){let L=ne.length;for(;--L>=0;){let De=L,ce=L-1;ce<0&&(ce=ne.length-1);for(let Me=0,pe=h+m*2;Me<pe;Me++){let re=F*Me,$=F*(Me+1),C=fe+De+re,A=fe+ce+re,O=fe+ce+$,Y=fe+De+$;Oe(C,A,O,Y)}}}function he(ne,fe,L){c.push(ne),c.push(fe),c.push(L)}function Ne(ne,fe,L){Fe(ne),Fe(fe),Fe(L);let De=s.length/3,ce=S.generateTopUV(n,s,De-3,De-2,De-1);Ze(ce[0]),Ze(ce[1]),Ze(ce[2])}function Oe(ne,fe,L,De){Fe(ne),Fe(fe),Fe(De),Fe(fe),Fe(L),Fe(De);let ce=s.length/3,Me=S.generateSideWallUV(n,s,ce-6,ce-3,ce-2,ce-1);Ze(Me[0]),Ze(Me[1]),Ze(Me[3]),Ze(Me[1]),Ze(Me[2]),Ze(Me[3])}function Fe(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function Ze(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return SM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Hh[s.type]().fromJSON(s)),new i(n,e.options)}},wM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,c),new ae(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ae(o,1-c),new ae(l,1-u),new ae(d,1-g),new ae(_,1-p)]:[new ae(a,1-c),new ae(h,1-u),new ae(f,1-g),new ae(m,1-p)]}};function SM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var rc=class i extends rt{constructor(e=new li([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(r,3)),this.setAttribute("uv",new ut(o,2));function l(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Ji.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let S=g[m];Ji.isClockWise(S)===!0&&(g[m]=S.reverse())}let _=Ji.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let S=g[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){let S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=_.length;m<p;m++){let S=_[m],b=S[0]+u,x=S[1]+u,v=S[2]+u;n.push(b,x,v),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return EM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function EM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ei=class i extends rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],b=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let v=0;v<=t;v++){let M=v/t;u.x=-e*Math.cos(s+M*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+M*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(M+x,1-b),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let b=h[p][S+1],x=h[p][S],v=h[p+1][S],M=h[p+1][S+1];(p!==0||o>0)&&f.push(b,x,M),(p!==n-1||c<Math.PI)&&f.push(x,v,M)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ts=class i extends rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ns=class extends Ot{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Rt=class extends An{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bp,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rn=class extends Rt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ia(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function TM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function AM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function sp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Np(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var is=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qh=class extends is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vd,endingEnd:Vd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wd:r=e,a=2*t-n;break;case Xd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wd:o=e,c=2*n-t;break;case Xd:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let v=0;v!==a;++v)r[v]=p*o[h+v]+S*o[l+v]+b*o[c+v]+x*o[u+v];return r}},Yh=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Kh=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ia(t,this.TimeBufferType),this.values=Ia(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ia(e.times,Array),values:Ia(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case br:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&TM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===el,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=br;var ss=class extends Hn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Mr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends Hn{};oc.prototype.ValueTypeName="color";var Di=class extends Hn{};Di.prototype.ValueTypeName="number";var Zh=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)jt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ui=class extends Hn{InterpolantFactoryMethodLinear(e){return new Zh(this.times,this.values,this.getValueSize(),e)}};Ui.prototype.ValueTypeName="quaternion";Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Hn{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Mr;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Hn{};Ni.prototype.ValueTypeName="vector";var ac=class{constructor(e="",t=-1,n=[],s=Ag){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(CM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=AM(c);c=sp(c,1,h),l=sp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Di(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,_){if(f.length!==0){let m=[],p=[];Np(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){let b=d[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}s.push(new Di(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(Ni,f+".position",d,"pos",s),n(Ui,f+".quaternion",d,"rot",s),n(Ni,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function RM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Di;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return oc;case"quaternion":return Ui;case"bool":case"boolean":return ss;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function CM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=RM(i.type);if(i.times===void 0){let t=[],n=[];Np(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Zi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},$h=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},IM=new $h,ti=class{constructor(e){this.manager=e!==void 0?e:IM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ti={},Jh=class extends Error{constructor(e,t){super(e),this.response=t}},os=class extends ti{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:n,onError:s});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ti[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){S();function S(){u.read().then(({done:b,value:x})=>{if(b)p.close();else{_+=x.byteLength;let v=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let M=0,E=h.length;M<E;M++){let R=h[M];R.onProgress&&R.onProgress(v)}p.enqueue(x),S()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Jh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Zi.add(e,l);let h=Ti[e];delete Ti[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ti[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ti[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var jh=class extends ti{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=yo("img");function c(){h(),Zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Pr=class extends ti{constructor(e){super(e)}load(e,t,n,s){let r=new Jt,o=new jh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Lr=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},cc=class extends Lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Dl=new We,rp=new D,op=new D,Io=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(rp),op.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(op),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qh=class extends Io{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=wr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Dr=class extends Lr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Qh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ap=new We,lo=new D,Ul=new D,eu=class extends Io{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lo.setFromMatrixPosition(e.matrixWorld),n.position.copy(lo),Ul.copy(n.position),Ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ul),n.updateMatrixWorld(),s.makeTranslation(-lo.x,-lo.y,-lo.z),ap.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ap)}},lc=class extends Lr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tu=class extends Io{constructor(){super(new Qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new tu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var as=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var hc=class extends ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Zi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Zi.add(e,c),r.manager.itemStart(e)}};var Nr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=cp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function cp(){return performance.now()}var yu="\\[\\]\\.:\\/",PM=new RegExp("["+yu+"]","g"),Mu="[^"+yu+"]",LM="[^"+yu.replace("\\.","")+"]",DM=/((?:WC+[\/:])*)/.source.replace("WC",Mu),UM=/(WCOD+)?/.source.replace("WCOD",LM),NM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mu),FM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mu),OM=new RegExp("^"+DM+UM+NM+FM+"$"),zM=["material","materials","bones","map"],nu=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(PM,"")}static parseTrackName(e){let t=OM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=nu;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nb=new Float32Array(1);var lp=new ae,uc=class{constructor(e=new ae(1/0,1/0),t=new ae(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=lp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:iu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=iu);function bu(i,e){if(e===Mp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Do||e===pc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Do)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var zr=class extends ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Vu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=as.extractUrlBase(e);o=as.resolveURL(l,this.path)}else o=as.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new os(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===kp){try{o[ct.KHR_BINARY_GLTF]=new Wu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ju(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ct.KHR_MATERIALS_UNLIT:o[u]=new Au;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[u]=new Xu(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[u]=new qu;break;case ct.KHR_MESH_QUANTIZATION:o[u]=new Yu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function BM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Tu=class{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],cn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ur(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new lc(h),l.distance=u;break;case"spot":l=new Dr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Au=class{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){let s=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}},Ru=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Cu=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(a,a)}return Promise.all(r)}},Iu=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Pu=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],cn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Uu=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],cn),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Fu=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],cn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}},Ou=class{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},zu=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ku=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Hu=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Gu=class{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Vu=class{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Gn.TRIANGLES&&l.mode!==Gn.TRIANGLE_STRIP&&l.mode!==Gn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let _=new We,m=new D,p=new jt,S=new D(1,1,1),b=new $e(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&S.fromBufferAttribute(c.SCALE,x),b.setMatrixAt(x,_.compose(m,p,S));for(let x in c)if(x==="_COLOR_0"){let v=c[x];b.instanceColor=new Is(v.array,v.itemSize,v.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Ft.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},kp="glTF",No=12,Fp={JSON:1313821514,BIN:5130562},Wu=class{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,No),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-No,r=new DataView(e,No),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Fp.JSON){let l=new Uint8Array(e,No+o,a);this.content=n.decode(l)}else if(c===Fp.BIN){let l=No+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Zu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Zu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Or[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,cn,d)})})}},qu=class{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Yu=class{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}},_c=class extends is{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,S=1-m,b=p-d+u;for(let x=0;x!==a;x++){let v=o[_+x+a],M=o[_+x+c]*h,E=o[g+x+a],R=o[g+x]*h;r[x]=S*v+b*M+m*E+p*R}return r}},kM=new jt,Ku=class extends _c{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return kM.fromArray(r).normalize().toArray(r),r}},Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Op={9728:on,9729:yn,9984:lu,9985:fo,9986:lr,9987:oi},zp={33071:Ci,33648:As,10497:Li},wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},HM={CUBICSPLINE:void 0,LINEAR:br,STEP:Mr},Su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Rt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),i.DefaultMaterial}function Ns(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function WM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function XM(i){let e,t=i.extensions&&i.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Eu(t.attributes):e=i.indices+":"+Eu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Eu(i.targets[n]);return e}function Eu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function $u(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var YM=new We,Ju=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new BM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&o<98?this.textureLoader=new Pr(this.options.manager):this.textureLoader=new hc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new os(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ns(r,a,s),Fi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(as.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=wu[s.type],a=Or[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ge(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=wu[s.type],l=Or[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(f&&f!==u){let p=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(S);b||(_=new l(a,p*f,s.count*f/h),b=new Cs(_,f/h),t.cache.add(S,b)),m=new es(b,c,d%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new Ge(_,c,g);if(s.sparse!==void 0){let p=wu.SCALAR,S=Or[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,v=new S(o[1],b,s.sparse.count*p),M=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new Ge(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,R=v.length;E<R;E++){let y=v[E];if(m.setX(y,M[E*c]),c>=2&&m.setY(y,M[E*c+1]),c>=3&&m.setZ(y,M[E*c+2]),c>=4&&m.setW(y,M[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Op[d.magFilter]||yn,h.minFilter=Op[d.minFilter]||oi,h.wrapS=zp[d.wrapS]||Li,h.wrapT=zp[d.wrapT]||Li,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==on&&h.minFilter!==yn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Jt(_);m.needsUpdate=!0,d(m)}),t.load(as.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Fi(u,o),u.userData.mimeType=o.mimeType||qM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new wo,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ps,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Rt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ct.KHR_MATERIALS_UNLIT]){let u=s[ct.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],cn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Et)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Nt);let h=r.alphaMode||Su.OPAQUE;if(h===Su.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Su.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Bt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Bt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Bt){let u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],cn)}return r.emissiveTexture!==void 0&&o!==Bt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Fi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ns(s,u,r),u})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Bp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=XM(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Bp(new rt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?GM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=o[f],p,S=l[f];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ya(_,S):new de(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Gn.TRIANGLE_STRIP?p.geometry=bu(p.geometry,pc):m.mode===Gn.TRIANGLE_FAN&&(p.geometry=bu(p.geometry,Do));else if(m.mode===Gn.LINES)p=new Cr(_,S);else if(m.mode===Gn.LINE_STRIP)p=new Rr(_,S);else if(m.mode===Gn.LINE_LOOP)p=new ja(_,S);else if(m.mode===Gn.POINTS)p=new Ir(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&WM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Fi(p,r),m.extensions&&Ns(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ns(s,u[0],r),u[0];let d=new pt;r.extensions&&Ns(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(Uo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Qi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new We;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Za(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let S=0,b=d.length;S<b;S++){let x=d[S],v=f[S],M=g[S],E=_[S],R=m[S];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let y=n._createAnimationTracks(x,v,M,E,R);if(y)for(let w=0;w<y.length;w++)p.push(y[w])}return new ac(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,YM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new bo:l.length>1?h=new pt:l.length===1?h=l[0]:h=new Ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Fi(h,r),r.extensions&&Ns(n,h,r),r.matrix!==void 0){let u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new pt;n.name&&(r.name=s.createUniqueName(n.name)),Fi(r,n),n.extensions&&Ns(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof An||d instanceof Jt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];ls[r.path]===ls.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ls[r.path]){case ls.weights:l=Di;break;case ls.rotation:l=Ui;break;case ls.position:case ls.scale:l=Ni;break;default:switch(n.itemSize){case 1:l=Di;break;case 2:case 3:default:l=Ni;break}break}let h=s.interpolation!==void 0?HM[s.interpolation]:br,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+ls[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=$u(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ui?Ku:_c;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function KM(i,e,t){let n=e.attributes,s=new pn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=$u(Or[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=$u(Or[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Tn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Bp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Zu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return it.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),Fi(i,e),KM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?VM(i,e.targets,t):i})}var ju=new WeakMap,Br=class extends ti{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new os(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Et,n).catch(n)}decodeDracoFile(e,t,n,s,r=cn,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(ju.has(e)){let c=ju.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),ju.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new rt;e.index&&t.setIndex(new Ge(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,c=new Ge(o,a);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==Et)return;let n=new Te;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),it.toWorkingColorSpace(n,Et),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new os(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=ZM.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function ZM(){let i,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){let h=l.attributeIDs,u=l.attributeTypes,d,f,g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let _={index:null,attributes:[]};for(let m in h){let p=self[u[m]],S,b;if(l.useUniqueIDs)b=h[m],S=a.GetAttributeByUniqueId(d,b);else{if(b=a.GetAttributeId(d,o[h[m]]),b===-1)continue;S=a.GetAttribute(d,b)}let x=s(o,a,d,m,p,S);m==="color"&&(x.vertexColorSpace=l.vertexColorSpace),_.attributes.push(x)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,c){let h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);let f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,c,l,h,u){let d=u.num_components(),g=c.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(c,u,m,_,p);let S=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:S,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var kt=[{id:"ferrari458",name:"Ferrari 458",w:2.26,len:4.53,maxKmh:300,accel:13,handling:10},{id:"aventador",name:"Lamborghini Aventador",w:2.27,len:4.78,maxKmh:320,accel:14,handling:9.5},{id:"valhalla",name:"Aston Martin Valhalla",w:2.2,len:4.7,maxKmh:330,accel:15,handling:10.5},{id:"porsche911",name:"Porsche 911 Turbo",w:2.14,len:4.29,maxKmh:250,accel:11,handling:10},{id:"tesla3",name:"Tesla Model 3",w:2.18,len:4.69,maxKmh:240,accel:12,handling:9},{id:"urus",name:"Lamborghini Urus",w:2.26,len:5.11,maxKmh:280,accel:11,handling:8.5},{id:"peugeot3008",name:"Peugeot 3008",w:2.1,len:4.45,maxKmh:190,accel:8,handling:8},{id:"bolide",name:"Bugatti Bolide",w:2.12,len:4.76,maxKmh:500,accel:17,handling:10.5},{id:"roadster",name:"Tesla Roadster",w:1.88,len:4.6,maxKmh:400,accel:18,handling:9.5},{id:"ferrari599",name:"Ferrari 599 GTO",w:2.14,len:4.71,maxKmh:335,accel:14,handling:9.5},{id:"gt40",name:"Ford GT40",w:1.81,len:4.18,maxKmh:330,accel:13,handling:9},{id:"gtr",name:"Nissan GT-R",w:2.05,len:4.71,maxKmh:315,accel:14,handling:10},{id:"challenger",name:"Dodge Challenger",w:2.08,len:5.03,maxKmh:280,accel:11,handling:7.5},{id:"lancia037",name:"Lancia 037 Rally",w:1.88,len:3.92,maxKmh:220,accel:9,handling:9.5}],Hp=new Br;Hp.setDecoderPath("draco/");var Gp=new zr;Gp.setDRACOLoader(Hp);var ni={},kr={};function $M(i,e){let t=i.scene,n=[],s=[];return t.traverse(r=>{if(!r.isMesh)return;r.castShadow=!0,r.receiveShadow=!1,r.frustumCulled=!1;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o){if(!a)continue;a.transparent&&a.opacity<.99&&(a.depthWrite=!1),a.transmission>0&&(a.transmission=0,a.transparent=!0,a.opacity=Math.min(a.opacity,.45),a.depthWrite=!1,a.needsUpdate=!0);let c=(a.name||"").toLowerCase();/tail|brake|rear.?light|back.?light|lights_?glass_?back|stop|red_glass/.test(c)&&!/front/.test(c)?s.push(a):(/head|front.?light|light.*front|lights?front|led|lamp|phare|lights_red|lichter|projector|lightemissive|lighta_material|headlights/.test(c)||/^light/.test(c))&&n.push(a),a.envMapIntensity===void 0&&(a.envMapIntensity=1)}}),{scene:t,headMats:n,tailMats:s}}function Fo(i,e,t){let n=i+(e?"_lo":"");return ni[n]?Promise.resolve(ni[n]):(kr[n]||(kr[n]=new Promise((s,r)=>{Gp.load(`models/${n}.glb`,o=>{ni[n]=$M(o,!e),delete kr[n],s(ni[n])},t,o=>{delete kr[n],r(o)})})),kr[n])}var Fs=(i,e)=>!!ni[i+(e?"_lo":"")],vc=null;function JM(){if(vc)return vc;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,10,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.3)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),vc=new Qn(i),vc}function Hr(i,e,t){let n=ni[i+(e?"_lo":"")]||ni[i+"_lo"],s=kt.find(u=>u.id===i),r=n.scene.clone(!0),o=new Map;r.traverse(u=>{if(!u.isMesh)return;let d=f=>{if(f&&/^BODY_PAINT/.test(f.name)){if(!o.has(f)){let g=f.clone();g.color.setHex(t),g.metalness=Math.max(g.metalness,.5),g.roughness=Math.min(g.roughness,.35),g.envMapIntensity=1.2,o.set(f,g)}return o.get(f)}return f};u.material=Array.isArray(u.material)?u.material.map(d):d(u.material)});let a=[],c=[];r.traverse(u=>{/^wheel_(FL|FR|RL|RR)$/.test(u.name)&&c.push(u)});for(let u of c){let d=new pt;d.position.copy(u.position),u.position.set(0,0,0),r.add(d),d.add(u);let f=new pn().setFromObject(u);d.userData.spin=u,d.userData.front=/F/.test(u.name),d.userData.radius=Math.max(.25,(f.max.y-f.min.y)/2),a.push(d)}let l=new de(new Yt(s.w+.9,s.len+.9),new Bt({map:JM(),transparent:!0,depthWrite:!1,opacity:.9}));l.rotation.x=-Math.PI/2,l.position.y=.06,l.renderOrder=1,l.userData.own=!0,r.add(l);let h=new de(new ei(.3,10,8),new Bt({color:5609983,transparent:!0,opacity:0,depthWrite:!1,blending:zn}));return h.position.set(0,.38,s.len/2+.35),h.scale.set(1.6,.45,2.2),h.userData.own=!0,r.add(h),r.userData={spec:s,wheels:a,glow:h,paint:[...o.values()],proto:n},r}function Vp(i){for(let e in ni){let t=ni[e];for(let n of t.headMats)n.emissive=n.emissive||new Te,n.emissive.setHex(16773840),n.emissiveIntensity=i?4:0;for(let n of t.tailMats)n.emissive=n.emissive||new Te,n.emissive.setHex(16722458),n.emissiveIntensity=i?2.5:0}}function Wp(i){for(let e in ni)ni[e].scene.traverse(t=>{if(t.isMesh){let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n)s&&(s.envMapIntensity=i)}})}function Gr(i){if(i){for(let e of i.userData.paint||[])e.dispose();i.traverse(e=>{e.isMesh&&e.userData.own&&(e.geometry.dispose(),e.material&&e.material.dispose&&e.material.dispose())})}}var Oo=class i extends de{constructor(){let e=i.SkyShader,t=new Ot({name:e.name,uniforms:hi.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:rn,depthWrite:!1});super(new at(1,1,1),t),this.isSky=!0}};Oo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
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

		}`};var Qu=i=>i[Math.floor(Math.random()*i.length)],Zp="kidcars-progress-v1",Ie={stars:0,missions:0,deliveries:0,km:0,bestKmh:0,boosts:0,horns:0,worlds:{},cars:{},nightKm:0,photos:0,duas:0,masjids:0,goodStops:0,pads:0,stickers:{}};try{Object.assign(Ie,JSON.parse(localStorage.getItem(Zp)||"{}"))}catch(i){}function zs(){try{localStorage.setItem(Zp,JSON.stringify(Ie))}catch(i){}}var Mc=[{id:"star1",e:"\u2B50",n:"First Star",ok:()=>Ie.stars>=1},{id:"star50",e:"\u{1F31F}",n:"Star Collector",ok:()=>Ie.stars>=50},{id:"star200",e:"\u2728",n:"Star Hunter",ok:()=>Ie.stars>=200},{id:"star500",e:"\u{1F4AB}",n:"Star Master",ok:()=>Ie.stars>=500},{id:"star1000",e:"\u{1F320}",n:"Star Legend",ok:()=>Ie.stars>=1e3},{id:"m1",e:"\u{1F3AF}",n:"First Mission",ok:()=>Ie.missions>=1},{id:"m5",e:"\u{1F3C5}",n:"Five Missions",ok:()=>Ie.missions>=5},{id:"m20",e:"\u{1F3C6}",n:"Mission Champ",ok:()=>Ie.missions>=20},{id:"km5",e:"\u{1F6E3}\uFE0F",n:"5 km Driven",ok:()=>Ie.km>=5},{id:"km25",e:"\u{1F5FA}\uFE0F",n:"25 km Driven",ok:()=>Ie.km>=25},{id:"km100",e:"\u{1F30D}",n:"100 km Driven",ok:()=>Ie.km>=100},{id:"sp100",e:"\u{1F4A8}",n:"100 km/h",ok:()=>Ie.bestKmh>=100},{id:"sp200",e:"\u{1F680}",n:"200 km/h",ok:()=>Ie.bestKmh>=200},{id:"sp300",e:"\u26A1",n:"300 km/h",ok:()=>Ie.bestKmh>=300},{id:"wc",e:"\u{1F333}",n:"Country Driver",ok:()=>(Ie.worlds.country||0)>=1},{id:"wd",e:"\u{1F335}",n:"Desert Driver",ok:()=>(Ie.worlds.desert||0)>=1},{id:"wci",e:"\u{1F3D9}\uFE0F",n:"City Driver",ok:()=>(Ie.worlds.city||0)>=1},{id:"ws",e:"\u26C4",n:"Snow Driver",ok:()=>(Ie.worlds.snow||0)>=1},{id:"wl",e:"\u{1F3D8}\uFE0F",n:"Lenasia Driver",ok:()=>(Ie.worlds.lenasia||0)>=1},{id:"night",e:"\u{1F319}",n:"Night Owl",ok:()=>Ie.nightKm>=1},{id:"d1",e:"\u{1F6CB}\uFE0F",n:"Recliner Delivered",ok:()=>Ie.deliveries>=1},{id:"d10",e:"\u{1F69A}",n:"Delivery Pro",ok:()=>Ie.deliveries>=10},{id:"cars",e:"\u{1F697}",n:"Drove Every Car",ok:()=>Object.keys(Ie.cars).length>=14},{id:"fast",e:"\u{1F3CE}\uFE0F",n:"Speed Demon",ok:()=>Ie.bestKmh>=400},{id:"horn",e:"\u{1F4E3}",n:"Beep Beep",ok:()=>Ie.horns>=20},{id:"photo",e:"\u{1F4F8}",n:"Photographer",ok:()=>Ie.photos>=1},{id:"dua",e:"\u{1F932}",n:"Bismillah",ok:()=>(Ie.duas||0)>=5},{id:"masjid",e:"\u{1F54C}",n:"Masjid Visitor",ok:()=>(Ie.masjids||0)>=10},{id:"stop",e:"\u{1F6A6}",n:"Good Driver",ok:()=>(Ie.goodStops||0)>=5},{id:"pad",e:"\u26A1",n:"Zoom Zoom",ok:()=>(Ie.pads||0)>=10}];function zo(){let i=[];for(let e of Mc)!Ie.stickers[e.id]&&e.ok()&&(Ie.stickers[e.id]=1,i.push(e));return i.length&&zs(),i}var $p=400,ii=null,Os=[],Xp=new We,qp=new D,Yp=new jt,jM=new D(1,1,1),Kp=new an;function Jp(i){let e=new li;for(let s=0;s<10;s++){let r=s%2?.3:.7,o=s/10*Math.PI*2-Math.PI/2,a=Math.cos(o)*r,c=Math.sin(o)*r;s?e.lineTo(a,c):e.moveTo(a,c)}e.closePath();let t=new Us(e,{depth:.16,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2});t.center();let n=new Rt({color:16762940,emissive:16751104,emissiveIntensity:.8,roughness:.3,metalness:.4});return ii=new $e(t,n,$p),ii.frustumCulled=!1,ii.count=0,i.add(ii),ii}function Vr(i,e,t){Os.length>=$p||Os.push({x:i,z:e,g:t,alive:!0,ph:Math.random()*6.28})}function bc(i){for(let e=Os.length-1;e>=0;e--)Os[e].g===i&&Os.splice(e,1)}function jp(){Os.length=0,ii&&(ii.count=0)}var ed=0;function Qp(i,e,t){if(!ii)return 0;ed+=i*2.2;let n=0,s=0;for(let r of Os){if(!r.alive)continue;let o=!1;for(let[a,c]of e){let l=r.x-a,h=r.z-c;if(l*l+h*h<2.3*2.3){o=!0;break}}if(o){r.alive=!1,s++,t&&t(r.x,r.z);continue}qp.set(r.x,1.05+Math.sin(ed*1.4+r.ph)*.14,r.z),Kp.set(0,ed+r.ph,0),Yp.setFromEuler(Kp),Xp.compose(qp,Yp,jM),ii.setMatrixAt(n++,Xp)}return ii.count=n,ii.instanceMatrix.needsUpdate=!0,s}function em(i){let e=new pt,t=new Bt({color:16766282,transparent:!0,opacity:.32,depthWrite:!1,blending:zn,side:Nt,fog:!1}),n=new de(new Gt(1.6,2.2,60,16,1,!0),t);n.position.y=30,e.add(n);let s=new de(new ts(3.2,.25,8,32),new Rt({color:16766282,emissive:16756736,emissiveIntensity:1.2,roughness:.3}));return s.rotation.x=Math.PI/2,s.position.y=.4,e.add(s),e.visible=!1,i.add(e),e.userData.tick=(r,o)=>{s.position.y=.5+Math.sin(o*2.5)*.3,s.rotation.z+=r,t.opacity=.26+Math.sin(o*3)*.08},e}function tm(){let i=new pt,e=new Rt({color:5913382,roughness:.55,metalness:.05}),t=new Rt({color:2825492,roughness:.7}),n=new Rt({color:13677676,roughness:.35,metalness:.7}),s=(r,o,a,c,l,h,u,d=0)=>{let f=new de(new at(r,o,a),c);return f.position.set(l,h,u),f.rotation.x=d,f.castShadow=!0,i.add(f),f};return s(.95,.12,.9,t,0,.06,0),s(.8,.3,.8,e,0,.3,.05),s(.8,.85,.28,e,0,.78,-.42,-.22),s(.2,.42,.85,e,-.45,.42,0),s(.2,.42,.85,e,.45,.42,0),s(.7,.14,.42,e,0,.36,.62,.35),s(.5,.06,.06,n,0,1.18,-.5),i.scale.setScalar(.85),i}var QM=i=>{let e=(i.name||"").toLowerCase(),t=i.k;return/masjid|mosque|islam|sufi|jumma/.test(e)||t==="mosque"?"\u{1F54C}":/temple|koil|mandir|sai centre|hindu/.test(e)?"\u{1F6D5}":/church|catholic|chapel|kingdom hall/.test(e)||t==="place_of_worship"?"\u26EA":{mall:"\u{1F6CD}\uFE0F",school:"\u{1F3EB}",park:"\u{1F333}",supermarket:"\u{1F6D2}",hospital:"\u{1F3E5}",clinic:"\u{1F3E5}",library:"\u{1F4DA}",police:"\u{1F693}",fuel:"\u26FD",sports_centre:"\u26BD",community_centre:"\u{1F3DB}\uFE0F",childcare:"\u{1F9F8}",retail:"\u{1F3EA}",commercial:"\u{1F3EA}",chemist:"\u{1F48A}",butcher:"\u{1F969}",stationery:"\u270F\uFE0F"}[t]||"\u{1F4CD}"},eb=/cemetery|parking|residential/,yc=class{constructor(){this.cur=null,this.seq=0,this.ownStars=0}next(e){let t=this.seq++,n=[()=>({kind:"stars",icon:"\u2B50",text:`Collect ${10+5*(t%3)} stars`,need:10+5*(t%3),have:0,reward:20}),()=>({kind:"km",icon:"\u{1F6E3}\uFE0F",text:`Drive ${t>6?2:1} km`,need:(t>6?2:1)*1e3,have:0,reward:20,unit:"km"}),()=>{let r=Math.round(e.maxKmh*(.5+Math.min(.3,t*.03))/10)*10;return{kind:"speed",icon:"\u{1F4A8}",text:`Reach ${r} km/h`,need:r,have:0,reward:20,unit:"kmh"}},()=>({kind:"clean",icon:"\u{1F6E1}\uFE0F",text:"Drive 600 m with no bumps",need:600,have:0,reward:25,unit:"m"}),()=>({kind:"boost",icon:"\u26A1",text:"Use boost 3 times",need:3,have:0,reward:15}),()=>({kind:"horn",icon:"\u{1F4E3}",text:"Honk the horn 5 times",need:5,have:0,reward:10})];e.traffic&&!e.isMap&&n.push(()=>({kind:"pass",icon:"\u{1F697}",text:`Pass ${3+t%2*2} cars`,need:3+t%2*2,have:0,reward:25}));let s=null;if(e.isMap){let r=t%3;if(r===0&&t%9===6&&e.showroomAt){let o=this.snap(e.road,e.showroomAt[0],e.showroomAt[1],!0),a=o?Math.hypot(o[0]-e.x,o[1]-e.z):0;o&&a>300&&a<7e3&&(s={kind:"goto",icon:"\u{1F6CB}\uFE0F",text:"Drive to Glyde-X Recliners",target:[o[0],o[1]],poi:e.showroomAt,need:1,have:0,reward:60})}r===0&&!s?s=this.gotoMission(e):r===1&&(s=this.deliverMission(e)),s||(s=Qu(n)())}else s=n[t%n.length]();return s.phase=0,this.cur=s,this.ownStars=0,s}snap(e,t,n,s){let r=e.nearest(t,n,{skipMinor:!0});return s&&(!r||r.d>60)&&(r=e.nearest(t,n)),!r||r.d>1e8||r.d>90?null:[r.px,r.pz,r.name]}gotoMission(e){let n=e.road.data.pois.filter(s=>s.name&&!eb.test(s.k)&&s.name.length<34).map(s=>({p:s,d:Math.hypot(s.c[0]-e.x,s.c[1]-e.z)})).filter(s=>s.d>250&&s.d<950);for(let s=0;s<12&&n.length;s++){let r=Qu(n),o=this.snap(e.road,r.p.c[0],r.p.c[1]);if(o)return{kind:"goto",icon:QM(r.p),text:`Drive to ${r.p.name}`,target:[o[0],o[1]],poi:r.p.c,need:1,have:0,reward:25}}return null}deliverMission(e){if(!e.showroomAt)return null;let t=this.snap(e.road,e.showroomAt[0],e.showroomAt[1],!0);if(!t)return null;let n=e.road.nodes,s=[];for(let c of e.road.roads){if(!c.name||!/residential|living_street|unclassified/.test(c.t)||c.len<80)continue;let l=n[c.n[Math.floor(c.n.length/2)]],h=Math.hypot(l[0]-t[0],l[1]-t[1]);h<300||h>3200||s.push({r:c,p:l})}if(!s.length)return null;s.sort((c,l)=>Math.hypot(c.p[0]-t[0],c.p[1]-t[1])-Math.hypot(l.p[0]-t[0],l.p[1]-t[1]));let{r,p:o}=Qu(s.slice(0,Math.max(6,Math.ceil(s.length/4)))),a=Math.hypot(t[0]-e.x,t[1]-e.z)>2500;return{kind:"deliver",icon:"\u{1F6CB}\uFE0F",text:a?"Drive to Glyde-X for a recliner":"Pick up a recliner at Glyde-X",text2:`Deliver it to a house on ${r.name}`,target:[t[0],t[1]],target2:[o[0],o[1]],need:2,have:0,reward:a?70:40}}event(e,t){let n=this.cur;if(!n||n.done)return!1;switch(n.kind){case"stars":e==="star"&&n.have++;break;case"km":e==="dist"&&(n.have+=t);break;case"speed":e==="speed"&&(n.have=Math.max(n.have,t));break;case"clean":e==="dist"&&(n.have+=t),e==="hit"&&(n.have=0);break;case"boost":e==="boost"&&n.have++;break;case"horn":e==="horn"&&n.have++;break;case"pass":e==="pass"&&n.have++;break;case"goto":e==="pos"&&(Math.hypot(t[0]-n.target[0],t[1]-n.target[1])<22||Math.hypot(t[0]-n.poi[0],t[1]-n.poi[1])<45)&&(n.have=1);break;case"deliver":if(e==="pos"){let s=n.phase===0?n.target:n.target2;if(Math.hypot(t[0]-s[0],t[1]-s[1])<22){if(n.phase===0)return n.phase=1,n.have=1,"pickup";n.have=2}}break}return n.have>=n.need?(n.done=!0,"done"):!1}target(){let e=this.cur;return!e||e.done?null:e.kind==="goto"?e.target:e.kind==="deliver"?e.phase===0?e.target:e.target2:null}label(){let e=this.cur;if(!e)return{icon:"",text:"",prog:""};let t=e.kind==="deliver"&&e.phase===1?e.text2:e.text,n="";return e.unit==="km"?n=`${(Math.min(e.have,e.need)/1e3).toFixed(1)} / ${(e.need/1e3).toFixed(0)} km`:e.unit==="m"?n=`${Math.min(e.have,e.need).toFixed(0)} / ${e.need} m`:e.unit==="kmh"?n=`${Math.round(e.have)} / ${e.need}`:e.kind==="goto"||e.kind==="deliver"?n="":n=`${e.have} / ${e.need}`,{icon:e.icon,text:t,prog:n}}};var ui=4,Bs=64,Xt=13.5,mi=[-4.3,0,4.3],Wr=Xt/2+3.3,st=(i,e)=>i+Math.random()*(e-i);var di=new jt,fi=new D,pi=new D(1,1,1),Vn=new We,Wn=new an;function hs(i,e,t,n,s,r,o){fi.set(t,n,s),Wn.set(0,r,0),di.setFromEuler(Wn),pi.set(o,o,o),Vn.compose(fi,di,pi),i.setMatrixAt(e,Vn)}function nm(i,e){let t=new $e(i.trunk.geometry,i.trunk.material,e.length),n=new $e(i.cards.geometry,i.cards.material,e.length*i.cards.n),s=0;return e.forEach((r,o)=>{let{x:a,z:c,scale:l}=r;fi.set(a,0,c),Wn.set(0,r.rot||0,0),di.setFromEuler(Wn),pi.set(l,i.trunk.h*l,l),Vn.compose(fi,di,pi),t.setMatrixAt(o,Vn);let h=i.cards;for(let u=0;u<h.n;u++){let d=st(0,6.28),f=st(-1,1),g=Math.sqrt(1-f*f)*st(.35,1),_=h.yc+f*h.ry,m=h.rx;if(h.cone){let S=(u+.5)/h.n;_=h.yc-h.ry+S*h.ry*2,m=h.rx*(1.15-S)}fi.set(a+Math.cos(d)*g*m*l,_*l,c+Math.sin(d)*g*m*l),h.flat?Wn.set(Math.PI/2-st(.15,.45),st(0,6.28),0,"YXZ"):Wn.set(st(-h.tilt,h.tilt),st(0,6.28),st(-.3,.3),"YXZ"),di.setFromEuler(Wn);let p=l*st(.8,1.15);pi.set(p,p,p),Vn.compose(fi,di,pi),n.setMatrixAt(s++,Vn)}}),t.castShadow=!0,n.castShadow=!0,t.frustumCulled=!1,n.frustumCulled=!1,[t,n]}var wc=class{constructor(e,t){this.scene=e,this.style=t,this.group=new pt,e.add(this.group),this.samples=[],this.chunks=new Map,this.gen={x:0,z:0,h:0,s:0,k:0,kTarget:0,left:0,rampLen:40},this.piece=null,this.piece={type:"straight",left:200},this.extend(1500)}nextPiece(){if(Math.random()<.35)return{type:"straight",left:st(80,260)};let t=st(140,480),n=st(12,65)*Math.PI/180;return{type:"curve",k:(Math.random()<.5?-1:1)/t,left:t*n,ramp:40}}extend(e){let t=this.gen;for(;t.s<e;){(!this.piece||this.piece.left<=0)&&(this.piece=this.nextPiece());let n=this.piece,s=n.type==="curve"?n.k:0;t.k+=(s-t.k)*Math.min(1,ui/35),t.h+=t.k*ui,t.x+=-Math.sin(t.h)*ui,t.z+=-Math.cos(t.h)*ui,t.s+=ui,n.left-=ui,this.samples.push({x:t.x,z:t.z,h:t.h,s:t.s,k:t.k})}}pointAt(e){let t=e/ui,n=Math.floor(t),s=t-n;n<0&&(n=0),n>=this.samples.length-1&&(n=this.samples.length-2);let r=this.samples[n],o=this.samples[n+1],a=o.h-r.h;a>Math.PI&&(a-=Math.PI*2),a<-Math.PI&&(a+=Math.PI*2);let c=r.h+a*s;return{x:r.x+(o.x-r.x)*s,z:r.z+(o.z-r.z)*s,h:c,rx:Math.cos(c),rz:-Math.sin(c),fx:-Math.sin(c),fz:-Math.cos(c)}}nearest(e,t,n){let s=this.samples.length,r=-1,o=1/0,a=Math.max(0,n-40),c=Math.min(s-1,n+40);for(let m=a;m<=c;m++){let p=this.samples[m],S=(p.x-e)**2+(p.z-t)**2;S<o&&(o=S,r=m)}let l=this.samples[r],h=Math.cos(l.h),u=-Math.sin(l.h),d=-Math.sin(l.h),f=-Math.cos(l.h),g=e-l.x,_=t-l.z;return{i:r,d:g*h+_*u,along:g*d+_*f,s:l.s+(g*d+_*f),h:l.h,fx:d,fz:f,rx:h,rz:u,k:l.k}}ensure(e){let t=Math.max(0,Math.floor((e-70)/Bs)),n=Math.floor((e+330)/Bs);this.extend((n+2)*Bs*ui);for(let[s,r]of this.chunks)(s<t||s>n+1)&&(this.disposeChunk(r),this.chunks.delete(s));for(let s=t;s<=n;s++)this.chunks.has(s)||this.chunks.set(s,this.buildChunk(s))}disposeChunk(e){this.group.remove(e.group),bc("c"+e.ci),e.group.traverse(t=>{if(t.isInstancedMesh){t.dispose();return}t.isMesh&&!t.userData.shared&&t.geometry.dispose()})}obstaclesNear(e){let t=[],n=Math.floor((e-20)/Bs),s=Math.floor((e+20)/Bs);for(let r=n;r<=s;r++){let o=this.chunks.get(r);if(o)for(let a of o.obstacles)t.push(a)}return t}ribbon(e,t,n,s,r,o,a=!1){let c=t-e+1,l=new Float32Array(c*2*3),h=new Float32Array(c*2*2),u=[];for(let f=0;f<c;f++){let g=this.samples[e+f],_=Math.cos(g.h),m=-Math.sin(g.h);l.set([g.x+_*n,r,g.z+m*n,g.x+_*s,r,g.z+m*s],f*6);let p=g.s*o;if(h.set([0,p,1,p],f*4),f<c-1){let S=f*2;s>n?u.push(S,S+1,S+2,S+1,S+3,S+2):u.push(S,S+2,S+1,S+1,S+2,S+3)}}let d=new rt;return d.setAttribute("position",new Ge(l,3)),d.setAttribute("uv",new Ge(h,2)),d.setIndex(u),d.computeVertexNormals(),d}shortRibbon(e,t,n,s,r){let a=new Float32Array(12),c=new Float32Array(8);[e,t].forEach((h,u)=>{let d=this.pointAt(h);a.set([d.x+d.rx*n,r,d.z+d.rz*n,d.x+d.rx*s,r,d.z+d.rz*s],u*6),c.set([0,u,1,u],u*4)});let l=new rt;return l.setAttribute("position",new Ge(a,3)),l.setAttribute("uv",new Ge(c,2)),l.setIndex(s>n?[0,1,2,1,3,2]:[0,2,1,1,2,3]),l.computeVertexNormals(),l}buildChunk(e){let t=this.style,n=t.mats,s=e*Bs,r=Math.min(this.samples.length-1,(e+1)*Bs),o=new pt,a=[],c=this.samples[s].s,l=this.samples[r].s,h=new de(this.ribbon(s,r,-Xt/2,Xt/2,.05,1/7),n.road);h.receiveShadow=!0,o.add(h);for(let f of[-1,1]){let g=new de(this.ribbon(s,r,f*Xt/2,f*(Xt/2+3.2),.035,.14285714285714285),n.shoulder);g.receiveShadow=!0,o.add(g),o.add(new de(this.ribbon(s,r,f*(Xt/2-.45),f*(Xt/2-.27),.07,1),n.line))}let u=[];for(let f=Math.ceil(c/9)*9;f<l;f+=9)for(let g of[-2.15,2.15])u.push(this.shortRibbon(f,f+3.2,g-.08,g+.08,.07));if(u.length){let f=tb(u);o.add(new de(f,n.line))}if(t.guardrail){let f=(r-s+1)*2,g=new $e(n.railGeo,n.rail,f),_=new $e(n.postGeo,n.rail,f),m=0;for(let p=s;p<=r;p++)for(let S of[-1,1]){let b=this.samples[p],x=Math.cos(b.h),v=-Math.sin(b.h);hs(g,m,b.x+x*S*Wr,.7,b.z+v*S*Wr,b.h,1),hs(_,m,b.x+x*S*(Wr+.05),.38,b.z+v*S*(Wr+.05),b.h,1),m++}g.frustumCulled=!1,_.frustumCulled=!1,o.add(g,_)}if(t.poles){let f=Math.floor((l-c)/10)*2,g=new $e(n.poleGeo,n.pole,f),_=0;for(let m=c;m<l-1&&_<f;m+=10)for(let p of[-1,1]){let S=this.pointAt(m);hs(g,_++,S.x+S.rx*p*(Xt/2+.9),.7,S.z+S.rz*p*(Xt/2+.9),S.h,1)}g.count=_,o.add(g)}for(let f of t.scatter){if(f.tree){let m=f.tree,p=f.perChunk,S=new $e(m.trunk.geometry,m.trunk.material,p),b=new $e(m.cards.geometry,m.cards.material,p*m.cards.n),x=0;for(let v=0;v<p;v++){let M=st(c,l),R=(Math.random()<.5?-1:1)*st(f.lat[0],f.lat[1]),y=this.pointAt(M),w=st(f.scale[0],f.scale[1]),T=y.x+y.rx*R,P=y.z+y.rz*R;fi.set(T,0,P),Wn.set(0,st(0,6.28),0),di.setFromEuler(Wn),pi.set(w,m.trunk.h*w,w),Vn.compose(fi,di,pi),S.setMatrixAt(v,Vn);let U=m.cards;for(let N=0;N<U.n;N++){let k=st(0,6.28),F=st(-1,1),W=Math.sqrt(1-F*F)*st(.35,1),z=U.yc+F*U.ry,ee=U.rx;if(U.cone){let ye=(N+.5)/U.n;z=U.yc-U.ry+ye*U.ry*2,ee=U.rx*(1.15-ye)}let j=T+Math.cos(k)*W*ee*w,te=P+Math.sin(k)*W*ee*w;fi.set(j,z*w,te),U.flat?Wn.set(Math.PI/2-st(.15,.45),st(0,6.28),0,"YXZ"):Wn.set(st(-U.tilt,U.tilt),st(0,6.28),st(-.3,.3),"YXZ"),di.setFromEuler(Wn);let ue=w*st(.8,1.15);pi.set(ue,ue,ue),Vn.compose(fi,di,pi),b.setMatrixAt(x++,Vn)}Math.abs(R)<45&&a.push({type:"circle",x:T,z:P,r:m.obstacle*w})}S.castShadow=!0,b.castShadow=!0,S.frustumCulled=!1,b.frustumCulled=!1,o.add(S,b);continue}if(f.grass){let m=f.perChunk,p=new $e(f.grass.geometry,f.grass.material,m);for(let S=0;S<m;S++){let b=st(c,l),v=(Math.random()<.5?-1:1)*st(f.lat[0],f.lat[1]),M=this.pointAt(b),E=st(f.scale[0],f.scale[1]);hs(p,S,M.x+M.rx*v,0,M.z+M.rz*v,st(0,6.28),E)}p.frustumCulled=!1,o.add(p);continue}let g=f.perChunk,_=f.parts.map(m=>new $e(m.geometry,m.material,g));for(let m=0;m<g;m++){let p=st(c,l),b=(Math.random()<.5?-1:1)*st(f.lat[0],f.lat[1]),x=this.pointAt(p),v=st(f.scale[0],f.scale[1]),M=f.billboard?(Math.random()<.5?0:.5)+x.h:st(0,6.28),E=x.x+x.rx*b,R=x.z+x.rz*b;_.forEach((y,w)=>{let T=f.parts[w];hs(y,m,E,(T.y||0)*v,R,M+(T.rotY||0),v*(T.scale||1))}),f.obstacle&&Math.abs(b)<45&&a.push({type:"circle",x:E,z:R,r:f.obstacle*v})}_.forEach((m,p)=>{m.frustumCulled=!1,m.castShadow=!!f.parts[p].shadow,o.add(m)})}if(e>0)for(let f=0;f<3;f++){let g=st(c+12,l-30),_=mi[Math.floor(st(0,3))];for(let m=0;m<5;m++){let p=this.pointAt(g+m*5);Vr(p.x+p.rx*_,p.z+p.rz*_,"c"+e)}}let d=[];if(e>0&&e%2===0&&n.padGeo){let f=st(c+40,l-40),g=mi[Math.floor(st(0,3))],_=this.pointAt(f),m=new de(n.padGeo,n.pad);m.position.set(_.x+_.rx*g,.1,_.z+_.rz*g),m.rotation.y=_.h,m.userData.shared=!0,m.renderOrder=1,o.add(m),d.push({x:m.position.x,z:m.position.z,fx:_.fx,fz:_.fz})}if([[c+20,c+90],[c+100,c+170],[c+180,l-20]].forEach((g,_)=>{let m=st(g[0],g[1]),p=(e+_)%2===0?-1:1,S=this.pointAt(m),b=new pt,x=n.billboards[(e*3+_)%n.billboards.length],v=new de(n.bbPanelGeo,[n.rail,n.rail,n.rail,n.rail,x,n.rail]);v.position.set(0,7.5,0),v.userData.shared=!0,b.add(v);for(let y of[-3.5,3.5]){let w=new de(n.bbPostGeo,n.rail);w.position.set(y,2.25,0),w.userData.shared=!0,b.add(w)}let M=t.buildings?Xt/2+2.2:19;b.position.set(S.x+S.rx*p*M,0,S.z+S.rz*p*M),b.rotation.y=S.h-p*(t.buildings?.08:.55),o.add(b);let E=Math.cos(b.rotation.y),R=Math.sin(b.rotation.y);for(let y of[-3.5,3.5])a.push({type:"circle",x:b.position.x+y*E,z:b.position.z-y*R,r:.3})}),e%2===1){let g=(c+l)/2,_=this.pointAt(g),m=new pt;for(let b of[-1,1]){let x=new de(n.gantryPostGeo,n.rail);x.position.set(b*(Xt/2+1.2),3.75,0),x.userData.shared=!0,m.add(x),a.push({type:"circle",x:_.x+_.rx*b*(Xt/2+1.2),z:_.z+_.rz*b*(Xt/2+1.2),r:.4})}let p=new de(n.gantryBeamGeo,n.rail);p.position.set(0,7.5,0),p.userData.shared=!0,m.add(p);let S=new de(n.gantrySignGeo,[n.rail,n.rail,n.rail,n.rail,n.sign,n.rail]);S.position.set(0,6,.2),S.userData.shared=!0,m.add(S),m.position.set(_.x,0,_.z),m.rotation.y=_.h,o.add(m)}if(t.buildings){let f=c+st(0,10),g=0;for(;f<l-8;){for(let v of[-1,1]){let M=(Math.floor(f/37)+v)%6===0,E=t.makeBuilding(M),R=this.pointAt(f+E.d/2),y=v*(Xt/2+4.5+E.w/2+E.gap);if(E.group.position.set(R.x+R.rx*y,0,R.z+R.rz*y),E.group.rotation.y=R.h+(M?v===-1?-Math.PI/2:Math.PI/2:0),!M&&g%3===0){let P=new de(n.bbPanelGeo,[n.rail,n.rail,n.rail,n.rail,n.billboards[g%n.billboards.length],n.billboards[(g+1)%n.billboards.length]]),U=Math.min(1,E.d/13);P.scale.set(U,.7,1),P.position.set(v===-1?E.w/2-.3:-E.w/2+.3,E.h+2.3,0),P.rotation.y=v===-1?Math.PI/2:-Math.PI/2,P.userData.shared=!0,E.group.add(P);for(let N of[-3,3]){let k=new de(n.bbPostGeo,n.rail);k.scale.set(.6,.5,.6),k.position.set(P.position.x,E.h+1.1,N*U),k.userData.shared=!0,E.group.add(k)}}o.add(E.group);let w=M?E.d/2:E.w/2,T=M?E.w/2:E.d/2;a.push({type:"box",x:E.group.position.x,z:E.group.position.z,hw:w,hl:T,h:E.group.rotation.y}),g++}f+=st(14,24)}let _=Math.floor((l-c)/26)*2,m=new $e(n.lampGeo,n.lamp,_),p=new $e(n.lampGlowGeo,n.lampGlow,_),S=new $e(n.poolGeo,n.pool,_),b=0;for(let v=c+5;v<l-5&&b<_;v+=26)for(let M of[-1,1]){let E=this.pointAt(v),R=E.x+E.rx*M*(Xt/2+1),y=E.z+E.rz*M*(Xt/2+1);hs(m,b,R,0,y,E.h+(M===1?Math.PI:0),1),hs(p,b,R,0,y,E.h+(M===1?Math.PI:0),1),hs(S,b,R,0,y,E.h+(M===1?Math.PI:0),1),b++,a.push({type:"circle",x:R,z:y,r:.2})}let x=new $e(n.bannerGeo,n.banner,_);for(let v=0;v<b;v++)m.getMatrixAt(v,Vn),x.setMatrixAt(v,Vn);x.count=b,x.frustumCulled=!1,m.count=b,p.count=b,S.count=b,S.renderOrder=2,o.add(m,p,S,x)}return this.group.add(o),{ci:e,i0:s,i1:r,group:o,obstacles:a,pads:d}}padAt(e,t){for(let n of this.chunks.values())for(let s of n.pads||[]){let r=e-s.x,o=t-s.z;if(r*r+o*o>16)continue;let a=r*s.fx+o*s.fz,c=r*s.fz-o*s.fx;if(Math.abs(a)<2.4&&Math.abs(c)<1.9)return s}return null}dispose(){for(let e of this.chunks.values())this.disposeChunk(e);this.chunks.clear(),this.scene.remove(this.group)}};function tb(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e*3),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),s.set(h.attributes.uv.array,a*2),r.set(h.attributes.normal.array,a*3);let u=h.index.array;for(let d=0;d<u.length;d++)o[c+d]=u[d]+a;a+=h.attributes.position.count,c+=u.length,h.dispose()}let l=new rt;return l.setAttribute("position",new Ge(n,3)),l.setAttribute("uv",new Ge(s,2)),l.setAttribute("normal",new Ge(r,3)),l.setIndex(new Ge(o,1)),l}var cm=new Br;cm.setDecoderPath("draco/");var lm=new zr;lm.setDRACOLoader(cm);var Xr={masjid:{w:1,h:.827,d:.944},mall:{w:1,h:.31,d:.602},house:{w:1,h:.618,d:.739},showroom:{w:1,h:.457,d:.98}},Ec={},Sc=null,Bo=i=>!!Ec[i];function hm(i){if(Sc)return Sc;let e=Object.keys(Xr);return Sc=Promise.all(e.map(t=>new Promise(n=>{lm.load(`models/lm_${t}.glb`,s=>{let r=null,o=null;if(s.scene.traverse(a=>{a.isMesh&&!r&&(r=a.geometry,o=a.material)}),!r)return n();r.computeBoundingSphere(),o.roughness=.9,o.metalness=0,Ec[t]={geo:r,mat:o,...Xr[t]},n()},void 0,()=>n())}))).then(()=>{i&&i()}),Sc}var im=new D,sm=new jt,rm=new an,om=new D,am=new We;function um(i,e){let t=Ec[i];if(!t||!e.length)return null;/test=1/.test(location.search)&&console.log("LM "+i+" "+JSON.stringify(e.map(s=>[s.x|0,s.z|0,+s.yaw.toFixed(2),+s.sx.toFixed(1),+s.sz.toFixed(1),+s.sy.toFixed(1)])));let n=new $e(t.geo,t.mat,e.length);return e.forEach((s,r)=>{im.set(s.x,0,s.z),rm.set(0,s.yaw,0),sm.setFromEuler(rm),om.set(s.sx,s.sy,s.sz),am.compose(im,sm,om),n.setMatrixAt(r,am)}),n.castShadow=!0,n.receiveShadow=!0,n.userData.shared=!0,n.computeBoundingSphere(),n}function td(i,e,t,n,s){let r=Xr[i];if(!Ec[i])return null;let o=t-e.x,a=n-e.z,c=null;for(let m=0;m<4;m++){let p=e.h+m*Math.PI/2,S=Math.sin(p)*o+Math.cos(p)*a;(!c||S>c.dot)&&(c={yaw:p,k:m,dot:S})}let l=c.k%2===0?e.hw:e.hl,h=c.k%2===0?e.hl:e.hw,u=2*l/r.w,d=2*h/r.d,f=Math.min(u,d);if(f<(s.min||0))return null;let g=s.stretch||1;u=Math.min(u,f*g),d=Math.min(d,f*g);let _=Math.min(f,(s.maxH||1e9)/r.h);return{id:i,x:e.x,z:e.z,yaw:c.yaw,sx:u,sy:_,sz:d,h:r.h*_}}var Ye=400,dm=(i,e)=>i+Math.random()*(e-i),nb=(i,e,t)=>Math.max(e,Math.min(t,i)),gt=new jt,mt=new D,xt=new D(1,1,1),ht=new We,Mt=new an;function Je(i,e,t=0){let n=i*374761393+e*668265263+t*2147483647|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}var fm={motorway:.09,trunk:.09,primary:.085,secondary:.08,tertiary:.075,residential:.07,unclassified:.07,living_street:.065,service:.06,track:.055},pm={motorway:30,trunk:26,primary:20,secondary:17,tertiary:15,residential:11,unclassified:12,living_street:7,service:7,track:6},Cc=class{constructor(e,t,n){this.scene=e,this.style=t,this.data=n,this.M=t.mats,this.group=new pt,e.add(this.group),this.nodes=n.nodes,this.roads=n.roads,this.suburbs=n.suburbs||[],this.signs=n.signs||[],this.tlHeads=[],this.hasRails=!1,this.isMap=!0,this.tiles=new Map,this.roadMeshes=new Map,this.areaMeshes=new Map,this.signCache=new Map,this.signMats=[],this.buildIndex(),this.makeMaterials(),this.lm=[],hm(()=>{for(let[s,r]of this.tiles)this.disposeTile(r),this.tiles.delete(s)})}buildIndex(){let e=this.nodes;this.cell=60,this.hash=new Map,this.nodeRoads=new Map,this.roadTiles=new Map,this.tileRoads=new Map,this.tileBuildings=new Map,this.tileAreas=new Map,this.tileTrees=new Map,this.tilePois=new Map;let t=(s,r)=>s*100003+r;this.roads.forEach((s,r)=>{s.len=0,s.seg=[];for(let u=0;u<s.n.length-1;u++){let d=e[s.n[u]],f=e[s.n[u+1]],g=Math.hypot(f[0]-d[0],f[1]-d[1]);s.seg.push(g),s.len+=g;let _=Math.min(d[0],f[0]),m=Math.max(d[0],f[0]),p=Math.min(d[1],f[1]),S=Math.max(d[1],f[1]);for(let b=Math.floor(_/this.cell);b<=Math.floor(m/this.cell);b++)for(let x=Math.floor(p/this.cell);x<=Math.floor(S/this.cell);x++){let v=t(b,x),M=this.hash.get(v);M||(M=[],this.hash.set(v,M)),M.push(r*4096+u)}}s.n.forEach((u,d)=>{let f=this.nodeRoads.get(u);f||(f=[],this.nodeRoads.set(u,f)),f.push([r,d])});let o=1/0,a=-1/0,c=1/0,l=-1/0;for(let u of s.n){let d=e[u];o=Math.min(o,d[0]),a=Math.max(a,d[0]),c=Math.min(c,d[1]),l=Math.max(l,d[1])}let h=[];for(let u=Math.floor(o/Ye);u<=Math.floor(a/Ye);u++)for(let d=Math.floor(c/Ye);d<=Math.floor(l/Ye);d++){let f=t(u,d);h.push(f);let g=this.tileRoads.get(f);g||(g=[],this.tileRoads.set(f,g)),g.push(r)}this.roadTiles.set(r,h)});let n=(s,r,o,a)=>{let c=t(Math.floor(r/Ye),Math.floor(o/Ye)),l=s.get(c);l||(l=[],s.set(c,l)),l.push(a)};this.data.buildings.forEach((s,r)=>{let o=Ac(s.p);s.c=o,n(this.tileBuildings,o[0],o[1],r)}),this.data.areas.forEach((s,r)=>{let o=1/0,a=-1/0,c=1/0,l=-1/0;for(let h of s.p)o=Math.min(o,h[0]),a=Math.max(a,h[0]),c=Math.min(c,h[1]),l=Math.max(l,h[1]);if(!((a-o)*(l-c)>4e6))for(let h=Math.floor(o/Ye);h<=Math.floor(a/Ye);h++)for(let u=Math.floor(c/Ye);u<=Math.floor(l/Ye);u++){let d=t(h,u),f=this.tileAreas.get(d);f||(f=[],this.tileAreas.set(d,f)),f.push(r)}}),this.data.trees.forEach(s=>n(this.tileTrees,s[0],s[1],s));for(let s of this.data.treeRows)for(let r=0;r<s.length-1;r++){let o=s[r],a=s[r+1],c=Math.hypot(a[0]-o[0],a[1]-o[1]);for(let l=0;l<c;l+=9){let h=l/c;n(this.tileTrees,o[0]+(a[0]-o[0])*h,o[1]+(a[1]-o[1])*h,[o[0]+(a[0]-o[0])*h,o[1]+(a[1]-o[1])*h])}}this.data.pois.forEach(s=>n(this.tilePois,s.c[0],s.c[1],s)),this.tileSigns=new Map,this.signs.forEach(s=>n(this.tileSigns,s[0],s[1],s)),this.tileGB=new Map,this.gb=this.data.gb&&this.data.gb.b||[],this.gb.forEach((s,r)=>{s.c=Ac(s.p),n(this.tileGB,s.c[0],s.c[1],r)}),this.key=t}nearest(e,t,n){let s=this.nodes,r=null,o=1/0,a=n&&n.skipMinor,c=n&&n.exclude,l=Math.floor(e/this.cell),h=Math.floor(t/this.cell);for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){let g=this.hash.get(this.key(l+d,h+f));if(g)for(let _ of g){let m=Math.floor(_/4096),p=_%4096,S=this.roads[m];if(a&&(S.t==="service"||S.t==="track")||c===m)continue;let b=s[S.n[p]],x=s[S.n[p+1]],v=x[0]-b[0],M=x[1]-b[1],E=v*v+M*M||1,R=((e-b[0])*v+(t-b[1])*M)/E;R=nb(R,0,1);let y=b[0]+v*R,w=b[1]+M*R,T=Math.hypot(e-y,t-w),P=T-S.w/2;P<o&&(o=P,r={d:T,w:S.w,r:m,i:p,t:R,ex:v,ez:M,px:y,pz:w})}}if(!r)return{d:1e9,w:0,onRoad:!1,h:0,name:"",type:""};let u=this.roads[r.r];return r.h=Math.atan2(-r.ex,-r.ez),r.onRoad=r.d<=u.w/2+.9,r.name=u.name,r.type=u.t,r}stopMaterial(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.fillStyle="#c8102e",t.beginPath();for(let s=0;s<8;s++){let r=Math.PI/8+s*Math.PI/4;t.lineTo(64+Math.cos(r)*62,64+Math.sin(r)*62)}t.closePath(),t.fill(),t.strokeStyle="#fff",t.lineWidth=5,t.stroke(),t.fillStyle="#fff",t.font="900 40px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("STOP",64,66);let n=new Qn(e);return n.colorSpace=Et,new Rt({map:n,transparent:!0,alphaTest:.5,side:Nt,roughness:.5})}streetSignMaterial(e){let t="st:"+e;if(this.signCache.has(t))return this.signCache.get(t);let n=document.createElement("canvas");n.width=512,n.height=96;let s=n.getContext("2d");s.fillStyle="#1f6b3a",s.fillRect(0,0,512,96),s.strokeStyle="#fff",s.lineWidth=4,s.strokeRect(6,6,500,84),s.fillStyle="#fff",s.textAlign="center",s.textBaseline="middle";let r=44;for(s.font=`800 ${r}px Arial`;s.measureText(e.toUpperCase()).width>470&&r>20;)r-=3,s.font=`800 ${r}px Arial`;s.fillText(e.toUpperCase(),256,50);let o=new Qn(n);o.colorSpace=Et;let a=new Rt({map:o,roughness:.5,side:Nt});return this.signCache.set(t,a),a}suburbAt(e,t){for(let n of this.suburbs)if(Rc(e,t,n.p))return n.name;return""}buildFurniture(e,t,n,s,r){var b;let o=this.nodes,a=e*Ye,c=t*Ye,l=[],h=[],u=[],d=[],f=[],g=[],_=[];for(let x of this.tileSigns.get(n)||[]){let[v,M,E]=x,R=this.nearest(v,M);if(R.d>1e8)continue;let y=R.h,w=-Math.sin(y),T=-Math.cos(y),P=Math.cos(y),U=-Math.sin(y),N=R.w;if(E==="tl"){let k=[];for(let W=-1;W<=1;W++)for(let z=-1;z<=1;z++){let ee=this.hash.get(this.key(Math.floor(v/this.cell)+W,Math.floor(M/this.cell)+z));if(ee)for(let j of ee){let te=Math.floor(j/4096),ue=j%4096,ye=this.roads[te];if(!(ye.t==="service"||ye.t==="track"))for(let[X,se]of[[ye.n[ue],ye.n[ue+1]],[ye.n[ue+1],ye.n[ue]]]){let ge=o[X],he=o[se];if(Math.hypot(ge[0]-v,ge[1]-M)>1.5)continue;let Ne=he[0]-ge[0],Oe=he[1]-ge[1],Fe=Math.hypot(Ne,Oe)||1;k.push({ux:Ne/Fe,uz:Oe/Fe,w:ye.w})}}}let F=[];for(let W of k){if(F.some(ue=>ue.ux*W.ux+ue.uz*W.uz>.9))continue;F.push(W);let z=v+W.ux*(W.w/2+3)-W.uz*(W.w/2+1.2),ee=M+W.uz*(W.w/2+3)+W.ux*(W.w/2+1.2),j=Math.atan2(-W.ux,-W.uz),te=Math.abs(Math.atan2(W.uz,W.ux))%Math.PI<Math.PI/4||Math.abs(Math.atan2(W.uz,W.ux))%Math.PI>3*Math.PI/4?0:1;l.push({x:z,z:ee,h:4.2}),h.push({x:z,z:ee,yaw:j,axis:te,node:v*7+M*13,nx:v,nz:M,ux:W.ux,uz:W.uz}),r.push({type:"circle",x:z,z:ee,r:.15})}}else if(E==="stop"){let k=v-P*(N/2+.9),F=M-U*(N/2+.9);l.push({x:k,z:F,h:2.4}),d.push({x:k,z:F,yaw:y}),r.push({type:"circle",x:k,z:F,r:.12})}else if(E==="hump")f.push({x:R.px,z:R.pz,yaw:y,w:N});else if(E==="xing")for(let k=-2;k<=2;k++){let F=k*(N/6);g.push({x:R.px+P*F,z:R.pz+U*F,yaw:y,len:N/6*.55})}}let m=new Set,p=0;for(let x of this.tileRoads.get(n)||[]){let v=this.roads[x];if(!(!v.name||p>28))for(let M of v.n){if(m.has(M))continue;let E=o[M];if(E[0]<a||E[0]>=a+Ye||E[1]<c||E[1]>=c+Ye)continue;let R=(this.nodeRoads.get(M)||[]).map(([ye])=>this.roads[ye]).filter(ye=>ye.name&&ye.name!==v.name&&!/service|track/.test(ye.t));if(!R.length)continue;m.add(M);let y=R[0],w=o[v.n[Math.max(0,v.n.indexOf(M)-1)]],T=o[v.n[Math.min(v.n.length-1,v.n.indexOf(M)+1)]],P=T[0]-w[0],U=T[1]-w[1],N=Math.hypot(P,U)||1;P/=N,U/=N;let k=y.n.indexOf(M),F=o[y.n[Math.max(0,k-1)]],W=o[y.n[Math.min(y.n.length-1,k+1)]],z=W[0]-F[0],ee=W[1]-F[1],j=Math.hypot(z,ee)||1;z/=j,ee/=j;let te=E[0]+-U*(y.w/2+1.6)+-ee*(v.w/2+1.6),ue=E[1]+P*(y.w/2+1.6)+z*(v.w/2+1.6);this.nearest(te,ue).d<3.5||(l.push({x:te,z:ue,h:2.6}),_.push({x:te,z:ue,yaw:Math.atan2(-U,P),name:v.name,y:2.45}),_.push({x:te,z:ue,yaw:Math.atan2(-ee,z),name:y.name,y:2.15}),r.push({type:"circle",x:te,z:ue,r:.1}),p++)}}if(l.length){let x=new $e(this.poleGeo,this.mat.pole,l.length);l.forEach((v,M)=>{mt.set(v.x,0,v.z),Mt.set(0,0,0),gt.setFromEuler(Mt),xt.set(1,v.h,1),ht.compose(mt,gt,xt),x.setMatrixAt(M,ht)}),x.castShadow=!0,x.userData.shared=!0,s.add(x)}if(h.length){let x=new $e(this.tlHeadGeo,this.mat.tlHead,h.length),v=new $e(this.tlBulbGeo,this.mat.bulb,h.length*3);h.forEach((M,E)=>{mt.set(M.x,3.6,M.z),Mt.set(0,M.yaw,0),gt.setFromEuler(Mt),xt.set(1,1,1),ht.compose(mt,gt,xt),x.setMatrixAt(E,ht);let R=-Math.sin(M.yaw),y=-Math.cos(M.yaw);[.36,0,-.36].forEach((w,T)=>{mt.set(M.x+R*.16,3.6+w,M.z+y*.16),ht.compose(mt,gt,xt),v.setMatrixAt(E*3+T,ht),v.setColorAt(E*3+T,new Te(2236962))})}),x.userData.shared=!0,v.userData.shared=!0,s.add(x,v),this.tlHeads.push({tile:n,mesh:v,heads:h})}if(d.length){let x=new Yt(.75,.75),v=new $e(x,this.mat.stop,d.length);d.forEach((M,E)=>{mt.set(M.x,2.1,M.z),Mt.set(0,M.yaw,0),gt.setFromEuler(Mt),xt.set(1,1,1),ht.compose(mt,gt,xt),v.setMatrixAt(E,ht)}),s.add(v)}if(f.length){let x=new $e(this.humpGeo,this.mat.hump,f.length);f.forEach((v,M)=>{mt.set(v.x,.02,v.z),Mt.set(0,v.yaw,0),gt.setFromEuler(Mt),xt.set(v.w-.6,.24,.9),ht.compose(mt,gt,xt),x.setMatrixAt(M,ht)}),x.userData.shared=!0,s.add(x),this.humpList=this.humpList||[]}if(g.length){let x=new Yt(1,1);x.rotateX(-Math.PI/2);let v=new $e(x,this.mat.stripe,g.length);g.forEach((M,E)=>{mt.set(M.x,.1,M.z),Mt.set(0,M.yaw,0),gt.setFromEuler(Mt),xt.set(M.len,1,2.2),ht.compose(mt,gt,xt),v.setMatrixAt(E,ht)}),v.userData.shared=!0,s.add(v)}for(let x of _){let v=new de(new Yt(1.3,.25),this.streetSignMaterial(x.name));v.position.set(x.x,x.y,x.z),v.rotation.y=x.yaw,s.add(v)}let S=[];for(let x of this.tileRoads.get(n)||[]){let v=this.roads[x];if(!/^(primary|secondary|tertiary|trunk)$/.test(v.t)||v.len<120)continue;let M=v.n.map(R=>this.nodes[R]),E=90+Je(x,3,17)*200|0;for(let R=0;R<M.length-1;R++){let y=M[R],w=M[R+1],T=v.seg[R],P=(w[0]-y[0])/T,U=(w[1]-y[1])/T;for(;E<T;){let N=y[0]+P*E,k=y[1]+U*E;if(N>=e*Ye&&N<(e+1)*Ye&&k>=t*Ye&&k<(t+1)*Ye&&!((b=this.tileSigns.get(n))!=null&&b.some(F=>Math.hypot(F[0]-N,F[1]-k)<30)))for(let F of v.one?[1]:[1,-1]){let W=P*F,z=U*F,ee=z,j=-W,te=v.w/4;S.push({x:N+ee*te,z:k+j*te,yaw:Math.atan2(-W,-z),fx:W,fz:z})}E+=320}E-=T}}if(S.length){let x=this.M,v=new $e(x.padGeo,x.pad,S.length);S.forEach((M,E)=>{mt.set(M.x,.1,M.z),Mt.set(0,M.yaw,0),gt.setFromEuler(Mt),xt.set(1,1,1),ht.compose(mt,gt,xt),v.setMatrixAt(E,ht)}),v.userData.shared=!0,v.renderOrder=1,s.add(v)}return{humps:f,pads:S}}lightAhead(e,t,n,s){let r=performance.now()/1e3,o=null;for(let a of this.tlHeads)if(a.mesh.parent)for(let c of a.heads){let l=c.nx-e,h=c.nz-t,u=l*n+h*s;if(u<-3||u>40||Math.abs(l*s-h*n)>9||-(c.ux*n+c.uz*s)<.75)continue;let d=u-6;(!o||d<o.dist)&&(o={state:this.headState(c,r),dist:d,key:c.node+":"+c.axis})}return o}headState(e,t){let s=(t%24+e.node%7)%24,r=e.axis===0?s:(s+12)%24;return r<8?"g":r<10?"a":"r"}masjidNear(e,t,n){this.masjids||(this.masjids=this.data.buildings.filter(o=>o.rel==="muslim"||/masjid|mosque/i.test(o.name||"")).map(o=>({c:o.c,name:o.name&&!/place_of_worship/.test(o.name)?o.name:"Masjid"})));let s=null,r=n;for(let o of this.masjids){let a=Math.hypot(o.c[0]-e,o.c[1]-t);a<r&&(r=a,s=o)}return s}padAt(e,t){let n=this.tiles.get(this.key(Math.floor(e/Ye),Math.floor(t/Ye)));if(!n||!n.pads)return null;for(let s of n.pads){let r=e-s.x,o=t-s.z;if(r*r+o*o>16)continue;let a=r*s.fx+o*s.fz,c=r*s.fz-o*s.fx;if(Math.abs(a)<2.4&&Math.abs(c)<1.9)return s}return null}tickLights(e,t,n){let s=new Te;for(let r of this.tlHeads){if(!r.mesh.parent)continue;let o=r.heads[0];Math.abs(o.x-t)>300||Math.abs(o.z-n)>300||(r.heads.forEach((a,c)=>{let l=this.headState(a,e);r.mesh.setColorAt(c*3,s.setHex(l==="r"?16719904:3344392)),r.mesh.setColorAt(c*3+1,s.setHex(l==="a"?16756768:3350536)),r.mesh.setColorAt(c*3+2,s.setHex(l==="g"?2162528:537368))}),r.mesh.instanceColor.needsUpdate=!0)}}makeMaterials(){let e=this.style,t=this.M,n=a=>new Rt(a);this.mat={road:t.road,roadDirt:n({map:e.tex("sand"),color:10127978,roughness:1}),line:t.line,rail:t.rail,house:e.fMatsHouse,wall:e.wallMat,roof:e.roofTileMat,roofFlat:n({color:5922406,roughness:1}),park:n({map:e.tex("grass"),color:9420650,roughness:1}),pitch:n({map:e.tex("grass"),color:7320666,roughness:1}),water:n({color:4161456,roughness:.1,metalness:.3,envMapIntensity:1.5}),farm:n({map:e.tex("sand"),color:12099696,roughness:1}),lot:n({map:e.tex("pavement"),color:11184810,roughness:1}),scrub:n({map:e.tex("grass"),color:10525802,roughness:1}),railbed:n({color:5591114,roughness:1}),railsteel:n({color:9080208,roughness:.4,metalness:.8}),pavement:n({map:e.tex("pavement"),color:12170925,roughness:1}),kerb:n({color:10131600,roughness:.9,side:Nt}),lineYellow:n({color:15254586,roughness:.7}),white:n({color:15921126,roughness:.8}),dome:n({color:4169082,roughness:.35,metalness:.2}),gold:n({color:13677676,roughness:.3,metalness:.7}),navy:n({color:1517628,roughness:.6})};for(let a of[this.mat.park,this.mat.pitch,this.mat.farm,this.mat.lot,this.mat.scrub])a.map=a.map.clone(),a.map.repeat.set(1/8,1/8),a.map.needsUpdate=!0;this.mat.pavement.map=this.mat.pavement.map.clone(),this.mat.pavement.map.repeat.set(1,1),this.mat.pavement.map.needsUpdate=!0,this.houseGeo=new at(1,1,1),this.houseGeo.translate(0,.5,0);let s=this.houseGeo.attributes.uv;for(let a=0;a<s.count;a++)s.setXY(a,s.getX(a)*2.6,s.getY(a)*1);this.roofGeo=new To(1,1,4),this.roofGeo.rotateY(Math.PI/4),this.roofGeo.translate(0,.5,0),this.wallGeo=new at(1,1,1),this.wallGeo.translate(0,.5,0);let r=this.wallGeo.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)*3,r.getY(a)*.5);let o=this.houseGeo.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,o.getX(a),o.getY(a));this.fenceGeo=new Yt(1,1),this.fenceGeo.rotateY(Math.PI/2),this.fenceGeo.translate(0,.5,0);{let a=this.fenceGeo.attributes.uv;for(let c=0;c<a.count;c++)a.setXY(c,a.getX(c)*2,a.getY(c))}this.humpGeo=new Gt(.5,.5,1,10),this.humpGeo.rotateZ(Math.PI/2),this.poleGeo=new Gt(.07,.09,1,7),this.poleGeo.translate(0,.5,0),this.tlHeadGeo=new at(.42,1.15,.3),this.tlBulbGeo=new ei(.13,8,6),this.mat.tlHead=new Rt({color:1711394,roughness:.6}),this.mat.pole=new Rt({color:9080208,roughness:.5,metalness:.7}),this.mat.bulb=new Rt({color:16777215,emissive:16777215,emissiveIntensity:1,roughness:.4}),this.mat.stop=this.stopMaterial(),this.mat.hump=new Rt({color:6974058,roughness:1}),this.mat.stripe=new Rt({color:16053492,roughness:.7})}ensure(e,t){let n=Math.floor(e/Ye),s=Math.floor(t/Ye),r=2;for(let[a,c]of this.tiles)(Math.abs(c.tx-n)>r+1||Math.abs(c.tz-s)>r+1)&&(this.disposeTile(c),this.tiles.delete(a));let o=0;for(let a=-r;a<=r;a++)for(let c=-r;c<=r;c++){if(o>=1&&(Math.abs(a)>1||Math.abs(c)>1))continue;let l=this.key(n+a,s+c);this.tiles.has(l)||(this.tiles.set(l,this.buildTile(n+a,s+c,l)),o++)}}obstaclesNear(e,t){let n=[],s=Math.floor(e/Ye),r=Math.floor(t/Ye);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){let c=this.tiles.get(this.key(s+o,r+a));if(c)for(let l of c.obstacles)Math.abs(l.x-e)<60&&Math.abs(l.z-t)<60&&n.push(l)}return n}disposeTile(e){this.group.remove(e.group),bc("t"+e.tx+"_"+e.tz),this.tlHeads=this.tlHeads.filter(t=>t.tile!==this.key(e.tx,e.tz));for(let t of e.parked||[])Gr(t);e.group.traverse(t=>{if(t.isInstancedMesh){t.dispose();return}t.geometry&&!t.userData.shared&&t.geometry.dispose()});for(let t of e.roads){let n=this.roadMeshes.get(t);n&&--n.refs<=0&&(this.group.remove(n.mesh),n.mesh.traverse(s=>{s.geometry&&s.geometry.dispose()}),this.roadMeshes.delete(t))}for(let t of e.areas){let n=this.areaMeshes.get(t);n&&--n.refs<=0&&(this.group.remove(n.mesh),n.mesh.geometry.dispose(),this.areaMeshes.delete(t))}}buildTile(e,t,n){let s=new pt,r=[],o=this.nodes;this.lm=[];let a=e*Ye,c=t*Ye,l=this.tileRoads.get(n)||[];for(let x of l){let v=this.roadMeshes.get(x);v||(v={refs:0,mesh:this.buildRoad(x)},this.roadMeshes.set(x,v),this.group.add(v.mesh)),v.refs++}let h=[];for(let x of l){let v=this.roads[x];for(let M of v.n){let E=o[M];if(E[0]<a||E[0]>=a+Ye||E[1]<c||E[1]>=c+Ye)continue;let R=this.nodeRoads.get(M);if(!R||R.length<2)continue;let y=0,w=0;for(let[T]of R)y=Math.max(y,this.roads[T].w),w=Math.max(w,fm[this.roads[T].t]||.06);h.find(T=>T[0]===M)||h.push([M,E,y,w])}}if(h.length){let x=h.map(([,M,E,R])=>{let y=new Ls(E/2,14);y.rotateX(-Math.PI/2),y.translate(M[0],R+.002,M[1]);let w=y.attributes.uv;for(let T=0;T<w.count;T++)w.setXY(T,w.getX(T)*E/7,w.getY(T)*E/7);return y}),v=new de(Tc(x),this.mat.road);v.receiveShadow=!0,s.add(v)}for(let x of this.tileAreas.get(n)||[]){let v=this.areaMeshes.get(x);if(!v){let M=this.buildArea(x);if(!M)continue;v={refs:0,mesh:M},this.areaMeshes.set(x,v),this.group.add(M)}v.refs++}let u=[];for(let x of this.tileAreas.get(n)||[]){let v=this.data.areas[x];if(v.k!=="park_lot")continue;let M=Ac(v.p);if(M[0]<a||M[0]>=a+Ye||M[1]<c||M[1]>=c+Ye)continue;let E=Ho(v.p);if(E.hw<8||E.hl<6)continue;let R=E.hw>=E.hl,y=Math.cos(E.h)*(R?1:0)+-Math.sin(E.h)*(R?0:1),w=-Math.sin(E.h)*(R?1:0)+-Math.cos(E.h)*(R?0:1),T=-w,P=y,U=R?E.hw:E.hl,N=R?E.hl:E.hw,k=Math.max(1,Math.min(4,Math.floor(N*2/16))),F=[],W=0;for(let z=0;z<k;z++){let ee=-N+8+z*16-(k>1?0:N-8);for(let j=-U+3;j<U-3;j+=2.6){let te=E.x+y*j+T*ee,ue=E.z+w*j+P*ee;if(!(!Rc(te,ue,v.p)||this.nearest(te,ue).d<4)){for(let ye of[-1,1]){let X=new Yt(.12,5);X.rotateX(-Math.PI/2),X.rotateY(Math.atan2(T,P)),X.translate(te+T*ye*2.6,.03,ue+P*ye*2.6),F.push(X)}if(W<6&&Je(te|0,ue|0,8)<.22){let ye=Je(te|0,ue|0,9)<.5?-1:1,X=kt[Math.floor(Je(te|0,ue|0,10)*kt.length)];if(Fs(X.id,!0)){let se=Hr(X.id,!0,[13832735,1525449,15921906,1381914,10133670,7153881][Math.floor(Je(te|0,ue|0,11)*6)]);se.position.set(te+T*ye*2.6,0,ue+P*ye*2.6),se.rotation.y=Math.atan2(-T*ye,-P*ye),se.traverse(ge=>{ge.userData.shared=!0}),s.add(se),u.push(se),W++,r.push({type:"box",x:se.position.x,z:se.position.z,hw:X.w/2,hl:X.len/2,h:se.rotation.y})}}}}}if(F.length){let z=new de(Tc(F),this.mat.stripe);s.add(z)}}for(let x of this.tilePois.get(n)||[])x.k==="fuel"&&!this.nearBuilding(x.c[0],x.c[1],6)&&this.buildFuel(x,s,r);for(let x of this.tileBuildings.get(n)||[]){let v=this.data.buildings[x],M=this.buildBuilding(v);if(!M)continue;s.add(M);let E=Ho(v.p);r.push({type:"box",...E})}let d=[],f=[],g=[],_=[],m=this.tileGB.get(n)||[],p=m.length>0;p&&this.buildGB(m,s,r,d);for(let x of l){let v=this.roads[x];if(!/residential|unclassified|living_street/.test(v.t))continue;let M=21,E=10,R=0;for(let y=0;y<v.n.length-1;y++){let w=o[v.n[y]],T=o[v.n[y+1]],P=v.seg[y],U=(T[0]-w[0])/P,N=(T[1]-w[1])/P,k=-N,F=U;for(;E<P;E+=M){R++;let W=w[0]+U*E,z=w[1]+N*E;if(!(W<a||W>=a+Ye||z<c||z>=c+Ye))for(let ee of[-1,1]){if(Je(x,R,ee+2)<.18)continue;if(p){let Me=W+k*ee*(v.w/2+10),pe=z+F*ee*(v.w/2+10);if(!this.gbNear(Me,pe,14))continue;let re=v.w/2+2.2,$=W+k*ee*re,C=z+F*ee*re,A=(Je(x,R,23)-.5)*8,O=Je(x,R,47)<.45;for(let Y of[A-5.5,A+5.5]){let Q=$+U*Y,J=C+N*Y,Ae=!0;for(let xe of[-3.75,0,3.75]){let we=this.nearest(Q+U*xe,J+N*xe,{exclude:x});if(we.d<we.w/2+2.5){Ae=!1;break}}Ae&&(d.push({wall:!0,palisade:O,x:Q,z:J,yaw:Math.atan2(-U,-N)+(ee===1?Math.PI:0),len:7.5}),r.push({type:"box",x:Q,z:J,hw:.15,hl:3.75,h:Math.atan2(-U,-N)+(ee===1?Math.PI:0)}))}if(Je(x,R,29)<.35){let Y=W+k*ee*(v.w/2+1.1)+U*6,Q=z+F*ee*(v.w/2+1.1)+N*6;this.nearest(Y,Q,{exclude:x}).d>3&&((Je(x,R,53)<.5?g:f).push({x:Y,z:Q,scale:.6+Je(x,R,31)*.5,rot:Je(x,R,37)*6.28}),r.push({type:"circle",x:Y,z:Q,r:.4}))}continue}let te=v.w/2+8.5+Je(x,R,ee+7)*3,ue=W+k*ee*te,ye=z+F*ee*te,X=this.nearest(ue,ye,{exclude:x});if(X.d<X.w/2+7||this.nearest(ue+U*6,ye+N*6,{exclude:x}).d<6||this.nearest(ue-U*6,ye-N*6,{exclude:x}).d<6||this.nearBuilding(ue,ye,14))continue;let se=Math.atan2(-U,-N)+(ee===1?Math.PI:0),ge=Je(x,R,41),he=ge<.38?"arch":ge<.72?"brick":"modern",Ne=he!=="arch"?Je(x,R,43)<.75:Je(x,R,43)<.12,Oe=5.5+Je(x,R,11)*1.8,Fe=4.5+Je(x,R,13)*1.4,Ze=(Ne?6.3:3.3)+Je(x,R,17)*.4;d.push({x:ue,z:ye,yaw:se,hw:Oe,hd:Fe,hh:Ze,style:he,flat:he==="modern"}),r.push({type:"box",x:ue,z:ye,hw:Fe,hl:Oe,h:se});let ne=v.w/2+2.2,fe=W+k*ee*ne,L=z+F*ee*ne,De=(Je(x,R,23)-.5)*8,ce=Je(x,R,47)<.45;for(let Me of[De-5.5,De+5.5]){let pe=fe+U*Me,re=L+N*Me,$=!0;for(let C of[-3.75,0,3.75]){let A=this.nearest(pe+U*C,re+N*C,{exclude:x});if(A.d<A.w/2+2.5){$=!1;break}}$&&(d.push({wall:!0,palisade:ce,x:pe,z:re,yaw:se,len:7.5}),r.push({type:"box",x:pe,z:re,hw:.15,hl:3.75,h:se}))}if(Je(x,R,29)<.35){let Me=W+k*ee*(v.w/2+1.1)+U*6,pe=z+F*ee*(v.w/2+1.1)+N*6;(Je(x,R,53)<.5?g:f).push({x:Me,z:pe,scale:.6+Je(x,R,31)*.5,rot:Je(x,R,37)*6.28}),r.push({type:"circle",x:Me,z:pe,r:.4})}}}E-=P}}let S=d.filter(x=>x.wall);for(let x of["arch","brick","modern"]){let v=d.filter(T=>!T.wall&&T.style===x);if(!v.length)continue;let M=new $e(this.houseGeo,this.style.lenMats[x],v.length),E=v.filter(T=>!T.flat),R=v.filter(T=>T.flat),y=E.length?new $e(this.roofGeo,this.mat.roof,E.length):null,w=R.length?new $e(this.wallGeo,this.mat.roofFlat,R.length):null;v.forEach((T,P)=>{mt.set(T.x,0,T.z),Mt.set(0,T.yaw,0),gt.setFromEuler(Mt),xt.set(T.hd*2,T.hh,T.hw*2),ht.compose(mt,gt,xt),M.setMatrixAt(P,ht)}),E.forEach((T,P)=>{mt.set(T.x,T.hh,T.z),Mt.set(0,T.yaw,0),gt.setFromEuler(Mt),xt.set((T.hd+.6)*2*Math.SQRT1_2,2+T.hd*.12,(T.hw+.6)*2*Math.SQRT1_2),ht.compose(mt,gt,xt),y.setMatrixAt(P,ht)}),R.forEach((T,P)=>{mt.set(T.x,T.hh,T.z),Mt.set(0,T.yaw,0),gt.setFromEuler(Mt),xt.set(T.hd*2+.3,.35,T.hw*2+.3),ht.compose(mt,gt,xt),w.setMatrixAt(P,ht)}),M.castShadow=!0,M.receiveShadow=!0,M.userData.shared=!0,s.add(M),y&&(y.castShadow=!0,y.userData.shared=!0,s.add(y)),w&&(w.userData.shared=!0,s.add(w))}for(let x of[!1,!0]){let v=S.filter(E=>!!E.palisade===x);if(!v.length)continue;let M=new $e(x?this.fenceGeo:this.wallGeo,x?this.style.palisadeMat:this.mat.wall,v.length);v.forEach((E,R)=>{mt.set(E.x,0,E.z),Mt.set(0,E.yaw,0),gt.setFromEuler(Mt),xt.set(x?1:.25,1.8,E.len),ht.compose(mt,gt,xt),M.setMatrixAt(R,ht)}),M.castShadow=!x,M.userData.shared=!0,s.add(M)}{let x=0,v=[];for(let M of l){let E=this.roads[M];if(!/primary|secondary|tertiary|trunk/.test(E.t)||/link/.test(E.t))continue;let R=12+Je(M,3)*20,y=0;for(let w=0;w<E.n.length-1;w++){let T=o[E.n[w]],P=o[E.n[w+1]],U=E.seg[w],N=(P[0]-T[0])/U,k=(P[1]-T[1])/U,F=-k,W=N;for(;R<U-4;R+=34){y++;let z=T[0]+N*R,ee=T[1]+k*R;if(z<a||z>=a+Ye||ee<c||ee>=c+Ye)continue;let j=y%2?-1:1,te=j*(E.w/2+1),ue=z+F*te,ye=ee+W*te;if(!(this.nearest(ue,ye,{exclude:M}).d<4)){if(v.push({x:ue,z:ye,h:Math.atan2(-N,-k)+(j===1?Math.PI/2:-Math.PI/2)}),x++,r.push({type:"circle",x:ue,z:ye,r:.2}),y%5===2){let X=z+F*j*(E.w/2+6.5),se=ee+W*j*(E.w/2+6.5);if(this.nearest(X,se,{exclude:M}).d>7&&!this.nearBuilding(X,se,12)&&!this.gbNear(X,se,9)){let ge=this.M,he=new pt,Ne=ge.billboards[(M+y)%ge.billboards.length],Oe=new de(ge.bbPanelGeo,[ge.rail,ge.rail,ge.rail,ge.rail,Ne,Ne]);Oe.position.set(0,7.5,0),Oe.userData.shared=!0,he.add(Oe);for(let ne of[-3.5,3.5]){let fe=new de(ge.bbPostGeo,ge.rail);fe.position.set(ne,2.25,0),fe.userData.shared=!0,he.add(fe)}he.position.set(X,0,se),he.rotation.y=Math.atan2(-N,-k)-j*.5,s.add(he);let Fe=Math.cos(he.rotation.y),Ze=Math.sin(he.rotation.y);for(let ne of[-3.5,3.5])r.push({type:"circle",x:X+ne*Fe,z:se-ne*Ze,r:.3})}}if(y%3===0){let X=z+F*-j*(E.w/2+1.4),se=ee+W*-j*(E.w/2+1.4);this.nearest(X,se,{exclude:M}).d>4&&!this.nearBuilding(X,se,9)&&((Je(M,y,61)<.5?_:g).push({x:X,z:se,scale:.9+Je(M,y,63)*.4,rot:Je(M,y,67)*6.28}),r.push({type:"circle",x:X,z:se,r:.45}))}}}R-=U}}if(x){let M=this.M,E=new $e(M.lampGeo,M.lamp,x),R=new $e(M.lampGlowGeo,M.lampGlow,x),y=new $e(M.poolGeo,M.pool,x);v.forEach((T,P)=>{mt.set(T.x,0,T.z),Mt.set(0,T.h,0),gt.setFromEuler(Mt),xt.set(1,1,1),ht.compose(mt,gt,xt),E.setMatrixAt(P,ht),R.setMatrixAt(P,ht),y.setMatrixAt(P,ht)});let w=new $e(M.bannerGeo,M.banner,x);for(let T=0;T<x;T++)E.getMatrixAt(T,ht),w.setMatrixAt(T,ht);E.castShadow=!0,y.renderOrder=2;for(let T of[E,R,y,w])T.userData.shared=!0,T.frustumCulled=!1,s.add(T)}}let b=this.buildFurniture(e,t,n,s,r);for(let x of this.tileTrees.get(n)||[])f.push({x:x[0],z:x[1],scale:.8+Je(x[0]|0,x[1]|0)*.5,rot:0}),r.push({type:"circle",x:x[0],z:x[1],r:.5});for(let x of this.tileAreas.get(n)||[]){let v=this.data.areas[x];if(v.k!=="park"&&v.k!=="grass")continue;let M=Ac(v.p);if(M[0]<a||M[0]>=a+Ye||M[1]<c||M[1]>=c+Ye)continue;let E=mm(v.p),R=Math.min(14,Math.floor((E[2]-E[0])*(E[3]-E[1])/2500));for(let y=0;y<R;y++){let w=E[0]+Je(x,y,1)*(E[2]-E[0]),T=E[1]+Je(x,y,2)*(E[3]-E[1]);Rc(w,T,v.p)&&(this.nearest(w,T).d<8||(f.push({x:w,z:T,scale:.9+Je(x,y,3)*.5,rot:0}),r.push({type:"circle",x:w,z:T,r:.5})))}}if(f.length){let[x,v]=nm(this.style.treeStyles.oakTree,f);x.userData.shared=!0,v.userData.shared=!0,s.add(x,v)}for(let[x,v]of[[g,this.style.jacaranda],[_,this.style.palm]])if(!(!x.length||!v))for(let M of v){let E=new $e(M.geometry,M.material,x.length);x.forEach((R,y)=>{mt.set(R.x,0,R.z),Mt.set(0,R.rot,0),gt.setFromEuler(Mt),xt.set(R.scale,R.scale,R.scale),ht.compose(mt,gt,xt),E.setMatrixAt(y,ht)}),E.castShadow=!0,E.userData.shared=!0,E.frustumCulled=!1,s.add(E)}{let x=0;for(let v of l){let M=this.roads[v];if(M.t==="service"||M.t==="track"||M.len<60)continue;let E=30+Je(v,1)*40,R=0;for(let y=0;y<M.n.length-1&&x<30;y++){let w=o[M.n[y]],T=o[M.n[y+1]],P=M.seg[y],U=(T[0]-w[0])/P,N=(T[1]-w[1])/P,k=-N,F=U;for(;E+12<P&&x<30;E+=90){R++;let W=w[0]+U*E,z=w[1]+N*E;if(W<a||W>=a+Ye||z<c||z>=c+Ye)continue;let j=(Je(v,R,5)<.5?-1:1)*M.w/4;for(let te=0;te<3;te++)Vr(W+U*te*5+k*j,z+N*te*5+F*j,"t"+e+"_"+t);x+=3}E-=P}}}if(this.style.showroomAt&&Math.floor(this.style.showroomAt[0]/Ye)===e&&Math.floor(this.style.showroomAt[1]/Ye)===t){let[x,v,M]=this.style.showroomAt;if(Bo("showroom")){let R=Xr.showroom;this.lm.push({id:"showroom",x,z:v,yaw:M,sx:18,sy:18,sz:18});let y=new de(new Yt(6.4,1.6),this.M.sign);y.position.set(x+Math.sin(M)*(R.d*18/2+.06),R.h*18*.64,v+Math.cos(M)*(R.d*18/2+.06)),y.rotation.y=M,y.userData.shared=!0,s.add(y),r.push({type:"box",x,z:v,hw:18/2,hl:R.d*18/2,h:M})}else{let E=this.style.makeBuilding(!0);E.group.position.set(x,0,v),E.group.rotation.y=M,s.add(E.group),r.push({type:"box",x,z:v,hw:E.w/2,hl:E.d/2,h:M})}}{let x={};for(let v of this.lm)(x[v.id]=x[v.id]||[]).push(v);for(let v in x){let M=um(v,x[v]);M&&s.add(M)}this.lm=[]}return this.group.add(s),{tx:e,tz:t,group:s,obstacles:r,roads:l,areas:this.tileAreas.get(n)||[],humps:b.humps,pads:b.pads,parked:u}}gbNear(e,t,n){let s=Math.floor(e/Ye),r=Math.floor(t/Ye);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)for(let c of this.tileGB.get(this.key(s+o,r+a))||[]){let l=this.gb[c].c;if(Math.hypot(l[0]-e,l[1]-t)<n)return!0}return!1}buildGB(e,t,n,s){let r=this.style.lenMats,o={arch:[],brick:[],modern:[],flats:[]},a=[],c=[];for(let l of e){let h=this.gb[l],u=h.c;if(this.nearBuilding(u[0],u[1],9)||this.style.showroomAt&&Math.hypot(u[0]-this.style.showroomAt[0],u[1]-this.style.showroomAt[1])<26)continue;let d=this.nearest(u[0],u[1]);if(d.d<d.w/2+2.5)continue;let f=Ho(h.p),g=h.a,_=Je(u[0]|0,u[1]|0,3),m,p,S=!1;if(g>450?(m="flats",p=g>1200?8:6.6,S=!0):g<70?(m=_<.6?"arch":"modern",p=3.2,S=_>.6):(m=_<.35?"arch":_<.72?"brick":"modern",p=(g>150?Je(u[0]|0,u[1]|0,4)<.6:Je(u[0]|0,u[1]|0,4)<.25)?6.3:3.4,S=m==="modern"),g>=190&&g<=450&&Bo("house")&&g/(4*f.hw*f.hl)>.78&&Je(u[0]|0,u[1]|0,6)<.45){let b=td("house",f,d.px!=null?d.px:u[0]+1,d.px!=null?d.pz:u[1],{min:9,maxH:7.4,stretch:1.3});if(b){this.lm.push(b),n.push({type:"box",...f});continue}}if(g>450&&h.p.length>4){let b=new li(h.p.map(E=>new ae(E[0],-E[1]))),x=new Us(b,{depth:p,bevelEnabled:!1});x.rotateX(-Math.PI/2);let v=x.attributes.uv;for(let E=0;E<v.count;E++)v.setXY(E,v.getX(E)/9,v.getY(E)/(p>7?p/2:p));let M=new de(x,[this.mat.roofFlat,r.flats]);M.castShadow=!0,M.receiveShadow=!0,t.add(M),n.push({type:"box",...f});continue}o[m].push({x:f.x,z:f.z,yaw:f.h,hw:f.hw,hl:f.hl,h:p}),S?c.push({x:f.x,z:f.z,yaw:f.h,hw:f.hw,hl:f.hl,h:p}):a.push({x:f.x,z:f.z,yaw:f.h,hw:f.hw,hl:f.hl,h:p}),n.push({type:"box",...f})}for(let l in o){let h=o[l];if(!h.length)continue;let u=new $e(this.houseGeo,r[l],h.length);h.forEach((d,f)=>{mt.set(d.x,0,d.z),Mt.set(0,d.yaw,0),gt.setFromEuler(Mt),xt.set(d.hw*2,d.h,d.hl*2),ht.compose(mt,gt,xt),u.setMatrixAt(f,ht)}),u.castShadow=!0,u.receiveShadow=!0,u.userData.shared=!0,t.add(u)}if(a.length){let l=new $e(this.roofGeo,this.mat.roof,a.length);a.forEach((h,u)=>{mt.set(h.x,h.h,h.z),Mt.set(0,h.yaw,0),gt.setFromEuler(Mt),xt.set((h.hw+.5)*2*Math.SQRT1_2,1.6+Math.min(h.hw,h.hl)*.2,(h.hl+.5)*2*Math.SQRT1_2),ht.compose(mt,gt,xt),l.setMatrixAt(u,ht)}),l.castShadow=!0,l.userData.shared=!0,t.add(l)}if(c.length){let l=new $e(this.wallGeo,this.mat.roofFlat,c.length);c.forEach((h,u)=>{mt.set(h.x,h.h,h.z),Mt.set(0,h.yaw,0),gt.setFromEuler(Mt),xt.set(h.hw*2+.3,.35,h.hl*2+.3),ht.compose(mt,gt,xt),l.setMatrixAt(u,ht)}),l.userData.shared=!0,t.add(l)}}humpAt(e,t){let n=this.tiles.get(this.key(Math.floor(e/Ye),Math.floor(t/Ye)));if(!n||!n.humps)return null;for(let s of n.humps){let r=e-s.x,o=t-s.z;if(r*r+o*o>s.w*s.w)continue;let a=-Math.sin(s.yaw),c=-Math.cos(s.yaw),l=r*a+o*c;if(Math.abs(l)<.6)return s}return null}nearBuilding(e,t,n){let s=Math.floor(e/Ye),r=Math.floor(t/Ye);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)for(let c of this.tileBuildings.get(this.key(s+o,r+a))||[]){let l=this.data.buildings[c].c;if(Math.hypot(l[0]-e,l[1]-t)<n)return!0}return!1}buildRoad(e){let t=this.roads[e],n=this.nodes,s=t.n.map(u=>n[u]),r=t.w,o=fm[t.t]||.06,a=new pt,c=t.t==="track"?this.mat.roadDirt:this.mat.road,l=new de(ko(s,-r/2,r/2,o,1/7),c);l.receiveShadow=!0,a.add(l);let h=[s[0],s[s.length-1]].map(u=>{let d=new Ls(r/2,12);return d.rotateX(-Math.PI/2),d.translate(u[0],o,u[1]),d});if(a.add(new de(Tc(h),c)),/residential|tertiary|secondary|primary|unclassified|living_street/.test(t.t)&&!/link/.test(t.t))for(let u of[-1,1]){let d=new de(ko(s,u*(r/2-.05),u*(r/2+1.9),o+.12,.25),this.mat.pavement);d.receiveShadow=!0,a.add(d),a.add(new de(ko(s,u*(r/2-.08),u*(r/2-.05),o,1,o+.12),this.mat.kerb))}if(r>=8.4){for(let m of[-1,1])a.add(new de(ko(s,m*(r/2-.45),m*(r/2-.3),o+.01,1),this.mat.lineYellow));let u=t.one?Math.max(2,t.lanes||Math.round(r/3.6)):2,d=[],f=[];if(t.one)for(let m=1;m<u;m++)f.push(-r/2+r/u*m);else f.push(0);let g=0,_=t.len;for(let m=0;m<s.length-1;m++){let p=s[m],S=s[m+1],b=t.seg[m],x=(S[0]-p[0])/b,v=(S[1]-p[1])/b,M=-v,E=x;for(let R=(9-g%9)%9;R+3<b;R+=9)for(let y of f){let w=[p[0]+x*R+M*y,p[1]+v*R+E*y],T=[p[0]+x*(R+3)+M*y,p[1]+v*(R+3)+E*y];d.push(ko([w,T],-.08,.08,o+.01,1))}g+=b}d.length&&a.add(new de(Tc(d),this.mat.line))}return a}buildArea(e){let t=this.data.areas[e];if(t.p.length<3)return null;let n={park:this.mat.park,grass:this.mat.park,pitch:this.mat.pitch,water:this.mat.water,wet:this.mat.water,farm:this.mat.farm,ind:this.mat.lot,com:this.mat.lot,park_lot:this.mat.lot,scrub:this.mat.scrub,school:this.mat.park,quarry:this.mat.farm}[t.k];if(!n)return null;let s=new li(t.p.map(c=>new ae(c[0],-c[1]))),r=new rc(s);r.rotateX(-Math.PI/2);let o={water:.03,wet:.025,park:.02,grass:.02,pitch:.022,farm:.015,scrub:.015,ind:.018,com:.018,park_lot:.019,school:.02,quarry:.015}[t.k]||.02;r.translate(0,o,0);let a=new de(r,n);return a.receiveShadow=!0,a}buildBuilding(e){if(e.p.length<3)return null;let n=this.style.lenMats,s=e.k+" "+(e.am||"")+" "+(e.shop||"")+" "+(e.name||""),r=e.rel==="muslim"||/masjid|mosque|islam|jumma|sufi|musallah/i.test(s)||e.k==="mosque",o=e.rel==="hindu"||/temple|koil|mandir|sai centre|hindu/i.test(s),a=e.rel==="christian"||/church|chapel|catholic|kingdom hall/i.test(s),c=/mall|supermarket|plaza|shopping|centre|center|hyper|spar|pick n pay|checkers|shoprite/i.test(s)&&!/school|clinic|community|civic|sports|recreation|health/i.test(s),l=!c&&/retail|commercial|shop|kfc|mcdonald|hardware|station|store|pharmacy|chemist|butcher|cafe|restaurant|takeaway/i.test(s),h=/school|college|madressa|madrasah|academy/i.test(s),u=/hospital|clinic|police|library|court|civic|municipal|community|hall|post office|bank/i.test(s),d=/apartments|flats|residential;?apartments/i.test(e.k),f=mm(e.p),g=Math.min(f[2]-f[0],f[3]-f[1]),_=ib(e.p),m=e.c,p=e.lv?e.lv*3.3:e.h;e.lv||(r?p=Math.max(p,7.5):c?p=Math.max(p,_>2500?9:7):h||u?p=Math.max(p,6.6):d?p=Math.max(p,9.6):l?p=Math.max(p,5.5):(e.k==="house"||e.k==="residential"||e.k==="yes")&&(p=Math.max(p,Je(e.c[0]|0,e.c[1]|0,5)<.45&&_>110?6.3:3.5)));let S=null,b=null;if(r&&Bo("masjid")){let T=Ho(e.p),P=this.nearest(m[0],m[1]);S=td("masjid",T,P.px!=null?P.px:m[0]+1,P.px!=null?P.pz:m[1],{min:13,maxH:34,stretch:1.25}),S&&(this.lm.push(S),p=_/(4*T.hw*T.hl)>.72?0:2.4)}else if(c&&Bo("mall")&&_>1500){let T=this.entranceEdge(e);if(T){let P=Xr.mall,U=Math.max(24,Math.min(36,T.L*.9)),N=Math.min(U,11/P.h);b={id:"mall",x:T.mx+T.nx*(.6-P.d*U/2),z:T.mz+T.nz*(.6-P.d*U/2),yaw:Math.atan2(T.nx,T.nz),sx:U,sy:N,sz:U},this.lm.push(b)}}let x=new li(e.p.map(T=>new ae(T[0],-T[1]))),v=p>0?new Us(x,{depth:p,bevelEnabled:!1}):null;if(v&&v.rotateX(-Math.PI/2),v){let T=v.attributes.uv;for(let P=0;P<T.count;P++)T.setXY(P,T.getX(P)/9,T.getY(P)/(p>7?p/2:p))}let M=Je(e.c[0]|0,e.c[1]|0,9),E=M<.4?n.arch:M<.75?n.brick:n.modern,R=r?n.mosque:o||a?this.mat.white:c?n.mall:l?n.shops:h||u||d||p>7.5?n.flats:E,y=new pt;if(v){let T=new de(v,[this.mat.roofFlat,R]);T.castShadow=!0,T.receiveShadow=!0,y.add(T)}let w=e.c;if(!r&&!o&&!a&&!c&&!l&&!h&&!u&&!d&&p<=7&&e.p.length<=6&&g>5){let T=Ho(e.p),P=new de(this.roofGeo,this.mat.roof);P.position.set(T.x,p,T.z),P.rotation.y=T.h,P.scale.set((T.hw+.5)*2*Math.SQRT1_2,1.8+T.hw*.15,(T.hl+.5)*2*Math.SQRT1_2),P.castShadow=!0,P.userData.shared=!0,y.add(P)}if(r&&!S){let T=Math.min(7,Math.max(2.5,g*.26)),P=new de(new ei(T,24,14,0,Math.PI*2,0,Math.PI/2),this.mat.dome);P.position.set(w[0],p,w[1]),P.castShadow=!0,y.add(P);let U=new de(new Gt(T,T,1.2,24),this.mat.white);U.position.set(w[0],p+.6,w[1]),y.add(U),P.position.y=p+1.2;let N=new de(new ts(.55,.09,6,18,Math.PI*1.5),this.mat.gold);N.position.set(w[0],p+1.2+T+.8,w[1]),N.rotation.z=Math.PI*.25,y.add(N);let k=new de(new Gt(.06,.06,1,6),this.mat.gold);k.position.set(w[0],p+1.2+T+.4,w[1]),y.add(k);let F=[[f[0]+2.2,f[1]+2.2],[f[2]-2.2,f[1]+2.2],[f[0]+2.2,f[3]-2.2],[f[2]-2.2,f[3]-2.2]].filter(([te,ue])=>Rc(te,ue,e.p));for(let[te,ue]of F){let ye=new de(new ei(1.2,14,8,0,Math.PI*2,0,Math.PI/2),this.mat.dome);ye.position.set(te,p,ue),y.add(ye)}let W=p+8+Math.min(10,g*.45),z=g>18?[[f[0]+1.6,f[1]+1.6],[f[2]-1.6,f[1]+1.6]]:[[f[0]+1.6,f[1]+1.6]];for(let[te,ue]of z){let ye=new de(new Gt(.85,1.05,W,12),this.mat.white);ye.position.set(te,W/2,ue),ye.castShadow=!0,y.add(ye);for(let ge of[.55,.8]){let he=new de(new Gt(1.35,1.1,.5,12),this.mat.dome);he.position.set(te,W*ge,ue),y.add(he)}let X=new de(new ei(1.2,12,8,0,Math.PI*2,0,Math.PI/2),this.mat.dome);X.position.set(te,W,ue),y.add(X);let se=new de(new Gt(.05,.05,1.2,6),this.mat.gold);se.position.set(te,W+1.6,ue),y.add(se)}let ee=this.nearest(w[0],w[1]),j=this.roadEdge(e,ee);if(j){let te=Math.min(10,j.L*.6),ue=new de(new at(te,Math.min(p,5.5),2.4),[n.mosque,n.mosque,this.mat.roofFlat,this.mat.roofFlat,n.mosque,n.mosque]);ue.position.set(j.mx+j.nx*1.3,Math.min(p,5.5)/2,j.mz+j.nz*1.3),ue.rotation.y=Math.atan2(j.nx,j.nz),ue.castShadow=!0,y.add(ue)}}else if(o)for(let T=0;T<3;T++){let P=new de(new Gt(Math.max(.6,2.6-T*.8),Math.max(1,3.4-T*.8),2.2,4),T===2?this.mat.gold:this.mat.white);P.position.set(w[0],p+1.1+T*2.2,w[1]),P.rotation.y=Math.PI/4,P.castShadow=!0,y.add(P)}else if(a){let T=new de(new at(3.2,p+5,3.2),this.mat.white);T.position.set(f[0]+2,(p+5)/2,f[1]+2),T.castShadow=!0,y.add(T);let P=new de(new To(2.3,4.5,4),this.mat.roofFlat);P.position.set(f[0]+2,p+7.2,f[1]+2),P.rotation.y=Math.PI/4,y.add(P)}else if(c){let T=this.nearest(w[0],w[1]),P=this.roadEdge(e,T);if(P&&!b){let N=new de(new at(Math.min(16,P.L*.5),.5,5),this.mat.navy);N.position.set(P.mx+P.nx*2.5,4.2,P.mz+P.nz*2.5),N.rotation.y=Math.atan2(P.nx,P.nz),N.castShadow=!0,y.add(N);for(let k of[-1,1]){let F=new de(new Gt(.15,.15,4,8),this.mat.pole),W=P.mx+P.nx*4.6+-P.nz*k*Math.min(7,P.L*.22),z=P.mz+P.nz*4.6+P.nx*k*Math.min(7,P.L*.22);F.position.set(W,2,z),y.add(F)}}let U=new de(new at(Math.max(4,g*.25),2,Math.max(4,g*.25)),this.mat.roofFlat);U.position.set(w[0],p+1,w[1]),y.add(U)}if((c||l||d||u)&&_>500&&Je(w[0]|0,w[1]|0,21)<.6){let T=this.nearest(w[0],w[1]),P=this.roadEdge(e,T);if(P){let U=this.M,N=Math.min(1,P.L/14),k=new de(U.bbPanelGeo,[U.rail,U.rail,U.rail,U.rail,U.billboards[(e.c[0]|0)%6<0?0:Math.abs(e.c[0]|0)%6],U.rail]);k.scale.set(N,.75,1),k.position.set(P.mx-P.nx*2.5,p+2.4,P.mz-P.nz*2.5),k.rotation.y=Math.atan2(P.nx,P.nz),k.userData.shared=!0,y.add(k);for(let F of[-3,3]){let W=new de(U.bbPostGeo,U.rail);W.scale.set(.6,.55,.6),W.position.set(P.mx-P.nx*2.5+-P.nz*F*N,p+1.2,P.mz-P.nz*2.5+P.nx*F*N),W.userData.shared=!0,y.add(W)}}}if(e.name&&!/^(yes|house|residential)$/i.test(e.name)){let T=this.nearest(w[0],w[1]),P=this.roadEdge(e,T);if(P){let U=Math.min(c?22:16,Math.max(6,P.L*.8)),N=U*(c?.14:.16),k=this.nameTexture(e.name,r?"\u{1F54C}":o?"\u{1F6D5}":a?"\u26EA":h?"\u{1F3EB}":c?"\u{1F6CD}\uFE0F":u?"\u{1F3DB}\uFE0F":""),F=new de(new at(U,N,.25),[this.mat.navy,this.mat.navy,this.mat.navy,this.mat.navy,k,k]),W=S?Math.min(p+N/2+.4,1.2):p+N/2+.4,z=S?1.2:.3;F.position.set(P.mx+P.nx*z,W,P.mz+P.nz*z),F.rotation.y=Math.atan2(P.nx,P.nz),y.add(F)}}return y}entranceEdge(e){let t=e.c,n=null,s=-1/0;for(let r=0;r<e.p.length;r++){let o=e.p[r],a=e.p[(r+1)%e.p.length],c=Math.hypot(a[0]-o[0],a[1]-o[1]);if(c<18)continue;let l=(o[0]+a[0])/2,h=(o[1]+a[1])/2,u=-(a[1]-o[1])/c,d=(a[0]-o[0])/c;(l-t[0])*u+(h-t[1])*d<0&&(u=-u,d=-d);let f=this.nearest(l+u*14,h+d*14,{skipMinor:!0}),g=f.px!=null?Math.hypot(l+u*14-f.px,h+d*14-f.pz):999,_=Math.min(c,60)-g*.8;_>s&&(s=_,n={a:o,q:a,mx:l,mz:h,L:c,nx:u,nz:d,d:g})}return n&&n.d<70?n:null}roadEdge(e,t){let n=e.c,s=null,r=1/0;for(let u=0;u<e.p.length;u++){let d=e.p[u],f=e.p[(u+1)%e.p.length],g=(d[0]+f[0])/2,_=(d[1]+f[1])/2,m=Math.hypot(f[0]-d[0],f[1]-d[1]);if(m<4)continue;let p=t.px!=null?Math.hypot(g-t.px,_-t.pz):0;p<r&&(r=p,s={a:d,q:f,mx:g,mz:_,L:m})}if(!s)return null;let o=s.q[0]-s.a[0],c=-(s.q[1]-s.a[1]),l=o,h=Math.hypot(c,l)||1;return c/=h,l/=h,(s.mx-n[0])*c+(s.mz-n[1])*l<0&&(c=-c,l=-l),s.nx=c,s.nz=l,s}nameTexture(e,t){let n=t+e;if(this.signCache.has(n))return this.signCache.get(n);let s=document.createElement("canvas");s.width=1024,s.height=160;let r=s.getContext("2d");r.fillStyle="#17283C",r.fillRect(0,0,1024,160),r.fillStyle="#D0B46C",r.fillRect(0,146,1024,14),r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle";let o=84;r.font=`900 ${o}px Poppins, "Segoe UI", Arial, sans-serif`;let a=(t?t+"  ":"")+e.toUpperCase();for(;r.measureText(a).width>960&&o>34;)o-=4,r.font=`900 ${o}px Poppins, "Segoe UI", Arial, sans-serif`;r.fillText(a,512,78);let c=new Qn(s);c.colorSpace=Et,c.anisotropy=4;let l=new Rt({map:c,emissiveMap:c,emissive:16777215,emissiveIntensity:this.style.nightNow?.8:0,roughness:.6});return this.signCache.set(n,l),this.signMats.push(l),l}buildFuel(e,t,n){let s=this.nearest(e.c[0],e.c[1]);if(s.d>1e8)return;let r=s.h,o=new pt;o.position.set(e.c[0],0,e.c[1]),o.rotation.y=r;let a=(u,d)=>[e.c[0]+u*Math.cos(r)+d*Math.sin(r),e.c[1]-u*Math.sin(r)+d*Math.cos(r)],c=new de(new at(14,.6,9),this.mat.white);c.position.y=4.8,c.castShadow=!0,o.add(c);let l=new de(new at(14.2,.9,9.2),this.mat.navy);l.position.y=4.1,o.add(l);for(let[u,d]of[[-5,-3],[5,-3],[-5,3],[5,3]]){let f=new de(new Gt(.2,.2,4,8),this.mat.white);f.position.set(u,2,d),o.add(f);let[g,_]=a(u,d);n.push({type:"circle",x:g,z:_,r:.25})}for(let u of[-2.5,2.5]){let d=new de(new at(.9,1.7,.5),this.mat.gold);d.position.set(u,.85,0),o.add(d);let[f,g]=a(u,0);n.push({type:"box",x:f,z:g,hw:.5,hl:.3,h:r})}let h=new de(new at(3,1,.2),[this.mat.navy,this.mat.navy,this.mat.navy,this.mat.navy,this.nameTexture(e.name||"Petrol","\u26FD"),this.mat.navy]);h.position.set(0,5.9,0),o.add(h),t.add(o)}spawnAgent(e,t,n){for(let s=0;s<30;s++){let r=Math.floor(Math.random()*this.roads.length),o=this.roads[r];if(o.t==="service"||o.t==="track"||o.len<40)continue;let a=Math.floor(Math.random()*(o.n.length-1)),c=this.nodes[o.n[a]],l=Math.hypot(c[0]-t,c[1]-n);if(!(l<60||l>350))return e.r=r,e.i=a,e.t=Math.random(),e.dir=o.one||Math.random()<.5?1:-1,e.speed=(pm[o.t]||10)*dm(.8,1),!0}return!1}agentRed(e){let t=this.roads[e.r],n=t.seg[e.i],s=e.dir>0?(1-e.t)*n:e.t*n;if(s>9||s<.5)return!1;let r=this.nodes[t.n[e.dir>0?e.i+1:e.i]],o=performance.now()/1e3,a=this.nodes[t.n[e.i]],c=this.nodes[t.n[e.i+1]],l=(c[0]-a[0])/n*e.dir,h=(c[1]-a[1])/n*e.dir;for(let u of this.tlHeads)if(u.mesh.parent){for(let d of u.heads)if(!(Math.abs(d.nx-r[0])>2||Math.abs(d.nz-r[1])>2)&&!(-(d.ux*l+d.uz*h)<.75))return this.headState(d,o)!=="g"}return!1}advanceAgent(e,t){let n=this.roads[e.r],s=this.nodes,r=e.speed*t;for(;r>0;){let m=n.seg[e.i],p=e.t*m,S=e.dir>0?m-p:p;if(r<S){e.t+=e.dir*r/m,r=0;break}r-=S;let b=e.dir>0?e.i+1:e.i,x=n.n[b],v=[];for(let[T,P]of this.nodeRoads.get(x)||[]){let U=this.roads[T];U.t==="service"||U.t==="track"||(P<U.n.length-1&&!(T===e.r&&U.one===0&&P===e.i&&e.dir<0)&&v.push([T,P,1]),P>0&&!U.one&&!(T===e.r&&P-1===e.i&&e.dir>0)&&v.push([T,P-1,-1]))}let M=v.filter(([T])=>T===e.r),E=Math.random()<.7&&M.length?M:v;if(!E.length){e.dir=-e.dir;break}let[R,y,w]=E[Math.floor(Math.random()*E.length)];return e.r=R,e.i=y,e.dir=w,e.t=w>0?0:1,e.speed=(pm[R===e.r?n.t:this.roads[R].t]||10)*dm(.8,1),this.advanceAgent(e,r/e.speed)}let o=this.roads[e.r],a=s[o.n[e.i]],c=s[o.n[e.i+1]],l=(c[0]-a[0])/o.seg[e.i],h=(c[1]-a[1])/o.seg[e.i],u=l*e.dir,d=h*e.dir,f=d,g=-u,_=o.one?o.w/4*(Math.random()<.5?1:-1)*0+o.w/4:o.w/4;e.x=a[0]+l*e.t*o.seg[e.i]+f*_,e.z=a[1]+h*e.t*o.seg[e.i]+g*_,e.h=Math.atan2(-u,-d)}startPose(){let[e,t]=this.style.start,n=null;for(let o=0;o<400&&!(n&&n.d<1e8);o+=40)for(let a=0;a<6.3&&!(n&&n.d<1e8);a+=.8){let c=this.nearest(e+Math.cos(a)*o,t+Math.sin(a)*o,{skipMinor:!0});c.d<1e8&&(n=c)}n||(n=this.nearest(e,t));let s=-Math.cos(n.h)*0+Math.cos(n.h),r=-Math.sin(n.h);return{x:n.px-s*n.w/4,z:n.pz-r*n.w/4,h:n.h}}dispose(){for(let e of this.tiles.values())this.disposeTile(e);this.tiles.clear(),this.scene.remove(this.group)}};function ko(i,e,t,n,s,r=n){let o=i.length,a=new Float32Array(o*6),c=new Float32Array(o*4),l=[],h=0;for(let f=0;f<o;f++){let g=i[f],_=i[Math.max(0,f-1)],m=i[Math.min(o-1,f+1)],p=g[0]-_[0],S=g[1]-_[1],b=m[0]-g[0],x=m[1]-g[1],v=Math.hypot(p,S)||1,M=Math.hypot(b,x)||1;p/=v,S/=v,b/=M,x/=M,f===0&&(p=b,S=x),f===o-1&&(b=p,x=S);let E=-(S+x),R=p+b,y=Math.hypot(E,R)||1;E/=y,R/=y;let T=1/Math.max(.5,E*-x+R*b);if(a.set([g[0]+E*e*T,n,g[1]+R*e*T,g[0]+E*t*T,r,g[1]+R*t*T],f*6),f>0&&(h+=Math.hypot(g[0]-_[0],g[1]-_[1])),c.set([0,h*s,1,h*s],f*4),f<o-1){let P=f*2;l.push(P,P+1,P+2,P+1,P+3,P+2)}}let u=new rt;if(u.setAttribute("position",new Ge(a,3)),u.setAttribute("uv",new Ge(c,2)),u.setIndex(l),u.computeVertexNormals(),u.attributes.normal.getY(0)<0){let f=u.index.array;for(let g=0;g<f.length;g+=3){let _=f[g+1];f[g+1]=f[g+2],f[g+2]=_}u.computeVertexNormals()}return u}function Tc(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e*3),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),h.attributes.uv&&s.set(h.attributes.uv.array,a*2),r.set(h.attributes.normal.array,a*3);let u=h.index.array;for(let d=0;d<u.length;d++)o[c+d]=u[d]+a;a+=h.attributes.position.count,c+=u.length,h.dispose()}let l=new rt;return l.setAttribute("position",new Ge(n,3)),l.setAttribute("uv",new Ge(s,2)),l.setAttribute("normal",new Ge(r,3)),l.setIndex(new Ge(o,1)),l}function ib(i){let e=0;for(let t=0,n=i.length-1;t<i.length;n=t++)e+=(i[n][0]+i[t][0])*(i[n][1]-i[t][1]);return Math.abs(e/2)}function Ac(i){let e=0,t=0;for(let n of i)e+=n[0],t+=n[1];return[e/i.length,t/i.length]}function mm(i){let e=1/0,t=-1/0,n=1/0,s=-1/0;for(let r of i)e=Math.min(e,r[0]),t=Math.max(t,r[0]),n=Math.min(n,r[1]),s=Math.max(s,r[1]);return[e,n,t,s]}function Rc(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s],a=t[r];o[1]>e!=a[1]>e&&i<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function Ho(i){let e=0,t=-1;for(let f=0;f<i.length;f++){let g=i[f],_=i[(f+1)%i.length],m=Math.hypot(_[0]-g[0],_[1]-g[1]);m>t&&(t=m,e=Math.atan2(_[1]-g[1],_[0]-g[0]))}let n=Math.cos(-e),s=Math.sin(-e),r=1/0,o=-1/0,a=1/0,c=-1/0;for(let f of i){let g=f[0]*n-f[1]*s,_=f[0]*s+f[1]*n;r=Math.min(r,g),o=Math.max(o,g),a=Math.min(a,_),c=Math.max(c,_)}let l=(r+o)/2,h=(a+c)/2,u=l*Math.cos(e)-h*Math.sin(e),d=l*Math.sin(e)+h*Math.cos(e);return{x:u,z:d,hw:(o-r)/2,hl:(c-a)/2,h:-e}}var Go=class i extends de{constructor(){super(i.Geometry,new Bt({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new D,t=new D,n=new So(16,16),s=new So(16,16),r=Bn,o=i.Geometry,a=new ns({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),c=new ns({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new de(o,a),h=[],u=gi.Shader,d=new ns({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new Te(16777215)},scale:{value:new ae},screenPosition:{value:new D}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:zn,transparent:!0,depthWrite:!1}),f=new de(o,d);this.addElement=function(S){h.push(S)};let g=new ae,_=new ae,m=new uc,p=new dt;this.onBeforeRender=function(S,b,x){S.getCurrentViewport(p);let v=S.getRenderTarget(),M=v!==null?v.texture.type:Bn;r!==M&&(n.dispose(),s.dispose(),n.type=s.type=M,r=M);let E=p.w/p.z,R=p.z/2,y=p.w/2,w=16/p.w;if(g.set(w*E,w),m.min.set(p.x,p.y),m.max.set(p.x+(p.z-16),p.y+(p.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(x.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(x.projectionMatrix),_.x=p.x+e.x*R+R-8,_.y=p.y+e.y*y+y-8,m.containsPoint(_))){S.copyFramebufferToTexture(n,_);let T=a.uniforms;T.scale.value=g,T.screenPosition.value=e,S.renderBufferDirect(x,null,o,a,l,null),S.copyFramebufferToTexture(s,_),T=c.uniforms,T.scale.value=g,T.screenPosition.value=e,S.renderBufferDirect(x,null,o,c,l,null);let P=-e.x*2,U=-e.y*2;for(let N=0,k=h.length;N<k;N++){let F=h[N],W=d.uniforms;W.color.value.copy(F.color),W.map.value=F.texture,W.screenPosition.value.x=e.x+P*F.distance,W.screenPosition.value.y=e.y+U*F.distance,w=F.size/p.w;let z=p.w/p.z;W.scale.value.set(w*z,w),d.uniformsNeedUpdate=!0,S.renderBufferDirect(x,null,o,d,f,null)}}},this.dispose=function(){a.dispose(),c.dispose(),d.dispose(),n.dispose(),s.dispose();for(let S=0,b=h.length;S<b;S++)h[S].texture.dispose()}}},gi=class{constructor(e,t=1,n=0,s=new Te(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=s}};gi.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};Go.Geometry=function(){let i=new rt,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new Cs(e,5);return i.setIndex([0,1,2,0,2,3]),i.setAttribute("position",new es(t,3,0,!1)),i.setAttribute("uv",new es(t,2,3,!1)),i}();var Ic=(i,e)=>i+Math.random()*(e-i),sb=new Pr,nd={};function Vt(i,{mirror:e=!0,srgb:t=!0}={}){if(nd[i])return nd[i];let n=sb.load(`tex/${i}.webp`);return n.wrapS=n.wrapT=e?As:Li,t&&(n.colorSpace=Et),n.anisotropy=8,nd[i]=n,n}var zt=i=>new Rt(i);function qr(i,e,t,n={}){let s=Vt(i,{mirror:!1}),r=e*t,o=new Yt(r,e);o.translate(0,e/2-(n.sink||0),0);let a=zt({map:s,alphaTest:.45,side:Nt,roughness:1,metalness:0}),c=new Yt(r,e);return c.translate(0,e/2-(n.sink||0),0),c.rotateY(Math.PI/2),[{geometry:o,material:a},{geometry:c,material:a}]}function id(i,e,t,n){let s=i.attributes.uv,r=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}s.needsUpdate=!0}function gm(i,e){let t={scene:i,worlds:{},current:null,road:null},n=new Oo;n.scale.setScalar(2e4),i.add(n);let s=new Ur(16777215,2.2);s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-22,s.shadow.camera.right=22,s.shadow.camera.top=30,s.shadow.camera.bottom=-30,s.shadow.camera.near=1,s.shadow.camera.far=160,s.shadow.bias=-8e-4,s.shadow.normalBias=.02,i.add(s),i.add(s.target);let r=new cc(12574719,4876842,.5);i.add(r);let o=new Tr(e);t.sky=n,t.sun=s,t.hemi=r;let a=zt({roughness:1,metalness:0}),c=new de(new Yt(1600,1600),a);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,i.add(c);let l=new Bt({transparent:!0,alphaTest:.2,side:rn,fog:!1,depthWrite:!1}),h=new de(new Gt(560,560,150,48,1,!0),l);h.renderOrder=-1,i.add(h);let u=Vt("asphalt");u.repeat.set(2,1);let d=Vt("asphalt_n",{srgb:!1});d.repeat.set(2,1);let f=Vt("asphalt_r",{srgb:!1});f.repeat.set(2,1);let g=[1,2,3,4,5,6].map(re=>Vt("billboard"+re,{mirror:!1})),_=Vt("banner",{mirror:!1}),m=Vt("shopsign",{mirror:!1}),p={road:zt({map:u,normalMap:d,normalScale:new ae(.45,.45),roughnessMap:f,roughness:1,metalness:0,envMapIntensity:.6}),shoulder:zt({roughness:1}),line:zt({color:16053492,roughness:.7}),rail:zt({color:12106946,roughness:.45,metalness:.8}),railGeo:new at(.08,.32,4.1),postGeo:new at(.1,.75,.1),pole:zt({color:16734774,roughness:.7}),poleGeo:new at(.12,1.4,.12),billboards:g.map(re=>zt({map:re,emissiveMap:re,emissive:16777215,emissiveIntensity:0,roughness:.6})),bbPanelGeo:new at(12,6,.25),bbPostGeo:new Gt(.18,.22,4.5,8),sign:zt({map:m,emissiveMap:m,emissive:16777215,emissiveIntensity:0,roughness:.5}),gantryPostGeo:new at(.5,7.5,.5),gantryBeamGeo:new at(Xt+3,.5,.5),gantrySignGeo:new at(12,3,.2),lamp:zt({color:10133670,roughness:.4,metalness:.8}),lampGlow:zt({color:16773824,emissive:16769184,emissiveIntensity:0}),banner:zt({map:_,emissiveMap:_,emissive:16777215,emissiveIntensity:0,side:Nt,roughness:.8}),bannerGeo:(()=>{let re=new Yt(.7,2.1);return re.translate(.65,4.4,0),re})(),pool:new Bt({color:16766346,transparent:!0,opacity:0,blending:zn,depthWrite:!1,fog:!1})};p.poolGeo=new Ls(5.5,20),p.poolGeo.rotateX(-Math.PI/2),p.poolGeo.translate(2,.06,0);{let re=document.createElement("canvas");re.width=128,re.height=192;let $=re.getContext("2d");$.clearRect(0,0,128,192);for(let A=0;A<3;A++){let O=150-A*52;$.fillStyle=A===2?"#fff6c8":"#ffd64a",$.beginPath(),$.moveTo(12,O),$.lineTo(64,O-42),$.lineTo(116,O),$.lineTo(116,O-22),$.lineTo(64,O-64),$.lineTo(12,O-22),$.closePath(),$.fill()}let C=new Qn(re);C.colorSpace=Et,p.pad=new Bt({map:C,transparent:!0,depthWrite:!1,fog:!1,opacity:.95}),p.padGeo=new Yt(3.2,4.8),p.padGeo.rotateX(-Math.PI/2)}{let re=document.createElement("canvas");re.width=re.height=128;let $=re.getContext("2d"),C=$.createRadialGradient(64,64,0,64,64,64);C.addColorStop(0,"rgba(255,255,255,1)"),C.addColorStop(1,"rgba(255,255,255,0)"),$.fillStyle=C,$.fillRect(0,0,128,128),p.pool.map=new Qn(re),p.pool.alphaMap=p.pool.map}{let re=new Gt(.08,.12,7,6);re.translate(0,3.5,0);let $=new at(2,.1,.1);$.translate(1,6.95,0),p.lampGeo=rb([re,$]),p.lampGlowGeo=new at(.6,.15,.3),p.lampGlowGeo.translate(1.8,6.9,0)}t.M=p;let b=["facade_glass","facade_brick","facade_shops"].map(re=>Vt(re,{mirror:!1})).map(re=>zt({map:re,emissiveMap:re,emissive:16777215,emissiveIntensity:0,roughness:.5,metalness:.1})),x=zt({color:4869717,roughness:1});function v(re){let $=re?18:Ic(10,18),C=re?9:Ic(9,42),A=re?12:Ic(10,16),O=new pt;if(re){let Y=new de(new at($,5,A),[b[2],b[2],x,x,b[2],b[2]]);id(Y.geometry,$/9,5/9,A/9),Y.position.y=2.5,O.add(Y);let Q=new de(new at($,1.3,A+.2),[x,x,x,x,p.sign,x]);Q.position.y=5.65,O.add(Q);let J=new de(new at($,2.7,A),[b[1],b[1],x,x,b[1],b[1]]);id(J.geometry,$/12,2.7/12,A/12),J.position.y=7.65,O.add(J)}else{let Y=b[Math.random()<.5?0:1],Q=Y===b[0]?10:12,J=new de(new at($,C,A),[Y,Y,x,x,Y,Y]);if(id(J.geometry,$/Q,C/Q,A/Q),J.position.y=C/2,O.add(J),C>20){let Ae=new de(new at($*.5,2,A*.5),x);Ae.position.y=C+1,O.add(Ae)}}return{group:O,w:$,h:C,d:A,gap:Ic(0,4)}}let M=Vt("clouds",{mirror:!0});M.repeat.set(3,3);let E=new Bt({map:M,transparent:!0,depthWrite:!1,fog:!1,opacity:.95,side:Nt}),R=new de(new Yt(3600,3600),E);R.rotation.x=-Math.PI/2,R.position.y=330,R.renderOrder=-2,i.add(R),t.clouds=R;let y=new Go,w=Vt("lensflare0",{mirror:!1}),T=Vt("lensflare3",{mirror:!1});y.addElement(new gi(w,420,0,new Te(16773840))),y.addElement(new gi(T,60,.6)),y.addElement(new gi(T,70,.7)),y.addElement(new gi(T,120,.9)),y.addElement(new gi(T,70,1));let P=new Ft;P.add(y),i.add(P),t.flare=P;let U=zt({color:5915440,roughness:1}),N=re=>zt({map:Vt(re,{mirror:!1}),alphaTest:.5,side:Nt,roughness:.9,metalness:0}),k=(re,$)=>new Yt(re,$),F=new Gt(.22,.42,1,7);F.translate(0,.5,0);let W={trunk:{geometry:F,material:U,h:3.4},cards:{geometry:k(5.6,3.65),material:N("leaf_oak"),n:9,rx:3.6,ry:2.4,yc:5.6,tilt:.55,flat:!1},obstacle:.5},z={trunk:{geometry:F,material:U,h:6},cards:{geometry:k(4.2,2.8),material:N("leaf_pine"),n:11,rx:2.6,ry:4.6,yc:7.6,tilt:.35,flat:!0,cone:!0},obstacle:.45},ee=k(1.1,.75);ee.translate(0,.33,0);let j=zt({map:Vt("grass_tuft",{mirror:!1}),alphaTest:.5,side:Nt,roughness:1,metalness:0}),te=zt({map:Vt("grass_tuft",{mirror:!1}),alphaTest:.5,side:Nt,roughness:1,metalness:0,color:13217914});t.treeStyles={oakTree:W,pineTree:z};let ue=qr("tree_oak",11,768/670,{sink:.2}),ye=qr("tree_pine",14,476/1045),X=qr("cactus",6,362/1059),se=qr("tree_snowpine",12,599/1084),ge={geometry:new sc(1.2,0),material:zt({color:11043420,roughness:1}),y:.5,shadow:!0},he={geometry:new ei(1.5,8,6),material:zt({color:15791615,roughness:1}),y:.2};t.worlds={country:{ground:"grass",tile:7,shoulder:"sand",shoulderTint:9075290,backdrop:"hills_green",backdropH:70,guardrail:!0,scatter:[{tree:W,perChunk:12,lat:[12,60],scale:[.8,1.35]},{tree:z,perChunk:10,lat:[13,75],scale:[.8,1.3]},{parts:ue,perChunk:10,lat:[60,140],scale:[.9,1.4],billboard:!0},{parts:ye,perChunk:10,lat:[60,160],scale:[.9,1.4],billboard:!0},{grass:{geometry:ee,material:j},perChunk:220,lat:[10.2,26],scale:[.6,1.2]}],fog:{day:13229292,sunset:15316106,night:659230},fogFar:430,offroadGrip:.6},desert:{ground:"sand",tile:8,shoulder:"sand",shoulderTint:16777215,backdrop:"mesas_desert",backdropH:46,guardrail:!0,scatter:[{parts:X,perChunk:12,lat:[11,70],scale:[.8,1.6],billboard:!0,obstacle:.4},{parts:[ge],perChunk:16,lat:[9,90],scale:[.5,2.4],obstacle:1},{grass:{geometry:ee,material:te},perChunk:90,lat:[10.2,30],scale:[.5,1]}],fog:{day:15128253,sunset:15771242,night:1183522},fogFar:470,offroadGrip:.5},snow:{ground:"snow",tile:6,shoulder:"snow",shoulderTint:16777215,backdrop:"mountains_snow",backdropH:110,poles:!0,scatter:[{parts:se,perChunk:18,lat:[11,80],scale:[.7,1.5],billboard:!0,obstacle:.5},{parts:[he],perChunk:12,lat:[8,30],scale:[.6,1.8]},{tree:z,perChunk:6,lat:[12,50],scale:[.8,1.2]}],fog:{day:14411506,sunset:15776144,night:857128},fogFar:340,offroadGrip:.35},city:{ground:"pavement",tile:4,shoulder:"pavement",shoulderTint:16777215,backdrop:"skyline_city",backdropH:90,buildings:!0,makeBuilding:v,scatter:[],fog:{day:13622248,sunset:15247480,night:724506},fogFar:400,offroadGrip:.9,fMats:b}};let Ne=Vt("house_front",{mirror:!0}),Oe=Vt("precast_wall",{mirror:!0}),Fe=Vt("roof_tiles",{mirror:!0}),Ze=zt({map:Ne,roughness:.9,metalness:0}),ne=(re,$=.85)=>{let C=Vt(re,{mirror:!0});return zt({map:C,emissiveMap:C,emissive:16777215,emissiveIntensity:0,roughness:$,metalness:0})},fe={brick:ne("house_brick"),arch:ne("house_arch"),modern:ne("house_modern",.6),flats:ne("flats_block"),shops:ne("shops_row"),mall:ne("mall_facade",.6),mosque:ne("mosque_wall")},L=zt({map:Vt("palisade",{mirror:!0}),alphaTest:.5,side:Nt,roughness:.6,metalness:.6}),De=qr("tree_jacaranda",9,768/544,{sink:.1}),ce=qr("tree_palm",11,364/991),Me=zt({map:Oe,roughness:1,metalness:0}),pe=zt({map:Fe,roughness:.9,metalness:0});Fe.repeat.set(2,2),t.worlds.lenasia={ground:"grass",tile:7,groundTint:12037496,shoulder:"sand",shoulderTint:16777215,backdrop:"hills_green",backdropH:38,map:"lenasia.json",fog:{day:14081510,sunset:15316106,night:659230},fogFar:520,offroadGrip:.55,scatter:[],tex:Vt,fMats:b,fMatsHouse:Ze,wallMat:Me,roofTileMat:pe,makeBuilding:v,treeStyles:null,start:[-3567,-4324],showroomReal:[3852,-967],showroomAt:null,lenMats:fe,palisadeMat:L,jacaranda:De,palm:ce};for(let re in t.worlds)t.worlds[re].mats=p;return t.worlds.lenasia.treeStyles={oakTree:W,pineTree:z},t.mapData={},t.setWorld=re=>{let $=t.worlds[re];t.current=$,t.currentName=re;let C=Vt($.ground);C.repeat.set(1600/$.tile,1600/$.tile),a.map=C,a.needsUpdate=!0;let A=Vt($.shoulder);p.shoulder.map=A,p.shoulder.color.setHex($.shoulderTint),p.shoulder.needsUpdate=!0;let O=Vt($.backdrop,{mirror:!0});if(O.repeat.set(4,1),l.map=O,l.needsUpdate=!0,h.scale.y=$.backdropH/150,h.position.y=$.backdropH/2-2,a.color.setHex($.groundTint||16777215),t.road&&t.road.dispose(),t.road=null,$.map){t.loading=!0;let Y=Q=>{let J=new Cc(i,$,Q),Ae=J.startPose(),xe=J.nearest(Ae.x,Ae.z,{skipMinor:!0}),we=-Math.sin(xe.h),qe=-Math.cos(xe.h),me=qe,Ue=-we;if($.showroomReal){let[Ve,Xe]=$.showroomReal,Le=J.nearest(Ve,Xe),lt=Le.px!=null?Math.atan2(Le.px-Ve,Le.pz-Xe):0;$.showroomAt=[Ve,Xe,lt]}else $.showroomAt=[xe.px+we*70+me*(xe.w/2+12),xe.pz+qe*70+Ue*(xe.w/2+12),xe.h+Math.PI/2];t.road=J,t.loading=!1};t.mapData[$.map]?Y(t.mapData[$.map]):Promise.all([fetch($.map).then(Q=>Q.json()),fetch($.map.replace(".json","-bld.json")).then(Q=>Q.ok?Q.json():null).catch(()=>null)]).then(([Q,J])=>{J&&(Q.gb=J),t.mapData[$.map]=Q,t.current===$&&Y(Q)})}else t.road=new wc(i,$)},t.setTime=re=>{let $=t.current,C=re==="night",A=re==="rain",O=n.material.uniforms,Y,Q;re==="day"?(Y=48,Q=160,O.turbidity.value=2.2,O.rayleigh.value=1,O.mieCoefficient.value=.004,O.mieDirectionalG.value=.8):A?(Y=35,Q=160,O.turbidity.value=20,O.rayleigh.value=.2,O.mieCoefficient.value=.1,O.mieDirectionalG.value=.999):re==="sunset"?(Y=4,Q=235,O.turbidity.value=10,O.rayleigh.value=3,O.mieCoefficient.value=.006,O.mieDirectionalG.value=.85):(Y=-4,Q=180,O.turbidity.value=2,O.rayleigh.value=.3,O.mieCoefficient.value=.002,O.mieDirectionalG.value=.7);let J=Uo.degToRad(90-Y),Ae=Uo.degToRad(Q),xe=new D().setFromSphericalCoords(1,J,Ae);O.sunPosition.value.copy(xe),t.envRT&&t.envRT.dispose();let we=new Ar;we.add(n),t.envRT=o.fromScene(we,0,.1,200),i.add(n),i.environment=t.envRT.texture,i.background=null,re==="day"?(s.color.setHex(16774368),s.intensity=4.2,r.color.setHex(12572927),r.groundColor.setHex(7041116),r.intensity=1,i.environmentIntensity=1):A?(s.color.setHex(13620960),s.intensity=1.1,r.color.setHex(10135224),r.groundColor.setHex(3817284),r.intensity=1.6,i.environmentIntensity=.9):re==="sunset"?(s.color.setHex(16754784),s.intensity=3.2,r.color.setHex(15906186),r.groundColor.setHex(4865846),r.intensity=.8,i.environmentIntensity=1):(s.color.setHex(9412824),s.intensity=1.3,r.color.setHex(3952256),r.groundColor.setHex(1315864),r.intensity=1.5,i.environmentIntensity=.7),t.sunDir=xe.clone().normalize(),C&&t.sunDir.set(.3,.8,-.2).normalize(),i.fog=new qa(A?9345190:$.fog[re],A?20:40,$.fogFar*(C?.7:A?.55:1)),l.color.setHex(C?2765648:re==="sunset"?16765096:A?8226708:16777215),p.road.roughness=A?.3:1,p.road.envMapIntensity=A?1.6:.6,p.road.color.setHex(A?9079434:16777215),p.pool.opacity=C?.5:0,t.rain=A;for(let qe of p.billboards)qe.emissiveIntensity=C?.9:0;if(p.banner.emissiveIntensity=C?.6:0,p.sign.emissiveIntensity=C?.9:0,b.forEach(qe=>{qe.emissiveIntensity=C?.55:0,qe.emissive.setHex(C?16769968:16777215)}),p.lampGlow.emissiveIntensity=C?5:0,$.nightNow=C,t.road&&t.road.signMats)for(let qe of t.road.signMats)qe.emissiveIntensity=C?.8:0;for(let qe in fe)fe[qe].emissiveIntensity=C?.45:0;E.color.setHex(C?3818080:re==="sunset"?16763296:A?7305092:16777215),E.opacity=C?.6:A?1:.95,P.visible=!C&&!A,t.night=C},t.follow=(re,$,C,A)=>{let O=t.current;c.position.set(re,0,$),a.map&&a.map.offset.set(re/O.tile%2,-$/O.tile%2),h.position.x=re,h.position.z=$,R.position.x=re,R.position.z=$,M.offset.set(re/1200%2+performance.now()*4e-6,-$/1200%2),P.position.set(re+t.sunDir.x*900,t.sunDir.y*900,$+t.sunDir.z*900),s.target.position.set(re+C*8,0,$+A*8),s.position.copy(t.sunDir).multiplyScalar(80).add(s.target.position)},t}function rb(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),s.set(h.attributes.normal.array,a*3),r.set(h.attributes.uv.array,a*2);let u=h.index.array;for(let d=0;d<u.length;d++)o[c+d]=u[d]+a;a+=h.attributes.position.count,c+=u.length}let l=new rt;return l.setAttribute("position",new Ge(n,3)),l.setAttribute("normal",new Ge(s,3)),l.setAttribute("uv",new Ge(r,2)),l.setIndex(new Ge(o,1)),l}var Vo=(i,e,t)=>Math.max(e,Math.min(t,i)),ks=class{constructor(e){this.spec=e,this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.yawRate=0,this.throttle=0,this.brake=0,this.steer=0,this.offRoad=!1,this.surfaceGrip=1,this.steerAngle=0,this.vf=0,this.vl=0,this.halfW=e.w/2,this.halfL=e.len/2,this.mass=e.len>5?2.2:1.6}fwd(){return[-Math.sin(this.h),-Math.cos(this.h)]}right(){return[Math.cos(this.h),-Math.sin(this.h)]}speed(){return Math.hypot(this.vx,this.vz)}circles(){let[e,t]=this.fwd(),n=this.halfL*.55,s=this.halfW+.08;return[[this.x+e*n,this.z+t*n,s],[this.x-e*n,this.z-t*n,s]]}update(e,t,n,s,r){let[o,a]=this.fwd(),[c,l]=this.right(),h=this.vx*o+this.vz*a,u=this.vx*c+this.vz*l,d=t*(r?1.3:1)*(this.offRoad?.25:1);this.throttle>0&&(h+=this.throttle*n*(r?2:1)*Math.max(.12,1-.7*Vo(h/d,0,1))*e),this.brake>0&&(h>.5?h-=this.brake*16*e:h=Math.max(h-this.brake*4*e,-4)),h-=h*(this.offRoad?1.4:.12)*e,h-=.0018*h*Math.abs(h)*e,h>d&&(h+=(d-h)*Math.min(1,2*e)),Math.abs(h)<.05&&this.throttle===0&&this.brake===0&&(h=0);let f=Math.abs(h),g=s*.09,_=-this.steer*g*Vo(f/6,0,1)*(1/(1+f/28))*Math.sign(h||1);this.yawRate+=(_-this.yawRate)*Math.min(1,8*e),this.h+=this.yawRate*e,this.steerAngle+=(this.steer*.42-this.steerAngle)*Math.min(1,10*e);let m=(this.offRoad?2.2:7.5)*this.surfaceGrip;u-=u*Math.min(1,m*e);let p=this.yawRate*f*.08*(this.offRoad?2.5:1);u+=p*e,u=Vo(u,-12,12);let[S,b]=this.fwd(),[x,v]=this.right();this.vx=S*h+x*u,this.vz=b*h+v*u,this.x+=this.vx*e,this.z+=this.vz*e,this.vf=h,this.vl=u}};function Pc(i,e,t=.35){let n=0,s=i.circles(),r=e.circles();for(let[o,a,c]of s)for(let[l,h,u]of r){let d=l-o,f=h-a,g=Math.hypot(d,f),_=c+u;if(g>=_||g<1e-4)continue;let m=d/g,p=f/g,S=_-g,b=i.mass,x=e.mass,v=b+x;i.x-=m*S*(x/v),i.z-=p*S*(x/v),e.x+=m*S*(b/v),e.z+=p*S*(b/v);let M=e.vx-i.vx,E=e.vz-i.vz,R=M*m+E*p;if(R<0){let y=-(1+t)*R/(1/b+1/x);i.vx-=y*m/b,i.vz-=y*p/b,e.vx+=y*m/x,e.vz+=y*p/x;let[w,T]=i.right(),P=m*w+p*T;i.yawRate+=P*Math.min(2,-R*.08),e.yawRate-=P*Math.min(2,-R*.08),n=Math.max(n,-R)}}return n}function xm(i,e,t,n,s=.25){let r=0;for(let[o,a,c]of i.circles()){let l=o-e,h=a-t,u=Math.hypot(l,h),d=c+n;if(u>=d||u<1e-4)continue;let f=l/u,g=h/u,_=d-u;i.x+=f*_,i.z+=g*_;let m=i.vx*f+i.vz*g;m<0&&(i.vx-=(1+s)*m*f,i.vz-=(1+s)*m*g,r=Math.max(r,-m),i.yawRate+=(Math.random()-.5)*Math.min(3,-m*.15))}return r}function _m(i,e,t,n,s,r,o=.2){let a=0,c=Math.cos(r),l=Math.sin(r);for(let[h,u,d]of i.circles()){let f=h-e,g=u-t,_=f*c-g*l,m=-f*l-g*c,p=Vo(_,-n,n),S=Vo(m,-s,s),b=_-p,x=m-S,v=Math.hypot(b,x),M,E,R;if(v>1e-4){if(v>=d)continue;M=b/v,E=x/v,R=d-v}else{let P=n-Math.abs(_),U=s-Math.abs(m);P<U?(M=Math.sign(_)||1,E=0,R=P+d):(M=0,E=Math.sign(m)||1,R=U+d)}let y=M*c-E*l,w=-M*l-E*c;i.x+=y*R,i.z+=w*R;let T=i.vx*y+i.vz*w;T<0&&(i.vx-=(1+o)*T*y,i.vz-=(1+o)*T*w,a=Math.max(a,-T))}return a}var Wo=(i,e,t)=>Math.max(e,Math.min(t,i)),ot={ctx:null,on:!0,engine:null,wind:null,gear:0,shiftT:0,rpm:.2,rain:!1,init(){if(this.ctx)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let e=this.ctx=new i,t=this.master=e.createGain();t.gain.value=0,t.connect(e.destination);let n=e.createGain();n.gain.value=0;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=500,s.Q.value=2.5;let r=e.createOscillator();r.type="sawtooth",r.frequency.value=60;let o=e.createOscillator();o.type="sawtooth",o.frequency.value=61;let a=e.createGain();a.gain.value=.5;let c=e.createOscillator();c.type="square",c.frequency.value=30;let l=e.createGain();l.gain.value=.3;let h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=180,h.Q.value=1.2;let u=e.createGain();u.gain.value=.5,r.connect(s),o.connect(a),a.connect(s),c.connect(l),l.connect(s),s.connect(n),r.connect(h),h.connect(u),u.connect(n),n.connect(t),r.start(),c.start(),o.start(),this.engine={o1:r,o2:c,o3:o,lp:s,eg:n,ex:h};let d=e.createBuffer(1,e.sampleRate*2,e.sampleRate),f=d.getChannelData(0);for(let _=0;_<f.length;_++)f[_]=Math.random()*2-1;let g=(_,m,p)=>{let S=e.createBufferSource();S.buffer=d,S.loop=!0;let b=e.createBiquadFilter();b.type=_,b.frequency.value=m,p&&(b.Q.value=p);let x=e.createGain();return x.gain.value=0,S.connect(b),b.connect(x),x.connect(t),S.start(),{g:x,f:b}};this.wind={...g("lowpass",600),buf:d},this.squeal=g("bandpass",1900,6),this.gravel=g("lowpass",900),this.rainN=g("highpass",2600),this.setOn(this.on)},setOn(i){this.on=i,this.master&&(this.master.gain.value=i?.8:0)},resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()},update(i,e,t,n,s=0,r=!1,o=.016){if(!this.engine)return;let a=6,c=e/a,l=Math.min(a-1,Math.floor(i/c));l!==this.gear&&(this.shiftT=.14,this.gear=l),this.shiftT=Math.max(0,this.shiftT-o);let h=Wo((i-l*c)/c,0,1),u=i<.5?t?.45:.15:.25+h*.7+(t?.05:0);this.rpm+=(u-this.rpm)*Math.min(1,(t?6:3)*o);let d=this.shiftT>0,f=d?this.rpm*.75:this.rpm,g=42+f*125+l*8+(n?35:0),_=(S,b,x)=>{S.value+=(b-S.value)*x};_(this.engine.o1.frequency,g,.3),_(this.engine.o3.frequency,g*1.012,.3),_(this.engine.o2.frequency,g/2,.3),_(this.engine.ex.frequency,120+f*500,.2),_(this.engine.lp.frequency,260+f*1500+(t?350:0),.15),_(this.engine.eg.gain,(t?.17:.07+f*.04)*(d?.55:1),.15);let m=Math.pow(Wo(i/60,0,1),2);_(this.wind.g.gain,m*.12,.08);let p=r?0:Wo((Math.abs(s)-2.2)/5,0,1)*Wo(i/12,0,1);_(this.squeal.g.gain,p*.16,.2),_(this.squeal.f.frequency,1700+p*500,.1),_(this.gravel.g.gain,r?Wo(i/15,0,1)*.2:0,.15),_(this.rainN.g.gain,this.rain?.045:0,.05)},horn(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime;for(let e of[420,525]){let t=this.ctx.createOscillator();t.type="square",t.frequency.value=e;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=1200;let s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(.18,i+.03),s.gain.setValueAtTime(.18,i+.45),s.gain.exponentialRampToValueAtTime(1e-4,i+.6),t.connect(n),n.connect(s),s.connect(this.master),t.start(i),t.stop(i+.65)}},bump(i){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.wind.buf;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=250+i*400;let s=this.ctx.createGain();if(s.gain.setValueAtTime(.55*i,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.22+i*.2),t.connect(n),n.connect(s),s.connect(this.master),t.start(e),t.stop(e+.5),i>.4){let r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(900,e),r.frequency.exponentialRampToValueAtTime(220,e+.15);let o=this.ctx.createGain();o.gain.setValueAtTime(.25*i,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.2),r.connect(o),o.connect(this.master),r.start(e),r.stop(e+.22)}},ping(i=0){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=880*Math.pow(2,Math.min(12,i)/12),n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(t,e),n.frequency.exponentialRampToValueAtTime(t*1.5,e+.08);let s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.22,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(this.master),n.start(e),n.stop(e+.25)},fanfare(i=!1){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=i?[523,659,784,1047]:[659,784,1047];t.forEach((n,s)=>{let r=this.ctx.createOscillator();r.type="triangle",r.frequency.value=n;let o=this.ctx.createGain(),a=e+s*.11;o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.25,a+.02),o.gain.exponentialRampToValueAtTime(1e-4,a+(s===t.length-1?.6:.25)),r.connect(o),o.connect(this.master),r.start(a),r.stop(a+.7)})},click(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.wind.buf;let t=this.ctx.createBiquadFilter();t.type="highpass",t.frequency.value=2500;let n=this.ctx.createGain();n.gain.setValueAtTime(.3,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.05),e.connect(t),t.connect(n),n.connect(this.master),e.start(i),e.stop(i+.06)},whoosh(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.wind.buf;let t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(3e3,i+.6),t.Q.value=1.5;let n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,i),n.gain.exponentialRampToValueAtTime(.3,i+.15),n.gain.exponentialRampToValueAtTime(1e-4,i+.9),e.connect(t),t.connect(n),n.connect(this.master),e.start(i),e.stop(i+1)}};var Zt={on:!0,lastT:0,lastText:"",can(i){try{if(window.Android&&window.Android.canSpeak)return window.Android.canSpeak(i||"en")}catch(e){}return!!window.speechSynthesis},say(i,e){let t=e||{};if(!this.on||!i)return!1;let n=performance.now();if(t.min&&n-this.lastT<t.min||t.once&&this.lastText===i)return!1;this.lastT=n,this.lastText=i;try{if(window.Android&&window.Android.speak)return window.Android.speak(i,t.lang||"en");if(window.speechSynthesis){let s=new SpeechSynthesisUtterance(i);return s.lang=t.lang==="ar"?"ar-SA":"en-GB",s.rate=.95,s.pitch=1.05,speechSynthesis.cancel(),speechSynthesis.speak(s),!0}}catch(s){}return!1},stop(){try{window.Android&&window.Android.stopSpeaking?window.Android.stopSpeaking():window.speechSynthesis&&speechSynthesis.cancel()}catch(i){}}},vm=["Red","Blue","Yellow","Green","White","Black","Orange","Purple","Turquoise"];function ym(i){if(!i)return null;if(i.kind==="goto"||i.kind==="deliver"){let s=(i.kind==="deliver"?"Recliner":i.text.replace(/^Drive to /,"")).replace(/^(the|al|a) /i,"").split(/\s+/)[0],r=s[0].toUpperCase();return/[A-Z]/.test(r)?{L:r,word:s}:null}let t={stars:"Stars",km:"Drive",speed:"Fast",clean:"Careful",boost:"Boost",horn:"Horn",pass:"Pass"}[i.kind];return t?{L:t[0],word:t}:null}var Mm=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];var Lc=class{constructor(e,t=1400){this.n=t,this.box={w:60,h:30,d:60};let n=new Float32Array(t*3*2);this.off=new Float32Array(t*3);for(let r=0;r<t;r++)this.off[r*3]=Math.random()*this.box.w-this.box.w/2,this.off[r*3+1]=Math.random()*this.box.h,this.off[r*3+2]=Math.random()*this.box.d-this.box.d/2;this.geo=new rt,this.geo.setAttribute("position",new Ge(n,3));let s=new Ps({color:13623536,transparent:!0,opacity:.35,fog:!0});this.mesh=new Cr(this.geo,s),this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh),this.t=0}set(e){this.mesh.visible=e}update(e,t,n,s,r){if(!this.mesh.visible)return;this.t+=e;let o=this.geo.attributes.position.array,{w:a,h:c,d:l}=this.box,h=28,u=-s*.05,d=-r*.05;for(let f=0;f<this.n;f++){let g=this.off[f*3],_=this.off[f*3+2],m=((this.off[f*3+1]-this.t*h)%c+c)%c,p=t+g,S=n+_;o[f*6]=p,o[f*6+1]=m,o[f*6+2]=S,o[f*6+3]=p+u,o[f*6+4]=m+1.1,o[f*6+5]=S+d}this.geo.attributes.position.needsUpdate=!0}},Dc=class{constructor(e,t=320){this.max=t,this.head=0;let n=new Float32Array(t*4*3),s=new Float32Array(t*4),r=new Uint16Array(t*6);for(let a=0;a<t;a++){let c=a*4;r.set([c,c+1,c+2,c,c+2,c+3],a*6)}this.geo=new rt,this.geo.setAttribute("position",new Ge(n,3)),this.geo.setAttribute("aA",new Ge(s,1)),this.geo.setIndex(new Ge(r,1));let o=new Ot({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{},vertexShader:"attribute float aA; varying float vA; void main(){ vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.05, 0.05, 0.05, vA * 0.55); }"});this.mesh=new de(this.geo,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,e.add(this.mesh),this.last=[null,null]}clear(){this.geo.attributes.aA.array.fill(0),this.geo.attributes.aA.needsUpdate=!0,this.last=[null,null]}update(e,t,n,s,r=.1){for(let o=0;o<2;o++){let a=t[o];if(e<=0){this.last[o]=null;continue}let c=this.last[o];if(!(c&&Math.hypot(a[0]-c[0],a[1]-c[1])<.35)){if(c){let l=this.head;this.head=(this.head+1)%this.max;let h=this.geo.attributes.position.array,u=this.geo.attributes.aA.array,d=.13;h.set([c[0]-n*d,r,c[1]-s*d,c[0]+n*d,r,c[1]+s*d,a[0]+n*d,r,a[1]+s*d,a[0]-n*d,r,a[1]-s*d],l*12),u.fill(e,l*4,l*4+4),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aA.needsUpdate=!0}this.last[o]=[a[0],a[1]]}}}};var Uc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ob=new Qi(-1,1,1,-1,0,1),sd=class extends rt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}},ab=new sd,us=class{constructor(e){this._mesh=new de(ab,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ob)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yr=class extends In{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hi.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new us(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xo=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Nc=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yr(Uc),this.copyPass.material.blending=ai,this.clock=new Nr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xo!==void 0&&(o instanceof Xo?n=!0:o instanceof Nc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Oc=class extends In{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var bm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Kr=class i extends In{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,o,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new hn(r,o,{type:Cn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new hn(r,o,{type:Cn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=bm;this.highPassUniforms=hi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Uc;this.copyUniforms=hi.clone(h.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new Bt,this.fsQuad=new us(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Kr.BlurDirectionX=new ae(1,0);Kr.BlurDirectionY=new ae(0,1);var wm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var zc=class extends In{constructor(){super();let e=wm;this.uniforms=hi.clone(e.uniforms),this.material=new ns({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new us(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===su?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ou?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===au?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===cu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var oe=i=>document.getElementById(i),xi=(i,e,t)=>Math.max(e,Math.min(t,i)),rd=(i,e,t)=>i+(e-i)*t,Xn=(i,e)=>i+Math.random()*(e-i),cb=(i,e)=>Math.floor(Xn(i,e+1)),Ko=i=>i[Math.floor(Math.random()*i.length)],Im="kidcars-v3",be={car:0,color:0,world:"country",time:"day",traffic:!0,sound:!0,tilt:!1,cam:0,controls:"wheel",eco:!0,voice:!0};try{Object.assign(be,JSON.parse(localStorage.getItem(Im)||"{}"))}catch(i){}kt[be.car]||(be.car=0);function bn(){try{localStorage.setItem(Im,JSON.stringify(be))}catch(i){}}var Pm=oe("c"),Ws=/[?&]test/.test(location.search),mn=new Xa({canvas:Pm,antialias:!Ws,powerPreference:"high-performance"});mn.setPixelRatio(Ws?.35:Math.min(window.devicePixelRatio||1,be.eco?1:1.5));mn.shadowMap.enabled=!Ws;mn.shadowMap.type=be.eco?Po:dc;mn.toneMapping=Lo;mn.toneMappingExposure=.5;var _n=new Ar,Lt=new $t(60,1,.3,1400);function $c(){let i=window.innerWidth,e=window.innerHeight;mn.setSize(i,e,!1),Lt.aspect=i/e,Lt.updateProjectionMatrix(),_i&&(_i.setPixelRatio(mn.getPixelRatio()),_i.setSize(i,e))}window.addEventListener("resize",$c);var ve=gm(_n,mn);Jp(_n);var $r=em(_n),ud=new Lc(_n),Lm=new Dc(_n),fs=new pt;{let i=new de(new Gt(4.6,4.9,.14,56),new Rt({color:1778736,roughness:.25,metalness:.6,envMapIntensity:1.2}));i.position.y=.07,i.receiveShadow=!0,fs.add(i);let e=new de(new ts(4.75,.07,8,64),new Rt({color:13677676,roughness:.3,metalness:.8}));e.rotation.x=Math.PI/2,e.position.y=.14,fs.add(e),fs.visible=!1,_n.add(fs)}var ln=new yc,ps=null,lb={uniforms:{tDiffuse:{value:null},uVig:{value:.35},uSat:{value:1.12}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVig; uniform float uSat; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.299,0.587,0.114)); c.rgb = mix(vec3(l), c.rgb, uSat);
      vec2 d = vUv - 0.5; float v = 1.0 - uVig * smoothstep(0.25, 0.75, dot(d, d) * 2.0); c.rgb *= v; gl_FragColor = c; }`},_i=null,Sm=null,xd=!Ws&&!be.eco;function hb(){let i=new hn(1,1,{type:Cn,samples:2});_i=new Fc(mn,i),_i.addPass(new Oc(_n,Lt)),Sm=new Kr(new ae(256,128),.18,.4,1.6),_i.addPass(Sm),_i.addPass(new Yr(lb)),_i.addPass(new zc)}hb();$c();var dd=0;function Dm(){let i=!!be.eco;Ws||(mn.setPixelRatio(Math.min(window.devicePixelRatio||1,i?1:1.5)),xd=!i&&Yo>1),dd=i&&!Ws?1e3/30:0;let e=i?1024:2048;ve.sun.shadow.mapSize.x!==e&&(ve.sun.shadow.mapSize.set(e,e),ve.sun.shadow.map&&(ve.sun.shadow.map.dispose(),ve.sun.shadow.map=null)),mn.shadowMap.type=i?Po:dc,mn.shadowMap.needsUpdate=!0,oe("optEco").textContent=i?"\u{1F50B}":"\u2728",oe("optEco").classList.toggle("off",!i),$c()}var Jo=[13832735,1525449,16106776,1414215,15921906,1381914,16738835,7153881,2078920],ub=oe("loading"),db=oe("loadfill"),_d=oe("loadtxt"),Em=0,Um=0;function Tm(i){Em++,db.style.width=Math.round(Em/Um*100)+"%",i&&(_d.textContent=i)}async function fb(){let i=kt[be.car].id;Um=kt.length+1,await Fo(i,!1),Tm("Polishing the "+kt[be.car].name+"\u2026");for(let e of kt)await Fo(e.id,!0),Tm("Loading traffic\u2026");_d.textContent="Ready!",setTimeout(()=>ub.classList.add("hidden"),350),(async()=>{for(let e of kt)if(!Fs(e.id,!1)){try{await Fo(e.id,!1)}catch(t){console.warn(t)}bt==="menu"&&kt[be.car].id===e.id&&Zo()}})()}var qs=60,zi=new rt,Hc=new Float32Array(qs*3),Nm=new Float32Array(qs),Fm=new Float32Array(qs),Gc=new Float32Array(qs*3);zi.setAttribute("position",new Ge(Hc,3));zi.setAttribute("aSize",new Ge(Nm,1));zi.setAttribute("aAlpha",new Ge(Fm,1));zi.setAttribute("aCol",new Ge(Gc,3));var pb=new Ot({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Te(7829367)}},vertexShader:"attribute float aSize; attribute float aAlpha; attribute vec3 aCol; varying float vA; varying vec3 vC; void main(){ vA = aAlpha; vC = aCol; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = aSize * 300.0 / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard; float a = smoothstep(0.5, 0.1, d) * vA; gl_FragColor = vec4(vC, a); }"}),Om=new Ir(zi,pb);Om.frustumCulled=!1;_n.add(Om);var vd=[];for(let i=0;i<qs;i++)vd.push({x:0,y:-10,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,r:.5,g:.5,b:.5});var od=0;function Vc(i,e,t,n,s){let r=vd[od];od=(od+1)%qs,s?(r.r=s[0],r.g=s[1],r.b=s[2]):r.r=r.g=r.b=.45,r.x=i+Xn(-.3,.3),r.y=e,r.z=t+Xn(-.3,.3),r.vx=Xn(-.4,.4),r.vy=Xn(.8,1.6)*n,r.vz=Xn(-.4,.4),r.life=0,r.max=Xn(.9,1.8),r.size=Xn(.5,1)*n}function mb(i){for(let e=0;e<qs;e++){let t=vd[e];t.life<t.max&&(t.life+=i,t.x+=t.vx*i,t.y+=t.vy*i,t.z+=t.vz*i,t.vy*=.98);let n=t.life/t.max,s=t.life<t.max;Hc[e*3]=t.x,Hc[e*3+1]=t.y,Hc[e*3+2]=t.z,Nm[e]=s?t.size*(.6+n*2.2):0,Fm[e]=s?(1-n)*.55:0,Gc[e*3]=t.r,Gc[e*3+1]=t.g,Gc[e*3+2]=t.b}zi.attributes.position.needsUpdate=!0,zi.attributes.aSize.needsUpdate=!0,zi.attributes.aAlpha.needsUpdate=!0,zi.attributes.aCol.needsUpdate=!0}var At=null,Dn=kt[0],V=null,Wc=null,q={s:0,idx:0,damage:0,totaled:!1,boostFuel:1,boosting:!1,shake:0,dist:0,menuAngle:.7,lastHitT:0,spin:0,combo:0,lastStarT:-9,saveT:0,missionT:0};function Zo(){At&&(_n.remove(At),Gr(At)),Dn=kt[be.car],At=Hr(Dn.id,!Fs(Dn.id,!1),Jo[be.color]),_n.add(At),Wc=new pt;for(let i of[-1,1]){let e=new Dr(16774358,0,90,.55,.5,1);e.position.set(i*.65,.7,-Dn.len/2+.1),e.target.position.set(i*1.8,0,-45),Wc.add(e,e.target)}At.add(Wc),V=new ks(Dn),yd(),jo()}var Pn=[];for(let i=0;i<10;i++)Pn.push({mesh:null,spec:kt[0],body:null,lane:0,s:0,target:20,active:!1,idx:0});function zm(i,e){let t=cb(0,2),n=e?q.s+Xn(120,420):q.s-Xn(60,90);for(let r=0;r<10;r++){let o=!0;for(let a of Pn)a!==i&&a.active&&a.lane===t&&Math.abs(a.s-n)<50&&(o=!1);if(o)break;n+=40}i.mesh&&(_n.remove(i.mesh),Gr(i.mesh)),i.spec=Ko(kt),i.mesh=Hr(i.spec.id,!0,Ko(Jo)),_n.add(i.mesh),i.body=new ks(i.spec),i.lane=t,i.s=n,i.target=e?Xn(14,27):Xn(30,40);let s=ve.road.pointAt(n);i.body.x=s.x+s.rx*mi[t],i.body.z=s.z+s.rz*mi[t],i.body.h=s.h,i.body.vx=s.fx*i.target,i.body.vz=s.fz*i.target,i.idx=Math.floor(n/ui),i.active=!0,i.mesh.visible=!0,i.ahead=n>q.s}function Am(i){i.mesh.position.set(i.body.x,0,i.body.z),i.mesh.rotation.y=i.body.h}function yd(){ve.setTime(be.time),Vp(ve.night||ve.rain),Wp(ve.night?.5:1),ud.set(!!ve.rain),ot.rain=!!ve.rain,At&&(At.userData.paint.forEach(i=>i.envMapIntensity=ve.night?.6:1.25),Wc.children.forEach(i=>{i.isSpotLight&&(i.intensity=ve.night?400:0)}))}var Tt={left:!1,right:!1,gas:!1,brake:!1,boost:!1,tilt:0,wheel:0},Xc=["btnLeft","btnRight","btnGas","btnBrake","btnBoost"],qc={btnLeft:"left",btnRight:"right",btnGas:"gas",btnBrake:"brake",btnBoost:"boost"},Xs=oe("wheel"),Bm=oe("wheelimg"),Oi=0,qt=null,fd=120,Ln=new Map,Jr=new Map;function Md(i,e){let t=Xs.getBoundingClientRect();return Math.atan2(e-(t.top+t.height/2),i-(t.left+t.width/2))*180/Math.PI}function km(i,e){let t=Md(i,e),n=t-qt.last;for(;n>180;)n-=360;for(;n<-180;)n+=360;qt.last=t,!(Math.abs(n)>120)&&(Oi=xi(Oi+n,-fd,fd),Bm.style.transform=`rotate(${Oi}deg)`)}function Vs(i,e,t){let n=i.getBoundingClientRect();return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}function jr(){let i={};for(let e of Xc)i[qc[e]]=!1;for(let e of Ln.values())if(!e.wheel)for(let t of Xc)Vs(oe(t),e.x,e.y)&&(i[qc[t]]=!0);for(let e of Xc){let t=qc[e],n=i[t]||Jr.has(t);Tt[t]=n,oe(e).classList.toggle("pressed",n)}}function gb(i){i.cancelable&&i.preventDefault(),i.type==="touchstart"&&(ot.init(),ot.resume());let e=new Set(Array.from(i.touches).map(t=>t.identifier));for(let t of Array.from(Ln.keys()))if(!e.has(t)&&!Array.from(i.changedTouches).some(n=>n.identifier===t)){let n=Ln.get(t);Ln.delete(t),n&&n.wheel&&qt&&qt.id===t&&(qt=null),n&&n.lock&&Qr("reconcile "+i.type)}for(let t of Array.from(i.changedTouches)){let n=t.identifier;if(i.type==="touchstart"){let s=be.controls==="wheel"&&bt==="drive"&&Vs(Xs,t.clientX,t.clientY)&&!qt;Ln.set(n,{x:t.clientX,y:t.clientY,wheel:s,lock:bt==="menu"&&Vs(oe("btnLock"),t.clientX,t.clientY)}),Ln.get(n).lock&&Zm("touch"),s&&(qt={id:n,last:Md(t.clientX,t.clientY)}),bt==="drive"&&Vs(oe("btnHorn"),t.clientX,t.clientY)&&(bd(),oe("btnHorn").classList.add("pressed"),setTimeout(()=>oe("btnHorn").classList.remove("pressed"),200))}else if(i.type==="touchmove"){let s=Ln.get(n);if(!s)continue;s.x=t.clientX,s.y=t.clientY,s.wheel&&qt&&qt.id===n&&km(t.clientX,t.clientY)}else{let s=Ln.get(n);Ln.delete(n),s&&s.wheel&&qt&&qt.id===n&&(qt=null),s&&s.lock&&Qr("touchend "+i.type)}}jr()}for(let i of["touchstart","touchmove","touchend","touchcancel"])document.addEventListener(i,gb,{passive:!1});function xb(i,e){let t=oe(i);t.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&(s.preventDefault(),Jr.set(e,!0),jr(),ot.init(),ot.resume())});let n=s=>{s&&s.pointerType==="touch"||(Jr.delete(e),jr())};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("pointerleave",n)}Xc.forEach(i=>xb(i,qc[i]));window.addEventListener("blur",()=>{Ln.clear(),Jr.clear(),qt=null,Qr("blur"),jr()});Xs.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(i.preventDefault(),Xs.setPointerCapture(i.pointerId),qt={id:"mouse",last:Md(i.clientX,i.clientY)})});Xs.addEventListener("pointermove",i=>{i.pointerType==="touch"||!qt||qt.id!=="mouse"||km(i.clientX,i.clientY)});var Hm=i=>{i.pointerType!=="touch"&&qt&&qt.id==="mouse"&&(qt=null)};Xs.addEventListener("pointerup",Hm);Xs.addEventListener("pointercancel",Hm);function bd(){ot.horn(),Ie.horns++,ds("horn")}oe("btnHorn").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(i.preventDefault(),ot.init(),ot.resume(),bd())});oe("btnCam").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(be.cam=(be.cam+1)%3,bn())});oe("btnFix").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&Id()});document.addEventListener("touchend",i=>{if(bt==="drive")for(let e of Array.from(i.changedTouches))Vs(oe("btnCam"),e.clientX,e.clientY)&&(be.cam=(be.cam+1)%3,bn()),Vs(oe("btnPhoto"),e.clientX,e.clientY)&&Td(),!oe("totaled").classList.contains("hidden")&&Vs(oe("btnFix"),e.clientX,e.clientY)&&Id()},{passive:!1});function _b(i){qt||(Oi+=(0-Oi)*Math.min(1,9*i),Math.abs(Oi)<.3&&(Oi=0),Bm.style.transform=`rotate(${Oi}deg)`),Tt.wheel=Oi/fd}function Gm(){let i=be.controls==="wheel";oe("leftpad").classList.toggle("hidden",i),oe("wheel").classList.toggle("hidden",!i),oe("rightpad").classList.toggle("pedals",i),oe("optCtl").textContent=i?"\u{1F3A1}":"\u{1F579}\uFE0F"}window.addEventListener("keydown",i=>{(i.code==="ArrowLeft"||i.code==="KeyA")&&(Tt.left=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(Tt.right=!0),(i.code==="ArrowUp"||i.code==="KeyW")&&(Tt.gas=!0),(i.code==="ArrowDown"||i.code==="KeyS")&&(Tt.brake=!0),(i.code==="ShiftLeft"||i.code==="Space")&&(Tt.boost=!0),i.code==="KeyH"&&bd(),i.code==="KeyC"&&(be.cam=(be.cam+1)%3,bn()),i.code==="KeyF"&&Id(),i.code==="KeyP"&&Td(),i.code==="Escape"&&(bt==="drive"?jc():bt==="pause"&&Ym())});window.addEventListener("keyup",i=>{(i.code==="ArrowLeft"||i.code==="KeyA")&&(Tt.left=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(Tt.right=!1),(i.code==="ArrowUp"||i.code==="KeyW")&&(Tt.gas=!1),(i.code==="ArrowDown"||i.code==="KeyS")&&(Tt.brake=!1),(i.code==="ShiftLeft"||i.code==="Space")&&(Tt.boost=!1)});window.addEventListener("deviceorientation",i=>{if(i.beta==null)return;let e=i.beta/22,t=screen.orientation&&screen.orientation.angle||window.orientation||0;(t===270||t===-90)&&(e=-e),Tt.tilt=xi(e,-1,1)});var Jc=oe("menu"),Vm=oe("hud"),bt="menu";function Bi(){let i=kt[be.car];oe("carname").textContent=i.name,oe("stSpeed").style.width=Math.round(100*i.maxKmh/500)+"%",oe("stPower").style.width=Math.round(100*i.accel/18)+"%",oe("stGrip").style.width=Math.round(100*i.handling/10.5)+"%",document.querySelectorAll("#worldRow .opt").forEach(e=>e.classList.toggle("on",e.dataset.world===be.world)),document.querySelectorAll("#timeRow .opt").forEach(e=>e.classList.toggle("on",e.dataset.time===be.time)),oe("optTraffic").classList.toggle("off",!be.traffic),oe("optSound").classList.toggle("off",!be.sound),oe("optSound").textContent=be.sound?"\u{1F50A}":"\u{1F507}",oe("optTilt").classList.toggle("off",!be.tilt),oe("optVoice").classList.toggle("off",!be.voice),Zt.on=be.voice,document.querySelectorAll(".swatch").forEach((e,t)=>e.classList.toggle("on",t===be.color))}var vb=oe("colors");Jo.forEach((i,e)=>{let t=document.createElement("button");t.className="swatch",t.style.background="#"+i.toString(16).padStart(6,"0"),t.addEventListener("pointerdown",()=>{be.color=e,bn(),Zo(),Bi(),Zt.say(vm[e],{min:300})}),vb.appendChild(t)});function Wm(i){be.car=(be.car+i+kt.length)%kt.length,bn(),Zo(),Bi(),q.menuAngle=.7,Zt.say(kt[be.car].name,{min:500}),Fs(kt[be.car].id,!1)||Fo(kt[be.car].id,!1).then(()=>{bt==="menu"&&kt[be.car].id===Dn.id&&Zo()})}oe("prevCar").addEventListener("pointerdown",i=>{i.preventDefault(),Wm(-1)});oe("nextCar").addEventListener("pointerdown",i=>{i.preventDefault(),Wm(1)});document.querySelectorAll("#worldRow .opt").forEach(i=>i.addEventListener("pointerdown",()=>{be.world=i.dataset.world,bn(),ve.setWorld(be.world),jp(),yd(),Bi()}));function wd(){oe("bookstars").textContent="\u2B50 "+Ie.stars,oe("starnum").textContent=Ie.stars;let i=Object.keys(Ie.stickers).length;oe("bookstats").textContent=`${i} / ${Mc.length} stickers \xB7 ${Ie.km.toFixed(1)} km driven \xB7 ${Ie.missions} missions \xB7 ${Ie.deliveries} recliners delivered`;let e=oe("bookgrid");e.innerHTML="";for(let t of Mc){let n=document.createElement("div");n.className="sticker"+(Ie.stickers[t.id]?"":" locked"),n.innerHTML=`<span class="e">${t.e}</span><span class="n">${t.n}</span>`,e.appendChild(n)}}oe("btnBook").addEventListener("pointerdown",i=>{i.preventDefault(),wd(),oe("book").classList.remove("hidden")});oe("btnBookClose").addEventListener("pointerdown",i=>{i.preventDefault(),oe("book").classList.add("hidden")});var pd=[],Yc=!1;function Mn(i,e,t){if(pd.push({big:i,txt:e,confetti:t}),Yc)return;let n=()=>{let s=pd.shift();if(!s){Yc=!1;return}Yc=!0;let r=oe("toast");if(r.classList.remove("hidden"),oe("toastbig").textContent=s.big,oe("toasttxt").textContent=s.txt,r.style.animation="none",r.offsetWidth,r.style.animation="",s.confetti){let o=oe("confetti"),a=["#D0B46C","#ef4444","#3b82f6","#22c55e","#f59e0b","#ffffff"];for(let c=0;c<36;c++){let l=document.createElement("i");l.style.left=Math.random()*100+"%",l.style.background=Ko(a),l.style.animationDelay=Math.random()*.6+"s",l.style.animationDuration=1.8+Math.random()*1.2+"s",o.appendChild(l),setTimeout(()=>l.remove(),3200)}}setTimeout(()=>{r.classList.add("hidden"),setTimeout(n,150)},2300)};n()}function ds(i,e){if(bt!=="drive")return;let t=ln.event(i,e);t==="pickup"?(Mb(),Mn("GOT IT! \u{1F6CB}\uFE0F",ln.label().text),ot.fanfare(),Sd(),Zt.say("Got the recliner! "+ln.label().text)):t==="done"&&yb()}function yb(){let i=ln.cur;Ie.stars+=i.reward,Ie.missions++,i.kind==="deliver"&&(Ie.deliveries++,Ed()),Mn("GREAT JOB!",`Alhamdulillah \xB7 +${i.reward} \u2B50`,!0),ot.fanfare(!0),oe("starnum").textContent=Ie.stars,zs(),Zt.say("Alhamdulillah! Great job!");for(let e of zo())Mn("NEW STICKER!",`${e.e} ${e.n}`);q.missionT=3.5}function Xm(){ln.next({isMap:!!ve.road.isMap,road:ve.road,x:V.x,z:V.z,maxKmh:Dn.maxKmh,traffic:be.traffic,showroomAt:ve.current.showroomAt}),Sd(),Mn(ln.cur.icon+" "+ln.cur.text,"New mission!");let i=ym(ln.cur);i?(Mn(`${i.L} is for ${i.word}`,ln.cur.icon+" "+i.word),Zt.say(`New mission! ${i.L} is for ${i.word}. ${ln.cur.text}`)):Zt.say("New mission! "+ln.cur.text)}var Rm="";function Sd(){let i=ln.label(),e=i.icon+i.text+i.prog;e!==Rm&&(Rm=e,oe("micon").textContent=i.icon,oe("mtext").textContent=i.text,ln.target()||(oe("mprog").textContent=i.prog))}function Mb(){ps||(ps=tm());let i=new pn().setFromObject(At);ps.position.set(0,i.max.y-.05,-.1),At.add(ps)}function Ed(){ps&&ps.parent&&ps.parent.remove(ps)}document.querySelectorAll("#timeRow .opt").forEach(i=>i.addEventListener("pointerdown",()=>{be.time=i.dataset.time,bn(),yd(),Bi()}));oe("optTraffic").addEventListener("pointerdown",()=>{be.traffic=!be.traffic,bn(),Bi()});oe("optVoice").addEventListener("pointerdown",()=>{be.voice=!be.voice,bn(),Bi(),be.voice?Zt.say("Voice on!"):Zt.stop()});oe("optSound").addEventListener("pointerdown",()=>{be.sound=!be.sound,bn(),ot.init(),ot.setOn(be.sound),Bi()});oe("optCtl").addEventListener("pointerdown",()=>{be.controls=be.controls==="wheel"?"buttons":"wheel",bn(),Gm()});oe("optEco").addEventListener("pointerdown",()=>{be.eco=!be.eco,bn(),Dm()});oe("optTilt").addEventListener("pointerdown",()=>{be.tilt=!be.tilt,bn(),Bi(),be.tilt&&typeof DeviceOrientationEvent!="undefined"&&DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission().catch(()=>{})});oe("btnPlay").addEventListener("pointerdown",i=>{i.preventDefault(),ve.road&&(ot.init(),ot.resume(),ot.setOn(be.sound),Ws?$m():bb())});function bb(){bt="dua",Jc.classList.add("hidden"),oe("dua").classList.remove("hidden"),Zt.say("\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u064E\u0651\u0647\u0650",{lang:"ar"})||Zt.say("Bismillah")}function qm(){oe("dua").classList.add("hidden")}oe("btnBismillah").addEventListener("pointerdown",i=>{i.preventDefault(),bt==="dua"&&(qm(),Ie.duas=(Ie.duas||0)+1,Zt.say("Bismillah! Let's drive safely."),$m())});oe("btnPause").addEventListener("pointerdown",i=>{i.preventDefault(),jc()});oe("btnResume").addEventListener("pointerdown",i=>{i.preventDefault(),Ym()});oe("btnGarage").addEventListener("pointerdown",i=>{i.preventDefault(),Cd()});function jc(){if(bt==="drive"){bt="pause",oe("pauseov").classList.remove("hidden");for(let i in Tt)i!=="tilt"&&(Tt[i]=!1);Ln.clear(),Jr.clear(),qt=null,jr(),ot.engine&&ot.update(0,1,!1,!1)}}function Ym(){bt==="pause"&&(bt="drive",oe("pauseov").classList.add("hidden"),$o.getDelta(),ot.resume())}var Zc=!1;function Td(){bt!=="drive"||Zc||(Zc=!0)}function wb(){Zc=!1;try{let i=Pm.toDataURL("image/jpeg",.9);oe("polaimg").src=i,oe("polaroid").classList.remove("hidden"),setTimeout(()=>oe("polaroid").classList.add("hidden"),2600);let e=oe("flash");e.classList.remove("go"),e.offsetWidth,e.classList.add("go"),ot.click(),Hs(20),Ie.photos++,zs(),window.Android&&window.Android.savePhoto&&window.Android.savePhoto(i.split(",")[1]);for(let t of zo())Mn("NEW STICKER!",`${t.e} ${t.n}`)}catch(i){console.warn("photo failed",i)}}oe("btnPhoto").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&Td()});var ms=!1,Ad=0;function Km(){be.lock=!1,oe("options").classList.toggle("locked",!!be.lock),oe("btnLock").querySelector("span").textContent=be.lock?"\u{1F512}":"\u{1F513}"}var md=0,Kc=[],Rd=i=>{Kc.push(Math.round(performance.now())+" "+i),Kc.length>40&&Kc.shift()};function Zm(i){Rd("start "+i+(ms?" (ignored: held)":performance.now()<md?" (ignored: cool)":"")),!(ms||performance.now()<md)&&(ms=!0,Ad=performance.now(),oe("btnLock").classList.add("holding"))}function Qr(i){ms&&Rd("end "+i),ms=!1,oe("btnLock").classList.remove("holding")}function Sb(){ms&&performance.now()-Ad>=2e3&&(Qr("tick"),Rd("toggle -> "+!be.lock),md=performance.now()+1500,be.lock=!be.lock,bn(),Km(),Hs(40),ot.ping(4))}oe("btnLock").addEventListener("pointerdown",i=>{i.preventDefault();try{oe("btnLock").setPointerCapture(i.pointerId)}catch(e){}Zm("pointer "+i.pointerType)});for(let i of["pointerup","pointercancel","lostpointercapture"])oe("btnLock").addEventListener(i,()=>Qr("pointer "+i));document.addEventListener("contextmenu",i=>i.preventDefault());oe("options").addEventListener("pointerdown",()=>{be.lock&&(oe("lockhint").classList.remove("hidden"),setTimeout(()=>oe("lockhint").classList.add("hidden"),1800))});function $m(){bt="drive",Jc.classList.add("hidden"),Vm.classList.remove("hidden"),fs.visible=!1,oe("mapbox").classList.toggle("hidden",!ve.road.isMap),gd.textContent="",q.s=40,q.idx=10,q.dist=0,q.boostFuel=1,q.damage=0,q.totaled=!1,q.spin=0;let i=ve.road.isMap?ve.road.startPose():ve.road.pointAt(q.s);V=new ks(Dn),V.x=i.x,V.z=i.z,V.h=i.h,jo(),oe("totaled").classList.add("hidden"),Pn.forEach((e,t)=>{be.traffic&&(ve.road.isMap||t<6)?ve.road.isMap?Jm(e):zm(e,!0):(e.active=!1,e.mesh&&(e.mesh.visible=!1))}),Ie.cars[Dn.id]=1,oe("starnum").textContent=Ie.stars,q.combo=0,q.missionT=0,q.starsRun=0,q.saidStreet="",q.lastMasjid=null,q.redStop=q.greenSaid=q.redRun=null,q.lastPad=null,q.padT=0,Ed(),Lm.clear();for(let e of["roll","pitch","heave"])tn[e].x=0,tn[e].v=0;tn.prevVf=0,tn.wasOff=!1,ve.road.ensure(ve.road.isMap?V.x:q.idx,V.z),Xm()}function Jm(i){if(i.mesh&&(_n.remove(i.mesh),Gr(i.mesh)),i.spec=Ko(kt),i.mesh=Hr(i.spec.id,!0,Ko(Jo)),_n.add(i.mesh),i.body=new ks(i.spec),i.body.mass=60,i.agent={},!ve.road.spawnAgent(i.agent,V.x,V.z)){i.active=!1,i.mesh.visible=!1;return}ve.road.advanceAgent(i.agent,0),i.body.x=i.agent.x,i.body.z=i.agent.z,i.body.h=i.agent.h,i.active=!0,i.mesh.visible=!0,i.spd=null}function Cd(){bt="menu",Vm.classList.add("hidden"),Jc.classList.remove("hidden"),oe("totaled").classList.add("hidden"),oe("pauseov").classList.add("hidden"),oe("polaroid").classList.add("hidden");for(let i in Tt)i!=="tilt"&&(Tt[i]=!1);Ln.clear(),Jr.clear(),qt=null,Qr("menu"),jr(),Pn.forEach(i=>{i.active=!1,i.mesh&&(i.mesh.visible=!1)}),At.position.set(0,0,0),At.rotation.set(0,0,0),q.menuAngle=.7,q.damage=0,q.totaled=!1,jo(),ot.engine&&ot.update(0,1,!1,!1),Ed(),$r.visible=!1,oe("toast").classList.add("hidden"),pd.length=0,Yc=!1,zs(),wd()}function Id(){if(bt!=="drive")return;q.damage=0,q.totaled=!1,q.spin=0,oe("totaled").classList.add("hidden");let i=ve.road.nearest(V.x,V.z,q.idx);if(ve.road.isMap)V.x=i.px,V.z=i.pz,V.h=i.h;else{let e=ve.road.pointAt(i.s+2);V.x=e.x+e.rx*mi[1],V.z=e.z+e.rz*mi[1],V.h=e.h}V.vx=V.vz=0,V.yawRate=0,jo(),ot.whoosh()}function jo(){if(!At)return;let i=q.damage/100;At.userData.paint.forEach(e=>{e.color.setHex(Jo[be.color]).lerp(new Te(3158064),i*.45),e.roughness=.32+i*.5}),oe("dmgfill").style.width=(100-q.damage).toFixed(0)+"%",oe("dmgfill").style.background=q.damage<40?"#22c55e":q.damage<75?"#f59e0b":"#ef4444"}function Bc(i){if(i<1.5)return;let e=(i-1.5)*4.2;q.damage=Math.min(100,q.damage+e),q.shake=Math.max(q.shake,Math.min(1.2,i*.08)),ot.bump(Math.min(1,i/12)),Hs(Math.min(220,30+i*12)),tn.heave.v-=Math.min(1.5,i*.08),tn.pitch.v-=Math.min(.8,i*.05);for(let t=0;t<Math.min(12,i);t++)Vc(V.x,.9,V.z,.6);jo(),ds("hit"),q.damage>=100&&!q.totaled&&(q.totaled=!0,q.spin=(Math.random()<.5?-1:1)*2.5,oe("totaled").classList.remove("hidden"))}var $o=new Nr,Zr=new D,qo=new D,Eb=oe("speedval"),Tb=oe("gaugearc"),Ab=oe("dist"),Rb=oe("boostfill"),Cb=oe("btnBoost"),gd=oe("street"),jm=oe("minimap"),Ib=jm.getContext("2d"),Pb=0;function Lb(){if(++Pb%3)return;let i=jm.width/2,e=i/210,t=Ib,n=ve.road,s=n.nodes;t.clearRect(0,0,i*2,i*2),t.save(),t.beginPath(),t.arc(i,i,i-2,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,28,40,0.78)",t.fillRect(0,0,i*2,i*2),t.translate(i,i),t.rotate(V.h),t.scale(e,e),t.translate(-V.x,-V.z);let r=Math.floor(V.x/n.cell),o=Math.floor(V.z/n.cell),a=new Set;t.lineCap="round";for(let u=-4;u<=4;u++)for(let d=-4;d<=4;d++){let f=n.hash.get(n.key(r+u,o+d));if(f)for(let g of f){if(a.has(g))continue;a.add(g);let _=Math.floor(g/4096),m=g%4096,p=n.roads[_],S=s[p.n[m]],b=s[p.n[m+1]];t.strokeStyle=p.w>9?"#ffd58a":p.t==="service"||p.t==="track"?"#8a93a3":"#e8edf5",t.lineWidth=p.w*.9,t.beginPath(),t.moveTo(S[0],S[1]),t.lineTo(b[0],b[1]),t.stroke()}}let c=Math.floor(V.x/400),l=Math.floor(V.z/400);for(let u=-1;u<=1;u++)for(let d=-1;d<=1;d++)for(let f of n.tilePois.get(n.key(c+u,l+d))||[])t.fillStyle=/school/i.test(f.k)?"#60a5fa":/worship|mosque/i.test(f.k)?"#34d399":/fuel/i.test(f.k)?"#f97316":"#f472b6",t.beginPath(),t.arc(f.c[0],f.c[1],7,0,Math.PI*2),t.fill();ve.current.showroomAt&&(t.fillStyle="#D0B46C",t.beginPath(),t.arc(ve.current.showroomAt[0],ve.current.showroomAt[1],9,0,Math.PI*2),t.fill());let h=ln.target();if(h){let u=(9+Math.sin(Gs*5)*3)/e;t.strokeStyle="#ffd54a",t.lineWidth=3/e,t.beginPath(),t.arc(h[0],h[1],u,0,Math.PI*2),t.stroke(),t.fillStyle="#ffd54a",t.beginPath(),t.arc(h[0],h[1],4/e,0,Math.PI*2),t.fill()}t.restore(),t.save(),t.translate(i,i),t.fillStyle="#ef4444",t.beginPath(),t.moveTo(0,-9),t.lineTo(6,7),t.lineTo(-6,7),t.closePath(),t.fill(),t.restore()}var ad=0,cd=0,tn={roll:{x:0,v:0},pitch:{x:0,v:0},heave:{x:0,v:0},prevVf:0,wasOff:!1};function ld(i,e,t,n=90,s=11){i.v+=((e-i.x)*n-i.v*s)*t,i.x+=i.v*t}function Hs(i){if(!(be.haptics===!1||!navigator.vibrate))try{navigator.vibrate(i)}catch(e){}}function Db(i){let e=Dn,t=e.maxKmh/3.6;if(bt==="drive"){let n=Tt.boost&&q.boostFuel>.05&&!q.totaled;n&&!q.boosting&&(ot.whoosh(),Ie.boosts++,ds("boost")),q.boosting=n||(q.padT||0)>0,q.boostFuel=q.boosting?Math.max(0,q.boostFuel-i/3):Math.min(1,q.boostFuel+i/9),Rb.style.width=(q.boostFuel*100).toFixed(0)+"%",Cb.classList.toggle("cooling",q.boostFuel<.05);let s=(Tt.right?1:0)-(Tt.left?1:0);be.controls==="wheel"&&(_b(i),s===0&&(s=Math.sign(Tt.wheel)*Math.pow(Math.abs(Tt.wheel),1.25))),be.tilt&&s===0&&(s=Tt.tilt),q.totaled?(V.throttle=0,V.brake=.4,V.steer=0,V.yawRate=q.spin,q.spin*=Math.pow(.4,i)):(V.throttle=Tt.gas?1:0,V.brake=Tt.brake?1:0,V.steer=s);let r=!!ve.road.isMap,o=ve.road.nearest(V.x,V.z,q.idx);r||(q.idx=o.i,q.s=o.s);let a=Math.abs(o.d);if(V.offRoad=r?!o.onRoad:a>Xt/2+.6,V.surfaceGrip=(V.offRoad?ve.current.offroadGrip:1)*(ve.rain?.7:1),r){(q.frameN=(q.frameN||0)+1)%20===0&&(q.suburb=ve.road.suburbAt(V.x,V.z));let v=o.onRoad&&o.name?o.name:"",M=v+(q.suburb?(v?" \xB7 ":"")+q.suburb:"");if(M!==gd.textContent&&(gd.textContent=M),v&&v!==q.saidStreet&&Math.abs(V.vf)>3&&(q.saidStreet=v,Zt.say(v,{min:7e3})),q.frameN%15===0){let E=ve.road.masjidNear(V.x,V.z,75);E&&E!==q.lastMasjid&&(q.lastMasjid=E,Ie.masjids=(Ie.masjids||0)+1,Mn("\u{1F54C} Assalamu alaikum",E.name),Zt.say("Assalamu alaikum! "+E.name),ot.ping(0))}{let[E,R]=V.fwd(),y=ve.road.lightAhead(V.x,V.z,E,R),w=Math.abs(V.vf);y&&y.state==="r"&&y.dist>2&&y.dist<26&&w<.6&&q.redStop!==y.key&&(q.redStop=y.key,Ie.goodStops=(Ie.goodStops||0)+1,Ie.stars+=5,oe("starnum").textContent=Ie.stars,Mn("GOOD STOP! \u{1F6D1}","Red means STOP \xB7 +5 \u2B50"),ot.fanfare(),Zt.say("Good stop! Red means stop.")),y&&y.state==="g"&&q.redStop===y.key&&q.greenSaid!==y.key&&(q.greenSaid=y.key,Mn("GREEN! \u{1F7E2}","Green means GO"),Zt.say("Green means go!")),y&&y.state==="r"&&y.dist<1.5&&w>5&&q.redRun!==y.key&&(q.redRun=y.key,Mn("OOPS! \u{1F6A6}","Red means STOP"),Zt.say("Oops! Red means stop. Green means go."))}}{let v=ve.road.padAt?ve.road.padAt(V.x,V.z):null;if(v&&v!==q.lastPad){q.lastPad=v;let[M,E]=V.fwd();V.vx+=M*7,V.vz+=E*7,q.boostFuel=1,q.padT=1.4,Ie.pads=(Ie.pads||0)+1,Mn("ZOOM! \u26A1","Boost pad!"),ot.whoosh(),Hs(40),Zt.say("Zoom!",{min:4e3})}else v||(q.lastPad=null);q.padT=Math.max(0,(q.padT||0)-i)}if(r){let v=ve.road.humpAt(V.x,V.z);if(v&&v!==q.lastHump){q.lastHump=v;let M=Math.abs(V.vf);M>4&&(tn.heave.v+=Math.min(1.6,M*.09),tn.pitch.v-=Math.min(.5,M*.02),ot.bump(Math.min(.6,M/30)),Hs(Math.min(60,M*2)),M>12&&(V.vx*=.93,V.vz*=.93))}else v||(q.lastHump=null)}let c=q.damage/100;if(c>.5&&!q.totaled&&(V.steer+=Math.sin($o.elapsedTime*7)*(c-.5)*.5),V.update(i,t*(1-c*.45),e.accel*(1-c*.5),e.handling,q.boosting),q.dist+=Math.max(0,V.vf)*i,!r&&(ve.current.guardrail||ve.current.poles)){let v=(ve.current.guardrail?Wr:Xt/2+.75)-.15,M=ve.road.nearest(V.x,V.z,q.idx);if(Math.abs(M.d)+V.halfW>v){let E=Math.sign(M.d),R=Math.abs(M.d)+V.halfW-v;V.x-=M.rx*E*R,V.z-=M.rz*E*R;let y=V.vx*M.rx*E+V.vz*M.rz*E;y>0&&(V.vx-=y*M.rx*E*1.3,V.vz-=y*M.rz*E*1.3,Bc(y),V.yawRate-=E*Math.min(1.5,y*.1)),V.vx*=1-.6*i,V.vz*=1-.6*i}}for(let v of r?ve.road.obstaclesNear(V.x,V.z):ve.road.obstaclesNear(q.idx)){if(Math.abs(v.x-V.x)>40||Math.abs(v.z-V.z)>40)continue;let M=v.type==="circle"?xm(V,v.x,v.z,v.r):_m(V,v.x,v.z,v.hw,v.hl,v.h);M>0&&Bc(M)}for(let v of Pn){if(!v.active)continue;if(r){let j=v.agent,te=v.body,ue=V.x-te.x,ye=V.z-te.z,[X,se]=te.fwd(),ge=ue*X+ye*se,he=Math.abs(ue*se-ye*X),Ne=ge>0&&ge<16&&he<3,Oe=!1;for(let ce of Pn){if(ce===v||!ce.active||!ce.body)continue;let Me=ce.body.x-te.x,pe=ce.body.z-te.z,re=Me*X+pe*se;if(re>0&&re<12&&Math.abs(Me*se-pe*X)<2.6){Oe=!0;break}}let Fe=ve.road.agentRed(j),Ze=Ne?Math.max(0,Math.abs(V.vf)-1):Oe||Fe?0:j.speed;v.spd=(v.spd==null?j.speed:v.spd)+(Ze-(v.spd==null?j.speed:v.spd))*Math.min(1,(Ze<(v.spd||0)?5:1.6)*i);let ne=v.spd,fe=j.speed;j.speed=ne,ve.road.advanceAgent(j,i),j.speed=fe,te.x+=(j.x-te.x)*Math.min(1,10*i),te.z+=(j.z-te.z)*Math.min(1,10*i);let L=j.h-te.h;for(;L>Math.PI;)L-=Math.PI*2;for(;L<-Math.PI;)L+=Math.PI*2;if(te.h+=L*Math.min(1,10*i),te.vx=X*ne,te.vz=se*ne,te.vf=ne,Math.hypot(ue,ye)>420){Jm(v);continue}Am(v);for(let ce of v.mesh.userData.wheels)ce.userData.spin.rotation.x-=ne*i/ce.userData.radius;v.mesh.traverse(ce=>{ce.isMesh&&(ce.castShadow=Math.hypot(ue,ye)<70)});let De=Pc(V,te);De>0&&Bc(De);continue}let M=v.body,E=ve.road.nearest(M.x,M.z,v.idx);if(v.idx=E.i,v.s=E.s,v.s<q.s-120||v.s>q.s+520){zm(v,v.s<q.s);continue}let R=v.s>q.s;v.ahead&&!R&&V.vf>2&&ds("pass"),v.ahead=R;let y=ve.road.pointAt(v.s+14+M.vf*.6),w=y.x+y.rx*mi[v.lane],T=y.z+y.rz*mi[v.lane],P=w-M.x,U=T-M.z,k=Math.atan2(-P,-U)-M.h;for(;k>Math.PI;)k-=Math.PI*2;for(;k<-Math.PI;)k+=Math.PI*2;M.steer=xi(-k*2.2,-1,1);let F=1e9,W=Math.abs(o.d-mi[v.lane])<2.4?q.s-v.s:1e9;W>0&&W<F&&(F=W);for(let j of Pn)if(j!==v&&j.active&&j.lane===v.lane){let te=j.s-v.s;te>0&&te<F&&(F=te)}let z=F<12?0:F<30?Math.min(v.target,F*.6):v.target;M.throttle=M.vf<z?.7:0,M.brake=M.vf>z+2?.6:0,M.offRoad=Math.abs(E.d)>Xt/2+.6,M.surfaceGrip=M.offRoad?.6:1,M.update(i,45,7,6,!1),Am(v);for(let j of v.mesh.userData.wheels)j.userData.spin.rotation.x-=M.vf*i/j.userData.radius,j.userData.front&&(j.rotation.y=-M.steerAngle);v.mesh.traverse(j=>{j.isMesh&&(j.castShadow=Math.abs(v.s-q.s)<70)});let ee=Pc(V,M);ee>0&&Bc(ee)}if(!r)for(let v=0;v<Pn.length;v++)for(let M=v+1;M<Pn.length;M++)Pn[v].active&&Pn[M].active&&Pc(Pn[v].body,Pn[M].body);let l=(V.vf-tn.prevVf)/Math.max(i,.001);tn.prevVf=V.vf;let h=V.yawRate*V.vf;if(ld(tn.roll,xi(-h*.011,-.11,.11)-V.vl*.006,i),ld(tn.pitch,xi(l*.0055,-.05,.05),i),ld(tn.heave,0,i),V.offRoad!==tn.wasOff&&(tn.wasOff=V.offRoad,Math.abs(V.vf)>3&&(tn.heave.v+=.5,q.shake=Math.max(q.shake,.2),ot.bump(.25),Hs(25))),At.position.set(V.x,Math.max(-.02,tn.heave.x),V.z),At.rotation.y=V.h,At.rotation.z=tn.roll.x,At.rotation.x=tn.pitch.x,V.offRoad){At.position.y+=Math.abs(V.vf)>2?Math.sin($o.elapsedTime*31)*.03:0,q.shake=Math.max(q.shake,xi(Math.abs(V.vf)/20,0,.35)),cd+=i*xi(Math.abs(V.vf)/3,0,10);let v=ve.currentName==="snow"?[.95,.97,1]:ve.currentName==="desert"?[.78,.66,.45]:[.55,.47,.32];for(;cd>=1;){cd-=1;let[M,E]=V.fwd();Vc(V.x-M*(e.len/2-.5),.3,V.z-E*(e.len/2-.5),.9,v)}}for(let v of At.userData.wheels)v.userData.spin.rotation.x-=V.vf*i/v.userData.radius,v.userData.front&&(v.rotation.y=-V.steerAngle);At.userData.glow.material.opacity=q.boosting?.8:0,ad+=i*(q.totaled?14:q.damage>40?(q.damage-40)/60*8:0);let[u,d]=V.fwd();for(;ad>=1;)ad-=1,Vc(V.x+u*(e.len/2-.6),.9,V.z+d*(e.len/2-.6),q.totaled?1.4:.8);{let v=Math.abs(V.vf),M=V.offRoad?0:Math.max(xi((Math.abs(V.vl)-2.2)/5,0,1),V.brake&&v>14&&!ve.rain?.45:0,q.totaled&&v>3?.6:0),[E,R]=V.right(),y=V.halfL*.62,w=V.halfW-.28;Lm.update(M,[[V.x-u*y-E*w,V.z-d*y-R*w],[V.x-u*y+E*w,V.z-d*y+R*w]],E,R)}ud.update(i,Lt.position.x,Lt.position.z,V.vx,V.vz);let f=Qp(i,[[V.x,V.z],[V.x+u*1.7,V.z+d*1.7]],(v,M)=>{for(let E=0;E<5;E++)Vc(v,1,M,.5,[1,.85,.3])});if(f){q.combo=Gs-q.lastStarT<1.6?q.combo+f:0,q.lastStarT=Gs,Ie.stars+=f,ot.ping(q.combo),Hs(12),oe("starnum").textContent=Ie.stars;let v=oe("starcount");v.classList.remove("pop"),v.offsetWidth,v.classList.add("pop");for(let M=0;M<f;M++)ds("star");q.starsRun=(q.starsRun||0)+f,(q.starsRun%5===0||q.starsRun<5&&f===1)&&Zt.say(`${Mm[q.starsRun]||q.starsRun} ${q.starsRun===1?"star":"stars"}!`,{min:1500});for(let M of zo())Mn("NEW STICKER!",`${M.e} ${M.n}`),ot.fanfare()}let g=Math.max(0,V.vf)*i,_=Math.abs(V.vf)*3.6;if(Ie.km+=g/1e3,Ie.worlds[ve.currentName]=(Ie.worlds[ve.currentName]||0)+g/1e3,ve.night&&(Ie.nightKm+=g/1e3),_>Ie.bestKmh&&(Ie.bestKmh=_),ds("dist",g),ds("speed",_),ds("pos",[V.x,V.z]),q.missionT>0&&(q.missionT-=i,q.missionT<=0&&Xm()),ln.cur&&!ln.cur.done){Sd();let v=ln.target();if(v){$r.visible=!0,$r.position.set(v[0],0,v[1]),$r.userData.tick(i,Gs);let M=v[0]-V.x,E=v[1]-V.z,R=Math.hypot(M,E),y=Math.atan2(-M,-E)-V.h;for(;y>Math.PI;)y-=Math.PI*2;for(;y<-Math.PI;)y+=Math.PI*2;oe("marrow").classList.remove("off"),oe("marrow").style.transform=`rotate(${-90-y*180/Math.PI}deg)`,oe("mprog").textContent=R<1e3?Math.round(R/10)*10+" m":(R/1e3).toFixed(1)+" km"}else $r.visible=!1,oe("marrow").classList.add("off")}else $r.visible=!1,oe("marrow").classList.add("off");if(q.saveT+=i,q.saveT>10){q.saveT=0,zs();for(let v of zo())Mn("NEW STICKER!",`${v.e} ${v.n}`),ot.fanfare()}r?(ve.road.ensure(V.x,V.z),Lb(),ve.road.tickLights&&q.frameN%10===0&&ve.road.tickLights(Gs,V.x,V.z)):ve.road.ensure(q.idx),ve.follow(V.x,V.z,u,d);let m=Math.round(_);Eb.textContent=m,Tb.style.strokeDashoffset=(258*(1-Math.min(1,m/(Dn.maxKmh||300)))).toFixed(1),Ab.textContent=(q.dist/1e3).toFixed(1)+" km";let p=xi(Math.abs(V.vf)/t,0,1),[S,b]=V.right();if(be.cam===0){let v=7.2+p*1.8+e.len*.2;Zr.set(V.x-u*v+S*V.vl*.08,2.7+p*.5,V.z-d*v+b*V.vl*.08),qo.set(V.x+u*10,1,V.z+d*10),Lt.position.lerp(Zr,Math.min(1,6*i))}else if(be.cam===1){let v=4.8+p*.8+e.len*.15;Zr.set(V.x-u*v,1.8+p*.2,V.z-d*v),qo.set(V.x+u*10,.9,V.z+d*10),Lt.position.lerp(Zr,Math.min(1,8*i))}else Zr.set(V.x+u*(e.len/2-.9),1.15,V.z+d*(e.len/2-.9)),qo.set(V.x+u*40,.9,V.z+d*40),Lt.position.copy(Zr);Lt.fov=rd(Lt.fov,60+p*14+(q.boosting?8:0),Math.min(1,4*i)),Lt.updateProjectionMatrix(),q.shake=Math.max(0,q.shake-i*1.8);let x=q.shake*.12+p*p*.01+(q.boosting?.02:0);Lt.position.x+=(Math.random()-.5)*x,Lt.position.y+=(Math.random()-.5)*x,q.lookAt&&(Lt.position.set(q.lookAt[2],q.lookAt[3],q.lookAt[4]),qo.set(q.lookAt[0],4,q.lookAt[1])),Lt.lookAt(qo),Lt.rotation.z+=-V.yawRate*.04*xi(Math.abs(V.vf)/20,0,1),ot.update(Math.abs(V.vf),t,!!V.throttle,q.boosting,V.vl,V.offRoad,i)}else{if(q.menuAngle+=i*.3,!ve.road)return;let n=ve.road.isMap?ve.road.startPose():ve.road.pointAt(40);ve.road.isMap&&(n.fx=-Math.sin(n.h),n.fz=-Math.cos(n.h)),At.position.set(n.x,.14,n.z),At.rotation.y=n.h+q.menuAngle,At.rotation.x=At.rotation.z=0,fs.visible=!0,fs.position.set(n.x,0,n.z),fs.rotation.y=n.h+q.menuAngle;let s=4.2+Dn.len*.5;Lt.position.set(n.x+Math.sin(.8)*s,1.7+Dn.len*.08,n.z+Math.cos(.8)*s),Lt.lookAt(n.x,.7,n.z),Lt.fov=rd(Lt.fov,42,Math.min(1,4*i)),Lt.updateProjectionMatrix();for(let r of At.userData.wheels)r.userData.front&&(r.rotation.y=rd(r.rotation.y,0,i*3));At.userData.glow.material.opacity=0,ve.road.isMap?ve.road.ensure(n.x,n.z):ve.road.ensure(10),ve.follow(n.x,n.z,n.fx,n.fz),ot.engine&&ot.update(0,t,!1,!1),ud.update(i,Lt.position.x,Lt.position.z,0,0)}mb(i)}var kc=0,hd=0,Yo=3;function Ub(i){if(bt!=="drive"||(kc+=i,hd++,kc<4))return;let e=hd/kc;kc=0,hd=0,e<26&&Yo>0&&(Yo--,Yo===2?xd=!1:Yo===1?(mn.setPixelRatio(Math.min(window.devicePixelRatio||1,1)),ve.sun.shadow.mapSize.set(1024,1024),ve.sun.shadow.map&&(ve.sun.shadow.map.dispose(),ve.sun.shadow.map=null)):(mn.setPixelRatio(.8),mn.shadowMap.enabled=!1),$c())}var Gs=0,Cm=0;function Qm(i){if(requestAnimationFrame(Qm),dd&&i-Cm<dd-1)return;Cm=i;let e=Math.min(.05,$o.getDelta());bt!=="pause"&&(Gs+=e),Sb(),At&&(ve.road||bt==="menu")&&(bt!=="pause"&&(Db(e),Ub(e)),xd&&_i?_i.render():mn.render(_n,Lt),Zc&&wb())}ve.setWorld(be.world);Gm();Dm();fb().then(()=>{Zo(),Bi(),Cd(),wd()}).catch(i=>{_d.textContent="Something went wrong: "+i,console.error(i)});Lt.position.set(6,3,7);Qm(0);document.addEventListener("visibilitychange",()=>{document.hidden?(Tt.gas=Tt.brake=Tt.boost=!1,jc(),zs()):(ot.resume(),$o.getDelta())});Km();window.__kidcars={G:q,P:Ie,settings:be,missions:ln,state:()=>bt,hasCar:Fs,body:()=>V,simTime:()=>Gs,roadReady:()=>!!ve.road,inputs:()=>({...Tt}),world:()=>ve,toast:Mn,addStarAhead:i=>{let[e,t]=V.fwd();for(let n=0;n<i;n++)Vr(V.x+e*(8+n*4),V.z+t*(8+n*4),"test")},teleport:(i,e)=>{V.x=i,V.z=e,V.vx=V.vz=0,Lt.position.set(i+Math.sin(V.h)*8,2.7,e+Math.cos(V.h)*8)},lookAt:(i,e,t,n,s)=>{q.lookAt=i==null?null:[i,e,t,n,s]},lockDbg:()=>({held:ms,heldFor:ms?Math.round(performance.now()-Ad):0,state:bt,lock:be.lock,touches:Array.from(Ln.values()),log:Kc.slice()}),back:()=>bt==="dua"?(qm(),bt="menu",Jc.classList.remove("hidden"),"handled"):bt==="drive"?(jc(),"handled"):bt==="pause"?(Cd(),"handled"):oe("book").classList.contains("hidden")?"exit":(oe("book").classList.add("hidden"),"handled")};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
