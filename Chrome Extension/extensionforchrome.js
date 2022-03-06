let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
const tabs = [
    {url : "www.shijon.com"}
]
tabBtn.addEventListener ("click", function() {
    //google - chrome extension get current tab
    // we need to get the url of the current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify( myLeads))
        render(myLeads)
    })
})
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
        <a target = '_blank' href="${leads[i]}">${leads[i]}
        </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

//when the user double clicks the delete btn, we clear the local storage, myleads and the DOM 
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)

})
// localStorage.setItem("myLeads","www.examplelead.com")
//here, myLeads is the key while www.examplelead.com is the pair. Even if I delete the above line, the browser will remeber
//console.log(localStorage.getItem("myLeads"))
//the above code will colsole log out www.examplelead.com
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    // console.log( localStorage.getItem("myLeads"))
})









    //innerhtml is used to write html in js
  
    //amother way of doing this is
    //create element
    // set text content
    // append to ul

    // const li = document.createElement("li")
    // li.textContent = myLeads[i] + " "
    // ulEl.append(li)
    //we can use template strings to write the inner html just like html avoiding the lenghty sentences
//template strings is used with `
//google template strings to know more





