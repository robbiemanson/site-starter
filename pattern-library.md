---
title: Pattern Library
author: Robbie
layout: default
permalink: /pattern-library/
nav_category: pattern-library
---

<div class="l-Wrapper l-Wrapper--row" id="section--buttons">
  <section class="row row--Editorial u-padding-top--0">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Buttons
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">
        <div class="DocsExample">
{% example html %}
<button class="Button" type="button">Button</button>
<a class="Button" href="#" role="button">Button Link</a>

<button class="Button Button--secondary" type="button">Secondary Button</button>
<a class="Button Button--secondary" href="#" role="button">Secondary Button Link</a>

<button class="Button Button--outline" type="button">Outline Button</button>
<a class="Button Button--outline" href="#" role="button">Outline Button Link</a>

<button class="Button Button--block" type="button">Button Block</button>
<a class="Button Button--block" href="#" role="button">Button Link Block</a>
{% endexample %}
        </div>
      </div>
    </div>
  </section>
</div>


<div class="l-Wrapper l-Wrapper--row" id="section--button-groups">
  <section class="row row--Editorial u-padding-top--0">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Button Groups
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">
        <div class="DocsExample">
{% example html %}
<div class="ButtonGroup">
  <button class="Button" type="button">Button</button>
  <a class="Button" href="#" role="button">Button Link</a>

  <button class="Button Button--secondary" type="button">Secondary Button</button>
  <a class="Button Button--secondary" href="#" role="button">Secondary Button Link</a>

  <button class="Button" type="button">Button</button>
  <a class="Button" href="#" role="button">Button Link</a>

  <button class="Button Button--secondary" type="button">Secondary Button</button>
  <a class="Button Button--secondary" href="#" role="button">Secondary Button Link</a>  
</div>

<div class="ButtonGroup ButtonGroup--wrapped">
  <button class="Button" type="button">Button</button>
  <a class="Button" href="#" role="button">Button Link</a>

  <button class="Button Button--secondary" type="button">Secondary Button</button>
  <a class="Button Button--secondary" href="#" role="button">Secondary Button Link</a>

  <button class="Button" type="button">Button</button>
  <a class="Button" href="#" role="button">Button Link</a>
  
  <button class="Button Button--secondary" type="button">Secondary Button</button>
  <a class="Button Button--secondary" href="#" role="button">Secondary Button Link</a>  
</div>
{% endexample %}
        </div>
      </div>
    </div>
  </section>
</div>


<div class="l-Wrapper l-Wrapper--row" id="section--grid">
  <section class="row">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Grid
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">
        <p>
          <a class="Link" href="http://foundation.zurb.com/grid.html">Foundation Grid</a> with some custom breakpoints.
        </p>
      </div>
    </div>
  </section>
</div>

<div class="l-Wrapper l-Wrapper--row">

  <div class="DocsExample DocsExample--grid">
{% example html %}
<div class="row">
  <div class="column small-3 medium-4">s-3 m-4</div>
  <div class="column small-3 medium-6">s-3 m-6</div>
  <div class="column small-3 medium-1">s-3 m-1</div>
  <div class="column small-3 medium-1">s-3 m-1</div>
</div>
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--grid">
{% example html %}
<div class="row">
  <div class="column medium-8 medium-push-4">m-8 m-push-4</div>
</div>
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--grid">
{% example html %}
<div class="row">
  <div class="column medium-4">m-4</div>
  <div class="column medium-8">m-8</div>
</div>
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--grid">
{% example html %}
<div class="row">
  <div class="column medium-4">m-4</div>
  <div class="column medium-8 large-4">m-8 l-4</div>
  <div class="column medium-8 large-4">m-8 l-4</div>
</div>
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--grid">
{% example html %}
<div class="row">
  <div class="column medium-8 medium-push-4 large-4">m-8 m-push-4 l-4</div>
  <div class="column medium-8 large-4">m-8 l-4</div>
