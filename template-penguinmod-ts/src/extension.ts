(function (Scratch) {
  'use strict';

  if (Scratch.extensions.unsandboxed === false) {
    throw new Error('Sandboxed mode is not supported by this extension.');
  } else if (!Scratch.extensions.isPenguinMod) {
    throw new Error('This extension only supports PenguinMod.');
  }

  const vm = Scratch.vm;
  const runtime = vm.runtime;

  class Extension implements Scratch.Extension {
    getInfo(): Scratch.Info {
      return {
        id: 'myExtension',
        name: 'My Extension',
      };
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
