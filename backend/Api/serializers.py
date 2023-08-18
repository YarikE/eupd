from rest_framework import serializers
from .models import User, Trash, News, TrashOrganizations, Request, Complaint


class TuserSerializer (serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'password')


class TrashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trash
        fields = ('id', 'address', 'address_hash')


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('id', 'title', 'description', 'address', 'photo')


class TrashOrganizationsSerializer(serializers.ModelSerializer):
    class Meta:
        models = TrashOrganizations
        fields = ('id', 'organization')


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        models = Request
        fields = ('id', 'complain_id', 'status_id', 'last_update')


class ComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        models = Complaint
        fields = ('id', 'user_id', 'cords', 'rate', 'text', 'air', 'green', 'urban', 'clear', 'water', 'complaint_status', 'photo', 'address')