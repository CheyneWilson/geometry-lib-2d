import {expect, test} from '@jest/globals';
import {area, withSASfindSideC, withSSAfindAngleB} from "../src/TriangleUtil";


// A 3, 4, 5 triangle
//
//        /|
//       / |
//      b  |
//     /   a
//    /__c_|
//
const triangle345 = {
    a: 4,
    b: 5,
    c: 3
}

test('Calculate area (1)', () => {
    // The area of a 3,4,5 triangle is 6 (half base * height)
    let t = triangle345
    expect(area(t.a, t.b, t.c)).toEqual(6)
});

test('Calculate area (2)', () => {

    // A sqrt(3), sqrt(3), 2 triangle
    //
    //        /\
    //       /  \
    //      a    a
    //     /      \
    //    /____b___\
    //
    let a = Math.sqrt(3)
    let b = 2
    expect(area(a, a, b)).toBeCloseTo(Math.sqrt(2))
});

test('Calculate area (3)', () => {

    // A sqrt(3), sqrt(3), 2 triangle
    //
    //        /\
    //       /  \
    //      a    a
    //     /      \
    //    /____b___\
    //
    let a = 4
    let b = 13
    let c = 15
    expect(area(a, b, c)).toBe(24)
});


test('Calculate missing angle of SSA Triangle (1)', () => {
    //         C
    //        /|
    //       / |
    //      b  |
    //     /   a
    //    /__c_|
    //  A       B
    let t = triangle345
    let angleA =  Math.acos(t.c / t.b)
    expect(angleA).toBeCloseTo(0.9272) // Radians
    let angleB = withSSAfindAngleB(t.a, t.b, angleA)
    // Angle 'B' is a right angle
    expect(angleB).toBeCloseTo(Math.PI / 2)
});

test('Calculate missing angle of SSA Triangle (2)', () => {
    //         C
    //        /|
    //       / |
    //      b  |
    //     /   a
    //    /__c_|
    //  A       B
    let t = triangle345
    let angleA =  Math.acos(t.c / t.b)
    expect(angleA).toBeCloseTo(0.9272) // Radians
    let angleC = withSSAfindAngleB(t.a, t.c, angleA)
    // Angle 'B' is a right angle, so remaining angles add up to PI / 2
    expect(angleC + angleA).toBeCloseTo(Math.PI / 2)
});


/**
 * Verify different permutation for find the missing side of a SAS triangle.
 */
test('Calculate missing side of SAS Triangle', () => {
    //         C
    //        /|
    //       / |
    //      b  |
    //     /   a
    //    /__c_|
    //  A       B
    let a = 1
    let b = 2
    let c = Math.sqrt(3)

    // Test the default params
    let angle_C =  Math.asin(c / b)
    expect(angle_C).toBeCloseTo( Math.PI / 3) // Radians
    let side_c = withSASfindSideC(a, b, angle_C)
    let side_c2 = withSASfindSideC(b, a, angle_C)
    expect(side_c).toBeCloseTo(c)
    expect(side_c2).toBeCloseTo(c)

    let angle_A =  Math.asin(a / b)
    let side_a = withSASfindSideC(c, b, angle_A)
    let side_a2 = withSASfindSideC(b, c, angle_A)
    expect(side_a).toBeCloseTo(a)
    expect(side_a2).toBeCloseTo(a)

    let angle_B = Math.PI / 2
    let side_b = withSASfindSideC(a, c, angle_B)
    let side_b2 = withSASfindSideC(c, a, angle_B)
    expect(side_b).toBeCloseTo(b)
    expect(side_b2).toBeCloseTo(b)
});
