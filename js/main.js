const {hash} = window.location;

const decryptedMsg = atob(hash.replace("#", ''))

if(decryptedMsg) {
  document.querySelector("#msg-form").classList.add("hide")
  document.querySelector("#message-show").classList.remove("hide")
  document.querySelector("#message-show").querySelector('h1').innerText = decryptedMsg
}

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault()

  document.querySelector("#msg-form").classList.add("hide")
  document.querySelector("#link-form").classList.remove("hide")
    const input = document.querySelector("#message-input");
    const encryptedMsg = btoa(input.value);

    const inputWithMsg =  document.querySelector("#link-input")
    input.value = ''
    inputWithMsg.value = `${window.location}#${encryptedMsg}`;
    inputWithMsg.select()
})