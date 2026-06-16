function analyzeValue(n) {
    let value = {
        input: n,
        type: typeof n,
        isTruthy: Boolean(n),
        isNullOrUndefined: n == null,
        isReferenceType: (typeof n ==='object' || typeof n === 'function') && n != null
    }

    return value
}

console.log(analyzeValue("hello"))