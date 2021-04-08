// Create function to toggle the Sidebar Display

function openNav() {
    var x = document.getElementById("toggle-menu")
    var y = document.getElementById("close")
    var z = document.getElementById("open")
    if (x.style.display === "none") {
        x.style.display = "block"
        y.style.display = "block"
        z.style.display = "none"

    } else {
        x.style.display = "none"
        y.style.display = "none"
        z.style.display = "block"
    }
}

// define function to add root element

function addBase() {
    var node1 = document.createElement("UL")
    var node2 = document.createElement("LI")
    node2.className = "Item"
    node2.innerHTML = '<span contenteditable="false" class="editable" onclick="Collapse(this)">Catagory article </span> &nbsp;'
    node2.innerHTML += '<button onclick="addChild(this)"><i class="fas fa-plus"></i></button>'
    node2.innerHTML += '<button onclick="editable(this)"><i class="fas fa-edit"></i></button>'
    node2.innerHTML += '<button onclick="erase(this)"><i class="fas fa-trash"></i></button>'
    node1.appendChild(node2)
    var x = document.getElementById("toggle-menu")
    x.appendChild(node1)
}

// define function to add child element to any existing article

function addChild(el) {
    var node1 = document.createElement("UL")
    var node2 = document.createElement("LI")
    node2.className = "Item"
    node2.innerHTML = '<span contenteditable="false" class="editable" onclick="Collapse(this)">Catagory article </span> &nbsp;'
    node2.innerHTML += '<button onclick="addChild(this)"><i class="fas fa-plus"></i></button>'
    node2.innerHTML += '<button onclick="editable(this)"><i class="fas fa-edit"></i></button>'
    node2.innerHTML += '<button onclick="erase(this)"><i class="fas fa-trash"></i></button>'
    node1.appendChild(node2)
    el.parentElement.parentElement.appendChild(node1)
}

// define function to edit text of any catagory article

function editable(el) {
    var item = el.parentElement
    var span = null;
    for (var i = 0; i < item.childNodes.length; i++) {
        if (item.childNodes[i].className == "editable") {
            span = item.childNodes[i];
            break;
        }
    }
    span.contentEditable = true
    span.focus()
}

// define function to delete the catagory article

function erase(el) {
    var item = el.parentElement.parentElement
    item.remove()

}

// define function to toggle child element display

function Collapse(el) {
    var p = el.parentElement.parentElement
    var c = p.childNodes

    var txt = "";
    var i;
    for (i = 0; i < c.length; i++) {
        if (c[i].tagName == "UL") {
            if (c[i].style.display == "") { c[i].style.display = "none" }
            else {
                c[i].style.display = ""
            }
        }
    }
}