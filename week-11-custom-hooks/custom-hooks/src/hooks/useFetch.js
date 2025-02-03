import { useEffect, useState } from "react";

// Custom Hook: usePostTitle
// Fetches a post title from an API and returns it.
export function usePostTitle() {
    const [post, setPost] = useState({});

    // Function to fetch post data from API
    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await response.json();
        setPost(json);
    }

    useEffect(() => {
        // Fetch data when the component mounts
        getPosts();
    }, []);

    return post.title;
}

// Custom Hook: useFetch
// Fetches data from a given URL and returns the data along with a loading state.
export function useFetch(url) {
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    // Function to fetch details from the given URL
    async function getDetails() {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(() => {
        // Fetch data when the URL changes
        getDetails();
    }, [url]);

    useEffect(() => {
        // Set interval to refetch data every 10 seconds
        const interval = setInterval(getDetails, 10 * 1000);
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return {
        finalData,
        loading
    };
}
