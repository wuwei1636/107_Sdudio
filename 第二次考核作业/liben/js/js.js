class Slide {
    constructor() {
      this.slideBoxDOM = document.querySelector('.slide-box');
      this.slideLeftBtnDOM = this.slideBoxDOM.querySelector('.slide-left-btn');
      this.slideRightBtnDOM = this.slideBoxDOM.querySelector('.slide-right-btn ');
      this.bannerBoxDOM = this.slideBoxDOM.querySelector('.banner-box');
      this.paginationBoxDOM = this.slideBoxDOM.querySelector('.pagination-box');
  
      this._currentIndex = 0;
      this.bannerItemDOMs = null;
      this.bannerItemDOMsLen = 0;
  
      
      this.banners = [
        {
          imageName: '01.jpg',
        },
        {
          imageName: '02.jpg',
        },
        {
          imageName: '03.jpg',
        },
        {
          imageName: '04.jpg',
        },
        
      ];
      this.imageUrl = './images/';
  
    
      this.timer = null;
    }
  
    get currentIndex() {
      return this._currentIndex;
    }
  
    
 set currentIndex(num) {
    
      Object.values(this.bannerItemDOMs).forEach((item, i) => {
        item.classList.remove('left', 'middle', 'right');
        item.onclick = null;
        this.paginationBoxDOM.children[i].classList.remove('chose');
      });
  
      if (num < 0) {
        this._currentIndex = this.bannerItemDOMsLen - 1;
      } else if (num >= this.bannerItemDOMsLen) {
        this._currentIndex = 0;
      } else {
        this._currentIndex = num;
      }
      this.paginationBoxDOM.children[this._currentIndex].classList.add('chose');
  
      if (this._currentIndex === 0) {
        this.showCurrentBanner(this.bannerItemDOMsLen - 1, this._currentIndex, this._currentIndex + 1);
      } else if (this._currentIndex === this.bannerItemDOMsLen - 1) {
        this.showCurrentBanner(this._currentIndex - 1, this._currentIndex, 0);
      } else {
        this.showCurrentBanner(this._currentIndex - 1, this._currentIndex, this._currentIndex + 1);
      }
    }
  
    showCurrentBanner(leftIndex, middleIndex, rightIndex) {
      console.log(leftIndex, rightIndex, middleIndex)
      this.bannerItemDOMs[leftIndex].classList.add('left');
      this.bannerItemDOMs[middleIndex].classList.add('middle');
      this.bannerItemDOMs[rightIndex].classList.add('right');
      this.bannerItemDOMs[leftIndex].onclick = () => {
        this.currentIndex--;
      };
      this.bannerItemDOMs[rightIndex].onclick = () => {
        this.currentIndex++;
      }
    }
  

    getBannerItemDOMs() {
      return this.slideBoxDOM.querySelectorAll('.banner-item');
    }
  
    
    getBannerItemHTML(imageName) {
      return `<div class="banner-item"><img src="${this.imageUrl+imageName}"></div>`
    }
  
    
    drawDOM(banners) {
      this.bannerBoxDOM.innerHTML = banners.reduce((html, item) => {
        return html + this.getBannerItemHTML(item.imageName);
      }, '');
  
      this.banners.forEach((item,i) => {
        const span = document.createElement('span');
        span.addEventListener('mouseover', () => {
          this.currentIndex = i;
        });
        this.paginationBoxDOM.append(span);
      });
    }
  
    
    openTimer() {
      this.timer = setInterval(() => {
        this.currentIndex++;
      }, 3000);
    }
  
    
    stopTimer() {
      clearInterval(this.timer);
    }
  
    init() {
      
      this.drawDOM(this.banners);
      this.bannerItemDOMs = this.getBannerItemDOMs();
      this.bannerItemDOMsLen = this.bannerItemDOMs.length;
      this.currentIndex = 0;
  
      
      this.slideLeftBtnDOM.addEventListener('click', () => {
        this.currentIndex--;
      });
      this.slideRightBtnDOM.addEventListener('click', () => {
        this.currentIndex++;
      });
  
      
      this.openTimer();
      this.slideBoxDOM.addEventListener('mouseover', () => {
        this.stopTimer();
      });
      this.slideBoxDOM.addEventListener('mouseout', () => {
        this.openTimer();
      })
    }
  }
  
  new Slide().init();
  $(document).ready(function(){
    $("#h1").click(function(){
      $(this).css("background-color","#FA7309");
      $("#p2").hide();
      $("#p1").show();
      $("#h2").css("background-color","#F5AA02");
    });
  });
  new Slide().init();
  $(document).ready(function(){
    $("#h2").click(function(){
      $(this).css("background-color","#FA7309");
      $("#p1").hide();
      $("#p2").show();
      $("#h1").css("background-color","#F5AA02");
    });
  });
  new Slide().init();
  $(document).ready(function(){
    $("#h2").click(function(){
      $(this).css("background-color","#FA7309");
      $("#p1").hide();
      $("#p2").show();
      $("#h1").css("background-color","#F5AA02");
    });
  });
  $(document).ready(function(){
    $("#gushi1").click(function(){
      $(this).css("background-color","#FA7309");
      $("#gushi2").css("background-color","#F5AA02");
      $("#gushi3").css("background-color","#F5AA02");
      $("#gushi1-1").slideDown("slow");
      $("#gushi2-2").slideUp("slow");
      $("#gushi3-3").slideUp("slow");
    });
  });
  $(document).ready(function(){
    $("#gushi2").click(function(){
      $(this).css("background-color","#FA7309");
      $("#gushi1").css("background-color","#F5AA02");
      $("#gushi3").css("background-color","#F5AA02");
      $("#gushi2-2").slideDown("slow");
      $("#gushi1-1").slideUp("slow");
      $("#gushi3-3").slideUp("slow");
    });
  });
  $(document).ready(function(){
    $("#gushi3").click(function(){
      $(this).css("background-color","#FA7309");      
      $("#gushi1").css("background-color","#F5AA02");
      $("#gushi2").css("background-color","#F5AA02");
      $("#gushi3-3").slideDown("slow");
      $("#gushi1-1").slideUp("slow");
      $("#gushi2-2").slideUp("slow");
    });
  });
  $(document).ready(function(){
    $("#top2.1").hover(function(){
      $("#top2-hover1").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $(".small_img1").click(function(){
      $(this).css("border","#EC6504 4px solid");
      $(".small_img2").css("border","#CADEE7 3px solid");
      $(".small_img3").css("border","#CADEE7 3px solid");
      $(".small_img4").css("border","#CADEE7 3px solid");
      $("#arror1").show();
      $("#arror2").hide();
      $("#arror3").hide();
      $("#arror4").hide();
      $("#big2").hide();
      $("#big3").hide();
      $("#big4").hide();
      $("#big1").show();
    });
  });
  $(document).ready(function(){
    $(".small_img2").click(function(){
      $(this).css("border","#EC6504 4px solid");
      $(".small_img1").css("border","#CADEE7 3px solid");
      $(".small_img3").css("border","#CADEE7 3px solid");
      $(".small_img4").css("border","#CADEE7 3px solid");
      $("#arror2").show();
      $("#arror3").hide();
      $("#arror4").hide();
      $("#arror1").hide();
      $("#big1").hide();
      $("#big3").hide();
      $("#big4").hide();
      $("#big2").show();
    });
  });
  $(document).ready(function(){
    $(".small_img3").click(function(){
      $(this).css("border","#EC6504 4px solid");
      $(".small_img1").css("border","#CADEE7 3px solid");
      $(".small_img2").css("border","#CADEE7 3px solid");
      $(".small_img4").css("border","#CADEE7 3px solid");
      $("#arror3").show();
      $("#arror1").hide();
      $("#arror2").hide();
      $("#arror4").hide();
      $("#big1").hide();
      $("#big2").hide();
      $("#big4").hide();
      $("#big3").show();
    });
  });
  $(document).ready(function(){
    $(".small_img4").click(function(){
      $(this).css("border","#EC6504 4px solid");
      $(".small_img1").css("border","#CADEE7 3px solid");
      $(".small_img2").css("border","#CADEE7 3px solid");
      $(".small_img3").css("border","#CADEE7 3px solid");
      $("#arror4").show();
      $("#arror1").hide();
      $("#arror2").hide();
      $("#arror3").hide();
      $("#big2").hide();
      $("#big3").hide();
      $("#big1").hide();
      $("#big4").show();
    });
  });

