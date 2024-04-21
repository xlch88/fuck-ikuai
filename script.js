// ==UserScript==
// @name         屏蔽ikuai强制绑定爱快e云平台弹窗
// @namespace    https://github.com/xlch88/fuck-ikuai/
// @author       Dark495 (https://dark495.me/)
// @version      2024-04-22
// @license      WTFPL
// @description  所有强制弹窗的都死一户口本
// @author       Dark495
// @match        *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.ikuai8.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let s = setInterval(()=>{
        let a = $('div[style="position: fixed; top: 0px; left: 0px; width: 100vw; height: 406vh; z-index: 1000; background-color: rgba(0, 0, 0, 0.4);"]');
        if(a){
            clearInterval(s);
            a.remove();
        }
    }, 100);
})();