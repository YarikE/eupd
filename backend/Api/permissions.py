from rest_framework import permissions
from .models import Profile


# Права Администрации
class AdministrOrNoPermiss(permissions.BasePermission):
    def has_permission(self, request, view):
        try:
            profile = Profile.objects.get(user=request.user)
            if profile.permition_id.id == 1:
                return True
        except:
            return False


# Права Клинера
class ClinerOrNoPermiss(permissions.BasePermission):
    def has_permission(self, request, view):
        try:
            profile = Profile.objects.get(user=request.user)
            if profile.permition_id.id == 3:
                return True
        except:
            return False


# Права Квартального
class QuarterlyOrNoPermiss(permissions.BasePermission):
    def has_permission(self, request, view):
        try:
            profile = Profile.objects.get(user=request.user)
            if profile.permition_id.id == 4:
                return True
        except:
            return False