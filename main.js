// inputs
let productType = document.getElementById("type-select");
let productName = document.getElementById("product-name");
let productCount = document.getElementById("product-count");

// buttons
let addProduct = document.querySelector(".add-product");
let clearProduct = document.querySelector(".clear-list");
let productList = document.querySelector(".products-list");

addProduct.addEventListener("click", Product);

let productArray = [];
function Product() {
  let productTypeValue = productType.value;
  let productNameValue = productName.value;
  let productCountValue = productCount.value;
  if (
    productTypeValue != "" &&
    productNameValue != "" &&
    productCountValue != ""
  ) {
    let obj = {
      productType: productTypeValue,
      productName: productNameValue,
      productCount: productCountValue,
    };
    productArray.push(obj);
  } else {
    alert("Вы не заполнили поля");
  }
  let productWithElem = "";
  productArray.forEach((value, i) => {
    productWithElem += `<div class="product-item" id=${value.productId}>
                          Тип:${value.productType} Название:${value.productName} Количество:${value.productCount}  
                          <button class="delete" onclick={btnClick(${i})}>Удалить</button> </div>`;
  });

  productList.innerHTML = productWithElem;

  productType.value = "";
  productName.value = "";
  productCount.value = "";
}

clearProduct.addEventListener("click", clearAllProducts);
function clearAllProducts() {
  productList.innerHTML = "";
  productArray = [];
}

function btnClick(e) {
  let array = productArray.filter((item, i) => i != e);
  productArray = array;
  console.log(e);
  let productWithElem = "";

  productArray.forEach((value, i) => {
    productWithElem += `<div class="product-item" id=${value.productId}>
                          Тип:${value.productType} Название:${value.productName} Количество:${value.productCount}  
                          <button class="delete" onclick={btnClick(${i})}>Удалить</button> </div>`;
  });
  productList.innerHTML = productWithElem;
}



// Домашнее задание
let students = [
  { имя: 'Иван', фамилия: 'Петров', номер_потока: 101 },
  { имя: 'Мария', фамилия: 'Сидорова', номер_потока: 102 },
  { имя: 'Петр', фамилия: 'Иванов', номер_потока: 101 }
];

let studentsListDiv = document.getElementById('students-list');

students.forEach(student => {
  let studentDiv = document.createElement('div');
  studentDiv.classList.add('student');
  studentDiv.textContent = `Имя: ${student.имя}, Фамилия: ${student.фамилия}, Поток: ${student.номер_потока}`;
  studentsListDiv.appendChild(studentDiv);
});