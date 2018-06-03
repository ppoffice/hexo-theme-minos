title: Grow Your Audience with Share Buttons
date: 2018-05-14 18:15:30
categories:
- Documentation
tags:
- Minos
---
{% img /gallery/social-media.jpg %}
Adding share buttons to your site is a good way to encourage readers to share your ideas and gain visibility quickly. Minos providers several share button services to you which take no time to configure and use. Detailed configurations are given below. Also, you may need to refer to the vendor's installation instructions for actual values of your options.
<!-- more -->

## Out-of-box services

### AddThis

[Installation instructions](https://www.addthis.com/dashboard)

{% codeblock lang:yaml _config.yml %}
share:
    type: addthis
    install_url: //s7.addthis.com/js/300/addthis_widget.js#pubid=xxxxxxxx  # (required)
{% endcodeblock%}

You can get the `install_url` from the code snippet provided by AddThis. The url should be in the `src` attribute of the `<script>` tag:

{% img /gallery/docs/configuration/addthis.png %}

### ShareThis

[Installation instructions](https://platform.sharethis.com/settings)

{% codeblock lang:yaml _config.yml %}
share:
    type: sharethis
    install_url: //platform-api.sharethis.com/js/sharethis.js#......  # (required)
{% endcodeblock%}

You can get the `install_url` from the code snippet provided by ShareThis. The url should be in the `src` attribute of the `<script>` tag:

{% img /gallery/docs/configuration/sharethis.png %}

## Use other share buttons in Minos

(TODO)