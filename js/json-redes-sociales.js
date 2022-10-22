const container = document.getElementById("title__network");

const crearItem = (res) => {
  let html = `<a href=${res.route} target="_blank"
      ><img src=${res.img} alt=${res.alt} />
    </a>`;

  const li = document.createElement("li");
  li.classList.add("title__network__item");

  li.innerHTML = html;

  container.appendChild(li);
};

fetch("../db/db-redes-sociales.json")
  .then((res) => res.json())
  .then((res) =>
    res.forEach((element) => {
      crearItem(element);
    })
  );
