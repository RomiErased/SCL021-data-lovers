import { handleSortChange } from "../src/data.js";


describe("data.js", () => {
  test("Ordena alfabéticmaente en orden creciente ", () => {
    let dataPrueba = [{name: "pikachu"}, {name: "charmander"}]
    let eventoPrueba = {target:{value:"a-z"}}

    let result = handleSortChange(eventoPrueba, dataPrueba)

    expect (result[0].name).toEqual("charmander");
  });
});



// describe("handleSortChange", () => {
//   it("is a function", () => {
//     expect(typeof handleSortChange).toBe("function");
//   });

//   it("returns `handleSortChange`", () => {
//     expect(handleSortChange()).toBe("OMG");
//   });
// });
