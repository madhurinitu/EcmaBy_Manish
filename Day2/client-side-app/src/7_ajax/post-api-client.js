const url = "https://jsonplaceholder.typicode.com/posts";

const postApiClient = {
    getAllPostsUsingCallbacks: function (successCB, errorCB) {
        fetch(url).then(response => {
            response.json().then(data => {
                successCB(data);
            }).catch(err => {
                errorCB("Parsing Error...");
            });
        }).catch(err => {
            errorCB("Communication Error...");
        });
    },

    getAllPostsUsingPromise: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    resolve(data);
                }).catch(err => {
                    reject("Parsing Error...");
                });
            }).catch(err => {
                reject("Communication Error...");
            });
        });
    },

    getAllPostsAsync: async function () {
        try {
            var response = await fetch(url);
            return await response.json();
        } catch(err) {
            throw err;
        }
    },

    getAllPosts: async function* () {
        try {
            var response = await fetch(url);
            yield await response.json();
        } catch(err) {
            throw err;
        }
    }
};

export default Object.freeze(postApiClient);