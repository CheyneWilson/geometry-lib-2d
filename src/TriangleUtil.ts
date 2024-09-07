/**
 * The TriangleUtil module provides functions for calculating the angles and sides of a triangle when given
 * some known angles and sides.
 *
 * **Naming conventions**
 * The length of each side is denoted with a lower case letters, e.g. a,b, and c
 * The angles are denoted with uppercase letters, e.g. A,B, C
 * And angle and a side with the same letter are opposite each other, e.g. Side 'a' is opposite angle 'A'
 * See https://www.mathsisfun.com/algebra/trig-solving-practice.html for more background.
 *
 * The sides / angles chosen for a,b, and c can often be interchanged due to symmetry. For example,
 * the function `withASAfindSideB` can also be used to find sides 'A' and 'C' when provided with appropriate inputs.
 */

/**
 * Calculate the area of a triangle with sides of known length
 *
 * @param a - The length of side 'a'
 * @param b - The length of side 'b'
 * @param c - The length of side 'c'
 */
function area(a: number, b: number, c: number): number {
    // Using Heron's formula
    let s = (a + b + c) / 2  // half semi perimeter
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}

/**
 * Calculate the angle A (opposite side a) given 3 known sides (in radians).
 *
 * @param a - The length of side 'a'
 * @param b - The length of side 'b'
 * @param c - The length of side 'c'
 */
function withSSSfindA(a: number, b: number, c: number): number {
    return Math.acos((b * b + c * c - a * a) / (2 * b * c))
}

/**
 * Calculate the angle B (opposite side b) given side b, and a known side / opposite angle pair.
 *
 * "SSA" is when we know two sides and an angle that is not the angle between the sides.
 * Caution, this might have two answers
 *
 * @param a - The length of side 'a'
 * @param b - The length of side 'b
 * @param A - The angle opposite side 'a' in radians
 */
function withSSAfindAngleB(a: number, b: number, A: number): number {
    return Math.asin(Math.sin(A) * b / a)
}

/**
 * Calculate the length of side C given two sides a and b and the angle 'C' between them.
 *
 * "SAS" is when we know two sides and the angle between them.
 *
 * @param a The length of side 'a'
 * @param b The length of side 'b'
 * @param C The angle between 'a' and 'b' in radians
 */
function withSASfindSideC(a: number, b: number, C: number): number {
    return Math.sqrt((a * a + b * b - 2 * a * b * Math.cos(C)))
}


/**
 * Calculate the length of side 'b' when given side 'a' between two known angles.
 *
 * "ASA" is when we know two angles and a side between the angles.
 *
 * @param a The length of side 'a'
 * @param B The angle opposite side 'b'
 * @param C The angle opposite side 'c'
 */
function withASAfindSideB(a: number, B: number, C: number): number {
    let A = findAngleC(B, C)
    return Math.sin(B) * a / Math.sin(A)
}

/**
 * Calculate the length of site
 *
 * "ASA" is when we know two angles and a side between the angles.
 *
 * @param a The length of side 'a'
 * @param A The angle opposite side 'a'
 * @param B The angle between side 'a' and side 'c'. It is opposite side 'b'
 */
function withAASfindSideB(a: number, A: number, B: number): number {
    return Math.sin(B) * a / Math.sin(A)
}

/**
 * Find the remaining angle for a triangle.
 *
 * @param A An angle of a triangle
 * @param B Another angle of a triangle
 */
function findAngleC(A: number, B: number): number {
    return Math.PI - A - B
}

export {area, withSSSfindA, withSSAfindAngleB, withSASfindSideC, withASAfindSideB, withAASfindSideB, findAngleC }
