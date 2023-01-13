# Краш бот

Бот для краша дискорд сервера

## Настройки
Для настройки бота перейдите в файл src/config/Config.ts

```env
DISCORD_TOKEN = ""; // Токен бота
GUILD_ID = ""; // Айди сервера
DEVELOPER_USER_ID = ""; // Ваш айди
SPAM_PING_USER = true; // Добавить упоминание пользователя в SpamText 
SPAM_TEXT = ""; // Текст для рассылки участникам в лс
SPAM_TOKENS = []; // Токены ботов для рассылки
SPAM = true; // Делать рассылку
GIVE_ADMIN_PERMS = true; // При запуске выдавать вам роль с админ правами
ADMIN_ROLE_NAME = ""; // Название роли с админ правами
REMOVE_CHANNELS = true; // Удалять каналы
REMOVE_ROLES = true; // Удалять роли
BAN_MEMBERS = true; // Банить участников
CHANNELS_FLOOD = true; // Зафлудить сервер каналами
CHANNELS_FLOOD_NAME = ""; // Название создаваемых каналов
CHANNELS_FLOOD_TEXT = ""; // Текст который будет отправлятся в каналы
ROLES_FLOOD = true; // Зафлудить сервер ролями
ROLES_FLOOD_NAME = ""; // Название ролей
```

## Запуск

```bash
npm i
npm run dev
```
