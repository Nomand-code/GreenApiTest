import { waMethods } from './methods.js';


const inputId = document.getElementById('userId');
const inputToken = document.getElementById('userToken');
const btnGetSettings = document.getElementById('btnGetSettings');

const btnGetState = document.getElementById('btnGetState');

const messageId = document.getElementById('msgChatId');
const message = document.getElementById('msgText');
const sendMessage = document.getElementById('btnSendMessage');

const fileChatId = document.getElementById('fileChatId');
const fileUrl = document.getElementById('fileUrl');
const btnSendFile = document.getElementById('btnSendFile');

const divRes = document.getElementById('result');

btnGetSettings.addEventListener('click', async () => {
    const id = inputId.value;
    const token = inputToken.value;
    

    // Очищаем предыдущий результат и пишем, что загружаем
    divRes.textContent = "Загрузка...";

    try {
        // Вызываем метод из твоего файла methods.js
        const data = await waMethods.fetchSettings(id, token);
        
        // Выводим результат. Используем JSON.stringify для красивого отображения объекта
        // null, 2 — чтобы были отступы и переносы строк
        divRes.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        
    } catch (error) {
        console.error(error);
        divRes.textContent = "Ошибка при получении данных: " + error.message;
    }
});

btnGetState.addEventListener('click',async () => {
    const id = inputId.value;
    const token = inputToken.value;
    

    // Очищаем предыдущий результат и пишем, что загружаем
    divRes.textContent = "Загрузка...";

    try {
        // Вызываем метод из твоего файла methods.js
        const data = await waMethods.fetchStateInstance(id, token);
        
        // Выводим результат. Используем JSON.stringify для красивого отображения объекта
        // null, 2 — чтобы были отступы и переносы строк
        divRes.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        
    } catch (error) {
        console.error(error);
        divRes.textContent = "Ошибка при получении данных: " + error.message;
    }
})
// ... твой код выше (btnGetSettings уже есть) ...

// 1. Обработчик отправки текстового сообщения
sendMessage.addEventListener('click', async () => {
    const id = inputId.value;
    const token = inputToken.value;
    const chatId = messageId.value;
    const text = message.value;

    if (!chatId || !text) {
        alert("Заполните ID чата и текст сообщения");
        return;
    }

    divRes.textContent = "Отправка сообщения...";

    try {
        const data = await waMethods.sendMessage(id, token, chatId, text);
        divRes.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        divRes.textContent = "Ошибка отправки: " + error.message;
    }
});




btnSendFile.addEventListener('click', async () => {
        const id = inputId.value;
        const token = inputToken.value;
        const chatId = fileChatId.value;
        const url = fileUrl.value;
        
        // Извлекаем имя файла из URL
        const fileName = url.split('/').pop() || 'file';

        if (!chatId || !url) {
            alert("Заполните ID чата и ссылку на файл");
            return;
        }

        divRes.textContent = "Отправка файла...";

        try {
            // В Green API метод обычно называется sendFileByUrl
            const data = await waMethods.sendFileByUrl(id, token, chatId, url, fileName);
            divRes.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        } catch (error) {
            divRes.textContent = "Ошибка отправки файла: " + error.message;
        }
    });

