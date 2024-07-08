from django.shortcuts import get_object_or_404, render, redirect
from .models import List


def view_index(request):
    if request.method == "POST":
        return new_list()

    return render(request, "mygrocerylist/index.html")


def new_list():
    return redirect(List.objects.create())


def view_list(request, id):
    list = get_object_or_404(List, pk=id)
    return render(request, "mygrocerylist/details.html", {"list": list})
