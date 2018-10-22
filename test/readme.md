# test

- ava 测试框架
- nyc 测试报表
- request 接口测试

package.json 配置

```
  "ava": {
    "files": [
      "test/utils/*.test.js",
      "test/route/*.test.js",
      "test/service/*.test.js",
      "test/**.test.js"
    ],
    "source": [
      "**/*.{js,jsx}",
      "!dist/**/*"
    ],
    "match": [
      "*"
    ],
    "failFast": true,
    "tap": true,
    "require": [
      "babel-register"
    ],
    "babel": "inherit"
  },
```