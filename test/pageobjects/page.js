module.exports = class Page {

    open (path) {
        return browser.url(`/${path}`)
    }

    isVisible (selector) {
        try {
            selector.waitForExist()
            return true
        } catch (error) {
            return false
        }
    }
}
