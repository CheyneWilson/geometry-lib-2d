type TVector2 = {
    x: number;
    y: number;
}

class Vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Subtract another Vector2
     *
     * @param other A Vector2-like object
     */
    public subtract(other: TVector2): Vector2 {
        this.x -= other.x;
        this.y -= other.y;
        return this
    }

    /**
     * Return the (counter-clockwise) angle between this vector and the x-axis (in radians)
     *
     *       . a
     *      /
     *     /
     *    /
     *   O-------> x
     *
     * E.g. for point {x: 1, y: 1}, the angle is PI / 4 radians
     */
    public angle(): number {
        return Math.atan2(-this.y, -this.x) + Math.PI;
    }


    /**
     * Calculate the length-squared of this vector
     *
     * This is a convenience function that can be used to optimize some calculations
     * because it is cheaper to calculate than the length.
     *
     */
    public lengthSquared(): number {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * Calculate the length of this vector
     *
     */
    public length(): number {
        return Math.sqrt(this.lengthSquared())
    }

    /**
     * The dot product of two vectors
     *
     * @param a A vector
     * @param b Another vector
     */
    public static dot(a: TVector2, b: TVector2): number {
        return a.x * b.x + a.y * b.y;
    }

    /**
     * The determinant of two vectors
     *
     * @param a A vector
     * @param b Another vector
     */
    public static det(a: TVector2, b: TVector2): number {
        return a.x * b.y - b.x * a.y;
    }

    /**
     * Calculate the counter-clockwise angle (in radians) between two vectors.
     *
     * @param other Another vector
     */
    public angleBetween(other: TVector2): number {
        // If two points are identical, the angle between them is not defined
        if (this === other) {
            return NaN;
        }

        let otherLengthSquared = Vector2.from(other).lengthSquared()
        const denominator = Math.sqrt(this.lengthSquared() * otherLengthSquared);
        let c = Vector2.dot(this, other) / denominator;

        // Handle possible numerical problems
        let theta = Math.acos(clamp(c, -1, 1));

        const rotation = Math.sign(Vector2.det(this, other))
        if (rotation === -1) {
            theta = Math.PI * 2 - theta
        }

        return theta
    }

    /**
     * Calculate the distance between this point and another
     *
     * @param other Another point
     */
    public distance(other: TVector2): number {
        return Math.sqrt(this.distanceSquared(other));
    }

    /**
     * Calculate the distance-squared between this point and another
     *
     * This is a convenience public that can be used to optimize some calculations
     * because it is cheaper to calculate than the distance.
     *
     * @param other Another point
     */
    public distanceSquared(other: TVector2) {
        const x = this.x - other.x;
        const y = this.y - other.y;
        return x * x + y * y;
    }

    /**
     * Add another vector to this
     *
     * @param other A vector
     */
    public add(other: TVector2): Vector2 {
        this.x += other.x;
        this.y += other.y;
        return this
    }

    /**
     * Create a new 2d point/vector from polar coordinates
     *
     * @param length The length of the vector / distance of the point from origin
     * @param angle The angle between the vector / point and the x-axis
     */
    public static fromPolar(length: number, angle: number): Vector2 {
        let x = length * Math.cos(angle)
        let y = length * Math.sin(angle)
        return new Vector2(x, y)
    }

    public static from(other: TVector2): Vector2 {
        return new Vector2(other.x, other.y)
    }
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

export { Vector2 }
