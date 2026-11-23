# HANDOFF — artemisaxen

_Составлен 2026-11-15. Источник: код репо, git log, `bible/`, внешний проект книги `~/Books/dont-develop`._

## 1. Что это

Личный сайт Artemis Axen (Next.js 16 App Router, React 19, Tailwind 4, framer-motion), деплой на Vercel
(проект `artemisaxen`, привязан через `.vercel/`). Две части:

1. **Портфолио full-stack разработчика** — главная `/`.
2. **Онлайн-роман «Don't Develop» / «Не проявляй»** — `/books/...`, RU-оригинал + EN-перевод, с кинематографичными сценами (картинки/видео).

Команды: `npm run dev | build | lint`. Тестов нет.

## 2. Портфолио

- Главная: `app/page.tsx` → секции в `components/sections/` (Hero, Proof, Work, **Services**, Notes, Experience, Stack, About, Contact).
- **Позиционирование с 20.11.2026: только фриланс** (Shopify + Next.js), не поиск работы в NL. Тексты: Hero, About, Contact, Experience, `lib/metadata.ts`, `opengraph-image.tsx`.
- Кейсы проектов: `lib/projects.ts` (рендер — `components/work/CaseStudy.tsx`, `DeviceShowcase.tsx`; скриншоты в `public/work/<slug>/`):
  - **LiveCity.cam** — Live (livecity.cam); недавно добавлены postmortem cache-stampede и ноябрьские ops-работы.
  - **TravelHub.cam** — Live (travelhub.cam).
  - **FamilyFound** — Live MVP (familyfound.io); добавлены directory link checker и law-watch agent.
  - **Sokole** — Shopify-магазин, **Live** с 19.11.2026 (sokole.eu, EN + /el), передан клиенту; скриншоты пока старые (до переезда).
- Инженерные заметки: `components/sections/NotesSection.tsx` (массив карточек tag/title/body).
- Контактная форма: `app/api/contact/route.ts` → Resend.
- Env (значения в `.env.local`, не коммитить): `RESEND_API_KEY`, `RESEND_EMAIL_DOMAIN`, `CONTACT_TO_EMAIL`, `BLOB_READ_WRITE_TOKEN`, `NEXT_PUBLIC_GA_ID`, `VERCEL_OIDC_TOKEN`.
- Прочее: `app/privacy`, `app/terms`, `app/legal`, `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`.
- Мусор/прототипы в `public/`: `home4.html`, `home-claude5.html`, `prototype-001.html` — не используются роутингом, можно удалить по согласованию.

Последние коммиты (ноябрь 2026) — только контент кейсов. Последний: урок Sokole про Development store → Client transfer store.

## 3. Книга «Не проявляй» / «Don't Develop»

### Суть
Нуар-триллер, Лондон, октябрь. Майкл Лоусон — единственный архитектор «Протокола», пять лет назад стёр собственную память своим же модулем. Элен — архивный аудитор. Клава (EN: **Clara**) — голосовой ИИ-ассистент; её раскрытие — гл. 28, костная проводимость — гл. 32. Тема: можно ли простить себя за решение, разрушившее чужие жизни. Последняя строка: «Если ты читаешь это — значит, мы снова опоздали.»

### Объём и статус
- 47 глав (0 = Пролог … 46). **Текст закончен**, EN-перевод полный (0–46).
- Обложки RU/EN — `public/images/`.

### Где что лежит (в репо)
| Что | Путь |
|---|---|
| RU-текст (редактируется по файлам, деплой на push) | `data/books/dont-develop/ru/chapters/NN.md` (frontmatter num/title/time) |
| EN-текст | `data/books/dont-develop/en/chapters.json` |
| Персонажи (референсы на Blob) | `data/books/dont-develop/characters.json` (michael, helen, clara) |
| Логика | `lib/books.ts` (загрузка глав, scene plan, видео глав) |
| Роуты | `app/books/page.tsx`, `app/books/dont-develop/{page,about}`, `app/books/dont-develop/[lang]/chapter/[chapter]` |
| Компоненты | `components/books/*` |
| Канон | `bible/CANON.md` > `bible/truth-bible.md` > главы |
| Визуальный стиль | `bible/visual-style.md` (photoreal noir, teal-and-amber, ночь, дождь) |
| Персонажи (описания) | `bible/characters/helen.md`, `michael.md` (+ `characters_images/`) |
| Scene plans | `bible/scenes/chapter-00-scenes.json` (6 сцен, все ready), `chapter-01-scenes.json` (4 сцены, все ready) |
| Видео-кандидаты пролога | `bible/scenes/chapter-00-video-candidates.md` (лежат в `bible/scenes/ch01/`) |
| Скрипты | `scripts/split-ru-chapters.mjs` (разовый), `scripts/upload-scene-image.mjs` (в Blob) |

Видео глав: `lib/books.ts` → карта `chapter → YouTube`; сейчас только гл. 0 (`0Vba_rDiPJw`).

