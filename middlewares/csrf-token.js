function addCsrfToken(req, res, next) {
    res.local.csrfToken = req.csrfToken();
    next();
}

module.exports = addCsrfToken;