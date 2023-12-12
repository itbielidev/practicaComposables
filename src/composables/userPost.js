import {ref} from 'vue'
export default function usePost(){
    const posts = ref([])
    const post = ref(null)
    const baseURL ="https://jsonplaceholder.typicode.com/posts"
   const llegirPosts=async()=>{
    const response = await fetch(baseURL)
    posts.value = await response.json()

    return{
        posts,
        llegirPosts,
     
    }

   }
}

//punto 2. Un fetch es una función que permite hacer peticiones http
// si hago un fetch sincrono hasta que no se lea toda la info, no continua la ejecución
//punto 3. 