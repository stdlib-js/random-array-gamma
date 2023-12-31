// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gamma@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-ctors@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-dtypes@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";var j="float64",g=f();function c(e,t){return u(t)?h(t,"dtype")&&(e.dtype=t.dtype,g.indexOf(e.dtype)<0)?new TypeError(p('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"dtype",g.join('", "'),e.dtype)):null:new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",t))}function v(){var f,u,h,g,v,y;if(h={dtype:j},0===(u=arguments.length))v=d,g=x;else if(1===u){if(f=arguments[0],v=d.factory(f),y=c(h,f))throw y;g=x}else if(2===u)v=d.factory(arguments[0],arguments[1]),g=b;else if(3===u){if(f=arguments[2],v=d.factory(arguments[0],arguments[1],f),y=c(h,f))throw y;g=b}return f&&f.prng?(e(g,"seed",null),e(g,"seedLength",null),s(g,"state",r(null),i),e(g,"stateLength",null),e(g,"byteLength",null)):(n(g,"seed",w),n(g,"seedLength",L),s(g,"state",P,R),n(g,"stateLength",G),n(g,"byteLength",N)),e(g,"PRNG",v.PRNG),g;function b(e,n){var s,r,i,d;if(!t(e))throw new TypeError(p("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",e));if(d={},arguments.length>1&&(r=c(d,n)))throw r;return"generic"===(i=d.dtype||h.dtype)?l(e,v):(s=new(o(i))(e),m([s],[e],[1],v),s)}function x(e,n,s,r){var i,d,m,f;if(!t(e))throw new TypeError(p("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",e));if(f={},arguments.length>3&&(d=c(f,r)))throw d;return"generic"===(m=f.dtype||h.dtype)?l(e,u):(i=new(o(m))(e),a([[n],[s],i],[e],[0,0,1],v),i);function u(){return v(n,s)}}function w(){return g.PRNG.seed}function L(){return g.PRNG.seedLength}function G(){return g.PRNG.stateLength}function N(){return g.PRNG.byteLength}function P(){return g.PRNG.state}function R(e){g.PRNG.state=e}}g.push("generic");var y=v();e(y,"factory",v);export{y as default,v as factory};
//# sourceMappingURL=index.mjs.map
