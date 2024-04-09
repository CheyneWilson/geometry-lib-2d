type Vector2 = {
    x: number,
    y: number
}

/**
 * Return the unchanged value if it is within the bounded range.
 * If it is outside the bounds, instead return the closet bound.
 *
 * @param value The value being clamped.
 * @param min The minimum bound.
 * @param max The maximum bound.
 */
function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

/**
 * Return the (counter-clockwise) angle between the vector and the x-axis (in radians)
 *
 *       . a
 *      /
 *     /
 *    /
 *   O-------> x
 *
 * E.g. for point {x: 1, y: 1}, the angle is PI / 4 radians
 */
function angle(vector: Vector2): number {
    return Math.atan2(-vector.y, -vector.x) + Math.PI;
}

/**
 * Return a 2d vector representing the distance between b and a.
 *
 * @param a An object {x,y} which is subtracted from
 * @param b An object {x,y} which is subtracted
 */
function subtract(a: Vector2, b: Vector2): Vector2 {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    }
}

/**
 * Return the length-squared of a 2d vector.
 *
 * This is a convenience function that can be used to optimize some calculations
 * because it is cheaper to calculate than the length.
 *
 * @param a A vector
 */
function lengthSquared(a: Vector2): number {
    return a.x * a.x + a.y * a.y;
}

/**
 * Return the length of a 2d vector.
 *
 * @param a
 */
function length(a: Vector2): number {
    return Math.sqrt(lengthSquared(a))
}

/**
 * The dot product of two vectors
 *
 * @param a A vector
 * @param b Another vector
 */
function dot(a: Vector2, b: Vector2): number {
    return a.x * b.x + a.y * b.y;
}

/**
 * The determinant of two vectors
 *
 * @param a A vector
 * @param b Another vector
 */
function det(a: Vector2, b: Vector2): number {
    return a.x * b.y - b.x * a.y;
}

/**
 * Calculate the counter-clockwise angle (in radians) between two vectors.
 *
 * @param a A vector
 * @param b Another vector
 */
function angleBetween(a: Vector2, b: Vector2): number {
    if (a === b) {
        return NaN;
    }

    const denominator = Math.sqrt(lengthSquared(a) * lengthSquared(b));
    let c = dot(a, b) / denominator;

    // Handle possible numerical problems
    let theta = Math.acos(clamp(c, -1, 1));

    const rotation = Math.sign(det(a, b))
    if (rotation === -1) {
        theta = Math.PI * 2 - theta
    }

    return theta
}

/**
 * Calculate the distance between two points
 *
 * @param a A 2d point
 * @param b Another 2d point
 */
function distance(a: Vector2, b: Vector2): number {
    return Math.sqrt(distanceSquared(a, b));
}

/**
 * Calculate the distance squared between two points
 *
 * This is a convenience function that can be used to optimize some calculations
 * because it is cheaper to calculate than the distance.
 *
 * @param point A point
 * @param other Another point
 */
function distanceSquared(point: Vector2, other: Vector2) {
    const x = point.x - other.x;
    const y = point.y - other.y;
    return x * x + y * y;
}

/**
 * Add two vectors together
 *
 * @param a A vector
 * @param b Another vector
 */
function add(a: Vector2, b: Vector2): Vector2 {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    }
}

/**
 * Create a new 2d point/vector
 *
 * @param x The x-coordinate
 * @param y The y-coordinate
 */
function create(x: number, y: number): Vector2  {
    return {x, y}
}

/**
 * Create a new 2d point/vector from polar coordinates
 *
 * @param length The length of the vector / distance of the point from origin
 * @param angle The angle between the vector / point and the x-axis
 */
function fromPolar(length: number, angle: number): Vector2 {
    let x = length * Math.cos(angle)
    let y = length * Math.sin(angle)
    return {x, y}
}

export {add, angle, angleBetween, clamp, create, det, distance, dot, distanceSquared, fromPolar, length, lengthSquared, subtract}

export type {Vector2}
