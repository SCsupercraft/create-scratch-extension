# PenguinMod Extension Template

A template for developing PenguinMod extensions using typescript.

Uses [penguinmod-types](https://github.com/SCsupercraft/types-pm) for types.

## Details

The entry file for the extension is located at `src/extension.ts`.
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

- Check for typing: `npm run lint:type`
- Check for format: `npm run lint:format` (Fix: `npm run format`)
- Check for eslint: `npm run lint` (Fix: `npm run fix`)

### Build

- Build: `npm run build`
- Watch: `npm run watch`

### Update Types

Use the command `npm run update-types` to update types.
