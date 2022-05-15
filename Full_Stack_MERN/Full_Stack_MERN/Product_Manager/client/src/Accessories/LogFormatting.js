/**
 * Provides formatting for an input message when success is true Else returns a formatted default error string
 * @param {string} [str="Something went wrong!"] - Message to format
 * @param {boolean} [success=false] - Pass true for success formatting 
 * @returns {string} Formatted success message or default error message
 */

module.exports.logMsg = (str="Something went wrong!", success=false) => {
    return success ? `
    ${"-".repeat(str.length)}
    ${str}
    ${"-".repeat(str.length)}
    `
    : `
    ${"X".repeat(str.length)}
    ${str}
    ${"X".repeat(str.length)}
`
}