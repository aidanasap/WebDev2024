from django.contrib import admin
from .models import Vacancy, Company

class CompanyAdmin(admin.ModelAdmin):
    pass

class VacancyAdmin(admin.ModelAdmin):
    pass

admin.site.register(Company, CompanyAdmin)
admin.site.register(Vacancy, VacancyAdmin)