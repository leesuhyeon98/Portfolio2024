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

    let videoWrap = document.querySelector(".swiper2 ul")
    let videoItem = document.querySelectorAll(".swiper-wrapper li")
    let videoData;
    const eventXhttp1 = new XMLHttpRequest();
    eventXhttp1.open("GET", "viewvideobox_data.json");
    eventXhttp1.send();
    eventXhttp1.onreadystatechange = function(event){
        const req = event.target;
        if(req.readyState === XMLHttpRequest.DONE){
            videoData = JSON.parse(req.response);
            videoSection()
        }
    }
    function videoSection(){
        let videoListHtml = ``
        for(let i = 0; i<videoData.item_count; i++){
            let obj = videoData[`item_${i + 1}`];
            let temp = `
            <li class="swiper-slide">
                <iframe src="https://www.youtube.com/embed/${obj.videoid}?autoplay" allowfullscreen></iframe>
                <div class="text">
                    <div class="info-text">
                        <h1>${obj.title}</h1>
                        <h2>작업기간 : ${obj.period}</h2>
                        <h3>사용툴 : <br>${obj.tool}</h3>
                        <h3><span>${obj.info}</span></h3>
                        <h4>프로젝트 본인 기여도 : <span>${obj.per}</span></h4>
                    </div>
                </div>
            </li>
            `
            videoListHtml += temp;
        }
        videoWrap.innerHTML = videoListHtml

        let videoThumb = new Swiper(".swiper2",{
            loop: true,
            loopedSlides : 7
            // effect : "fade"
        })

        videoItem.forEach(function(item, index){
            item.addEventListener("click", function(){
                let obj = videoData[`item_${index + 1}`];
                modalCont.innerHTML =`<iframe src="https://www.youtube.com/embed/${obj.videoid}?autoplay=1&mute=1" allowfullscreen></iframe>`
            })
        })
    }

    let workWrap = document.querySelector(".swiper1 ul")
    let workItem = document.querySelectorAll(".swiper-wrapper li")
    let workData;
    const eventXhttp = new XMLHttpRequest();
    eventXhttp.open("GET", "viewvideobox_data.json");
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

        let videoThumb = new Swiper(".swiper1",{
            loop: true,
            spaceBetween : 10,
            slidesPerView : 3,
            centeredSlides : true,
            loopedSlides : 7,
            slideToClickedSlide : true
        })

        
        workItem.forEach(function(item, index){
            item.addEventListener("click", function(){
                let obj = workData[`item_${index + 1}`];
                modalCont.innerHTML =`<iframe src="https://www.youtube.com/embed/${obj.videoid}?autoplay=1&mute=1" allowfullscreen></iframe>`
            })
        })
    }

    let videoCont = new Swiper(".video-cont",{
        loop: true,
        spaceBetween : 10,
        loopedSlides : 7
    })
    let videoThumb = new Swiper(".video-thumb",{
        loop: true,
        spaceBetween : 10,
        slidesPerView : 3,
        centeredSlides : true,
        loopedSlides : 7,
        slideToClickedSlide : true
    })
    videoCont.controller.control = videoThumb
    videoThumb.controller.control = videoCont
    

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


    