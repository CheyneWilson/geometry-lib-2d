import {expect, test} from '@jest/globals';
import {clamp, angle, angleBetween, length, lengthSquared, add, fromPolar, create} from "../src/point";

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


test ("When y is zero and x is positive the angle should be zero", () => {
    let x = {x:1, y: 0}
    expect(angle(x)).toBeCloseTo(  0, Number.EPSILON)
})

test ("When y is zero and x is negative the angle should PI radians", () => {
    let x = {x:-1, y: 0}
    expect(angle(x)).toBeCloseTo(  Math.PI, Number.EPSILON)
})

test ("A 45 degree angle", () => {
    let xy = {x: 1, y: 1}
    expect(angle(xy)).toBeCloseTo(Math.PI / 4, Number.EPSILON)
})

test ("A 135 degree angle", () => {
    let xy = {x:-1, y: 1}
    expect(angle(xy)).toBeCloseTo(  3 / 4 * Math.PI, Number.EPSILON)
})

test ("A 225 degree angle", () => {
    let xy = {x:-1, y: -1}
    expect(angle(xy)).toBeCloseTo(  5 / 4 * Math.PI, Number.EPSILON)
})

test("Polar coordinates", () => {
    let a = fromPolar(2, 0)
    let a_expected = create(2, 0)
    expect(a).toEqual(a_expected)

    let b = fromPolar(2, Math.PI / 2)
    let b_expected = create(0, 2)
    expect(b.x).toBeCloseTo(b_expected.x, Number.EPSILON)
    expect(b.y).toEqual(b_expected.y)

    let c = fromPolar(2, Math.PI / 4)
    let c_expected = create(Math.sqrt(2), Math.sqrt(2))
    expect(c.x).toBeCloseTo(c_expected.x, Number.EPSILON)
    expect(c.y).toBeCloseTo(c_expected.y, Number.EPSILON)

    let d = fromPolar(2, 3 * Math.PI / 2)
    let d_expected = create(0, -2)
    expect(d.x).toBeCloseTo(d_expected.x, Number.EPSILON)
    expect(d.y).toBeCloseTo(d_expected.y, Number.EPSILON)
})