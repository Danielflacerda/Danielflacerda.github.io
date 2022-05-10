function loadHtml(html){
    switch(html){
        case 1:
            $('.transform').toggleClass('transform-active');
            setTimeout(() => {
                    $(".profile-content").load("Career.html");
            }, 2000);
            break;
    }
}