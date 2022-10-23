import { jsonBase } from "./json-base.js";

const html = (res) => {
  let html = `
    <div class="experience__box">
            <img
              class="experience__img"
              src=${res.img}
              alt=${res.alt}
            />
            <div class="experience__info">
              <h2 class="experience__title">${res.title}</h2>
              <h3 class="experience__text">
                ${res.subtitle}
              </h3>
              <h3 class="experience__text">${res.tec}</h3>
              <div class="experience__description">
                <span class="experience__repo"
                  ><a
                    href=${res.repository}
                    ><button class="experiencia__botao--repo">
                      Repositorio
                    </button></a
                  ></span
                >
                <span class="experience__demo"
                  ><a
                    href=${res.demo}
                    ><button class="experience__botao--demo">
                      Ver demo
                    </button></a
                  ></span
                >
              </div>
            </div>
          </div>`

  return html;
};

jsonBase.createStructure(
  "experience__container",
  "experience__box",
  "https://momr01.github.io/Oracle-ONE-Challenge-Portafolio/db/db-proyectos.json",
  html
);