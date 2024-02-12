function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Was it not Scyld Shefing that shook the halls",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
