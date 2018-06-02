<p align="center">
<img height="40" src="http://blog.zhangruipeng.me/hexo-theme-minos/images/logo.png">
<br> A simple and retro styled Hexo theme, concentrating more on your ideas.
<br>
<a href="http://blog.zhangruipeng.me/hexo-theme-minos/"><b>Preview</b></a> | 
<a href="https://github.com/ppoffice/hexo-theme-minos/archive/master.zip"><b>Download</b></a> |
<a href="http://ppoffice.github.io/hexo-theme-minos/categories/Documentation/"><b>Documentation</b></a>
</p>

![Minos](http://ppoffice.github.io/hexo-theme-minos/gallery/preview.png "Minos Preview")

### :gift: Features

**Extensive Plugin Support**

Minos includes plentiful search, comment, sharing and other plugins out of the box. You can choose any of them to enrich your
blog experience, or build your own plugin easily referring to the existing Minos plugins.

<table>
    <tr>
        <th colspan="8">Comment plugins</th>
    </tr>
    <tr>
        <td><a href="http://changyan.kuaizhan.com/">Changyan</a></td>
        <td><a href="https://disqus.com/">Disqus</a></td>
        <td><a href="https://developers.facebook.com/docs/plugins/comments/">Facebook comments plugin</a></td>
        <td><a href="https://github.com/imsun/gitment">Gitment</a></td>
        <td><a href="https://posativ.org/isso/">Isso</a></td>
        <td><a href="https://livere.com/">LiveRe</a></td>
        <td><a href="https://github.com/xCss/Valine">Valine</a></td>
        <td><a href="http://www.uyan.cc/">Youyan</a></td>
    </tr>
</table>
<table>
    <tr>
        <th colspan="2">Search plugins</th>
        <th colspan="2">Share plugins</th>
    </tr>
    <tr>
        <td>Insight Search</td>
        <td><a href="https://www.google.com/cse/">Google custom search</a></td>
        <td><a href="http://www.addthis.com/">AddThis</a></td>
        <td><a href="https://www.sharethis.com/">ShareThis</a></td>
    </tr>
</table>
<table>
    <tr>
        <th colspan="3">Other plugins</th>
    </tr>
    <tr>
        <td><a href="https://hexo.io/docs/tag-plugins.html">Hexo Tag Plugin</a></td>
        <td><a href="sachinchoolur.github.io/lightGallery/">lightGallery</a> & 
            <a href="http://miromannino.github.io/Justified-Gallery/">Justified Gallery</a></td>
        <td><a href="https://www.mathjax.org/">MathJax</a></td>
    </tr>
</table>

**Rich Code Highlight Theme Choices**

Minos directly import code highlight themes from the [highlight.js](https://highlightjs.org/) package, and makes more than 
70 highlight themes available to you.

<table>
    <tr>
        <td><img src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/code-highlight/tomorrow.png"></td>
        <td><img src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/code-highlight/atom-one-light.png"></td>
        <td><img src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/code-highlight/monokai.png"></td>
        <td><img src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/code-highlight/androidstudio.png"></td>
    </tr>
</table>

**Elastic Theme Configuration**

In addition to the minimalistic and easy-to-understand configuration design, Minos allows you to set configurations on a 
per-page and per-language basis with the ability to merge and override partial configurations.

<table>
    <tr>
        <th>_config.yml</th>
        <th>_config.zh-cn.yml</th>
        <th>post.md</th>
    </tr>
    <tr>
        <td>
            <pre>menu:
  Archives: /archives
  Lifestyle: /categories/LifeStyle</pre>
        </td>
        <td>
            <pre>menu:
  归档: /archives
  生活: /categories/LifeStyle</pre>
        </td>
        <td>
            <pre>title: A Simple Post
menu:
  Go Home: /index.html
---
# Here is some simple markdown.</pre>
        </td>
    </tr>
    <tr>
        <td><img height="40" src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/navbar/main-config.png"></td>
        <td><img height="40" src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/navbar/language-config.png"></td>
        <td><img height="40" src="http://blog.zhangruipeng.me/hexo-theme-minos/gallery/navbar/post-config.png"></td>
    </tr>
</table>

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

:electric_plug: Write a plugin | 
:triangular_flag_on_post: <a href="https://github.com/ppoffice/hexo-theme-minos/issues/new">Report a bug</a> | 
:earth_asia: <a href="https://github.com/ppoffice/hexo-theme-minos/tree/master/languages">Add a translation</a>

### :memo: License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/ppoffice/hexo-theme-minos/blob/master/LICENSE) file for details.