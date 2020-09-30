import "./set-public-path";
import "./global.css?modules=false";

// Anything exported from this file is importable by other in-browser modules.
export function checkAuth() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 3000)
    })
}
