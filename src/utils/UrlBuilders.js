export function buildNativeApiUrl(...parts) {
    return `https://timetable.spbu.ru/api/v1/${parts.join('/')}`;
}

export function buildApiUrl(...parts) {
    return `https://timetable.spbu.ru/${parts.join('/')}`;
}