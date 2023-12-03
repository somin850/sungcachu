from django.http import JsonResponse
from django.shortcuts import render
from .models import Menu, Franchise, Recommend
import json

def to_cafe_main(request):
    menus = Menu.objects.all()
    franchise_info = request.GET.get('franchise')
    if franchise_info:
        try:
            franchise_data = json.loads(franchise_info)

            return render(request, 'to_cafe_main/to_cafe_main.html', {"menus": menus,  "franchise_object": franchise_data})
        except json.JSONDecodeError as e:
            print(f'JSON decoding error: {e}')

    return render(request, 'to_cafe_main/to_cafe_main.html', {"menus": menus})


def to_main_cafe(request):
    menus = Menu.objects.all()
    franchises = Franchise.objects.all()
    recommends = Recommend.objects.all()
    return render(request, 'to_main_cafe/to_main_cafe.html', {"menus" : menus,  "franchises": franchises, "recommends": recommends})

def to_drink(request):
    menus = Menu.objects.all()
    franchises = Franchise.objects.all()

    drink_info = request.GET.get('drink_type')
    return render(request, 'to_drink/to_drink.html', {"menus" : menus,  "franchises": franchises, "drink_type": drink_info})

def to_feature(request):
    recommends = Recommend.objects.all()
    franchises = Franchise.objects.all()

    menu_info = request.GET.get('menu')
    if menu_info:
        try:
            menu_data = json.loads(menu_info)

            return render(request, 'to_feature/to_feature.html',
                          {"recommends": recommends, "franchises": franchises,"menu_object": menu_data})
        except json.JSONDecodeError as e:
            print(f'JSON decoding error: {e}')

    return render(request, 'to_feature/to_feature.html', {"recommends": recommends,"franchises": franchises})



