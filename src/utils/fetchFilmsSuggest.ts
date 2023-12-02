export const fetchFilmsSuggest = async (
    searchQuery: string,
    length: number,
) => {
    const API_KEY = "fae51faf";
    const baseUrl = `http://www.omdbapi.com/?apikey=${API_KEY}`;

    const url = `${baseUrl}&s=${searchQuery}`;

    const options = {
        method: "GET",
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result["Search"]?.length && result["Search"]?.length > 5) {
            return result["Search"].slice(0, length);
        } else {
            result["Search"]?.length;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
