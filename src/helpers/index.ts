export function formatCurrency(price: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(price);
}

export function strToBoolean(str: string) {
    return str.toLowerCase() === 'true' ? true : false;
}