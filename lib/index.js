function inRange(n, range) {
    var limits = range.split(/\s*-\s*/);

    if(limits.length === 1) return range == n;
    if(limits.length !== 2) throw new Error('Invalid range:' + range);

    var max = Math.max(limits[0], limits[1]);
    var min = Math.min(limits[0], limits[1]);

    return min <= n && n <= max;
}

module.exports = function isInRange(ranges, n) {
    ranges = ranges.split(/\s*,\s*/);
    return ranges.some(inRange.bind(null, n));
};
