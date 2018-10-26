# **Purpose**

The purpose of this little file was to extract the data from an older html setup so I could easily access the info in a json file instead of having to copy and paste each link and description. 

In the end, this would've been faster if I had copy/pasted everything into a new file since I had a few more hiccups than I thought I would run into. I had to restructure how each object was built with the for loop iterating over chunks of strings; using a constructor, the loop used to create a new object with each iteration, now it only creates a new object when the requirements are met as seen in the snippet below. I limited the amount of objects pushed to the final array to be written to a `json` file by using the following:

```javascript
if(piPath === lastDat){
        swath = false;
    } else {
        swath = true;
    }
    if(swath === true){
        let entry = new PortDat(link, title, piPath);
        arrFileWrite.push(entry);
    }
    if(piPath !== undefined){
        lastDat = piPath;
    }
```

`piPath` is the picture pathing; the pathing may need to be changed depenging on how I decide to structure the new portfolio I plan on building. The above code snippet tells the code to only push to the array, `arrFileWrite`, when the picture pathing has changed. `piPath` will only be defined when it comes across a string that begins with `src=`; no object will be created and pushed if `piPath` is undefined or if it equals the last iteration's `piPath`, which is defined as `lastDat`.

---
---
<br><br><br>

# **The Code**

*`toRead` is defined in portReader.js as html in a string format*

```javascript
const fs = require('fs');
const arrFileWrite = [];
function PortDat(link, title, piPath){
    this.link = link;
    this.title = title;
    this.piPath = piPath;
};

const reader = toRead.split(' ');
let link, title, piPath, lastDat, swath;
for(let i = 0; i < reader.length; i++){
    if(reader[i].includes('href=')){
        link = reader[i].slice(5).replace(/"/g, '');
    };
    if(reader[i].includes('<h3>')){
        let s = i;
        let wordPass = reader[i];
        while(!reader[s].includes('</h3>')){
            s++;
            wordPass += reader[s]
        };
        title = wordPass.slice(4, wordPass.length -6);
    };
    if(reader[i].includes('src=')){
        piPath = reader[i].slice(4).replace(/"/g, '');
    };
    if(piPath === lastDat){
        swath = false;
    } else {
        swath = true;
    }
    if(swath === true){
        let entry = new PortDat(link, title, piPath);
        arrFileWrite.push(entry);
    }
    if(piPath !== undefined){
        lastDat = piPath;
    }
};

fs.writeFile('portData.json', JSON.stringify(arrFileWrite, null, 4), function(err){
    if(err) throw err;
    console.log('savederundo!');
});
```

# Why I did this?

Three parts of wanting to avoid tedious repetitive action, twenty parts of finding a fun way to solve a small problem. It took a bit longer, I think, than straight copy/pasting, but it was a lot more fun.