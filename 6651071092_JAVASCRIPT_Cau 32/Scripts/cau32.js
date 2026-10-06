function display_random_image(){
  const ds=[
    {src:"Images/vatli1.jpg",w:"240"},
    {src:"Images/vatli2.jpg",w:"320"},
    {src:"Images/vatli3.jpg",w:"500"}
  ];
  const r=ds[Math.floor(Math.random()*ds.length)];
  const img=document.createElement("img");
  img.src=r.src;
  img.width=r.w;   
  const c=document.getElementById("hinh");
  c.innerHTML="";
  c.appendChild(img);
}