export const getInitials = (name) => {
    const result = name.split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase();
    return result;
}