### Внешний рабочий проект книги: `~/Books/dont-develop`
- `manuscript/ch00–ch46.md` — авторская рабочая копия.
- `bible/` — CANON, truth-bible, **`memory-mechanics.md`** (внутренняя механика стирания памяти, 5 правил — в репо сайта её нет).
- `notes/continuity-log.md` — журнал нестыковок (обязательно дописывать по шаблону в конце файла), `notes/fabula-summary.md`.
- `pilot/` — пайплайн видео по прологу (beats.json → edge-tts → captions → SDXL/Draw Things → ffmpeg), отчёт `pilot/REPORT.md`.
- `README.md` — workflow: перед правкой сквозной детали grep по всем главам + сверка с continuity-log.

### Дата стирания: апрель → октябрь (исправлено 2026-11-15)
Каноническая дата по `CANON.md` — **16–17 октября**. Сайт RU и EN приведены к рукописи `~/Books/dont-develop/manuscript/`
(гл. 21, 24, 25, 33, 36, 39, 40, 45, 46). «Апреля/April» в тексте больше нет.
- Гл. 21 (ежедневник): список месяцев теперь «Январь, Февраль, Март… Октябрь…», как в рукописи, — скачок март→октябрь в перечислении стоит проверить автору.
- ⚠️ Текст в двух копиях (сайт vs `~/Books`) всё ещё отличается разметкой и местами абзацами; какая копия — источник правды, не решено. Спросить автора перед любой массовой синхронизацией.

### Открытые сюжетные нити (НЕ закрывать без решения автора)
Из `notes/continuity-log.md` → Watchlist: VOID под «Harris & Croft» + звонящий с кашлем (гл. 15–17); наблюдатель на фото (гл. 9→11); **Дэниел Мерсер** (гл. 5, 8, 14 — приоритет выше, отложено автором); записка в запертой лавке (гл. 10). Конверт «Когда простишь» — намеренно не вскрыт (решено).

### Визуал/видео — состояние
- Сцены с картинками готовы только для гл. 0 и 1. Дальше по одной главе за раз: scene plan JSON по схеме `ScenePlan` в `lib/books.ts` → генерация → `upload-scene-image.mjs` → `asset.status: "ready"`.
- Правила: не выдумывать внешность (у Майкла физическое описание **не найдено** — где-то есть спека «184 см…», файл не найден); прикладывать reference-кропы с Blob; текст на экранах — через `overlayText`, не через модель; всё ночью.
- Seedance/Flow AI кредиты закончились. Кандидаты пролога: годится только `495C3C29…` как insert.
- Пайплайн YouTube (pilot) — нерешённые вопросы из REPORT.md: консистентность лиц, кропы низкого разрешения (~262px), edge-tts vs ElevenLabs, ffmpeg без libass.

## 4. Фриланс — план (20.11.2026)
Цель: фриланс-заказы на Shopify и Next.js по портфолио. Оплата — **за проект** (fixed price). Shopify и Next.js оба интересны, **приоритет — попробовать Shopify Partner**.
Личные детали (статус регистрации, где сейчас живёт) — в приватной памяти Claude, **не в этом репо: он публичный**.

Сделано на сайте:
- Секция услуг `components/sections/ServicesSection.tsx` (ссылка «Services» в навбаре): Shopify под ключ · Shopify fixes & migrations · Next.js sites & MVPs · Product visuals & video. Цены не указаны.
- 5-й проект в `lib/projects.ts`: **Don't Develop** (AI-видео, полный пролог на YouTube `0Vba_rDiPJw`, сделан самим автором) — после Sokole. Картинки в `public/work/dont-develop/` (превью YouTube + обложки EN/RU). Новый статус `Published`, поле `links` (доп. ссылки в карточке).

Каналы поиска (по порядку):
1. **Shopify Partner Program** → Partner Directory (условия входа проверить; Sokole — запущенный магазин клиента).
2. Storetasker (биржа только под Shopify, с отбором).
3. Upwork, Contra, Malt; LinkedIn с пометкой «Open to freelance».
4. Прямой поиск клиентов: нишевые бренды GR/EU на WooCommerce или старом Shopify (второй язык, переезд); русскоязычный бизнес в ЕС; агентства на субподряд (Shopify/Next.js).

