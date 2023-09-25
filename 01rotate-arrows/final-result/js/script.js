const images = document.querySelectorAll('img');
const imgArr = ["/assets/img/ship1.svg", "/assets/img/ship2.svg", "/assets/img/ship3.svg"];
let index = 0;

function radiansToDegrees(radians) {
    return (radians * 180) / Math.PI;
}

function changeImage() {
    setInterval(() => {
        index = (index + 1) % imgArr.length;
        const singleImg = imgArr[index];
        images.forEach((img, idx) => {
            setTimeout(() => {
                img.setAttribute("src", singleImg);
            }, idx * 100);
        });
    }, 3000);
}

function runImage(xMouseCord, yMouseCord) {
    images.forEach(img => {
        const imgHorizontalCenter = img.getBoundingClientRect().left + img.width / 2;
        const imgVerticalCenter = img.getBoundingClientRect().top + img.height / 2;
        const diffX = xMouseCord - imgHorizontalCenter;
        const diffY = yMouseCord - imgVerticalCenter;
        const radians = Math.atan2(diffY, diffX);
        const degrees = radiansToDegrees(radians);
        img.style.transform = `rotate(${degrees}deg)`;
    });
}

// mousemove event listener
document.addEventListener("mousemove", (event) => {
    const x = event.pageX;
    const y = event.pageY;
    runImage(x, y);
});

changeImage();