</div>
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--grid">
{% example html %}
<div class="row">
  <div class="column small-6 medium-4 medium-push-4">s-6 m-4 m-push-4</div>
  <div class="column small-6 medium-4">s-6 m-4</div>
</div>
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--grid">
{% example html %}
<div class="row row--Editorial">
  <div class="column medium-4">m-4</div>
  <div class="column medium-8">m-8</div>
</div>
{% endexample %}
  </div>

</div>


<div class="l-Wrapper l-Wrapper--row u-margin-top--xx-large" id="section--block-grid">
  <section class="row u-padding-bottom--0">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Block Grid
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">
        <p>
          <a class="Link" href="http://foundation.zurb.com/docs/components/block_grid.html">Foundation Block Grid</a>.
        </p>
      </div>
    </div>
  </section>
</div>

<div class="l-Wrapper l-Wrapper--row">

  <div class="DocsExample">
{% example html %}
<section class="row">
  <div class="column">
    <ol class="List--bare small-block-grid-2">
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
    </ol>
  </div>
</section>
{% endexample %}
  </div>

  <div class="DocsExample">
{% example html %}
<section class="row">
  <div class="column">
    <ol class="List--bare small-block-grid-3">
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
    </ol>
  </div>
</section>
{% endexample %}
  </div>

  <div class="DocsExample">
{% example html %}
<section class="row">
  <div class="column">
    <ol class="List--bare small-block-grid-4">
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
    </ol>
  </div>
</section>
{% endexample %}
  </div>

  <div class="DocsExample">
{% example html %}
<section class="row">
  <div class="column">
    <ol class="List--bare small-block-grid-5">
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
      <li>
        <figure class="MediaContainer">
          <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
        </figure>
      </li>
    </ol>
  </div>
</section>
{% endexample %}
  </div>

</div>


<div class="l-Wrapper l-Wrapper--row" id="section--headings">
  <section class="row row--Editorial">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Headings
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">
        <div class="DocsExample">
{% example html %}
<h1 class="Heading Heading--display">
  Heading display
</h1>

<h1 class="Heading Heading--xx-large">
  Heading xx-large
</h1>

<h2 class="Heading Heading--x-large">
  Heading x-large
</h2>

<h3 class="Heading Heading--large">
  Heading large
</h3>

<h4 class="Heading Heading--small">
  Heading small
</h4>

<h5 class="Heading Heading--x-small">
  Heading x-small
</h5>

<h6 class="Heading Heading--xx-small">
  Heading xx-small
</h6>
{% endexample %}
        </div>
      </div>
    </div>
  </section>
</div>


<div class="l-Wrapper l-Wrapper--row" id="section--leaders">
  <section class="row row--Editorial">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Leaders
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">
        <div class="DocsExample">
{% example html %}
<p class="Leader">
  Leaders entice the reader into a larger body of text by providing a focal point on arrival to the page and setting the scene of the piece.
</p>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<p class="Leader Leader--medium">
  Medium size leaders entice the reader into a larger body of text by providing a focal point on arrival to the page and setting the scene of the piece.
</p>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<p class="Leader Leader--large">
  Large leaders entice the reader into a larger body of text by providing a focal point on arrival to the page and setting the scene of the piece.
</p>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<p class="Leader Leader--extraLarge">
  Extra large leaders entice the reader into a larger body of text by providing a focal point on arrival to the page and setting the scene of the piece.
</p>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<p class="Leader Leader--extraLarge u-text-gradient">
  Leaders with gradiated text entice the reader into a larger body of text by providing a focal point on arrival to the page and setting the scene of the piece.
</p>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<p class="Leader Leader--extraLarge Leader--lite">
  Lite leaders entice the reader into a larger body of text by providing a focal point on arrival to the page and setting the scene of the piece.
</p>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<p class="Leader Leader--extraLarge Leader--pull">
  Pulled leaders entice the reader into a larger body of text by providing a focal point on arrival to the page and setting the scene of the piece.
