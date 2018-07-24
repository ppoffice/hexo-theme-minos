title: Configuring Minos
date: 2018-05-14 18:15:58
categories:
- Documentation
tags:
- Minos
toc: true
navbar_links:
  Edit on GitHub:
    icon: fas fa-edit
    url: https://github.com/ppoffice/hexo-theme-minos/edit/site/source/_posts/Configuring-Minos.md
---
{% img /gallery/audio-console.jpg %}
Minos employs a prioritized configuration system to ensure flexibility and integrity of the configurations. With Minos, you can customize your site for every post and language variant without worrying about breaking the compilation. Minos will also remind you of any missing configurations if you intend to enable some features.

<!-- more -->

## Theme configurations

The `_config.yml` file at the theme's root contains configurations mostly relate to the layout and plugins. Configuration options, their meaning and default values are described in the `_config.yml.example` file. Some complex configurations, like `search`, `share`, `comment` and `plugins`, will also be explained with details in the following documentation.

{% colorquote info %}
<b>Related posts</b><br>
1. {% post_link Setting-up-a-Commenting-Service %}<br>
2. {% post_link Enable-Search-Engine-Integration-in-Minos %}<br>
3. {% post_link Grow-Your-Audience-with-Share-Buttons %}
{% endcolorquote %}

## Language variant of theme configurations

When you are creating a website which is served in several languages, you may want to make sure certain page elements are display in appropriate language or some plugins to be switched to localized ones. Minos provides the language variant feature to help you do that. Simply create `_config.<language_name>.yml` besides theme's `_config.yml` and change the configurations you want. Every time files for a specific language is going to be generated, Minos will look for the values in the `_config.<language_name>.yml` file of that language and override same configurations in the default `_config.yml`. For more information on how to set up multiple language support, please refer to the [Guide to Multiple Language Support in Minos](/).

**Example: localize navigation menus**
{% codeblock lang:yaml _config.zh-cn.yml %}
menu:
  归档: /archives
  文档: /categories/Documentation
  关于: /about
{% endcodeblock %}
<div style="border:1px solid #ccc">
{% img /gallery/docs/configuration/language.png '"Localize navigation menus" "Localize navigation menus"' %}
</div>

## Page configurations

Apart from the above two types of configuration, Minos also lets you customize any page or post with page configurations. For instance, you may wish to disable the comment function in some posts, or show an additional link in the navigation bar. All of these can be achieved with page configuration where you override the theme configurations in the post's front-matter.

**Example: override default navigation bar links**
{% codeblock lang:markdown about.md %}
title: Minos - A Hexo theme
date: 2018-05-14 18:15:58
navbar_links:
  Download:
    icon: fab fa-github
    url: https://github.com/ppoffice/hexo-theme-minos
  Buy:
    icon: fas fa-shopping-cart
    url: https://github.com/ppoffice/hexo-theme-minos
  Help: https://github.com/ppoffice/hexo-theme-minos
---
# This is the post content...
{% endcodeblock %}
<div style="border:1px solid #ccc">
{% img /gallery/docs/configuration/page.png '"Override default navigation bar links" "Override default navigation bar links"' %}
</div>

## Configuration hierarchy

When looking up the value of a specific configuration, Minos will first look at the post/page's front-matter to find if the configuration exists. If true, the value from the front-matter is taken. Otherwise, Minos will move on to the language variant of the theme configuration file `_config.<language_name>.yml` if the current page is set to use a non-primary language, and look up for the required configuration value. If the value is still not found in the above places, Minos will fallback to the default theme configuration file `_config.yml`.

{% img /gallery/docs/configuration/hierarchy.svg '"Configuration overriding process" "Configuration overriding process"' %}