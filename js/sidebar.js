let sidebar = true

function toggleSidebar() {
    if (sidebar) {
        sidebar = false

        document.getElementById('nav_sidebar').style.marginLeft = "-65px"
        document.getElementById('hide').style.left = "75px"
        document.getElementById('hide').style.rotate = "180deg"
    } else {
        sidebar = true

        document.getElementById('nav_sidebar').style.marginLeft = "0px"
        document.getElementById('hide').style.left = "10px"
        document.getElementById('hide').style.rotate = "0deg"
    }
}