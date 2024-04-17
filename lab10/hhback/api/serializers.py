from rest_framework import serializers

from .models import Company, Vacancy


class CompanySerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    city = serializers.CharField(max_length=255)
    address = serializers.CharField()

    class Meta:
        model = Company
        fields = ("name", "description", "city", "address")


class VacancySerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = serializers.CharField()

    class Meta:
        model = Vacancy
        fields = ("name", "description", "salary", "company")
