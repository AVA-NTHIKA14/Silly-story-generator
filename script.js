const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const reset = document.querySelector(".reset");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);
reset.addEventListener("click", resetStory);

function result() {
  var newStory = storyText;

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  if (customName.value !== "") {
    newStory = newStory.replace("Bob", customName.value);
  }

  if (document.getElementById("uk").checked) {
    newStory = newStory
      .replace("300 pounds", Math.round(300 * 0.0714286) + " stones")
      .replace(
        "94 fahrenheit",
        Math.round(((94 - 32) * 5) / 9) + " centigrade"
      );
  }

  story.textContent = newStory;
  story.classList.add("show");
}

function resetStory() {
  story.textContent = "";
  story.classList.remove("show");
  customName.value = "";
}
