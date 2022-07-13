import {AplloClient , gql, InMemoryCache} from "@apollo/client";

const client = new AplloClient({
    uri: "Running on http://localhost:4000/",
    caches: new InMemoryCache(),
})

client.query({
    query:gql`
    {
        allMovies {
            title
        }
    }
    `
}).then(data => console.log(data))

export default client