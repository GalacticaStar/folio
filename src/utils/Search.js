let jsonResponse;
const endpoint = 'http://localhost:4000/api';

export const Search = {

    allData() {

        const getData = async () => {
            try {
                const response = await fetch(endpoint);

                if (response.ok) {
                    jsonResponse = await response.json();
                    console.log(jsonResponse);
                    return jsonResponse;
                }
            } catch(err) {
                console.log(`There was an error in fetch: ${err}`);
            };
        };

        return getData();
    },

    techData(techSearch) {
        const getData = async () => {
            try {
                const response = await fetch(`${endpoint}/${techSearch}`);

                if (response.ok) {
                    jsonResponse = await response.json();
                    console.log(jsonResponse);
                    return jsonResponse;
                }
            } catch(err) {
                console.log(`There was an error in fetch: ${err}`);
            };
        };

        return getData();
    }

};