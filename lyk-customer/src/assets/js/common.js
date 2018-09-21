!function (win) {
    function resize() {
        var domWidth = domEle.getBoundingClientRect().width;
        if (domWidth / v > 540) {
            domWidth = 540 * v;
        }
        win.rem = domWidth / 16;
        domEle.style.fontSize = win.rem + "px";
    }

    var v, initial_scale, timeCode, dom = win.document, domEle = dom.documentElement,
        viewport = dom.querySelector('meta[name="viewport"]'), flexible = dom.querySelector('meta[name="flexible"]');
    if (viewport) {
        //viewport：<meta name="viewport"content="initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5,user-scalable=no,minimal-ui"/>
        var o = viewport.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
        if (o) {
            initial_scale = parseFloat(o[2]);
            v = parseInt(1 / initial_scale);
        }
    } else {
        if (flexible) {
            var o = flexible.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
            if (o) {
                v = parseFloat(o[2]);
                initial_scale = parseFloat((1 / v).toFixed(2))
            }
        }
    }
    if (!v && !initial_scale) {
        var n = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi));
        v = win.devicePixelRatio;
        v = n ? v >= 3 ? 3 : v >= 2 ? 2 : 1 : 1, initial_scale = 1 / v
    }
    //没有viewport标签的情况下
    if (domEle.setAttribute("data-dpr", v), !viewport) {
        if (viewport = dom.createElement("meta"), viewport.setAttribute("name", "viewport"), viewport.setAttribute("content", "initial-scale=" + initial_scale + ", maximum-scale=" + initial_scale + ", minimum-scale=" + initial_scale + ", user-scalable=no"), domEle.firstElementChild) {
            domEle.firstElementChild.appendChild(viewport)
        } else {
            var m = dom.createElement("div");
            m.appendChild(viewport), dom.write(m.innerHTML)
        }
    }
    win.dpr = v;
    win.addEventListener("resize", function () {
        clearTimeout(timeCode), timeCode = setTimeout(resize, 300)
    }, false);
    win.addEventListener("pageshow", function (b) {
        b.persisted && (clearTimeout(timeCode), timeCode = setTimeout(resize, 300))
    }, false);

    resize();
}(window);


function dateFormat(date, format) {

    date = new Date(date);
    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };

    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        }
        else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
}

function days(date) {
    var now = new Date();
    var days = parseInt((date - now)/(1000*60*60*24));
    if(days<0){
        days=Math.abs(days)
    }
    return days;
}

//验证手机号码
function vaidPhone(phone) {
    if (phone == '') {
        return 1;
    }
    if (!(/^1[34578][0-9]{9}$/.test(phone))) {
        return 2;
    }
    return 0;
}
//验证密码
function vaidPassword(password){
    if (password == '') {
        return 1;
    }
    if(!(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/.test(password))){
        return 2;
    }

    return 0;
}
document.getElementsByTagName('title')[0].innerHTML='零用卡-能赊账(vue)';
