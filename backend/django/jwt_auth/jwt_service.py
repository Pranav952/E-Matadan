import requests


def fetch_jwt_key():
    """Fetch the JWT key from the Spring Boot service."""
    try:
        response = requests.get("http://localhost:8080/api/key")
        if response.status_code == 200:
            return response.text.strip()  # Return the key
        else:
            return None
    except Exception as e:
        
        return None
