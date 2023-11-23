window.onload = (e) => {
  const daysDropdownEl = document.getElementById("daysSelect");

  for (let i = 1; i <= 31; i++) {
    let currentDropdownOption = document.createElement("option");
    currentDropdownOption.value = i;
    currentDropdownOption.innerHTML = i;
    daysDropdownEl.appendChild(currentDropdownOption);
  }

  const yearsDropdownEl = document.getElementById("yearsSelect");

  for (let i = 2023; i >= 1871; i--) {
    let currentDropdownOption = document.createElement("option");
    currentDropdownOption.value = i;
    currentDropdownOption.innerHTML = i;
    yearsDropdownEl.appendChild(currentDropdownOption);
  }

  const monthsDropdownEl = document.getElementById("monthsSelect");

  const months = [
    "Januar",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = 0; i < months.length; i++) {
    let currentDropdownOption = document.createElement("option");
    currentDropdownOption.value = months[i];
    currentDropdownOption.innerHTML = months[i];
    monthsDropdownEl.appendChild(currentDropdownOption);
  }

  let checkboxParaEls = document.querySelectorAll(".checkbox-container p");

  for (let i = 0; i < checkboxParaEls.length; i++) {
    const element = checkboxParaEls[i];
    element.addEventListener("click", checkboxHandler);
  }

  function checkboxHandler(e) {
    let parentEl = e.target.parentElement;
    let checkbox = parentEl.querySelector("input");
    let buttonEl = document.querySelector("button");

    if (checkbox.checked === false) {
      checkbox.checked = true;
      if (checkbox.id === "inputTwo") {
        buttonEl.classList.remove("button-disabled");
        buttonEl.classList.add("button-enabled");
        buttonEl.disabled = false;
      }
    } else {
      checkbox.checked = false;
      if (checkbox.id === "inputTwo") {
        buttonEl.classList.remove("button-enabled");
        buttonEl.classList.add("button-disabled");
        buttonEl.disabled = true;
      }
    }
  }

  let checkboxEl = document.getElementById("inputTwo");
  checkboxEl.addEventListener("change", onChangeCheckboxHandler);

  function onChangeCheckboxHandler(e) {
    let buttonEl = document.querySelector("button");
    if (e.target.checked === true) {
      buttonEl.classList.remove("button-disabled");
      buttonEl.classList.add("button-enabled");
      buttonEl.disabled = false;
    } else {
      buttonEl.classList.remove("button-enabled");
      buttonEl.classList.add("button-disabled");
      buttonEl.disabled = true;
    }
  }
};