Shopify Partners — проверено в Dashboard (20.11):
- Партнёрский аккаунт уже есть (Dev Dashboard → Organization settings → Partner program). Уровень: **Registered**, Partner Directory — «Not eligible».
- Официальная таблица уровней (в Dashboard, «View tiers»): **Silver = $25K eligible sales + 1 attributed merchant за 365 дней** → листинг в Directory и бейдж. Gold — $5M + 5 мерчантов за 4 года.
- Sokole в Stores — тип **Collaboration** → к партнёрскому аккаунту **не привязан**, в зачёт не идёт. Partner Support (чат в help.shopify.com, 20.11) ответил: **задним числом привязать нельзя** — collaborator-доступ не превращается в transfer. Засчитываются только магазины, созданные как Client transfer store и переданные клиенту (клиент активирует тариф после принятия передачи). Пересоздавать Sokole не имеет смысла.
- Профиль организации: сайт artemisaxen.com добавлен (20.11). Business entity — **не добавлять**, пока не решён вопрос регистрации.
- **Правило для новых клиентов:** магазин создавать только через «Create client store» (Partner program) / Client transfer store из своего аккаунта, потом передавать клиенту — так он привязывается к тебе. Без этого Silver не набрать.
- Быстрее всего к $25K: клиент, у которого **уже есть продажи** (переезд с WooCommerce/другой платформы) — его оборот сразу идёт в зачёт. Новый бренд с нуля набирает $25K долго.
- Каталог — долгая цель; заказы пока через Storetasker, Upwork/Contra, прямые письма, субподряд. Shopify Academy / Verified Skills — для значка.

Поиск клиентов (20.11):
- Ниши: **парфюм** (есть кейс Sokole), **beauty**, **спорт**, **электроника**. Сначала Греция, потом ЕС (NL, Кипр).
- Доп. ниши-идеи: сандалии/кожа ручной работы, купальники/resortwear, оливковое масло/гурме, украшения, керамика/дом, мёд/травы, спортпит.
- Главная цель — **переезд на Shopify магазина с уже идущими продажами** (WooCommerce/Magento): его оборот сразу идёт в зачёт Silver. Уже на Shopify — доработки, второй язык, Markets, визуалы.
- Список лидов (~60 сайтов, платформа определена по HTML, разбит на A/B/C/X): **`~/Sites/_freelance/leads-greece.md` — локально, вне git** (оба репо публичные, список туда не класть).
- Дальше: ручная проверка категории A → письмо-шаблон EN/GR с кейсом Sokole → первые 10 писем → пакет «Переезд на Shopify» в Services на сайте.

Прогресс (23.11):
- **Категория A проверена руками** и разбита в файле лидов на A1 (старый дизайн, медленно, нет EN → писать) и A2 (хорошие магазины: переезд не продать, только визуалы или EN-версия, в Partner-зачёт не идёт).
- **Вывод:** продавать не «переезд на Shopify», а новый магазин (дизайн, скорость, языки); Shopify — средство. Аргумент «Woo бесплатный vs Shopify платный» разобран в файле лидов.
- **Первый лид A1 исследован:** владелец, контакты, стек (WordPress + Elementor + WooCommerce, есть своя веб-студия), EL+EN уже есть, бизнес живой. Черновик письма EN/GR — в `~/Sites/_freelance/<лид>/email-draft.md` (локально). **Не отправлено.**
- ⚠️ Найденная «сломанная страница контактов» (сырые шорткоды) у Артёма в браузере **не воспроизвелась** — зацепку из письма убрать, нужен другой повод (скорость по PageSpeed, редизайн, Markets для ЕС).
- Открыто по письму: с какого адреса слать; упоминать ли местоположение; согласие владелицы Sokole на упоминание; греческий текст — проверить носителем.

Сильные стороны для питчей: многоязычные магазины (Translate & Adapt), греческие платежи IRIS, перенос Dev store → магазин клиента (playbook), цифры из кейсов, AI-визуалы и видео.

Открыто: пакеты и цены; свежие скриншоты sokole.eu; профили на площадках; список 20–30 компаний для прямых писем + шаблоны писем.

## 5. Где остановились (сессия 2026-11-15)
- Создан этот HANDOFF; исправлена дата стирания (апрель → октябрь) в RU и EN на сайте; закоммичено и запушено в `main`.
- Отправлена справка о портфолио соседней сессии `LC_FF_SMM` (SMM для LiveCity/FamilyFound). Instagram LiveCity в репо не найден.

**Следующие шаги (ждут решения автора):**
1. Гл. 21: перечисление месяцев «Март… Октябрь…» — пропуск апреля–сентября, переписать связку?
2. Решить, какая копия текста главная (сайт или `~/Books/dont-develop/manuscript`), и синхронизировать.
3. Физическое описание Майкла (спека «184 см…») — найти файл.
4. Сцены для гл. 2+; видео для глав после пролога.
5. ~~Sokole — запустить~~ (запущен 19.11, карточка обновлена). Опционально: свежие скриншоты с живого sokole.eu.
6. Почистить прототипы в `public/*.html`.

## 6. Правила работы
- Коммит/пуш только по просьбе. Пуш в `main` = деплой.
- Сюжет сверять с каноном; новые идеи сами по себе не повод менять Truth Bible.
- Секреты из `.env.local` не выводить.
- В репо есть тяжёлые бинарники (`bible/*.pdf`, `bible/scenes/ch01/*.MP4`, `backup/*.zip`) — не плодить новые, медиа класть в Vercel Blob.
