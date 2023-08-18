import segno
import hashlib
from rest_framework import views
from rest_framework import generics
from django.shortcuts import render
from rest_framework import response
from rest_framework import permissions
from django.contrib.auth.models import User
from .models import User, Complaint, News, Profile, Permition
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .permissions import AdministrOrNoPermiss, ClinerOrNoPermiss, QuarterlyOrNoPermiss
from .models import Permition, Profile, Trash, TrashOrganizations, Request, ComplaintStatus, RequsetStatus
from .serializers import TrashSerializer, NewsSerializer, TrashOrganizationsSerializer, RequestSerializer, ComplaintSerializer


# Хэш для мусорных баков
def hash_string(string):
    hasher = hashlib.sha256()
    hasher.update(string.encode('utf-8'))
    hash_value = hasher.hexdigest()
    return hash_value


# Отображение QR мусорки
class QrGenAPIView(views.APIView):

    def get(self, request):
        address_hash = request.GET.get('address_hash')
        profile = Profile.objects.get(user=request.user)
        if profile.permition_id.id == 1:
            img = segno.make_qr(address_hash)
            http_response = HttpResponse(content_type="image/png")
            img.save(http_response, 'PNG')
            return http_response
        return response.Response({"status": "bad"})


# Список мусорок
class TrashListAPIView(generics.ListAPIView):
    serializer_class = TrashSerializer
    queryset = Trash.objects.all()
    permission_classes = [AdministrOrNoPermiss, ]


# Добавление мусорки
class CreateTrash(views.APIView):

    def post(self, request):
        address = request.POST.get('address')
        organization = request.POST.get('organization')
        address_hash = hash_string(address)
        new_trash = Trash.objects.create(address=address, address_hash=address_hash, organization=organization)
        new_trash.save()
        return response.Response({"status": "good"})

    permission_classes = [AdministrOrNoPermiss, ]


# Список Организфций по контролю мусорок
class TrashOrganizations(generics.ListAPIView):
    serializer_class = TrashOrganizationsSerializer
    queryset = TrashOrganizations.objects.all()
    permission_classes = [AdministrOrNoPermiss, ]


# Список заявок на уборку
class RequestListAPIView(generics.ListAPIView):
    queryset = Request.objects.all()
    serializer_class = RequestSerializer
    permission_classes = [ClinerOrNoPermiss, ] 


# Список Жалоб
class ComplantListAPIView(generics.ListAPIView):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer
    permission_classes = [ClinerOrNoPermiss, ]

# Информация о юзере
class UserAPIView(views.APIView):

    def get(self, requset):
        user_profile = Profile.objects.get(user=requset.user)
        return response.Response(
            {
                'user_id': requset.user.id,
                'user_name': requset.user.username,
                'raiting': user_profile.raiting,
                'eco_scores': user_profile.eco_scores,
            }
        )



# Создание жалобы
class ComplaintCreateAPIView(views.APIView):

    def post(self, request):
        user_id = request.POST.get('user_id')
        cords = request.POST.get('cords') #координаты
        rate = 0
        text = request.POST.get('text')
        air = request.POST.get('air')
        green = request.POST.get('green')
        urban = request.POST.get('urban')
        clear = request.POST.get('clear')
        water = request.POST.get('water')
        complaint_status = ComplaintStatus.objects.get(id=1)
        photo = request.FILES['photo']

        new_complaint = Complaint.objects.create(
            user_id_id=user_id,
            cords=cords,
            rate=rate,
            text=text,
            air=air,
            green=green,
            urban=urban,
            clear=clear,
            water=water,
            complaint_status=complaint_status,
            photo=photo
        )
        new_complaint.save()

        return response.Response({'status': 'good'})


# Переход из жалобы в запрос на уборку
class ComplainToRequestAPIView(views.APIView):

    def post(self, request):
        try: 
            complaint_id = request.POST.get('complaint_id')
            
            complaint = Complaint.objects.get(id=complaint_id)
            status = RequsetStatus.objects.get(id=1)
            new_request = Request.objects.create(
                complain_id=complaint,
                status_id=status,

            )
            new_request.save()

            return response.Response({'status': 'good'})
        except:
            return response.Response({'status': 'bad'})

    permission_classes = [QuarterlyOrNoPermiss, ]


# Взятие запроса на уборку в работу
class ChangeRequestStatusToWorkAPIView(views.APIView):

    def post(self, request):
        request_id = request.POST.get('request_id')
        request_obj = Request.objects.get(id=request_id)
        request_obj.status_id = RequsetStatus.objects.get(id=2)
        request_obj.save()

    permission_classes = [ClinerOrNoPermiss, ]


class ChangeRequestStatusTommWorkAPIView(views.APIView):

    def post(self, request):
        request_id = request.POST.get('request_id')
        request_obj = Request.objects.get(id=request_id)
        request_obj.status_id = RequsetStatus.objects.get(id=3)
        request_obj.save()

    permission_classes = [ClinerOrNoPermiss, ]

# Новости 
class NewsListAPIView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = [permissions.IsAuthenticated, ]


# Регистрация пользователя
@csrf_exempt
def registration(request):
    if request.method == 'POST':
        try:
            username = request.POST.get('username')
            password = request.POST.get('password')
            raiting: int = 3
            eco_scores: int = 0
            permition_id = Permition.objects.get(id=2)

            new_user = User.objects.create_user(username=username, password=password)


            users_profile = Profile(
                user=new_user, 
                eco_scores=eco_scores, 
                raiting=raiting, 
                permition_id=permition_id
            )
            users_profile.save()
            
            return JsonResponse({'status': 'good'})
        except:
            return JsonResponse({'status': 'bad'})
    else:
        return JsonResponse({'status': 'bad'})
        
        