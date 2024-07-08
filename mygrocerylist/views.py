from django.shortcuts import get_object_or_404, render

from django.http import HttpResponse
from django.template import loader
from .models import List


def start(request):
    lists = List.objects.all()
    context = {
        "lists": lists
    }
    return render(request, 'mygrocerylist/index.html', context)


def details(request, list_id):
    list = get_object_or_404(List, pk=list_id)
    return render(request, "mygrocerylist/details.html", {"list": list})
