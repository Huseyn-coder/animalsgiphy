const maindiv = document.querySelector("#maindiv")
const submit = document.querySelector("#submit")
const inp = document.querySelector("#animal")
const btn = document.querySelector("#button")
var arr = []


submit.addEventListener("click", function (){
    inp.innerHTML = ""
    var a = inp.value
console.log(arr)
if (!arr.includes(a)) {
    arr.push(a)
    var btn1 = document.createElement("button")
    btn1.innerHTML = a
    btn.append(btn1)
} else {
}
btn1.addEventListener("click", function() {
    inp.innerHTML = ""
    maindiv.innerHTML = ""
    var b = btn1.innerHTML
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=PKirzNI9Xvxh6dywW7K6KEyBpk3zY6zk&q=${a}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data[0])
    
        data.data.forEach(item => {
            var p = document.createElement("p");
            p.innerHTML = "Rating: " + item.rating;
      
            var img = document.createElement("img");
            img.src = item.images.original.url;
      
            var div = document.createElement("div");
            div.append(p, img);
      
            maindiv.append(div);
        })
    })
    .catch(error => console.error("Hata oluştu:", error));
    })   
fetch(`https://api.giphy.com/v1/gifs/search?api_key=PKirzNI9Xvxh6dywW7K6KEyBpk3zY6zk&q=${a}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
.then(response => response.json())
.then(data => {
    console.log(data.data[0])

    data.data.forEach(item => {
        var p = document.createElement("p");
        p.innerHTML = "Rating: " + item.rating;
  
        var img = document.createElement("img");
        img.src = item.images.original.url;
  
        var div = document.createElement("div");
        div.append(p, img);
  
        maindiv.append(div);
    })
})
.catch(error => console.error("Hata oluştu:", error));
})
