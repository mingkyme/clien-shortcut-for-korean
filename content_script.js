keyData = new Object();
keyData["ㅊ"] = "/service/group/community";
keyData["ㄹ"] = "/service/board/park";
keyData["ㅑ"] = "/service/board/image";
keyData["ㅂ"] = "/service/board/kin";
keyData["ㅇ"] = "/service/group/allinfo";
keyData["ㅜ"] = "/service/board/news";
keyData["ㅅ"] = "/service/board/useful";
keyData["ㅔ"] = "/service/board/pds";
keyData["ㄷ"] = "/service/group/allreview";
keyData["ㅣ"] = "/service/board/lecture";
keyData["ㅕ"] = "/service/board/use";
keyData["ㅈ"] = "/service/group/allsell";
keyData["ㅓ"] = "/service/board/jirum";
keyData["ㄴ"] = "/service/board/sold";
keyData["ㅠ"] = "/service/board/hongbo";
keyData["ㅗ"] = "/service/";
$(document).on('keydown',function(e){
    var pressedKey = e.key.toLowerCase();
    $.each(keyData, function(key, val) {
        if (key == pressedKey) {
            window.location.href = val;
        }
    });
});
