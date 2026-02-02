<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ site.title }}</title>
    <link>{{ site.url }}</link>
    <description>{{ site.description }}</description>
    <language>pt-BR</language>
    <atom:link href="{{ site.url }}/rss.xml" rel="self" type="application/rss+xml"/>
    
    {% for post in site.posts %}
    <item>
      <title>{{ post.title }}</title>
      <link>{{ site.url }}{{ post.url }}</link>
      <description>{% if post.description %}{{ post.description | strip_html }}{% else %}{{ post.content | truncate: 200 | strip_html }}{% endif %}</description>
      <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
      <guid isPermaLink="true">{{ site.url }}{{ post.url }}</guid>
    </item>
    {% endfor %}
  </channel>
</rss>
