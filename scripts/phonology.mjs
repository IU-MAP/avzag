// import { Howl, Howler } from "./howler.js";

// let player = new Howl();

function loadLetters(data) {
    let table = document.querySelector("#alphabet #tables");
    for (const category of ["consonant", "vowel"]) {
        let subTable = document.createElement("div");
        subTable.className = `table ${category}`;
        for (const phoneme of data.filter(l => l["tags"].includes(category))) {
            var el = document.createElement("div");
            el.className = "button letter";
            el.innerText = phoneme["grapheme"];
            el.onclick = () => viewLetter(phoneme);
            subTable.appendChild(el);
        }
        table.prepend(subTable);
    }

    viewLetter(data[0]);
}

function viewLetter(phoneme) {
    let detailsDiv = document.querySelector("#alphabet #tables #details");
    detailsDiv.appendChild(document.createElement("h2"))
    detailsDiv.querySelector("h2").innerText = `${phoneme["grapheme"]} • ${phoneme["phoneme"]}`;

    let tags = phoneme["tags"];
    detailsDiv.querySelector(".tags").innerText = tags.reduce((a, t) => a = `${a} ${t}`);

    let samplesDiv = detailsDiv.querySelector("#samples");
    samplesDiv.innerHTML = "";

    for (const sample of phoneme["samples"]) {
        let button = document.createElement("span");
        button.classList = "button sample";
        button.onclick = () => playSample(sample);
        button.innerHTML = sample;
        samplesDiv.appendChild(button);
    }
}

function playSample(sample) {
    let url = `languages/${window["language"]}/audio/${sample}.m4a`
    console.log(url);

    // player.stop();
    // player.src = [url];
    // player.play();
}

export { loadLetters };
