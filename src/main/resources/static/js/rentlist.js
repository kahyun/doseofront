$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:7070/rent/list",
        // data: form, // api 호출을 위한 요청 변수가 필요하다면 사용해주세요.
        dataType: "json"
    })
        .done(function (result) {
            console.log(result);
            const select = $('#rentlist');
            result.forEach(item => {
                select.append(`
                <div class="record">
                    <div><strong>도서명:</strong> ${item.articleId}</div>
                    <div><strong>작가:</strong> ${item.borrowerId}</div>
                    <div><strong>상태:</strong> ${item.state}</div>
                    <div><strong>빌린 날짜:</strong> ${item.rentDate}</div>
                    <div><strong>반납 날짜:</strong> ${item.returnDate}</div>
                </div>
`);
            });
        })
        .fail(function(jqXHR) {
            console.log(jqXHR);
        })

})