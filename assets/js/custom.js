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

function copyId(el){
    var copyText = el.innerText || el.textContent;
    var textArea = $("<textarea>");

    var textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);

    // 복사 완료 알림
    const Toast = Swal.mixin({
        toast: true,
        position: 'center-center',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
  
      Toast.fire({
        width: 500,
        icon: "success",
        title: "아이디가 클립보드에 복사되었습니다",
        text : copyText
      })
}
