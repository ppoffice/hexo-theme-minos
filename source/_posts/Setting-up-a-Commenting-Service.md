title: Setting up a Commenting Service
date: 2018-05-14 18:15:50
categories:
- Documentation
tags:
- Minos
toc: true
navbar_links:
  Edit on GitHub:
    icon: fas fa-edit
    url: https://github.com/ppoffice/hexo-theme-minos/edit/site/source/_posts/Setting-up-a-Commenting-Service.md
---

Minos supports a wide variety of commenting services for you to gather readers' feedbacks. To enable and configure a commenting service, you should insert or edit the `comment` section in the configuration file (e.g. `_config.yml`). The following sections describe available options for each supported commenting service. Also, you may need to refer to the vendor's installation instructions for actual values of your options.
<!-- more -->

## Out-of-box services

### Changyan

[Installation instructions](http://changyan.kuaizhan.com/install/code/pc).

{% codeblock lang:yaml _config.yml %}
comment:
    type: changyan
    appid: xxxxxxxx         # (required)
    conf: prod_xxxxxxxx     # (required)
{% endcodeblock %}

### Disqus

[Installation instructions](https://disqus.com/admin/install/platforms/universalcode/).

{% codeblock lang:yaml _config.yml %}
comment:
    type: disqus
    shortname: xxxxxxxx     # (required)
{% endcodeblock%}

{% codeblock lang:yaml post.md %}
disqusId: xxxxxxxx          # (optional) a unique id to identify the post in Disqus system
---
Post content...
{% endcodeblock%}

### Facebook

[Installation instructions](https://developers.facebook.com/docs/plugins/comments/).

{% codeblock lang:yaml _config.yml %}
comment:
    type: facebook
{% endcodeblock%}

### Gitment

[Installation instructions](https://github.com/imsun/gitment).

{% codeblock lang:yaml _config.yml %}
comment:
    type: gitment
    owner: xxxxxxxx         # (required) GitHub user name
    repo: xxxxxxxx          # (required) GitHub repository name
    client_id: xxxxxxxx     # (required) OAuth application client id
    client_secret: xxxxxxxx # (required) OAuth application client secret
{% endcodeblock%}

### Isso

[Installation instructions](https://posativ.org/isso/docs/quickstart/#integration).

{% codeblock lang:yaml _config.yml %}
comment:
    type: isso
    url: isso.service/path  # (required) url of your Isso service
{% endcodeblock%}

### LiveRe

[Installation instructions](https://livere.com/insight/myCode).

{% codeblock lang:yaml _config.yml %}
comment:
    type: livere
    uid: xxxxxxxx           # (required) application id of your site
{% endcodeblock%}

### Valine

[Installation instructions](https://valine.js.org/configuration/).

{% codeblock lang:yaml _config.yml %}
comment:
    type: valine
    app_id: xxxxxxxx        # (required) LeanCloud application id
    app_key: xxxxxxxx       # (required) LeanCloud application key
    notify: false           # (optional) receive email notification
    verify: false           # (optional) show verification code
    placeholder: xxxxxxxx   # (optional) comment box placeholder text
{% endcodeblock%}

### Youyan

[Installation instructions](https://uyan.cc/).

{% codeblock lang:yaml _config.yml %}
comment:
    type: youyan
    uid: xxxxxxxx           # (required) application id of your site
{% endcodeblock%}

## Use other commenting service in Minos

(TODO)
