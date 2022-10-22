import { jsonBase } from "./json-base.js";

const html = (res) => {
  let html = `
    <div class="experience__box">
            <img
              class="experience__img"
              src="assets/proyectos/proyecto-encriptador01.PNG"
              alt="encriptador"
            />
            <div class="experience__info">
              <h2 class="experience__title">Encriptador de texto</h2>
              <h3 class="experience__text">
                Proyecto del Programa Oracle ONE Alura
              </h3>
              <h3 class="experience__text">HTML - CSS - Javascript</h3>
              <div class="experience__description">
                <span class="experience__repo"
                  ><a
                    href="https://github.com/momr01/Oracle-ONE-Challenge-Encriptador"
                    ><button class="experiencia__botao--repo">
                      Repositorio
                    </button></a
                  ></span
                >
                <span class="experience__demo"
                  ><a
                    href="https://momr01.github.io/Oracle-ONE-Challenge-Encriptador/"
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
  "../db/db-estudios.json",
  html
);