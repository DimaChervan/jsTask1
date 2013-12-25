var Func = {
    progress: function (a,q,n) {
        var sum;
        q = q < 0 ? Math.abs(q) : q;
        sum = a * (1 - Math.pow(q, n)) / (1 - q) ;
        return sum;
    },

    fibonachi: function (n) {
        var a = 1,
            b = 1,
            i = 3,
            c;
        for (; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    },

    bubbleSort: function (array) {
        var length = array.length,
            i = 0,
            a,j;
        for (; i < length - 1; i++) {
            j = 0;
            for (; j < length - 1 - i; j++) {
                if (array[j + 1] < array[j]) {
                    a = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = a;
                }
            }
        }
        return array;
    }
};
console.log("Геометричекая прогрессия = " + Func.progress(4,4,5)); //b1 = 4, q = 4, n = 5
console.log("Фибоначи = " + Func.fibonachi(7));
console.log("Bubble sort = " + Func.bubbleSort([4,5,10,2,6]));
