let dataArr = []
function getData(event) {
    event.preventDefault()

    //ambil nama project*
    const nameProject = document.getElementById('projectname').value
    if(nameProject.length > 37) {
        alert('karakter project name terlalu panjang')
        return
    }

    //ambil technologies*
    const nodeJs = document.getElementById('nodeJs').checked
    const nextJs = document.getElementById('vueJs').checked
    const reactJs = document.getElementById('reactJs').checked
    const typeScript = document.getElementById('php').checked

    //ambil description*
    let description = document.getElementById('description').value 

    let dataObj = {
        nameProject,
        description,
        tech : ''
    }

    //proses filtering hanya memasukkan checkbox yang dipilih saja
    if(nodeJs === true) {
        dataObj.tech += '<i class="fa-brands fa-node"></i>'
    }
    if(nextJs === true) {
        dataObj.tech += '<i class="fa-brands fa-vuejs"></i>'
    }
    if(reactJs === true) {
        dataObj.tech += '<i class="fa-brands fa-react"></i>'
    }
    if(typeScript === true) {
        dataObj.tech += `<i class="fa-brands fa-php"></i>`
    }

    //filter jika ada form yg kosong
    if(nameProject == '' || description == '' || dataObj.tech == '') {
        return alert('Please fill in the form')
    }

    dataArr.push(dataObj)
    renderBlog()
}
    console.log(dataArr)

    function renderBlog(){  
        document.getElementById('card').innerHTML = ""
        for( let i = 0; i<dataArr.length; i++) {
            document.getElementById('card').innerHTML += `<div class="card" onclick="detailPage()">
            <img src="assets/photo/coding.jpg" alt="">
            <p class="name-project-card">${dataArr[i].nameProject}</p>
            <small class="durasi-card">durasi : 3 bulan</small>
            <p class="description-card">${dataArr[i].description}.</p>
            <p style="margin-top: 25px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Tech stack : </p>
            <div class="tech-stack-card">
                ${dataArr[i].tech}
            </div>
            <div>
                <div class="wrap-card-button">
                    <button>edit</button>
                    <button onclick="deleteData(${i})">delete</button>
                </div>
            </div>
        </div>`
    }
    }
    
    function deleteData(i) {
        dataArr.splice(i, 1)
        renderBlog()
    }

    function detailPage() {
        window.location.href = 'myproject.html'
    }