</p>
{% endexample %}
        </div>

      </div>
    </div>
  </section>
</div>


<div class="l-Wrapper l-Wrapper--row" id="section--links">
  <section class="row row--Editorial">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Links
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">
        <div class="DocsExample">
{% example html %}
<p>
  Just add a class of <a class="Link" href="#">Link</a>
</p>

<p>
  Else they'll go <a href="#">unstyled</a>.
</p>

<p>
  <a class="Link has-rightArrow" href="#">Links can have arrows</a>  
</p>

<p>
  <a class="LinkEmph" href="#">I'm an emphasised link</a>  
</p>

<p>
  <a class="LinkEmph has-rightArrow" href="#">With an arrow</a>
</p>

<h3 class="Heading Heading--large">
  Links can also be placed <a class="Heading-link" href="#">inside headings</a>.
</h3>


<h3 class="Heading Heading--large">
  <a class="Heading-link has-rightArrow" href="#">Heading links can also have arrows</a>
</h3>

<p class="Metadata Metadata--large">
  <a class="Link Link--Metadata" href="#">
    Links can appear in a metadata style
  </a>
</p>
{% endexample %}

        </div>
      </div>
    </div>
  </section>
</div>


<div class="l-Wrapper l-Wrapper--row" id="section--lists">
  <section class="row row--Editorial">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Lists
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">

        <div class="DocsExample">
{% example html %}
<ul class="List List--bare">
  <li>
     A bare list, without any markers
  </li>
  <li>
    Useful when the list structure shouldn’t be pronounced
  </li>
</ul>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<ul class="List List--dashed">
  <li>
    Important: ensure content inside the list items is typed on a new line, else horizontal alignment of the dash + content will be off. The dashed list is used frequently.
  </li>
  <li>
    Replacing bullets with dashes feels more elegant
  </li>
</ul>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<ul class="List List--dashed List--dashed--indented">
  <li>
    A dashed list that’s also indented
  </li>
  <li>
    When a more pronounced break from other content is required
  </li>
</ul>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<ul class="List List--dashed List--dashed--negativeIndent">
  <li>
    A negatively indented dashed list
  </li>
  <li>
    Useful when the left edge of the text column should remain flush
  </li>
</ul>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<ul class="List List--dashed List--dashed--loose">
  <li>
    The loosely dashed list
  </li>
  <li>
    Useful when items contain a lot of content
  </li>
</ul>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<ul class="List List--dashed List--dashed--x-loose">
  <li>
    A list with extra-loosely spaced items. This is a good solution when the items contain a lot of written content, as the extra space helps to aid readability.
  </li>
  <li>
    A list with extra-loosely spaced items. This is a good solution when the items contain a lot of written content, as the extra space helps to aid readability.
  </li>
  <li>
    A list with extra-loosely spaced items. This is a good solution when the items contain a lot of written content, as the extra space helps to aid readability.
  </li>
</ul>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<ol class="List List--orderedCounter">
  <li>
    <h3 class="Heading Heading--large">
      <span class="List--orderedCounter-count">
        An ordered counter list
      </span>
    </h3>
    <p>
      There’s typically a paragraph following each ordered counter item, further expanding upon the heading.
    </p>
  </li>
  <li>
    <h3 class="Heading Heading--large">
      <span class="List--orderedCounter-count">
        Where each item has a count
      </span>
    </h3>
    <p>
      There’s typically a paragraph following each ordered counter item, further expanding upon the heading.
    </p>
  </li>
  <li>
    <h3 class="Heading Heading--large">
      <span class="List--orderedCounter-count">
        Which continue in sequence
      </span>
    </h3>
    <p>
      There’s typically a paragraph following each ordered counter item, further expanding upon the heading.
    </p>
  </li>
</ol>
{% endexample %}
        </div>

      </div>
    </div>
  </section>
</div>


