(()=>{var Cl=0,_o=1,Rl=2;var Ts=1,Il=2,Xi=3,$n=0,Be=1,Qe=2,vn=0,qi=1,xo=2,vo=3,yo=4,Pl=5;var ui=100,Ll=101,Dl=102,Nl=103,Ul=104,Fl=200,Ol=201,Bl=202,zl=203,Mo=204,So=205,Vl=206,kl=207,Gl=208,Hl=209,Wl=210,Xl=211,ql=212,Yl=213,Zl=214,ur=0,dr=1,fr=2,Ui=3,pr=4,mr=5,gr=6,_r=7,bo=0,Jl=1,$l=2,on=0,Eo=1,To=2,wo=3,Ao=4,Co=5,Ro=6,Io=7;var Po=300,Kn=301,di=302,Wr=303,Xr=304,ws=306,xr=1e3,pn=1001,vr=1002,we=1003,Kl=1004;var As=1005;var Ae=1006,qr=1007;var Qn=1008;var He=1009,Lo=1010,Do=1011,Yi=1012,Yr=1013,ln=1014,cn=1015,hn=1016,Zr=1017,Jr=1018,Zi=1020,No=35902,Uo=35899,Fo=1021,Oo=1022,je=1023,mn=1026,jn=1027,Bo=1028,$r=1029,ti=1030,Kr=1031;var Qr=1033,Cs=33776,Rs=33777,Is=33778,Ps=33779,jr=35840,ta=35841,ea=35842,na=35843,ia=36196,sa=37492,ra=37496,aa=37488,oa=37489,Ls=37490,la=37491,ca=37808,ha=37809,ua=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,_a=37816,xa=37817,va=37818,ya=37819,Ma=37820,Sa=37821,ba=36492,Ea=36494,Ta=36495,wa=36283,Aa=36284,Ds=36285,Ca=36286;var os=2300,yr=2301,cr=2302,co=2303,ho=2400,uo=2401,fo=2402;var Ql=3200;var Ra=0,jl=1,Pn="",Oe="srgb",ls="srgb-linear",cs="linear",jt="srgb";var hr=7680;var tc=519,ec=512,nc=513,ic=514,Ia=515,sc=516,rc=517,Pa=518,ac=519,oc=35044;var zo="300 es",an=2e3,Fi=2001;function Wc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xc(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lc(){let i=hs("canvas");return i.style.display="block",i}var ol={},Oi=null;function Vo(...i){let t="THREE."+i.shift();Oi?Oi("log",t,...i):console.log(t,...i)}function cc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function It(...i){i=cc(i);let t="THREE."+i.shift();if(Oi)Oi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=cc(i);let t="THREE."+i.shift();if(Oi)Oi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function hi(...i){let t=i.join(" ");t in ol||(ol[t]=!0,It(...i))}function hc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var uc={[ur]:dr,[fr]:gr,[pr]:_r,[Ui]:mr,[dr]:ur,[gr]:fr,[_r]:pr,[mr]:Ui},gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Va=Math.PI/180,Mr=180/Math.PI;function Ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function qc(i,t){return(i%t+t)%t}function ka(i,t,e){return(1-e)*i+e*t}function ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Wt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],m=n[s+3],h=r[a+0],p=r[a+1],v=r[a+2],y=r[a+3];if(m!==y||c!==h||l!==p||d!==v){let g=c*h+l*p+d*v+m*y;g<0&&(h=-h,p=-p,v=-v,y=-y,g=-g);let u=1-o;if(g<.9995){let E=Math.acos(g),L=Math.sin(E);u=Math.sin(u*E)/L,o=Math.sin(o*E)/L,c=c*u+h*o,l=l*u+p*o,d=d*u+v*o,m=m*u+y*o}else{c=c*u+h*o,l=l*u+p*o,d=d*u+v*o,m=m*u+y*o;let E=1/Math.sqrt(c*c+l*l+d*d+m*m);c*=E,l*=E,d*=E,m*=E}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],m=r[a],h=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+d*m+c*p-l*h,t[e+1]=c*v+d*h+l*m-o*p,t[e+2]=l*v+d*p+o*h-c*m,t[e+3]=d*v-o*m-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),m=o(r/2),h=c(n/2),p=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=h*d*m+l*p*v,this._y=l*p*m-h*d*v,this._z=l*d*v+h*p*m,this._w=l*d*m-h*p*v;break;case"YXZ":this._x=h*d*m+l*p*v,this._y=l*p*m-h*d*v,this._z=l*d*v-h*p*m,this._w=l*d*m+h*p*v;break;case"ZXY":this._x=h*d*m-l*p*v,this._y=l*p*m+h*d*v,this._z=l*d*v+h*p*m,this._w=l*d*m-h*p*v;break;case"ZYX":this._x=h*d*m-l*p*v,this._y=l*p*m+h*d*v,this._z=l*d*v-h*p*m,this._w=l*d*m+h*p*v;break;case"YZX":this._x=h*d*m+l*p*v,this._y=l*p*m+h*d*v,this._z=l*d*v-h*p*m,this._w=l*d*m-h*p*v;break;case"XZY":this._x=h*d*m-l*p*v,this._y=l*p*m-h*d*v,this._z=l*d*v+h*p*m,this._w=l*d*m+h*p*v;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],d=e[6],m=e[10],h=n+o+m;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>m){let p=2*Math.sqrt(1+n-o-m);this._w=(d-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>m){let p=2*Math.sqrt(1+o-n-m);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+d)/p}else{let p=2*Math.sqrt(1+m-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),d=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+c*l+a*m-o*d,this.y=n+c*d+o*l-r*m,this.z=s+c*m+r*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga=new k,ll=new _n,Dt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],m=n[7],h=n[2],p=n[5],v=n[8],y=s[0],g=s[3],u=s[6],E=s[1],L=s[4],M=s[7],b=s[2],S=s[5],C=s[8];return r[0]=a*y+o*E+c*b,r[3]=a*g+o*L+c*S,r[6]=a*u+o*M+c*C,r[1]=l*y+d*E+m*b,r[4]=l*g+d*L+m*S,r[7]=l*u+d*M+m*C,r[2]=h*y+p*E+v*b,r[5]=h*g+p*L+v*S,r[8]=h*u+p*M+v*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],m=d*a-o*l,h=o*c-d*r,p=l*r-a*c,v=e*m+n*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return t[0]=m*y,t[1]=(s*l-d*n)*y,t[2]=(o*n-s*a)*y,t[3]=h*y,t[4]=(d*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new Dt,cl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yc(){let i={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===jt&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?cs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ls]:{primaries:t,whitePoint:n,transfer:cs,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:jt,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var Xt=Yc();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mi,Sr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mi===void 0&&(Mi=hs("canvas")),Mi.width=t.width,Mi.height=t.height;let s=Mi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zc=0,Bi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wa(s[a].image)):r.push(Wa(s[a]))}else r=Wa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var Jc=0,Xa=new k,Ve=class i extends gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pn,s=pn,r=Ae,a=Qn,o=je,c=He,l=i.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Ns(),this.name="",this.source=new Bi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xa).x}get height(){return this.source.getSize(Xa).y}get depth(){return this.source.getSize(Xa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Po)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xr:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case vr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xr:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case vr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Po;Ve.DEFAULT_ANISOTROPY=1;var fe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],d=c[4],m=c[8],h=c[1],p=c[5],v=c[9],y=c[2],g=c[6],u=c[10];if(Math.abs(d-h)<.01&&Math.abs(m-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(m+y)<.1&&Math.abs(v+g)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(l+1)/2,M=(p+1)/2,b=(u+1)/2,S=(d+h)/4,C=(m+y)/4,_=(v+g)/4;return L>M&&L>b?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=S/n,r=C/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=_/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-v)*(g-v)+(m-y)*(m-y)+(h-d)*(h-d));return Math.abs(E)<.001&&(E=1),this.x=(g-v)/E,this.y=(m-y)/E,this.z=(h-d)/E,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},br=class extends gn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ve(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends br{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},us=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Er=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var pe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,d,m,h,p,v,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,d,m,h,p,v,y,g)}set(t,e,n,s,r,a,o,c,l,d,m,h,p,v,y,g){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=m,u[14]=h,u[3]=p,u[7]=v,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let h=a*d,p=a*m,v=o*d,y=o*m;e[0]=c*d,e[4]=-c*m,e[8]=l,e[1]=p+v*l,e[5]=h-y*l,e[9]=-o*c,e[2]=y-h*l,e[6]=v+p*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*d,p=c*m,v=l*d,y=l*m;e[0]=h+y*o,e[4]=v*o-p,e[8]=a*l,e[1]=a*m,e[5]=a*d,e[9]=-o,e[2]=p*o-v,e[6]=y+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*d,p=c*m,v=l*d,y=l*m;e[0]=h-y*o,e[4]=-a*m,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*d,e[9]=y-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*d,p=a*m,v=o*d,y=o*m;e[0]=c*d,e[4]=v*l-p,e[8]=h*l+y,e[1]=c*m,e[5]=y*l+h,e[9]=p*l-v,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,p=a*l,v=o*c,y=o*l;e[0]=c*d,e[4]=y-h*m,e[8]=v*m+p,e[1]=m,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=p*m+v,e[10]=h-y*m}else if(t.order==="XZY"){let h=a*c,p=a*l,v=o*c,y=o*l;e[0]=c*d,e[4]=-m,e[8]=l*d,e[1]=h*m+y,e[5]=a*d,e[9]=p*m-v,e[2]=v*m-p,e[6]=o*d,e[10]=y*m+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($c,t,Kc)}lookAt(t,e,n){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Fn.crossVectors(n,Xe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Fn.crossVectors(n,Xe)),Fn.normalize(),Ws.crossVectors(Xe,Fn),s[0]=Fn.x,s[4]=Ws.x,s[8]=Xe.x,s[1]=Fn.y,s[5]=Ws.y,s[9]=Xe.y,s[2]=Fn.z,s[6]=Ws.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],m=n[5],h=n[9],p=n[13],v=n[2],y=n[6],g=n[10],u=n[14],E=n[3],L=n[7],M=n[11],b=n[15],S=s[0],C=s[4],_=s[8],w=s[12],R=s[1],F=s[5],B=s[9],G=s[13],D=s[2],H=s[6],$=s[10],Y=s[14],rt=s[3],J=s[7],nt=s[11],st=s[15];return r[0]=a*S+o*R+c*D+l*rt,r[4]=a*C+o*F+c*H+l*J,r[8]=a*_+o*B+c*$+l*nt,r[12]=a*w+o*G+c*Y+l*st,r[1]=d*S+m*R+h*D+p*rt,r[5]=d*C+m*F+h*H+p*J,r[9]=d*_+m*B+h*$+p*nt,r[13]=d*w+m*G+h*Y+p*st,r[2]=v*S+y*R+g*D+u*rt,r[6]=v*C+y*F+g*H+u*J,r[10]=v*_+y*B+g*$+u*nt,r[14]=v*w+y*G+g*Y+u*st,r[3]=E*S+L*R+M*D+b*rt,r[7]=E*C+L*F+M*H+b*J,r[11]=E*_+L*B+M*$+b*nt,r[15]=E*w+L*G+M*Y+b*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],d=t[2],m=t[6],h=t[10],p=t[14],v=t[3],y=t[7],g=t[11],u=t[15],E=c*p-l*h,L=o*p-l*m,M=o*h-c*m,b=a*p-l*d,S=a*h-c*d,C=a*m-o*d;return e*(y*E-g*L+u*M)-n*(v*E-g*b+u*S)+s*(v*L-y*b+u*C)-r*(v*M-y*S+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],d=t[10];return e*(a*d-o*l)-n*(r*d-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],m=t[9],h=t[10],p=t[11],v=t[12],y=t[13],g=t[14],u=t[15],E=e*o-n*a,L=e*c-s*a,M=e*l-r*a,b=n*c-s*o,S=n*l-r*o,C=s*l-r*c,_=d*y-m*v,w=d*g-h*v,R=d*u-p*v,F=m*g-h*y,B=m*u-p*y,G=h*u-p*g,D=E*G-L*B+M*F+b*R-S*w+C*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/D;return t[0]=(o*G-c*B+l*F)*H,t[1]=(s*B-n*G-r*F)*H,t[2]=(y*C-g*S+u*b)*H,t[3]=(h*S-m*C-p*b)*H,t[4]=(c*R-a*G-l*w)*H,t[5]=(e*G-s*R+r*w)*H,t[6]=(g*M-v*C-u*L)*H,t[7]=(d*C-h*M+p*L)*H,t[8]=(a*B-o*R+l*_)*H,t[9]=(n*R-e*B-r*_)*H,t[10]=(v*S-y*M+u*E)*H,t[11]=(m*M-d*S-p*E)*H,t[12]=(o*w-a*F-c*_)*H,t[13]=(e*F-n*w+s*_)*H,t[14]=(y*L-v*b-g*E)*H,t[15]=(d*b-m*L+h*E)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,d=a+a,m=o+o,h=r*l,p=r*d,v=r*m,y=a*d,g=a*m,u=o*m,E=c*l,L=c*d,M=c*m,b=n.x,S=n.y,C=n.z;return s[0]=(1-(y+u))*b,s[1]=(p+M)*b,s[2]=(v-L)*b,s[3]=0,s[4]=(p-M)*S,s[5]=(1-(h+u))*S,s[6]=(g+E)*S,s[7]=0,s[8]=(v+L)*C,s[9]=(g-E)*C,s[10]=(1-(h+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Si.set(s[0],s[1],s[2]).length(),o=Si.set(s[4],s[5],s[6]).length(),c=Si.set(s[8],s[9],s[10]).length();r<0&&(a=-a),en.copy(this);let l=1/a,d=1/o,m=1/c;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=d,en.elements[5]*=d,en.elements[6]*=d,en.elements[8]*=m,en.elements[9]*=m,en.elements[10]*=m,e.setFromRotationMatrix(en),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=an,c=!1){let l=this.elements,d=2*r/(e-t),m=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s),v,y;if(c)v=r/(a-r),y=a*r/(a-r);else if(o===an)v=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Fi)v=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=m,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=an,c=!1){let l=this.elements,d=2/(e-t),m=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s),v,y;if(c)v=1/(a-r),y=a/(a-r);else if(o===an)v=-2/(a-r),y=-(a+r)/(a-r);else if(o===Fi)v=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=m,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Si=new k,en=new pe,$c=new k(0,0,0),Kc=new k(1,1,1),Fn=new k,Ws=new k,Xe=new k,ul=new pe,dl=new _n,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],m=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dl.setFromEuler(this),this.setFromQuaternion(dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var ds=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qc=0,fl=new k,bi=new _n,bn=new pe,Xs=new k,is=new k,jc=new k,th=new _n,pl=new k(1,0,0),ml=new k(0,1,0),gl=new k(0,0,1),_l={type:"added"},eh={type:"removed"},Ei={type:"childadded",child:null},qa={type:"childremoved",child:null},De=class i extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Rn,n=new _n,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Dt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(pl,t)}rotateY(t){return this.rotateOnAxis(ml,t)}rotateZ(t){return this.rotateOnAxis(gl,t)}translateOnAxis(t,e){return fl.copy(t).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pl,t)}translateY(t){return this.translateOnAxis(ml,t)}translateZ(t){return this.translateOnAxis(gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xs.copy(t):Xs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(is,Xs,this.up):bn.lookAt(Xs,is,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(bn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_l),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eh),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_l),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,jc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,th,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let m=c[l];r(t.shapes,m)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),d=a(t.images),m=a(t.shapes),h=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};De.DEFAULT_UP=new k(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ue=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},nh={type:"move"},zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),u=this._getHandJoint(l,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let d=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],h=d.position.distanceTo(m.position),p=.02,v=.005;l.inputState.pinching&&h>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=qc(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ya(a,r,t+1/3),this.g=Ya(a,r,t),this.b=Ya(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=dc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Xt.workingToColorSpace(Pe.copy(this),t),Math.round(qt(Pe.r*255,0,255))*65536+Math.round(qt(Pe.g*255,0,255))*256+Math.round(qt(Pe.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Pe.copy(this),e);let n=Pe.r,s=Pe.g,r=Pe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let m=a-o;switch(l=d<=.5?m/(a+o):m/(2-a-o),a){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Oe){Xt.workingToColorSpace(Pe.copy(this),t);let e=Pe.r,n=Pe.g,s=Pe.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(qs);let n=ka(On.h,qs.h,e),s=ka(On.s,qs.s,e),r=ka(On.l,qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pe=new Ft;Ft.NAMES=dc;var fs=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},nn=new k,En=new k,Za=new k,Tn=new k,Ti=new k,wi=new k,xl=new k,Ja=new k,$a=new k,Ka=new k,Qa=new fe,ja=new fe,to=new fe,kn=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),En.subVectors(n,e),Za.subVectors(t,e);let a=nn.dot(nn),o=nn.dot(En),c=nn.dot(Za),l=En.dot(En),d=En.dot(Za),m=a*l-o*o;if(m===0)return r.set(0,0,0),null;let h=1/m,p=(l*c-o*d)*h,v=(a*d-o*c)*h;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(o,Tn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Qa.setScalar(0),ja.setScalar(0),to.setScalar(0),Qa.fromBufferAttribute(t,e),ja.fromBufferAttribute(t,n),to.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qa,r.x),a.addScaledVector(ja,r.y),a.addScaledVector(to,r.z),a}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),En.subVectors(t,e),nn.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),nn.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ti.subVectors(s,n),wi.subVectors(r,n),Ja.subVectors(t,n);let c=Ti.dot(Ja),l=wi.dot(Ja);if(c<=0&&l<=0)return e.copy(n);$a.subVectors(t,s);let d=Ti.dot($a),m=wi.dot($a);if(d>=0&&m<=d)return e.copy(s);let h=c*m-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(Ti,a);Ka.subVectors(t,r);let p=Ti.dot(Ka),v=wi.dot(Ka);if(v>=0&&p<=v)return e.copy(r);let y=p*l-c*v;if(y<=0&&l>=0&&v<=0)return o=l/(l-v),e.copy(n).addScaledVector(wi,o);let g=d*v-p*m;if(g<=0&&m-d>=0&&p-v>=0)return xl.subVectors(r,s),o=(m-d)/(m-d+(p-v)),e.copy(s).addScaledVector(xl,o);let u=1/(g+y+h);return a=y*u,o=h*u,e.copy(n).addScaledVector(Ti,a).addScaledVector(wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Zs.subVectors(this.max,ss),Ai.subVectors(t.a,ss),Ci.subVectors(t.b,ss),Ri.subVectors(t.c,ss),Bn.subVectors(Ci,Ai),zn.subVectors(Ri,Ci),ai.subVectors(Ai,Ri);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ai.z,ai.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ai.z,0,-ai.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ai.y,ai.x,0];return!eo(e,Ai,Ci,Ri,Zs)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,Ai,Ci,Ri,Zs))?!1:(Js.crossVectors(Bn,zn),e=[Js.x,Js.y,Js.z],eo(e,Ai,Ci,Ri,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wn=[new k,new k,new k,new k,new k,new k,new k,new k],sn=new k,Ys=new Gn,Ai=new k,Ci=new k,Ri=new k,Bn=new k,zn=new k,ai=new k,ss=new k,Zs=new k,Js=new k,oi=new k;function eo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);let o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),d=n.dot(oi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var Me=new k,$s=new Wt,ih=0,Ke=class extends gn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ih++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ps=class extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ms=class extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var de=class extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},sh=new Gn,rs=new k,no=new k,Vi=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);let e=rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(no)),this.expandByPoint(rs.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},rh=0,$e=new pe,io=new De,Ii=new k,qe=new Gn,as=new Gn,Te=new k,Ge=class i extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wc(t)?ms:ps)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(qe.min,as.min),qe.expandByPoint(Te),Te.addVectors(qe.max,as.max),qe.expandByPoint(Te)):(qe.expandByPoint(as.min),qe.expandByPoint(as.max))}qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Te.fromBufferAttribute(o,l),c&&(Ii.fromBufferAttribute(t,l),Te.add(Ii)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new k,c[_]=new k;let l=new k,d=new k,m=new k,h=new Wt,p=new Wt,v=new Wt,y=new k,g=new k;function u(_,w,R){l.fromBufferAttribute(n,_),d.fromBufferAttribute(n,w),m.fromBufferAttribute(n,R),h.fromBufferAttribute(r,_),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,R),d.sub(l),m.sub(l),p.sub(h),v.sub(h);let F=1/(p.x*v.y-v.x*p.y);isFinite(F)&&(y.copy(d).multiplyScalar(v.y).addScaledVector(m,-p.y).multiplyScalar(F),g.copy(m).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(F),o[_].add(y),o[w].add(y),o[R].add(y),c[_].add(g),c[w].add(g),c[R].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let _=0,w=E.length;_<w;++_){let R=E[_],F=R.start,B=R.count;for(let G=F,D=F+B;G<D;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let L=new k,M=new k,b=new k,S=new k;function C(_){b.fromBufferAttribute(s,_),S.copy(b);let w=o[_];L.copy(w),L.sub(b.multiplyScalar(b.dot(w))).normalize(),M.crossVectors(S,w);let F=M.dot(c[_])<0?-1:1;a.setXYZW(_,L.x,L.y,L.z,F)}for(let _=0,w=E.length;_<w;++_){let R=E[_],F=R.start,B=R.count;for(let G=F,D=F+B;G<D;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new k,r=new k,a=new k,o=new k,c=new k,l=new k,d=new k,m=new k;if(t)for(let h=0,p=t.count;h<p;h+=3){let v=t.getX(h+0),y=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,g),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),o.add(d),c.add(d),l.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){let l=o.array,d=o.itemSize,m=o.normalized,h=new l.constructor(c.length*d),p=0,v=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*d;for(let u=0;u<d;u++)h[v++]=l[p++]}return new Ke(h,d,m)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,m=l.length;d<m;d++){let h=l[d],p=t(h,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let m=0,h=l.length;m<h;m++){let p=l[m];d.push(p.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(e))}let r=t.morphAttributes;for(let l in r){let d=[],m=r[l];for(let h=0,p=m.length;h<p;h++)d.push(m[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,d=a.length;l<d;l++){let m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var so=new k,ah=new k,oh=new Dt,rn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=so.subVectors(n,e).cross(ah.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(so),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||oh.getNormalMatrix(t),s=this.coplanarPoint(so).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},lh=0,Hn=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=qi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=So,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new rn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var An=new k,ro=new k,Ks=new k,Qs=new k,Tr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ro.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Qs.copy(this.origin).sub(ro);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ks),o=Qs.dot(this.direction),c=-Qs.dot(Ks),l=Qs.lengthSq(),d=Math.abs(1-a*a),m,h,p,v;if(d>0)if(m=a*c-o,h=a*o-c,v=r*d,m>=0)if(h>=-v)if(h<=v){let y=1/d;m*=y,h*=y,p=m*(m+a*h+2*o)+h*(a*m+h+2*c)+l}else h=r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*c)+l;else h=-r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*c)+l;else h<=-v?(m=Math.max(0,-(-a*r+o)),h=m>0?-r:Math.min(Math.max(-r,-c),r),p=-m*m+h*(h+2*c)+l):h<=v?(m=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(m=Math.max(0,-(a*r+o)),h=m>0?r:Math.min(Math.max(-r,-c),r),p=-m*m+h*(h+2*c)+l);else h=a>0?-r:r,m=Math.max(0,-(a*h+o)),p=-m*m+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(ro).addScaledVector(Ks,h),p}intersectSphere(t,e){if(t.radius<0)return null;An.subVectors(t.center,this.origin);let n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-h.z)*m,c=(t.max.z-h.z)*m):(o=(t.max.z-h.z)*m,c=(t.min.z-h.z)*m),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,m=t.x-a.x,h=t.y-a.y,p=t.z-a.z,v=e.x-a.x,y=e.y-a.y,g=e.z-a.z,u=n.x-a.x,E=n.y-a.y,L=n.z-a.z,M=Math.abs(c),b=Math.abs(l),S=Math.abs(d),C,_,w,R,F,B,G,D,H,$,Y,rt;if(M>=b&&M>=S?(w=c,B=m,H=v,rt=u,c>=0?(C=l,_=d,R=h,F=p,G=y,D=g,$=E,Y=L):(C=d,_=l,R=p,F=h,G=g,D=y,$=L,Y=E)):b>=S?(w=l,B=h,H=y,rt=E,l>=0?(C=d,_=c,R=p,F=m,G=g,D=v,$=L,Y=u):(C=c,_=d,R=m,F=p,G=v,D=g,$=u,Y=L)):(w=d,B=p,H=g,rt=L,d>=0?(C=c,_=l,R=m,F=h,G=v,D=y,$=u,Y=E):(C=l,_=c,R=h,F=m,G=y,D=v,$=E,Y=u)),w===0)return null;let J=C/w,nt=_/w,st=1/w,At=R-J*B,wt=F-nt*B,Kt=G-J*H,Gt=D-nt*H,Zt=$-J*rt,K=Y-nt*rt,et=Zt*Gt-K*Kt,vt=At*K-wt*Zt,Rt=Kt*wt-Gt*At;if(s){if(et<0||vt<0||Rt<0)return null}else if((et<0||vt<0||Rt<0)&&(et>0||vt>0||Rt>0))return null;let gt=et+vt+Rt;if(gt===0)return null;let Lt=st*(et*B+vt*H+Rt*rt);return(gt>0?Lt<0:Lt>0)?null:this.at(Lt/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vl=new pe,li=new Tr,js=new Vi,yl=new k,tr=new k,er=new k,nr=new k,ao=new k,ir=new k,Ml=new k,sr=new k,se=class extends De{constructor(t=new Ge,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],m=r[c];d!==0&&(ao.fromBufferAttribute(m,t),a?ir.addScaledVector(ao,d):ir.addScaledVector(ao.sub(e),d))}e.add(ir)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(js.containsPoint(li.origin)===!1&&(li.intersectSphere(js,yl)===null||li.origin.distanceToSquared(yl)>(t.far-t.near)**2))&&(vl.copy(r).invert(),li.copy(t.ray).applyMatrix4(vl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=h.length;v<y;v++){let g=h[v],u=a[g.materialIndex],E=Math.max(g.start,p.start),L=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=E,b=L;M<b;M+=3){let S=o.getX(M),C=o.getX(M+1),_=o.getX(M+2);s=rr(this,u,t,n,l,d,m,S,C,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=v,u=y;g<u;g+=3){let E=o.getX(g),L=o.getX(g+1),M=o.getX(g+2);s=rr(this,a,t,n,l,d,m,E,L,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,y=h.length;v<y;v++){let g=h[v],u=a[g.materialIndex],E=Math.max(g.start,p.start),L=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let M=E,b=L;M<b;M+=3){let S=M,C=M+1,_=M+2;s=rr(this,u,t,n,l,d,m,S,C,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let v=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=v,u=y;g<u;g+=3){let E=g,L=g+1,M=g+2;s=rr(this,a,t,n,l,d,m,E,L,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ch(i,t,e,n,s,r,a,o){let c;if(t.side===Be?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===$n,o),c===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(sr);return l<e.near||l>e.far?null:{distance:l,point:sr.clone(),object:i}}function rr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,tr),i.getVertexPosition(c,er),i.getVertexPosition(l,nr);let d=ch(i,t,e,n,tr,er,nr,Ml);if(d){let m=new k;kn.getBarycoord(Ml,tr,er,nr,m),s&&(d.uv=kn.getInterpolatedAttribute(s,o,c,l,m,new Wt)),r&&(d.uv1=kn.getInterpolatedAttribute(r,o,c,l,m,new Wt)),a&&(d.normal=kn.getInterpolatedAttribute(a,o,c,l,m,new k),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new k,materialIndex:0};kn.getNormal(tr,er,nr,h.normal),d.face=h,d.barycoord=m}return d}var wr=class extends Ve{constructor(t=null,e=1,n=1,s,r,a,o,c,l=we,d=we,m,h){super(null,a,o,c,l,d,s,r,m,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=new Vi,hh=new Wt(.5,.5),ar=new k,ki=class{constructor(t=new rn,e=new rn,n=new rn,s=new rn,r=new rn,a=new rn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=an,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],m=r[5],h=r[6],p=r[7],v=r[8],y=r[9],g=r[10],u=r[11],E=r[12],L=r[13],M=r[14],b=r[15];if(s[0].setComponents(l-a,p-d,u-v,b-E).normalize(),s[1].setComponents(l+a,p+d,u+v,b+E).normalize(),s[2].setComponents(l+o,p+m,u+y,b+L).normalize(),s[3].setComponents(l-o,p-m,u-y,b-L).normalize(),n)s[4].setComponents(c,h,g,M).normalize(),s[5].setComponents(l-c,p-h,u-g,b-M).normalize();else if(s[4].setComponents(l-c,p-h,u-g,b-M).normalize(),e===an)s[5].setComponents(l+c,p+h,u+g,b+M).normalize();else if(e===Fi)s[5].setComponents(c,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){ci.center.set(0,0,0);let e=hh.distanceTo(t.center);return ci.radius=.7071067811865476+e,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ar.x=s.normal.x>0?t.max.x:t.min.x,ar.y=s.normal.y>0?t.max.y:t.min.y,ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gs=class extends Ve{constructor(t=[],e=Kn,n,s,r,a,o,c,l,d){super(t,e,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Wn=class extends Ve{constructor(t,e,n=ln,s,r,a,o=we,c=we,l,d=mn,m=1){if(d!==mn&&d!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:m};super(h,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ar=class extends Wn{constructor(t,e=ln,n=Kn,s,r,a=we,o=we,c,l=mn){let d={width:t,height:t,depth:1},m=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_s=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xn=class i extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],m=[],h=0,p=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(m,2));function v(y,g,u,E,L,M,b,S,C,_,w){let R=M/C,F=b/_,B=M/2,G=b/2,D=S/2,H=C+1,$=_+1,Y=0,rt=0,J=new k;for(let nt=0;nt<$;nt++){let st=nt*F-G;for(let At=0;At<H;At++){let wt=At*R-B;J[y]=wt*E,J[g]=st*L,J[u]=D,l.push(J.x,J.y,J.z),J[y]=0,J[g]=0,J[u]=S>0?1:-1,d.push(J.x,J.y,J.z),m.push(At/C),m.push(1-nt/_),Y+=1}}for(let nt=0;nt<_;nt++)for(let st=0;st<C;st++){let At=h+st+H*nt,wt=h+st+H*(nt+1),Kt=h+(st+1)+H*(nt+1),Gt=h+(st+1)+H*nt;c.push(At,wt,Gt),c.push(wt,Kt,Gt),rt+=6}o.addGroup(p,rt,w),p+=rt,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Gi=class i extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new k,d=new Wt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let m=0,h=3;m<=e;m++,h+=3){let p=n+m/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[h]/t+1)/2,d.y=(a[h+1]/t+1)/2,c.push(d.x,d.y)}for(let m=1;m<=e;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},In=class i extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],m=[],h=[],p=[],v=0,y=[],g=n/2,u=0;E(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(d),this.setAttribute("position",new de(m,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(p,2));function E(){let M=new k,b=new k,S=0,C=(e-t)/n;for(let _=0;_<=r;_++){let w=[],R=_/r,F=R*(e-t)+t;for(let B=0;B<=s;B++){let G=B/s,D=G*c+o,H=Math.sin(D),$=Math.cos(D);b.x=F*H,b.y=-R*n+g,b.z=F*$,m.push(b.x,b.y,b.z),M.set(H,C,$).normalize(),h.push(M.x,M.y,M.z),p.push(G,1-R),w.push(v++)}y.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let R=y[w][_],F=y[w+1][_],B=y[w+1][_+1],G=y[w][_+1];(t>0||w!==0)&&(d.push(R,F,G),S+=3),(e>0||w!==r-1)&&(d.push(F,B,G),S+=3)}l.addGroup(u,S,0),u+=S}function L(M){let b=v,S=new Wt,C=new k,_=0,w=M===!0?t:e,R=M===!0?1:-1;for(let B=1;B<=s;B++)m.push(0,g*R,0),h.push(0,R,0),p.push(.5,.5),v++;let F=v;for(let B=0;B<=s;B++){let D=B/s*c+o,H=Math.cos(D),$=Math.sin(D);C.x=w*$,C.y=g*R,C.z=w*H,m.push(C.x,C.y,C.z),h.push(0,R,0),S.x=H*.5+.5,S.y=$*.5*R+.5,p.push(S.x,S.y),v++}for(let B=0;B<s;B++){let G=b+B,D=F+B;M===!0?d.push(D,D+1,G):d.push(D+1,D,G),_+=3}l.addGroup(u,_,M===!0?1:2),u+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xs=class i extends In{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vs=class i extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,m=t/o,h=e/c,p=[],v=[],y=[],g=[];for(let u=0;u<d;u++){let E=u*h-a;for(let L=0;L<l;L++){let M=L*m-r;v.push(M,-E,0),y.push(0,0,1),g.push(L/o),g.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<o;E++){let L=E+l*u,M=E+l*(u+1),b=E+1+l*(u+1),S=E+1+l*u;p.push(L,M,S),p.push(M,b,S)}this.setIndex(p),this.setAttribute("position",new de(v,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ys=class i extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,d=[],m=new k,h=new k,p=[],v=[],y=[],g=[];for(let u=0;u<=n;u++){let E=[],L=u/n,M=a+L*o,b=t*Math.cos(M),S=Math.sqrt(t*t-b*b),C=0;u===0&&a===0?C=.5/e:u===n&&c===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let w=_/e,R=s+w*r;m.x=-S*Math.cos(R),m.y=b,m.z=S*Math.sin(R),v.push(m.x,m.y,m.z),h.copy(m).normalize(),y.push(h.x,h.y,h.z),g.push(w+C,1-L),E.push(l++)}d.push(E)}for(let u=0;u<n;u++)for(let E=0;E<e;E++){let L=d[u][E+1],M=d[u][E],b=d[u+1][E],S=d[u+1][E+1];(u!==0||a>0)&&p.push(L,M,S),(u!==n-1||c<Math.PI)&&p.push(M,b,S)}this.setIndex(p),this.setAttribute("position",new de(v,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qn=class i extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],d=[],m=[],h=new k,p=new k,v=new k;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let u=0;u<=s;u++){let E=u/s*r;p.x=(t+e*Math.cos(g))*Math.cos(E),p.y=(t+e*Math.cos(g))*Math.sin(E),p.z=e*Math.sin(g),l.push(p.x,p.y,p.z),h.x=t*Math.cos(E),h.y=t*Math.sin(E),v.subVectors(p,h).normalize(),d.push(v.x,v.y,v.z),m.push(u/s),m.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let u=(s+1)*y+g-1,E=(s+1)*(y-1)+g-1,L=(s+1)*(y-1)+g,M=(s+1)*y+g;c.push(u,E,M),c.push(E,L,M)}this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function fi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Sl(s))s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Sl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ne(i){let t={};for(let e=0;e<i.length;e++){let n=fi(i[e]);for(let s in n)t[s]=n[s]}return t}function Sl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function uh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ko(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var fc={clone:fi,merge:Ne},dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ye=class extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dh,this.fragmentShader=fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fi(t.uniforms),this.uniformsGroups=uh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(s.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new fe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Cr=class extends Ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ge=class extends Hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Rr=class extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ir=class extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function oo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Yn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pr=class extends Yn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ho,endingEnd:ho}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case uo:r=t,o=2*e-n;break;case fo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case uo:a=t,c=2*n-e;break;case fo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,d=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=this._offsetPrev,m=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(n-e)/(s-e),y=v*v,g=y*v,u=-h*g+2*h*y-h*v,E=(1+h)*g+(-1.5-2*h)*y+(-.5+h)*v+1,L=(-1-p)*g+(1.5+p)*y+.5*v,M=p*g-p*y;for(let b=0;b!==o;++b)r[b]=u*a[d+b]+E*a[l+b]+L*a[c+b]+M*a[m+b];return r}},Lr=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=(n-e)/(s-e),m=1-d;for(let h=0;h!==o;++h)r[h]=a[l+h]*m+a[c+h]*d;return r}},Dr=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Nr=class extends Yn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=this.inTangents,m=this.outTangents;if(!d||!m){let v=(n-e)/(s-e),y=1-v;for(let g=0;g!==o;++g)r[g]=a[l+g]*y+a[c+g]*v;return r}let h=o*2,p=t-1;for(let v=0;v!==o;++v){let y=a[l+v],g=a[c+v],u=p*h+v*2,E=m[u],L=m[u+1],M=t*h+v*2,b=d[M],S=d[M+1],C=mh(n,e,E,b,s);r[v]=pc(C,y,L,S,g)}return r}};function pc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ph(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function mh(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=pc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=ph(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Ze=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pi(e,this.TimeBufferType),this.values=Pi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Pi(t.times,Array),values:Pi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),oo(t.settings)&&(n.settings={inTangents:Pi(t.settings.inTangents,Array),outTangents:Pi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Dr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Nr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case os:e=this.InterpolantFactoryMethodDiscrete;break;case yr:e=this.InterpolantFactoryMethodLinear;break;case cr:e=this.InterpolantFactoryMethodSmooth;break;case co:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return cr;case this.InterpolantFactoryMethodBezier:return co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;oo(this.settings)&&(bl(this.settings.inTangents,t),bl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Pt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Pt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Xc(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Pt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],d=t[o+1];if(l!==d&&(o!==1||l!==t[0]))if(s)c=!0;else{let m=o*n,h=m-n,p=m+n;for(let v=0;v!==n;++v){let y=e[m+v];if(y!==e[h+v]||y!==e[p+v]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let m=o*n,h=a*n;for(let p=0;p!==n;++p)e[h+p]=e[m+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,oo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ze.prototype.ValueTypeName="";Ze.prototype.TimeBufferType=Float32Array;Ze.prototype.ValueBufferType=Float32Array;Ze.prototype.DefaultInterpolation=yr;var Zn=class extends Ze{constructor(t,e,n){super(t,e,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=os;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Ur.prototype.ValueTypeName="color";var Fr=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Fr.prototype.ValueTypeName="number";var Or=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let d=l+o;l!==d;l+=4)_n.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ms=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Or(this.times,this.values,this.getValueSize(),t)}};Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Ze{constructor(t,e,n){super(t,e,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=os;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Br.prototype.ValueTypeName="vector";var zr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,m){return l.push(d,m),this},this.removeHandler=function(d){let m=l.indexOf(d);return m!==-1&&l.splice(m,2),this},this.getHandler=function(d){for(let m=0,h=l.length;m<h;m+=2){let p=l[m],v=l[m+1];if(p.global&&(p.lastIndex=0),p.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mc=new zr,Vr=class{constructor(t){this.manager=t!==void 0?t:mc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ss=class extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},bs=class extends Ss{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},lo=new pe,El=new k,Tl=new k,kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=He,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ki,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;El.setFromMatrixPosition(t.matrixWorld),e.position.copy(El),Tl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(lo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Fi||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},or=new k,lr=new _n,fn=new k,Es=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(or,lr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(or,lr,fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(or,lr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(or,lr,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vn=new k,wl=new Wt,Al=new Wt,Le=class extends Es{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,wl,Al),e.subVectors(Al,wl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Va*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Hi=class extends Es{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},po=class extends kr{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wi=class extends Ss{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new po}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Li=-90,Di=1,Gr=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(Li,Di,t,e);s.layers=this.layers,this.add(s);let r=new Le(Li,Di,t,e);r.layers=this.layers,this.add(r);let a=new Le(Li,Di,t,e);a.layers=this.layers,this.add(a);let o=new Le(Li,Di,t,e);o.layers=this.layers,this.add(o);let c=new Le(Li,Di,t,e);c.layers=this.layers,this.add(c);let l=new Le(Li,Di,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(m,h,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Hr=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Go="\\[\\]\\.:\\/",gh=new RegExp("["+Go+"]","g"),Ho="[^"+Go+"]",_h="[^"+Go.replace("\\.","")+"]",xh=/((?:WC+[\/:])*)/.source.replace("WC",Ho),vh=/(WCOD+)?/.source.replace("WCOD",_h),yh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ho),Mh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ho),Sh=new RegExp("^"+xh+vh+yh+Mh+"$"),bh=["material","materials","bones","map"],mo=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gh,"")}static parseTrackName(t){let e=Sh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===l){l=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=mo;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _m=new Float32Array(1);var go=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Wo(i,t,e,n){let s=Eh(n);switch(e){case Fo:return i*t;case Bo:return i*t/s.components*s.byteLength;case $r:return i*t/s.components*s.byteLength;case ti:return i*t*2/s.components*s.byteLength;case Kr:return i*t*2/s.components*s.byteLength;case Oo:return i*t*3/s.components*s.byteLength;case je:return i*t*4/s.components*s.byteLength;case Qr:return i*t*4/s.components*s.byteLength;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Is:case Ps:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:case na:return Math.max(i,16)*Math.max(t,8)/4;case jr:case ea:return Math.max(i,8)*Math.max(t,8)/2;case ia:case sa:case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:case Ls:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ba:case Ea:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wa:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ds:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Eh(i){switch(i){case He:case Lo:return{byteLength:1,components:1};case Yi:case Do:case hn:return{byteLength:2,components:1};case Zr:case Jr:return{byteLength:2,components:4};case ln:case Yr:case cn:return{byteLength:4,components:1};case No:case Uo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Oc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wh(i){let t=new WeakMap;function e(o,c){let l=o.array,d=o.usage,m=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,l){let d=c.array,m=c.updateRanges;if(i.bindBuffer(l,o),m.length===0)i.bufferSubData(l,0,d);else{m.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<m.length;p++){let v=m[h],y=m[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++h,m[h]=y)}m.length=h+1;for(let p=0,v=m.length;p<v;p++){let y=m[p];i.bufferSubData(l,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ch=`#ifdef USE_ALPHAHASH
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
#endif`,Rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ph=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dh=`#ifdef USE_AOMAP
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
#endif`,Nh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uh=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vh=`#ifdef USE_IRIDESCENCE
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
#endif`,kh=`#ifdef USE_BUMPMAP
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
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Kh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qh=`vec3 transformedNormal = objectNormal;
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
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",su=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pu=`#ifdef USE_GRADIENTMAP
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
}`,mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xu=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,vu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Tu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wu=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Au=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ru=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Iu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ou=`#if defined( USE_POINTS_UV )
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
#endif`,Bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ku=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hu=`#ifdef USE_MORPHTARGETS
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
#endif`,Wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ju=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$u=`#ifdef USE_NORMALMAP
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
#endif`,Ku=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pd=`#ifdef USE_SKINNING
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
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
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
#endif`,_d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Md=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sd=`#ifdef USE_TRANSMISSION
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
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
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Id=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`#include <common>
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
}`,Nd=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ud=`#define DISTANCE
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
}`,Fd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`uniform float scale;
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
}`,Vd=`uniform vec3 diffuse;
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
}`,kd=`#include <common>
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
}`,Gd=`uniform vec3 diffuse;
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
}`,Hd=`#define LAMBERT
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
}`,Wd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Xd=`#define MATCAP
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
}`,qd=`#define MATCAP
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
}`,Yd=`#define NORMAL
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
}`,Zd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jd=`#define PHONG
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
}`,$d=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Kd=`#define STANDARD
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
}`,Qd=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,jd=`#define TOON
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
}`,tf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ef=`uniform float size;
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#include <common>
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
}`,rf=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,af=`uniform float rotation;
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
}`,of=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Ah,alphahash_pars_fragment:Ch,alphamap_fragment:Rh,alphamap_pars_fragment:Ih,alphatest_fragment:Ph,alphatest_pars_fragment:Lh,aomap_fragment:Dh,aomap_pars_fragment:Nh,batching_pars_vertex:Uh,batching_vertex:Fh,begin_vertex:Oh,beginnormal_vertex:Bh,bsdfs:zh,iridescence_fragment:Vh,bumpmap_pars_fragment:kh,clipping_planes_fragment:Gh,clipping_planes_pars_fragment:Hh,clipping_planes_pars_vertex:Wh,clipping_planes_vertex:Xh,color_fragment:qh,color_pars_fragment:Yh,color_pars_vertex:Zh,color_vertex:Jh,common:$h,cube_uv_reflection_fragment:Kh,defaultnormal_vertex:Qh,displacementmap_pars_vertex:jh,displacementmap_vertex:tu,emissivemap_fragment:eu,emissivemap_pars_fragment:nu,colorspace_fragment:iu,colorspace_pars_fragment:su,envmap_fragment:ru,envmap_common_pars_fragment:au,envmap_pars_fragment:ou,envmap_pars_vertex:lu,envmap_physical_pars_fragment:vu,envmap_vertex:cu,fog_vertex:hu,fog_pars_vertex:uu,fog_fragment:du,fog_pars_fragment:fu,gradientmap_pars_fragment:pu,lightmap_pars_fragment:mu,lights_lambert_fragment:gu,lights_lambert_pars_fragment:_u,lights_pars_begin:xu,lights_toon_fragment:yu,lights_toon_pars_fragment:Mu,lights_phong_fragment:Su,lights_phong_pars_fragment:bu,lights_physical_fragment:Eu,lights_physical_pars_fragment:Tu,lights_fragment_begin:wu,lights_fragment_maps:Au,lights_fragment_end:Cu,lightprobes_pars_fragment:Ru,logdepthbuf_fragment:Iu,logdepthbuf_pars_fragment:Pu,logdepthbuf_pars_vertex:Lu,logdepthbuf_vertex:Du,map_fragment:Nu,map_pars_fragment:Uu,map_particle_fragment:Fu,map_particle_pars_fragment:Ou,metalnessmap_fragment:Bu,metalnessmap_pars_fragment:zu,morphinstance_vertex:Vu,morphcolor_vertex:ku,morphnormal_vertex:Gu,morphtarget_pars_vertex:Hu,morphtarget_vertex:Wu,normal_fragment_begin:Xu,normal_fragment_maps:qu,normal_pars_fragment:Yu,normal_pars_vertex:Zu,normal_vertex:Ju,normalmap_pars_fragment:$u,clearcoat_normal_fragment_begin:Ku,clearcoat_normal_fragment_maps:Qu,clearcoat_pars_fragment:ju,iridescence_pars_fragment:td,opaque_fragment:ed,packing:nd,premultiplied_alpha_fragment:id,project_vertex:sd,dithering_fragment:rd,dithering_pars_fragment:ad,roughnessmap_fragment:od,roughnessmap_pars_fragment:ld,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:hd,shadowmap_vertex:ud,shadowmask_pars_fragment:dd,skinbase_vertex:fd,skinning_pars_vertex:pd,skinning_vertex:md,skinnormal_vertex:gd,specularmap_fragment:_d,specularmap_pars_fragment:xd,tonemapping_fragment:vd,tonemapping_pars_fragment:yd,transmission_fragment:Md,transmission_pars_fragment:Sd,uv_pars_fragment:bd,uv_pars_vertex:Ed,uv_vertex:Td,worldpos_vertex:wd,background_vert:Ad,background_frag:Cd,backgroundCube_vert:Rd,backgroundCube_frag:Id,cube_vert:Pd,cube_frag:Ld,depth_vert:Dd,depth_frag:Nd,distance_vert:Ud,distance_frag:Fd,equirect_vert:Od,equirect_frag:Bd,linedashed_vert:zd,linedashed_frag:Vd,meshbasic_vert:kd,meshbasic_frag:Gd,meshlambert_vert:Hd,meshlambert_frag:Wd,meshmatcap_vert:Xd,meshmatcap_frag:qd,meshnormal_vert:Yd,meshnormal_frag:Zd,meshphong_vert:Jd,meshphong_frag:$d,meshphysical_vert:Kd,meshphysical_frag:Qd,meshtoon_vert:jd,meshtoon_frag:tf,points_vert:ef,points_frag:nf,shadow_vert:sf,shadow_frag:rf,sprite_vert:af,sprite_frag:of},pt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Mn={basic:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ne([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ne([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ne([pt.points,pt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ne([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ne([pt.common,pt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ne([pt.sprite,pt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Ne([pt.common,pt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Ne([pt.lights,pt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Mn.physical={uniforms:Ne([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var La={r:0,b:0,g:0},lf=new pe,Bc=new Dt;Bc.set(-1,0,0,0,1,0,0,0,1);function cf(i,t,e,n,s,r){let a=new Ft(0),o=s===!0?0:1,c,l,d=null,m=0,h=null;function p(E){let L=E.isScene===!0?E.background:null;if(L&&L.isTexture){let M=E.backgroundBlurriness>0;L=t.get(L,M)}return L}function v(E){let L=!1,M=p(E);M===null?g(a,o):M&&M.isColor&&(g(M,1),L=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,L){let M=p(L);M&&(M.isCubeTexture||M.mapping===ws)?(l===void 0&&(l=new se(new Xn(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:fi(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(lf.makeRotationFromEuler(L.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Bc),l.material.toneMapped=Xt.getTransfer(M.colorSpace)!==jt,(d!==M||m!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,m=M.version,h=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new se(new vs(2,2),new Ye({name:"BackgroundMaterial",uniforms:fi(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(M.colorSpace)!==jt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||m!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,m=M.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,L){E.getRGB(La,ko(i)),e.buffers.color.setClear(La.r,La.g,La.b,L,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,L=1){a.set(E),o=L,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(a,o)},render:v,addToRenderList:y,dispose:u}}function hf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(F,B,G,D,H){let $=!1,Y=m(F,D,G,B);r!==Y&&(r=Y,l(r.object)),$=p(F,D,G,H),$&&v(F,D,G,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(F,B,G,D),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function d(F){return i.deleteVertexArray(F)}function m(F,B,G,D){let H=D.wireframe===!0,$=n[B.id];$===void 0&&($={},n[B.id]=$);let Y=F.isInstancedMesh===!0?F.id:0,rt=$[Y];rt===void 0&&(rt={},$[Y]=rt);let J=rt[G.id];J===void 0&&(J={},rt[G.id]=J);let nt=J[H];return nt===void 0&&(nt=h(c()),J[H]=nt),nt}function h(F){let B=[],G=[],D=[];for(let H=0;H<e;H++)B[H]=0,G[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:D,object:F,attributes:{},index:null}}function p(F,B,G,D){let H=r.attributes,$=B.attributes,Y=0,rt=G.getAttributes();for(let J in rt)if(rt[J].location>=0){let st=H[J],At=$[J];if(At===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(At=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(At=F.instanceColor)),st===void 0||st.attribute!==At||At&&st.data!==At.data)return!0;Y++}return r.attributesNum!==Y||r.index!==D}function v(F,B,G,D){let H={},$=B.attributes,Y=0,rt=G.getAttributes();for(let J in rt)if(rt[J].location>=0){let st=$[J];st===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(st=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(st=F.instanceColor));let At={};At.attribute=st,st&&st.data&&(At.data=st.data),H[J]=At,Y++}r.attributes=H,r.attributesNum=Y,r.index=D}function y(){let F=r.newAttributes;for(let B=0,G=F.length;B<G;B++)F[B]=0}function g(F){u(F,0)}function u(F,B){let G=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;G[F]=1,D[F]===0&&(i.enableVertexAttribArray(F),D[F]=1),H[F]!==B&&(i.vertexAttribDivisor(F,B),H[F]=B)}function E(){let F=r.newAttributes,B=r.enabledAttributes;for(let G=0,D=B.length;G<D;G++)B[G]!==F[G]&&(i.disableVertexAttribArray(G),B[G]=0)}function L(F,B,G,D,H,$,Y){Y===!0?i.vertexAttribIPointer(F,B,G,H,$):i.vertexAttribPointer(F,B,G,D,H,$)}function M(F,B,G,D){y();let H=D.attributes,$=G.getAttributes(),Y=B.defaultAttributeValues;for(let rt in $){let J=$[rt];if(J.location>=0){let nt=H[rt];if(nt===void 0&&(rt==="instanceMatrix"&&F.instanceMatrix&&(nt=F.instanceMatrix),rt==="instanceColor"&&F.instanceColor&&(nt=F.instanceColor)),nt!==void 0){let st=nt.normalized,At=nt.itemSize,wt=t.get(nt);if(wt===void 0)continue;let Kt=wt.buffer,Gt=wt.type,Zt=wt.bytesPerElement,K=Gt===i.INT||Gt===i.UNSIGNED_INT||nt.gpuType===Yr;if(nt.isInterleavedBufferAttribute){let et=nt.data,vt=et.stride,Rt=nt.offset;if(et.isInstancedInterleavedBuffer){for(let gt=0;gt<J.locationSize;gt++)u(J.location+gt,et.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let gt=0;gt<J.locationSize;gt++)g(J.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let gt=0;gt<J.locationSize;gt++)L(J.location+gt,At/J.locationSize,Gt,st,vt*Zt,(Rt+At/J.locationSize*gt)*Zt,K)}else{if(nt.isInstancedBufferAttribute){for(let et=0;et<J.locationSize;et++)u(J.location+et,nt.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let et=0;et<J.locationSize;et++)g(J.location+et);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let et=0;et<J.locationSize;et++)L(J.location+et,At/J.locationSize,Gt,st,At*Zt,At/J.locationSize*et*Zt,K)}}else if(Y!==void 0){let st=Y[rt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(J.location,st);break;case 3:i.vertexAttrib3fv(J.location,st);break;case 4:i.vertexAttrib4fv(J.location,st);break;default:i.vertexAttrib1fv(J.location,st)}}}}E()}function b(){w();for(let F in n){let B=n[F];for(let G in B){let D=B[G];for(let H in D){let $=D[H];for(let Y in $)d($[Y].object),delete $[Y];delete D[H]}}delete n[F]}}function S(F){if(n[F.id]===void 0)return;let B=n[F.id];for(let G in B){let D=B[G];for(let H in D){let $=D[H];for(let Y in $)d($[Y].object),delete $[Y];delete D[H]}}delete n[F.id]}function C(F){for(let B in n){let G=n[B];for(let D in G){let H=G[D];if(H[F.id]===void 0)continue;let $=H[F.id];for(let Y in $)d($[Y].object),delete $[Y];delete H[F.id]}}}function _(F){for(let B in n){let G=n[B],D=F.isInstancedMesh===!0?F.id:0,H=G[D];if(H!==void 0){for(let $ in H){let Y=H[$];for(let rt in Y)d(Y[rt].object),delete Y[rt];delete H[$]}delete G[D],Object.keys(G).length===0&&delete n[B]}}}function w(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:E}}function uf(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),e.update(l,n,d))}function o(c,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let p=0;p<d;p++)h+=l[p];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function df(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==je&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let _=C===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==He&&C!==cn&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",d=c(l);d!==l&&(It("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let m=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:E,maxVaryings:L,maxFragmentUniforms:M,maxSamples:b,samples:S}}function ff(i){let t=this,e=null,n=0,s=!1,r=!1,a=new rn,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){let p=m.length!==0||h||n!==0||s;return s=h,n=m.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){e=d(m,h,0)},this.setState=function(m,h,p){let v=m.clippingPlanes,y=m.clipIntersection,g=m.clipShadows,u=i.get(m);if(!s||v===null||v.length===0||r&&!g)r?d(null):l();else{let E=r?0:n,L=E*4,M=u.clippingState||null;c.value=M,M=d(v,h,L,p);for(let b=0;b!==L;++b)M[b]=e[b];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(m,h,p,v){let y=m!==null?m.length:0,g=null;if(y!==0){if(g=c.value,v!==!0||g===null){let u=p+y*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<u)&&(g=new Float32Array(u));for(let L=0,M=p;L!==y;++L,M+=4)a.copy(m[L]).applyMatrix4(E,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var $i=4,pf=6,mf=20,gf=256,Us=new Hi,gc=new Ft,Xo=null,qo=0,Yo=0,Zo=!1,_f=new k,pi=new k,Na=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=_f}=r;Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=Zo,t.scissorTest=!1,Ji(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Kn||t.mapping===di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:hn,format:je,colorSpace:ls,depthBuffer:!1},s=_c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xf(r)),this._blurMaterial=yf(r,t,e),this._ggxMaterial=vf(r,t,e)}return s}_compileMaterial(t){let e=new se(new Ge,t);this._renderer.compile(e,Us)}_sceneToCubeUV(t,e,n,s,r){let c=new Le(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,p=m.toneMapping;m.getClearColor(gc),m.toneMapping=on,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new se(new Xn,new xn({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,u=!1,E=t.background;E?E.isColor&&(g.color.copy(E),t.background=null,u=!0):(g.color.copy(gc),u=!0);for(let L=0;L<6;L++){let M=L%3;M===0?(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[L],r.y,r.z)):M===1?(c.up.set(0,0,l[L]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[L],r.z)):(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[L]));let b=this._cubeSize;Ji(s,M*b,L>2?b:0,b,b),m.setRenderTarget(s),u&&m.render(y,c),m.render(t,c)}m.toneMapping=p,m.autoClear=h,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Kn||t.mapping===di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Ji(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Us)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),m=Math.sqrt(l*l-d*d),h=l*1.25,p=m*h,{_lodMax:v}=this,y=this._sizeLods[n],g=3*y*(n>v-$i?n-v+$i:0),u=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=v-e,Ji(r,g,u,3*y,2*y),s.setRenderTarget(r),s.render(o,Us),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-n,Ji(t,g,u,3*y,2*y),s.setRenderTarget(t),s.render(o,Us)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],m=3*d*(s>this._lodMax-$i?s-this._lodMax+$i:0),h=4*(this._cubeSize-d);Ji(e,m,h,3*d,2*d),a.setRenderTarget(e),a.render(c,Us)}};function xf(i){let t=[],e=[],n=i,s=i-$i+1+pf;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],m=6,h=6,p=3,v=new Float32Array(p*h*m),y=new Float32Array(p*h*m);for(let u=0;u<m;u++){let E=u%3*2/3-1,L=u>2?0:-1,M=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];v.set(M,p*h*u);for(let b=0;b<h;b++){let S=d[b*2]*2-1,C=d[b*2+1]*2-1;u===0?pi.set(1,C,S):u===1?pi.set(-S,1,-C):u===2?pi.set(-S,C,1):u===3?pi.set(-1,C,-S):u===4?pi.set(-S,-1,C):pi.set(S,C,-1),pi.toArray(y,(u*h+b)*p)}}let g=new Ge;g.setAttribute("position",new Ke(v,p)),g.setAttribute("outputDirection",new Ke(y,p)),e.push(new se(g,null)),n>$i&&n--}return{lodMeshes:e,sizeLods:t}}function _c(i,t,e){let n=new ke(i,t,e);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vf(i,t,e){return new Ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function yf(i,t,e){return new Ye({name:"SphericalGaussianBlur",defines:{SAMPLES:mf,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function xc(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function vc(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ua=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:vn});r.uniforms.tEquirect.value=e;let a=new se(s,r),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Ae),new Gr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Mf(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Wr||p===Xr)if(t.has(h)){let v=t.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let y=new Ua(v.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,v=p===Wr||p===Xr,y=p===Kn||p===di;if(v||y){let g=e.get(h),u=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new Na(i)),g=v?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let E=h.image;return v&&E&&E.height>0||y&&E&&c(E)?(n===null&&(n=new Na(i)),g=v?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function o(h,p){return p===Wr?h.mapping=Kn:p===Xr&&(h.mapping=di),h}function c(h){let p=0,v=6;for(let y=0;y<v;y++)h[y]!==void 0&&p++;return p===v}function l(h){let p=h.target;p.removeEventListener("dispose",l);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(h){let p=h.target;p.removeEventListener("dispose",d);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Sf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&hi("WebGLRenderer: "+n+" extension not supported."),s}}}function bf(i,t,e,n){let s={},r=new WeakMap;function a(m){let h=m.target;h.index!==null&&t.remove(h.index);for(let v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(m,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(m){let h=m.attributes;for(let p in h)t.update(h[p],i.ARRAY_BUFFER)}function l(m){let h=[],p=m.index,v=m.attributes.position,y=0;if(v===void 0)return;if(p!==null){let E=p.array;y=p.version;for(let L=0,M=E.length;L<M;L+=3){let b=E[L+0],S=E[L+1],C=E[L+2];h.push(b,S,S,C,C,b)}}else{let E=v.array;y=v.version;for(let L=0,M=E.length/3-1;L<M;L+=3){let b=L+0,S=L+1,C=L+2;h.push(b,S,S,C,C,b)}}let g=new(v.count>=65535?ms:ps)(h,1);g.version=y;let u=r.get(m);u&&t.remove(u),r.set(m,g)}function d(m){let h=r.get(m);if(h){let p=m.index;p!==null&&h.version<p.version&&l(m)}else l(m);return r.get(m)}return{get:o,update:c,getWireframeAttribute:d}}function Ef(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function c(m,h){i.drawElements(n,h,r,m*a),e.update(h,n,1)}function l(m,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,m*a,p),e.update(h,n,p))}function d(m,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,p);let y=0;for(let g=0;g<p;g++)y+=h[g];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Tf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wf(i,t,e){let n=new WeakMap,s=new fe;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==m){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],L=0;p===!0&&(L=1),v===!0&&(L=2),y===!0&&(L=3);let M=o.attributes.position.count*L,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let S=new Float32Array(M*b*4*m),C=new us(S,M,b,m);C.type=cn,C.needsUpdate=!0;let _=L*4;for(let R=0;R<m;R++){let F=g[R],B=u[R],G=E[R],D=M*b*4*R;for(let H=0;H<F.count;H++){let $=H*_;p===!0&&(s.fromBufferAttribute(F,H),S[D+$+0]=s.x,S[D+$+1]=s.y,S[D+$+2]=s.z,S[D+$+3]=0),v===!0&&(s.fromBufferAttribute(B,H),S[D+$+4]=s.x,S[D+$+5]=s.y,S[D+$+6]=s.z,S[D+$+7]=0),y===!0&&(s.fromBufferAttribute(G,H),S[D+$+8]=s.x,S[D+$+9]=s.y,S[D+$+10]=s.z,S[D+$+11]=G.itemSize===4?s.w:1)}}h={count:m,texture:C,size:new Wt(M,b)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Af(i,t,e,n,s){let r=new WeakMap;function a(l){let d=s.render.frame,m=l.geometry,h=t.get(l,m);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return h}function o(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}var Cf={[Eo]:"LINEAR_TONE_MAPPING",[To]:"REINHARD_TONE_MAPPING",[wo]:"CINEON_TONE_MAPPING",[Ao]:"ACES_FILMIC_TONE_MAPPING",[Ro]:"AGX_TONE_MAPPING",[Io]:"NEUTRAL_TONE_MAPPING",[Co]:"CUSTOM_TONE_MAPPING"};function Rf(i,t,e,n,s,r){let a=new ke(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ge;l.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new de([0,2,0,0,2,0],2));let d=new Cr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new se(l,d),h=new Hi(-1,1,1,-1,0,1),p=null,v=null,y=!1,g,u=null,E=[],L=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),c!==null&&c.setSize(M,b);for(let S=0;S<E.length;S++){let C=E[S];C.setSize&&C.setSize(M,b)}},this.setEffects=function(M){E=M,L=E.length>0&&E[0].isRenderPass===!0;let b=a.width,S=a.height;E.length>0&&o===null&&(o=new ke(b,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}),c=new ke(b,S,{type:hn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<E.length;C++){let _=E[C];_.setSize&&_.setSize(b,S)}},this.begin=function(M,b){if(y||M.toneMapping===on&&E.length===0)return!1;if(u=b,b!==null){let S=b.width,C=b.height;(a.width!==S||a.height!==C)&&this.setSize(S,C)}return L===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=on,!0},this.hasRenderPass=function(){return L},this.end=function(M,b){M.toneMapping=g,y=!0;let S=a,C=o;for(let _=0;_<E.length;_++){let w=E[_];w.enabled!==!1&&(w.render(M,C,S,b),w.needsSwap!==!1&&(S=C,C=C===o?c:o))}if(p!==M.outputColorSpace||v!==M.toneMapping){p=M.outputColorSpace,v=M.toneMapping,d.defines={},Xt.getTransfer(p)===jt&&(d.defines.SRGB_TRANSFER="");let _=Cf[v];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(u),M.render(m,h),u=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var zc=new Ve,Ko=new Wn(1,1),Vc=new us,kc=new Er,Gc=new gs,yc=[],Mc=[],Sc=new Float32Array(16),bc=new Float32Array(9),Ec=new Float32Array(4);function Qi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=yc[s];if(r===void 0&&(r=new Float32Array(s),yc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ba(i,t){let e=Mc[t];e===void 0&&(e=new Int32Array(t),Mc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function If(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function Lf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Df(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Nf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;Ec.set(n),i.uniformMatrix2fv(this.addr,!1,Ec),Ee(e,n)}}function Uf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;bc.set(n),i.uniformMatrix3fv(this.addr,!1,bc),Ee(e,n)}}function Ff(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;Sc.set(n),i.uniformMatrix4fv(this.addr,!1,Sc),Ee(e,n)}}function Of(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function zf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Vf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function kf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Wf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Xf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ko.compareFunction=e.isReversedDepthBuffer()?Pa:Ia,r=Ko):r=zc,e.setTexture2D(t||r,s)}function qf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kc,s)}function Yf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gc,s)}function Zf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vc,s)}function Jf(i){switch(i){case 5126:return If;case 35664:return Pf;case 35665:return Lf;case 35666:return Df;case 35674:return Nf;case 35675:return Uf;case 35676:return Ff;case 5124:case 35670:return Of;case 35667:case 35671:return Bf;case 35668:case 35672:return zf;case 35669:case 35673:return Vf;case 5125:return kf;case 36294:return Gf;case 36295:return Hf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Yf;case 36289:case 36303:case 36311:case 36292:return Zf}}function $f(i,t){i.uniform1fv(this.addr,t)}function Kf(i,t){let e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function Qf(i,t){let e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function jf(i,t){let e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function tp(i,t){let e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ep(i,t){let e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function np(i,t){let e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ip(i,t){i.uniform1iv(this.addr,t)}function sp(i,t){i.uniform2iv(this.addr,t)}function rp(i,t){i.uniform3iv(this.addr,t)}function ap(i,t){i.uniform4iv(this.addr,t)}function op(i,t){i.uniform1uiv(this.addr,t)}function lp(i,t){i.uniform2uiv(this.addr,t)}function cp(i,t){i.uniform3uiv(this.addr,t)}function hp(i,t){i.uniform4uiv(this.addr,t)}function up(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ko:a=zc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function dp(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kc,r[a])}function fp(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gc,r[a])}function pp(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vc,r[a])}function mp(i){switch(i){case 5126:return $f;case 35664:return Kf;case 35665:return Qf;case 35666:return jf;case 35674:return tp;case 35675:return ep;case 35676:return np;case 5124:case 35670:return ip;case 35667:case 35671:return sp;case 35668:case 35672:return rp;case 35669:case 35673:return ap;case 5125:return op;case 36294:return lp;case 36295:return cp;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return pp}}var Qo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jf(e.type)}},jo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mp(e.type)}},tl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Jo=/(\w+)(\])?(\[|\.)?/g;function Tc(i,t){i.seq.push(t),i.map[t.id]=t}function gp(i,t,e){let n=i.name,s=n.length;for(Jo.lastIndex=0;;){let r=Jo.exec(n),a=Jo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Tc(e,l===void 0?new Qo(o,i,t):new jo(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new tl(o),Tc(e,m)),e=m}}}var Ki=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);gp(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function wc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _p=37297,xp=0;function vp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ac=new Dt;function yp(i){Xt._getMatrix(Ac,Xt.workingColorSpace,i);let t=`mat3( ${Ac.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case cs:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+vp(i.getShaderSource(t),o)}else return r}function Mp(i,t){let e=yp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Sp={[Eo]:"Linear",[To]:"Reinhard",[wo]:"Cineon",[Ao]:"ACESFilmic",[Ro]:"AgX",[Io]:"Neutral",[Co]:"Custom"};function bp(i,t){let e=Sp[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Da=new k;function Ep(){Xt.getLuminanceCoefficients(Da);let i=Da.x.toFixed(4),t=Da.y.toFixed(4),e=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function wp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ap(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Os(i){return i!==""}function Rc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ic(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(Cp,Ip)}var Rp=new Map;function Ip(i,t){let e=zt[t];if(e===void 0){let n=Rp.get(t);if(n!==void 0)e=zt[n],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return el(e)}var Pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(i){return i.replace(Pp,Lp)}function Lp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Dp={[Ts]:"SHADOWMAP_TYPE_PCF",[Xi]:"SHADOWMAP_TYPE_VSM"};function Np(i){return Dp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Up={[Kn]:"ENVMAP_TYPE_CUBE",[di]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE_UV"};function Fp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Up[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Op={[di]:"ENVMAP_MODE_REFRACTION"};function Bp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Op[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zp={[bo]:"ENVMAP_BLENDING_MULTIPLY",[Jl]:"ENVMAP_BLENDING_MIX",[$l]:"ENVMAP_BLENDING_ADD"};function Vp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zp[i.combine]||"ENVMAP_BLENDING_NONE"}function kp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gp(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Np(e),l=Fp(e),d=Bp(e),m=Vp(e),h=kp(e),p=Tp(e),v=wp(r),y=s.createProgram(),g,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Os).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Os).join(`
`),u.length>0&&(u+=`
`)):(g=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),u=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==on?"#define TONE_MAPPING":"",e.toneMapping!==on?zt.tonemapping_pars_fragment:"",e.toneMapping!==on?bp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Mp("linearToOutputTexel",e.outputColorSpace),Ep(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=el(a),a=Rc(a,e),a=Ic(a,e),o=el(o),o=Rc(o,e),o=Ic(o,e),a=Pc(a),o=Pc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",e.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let L=E+g+a,M=E+u+o,b=wc(s,s.VERTEX_SHADER,L),S=wc(s,s.FRAGMENT_SHADER,M);s.attachShader(y,b),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(F){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(S)||"",H=B.trim(),$=G.trim(),Y=D.trim(),rt=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,S);else{let nt=Cc(s,b,"vertex"),st=Cc(s,S,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+H+`
`+nt+`
`+st)}else H!==""?It("WebGLProgram: Program Info Log:",H):($===""||Y==="")&&(J=!1);J&&(F.diagnostics={runnable:rt,programLog:H,vertexShader:{log:$,prefix:g},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(b),s.deleteShader(S),_=new Ki(s,y),w=Ap(s,y)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,_p)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xp++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=S,this}var Hp=0,nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new il(t),e.set(t,n)),n}},il=class{constructor(t){this.id=Hp++,this.code=t,this.usedTimes=0}};function Wp(i){return i===ti||i===Ls||i===Ds}function Xp(i,t,e,n,s,r){let a=new ds,o=new nl,c=new Set,l=[],d=new Map,m=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,w,R,F,B,G){let D=F.fog,H=B.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,rt=t.get(_.envMap||$,Y),J=rt&&rt.mapping===ws?rt.image.height:null,nt=p[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&It("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,At=st!==void 0?st.length:0,wt=0;H.morphAttributes.position!==void 0&&(wt=1),H.morphAttributes.normal!==void 0&&(wt=2),H.morphAttributes.color!==void 0&&(wt=3);let Kt,Gt,Zt,K;if(nt){let Ut=Mn[nt];Kt=Ut.vertexShader,Gt=Ut.fragmentShader}else{Kt=_.vertexShader,Gt=_.fragmentShader;let Ut=o.getVertexShaderStage(_),kt=o.getFragmentShaderStage(_);o.update(_,Ut,kt),Zt=Ut.id,K=kt.id}let et=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Rt=B.isInstancedMesh===!0,gt=B.isBatchedMesh===!0,Lt=!!_.map,me=!!_.matcap,Ot=!!rt,Vt=!!_.aoMap,Jt=!!_.lightMap,Nt=!!_.bumpMap&&_.wireframe===!1,ne=!!_.normalMap,re=!!_.displacementMap,ve=!!_.emissiveMap,ae=!!_.metalnessMap,oe=!!_.roughnessMap,N=_.anisotropy>0,_e=_.clearcoat>0,Yt=_.dispersion>0,T=_.retroreflectivity>0,f=_.iridescence>0,O=_.sheen>0,V=_.transmission>0,Z=N&&!!_.anisotropyMap,ot=_e&&!!_.clearcoatMap,ct=_e&&!!_.clearcoatNormalMap,X=_e&&!!_.clearcoatRoughnessMap,tt=f&&!!_.iridescenceMap,ut=f&&!!_.iridescenceThicknessMap,Et=O&&!!_.sheenColorMap,dt=O&&!!_.sheenRoughnessMap,ht=!!_.specularMap,Mt=!!_.specularColorMap,Ct=!!_.specularIntensityMap,q=V&&!!_.transmissionMap,A=V&&!!_.thicknessMap,j=!!_.gradientMap,U=!!_.alphaMap,it=_.alphaTest>0,at=!!_.alphaHash,Q=!!_.extensions,ft=on;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ft=i.toneMapping);let lt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:Kt,fragmentShader:Gt,defines:_.defines,customVertexShaderID:Zt,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:gt,batchingColor:gt&&B._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&B.instanceColor!==null,instancingMorph:Rt&&B.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Lt,matcap:me,envMap:Ot,envMapMode:Ot&&rt.mapping,envMapCubeUVHeight:J,aoMap:Vt,lightMap:Jt,bumpMap:Nt,normalMap:ne,displacementMap:re,emissiveMap:ve,normalMapObjectSpace:ne&&_.normalMapType===jl,normalMapTangentSpace:ne&&_.normalMapType===Ra,packedNormalMap:ne&&_.normalMapType===Ra&&Wp(_.normalMap.format),metalnessMap:ae,roughnessMap:oe,anisotropy:N,anisotropyMap:Z,clearcoat:_e,clearcoatMap:ot,clearcoatNormalMap:ct,clearcoatRoughnessMap:X,dispersion:Yt,retroreflection:T,iridescence:f,iridescenceMap:tt,iridescenceThicknessMap:ut,sheen:O,sheenColorMap:Et,sheenRoughnessMap:dt,specularMap:ht,specularColorMap:Mt,specularIntensityMap:Ct,transmission:V,transmissionMap:q,thicknessMap:A,gradientMap:j,opaque:_.transparent===!1&&_.blending===qi&&_.alphaToCoverage===!1,alphaMap:U,alphaTest:it,alphaHash:at,combine:_.combine,mapUv:Lt&&v(_.map.channel),aoMapUv:Vt&&v(_.aoMap.channel),lightMapUv:Jt&&v(_.lightMap.channel),bumpMapUv:Nt&&v(_.bumpMap.channel),normalMapUv:ne&&v(_.normalMap.channel),displacementMapUv:re&&v(_.displacementMap.channel),emissiveMapUv:ve&&v(_.emissiveMap.channel),metalnessMapUv:ae&&v(_.metalnessMap.channel),roughnessMapUv:oe&&v(_.roughnessMap.channel),anisotropyMapUv:Z&&v(_.anisotropyMap.channel),clearcoatMapUv:ot&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:dt&&v(_.sheenRoughnessMap.channel),specularMapUv:ht&&v(_.specularMap.channel),specularColorMapUv:Mt&&v(_.specularColorMap.channel),specularIntensityMapUv:Ct&&v(_.specularIntensityMap.channel),transmissionMapUv:q&&v(_.transmissionMap.channel),thicknessMapUv:A&&v(_.thicknessMap.channel),alphaMapUv:U&&v(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ne||N),vertexNormals:!!H.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(Lt||U),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||H.attributes.normal===void 0&&ne===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:vt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:wt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:Lt&&_.map.isVideoTexture===!0&&Xt.getTransfer(_.map.colorSpace)===jt,decodeVideoTextureEmissive:ve&&_.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(_.emissiveMap.colorSpace)===jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Qe,flipSided:_.side===Be,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Q&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&_.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function g(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(u(w,_),E(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function u(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function E(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function L(_){let w=p[_.type],R;if(w){let F=Mn[w];R=fc.clone(F.uniforms)}else R=_.uniforms;return R}function M(_,w){let R=d.get(w);return R!==void 0?++R.usedTimes:(R=new Gp(i,w,_,s),l.push(R),d.set(w,R)),R}function b(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:L,acquireProgram:M,releaseProgram:b,releaseShaderCache:S,programs:l,dispose:C}}function qp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,v,y,g,u){let E=i[t];return E===void 0?(E={id:h.id,object:h,geometry:p,material:v,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:u},i[t]=E):(E.id=h.id,E.object=h,E.geometry=p,E.material=v,E.materialVariant=a(h),E.groupOrder=y,E.renderOrder=h.renderOrder,E.z=g,E.group=u),t++,E}function c(h,p,v,y,g,u,E){E.reversedDepth===!0&&(g=-g);let L=o(h,p,v,y,g,u);v.transmission>0?n.push(L):v.transparent===!0?s.push(L):e.push(L)}function l(h,p,v,y,g,u){let E=o(h,p,v,y,g,u);v.transmission>0?n.unshift(E):v.transparent===!0?s.unshift(E):e.unshift(E)}function d(h,p){e.length>1&&e.sort(h||Yp),n.length>1&&n.sort(p||Dc),s.length>1&&s.sort(p||Dc)}function m(){for(let h=t,p=i.length;h<p;h++){let v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:m,sort:d}}function Zp(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Nc,i.set(n,[a])):s>=r.length?(a=new Nc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Ft};break;case"SpotLight":e={position:new k,direction:new k,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function $p(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Kp=0;function Qp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jp(i){let t=new Jp,e=$p(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new pe,a=new pe;function o(l){let d=0,m=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let p=0,v=0,y=0,g=0,u=0,E=0,L=0,M=0,b=0,S=0,C=0,_=0,w=0,R=0;l.sort(Qp);for(let B=0,G=l.length;B<G;B++){let D=l[B],H=D.color,$=D.intensity,Y=D.distance,rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ti?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=H.r*$,m+=H.g*$,h+=H.b*$;else if(D.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(D.sh.coefficients[J],$);R++}else if(D.isSunLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,st=e.get(D);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[v]=st,n.sunShadowMap[v]=rt;let At=nt.getViewportCount();for(let wt=0;wt<At;wt++)n.sunShadowMatrix[y+wt]=nt.getMatrix(wt),n.sunShadowCascade[y+wt]=nt._cascadeData[wt];y+=At,v++}n.sun[p]=J,p++}else if(D.isDirectionalLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,st=e.get(D);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.directionalShadow[g]=st,n.directionalShadowMap[g]=rt,n.directionalShadowMatrix[g]=D.shadow.matrix,b++}n.directional[g]=J,g++}else if(D.isSpotLight){let J=t.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(H).multiplyScalar($),J.distance=Y,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,n.spot[E]=J;let nt=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,nt.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[E]=nt.matrix,D.castShadow){let st=e.get(D);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,n.spotShadow[E]=st,n.spotShadowMap[E]=rt,C++}E++}else if(D.isRectAreaLight){let J=t.get(D);J.color.copy(H).multiplyScalar($),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),n.rectArea[L]=J,L++}else if(D.isPointLight){let J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){let nt=D.shadow,st=e.get(D);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,n.pointShadow[u]=st,n.pointShadowMap[u]=rt,n.pointShadowMatrix[u]=D.shadow.matrix,S++}n.point[u]=J,u++}else if(D.isHemisphereLight){let J=t.get(D);J.skyColor.copy(D.color).multiplyScalar($),J.groundColor.copy(D.groundColor).multiplyScalar($),n.hemi[M]=J,M++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=h;let F=n.hash;(F.sunLength!==p||F.directionalLength!==g||F.pointLength!==u||F.spotLength!==E||F.rectAreaLength!==L||F.hemiLength!==M||F.numSunShadows!==v||F.numDirectionalShadows!==b||F.numPointShadows!==S||F.numSpotShadows!==C||F.numSpotMaps!==_||F.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=g,n.spot.length=E,n.rectArea.length=L,n.point.length=u,n.hemi.length=M,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,F.sunLength=p,F.directionalLength=g,F.pointLength=u,F.spotLength=E,F.rectAreaLength=L,F.hemiLength=M,F.numSunShadows=v,F.numDirectionalShadows=b,F.numPointShadows=S,F.numSpotShadows=C,F.numSpotMaps=_,F.numLightProbes=R,n.version=Kp++)}function c(l,d){let m=0,h=0,p=0,v=0,y=0,g=0,u=d.matrixWorldInverse;for(let E=0,L=l.length;E<L;E++){let M=l[E];if(M.isSunLight){let b=n.sun[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),m++}else if(M.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),h++}else if(M.isSpotLight){let b=n.spot[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),v++}else if(M.isRectAreaLight){let b=n.rectArea[y];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),a.identity(),r.copy(M.matrixWorld),r.premultiply(u),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let b=n.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),p++}else if(M.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),g++}}}return{setup:o,setupView:c,state:n}}function Uc(i){let t=new jp(i),e=[],n=[],s=[];function r(h){m.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function d(h){t.setupView(e,h)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function tm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Uc(i),t.set(s,[o])):r>=a.length?(o=new Uc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,im=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],sm=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Fc=new pe,Fs=new k,$o=new k;function rm(i,t,e){let n=new ki,s=new Wt,r=new Wt,a=new fe,o=new Rr,c=new Ir,l={},d=e.maxTextureSize,m={[$n]:Be,[Be]:$n,[Qe]:Qe},h=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:em,fragmentShader:nm}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let v=new Ge;v.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new se(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let u=this.type;this.render=function(S,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Il&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),B=i.state;B.setBlending(vn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let G=u!==this.type;G&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=S.length;D<H;D++){let $=S[D],Y=$.shadow;if(Y===void 0){It("WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let rt=Y.getFrameExtents();s.multiply(rt),r.copy(Y.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/rt.x),s.x=r.x*rt.x,Y.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/rt.y),s.y=r.y*rt.y,Y.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=J,Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Xi){if($.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new ke(s.x,s.y,{format:ti,type:hn,minFilter:Ae,magFilter:Ae,generateMipmaps:!1}),Y.map.texture.name=$.name+".shadowMap",Y.map.depthTexture=new Wn(s.x,s.y,cn),Y.map.depthTexture.name=$.name+".shadowMapDepth",Y.map.depthTexture.format=mn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=we,Y.map.depthTexture.magFilter=we}else $.isPointLight?(Y.map=new Ua(s.x),Y.map.depthTexture=new Ar(s.x,ln)):(Y.map=new ke(s.x,s.y),Y.map.depthTexture=new Wn(s.x,s.y,ln)),Y.map.depthTexture.name=$.name+".shadowMap",Y.map.depthTexture.format=mn,this.type===Ts?(Y.map.depthTexture.compareFunction=J?Pa:Ia,Y.map.depthTexture.minFilter=Ae,Y.map.depthTexture.magFilter=Ae):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=we,Y.map.depthTexture.magFilter=we);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let nt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();$.isPointLight!==!0&&Y.updateMatrices($,_);for(let st=0;st<nt;st++){let At=Y.getCamera(st);if($.isPointLight){let wt=Y.camera,Kt=Y.matrix,Gt=$.distance||wt.far;Gt!==wt.far&&(wt.far=Gt,wt.updateProjectionMatrix()),Fs.setFromMatrixPosition($.matrixWorld),wt.position.copy(Fs),$o.copy(wt.position),$o.add(im[st]),wt.up.copy(sm[st]),wt.lookAt($o),wt.updateMatrixWorld(),Kt.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Fc.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Fc,wt.coordinateSystem,wt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,st),i.clear();else{st===0&&(i.setRenderTarget(Y.map),i.clear());let wt=Y.getViewport(st);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),B.viewport(a)}n=Y.getFrustum(st),M(C,_,At,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Xi&&E(Y,_),Y.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(w,R,F)};function E(S,C){let _=t.update(y);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new ke(s.x,s.y,{format:ti,type:hn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,_,h,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,_,p,y,null)}function L(S,C,_,w){let R=null,F=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)R=F;else if(R=_.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=R.uuid,G=C.uuid,D=l[B];D===void 0&&(D={},l[B]=D);let H=D[G];H===void 0&&(H=R.clone(),D[G]=H,C.addEventListener("dispose",b)),R=H}if(R.visible=C.visible,R.wireframe=C.wireframe,w===Xi?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:m[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=i.properties.get(R);B.light=_}return R}function M(S,C,_,w,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Xi)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let G=t.update(S),D=S.material;if(Array.isArray(D)){let H=G.groups;for(let $=0,Y=H.length;$<Y;$++){let rt=H[$],J=D[rt.materialIndex];if(J&&J.visible){let nt=L(S,J,w,R);S.onBeforeShadow(i,S,C,_,G,nt,rt),i.renderBufferDirect(_,null,G,nt,S,rt),S.onAfterShadow(i,S,C,_,G,nt,rt)}}}else if(D.visible){let H=L(S,D,w,R);S.onBeforeShadow(i,S,C,_,G,H,null),i.renderBufferDirect(_,null,G,H,S,null),S.onAfterShadow(i,S,C,_,G,H,null)}}let B=S.children;for(let G=0,D=B.length;G<D;G++)M(B[G],C,_,w,R)}function b(S){S.target.removeEventListener("dispose",b);for(let _ in l){let w=l[_],R=S.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function am(i,t){function e(){let A=!1,j=new fe,U=null,it=new fe(0,0,0,0);return{setMask:function(at){U!==at&&!A&&(i.colorMask(at,at,at,at),U=at)},setLocked:function(at){A=at},setClear:function(at,Q,ft,lt,Ut){Ut===!0&&(at*=lt,Q*=lt,ft*=lt),j.set(at,Q,ft,lt),it.equals(j)===!1&&(i.clearColor(at,Q,ft,lt),it.copy(j))},reset:function(){A=!1,U=null,it.set(-1,0,0,0)}}}function n(){let A=!1,j=!1,U=null,it=null,at=null;return{setReversed:function(Q){if(j!==Q){let ft=t.get("EXT_clip_control");Q?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),j=Q;let lt=at;at=null,this.setClear(lt)}},getReversed:function(){return j},setTest:function(Q){Q?et(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(Q){U!==Q&&!A&&(i.depthMask(Q),U=Q)},setFunc:function(Q){if(j&&(Q=uc[Q]),it!==Q){switch(Q){case ur:i.depthFunc(i.NEVER);break;case dr:i.depthFunc(i.ALWAYS);break;case fr:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case pr:i.depthFunc(i.EQUAL);break;case mr:i.depthFunc(i.GEQUAL);break;case gr:i.depthFunc(i.GREATER);break;case _r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=Q}},setLocked:function(Q){A=Q},setClear:function(Q){at!==Q&&(at=Q,j&&(Q=1-Q),i.clearDepth(Q))},reset:function(){A=!1,U=null,it=null,at=null,j=!1}}}function s(){let A=!1,j=null,U=null,it=null,at=null,Q=null,ft=null,lt=null,Ut=null;return{setTest:function(kt){A||(kt?et(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(kt){j!==kt&&!A&&(i.stencilMask(kt),j=kt)},setFunc:function(kt,Se,Ue){(U!==kt||it!==Se||at!==Ue)&&(i.stencilFunc(kt,Se,Ue),U=kt,it=Se,at=Ue)},setOp:function(kt,Se,Ue){(Q!==kt||ft!==Se||lt!==Ue)&&(i.stencilOp(kt,Se,Ue),Q=kt,ft=Se,lt=Ue)},setLocked:function(kt){A=kt},setClear:function(kt){Ut!==kt&&(i.clearStencil(kt),Ut=kt)},reset:function(){A=!1,j=null,U=null,it=null,at=null,Q=null,ft=null,lt=null,Ut=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,d={},m={},h={},p=new WeakMap,v=[],y=null,g=!1,u=null,E=null,L=null,M=null,b=null,S=null,C=null,_=new Ft(0,0,0),w=0,R=!1,F=null,B=null,G=null,D=null,H=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,rt=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=rt>=1):J.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=rt>=2);let nt=null,st={},At=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Kt=new fe().fromArray(At),Gt=new fe().fromArray(wt);function Zt(A,j,U,it){let at=new Uint8Array(4),Q=i.createTexture();i.bindTexture(A,Q),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<U;ft++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(j+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Q}let K={};K[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Ui),Nt(!1),ne(_o),et(i.CULL_FACE),Vt(vn);function et(A){d[A]!==!0&&(i.enable(A),d[A]=!0)}function vt(A){d[A]!==!1&&(i.disable(A),d[A]=!1)}function Rt(A,j){return h[A]!==j?(i.bindFramebuffer(A,j),h[A]=j,A===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=j),A===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=j),!0):!1}function gt(A,j){let U=v,it=!1;if(A){U=p.get(j),U===void 0&&(U=[],p.set(j,U));let at=A.textures;if(U.length!==at.length||U[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,ft=at.length;Q<ft;Q++)U[Q]=i.COLOR_ATTACHMENT0+Q;U.length=at.length,it=!0}}else U[0]!==i.BACK&&(U[0]=i.BACK,it=!0);it&&i.drawBuffers(U)}function Lt(A){return y!==A?(i.useProgram(A),y=A,!0):!1}let me={[ui]:i.FUNC_ADD,[Ll]:i.FUNC_SUBTRACT,[Dl]:i.FUNC_REVERSE_SUBTRACT};me[Nl]=i.MIN,me[Ul]=i.MAX;let Ot={[Fl]:i.ZERO,[Ol]:i.ONE,[Bl]:i.SRC_COLOR,[Mo]:i.SRC_ALPHA,[Wl]:i.SRC_ALPHA_SATURATE,[Gl]:i.DST_COLOR,[Vl]:i.DST_ALPHA,[zl]:i.ONE_MINUS_SRC_COLOR,[So]:i.ONE_MINUS_SRC_ALPHA,[Hl]:i.ONE_MINUS_DST_COLOR,[kl]:i.ONE_MINUS_DST_ALPHA,[Xl]:i.CONSTANT_COLOR,[ql]:i.ONE_MINUS_CONSTANT_COLOR,[Yl]:i.CONSTANT_ALPHA,[Zl]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(A,j,U,it,at,Q,ft,lt,Ut,kt){if(A===vn){g===!0&&(vt(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),A!==Pl){if(A!==u||kt!==R){if((E!==ui||b!==ui)&&(i.blendEquation(i.FUNC_ADD),E=ui,b=ui),kt)switch(A){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.ONE,i.ONE);break;case vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",A);break}else switch(A){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vo:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yo:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",A);break}L=null,M=null,S=null,C=null,_.set(0,0,0),w=0,u=A,R=kt}return}at=at||j,Q=Q||U,ft=ft||it,(j!==E||at!==b)&&(i.blendEquationSeparate(me[j],me[at]),E=j,b=at),(U!==L||it!==M||Q!==S||ft!==C)&&(i.blendFuncSeparate(Ot[U],Ot[it],Ot[Q],Ot[ft]),L=U,M=it,S=Q,C=ft),(lt.equals(_)===!1||Ut!==w)&&(i.blendColor(lt.r,lt.g,lt.b,Ut),_.copy(lt),w=Ut),u=A,R=!1}function Jt(A,j){A.side===Qe?vt(i.CULL_FACE):et(i.CULL_FACE);let U=A.side===Be;j&&(U=!U),Nt(U),A.blending===qi&&A.transparent===!1?Vt(vn):Vt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);let it=A.stencilWrite;o.setTest(it),it&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ve(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(A){F!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),F=A)}function ne(A){A!==Cl?(et(i.CULL_FACE),A!==B&&(A===_o?i.cullFace(i.BACK):A===Rl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),B=A}function re(A){A!==G&&(Y&&i.lineWidth(A),G=A)}function ve(A,j,U){A?(et(i.POLYGON_OFFSET_FILL),(D!==j||H!==U)&&(D=j,H=U,a.getReversed()&&(j=-j),i.polygonOffset(j,U))):vt(i.POLYGON_OFFSET_FILL)}function ae(A){A?et(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function oe(A){A===void 0&&(A=i.TEXTURE0+$-1),nt!==A&&(i.activeTexture(A),nt=A)}function N(A,j,U){U===void 0&&(nt===null?U=i.TEXTURE0+$-1:U=nt);let it=st[U];it===void 0&&(it={type:void 0,texture:void 0},st[U]=it),(it.type!==A||it.texture!==j)&&(nt!==U&&(i.activeTexture(U),nt=U),i.bindTexture(A,j||K[A]),it.type=A,it.texture=j)}function _e(){let A=st[nt];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(A){Pt("WebGLState:",A)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(A){Pt("WebGLState:",A)}}function f(){try{i.texSubImage2D(...arguments)}catch(A){Pt("WebGLState:",A)}}function O(){try{i.texSubImage3D(...arguments)}catch(A){Pt("WebGLState:",A)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(A){Pt("WebGLState:",A)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(A){Pt("WebGLState:",A)}}function ot(){try{i.texStorage2D(...arguments)}catch(A){Pt("WebGLState:",A)}}function ct(){try{i.texStorage3D(...arguments)}catch(A){Pt("WebGLState:",A)}}function X(){try{i.texImage2D(...arguments)}catch(A){Pt("WebGLState:",A)}}function tt(){try{i.texImage3D(...arguments)}catch(A){Pt("WebGLState:",A)}}function ut(A){return m[A]!==void 0?m[A]:i.getParameter(A)}function Et(A,j){m[A]!==j&&(i.pixelStorei(A,j),m[A]=j)}function dt(A){Kt.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),Kt.copy(A))}function ht(A){Gt.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),Gt.copy(A))}function Mt(A,j){let U=l.get(j);U===void 0&&(U=new WeakMap,l.set(j,U));let it=U.get(A);it===void 0&&(it=i.getUniformBlockIndex(j,A.name),U.set(A,it))}function Ct(A,j){let it=l.get(j).get(A);c.get(j)!==it&&(i.uniformBlockBinding(j,it,A.__bindingPointIndex),c.set(j,it))}function q(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},nt=null,st={},h={},p=new WeakMap,v=[],y=null,g=!1,u=null,E=null,L=null,M=null,b=null,S=null,C=null,_=new Ft(0,0,0),w=0,R=!1,F=null,B=null,G=null,D=null,H=null,Kt.set(0,0,i.canvas.width,i.canvas.height),Gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:vt,bindFramebuffer:Rt,drawBuffers:gt,useProgram:Lt,setBlending:Vt,setMaterial:Jt,setFlipSided:Nt,setCullFace:ne,setLineWidth:re,setPolygonOffset:ve,setScissorTest:ae,activeTexture:oe,bindTexture:N,unbindTexture:_e,compressedTexImage2D:Yt,compressedTexImage3D:T,texImage2D:X,texImage3D:tt,pixelStorei:Et,getParameter:ut,updateUBOMapping:Mt,uniformBlockBinding:Ct,texStorage2D:ot,texStorage3D:ct,texSubImage2D:f,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:dt,viewport:ht,reset:q}}function om(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,d=new WeakMap,m=new Set,h,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,f){return v?new OffscreenCanvas(T,f):hs("canvas")}function g(T,f,O){let V=1,Z=Yt(T);if((Z.width>O||Z.height>O)&&(V=O/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ot=Math.floor(V*Z.width),ct=Math.floor(V*Z.height);h===void 0&&(h=y(ot,ct));let X=f?y(ot,ct):h;return X.width=ot,X.height=ct,X.getContext("2d").drawImage(T,0,0,ot,ct),It("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ot+"x"+ct+")."),X}else return"data"in T&&It("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function u(T){return T.generateMipmaps}function E(T){i.generateMipmap(T)}function L(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,f,O,V,Z,ot=!1){if(T!==null){if(i[T]!==void 0)return i[T];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ct;V&&(ct=t.get("EXT_texture_norm16"),ct||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=f;if(f===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8),O===i.UNSIGNED_SHORT&&ct&&(X=ct.R16_EXT),O===i.SHORT&&ct&&(X=ct.R16_SNORM_EXT)),f===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),f===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8),O===i.UNSIGNED_SHORT&&ct&&(X=ct.RG16_EXT),O===i.SHORT&&ct&&(X=ct.RG16_SNORM_EXT)),f===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),f===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),f===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),f===i.RGB&&(O===i.UNSIGNED_SHORT&&ct&&(X=ct.RGB16_EXT),O===i.SHORT&&ct&&(X=ct.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),f===i.RGBA){let tt=ot?cs:Xt.getTransfer(Z);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=tt===jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ct&&(X=ct.RGBA16_EXT),O===i.SHORT&&ct&&(X=ct.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function b(T,f){let O;return T?f===null||f===ln||f===Zi?O=i.DEPTH24_STENCIL8:f===cn?O=i.DEPTH32F_STENCIL8:f===Yi&&(O=i.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===ln||f===Zi?O=i.DEPTH_COMPONENT24:f===cn?O=i.DEPTH_COMPONENT32F:f===Yi&&(O=i.DEPTH_COMPONENT16),O}function S(T,f){return u(T)===!0||T.isFramebufferTexture&&T.minFilter!==we&&T.minFilter!==Ae?Math.log2(Math.max(f.width,f.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?f.mipmaps.length:1}function C(T){let f=T.target;f.removeEventListener("dispose",C),w(f),f.isVideoTexture&&d.delete(f),f.isHTMLTexture&&m.delete(f)}function _(T){let f=T.target;f.removeEventListener("dispose",_),F(f)}function w(T){let f=n.get(T);if(f.__webglInit===void 0)return;let O=T.source,V=p.get(O);if(V){let Z=V[f.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(T),Object.keys(V).length===0&&p.delete(O)}n.remove(T)}function R(T){let f=n.get(T);i.deleteTexture(f.__webglTexture);let O=T.source,V=p.get(O);delete V[f.__cacheKey],a.memory.textures--}function F(T){let f=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(f.__webglFramebuffer[V]))for(let Z=0;Z<f.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(f.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(f.__webglFramebuffer[V]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[V])}else{if(Array.isArray(f.__webglFramebuffer))for(let V=0;V<f.__webglFramebuffer.length;V++)i.deleteFramebuffer(f.__webglFramebuffer[V]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let V=0;V<f.__webglColorRenderbuffer.length;V++)f.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[V]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}let O=T.textures;for(let V=0,Z=O.length;V<Z;V++){let ot=n.get(O[V]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(T)}let B=0;function G(){B=0}function D(){return B}function H(T){B=T}function $(){let T=B;return T>=s.maxTextures&&It("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,T}function Y(T){let f=[];return f.push(T.wrapS),f.push(T.wrapT),f.push(T.wrapR||0),f.push(T.magFilter),f.push(T.minFilter),f.push(T.anisotropy),f.push(T.internalFormat),f.push(T.format),f.push(T.type),f.push(T.generateMipmaps),f.push(T.premultiplyAlpha),f.push(T.flipY),f.push(T.unpackAlignment),f.push(T.colorSpace),f.join()}function rt(T,f){let O=n.get(T);if(T.isVideoTexture&&N(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let V=T.image;if(V===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(O,T,f);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+f)}function J(T,f){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){vt(O,T,f);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+f)}function nt(T,f){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){vt(O,T,f);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+f)}function st(T,f){let O=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){Rt(O,T,f);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+f)}let At={[xr]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[vr]:i.MIRRORED_REPEAT},wt={[we]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[Ae]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Kt={[ec]:i.NEVER,[ac]:i.ALWAYS,[nc]:i.LESS,[Ia]:i.LEQUAL,[ic]:i.EQUAL,[Pa]:i.GEQUAL,[sc]:i.GREATER,[rc]:i.NOTEQUAL};function Gt(T,f){if(f.type===cn&&t.has("OES_texture_float_linear")===!1&&(f.magFilter===Ae||f.magFilter===qr||f.magFilter===As||f.magFilter===Qn||f.minFilter===Ae||f.minFilter===qr||f.minFilter===As||f.minFilter===Qn)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,At[f.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,At[f.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,At[f.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,wt[f.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,wt[f.minFilter]),f.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Kt[f.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===we||f.minFilter!==As&&f.minFilter!==Qn||f.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,s.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function Zt(T,f){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,f.addEventListener("dispose",C));let V=f.source,Z=p.get(V);Z===void 0&&(Z={},p.set(V,Z));let ot=Y(f);if(ot!==T.__cacheKey){Z[ot]===void 0&&(Z[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[ot].usedTimes++;let ct=Z[T.__cacheKey];ct!==void 0&&(Z[T.__cacheKey].usedTimes--,ct.usedTimes===0&&R(f)),T.__cacheKey=ot,T.__webglTexture=Z[ot].texture}return O}function K(T,f,O){return Math.floor(Math.floor(T/O)/f)}function et(T,f,O,V){let ot=T.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,O,V,f.data);else{ot.sort((Et,dt)=>Et.start-dt.start);let ct=0;for(let Et=1;Et<ot.length;Et++){let dt=ot[ct],ht=ot[Et],Mt=dt.start+dt.count,Ct=K(ht.start,f.width,4),q=K(dt.start,f.width,4);ht.start<=Mt+1&&Ct===q&&K(ht.start+ht.count-1,f.width,4)===Ct?dt.count=Math.max(dt.count,ht.start+ht.count-dt.start):(++ct,ot[ct]=ht)}ot.length=ct+1;let X=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let Et=0,dt=ot.length;Et<dt;Et++){let ht=ot[Et],Mt=Math.floor(ht.start/4),Ct=Math.ceil(ht.count/4),q=Mt%f.width,A=Math.floor(Mt/f.width),j=Ct,U=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,q),e.pixelStorei(i.UNPACK_SKIP_ROWS,A),e.texSubImage2D(i.TEXTURE_2D,0,q,A,j,U,O,V,f.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,X),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function vt(T,f,O){let V=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&(V=i.TEXTURE_3D);let Z=Zt(T,f),ot=f.source;e.bindTexture(V,T.__webglTexture,i.TEXTURE0+O);let ct=n.get(ot);if(ot.version!==ct.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)===!1){let U=Xt.getPrimaries(Xt.workingColorSpace),it=f.colorSpace===Pn?null:Xt.getPrimaries(f.colorSpace),at=f.colorSpace===Pn||U===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment);let tt=g(f.image,!1,s.maxTextureSize);tt=_e(f,tt);let ut=r.convert(f.format,f.colorSpace),Et=r.convert(f.type),dt=M(f.internalFormat,ut,Et,f.normalized,f.colorSpace,f.isVideoTexture);Gt(V,f);let ht,Mt=f.mipmaps,Ct=f.isVideoTexture!==!0,q=ct.__version===void 0||Z===!0,A=ot.dataReady,j=S(f,tt);if(f.isDepthTexture)dt=b(f.format===jn,f.type),q&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,dt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,dt,tt.width,tt.height,0,ut,Et,null));else if(f.isDataTexture)if(Mt.length>0){Ct&&q&&e.texStorage2D(i.TEXTURE_2D,j,dt,Mt[0].width,Mt[0].height);for(let U=0,it=Mt.length;U<it;U++)ht=Mt[U],Ct?A&&e.texSubImage2D(i.TEXTURE_2D,U,0,0,ht.width,ht.height,ut,Et,ht.data):e.texImage2D(i.TEXTURE_2D,U,dt,ht.width,ht.height,0,ut,Et,ht.data);f.generateMipmaps=!1}else Ct?(q&&e.texStorage2D(i.TEXTURE_2D,j,dt,tt.width,tt.height),A&&et(f,tt,ut,Et)):e.texImage2D(i.TEXTURE_2D,0,dt,tt.width,tt.height,0,ut,Et,tt.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){Ct&&q&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,dt,Mt[0].width,Mt[0].height,tt.depth);for(let U=0,it=Mt.length;U<it;U++)if(ht=Mt[U],f.format!==je)if(ut!==null)if(Ct){if(A)if(f.layerUpdates.size>0){let at=Wo(ht.width,ht.height,f.format,f.type);for(let Q of f.layerUpdates){let ft=ht.data.subarray(Q*at/ht.data.BYTES_PER_ELEMENT,(Q+1)*at/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,Q,ht.width,ht.height,1,ut,ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,ht.width,ht.height,tt.depth,ut,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,U,dt,ht.width,ht.height,tt.depth,0,ht.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?A&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,ht.width,ht.height,tt.depth,ut,Et,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,U,dt,ht.width,ht.height,tt.depth,0,ut,Et,ht.data);f.layerUpdates.size>0&&f.clearLayerUpdates()}else{Ct&&q&&e.texStorage2D(i.TEXTURE_2D,j,dt,Mt[0].width,Mt[0].height);for(let U=0,it=Mt.length;U<it;U++)ht=Mt[U],f.format!==je?ut!==null?Ct?A&&e.compressedTexSubImage2D(i.TEXTURE_2D,U,0,0,ht.width,ht.height,ut,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,U,dt,ht.width,ht.height,0,ht.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?A&&e.texSubImage2D(i.TEXTURE_2D,U,0,0,ht.width,ht.height,ut,Et,ht.data):e.texImage2D(i.TEXTURE_2D,U,dt,ht.width,ht.height,0,ut,Et,ht.data)}else if(f.isDataArrayTexture)if(Ct){if(q&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,dt,tt.width,tt.height,tt.depth),A)if(f.layerUpdates.size>0){let U=Wo(tt.width,tt.height,f.format,f.type);for(let it of f.layerUpdates){let at=tt.data.subarray(it*U/tt.data.BYTES_PER_ELEMENT,(it+1)*U/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,tt.width,tt.height,1,ut,Et,at)}f.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,Et,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,tt.width,tt.height,tt.depth,0,ut,Et,tt.data);else if(f.isData3DTexture)Ct?(q&&e.texStorage3D(i.TEXTURE_3D,j,dt,tt.width,tt.height,tt.depth),A&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,Et,tt.data)):e.texImage3D(i.TEXTURE_3D,0,dt,tt.width,tt.height,tt.depth,0,ut,Et,tt.data);else if(f.isFramebufferTexture){if(q)if(Ct)e.texStorage2D(i.TEXTURE_2D,j,dt,tt.width,tt.height);else{let U=tt.width,it=tt.height;for(let at=0;at<j;at++)e.texImage2D(i.TEXTURE_2D,at,dt,U,it,0,ut,Et,null),U>>=1,it>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in i){let U=i.canvas;if(U.hasAttribute("layoutsubtree")||U.setAttribute("layoutsubtree","true"),tt.parentNode!==U){U.appendChild(tt),m.add(f),U.onpaint=it=>{let at=it.changedElements;for(let Q of m)at.includes(Q.image)&&(Q.needsUpdate=!0)},U.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let at=i.RGBA,Q=i.RGBA,ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,at,Q,ft,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(Ct&&q){let U=Yt(Mt[0]);e.texStorage2D(i.TEXTURE_2D,j,dt,U.width,U.height)}for(let U=0,it=Mt.length;U<it;U++)ht=Mt[U],Ct?A&&e.texSubImage2D(i.TEXTURE_2D,U,0,0,ut,Et,ht):e.texImage2D(i.TEXTURE_2D,U,dt,ut,Et,ht);f.generateMipmaps=!1}else if(Ct){if(q){let U=Yt(tt);e.texStorage2D(i.TEXTURE_2D,j,dt,U.width,U.height)}A&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Et,tt)}else e.texImage2D(i.TEXTURE_2D,0,dt,ut,Et,tt);u(f)&&E(V),ct.__version=ot.version,f.onUpdate&&f.onUpdate(f)}T.__version=f.version}function Rt(T,f,O){if(f.image.length!==6)return;let V=Zt(T,f),Z=f.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let ot=n.get(Z);if(Z.version!==ot.__version||V===!0){e.activeTexture(i.TEXTURE0+O);let ct=Xt.getPrimaries(Xt.workingColorSpace),X=f.colorSpace===Pn?null:Xt.getPrimaries(f.colorSpace),tt=f.colorSpace===Pn||ct===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ut=f.isCompressedTexture||f.image[0].isCompressedTexture,Et=f.image[0]&&f.image[0].isDataTexture,dt=[];for(let Q=0;Q<6;Q++)!ut&&!Et?dt[Q]=g(f.image[Q],!0,s.maxCubemapSize):dt[Q]=Et?f.image[Q].image:f.image[Q],dt[Q]=_e(f,dt[Q]);let ht=dt[0],Mt=r.convert(f.format,f.colorSpace),Ct=r.convert(f.type),q=M(f.internalFormat,Mt,Ct,f.normalized,f.colorSpace),A=f.isVideoTexture!==!0,j=ot.__version===void 0||V===!0,U=Z.dataReady,it=S(f,ht);Gt(i.TEXTURE_CUBE_MAP,f);let at;if(ut){A&&j&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,q,ht.width,ht.height);for(let Q=0;Q<6;Q++){at=dt[Q].mipmaps;for(let ft=0;ft<at.length;ft++){let lt=at[ft];f.format!==je?Mt!==null?A?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,lt.width,lt.height,Mt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,q,lt.width,lt.height,0,lt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,lt.width,lt.height,Mt,Ct,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,q,lt.width,lt.height,0,Mt,Ct,lt.data)}}}else{if(at=f.mipmaps,A&&j){at.length>0&&it++;let Q=Yt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,q,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Et){A?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,dt[Q].width,dt[Q].height,Mt,Ct,dt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,q,dt[Q].width,dt[Q].height,0,Mt,Ct,dt[Q].data);for(let ft=0;ft<at.length;ft++){let Ut=at[ft].image[Q].image;A?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Ut.width,Ut.height,Mt,Ct,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,q,Ut.width,Ut.height,0,Mt,Ct,Ut.data)}}else{A?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Mt,Ct,dt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,q,Mt,Ct,dt[Q]);for(let ft=0;ft<at.length;ft++){let lt=at[ft];A?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Mt,Ct,lt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,q,Mt,Ct,lt.image[Q])}}}u(f)&&E(i.TEXTURE_CUBE_MAP),ot.__version=Z.version,f.onUpdate&&f.onUpdate(f)}T.__version=f.version}function gt(T,f,O,V,Z,ot){let ct=r.convert(O.format,O.colorSpace),X=r.convert(O.type),tt=M(O.internalFormat,ct,X,O.normalized,O.colorSpace),ut=n.get(f),Et=n.get(O);if(Et.__renderTarget=f,!ut.__hasExternalTextures){let dt=Math.max(1,f.width>>ot),ht=Math.max(1,f.height>>ot);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,ot,tt,dt,ht,f.depth,0,ct,X,null):e.texImage2D(Z,ot,tt,dt,ht,0,ct,X,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),oe(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,Et.__webglTexture,0,ae(f)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,Et.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(T,f,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),f.depthBuffer){let V=f.depthTexture,Z=V&&V.isDepthTexture?V.type:null,ot=b(f.stencilBuffer,Z),ct=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;oe(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(f),ot,f.width,f.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(f),ot,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,ot,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,T)}else{let V=f.textures;for(let Z=0;Z<V.length;Z++){let ot=V[Z],ct=r.convert(ot.format,ot.colorSpace),X=r.convert(ot.type),tt=M(ot.internalFormat,ct,X,ot.normalized,ot.colorSpace);oe(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(f),tt,f.width,f.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(f),tt,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,tt,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(T,f,O){let V=f.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(f.depthTexture);if(Z.__renderTarget=f,(!Z.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,f.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,f.depthTexture);let ut=r.convert(f.depthTexture.format),Et=r.convert(f.depthTexture.type),dt;f.depthTexture.format===mn?dt=i.DEPTH_COMPONENT24:f.depthTexture.format===jn&&(dt=i.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,dt,f.width,f.height,0,ut,Et,null)}}else rt(f.depthTexture,0);let ot=Z.__webglTexture,ct=ae(f),X=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,tt=f.depthTexture.format===jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(f.depthTexture.format===mn)oe(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,X,ot,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,tt,X,ot,0);else if(f.depthTexture.format===jn)oe(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,X,ot,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,tt,X,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(T){let f=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==T.depthTexture){let V=T.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),V){let Z=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),f.__depthDisposeCallback=Z}f.__boundDepthTexture=V}if(T.depthTexture&&!f.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)me(f.__webglFramebuffer[V],T,V);else{let V=T.texture.mipmaps;V&&V.length>0?me(f.__webglFramebuffer[0],T,0):me(f.__webglFramebuffer,T,0)}else if(O){f.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[V]),f.__webglDepthbuffer[V]===void 0)f.__webglDepthbuffer[V]=i.createRenderbuffer(),Lt(f.__webglDepthbuffer[V],T,!1);else{let Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=f.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ot)}}else{let V=T.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),Lt(f.__webglDepthbuffer,T,!1);else{let Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(T,f,O){let V=n.get(T);f!==void 0&&gt(V.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ot(T)}function Jt(T){let f=T.texture,O=n.get(T),V=n.get(f);T.addEventListener("dispose",_);let Z=T.textures,ot=T.isWebGLCubeRenderTarget===!0,ct=Z.length>1;if(ct||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=f.version,a.memory.textures++),ot){O.__webglFramebuffer=[];for(let X=0;X<6;X++)if(f.mipmaps&&f.mipmaps.length>0){O.__webglFramebuffer[X]=[];for(let tt=0;tt<f.mipmaps.length;tt++)O.__webglFramebuffer[X][tt]=i.createFramebuffer()}else O.__webglFramebuffer[X]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){O.__webglFramebuffer=[];for(let X=0;X<f.mipmaps.length;X++)O.__webglFramebuffer[X]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ct)for(let X=0,tt=Z.length;X<tt;X++){let ut=n.get(Z[X]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&oe(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let X=0;X<Z.length;X++){let tt=Z[X];O.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[X]);let ut=r.convert(tt.format,tt.colorSpace),Et=r.convert(tt.type),dt=M(tt.internalFormat,ut,Et,tt.normalized,tt.colorSpace,T.isXRRenderTarget===!0),ht=ae(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,dt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,O.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,f);for(let X=0;X<6;X++)if(f.mipmaps&&f.mipmaps.length>0)for(let tt=0;tt<f.mipmaps.length;tt++)gt(O.__webglFramebuffer[X][tt],T,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt);else gt(O.__webglFramebuffer[X],T,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);u(f)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let X=0,tt=Z.length;X<tt;X++){let ut=Z[X],Et=n.get(ut),dt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Et.__webglTexture),Gt(dt,ut),gt(O.__webglFramebuffer,T,ut,i.COLOR_ATTACHMENT0+X,dt,0),u(ut)&&E(dt)}e.unbindTexture()}else{let X=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(X=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,V.__webglTexture),Gt(X,f),f.mipmaps&&f.mipmaps.length>0)for(let tt=0;tt<f.mipmaps.length;tt++)gt(O.__webglFramebuffer[tt],T,f,i.COLOR_ATTACHMENT0,X,tt);else gt(O.__webglFramebuffer,T,f,i.COLOR_ATTACHMENT0,X,0);u(f)&&E(X),e.unbindTexture()}T.depthBuffer&&Ot(T)}function Nt(T){let f=T.textures;for(let O=0,V=f.length;O<V;O++){let Z=f[O];if(u(Z)){let ot=L(T),ct=n.get(Z).__webglTexture;e.bindTexture(ot,ct),E(ot),e.unbindTexture()}}}let ne=[],re=[];function ve(T){if(T.samples>0){if(oe(T)===!1){let f=T.textures,O=T.width,V=T.height,Z=i.COLOR_BUFFER_BIT,ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(T),X=f.length>1;if(X)for(let ut=0;ut<f.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let tt=T.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<f.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Et=n.get(f[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,Z,i.NEAREST),c===!0&&(ne.length=0,re.length=0,ne.push(i.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ne.push(ot),re.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ut=0;ut<f.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Et=n.get(f[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let f=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function ae(T){return Math.min(s.maxSamples,T.samples)}function oe(T){let f=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function N(T){let f=a.render.frame;d.get(T)!==f&&(d.set(T,f),T.update())}function _e(T,f){let O=T.colorSpace,V=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==ls&&O!==Pn&&(Xt.getTransfer(O)===jt?(V!==je||Z!==He)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",O)),f}function Yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=rt,this.setTexture2DArray=J,this.setTexture3D=nt,this.setTextureCube=st,this.rebindTextures=Vt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function lm(i,t){function e(n,s=Pn){let r,a=Xt.getTransfer(s);if(n===He)return i.UNSIGNED_BYTE;if(n===Zr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===No)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lo)return i.BYTE;if(n===Do)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===Yr)return i.INT;if(n===ln)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Fo)return i.ALPHA;if(n===Oo)return i.RGB;if(n===je)return i.RGBA;if(n===mn)return i.DEPTH_COMPONENT;if(n===jn)return i.DEPTH_STENCIL;if(n===Bo)return i.RED;if(n===$r)return i.RED_INTEGER;if(n===ti)return i.RG;if(n===Kr)return i.RG_INTEGER;if(n===Qr)return i.RGBA_INTEGER;if(n===Cs||n===Rs||n===Is||n===Ps)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ia||n===sa||n===ra||n===aa||n===oa||n===Ls||n===la)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ia||n===sa)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ra)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===aa)return r.COMPRESSED_R11_EAC;if(n===oa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ls)return r.COMPRESSED_RG11_EAC;if(n===la)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===ya||n===Ma||n===Sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ca)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===va)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===Ea||n===Ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ba)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wa||n===Aa||n===Ds||n===Ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ds)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hm=`
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

}`,sl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _s(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ye({vertexShader:cm,fragmentShader:hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rl=class extends gn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,m=null,h=null,p=null,v=null,y=typeof XRWebGLBinding<"u",g=new sl,u={},E=e.getContextAttributes(),L=null,M=null,b=[],S=[],C=new Wt,_=null,w=null,R=new Le;R.viewport=new fe;let F=new Le;F.viewport=new fe;let B=[R,F],G=new Hr,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=b[K];return et===void 0&&(et=new zi,b[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=b[K];return et===void 0&&(et=new zi,b[K]=et),et.getGripSpace()},this.getHand=function(K){let et=b[K];return et===void 0&&(et=new zi,b[K]=et),et.getHandSpace()};function $(K){let et=S.indexOf(K.inputSource);if(et===-1)return;let vt=b[et];vt!==void 0&&(vt.update(K.inputSource,K.frame,l||a),vt.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",rt);for(let K=0;K<b.length;K++){let et=S[K];et!==null&&(S[K]=null,b[K].disconnect(et))}D=null,H=null,g.reset();for(let K in u)delete u[K];if(t.setRenderTarget(L),p=null,h=null,m=null,s=null,M=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",rt),E.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Rt=null,gt=null;E.depth&&(gt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=E.stencil?jn:mn,Rt=E.stencil?Zi:ln);let Lt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(Lt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new ke(h.textureWidth,h.textureHeight,{format:je,type:He,depthTexture:new Wn(h.textureWidth,h.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let vt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ke(p.framebufferWidth,p.framebufferHeight,{format:je,type:He,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(K){for(let et=0;et<K.removed.length;et++){let vt=K.removed[et],Rt=S.indexOf(vt);Rt>=0&&(S[Rt]=null,b[Rt].disconnect(vt))}for(let et=0;et<K.added.length;et++){let vt=K.added[et],Rt=S.indexOf(vt);if(Rt===-1){for(let Lt=0;Lt<b.length;Lt++)if(Lt>=S.length){S.push(vt),Rt=Lt;break}else if(S[Lt]===null){S[Lt]=vt,Rt=Lt;break}if(Rt===-1)break}let gt=b[Rt];gt&&gt.connect(vt)}}let J=new k,nt=new k;function st(K,et,vt){J.setFromMatrixPosition(et.matrixWorld),nt.setFromMatrixPosition(vt.matrixWorld);let Rt=J.distanceTo(nt),gt=et.projectionMatrix.elements,Lt=vt.projectionMatrix.elements,me=gt[14]/(gt[10]-1),Ot=gt[14]/(gt[10]+1),Vt=(gt[9]+1)/gt[5],Jt=(gt[9]-1)/gt[5],Nt=(gt[8]-1)/gt[0],ne=(Lt[8]+1)/Lt[0],re=me*Nt,ve=me*ne,ae=Rt/(-Nt+ne),oe=ae*-Nt;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(oe),K.translateZ(ae),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),gt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let N=me+ae,_e=Ot+ae,Yt=re-oe,T=ve+(Rt-oe),f=Vt*Ot/_e*N,O=Jt*Ot/_e*N;K.projectionMatrix.makePerspective(Yt,T,f,O,N,_e),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function At(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,vt=K.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),G.near=F.near=R.near=et,G.far=F.far=R.far=vt,(D!==G.near||H!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,H=G.far),G.layers.mask=K.layers.mask|6,R.layers.mask=G.layers.mask&-5,F.layers.mask=G.layers.mask&-3;let Rt=K.parent,gt=G.cameras;At(G,Rt);for(let Lt=0;Lt<gt.length;Lt++)At(gt[Lt],Rt);gt.length===2?st(G,R,F):G.projectionMatrix.copy(R.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),wt(K,G,Rt)};function wt(K,et,vt){vt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(vt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(K){return u[K]};let Kt=null;function Gt(K,et){if(d=et.getViewerPose(l||a),v=et,d!==null){let vt=d.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Rt=!1;vt.length!==G.cameras.length&&(G.cameras.length=0,Rt=!0);for(let Ot=0;Ot<vt.length;Ot++){let Vt=vt[Ot],Jt=null;if(p!==null)Jt=p.getViewport(Vt);else{let ne=m.getViewSubImage(h,Vt);Jt=ne.viewport,Ot===0&&(t.setRenderTargetTextures(M,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(M))}let Nt=B[Ot];Nt===void 0&&(Nt=new Le,Nt.layers.enable(Ot),Nt.viewport=new fe,B[Ot]=Nt),Nt.matrix.fromArray(Vt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Vt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Ot===0&&(G.matrix.copy(Nt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Rt===!0&&G.cameras.push(Nt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){m=n.getBinding();let Ot=m.getDepthInformation(vt[0]);Ot&&Ot.isValid&&Ot.texture&&g.init(Ot,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),m=n.getBinding();for(let Ot=0;Ot<vt.length;Ot++){let Vt=vt[Ot].camera;if(Vt){let Jt=u[Vt];Jt||(Jt=new _s,u[Vt]=Jt);let Nt=m.getCameraImage(Vt);Jt.sourceTexture=Nt}}}}for(let vt=0;vt<b.length;vt++){let Rt=S[vt],gt=b[vt];Rt!==null&&gt!==void 0&&gt.update(Rt,et,l||a)}Kt&&Kt(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),v=null}let Zt=new Oc;Zt.setAnimationLoop(Gt),this.setAnimationLoop=function(K){Kt=K},this.dispose=function(){}}},um=new pe,Hc=new Dt;Hc.set(-1,0,0,0,1,0,0,0,1);function dm(i,t){function e(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,ko(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,E,L,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(g,u):u.isMeshLambertMaterial?(r(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(g,u),m(g,u)):u.isMeshPhongMaterial?(r(g,u),d(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,M)):u.isMeshMatcapMaterial?(r(g,u),v(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),y(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?c(g,u,E,L):u.isSpriteMaterial?l(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,e(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Be&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,e(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Be&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,e(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,e(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let E=t.get(u),L=E.envMap,M=E.envMapRotation;L&&(g.envMap.value=L,g.envMapRotation.value.setFromMatrix4(um.makeRotationFromEuler(M)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Hc),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function c(g,u,E,L){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*E,g.scale.value=L*.5,u.map&&(g.map.value=u.map,e(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function l(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,e(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,e(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function m(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,E){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Be&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.retroreflectivity>0&&(g.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){let E=t.get(u).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fm(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){let S=b.program;n.uniformBlockBinding(M,S)}function l(M,b){let S=s[M.id];S===void 0&&(g(M),S=d(M),s[M.id]=S,M.addEventListener("dispose",E));let C=b.program;n.updateUBOMapping(M,C);let _=t.render.frame;r[M.id]!==_&&(h(M),r[M.id]=_)}function d(M){let b=m();M.__bindingPointIndex=b;let S=i.createBuffer(),C=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function m(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let b=s[M.id],S=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,w=S.length;_<w;_++){let R=S[_];if(Array.isArray(R))for(let F=0,B=R.length;F<B;F++)p(R[F],_,F,C);else p(R,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,b,S,C){if(y(M,b,S,C)===!0){let _=M.__offset,w=M.value;if(Array.isArray(w)){let R=0;for(let F=0;F<w.length;F++){let B=w[F],G=u(B);v(B,M.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(w,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function v(M,b,S){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,S)}function y(M,b,S,C){let _=M.value,w=b+"_"+S;if(C[w]===void 0)return typeof _=="number"||typeof _=="boolean"?C[w]=_:ArrayBuffer.isView(_)?C[w]=_.slice():C[w]=_.clone(),!0;{let R=C[w];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return C[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(M){let b=M.uniforms,S=0,C=16;for(let w=0,R=b.length;w<R;w++){let F=Array.isArray(b[w])?b[w]:[b[w]];for(let B=0,G=F.length;B<G;B++){let D=F[B],H=Array.isArray(D.value)?D.value:[D.value];for(let $=0,Y=H.length;$<Y;$++){let rt=H[$],J=u(rt),nt=S%C,st=nt%J.boundary,At=nt+st;S+=st,At!==0&&C-At<J.storage&&(S+=C-At),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=J.storage}}}let _=S%C;return _>0&&(S+=C-_),M.__size=S,M.__cache={},this}function u(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):It("WebGLRenderer: Unsupported uniform value type.",M),b}function E(M){let b=M.target;b.removeEventListener("dispose",E);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function L(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:L}}var pm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yn=null;function mm(){return yn===null&&(yn=new wr(pm,16,16,ti,hn),yn.name="DFG_LUT",yn.minFilter=Ae,yn.magFilter=Ae,yn.wrapS=pn,yn.wrapT=pn,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}var Fa=class{constructor(t={}){let{canvas:e=lc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:p=He}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let y=p,g=new Set([Qr,Kr,$r]),u=new Set([He,ln,Yi,Zi,Zr,Jr]),E=new Uint32Array(4),L=new Int32Array(4),M=new k,b=null,S=null,C=[],_=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=on,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,F=!1,B=null,G=null,D=null,H=null;this._outputColorSpace=Oe;let $=0,Y=0,rt=null,J=-1,nt=null,st=new fe,At=new fe,wt=null,Kt=new Ft(0),Gt=0,Zt=e.width,K=e.height,et=1,vt=null,Rt=null,gt=new fe(0,0,Zt,K),Lt=new fe(0,0,Zt,K),me=!1,Ot=new ki,Vt=!1,Jt=!1,Nt=new pe,ne=new k,re=new fe,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function oe(){return rt===null?et:1}let N=n;function _e(x,I){return e.getContext(x,I)}let Yt,T,f,O,V,Z,ot,ct,X,tt,ut,Et,dt,ht,Mt,Ct,q,A,j,U,it,at,Q;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",Se,!1),N===null){let I="webgl2";if(N=_e(I,x),N===null)throw _e(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(x){throw e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),Pt("WebGLRenderer: "+x.message),x}function ft(){Yt=new Sf(N),Yt.init(),it=new lm(N,Yt),T=new df(N,Yt,t,it),f=new am(N,Yt),T.reversedDepthBuffer&&h&&f.buffers.depth.setReversed(!0),G=N.createFramebuffer(),D=N.createFramebuffer(),H=N.createFramebuffer(),O=new Tf(N),V=new qp,Z=new om(N,Yt,f,V,T,it,O),ot=new Mf(R),ct=new wh(N),at=new hf(N,ct),X=new bf(N,ct,O,at),tt=new Af(N,X,ct,at,O),A=new wf(N,T,Z),Mt=new ff(V),ut=new Xp(R,ot,Yt,T,at,Mt),Et=new dm(R,V),dt=new Zp,ht=new tm(Yt),q=new cf(R,ot,f,tt,v,c),Ct=new rm(R,tt,T),Q=new fm(N,O,T,f),j=new uf(N,Yt,O),U=new Ef(N,Yt,O),O.programs=ut.programs,R.capabilities=T,R.extensions=Yt,R.properties=V,R.renderLists=dt,R.shadowMap=Ct,R.state=f,R.info=O}y!==He&&(w=new Rf(y,e.width,e.height,o,s,r));let lt=new rl(R,N);this.xr=lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let x=Yt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Yt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(x){x!==void 0&&(et=x,this.setSize(Zt,K,!1))},this.getSize=function(x){return x.set(Zt,K)},this.setSize=function(x,I,W=!0){if(lt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=x,K=I,e.width=Math.floor(x*et),e.height=Math.floor(I*et),W===!0&&(e.style.width=x+"px",e.style.height=I+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(Zt*et,K*et).floor()},this.setDrawingBufferSize=function(x,I,W){Zt=x,K=I,et=W,e.width=Math.floor(x*W),e.height=Math.floor(I*W),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(y===He){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(st)},this.getViewport=function(x){return x.copy(gt)},this.setViewport=function(x,I,W,P){x.isVector4?gt.set(x.x,x.y,x.z,x.w):gt.set(x,I,W,P),f.viewport(st.copy(gt).multiplyScalar(et).round())},this.getScissor=function(x){return x.copy(Lt)},this.setScissor=function(x,I,W,P){x.isVector4?Lt.set(x.x,x.y,x.z,x.w):Lt.set(x,I,W,P),f.scissor(At.copy(Lt).multiplyScalar(et).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(x){f.setScissorTest(me=x)},this.setOpaqueSort=function(x){vt=x},this.setTransparentSort=function(x){Rt=x},this.getClearColor=function(x){return x.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor(...arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,W=!0){let P=0;if(x){let z=!1;if(rt!==null){let _t=rt.texture.format;z=g.has(_t)}if(z){let _t=rt.texture.type,yt=u.has(_t),mt=q.getClearColor(),St=q.getClearAlpha(),Tt=mt.r,Bt=mt.g,Ht=mt.b;yt?(E[0]=Tt,E[1]=Bt,E[2]=Ht,E[3]=St,N.clearBufferuiv(N.COLOR,0,E)):(L[0]=Tt,L[1]=Bt,L[2]=Ht,L[3]=St,N.clearBufferiv(N.COLOR,0,L))}else P|=N.COLOR_BUFFER_BIT}I&&(P|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(P|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&N.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),B=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),q.dispose(),dt.dispose(),ht.dispose(),V.dispose(),ot.dispose(),tt.dispose(),at.dispose(),Q.dispose(),ut.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",We),lt.removeEventListener("sessionend",Ce),le.stop()};function Ut(x){x.preventDefault(),Vo("WebGLRenderer: Context Lost."),F=!0}function kt(){Vo("WebGLRenderer: Context Restored."),F=!1;let x=O.autoReset,I=Ct.enabled,W=Ct.autoUpdate,P=Ct.needsUpdate,z=Ct.type;ft(),O.autoReset=x,Ct.enabled=I,Ct.autoUpdate=W,Ct.needsUpdate=P,Ct.type=z}function Se(x){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ue(x){let I=x.target;I.removeEventListener("dispose",Ue),zs(I)}function zs(x){Vs(x),V.remove(x)}function Vs(x){let I=V.get(x).programs;I!==void 0&&(I.forEach(function(W){ut.releaseProgram(W)}),x.isShaderMaterial&&ut.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,W,P,z,_t){I===null&&(I=ve);let yt=z.isMesh&&z.matrixWorld.determinantAffine()<0,mt=Gs(x,I,W,P,z);f.setMaterial(P,yt);let St=W.index,Tt=1;if(P.wireframe===!0){if(St=X.getWireframeAttribute(W),St===void 0)return;Tt=2}let Bt=W.drawRange,Ht=W.attributes.position,bt=Bt.start*Tt,Qt=(Bt.start+Bt.count)*Tt;_t!==null&&(bt=Math.max(bt,_t.start*Tt),Qt=Math.min(Qt,(_t.start+_t.count)*Tt)),St!==null?(bt=Math.max(bt,0),Qt=Math.min(Qt,St.count)):Ht!=null&&(bt=Math.max(bt,0),Qt=Math.min(Qt,Ht.count));let ye=Qt-bt;if(ye<0||ye===1/0)return;at.setup(z,P,mt,W,St);let ce,ee=j;if(St!==null&&(ce=ct.get(St),ee=U,ee.setIndex(ce)),z.isMesh)P.wireframe===!0?(f.setLineWidth(P.wireframeLinewidth*oe()),ee.setMode(N.LINES)):ee.setMode(N.TRIANGLES);else if(z.isLine){let Re=P.linewidth;Re===void 0&&(Re=1),f.setLineWidth(Re*oe()),z.isLineSegments?ee.setMode(N.LINES):z.isLineLoop?ee.setMode(N.LINE_LOOP):ee.setMode(N.LINE_STRIP)}else z.isPoints?ee.setMode(N.POINTS):z.isSprite&&ee.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))ee.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Re=z._multiDrawStarts,xt=z._multiDrawCounts,Fe=z._multiDrawCount,$t=St?ct.get(St).bytesPerElement:1,Je=V.get(P).currentProgram.getUniforms();for(let dn=0;dn<Fe;dn++)Je.setValue(N,"_gl_DrawID",dn),ee.render(Re[dn]/$t,xt[dn])}else if(z.isInstancedMesh)ee.renderInstances(bt,ye,z.count);else if(W.isInstancedBufferGeometry){let Re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xt=Math.min(W.instanceCount,Re);ee.renderInstances(bt,ye,xt)}else ee.render(bt,ye)};function ts(x,I,W,P){B!==null&&x.isNodeMaterial&&B.setObject(P,x),Vt===!0&&Mt.setState(x,W,!1),x.transparent===!0&&x.side===Qe&&x.forceSinglePass===!1?(x.side=Be,x.needsUpdate=!0,ii(x,I,P),x.side=$n,x.needsUpdate=!0,ii(x,I,P),x.side=Qe):ii(x,I,P)}this.compile=function(x,I,W=null){W===null&&(W=x),B!==null&&B.renderStart(x,I,W),S=ht.get(W),S.init(I),_.push(S),W.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),x!==W&&x.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),S.setupLights(),B!==null&&B.updateLights(S.state.lightsArray),Jt=this.localClippingEnabled,Vt=Mt.init(this.clippingPlanes,Jt),Vt===!0&&Mt.setGlobalState(this.clippingPlanes,I),B!==null&&Ct.render(S.state.shadowsArray,W,I);let P=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let _t=z.material;if(_t)if(Array.isArray(_t))for(let yt=0;yt<_t.length;yt++){let mt=_t[yt];ts(mt,W,I,z),P.add(mt)}else ts(_t,W,I,z),P.add(_t)}),S=_.pop(),B!==null&&B.renderEnd(),P},this.compileAsync=function(x,I,W=null){let P=this.compile(x,I,W);return new Promise(z=>{function _t(){if(P.forEach(function(yt){let St=V.get(yt).currentProgram;(St===void 0||St.isReady())&&P.delete(yt)}),P.size===0){z(x);return}setTimeout(_t,10)}Yt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let mi=null;function Sn(x){mi&&mi(x)}function We(){le.stop()}function Ce(){le.start()}let le=new Oc;le.setAnimationLoop(Sn),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(x){mi=x,lt.setAnimationLoop(x),x===null?le.stop():le.start()},lt.addEventListener("sessionstart",We),lt.addEventListener("sessionend",Ce),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(x,I);let W=lt.enabled===!0&&lt.isPresenting===!0,P=w!==null&&(rt===null||W)&&w.begin(R,rt);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(I),I=lt.getCamera()),x.isScene===!0&&x.onBeforeRender(R,x,I,rt),S=ht.get(x,_.length),S.init(I),S.state.textureUnits=Z.getTextureUnits(),_.push(S),Nt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ot.setFromProjectionMatrix(Nt,an,I.reversedDepth),Jt=this.localClippingEnabled,Vt=Mt.init(this.clippingPlanes,Jt),b=dt.get(x,C.length),b.init(),C.push(b),lt.enabled===!0&&lt.isPresenting===!0){let yt=R.xr.getDepthSensingMesh();yt!==null&&Ln(yt,I,-1/0,R.sortObjects)}Ln(x,I,0,R.sortObjects),b.finish(),B!==null&&B.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(vt,Rt),ae=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,ae&&q.addToRenderList(b,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Vt===!0&&Mt.beginShadows();let z=S.state.shadowsArray;if(Ct.render(z,x,I),Vt===!0&&Mt.endShadows(),(P&&w.hasRenderPass())===!1){let yt=b.opaque,mt=b.transmissive;if(S.setupLights(),I.isArrayCamera){let St=I.cameras;if(mt.length>0)for(let Tt=0,Bt=St.length;Tt<Bt;Tt++){let Ht=St[Tt];ei(yt,mt,x,Ht)}ae&&q.render(x);for(let Tt=0,Bt=St.length;Tt<Bt;Tt++){let Ht=St[Tt];gi(b,x,Ht,Ht.viewport)}}else mt.length>0&&ei(yt,mt,x,I),ae&&q.render(x),gi(b,x,I)}rt!==null&&Y===0&&(Z.updateMultisampleRenderTarget(rt),Z.updateRenderTargetMipmap(rt)),P&&w.end(R),x.isScene===!0&&x.onAfterRender(R,x,I),at.resetDefaultState(),J=-1,nt=null,_.pop(),_.length>0?(S=_[_.length-1],Z.setTextureUnits(S.state.textureUnits),Vt===!0&&Mt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,B!==null&&B.renderEnd()};function Ln(x,I,W,P){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)W=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLightProbeGrid)S.pushLightProbeGrid(x);else if(x.isLight)S.pushLight(x),x.castShadow&&S.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(Ot)){P&&re.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Nt);let yt=tt.update(x),mt=x.material;mt.visible&&b.push(x,yt,mt,W,re.z,null,I)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(Ot))){let yt=tt.update(x),mt=x.material;if(P&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),re.copy(x.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),re.copy(yt.boundingSphere.center)),re.applyMatrix4(x.matrixWorld).applyMatrix4(Nt)),Array.isArray(mt)){let St=yt.groups;for(let Tt=0,Bt=St.length;Tt<Bt;Tt++){let Ht=St[Tt],bt=mt[Ht.materialIndex];bt&&bt.visible&&b.push(x,yt,bt,W,re.z,Ht,I)}}else mt.visible&&b.push(x,yt,mt,W,re.z,null,I)}}let _t=x.children;for(let yt=0,mt=_t.length;yt<mt;yt++)Ln(_t[yt],I,W,P)}function gi(x,I,W,P){let{opaque:z,transmissive:_t,transparent:yt}=x;S.setupLightsView(W),Vt===!0&&Mt.setGlobalState(R.clippingPlanes,W),P&&f.viewport(st.copy(P)),z.length>0&&ni(z,I,W),_t.length>0&&ni(_t,I,W),yt.length>0&&ni(yt,I,W),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function ei(x,I,W,P){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[P.id]===void 0){let bt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[P.id]=new ke(1,1,{generateMipmaps:!0,type:bt?hn:He,minFilter:Qn,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let _t=S.state.transmissionRenderTarget[P.id],yt=P.viewport||st;_t.setSize(yt.z*R.transmissionResolutionScale,yt.w*R.transmissionResolutionScale);let mt=R.getRenderTarget(),St=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(_t),R.getClearColor(Kt),Gt=R.getClearAlpha(),Gt<1&&R.setClearColor(16777215,.5),R.clear(),ae&&q.render(W);let Bt=R.toneMapping;R.toneMapping=on;let Ht=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),S.setupLightsView(P),Vt===!0&&Mt.setGlobalState(R.clippingPlanes,P),ni(x,W,P),Z.updateMultisampleRenderTarget(_t),Z.updateRenderTargetMipmap(_t),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Qt=0,ye=I.length;Qt<ye;Qt++){let ce=I[Qt],{object:ee,geometry:Re,material:xt,group:Fe}=ce;if(xt.side===Qe&&ee.layers.test(P.layers)){let $t=xt.side;xt.side=Be,xt.needsUpdate=!0,es(ee,W,P,Re,xt,Fe),xt.side=$t,xt.needsUpdate=!0,bt=!0}}bt===!0&&(Z.updateMultisampleRenderTarget(_t),Z.updateRenderTargetMipmap(_t))}R.setRenderTarget(mt,St,Tt),R.setClearColor(Kt,Gt),Ht!==void 0&&(P.viewport=Ht),R.toneMapping=Bt}function ni(x,I,W){let P=I.isScene===!0?I.overrideMaterial:null;for(let z=0,_t=x.length;z<_t;z++){let yt=x[z],{object:mt,geometry:St,group:Tt}=yt,Bt=yt.material;Bt.allowOverride===!0&&P!==null&&(Bt=P),mt.layers.test(W.layers)&&es(mt,I,W,St,Bt,Tt)}}function es(x,I,W,P,z,_t){B!==null&&z.isNodeMaterial&&B.setObject(x,z),x.onBeforeRender(R,I,W,P,z,_t),x.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(R,I,W,P,x,_t),z.transparent===!0&&z.side===Qe&&z.forceSinglePass===!1?(z.side=Be,z.needsUpdate=!0,R.renderBufferDirect(W,I,P,z,x,_t),z.side=$n,z.needsUpdate=!0,R.renderBufferDirect(W,I,P,z,x,_t),z.side=Qe):R.renderBufferDirect(W,I,P,z,x,_t),x.onAfterRender(R,I,W,P,z,_t)}function ii(x,I,W){I.isScene!==!0&&(I=ve);let P=V.get(x),z=S.state.lights,_t=S.state.shadowsArray,yt=z.state.version,mt=ut.getParameters(x,z.state,_t,I,W,S.state.lightProbeGridArray),St=ut.getProgramCacheKey(mt),Tt=P.programs;P.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,P.fog=I.fog;let Bt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;P.envMap=ot.get(x.envMap||P.environment,Bt),P.envMapRotation=P.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Tt===void 0&&(x.addEventListener("dispose",Ue),Tt=new Map,P.programs=Tt);let Ht=Tt.get(St);if(Ht!==void 0){if(P.currentProgram===Ht&&P.lightsStateVersion===yt)return xi(x,mt),Ht}else mt.uniforms=ut.getUniforms(x),B!==null&&x.isNodeMaterial&&B.build(x,W,mt),x.onBeforeCompile(mt,R),Ht=ut.acquireProgram(mt,St),Tt.set(St,Ht),P.uniforms=mt.uniforms;let bt=P.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(bt.clippingPlanes=Mt.uniform),xi(x,mt),P.needsLights=si(x),P.lightsStateVersion=yt,P.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.sunLights.value=z.state.sun,bt.sunLightShadows.value=z.state.sunShadow,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.sunShadowMatrix.value=z.state.sunShadowMatrix,bt.sunShadowCascade.value=z.state.sunShadowCascade,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),P.lightProbeGrid=S.state.lightProbeGridArray.length>0,P.currentProgram=Ht,P.uniformsList=null,Ht}function _i(x){if(x.uniformsList===null){let I=x.currentProgram.getUniforms();x.uniformsList=Ki.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function xi(x,I){let W=V.get(x);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function ks(x,I){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let W=0,P=x.length;W<P;W++){let z=x[W];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function Gs(x,I,W,P,z){I.isScene!==!0&&(I=ve),Z.resetTextureUnits();let _t=I.fog,yt=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?I.environment:null,mt=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Xt.workingColorSpace,St=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,Tt=ot.get(P.envMap||yt,St),Bt=P.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ht=!!W.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),bt=!!W.morphAttributes.position,Qt=!!W.morphAttributes.normal,ye=!!W.morphAttributes.color,ce=on;P.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=R.toneMapping);let ee=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Re=ee!==void 0?ee.length:0,xt=V.get(P),Fe=S.state.lights;if(Vt===!0&&(Jt===!0||x!==nt)){let ie=x===nt&&P.id===J;Mt.setState(P,x,ie)}let $t=!1;P.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Fe.state.version||xt.outputColorSpace!==mt||z.isBatchedMesh&&xt.batching===!1||!z.isBatchedMesh&&xt.batching===!0||z.isBatchedMesh&&xt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&xt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&xt.instancing===!1||!z.isInstancedMesh&&xt.instancing===!0||z.isSkinnedMesh&&xt.skinning===!1||!z.isSkinnedMesh&&xt.skinning===!0||z.isInstancedMesh&&xt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&xt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&xt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&xt.instancingMorph===!1&&z.morphTexture!==null||xt.envMap!==Tt||P.fog===!0&&xt.fog!==_t||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Mt.numPlanes||xt.numIntersection!==Mt.numIntersection)||xt.vertexAlphas!==Bt||xt.vertexTangents!==Ht||xt.morphTargets!==bt||xt.morphNormals!==Qt||xt.morphColors!==ye||xt.toneMapping!==ce||xt.morphTargetsCount!==Re||!!xt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,xt.__version=P.version);let Je=xt.currentProgram;$t===!0&&(Je=ii(P,I,z),B&&P.isNodeMaterial&&B.onUpdateProgram(P,Je,xt));let dn=!1,Dn=!1,vi=!1,te=Je.getUniforms(),xe=xt.uniforms;if(f.useProgram(Je.program)&&(dn=!0,Dn=!0,vi=!0),P.id!==J&&(J=P.id,Dn=!0),xt.needsLights){let ie=ks(S.state.lightProbeGridArray,z);xt.lightProbeGrid!==ie&&(xt.lightProbeGrid=ie,Dn=!0)}if(dn||nt!==x){f.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),te.setValue(N,"projectionMatrix",x.projectionMatrix),te.setValue(N,"viewMatrix",x.matrixWorldInverse);let Un=te.map.cameraPosition;Un!==void 0&&Un.setValue(N,ne.setFromMatrixPosition(x.matrixWorld)),T.logarithmicDepthBuffer&&te.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&te.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),nt!==x&&(nt=x,Dn=!0,vi=!0)}if(xt.needsLights&&(Fe.state.sunShadowMap.length>0&&te.setValue(N,"sunShadowMap",Fe.state.sunShadowMap,Z),Fe.state.directionalShadowMap.length>0&&te.setValue(N,"directionalShadowMap",Fe.state.directionalShadowMap,Z),Fe.state.spotShadowMap.length>0&&te.setValue(N,"spotShadowMap",Fe.state.spotShadowMap,Z),Fe.state.pointShadowMap.length>0&&te.setValue(N,"pointShadowMap",Fe.state.pointShadowMap,Z)),z.isSkinnedMesh){te.setOptional(N,z,"bindMatrix"),te.setOptional(N,z,"bindMatrixInverse");let ie=z.skeleton;ie&&(ie.boneTexture===null&&ie.computeBoneTexture(),te.setValue(N,"boneTexture",ie.boneTexture,Z))}z.isBatchedMesh&&(te.setOptional(N,z,"batchingTexture"),te.setValue(N,"batchingTexture",z._matricesTexture,Z),te.setOptional(N,z,"batchingIdTexture"),te.setValue(N,"batchingIdTexture",z._indirectTexture,Z),te.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&te.setValue(N,"batchingColorTexture",z._colorsTexture,Z));let Nn=W.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&A.update(z,W,Je),(Dn||xt.receiveShadow!==z.receiveShadow)&&(xt.receiveShadow=z.receiveShadow,te.setValue(N,"receiveShadow",z.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&I.environment!==null&&(xe.envMapIntensity.value=I.environmentIntensity),xe.dfgLUT!==void 0&&(xe.dfgLUT.value=mm()),Dn){if(te.setValue(N,"toneMappingExposure",R.toneMappingExposure),xt.needsLights&&Hs(xe,vi),_t&&P.fog===!0&&Et.refreshFogUniforms(xe,_t),Et.refreshMaterialUniforms(xe,P,et,K,S.state.transmissionRenderTarget[x.id]),xt.needsLights&&xt.lightProbeGrid){let ie=xt.lightProbeGrid;xe.probesSH.value=ie.texture,xe.probesMin.value.copy(ie.boundingBox.min),xe.probesMax.value.copy(ie.boundingBox.max),xe.probesResolution.value.copy(ie.resolution)}Ki.upload(N,_i(xt),xe,Z)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Ki.upload(N,_i(xt),xe,Z),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&te.setValue(N,"center",z.center),te.setValue(N,"modelViewMatrix",z.modelViewMatrix),te.setValue(N,"normalMatrix",z.normalMatrix),te.setValue(N,"modelMatrix",z.matrixWorld),P.uniformsGroups!==void 0){let ie=P.uniformsGroups;for(let Un=0,yi=ie.length;Un<yi;Un++){let al=ie[Un];Q.update(al,Je),Q.bind(al,Je)}}return Je}function Hs(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.sunLights.needsUpdate=I,x.sunLightShadows.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function si(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(x,I,W){let P=V.get(x);P.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),V.get(x.texture).__webglTexture=I,V.get(x.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:W,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){let W=V.get(x);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,W=0){rt=x,$=I,Y=W;let P=null,z=!1,_t=!1;if(x){let mt=V.get(x);if(mt.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(N.FRAMEBUFFER,mt.__webglFramebuffer),st.copy(x.viewport),At.copy(x.scissor),wt=x.scissorTest,f.viewport(st),f.scissor(At),f.setScissorTest(wt),J=-1;return}else if(mt.__webglFramebuffer===void 0)Z.setupRenderTarget(x);else if(mt.__hasExternalTextures)Z.rebindTextures(x,V.get(x.texture).__webglTexture,V.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Bt=x.depthTexture;if(mt.__boundDepthTexture!==Bt){if(Bt!==null&&V.has(Bt)&&(x.width!==Bt.image.width||x.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(x)}}let St=x.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(_t=!0);let Tt=V.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Tt[I])?P=Tt[I][W]:P=Tt[I],z=!0):x.samples>0&&Z.useMultisampledRTT(x)===!1?P=V.get(x).__webglMultisampledFramebuffer:Array.isArray(Tt)?P=Tt[W]:P=Tt,st.copy(x.viewport),At.copy(x.scissor),wt=x.scissorTest}else st.copy(gt).multiplyScalar(et).floor(),At.copy(Lt).multiplyScalar(et).floor(),wt=me;if(W!==0&&(P=G),f.bindFramebuffer(N.FRAMEBUFFER,P)&&f.drawBuffers(x,P),f.viewport(st),f.scissor(At),f.setScissorTest(wt),z){let mt=V.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,W)}else if(_t){let mt=I;for(let St=0;St<x.textures.length;St++){let Tt=V.get(x.textures[St]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+St,Tt.__webglTexture,W,mt)}}else if(x!==null&&W!==0){let mt=V.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mt.__webglTexture,W)}J=-1};function ri(x){let I=V.get(x);return(I.__readFormat!==x.format||I.__readType!==x.type)&&(I.__readFormat=x.format,I.__readType=x.type,I.__formatReadable=T.textureFormatReadable(x.format),I.__typeReadable=T.textureTypeReadable(x.type)),I}this.readRenderTargetPixels=function(x,I,W,P,z,_t,yt,mt=0){if(!(x&&x.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){f.bindFramebuffer(N.FRAMEBUFFER,St);try{let Tt=x.textures[mt],Bt=Tt.format,Ht=Tt.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt);let bt=ri(Tt);if(bt.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-P&&W>=0&&W<=x.height-z&&N.readPixels(I,W,P,z,it.convert(Bt),it.convert(Ht),_t)}finally{let Tt=rt!==null?V.get(rt).__webglFramebuffer:null;f.bindFramebuffer(N.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(x,I,W,P,z,_t,yt,mt=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St)if(I>=0&&I<=x.width-P&&W>=0&&W<=x.height-z){f.bindFramebuffer(N.FRAMEBUFFER,St);let Tt=x.textures[mt],Bt=Tt.format,Ht=Tt.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt);let bt=ri(Tt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.bufferData(N.PIXEL_PACK_BUFFER,_t.byteLength,N.STREAM_READ),N.readPixels(I,W,P,z,it.convert(Bt),it.convert(Ht),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ye=rt!==null?V.get(rt).__webglFramebuffer:null;f.bindFramebuffer(N.FRAMEBUFFER,ye);let ce=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await hc(N,ce,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Qt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_t),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Qt),N.deleteSync(ce),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,W=0){let P=Math.pow(2,-W),z=Math.floor(x.image.width*P),_t=Math.floor(x.image.height*P),yt=I!==null?I.x:0,mt=I!==null?I.y:0;Z.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,yt,mt,z,_t),f.unbindTexture()},this.copyTextureToTexture=function(x,I,W=null,P=null,z=0,_t=0){let yt,mt,St,Tt,Bt,Ht,bt,Qt,ye,ce=x.isCompressedTexture?x.mipmaps[_t]:x.image;if(W!==null)yt=W.max.x-W.min.x,mt=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,Tt=W.min.x,Bt=W.min.y,Ht=W.isBox3?W.min.z:0;else{let xe=Math.pow(2,-z);yt=Math.floor(ce.width*xe),mt=Math.floor(ce.height*xe),x.isDataArrayTexture?St=ce.depth:x.isData3DTexture?St=Math.floor(ce.depth*xe):St=1,Tt=0,Bt=0,Ht=0}P!==null?(bt=P.x,Qt=P.y,ye=P.z):(bt=0,Qt=0,ye=0);let ee=it.convert(I.format),Re=it.convert(I.type),xt;I.isData3DTexture?(Z.setTexture3D(I,0),xt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Z.setTexture2DArray(I,0),xt=N.TEXTURE_2D_ARRAY):(Z.setTexture2D(I,0),xt=N.TEXTURE_2D),f.activeTexture(N.TEXTURE0),f.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),f.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),f.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let Fe=f.getParameter(N.UNPACK_ROW_LENGTH),$t=f.getParameter(N.UNPACK_IMAGE_HEIGHT),Je=f.getParameter(N.UNPACK_SKIP_PIXELS),dn=f.getParameter(N.UNPACK_SKIP_ROWS),Dn=f.getParameter(N.UNPACK_SKIP_IMAGES);f.pixelStorei(N.UNPACK_ROW_LENGTH,ce.width),f.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce.height),f.pixelStorei(N.UNPACK_SKIP_PIXELS,Tt),f.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),f.pixelStorei(N.UNPACK_SKIP_IMAGES,Ht);let vi=x.isDataArrayTexture||x.isData3DTexture,te=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){let xe=V.get(x),Nn=V.get(I),ie=V.get(xe.__renderTarget),Un=V.get(Nn.__renderTarget);f.bindFramebuffer(N.READ_FRAMEBUFFER,ie.__webglFramebuffer),f.bindFramebuffer(N.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let yi=0;yi<St;yi++)vi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(x).__webglTexture,z,Ht+yi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(I).__webglTexture,_t,ye+yi)),N.blitFramebuffer(Tt,Bt,yt,mt,bt,Qt,yt,mt,N.DEPTH_BUFFER_BIT,N.NEAREST);f.bindFramebuffer(N.READ_FRAMEBUFFER,null),f.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||V.has(x)){let xe=V.get(x),Nn=V.get(I);f.bindFramebuffer(N.READ_FRAMEBUFFER,D),f.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let ie=0;ie<St;ie++)vi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.__webglTexture,z,Ht+ie):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.__webglTexture,z),te?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nn.__webglTexture,_t,ye+ie):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Nn.__webglTexture,_t),z!==0?N.blitFramebuffer(Tt,Bt,yt,mt,bt,Qt,yt,mt,N.COLOR_BUFFER_BIT,N.NEAREST):te?N.copyTexSubImage3D(xt,_t,bt,Qt,ye+ie,Tt,Bt,yt,mt):N.copyTexSubImage2D(xt,_t,bt,Qt,Tt,Bt,yt,mt);f.bindFramebuffer(N.READ_FRAMEBUFFER,null),f.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else te?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(xt,_t,bt,Qt,ye,yt,mt,St,ee,Re,ce.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(xt,_t,bt,Qt,ye,yt,mt,St,ee,ce.data):N.texSubImage3D(xt,_t,bt,Qt,ye,yt,mt,St,ee,Re,ce):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_t,bt,Qt,yt,mt,ee,Re,ce.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_t,bt,Qt,ce.width,ce.height,ee,ce.data):N.texSubImage2D(N.TEXTURE_2D,_t,bt,Qt,yt,mt,ee,Re,ce);f.pixelStorei(N.UNPACK_ROW_LENGTH,Fe),f.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$t),f.pixelStorei(N.UNPACK_SKIP_PIXELS,Je),f.pixelStorei(N.UNPACK_SKIP_ROWS,dn),f.pixelStorei(N.UNPACK_SKIP_IMAGES,Dn),_t===0&&I.generateMipmaps&&N.generateMipmap(xt),f.unbindTexture()},this.initRenderTarget=function(x){V.get(x).__webglFramebuffer===void 0&&Z.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Z.setTextureCube(x,0):x.isData3DTexture?Z.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Z.setTexture2DArray(x,0):Z.setTexture2D(x,0),f.unbindTexture()},this.resetState=function(){$=0,Y=0,rt=null,f.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var Bs=new k;function tn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Bs.copy(t),Bs[n]=0,Bs.normalize();let l=.5*a/(a+o),d=1-Bs.angleTo(i)/c;return Math.sign(Bs[e])===1?d*l:o/(a+o)+l+l*(1-d)}var za=class i extends Xn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new k,l=new k,d=new k(t,e,n).divideScalar(2).subScalar(r),m=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,v=m.length/6,y=new k,g=.5/a;for(let u=0,E=0;u<m.length;u+=3,E+=2)switch(c.fromArray(m,u),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),m[u+0]=d.x*Math.sign(c.x)+l.x*r,m[u+1]=d.y*Math.sign(c.y)+l.y*r,m[u+2]=d.z*Math.sign(c.z)+l.z*r,h[u+0]=l.x,h[u+1]=l.y,h[u+2]=l.z,Math.floor(u/v)){case 0:y.set(1,0,0),p[E+0]=tn(y,l,"z","y",r,n),p[E+1]=1-tn(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),p[E+0]=1-tn(y,l,"z","y",r,n),p[E+1]=1-tn(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),p[E+0]=1-tn(y,l,"x","z",r,t),p[E+1]=tn(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),p[E+0]=1-tn(y,l,"x","z",r,t),p[E+1]=1-tn(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),p[E+0]=1-tn(y,l,"x","y",r,t),p[E+1]=1-tn(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),p[E+0]=tn(y,l,"x","y",r,t),p[E+1]=1-tn(y,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var ji=document.getElementById("mascot"),un;try{un=new Fa({antialias:!1,alpha:!0,powerPreference:"low-power"})}catch(i){window.__buddy3d={ok:!1,error:String(i&&i.message||i)}}if(un){let Ct=function(){let q=f.act==="idle";if(setTimeout(Ct,q?250:f.act==="sit"?125:66),document.hidden||q&&!ht&&Mt<=0)return;q?Mt--:Mt=12,ht=!1;let A=tt(),j=Math.min(.1,(A-Et)/1e3);Et=A;let U=(A-dt)/1e3,it=1-Math.pow(.001,j),at=f.act,Q=Math.sin(U*.6)*.32,ft=Math.sin(U*Math.PI*2/2.6)*.015,lt=0,Ut=0,kt=1,Se=1,Ue=0,zs=-.9,Vs=.76,ts=.9,mi=.76,Sn=0,We=0,Ce=0,le=0,Ln=0,gi=0,ei=0,ni=0,es=1,ii=!1,_i=!1,xi=!1,ks=!1,Gs=!1,Hs=!1,si=0,ri=0;switch(o.color.copy(f.costume!=="none"?ot:V),at){case"walk":case"run":{let P=at==="run"?14:8;Q=f.dir*(at==="run"?1.05:.85),ft=Math.abs(Math.sin(U*P))*(at==="run"?.09:.05),ei=Math.sin(U*P)*(at==="run"?.7:.45),Sn=Math.sin(U*P)*.6,Ce=-Math.sin(U*P)*.6,lt=f.dir*-.04,Ut=at==="run"?.12:.04,at==="run"&&(We=-2.5,le=2.5);break}case"type":Q=Math.sin(U*.8)*.08,Ut=.08,Sn=-1+Math.sin(U*28)*.12,Ce=-1+Math.sin(U*28+1.6)*.12,We=.35,le=-.35,Ln=gi=.15,ks=!0,ct(),ni=Math.abs(Math.sin(U*12))*.02,ri=-.04;break;case"read":Q=Math.sin(U*.5)*.1,Ut=-.08,We=-2.3,le=2.3,Sn=-.3,Ce=-.3,Gs=!0,si=Math.sin(U*2.6)*.05,ri=.04;break;case"search":Q=Math.sin(U*1.4)*.6,le=2+Math.sin(U*6)*.25,Ce=-.6,Hs=!0,si=Math.sin(U*3)*.06;break;case"think":Q=-.25,ri=.06,si=-.03,lt=Math.sin(U*.8)*.04,f.think==="chin"?(ts=.3,mi=.5,gi=.5,Ce=-1.25+Math.sin(U*5)*.08,le=-.1,zs=.05,Vs=.3,Ln=.5,Sn=-1.5,We=0,ct()):(le=2.7,Ce=-.4+Math.sin(U*9)*.1);break;case"wait":{Q=0;let P=U%1.8/1.8;Ue=P<.35?Math.sin(P/.35*Math.PI)*.22:0,Se=P<.08?.92:P>.33&&P<.42?.94:1,kt=2-Se,le=2.6+Math.sin(U*11)*.35,lt=Math.sin(U*3.5)*.08;break}case"look":Q=Math.sin(U*1.2)*.9,le=2.2,Ce=-.9,si=Math.sin(U*1.2)*.05;break;case"sit":es=.32,ft=-.3+Math.sin(U*1.5)*.01,Q=Math.sin(U*.4)*.25,We=-.3,le=.3;break;case"hero":{let P=f.costume;Q=Math.sin(U*.6)*.3;let z=U*2;P==="spider"?(lt=Math.sin(z*.8)*.35,le=2.9,Ce=-.2,ft=Math.sin(z*.8)*.04,ii=!0):P==="thor"?(le=2.9+Math.sin(U*5)*.08,Ce=-.3,ft=Math.abs(Math.sin(U*4))*.02):P==="captain"?(We=-.6,Sn=-1,Ln=.15,lt=Math.sin(z)*.03):P==="iron"?(Ue=.2+Math.sin(z)*.06,Ce=-1.5,le=.3,We=-.4,ei=0):P==="strange"?(We=-1.2,le=1.2,ft=Math.sin(z)*.02,_i=!0):P==="superman"?(Ue=.3+Math.sin(z)*.1,lt=-.55,Ut=.15,le=2.6,Ce=-.4):P==="batman"?(lt=Math.sin(z*.7)*.05,le=0,ft=0):ft=Math.sin(z)*.02;break}case"farm":{let P=U*1.9;Q=Math.sin(U*.55)*.35,lt=Math.sin(P*.5)*.07,ft=Math.abs(Math.sin(P*.5))*.03-.02,xi=!0,le=1.45+Math.sin(P)*.28,Ce=-.2,We=-1.45+Math.sin(P+Math.PI)*.28,Sn=-.2,ct(),ei=0;break}default:ft=-.01,Q=.22,Ut=.05}ut=X(ut,Q,it*.9),u.rotation.y=ut,u.position.y=Ue,E.position.y=ft,E.rotation.z=X(E.rotation.z,lt,it),E.rotation.x=X(E.rotation.x,Ut,it),E.scale.set(X(E.scale.x,kt,it),X(E.scale.y,Se,it),1),b.position.x=X(b.position.x,zs,it),b.position.y=X(b.position.y,Vs,it),S.position.x=X(S.position.x,ts,it),S.position.y=X(S.position.y,mi,it),b.rotation.x=X(b.rotation.x,Sn,it),b.rotation.z=X(b.rotation.z,We,it),b.position.z=X(b.position.z,Ln,it),S.rotation.x=X(S.rotation.x,Ce,it),S.rotation.z=X(S.rotation.z,le,it),S.position.z=X(S.position.z,gi,it);for(let P of _)P.rotation.x=(P.userData.phase?1:-1)*ei,P.position.y=.02+(P.userData.phase?ni:0),P.scale.y=X(P.scale.y,es,it);let x=me[f.costume];Vt.visible=!!(x&&x.cape),_e.visible=f.costume==="batman",Yt.visible=["spider","batman"].includes(f.costume),Jt.visible=f.costume==="thor",Nt.visible=f.costume==="captain",oe.visible=ii,re.visible=ve.visible=_i,_i&&(re.rotation.z=U*2,ve.rotation.z=-U*2),x&&x.cape&&(Vt.rotation.x=.12+Math.sin(U*(f.costume==="superman"?9:2.5))*.1),T.visible=xi,T.rotation.z=xi?Math.sin(U*1.9*.5)*.03:0,$.visible=ks,Y.visible=Gs,st.visible=Hs,Rt.visible=f.shades==="sunglasses",gt.visible=f.shades==="goggles";let I=["idle","sit","look","walk"].includes(at);if(Lt.visible=f.coffee&&I,Lt.visible&&at!=="walk"){let P=U%7/7;if(P>.58&&P<.82){let z=Math.sin((P-.58)/.24*Math.PI);S.rotation.z=1.1*z,S.rotation.x=-1.3*z}}Y.position.y=1.62+Math.sin(U*2)*.03;for(let[P,z]of Object.entries(F))z.visible=P===f.eyes&&f.shades!=="sunglasses";let W=U%3.4>3.25?.1:1;for(let P of D.concat(H))P.scale.y=W;w.position.x=X(w.position.x,si,it),w.position.y=X(w.position.y,ri,it),un.render(e,n)},i=ji.clientWidth||160,t=ji.clientHeight||150;un.setPixelRatio(Math.min((window.devicePixelRatio||1)*(window.__zoom3d||1),4)),un.setSize(i,t),un.setClearColor(0,0),un.outputColorSpace=Oe,un.domElement.id="buddy3d",un.domElement.style.display="",ji.appendChild(un.domElement);let e=new fs,n=new Le(30,i/t,.1,50);n.position.set(0,1.05,5.1),n.lookAt(0,.5,0),e.add(new bs(16774378,3811874,1.7));let s=new Wi(16777215,2.1);s.position.set(3,5,4),e.add(s);let r=new Wi(16765624,.9);r.position.set(-3,2.5,-3.5),e.add(r);let a=new ge({color:14251863,roughness:.5,metalness:.02,emissive:14251863,emissiveIntensity:.12}),o=new ge({color:14251863,roughness:.5,metalness:.02,emissive:14251863,emissiveIntensity:.12}),c=new ge({color:1511951,roughness:.35}),l=new xn({color:16777215}),d=new ge({color:2762019,roughness:.6}),m=new ge({color:16051944,roughness:.8}),h=new ge({color:10474751,roughness:.1,metalness:.2,transparent:!0,opacity:.55}),p=(q,A,j,U,it=.06)=>new se(new za(q,A,j,3,Math.min(it,q/2,A/2,j/2)),U),v=.8,y=.01,g=(q,A)=>[(q-80)*y,(114-A)*y],u=new ue;e.add(u);let E=new ue;u.add(E);let L=p(1.6,1.14,v,a,.09);L.position.set(0,.57,0),E.add(L);let M=(q,A,j,U,it,at,Q,ft=!0)=>{let lt=new ue;lt.position.set(it,at,Q);let Ut=p(q,A,j,U,.05);return Ut.position.y=ft?-A/2:A/2,lt.add(Ut),lt},b=M(.2,.38,.42,o,-.9,.76,0);E.add(b);let S=M(.2,.38,.42,o,.9,.76,0);E.add(S);let C=a.clone(),_=[-.72,-.36,.35,.72].map((q,A)=>{let j=M(.17,.46,.3,C,q,.02,0);return j.userData.phase=A%2,u.add(j),j}),w=new ue;w.position.z=v/2+.012,E.add(w);let R=(q,A,j,U,it,at=6)=>{let[Q,ft]=g(A,j),[lt,Ut]=g(U,it),kt=Math.hypot(lt-Q,Ut-ft)+at*y,Se=p(kt,at*y,.04,c,.015);Se.position.set((Q+lt)/2,(ft+Ut)/2,0),Se.rotation.z=Math.atan2(Ut-ft,lt-Q),q.add(Se)},F={},B=(q,A)=>{let j=new ue;return A(j),j.visible=!1,w.add(j),F[q]=j,j},G=(q,A,j,U,it,at=!0)=>{let[Q,ft]=g(A,j),lt=new ue;lt.position.set(Q,ft,0);let Ut=p(U*y,it*y,.05,c,Math.min(U,it)*y*.45);if(lt.add(Ut),at){let kt=new se(new ys(U*y*.22,12,12),l);kt.position.set(U*y*.2,it*y*.22,.03),lt.add(kt)}return q.add(lt),lt},D=[];B("open",q=>{D.push(G(q,29,50,16,28),G(q,131,50,16,28))});let H=[];B("wide",q=>{H.push(G(q,29,48,20,36),G(q,131,48,20,36))}),B("squint",q=>{R(q,17,37,41,51),R(q,41,51,17,65),R(q,143,37,119,51),R(q,119,51,143,65)}),B("happy",q=>{R(q,17,62,29,42),R(q,29,42,41,62),R(q,119,62,131,42),R(q,131,42,143,62)}),B("sleep",q=>{R(q,17,54,41,54),R(q,119,54,143,54)});let $=p(1.1,.07,.34,d,.03);$.position.set(0,.12,v/2+.32),u.add($);let Y=new ue,rt=p(.42,.56,.04,m,.02);rt.position.set(-.2,0,0),rt.rotation.y=.28,Y.add(rt);let J=p(.42,.56,.04,m,.02);J.position.set(.2,0,0),J.rotation.y=-.28,Y.add(J);let nt=p(.06,.58,.08,d,.02);Y.add(nt),Y.position.set(0,1.62,.35),u.add(Y);let st=new ue,At=new se(new qn(.17,.035,10,28),d);st.add(At);let wt=new se(new Gi(.16,24),h);st.add(wt);let Kt=p(.06,.3,.06,d,.02);Kt.position.set(.14,-.27,0),Kt.rotation.z=.5,st.add(Kt),st.position.set(.3,-.42,.25),S.add(st);let Gt=new ge({color:789516,roughness:.15,metalness:.3}),Zt=new ge({color:10474751,roughness:.1,metalness:.1,transparent:!0,opacity:.4}),K=new ge({color:3814963,roughness:.7}),et=new ge({color:16051944,roughness:.4}),vt=new ge({color:5911586,roughness:.5}),Rt=new ue;Rt.visible=!1,w.add(Rt);for(let q of[29,131]){let[A,j]=g(q,50),U=p(.44,.3,.07,Gt,.1);U.position.set(A,j,.03),Rt.add(U)}{let q=p(.62,.07,.07,Gt,.03);q.position.set(0,g(80,42)[1],.03),Rt.add(q)}let gt=new ue;gt.visible=!1,w.add(gt);for(let q of[29,131]){let[A,j]=g(q,50),U=new se(new qn(.2,.045,10,24),K);U.position.set(A,j,.05),gt.add(U);let it=new se(new Gi(.2,24),Zt);it.position.set(A,j,.06),gt.add(it)}{let q=p(1.66,.1,v+.06,K,.03);q.position.set(0,g(80,50)[1],-v/2),gt.add(q)}let Lt=new ue;Lt.visible=!1;{let q=new se(new In(.1,.09,.2,18),et);q.position.y=0,Lt.add(q);let A=new se(new In(.085,.085,.02,18),vt);A.position.y=.095,Lt.add(A);let j=new se(new qn(.06,.018,8,14),et);j.position.set(.12,0,0),Lt.add(j),Lt.position.set(.1,-.34,.26),S.add(Lt)}let me={spider:{body:12658477,legs:1916830,hands:12658477,cape:null},thor:{body:4871790,legs:3883606,hands:9279139,cape:11739178},captain:{body:2312872,legs:2312872,hands:12658477,cape:null},iron:{body:11739178,legs:11739178,hands:14725168,cape:null},strange:{body:2903966,legs:2375552,hands:15255968,cape:11739178},superman:{body:2056150,legs:2056150,hands:2056150,cape:12658477},batman:{body:2764084,legs:2106154,hands:2106154,cape:1382172}},Ot=new ge({color:12658477,roughness:.8,side:Qe}),Vt=p(1.7,1.25,.05,Ot,.02);Vt.position.set(0,.5,-v/2-.04),Vt.visible=!1,E.add(Vt);let Jt=new ue;Jt.visible=!1;{let q=p(.07,.5,.07,new ge({color:8014364}),.02);q.position.y=-.1,Jt.add(q);let A=p(.4,.2,.2,new ge({color:9279139,metalness:.6,roughness:.3}),.03);A.position.y=.2,Jt.add(A),Jt.position.set(.1,-.3,.2),S.add(Jt)}let Nt=new ue;Nt.visible=!1;{for(let[q,A,j]of[[.36,12658477,0],[.28,16777215,.012],[.2,12658477,.024],[.12,2312872,.036]]){let U=new se(new In(q,q,.03,28),new ge({color:A,roughness:.4,metalness:.2}));U.rotation.x=Math.PI/2,U.position.z=j,Nt.add(U)}Nt.position.set(-.12,-.34,.26),b.add(Nt)}let ne=new xn({color:16757575}),re=new se(new qn(.3,.025,8,28),ne),ve=re.clone();re.visible=ve.visible=!1,re.position.set(-.1,-.4,.2),ve.position.set(.1,-.4,.2),b.add(re),S.add(ve);let ae=new xn({color:16053492}),oe=new se(new In(.012,.012,1.4,6),ae);oe.visible=!1,oe.position.set(0,1.5,0),u.add(oe);let N=new ge({color:2106154}),_e=new ue;_e.visible=!1;for(let q of[-.5,.5]){let A=new se(new xs(.16,.3,4),N);A.position.set(q,1.28,0),_e.add(A)}E.add(_e);let Yt=new ue;Yt.visible=!1,w.add(Yt);for(let q of[29,131]){let[A,j]=g(q,50),U=p(.4,.2,.05,new xn({color:16777215}),.05);U.position.set(A,j,.05),U.rotation.z=(q<80?-1:1)*.22,Yt.add(U)}let T=new ue;T.visible=!1,T.scale.set(.7,.85,.85),T.position.y=.12,u.add(T);{let q=new ge({color:7028522,roughness:.7}),A=new ge({color:12597547,roughness:.6}),j=p(3,.2,.78,q,.09);j.position.set(0,-.58,0),T.add(j);let U=p(3.02,.05,.8,A,.02);U.position.set(0,-.47,0),T.add(U);for(let it of[-1,1]){let at=p(.42,.16,.5,q,.06);at.position.set(it*1.6,-.5,0),at.rotation.z=it*.35,T.add(at)}}let f={costume:"none",act:"idle",eyes:"sleep",dir:1,item:"",shades:"none",coffee:!1,think:"scratch"},O=document.createElement("div");O.id="item3d",ji.appendChild(O);let V=new Ft,Z=new Ft,ot=new Ft,ct=()=>o.color.copy(f.costume!=="none"?ot:Z),X=(q,A,j)=>q+(A-q)*j,tt=()=>window.__vnow?window.__vnow():performance.now(),ut=0,Et=0,dt=tt(),ht=!0,Mt=0;Ct(),window.__buddy3d={ok:!0,update(q){if(ht=!0,Mt=12,q.act&&(f.act=q.act),q.eyes&&F[q.eyes]&&(f.eyes=q.eyes),q.dir&&(f.dir=q.dir>0?1:-1),q.color&&(V.set(q.color),f.costume==="none"&&(a.color.copy(V),a.emissive.copy(V),o.emissive.copy(V),C.color.copy(V),C.emissive.copy(V))),q.color2&&Z.set(q.color2),"costume"in q){f.costume=q.costume;let j=me[q.costume];j?(a.color.setHex(j.body),a.emissive.setHex(j.body),ot.setHex(j.hands),o.emissive.setHex(j.hands),C.color.setHex(j.legs),C.emissive.setHex(j.legs),j.cape&&Ot.color.setHex(j.cape)):(a.color.copy(V),a.emissive.copy(V),o.emissive.copy(V),C.color.copy(V),C.emissive.copy(V))}"shades"in q&&(f.shades=q.shades),"coffee"in q&&(f.coffee=q.coffee),q.think&&(f.think=q.think);let A=["type","read","search","walk"].includes(f.act)?"":q.item||"";A!==f.item&&(f.item=A,O.textContent=A)},resize(){ht=!0;let q=ji.clientWidth,A=ji.clientHeight;un.setSize(q,A),n.aspect=q/A,n.updateProjectionMatrix()}}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
