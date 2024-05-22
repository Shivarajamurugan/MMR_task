const menu = document.querySelector('.menu')
const menuList = document.querySelector('nav ul')
menu.addEventListener('click',()=>{
    menuList.classList.toggle('showmenu')
})

const user = document.querySelector('.menu')
const userList = document.querySelector('nav .user')
user.addEventListener('click',()=>{
    userList.classList.toggle('showmenu')
})
