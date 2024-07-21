import sys
import requests
from data_handler import read_json_file
from image_handler import fetch_image, resize_image
from gui import setup_gui

def main():
    # Chemin du fichier JSON
    male_pretenders_file_path = '../data/male-pretenders.json'
    female_pretenders_file_path = '../data/female-pretenders.json'

    # Lire le fichier JSON
    try:
        data = read_json_file(male_pretenders_file_path)
        data.extend(read_json_file(female_pretenders_file_path))
    except FileNotFoundError as e:
        print(e)
        sys.exit(1)

    # Télécharger et redimensionner les images
    images = []
    for item in data:
        url = item['url']
        try:
            image = fetch_image(url)
            resized_image = resize_image(image)  # Redimensionner l'image
            images.append(resized_image)
        except requests.RequestException as e:
            print(f"Erreur lors du téléchargement de l'image depuis {url}: {e}")

    # Configurer et afficher l'interface graphique
    setup_gui(images)

if __name__ == "__main__":
    main()
