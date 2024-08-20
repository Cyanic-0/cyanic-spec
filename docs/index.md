---
home: true
heroText: cyanic-lint
tagline: 前端编码规范工程化
actionText: 立刻进入 →
actionLink: /coding/html.md

---

## :couch_and_lamp: 配套工具

引入了多个业界流行的 `Linter` 作为规范文档的配套工具，并根据规范内容定制了对应的规则包，它们包括：

| 规范                                                              | Lint 工具                                                      | NPM 包                                                                                       |
| ----------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范 | [ESLint](https://eslint.org/)                                  | [cyanic-eslint-config](https://www.npmjs.com/package/cyanic-eslint-config)             |
| CSS 编码规范                                                      | [stylelint](https://stylelint.io/)                             | [cyanic-stylelint-config](https://www.npmjs.com/package/cyanic-stylelint-config)       |
| Git 规范                                                          | [commitlint](https://commitlint.js.org/#/)                     | [cyanic-commitlint-config](https://www.npmjs.com/package/cyanic-commitlint-config)     |
| 文档规范                                                          | [markdownlint](https://github.com/DavidAnson/markdownlint)     | [cyanic-markdownlint-config](https://www.npmjs.com/package/cyanic-markdownlint-config) |


[cyanic-lint](https://www.npmjs.com/package/cyanic-lint) 收敛屏蔽了上述依赖和配置细节，提供简单的 `CLI` 和 `Node.js API`，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规范的成本。

您可以使用[cyanic-lint](https://www.npmjs.com/package/cyanic-lint) 方便地为项目接入全部规范。

</br>

