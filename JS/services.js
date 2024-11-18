// buttons
const contact = document.querySelector(".contact")

// Estefsar
const estefsara = document.querySelector("#estefsar")
const estefsar = document.querySelector(".estefsar")
const textareaestersar = document.querySelector("textarea")
const estefsarclose = document.querySelector(".estefsarclose")
const estefsarsend = document.querySelector(".estefsarsend")

// Estefsar Sections
estefsara.addEventListener("click", () => {
    estefsar.showModal()
})

estefsarclose.addEventListener("click", () => {
    estefsar.close()
})

estefsarsend.addEventListener("click", () => {
    window.open(`https://api.whatsapp.com/send?phone=+2001225073533&text=اريد ان استفسر عن: ${textareaestersar.value}`)
})

// follows
const FollowMe = document.querySelector(".FollowMe")
const follow_dialog = document.querySelector(".Follows")
const Follows_exit = document.querySelector(".Followsclose")

FollowMe.addEventListener("click", () => {
    follow_dialog.showModal()
})

Follows_exit.addEventListener("click", () => {
    follow_dialog.close()
})