/**
 * 
 * @param {string} str 
 * @returns {Boolean}
 */
export function validUsername(str) {
    const valid_namelist = ['admin', 'user', 'visitor']
    return valid_namelist.indexOf(str) >= 0
}