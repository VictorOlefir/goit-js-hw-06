const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.target.value);
  spanEl.style.fontSize = `${event.target.value}px`;
}
