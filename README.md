# Geometry Lib 2D

This repo contains a simple geometry library which operates on 2D points and vectors.
It was created to support some other geometry experiments / prototypes as an alternative to
including a heavyweight framework. It only contains the features needed to support a couple of downstream projects.

# Features

## Vector2

An immutable (x,y) point and methods for common operations such as vector addition, subtraction, dot-product, the
determinant, and finding angles. Can be created from cartesian or polar coordinates.

## TriangleUtil

A module provides functions for calculating the angles and sides of a triangle when given partial information.
See [Solving SSA Triangles](https://www.mathsisfun.com/algebra/trig-solving-ssa-triangles.html) for more info.

# Usage

```json5
{
  // ...
  "dependencies": {
    "@cheynewilson/geometry-lib-2d": "0.5.0",
  }
}
```
## Dev Setup

Install the node module dependencies via `npm` or your preferred package manager.
```shell
npm install
```

```shell
yarn install
```

## Testing

Partial unit-test coverage exists via `jest`. This can be called via:

```shell
jest
```

## Building

Use `tsc` to create the distribution.
```shell
tsc
```
