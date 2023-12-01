**Это приложение для поиска фильмов использует API**: [The Open Movie Database](https://www.omdbapi.com/).
**С помощью него вы можете найти фильм и получить о нем дополнительную информацию. При регистрации пользователь может добавить понравившиеся фильмы в избранное, а также посмотреть историю своих поисков запросов**

## **1 уровень (необходимый минимум)**

-   Реализованы все требования к функциональности, описанные в задании:

## React

1. [x] Пишем функциональные компоненты c хуками в приоритете над классовыми.
2. [x] Есть разделение на умные и глупые компоненты : [Глупые, например](https://github.com/qui-qui-qui/Moomovie/blob/main/src/pages/ExtraInfo.tsx)
       , [Умные, например](https://github.com/qui-qui-qui/Moomovie/blob/main/src/components/FilmItem.tsx).
3. [x] Есть рендеринг списков: [Main](https://github.com/qui-qui-qui/Moomovie/blob/main/src/components/FilmsList.tsx),
       [Search]
4. [x] Реализована хотя бы одна форма: [Form](https://github.com/qui-qui-qui/Moomovie/blob/main/src/components/LoginForm.tsx).
5. [x] Есть применение Контекст API: [Providers](https://github.com/qui-qui-qui/Moomovie/tree/main/src/providers):
6. [x] Есть применение предохранителя: [ErrorBoundary](https://github.com/qui-qui-qui/Moomovie/blob/main/src/components/ErrorBoundary.tsx) оборачиваем [IndexTs](https://github.com/qui-qui-qui/Moomovie/blob/main/src/pages/MainPage.tsx)
7. [x] Есть хотя бы один кастомный хук: [FavoritesCheck](https://github.com/qui-qui-qui/Moomovie/blob/main/src/hooks/useFavoritesCheck.ts), [Debounce](https://github.com/qui-qui-qui/Moomovie/blob/main/src/hooks/useDebounce.ts).
8. [x] Хотя бы несколько компонентов используют PropTypes: [FilmItem](https://github.com/qui-qui-qui/Moomovie/blob/main/src/components/FilmItem.tsx), [AddToFavorite](https://github.com/qui-qui-qui/Moomovie/blob/main/src/components/AddToFavorite.tsx)
9. [x] Поиск не должен триггерить много запросов к серверу: хук [Debounce](https://github.com/qui-qui-qui/Moomovie/blob/main/src/hooks/useDebounce.ts). использован в компоненте [SearchBar](https://github.com/qui-qui-qui/Moomovie/blob/main/src/components/SearchBar.tsx).
10. [x] Есть применение lazy + Suspense: [Suspense](https://github.com/qui-qui-qui/Moomovie/blob/main/src/pages/MainPage.tsx), [Lazy](https://github.com/qui-qui-qui/Moomovie/blob/main/src/routing/lazy.ts)

## Redux

1. [x] Используем Modern Redux with Redux Toolkit: [Store](https://github.com/qui-qui-qui/Moomovie/blob/main/src/redux/store.ts).
2. [x] Используем слайсы: [slices](https://github.com/qui-qui-qui/Moomovie/tree/main/src/redux/slices)
3. [x] Есть хотя бы одна кастомная мидлвара или createListenerMiddleware: [Middleware](https://github.com/qui-qui-qui/Moomovie/blob/main/src/redux/middleware/userStateMiddleware.ts).
4. [x] Используется RTK Query: [filmService](https://github.com/qui-qui-qui/Moomovie/blob/main/src/redux/services/filmService.ts)
5. [x] Используется Transforming Responses: [filmService](https://github.com/qui-qui-qui/Moomovie/blob/main/src/redux/services/filmService.ts).

## **2 уровень (необязательный)**

1. [x] Использование TypeScript: [TSConfig](https://github.com/qui-qui-qui/Moomovie/blob/main/tsconfig.json)
