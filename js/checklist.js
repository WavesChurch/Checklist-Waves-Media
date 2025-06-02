moment.locale("en-us");
const checklist = document.getElementById("checklist");
const alertarAs = document.getElementById("alertarAs");
const selecionarTodos = [...document.getElementsByClassName("select-input")];
const selecionarTodosOsMinimizers = [
  ...document.getElementsByClassName("minimizerMaximizer"),
];

const infoService = () => {
  const day = moment().day();
  const today = moment().format("MM/DD/YYYY");

  if (day == 0 || day == 3) return `Culto da Família - ${today}`;

  return "Sem Culto";
};

const privacyService = () => {
  const day = moment().day();

  if (day == 0 || day == 3) {
    return "Public";
  } else {
    return "Unlisted or Private";
  }
};

const initialConfig = {
  id: "TurnEquipmentOn",
  todo: [
    { title: "Check that all computers are on (see the white status light in the front)" },
    { title: "Turn the Camera Switcher on (button is below table)" },
    { title: "Turn the 'led' labeled switch on the NaverPoint" },
    { title: "Check that the two Nova Star VX1000 video processors turned on (switches on the back)" },
    { title: "Turn the 'hyperx' labeled switch on the NavePoint for the HyperDeck" },
    { title: "Set the Audio Splitter above the NavePoint to 'Broadcast'" },
  ],
};

const TurnTVsOn = {
  id: "TurnTVsOn",
  todo: [
    { title: "Turn on the 'lobby' labeled switch in the NavePoint for the TVs in the lobby" },
    { title: "Turn on the TVs in the lobby (LG Control), they should be at volume 20" },
  ],
};

const SetCamerasUp = {
  id: "SetCamerasUp",
  todo: [
    { title: "placeholder" },
  ],
};

const configLivestream = {
  id: "ConfigureLivestream",
  todo: [
    { title: "placeholder" },
    { title: "Add title: " + infoService() },
    { title: "Visibility - " + privacyService() },
  ],
};

const worship = {
  id: "Worship",
  todo: [
    { title: "placeholder" },
  ],
};

const tithesAndOffering = {
  id: "TithesOffering",
  todo: [
    { title: "placeholder" },
  ],
};

const sermon = {
  id: "Sermon",
  todo: [
    { title: "placeholder" },
  ],
};

const finish = {
  id: "Finish",
  todo: [
    { title: "placeholder" },
  ],
};

const todos = [
  initialConfig,
  TurnTVsOn,
  SetCamerasUp,
  configLivestream,
  worship,
  tithesAndOffering,
  sermon,
  finish,
];

todos.forEach((item) => renderizarItemDoChecklist(item));

selecionarTodos.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    checkbox.checked
      ? minimizarOuMaximizarTodosDoGrupo(checkbox, true)
      : minimizarOuMaximizarTodosDoGrupo(checkbox, false);
  });
});

function renderizarItemDoChecklist(obj) {
  const element = document.getElementById(obj.id);

  obj.todo.forEach(
    (item) =>
    (element.innerHTML += `
        <div class="form-check check-all">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox">  
              ${item.title}
        	</label>
        </div>`)
  );
}

function minimizarOuMaximizarTodosDoGrupo(target, isChecked) {
  const form = document.getElementById(target.dataset.target);

  return isChecked
    ? form.classList.add("hide-checkbox")
    : form.classList.remove("hide-checkbox");
}
