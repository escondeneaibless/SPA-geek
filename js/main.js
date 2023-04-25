let but1 = document.querySelector('.m-varmilo-ec-lvy-v2');
let but2 = document.querySelector('.m-varmilo-ec-rose-v2');
let but3 = document.querySelector('.m-varmilo-ec-sakura-v2');
let but4 = document.querySelector('.m-varmilo-ec-moxa-v2');
let but5 = document.querySelector('.m-varmilo-ec-daisy-v2 ');
let tagName = document.querySelector('.name__tag-product-left'); 
let image = document.querySelector('.img-but');
let manufacturer = document.querySelector('.product-description');
let type = document.querySelector('.type');
let pressingForce = document.querySelector('.pressing-force');
let pathEngth = document.querySelector('.path-ength');
let info = document.querySelector('.info');
let blockInfo = document.querySelector('.nav-product-button');
but1.addEventListener("focus", function() {
    blockInfo.style.height = "280px"
    tagName.innerHTML = "Varmilo EC lvy V2";  
    image.src =('../image/varmiloGreen.png');
    type.textContent = "кликающий";
    pressingForce.innerHTML = "50 грамм (средние)";
    pathEngth.innerHTML = "4 мм (2.3 мм до срабатывания)";
    info.innerHTML = 'Кликающие переключатели, схожие с Cherry MX Blue, но намного более отчётливые и мягкие по тактильным ощущениям. Лучший выбор для любителей кликов.';
    return;
});
but2.addEventListener("focus", function() {
    blockInfo.style.height = "350px"
    tagName.innerHTML = "Varmilo EC Rose V2";  
    image.src =('../image/varmiloRed.png');
    type.textContent = "линейный";
    pressingForce.innerHTML = "55 грамм (средние)";
    pathEngth.innerHTML = "4 мм (2 мм до срабатывания)";
    info.textContent = 
    `Мягкие и плавные линейные переключатели с силой нажатия как у Cherry 
MX Red. Обладают повышенной долговечностью благодаря своей главной 
особенности — индукционному принципу срабатывания (без прямого 
соприкосновения контактов). Слегка более тяжёлые, чем EC Daisy V2. 
Мягче и стабильнее, чем традиционные переключатели. 
Отлично подходят для активного или повседневного использования.`;

});
but3.addEventListener("focus", function() {
    blockInfo.style.height = "350px"
    tagName.innerHTML = "   Varmilo EC Sakura V2";  
    image.src =  ('../image/varmiloPink.png');
    type.textContent = "линейный";
    pressingForce.innerHTML = "45 грамм (лёгкие)";
    pathEngth.innerHTML = "4 мм (2 мм до срабатывания)";
    info.textContent = 
    `Мягкие и плавные линейные переключатели с силой нажатия как у Cherry 
MX Red. Обладают повышенной долговечностью благодаря своей главной 
особенности — индукционному принципу срабатывания (без прямого 
соприкосновения контактов). Слегка более тяжёлые, чем EC Daisy V2. 
Мягче и стабильнее, чем традиционные переключатели. 
Отлично подходят для активного или повседневного использования.`;
});
but4.addEventListener("focus", function() {
    blockInfo.style.height = "250px"
    tagName.innerHTML = "Varmilo EC Moxa V2";  
    image.src =  ('../image/varmiloGraypng.png');
    type.textContent = "линейный";
    pressingForce.innerHTML = "45 грамм (лёгкие)";
    pathEngth.innerHTML = "4 мм (2 мм до срабатывания)";
    info.innerHTML = "Мягкие и плавные линейные переключатели с силой нажатия как у Varmilo EC V2 Sakura.&nbsp;";
});
but5.addEventListener("focus", function() {
    blockInfo.style.height = "330px"
    tagName.innerHTML = "Varmilo EC Daisy V2";  
    image.src =  ('../image/varmiloYellow.png');
    type.textContent = "линейный";
    pressingForce.innerHTML = "35 грамм (очень лёгкие)";
    pathEngth.innerHTML = "4 мм (2 мм до срабатывания)";
    info.textContent = 
    `Мягкие и плавные линейные переключатели, одни из самых лёгких на рынке. Обладают повышенной долговечностью благодаря своей главной особенности — индукционному принципу срабатывания (без прямого соприкосновения контактов). Мягче и стабильнее, чем традиционные переключатели. Отлично подходят для офисной работы и продолжительной печати.`;
});
let arrowOne = document.querySelector('.prevv');
let arrowTwo = document.querySelector('.nextt');
let imageWindow = document.querySelector('.fotorama__stage__frame');
imageWindow.addEventListener('mouseover', func1, false);
imageWindow.addEventListener('mouseout', func2, false);
function func1() {
        arrowOne.setAttribute("style", "display: block;");
        arrowTwo.setAttribute("style", "display: block;");
}
function func2() {
        arrowOne.setAttribute("style", "display: none;");
        arrowTwo.setAttribute("style", "display: none;");
}
imageWindow.addEventListener('onclick', function() {
    imageWindow.setAttribute = ("src", "../image/d1.jpg")
})
var i = 0;
var imgDochern = document.querySelectorAll('.fotorama__img-e');
var imgClickAndChange = document.querySelector('#imgClickAndChange');
var imgs = new Array('../image/b1.jpg','../image/c1.jpg','../image/d1.jpg','../image/e1.jpg', '../image/f1.jpg')
function changeImage() {
    i++;
    i%=imgs.length;
    imgClickAndChange.src = imgs[i];
    var ustal = imgDochern[i];
    var ustal2 = imgDochern[i-1];
    var ustal3 = imgDochern[i+1];
    ustal2.style.border = "none";  
    ustal.style.border = "1px solid blue";  
    ustal3.style.border = "none";  

}
