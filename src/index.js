/**********************
 * Initialize project *
 **********************/

import { ModuleA } from './module-a';
import { ModuleB } from './module-b';

function showDemo() {
  ModuleA.init();
  ModuleB.init();

  return 0;
}

const NodeWebpackBoilerplate = Object.freeze({ showDemo });

// Start Demo.
NodeWebpackBoilerplate.showDemo();
