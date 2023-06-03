let bud = document.getElementById("total-budget");
let exp = document.getElementById("expence");
let bal = document.getElementById("balance");
let list = document.getElementById("list");
let budInput = document.getElementById("budget-input");
let erro = document.getElementById("error");
let proer = document.getElementById("proerror");
let datInput = document.getElementById("date-input");
let desInput = document.getElementById("description-input");
let enough = document.getElementById("noenough");
let amounInput = document.getElementById("amount-input");
let nagat = document.getElementById("naga")
let zeroamount = 0;

function fun() {
  zeroamount = budInput.value;
  if (zeroamount === "" || zeroamount < 0) {
    erro.innerHTML = "Insert any positive value";
  } else {
    erro.innerHTML = "";
  }
  bud.innerHTML = zeroamount;
  bal.innerHTML = zeroamount - exp.innerHTML;
  budInput.value = "";
  if (zeroamount === "" || zeroamount < 0) {
    bud.innerHTML = "0.00";
    bal.innerHTML = "0.00";
  }
}

let disbutton = function (loo) {
  let editbut = document.getElementsByClassName("edit");
  Array.from(editbut).forEach((element) => {
    element.disabled = loo;
  });
};

let modelement = function(element, edit = false){
  let divpa = element.parentElement;
  let curbal = bal.innerText;
  let curexp = exp.innerText;
  let pareAmoun = divpa.querySelector(".amount").innerText;
  if (edit) {
    let paretex = divpa.querySelector(".product").innerText;
    let paredat = divpa.querySelector(".date").innerText;
    desInput.value = paretex;
    datInput.value = paredat;
    amounInput.value = pareAmoun;
    disbutton(true);
  }
  bal.innerText = parseInt(curbal) + parseInt(pareAmoun);
  exp.innerText = parseInt(curexp) - parseInt(pareAmoun);
  divpa.remove();
};

let create = function(expeName, expeValue, expeDate) {
  let listcont = document.createElement("div");
  listcont.classList.add("list-cont", "flex-space");
  list.appendChild(listcont);
  listcont.innerHTML = `<p class="product">${expeName}</p><p class="amount">${expeValue}</p><p class="date">${expeDate}</p>`;
  let editbutto = document.createElement("button");
  editbutto.classList.add("fa-solid", "fa-pen-to-square", "edit");
  editbutto.style.fontSize = "15px";
  editbutto.addEventListener("click", function(){
    modelement(editbutto, true);
  });
  let delbutt = document.createElement("button");
  delbutt.classList.add("fa-solid", "fa-trash-can", "delete");
  delbutt.style.fontSize = "15px";
  delbutt.addEventListener("click", function(){
    modelement(delbutt);
  });
  listcont.appendChild(editbutto);
  listcont.appendChild(delbutt);
  document.getElementById("list").appendChild(listcont);
};

function addexpen() {
  if (!amounInput.value || !desInput.value || !datInput.value) {
    proer.innerHTML = "Fill all the fields";
  }
  else {
    proer.innerHTML = "";
  }
  if(amounInput.value < 0 ){
   nagat.innerHTML = "Dont Enter nagative value";
   listcont.innerHTML = "";
  }
  else{
    nagat.innerHTML = ""
  }
  if (bal.innerHTML < amounInput.value ){
       enough.innerHTML = "No enough Budget"
    }else{
      enough.innerHTML = ""
    }
  if(datInput.value === "" || amounInput.value === "" || amounInput.value > bal.innerText || desInput.value === ""){
        listcont.innerHTML = ""
  }
    let expend = parseInt(amounInput.value);
    let plu = parseInt(exp.innerText) + expend;
    exp.innerText = plu;
    let totaba = zeroamount - plu;
    bal.innerText = totaba;
    create(desInput.value, amounInput.value, datInput.value);
    desInput.value = "";
    amounInput.value = "";
    datInput.value = ""
    if (bal.innerText < 0){
      exp.innerText = "0.00"  
 }else{
      enough.innerHTML = "";
    }
  }
