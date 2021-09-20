//1.AJAX 请求js
getJs.onclick=()=>{
    const request =new XMLHttpRequest()
    request.open("GET","/aj.js")
    request.onreadystatechange=()=>{
        if(request.readyState===4 &&request.status===200){
            const obj =document.createElement('script')
            obj.innerHTML=request.response
            document.body.appendChild(obj)
        }else if(request.readyState===4 &&request.status!==200){
            alert('加载失败')
        }
    }
    request.send()
}


//2.AJAx请求css
getCss.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',"/style.css")
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            const style=document.createElement('style')
            style.innerHTML=request.response
            document.head.appendChild(style)
        }else if(request.readyState===4&&request.status!==200){
            alert('加载失败')
        }
    }
    request.send()
}

//3.AJAx请求html
getHtml.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open("GET","/aj.html")
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            const div=document.createElement("div")
            div.innerHTML=request.response
            xxx.appendChild(div)
        }
    }
    request.send()
}

//4.AJAx请求xml
getXml.onclick=()=>{

    const request=new XMLHttpRequest()
    request.open("GET","/main.xml")

    request.onreadystatechange=()=>{

        if(request.readyState===4&&request.status===200){
            const obj=request.responseXML

            let content=request.responseXML.querySelector('message').textContent.trim()

            yyy.innerText=content
        }
    }
    request.send()
}


//5.AJAX 请求json
getJson.onclick=()=>{

    const request=new XMLHttpRequest()
    request.open("GET","/package.json")

    request.onreadystatechange=()=>{

        if(request.readyState===4&&request.status===200){
            let obj=JSON.parse(request.response)
            yyy.innerText=obj.name
        }
    }
    request.send()
}

//加载json分页
let n=1
getPlus.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open("GET",`/page${n+1}.json`)
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            let obj=JSON.parse(request.response)
            let xx=obj.map(item=>{
               let li= document.createElement("li")
                li.innerText=item.value
                ll.appendChild(li)
            })

        }}
    n=n+1
    request.send()
}
