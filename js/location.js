window.onload = function () {
WebLocation();
}
function WebLocation () {
//判断浏览器的首选语言
var language = navigator.language;
console.log(“11111”, language)
if (language == ‘zh-CN’) {
location.href = '/cnindex.html';
} else {
}
}
