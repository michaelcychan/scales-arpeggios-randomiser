(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // pickerModel.js
  var require_pickerModel = __commonJS({
    "pickerModel.js"(exports, module) {
      var Picker2 = class {
        constructor() {
          this.gradeMap = {
            3: {
              "scales": [
                "Ab Major (1 octave)",
                "Eb Major (1 octave)",
                "E Major (1 octave)",
                "Bb Major (2 octaves)",
                "D Major (2 octaves)",
                "A minor (2 octaves) (melodic or harmonic at candidate's choice)",
                "D minor (2 octaves)"
              ],
              "arpeggios": [
                "Ab Major (1 octave)",
                "Eb Major (1 octave)",
                "E Major (1 octave)",
                "Bb Major (2 octaves)",
                "B Major (2 octaves)",
                "A Minor (2 octaves)",
                "D Minor (2 octaves)"
              ],
              "chromatics": [
                "Starting on D (open string)"
              ]
            }
          };
        }
        test() {
          return "This is the Picker Model!";
        }
        getList(grade) {
          return this.gradeMap[grade];
        }
        randomPick(grade, lists) {
          const fullList = [];
          lists.forEach((type) => {
            this.gradeMap[grade][type].forEach((scale) => {
              fullList.push(scale);
            });
          });
          const index = Math.floor(Math.random() * fullList.length);
          return fullList[index];
        }
      };
      module.exports = Picker2;
    }
  });

  // pickerView.js
  var require_pickerView = __commonJS({
    "pickerView.js"(exports, module) {
      var Pickerview = class {
        constructor(model) {
          this.model = model;
          console.log(this.model.test());
          const pickScaleButtonEl = document.querySelector("#pick");
          pickScaleButtonEl.addEventListener("click", () => {
            this.updateView();
          });
        }
        updateView() {
          const gradeValue = document.getElementById("grade-selector").value;
          const checkedTypes = document.querySelector("#chromatics");
          console.log(checkedTypes);
          document.querySelector("#grade-list").textContent = this.model.getList(gradeValue);
          console.log(this.model.randomPick(3, ["chromatics"]));
          document.querySelector("#what-to-practice").textContent = this.model.randomPick(gradeValue, ["scales", "arpeggios", "chromatics"]);
        }
      };
      module.exports = Pickerview;
    }
  });

  // index.js
  var Picker = require_pickerModel();
  var View = require_pickerView();
  var picker = new Picker();
  var view = new View(picker);
  console.log("Welcome to Scale Picker!");
})();
