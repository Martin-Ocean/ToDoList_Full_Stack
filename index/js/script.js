// log everything when logged in
fetch('http://localhost:3000/tasks/')
    .then(response => response.json())
    .then(result => {
    const contentDiv = document.getElementById('content');

    for(var i = 0; i < result.length; i++) {
        const listItem = document.createElement('a');
        const listItemText = document.createTextNode(result[i].name);
        listItem.className='list-group-item list-grou-item-action';
        listItem.appendChild(listItemText);
        contentDiv.appendChild(listItem);
    }
})


// button event podt data to server & add content to front end

document.getElementById('addButton').addEventListener('click', () => {
    const contentDiv = document.getElementById('content');
    var itemInput = document.querySelector('input').value;
    const message = "name=" + itemInput;

    //check for null
    if(itemInput === "") {
        // alert window to continue
        alert('To Do item need a value!');
    } else {
        //preventDefault();

        // post data to server
        fetch('http://localhost:3000/tasks/', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: message
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));


        // add content to the front end
        const listItem = document.createElement('a');

        const listItemText = document.createTextNode(itemInput);
        listItem.className += 'list-group-item list-group-item-action';


        listItem.appendChild(listItemText);
        contentDiv.appendChild(listItem);
    }

});
