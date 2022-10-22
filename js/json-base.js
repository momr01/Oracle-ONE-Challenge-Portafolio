const createStructure = (classContainer, classDiv, path, htmlFunction) => {
  const container = document.getElementById(classContainer);

  const crearDiv = (res) => {
    const div = document.createElement("div");
    div.classList.add(classDiv);
    div.innerHTML = htmlFunction(res);

    container.appendChild(div);
  };

  fetch(path)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((element) => {
        crearDiv(element);
      });
    });
};

export const jsonBase = {
  createStructure,
};
