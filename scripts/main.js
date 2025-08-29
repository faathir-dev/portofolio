
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists =document.querySelector("nav")

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    })
}

navSlide();

// clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }

};


window.addEventListener("load", function () {
  const audio = document.getElementById("Jokowi.Hebat");
  if (audio) {
    audio.muted = false;
    audio.play().catch(err => {
      console.log("Autoplay diblokir browser:", err);
    });
  }
});
