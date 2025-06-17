const menuButtom = document.getElementById("menuButtom")
const dataWords = [
  {
    id:"1",
    linkGithub: "https://github.com/CodeOsca/crud-products",
    linkToViewTry:"https://codeosca.github.io/crud-products/index.html",
    title:"Crud Products",
    description:'A small application of products where you can register them, to put prices, images and descriptions, a basic but functional CRUD.”',
    listTecnology:["Express", "Pug", "LocalStorage"]
  },

  {
    id:"2",
    linkGithub: "https://github.com/CodeOsca/Existencias",
    linkToViewTry:"https://codeosca.github.io/Existencias/",
    title:"Existences",
    description:'A mini inventory that allows to register existences of a product with their available units, authentification, record of dates, entrances and exits of units, animations in each section of the sections and an interface with good user experience”',
    listTecnology:["Express", "Mongo", "Pug"]
  },

  {
    id:"3",
    linkGithub: "https://github.com/CodeOsca/FunaloMartinez",
    linkToViewTry:"https://codeosca.github.io/FunaloMartinez/",
    title:"FulanoMartinez",
    description:'I siege static web of So-and-so Martínez, created to show their business model to their potential clients and to increase their popularity”',
    listTecnology:["Bootstrap", "font-icons"]
  },
]


function card(info) {
  return `<li class="cardItem">
            <div class="projectInner">
              <header class="notVisible">
                <div class="projectTop">
                  <article class="folder">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder" >
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </article>

                  <article class="project-links">
                    <a href="${info.linkGithub}" aria-label="GitHub Link"
                       target="_blank" rel="noopener noreferrer" class="link-github-svg" >
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github" >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>

                    <a style="cursor:pointer;" aria-label="External Link" id="${info.id}"
                       rel="noopener noreferrer" class="external link-view-svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </article>
                </div>

                <h3 class="project-title">${info.title}</h3>
                <div class="project-description">
                  <p>${info.description}</p>
                </div>
              </header>
              <footer>
                <ul class="project-tech-list">
                  ${listLiRender(info.listTecnology)}
                </ul>
              </footer>
            </div>
          </li>`
}

function listLiRender(list) {  
  return list.map( li => `<li class="projectItemFooter">${li}</li>`) 
}

function renderCards() {
  const ul = document.createElement("ul")
  ul.setAttribute("class", "lisCard")
  dataWords.forEach( cardW => ul.innerHTML += card(cardW) )
  document.getElementById('myworks').appendChild(ul)
}


function onClick(id){
  navigateToSection(id)
  buttonToggle()
  windowMitadMovil()
}

function navigateToSection(id){
  const section = document.getElementById(id)
  scrollTo({ behavior:'smooth', top: section.offsetTop - 90 } )
}

function buttonToggle(e) {
  document.getElementById("listLinkMenu").classList.toggle("menu-visible")
  menuButtom.classList.toggle("is-active")
  document.body.classList.toggle('blur')
}

function ngAfterViewInit(){
  setTimeout( () => document.querySelectorAll('.itemMenuNav').forEach( el => el.classList.add('item-visibles')), 500)
} 

function windowMitadMovil() {
  document.querySelector(".background-padding").classList.toggle("is-active") 
}

function setUrlTheWordClicked(id) {
    const word = dataWords.filter( wordd => wordd.id === id)
    document.getElementById("link-view-external").setAttribute("href", word[0].linkToViewTry)
}


function viewToggleModal() {
    document.querySelector(".view-message").classList.toggle("active-modal")
    document.querySelector(".view-warning").classList.toggle("active-modal")
    document.querySelector(".closeX").classList.toggle("active-modal")
}

  ngAfterViewInit()    
  renderCards()

document.addEventListener("click", function(e){
  
  if(e.target.matches("#menuButtom") || e.target.matches('.ham-box') || e.target.matches('.ham-box-inner') || e.target.matches(".background-padding.is-active") ) {
      buttonToggle(e);
      windowMitadMovil();
    }

    if(e.target.matches(".link-pretty-button")) navigateToSection("contact");

    if(e.target.matches("li.item-visibles") ) onClick(e.target.className.split(" ")[0]);

    if(e.target.matches(".feather-external-link") ) {
      setUrlTheWordClicked(e.target.parentElement.id);
      viewToggleModal();
    }

    if( e.target.matches(".view-message") ) viewToggleModal()

    if( e.target.matches(".closeX") ) viewToggleModal() 

    if( e.target.matches("#link-view-external") ) viewToggleModal()  
})


document.querySelector('.link-view-svg').addEventListener('click', e =>{
  if( e.target.matches(".link-view-svg") ) {
      setUrlTheWordClicked(e.target.id);
      viewToggleModal();
  }
})


particlesJS({
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#0f46ff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})
