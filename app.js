
dataObj();


let objArray=[];
const priceMAx=[];


console.log(priceMAx);



function dataObj(){

    fetch('produse.json')
        .then(response => response.json())
        .then((result)=>{
         result.forEach(element=>{

             objArray.push(element);
             //
             objArray.forEach((item)=>{
                 priceMAx.push(element.price);
             })
             //



             const data=document.querySelector(".data-main");
             const date=document.createElement("div");
                date.classList.add("card");
                date.style.width="18rem";
                const holder = document.createElement("div");

             const img=document.createElement("img");
                     img.classList.add("card-img-top");
                     img.src=element.img;
                     date.appendChild(img);

             const price=document.createElement("h3");
                price.classList.add("btn");
                price.classList.add("btn-lg");
                price.classList.add("btn-primary");

                price.innerHTML=` ${element.price} MDL`;


             const text=document.createElement("h5");
                text.classList.add("card-text");
                text.innerHTML=element.name;
                holder.appendChild(text);
             holder.appendChild(price);

                holder.classList.add("card-body");
                date.appendChild(holder);
                data.appendChild(date);
         });
 })
}
function sortMaxPrice(){

    objArray.sort((a,b)=>{
        return b.price-a.price;
    })

    main.innerHTML='';
    objArray.forEach((element)=>{

        const data=document.querySelector(".data-main");
        const date=document.createElement("div");
        date.classList.add("card");
        date.style.width="18rem";
        const holder = document.createElement("div");

        const img=document.createElement("img");
        img.classList.add("card-img-top");
        img.src=element.img;
        date.appendChild(img);

        const price=document.createElement("h3");
        price.classList.add("btn");
        price.classList.add("btn-lg");
        price.classList.add("btn-primary");

        price.innerHTML=` ${element.price} MDL`;


        const text=document.createElement("h5");
        text.classList.add("card-text");
        text.innerHTML=element.name;
        holder.appendChild(text);
        holder.appendChild(price);

        holder.classList.add("card-body");
        date.appendChild(holder);
        data.appendChild(date);

    })

}
function sortMinPrice(){
    objArray.sort((a,b)=>{
        return a.price-b.price;
    })

    main.innerHTML='';
    objArray.forEach((element)=>{

        const data=document.querySelector(".data-main");
        const date=document.createElement("div");
        date.classList.add("card");
        date.style.width="18rem";
        const holder = document.createElement("div");

        const img=document.createElement("img");
        img.classList.add("card-img-top");
        img.src=element.img;
        date.appendChild(img);

        const price=document.createElement("h3");
        price.classList.add("btn");
        price.classList.add("btn-lg");
        price.classList.add("btn-primary");

        price.innerHTML=` ${element.price} MDL`;


        const text=document.createElement("h5");
        text.classList.add("card-text");
        text.innerHTML=element.name;
        holder.appendChild(text);
        holder.appendChild(price);

        holder.classList.add("card-body");
        date.appendChild(holder);
        data.appendChild(date);

    })

}
function sortBrand(){
    objArray.sort((a,b)=>{
        return (a.name>b.name)?1:-1;
    })
    main.innerHTML='';
    objArray.forEach((element)=>{

        const data=document.querySelector(".data-main");
        const date=document.createElement("div");
        date.classList.add("card");
        date.style.width="18rem";
        const holder = document.createElement("div");

        const img=document.createElement("img");
        img.classList.add("card-img-top");
        img.src=element.img;
        date.appendChild(img);

        const price=document.createElement("h3");
        price.classList.add("btn");
        price.classList.add("btn-lg");
        price.classList.add("btn-primary");

        price.innerHTML=` ${element.price} MDL`;


        const text=document.createElement("h5");
        text.classList.add("card-text");
        text.innerHTML=element.name;
        holder.appendChild(text);
        holder.appendChild(price);

        holder.classList.add("card-body");
        date.appendChild(holder);
        data.appendChild(date);

    })
}

document.getElementById('maxPrice').addEventListener('click',sortMaxPrice);
document.getElementById('minPrice').addEventListener('click',sortMinPrice);
document.getElementById('brand').addEventListener('click',sortBrand);

const inputRange=document.getElementById('input-range');
const inputText=document.getElementById('textInput');
inputRange.addEventListener("input",function (){
    inputText.value=inputRange.value;
})

console.log( priceMAx);