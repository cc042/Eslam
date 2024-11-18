// buttons
const HolyQuranBtn = document.querySelector("#Holy_Quran");
const prayerBtn = document.querySelector("#prayerBtn");

// sections
const quranSection = document.querySelector(".HolyQuran");
const prayerSection = document.querySelector(".Praying");

const add = (tab) => {
    tab.classList.add("active");
}

const remove = (tab) => {
    tab.classList.remove("active");
}

HolyQuranBtn.addEventListener("click", () => {
    add(quranSection)
    remove(prayerSection)
    HolyQuranBtn.disabled = true
    prayerBtn.disabled = false
})

prayerBtn.addEventListener("click", () => {
    add(prayerSection)
    remove(quranSection)
    HolyQuranBtn.disabled = false
    prayerBtn.disabled = true
})