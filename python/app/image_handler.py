import requests
from io import BytesIO
from PIL import Image

def fetch_image(url):
    response = requests.get(url)
    response.raise_for_status()
    return Image.open(BytesIO(response.content))


def resize_image(image, max_width=300, max_height=300):
    original_width, original_height = image.size
    ratio_width = max_width / original_width
    ratio_height = max_height / original_height
    ratio = min(ratio_width, ratio_height)
    new_width = int(original_width * ratio)
    new_height = int(original_height * ratio)
    return image.resize((new_width, new_height), Image.ADAPTIVE)
