from django.http import JsonResponse
from django.http import Http404
from django.shortcuts import get_object_or_404
from api.models import Company, Vacancy



def companies_list(request):
    companies = Company.objects.all()
    return JsonResponse([item.to_json() for item in companies], safe=False)

def company_detail(request, id):
    try:
        company = get_object_or_404(Company, id=id)
        return JsonResponse(company.to_json(), safe=False)
    except Http404:
        return JsonResponse({"code": 404})
    

def company_vacancies(request, id):
    try:
        company = get_object_or_404(Company, id=id)
        vacancies = company.vacancies.all()
        return JsonResponse([item.to_json() for item in vacancies], safe=False)
    except Http404:
        return JsonResponse({"code": 404})

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    return JsonResponse([item.to_json() for item in vacancies], safe=False)

def vacancy_detail(request, id):
    try:
        vacancy = get_object_or_404(Vacancy, id=id)
        return JsonResponse(vacancy.to_json(), safe=False)
    except Http404:
        return JsonResponse({"code": 404})

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    return JsonResponse([item.to_json() for item in vacancies], safe=False)