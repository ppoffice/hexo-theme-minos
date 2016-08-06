# Minos

### A simple and retro styled Hexo theme, concentrated more on your ideas.
#### >> [Preview](http://ppoffice.github.io/hexo-theme-minos/)
![Minos - the Hexo theme](http://ppoffice.github.io/hexo-theme-minos/gallery/Minos.jpg "")

## Installation

### Install

``` bash
$ git clone https://github.com/ppoffice/hexo-theme-minos.git themes/minos
```

**Minos requires Hexo 3.0 and above.**

### Enable

Modify `theme` setting in `_config.yml` to `minos`.

### Update

``` bash
cd themes/minos
git pull
```

## Configuration

### Theme configuration example
```
# Header
menu:
  Home: /
  Archives: archives
  Categories: categories
  Tags: tags
  About: about
  Rss: /atom.xml

# Content
excerpt_link: Read More
toc: false
fancybox: true

# Miscellaneous
google_analytics:
favicon: /favicon.png

# Share
share_jia: false
share_addthis: true
```

- **excerpt_link** - Cooperate with <!-- more --\> tag to show only part of the article in index pages.
- **toc** - Whether to show the table of contents in articles.
- **fancybox** - Enable [Fancybox].
- **google_analytics** - Google Analytics ID.
- **favicon** - Favicon path.

Don't forget to rename `_config.yml.example` to `_config.yml` to enable theme config!

## Custom Categories & Tags & About Pages

To enable custom categories page, tags page and about page, just copy the `categories` folder, `tags` folder and `about` folder under your theme's `_source` foler into your site's `source` folder. Then edit theme's _config.yml and add the following lines:
```
# Header
menu:
  ...
  Categories: categories # -> add this line
  Tags: tags # -> and add this line
  About: about # -> and add this line
  ...
```

## Languages

English and Simplified Chinese are the default languages of the theme. You can add translations in the `languages` folder and change the default language in site's `_config.yml`.

``` yml
language: zh-CN
```

## Features

### Custom Categories & Tags Pages

Get your categories and tags listed in single pages to make your blog more methodic.

### Responsive Layout

Minos knows on what screen size you are browsering the website, and reorganize the layout to fit your device.

![](http://ppoffice.github.io/hexo-theme-minos/gallery/Minos-mobile.jpg "")

### Fancybox

Minos uses [Fancybox] to showcase your photos. You can use Markdown syntax or fancybox tag plugin to add your photos.

```
![img caption](img url)
```

### Monokai Sublime Syntax Highlight

Thanks to [Highlight.js](https://highlightjs.org/).

## Development

### Requirements

- [Grunt] 0.4+
- Hexo 3.0+

### Grunt tasks

- **default** - Download [Fancybox] and [Font Awesome].
- **fontawesome** - Only download [Font Awesome].
- **fancybox** - Only download [Fancybox].
- **clean** - Clean temporarily files and downloaded files.

[Hexo]: http://zespia.tw/hexo/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
[Grunt]: http://gruntjs.com/