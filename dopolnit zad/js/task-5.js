/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/
'use strict';
const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
function createList() {
  const createList = document.querySelector('ul.list');
  const createLiHtml = document.createElement('li');
  createLiHtml.textContent = 'HTML';
  const createLiCss = document.createElement('li');
  createLiCss.textContent = 'CSS';
  const createLiJs = document.createElement('li');
  createLiJs.textContent = 'JavaScript';
  const createLiReact = document.createElement('li');
  createLiReact.textContent = 'React';
  const createLiNode = document.createElement('li');
  createLiNode.textContent = 'Node';

  createList.append(
    createLiHtml,
    createLiCss,
    createLiJs,
    createLiReact,
    createLiNode,
  );
  return createList;
}
createList();
