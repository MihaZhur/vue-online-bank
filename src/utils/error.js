const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Пользователь с таким емайл не был найден',
    INVALID_PASSWORD: 'Пароль набран не верно'
}

export function error(code) {
     return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}