# SlonIT

Обучение от SlonIT

# О Git

- `git init` - инициализация git, создание скрытой папки .git

## Конфиги:

- `git config user.name "..."` : настройка имени
- `git config user.email email.ru` : настройка почты
- `git congit --list` : показывает список настроек

## Базовые команды:

- `git status` : общая информация о новых, изменённых и удалённых файлах
- `git add .` / `git add -A` : добавление всех файлов в индексацию git
- `git commit -m '{message}'` : фиксация изменений в индексе -`git commit -am '{message}'` : создание коммита из файлов, которые уже индексируются и их пуш его сразу в репозиторий
- `git push {branch}` : добавление ветки в удалённый репозиторий
- `git reset` / `git reset HEAD .idea` : сбрасывает изменения в индексе/конкретной папке

## GitIgnore

- содержит файлы/папки, которые игнорируются при индексации

## Удаление и переименование файлов

- Удаление файла из индекса и рабочего каталога
  `git rm {файл}`
- Удаление файла только из индекса
  `git rm --cached {файл}`
- Переименование файла
  `git mv старое_имя новое_имя`
