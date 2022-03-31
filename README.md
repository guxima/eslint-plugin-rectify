# eslint-plugin-rectify

搜集平时 `code review` 过程中发现的编码问题，汇总提炼成 `eslint` 规则，提高复用性。

## 安装

首先需要安装 [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

接下来安装 `eslint-plugin-rectify`:

```sh
npm install eslint-plugin-rectify --save-dev
```

## 用法

增加 `rectify` 到 `.eslintrc` 配置文件的 `plugins` 节点，可以忽略 `eslint-plugin-` 前缀:

```json
{
    "plugins": [
        "rectify"
    ]
}
```


然后在 `rules` 节点下按需配置你要使用的规则。

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

## 提供的所有规则

* "rectify/no-useless-concat": 禁止无效的数组调用 `Array.concat()` 
* "rectify/no-string-regexp": 禁止字符串替换时把正则当作字符串 `String.replace('/regexp/')`
* "rectify/json-parse-risk": 禁止没有异常处理的调用 `JSON.parse()`
* "rectify/no-default-sort": 禁止默认的数组排序方法 `Array.sort()`


