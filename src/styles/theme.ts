import {keyframes} from "styled-components";

export const baseTheme = {
    color: {
        /* bg */
        body: "#E9E1FF",
        // body: "linear-gradient(135deg, #E9E1FF, #CDB6FF, #B59EFF);",
        cardBg: "#FFFFFF",

        /* text */
        // title: "#7A59A1",
        title: "#5f457d",
        text: "#333333",
        textTime: "#4D4D4D",

        /* buttons */
        buttonBg: "#C5A3FF",
        buttonText: "#FFFFFF",
        borderBtn: "#7A59A1",
        
        /* section */
        borderSection: "#D6C9FF",

        /* accent */
        accent: "#FF6B6B",
        buttonBgHover: "#FF6B6B", 
        buttonBorderHover: "#CC4E4E",

        /* searchBar */
        searchBg: "#fbfafd",
        
    },
    shadow: {
        navigation : "0px 5px 12px -6px rgba(0,0,0,0.75)",
    }
    // media,
    // size,
    // duration,
    // order
}

/* animations */
export const scaleDescArrow = keyframes`
    0% {
        transform: scale(1);
    } 50% {
        transform: scale(1.2);
    } 100% {
        transform: scale(1);
    }
`

// Фон страницы: #E9E1FF
// Заголовки: #7A59A1
// Текст: #333333 или #4D4D4D
// Кнопки: #C5A3FF с текстом #FFFFFF
// Акценты: #FFD700

// Пример использования:
// Фоновые секции: #A3D8FF или #FFC5A3
// Кнопки и ссылки: #A3FFC5 (мятный зеленый) для основного состояния и #FF6B6B (коралловый) для состояния при наведении
// Текстовые блоки: #FFF9A3 для выделения или подсветки
// Иконки и элементы интерфейса: #FF6B6B (коралловый) для акцентов