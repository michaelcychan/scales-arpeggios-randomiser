const Picker = require('./pickerModel');
const View = require('./pickerView');
const gradeMapJSON = require('./gradeList.json')

const picker = new Picker(gradeMapJSON);
const view = new View(picker);

console.log('Welcome to Scale Picker!')
