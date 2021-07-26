# Todo List
練習使用 Vue, Node.js 和 Mongodb 建立專案，可以分別使用不同帳號登入後，建立自己的代辦事項

### 套件
+ [Animate.css](https://github.com/animate-css/animate.css) 增加前端動畫效果
+ [SweetAlert2](https://github.com/sweetalert2/sweetalert2) 增加前端訊息提示
+ [JsonWebToken](https://github.com/auth0/node-jsonwebtoken#readme) 發送 token 給登入者

---

## 路由
| 功能 | 詳細 | 方法 | URL |
| :---: | --- | --- | --- |
| 註冊 | 使用 username, email, password 註冊 | POST | /api/auth/register |
| 登入 | 使用 username, password 登入 | POST | /api/auth/login |
| 建立清單 | 建立單一清單 | POST | /api/todos |
| 瀏覽所有清單 | 一次取得所有清單 | GET | /api/todos |
| 修改獨立清單 | 獨立修改所指定的清單 | PUT | /api/todos/:id |
| 修改全部清單 | 一次修該全部清單(勾選) | PUT | /api/todos |
| 刪除獨立清單 | 獨立刪除所指定的清單 | DELETE | /api/todos/:id |
| 刪除全部完成清單 | 一次刪所有完成清單(勾選) | DELETE | /api/todos |

---

## 安裝
可以跟著步驟進行安裝與設定，即可開始使用專案

###  架構版本

- [Vue v2.6.11](https://vuejs.org/)
- [Nodejs v14.15.4](https://nodejs.org/en/)
- [Express v4.17.1](https://expressjs.com/)  
- [Mongoose v5.13.3](https://mongoosejs.com/)


### Clone 專案

Clone 在你的電腦上

```
$ git clone https://github.com/ben7152000/todolist-vue.git
```

### 設定資料庫

請在 [mongodb-atlas](https://account.mongodb.com/account/login?n=%2Fv2%2F60f97923e0c93b453bed109e&nextHash=%23metrics%2FreplicaSet%2F60f979f69a5aeb3ca881ac05%2Fexplorer%2Fdiving-blog%2Fposts%2Ffind) 建立資料庫，並連接到專案裡

### 設定專案

**1. 進入專案**

```
$ cd vue-todolist
```

**2. 安裝套件**

```
$ npm install
```

**3. 建立 .env**

```
MONGODB_URL=<YOUR_MONGODB_URL>
SECRET_KEY=<YOUR_TOKEN_KEY>
PORT=<YOUR_SERVER_PORT>
```

**4. 執行專案**

```
$ npm run serve
```

**5. 專案成功執行**

```
> vue server is running on port 8080
> node server is running on port 8081
```

---

### 作者
[Ben Chou](https://github.com/ben7152000)
