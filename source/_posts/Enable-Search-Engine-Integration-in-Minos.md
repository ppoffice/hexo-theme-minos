title: Enable Search Engine Integration in Minos
date: 2018-05-14 18:15:40
categories:
- Documentation
tags:
- Minos
---
{% img /gallery/compass.jpg %}
A search engine can help your reader to navigate through the content and find their interests with least effort. Setting up the search engine is quite easy in Minos. Simply sign up with your favorite search service provider, then insert or edit the `search` search in the configuration file (e.g. `_config.yml`). The following sections describe available options for each supported search service. Also, you may need to refer to the service provider's installation instructions for actual values of your options.
<!-- more -->

## Out-of-box services

### Insight search

{% colorquote warning %}
From Minos 2.0.0, you no longer need to install <code>hexo-generator-json-content</code> to be able to use the insight search.
{% endcolorquote %}

{% codeblock lang:yaml _config.yml %}
search:
    type: insight
{% endcodeblock%}

### Google custom search engine (CSE)

[Installation instructions](https://cse.google.com/cse/create/new)

{% codeblock lang:yaml _config.yml %}
search:
    type: google-cse
    cx: xxxxxxxxxxxxxxxxx  # (required)
{% endcodeblock%}

The `cx` value can be found on your CSE setup page's url or public url like below.

{% img /gallery/docs/configuration/google-cse.jpg %}

## Use other search engine in Minos

(TODO)
