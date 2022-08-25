const datos_user = async()=>{
    const datos = await fetch('https://jsonplaceholder.typicode.com/users');
    const rq = await datos.json();
    printUser(rq);
}
datos_user();
function printUser(rq){
    let user = rq;
    const print = document.getElementById('datos_api');
    user.forEach((element)=>{
        const {id,name,username,email,address} = element;
        const street = address.street;
        var th = document.createElement('th');
        var tr = document.createElement('tr');
        var Name= document.createElement('td');
        var Username= document.createElement('td');
        var Email= document.createElement('td');
        var Street= document.createElement('td');

        tr.classList.add('table-active');
        th.textContent=id;
        Name.textContent = name;
        Username.textContent = username;
        Email.textContent = email;
        Street.textContent = street;
        tr.append(th,Name,Username,Email,Street);
        print.appendChild(tr)
    })

}