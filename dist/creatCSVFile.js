"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n};module.exports=function(n,e){var r=arguments.length<=2||void 0===arguments[2]?",":arguments[2];if(!n||Array.isArray(n)&&!n.length||!Object.keys(n).length)return"传入数据为空";var t=[];if("object"===("undefined"==typeof n?"undefined":_typeof(n))&&Array.isArray(n)){var o=function(){var o=Array.isArray(n[0]);return n.some(function(n){return Array.isArray(n)!==o})?{v:"传入数据格式不一致"}:void(o?t=t.concat(n.map(function(n){return n.join(r)})):!function(){var o=[];if(n.forEach(function(n){return o=o.concat(Object.keys(n))}),o=o.filter(function(n,e,r){return r.indexOf(n)===e}),o.length>0)if(e&&"object"===("undefined"==typeof e?"undefined":_typeof(e))){var f=o.map(function(n){return e.hasOwnProperty(n)?e[n]:n});t.push(f.join(r))}else t.push(o.join(r));n.map(function(n){return o.map(function(e){return"undefined"!=typeof n[e]?n[e]:""})}).forEach(function(n){t.push(n.join(r))})}())}();if("object"===("undefined"==typeof o?"undefined":_typeof(o)))return o.v}else{if("object"!==("undefined"==typeof n?"undefined":_typeof(n)))return n;for(var f in n)e&&e.hasOwnProperty(f)?t.push(e[f]+","+n[f]):t.push(f+","+n[f])}return t.join("\r\n")};