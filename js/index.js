window.onload = function(){
    // 스킬 프로그레스
    function progressBar(selector, gauge, color){
        var bar = new ProgressBar.Circle(selector, {
            strokeWidth: 20,  //채워지는 선의 굵기
            easing: 'easeInOut',
            duration: 1400,
            color: color,
            trailColor: '#EBEBEB', // 배경 선 색상
            trailWidth: 20, //배경 선의 긁기
            // step : function(state, circle){
            //     circle.setText(Math.round(circle.value() *100)+"%")
            // }
        });
        bar.animate(gauge);
        return bar; // Return the progress bar instance
    }

    let observe = new IntersectionObserver(function(entries){
        entries.forEach(function(item){
            if(item.isIntersecting){
                proPs.animate(0.6)
                proAi.animate(0.9)
                proAe.animate(0.5)
                proPr.animate(0.6)
                proId.animate(0.3)
                proHtml.animate(0.5)
                proCss.animate(0.6)
                proJs.animate(0.2)
                proFigma.animate(0.7)
                proBlender.animate(0.5)
            }else{
                proPs.animate(0)
                proAi.animate(0)
                proAe.animate(0)
                proPr.animate(0)
                proId.animate(0)
                proHtml.animate(0)
                proCss.animate(0)
                proJs.animate(0)
                proFigma.animate(0)
                proBlender.animate(0)
            }
        })
    })
    let skillSection = document.querySelector(".skill")

    // Start the progress bars with initial values
    let proPs = progressBar(".ps", 0, "#1080E8");
    let proAi = progressBar(".ai", 0, "#FF9A00");
    let proAe = progressBar(".ae", 0, "#4B4BE1");
    let proPr = progressBar(".pr", 0, "#5151CF");
    let proId = progressBar(".id", 0, "#F6537F");
    let proHtml = progressBar(".html", 0, "#FF835C");
    let proCss = progressBar(".css", 0, "#52B2FF");
    let proJs = progressBar(".js", 0, "#FFBD3D");
    let proFigma = progressBar(".figma", 0, "#747474");
    let proBlender = progressBar(".blender", 0, "#FF7021");
    observe.observe(skillSection)

    // 영상 포폴
}


    