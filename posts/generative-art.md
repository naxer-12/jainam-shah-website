---
title: "Creating Generative Art with D3"
date: "2017-01-24"
---

# Creating Generative Art with D3

I recently took a trip to the SFMoma where I came across the work of Sol LeWitt. One of the interesting things about Sol's work was that he created the rules of his art pieces, but they were executable by anyone.

## Recreating an art piece, in code.

![Photo of a Heart](/images/heart.jpg)

I created this heart using Illustrator around 8 years ago. I wanted to see how difficult it would be to create something similar using D3.js. I was looking for a technique that allowed me to create this effect using any SVG path.

First, I created a grid of SVG circles and colored them using a scale from color brewer.

![Grid of Dots](/images/gen-art-1.jpeg)

Next, I imported a SVG path and tried to detect whether the center of a circle was inside the path. I found lots of ways to do this with polygons, but I wasn't able to find a solution for SVG paths. Thankfully, I found a canvas method called `isPointInPath` that allowed me to do what I wanted.

![Even Grid in Heart Shape](/images/gen-art-2.jpeg)

![Even Grid in Heart Shape](/images/gen-art-3.jpeg)

This effect was really great on its own. But it's not what I wanted for this piece. I didn't want an even grid of circles. I wanted it to look like a human placed the circles.

I came across [Mike Bostock's](https://twitter.com/mbostock) example of [Mitchell's best candidate](https://bl.ocks.org/mbostock/d7bf3bd67d00ed79695b) in his article on [visualizing algorithms](https://bost.ocks.org/mike/algorithms/) and realized it would be the perfect fit for the task. This algorithm takes a number of random coordinates, and then chooses the best candidate based on whatever point is farthest from all the others.

Using this algorithm, and help from one of Mike's [examples](https://bl.ocks.org/mbostock/6224050) I was able to get my final result.

<img src="/images/heart.gif" alt="Photo of a Heart" />

I'm happy with it, but there are two problems I would love to have solved.

The first being the ability to detect whether or not a point is inside a path using SVG. Canvas is fine, but there are certain things I'd like to do with animations that are harder using canvas.

The second thing would be the ability to prevent circles from escaping the bounds of the path. Right now, i'm only checking the center of the circle to make sure it stays within the path. There's probably a way to detect that the area of the circle hasn't escaped the path but I haven't found it yet.

## Explorations

One of the side benefits of working on generative art in D3.js is that you discover new portions of the API. Below i've collected some of the things i've made this month.

<figcaption>
  <img src="/images/ring-of-bars.gif" alt="ring-of-bars" />
  Custom Arc Tweening
</figcaption>

<figcaption>
  <img src="/images/circle-tunnel.gif" alt="transitions example" />
  Transitions
</figcaption>

<figcaption>
  <img src="/images/static.gif" alt="generating static example" />
  Static
</figcaption>

<figcaption>
  <img src="/images/moire.jpg" alt="Working with radial lines" />
  Radial Lines
</figcaption>
