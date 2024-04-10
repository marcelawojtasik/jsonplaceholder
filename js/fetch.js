let getNameFetch = (idPost) => {
    try{
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then ((res)=>{return res.json()})       
        .then((data) => //console.log(data))

        fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`))
        .then((res)=>{return res.json()})
        .then((user)=>{ //console.log(user);
            document.write(`${user.name} vive en ${user.address.street} `)
        })

    } catch (error) {
        console.log(error);
    }
};

getNameFetch(33);

//`https://jsonplaceholder.typicode.com/posts/${idPost}`)
//(`https://jsonplaceholder.typicode.com/users/${post.userId}`)