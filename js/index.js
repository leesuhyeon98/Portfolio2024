window.onload = function(){
    // 스킬 프로그레스
    function progressBar(selector, guage, color){
        var bar = new ProgressBar.Circle(selector, {
            strokeWidth: 20,  //채워지는 선의 굵기
            easing: 'easeInOut', //애니메이션 속도
            duration: 1400,  //총 진행 시간
            color: color,  //채워지는 선 색상
            trailColor: '#EBEBEB', // 배경 선 색상
            trailWidth: 20, //배경 선의 긁기
            // svgStyle: {width: '100%', height: '100%'} 지워도 상관 없음
        });
        bar.animate(guage)
    }
    let bar1 = progressBar(".ps", 0.6, "#1080E8");
    let bar2 = progressBar(".ai", 0.95, "#FF9A00");
    let bar3 = progressBar(".ae", 0.5, "#4B4BE1");
    let bar4 = progressBar(".pr", 0.6, "#5151CF");
    let bar5 = progressBar(".id", 0.3, "#F6537F");
    let bar6 = progressBar(".html", 0.5, "#FF835C");
    let bar7 = progressBar(".css", 0.6, "#52B2FF");
    let bar8 = progressBar(".js", 0.3, "#FFBD3D");
    let bar9 = progressBar(".figma", 0.7, "#747474");
    let bar10 = progressBar(".Blender", 0.5, "#FF7021");
    
}