from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from hhback.api.models import Company, Vacancy
from hhback.api.serializers import CompanySerializer, VacancySerializer

@api_view(["GET", "POST"])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE"])
def company_detail(request, pk):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        company.delete()
        return Response({"deleted": True})


def company_vacancies(request, pk):
    try:
        company = Company.objects.get(pk)
    except Company.DoesNotExist as e:
        return Response({"error": str(e)}, status = status.HTTP_400_BAD_REQUEST)
    vacancy_json = [v.to_json() for v in company.vacancies.all()]
    return JsonResponse(vacancy_json, safe=False)

@api_view(["GET", "POST"])
def vacancy_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer  = VacancySerializer(vacancies, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = VacancySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT","DELETE"])
def vacancy_detail(request, pk):
    try:
        vacancy = Vacancy.objects.get(id=pk)
    except Vacancy.DoesNotExist as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = VacancySerializer(vacaciesdata=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response({"error"})

