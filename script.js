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