import { jsonBase } from "./json-base.js";

const html = (res) => {
  let html = `
  <ul>
  <li class="hobbies__img">
    <img src=${res.img} alt=${res.alt} />
  </li>
  <li class="hobbies__name">${res.name}</li>
</ul>
`;

  return html;
};

jsonBase.createStructure(
  "hobbies__line",
  "hobbies__box",
  "https://momr01.github.io/portfolio-jsonapi/db-hobbies.json",
  html
);


             
      