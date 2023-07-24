const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,1)),url('https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Vijay_Master_21012021_1200x800.jpg?itok=RN_ohHeH')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Got the man with the plan right here😎"
    }, 200)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 29, 29, 0.3), rgba(231, 80, 236, 0.479)),url('https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Vijay_Master_21012021_1200x800.jpg?itok=RN_ohHeH')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Bringing swag with the man right here 🐱‍🏍"
    }, 400)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(2, 255, 213, 0.3), rgba(255, 23, 23)),url('https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Vijay_Master_21012021_1200x800.jpg?itok=RN_ohHeH')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Livin' up and sippin' on beer💀"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 0, 0, 0.3), rgb(3, 255, 45)),url('https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Vijay_Master_21012021_1200x800.jpg?itok=RN_ohHeH')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Yeah, clap for me man right here🎶"
    }, 800)
}

setInterval(changeText, 900)