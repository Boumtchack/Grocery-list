from django.shortcuts import get_object_or_404, render, redirect
from .models import List, User
from .forms import ListForm, ProductForm, UserForm


def view_index(request):
    list_form = ListForm()
    user_form = UserForm()

    if request.method == "POST":
        type = request.GET["type"]
        if type == "list":
            list_form = ListForm(request.POST)
            if list_form.is_valid():
                return redirect(list_form.save())
        elif type == "user":
            user_form = UserForm(request.POST)
            if user_form.is_valid():
                return redirect(user_form.save())

    return render(
        request,
        "mygrocerylist/index.html",
        {"list_form": list_form, "user_form": user_form},
    )


def view_user(request, id):
    user = get_object_or_404(User, pk=id)

    form = ListForm()
    if request.method == "POST":
        form = ListForm(request.POST)
        if form.is_valid():
            list = form.save(commit=False)
            list.user_id = user.id
            return redirect(list.save())

    lists = List.objects.filter(user=user)

    return render(
        request, "mygrocerylist/user.html", {"user": user, "form": form, "lists": lists}
    )


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
