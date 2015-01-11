dottastico
=========
A simple JQuery based library to navigate between sections in a scrollable website.

## Usage & Simple example
Just remember to call JQuery library before dottastico:
```html
<html>
  <head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="dottastico.js"></script>
    <link rel="stylesheet" type="text/css" href="stylesheets/dottastico.css">
  </head>
  ...
</html>
```

* Add a div with the "dottastico" class attribute before or your sections. Set the animation time, shape (circle, square), color, size and position.
* Add the "dottable-section" class attribute and the "dottable-index" data-* in your sections.

```html
<html>
  ...
  <body>
    <div class="dottastico" data-shape="circle" data-time="1600" data-size="14px" data-color="#000" data-position="right"></div>
    <section class="dottable_section" data-dottable-index="1">
      ...
    </section>
    <section class="dottable_section" data-dottable-index="2">
      ...
    </section>
    <section class="dottable_section" data-dottable-index="3">
      ...
    </section>
    ...
  </body>
</html>
```
You can also try this [demo](https://github.com/jcarpanelli/dottastico/tree/dottastico_demo).

##Contributing
Star it, fork it, watch it, clone it, improve it, push it!