"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tries to extract the ID as string from any mongoose object.
 * This could be a node-mongodb-native ObjectID (i.e. mongoose.Types.ObjectId),
 * or anything that contains an 'id' or '\_id' property (which might in turn be e.g. an ObjectID).
 * The strings, 'String' objects, ObjectIDs, 'id' or '\_id' properties (in that order) simply return their toString output.
 * But note that this function doesn't check for the validity of IDs!
 *
 * @param from A mongoose object or ID string.
 * @param fallback Return this if no apparent ID is found.
 */
function extractSingleMongoId(from, fallback) {
    if (typeof from === 'string' || from instanceof String) {
        return from.toString();
    }
    else if (from instanceof Object) {
        if (from._bsontype === 'ObjectID') {
            return from.toString();
        }
        else if ('id' in from) {
            return from.id.toString();
        }
        else if ('_id' in from) {
            return from._id.toString();
        }
    }
    return fallback;
}
exports.extractSingleMongoId = extractSingleMongoId;
/**
 * Tries to extract the ID as string from any mongoose object or array of such.
 * This could be a node-mongodb-native ObjectID (i.e. mongoose.Types.ObjectId),
 * or anything that contains an 'id' or '\_id' property (which might in turn be e.g. an ObjectID).
 * The strings, 'String' objects, ObjectIDs, 'id' or '\_id' properties (in that order) simply return their toString output.
 * But note that this function doesn't check for the validity of IDs!
 *
 * For arrays, anything === undefined won't be pushed to the output array.
 *
 * @param from A mongoose object, ID string, or (possibly mixed) array of such.
 * @param fallback Return this if no apparent ID is found.
 */
function extractMongoId(from, fallback) {
    if (Array.isArray(from)) {
        const results = [];
        for (const value of from) {
            const result = extractSingleMongoId(value, fallback);
            if (result !== undefined) {
                results.push(result);
            }
        }
        return results;
    }
    else {
        return extractSingleMongoId(from, fallback);
    }
}
exports.extractMongoId = extractMongoId;

//# sourceMappingURL=ExtractMongoId.js.map
