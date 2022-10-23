import { jsonBase } from "./json-base.js";

const linkEmpleaOne = (res) => {
  if (res !== "") {
    return `
        <li class="academic__courses__item__subtitle">
    <a
      href=${res.href}
      target="_blank"
      >${res.name}</a
    >
  </li>
        `;
  } else {
    return ""
  }
};
const html = (res) => {
  let html = `
  <ul class="academic__courses__list">
  <li class="academic__courses__item__img">
    <img
      src=${res.img}
      alt=${res.alt}
    />
  </li>
  <li class="academic__courses__item__title">
    <h4>${res.title}</h4>
  </li>
  <li class="academic__courses__item__subtitle">
    <p>${res.date}</p>
  </li>
  <li class="academic__courses__item__subtitle">
    <p>${res.skills}</p>
  </li>
  ${linkEmpleaOne(res.link)}
  
</ul>
`;

  return html;
};

jsonBase.createStructure(
  "courses",
  "academic__courses__box__cursos",
  "https://momr01.github.io/Oracle-ONE-Challenge-Portafolio/db/db-cursos.json",
  html
);
