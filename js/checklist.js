moment.locale("en-us");

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
    { title: "Check power outlet in the NaverPoint" },
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
    { title: "Turn on the 'CAM A' labeled switch in the NavePoint and check that it connects (wait 30 seconds before turning other CAM switches on)" },
    { title: "Get a headset for the camera (preferably the ones with both sides)" },
    { title: "Change preset for worship" },
  ],
};

const SetCamBUp = {
  id: "SetCamBUp",
  todo: [
    { title: "Use the 24-105mm lens" },
    { title: "Add the camera battery" },
    { title: "Add the display batteries" },
    { title: "Turn on the 'CAM B' labeled switch in the NavePoint and check that it connects (wait 30 seconds before turning other CAM switches on)" },
    { title: "Get a headset for the camera (preferably the ones with both sides)" },
    { title: "Change preset for worship" },
  ],
};

const SetCamCUp = {
  id: "SetCamCUp",
  todo: [
    { title: "Use the 18-35mm lens" },
    { title: "Add the camera battery" },
    { title: "Turn on the 'CAM C' labeled switch in the NavePoint and check that it connects (wait 30 seconds before turning other CAM switches on)" },
    { title: "Get a headset for the camera (preferably the ones with both sides)" },
    { title: "Change preset for worship" },
  ],
};

const SetCamerasExtra = {
  id: "SetCamerasExtra",
  todo: [
    { title: "Raise and level all 3 tripods" },
    { title: "Set the 3 cameras in the correct tripods (CAM A is close to the drums and CAM C is close to the keyboard)" },
    { title: "Put the 3 headsets for the camera operators in the tripods" },
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
    { title: "Set time for 10:55 (we currently only stream the second service)" },
  ],
};

const configRecording = {
  id: "ConfigureRecording",
  todo: [
    { title: "Open Wirecast and select the broadcast template" },
    { title: "Connect the SSD to the computer (if it's not there, check with Victor Valle)" },
    { title: "Make sure the SSD is empty/formatted" },
    { title: "In Wirecast, go to the menu (at the top), select Output > Output Settings, in the 'Record to Disk' section, go to File and click 'Browse...', select the correct SSD" },
    { title: "Add the other SSD to HyperDeck and make sure the input is in SDI + SDI" },
    { title: "Ask the person in ProPresenter if they setup the livestream announcements (make sure to check before service)" },
    { title: "Check that sound is outputting correctly in broadcast (otherwise just use the backup)" },
  ],
};

const worship = {
  id: "Worship",
  todo: [
    { title: "5 minutes before worship starts, start recording in Wirecast and in HyperDeck" },
    { title: "At least 2 minutes before worship starts, make sure everyone is in position" },
  ],
};

const tithesAndOffering = {
  id: "TithesOffering",
  todo: [
    { title: "Set the 'Tithes and Offering' banner in Wirecast around the same time that the ProPresenter team adds the banner to the screens inside" },
    { title: "Ask the person in CAM B to get a wide image of the big screen before announcements (in case ProPresenter goes wrong in both CAM 7 and Wirecast)" },
    { title: "Get the big lens ready for CAM A and CAM C" },
    { title: "Right before the announcements, make a smooth transition ('Auto' Button) to ProPresenter (CAM 7)" },
    { title: "Remember CAM A and CAM C to change the camera preset for the sermon" },
  ],
};

const sermon = {
  id: "Sermon",
  todo: [
    { title: "Show at least once the banner with the preacher's name in Wirecast for the livestream (can stay for 20-30 seconds)" },
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
  SetCamerasExtra,
  configLivestream,
  configRecording,
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
