# Краш бот

Бот для краша дискорд сервера

## Настройки
Для настройки бота перейдите в файл src/config/Config.ts

```typescript
public static DiscordToken = ""; // Токен бота
public static GuildId = ""; // Айди сервера
public static DeveloperUserId = ""; // Ваш айди
public static SpamPingUser = true; // Добавить упоминание пользователя в SpamText 
public static SpamText = ""; // Текст для рассылки участникам в лс
public static SpamTokens = []; // Токены ботов для рассылки
public static Spam = true; // Делать рассылку
public static GiveAdminPerms = true; // При запуске выдавать вам роль с админ правами
public static AdminRoleName = ""; // Название роли с админ правами
public static RemoveChannels = true; // Удалять каналы
public static RemoveRoles = true; // Удалять роли
public static BanMembers = true; // Банить участников
public static ChannelsFlood = true; // Зафлудить сервер каналами
public static ChannelsFloodName = ""; // Название создаваемых каналов
public static ChannelsFloodText = ""; // Текст который будет отправлятся в каналы
public static RolesFlood = true; // Зафлудить сервер ролями
public static RolesFloodText = ""; // Название ролей
```

## Запуск

```bash
npm i
npm run dev
```
