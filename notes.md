---
layout: page
title: Notes
permalink: /notes/
i18n_key: notes
---

<p data-i18n="notes.intro">Short updates, experiments, and in-progress thoughts.</p>

{% for note in site.notes %}
<article class="listing-item">
  <h2><a href="{{ note.url | relative_url }}">{{ note.title }}</a></h2>
  <p>{{ note.excerpt | strip_html | truncatewords: 28 }}</p>
  <p class="meta"><time>{{ note.date | date: "%B %d, %Y" }}</time></p>
</article>
{% endfor %}
