---
layout: page
permalink: /repositories/
title: repositories
description: Selected GitHub repositories.
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}
<div class="repo-users">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>
{% endif %}

{% if site.data.repositories.github_repos %}
<div class="repo-list">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
