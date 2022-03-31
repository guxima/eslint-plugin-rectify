# eslint-plugin-rectify

eslint-plugin

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-rectify`:

```sh
npm install eslint-plugin-rectify --save-dev
```

## Usage

Add `rectify` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "rectify"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "rectify/no-useless-concat": 2,
        "rectify/no-string-regexp": 2,
        "rectify/json-parse-risk": 2,
        "rectify/no-default-sort": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


