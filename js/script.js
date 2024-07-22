let pngStr = document.getElementById("png-str");
let informationPage = document.getElementById("information_page");
let buttonCount = document.getElementById("button-count");
let strUkrOne = document.getElementById("str1");
let strUkrTwo = document.getElementById("str1-1");
let strBelOne = document.getElementById("str1-1-1");
let strBelTwo = document.getElementById("str1-1-2");
let strTwo = document.getElementById("str2");
let strThree = document.getElementById("str3");
let strFour = document.getElementById("str4");
let strFourOne = document.getElementById("str4-1");
let strFourTwo = document.getElementById("str4-2");
let strFive = document.getElementById("str5");
let strSix = document.getElementById("str6");
let strSeven = document.getElementById("str7");
let strSevenOne = document.getElementById("str7-1");
let strEight = document.getElementById("str8");
let strNineOne = document.getElementById("str9");
let strNineTwo = document.getElementById("str9-1");
let picture = pngStr.querySelectorAll("div");
let btnShow = document.getElementById("show");
let armyInfo = document.getElementById("armi-info");
let infOne = document.getElementById("inf1");
let infTwo = document.getElementById("inf2");
let infThree = document.getElementById("inf3");
let infFour = document.getElementById("inf4");
let infFive = document.getElementById("inf5");
let infSix = document.getElementById("inf6");

let countClick = 0;
let btnClick = 0;
let showBtnClick = 0;
let timeoutID;

buttonCount.onclick = function() {
    ++btnClick
    if(btnClick === 1) {
        timeoutID = setTimeout(clickCountBtn, 1000)
    } else {
        clearTimeout(timeoutID);
        btnClick = 0;
    }
};

btnShow.onclick = function() {
    let icon = btnShow.querySelector("img");
    ++showBtnClick;
    
    if(showBtnClick === 1) {
        icon.src = "img/eye-closed-svgrepo-com.svg";
        armyInfo.style.display = "block"

    } else {
        icon.src = "img/eye-closed-svgrepo-com (1).svg";
        armyInfo.style.display = "none"
        showBtnClick = 0;
    }
}
function clickCountBtn() {
    console.log(++countClick);

    switch(countClick) {
        case 1:
            pngStr.style.display = "block";
            strBelOne.classList.remove("str");
            informationPage.style.display = "block";
            infOne.classList.remove("str");
            break;
        case 2:
            pngStr.style.display = "block";
            strBelTwo.classList.remove("str");
            break;
        case 3:
            pngStr.style.display = "block";
            strUkrOne.classList.remove("str");
            break;
        case 4:
            pngStr.style.display = "block";
            strUkrTwo.classList.remove("str");
            break;
        case 5:
            pngStr.style.display = "block";
            strTwo.classList.remove("str");
            informationPage.style.display = "block";
            infTwo.classList.remove("str");
            break;
        case 6:
            pngStr.style.display = "block";
            strThree.classList.remove("str");
            break;
        case 7:
            pngStr.style.display = "block";
            strFour.classList.remove("str");
            strFourOne.classList.remove("str");
            strFourTwo.classList.remove("str");
            informationPage.style.display = "block";
            infThree.classList.remove("str");
            break;
        case 8:
            pngStr.style.display = "block";
            strFive.classList.remove("str");
            informationPage.style.display = "block";
            infFour.classList.remove("str");
            break;
        case 9:
            pngStr.style.display = "block";
            strSix.classList.remove("str");
            informationPage.style.display = "block";
            infFive.classList.remove("str");
            break;
        case 10:
            pngStr.style.display = "block";
            strSeven.classList.remove("str");
            strSevenOne.classList.remove("str");
            break;
        case 11:
            pngStr.style.display = "block";
            strEight.classList.remove("str");
            informationPage.style.display = "block";
            infSix.classList.remove("str");
            break;
        case 12:
            pngStr.style.display = "block";
            strNineOne.classList.remove("str");
            break;
        case 13:
            pngStr.style.display = "block";
            strNineTwo.classList.remove("str");
            break;
        default:
            let images = pngStr.querySelectorAll("img");
            let pageImages = informationPage.querySelectorAll("img");
            
            images.forEach(image => {
                image.classList.add("str");
            });

            pageImages.forEach(image => {
                image.classList.add("str");
            });

            countClick = 0;
    }
    timeoutID = setTimeout(clickCountBtn, 2000);
}