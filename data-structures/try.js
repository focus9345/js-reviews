
// 
let s = "["

function validParentheses(s) {

    if (s.length % 2 !== 0) {
        return false;
    }

    let stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]]);
        } else {
            if (s[i] !== stack.pop()) {
                return false;
            }
        }
    }
    for (let i = 0; i < stack.length; i++) {
        if (s[i] !== stack.pop()) {
            return false;
        }
    }
    
    return true;
    
};

console.log(validParentheses(s)) // true