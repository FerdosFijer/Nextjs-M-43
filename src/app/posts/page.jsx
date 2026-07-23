//! 3rd niyom
const getPosts =async () =>{
    try{
        const res =await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    }
    catch(err){
        throw new Error('Failed to fetch posts');
    }
}

//! 2nd niyom
// const getPosts =async () =>{
//     const res =await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
// }


const PostsPage = async() => {
    // const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

    //!2nd and 3rd niyom e korte gele next line likhte hobe
    const posts = await getPosts();

    return (
        <div>
            <h2>Posts are coming soon{posts.length}</h2>
        </div>
    );
};

export default PostsPage; 