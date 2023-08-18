# EcoUrbanPulse
## Развертывание проекта:
### Установка СУБД:
1) Переходим по ссылке(https://sbp.enterprisedb.com/getfile.jsp?fileid=1258625)
2) Открываем установленный файл
3) Пропускаем все до вкладки "Password"
4) Устанавливаем и дублируем пароль - "1234"
5) Доходим до вкладки "Port"
6) Устанавливаем порт "5433"
7) Locale - [English-Unated States]
8) Next -> Next
9) Ждем завершения загрузки
10) В появившемся окне снимаем галочку с Stack Builder...
11) Открываем pgAdmin4 и вводим пароль "1234"

### Развертывание бэкенда:
1) Устанавлниваем python 3.9.7
2) Переходим в папку backend

    ```
    python -m venv venv
    ```

    ```
    venv\Scripts\Activate
    ```

    ```
    pip install -r requirements.txt
    ```
    
3) Миграция базы
    3.1 Переходим в папку приложения
    ```
    cd EcoUrbanPulse
    ``` 
    3.2 Применяем миграцию
    ```
    python manage.py migrate
    ```
4) Запуск приложения 
    ```
    cd..
    ```

    ```
    python manage.py runserver
    ```
    