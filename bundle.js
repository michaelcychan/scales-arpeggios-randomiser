(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // pickerModel.js
  var require_pickerModel = __commonJS({
    "pickerModel.js"(exports, module) {
      var Picker2 = class {
        constructor(gradeMapJSON2) {
          this.gradeMap = gradeMapJSON2;
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
          const pickScaleButtonEl = document.querySelector("#pick");
          pickScaleButtonEl.addEventListener("click", () => {
            this.updateView();
          });
        }
        updateView() {
          const typeList = ["scales", "arpeggios", "chromatics", "dominant7th"];
          const gradeValue = document.getElementById("grade-selector").value;
          const checkedTypeList = [];
          typeList.forEach((type) => {
            if (document.getElementById(type).checked) {
              checkedTypeList.push(type);
            }
          });
          const bigList = this.model.getList(gradeValue);
          typeList.forEach((type) => {
            let wholeList = bigList[type].join("<br>");
            if (wholeList == "") {
              wholeList = "None for this grade";
            }
            document.getElementById(`${type}-list`).innerHTML = wholeList;
          });
          let randomChoice = this.model.randomPick(gradeValue, checkedTypeList);
          if (randomChoice == void 0) {
            randomChoice = "None was selected / available for this grade";
          }
          document.getElementById("what-to-practice").innerHTML = randomChoice;
        }
      };
      module.exports = Pickerview;
    }
  });

  // gradeList.json
  var require_gradeList = __commonJS({
    "gradeList.json"(exports, module) {
      module.exports = {
        "1": {
          scales: [
            "D major (1 octave)",
            "E natural minor (1 octave)",
            "G Major (2 octaves)"
          ],
          arpeggios: [
            "D major (1 octave)",
            "A major (1 octave)",
            "E minor (1 octave)",
            "G major (2 octaves)"
          ],
          chromatics: [],
          dominant7th: []
        },
        "2": {
          scales: [
            "C Major (1 octave)",
            "F Major (1 octave)",
            "G minor (1 octave) (melodic or harmonic at candidate's choice)",
            "D minor (1 octave) (melodic or harmonic at candidate's choice)",
            "G Major (2 octaves)",
            "A Major (2 octaves)",
            "Bb Major (2 octaves)"
          ],
          arpeggios: [
            "C Major (1 octave)",
            "F Major (1 octave)",
            "G minor (1 octave)",
            "D minor (1 octave)",
            "G Major (2 octaves)",
            "A Major (2 octaves)",
            "Bb Major (2 octaves)"
          ],
          chromatics: [],
          dominant7th: []
        },
        "3": {
          scales: [
            "Ab Major (1 octave)",
            "Eb Major (1 octave)",
            "E Major (1 octave)",
            "Bb Major (2 octaves)",
            "D Major (2 octaves)",
            "A minor (2 octaves) (melodic or harmonic at candidate's choice)",
            "D minor (2 octaves)"
          ],
          arpeggios: [
            "Ab Major (1 octave)",
            "Eb Major (1 octave)",
            "E Major (1 octave)",
            "Bb Major (2 octaves)",
            "B Major (2 octaves)",
            "A Minor (2 octaves)",
            "D Minor (2 octaves)"
          ],
          chromatics: [
            "Starting on D (open string)"
          ],
          dominant7th: []
        },
        "4": {
          scales: [
            "Ab Major (2 octaves)",
            "B Major (2 octaves)",
            "C Major (2 octaves)",
            "E Major (2 octaves)",
            "G minor (2 octaves) (melodic or harmonic at candidate's choice)",
            "B minor (2 octaves) (melodic or harmonic at candidate's choice)",
            "C minor (2 octaves) (melodic or harmonic at candidate's choice)"
          ],
          arpeggios: [
            "Ab Major (2 octaves)",
            "B Major (2 octaves)",
            "C Major (2 octaves)",
            "E Major (2 octaves)",
            "G minor (2 octaves)",
            "B minor (2 octaves)",
            "C minor (2 octaves)"
          ],
          chromatics: [
            "Starting on A (starting from bottom A)",
            "Starting on E (starting form bottom E)"
          ],
          dominant7th: [
            "In the key of C (Starting on open string G)",
            "In the key of D (Starting on bottom A)"
          ]
        }
      };
    }
  });

  // index.js
  var Picker = require_pickerModel();
  var View = require_pickerView();
  var gradeMapJSON = require_gradeList();
  var picker = new Picker(gradeMapJSON);
  var view = new View(picker);
  console.log("Welcome to Scale Picker!");
})();
