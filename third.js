window.onload = function() {
    var nameGet = document.getElementById('nameGet');
    var name = localStorage.getItem('userName');
    if (name) {
        nameGet.textContent = name; 
    } else {
        nameGet.textContent = "No name found"; 
    }
};
let isTextVisible = false;
function show(){
    var text = document.querySelectorAll(".text")
    var rollnom = document.getElementById('rollnomGet');
    var rollnum = localStorage.getItem('RollNum');
    var EmailGet = document.getElementById('EmailGet');
    var EmailGets = localStorage.getItem('EmailGet');

    if (isTextVisible) {
        text.forEach(function(item) {
            item.style.display = 'none'; 
        });
    } else {
        text.forEach(function(item) {
            item.style.display = 'block'; 
        });
    } 

    if(rollnum && EmailGets){
        rollnom.textContent = rollnum;
        EmailGet.textContent = EmailGets;
    } else {
        rollnom.textContent = "No name found";
        EmailGet.textContent = "No email found";
    }
    isTextVisible = !isTextVisible;
}


const addPostButton = document.querySelector('.post');
const fileInput = document.querySelector('#fileInput');
const postingContainer = document.querySelector('.posting');


let posts = JSON.parse(localStorage.getItem('posts')) || [];


function renderPosts() {
    postingContainer.innerHTML = '';
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-item');

     
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('img-wrapper');

     
        const img = document.createElement('img');
        img.classList.add('image-preview');
        img.src = post; 

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deletePost(index));

        imgWrapper.appendChild(img);
        imgWrapper.appendChild(deleteBtn);

        postDiv.appendChild(imgWrapper);

        const downloadBtn = document.createElement('button');
        downloadBtn.classList.add('download-btn');
        downloadBtn.textContent = 'Download';
        downloadBtn.addEventListener('click', () => downloadImage(post));

        postDiv.appendChild(downloadBtn);

        postingContainer.appendChild(postDiv);
    });
}

function deletePost(index) {
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    renderPosts();
}

function downloadImage(imageUrl) {
    const a = document.createElement('a');
    a.href = imageUrl; 
    a.download = 'downloaded_image'; 
    document.body.appendChild(a); 
    a.click(); 
    document.body.removeChild(a); 
}
addPostButton.addEventListener('click', () => {
  
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          
            const base64Image = reader.result;  
            posts.push(base64Image);      
            localStorage.setItem('posts', JSON.stringify(posts));    
            renderPosts();
        };
        reader.readAsDataURL(file); 
    }
});

renderPosts();


document.getElementById('Course').addEventListener("click", function(){
    window.location.href = "index3.html";
});
document.getElementById('Classes').addEventListener("click", function(){
    window.location.href = "index4.html";
});
document.getElementById('Onine Classes').addEventListener("click", function(){
    window.location.href = "index5.html";
});

document.getElementById("nav").addEventListener("click", function (){
    var navbar = document.getElementById("navbar");
    navbar.style.left = "0%"
})
document.getElementById("exit").addEventListener("click", function (){
    var navbar = document.getElementById("navbar");
    navbar.style.left = "-100%"
})