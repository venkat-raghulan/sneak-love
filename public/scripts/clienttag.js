const service = axios.create();

const addButton = document.getElementById("btn_new_tag");
const tagInput = document.getElementById("new_tag_name");

function addNewTag(event) {
  console.log("foo");
  service
    .get(`/add-tag?label=${tagInput.value}`)
    .then(apiRes => {
      console.log("foo");
    })
    .catch(apiErr => console.log(apiErr));
}

addButton.onclick = addNewTag;
