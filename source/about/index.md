title: About Minos
---
<p align="center">
<img height="40" src="http://blog.zhangruipeng.me/hexo-theme-minos/images/logo.png">
<br>
A simple and retro styled Hexo theme, concentrating more on your ideas.
<br>
<small><a href="http://blog.zhangruipeng.me/hexo-theme-minos/"><b>Preview</b></a> | <a href="https://github.com/ppoffice/hexo-theme-minos/archive/master.zip"><b>Download</b></a> | Documentation (Coming soon)</small>
</p>

![Minos](http://ppoffice.github.io/hexo-theme-minos/gallery/preview.png "Minos Preview")

### :gift: Features

**Extensive Plugin Support**

Minos includes plentiful search, comment, sharing and other plugins out of the box. You can choose any of them to enrich your
blog experience, or build your own plugin easily referring to the existing Minos plugins.

Comment plugins

- [Changyan](http://changyan.kuaizhan.com/)
- [Disqus](https://disqus.com/)
- [Facebook comments plugin](https://developers.facebook.com/docs/plugins/comments/)
- [Gitment](https://github.com/imsun/gitment)
- [Isso](https://posativ.org/isso/)
- [LiveRe](https://livere.com/)
- [Valine](https://github.com/xCss/Valine)
- [Youyan](http://www.uyan.cc/)

Search plugins

- Insight Search
- [Google custom search](https://www.google.com/cse/)

Share plugins

- [AddThis](http://www.addthis.com/)
- [ShareThis](https://www.sharethis.com/)

Other plugins

- [Hexo Tag Plugin](https://hexo.io/docs/tag-plugins.html)
- [lightGallery](https://sachinchoolur.github.io/lightGallery/) & [Justified Gallery](http://miromannino.github.io/Justified-Gallery/)
- [MathJax](https://www.mathjax.org/)

**Rich Code Highlight Theme Choices**

Minos directly import code highlight themes from the [highlight.js](https://highlightjs.org/) package, and makes more than 
70 highlight themes available to you.

<div class="columns is-multiline is-mobile">
<div class="column is-half-mobile"><img src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/code-highlight/tomorrow.png"></div>
<div class="column is-half-mobile"><img src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/code-highlight/atom-one-light.png"></div>
<div class="column is-half-mobile"><img src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/code-highlight/monokai.png"></div>
<div class="column is-half-mobile"><img src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/code-highlight/androidstudio.png"></div>
</div>

**Elastic Theme Configuration**

In addition to the minimalistic and easy-to-understand configuration design, Minos allows you to set configurations on a 
per-page and per-language basis with the ability to merge and override partial configurations.

<div class="columns is-multiline">
    <div class="column is-half is-12-mobile">
        <b>_config.yml</b>
        ```yaml
        menu:
          Archives: /archives
          Lifestyle: /categories/LifeStyle
        ```
        <img style="height:40px" src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/navbar/main-config.png">
    </div>
    <div class="column is-half is-12-mobile">
        <b>_config.zh-cn.yml</b>
        ```yaml
        menu:
          归档: /archives
          生活: /categories/LifeStyle
        ```
        <img style="height:40px" src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/navbar/language-config.png">
    </div>
    <div class="column is-half is-12-mobile">
        <b>post.md</b>
        ```yaml
        title: A Simple Post
        menu:
          Go Home: /index.html
        ---
        # Here is some simple markdown.
        ```
        <img style="height:40px" src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/navbar/post-config.png">
    </div>
</div>

**Multi-language Support**

Minos supports the using of multiple translations on different pages in one site with its elastic configuration system. 
Simply decide your preferred language for each page (or use the [language folder](https://hexo.io/docs/internationalization.html#Path)) 
and create an additional `_config.<language shortname>.yml`, then you are ready to go.

**Responsive Layout**

No matter what modern browsering device your audiences are using, they can always get the best experience because Minos's responsive
layout across multiple viewpoints.

![Responsive Layout](http://blog.zhangruipeng.me/hexo-theme-minos/gallery/responsive.png)

### :cd: Installation

Download & extract or `git clone` Minos from GitHub to your blog's theme folder, and that's it!

```shell
git clone https://github.com/ppoffice/hexo-theme-minos.git themes/minos
```

Once started, Minos will remind you of any missing dependencies and configuration files.

### :hammer: Development

This project is built with

- Hexo 3.6.0
- Ejs
- Sass

Please refer to the documentation for Minos implementation details.

### :tada: Contribute

- :electric_plug: Write a plugin
- :triangular_flag_on_post: <a href="https://github.com/ppoffice/hexo-theme-minos/issues/new">Report a bug</a>
- :earth_asia: <a href="https://github.com/ppoffice/hexo-theme-minos/tree/master/languages">Add a translation</a>

### :memo: License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/ppoffice/hexo-theme-minos/blob/master/LICENSE) file for details.