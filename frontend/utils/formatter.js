export function formatDateToSearch(s) {
    return String(s).replaceAll('-', '');
}

export function formatCnpj(s) {
    return String(s).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1 $2 $3/$4-$5');
}

export function formatMoney(s) {
    return String(s).replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2') 
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
}

export function formatDateToShow(s) {
    return String(s).replaceAll('-', '/');
}