(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[1],{278:function(t,i,r){"use strict";var e={hash:{},misc:{},codec:{},exception:{corrupt:function(t){this.toString=function(){return"CORRUPT: "+this.message},this.message=t},invalid:function(t){this.toString=function(){return"INVALID: "+this.message},this.message=t},bug:function(t){this.toString=function(){return"BUG: "+this.message},this.message=t},notReady:function(t){this.toString=function(){return"NOT READY: "+this.message},this.message=t}}};e.bitArray={bitSlice:function(t,i,r){return t=e.bitArray._shiftRight(t.slice(i/32),32-(31&i)).slice(1),void 0===r?t:e.bitArray.clamp(t,r-i)},extract:function(t,i,r){var e=Math.floor(-i-r&31);return(-32&(i+r-1^i)?t[i/32|0]<<32-e^t[i/32+1|0]>>>e:t[i/32|0]>>>e)&(1<<r)-1},concat:function(t,i){if(0===t.length||0===i.length)return t.concat(i);var r=t[t.length-1],n=e.bitArray.getPartial(r);return 32===n?t.concat(i):e.bitArray._shiftRight(i,n,0|r,t.slice(0,t.length-1))},bitLength:function(t){var i,r=t.length;return 0===r?0:(i=t[r-1],32*(r-1)+e.bitArray.getPartial(i))},clamp:function(t,i){if(32*t.length<i)return t;var r=(t=t.slice(0,Math.ceil(i/32))).length;return i&=31,r>0&&i&&(t[r-1]=e.bitArray.partial(i,t[r-1]&2147483648>>i-1,1)),t},partial:function(t,i,r){return 32===t?i:(r?0|i:i<<32-t)+1099511627776*t},getPartial:function(t){return Math.round(t/1099511627776)||32},equal:function(t,i){if(e.bitArray.bitLength(t)!==e.bitArray.bitLength(i))return!1;var r,n=0;for(r=0;r<t.length;r++)n|=t[r]^i[r];return 0===n},_shiftRight:function(t,i,r,n){var s,h,a;for(void 0===n&&(n=[]);i>=32;i-=32)n.push(r),r=0;if(0===i)return n.concat(t);for(s=0;s<t.length;s++)n.push(r|t[s]>>>i),r=t[s]<<32-i;return h=t.length?t[t.length-1]:0,a=e.bitArray.getPartial(h),n.push(e.bitArray.partial(i+a&31,i+a>32?r:n.pop(),1)),n},_xor4:function(t,i){return[t[0]^i[0],t[1]^i[1],t[2]^i[2],t[3]^i[3]]},byteswapM:function(t){var i,r;for(i=0;i<t.length;++i)r=t[i],t[i]=r>>>24|r>>>8&65280|(65280&r)<<8|r<<24;return t}},e.codec.utf8String={fromBits:function(t){var i,r,n="",s=e.bitArray.bitLength(t);for(i=0;i<s/8;i++)0===(3&i)&&(r=t[i/4]),n+=String.fromCharCode(r>>>24),r<<=8;return decodeURIComponent(escape(n))},toBits:function(t){t=unescape(encodeURIComponent(t));var i,r=[],n=0;for(i=0;i<t.length;i++)n=n<<8|t.charCodeAt(i),3===(3&i)&&(r.push(n),n=0);return 3&i&&r.push(e.bitArray.partial(8*(3&i),n)),r}},e.codec.hex={fromBits:function(t){var i,r="";for(i=0;i<t.length;i++)r+=(0xf00000000000+(0|t[i])).toString(16).substr(4);return r.substr(0,e.bitArray.bitLength(t)/4)},toBits:function(t){var i,r,n=[];for(r=(t=t.replace(/\s|0x/g,"")).length,t+="00000000",i=0;i<t.length;i+=8)n.push(0^parseInt(t.substr(i,8),16));return e.bitArray.clamp(n,4*r)}},e.codec.bytes={fromBits:function(t){var i,r,n=[],s=e.bitArray.bitLength(t);for(i=0;i<s/8;i++)0===(3&i)&&(r=t[i/4]),n.push(r>>>24),r<<=8;return n},toBits:function(t){var i,r=[],n=0;for(i=0;i<t.length;i++)n=n<<8|t[i],3===(3&i)&&(r.push(n),n=0);return 3&i&&r.push(e.bitArray.partial(8*(3&i),n)),r}},e.hash.sha256=function(t){this._key[0]||this._precompute(),t?(this._h=t._h.slice(0),this._buffer=t._buffer.slice(0),this._length=t._length):this.reset()},e.hash.sha256.hash=function(t){return(new e.hash.sha256).update(t).finalize()},e.hash.sha256.prototype={blockSize:512,reset:function(){return this._h=this._init.slice(0),this._buffer=[],this._length=0,this},update:function(t){"string"===typeof t&&(t=e.codec.utf8String.toBits(t));var i,r=this._buffer=e.bitArray.concat(this._buffer,t),n=this._length,s=this._length=n+e.bitArray.bitLength(t);for(i=512+n&-512;i<=s;i+=512)this._block(r.splice(0,16));return this},finalize:function(){var t,i=this._buffer,r=this._h;for(t=(i=e.bitArray.concat(i,[e.bitArray.partial(1,1)])).length+2;15&t;t++)i.push(0);for(i.push(Math.floor(this._length/4294967296)),i.push(0|this._length);i.length;)this._block(i.splice(0,16));return this.reset(),r},_init:[],_key:[],_precompute:function(){var t,i=0,r=2;function e(t){return 4294967296*(t-Math.floor(t))|0}t:for(;i<64;r++){for(t=2;t*t<=r;t++)if(r%t===0)continue t;i<8&&(this._init[i]=e(Math.pow(r,.5))),this._key[i]=e(Math.pow(r,1/3)),i++}},_block:function(t){var i,r,e,n,s=t.slice(0),h=this._h,a=this._key,o=h[0],u=h[1],c=h[2],f=h[3],p=h[4],l=h[5],g=h[6],b=h[7];for(i=0;i<64;i++)i<16?r=s[i]:(e=s[i+1&15],n=s[i+14&15],r=s[15&i]=(e>>>7^e>>>18^e>>>3^e<<25^e<<14)+(n>>>17^n>>>19^n>>>10^n<<15^n<<13)+s[15&i]+s[i+9&15]|0),r=r+b+(p>>>6^p>>>11^p>>>25^p<<26^p<<21^p<<7)+(g^p&(l^g))+a[i],b=g,g=l,l=p,p=f+r|0,f=c,c=u,o=r+((u=o)&c^f&(u^c))+(u>>>2^u>>>13^u>>>22^u<<30^u<<19^u<<10)|0;h[0]=h[0]+o|0,h[1]=h[1]+u|0,h[2]=h[2]+c|0,h[3]=h[3]+f|0,h[4]=h[4]+p|0,h[5]=h[5]+l|0,h[6]=h[6]+g|0,h[7]=h[7]+b|0}},e.misc.hmac=function(t,i){this._hash=i=i||e.hash.sha256;var r,n=[[],[]],s=i.prototype.blockSize/32;for(this._baseHash=[new i,new i],t.length>s&&(t=i.hash(t)),r=0;r<s;r++)n[0][r]=909522486^t[r],n[1][r]=1549556828^t[r];this._baseHash[0].update(n[0]),this._baseHash[1].update(n[1]),this._resultHash=new i(this._baseHash[0])},e.misc.hmac.prototype.encrypt=e.misc.hmac.prototype.mac=function(t){if(this._updated)throw new e.exception.invalid("encrypt on already updated hmac called!");return this.update(t),this.digest(t)},e.misc.hmac.prototype.reset=function(){this._resultHash=new this._hash(this._baseHash[0]),this._updated=!1},e.misc.hmac.prototype.update=function(t){this._updated=!0,this._resultHash.update(t)},e.misc.hmac.prototype.digest=function(){var t=this._resultHash.finalize(),i=new this._hash(this._baseHash[1]).update(t).finalize();return this.reset(),i},e.misc.pbkdf2=function(t,i,r,n,s,h,a){if(r=r||1e3,n<0||r<0)throw e.exception.invalid("invalid params to pbkdf2");var o,u,c,f,p,l,g,b;"string"===typeof t&&(t=e.codec.utf8String.toBits(t)),"string"===typeof i&&(i=e.codec.utf8String.toBits(i)),s=s||e.misc.hmac;var _=!1;for(null!=a?(l=a.k,f=a.i,c=a.ui,u=a.u,o=a.prf,b=a.b,g=a.out,_=!0):(a={},o=new s(t),l=1,g=[],b=e.bitArray);32*g.length<(n||1);l++){for(_||(u=c=o.encrypt(b.concat(i,[l])),f=1),_=!1;f<r;f++){for(c=o.encrypt(c),p=0;p<c.length;p++)u[p]^=c[p];if(f<r&&f%200==0&&"function"===typeof h)return a.k=l,a.i=f+1,a.u=u,a.ui=c,a.prf=o,a.b=b,a.out=g,setTimeout(function(){e.misc.pbkdf2(t,i,r,n,s,h,a)},0),null}g=g.concat(u)}return n&&(g=b.clamp(g,n)),"function"===typeof h&&h(g),g},t.exports={sjcl:e}}}]);