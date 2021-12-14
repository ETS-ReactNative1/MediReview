# MediReview
Dec, 15th 2021 submission Repo for Shan Chen 217 NLP system Demo

## Key Features

* This system aim to predict the sentiment given a medication review and extract medication terms metioned among the review.
* Instantly see what your input medication review's sentiment.
* Detected Medication highlighting
* One click to view highlighted medication photos

Data comes from 2018 UCI open source.

## Turn on the API:

Please head to and start the API:
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1bwH8mmDM49z7mHhlCnBNUjIYjOW5thIb?usp=sharing)


![screenshot](https://raw.githubusercontent.com/kara4141/MediReview/Animation.gif)

Simply copy the host website and paste it on line 14 on file Shanchen once you clone the direcotry.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) and React Native to be installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/kara4141/MediReview

# Go into the repository
$ cd MediReview

# Install dependencies
$ npm install

# Run the app
$ expo start
```

Note: Due to some restriction on FastAPI, you will also need to enable CORS on your browser!!!


## View models

Token classification models colab notebook:

https://colab.research.google.com/drive/14oCBxZ1OKg1JqyJAsqFbK4MO-fc8B9xn?usp=sharing

Sequence classification models colab notebook:

https://colab.research.google.com/drive/1MbuNO3HAoGSu4pxTaUgw7dMGN8mT0ALf?usp=sharing

## Email me

If you liked using this app or it has helped you in any way, I'd like you send me an email at <shawnchen23@gmail.com> about anything you'd want to say about this software. I'd really appreciate it!

## Credits

This software uses the following open source packages and get help from follwing tutorial:

- [Huggingface](https://huggingface.co/models/)
- [React Native](https://reactnative.dev/)
- [UCI dataset](https://archive.ics.uci.edu/ml/datasets/Drug+Review+Dataset+%28Drugs.com%29)
- [Keras Tutorial](https://keras.io/getting_started/)
- Readme Templete [here](https://github.com/amitmerchant1990/electron-markdownify#readme)
- JacobLi helping with React Native

---

> [shanchen.dev](https://www.shanchen.dev) &nbsp;&middot;&nbsp;
> GitHub [@kara4141](https://github.com/kara4141)


