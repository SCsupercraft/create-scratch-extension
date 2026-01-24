(function (Scratch) {
  'use strict';

  if (Scratch.extensions.unsandboxed === false) {
    throw new Error('Sandboxed mode is not supported by this extension.');
  }

  class Extension {
    getInfo() {
      return {
        id: 'myExtension',
        name: 'My Extension',
        blocks: [],
      };
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
