# hh-school-infrastructure67

Демо-репозиторий с настроенной фронтенд-инфраструктурой: React 18 + TypeScript + Vite, ESLint (flat config) + Prettier, Husky + lint-staged, деплой в GitHub Pages через GitHub Actions.

## Стек

- React 18 + TypeScript (strict)
- Vite 5
- ESLint 9 (flat config) с typescript-eslint, eslint-plugin-react(-hooks/-refresh), eslint-plugin-simple-import-sort, eslint-config-prettier
- Prettier
- Husky + lint-staged
- gh-pages + официальные actions/upload-pages-artifact + actions/deploy-pages

## NPM-скрипты

| Скрипт                 | Что делает                                                                         |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `npm run dev`          | Dev-сервер Vite                                                                    |
| `npm run build`        | Проверка типов + продакшн-сборка                                                   |
| `npm run preview`      | Локальный предпросмотр сборки                                                      |
| `npm run typecheck`    | `tsc --noEmit`                                                                     |
| `npm run lint`         | ESLint без файлов — проверка всего проекта; с файлами — только их                  |
| `npm run lint:fix`     | То же + автофикс                                                                   |
| `npm run format`       | Prettier с автофиксом (без аргументов — весь проект, иначе только указанные файлы) |
| `npm run format:check` | Prettier-проверка без записи (та же логика аргументов)                             |
| `npm run check`        | `typecheck` + `lint` + `format:check` (используется в CI и для самопроверки)       |
| `npm run deploy`       | Ручной деплой текущей сборки в `gh-pages` через npm-пакет `gh-pages`               |

## Pre-commit

Husky запускает `lint-staged`. Конфиг — в [lint-staged.config.js](lint-staged.config.js). Для застейдженных JS/TS-файлов прогоняется `npm run lint:fix`, `npm run format` и `npm run typecheck` (последний — на всём проекте, потому что `tsc` с явными файлами игнорирует `tsconfig.json`).

## Деплой

Push в `main` (или `master`) запускает workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml): `npm ci` → `npm run check` → `npm run build` → `actions/upload-pages-artifact` → `actions/deploy-pages`.

Для работы воркфлоу в настройках репозитория `Settings → Pages → Build and deployment → Source` должно быть выбрано **GitHub Actions**.
