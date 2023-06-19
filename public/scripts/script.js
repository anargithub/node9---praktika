const btn = document.querySelector('#btnOk')
const btnDel = document.querySelector('#btnDel')


console.log('www')
btn.addEventListener('click', async(e) => {
    e.preventDefault()
    console.log('qqq')
    const form = document.querySelector('form')
    const body = Object.fromEntries(new FormData(form).entries())

    const response = await fetch('/json/new', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)}
    )


    const data = await response.json()
    console.log(data)
    
    const formDiv = document.querySelector('#formDiv');

    for (let [key, value] of Object.entries(data)) {
        console.log(key, value)
        // formDiv.innerHTML = '' 
        formDiv.innerHTML += 
        `<p>name: ${value.name}, lastname: ${value.lastname}</p>
        <button id="btnDel" onclick="deletePost(${key})">delete</button>`
    }

})


function deletePost(key) {
    const data = fetch(`/json/delete/${key}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    
  }