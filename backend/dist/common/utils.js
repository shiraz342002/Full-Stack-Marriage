"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHash = generateHash;
exports.getCharacterString = getCharacterString;
exports.validateHash = validateHash;
exports.stringEncode = stringEncode;
exports.stringDecode = stringDecode;
exports.getVariableName = getVariableName;
const passwordHash = require("password-hash");
function generateHash(password) {
    return passwordHash.generate(password);
}
function getCharacterString() {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
}
function validateHash(password, hash) {
    if (!password || !hash) {
        return Promise.resolve(false);
    }
    return passwordHash.verify(password, hash);
}
function stringEncode(valueToEncode, numberOfTimes) {
    for (let i = 0; i < numberOfTimes; i++) {
        valueToEncode = Buffer.from(valueToEncode, 'utf8').toString('base64');
    }
    return valueToEncode;
}
function stringDecode(valueToDecode, numberOfTimes) {
    for (let i = 0; i < numberOfTimes; i++) {
        valueToDecode = Buffer.from(valueToDecode, 'base64').toString('utf8');
    }
    return valueToDecode;
}
function getVariableName(getVar) {
    const m = /\(\)=>(.*)/.exec(getVar.toString().replace(/(\r\n|\n|\r|\s)/gm, ''));
    if (!m) {
        throw new Error("The function does not contain a statement matching 'return variableName;'");
    }
    const fullMemberName = m[1];
    const memberParts = fullMemberName.split('.');
    return memberParts[memberParts.length - 1];
}
//# sourceMappingURL=utils.js.map