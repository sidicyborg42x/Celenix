from django.http import JsonResponse

def home_page_data(request):
    # Mock data - typically this would come from a database
    products = [
        {"id": 1, "name": "Vintage Camera", "price": 120.00, "image": "https://via.placeholder.com/150"},
        {"id": 2, "name": "Leather Jacket", "price": 250.50, "image": "https://via.placeholder.com/150"},
        {"id": 3, "name": "Mechanical Keyboard", "price": 85.00, "image": "https://via.placeholder.com/150"},
    ]
    return JsonResponse({"products": products})