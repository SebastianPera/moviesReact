const API = "https://api.themoviedb.org/3";
// const API_KEY = "api_key=8c438c37dc4b04678879b9ffb2c08913";

export async function get(path) {
  return fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzQzOGMzN2RjNGIwNDY3ODg3OWI5ZmZiMmMwODkxMyIsInN1YiI6IjYzMWNmMWFlZmE0MDQ2MDA3ZWY5OWJiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3eD6V45a3ZCfE9hLS33Hpqp8ckYQm0IiMci38pfzSHI",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json());
}