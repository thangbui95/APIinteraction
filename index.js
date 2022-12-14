const GetData = () => {
    fetch('https://teachingserver.onrender.com/User')
        .then(res => res.json())
        .then(data => {
            let content = document.getElementById('content');
            let firstName = document.getElementById('fn');
            let lastName = document.getElementById('ln');

            let ketqua = data.filter(n => {
                return n.first_name.includes(firstName.value);
            }).filter(n => {
                return n.last_name.includes(lastName.value)
            })
            
            content.innerHTML = ``;

            ketqua.forEach (element => {
                content.innerHTML += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.first_name}</td>
                    <td>${element.last_name}</td>
                    <td>${element.email}</td>
                    <td>${element.gender}</td>
                    <td>${element.ip_address}</td>
                </tr>
                `
            })
        });
}