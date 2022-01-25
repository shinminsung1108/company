function login() {
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');

    if(id.value == "rlawkdghks" && pw.value == "roqkqh") {
        location.href = '상단바.html';
    }
    else {
        alert("로그인 할 수 없습니다.")
    }
}