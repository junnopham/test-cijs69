const validateUrl = (url) => {
  try {
    return Boolean(new URL(url));
  } catch {
    return false;
  }
};

const shortElement = document.getElementById("short_url");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = document.getElementById("url").value;

  if (validateUrl(url))
    fetch("https://api.shrtco.de/v2/shorten?url=" + url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result.short_link) {
          const short = document.createElement("p");
          short.setAttribute("class", "text-xl text-center italic mt-2");
          short.textContent = data.result.short_link;
          shortElement.append(short);
        }
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  else {
    alert("Please enter valid URL!");
  }
});
