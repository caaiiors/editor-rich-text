function formatarNegrito () {
  document.execCommand('bold', false, null)
}
function formatarItalico () {
  document.execCommand('italic', false, null)
}
function formatarSublinhado () {
  document.execCommand('underline', false, null)
}
function limparFormatacao () {
  document.execCommand('removeFormat', false, null)
}

function removerPlaceholder() {
  let editor = document.getElementById("editor");
  if (editor.textContent.trim() === editor.getAttribute("placeholder")) {
      editor.textContent = '';
  }
}

function restaurarPlaceholder() {
  let editor = document.getElementById("editor");
  if (editor.textContent.trim() === '') {
      editor.textContent = editor.getAttribute("placeholder");
  }
}

function aumentarFonte() {
  var editor = document.getElementById("editor")
  var estilo = window.getComputedStyle(editor, null).getPropertyValue('font-size')
  var tamanhoAtual = parseFloat(estilo) // pega o tamanho atual da fonte
  editor.style.fontSize = (tamanhoAtual + 1) + 'px' // adiciona 1 pixel ao tamanho atual
}

function diminuirFonte() {
  var editor = document.getElementById("editor")
  var estilo = window.getComputedStyle(editor, null).getPropertyValue('font-size')
  var tamanhoAtual = parseFloat(estilo)
  editor.style.fontSize = (tamanhoAtual - 1) + 'px'
}