const setCookie = (name, value, expTime) => {
  let expTime = expTime * 24 * 60 * 60 * 1000;
  const expirationTime = new Date();
  expirationTime.setTime(expirationTime.getTime() + expTime);
  document.cookie = name + "=" + escape(value) + ";expires=" + expirationTime;
};

// for 循环判断
const getCookie = (name) => {
  if (document.cookie.length > 0 && document.cookie.includes(name)) {
    let cookieStr = document.cookie.split(";");
    let getCookieName = "";
    cookieStr.forEach((item) => {
      if (item.includes(name)) {
        getCookieName = unescape(item.split("=")[1]);
      }
    });
    return getCookieName;
  }
  return "";
};

// 字符操作
const getCookieStr = (name) => {
  if (document.cookie.length > 0 && document.cookie.includes(name)) {
    let cookieStr = document.cookie.split(";");
    let getCookieName = "";
    cookieStr.forEach((item) => {
      if (item.includes(name)) {
        getCookieName = unescape(item.split("=")[1]);
      }
    });
    return getCookieName;
  }
  return "";
};
