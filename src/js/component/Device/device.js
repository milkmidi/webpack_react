/**
 *@author milkmidi
 *@version 1.0.1
 */

let fbWebView = false;
let lineWebView = false;
let uiwebview = false;

const userAgent = window.navigator.userAgent.toLowerCase();
const { standalone } = window.navigator;
const safari = /safari/.test(userAgent);
const ios = /iphone|ipod|ipad/.test(userAgent);
fbWebView = /fbid|fbios|fblc|fb_iab|fb4a|fbav/.test(userAgent);
lineWebView = /line/i.test(userAgent);
uiwebview = false;
if (ios) {
  if (!standalone && safari) {
    // iosType = 'ios browser';
  } else if (standalone && !safari) {
    // iosType = 'ios standalone';
  } else if (!standalone && !safari) {
    // iosType = 'ios uiwebview';
    uiwebview = true;
  }
}


export const isWebView = uiwebview || fbWebView || lineWebView;
export const isFBWebView = fbWebView;
export const isLineWebView = lineWebView;
