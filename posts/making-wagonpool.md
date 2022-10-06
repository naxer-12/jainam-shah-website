---
title: "Making Wagon Pool"
date: "2014-08-26"
---

# Making Wagon Pool

I made my first app this past year. It's a simple carpooling calculator that allows you to find out how much a trip will cost each person involved.
I designed and built Wagon Pool from scratch without any previous Objective C or Xcode experience.
While it's still fresh in my mind I wanted to document the process I took in building it.

My hope for this project was to be able to ship something I was proud of.
I wanted the app to be simple, focused, and better than alternative options.

I also wanted to have a good understanding of what it takes to build an iOS application.
I needed to learn Object Oriented Programming and learn mobile development on its own terms.

Getting Started, I got a notebook to help organize my thoughts. I sketched, illustrated, and diagrammed my way through the entire process.
This gave me extra mental space, and helped me visualize what was going on in my head.

![Prototype designs for feedback](/images/wagon-notepad.jpg)

## Design

I wanted the app to look polished and to make calculating easy.
I spent a lot of time thinking about how I wanted the users to input information.
I mocked up 8 different ways the interface could work.

![Mockups](/images/wagon-mockups.jpg)

I chose the last option as a starting point because the user can get fast estimates without having to type or switch pages.

I started with something simple for the icon which I was planning on using.
A friend challenged me to make something memorable.
I sketched out lots of ideas some of which looked great at 512x512, but poor on the actual device.
After much tweaking I came up with something I liked.

![WagonPool Icon](/images/wagon-icon.jpg)

## Development

Developing Wagon Pool was both challenging and rewarding. So many hours went into such a small app.

I got comfortable with Xcode by creating outlets, using simple methods, and exploring interface builder. I created a working version in a short period of time, however there were serious flaws in my approach. For example, Everything was inside my view controller.
I knew that a lot of my code didn't belong there, but I didn’t know where else to put it. There was also a lot of excess code that I needed to eliminate.

I started the [Stanford course](https://itunes.apple.com/us/course/developing-ios-7-apps-for/id733644550) on iTunes University.
However, I realized I needed to get a stronger grasp on Object Oriented Programing.

Reading Matt Neuburg's [iOS fundamentals](http://www.amazon.com/iOS-Programming-Fundamentals-Objective-C-Basics/dp/1491945575/ref=sr_1_2?ie=UTF8&qid=1409103316&sr=8-2) was a worthwhile investment. The first five chapters were especially helpful since they covered the fundamentals of iOS development.
At the same time, I was coding every night and putting into practice what I was learning.

After I finished the book, there was still much to be done. I let myself go down rabbit holes to better understand MVC patterns, auto layout, delegation, and animation.

## Ship it

About three months in I signed up for the iOS developer program.
I wanted to spend time debugging, learn about memory management, and get feedback.
I received a lot feedback and opinions. The biggest issue was that users didn’t have enough control over their input.
I decided to create a modal that gave users the ability to enter in values outside the default range.
This set me back a few weeks, but I’m glad I decided to address it in the v1.0 release.

It's a small app, but it's something I am very proud of.

_Update: This app is no longer available on the App Store._

<div style="display: flex;">
    <div style="max-width: 300px; margin-right: 10px;">
    <img src="/images/sliding.gif">
    </div>
    <div style="max-width: 300px">
    <img src="/images/modal.gif">
    </div>
</div>
