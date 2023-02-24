let titlemoji = ["q(≧▽≦q)^", "ヾ(≧▽≦*)o", "o(*^＠^*)o", "☆(≧▽≦)☆"]
let index = 0
setInterval(title, 500)

function title() {
    document.title = titlemoji[index]
    index = (index + 1) % titlemoji.length

}

document.addEventListener("DOMContentLoaded", () => {
    let h1 = document.getElementById("Title")
    let clickCount = 0;
    let h1content = [">_", ">b_", ">bw_", ">bwb_", ">bwbl_", ">bwbl_", ">bwbl_", ">bwb_", ">bw_", ">b_", ">_", ">_"]
    let indexH1 = 0
    const changingH1 = setInterval(changeH1, 500)

    function changeH1() {
        h1.textContent = h1content[indexH1]
        indexH1 = (indexH1 + 1) % h1content.length
    }

    h1.addEventListener("click", () => {
        clickCount++
        console.log(clickCount)
        if (clickCount === 10) {
            h1.style.overflow = "hidden"
            h1.style.color = "transparent"
            h1.style.textShadow = " 0px 0px 0px transparent"
        }
        if (clickCount === 15) {
            h1.style.color = "#9286da"
            clearInterval(changingH1)
            h1.textContent = "Why are you still here ?"
        }
        if (clickCount === 20) {
            h1.textContent = "Bruh, you never stop ?"
        }
        if (clickCount === 23) {
            h1.textContent = "Ohhh, I understand you wish that an easter egg waiting you at the end ?"
        }
        if (clickCount === 25) {
            h1.textContent = "I want you to know Im not this type of people who give you what you want."
        }
        if (clickCount === 32) {
            h1.textContent = "7, yes this time is 7 time and you got it. Mmm next time you may click 10 time"
        }
        if (clickCount === 41) {
            h1.textContent = "Can you stop CLICKING"
            let numbPrompt = Number(prompt("how many time did you clicked between the last text ?"))
            if (numbPrompt !== 9) {
                location.reload()
            }
        }
        if (clickCount === 45) {
            h1.textContent = "I STARTING TO BE ANNOYED"
        }
    })
})
