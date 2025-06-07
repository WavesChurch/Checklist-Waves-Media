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
    { title: "Check that the two Nova Star VX1000 video processors are turned on (switches on the back)" },
    { title: "Turn the 'hyperx' labeled switch on the NavePoint for the HyperDeck" },
    { title: "Set the Audio Splitter above the NavePoint to 'Broadcast'" },
  ],
};

const TurnTVsOn = {
  id: "TurnTVsOn",
  todo: [
    { title: "Turn on the 'TVs' labeled switch in the NavePoint for the TVs inside" },
    { title: "Turn on the TVs inside (TCL/FireTv Control)" },
    { title: "Make sure to also turn on the 2 TVs facing the altar" },
    { title: "Turn on the 'lobby' labeled switch in the NavePoint for the TVs in the lobby" },
    { title: "Turn on the TVs in the lobby (LG Control), and set volume to 20" },
    { title: "In the ProPresenter for the lobby, select the 'Welcome' banners" },
  ],
};

const SetCamAUp = {
  id: "SetCamAUp",
  todo: [
    { title: "Use the 18-35mm lens" },
    { title: "Add the camera battery" },
    { title: "Turn on the 'CAM A' labeled switch in the NavePoint and check that it connects" },
    { title: "Change preset for worship" },
  ],
};

const SetCamBUp = {
  id: "SetCamBUp",
  todo: [
    { title: "Use the 24-105mm lens" },
    { title: "Add the camera battery" },
    { title: "Add the display batteries" },
    { title: "Turn on the 'CAM B' labeled switch in the NavePoint and check that it connects" },
    { title: "Change preset for worship" },
  ],
};

const SetCamCUp = {
  id: "SetCamCUp",
  todo: [
    { title: "Use the 18-35mm lens" },
    { title: "Add the camera battery" },
    { title: "Turn on the 'CAM C' labeled switch in the NavePoint and check that it connects" },
    { title: "Change preset for worship" },
  ],
};

const configLivestream = {
  id: "ConfigureLivestream",
  todo: [
    { title: "Open Youtube and sign in if needed (if it asks for password, call Tati)" },
    { title: "Go to Create > Go Live > Manage > Schedule Stream" },
    { title: "Use the last service's information but change the DATE" },
    { title: "Set ads to 'OFF'" },
    { title: "Set visibility to public" },
    { title: "Set time for 10:55 (we only stream the second service)" },
    { title: "Open Wirecast and select the broadcast template" },
    { title: "Connect the SSD (if it's not there, check with Victor Valle)" },
    { title: "Ask the person in ProPresenter if they setup the livestream announcements (make sure to check before service)" },
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
  SetCamAUp,
  SetCamBUp,
  SetCamCUp,
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
