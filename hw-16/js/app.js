function generateKey(length, characters) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = (Math.random() * charactersLength) | 0;
        result += characters[randomIndex];
    }
    return result;
}

const characters = 'qwertyuiefghijklmnotyuiuvwxyz0123456789';
const key = generateKey(13, characters);
console.log(key);
