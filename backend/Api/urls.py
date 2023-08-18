from django.urls import path
from .views import registration, QrGenAPIView, TrashListAPIView, CreateTrash, TrashOrganizations, \
    ComplaintCreateAPIView, ComplainToRequestAPIView, ChangeRequestStatusToWorkAPIView, ComplantListAPIView, \
    NewsListAPIView, RequestListAPIView, UserAPIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

urlpatterns = [

    # список организаций, отвечающих за мусорку GET 
    path('trash-organizations/', TrashOrganizations.as_view()),

    # список адресов мусорок GET 
    path('trash-list/', TrashListAPIView.as_view()),

    # список жалобов GET 
    path('complaint-list/', ComplantListAPIView.as_view()),

    # Список новостей GET 
    path('news-list/', NewsListAPIView.as_view()),

    # Список запросов на уборку GET 
    path('request-list/', RequestListAPIView.as_view()),

    # Данные о пользователе
    path('get-user-info/', UserAPIView.as_view()),

    # создание мусорки POST 

    # address, 
    # organization
    path('trash-create/', CreateTrash.as_view()),

    # генерация qr по хэшу адреса POST
    # address_hash
    path('qr-gen/', QrGenAPIView.as_view()),

    # Создать новую жалобу
    #   user_id: int
    #   cords: Array<float, float>
    #   text: str
    #   air: bool
    #   green: bool
    #   urban: bool
    #   clear: bool
    #   water: bool
    #   photo: file
    path('add-complaint/', ComplaintCreateAPIView.as_view()),

    # Создание запроса на уборку

    # complaint_id (id жалобы)
    path('complaint-to-request/', ComplainToRequestAPIView.as_view()),

    # Взятие запроса на уборку в работу
    # 
    # request_id int
    path('request-work/', ChangeRequestStatusToWorkAPIView.as_view()),

    # регистраця
    #   username: str
    #   password: str
    path('registration/', registration),

    # линки для jwt токена

    # для логина, чтобы получить access и refresh token
    path('v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # вызывать каждые n минут или по каждому переходу на страничку
    path('v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # отправляем access токен, если он валидный - ничего не возвращает, а иначе возвращает ошибку
    path('v1/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
