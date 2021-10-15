const createToolTip = (elem, text) => {
   const toolTip = document.createElement('div');
   toolTip.classList.add('toolTip')
   toolTip.style.position = 'absolute';
   toolTip.innerText = text;
   toolTip.style.bottom = '60%';
   toolTip.style.left = '50%';
   elem.append(toolTip);
}

const button = document.getElementById('example');
const getToolTip = createToolTip(button, 'hello');

// const button = document.getElementById('example');
// button.addEventListener("click", () => createToolTip(button, 'hello'));
