import requests
from django.shortcuts import render


# Create your views here.
def generate_random_advice(request):
    response = requests.get("https://api.adviceslip.com/advice").json()
    context = {
        "advice_id": response["slip"]["id"],
        "advice": response["slip"]["advice"],
    }
    return render(request, "advice/index.html", context)
