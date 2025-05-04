function showSidebar(){
    const sidebar = document.getElementsByTagName("ul")[0]
    const brandName = document.querySelector(".logo")
    const hamburger = document.querySelector('.hamburger')
    sidebar.style.display = 'block'; 
    brandName.style.display = 'none'
    hamburger.style.display = 'none'
}

function hideSidebar(){
    const sidebar = document.getElementsByTagName("ul")[0]
    const brandName = document.querySelector(".logo")
    const hamburger = document.querySelector('.hamburger')
    sidebar.style.display = 'none'
    brandName.style.display = 'block'
    hamburger.style.display = 'block'
}



















