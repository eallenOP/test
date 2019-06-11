/* 
 * This script gets the last modified date of an HTML document and inserts said date in an element.
 * Works on Firefox. Does not work on Chrome due to bug in Chrome where Chrome can't get last modified date of a local webpage.
 */

document.addEventListener("DOMContentLoaded", () => {
    let lastModEl = document.querySelector('#last-modified')
    lastModEl.innerHTML = "Page last modified: " + document.lastModified
})