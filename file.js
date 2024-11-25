// let links = [] //This would allow me save the items i copy but it doesnt really persist, meaning it doesnt remember any links i saved.

const title = document.getElementById("title")
const copiedItems = document.getElementById("listItems")

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0]
    const activeTabId = activeTab.id; 
  });


document.addEventListener("copy", function(event) {
  if (event.clipboardData) {
  const storedData = event.clipboardData.getData("text/plain")
  }
  localStorage.setItem("links", JSON.stringify(allLinks))
  allLinks.push(storedData)
  renderCopiedItems()
    
})


function renderCopiedItems() {

  let allLinks = JSON.parse(localStorage.getItem("links")) || []

  copiedItems.innerHTML = ""
  for (let i = 0; i < allLinks.length; i++ ) {
    copiedItems.innerHTML += `<li class="coloredItem"> ${allLinks[i]} </li>`
  }
  
}                                                                               

renderCopiedItems()