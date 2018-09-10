((d) => {
  function syntax() {
    preview.textContent = code.value;
    hljs.highlightBlock(preview)
    parsed.textContent = preview.parentNode.outerHTML.replace('id="preview"','')
    changeTheme()
  }

  function changeTheme() {
    theme.href = `https://cdn.rawgit.com/highlightjs/highlight.js/master/src/styles/${themeSelector.value}.css`;
    css.textContent = theme.outerHTML.replace('id="theme"','');
  }

  function lang() {
    if (langSelector.value) {
      for( let i = preview.classList.length; i > 0; i-- ) {
        preview.classList.remove( preview.classList[0] );
      }
      preview.classList.add(langSelector.value)
    }
    syntax()
  }

  addEventListener('DOMContentLoaded', () => {
    syntax(), lang(), addEventListener('keyup', lang)
    themeSelector.addEventListener('change', changeTheme)
  })
})(document);
