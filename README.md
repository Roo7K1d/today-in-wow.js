<img src="http://rootk1d.xyz/github/today-in-wow.js/banner.png">
<p align="center"><i>An npm package that fetches the World of Warcraft ingame events from https://wowhead.com/today-in-wow using Axios & Cheerio.</i></p>
<div align="center">
  <a href="https://github.com/roo7k1d/today-in-wow.js/stargazers"><img src="https://img.shields.io/github/stars/roo7k1d/today-in-wow.js?color=yellow" alt="Stars Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.js/network/members"><img src="https://img.shields.io/github/forks/roo7k1d/today-in-wow.js?color=orange" alt="Forks Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.js/pulls"><img src="https://img.shields.io/github/issues-pr/roo7k1d/today-in-wow.js" alt="Pull Requests Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.js/issues"><img src="https://img.shields.io/github/issues/roo7k1d/today-in-wow.js" alt="Issues Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.js/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/roo7k1d/today-in-wow.js?color=2b9348"></a>
<a href="https://github.com/roo7k1d/today-in-wow.js/blob/master/LICENSE"><img src="https://img.shields.io/github/license/roo7k1d/today-in-wow.js?color=2b9348" alt="License Badge"/></a>
<br>
<a href="https://github.com/roo7k1d/today-in-wow.js/"><img src="https://img.shields.io/github/repo-size/roo7k1d/today-in-wow.js?color=important" alt="License Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.js/"><img src="https://img.shields.io/tokei/lines/github/roo7k1d/today-in-wow.js?color=yellowgreen" alt="License Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.js/releases"><img src="https://img.shields.io/github/v/release/roo7k1d/today-in-wow.js?color=success" alt="License Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.js/commits"><img src="https://img.shields.io/github/last-commit/roo7k1d/today-in-wow.js" alt="License Badge"/></a>
<br>
<a href="https://discord.gg/QQaWvMkFbs"><img src="https://img.shields.io/discord/801802083757457418?logo=discord&label=discord"/></a>
<a href="https://www.npmjs.com/package/today-in-wow.js"><img src="https://img.shields.io/npm/v/today-in-wow.js?logo=npm"/></a>
<a href="https://github.com/Roo7K1d/today-in-wow.js/actions"><img src="https://img.shields.io/github/actions/workflow/status/roo7k1d/today-in-wow.js/node.js.yml?logo=github-actions"/></a>
</div>
<br>
<p align="center"><a href="https://github.com/roo7k1d/today-in-wow.js/issues">Report a Bug</a> | <a href="https://github.com/roo7k1d/today-in-wow.js/issues">Request a New Feature</a> | <a href="https://github.com/today-in-wow.js/pulls">Help Develop This Project</a> | <a href="https://ko-fi.com/RootK1d">Fund Me</a></p>
<p align="center"><i>Loved the project? Please consider giving a star</i> :)</p>

<hr>



# Available Functions

### getDungeonsAndRaids (Promise)

```js
const todayInWow = require("today-in-wow.js");

calendar.getDungeonsAndRaids([locale]).then(result => {
  //Result: Array Of All Dungeons And Raids Info
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

### getEventsAndRares (Promise)

```js
const todayInWow = require("today-in-wow.js");

calendar.getEventsAndRares([locale]).then(result => {
  //Result: Array Of All Events And Rares Info
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

### getQuests (Promise)

```js
const todayInWow = require("today-in-wow.js");

calendar.getQuests([locale]).then(result => {
  //Result: Array Of All Quests Info
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

### getEconomy (Promise)

```js
const todayInWow = require("today-in-wow.js");

calendar.getEconomy([locale]).then(result => {
  //Result: Array Of All Economy Info
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

### getDragonflight (Promise)

```js
const todayInWow = require("today-in-wow.js");

calendar.getDragonflight([locale]).then(result => {
  //Result: Array Of All Dragonflight Info
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

### getShadowlands (Promise)

```js
const todayInWow = require("today-in-wow.js");

calendar.getShadowlands([locale]).then(result => {
  //Result: Array Of All Shadowlands Info
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

### getBFA (Promise)

```js
const todayInWow = require("today-in-wow.js");

calendar.getBFA([locale]).then(result => {
  //Result: Array Of All BFA Info
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

### getLegion (Promise)

```js
const todayInWow = require("today-in-wow.js");

calendar.getLegion([locale]).then(result => {
  //Result: Array Of All Legion Info
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

### getWOD (Promise)

```js
const todayInWow = require("today-in-wow.js");

calendar.getWOD([locale]).then(result => {
  //Result: Array Of All WOD Info
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

## Help Wanted!
Feel free to submit pull requests that improve the README, functions, documentation and overall code quality!
