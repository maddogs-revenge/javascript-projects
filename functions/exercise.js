// ** MAKE LINE:
// function makeLine(size) {
//     let line = '';
//     for (let i=0; i<size; i++) {
//       line += '#';
//     }
//     return line;
//   }
// //   console.log(makeLine(5))

// ** MAKE SQUARE USING makeLike FUNCTION ABOVE:
// function makeSquare(size) {
//     let square = '';
//     for (let i=0; i<size; i++) {
//         square += (makeLine(size) + '\n');
//     }
//     return square
// }
// console.log(makeSquare(5))

// ** MAKE RECTANGLE:
// function makeLine(width) {
//     let line = '';
//     for (let i=0; i<width; i++) {
//       line += '#';
//     }
//     return line;
//   }

// function makeRectangle(width, height) {
//     let rectangle = '';
//     for (let i = 0; i < height; i++) {
//       rectangle += (makeLine(width) + '\n');
//     }
//     return rectangle
//   }
//   console.log(makeRectangle(5,3))

// ** MAKE RECTANGLE (REDUX):
// function makeLine(width) {
//     let line = '';
//     for (let i=0; i<width; i++) {
//       line += '#';
//     }
//     return line;
//   }

// function makeSquare(height) {
//     let square = '';
//     for (let j=0; j<height; j++) {
//         square += (makeLine(height) + '\n');
//     }
//     return square
// }

// function makeRectangle(width, height) {
//     let rectangle = ''
//     for () {
        // ???????????????????????????????????
//     }
//     return rectangle
// }
// console.log(makeRectangle(5,3))
   
// // ** DOWNWARD STAIRS
// function makeLine(size) {
//     let line = '';
//     for (let i=0; i<size; i++) {
//       line += '#';
//     }
//     return line;
//   }

//   function makeDownwardStairs(height) {
//     let stairs = '';
//     for (let i = 0; i < height; i++) {
//       stairs += (makeLine(i+1) + '\n');
//     }
//     return stairs;
//   }
//   console.log(makeDownwardStairs(5))

// ** MAKE SPACES
function makeSpaceLine(numSpaces, numChars) {
    spaces = ''
    chars = ''
    for(i=0; i<numSpaces; i++) {
        spaces += "_";
        return spaces
    }
        for(j=0; j<numChars; j++) {
            chars += '#'
        }
        return spaces + chars
    }


console.log(makeSpaceLine(3, 5));