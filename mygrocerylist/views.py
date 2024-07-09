from django.shortcuts import get_object_or_404, render, redirect
from .models import List, User, Product
from .forms import ListForm, ProductForm, UserForm, SearchForm


def view_index(request):
    user_form = UserForm()
    search_form = SearchForm()
    if request.method == "POST":
        type = request.GET["type"]
        if type == "new_user":
            user_form = UserForm(request.POST)
            if user_form.is_valid():
                return redirect(user_form.save())
        elif type == "search_user":
                search_form = SearchForm(request.POST)
                if search_form.is_valid():
                    code = search_form.cleaned_data["code"]
                    researched_user = User.objects.filter(id__contains=code)
                    if researched_user:
                        return redirect(researched_user[0])
    return render(
        request,
        "mygrocerylist/index.html",
        {"user_form": user_form, "search_form": search_form}
    )

def view_user(request, id):
    user = get_object_or_404(User, pk=id)
    form = ListForm()
    search_form = SearchForm()
    if request.method == "POST":
        type = request.GET["type"]
        if type == "list":
            list_form = ListForm(request.POST)
            if list_form.is_valid():
                list = form.save(commit=False)
                list.user_id = user.id
                return redirect(list.save())
        elif type == "search":
                search_form = SearchForm(request.POST)
                if search_form.is_valid():
                    code = search_form.cleaned_data["code"]
                    researched_list = List.objects.filter(id__contains=code)
                    if researched_list:
                        return redirect(researched_list[0])

    lists = List.objects.filter(user=user)

    return render(
        request, "mygrocerylist/user.html", {"user": user, "form": form, "lists": lists, "search_form": search_form}
    )

def view_list(request, id):
    list = get_object_or_404(List, pk=id)
    products = list.product_set.all()
    form = ProductForm()
    if request.method == "POST":
        type = request.GET["type"]
        if type == 'return':
            return redirect("../")
        if type == 'add_product':
            form = ProductForm(request.POST)
            if form.is_valid():
                product = form.save(commit=False)
                product.list_id = list.id
                product.save()
            else:
                form = ProductForm()
        elif type == 'delete_list':
            list.delete()
            return redirect("../")
        elif type == 'delete_product':
            form = ProductForm(request.POST)
    return render(request, "mygrocerylist/details.html", {"list": list, "form": form, "products": products})

def view_product(request, id):
    product = get_object_or_404(Product, pk=id)
    if request.method == "POST":
        product.delete()
    list = get_object_or_404(List, pk=product.list.id)
    return redirect(list)
