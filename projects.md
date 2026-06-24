---
layout: page
title: Projects
permalink: /projects/
i18n_key: projects
---

<p data-i18n="projects.intro">Selected work and experiments.</p>

{% for project in site.projects %}
<article class="listing-item">
  <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
  <p>{{ project.description | default: project.excerpt | strip_html | truncatewords: 28 }}</p>
</article>
{% endfor %}
