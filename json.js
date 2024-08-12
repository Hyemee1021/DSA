//sending multiple fields with POST
const body = new FormData();
body.set("hello", "world");

const data = {
  method: "POST",
  body: body,
};

fetch(`./new`, data)
  .then((res) => res.text())
  .then(console.log);

//
async function load() {
  const res = await fetch(`./sample.jpg`);

  const blob = await res.blob();

  const image = new Image();

  image.src = URL.createObjectURL(blob);
}
