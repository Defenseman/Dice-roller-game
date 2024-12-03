function action(){
    const inputOfGame = document.getElementById("inputOfGame").value;
    const resultNumber = document.getElementById("resultNumber");
    const resultImages = document.getElementById("resultImages");

    let numberResult = [];
    let imageResult = [];

    for (let i = 0; i < inputOfGame; i++) {
        const index = Math.floor(Math.random() * 6) + 1;
        numberResult.push(index);
        imageResult.push(`<img src='images/${index}.svg' alt="Dice${index}"/>`);
    }
    resultNumber.textContent = `Result: ${numberResult.join(", ")}`;
    resultImages.innerHTML = imageResult.join(" ");
}