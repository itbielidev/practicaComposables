import { ref } from "vue";

export default function usePosts() {
  const posts = ref([]);
  const users = ref([]);
  /* const post = ref(null)
    const user = ref(null) 

     const baseUrl = "https://jsonplaceholder.typicode.com/posts"
     const llegirPosts = async () => {
         const response = await fetch(baseUrl)
         posts.value = await response.json()
     }
    */

  /*   punto 5. el async, sirve para indicar que dentro de la función se van a ejecutar promesas, por lo tanto la función devolverá una promesa 
    el await sirve para detener la ejecución del código, hasta que se complete una promesa */

  /*  const llegirPost = async (id) => {
        const response = await fetch(baseUrl + '/' + id)
        post.value = await response.json()
    }
    const llegirUser = async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        user.value = await response.json()
    } */

  //punto 4
  const llegirPosts = async (url) => {
    const response = await fetch(url);
    posts.value = await response.json();
  };

  const llegirUsers = async (url) => {
    const userResponse = await fetch(url);
    users.value = await userResponse.json();
  };

  return {
    posts,
    // post,
    users,
    // user,
    llegirPosts,
    // llegirPost,
    llegirUsers,
    // llegirUser
  };
}

//punto 2. Un fetch es una función que permite hacer peticiones http
// si hago un fetch sincrono hasta que no se lea toda la info, no continua la ejecución
//punto 3. Si necesitamos que sea rectiva, para que cuando cambie su valor se rederice el compponente
