# User Authentication - 登入驗證

簡易的登入驗證網站，比對使用者輸入的帳號密碼和資料庫的資料，並回傳狀態。

## Function List - 功能列表

- 使用者輸入email & password
- 帳密皆正確的話回傳welcome page
- 若帳號或密碼在資料庫中比對不到，回傳"Not registered" 或 “Ｗrong Password"

## Environment SetUp - 環境建置

1. [Node.js](https://nodejs.org/en/)
2. [Express.js](https://expressjs.com/)
3. [Handlebars](https://handlebarsjs.com/)

## Install - 安裝流程

1. 開啟終端機(Terminal)，cd 到存放專案本機位置並執行：

```
git clone https://github.com/rubytsaitw/User-Authentication
```

2. 進入專案資料夾

```
cd user-authentication
```

3. 安裝 npm 套件

```
npm install
```

4. 安裝 nodemon 套件 (若未安裝)

```
npm install -g nodemon
```

5. 啟動伺服器，執行 app.js 檔案

```
npm run start
```

6. 執行種子檔案，以取得預設資料庫

```
npm run seed
```

7. 當 terminal 出現以下字樣，表示啟動完成

```
The Express server is running on http://localhost:3000
```

請至[http://localhost:3000](http://localhost:3000)開始使用程式


## Contributor - 專案開發人員

> [Ruby Tsai](https://github.com/rubytsaitw)