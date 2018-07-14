title: Getting Started with Minos
date: 2018-05-14 18:15:59
categories:
- Documentation
tags:
- Minos
navbar_links:
  Edit on GitHub:
    icon: fas fa-edit
    url: https://github.com/ppoffice/hexo-theme-minos/edit/site/source/_posts/Getting-Started-with-Minos.md
---
![](/hexo-theme-minos/gallery/forest.jpg)
Minos is a simple and retro styled Hexo theme which concentrates more on your ideas. Minos is very expressive as it has extensive plugin support, colorful code highlighting choices, flexible configurations and out-of-box multi-language support. Meanwhile, minimalism also makes Minos a great theme for both writers and readers who desire a better reading experience.

<!-- more -->

To get started with Minos, download and unzip Minos to your Hexo blog's theme directory or using the following command in your blog's root directory:

```bash
git clone https://github.com/ppoffice/hexo-theme-minos.git themes/minos
```

You can also specify a version for Minos after downloading the theme through `git`. Replace the version code in the following command and execute:

```bash
git checkout 1.0.0
```

You can also install Minos as a git submodule by calling the following command:

```bash
git submodule add https://github.com/ppoffice/hexo-theme-minos.git themes/minos
```

Next, replace the theme setting in your blog's `_config.yml` file:

```yaml
theme: minos
```

Then, edit `_config.yml.example` file in the `themes/minos` folder to your satisfaction and save it as `_config.yml` in the same directory.

{% colorquote success %}
For more information about the configurations, please refer to {% post_link Configuring-Minos %}.
{% endcolorquote %}

Finally, don't forget to clone the `site` branch in the Minos repository if you need further examples about installation and configuration.