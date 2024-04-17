from django.urls import path


urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/',vacancy_list),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top-ten/', top_ten_vacancies),
]