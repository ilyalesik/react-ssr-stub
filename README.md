# Шаблон для быстрого старта React-проекта

### Старт
```bash
$ git clone git@bitbucket.org:redisca/react-ssr-stub.git <your-project-name>
$ cd <your-project-name>
$ git remote set-url origin git@bitbucket.org:redisca/<your-project-name>.git
```

### Фетч данных для роута
Для фетча данных роута нужно прописать в api/routes.js его зависимости.
В needs передаются таски redux-saga.
Пример: 
```js
{
        path: "/dashboard",
        needs: [fetchDashboardItems]
}
```

## Зависимости

#### Client-side
* React 15
* React Router 4
* Redux
    * Redux-Thunk
    * Redux-Saga
    * Reselect
* Styled-components
* Lodash
    
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
