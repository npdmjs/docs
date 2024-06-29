---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: NP(D)M
  text: Dynamic NPM Loader
  tagline: Deployments for your microfrontends
  actions:
    - theme: brand
      text: Why NP(D)M?
      link: /introduction/why-npdm

features:
  - title: Module Federation
    details: Use the Module Federation at its best, including Runtime Federation
  - title: Easy deployment
    details: Deploy your applications as simple as switching feature toggle
  - title: Modules versioning
    details: Reuse different versions of your microfrontends as easy as different versions of NPM packages
---

<br />
<br />
<br />

<script setup>
const quotes = [
  {
    "author": "Albert Einstein",
    "text": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."
  },
  {
    "author": "Albert Einstein",
    "text": "The true sign of intelligence is not knowledge but imagination."
  },
  {
    "author": "Steve Jobs",
    "text": "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
  },
  {
    "author": "Pablo Picasso",
    "text": "Every child is an artist. The problem is how to remain an artist once we grow up."
  },
  {
    "author": "Pablo Picasso",
    "text": "Others have seen what is and asked why. I have seen what could be and asked why not."
  },
  {
    "author": "Walt Disney",
    "text": "If you can dream it, you can do it."
  },
  {
    "author": "Walt Disney",
    "text": "It's kind of fun to do the impossible."
  },
  {
    "author": "Salvador Dali",
    "text": "Have no fear of perfection - you'll never reach it."
  },
  {
    "author": "Salvador Dali",
    "text": "The only difference between me and a madman is that I'm not mad."
  },
  {
    "author": "Leonardo da Vinci",
    "text": "Art is never finished, only abandoned."
  },
  {
    "author": "Leonardo da Vinci",
    "text": "The painter has the Universe in his mind and hands."
  },
  {
    "author": "Henry David Thoreau",
    "text": "The world is but a canvas to our imagination."
  },
  {
    "author": "Antoine de Saint-Exupéry",
    "text": "A rock pile ceases to be a rock pile the moment a single man contemplates it, bearing within him the image of a cathedral."
  },
  {
    "author": "Maya Angelou",
    "text": "You can't use up creativity. The more you use, the more you have."
  }
];
const randomIndex = Math.floor(Math.random() * quotes.length);
const { author, text } = quotes[randomIndex];
</script>

> {{ text }}

{{ author }}