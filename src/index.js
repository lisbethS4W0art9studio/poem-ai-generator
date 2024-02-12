function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0ct2ee4f1df4o43e3d885ac1b0f28155";
  let context =
    "You are a old english Poem export and love to write poems. Your mission is to gernerate a 10 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Sign the poem with `SheCodes AI` and the `orginal author name` inside a <strong> element at the end of the poem and NOT at the beginning ";
  let prompt = `User instructions: Generate an Old English poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> ⏳ Generating an Old English poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
