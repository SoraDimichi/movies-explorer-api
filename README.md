# Проект Movies-explorer бэкенд

Апи для авторизации и регистрации пользователя на node-express + mongodb

https://api.movies-explorer.soradimichi.com

## Директории

`/public` — статика, полученная в результате билда фронтенд-приложения на Реакте  
`/data` — JSON-файлы для временной эмуляции работы с базой данных  
`/routes` — папка с файлами роутера

## Либы использованные в проекте

* express
* mongoose
* body-parser
* bcryptjs
* validator
* jsonwebtoken
* cors
* celebrate
* winston
* express-winston
* dotenv
* express-rate-limit
* helmet

## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload
