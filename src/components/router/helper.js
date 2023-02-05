export async function loaderPostData() {
  let contacts = await getContacts()
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
  return { contacts };
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

export async function SumOfData() {
  let result = await Sum(10, 20);
  console.log('Result Is Loading........');
  return result;
}

async function Sum(a, b) {
  return Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof a != "number" || typeof b != "number") {
        return reject(new TypeError("An Error Ocurred"));
      }
      resolve(a + b);
    }, 2000);
  });
}
