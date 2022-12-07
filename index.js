let bandInfo;

// Put your code here
 bandInfo = {
  name: "School of Rock",
  nationality: "USA",
  genre: "Rock",
  members: 6,
  formed: 2015,
  split: "false",
  albums: [
    {
      name: "Rock on",
      released: 2016,
    },
    {
      name: "Noise",
      released: 2017,
    }
  ],

}

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1); 

    