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
var shortCutIsVaild = false;
setTimeout(function () {
    shortCutIsVaild = true;
}, 700);
$(document).on('keydown', function (e) {
    if (shortCutIsVaild) {
        var tagName = e.target.nodeName;
        if ((tagName != 'INPUT') && (tagName != 'TEXTAREA') && (tagName != 'SELECT') && (e.target.className.indexOf('fr-view') == -1) && (e.target.className.indexOf('comment-textarea') == -1)) {
            if (e.ctrlKey) return;
            if (e.shiftKey) return;
            if (e.altKey) return;
            if (e.metaKey) return;
            var pressedKey = e.key.toLowerCase();
            $.each(keyData, function (key, val) {
                if (key == pressedKey) {
                    window.location.href = val;
                }
            });
        }
    }
});

$(document).on('keydown',function(e){
    if(shortCutIsVaild){
        var tagName = e.target.nodeName;
        if ((tagName != 'INPUT') && (tagName != 'TEXTAREA') && (tagName != 'SELECT') && (e.target.className.indexOf('fr-view') == -1) && (e.target.className.indexOf('comment-textarea') == -1)) {
            if (e.ctrlKey) return;
            if (e.shiftKey) return;
            if (e.altKey) return;
            if (e.metaKey) return;
            var pressedKey = e.key.toLowerCase();
            if(pressedKey == 'ㄱ'){
                if ($('*[data-role=comment-newest]').length) {
                    $('*[data-role=comment-newest] button').trigger('click');
                }
            }
        }
    }
});