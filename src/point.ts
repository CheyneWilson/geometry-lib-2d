interface IPoint2 {
    x: number,
    y: number
}



/**
 * Return the value if it is within the bounded range, otherwise returns the closet bound.
 *
 * @param value The value to clamp.
 * @param min The minimum bound of the value.
 * @param max The maximum bound of the value.
 */
function clamp(value: number, min: number, max: number ) {
    return Math.max(min, Math.min( max, value ) );
}

/**
 * Return the (counter-clockwise) angle between this line and the x-axis (in radians)
 *
 * E.g. for point {x: 1, y: 1}, the angle is PI / 4 radians
 */
function angle(point: IPoint2) {
    return Math.atan2(-point.y, -point.x) + Math.PI;
}

/**
 * Calculate the distance squared between the point and the origin.
 *
 * Calculating the squared length is simpler than the length.
 * This is a convince function that can be used to optimize some calculations.
 *
 * @param point A Point
 */
function lengthSquared(point: IPoint2): number {
    return point.x * point.x + point.y * point.y;
}

/**
 * Calculate the distance between the point and the origin.
 *
 * @param point
 */
export function length(point: IPoint2): number {
    return Math.sqrt(lengthSquared(point))
}

function dot(point: IPoint2, other: IPoint2): number {
    return point.x * other.x + point.y * other.y;
}

/**
 * The determinant of two points
 *
 * @param point
 * @param other
 */
function det(point: IPoint2, other: IPoint2): number {
    return point.x * other.y - other.x * point.y;
}


/**
 * Calculate the counter-clockwise angle between two points
 *
 * @param point A point
 * @param other Another point
 */
function angleBetween(point: IPoint2, other: IPoint2): number {
    if ( point === other) { return NaN; }

    const denominator = Math.sqrt(lengthSquared(point) * lengthSquared(other));
    let a =  dot(point,  other) / denominator;

    // Handle possible numerical problems
    let theta = Math.acos(clamp(a, - 1, 1 ));

    const rotation = Math.sign(det(point, other))
    if (rotation === -1 ){
        theta = Math.PI * 2 - theta
    }

    return theta
}

/**
 * Calculate the distance between one point and another
 *
 * @param point A point
 * @param other Another point
 */
function distance(point: IPoint2, other: IPoint2): number {
    return Math.sqrt(distanceSquared(point,  other));
}

/**
 * Calculate the distance squared between one point and another
 *
 * It is simpler to calculating the distance squared than the distance.
 * This is a convince function that can be used to optimize some calculations.
 *
 * @param point A point
 * @param other Another point
 */
function distanceSquared(point: IPoint2, other: IPoint2) {
    const x = point.x - other.x;
    const y = point.y - other.y;
    return x * x + y * y;
}


/**
 * Create a copy of this point offset by the location the other one
 *
 * @param point A point
 * @param other Another point
 */
function add(point: IPoint2, other: IPoint2): IPoint2 {
    return {
        x: point.x + other.x,
        y: point.y + other.y
    }
}


export {add, clamp, angleBetween, lengthSquared}

export type { IPoint2}