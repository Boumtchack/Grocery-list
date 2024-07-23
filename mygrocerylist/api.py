from .models import List, User, Product
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json


def api_get(cls, id):
    obj = cls.objects.filter(id=id).first()
    if obj is None:
        return JsonResponse({"error": "Not found"}, status=404)

    return JsonResponse(obj.to_json())


def api_delete(cls, id):
    obj = cls.objects.filter(id=id).first()
    if obj is None:
        return JsonResponse({"error": "Not found"}, status=404)

    obj.delete()
    return JsonResponse({"success": True})


def post_user(request, _):
    try:
        body = json.loads(request.body)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
    name = body.get("name")

    if not name:
        return JsonResponse({"error": "name is required"}, status=400)

    user = User(name=name)
    user.save()

    return JsonResponse(user.to_json())


def post_list(request, _):
    try:
        body = json.loads(request.body)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
    title = body.get("title")
    user_id = body.get("user")

    if not title:
        return JsonResponse({"error": "title is required"}, status=400)

    user = None
    if user_id:
        user = User.objects.filter(id=user_id).first()
        if user is None:
            return JsonResponse({"error": "user not found"}, status=404)

    lst = List(title=title, user=user)
    lst.save()

    return JsonResponse(lst.to_json())


def post_product(request, _):
    try:
        body = json.loads(request.body)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
    name = body.get("name")
    amount = body.get("amount")
    list_id = body.get("list")

    if not name:
        return JsonResponse({"error": "name is required"}, status=400)

    lst = List.objects.filter(id=list_id).first()
    if lst is None:
        return JsonResponse({"error": "list not found"}, status=404)

    product = Product(name=name, amount=amount, list=lst)
    product.save()

    return JsonResponse(product.to_json())


handlers = {
    "user": {
        "get": lambda request, id: api_get(User, id),
        "post": post_user,
        "delete": lambda request, id: api_delete(User, id),
    },
    "list": {
        "get": lambda request, id: api_get(List, id),
        "post": post_list,
        "delete": lambda request, id: api_delete(List, id),
    },
    "product": {
        "get": lambda request, id: api_get(Product, id),
        "post": post_product,
        "delete": lambda request, id: api_delete(Product, id),
    },
}


@csrf_exempt
def view_api(request, resource, id=None):
    try:
        return handlers[resource][request.method.lower()](request, id)
    except KeyError:
        return JsonResponse({"error": "Not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
