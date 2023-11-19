


function generateHash() {
    const hashType = document.getElementById('hashType').value;
    const inputText = document.getElementById('inputText').value;


    let hashResult;

    switch (hashType) {
        case 'md5':
            hashResult = CryptoJS.MD5(inputText).toString();
            break;
        case 'sha1':
            hashResult = CryptoJS.SHA1(inputText).toString();
            break;
        case 'sha256':
            hashResult = CryptoJS.SHA256(inputText).toString();
            break;
        case 'sha512':
            hashResult = CryptoJS.SHA512(inputText).toString();
            break;
        default:
            hashResult = 'Escolha um tipo de hash válido';
    }

    document.getElementById('hashResult').innerText = `Hash ${hashType.toUpperCase()}: ${hashResult}`;
}