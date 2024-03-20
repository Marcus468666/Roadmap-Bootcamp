// console.log('works!');

// document.getElementById('info').innerText = `Welcome Krish!`
// let loggedInfo = document.createElement('p');

// loggedInfo.textContent = 'This is a new paragraph'

// document.body.appendChild(loggedInfo);
// let list = document.createElement('ul');

// let listItem1 = document.createElement('li');
// listItem1.textContent = 'Coffee';

// let listItem2 = document.createElement('li');
// listItem2.textContent = 'Tea'

// list.appendChild(listItem1);
// list.appendChild(listItem2);

// document.body.appendChild(list);
// let items=['coffee','tea','lemon tea','green tea','lemon juice'];

// let list = document.createElement('ul');

// items.forEach(item => {
//     let listItem = document.createElement('li');
//     listItem.textContent = item;
//     list.appendChild(listItem);
// }); 

// list.style.listStyleType = 'circle'

// list.setAttribute('style', 'list-style-type:circle;')
// list.style.color = 'green';

// document.body.appendChild(list);

let parent = document.getElementById('parent');
let header = document.createElement('h1');
header.textContent = 'append header';

let paragraph = document.createElement('p');

paragraph.textContent = 'appendChild vs append methods';
// parent.append(paragraph, header);

// parent.appendChild(header);
// parent.appendChild(paragraph);

// let link = document.createElement('a');
// link.setAttribute('href', 'https://google.com');
// link.setAttribute('target', '_blank');
// link.setAttribute('title','open Link in New Tab');

// link.textContent = 'Visit Google';

// document.body.append(link);
