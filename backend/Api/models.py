from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField


# Пользователи
class Profile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    permition_id = models.ForeignKey('Permition', on_delete=models.CASCADE, null=True)
    raiting = models.IntegerField(null=False, default=3)
    eco_scores = models.IntegerField(null=False, default=0)


# Права
class Permition(models.Model):

    name = models.CharField(max_length=50)


# Мусорки
class Trash(models.Model):

    address = models.CharField(max_length=100)
    address_hash = models.CharField(max_length=255)
    organization = models.ForeignKey('TrashOrganizations', on_delete=models.CASCADE, null=True)


# Ответственные за конкретную мусорку
class TrashOrganizations(models.Model):

    organization = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.organization


# Жалобы
class Complaint(models.Model):

    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    cords = ArrayField(models.FloatField(null=False)) #координаты
    rate = models.FloatField(null=True)
    text = models.CharField(max_length=255, default=False, null=True)
    air = models.BooleanField(null=True, default=False)
    green = models.BooleanField(null=True, default=False)
    urban = models.BooleanField(null=True, default=False)
    clear = models.BooleanField(null=True, default=False)
    water = models.BooleanField(null=True, default=False)
    complaint_status = models.ForeignKey('ComplaintStatus', on_delete=models.CASCADE, default='')
    photo = models.ImageField(upload_to='photos/', null=True)


# Статус 
class ComplaintStatus(models.Model):

    status = models.CharField(max_length=50)


# Запрос на уборку
class Request(models.Model):

    complain_id = models.ForeignKey(Complaint, on_delete=models.CASCADE)
    status_id = models.ForeignKey('RequsetStatus', on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now=True)


# Статус запроса на уборку
class RequsetStatus(models.Model):

    name = models.CharField(max_length=255, null=False, default='')
    

# Новости
class News(models.Model):

    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    adress = models.CharField(max_length=100)
    photo = models.CharField(max_length=255, null=True)

    def __str__(self) -> str:
        return self.title



# from datetime import timedelta, datetime
# from django.db.models.signals import post_save
# from django.dispatch import receiver
# # Обновление типа запроса на уборку, если он "провисел" в открытых задачах сутки (24 часа)
# @receiver(post_save, sender=Request)
# def update_request_status(sender, instanse, **kwargs):
#     if datetime.now() - instanse.last_update > timedelta(days=1) and instanse.last_update.name == 'В работе':
#         current_clean_request = RequsetStatus.objects.get(name='Передано в администрацию')
#         instanse.last_update = current_clean_request
#         instanse.save()