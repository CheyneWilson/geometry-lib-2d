import {expect, test} from '@jest/globals';
import {clamp, angleBetween, length, lengthSquared, add} from "../src/point";

test('Clamp less than min should equal min', () => {
    expect(clamp(-1, 2, 10)).toBe(2);
});


test('Clamp greater than max should equal max', () => {
    expect(clamp(20, 2, 10)).toBe(10);
});

test('Clamp between min and max should equal the initial value', () => {
    const target = 3
    expect(clamp(target, 2, 10)).toBe(target);
});


test('The length squared for side 5 or 3,4,5 triangle is 25', () => {
    let point = {x: 3, y: 4}
    expect(lengthSquared(point)).toBeCloseTo(25, Number.EPSILON);
});

test('The hypotenuse of a triangle with width 3, and height 4 is 5 ', () => {
    let point = {x: 3, y: 4}
    expect(length(point)).toBeCloseTo(5, Number.EPSILON);
});

test ("A small counter-clockwise angle ", () => {
    let x = {x:1, y: 0}
    let xy = {x:1, y: 1}

    expect(angleBetween(x, xy)).toBeCloseTo(Math.PI / 4, Number.EPSILON)
})

test ("An anti-clockwise right angle should be equiv to 90 degrees", () => {
    let x = {x:1, y: 0}
    let y = {x:0, y: 1}
    expect(angleBetween(x, y)).toBeCloseTo( Math.PI / 2, Number.EPSILON)
})

test ("A clockwise right angle should be equiv to 270 degrees", () => {
    let x = {x:1, y: 0}
    let y = {x:0, y: -1}
    expect(angleBetween(x, y)).toBeCloseTo( 3 * Math.PI / 2, Number.EPSILON)
})


test ("A large counter-clockwise angle should be equiv to  315 degrees", () => {
    let x = {x:1, y: 0}
    let xy = {x:1, y: -1}
    expect(angleBetween(x, xy)).toBeCloseTo( 7 * Math.PI / 4, Number.EPSILON)
})

test ("This small clockwise angle should be equiv to 45 degrees", () => {
    let x = {x:1, y: 0}
    let xy = {x:1, y: -1}
    expect(angleBetween(xy, x)).toBeCloseTo( Math.PI / 4, Number.EPSILON)
})


test ("Add two points", () => {
    let a = {x:1, y: 2}
    let b = {x:3, y: 4}
    let c = {x:4, y: 6}
    expect(add(a, b)).toStrictEqual( c)
})