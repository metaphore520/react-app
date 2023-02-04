export async function loaderPostData() {
  let contacts = await getContacts()
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
  //console.log(contacts);
  return { contacts };

  //   return {
  //     data: contacts
  //       .then((response) => {
  //         //console.log(response);
  //         response.json();
  //       })
  //       .then((json) => {
  //         return json;
  //       }),
  //   };
}

async function getContacts() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
  // .then((response) => {
  //     console.log('----------------------------');
  //   console.log(response);
  //   response.json();
  // })
  // .then((json) => {
  //   return json;
  // });
}
