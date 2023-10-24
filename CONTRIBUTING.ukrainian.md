# Посібник для авторів  

Ця документація містить набір інструкцій, які допоможуть вам зробити внесок в наш проєкт.

**Не існує маленьких внесків. Кожен внесок важливий**

# Як долучитися до проєкту 👩‍💻👨‍💻

## Знайдіть issue

- Погляньте на існуючі issues або створіть власні.
- Якщо ви хочете працювати над питанням, і хтось інший над ним не працює, прокоментуйте, що ви хотіли б зробити задля його вирішення. 

## Форкніть проєкт

- Форкніть цей репозиторій. Це створить локальну копію цього репозиторію на вашій сторінці GitHub. Зберігайте посилання на оригінальний проект у віддаленому висхідному потоці.

```
$ git clone https://github.com/<your-username>/Focusly.git
$ cd <repo-name>  
$ git remote add upstream https://github.com/Utkarshn10/Focusly
```

- Оновіть ваш локальний репозиторій перед початком роботи.

```
$ git remote update  
$ git checkout <branch-name>  
$ git rebase upstream/<branch-name>  
```

## Нова гілка

- Створіть нову гілку. Назвіть гілку так само, як і проблему, над якою ви працюєте.

```
# It will create a new branch with name Branch_Name and will switch to that branch 
$ git checkout -b branch_name  
```

## Робота над поставленим завданням

- Завершіть роботу
- Додайте потрібні файли/папки

```
# To add all new files to branch Branch_Name  
$ git add .  

# To add only a few files to Branch_Name
$ git add <some files>
```


## Закомітьте зміни

- Зробіть новий комітю

```
# This message get associated with all files you have changed  
$ git commit -m "message"  
```

## Pull Request

- Перейдіть до вашого репозиторію в браузері та натисніть "compare and pull request". Додайте заголовок та опис до вашого pull request, що поясноє ваші зміни.
- Натисніть на "створити pull request"

  
