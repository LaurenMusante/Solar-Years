// import { Triangle } from './../src/triangle.js';
//
// describe('Triangle', function() {
//
//   it('should test whether a Triangle has three sides', function() {
//     //Test content will go here.
//   });
// }); //THIS IS JUST AN EXAMPLE ^
//
// describe('Triangle', function() {
//
//   it('should test whether a Triangle has three sides', function() {
//     var triangle = new Triangle(3,4,5);
//     expect(triangle.side1).toEqual(3);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).not.toEqual(6);
//   });
//
// });
//
// //ANOTHER EXAMPLE ^
//
// describe('Triangle', function() {
//
//   ...
//
//   it('should correctly determine whether three lengths can be made into a triangle', function() {
//     var notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });
// //failer^
// });
// Triangle.prototype.checkType = function() {
//   if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//     return "not a triangle";
//   }
// };
// //passer^
//
// //EXAAAAAMPLE ^
