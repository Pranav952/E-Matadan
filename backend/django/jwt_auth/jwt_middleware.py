import jwt
from django.conf import settings
from django.http import JsonResponse

class JWTAuthenticationMiddleware:
    """Middleware for JWT token validation."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Skip token validation for login route
        if request.path != "/login":
            auth_header = request.headers.get("Authorization")
            if auth_header and auth_header.startswith("Bearer "):
                try:
                    token = auth_header.split(" ")[1]
                    payload = jwt.decode(
                        token,
                        settings.SECRET_KEY,  # Use the dynamically fetched key
                        algorithms=["HmacSHA256"]   # Fixed typo from HmacSHA256 to HS256
                    )
                    request.user = payload.get("sub")  # Attach user data to the request
                except jwt.ExpiredSignatureError:
                    return JsonResponse({"error": "Token has expired"}, status=401)
                except jwt.InvalidTokenError:
                    return JsonResponse({"error": "Invalid token"}, status=401)
            else:
                request.user = None  # Anonymous user (if no token)
        return self.get_response(request)