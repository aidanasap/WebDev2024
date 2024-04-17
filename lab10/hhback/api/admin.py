from django.contrib import admin

# Register your models here.
from .models import Company, Vacancy

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'city','address')
    search_fields = ('name',)

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'salary', 'company')
    search_fields = ('name', 'company')