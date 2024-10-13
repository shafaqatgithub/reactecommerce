

export const formatPrice = (price) => {
    if (isNaN(price) || price === null) return "$0.00"; // Fallback to a default value
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD"
    }).format(price);
}

