from django.shortcuts import get_object_or_404, render, redirect
from .models import List, Product
from .forms import ListForm, ProductForm

def view_index(request):
    form = ListForm()
    if request.method == "POST":
        form = ListForm(request.POST)
        if form.is_valid():
            new_list = form.save()
            return redirect(List.objects.last())
        else:
            form = ListForm()

    return render(request, "mygrocerylist/index.html", {"form": form})

def view_list(request, id):
    list = get_object_or_404(List, pk=id)
    form = ProductForm()
    if request.method == "POST":
        form = ProductForm(request.POST)
        if form.is_valid():
            new_product = form.save()
        else:
            form = ProductForm()

    return render(request, "mygrocerylist/details.html", {"list": list, "form": form})
