let button = document.getElementById("clickme");
let english = document.getElementById("english");
let arabic = document.getElementById("arabic");
let reset = document.getElementById("reset");
let howMuchTotal = document.getElementById("howMuchTotal");
let time = 0,
  count = "0";

if (localStorage.getItem("Time") === null) {
  localStorage.setItem("Time", 0);
} else {
  time = localStorage.getItem("Time");
}

howMuchTotal.innerText =
  "Total Tasbihat Till Now In This Website: " + localStorage.getItem("Time");

button.onclick = function () {
  count++;
  button.innerText = count;
  if (english.innerText === "Allahu Akbar" && count == "34") {
    count = "0";
    button.innerText = count;
    english.innerText = "Alham du lillah";
    arabic.innerText = "ٱلْحَمْدُ لِلَّٰ";
  } else if (english.innerText === "Alham du lillah" && count == "33") {
    count = "0";
    button.innerText = count;
    english.innerText = "Subhan Allah";
    arabic.innerText = "سُبْحَانَ ٱللَّٰ";
  } else if (english.innerText === "Subhan Allah" && count == "33") {
    count = "0";
    button.innerText = count;
    english.innerText = "Allahu Akbar";
    arabic.innerText = "اللّٰهُ أَكْبَر‎";
    time++;
    localStorage.setItem("Time", time);
    howMuchTotal.innerText =
      "Total Tasbihat Till Now In This Website: " +
      localStorage.getItem("Time");
  }
};

// When Reset button is clicked this is the function for resetting
reset.onclick = function () {
  let confirmResetOfCurrentTazbih = confirm(
    "Are you sure you want to reset your current tazbih."
  );
  if (confirmResetOfCurrentTazbih) {
    count = "0";
    button.innerText = count;
    english.innerText = "Allahu Akbar";
    arabic.innerText = "اللّٰهُ أَكْبَر‎";
  }
  if (localStorage.getItem("Time") > 0) {
    let confirmResetOfTotalTazbihats = confirm(
      "Do you also want to reset the Total Tazbihat Count."
    );
    if (confirmResetOfTotalTazbihats) {
      let confirmresetDoubleCheck = confirm(
        "WARNING!!: It will reset your total count of tazbihs you have recited till now."
      );
      if (confirmresetDoubleCheck) {
        localStorage.setItem("Time", 0);
      }
    }
  }
  howMuchTotal.innerText =
    "Total Tasbihat Till Now In This Website: " + localStorage.getItem("Time");
};
