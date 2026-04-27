document.addEventListener("DOMContentLoaded", () => {

    const imagesContainer = document.getElementById("explore-images");
    const button = document.getElementById("load-more");

    const images = [
        "card1.jpg",
        "card2.jpg",
        "card3.jpg",
        "card4.jpg"
    ];

    let currentIndex = 2; //по дефолту стоять 2 картки

    button.addEventListener("click", () => {
        addImage();
    });

    function addImage() {
        const imgSrc = images[currentIndex];

        // створення картки
        const card = document.createElement("div");
        card.classList.add("card");

        // створення зображення
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Medical center";

const deletebtn = document.createElement("button")
deletebtn.textContent = "delete"

deletebtn.addEventListener("click", () => {
    card.remove();
})

card.appendChild(deletebtn);

        // вставка картки
        card.appendChild(img);

        //нова картка
        imagesContainer.appendChild(card);

        //зациклення
        currentIndex = (currentIndex + 1) % images.length;
    }

});

