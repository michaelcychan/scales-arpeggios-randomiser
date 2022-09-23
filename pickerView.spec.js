/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const PickerView = require('./pickerView')
const Picker = require('./pickerModel')

describe('PickerView', () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  it('checks initial state', () => {
    const picker = new Picker()
    const view = new PickerView(picker);
    expect(document.querySelector('#title').innerHTML).toBe("Scales and Arpeggios Randomiser")
    expect(document.querySelector('#what-to-practice').innerHTML).toBe("Let's Go!")
  });


})