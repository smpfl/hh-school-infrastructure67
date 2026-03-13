import { useState } from 'react';
import { clsx } from 'clsx';

const stack = [
  'React JSX',
  'TypeScript',
  'ESLint',
  'Prettier',
  'Husky',
  'GitHub Actions',
];

export function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <main className="page">
      <section className="card">
        <p>
          Репозиторий настроен так, чтобы линтеры запускались перед коммитом,
          типы проверялись через TypeScript, а приложение деплоилось в GitHub
          Pages.
        </p>

        <button
          className={clsx('btn', { active: clicked })}
          onClick={() => setClicked(true)}
        >
          Нажми меня
        </button>

        {clicked && <p>Кнопка работает 🎉</p>}

        <ul className="stack-list">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
