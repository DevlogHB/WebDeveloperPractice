const listForm = document.querySelector('#listForm');
const textInput = document.querySelector('#product');
const qtyInput = document.querySelector('#qty');
const ulList = document.querySelector('#list');

listForm.addEventListener('submit', function(e){

    e.preventDefault();
    console.log(textInput.value, qtyInput.value);

    const textValue = textInput.value;
    const qtyValue = qtyInput.value;
    const liTextItem = document.createElement('li');
    liTextItem.innerText =`${qtyValue} ${textValue}`;

    console.log(liTextItem);
    ulList.append(liTextItem);
    listForm.reset();
});