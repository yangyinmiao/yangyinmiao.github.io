---
layout: page
title: Archive
permalink: /archive/
i18n_key: archive
---

<p data-i18n="archive.intro">This page collects everything in one place.</p>

## Posts

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) · {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

## Notes

{% for note in site.notes %}
- [{{ note.title }}]({{ note.url }}) · {{ note.date | date: "%Y-%m-%d" }}
{% endfor %}

## Projects

{% for project in site.projects %}
- [{{ project.title }}]({{ project.url }})
{% endfor %}
