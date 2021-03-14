const FetchData = {
    getData: async (url, method, body) => {
        // const jsonBody = body ? JSON.stringify(body) : undefined;
        const headers= {
            "Content-Type": "application/json",
        }
        const response = await fetch(url,
            {
                method: method,
                headers,
                body: body
            }
            )
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't fetch data from server")
                }
                return res.json()
            })
        return response;
    }
}


//     isPending(true);
//
export default FetchData;