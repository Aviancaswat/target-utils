// obteniendo el valor de una cookie por su nombre
var getCookie = function (name) {
    var cookieString = document.cookie;
    var cookies = cookieString.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
};

// seteando una cookie con uan expiración de 30 minutos, y un dominio opcional
var setCookieBasket = function (name, value, domain) {
    var minutes = 30;
    var date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    var expires = "; expires=" + date.toUTCString();
    var domainAttribute = domain ? "; domain=" + domain : "";
    document.cookie = name + "=" + (value || "") + expires + "; path=/" + domainAttribute;
};