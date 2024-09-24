# Game Development Tutorial for Phaser.js

[![GPL-3.0](https://img.shields.io/github/license/xiaofuyesnew/phaser-js-tutorial)](https://www.gnu.org/licenses/gpl-3.0.html)

English | [简体中文](README.zh-CN.md)

## Introduction

Phaser.js is a popular JavaScript game development framework that provides a powerful and flexible platform for developers to easily create various types of 2D games. Whether you are a beginner or an experienced developer, you can quickly get started with game development through Phaser.js and realize your creativity.

This tutorial aims to provide readers with a comprehensive guide to Phaser.js game development. We will start from the basics and gradually introduce the core concepts and functions of Phaser.js, including game objects, sprites, animations, collision detection, user input and interaction, etc. Through practical code examples and project practices, readers will learn how to use Phaser.js to build their own games and master some advanced skills and optimization methods.

Let us embark on this exciting journey of game development together!

## Before You Start

Although this tutorial is based on game development, it DOES NOT mean that the following basic knowledge and skills WILL NOT be involved:

- Familiar with `HTML`, `CSS` and `Javascript` syntax, know how they work together;
- Familiar with Front-end development environments, such as `Node.js` and `npm`;
- Familiar with dev tools, as `VS Code`, `Chrome DevTools`, etc.
- Familiar with `Git` and `GitHub`;
- Better know how to use `Terminal` and `Command Line`;
- Better know `FP` and `OOP`;
- Better know modern front-end frameworks, such as `Vue`, `React`, etc.
- Better know modern front-end building tools, such as `Webpack`, `Vite`, etc.

The above items are so important to game development that they will be used throughout the entire process of your game development. But I still recommend that you start learning from this tutorial first, and then learn the relevant content when you really need to use them.

## Getting Started

Clone the tutorial repository:

```bash
git clone https://github.com/xiaofuyesnew/phaser-js-tutorial.git
```

Install dependencies:

```bash
cd phaser-js-tutorial
pnpm install
```

Run tutorial source code:

```bash
# For example, you want run the `000_start_from_scratch` package:
# dev
pnpm -F tutorial_000 dev
# build
pnpm -F tutorial_000 build
# preview
pnpm -F tutorial_000 preview
```

## Contents

- [000. Start From Scratch](./packages/000_start_from_scratch/README.md)
- [001. Create a Game](./packages/001_create_a_game/README.md)
