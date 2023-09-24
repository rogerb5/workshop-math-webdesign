const images = document.querySelectorAll('img');
const imgArr = ["/assets/img/ship1.svg", "/assets/img/ship2.svg", "/assets/img/ship3.svg"];
let count = 0;

function radiansToDegrees(radians) {
    return (radians * 180) / Math.PI;
}

function changeImage() {
    setInterval(() => {
        count = (count + 1) % imgArr.length;
        const singleImg = imgArr[count];
        images.forEach((img, idx) => {
            setTimeout(() => {
                img.setAttribute("src", singleImg);
            }, idx * 100);
        });
    }, 3000);
}

document.addEventListener("mousemove", (event) => {
    const x = event.pageX;
    const y = event.pageY;
    images.forEach(img => {
        const imgX = img.getBoundingClientRect().left + img.width / 2;
        const imgY = img.getBoundingClientRect().top + img.height / 2;
        const diffX = x - imgX;
        const diffY = y - imgY;
        // console.log("(" + diffX + "," + diffY + ")");
        const radians = Math.atan2(diffY, diffX);
        const degrees = radians * 180 / Math.PI;
        console.log("degrees ", degrees)
        img.style.transform = `rotate(${degrees}deg)`;
    });
});

changeImage();