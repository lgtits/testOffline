import{b as d}from"./index.a85485c5.js";const i=function(){return document.ontouchstart!==null?"click":"touchstart"},e="__vue_click_away__",l=function(t,n,o){s(t);let r=o.context,c=n.value,u=!1;setTimeout(function(){u=!0},0),t[e]=function(a){if((!t||!t.contains(a.target))&&c&&u&&typeof c=="function")return c.call(r,a)},document.addEventListener(i(),t[e],!1)},s=function(t){document.removeEventListener(i(),t[e],!1),delete t[e]},f=function(t,n,o){n.value!==n.oldValue&&l(t,n,o)},m={install:function(t){t.directive("click-away",v)}},v={mounted:l,updated:f,unmounted:s};var p=d(({app:t})=>{t.use(m)});export{p as default};
