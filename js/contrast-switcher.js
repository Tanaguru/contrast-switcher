/**
 * Contrast switcher
 *
 * Change stylesheet to activate one with high contrast colours.
 *
 * Initial script from: https://alistapart.com/article/alternate/
 * Modified by Tanaguru
 */

function setActiveStyleSheet(id) {
    var i, a;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("id")) {
            a.disabled = true;
            if(a.getAttribute("id") == id) {
                createCookie("style", id, 365);
                a.disabled = false;
            }
        }
    }
}

function getActiveStyleSheet() {
    var i, a;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("id") && !a.disabled) return a.getAttribute("id");
    }
    return null;
}

function getPreferredStyleSheet() {
    var i, a;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
        && a.getAttribute("rel").indexOf("alt") == -1
        && a.getAttribute("id")
        ) return a.getAttribute("id");
    }
    return null;
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function(event) {
    var cookie = readCookie('style');
    var id = cookie ? cookie : getPreferredStyleSheet();
    setActiveStyleSheet(id);
}, false);
