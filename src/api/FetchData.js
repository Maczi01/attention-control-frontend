const FetchData = {
    getData: async (url, method, body) => {
        const headers = {
            "Content-Type": "application/json",
        };
        return await fetch(url,
            {
                method,
                headers,
                body
            }
        )
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't fetch data from server")
                }
                return res.json()
            });
    },

};
export default FetchData;