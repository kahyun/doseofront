$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:7070/book/list",
        // data: form, // api 호출을 위한 요청 변수가 필요하다면 사용해주세요.
        dataType: "json"
    })
        .done(function (result) {
            console.log(result);
            const select = $('#booklist');
            result.forEach(item => {
                select.append(`<div class="boo">
                                    <div>책아이디 : ${item.bookId}</div>
                                    <div>책이름 : ${item.name}</div>
                                    <div>작가 : ${item.getWriter()}</div>
                                    <div>등록자 : ${item.registant}</div>
                                </div>`);
            });
        })
        .fail(function(jqXHR) {
            console.log(jqXHR);
        })

})