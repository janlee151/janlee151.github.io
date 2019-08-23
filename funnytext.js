var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/head.jpg");
         document.title = 'ヽ(●-`Д´-)ノ常来玩啊';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/head.jpg");
         document.title = 'ヾ(Ő∀Ő3)ノ欢迎你的到来！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });