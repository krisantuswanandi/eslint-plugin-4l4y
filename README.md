# eslint-plugin-**4l4y**

ESLint plugin to improve developer's quality of lyfe by bringing joy to the variable declaration.

## Usage

Install and add this plugin to existing eslint configuration, run:
```sh
yarn add eslint-plugin-4l4y --dev
```

Update your eslint configuration:

```json
{
  "plugins": ["4l4y"],
  "rules": {
    "4l4y/variable-name": "warn"
  }
}
```

## Rules

- `variable-name` enforces **4l4y** case for simple variable declaration.
- `function-name` works the same as `variable-name`, but for function name.
- `signed-number` enforces use of number sign to better differentiate positive number from negative one.
- `thousand-separator` enforces numeric separator in thousand place for easier big number recognition.

## Limitations

- **4l4y** case only replaces `'a'` to `'4'` for now, will update to a more sophisticated spec in the future.
- Auto fix for `variable-name` and `function-name` only updates the declarations, variable usage has to be updated manually.

## 

## Development

To build the project for local environment, run:

```sh
yarn dev
```

Install the package globally, run:

```sh
yarn link
```

Use the plugin in a project, go to the project folder then run:

```sh
yarn link eslint-config-4l4y
```

*can't get it to work with `npm link`, any idea please open a pull request.*
