# Geometry Lib 2D

This repo contains a basic geometry library which operates on 2D points and vectors.
It was created to support some other geometry experiments / prototypes as an alternative to
including a more heavyweight framework. This library is quite lacking, containing only the
features needed to support downstream projects being developed in parallel.

## Dev Setup

Install the node module dependencies via `npm` or your preferred package manager.
```shell
npm install
```

## Testing

Partial unit-test coverage exists via `jest`. This can be called via:
```shell
jest
```

## Building

Use `tsc` to create the javascript distribution.
```shell
tsc
```
