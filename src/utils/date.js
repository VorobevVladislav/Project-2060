// Вспомогательные функции для работы с форматами дат
export const DateUtils = {
    toISOLocal: (date) => {
        if (!date) return null;
        const d = new Date(date);
        return d.toISOString();
    },

    fromISO: (isoString) => {
        if (!isoString) return null;
        return new Date(isoString);
    },

    formatDateTime: (date) => {
        if (!date) return '';
        return new Date(date).toLocaleString('ru-RU');
    },
};