let getNameAxios = async (idPost) => {
    try{
        let resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        console.log(resPost);
        let resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resUser);
        document.write(`${resUser.data.name} vive en ${resUser.data.address.street}.`);
    } catch (error) {
        console.log(error)
    }
}

getNameAxios(64);

/*     axios.get(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
  .then(function (response) {
    // Manejar la respuesta exitosa aquí
    console.log(response.data);
  })
  .catch(function (error) {
    // Manejar el error aquí
    console.error(error);
  });
 */