!function(i){var n={};function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=i,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/js/",s(s.s=14)}({14:function(e,t){function c(){var e=$(this).scrollTop(),t=$("header").height();0<e&&0!=$(".devcon-nav").length?($("header").hide(),$(".devcon-nav").css("top","0"),$(".devCon").css("padding-top",t)):0!=$(".devcon-nav").length&&($("header").show(),$(".devcon-nav").css("top",t),$(".devCon").css("padding-top",2*t))}function o(){var e;switch($(this)[0].className){case"schedule-btn":e=".agenda__section h1";break;case"instructor-btn":e=".instructors__section h1";break;case"contact-btn":e=".contact__section h1";break;case"signup-btn":e=".signup__section"}var t=0;t=$("header").length&&!$("header").is(":hidden")&&0!=$(".devcon-nav").length?2*$("header").height():$("header").height(),$("html, body").animate({scrollTop:$(e).offset().top-t},1e3)}function a(){var e=$("header").height();$("header").length&&!$("header").is(":hidden")&&0!=$(".devcon-nav").length?($(".devcon-nav").css("top",e),$(".devcon-nav").css("height",e),$(".devCon").css("padding-top",2*e)):($(".devcon-nav").css("top",0),$(".devcon-nav").css("height",e));var t=$(".architecture img").width();if(window.matchMedia("(max-width: 360px)").matches)var i=.47*t,n=.11;else if(window.matchMedia("(max-width: 700px)").matches)i=.51*t,n=.11;else i=t/3.17,n=.18;var s=parseInt($(".architecture").css("padding-right")),c=parseInt($(".architecture").css("padding-left")),o=parseInt($(".architecture").css("padding-top"));parseInt($(".architecture").css("padding-bottom"));$(".head-node").css("top",o-$(".head-node").height()-2*parseInt($(".head-node").css("padding-top"))),$(".head-node").css("margin-left",-($(".head-node").width()+2*parseInt($(".head-node").css("padding-left")))/2),$(".developer-group").css("top",i*n*2+o),$(".developer-group").css("margin-left",-($(".developer-group").width()+2*parseInt($(".developer-group").css("padding-left")))/2),$(".pmc").css("top",i*n*2+o),$(".pmc").css("left",c-($(".pmc").width()+parseInt($(".pmc").css("padding-left"))+parseInt($(".pmc").css("padding-right")))/2),$(".committee").css("top",i*n*2+o),$(".committee").css("margin-right",s-($(".committee").width()+parseInt($(".committee").css("padding-left"))+parseInt($(".committee").css("padding-right")))/2),$(".maintainer").css("top",o+i),$(".maintainer").css("margin-left",c-($(".maintainer").width()+parseInt($(".maintainer").css("padding-left"))+parseInt($(".maintainer").css("padding-right")))/2),$(".committer").css("top",o+i),$(".committer").css("margin-left",c+t/3-($(".committer").width()+parseInt($(".committer").css("padding-left"))+parseInt($(".committer").css("padding-right")))/2),$(".contributor").css("top",o+i),$(".contributor").css("margin-right",s+t/3-($(".contributor").width()+parseInt($(".contributor").css("padding-left"))+parseInt($(".contributor").css("padding-right")))/2),$(".member").css("top",o+i),$(".member").css("margin-right",s-($(".member").width()+parseInt($(".member").css("padding-left"))+parseInt($(".member").css("padding-right")))/2)}function r(){"block"==$(".guide-content").css("display")&&($(".subtitle-guide").removeClass("subtitle-selected-bg"),$(".guide-content").hide(),$("#guide-collapse")[0].innerText="+"),"block"==$(".pr-content").css("display")?($(".subtitle-pr").removeClass("subtitle-selected-bg"),$(".pr-content").hide(),$("#pr-collapse")[0].innerText="+"):($(".subtitle-pr").addClass("subtitle-selected-bg"),$(".pr-content").show(),$("#pr-collapse")[0].innerText="-")}function d(){"block"==$(".pr-content").css("display")&&($(".subtitle-pr").removeClass("subtitle-selected-bg"),$(".pr-content").hide(),$("#pr-collapse")[0].innerText="+"),"block"==$(".guide-content").css("display")?($(".subtitle-guide").removeClass("subtitle-selected-bg"),$(".guide-content").hide(),$("#guide-collapse")[0].innerText="+"):($(".subtitle-guide").addClass("subtitle-selected-bg"),$(".guide-content").show(),$("#guide-collapse")[0].innerText="-")}$(document).ready(function(){var e,t,i,n=decodeURIComponent(location.hash);if(t=window.matchMedia("(max-width: 500px)").matches?e=60:(e=250,60),n&&("#contributor"==n?$("html, body").animate({scrollTop:$(".contributor__detail").offset().top-e},1e3):"#committer"==n?$("html, body").animate({scrollTop:$(".committer__detail").offset().top-e},1e3):"#architecture"==n&&$("html, body").animate({scrollTop:$(".organization__section .section-title").offset().top-t},1e3)),$(".meetup-landing-page-banner").length&&$(".swiper-slide").each(function(){var e=$(this),t=e.find(".meetup-date")[0];new Date(t.innerText).setHours(0,0,0,0)-18e6<new Date&&"活动回顾"!==e.find(".meetup-register")[0].innerText&&(e.find("a")[0].removeAttribute("href"),e.find(".meetup-register").text("报名结束"),e.find(".meetup-register").addClass("unclickable-btn"))}),$("header").length&&0!=$(".devcon-nav").length){var s=$("header").height();$(".devcon-nav").css("top",s),$(".devcon-nav").css("height",s),$(".devCon").css("padding-top",2*s)}$(".detail-block").hide(),a(),$(window).scroll(c),$(window).resize(a),$(".schedule-btn").click(o),$(".instructor-btn").click(o),$(".contact-btn").click(o),$(".signup-btn").click(o),$(".instructor").click(function(){if(window.matchMedia("(max-width: 1024px)").matches){$(".intro").css("opacity","0");$(this).find(".intro").css("opacity","1")}}),$(".team").click(function(){if(window.matchMedia("(max-width: 1024px)").matches){$(".middle-overlay").css("opacity","0"),$(".middle-cover").css("opacity","1"),$(".award-info").css("opacity","1");$(this).find(".middle-overlay").css("opacity","1"),$(this).find(".middle-cover, .award-info").css("opacity",0)}}),$(".project").click(function(){if(window.matchMedia("(max-width: 1024px)").matches){$(".project-desc").css("opacity","0");$(this).find(".project-desc").css("opacity","1")}}),$(".section-burger").click(function(){"block"==$(".dropdown-btns").css("display")?$(".dropdown-btns").css("display","none"):$(".dropdown-btns").css("display","block")}),$(".agenda__table .collapsable").click(function(){window.matchMedia("(min-width: 550px)").matches&&(i&&(i.removeClass("selected-bg"),i.children()[3].innerText="+"),$(this).addClass("selected-bg"),"none"==$(this).next()[0].style.display?($(".detail-block").hide(),$(this).next().show(),$(this).children("td")[3].innerText="-"):($(this).next().hide(),$(this).removeClass("selected-bg"),$(this).children("td")[3].innerText="+"),i=$(this))}),$(".subtitle-pr").click(r),$(".subtitle-guide").click(d),$(".committer").click(function(){$("html, body").animate({scrollTop:$(".committer__detail").offset().top-80},1e3)}),$(".contributor").click(function(){$("html, body").animate({scrollTop:$(".contributor__detail").offset().top-70},1e3)})})}});