// スクロール

window.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

    anchorLinksArr.forEach(link => {
        link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
        });
    });
});
});


// ふわっと


const TAnime = document.querySelector(".T-Animation");
texts = TAnime.textContent; 
textsArray = [];
TAnime.textContent = "";

for(let i = 0; i < texts.split("").length; i++) {
    if(texts.split("")[i] === " ") {
        textsArray.push(" ");
    } else {
        textsArray.push('<span style="animation-delay: ' +(i * 0.2) + 's;">' + texts.split("")[i] + '</span>');
    }
}
for(let i = 0; i < textsArray.length; i++) {
    TAnime.innerHTML += textsArray[i];
}


const aElement = document.querySelectorAll(".A-target");
document.addEventListener('scroll',function() {
    for(let i = 0; i < aElement.length; i++) {
        const aElementDistance = aElement[i].getBoundingClientRect().top + aElement[i].clientHeight * 0.6;
        if(window.innerHeight > aElementDistance) {
            aElement[i].classList.add('show');
        }
    }
});

const targetElement = document.querySelectorAll(".member");
document.addEventListener("scroll",function() {
    for(let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6;
        if(window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
});

const Album = document.querySelectorAll(".Album");
document.addEventListener("scroll",function() {
    for(let i = 0; i < Album.length; i++) {
        const AlbumDis = Album[i].getBoundingClientRect().top + Album[i].clientHeight * 0.6;
        if(window.innerHeight > AlbumDis) {
            Album[i].classList.add("show");
        }
    }
});


const secSection = document.querySelector(".sec-section");
document.addEventListener("scroll",function() {
    const sSDis = secSection.getBoundingClientRect().top + secSection.clientHeight * 0.6;
    if(window.innerHeight > sSDis) {
        secSection.classList.add("show");
    }
});

const thSection = document.querySelector(".th-section");
document.addEventListener("scroll",function() {
    const tSDis = thSection.getBoundingClientRect().top + thSection.clientHeight * 0.6;
    if(window.innerHeight > tSDis) {
        thSection.classList.add("show");
    }
});





const recommend = document.querySelector(".comment-wrapper");
document.addEventListener("scroll",function() {
    const recoDis = recommend.getBoundingClientRect().top + recommend.clientHeight * 0.6;
    if(window.innerHeight > recoDis) {
        recommend.classList.add("show");
    }
});



// モーダル1部分

document.getElementById("modalOpen1").addEventListener("click", function() {
    document.getElementById("modal1").classList.add("active");
    document.getElementById("modal-mask1").classList.add("active");
});

document.getElementById("modalClose1").addEventListener("click", function() {
    document.getElementById("modal1").classList.remove("active");
    document.getElementById("modal-mask1").classList.remove("active");
});

document.getElementById("modal-mask1").addEventListener("click", function() {
    document.getElementById("modal1").classList.remove("active");
    document.getElementById("modal-mask1").classList.remove("active");
});

// モーダル2部分

document.getElementById("modalOpen2").addEventListener("click", function() {
    document.getElementById("modal2").classList.add("active");
    document.getElementById("modal-mask2").classList.add("active");
});

document.getElementById("modalClose2").addEventListener("click", function() {
    document.getElementById("modal2").classList.remove("active");
    document.getElementById("modal-mask2").classList.remove("active");
});

document.getElementById("modal-mask2").addEventListener("click", function() {
    document.getElementById("modal2").classList.remove("active");
    document.getElementById("modal-mask2").classList.remove("active");
});