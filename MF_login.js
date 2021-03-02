// ==UserScript==
// @name         IDaaSログイン制御
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        https://id.moneyforward.com/*
// @match        https://enterprise-accounting.moneyforward.com/session/new
// @match        https://app.asana.com/*
// @match        https://esa.io/
// @grant        none
// @updateURL    https://raw.githubusercontent.com/karakuri-ai/IDaaS_userscript/main/MF_login.js
// @downloadURL  https://raw.githubusercontent.com/karakuri-ai/IDaaS_userscript/main/MF_login.js
// ==/UserScript==

(function() {
    'use strict';
    const path = location.pathname;
    const url = location.href;
    if (path == "/account_selector") {
        const otherAccount = document.getElementsByClassName("m2Hwu1pT mainNavigationLink _2aYDBMl2 bizDomain")[0];
        console.log(otherAccount);
        otherAccount.click();
    }

    if (path == "/sign_in/new") {
        console.log(document.getElementsByClassName("_2YH0UDm8 ssoLink").item(0));
        if (typeof(document.getElementsByClassName("_2YH0UDm8 ssoLink")[0]) === "undefined") {location.reload();}
        const loginByEmail = document.getElementsByClassName("_2YH0UDm8 ssoLink").item(0);
        console.log(loginByEmail);
        loginByEmail.click();
    }

    if (url == "https://enterprise-accounting.moneyforward.com/session/new") {
        const login_with_id = document.getElementsByClassName("ca-btn-save ca-btn-login ca-btn-size-medium").item(0);
        login_with_id.click();
    }

    if(url == 'https://esa.io/') {
        console.log(url);
        const loginbtn = document.getElementsByClassName("btn btn-skeleton lp-navbar__sign-in pull-right")[0];
        console.log(loginbtn);
        loginbtn.click();
    }

    if(url == 'https://app.asana.com/-/login') {
        console.log(url);
        const loginbtn = document.getElementsByClassName("AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--large SecondaryButton GoogleSignInButton--sparse GoogleSignInButton LoginContent-ssoButton LoginContent-ssoButton--reskin")[0];
        console.log(loginbtn);
        loginbtn.click();
    }
})();;
