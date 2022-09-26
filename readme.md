# Scales and Arpeggios Randomiser

It is to generate a scale / arpeggio / chromatic from the ABRSM syllabus for young violinist to choose  to practise.

## To clone and install
```
git clone https://github.com/michaelcychan/scales-arpeggios-randomiser.git
cd scales-arpeggios-randomiser
npm install
```

## To generate bundle.js
```
npm run build
```
Keep this terminal open  

## To run test
```
npm run test
```

## To edit the list
The List of scales is stored in gradeList.json in JSON format. The file structure is as follows:

```
{
  "2": {
    "scales": [
      "C Major (1 octave)",
      "F Major (1 octave)",
      ...
    ],
    "arpeggios": [
      "C Major (1 octave)",
      ...
    ],
    "chromatics": [
      ...
    ], 
    "dominant7th": [
      ...
    ]
  },
    "3": {
    "scales": [
      ...
    ],
    "arpeggios": [
      ...
    ],
    "chromatics": [
      ...
    ], 
    "dominant7th": [
      ...
    ]
  }
}
```

## To Do list
[X] Allow to generate the full list for grade 3  
[X] Contains Scales, Arpeggios, chromatics, and Dominant 7th.  
[X] Allow to print a random scale for grade 3  
[X] Limit grade level from 1 to 8   
[] Expand the list from grade 1 to 8 (Currently only grade 2 - 4)  
[] Add Styling  
[X] Inform user if the grade / list pair contains nothing.  