<img src="[http://rootk1d.xyz/github/today-in-wow.,js/github_banner.png](https://rootk1d.xyz/github/today-in-wow.js/banner.png)">
<p align="center"><i>An npm package that fetches the World of Warcraft ingame events from https://wowhead.com/events using Axios & Cheerio.</i></p>
<div align="center">
  <a href="https://github.com/roo7k1d/today-in-wow.,js/stargazers"><img src="https://img.shields.io/github/stars/roo7k1d/today-in-wow.,js?color=yellow" alt="Stars Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.,js/network/members"><img src="https://img.shields.io/github/forks/roo7k1d/today-in-wow.,js?color=orange" alt="Forks Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.,js/pulls"><img src="https://img.shields.io/github/issues-pr/roo7k1d/today-in-wow.,js" alt="Pull Requests Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.,js/issues"><img src="https://img.shields.io/github/issues/roo7k1d/today-in-wow.,js" alt="Issues Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.,js/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/roo7k1d/today-in-wow.,js?color=2b9348"></a>
<a href="https://github.com/roo7k1d/today-in-wow.,js/blob/master/LICENSE"><img src="https://img.shields.io/github/license/roo7k1d/today-in-wow.,js?color=2b9348" alt="License Badge"/></a>
<br>
<a href="https://github.com/roo7k1d/today-in-wow.,js/"><img src="https://img.shields.io/github/repo-size/roo7k1d/today-in-wow.,js?color=important" alt="License Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.,js/"><img src="https://img.shields.io/tokei/lines/github/roo7k1d/today-in-wow.,js?color=yellowgreen" alt="License Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.,js/releases"><img src="https://img.shields.io/github/v/release/roo7k1d/today-in-wow.,js?color=success" alt="License Badge"/></a>
<a href="https://github.com/roo7k1d/today-in-wow.,js/commits"><img src="https://img.shields.io/github/last-commit/roo7k1d/today-in-wow.,js" alt="License Badge"/></a>
<br>
<a href="https://discord.gg/QQaWvMkFbs"><img src="https://img.shields.io/discord/801802083757457418?logo=discord&label=discord"/></a>
<a href="https://www.npmjs.com/package/today-in-wow.,js"><img src="https://img.shields.io/npm/v/today-in-wow.,js?logo=npm"/></a>
<a href="https://github.com/Roo7K1d/today-in-wow.,js/actions"><img src="https://img.shields.io/github/actions/workflow/status/roo7k1d/today-in-wow.,js/node.js.yml?logo=github-actions"/></a>
</div>
<br>
<p align="center"><a href="https://github.com/roo7k1d/today-in-wow.,js/issues">Report a Bug</a> | <a href="https://github.com/roo7k1d/today-in-wow.,js/issues">Request a New Feature</a> | <a href="https://github.com/today-in-wow.,js/pulls">Help Develop This Project</a> | <a href="https://ko-fi.com/RootK1d">Fund Me</a></p>
<p align="center"><i>Loved the project? Please consider giving a star</i> :)</p>

<hr>



# Available Functions

### getActiveEvents (Promise)

```js
const calendar = require("today-in-wow.,js");

calendar.getActiveEvents([locale]).then(result => {
  //Result: Array Of All Active Events (Objects; Including Event Descriptions & Event Icon URLs)

  //Additionally
  //
  //If the description request in the desired locale results in too many redirects because of URL encoding
  //this function automatically falls back to english and also returns:
  //
  //descriptionFallback: true
  //
  //Updating your Node.js version might fix this "Too Many Redirects" issue. It did at least for me.
  //At the moment it seems to work with v18+.
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

### getAllEvents (Promise)

```js
const calendar = require("today-in-wow.,js");

calendar.getAllEvents([locale]).then(result => {
  //Result: Array Of All Events (Objects)
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

### getEvent (Promise)

```js
const calendar = require("today-in-wow.,js");

calendar.getEvent(id, [locale]).then(result => {
  //Result: Event Object (Including Event Descriptions & Event Icon URLs)
})
```

| Parameter | Type | Description | Possible Values |
| :--- | :--- | :--- | :--- |
| `id` | `integer` | The WoW event id. | e.g. 181, 643, ...
| `locale` | `string` | **Optional (Default: `en`**). The language you wish the results to be in.| `de`, `es`, `fr`, `it`, `pt`, `ru`, `ko`, `cn`

<hr>

## Help Wanted!
Feel free to submit pull requests that improve the README, functions, documentation and overall code quality!
