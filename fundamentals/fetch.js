
import fs from 'fs/promises'

fetch('https://w.wallhaven.cc/full/2y/wallhaven-2yp6gg.png')
.then((response)=> response.arrayBuffer())
.then((image)=>{
  fs.writeFile('wallpaper.png', Buffer.from(image))
})