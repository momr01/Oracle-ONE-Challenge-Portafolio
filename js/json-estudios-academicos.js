import { jsonBase } from "./json-base.js";

const html = (res) => {
  let html = `
  <ul class="academic__courses__list">
    <li class="academic__courses__item__img">
      <img src=${res.img} alt=${res.alt} />
    </li>
    <li class="academic__courses__item__title">
      <h4>${res.title}</h4>
    </li>
    <li class="academic__courses__item__subtitle">
      <p>${res.place}</p>
    </li>
    <li class="academic__courses__item__subtitle">
      <p>${res.res}</p>
    </li>
    <li class="academic__courses__item__subtitle">
      <p>${res.date}</p>
    </li>
    </ul>`;

  return html;
};

jsonBase.createStructure(
  "academic__courses",
  "academic__courses__box__oficial",
  "https://momr01.github.io/portfolio-jsonapi/db-estudios.json",
  html
);
