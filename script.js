function runCode() {
    const code = document.getElementById("code").value;
    const iframe = document.getElementById("output");
    iframe.srcdoc = code;
}
