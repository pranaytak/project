document.getElementById('searchInput').addEventListener('input', function () {
    const searchText = this.value.trim();
    searchText(searchText);
});

// Trigger search when the search button (logo) is clicked
document.querySelector('.search-container button').addEventListener('click', function () {
    const searchText = document.getElementById('searchInput').value;
    searchText(searchText);
});

function searchText(text) {
    const searchText = text.toLowerCase().trim();
    const elements = document.querySelectorAll(""); // Target specific elements for highlighting
    let textFound = false;

    elements.forEach(element => {
        const originalText = element.dataset.originalText || element.textContent;
        let newText = originalText;

        if (searchText !== '') {
            newText = originalText.replace(new RegExp(`\\b${searchText}\\b`, "ig"), match => {
                textFound = true;
                return `<span class="highlight">${match}</span>`;
            });
        }

        element.innerHTML = newText;
    });

    if (!textFound) {
        alert("Sorry! This service is not available.");
    } else {
        scrollToFirstHighlight();
    }
}

// Clear search highlights when search bar is cleared
document.getElementById('searchInput').addEventListener('input', function () {
    const searchText = this.value.trim();
    if (searchText === '') {
        const highlightedText = document.querySelectorAll('.highlight');
        highlightedText.forEach(node => {
            const parent = node.parentNode;
            parent.replaceChild(document.createTextNode(node.textContent), node);
        });
    }
});

function scrollToFirstHighlight() {
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        const topOffset = highlight.getBoundingClientRect().top;
        if (topOffset > window.innerHeight) {
            window.scrollTo({
                top: topOffset + window.scrollY - (window.innerHeight / 2),
                behavior: 'smooth'
            });
        }
    }
}

function toggleMenu() {
    var menu = document.getElementById("profileMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Close the menu when clicking outside
window.onclick = function (event) {
    if (!event.target.matches('.profile img')) {
        var menus = document.getElementsByClassName("menu");
        for (var i = 0; i < menus.length; i++) {
            var menu = menus[i];
            if (menu.style.display === "block") {
                menu.style.display = "none";
            }
        }
    }
}

/*profile logic along with toggle and signOut*/
//for creds
        function toggleMenu() {
            var menu = document.getElementById("profileMenu");
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }

        // Close the menu when clicking outside
        window.onclick = function (event) {
            if (!event.target.matches('.profile img')) {
                var menus = document.getElementsByClassName("menu");
                for (var i = 0; i < menus.length; i++) {
                    var menu = menus[i];
                    if (menu.style.display === "block") {
                        menu.style.display = "none";
                    }
                }
            }
        }
   
        let userCreds = JSON.parse(sessionStorage.getItem("user-creds"));
        let userInfo = JSON.parse(sessionStorage.getItem("user-info"));
        
        let msgHead = document.getElementById('msg');
        let greetHead = document.getElementById('greet');
        let signOutBtn = document.getElementById('signOutButton');
        
        
      
        let signOut = ()=>{
            sessionStorage.removeItem("user-creds");
            sessionStorage.removeItem("user-info");
            window.location.href = 'login.html'
        }

        let checkCred = ()=>{
            if (!sessionStorage.getItem("user-creds"))
                window.location.href = 'login.html'
            else {
                //msgHead.innerText = `You are LoggedIn with "${userCreds.email}"`;
                
                greetHead.innerText = `First Name: ${userInfo.firstName}\n\nLast Name: ${userInfo.lastName}\n\nEmail Id: ${userCreds.email}\n\nPhone Number: ${userInfo.phoneNumber}\n\nAddress: ${userInfo.address}`;

            
            }
            
        }

        window.addEventListener('load', checkCred);
        signOutBtn.addEventListener('click', signOut);
   