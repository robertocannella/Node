export const getError404 = (req, res, next) => {
    res.render('404', {
        docTitle: '404 Not Found',
        activePath: null
    })
}