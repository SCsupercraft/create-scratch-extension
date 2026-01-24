(function (Scratch) {
  'use strict';

  if (Scratch.extensions.unsandboxed === false) {
    throw new Error('Sandboxed mode is not supported by this extension.');
  }

  const vm = Scratch.vm;
  const runtime = vm.runtime;

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

  // eslint-disable-next-line no-undef
})(Scratch);
