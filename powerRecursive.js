function power(num, pow) {
    if(pow === 0) return 1;
    return num * power(num, pow - 1);
}

power(4,3)