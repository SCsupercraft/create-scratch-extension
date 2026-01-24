(function (Scratch) {
  'use strict';

  if (Scratch.extensions.unsandboxed === false) {
    throw new Error('Sandboxed mode is not supported by this extension.');
  } else if (!Scratch.extensions.isPenguinMod) {
    throw new Error('This extension only supports PenguinMod.');
  }

  class Extension {
    getInfo() {
      return {
        id: 'myExtension',
        name: 'My Extension',
      };
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
