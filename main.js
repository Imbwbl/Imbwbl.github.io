document.addEventListener("DOMContentLoaded", function () {
  let previous = document.getElementsByClassName("previous")[0];
  let current = document.getElementsByClassName("current")[0];
  let next = document.getElementsByClassName("next")[0];
  fetch("http://127.0.0.1:8000/1")
    .then((r) => r.json())
    .then((data) => {
      previous.href = data.previous;
      current.href = data.current;
      next.href = data.next;

      previous.innerHTML =
        "←" + data.previous.toString().replace("https://", "");
      current.innerHTML = data.current.replace("https://", "");
      next.innerHTML = data.next.replace("https://", "") + "→";
      console.log(data.previous, data.current, data.next);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  let musicDiv = document.querySelector(".music");
  fetch("http://127.0.0.1:8000/")
    .then((r) => r.json())
    .then((data) => {
      console.log(data.recenttracks.track);
      for (let i = 0; i < data.recenttracks.track.length; i++) {
        console.log(data.recenttracks.track[i].name);
        console.log(data.recenttracks.track[i].image[1]["#text"]);
        console.log(data.recenttracks.track[i].artist["#text"]);
        console.log(data.recenttracks.track[i].album["#text"]);
        let trackDiv = document.createElement("div");
        let trackName = document.createElement("p");
        trackName.textContent = data.recenttracks.track[i].name;
        trackDiv.appendChild(trackName);
        let trackImage = document.createElement("img");
        trackImage.src = data.recenttracks.track[i].image[1]["#text"];
        trackDiv.appendChild(trackImage);
        let trackArtist = document.createElement("p");
        trackArtist.textContent = data.recenttracks.track[i].artist["#text"];
        trackDiv.appendChild(trackArtist);
        let trackAlbum = document.createElement("p");
        trackAlbum.textContent = data.recenttracks.track[i].album["#text"];
        trackDiv.appendChild(trackAlbum);
        musicDiv.appendChild(trackDiv);
      }
    });
});