<div class="l-Wrapper l-Wrapper--row" id="section--media">
  <section class="row row--Editorial u-padding-bottom--0">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Media
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">

        <div class="DocsExample">
{% example html %}
<figure class="MediaContainer">
  <img class="Media Media--image" src="{{ site.asset_url }}/assets/images/placeholder-16-9.svg" alt="" />
  <figcaption class="Metadata Metadata--figcaption">
    Image caption
  </figcaption>
</figure>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<figure class="MediaContainer">
  <figcaption class="Metadata Metadata--figcaption">
    Lazy loaded image
  </figcaption>
  <img class="lazyload Media Media--image" data-src="{{ site.asset_url }}/assets/images/placeholder-16-9.svg" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
</figure>
{% endexample %}
        </div>

      </div>
    </div>
  </section>
</div>


<div class="DocsExample">
{% example html %}
<figure class="MediaContainer">
  <img class="Media Media--image u-width--100percent" src="{{ site.asset_url }}/assets/images/placeholder-16-9.svg" alt="" />
</figure>
{% endexample %}
</div>


<div class="l-Wrapper l-Wrapper--row">
  <section class="row row--Editorial u-padding-top--0">
{% example html %}
<div class="column small-6 small-push-6">

  <figure>
    <figcaption class="Metadata Metadata--figcaption">
      Video
    </figcaption>
    <div class="MediaContainer MediaContainer--mobile">
      <img class="lazyload Media Media--image Media--image--feature Media--image--poster"
          data-src="{{ site.asset_url }}/assets/images/placeholder-video-poster.jpg" src="{{ site.asset_url }}/assets/images/placeholder.svg" />
      <video id="freeagent-mobile--home"
          class="lazyload Media Media-video Media-video--inline video-js vjs-big-play-centered vjs-default-skin"
          controls
          data-setup='{ "children": { "controlBar": { "children": { "muteToggle": false, "fullscreenToggle": false, "volumeControl": false } } } }'
          preload="none">
        <source src="{{ site.asset_url }}/assets/images/placeholder-video.mp4" type="video/mp4" />
        <source src="{{ site.asset_url }}/assets/images/placeholder-video.webmhd.webm" type="video/webm" />
        <source src="{{ site.asset_url }}/assets/images/placeholder-video.oggtheora.ogv" type="video/ogg" />
        <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/">supports HTML5 video</a></p>
      </video>
    </div>
  </figure>

</div>
{% endexample %}
  </section>
</div>


<div class="l-Wrapper l-Wrapper--row" id="section--metadata">
  <section class="row row--Editorial">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Metadata
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">

        <div class="DocsExample">
{% example html %}
<p class="Metadata">
  Metadata is supplementary; extra information to clarify another element.
</p>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<p class="Metadata Metadata--large">
  Metadata is smaller than regular body text by default, but can be increased in size. Note the size increase only kicks in at larger breakpoints.
</p>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<p class="Metadata Metadata--small">
  Metadata can be made even smaller than its default size if required.
</p>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<h1 class="Heading Heading--xx-large">
  Page/post title
</h1>
<span class="Metadata Metadata--editorialSubhead">
  Metadata as an editorial subheading
</span>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<p class="Metadata Metadata--limitWidth">
  Metadata can have its measure limited, independently of any container, to prevent pesky long lines from disrupting thr reading experience. This is particularly useful when metadata takes the form of a paragraph.
</p>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<p class="Metadata Metadata--figcaption">
  The `figcaption` element is treated as metadata.
</p>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<p class="Metadata Metadata--figcaption--text-align--left">
  Metadata `figcaption` elements are right-aligned by default, but but can left-aligned if desired.  
</p>
{% endexample %}
        </div>

      </div>
    </div>
  </section>
</div>


