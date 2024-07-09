from django.shortcuts import get_object_or_404, render, redirect
from .models import List, Product
from .forms import ListForm, ProductForm

def view_index(request):
    form = ListForm()
    if request.method == "POST":
        form = ListForm(request.POST)
        if form.is_valid():
            return redirect(form.save())
        else:
            form = ListForm()

    return render(request, "mygrocerylist/index.html", {"form": form})

def view_list(request, id):
    list = get_object_or_404(List, pk=id)
    form = ProductForm()
    if request.method == "POST":
        form = ProductForm(request.POST)
        if form.is_valid():
            product = form.save(commit=False)
            product.list_id = list.id
            product.save()
        else:
            form = ProductForm()

    return render(request, "mygrocerylist/details.html", {"list": list, "form": form})
