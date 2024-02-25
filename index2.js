const createMrssXml = require("./createMrssXml");
const formatMrssXml = require("./formatMrssXml");
const mrssLib = require("./mrssLib");
const { fetchSiteInfo, getToken, getSiteMap, log } = mrssLib;
const { escapeXML } = require('xml-crypto');

// Function to sanitize string input (to prevent XSS)
function sanitizeAndEncode(input) {
    // Perform basic sanitization
    const sanitizedInput = input ? input.toString() : '';
    // Encode the sanitized input to prevent XSS
    return escapeXML(sanitizedInput);
}

module.exports = cache => (req, res) => {
    const host = sanitizeAndEncode(req.headers.host);
    const path = sanitizeAndEncode(req.originalUrl);
    let limit = parseInt(req.query.limit);
    let offset = parseInt(req.query.offset);
    let ptt = sanitizeAndEncode(req.query.ptt);
    let category = sanitizeAndEncode(req.query.category);
    let tag = sanitizeAndEncode(req.query.tag);

    // Sanitize limit input
    if (isNaN(limit) || limit > 100) {
        return res.status(400).send("Limit should be a number less than or equal to 100");
    }
    // Sanitize offset input
    if (isNaN(offset)) {
        offset = 0; // Default value if offset is not a number
    }

    res.set("Content-Type", "application/xml");
    fetchSiteInfo(host).then(data => {
        const site = sanitizeAndEncode(data.gist.siteInternalName); // Ensure the site name is also sanitized
        getToken(site).then(data => {
            getSiteMap(
                site,
                data.authorizationToken,
                limit,
                offset,
                category,
                tag
            ).then(data => {
                // Ensure that XML creation and formatting are properly handling sanitized inputs
                const mrssXml = createMrssXml(data, ptt, host);
                // No need to escapeXML here again if createMrssXml handles user inputs safely
                // The final step should be safely embedding or sending the data, considering the context
                res.send(formatMrssXml(mrssXml, host)); // Ensure formatMrssXml is also securely handling data
            });
        });
    });
};
