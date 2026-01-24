# PenguinMod Extension Template

A template for developing PenguinMod extensions using javascript.

> Made using [create-scratch-extension](https://www.npmjs.com/package/create-scratch-extension)

## Details

The entry file for the extension is located at `src/extension.js`.
Webpack is used for building the extension.

### Configuration

Some behaviors can be configured in the `extension.json` file.

|   Key    |     Type     |                                Usage                                 |
| :------: | :----------: | :------------------------------------------------------------------: |
| filename |    String    |                   the filename of the output file                    |
|   meta   | String Array | adds text to the top of the output file (using single-line comments) |
|  banner  | String Array | adds text to the top of the output file (using a multi-line comment) |

### Imports

| File Type | Imported As |
| :-------: | :---------: |
|   .json   |    JSON     |
|   .txt    |    Text     |
|    .md    |    Text     |
|   .css    |    Text     |
|   .svg    |  Data URI   |
|   .png    |  Data URI   |
|   .jpg    |  Data URI   |
|   .jpeg   |  Data URI   |
|   .gif    |  Data URI   |

## Scripts

### Lint & Format

- Check for format: `npm run lint:format` (Fix: `npm run format`)
- Check for eslint: `npm run lint` (Fix: `npm run fix`)

### Build

- Build: `npm run build`
- Watch: `npm run watch`
