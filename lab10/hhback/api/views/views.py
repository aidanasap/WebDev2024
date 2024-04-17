import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


# CRUD  =>  create / read / update / delete

def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        category = Company.objects.create(name=data.get("name"))
        return JsonResponse(category.to_json(), status=201)


def company_detail(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)

    if request.method == "GET":
        serializer = CompanySerializer(company)
        # return JsonResponse(category.to_json())
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        company.name = data.get("name")
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({"deleted": True})


def company_vacancies(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)
    vacancies_json = [v.to_json() for v in company.vacancies.all()]

    return JsonResponse(vacancies_json, safe=False)


@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        category = Vacancy.objects.create(name=data.get("name"))
        return JsonResponse(category.to_json(), status=201)


@csrf_exempt
def vacancy_detail(request, pk=None):
    try:
        vacancy = Vacancy.objects.get(id=pk)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)

    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        # return JsonResponse(category.to_json())
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        vacancy.name = data.get("name")
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({"deleted": True})


def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    return JsonResponse([item.to_json() for item in vacancies], safe=False)