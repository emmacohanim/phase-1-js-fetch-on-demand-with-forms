const init = () => {
  const inputForm = document.querySelector('form')
  //targets DOM element we want (form)

  inputForm.addEventListener('submit', (event) => {
    //type of event: submit
    //callback function to handle event: (event)
    event.preventDefault()
    //overrides form behavior
    //stops form from refreshing automatically
    const input = document.querySelector('input#searchByID')
    console.log(input.value)
    //accesses user input value directly
    //confirms everything is working
    //access input value from event object
    //-> event.target.children[1].value
    
    fetch(`http://localhost:3000/movies/${input.value}`)
    //interpolation used to allow function to fetch specific value based on user request
    .then(response => response.json())
    .then(data =>
    // displaying data from server on page
        {
            const title = document.querySelector('section#movieDetails h4')
            //grabs title
            const summary = document.querySelector('section#movieDetails p')
            // grabs summary
            title.innerText = data.title
            //replaces placeholder text
            summary.innerText = data.summary
            //replaces placeholder text
            console.log(data)
        })
  })
  //fetches data from server based on user input
  //logs objects in console
}

document.addEventListener('DOMContentLoaded', init);