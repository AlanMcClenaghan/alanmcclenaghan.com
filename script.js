// Replaces the Bootstrap hamburger icon with a custom hamburger icon that changes to a 'X' close icon when the menu is open in narrow screen sizes

const toggleButton = document.getElementById("toggler");
const menu = document.getElementById("x-menu");

toggleButton.addEventListener("click", ()=> {
  if (menu.className === "closed") {
    menu.innerHTML = "&#10005;";
    menu.className = "open";
  } else {
    menu.innerHTML = "&#9776;";
    menu.className = "closed";
  }
});


// Changes display class for main heading at various screen sizes.

const heading = document.querySelector("h1");

jQuery(document).ready(function($) {
  let alterClass = function() {
    let screenWidth = document.body.clientWidth;
    if (screenWidth >= 1024) {
      heading.className = "display-2";
    } else if (screenWidth >= 780) {
        heading.className = "display-3"; 
      } else if (screenWidth >= 560) {
        heading.className = "display-4";
      } else {
        heading.className = "display-5";
      }
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});



// On mouseover of a .card div the image is moved to the background and a search icon is shown above it.
// On mouseout the search icon is removed and the main image returns to the foreground.

let src;
const searchIcon = "images/search.svg";
const card = document.querySelectorAll(".card-body");
const images = document.querySelectorAll(".card-body img");

for (let i = 0; i < images.length; i++) {
  card[i].addEventListener("mouseover", ()=> {
    src = images[i].src;
    images[i].style.backgroundImage = `url(${src})`;
    images[i].src = searchIcon;
  });
  card[i].addEventListener("mouseout", ()=> {
    images[i].src = src;
  });
}



// Javascript is used to create a template literal using data from a separate file that is then insert into as html into index.html to create the modals using Bootstrap.

let modalContent = "";
let modal;
let skills;

function insertModals(modalContent) {
  let modals = document.getElementById("modals");
  modals.innerHTML = modalContent;
}

for (let i = 0; i < portfolioData.length; i++) {
  modal = portfolioData[i];
  skills = modal.skills;
  modalContent += `
    <!-- Modal ${i+1} -->
    <div class="modal fade" id="portfolio-${i+1}" tabindex="-1" role="dialog" aria-labelledby="portfolio-${i+1}" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">${modal.title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <img src="images/${modal.image}" alt="${modal.title}">
                <h3>${modal.title}</h3>
                <p class="project-description">${modal.description}</p>`;
                
                for (let i = 0; i < skills.length; i += 1) {
                modalContent += `<span class="skills-used">${modal.skills[i]}</span>`;
                }

            modalContent += `
            </div>
            <div class="modal-footer justify-content-between">`;
            
            if (i > 0) {
              modalContent += `<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#portfolio-${i}">Previous</button>`;
            } else {
              modalContent += `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
            }
  
             modalContent += `
              <a href="${modal.link}" target="_blank">
                <button type="button" class="btn btn-primary">
                View site</button>
              </a>`;

              if (i < portfolioData.length-1) {
                modalContent += `<button type="button" class="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#portfolio-${i+2}">Next</button>`;
              } else {
                modalContent += `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
              }

              modalContent += `
            </div>
          </div>
        </div>
      </div>
  `;
}

insertModals(modalContent);