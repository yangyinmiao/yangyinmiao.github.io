---
layout: page
title: Blog
permalink: /blog/
i18n_key: blog
---

<p data-i18n="blog.intro">The latest long-form articles live here.</p>

{% for post in site.posts %}
<article class="listing-item">
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
  <p class="meta"><time>{{ post.date | date: "%B %d, %Y" }}</time></p>
</article>
{% endfor %}
