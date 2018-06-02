title: Creating a Gallery in Minos
date: 2016-07-08 00:00:00
categories:
- Documentation
tags:
- Minos
- Plugin
---

{% colorquote info %}
The following photos come from <a href="https://www.pexels.com">pexel.com</a>
{% endcolorquote %}

You can add photos between text to create a gallery like this:

![Elephant](/hexo-theme-minos/gallery/animals/elephant.jpeg)

<!-- more -->
or this:

![Dog](/hexo-theme-minos/gallery/animals/dog.jpeg)

Furthermore, you can also use Justified Gallery to display you photos in a grid:

<div class="justified-gallery">
![Elephant](/hexo-theme-minos/gallery/animals/elephant.jpeg)
![Dog](/hexo-theme-minos/gallery/animals/dog.jpeg)
![Birds](/hexo-theme-minos/gallery/animals/birds.jpeg)
![Cat](/hexo-theme-minos/gallery/animals/cat.jpeg)
![Fox](/hexo-theme-minos/gallery/animals/fox.jpeg)
![Horse](/hexo-theme-minos/gallery/animals/horse.jpeg)
![Leopard](/hexo-theme-minos/gallery/animals/leopard.jpeg)
</div>

{% codeblock lang:html HTML + Markdown %}
<div class="justified-gallery">
![Elephant](/hexo-theme-minos/gallery/animals/elephant.jpeg)
![Dog](/hexo-theme-minos/gallery/animals/dog.jpeg)
![Birds](/hexo-theme-minos/gallery/animals/birds.jpeg)
![Cat](/hexo-theme-minos/gallery/animals/cat.jpeg)
![Fox](/hexo-theme-minos/gallery/animals/fox.jpeg)
![Horse](/hexo-theme-minos/gallery/animals/horse.jpeg)
![Leopard](/hexo-theme-minos/gallery/animals/leopard.jpeg)
</div>
{% endcodeblock %}