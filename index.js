'use strict';

document.addEventListener('DOMContentLoaded', function() {

});

window.onload = function() {

//selectors
const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list'); //HTMLのUlクラス名"todo-list"を選択

console.log(textInput);
textInput.addEventListener('keydown', e => {
    const text = textInput.Value.trim();

    if(text === '' || e.key !== 'Enter'){
        return;
    }

    
    //それぞれのタグを作る
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    //各タグに値を追加
    li.classList.add('list-item');
    span.classList.add('todo-text');
    span.textContent = text;

    //ボタン属性
    button.textContent = "Delete";
    button.type = 'button';
    button.classList.add('Delete-button');
    //削除ボタン
    button.addEventListener('click', e => {
        todoList.removeChild(e.target.closest('li'));
     });

    //liタグに【ボタン】タグと【スパン】タグを追加
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

    textInput.Value = '';
});


