module.exports = function check(str, bracketsConfig) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let isOpening = false;

        for (let j = 0; j < bracketsConfig.length; j++) {
            if (char === bracketsConfig[j][0]) {
                if (char === bracketsConfig[j][1] && stack[stack.length - 1] === char) {
                    stack.pop(); 
                } else {
                    stack.push(char); 
                }
                isOpening = true;
                break;
            }
        }

        if (!isOpening) {
            if (stack.length === 0) {
                return false; 
            }
            let lastOpening = stack.pop();
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (lastOpening === bracketsConfig[j][0] && char !== bracketsConfig[j][1]) {
                    return false;
                }
            }
        }
    }

    return stack.length === 0; 
}
