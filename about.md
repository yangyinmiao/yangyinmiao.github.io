---
layout: page
title: About
permalink: /about/
i18n_key: about
---

<h2 data-i18n="about.heading">Hi, I’m {{ site.data.profile.name | default: site.title }}.</h2>

<p data-i18n="about.tagline">{{ site.data.profile.tagline | default: site.description }}</p>

<p data-i18n="about.writer_note">{{ site.data.profile.writer_note }}</p>

<p data-i18n="about.summary">I use this site as a working notebook: a place for long-form posts, quick notes, experiments, and the occasional project dump that I want to keep around.</p>

<h2 data-i18n="about.current_title">Current focus</h2>

<ul>
{% for item in site.data.profile.current %}
  <li data-i18n="about.current.{{ forloop.index0 }}">{{ item.en }}</li>
{% endfor %}
</ul>

<h2 data-i18n="about.highlight_title">Why this site exists</h2>

<p data-i18n="about.highlight">{{ site.data.profile.highlight }}</p>

<h2 data-i18n="about.say_hello">Say hello</h2>

<ul>
  <li><span data-i18n="about.links.github">GitHub</span>: <a href="{{ site.data.profile.links.github }}">your-handle</a></li>
  <li><span data-i18n="about.links.email">Email</span>: <a href="mailto:{{ site.data.profile.links.email }}">hello@example.com</a></li>
</ul>

<h2 data-i18n="about.connect_title">Connect</h2>

<ul>
{% for item in site.data.profile.connect %}
  <li><span data-i18n="about.connect.{{ item.key }}.short">{{ item.short_en }}</span>: <a href="{{ item.href }}" data-i18n="about.connect.{{ item.key }}.label">{{ item.label_en }}</a></li>
{% endfor %}
</ul>

<h2 data-i18n="about.now_title">Now</h2>

<p data-i18n="about.now_intro">Right now I'm usually:</p>

<ul>
  <li data-i18n="about.now.0">Writing or editing one post at a time</li>
  <li data-i18n="about.now.1">Tweaking small design details until the site feels like me</li>
  <li data-i18n="about.now.2">Saving ideas before they disappear</li>
</ul>
