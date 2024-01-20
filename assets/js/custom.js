function openJoin(){
    $("#joinModal").fadeIn();
    //$("body").addClass("is-article-visible");
    $("#header").hide();
    $("#footer").hide();
}

function closeJoin(){
    $("#joinModal").fadeOut();
    //$("body").removeClass("is-article-visible");
    $("#header").show();
    $("#footer").show();
}

function goRaidRule() {
    // 모달 열기
    $("#raidRuleModal").fadeIn();
    $("body").css("overflow", "hidden"); // 스크롤을 막습니다.
}

function closeRaidRuleModal() {
    // 모달 닫기
    $("#raidRuleModal").fadeOut();
    $("body").css("overflow", "auto"); // 스크롤을 다시 허용합니다.
}