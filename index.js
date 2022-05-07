var code = document.getElementById("codeExample")
code.innerHTML = hightlight(code.innerHTML)

function hightlight(text) {
    var symbols = [
        ['if', 'keyword'],
        ['else', 'keyword'],
        ['true', 'constant'],
        [')', 'pontuation'],
        ['{', 'pontuation'],
        ['}', 'pontuation'],
        ['(', 'pontuation'],
    ]
    for (const symbol in symbols) {
        text = text.replaceAll(symbols[symbol][0], '<span class="'+symbols[symbol][1]+'">'+symbols[symbol][0]+'</span>')
    }
    return text
}
