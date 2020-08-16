var arrKitten = ["bd1.JPG", "bd2.JPG", "bd3.JPG", "bd4.JPG", "bd5.JPG", "bd6.JPG", "bd7.JPG", "bd8.JPG", "bd9.JPG", "bd10.JPG", "bd11.JPG", "bd12.JPG", "bd13.JPG", "bd14.JPG", "bd15.JPG", "bd16.JPG", "bd17.JPG", "bd18.JPG", "bd19.JPG", "bd20.JPG", "bd21.JPG", "bd22.JPG", "bd23.JPG", "bd24.JPG", "bd25.JPG", "bd26.JPG", "bd27.JPG"];
var currentImg = -1;

function kittenChange() {
   if (currentImg === arrKitten.length-1){
        currentImg = -1
   }
    var imgTag = document.getElementById("kitten");
    var nextImg = arrKitten[currentImg + 1];
    imgTag.src = "img/" + nextImg;
    currentImg += 1;
   var catEmojis = document.getElementsByClassName("cat");
   for(var i = 0; i < catEmojis.length; i++) {
       var currentCat = catEmojis[i];
       currentCat.classList.add("cat" + (i+1));
   }
}
function animationEnded(event) {
    var classList = event.currentTarget.classList;
    for(var i = 0; i < classList.length; i++) {
        if (classList[i] != "cat") {
            classList.remove(classList[i]);
        }
    }
    
}
var catEmojis = document.getElementsByClassName("cat");
for(var i = 0; i < catEmojis.length; i++) {
    var currentCat = catEmojis[i];
    currentCat.addEventListener("animationend", animationEnded);
}

kittenChange();

