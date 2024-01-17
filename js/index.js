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
                proPs.animate(0.5)
                proAi.animate(0.9)
                proAe.animate(0.5)
                proPr.animate(0.6)
                proId.animate(0.3)
                proHtml.animate(0.5)
                proCss.animate(0.2)
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
    let workWrap = document.querySelector(".swiper-wrapper")
    let body = document.querySelector("body")

    let workData;
    const eventXhttp = new XMLHttpRequest();
    eventXhttp.open("GET", "video_data.json");
    eventXhttp.send();
    eventXhttp.onreadystatechange = function(event){
        const req = event.target;
        if(req.readyState === XMLHttpRequest.DONE){
            workData = JSON.parse(req.response);
            workSection()
        }
    }
    function workSection(){
        let workListHtml = ``
        for(let i = 0; i<workData.item_count; i++){
            let obj = workData[`item_${i + 1}`];
            let temp = `
                <li class="swiper-slide">
                    <div class="thumb-img">
                    <img src="https://img.youtube.com/vi/${obj.videoid}/mqdefault.jpg" alt="썸네일">
                    </div>
                    <div class="text">
                        <h1>${obj.cate}</h1>
                        <h2>작업기간 : ${obj.period}</h2>
                        <h3>사용툴 : ${obj.tool}</h3>
                    </div>
                </li>
            `
            workListHtml += temp;
        }
        workWrap.innerHTML = workListHtml
    }
    let galleryThumb = new Swiper(".swiper",{
        loop: true,
        spaceBetween : 10,
        slidesPerView : 5,
        centeredSlides : true,
        loopedSlides : 5,
        slideToClickedSlide : true
    })

    // 서브 포폴 탭
    let tabs = document.querySelectorAll(".sub-portfolio .sub-tabs li")
    let tabCont = document.querySelectorAll(".sub-portfolio .slide-wrap")

    for(let i =0; i < tabs.length; i++){
        tabs[i].onclick = function(event){
            event.preventDefault();
            for(let j =0; j< tabs.length; j++){
                tabs[j].classList.remove("active")
                tabCont[j].classList.remove("active")
            }
            this.classList.add("active")
            tabCont[i].classList.add("active")
        }
    }
}


    