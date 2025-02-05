function calculatePercentage() {
    let number = document.getElementById("number").value;
    let percentage = document.getElementById("percentage").value;

    if (number === "" || percentage === "") {
        alert("Please enter both values");
        return;
    }

    let result = (number * percentage) / 100;
    document.getElementById("result").innerText = `${percentage}% of ${number} = ${result}`;
}

function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "180px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "180px";
    }
}

function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
}
