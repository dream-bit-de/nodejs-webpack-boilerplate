/*********************************
 * Simple showcase for a Module. *
 *********************************/

function init() {
  return console.log('Hi from ModuleB');
}

export const ModuleB = Object.freeze({ init });
