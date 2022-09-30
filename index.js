const mots = ["sympa", "dev", "joueur", "amical"]
let indexMot = 0
let indexCaractere = 0
let suppressionEnCours = false

function caractereSuivant() {

    if (indexCaractere + 1 > mots[indexMot].length) {
        suppressionEnCours = true
    }
    if (suppressionEnCours){
        indexCaractere--
        if (indexCaractere === 0) {
            if (indexMot + 1 < mots.length) {
                indexMot++
            } else {
                indexMot = 0
            }
            suppressionEnCours = false
        }
    } else {
        indexCaractere++
    }
    
    const element = document.getElementById("mot")
    element.innerHTML = mots[indexMot].slice(0, indexCaractere)
    setTimeout(caractereSuivant, 300)
}
caractereSuivant()