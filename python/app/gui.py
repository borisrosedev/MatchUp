import tkinter as tk
from PIL import ImageTk

def create_image_label(canvas, frame, image):
    # Créer une image Tkinter PhotoImage à partir de l'image PIL
    photo = ImageTk.PhotoImage(image)
    
    # Ajouter l'image au canvas dans un cadre
    label = tk.Label(frame, image=photo)
    label.photo = photo  # Conserver une référence pour éviter le garbage collection
    label.pack()

    # Placer le label au canvas
    canvas.create_window((0, 0), window=frame, anchor='nw')

def setup_gui(images):
    root = tk.Tk()
    root.title("Affichage des Images depuis URLs")

    # Créer un canvas pour le défilement
    canvas = tk.Canvas(root)
    canvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

    # Ajouter une barre de défilement verticale
    scrollbar = tk.Scrollbar(root, orient='vertical', command=canvas.yview)
    scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
    
    # Lier le canvas et la scrollbar
    canvas.config(yscrollcommand=scrollbar.set)

    # Créer un cadre dans le canvas pour contenir les images
    frame = tk.Frame(canvas)
    
    # Ajouter le cadre au canvas
    canvas.create_window((0, 0), window=frame, anchor='nw')

    # Redimensionner le canvas pour s'adapter au contenu
    def on_frame_configure(event):
        canvas.configure(scrollregion=canvas.bbox('all'))
    
    frame.bind('<Configure>', on_frame_configure)

    # Afficher toutes les images dans le cadre
    for image in images:
        create_image_label(canvas, frame, image)

    root.mainloop()
