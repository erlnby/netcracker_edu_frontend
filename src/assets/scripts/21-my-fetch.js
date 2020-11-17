function myFetch(url, options) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.onload = function () {
            let body = xhr.response ?? xhr.responseText;
            resolve(new Response(body));
        }

        xhr.onerror = function () {
            reject(new Error(`Request on ${url} failed`))
        }

        xhr.open(options.method, url, true);
        xhr.send(options.body);
    });
}