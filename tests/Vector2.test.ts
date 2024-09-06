import {expect, test} from '@jest/globals';
import {clamp, Vector2} from "../src/Vector2";

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
    let point = new Vector2(3, 4)
    expect(point.lengthSquared()).toBeCloseTo(25, Number.EPSILON);
});

test('The hypotenuse of a triangle with width 3, and height 4 is 5 ', () => {
    let point = new Vector2(3, 4)
    expect(point.length()).toBeCloseTo(5, Number.EPSILON);
});

test ("A small counter-clockwise angle ", () => {
    let x = new Vector2(1,0)
    let xy = new Vector2(1,1)
    expect(x.angleBetween(xy)).toBeCloseTo(Math.PI / 4, Number.EPSILON)
})

test ("An anti-clockwise right angle should be equiv to 90 degrees", () => {
    let x = new Vector2(1,0)
    let y = new Vector2(0,1)
    expect(x.angleBetween(y)).toBeCloseTo( Math.PI / 2, Number.EPSILON)
})

test ("A clockwise right angle should be equiv to 270 degrees", () => {
    let x = new Vector2(1,0)
    let y = new Vector2(0,-1)
    expect(x.angleBetween(y)).toBeCloseTo( 3 * Math.PI / 2, Number.EPSILON)
})


test ("A large counter-clockwise angle should be equiv to  315 degrees", () => {
    let x = new Vector2(1,0)
    let xy = new Vector2(1,-1)
    expect(x.angleBetween(xy)).toBeCloseTo( 7 * Math.PI / 4, Number.EPSILON)
})

test ("This small clockwise angle should be equiv to 45 degrees", () => {
    let x = new Vector2(1,0)
    let xy = new Vector2(1,-1)
    expect(xy.angleBetween(x)).toBeCloseTo( Math.PI / 4, Number.EPSILON)
})


test ("Add two points", () => {
    let a = new Vector2(1,2)
    let b = new Vector2(3,4)
    let c = new Vector2(4, 6)
    expect(a.add(b)).toStrictEqual( c)
})


test ("When y is zero and x is positive the angle should be zero", () => {
    let x = new Vector2(1,0)
    expect(x.angle()).toBeCloseTo(  0, Number.EPSILON)
})

test ("When y is zero and x is negative the angle should PI radians", () => {
    let x = new Vector2(-1,0)
    expect(x.angle()).toBeCloseTo(  Math.PI, Number.EPSILON)
})

test ("A 45 degree angle", () => {
    let xy = new Vector2( 1,1)
    expect(xy.angle()).toBeCloseTo(Math.PI / 4, Number.EPSILON)
})

test ("A 135 degree angle", () => {
    let xy = new Vector2(-1,1)
    expect(xy.angle()).toBeCloseTo(  3 / 4 * Math.PI, Number.EPSILON)
})

test ("A 225 degree angle", () => {
    let xy = new Vector2(-1,-1)
    expect(xy.angle()).toBeCloseTo(  - 3 / 4 * Math.PI, Number.EPSILON)
})

test("Polar coordinates", () => {
    let a = Vector2.fromPolar(2, 0)
    let a_expected = new Vector2(2, 0)
    expect(a).toEqual(a_expected)

    let b = Vector2.fromPolar(2, Math.PI / 2)
    let b_expected = new Vector2(0, 2)
    expect(b.x).toBeCloseTo(b_expected.x, Number.EPSILON)
    expect(b.y).toEqual(b_expected.y)

    let c = Vector2.fromPolar(2, Math.PI / 4)
    let c_expected = new Vector2(Math.sqrt(2), Math.sqrt(2))
    expect(c.x).toBeCloseTo(c_expected.x, Number.EPSILON)
    expect(c.y).toBeCloseTo(c_expected.y, Number.EPSILON)

    let d = Vector2.fromPolar(2, 3 * Math.PI / 2)
    let d_expected = new Vector2(0, -2)
    expect(d.x).toBeCloseTo(d_expected.x, Number.EPSILON)
    expect(d.y).toBeCloseTo(d_expected.y, Number.EPSILON)
})

test("Vector2 subtract method is part of prototype", () => {
    // This test exists to confirm that class methods are attached to the object prototype.
    // If they were attached to the Object itself, then the memory usage would be much greater
    let a = new Vector2(1, 2);
    let b = new Vector2(3, 4);
    let aSubtract = a.subtract
    let bSubtract = b.subtract
    expect(aSubtract).toEqual(bSubtract)
    let prototypeSubtract = Vector2.prototype.subtract
    expect(aSubtract).toEqual(prototypeSubtract)
})
