window.onload = function(){
    // 스크롤 내리면 헤더 액티브
    let header = document.querySelector(".header")
    window.addEventListener("scroll",function(){
        if(window.scrollY >= 1000){
            header.classList.add("active")
        }else{
            header.classList.remove("active")
        }
    })
    // 홈 영상
    let video = document.querySelector("video")
    // 프로그레스 바
    let visualBar = document.querySelector(".progress")
    let proBar = document.querySelector(".progress .bar")
    video.addEventListener("timeupdate",function(){
        let percent = (video.currentTime / video.duration) *100;
        proBar.style.width = `${percent}%`
    })

    // 클릭시 원하는 위치 이동
    visualBar.addEventListener("click", function(e){
        let time = (e.offsetX / visualBar.offsetWidth) *video.duration
        video.currentTime = time
    })

    // 재생 일시정지 버튼
    let playBtn = document.querySelector(".play-btn")
    function togglePlay(){
        if(video.paused){
            video.play()
        }else{
            video.pause()
        }
    }
    playBtn.addEventListener("click",togglePlay)
    video.addEventListener("click",togglePlay)
    function updateBtn(){
        let icon = this.paused ? `<i class="fa-solid fa-play fa-2x"></i>` : `<i class="fa-solid fa-pause fa-2x"></i>`
        playBtn.innerHTML = icon
    }
    video.addEventListener("play", updateBtn)
    video.addEventListener("pause", updateBtn)

    // 음소거 기능 버튼
    let volumeBtn = document.querySelector(".volume-btn")
    volumeBtn.addEventListener("click", function(){
        if(video.muted){
            video.muted = false
            volumeBtn.innerHTML = `<i class="fa-solid fa-volume-high fa-2x"></i>`
        }else{
            video.muted = true
            volumeBtn.innerHTML = `<i class="fa-solid fa-volume-xmark fa-2x"></i>`
        }
    })
    if(video.muted){
        volumeBtn.innerHTML = `<i class="fa-solid fa-volume-xmark fa-2x"></i>`
    }else{
        volumeBtn.innerHTML = `<i class="fa-solid fa-volume-high fa-2x"></i>`
    }

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
    let modal = document.querySelector(".modal")
    let body = document.querySelector("body")
    let workWrap = document.querySelector(".work ul")
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
        for(let i = 0; i < workData.work.length; i++){
            let obj = workData.work[i];
            let temp = `
                <li>
                    <div class="thumb-img">
                        <img src="https://img.youtube.com/vi/${obj.videoid}/mqdefault.jpg" alt="썸네일 이미지">
                    </div>
                    <div class="view-cont">
                        <div class="player">
                            <iframe src="https://www.youtube.com/embed/${obj.videoid}?autoplay=1&mute=1" allowfullscreen></iframe>
                        </div>
                        <div class="info">
                            <h1>${obj.title}</h1>
                            <h2>작업기간 : ${obj.period}</h2>
                            <h3>사용툴 : ${obj.tool}</h3>
                            <p>${obj.info}.</p>
                            <p>프로젝트 본인 기여도 ${obj.per}</p>
                        </div>
                    </div>
                </li>
            `
            workListHtml += temp
        }
        workWrap.innerHTML = workListHtml

        let workItems = document.querySelectorAll(".work ul li")
    workItems.forEach(function(item,index){
        item.addEventListener("click", function(){
            modal.classList.add("active")
            modal.innerHTML = item.querySelector(".view-cont").outerHTML;
            body.classList.add("scrollfix")
        })
    })
    modal.addEventListener("click",function(){
            modal.classList.remove("active")
            body.classList.remove("scrollfix")
            modal.innerHTML = ""
    })
    }
    

    // 서브 포폴 탭
        let modal1 = document.querySelector(".modal2")
        let modalCont = document.querySelector(".modal-cont2")

        let workData2;
        const workXttp = new XMLHttpRequest();
        workXttp.open("GET", "tabsubpofol_data.json");
        workXttp.send();
        workXttp.onreadystatechange = function(event){
            const req = event.target;
            if(req.readyState === XMLHttpRequest.DONE){
                workData2 = JSON.parse(req.response);
                parseWork(workData2);
            }
        };

        function parseWork(_data){
            let workCate = document.querySelector(".work2 .tab-list2");
            workData2 = _data;
            let tabHtml = ``;
            let dataArr = _data.work;
            for(let i = 0; i < dataArr.length; i++){
                let html = `<li><a href="#">${dataArr[i].catename}</a></li>`;
                tabHtml += html;
            }
            workCate.innerHTML = tabHtml;

            let tabs = document.querySelectorAll(".work2 .tab-list2 li");
            for(let i = 0; i < dataArr.length; i++){
                tabs[0].classList.add("active");
                console.log(tabs[i]);
                tabs[i].addEventListener("click",function(event){
                    event.preventDefault();
                    workSlide(i)
                    for(let j = 0; j<tabs.length; j++){
                        tabs[j].classList.remove("active");
                    }
                    this.classList.add("active")
                    
                })
                
            }
            workSlide(0)
            
        }
        let workSwiper;
        function workSlide(_idx){
            let swworkHtml = ``;
            let listData = workData2.work[_idx].list;
            for(let i = 0; i < listData.length; i++){
                let obj = listData[i];
                let html = `
                    <li>
                        <div class="imgbox">
                            <img src="https://img.youtube.com/vi/${obj.videoid}/maxresdefault.jpg" alt="" ${obj.videoid ? "style='display:block'" : "style='display:none'"}>
                            <img src="../img/${obj.imgurl}" alt="" ${obj.imgurl ? "style='display:block'" : "style='display:none'"}>
                        </div>
                        <div class="txtbox">
                            <p class="title">${obj.title}</p>
                            <p class="writer" 
                                ${obj.period ? "style='display:block'" : "style='display:none'"}>
                                ${obj.period}
                            </p>
                        </div>
                    </li>
                `;
                swworkHtml += html;
            }
            let swworkWrapper = document.querySelector(".slide-wrap3 ul");
            swworkWrapper.innerHTML = swworkHtml;
            
            if(workSwiper){
                workSwiper.destroy();
            }
            workSwiper = new Swiper(".slide-wrap3", {
                slidesPerView: 1,
                spaceBetween: 15,
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                }
            })

            // 썸네일 클릭 > 모달 오픈
            
            let workItem = document.querySelectorAll(".slide-wrap3 ul li")
            workItem.forEach(function(item, index){
                item.addEventListener("click", function(){
                    let obj = workData2.work[_idx].list[index];
                    modal1.classList.add("active")
                    modalCont.innerHTML = `
                        <div class="view-img" ${obj.imgurl ? "style='display:block'" : "style='display:none'"}>
                            <img src="../img/${obj.imgurl}" alt="">
                        </div>
                        <div class="view-player" ${obj.videoid ? "style='display:block'" : "style='display:none'"}>
                            <iframe src="https://www.youtube.com/embed/${obj.videoid}" allowfullscreen></iframe>
                        </div>
                    `
                    setTimeout(function(){
                        modalCont.classList.add("active")
                    },500)
                    body.classList.add("scrollfix")
                })
            })
            modal1.addEventListener("click", function(){
                modal1.classList.remove("active")
                modalCont.classList.remove("active")
                body.classList.remove("scrollfix")
                modalCont.innerHTML = ``
            })
        }

} 