# Шаблон для быстрого старта React-проекта

## Зависимости

#### Client-side
* React 15
* React Router 4
* Redux
    * Redux-Thunk
    * Redux-Saga
    * Reselect
* Styled-components
    
#### Server-side
* Node >= 8, npm >= 7
* Express

#### Сборка
* Webpack
* Тестирование: mocha, chai
* Форматирование кода: prettier
    


## Запуск production
```bash
$ npm i
$ ./node_modules/.bin/babel -d ./build/src ./src -s --copy-files
$ ./node_modules/.bin/webpack --optimize-minimize --progress -p --config ./webpack.production.config.js
$ npm run production
```

## Запуск dev-сервера
```bash
$ npm i
$ npm run dev
```
