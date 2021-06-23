// Variables collapse

const detailsForm = document.querySelector(".details__form");
const active = document.querySelector(".details-up");
const containerShare = document.querySelector(".js-containerShare");
const activeShare = document.querySelector(".share-up");
const chooseC = document.querySelector(".colors_design");
const choosec2 = document.querySelector(".colors-up");

// Variables Photo Preview

const fr = new FileReader();
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

// Variables Formulario Preview

const form = document.querySelector(".js-form");
const nameTarget = document.querySelector(".js-name");
const job = document.querySelector(".js-job");
const phone = document.querySelector(".js-telefono");
const email = document.querySelector(".js-mail");
const linkedin = document.querySelector(".js-linkedin");
const gitHub = document.querySelector(".js-git");

// Global data
let data = {
  name: "",
  job: "",
  photo: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  palette: "1"
};

"use strict";

function eventFill() {
  chooseC.classList.toggle("collapseShare");
  choosec2.classList.toggle("arrowShare");
}

function eventFill2() {
  detailsForm.classList.toggle("collapseShare");
  active.classList.toggle("arrowShare");
}

function eventFill3() {
  containerShare.classList.toggle("collapseShare");
  activeShare.classList.toggle("arrowShare");
}

choosec2.addEventListener("click", eventFill);
active.addEventListener("click", eventFill2);
activeShare.addEventListener("click", eventFill3);

"use strict";

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  data.photo = fr.result;
  if (data.photo === "") {
    profileImage.style.backgroundImage =
      "https://www.w3schools.com/howto/img_avatar2.png";
  } else {
    profileImage.style.backgroundImage = `url(${data.photo})`;
    profilePreview.style.backgroundImage = `url(${data.photo})`;
  }
  saveLocalStorage();
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener("change", getImage);

"use strict";
// let photoPreviewFooter = document.querySelector(".js-footerpreview");
// let photoPreviewHeader = document.querySelector(".js-headerpreview");

//  photoPreviewHeader.style.cssText = "color:red, border:purple";
// photoPreviewFooter.style.cssText = "color:red, border:purple";

const borderColor = document.querySelector(".js-headerpreview");

const textColor = document.querySelector(".js-name");
const links2 = document.querySelector(".js-footerpreview");
const select1 = document.querySelector(".js-CHeckColor1");
const select2 = document.querySelector(".js-CHeckColor2");
const select3 = document.querySelector(".js-CHeckColor3");

let linkPallete = document.querySelectorAll(".js__link__pallete");
let linkRadius = document.querySelectorAll(".js__link__radius");


function selectColor(ev) {
  let clickSelect = ev.target.value;
  if (clickSelect === "2") {
    //color texto//
    textColor.classList.add("h1-color2");
    textColor.classList.remove("h1-color3");
    //color borde//
    borderColor.classList.add("border-preview2");
    borderColor.classList.remove("border-preview3");
    //color links//
    for (const links of linkPallete){
    links.classList.add("links2");
    links.classList.remove("links3");
  }
  for (const links2 of linkRadius){
    links2.classList.add("links2_1");
    links2.classList.remove("links3_1");
  }
  };


  if (clickSelect === "3") {
    //color texto//
    textColor.classList.add("h1-color3");
    //color borde//
    borderColor.classList.add("border-preview3");
    //color links//
    for (const links of linkPallete){
      links.classList.add("links3");
    }
    for (const links2 of linkRadius){
      links2.classList.add("links3_1");
      links2.classList.remove("links2_1");
    }
  }

  if (clickSelect === "1") {
    //color texto//
    textColor.classList.remove("h1-color3", "h1-color2");
    //color borde//
    borderColor.classList.remove("border-preview3","border-preview2");
    //color links//
    for (const links of linkPallete){
      links.classList.remove("links3", "links2");
    }
    for (const links2 of linkRadius){
    links2.classList.remove("links2_1");
    }
  }
  data.palette = clickSelect;
};


select1.addEventListener("click", selectColor);
select2.addEventListener("click", selectColor);
select3.addEventListener("click", selectColor);

"use strict";

function handlerChangeForm(ev) {
  const inputNameChange = ev.target.name;
  const inputValueChange = ev.target.value;
  if (inputNameChange === "fullName") {
    data.name = inputValueChange;
  } else if (inputNameChange === "workTitle") {
    data.job = inputValueChange;
  } else if (inputNameChange === "email") {
    data.email = inputValueChange;
  } else if (inputNameChange === "phone") {
    data.phone = inputValueChange;
  } else if (inputNameChange === "linkedin") {
    data.linkedin = inputValueChange;
  } else if (inputNameChange === "github") {
    data.github = inputValueChange;
  }
}

function hadlerChangePreview() {
  nameTarget.innerHTML = data.name;
  job.innerHTML = data.job;
  phone.href = data.phone;
  email.href = data.email;
  linkedin.href = `https://linkedin.com/in/${data.linkedin}`;
  gitHub.href = `https://github.com/${data.github}`;
}

function handlerTotalChange(ev) {

  handlerChangeForm(ev);
  hadlerChangePreview();
}

form.addEventListener("keyup", handlerTotalChange);

//REset
let buttonReset = document.querySelector(".js-btn-reset");

function resetForm(ev) {
  document.getElementById("resetform").reset();
  deleteAllPreview();
  resetPallete();
}

function deleteAllPreview() {
  nameTarget.innerHTML = "Nombre Apellido";
  job.innerHTML = "Front-end developer";
  profilePreview.style.background =
    "url(https://www.w3schools.com/howto/img_avatar2.png) center";
  profileImage.style.background =
    "url(https://www.w3schools.com/howto/img_avatar2.png) center";
  phone.href = "";
  email.href = "";
  linkedin.href = "";
  gitHub.href = "";
}

function resetPallete() {
  textColor.classList.remove("h1-color3", "h1-color2");
  borderColor.classList.remove("border-preview3", "border-preview2");
  for (const links of linkPallete) {
    links.classList.remove("links3", "links2");
  }
  for (const links2 of linkRadius) {
    links2.classList.remove("links2_1");
  }
}

buttonReset.addEventListener("click", resetForm);


"use strict";

// carga datos de storage
if(localStorage.getItem("localData")) {
  data = JSON.parse(localStorage.getItem("localData"));
}

function saveLocalStorage() {
  localStorage.setItem("localData",JSON.stringify(data));
}

"use strict";

const createButton = document.querySelector(".js_share_card_button");
const previewUrl = document.querySelector(".preview__url");
const previewSection = document.querySelector("preview");
const twiterButton = document.querySelector(".preview__button");
const previewCard = document.querySelector(".js_preview_card");
const shareContain = document.querySelector(".js-containerShare");
const errorMsg = document.querySelector(".js-error");
const whatsappPreviewBtn = document.querySelector(".js-telefono");
const emailPreviewBtn = document.querySelector(".js-mail");
const linkedinPreviewBtn = document.querySelector(".js-linkedin");
const gitPreviewBtn = document.querySelector(".js-git");

function handlerCreateCard(ev) {
  ev.preventDefault();
  
  let breakFunction = false;
  for (let input in data) {
    if (data[input] === "") {
      errorMsg.innerHTML += `"Rellena ${input}"<br>`;
      breakFunction = true;
    }
  }
  // salte inmediatamente de la funcion
  if(breakFunction) return;

  const url = "https://awesome-profile-cards.herokuapp.com/card";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {

      if (data.success === true) {
        previewCard.classList.remove("preview__card");
        shareContain.classList.add("preview__card");
        previewUrl.innerHTML = data.cardURL;
        previewUrl.href = data.cardURL;
        twiterButton.href = `https://twitter.com/?lang=es= + ${data.cardURL}`;
        whatsappPreviewBtn.href = `https://api.whatsapp.com/send?phone= + ${data.phone}`;
        emailPreviewBtn.href = `mailto: + ${data.email}`;
        linkedinPreviewBtn.href = `https://www.linkedin.com/in/ + ${data.linkedin}`;
        gitPreviewBtn.href = `https://github.com/ + ${data.github}`;
        createButton.setAttribute("disabled", "disabled");
        saveLocalStorage();
        handleTwitterButtonShare()
      } else {
        console.log('esta mal')
      }
    }).catch((error) => {
      console.log(error)
    });
}
createButton.addEventListener("click", handlerCreateCard);


//# sourceMappingURL=main.js.map
