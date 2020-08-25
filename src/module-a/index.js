/*********************************
 * Simple showcase for a Module. *
 *********************************/

function init() {
  return console.log('Hi from ModuleA');
}

export const ModuleA = Object.freeze({ init });
