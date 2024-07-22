document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const code = document.getElementById('code').value;
    
    fetch('/public/patient.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, code })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('waitTime').innerText = `Approximate wait time: ${data.wait_time} minutes`;
    })
    .catch(error => console.error('Error on patient fetch:', error));
});
