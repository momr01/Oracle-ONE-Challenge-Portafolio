import { jsonBase } from "./json-base.js";

const html = (res) => {
  let html = `
  <ul>
  <li class="skills__img">
    <img src=${res.img} alt=${res.alt} />
  </li>
  <li class="skills__name">${res.title}</li>
</ul>
`;

  return html;
};

jsonBase.createStructure(
  "skills__line",
  "skills__box",
  "https://momr01.github.io/portfolio-jsonapi/db-hard-skills.json",
  html
);