<div class="l-Wrapper l-Wrapper--row" id="section--navlist-navlink">
  <section class="row row--Editorial">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          NavList + NavLink
        </h2>
      </div>
    </div>
    <div class="column medium-8">

        <div class="DocsExample">
{% example html %}
<ul class="NavList" role="navigation">
  <li>
  	<a class="NavLink NavLink--current" href="">
      Current NavLink item
    </a>
  </li>
  <li>
  	<a class="NavLink" href="">
      Regular weight
    </a>
  </li>
  <li>
  	<a class="NavLink NavLink--bold" href="">
      Bold weight
    </a>
  </li>
</ul>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<ol class="NavList NavList--inline" role="navigation">
  <li>
    <a class="NavLink" href="">
      Inline NavList
    </a>
  </li>
  <li>
    <a class="NavLink NavLink--current" href="">
      Current NavLink
    </a>
  </li>
  <li>
    <a class="NavLink NavLink--small" href="">
      Small NavLink
    </a>
  </li>
  <li class="Metadata Metadata--small">
    Metadata in inline NavList
  </li>
</ol>
{% endexample %}
      </div>

        <div class="DocsExample">
{% example html %}
<ol class="NavList NavList--inline NavList--inline--spaced" role="navigation">
  <li>
    <a class="NavLink" href="">
      Inline NavList Spaced
    </a>
  </li>
  <li>
    <a class="NavLink NavLink--current" href="">
      NavLink
    </a>
  </li>
  <li>
    <a class="NavLink NavLink--current" href="">
      NavLink
    </a>
  </li>
</ol>
{% endexample %}
      </div>

    </div>
  </section>
</div>


<div class="l-Wrapper l-Wrapper--row" id="section--pullquote">
  <section class="row row--Editorial">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Pull quote
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">

        <div class="DocsExample">
{% example html %}
<blockquote class="Pullquote">
  <span class="Pullquote-quote u-text-gradient">Pull quotes stick out of the right and left-hand sides of the main content column by default. It’s a useful feature when they’re quite long, but they can be contained easily.</span>
</blockquote>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<blockquote cite="http://robbiemanson.com/styleguide/" class="Pullquote Pullquote--contained">
  <span class="Pullquote-quote u-text-gradient">Contained pull quotes always stay inside their parent column. This helps to keep things feeling tidy. Ideally they’re a little shorter in length.</span>
  <footer>
    <cite class="Pullquote-cite">Cited Author, <a class="Link" href="http://robbiemanson.com/styleguide/">Cited Publication</a></cite>
  </footer>
</blockquote>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<blockquote class="Pullquote">
  <span class="Pullquote-quote">Pull quotes don’t need to be colourful. They can be the standard old text colour, a bit like this.</span>
</blockquote>
{% endexample %}
        </div>

        <div class="DocsExample">
{% example html %}
<blockquote class="Pullquote Pullquote--lite">
  <span class="Pullquote-quote">Pull quotes come in a ‘lite’ variant, useful for knocked back leaders and whatnot. The reduced contrast means you can get away with a bit more content.</span>
</blockquote>
{% endexample %}
        </div>

      </div>
    </div>
  </section>
</div>


<div class="l-Wrapper l-Wrapper--row" id="section--table">
  <section class="row row--Editorial">
    <div class="column medium-4">
      <div class="column-content column-content--medium">
        <h2 class="Heading Heading--minor u-margin-top--0">
          Table
        </h2>
      </div>
    </div>
    <div class="column medium-8">
      <div class="Editorial">

        <div class="DocsExample">
{% example html %}
<table class="Table">
  <thead>
    <tr>
      <th>Table header</th>
      <th>Table header</th>
      <th>Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Table cell</th>
      <th>Table cell</th>
      <th>Table cell</th>
    </tr>
    <tr>
      <th>Table cell</th>
      <th>Table cell</th>
      <th>Table cell</th>
    </tr>
    <tr>
      <th>Table cell</th>
      <th>Table cell</th>
      <th>Table cell</th>
    </tr>
  </tbody>
</table>
{% endexample %}
        </div>

      </div>
    </div>
  </section>
</div>
